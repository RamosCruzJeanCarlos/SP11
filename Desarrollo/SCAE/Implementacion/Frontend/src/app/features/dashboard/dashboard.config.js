'use strict';

export default function config($urlRouterProvider,$stateProvider){
    
    $stateProvider
    .state('dashboard.home',{
        url:'',
        template:'<dashboard-home flex layout="column" layout-padding/>'
    })
    .state('dashboard.maintenance',{
        url:'mantenimiento',
        abstract: true,
        template:'<dashboard-maintenance/>'
    })    
    .state('dashboard.reports',{
        url:'reportes',
        abstract: true,
        template:'<h1>Reportes!</h1><ui-view/>'
    })
    .state('dashboard.reports.generate',{
        url:'/generar',
        template:'<h1>Genera reporte!</h1>'
    })
    .state('dashboard.security',{
        url:'seguridad',
        abstract: true,
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

