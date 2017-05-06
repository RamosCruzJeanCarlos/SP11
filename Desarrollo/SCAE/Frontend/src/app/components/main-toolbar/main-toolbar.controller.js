'use strict';

export default class MainToolbarController{
    constructor($rootScope,constants){
        this.$rootScope = $rootScope;
        this.title = constants.app.title;
    }
    closeMainSidenav(){
        this.$rootScope.$broadcast("toogleMainSidenavByButton",{});
    }
}

MainToolbarController.$inject = ['$rootScope','constants'];