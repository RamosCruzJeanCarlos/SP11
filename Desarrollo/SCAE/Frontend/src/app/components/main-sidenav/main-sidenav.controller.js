'use strict';

export default class MainSidenavController{
    constructor($scope, constants){
        this.open = true;
        this.title = constants.app.title;
        $scope.$on('closeMainSidenav',(event,data)=>{            
            this.open = !this.open;
        })
    }
}

MainSidenavController.$inject = ['$scope','constants'];