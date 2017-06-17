'use strict';

export default class SecurityManagerService{
    constructor($state,usersResource,customizedToast,cookieMananger){
        this.$state = $state;
        this.usersResource = usersResource;
        this.customizedToast = customizedToast;
    }
    login(username,password){
        this.usersResource.login({
            email: username,
            password: password
        }).then(
            
            (data)=>{
                this.customizedToast.success('Login exitoso');
                this.cookieMananger.set('token',data.id);
            },
            (error)=>{
                console.log(error);
                this.customizedToast.error('Error in login...');
            }
        )
    }
}

SecurityManagerService.$inject = ['$state','remoteUsersResource','CustomizedToast','cookieManager']