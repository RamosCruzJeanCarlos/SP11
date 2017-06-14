'use strict';

export default function config($urlRouterProvider,$stateProvider){
    $stateProvider
    .state('dashboard.maintenance.students',{
        url:'/alumnos',
        template:'<dashboard-maintenance-students/>'
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