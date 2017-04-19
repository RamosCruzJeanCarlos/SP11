'use strict';

export default class DashboardHomeController{
    constructor(constants){
        this.content = constants.app.home.content
    }
}

DashboardHomeController.$inject = ['constants'];