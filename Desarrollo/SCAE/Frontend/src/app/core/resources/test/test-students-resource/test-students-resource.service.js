'use strict';

export default class TestStudentsResourceService{
    constructor($resource,constants){
        this.resources = {
            crud : $resource(constants.resources.remote.baseUrl+'students.json',{},{
                "get" : {
                    isArray : true,
                    method : "GET"
                }
            }) 
        }
    }
    get(successCallback,errorCallback){
        this.resources.crud.get({},{},sucessCallback,errorCallback);
    }
    get(filter,successCallback,errorCallback){

    }
}