<?php


namespace WizPack\Workflow\Providers;

use Illuminate\Support\ServiceProvider;
use WizPack\Workflow\Http\Controllers\ApprovalsController;
use WizPack\Workflow\Repositories\ApprovalsRepository;

class WizPackApprovalServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->bind('wiz-pack-approval', function ($app) {
            return new ApprovalsController($app->make(ApprovalsRepository::class));
        });
    }

    public function boot()
    {
//        $this->loadMigrationsFrom(__DIR__ . '/../Database/Migrations');
        $this->loadRoutesFrom(__DIR__ . '/../Routes/routes.php');
        $this->loadRoutesFrom(__DIR__ . '/../Routes/api.php');
        $this->loadViewsFrom(dirname(__DIR__) . '/Views', 'wizpack');
    }

}