export default {
    app : {
        title : 'S.C.A.E',
        subtitle : 'Sistema de control de asistencia de estudiantes',
        home : {
            content : 'Bienvenido a SCAE!!'
        }
    },
    resources : {
        remote : {
            baseUrl : '/data/',
            authorizationHeader : 'Authorization'
        },
        prod: {
            baseUrl: 'http://104.236.213.208:3000/api/',
            authorizationHeader: 'Token'
        }
    }
}