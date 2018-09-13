
@extends('layouts.main')

@push('meta')
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="csrf-token" content="{csrf_token()}">
<meta name= "theme-color" content="#26A65B">
@endpush

@push('title')
<title> {{config('app.name')}} </title>
@endpush

@push('favicon')
<link rel="shortcut icon" href="" type="image/x-icon">
@endpush

@push('css')
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link rel="stylesheet" href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
<link rel="stylesheet" href="{{asset('css/app.css')}}">
<link rel="stylesheet" href="{{asset('css/theme/theme.css')}}">
@endpush

@push('manifest')
<link rel="manifest" href="">
@endpush

@section('content')

    <div id="app">
        <router-view></router-view>
    </div>

@endsection

@push('footer-js')
<script src="{{asset('js/app.js')}}"></script>
@endpush

@push('worker-js')
@endpush

@push('service-worker.js')
@endpush
