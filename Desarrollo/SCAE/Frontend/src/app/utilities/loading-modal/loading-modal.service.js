'use strict';

export default class LoadingModalService{
    constructor($mdDialog){
        this.$mdDialog = $mdDialog;
    }
    show(){
        this.$mdDialog.show({
            template : '<md-dialog aria-label="Loading"><md-dialog-content><loading-modal/></md-dialog-content></md-dialog>',
            parent : angular.element(document.body),
            clickOutsideToClose : false,
            bindToController: true,
            hasBackDrop : true
        });
    }
    close(){
        this.$mdDialog.hide();
    }
}

LoadingModalService.$inject = ['$mdDialog'];