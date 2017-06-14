'use strict';

export default function run($rootScope){
    $rootScope.$on( '$stateChangeStart', function(e, toState  , toParams, fromState, fromParams) {
        $rootScope.$broadcast('toogleMainSidenavByStateChange',{});
    });
}

run.$inject = ['$rootScope'];