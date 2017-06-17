'use strict';

export default class LoginController{
    constructor(constants,securityManager){        
        this.title = constants.app.title;
        this.subtitle = constants.app.subtitle;
        this.securityManager = securityManager;
    }
    login(){
       
        this.securityManager.login(this.username,this.password);
    }
}

LoginController.$inject = ['constants','securityManager'];