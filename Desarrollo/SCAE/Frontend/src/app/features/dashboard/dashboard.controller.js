export default class DashboardController{
    constructor($rootScope,constants,UsersResourceService,CustomizedToast){
        this.title = constants.app.title;
        this.subtitle = constants.app.subtitle;
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

DashboardController.$inject = ['$rootScope','constants','UsersResource','CustomizedToast'];