<?php

namespace App\Console\Commands;

use App\Customer;
use App\Repositories\ClientsRepositoryEloquent;
use Illuminate\Console\Command;

class ClientsCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'clients:get';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Get client details';

    protected $clientsRepositoryEloquent;

    /**
     * Create a new command instance.
     *
     * @param ClientsRepositoryEloquent $clientsRepositoryEloquent
     */
    public function __construct(ClientsRepositoryEloquent $clientsRepositoryEloquent)
    {
        $this->clientsRepositoryEloquent = $clientsRepositoryEloquent;
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        return Customer::chunk(200,function ($customers){
            $customers->each(function ($customer){
                $this->clientsRepositoryEloquent->updateOrCreate(['DCLink'=>$customer->DCLink],$customer->toArray());
            });
        });
    }
}
