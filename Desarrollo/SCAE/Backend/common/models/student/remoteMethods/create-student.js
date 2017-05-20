'use strict';
var Util = require('../../../../helpers/util.js');
var Hooks = require('../../../../helpers/hooks.js');
var Files = require('../../../../helpers/files.js');

module.exports = function(Student) {
    Student.beforeRemote('createStudent', Hooks.beforeRemoteFormData);
    Student.createStudent = (
        firstName, lastName, code, email, dni, picture, next
    ) => {
        console.log("hola");
        Student.findOrCreate({
            where: {
                code: code,
                email: email
            }
        }, {
            firstName: firstName,
            lastName: lastName,
            code: code,
            email: email,
            dni: dni
        }).then(student => {
            if (!student[1]) return next(Util.error({ status: 409, msg: 'studiante ya esta registrado' }));
            if (!picture) {
                student[0].picture = {
                    relativePath: 'profile/user.png',
                    url: Student.app.get('media') + '/' + 'profile/user.png'
                }
                student[0].save();
                return next(null, student[0]);
            }
            Files.save(picture, 'profile').then((relativePath) => {
                student[0].picture = {
                    relativePath: relativePath,
                    url: User.app.get('media') + '/' + relativePath
                };
                student[0].save();
                next(null, student[0]);
            }).catch(reject);
        }).catch(next);
    }
    Student.remoteMethod(
        'createStudent', {
            description: 'crear estudiante',
            accepts: [{
                    arg: 'firstName',
                    type: 'string',
                    required: true
                },
                {
                    arg: 'lastName',
                    type: 'string',
                    required: true
                },
                {
                    arg: 'code',
                    type: 'string',
                    required: true
                },
                {
                    arg: 'email',
                    type: 'string',
                    required: true
                },
                {
                    arg: 'dni',
                    type: 'string',
                    required: true
                },
                {
                    arg: 'picture',
                    type: "object"
                }
            ],
            returns: {
                arg: '',
                type: 'object',
                root: true
            },
            http: {
                path: '/',
                verb: 'post'
            }
        }
    );
}