'use strict';

import userProfileTemplate from './user-profile.template.html';
import userProfileController from './user-profile.controller';

export default {
    template : userProfileTemplate,
    controller : userProfileController,
    bindings: {
        userInfo : "<"
    }
}
