export default class DashboardController{
    constructor($rootScope,UsersResourceService,CustomizedToast){
        this.$rootScope = $rootScope;
        UsersResourceService.get(
            (data)=>{
                this.userInfo = data.info;
                this.menu = data.menu;
            },
            (err)=>{
                CustomizedToast.error('No se pudo cargar la información del usuario');
                console.log(err);
            }
        )
    }
    OnSwipeView(){
        this.$rootScope.$broadcast("toogleMainSidenavBySwipe",{});
    }
}

DashboardController.$inject = ['$rootScope','UsersResource','CustomizedToast'];