'use strict';

export default class MainSidenavController{
    constructor($scope, $mdMedia, $mdSidenav, constants){
        this.open = true;
        this.title = constants.app.title;
        this.InitWatchWindowResizing($scope,$mdMedia,$mdSidenav);
        this.InitListenCloseAndOpenEvent($scope,$mdMedia,$mdSidenav);
    }
    InitWatchWindowResizing($scope,$mdMedia,$mdSidenav){
       $scope.$watch( 
        () => { return $mdMedia('gt-xs'); }
        ,(big) =>{ 
            if(big){
                if($mdSidenav('main_side_nav').isOpen()){
                    $mdSidenav('main_side_nav').toggle();
                }
                this.open = true;
            }
        }); 
    }
    InitListenCloseAndOpenEvent($scope,$mdMedia,$mdSidenav){
        $scope.$on('closeMainSidenav',(event,data)=>{                
            if(!$mdMedia('gt-xs')){            
                $mdSidenav('main_side_nav').toggle();
            }else{
                this.open = !this.open;
            }
        });
    }
}

MainSidenavController.$inject = ['$scope','$mdMedia','$mdSidenav','constants'];