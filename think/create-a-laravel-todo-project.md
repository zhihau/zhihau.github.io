# create a laravel todo project
[[laravel]]

<!-- vim-markdown-toc GitLab -->

* [create a laravel todo project](#create-a-laravel-todo-project)
    * [Install laravel 8](#install-laravel-8)
    * [Create task list](#create-task-list)
    * [add routes](#add-routes)
    * [build view](#build-view)
    * [change home directory](#change-home-directory)
    * [use telescope to debug 404 not found](#use-telescope-to-debug-404-not-found)
    * [commands](#commands)
    * [code](#code)
    * [Problem](#problem)

<!-- vim-markdown-toc -->
# create a laravel todo project
**Please read start from [Install laravel 8](#install-laravel-8).**
**There are many problems in operation below, if you want to refer to it, you can continue to read.**
- `apt install php7.4-cli`
- `su user1`
- root@$ `mkdir ~/public`
- root@$ `cd ~/public`
- root@~/public$ `composer create-project laravel/laravel {directory} 4.2 --prefer-dist`
> if you run this commmand as root, you will get this message
> Do not run Composer as root/super user! See https://getcomposer.org/root for details
> Continue as root/super user [yes]?
- user1@~/public$ `cd {directory}`
- user1@~/public/{directory}$ `php artisan make:migration create_tasks_table --create=tasks`
> if you get "mcrypt php extension required", you have to install mcrypt php extension first.
> sudo apt install php-dev libmcrypt-dev php-pear
> $ sudo pecl channel-update pecl.php.net
> $ sudo pecl install mcrypt
> cf. https://stackoverflow.com/questions/60388595/i-am-getting-mcrypt-php-extension-required-when-i-type-php-artisan-serve-in-my
- add "extension=mcrypt.so" to /etc/php/7.4/cli/php.ini
- user1@~/public/{directory}$ `php artisan make:migration create_tasks_table --create=tasks`
> OUTPUT:
> [InvalidArgumentException]
>  There are no commands defined in the "make" namespace.
check you laravel version via the commnad `php artisan --version`. There is no make command in laravel4. cf.https://stackoverflow.com/questions/31255136/why-there-are-no-commands-defined-in-the-make-namespace
- above steps I follow these two pages:
    - https://laravel.com/docs/4.2/installation#main-content
    - https://laravel.com/docs/5.2/quickstart#introduction

## Install laravel 8
- user1@~/public$ `composer create-project laravel/laravel {directory} 8.x --prefer-dist`
- user1@~/public$ `cd {directory}`

## Create task list
cf. https://laravel.com/docs/5.2/quickstart#introduction
- user1@~/public/{directory}$ `php artisan make:migration create_tasks_table --create=tasks`
- user1@~/public/{directory}$ `vi database/migrations/2023_01_03_054703_create_tasks_table.php`
```
chema::create('tasks', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->timestamps();
        });
```
- user1@~/public/{directory}$ `php artisan migrate`
> OUTPUT:
>    Illuminate\Database\QueryException
>  could not find driver (SQL: select * from information_schema.tables where table_schema = laravel and table_name = migrations and table_type = 'BASE TABLE')
- user1@~/public/{directory}$ `sudo apt-get install php-mysql`
- user1@~/public/{directory}$ `php artisan migrate`
- user1@~/public/{directory}$ `php artisan make:model Task`

|Directory|Command|
|---------|-------|
|~/public/{directory}/database/migrations/2023_01_03_054703_create_tasks_table.php|php artisan make:migration create_tasks_table --create=tasks|
|~/public/{directory}/app/Models/Task.php|php artisan make:model Task|
|~/public/{directory}/app/Http/routes.php|

## add routes
- user1@~/public/{directory}$ `vi app/Http/routes.php`
```
<?php
use App\Task;
use Illuminate\Http\Request;

/*
 * show task dashboard
 */
Route::get('/',function(){
//
});

/*
 * add new task
 */
Route::post('/task',function(Request $request){
//
});

/*
 * delete task
 */
Route::delete('/task/{task}',function(Task $task){
//
});
```
## build view
user1@~/public/{directory}$ vi resources/views/app.blade.php
```
<!-- resources/views/layouts/app.blade.php -->
 
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Laravel Quickstart - Basic</title>
 
        <!-- CSS And JavaScript -->
    </head>
 
    <body>
        <div class="container">
            <nav class="navbar navbar-default">
                <!-- Navbar Contents -->
            </nav>
        </div>
 
        @yield('content')
    </body>
</html>
```
user1@~/public/{directory}$ vi resources/views/tasks.blade.php
```
<!--<!-- resources/views/tasks.blade.php -->
 
@extends('layouts.app')
 
@section('content')
 
    <!-- Bootstrap Boilerplate... -->
 
    <div class="panel-body">
        <!-- Display Validation Errors -->
        @include('common.errors')
 
        <!-- New Task Form -->
        <form action="{{ url('task') }}" method="POST" class="form-horizontal">
            {{ csrf_field() }}
 
            <!-- Task Name -->
            <div class="form-group">
                <label for="task" class="col-sm-3 control-label">Task</label>
 
                <div class="col-sm-6">
                    <input type="text" name="name" id="task-name" class="form-control">
                </div>
            </div>
 
            <!-- Add Task Button -->
            <div class="form-group">
                <div class="col-sm-offset-3 col-sm-6">
                    <button type="submit" class="btn btn-default">
                        <i class="fa fa-plus"></i> Add Task
                    </button>
                </div>
            </div>
        </form>
    </div>
 
    <!-- TODO: Current Tasks -->
@endsection
```

## change home directory
vi .env
```
APP_CODE_PATH_HOST=/home/adrian/public/{directory}/
```
modify ./routes/web.php:17:    return view('welcome');
```
return view('tasks');
```

## use telescope to debug 404 not found
https://blog.51cto.com/lxw1844912514/3067263
https://haait.net/how-to-fix-404-not-found-in-laravel/
adrian@SUNCAT-HUANG:~/public/{directory}$ php artisan migrate

   Illuminate\Database\QueryException

  SQLSTATE[HY000] [1045] Access denied for user 'root'@'172.21.0.1' (using password: NO) (SQL: select * from information_schema.tables where table_schema = laravel and table_name = migrations and table_type = 'BASE TABLE')

  at vendor/laravel/framework/src/Illuminate/Database/Connection.php:712
    708▕         // If an exception occurs when attempting to run a query, we'll format the error
    709▕         // message to include the bindings with SQL, which will make this exception a
    710▕         // lot more helpful to the developer instead of just the database's errors.
    711▕         catch (Exception $e) {
  ➜ 712▕             throw new QueryException(
    713▕                 $query, $this->prepareBindings($bindings), $e
    714▕             );
    715▕         }
    716▕     }

      +33 vendor frames
  34  artisan:37
      Illuminate\Foundation\Console\Kernel::handle()


## commands
check laravel version - `php artisan --version`
change role to user - su user
change role to root(wsl ubuntu root no password) - sudo su -

## code
https://github.com/laravel/quickstart-basic


## Problem
- [Follow this guide to start laradock](https://laradock.io/)
-[404 not found nginx](https://github.com/laradock/laradock/issues/1589)
