export default class DashboardController{
    constructor(constants){
        this.title = constants.app.title;
    }
}

DashboardController.$inject = ['constants'];