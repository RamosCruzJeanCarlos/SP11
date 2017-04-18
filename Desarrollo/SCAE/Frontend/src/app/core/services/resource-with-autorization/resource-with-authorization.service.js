'use strict';

export default class ResourceWithAuthorizationService{
    constructor($resource,AppCookiesService,constants){
        this.resourceService = $resource;
        this.baseUrl = constants.resources.remote.baseUrl;
        this.authorizationHeader = constants.resources.remote.authorizationHeader;        
    }   
    $resource(pathToResource,pathValues,methods){
        methods.forEach((m)=>{
                if(!m["headers"]){
                   m["headers"] = {};
                }
                m.headers[this.authorizationHeader] =  this.getAuthorizationToken;
        });
        return this.resourceService(this.baseUrl + pathToResource, pathValues, methods);
    }
    getAuthorizationToken(){
        return "Token " + AppCookiesService.get('token');
    }
}

ResourceWithAuthorizationService.$inject = ['$resource','AppCookiesService','constants'];