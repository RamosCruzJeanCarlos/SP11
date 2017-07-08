'use strict';
var Util = require('../../../../helpers/util');

module.exports = function(Student) {
    Student.createStudent = function(data, next) {
        Student.findOrCreate({
            where: {
                or: [{
                        code: data.code
                    },
                    {
                        dni: data.dni
                    },
                    {
                        email: data.email
                    }
                ]
            }
        }, {
            firstName: data.firstName,
            lastName: data.lastName,
            dni: data.dni,
            email: data.email,
            picture: data.picture || "http://104.236.213.208:3000/storage/profile/user.png",
            code: data.code
        }).then(user => {
            if (!user[1]) {
                return next(Util.error({ status: 422, msg: 'studiante esta registrado' }));
            }
            next(null, user[0]);
        }).catch(next);
    }
    Student.remoteMethod(
        'createStudent', {
            description: 'crear estudiante',
            accepts: [{
                arg: 'data',
                type: 'student',
                http: { source: 'body' },
                description: "no es necesario enviar id, y userid, picture"
            }],
            returns: {
                arg: '',
                type: 'object',
                root: true
            },
            http: {
                path: '/create',
                verb: 'post'
            }
        }
    )
}