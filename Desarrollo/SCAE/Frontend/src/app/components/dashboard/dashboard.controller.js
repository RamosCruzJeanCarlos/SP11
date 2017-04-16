export default class DashboardController{
    constructor(constants){
        console.log('Dashboard controller loaded...');
        this.title = constants.appTitle;
    }
}

DashboardController.$inject = ['constants'];