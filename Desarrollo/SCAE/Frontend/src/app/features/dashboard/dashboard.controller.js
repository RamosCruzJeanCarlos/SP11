export default class DashboardController{
    constructor(constants,UsersResourceService,CustomizedToast){
        this.title = constants.app.title;
        this.subtitle = constants.app.subtitle;
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
}

DashboardController.$inject = ['constants','TestUsersResource','CustomizedToast'];