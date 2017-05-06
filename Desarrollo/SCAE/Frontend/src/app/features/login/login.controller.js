'use strict';

export default class LoginController{
    constructor(constants,$state){        
        this.title = constants.app.title;
        this.subtitle = constants.app.subtitle
        this.$state = $state;
    }
    login(){
        this.$state.go('dashboard.home');
    }
}

LoginController.$inject = ['constants','$state'];