<!DOCTYPE html>
<html lang={{app()->getLocale()}}>
<head>
   @stack('meta')
   @stack('title')
   @stack('favicon')
   @stack('css')
   @stack('manifest')

</head>
<body>
   @yield('content')
   @stack('footer-js')
   @stack('worker-js')
   @stack('service-worker-js')
</body>
</html>
