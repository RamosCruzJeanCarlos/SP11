'use strict';

export default class CrudDialogController{
    constructor($mdDialog,locals){
        this.$mdDialog = $mdDialog;
        this.title = locals.title;
        this.mode = locals.mode;
        this.model = locals.model;
    }
    cancel(){
        this.$mdDialog.cancel();
    }
    confirm(){
        this.$mdDialog.hide(this.fillModel());
    }
    fillModel(){
        return this.model.reduce((previousValue,nextValue)=>{
            previousValue[nextValue.name] = nextValue.value;
            return previousValue;
        },{});
    }
}

CrudDialogController.$inject = ['$mdDialog','locals'];