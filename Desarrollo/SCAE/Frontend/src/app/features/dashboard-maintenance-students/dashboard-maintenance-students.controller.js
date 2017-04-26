'use strict';

export default class DashboardMaintenanceStudentsController{
    constructor(CustomizedToast,StudentsResource){
        this.dinjoTable = {
            config : {},
            model : {}
        };
        this.students = {};
        this.studentsResource = StudentsResource;
        this.customizedToast = CustomizedToast;        
        this.InitStudents();
    }
    InitStudents(){
        this.studentsResource.get(null,(data)=>{
            this.students = data;
        },(err)=>{
            this.customizedToast.error(err.message);
        })
    }
}

DashboardMaintenanceStudentsController.$inject = ['CustomizedToast','StudentsResource'];