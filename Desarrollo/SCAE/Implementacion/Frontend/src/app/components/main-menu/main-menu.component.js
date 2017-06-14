'use strict';

import mainMenuTemplate from './main-menu.template.html';
import mainMenuController from './main-menu.controller';

export default {
    template : mainMenuTemplate,
    controller : mainMenuController,
    bindings : {
        menu : "<"
    }
}