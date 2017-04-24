'use strict';

export default class MainToolbarController{
    constructor($rootScope){
        this.$rootScope = $rootScope;
    }
    closeMainSidenav(){
        this.$rootScope.$broadcast("toogleMainSidenavByButton",{});
    }
}

MainToolbarController.$inject = ['$rootScope'];