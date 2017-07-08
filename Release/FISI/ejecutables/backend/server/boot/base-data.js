'use strict';

module.exports = function(server) {
    let User = server.models.user;
    let Role = server.models.role;
    let RoleMapping = server.models.roleMapping;
    Role.findOrCreate({
        where: {
            name: "ADMIN"
        }
    }, {
        name: "ADMIN"
    }).then(role => {
        User.findOrCreate({
            where: {
                email: "admin@admin.com"
            }
        }, {
            email: "admin@admin.com",
            firstName: "admin",
            lastName: "admin",
            password: "admin",
            picture: {
                relativePath: 'profile/user.png',
                url: User.app.get('media') + '/profile/user.png'
            }
        }).then(user => {
            RoleMapping.findOrCreate({
                where: {
                    roleId: role[0].id,
                    principalType: "USER",
                    principalId: user[0].id
                }
            }, {
                roleId: role[0].id,
                principalType: "USER",
                principalId: user[0].id
            }).then(map => {
                console.log("welcome to scae....");
            });
        });
    });
}