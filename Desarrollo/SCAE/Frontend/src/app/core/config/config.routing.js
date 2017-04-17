'use strict';

export default function routing($urlRouterProvider,$stateProvider){
    
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('login',{
        url:'/login',
        template:'<login></login>'
    })
    .state('dashboard',{
        abstract: true,
        url:'/',
        template:'<dashboard></dashboard>'
    })
    .state('not-found',{
        url:'/not_found',
        template:'<h1>404: NOT FOUND</h1>'
    })    
}