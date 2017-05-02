'use strict';

import angular from 'angular';
import crudDialogTemplate from './crud-dialog.template.html';
import CrudDialogController from './crud-dialog.controller';

export default class CrudDialogService{
    constructor($mdDialog,$mdMedia){
        this.$mdDialog = $mdDialog;
        this.$mdMedia = $mdMedia;
    }
    add(title,model,event){
        return this.$mdDialog.show({
            targetEvent: event,
            template: crudDialogTemplate,
            controller: CrudDialogController,
            controllerAs: 'ctrl',
            fullscreen: true,
            clickOutsideToClose: false,
            locals : {
                title: title,
                mode: 'add', 
                model: angular.copy(model)
            },
            onShowing : (scope,element)=>{
                if(this.$mdMedia('gt-sm')){
                    element.find('md-dialog').css('min-width','50%')
                }
            }
        });
    }
    edit(title,data,model,event){
        return this.$mdDialog.show({
            targetEvent: event,
            template: crudDialogTemplate,
            controller: CrudDialogController,
            controllerAs: 'ctrl',
            fullscreen: true,
            clickOutsideToClose: false,
            locals : {
                title: title,
                mode: 'edit', 
                model: model.reduce((previousValue,nextValue,index)=>{
                    previousValue[index].value = data[nextValue.name];
                    return previousValue;
                },angular.copy(model))
            },
            onShowing : (scope,element)=>{
                if(this.$mdMedia('gt-sm')){
                    element.find('md-dialog').css('min-width','50%')
                }
            }
        });
    }
}

CrudDialogService.$inject = ['$mdDialog','$mdMedia'];