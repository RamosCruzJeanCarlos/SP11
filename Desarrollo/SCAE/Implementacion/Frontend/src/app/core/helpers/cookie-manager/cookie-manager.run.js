'use strict';

export default function CookieManagerRun(cookieManager){
    cookieManager.loadName();
}

CookieManagerRun.$inject = ['cookieManager'];