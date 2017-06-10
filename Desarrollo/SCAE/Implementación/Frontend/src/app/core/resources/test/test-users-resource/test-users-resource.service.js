'use strict';

export default class TestUsersResourceService{
    constructor($resource,constants){
        this.resources = {
            crud : $resource(constants.resources.remote.baseUrl+'user.json',{},{
                "get" : {
                    method : "GET"
                }
            }) 
        }
    }
    get(sucessCallback,errorCallback){
        this.resources.crud.get({},{},sucessCallback,errorCallback);
    }
}

TestUsersResourceService.$inject = ['$resource','constants'];