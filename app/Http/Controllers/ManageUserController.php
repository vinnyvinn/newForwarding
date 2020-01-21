<?php

namespace App\Http\Controllers;

use App\Department;
use App\Mail\UserCreated;
use App\Role;
use App\Transformers\RoleTransformer;
use App\Transformers\TransportDocTransformer;
use App\Transformers\UserTransformer;
use App\TransportDoc;
use App\User;
use Esl\helpers\Constants;
use Esl\Traits\TablePresentableTrait;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Mail;
use League\Fractal\Manager;
use League\Fractal\Resource\Collection;

class ManageUserController extends Controller
{
    use TablePresentableTrait;

    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return LengthAwarePaginator
     */
    public function index(Request $request)
    {
        if ($request->wantsJson()) {
            $with = ['department'];

            $model = app(User::class);

            $collection = $this->presentWithoutPagination($model, $request->all(), $with);

            $transformedResult = new Collection($collection, new UserTransformer());

            $data = (new Manager())->createData($transformedResult)->toArray()['data'];

            return $this->paginate($data);
        }

        return view('manage-users.index')
            ->withUsers(User::with(['department'])->get());
    }

    /**
     * @param Request $request
     * @return mixed
     */
    public function searchUser(Request $request)
    {
        $searchItem = $request->get('q');
        $limit = $request->get('limit');

        if($limit){
            return User::take(100)
                ->get(['id', 'name','email']);
        }

        return User::where('name', 'like', '%' . $searchItem . '%')
            ->get(['id', 'email']);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        return view('manage-users.create')
            ->withDepartments(Department::all()->sortBy('name'))
            ->withRoles(Role::all()->sortBy('name'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return Response
     */
    public function store(Request $request)
    {
        $data = $request->all();
        $user = User::create([
            'name' => $data['name'],
            'title' => $data['title'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);

        Mail::to(['email' => $data['email']])
            ->cc(['kituyi@gmail.com'])
            ->send(new UserCreated(['name' => $data['name'],
                'password' => 'Contact IT for password',
                'email' => $data['email']]));

        Mail::to(['email' => 'evans.ngala@esl-eastafrica.com'])
            ->cc(['kituyi@gmail.com.com'])
            ->send(new UserCreated(['name' => $data['name'],
                'password' => $data['password'],
                'email' => $data['email']]));

        $user->roles()->attach($data['role']);

        return redirect('/manage-users');
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return Response
     */
    public function edit($id)
    {
        return view('manage-users.edit')
            ->withUser(User::findOrFail($id))
            ->withDepartments(Department::all()->sortBy('name'))
            ->withRoles(Role::all()->sortBy('name'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param int $id
     * @return Response
     */
    public function update(Request $request, $id)
    {

        $data = $request->all();
        $user = User::findOrFail($id);

        if (count($user->roles) > 0) {
            $user->roles()->detach($user->roles->first()->id);
        }

        $user->update([
                'name' => $request->get('name'),
                'title' => $request->get('title'),
                'email' => $request->get('email'),
                'password' => bcrypt($request->get('password'))
            ]
        );

        Mail::to(['email' => $data['email']])
            ->cc(['marvincollins114@gmail.com'])
            ->send(new UserCreated(['name' => $data['name'],
                'password' => 'Contact IT for password',
                'email' => $data['email']]));

        Mail::to(['email' => 'evans.ngala@esl-eastafrica.com'])
            ->cc(['kituyiv@gmail.com'])
            ->send(new UserCreated(['name' => $data['name'],
                'password' => $data['password'],
                'email' => $data['email']]));

        $user->roles()->attach($data['role']);

        return redirect('/manage-users');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Request $request
     * @param int $id
     * @return Response
     */
    public function destroy(Request $request, $id)
    {
        User::findOrFail($id)->delete();

        if ($request->expectsJson()) {
            return response(['message' => 'User deleted successfully'], 200);
        }
        return redirect('/manage-users');

    }

    public function createRole()
    {
        return view('manage-users.roles')
            ->withPermissions(Constants::PERMISSIONS);
    }

    public function storeRole(Request $request)
    {
        $permissions = array_map(function ($permission) {
            return $permission = true;
        }, $request->permissions);

        Role::create([
            'name' => $request->name,
            'slug' => str_slug($request->name),
            'permissions' => json_encode($permissions)
        ]);

        return redirect('/all-roles')
            ->withRoles(Role::all()->sortBy('name'));
    }

    public function roles(Request $request)
    {
        if ($request->expectsJson()) {
            $with = [];

            $model = app(Role::class);

            $collection = $this->presentWithoutPagination($model, $request->all(), $with);

            $transformedResult = new Collection($collection, new RoleTransformer());

            $data = (new Manager())->createData($transformedResult)->toArray()['data'];

            return $this->paginate($data);
        }

        return view('manage-users.index-roles')
            ->withRoles(Role::all()->sortBy('name'));
    }

    public function deleteRole(Request $request, $id)
    {
        Role::findOrFail($id)->delete();

        if ($request->expectsJson()) {
            return response(['message' => 'Role deleted successfully'], 200);
        }

        return view('manage-users.index-roles')
            ->withRoles(Role::all()->sortBy('name'));

    }
}
