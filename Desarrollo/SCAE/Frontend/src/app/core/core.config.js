'use strict';

export default function routing($urlRouterProvider,$stateProvider,$mdThemingProvider){
    
    $mdThemingProvider.theme('default')
    .primaryPalette('blue-grey');

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

routing.$inject = ['$urlRouterProvider','$stateProvider','$mdThemingProvider'];