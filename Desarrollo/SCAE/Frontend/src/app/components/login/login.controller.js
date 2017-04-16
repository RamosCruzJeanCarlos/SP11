'use strict';

export default class LoginController{
    constructor(constants,$state){        
        this.title = constants.appTitle;
        this.subtitle = constants.appSubtitle
        this.$state = $state;
    }
    login(){
        this.$state.go('dashboard.home');
    }
}

LoginController.$inject = ['constants','$state'];