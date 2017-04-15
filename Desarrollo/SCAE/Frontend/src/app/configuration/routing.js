'use strict';

export default function routing($urlRouterProvider,$stateProvider){
    
    $urlRouterProvider.otherwise('/login');

    $stateProvider
    .state('login',{
        url:'/login',
        template:'<login></login>'
    });
    
}