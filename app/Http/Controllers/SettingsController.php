<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateSettingRequest;
use App\Http\Requests\UpdateSettingRequest;
use App\Repositories\CompanyRepository;
use App\Repositories\SettingRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Pagination\LengthAwarePaginator;
use Laracasts\Flash\Flash;
use Prettus\Repository\Criteria\RequestCriteria;
use Prettus\Repository\Exceptions\RepositoryException;
use Prettus\Validator\Exceptions\ValidatorException;

class SettingsController extends AppBaseController
{

    /** @var  CompanyRepository */
    private $settingRepository;

    public function __construct(SettingRepository $settingRepository)
    {
        $this->settingRepository = $settingRepository;
    }

    /**
     * @param Request $request
     * @return JsonResponse
     * @throws ValidatorException
     */
    public function saveLogo(Request $request)
    {
        $imageName = time() . '.' . $request->file->getClientOriginalExtension();

        $request->file->move(public_path('images/logo'), $imageName);

        $imageUrl = 'images/logo/' . $imageName;

        $this->settingRepository->updateOrCreate([
                'setting_name' => 'logo_url'
            ],
            [
            'setting_name' => 'logo_url',
            'setting_value' => $imageUrl,
            'setting_type' => 'company_info',
        ]);

        return response()->json(
            [
                'data' => [
                    'msg' => 'You have successfully upload file.',
                    'url' => $imageUrl
                ]
            ]
        );

    }

    public function saveCompanyInto(Request $request)
    {
        $data = [
            'email_signature' => $request->get('email_signature') ?: '',
            'company_vat' => $request->get('company_vat') ?: '',
            'company_registration' => $request->get('company_registration') ?: '',
            'company_domain' => $request->get('company_domain') ?: '',
            'company_fax' => $request->get('company_fax') ?: '',
            'company_mobile' => $request->get('company_mobile') ?: '',
            'company_phone_2' => $request->get('company_phone_2') ?: '',
            'company_phone' => $request->get('company_phone') ?: '',
            'company_email' => $request->get('company_email') ?: '',
            'company_country' => $request->get('company_country') ?: '',
            'company_state' => $request->get('company_state') ?: '',
            'company_zip_code' => $request->get('company_zip_code') ?: '',
            'company_name' => $request->get('company_name') ?: '',
            'company_legal_name' => $request->get('company_legal_name') ?: '',
            'logo_url' => $request->get('logo_url') ?: '',
            'contact_person' => $request->get('contact_person') ?: '',
            'company_address' => $request->get('company_address') ?: '',
            'company_city' => $request->get('company_city') ?: '',
            'building_name' => $request->get('building_name') ?: '',
            'company_tag_line' => $request->get('company_tag_line') ?: '',
        ];

        return collect($data)->each(function ($setting, $key) {
            $data = [
                'setting_name' => $key,
                'setting_value' => $setting,
                'setting_type' => 'company_info',
            ];
            $this->settingRepository->updateOrCreate(['setting_name' => $key], $data);
        });

    }

    public function getCompanyInfo()
    {
        $companyInfo = collect($this->settingRepository
            ->findWhere(['setting_type' => 'company_info',])
            ->pluck('setting_value','setting_name'));

        return [
            'email_signature' => $companyInfo->get('email_signature') ?: '',
            'company_vat' => $companyInfo->get('company_vat') ?: '',
            'company_registration' => $companyInfo->get('company_registration') ?: '',
            'company_domain' => $companyInfo->get('company_domain') ?: '',
            'company_fax' => $companyInfo->get('company_fax') ?: '',
            'company_mobile' => $companyInfo->get('company_mobile') ?: '',
            'company_phone_2' => $companyInfo->get('company_phone_2') ?: '',
            'company_phone' => $companyInfo->get('company_phone') ?: '',
            'company_email' => $companyInfo->get('company_email') ?: '',
            'company_country' => $companyInfo->get('company_country') ?: '',
            'company_state' => $companyInfo->get('company_state') ?: '',
            'company_zip_code' => $companyInfo->get('company_zip_code') ?: '',
            'company_name' => $companyInfo->get('company_name') ?: '',
            'company_legal_name' => $companyInfo->get('company_legal_name') ?: '',
            'logo_url' => $companyInfo->get('logo_url') ?: '',
            'contact_person' => $companyInfo->get('contact_person') ?: '',
            'company_address' => $companyInfo->get('company_address') ?: '',
            'company_city' => $companyInfo->get('company_city') ?: '',
            'building_name' => $companyInfo->get('building_name') ?: '',
            'company_tag_line' => $companyInfo->get('company_tag_line') ?: '',
        ];

    }

    /**
     * Display a listing of the settings.
     *
     * @param Request $request
     * @return LengthAwarePaginator
     * @throws RepositoryException
     */
    public function index(Request $request)
    {
        $this->settingRepository->pushCriteria(new RequestCriteria($request));
        $companies = $this->settingRepository->all();

        return view('setting.index')
            ->with('setting', $companies);
    }

    /**
     * Show the form for creating a new Company.
     *
     * @return Response
     */
    public function create()
    {
        return view('setting.create');
    }

    /**
     * Store a newly created Company in storage.
     *
     * @param CreateSettingRequest $request
     *
     * @return Response
     * @throws ValidatorException
     */
    public function store(CreateSettingRequest $request)
    {
        $input = $request->all();

        $setting = $this->settingRepository->create($input);

        Flash::success('setting saved successfully.');

        return redirect(route('setting.index'));
    }

    /**
     * Display the specified Company.
     *
     * @param int $id
     *
     * @return Response
     */
    public function show($id)
    {
        $setting = $this->settingRepository->findWithoutFail($id);

        if (empty($setting)) {
            Flash::error('setting not found');

            return redirect(route('setting.index'));
        }

        return view('setting.show')->with('setting', $setting);
    }

    /**
     * Show the form for editing the specified Company.
     *
     * @param int $id
     *
     * @return Response
     */
    public function edit($id)
    {
        $setting = $this->settingRepository->findWithoutFail($id);

        if (empty($setting)) {
            Flash::error('Setting not found');

            return redirect(route('Setting.index'));
        }

        return view('Setting.edit')->with('company', $setting);
    }

    /**
     * Update the specified Company in storage.
     *
     * @param int $id
     * @param UpdateSettingRequest $request
     *
     * @return Response
     * @throws ValidatorException
     */
    public function update($id, UpdateSettingRequest $request)
    {
        $setting = $this->settingRepository->findWithoutFail($id);

        if (empty($setting)) {
            Flash::error('Setting not found');

            return redirect(route('Setting.index'));
        }

        $setting = $this->settingRepository->update($request->all(), $id);

        Flash::success('Setting updated successfully.');

        return redirect(route('Setting.index'));
    }

    /**
     * Remove the specified Company from storage.
     *
     * @param int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        $setting = $this->settingRepository->findWithoutFail($id);

        if (empty($setting)) {
            Flash::error('Setting not found');

            return redirect(route('Setting.index'));
        }

        $this->settingRepository->delete($id);

        Flash::success('Setting deleted successfully.');

        return redirect(route('Setting.index'));
    }
}
