'use strict';

export default function config($urlRouterProvider,$stateProvider){
    
    $stateProvider
    .state('dashboard.home',{
        url:'',
        template:'<home></home>'
    })
    .state('dashboard.maintenance',{
        url:'mantenimiento',
        template:'<h1>Mantenimiento</h1><ui-view/>'
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
    })
    .state('dashboard.reports',{
        url:'reportes',
        template:'<h1>Reportes!</h1><ui-view/>'
    })
    .state('dashboard.reports.generate',{
        url:'/generar',
        template:'<h1>Genera reporte!</h1>'
    })
    .state('dashboard.security',{
        url:'seguridad',
        template:'<h1>seguridad!</h1><ui-view/>'
    })
    .state('dashboard.security.users',{
        url:'/usuarios',
        template:'<h1>Usuarios!</h1>'
    })
    .state('dashboard.security.profiles',{
        url:'/perfiles',
        template:'<h1>Perfiles!</h1>'
    });  
}

config.$inject = ['$urlRouterProvider','$stateProvider']

