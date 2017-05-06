'use strict';

export default class MainMenuController{
    constructor($state){
        this.$state = $state;
    }
    logout(){
        this.$state.go('login');
    }
}

MainMenuController.$inject = ['$state'];