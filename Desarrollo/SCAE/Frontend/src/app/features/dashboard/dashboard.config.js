'use strict';

export default function config($urlRouterProvider,$stateProvider){
    
    $stateProvider
    .state('dashboard.home',{
        url:'',
        template:'<home></home>'
    })
    .state('dashboard.maintenance',{
        url:'mantenimiento',
        template:'<h1>Mantenimiento</h1><ui-view class="shuffle-animation"/>'
    })
    .state('dashboard.maintenance.students',{
        url:'/alumnos',
        template:'<h1>Alumnos!</h1>'
    })
    .state('dashboard.maintenance.teachers',{
        url:'/profesores',
        template:'<h1>Profesores!</h1>'
    })
    .state('dashboard.maintenance.subjects',{
        url:'/cursos',
        template:'<h1>Cursos!</h1>'
    });    
}

config.$inject = ['$urlRouterProvider','$stateProvider']

