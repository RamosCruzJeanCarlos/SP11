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
    get(paginator){
        return this.resources.crud.get({},{}).$promise;
    }
}