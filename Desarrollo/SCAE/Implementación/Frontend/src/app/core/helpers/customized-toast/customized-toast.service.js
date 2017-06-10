'use strict';

export default class CustomizedToast{
    constructor($mdToast){
        this.$mdToast = $mdToast;
    }
    show(message,type){
        this.$mdToast.show(
            this.$mdToast.simple()
            .textContent(message)
            .position('bottom right')
            .toastClass('toast-'+type)
            .hideDelay(3000));
        console.log(this.$mdToast.simple());
    }
    info(message){
        this.show(message,'info');
    }
    success(message){
        this.show(message,'success');
    }
    warning(message){
        this.show(message,'warning');
    }
    error(message){
        this.show(message,'error');
    }
}

CustomizedToast.$inject = ['$mdToast'];