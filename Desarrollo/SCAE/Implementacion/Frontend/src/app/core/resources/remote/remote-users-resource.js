'use strict';

export default class RemoteUsersResource{
    constructor($resource,constants){        
        this.baseUrl = constants.resources.prod.baseUrl;
        this.resource = $resource(this.baseUrl+'users/login/');
    }
    login(username,password){
        return this.resource.save({},{
            email: username,
            password: password
        }).$promise;
    }
}

RemoteUsersResource.$inject = ['$resource','constants'];