'use strict';

import mainSidenavTemplate from './main-sidenav.template.html';
import mainSidenavController from './main-sidenav.controller';

export default {
    template : mainSidenavTemplate,
    controller : mainSidenavController,
    bindings : {
        userInfo : '<',
        menu : '<'
    }
}