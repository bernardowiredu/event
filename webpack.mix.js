let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.webpackConfig({

    resolve:{

        alias:{
            '~': path.resolve(__dirname, 'resources/assets/js'),
            Routes: path.resolve(__dirname, 'resources/assets/js/routes'),
            Components: path.resolve(__dirname, 'resources/assets/js/components'),
            Layouts: path.resolve(__dirname, 'resources/assets/js/layouts'),
            Services: path.resolve(__dirname, 'resources/assets/js/services'),
            Views: path.resolve(__dirname, 'resources/assets/js/views'),
            Forms: path.resolve(__dirname, 'resources/assets/js/forms'),
            Class: path.resolve(__dirname, 'resources/assets/js/views/class')
        }
    }

})


mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css')
   .less('resources/assets/less/theme.less', 'public/css/theme');
