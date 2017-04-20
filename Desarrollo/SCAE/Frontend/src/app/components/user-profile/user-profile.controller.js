'use strict';

export default class UserProfileController{
    constructor($state){    
        this.$state = $state;    
    }
    logout(){
        this.$state.go('login');
    }
}

UserProfileController.$inject = ['$state'];