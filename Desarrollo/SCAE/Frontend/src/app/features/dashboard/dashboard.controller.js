export default class DashboardController{
    constructor(constants,UserResourceService){
        this.title = constants.app.title;
        this.subtitle = constants.app.subtitle;
        UserResourceService.get(
            (data)=>{
                this.userInfo = data.info;
                this.menu = data.menu;
            },
            (err)=>{
                console.log(err);
            }
        )
    }
}

DashboardController.$inject = ['constants','TestUserResourceService'];