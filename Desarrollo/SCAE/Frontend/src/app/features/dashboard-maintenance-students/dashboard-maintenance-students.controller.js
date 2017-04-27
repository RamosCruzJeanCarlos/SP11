'use strict';

export default class DashboardMaintenanceStudentsController{
    constructor(CustomizedToast,StudentsResource){
        this.studentsResource = StudentsResource;
        this.customizedToast = CustomizedToast;      
        this.selected = [];
        this.InitTable();
        this.InitStudents();
    }
    InitTable(){
        this.table = {
            query : {
                order : 'name',
                limit : 10,
                page : 1
            },
            headers : [
                {
                    name : 'id',
                    orderBy : 'id',
                    isNumeric : false,
                },
                {
                    name : 'name',
                    orderBy : 'name',
                    isNumeric : false,
                },
                {
                    name : 'code',
                    orderBy : 'code',
                    isNumeric : false,
                }
            ]
        }
    }
    InitStudents(){
        this.students = {};
        this.studentsResource
            .get(null)
            .then((data)=>{
                this.students = data;
            },(err)=>{
                this.customizedToast.error('Error cargando estudiantes');
            })
    }
}

DashboardMaintenanceStudentsController.$inject = ['CustomizedToast','StudentsResource'];