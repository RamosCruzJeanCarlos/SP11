'use strict';

import loadCookieName from './run.load-cookie-name';

export default function run(AppCookiesService){
    loadCookieName(AppCookiesService);
}

run.$inject = ['AppCookiesService'];