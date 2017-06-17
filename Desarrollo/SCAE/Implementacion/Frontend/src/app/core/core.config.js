'use strict';

export default function routing($urlRouterProvider,$stateProvider,$mdThemingProvider){
    
    $mdThemingProvider.theme('default')
    .primaryPalette('cyan',{
        'default' : '700'
    })
    .accentPalette('grey',{
        'default' : '600'
    })
    .warnPalette('red',{
        'default' : '400'
    });

    $urlRouterProvider.otherwise('/login');

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