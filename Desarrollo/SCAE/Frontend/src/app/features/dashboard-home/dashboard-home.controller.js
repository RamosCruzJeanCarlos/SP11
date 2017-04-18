'use strict';

export default class DashboardHomeController{
    constructor(constants){
        this.content = constants.home.content
    }
}

DashboardHomeController.$inject = ['constants'];