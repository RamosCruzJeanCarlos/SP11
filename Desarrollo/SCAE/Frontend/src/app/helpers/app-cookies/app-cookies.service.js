'use strict';

export default class AppCookiesService{
    constructor($cookies,$resource,constants){
        this.$cookies = $cookies;
        this.$resource = $resource;        
        this.baseUrl = constants.resources.remote.baseUrl;
    }
    load(successCallback = ()=>{} ,errorCallback= ()=>{}){        
        this.$resource( this.baseUrl +'cookie.json',{},{}).get({},
        (cookie) => {
            console.log('Loaded cookie name => '+cookie.name)
            this.cookieName = cookie.name;
            successCallback();
        },(err) =>{
            console.error('Cannot load cookie name from server => '+err.message);
            errorCallback();
        });
    }
    get(key){
        let cookie = $cookies.getObject( this.cookieName );
        if( !cookie ){
            return undefined;
        }
        return cookie[ key ];
    }
    set(key,value){
        let cookie =  $cookies.getObject( this.cookieName );
        if( !cookie ){
        cookie = {};
        }
        cookie[key] = value;
        $cookies.putObject( this.cookieName, cookie );
    }
}

AppCookiesService.$inject = ['$cookies','$resource','constants'];