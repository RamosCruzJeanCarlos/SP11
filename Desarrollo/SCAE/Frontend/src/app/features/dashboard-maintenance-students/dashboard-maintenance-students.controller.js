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
                order : 'id',
                limit : 10,
                page : 1
            },
            headers : [
                {
                    caption : 'ID',
                    name : 'id',
                    isNumeric : false,
                    show : false
                },
                {
                    caption : 'Nombre',
                    name : 'name',
                    isNumeric : false,
                    show : true
                },
                {
                    caption : 'Código',
                    name : 'code',
                    isNumeric : false,
                    show : true
                }
            ]
        }
    }
    InitStudents(){
        this.students = [];
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