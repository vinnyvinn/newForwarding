<?php

namespace Esl\Traits;

use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Schema;

trait TablePresentableTrait
{
    protected $perPage = 10;

    protected $currentPage = 1;

    protected $numberOfItems;

    /**
     * @param $model
     * @param $request
     * @param null $with
     * @param array $params
     * @return mixed
     */
    public function presentWithoutPagination($model, $request, $with = null, $params = ['*'])
    {
        $table = (clone $model)->first();

        if ($table) {
            $table = $table->getTable();
        }

        $this->setupPagination($request);

        if (isset($request['filter'])) {
            $model = $this->search($model, $request['filter']);
        }

        if (!is_null($with)) {
            $model = $this->with($model, $with);
        }

        $this->numberOfItems = (clone $model)->count();

        if (isset($request['sort'])) {
            $model = $this->sort($model, $request['sort'], $table);
        }

        return $model->skip($this->perPage * ($this->currentPage - 1))->take($this->perPage)->get($params);
    }

    /**
     * @param $model
     * @param $request
     * @param null $with
     * @param array $params
     * @return LengthAwarePaginator
     */
    public function present($model, $request, $with = null, $params = ['*'])
    {
        $collection = $this->presentWithoutPagination($model, $request, $with, $params);

        return $this->paginate($collection);
    }

    /**
     * @param $model
     * @param $request
     * @param null $with
     * @param array $params
     * @return Collection|mixed
     */
    public function presentForExport($model, $request, $with = null, $params = ['*'])
    {
        $this->setupPagination($request);

        if (isset($request['filter'])) {
            $model = $this->search($model, $request['filter']);
        }

        if (!is_null($with)) {
            $model = $this->with($model, $with);
        }

        if (isset($request['sort'])) {
            $model = $this->sort($model, $request['sort'], $params);
        }

        return ($model instanceof Collection) ? $model : $model->get($params);
    }

    /**
     * @param $model
     * @param $query
     * @return mixed
     */
    public function search($model, $query)
    {
        $query = $this->cleanUpFilter($query);

        return $model->search($query, null, true, true);
    }

    /**
     * @param $model
     * @param $sort
     * @param null $table
     * @return mixed
     */
    public function sort($model, $sort, $table = null)
    {
        $orders = explode("|", $sort);

        $order = $orders[0];

        $direction = isset($orders[1]) ? $orders[1] : 'asc';

        if ($table && !Schema::hasColumn($table, $order) && Schema::hasColumn($table, 'created_at')) {
            return $model->orderBy($table . '.created_at', 'desc');
        }

        if ($table) {
            return strlen($order) > 0
                ? $model->orderBy($order, $direction)
                : '';
        }

        return $model->orderBy('id', 'desc');
    }

    /**
     * @param $collection
     * @return LengthAwarePaginator
     */
    public function paginate($collection)
    {
        $collection = $collection instanceof Collection ? $collection : collect($collection);

        return new LengthAwarePaginator($collection, $this->numberOfItems, $this->perPage, $this->currentPage);
    }

    /**
     * @param $model
     * @param array $with
     * @return mixed
     */
    public function with($model, $with = [])
    {
        return $model->with($with);
    }

    /**
     * @param $request
     */
    protected function setupPagination($request)
    {
        $this->perPage = isset($request['perPage']) ? $request['perPage'] : 10;

        $this->currentPage = isset($request['page']) ? $request['page'] : 1;
    }

    /**
     * @param $filter
     * @return bool|string
     */
    public function cleanUpFilter($filter)
    {
        $filter = substr($filter, 0, 90);

        $characters = ['+', '-', '/', '*', '?'];

        $filter = trim(str_replace($characters, '', $filter));

        return $filter;
    }

    /**
     * @param $table
     * @return mixed
     */
    protected function getDatabaseDriver($table) {
        $key = $table->connection ?: Config::get('database.default');
        return Config::get('database.connections.' . $key . '.driver');
    }

}