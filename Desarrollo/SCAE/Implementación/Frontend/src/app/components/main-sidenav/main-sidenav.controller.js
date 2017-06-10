'use strict';

export default class MainSidenavController{
    constructor($scope, $mdMedia, $mdSidenav, constants){
        this.open = true;
        this.title = constants.app.title;
        this.$scope = $scope;
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
        $scope.$on('toogleMainSidenavByButton',(event,data)=>{                
            if(!$mdMedia('gt-xs')){            
                $mdSidenav('main_side_nav').toggle();
            }else{
                this.open = !this.open;
            }
        });
        $scope.$on('toogleMainSidenavBySwipe',(event,data)=>{                
            if(!$mdMedia('gt-xs')){            
                $mdSidenav('main_side_nav').toggle();
            }
        });
        $scope.$on('toogleMainSidenavByStateChange',(event,data)=>{                
            if(!$mdMedia('gt-xs') && $mdSidenav('main_side_nav').isOpen()){            
                $mdSidenav('main_side_nav').toggle();
            }
        });
    }
}

MainSidenavController.$inject = ['$scope','$mdMedia','$mdSidenav','constants'];