'use strict';

export default class MainToolbarController{
    constructor($rootScope){
        this.$rootScope = $rootScope;
    }
    closeMainSidenav(){
        this.$rootScope.$broadcast("closeMainSidenav",{});
    }
}

MainToolbarController.$inject = ['$rootScope'];