'use strict';

export default function CookieManagerConfiguration($cookiesProvider){
    
    $cookiesProvider.defaults.path = '/' ;
    
}

CookieManagerConfiguration.$inject = ['$cookiesProvider'];