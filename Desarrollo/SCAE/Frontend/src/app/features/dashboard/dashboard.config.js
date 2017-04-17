'use strict';

export default function config($urlRouterProvider,$stateProvider){
    
    $stateProvider
    .state('dashboard.home',{
        url:'',
        template:'<home></home>'
    })
    .state('dashboard.studentsManagement',{
        url:'alumnos',
        //template:'<students-management></students-management>'
        template:'<h1>Alumnos!</h1>'
    })
    .state('dashboard.teachersManagement',{
        url:'profesores',
        //template:'<teachers-management></teachers-management>'
        template:'<h1>Profesores!</h1>'
    })
    .state('dashboard.subjectsManagement',{
        url:'cursos',
        //template:'<subjects-management></subjects-management>'
        template:'<h1>Cursos!</h1>'
    });    
}

config.$inject = ['$urlRouterProvider','$stateProvider']

