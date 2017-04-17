export default class DashboardController{
    constructor(constants,LoadingModalService){
        console.log('Dashboard controller loaded...');
        this.title = constants.app.title;
        LoadingModalService.show();
    }
}

DashboardController.$inject = ['constants','LoadingModalService'];