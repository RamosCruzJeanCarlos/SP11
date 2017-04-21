'use strict';

export default function CookieManagerRun(CookieManager){
    CookieManager.loadName();
}

CookieManagerRun.$inject = ['CookieManager'];