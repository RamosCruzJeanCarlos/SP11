'use strict';

export default class DashboardMaintenanceStudentsController{
    constructor(CustomizedToast,StudentsResource,CrudDialogService){
        this.studentsResource = StudentsResource;
        this.customizedToast = CustomizedToast;    
        this.crudDialogService = CrudDialogService;
        this.setModel();
        this.initTable();
        this.initStudents();
    }
    setModel(){
        this.model = [
            {
                displayName : 'ID',
                name : 'id',
                isNumeric : false,
                show : false
            },
            {
                displayName : 'Nombre',
                name : 'name',
                isNumeric : false,
                show : true
            },
            {
                displayName : 'Código',
                name : 'code',
                isNumeric : false,
                show : true
            }
        ]
    }
    initTable(){
        this.table = {
            query : {
                order : 'id',
                limit : 10,
                page : 1
            }            
        }
    }
    initStudents(){
        this.students = [];
        this.studentsResource
            .get(null)
            .then((data)=>{
                this.students = data;
            },(err)=>{
                this.customizedToast.error('Error cargando estudiantes');
            })
    }
    add(event){
        this.crudDialogService.add('Añadir estudiante',this.model,event);
    }
    edit(student,event){
        
        this.crudDialogService.edit('Editar estudiante',student,this.model,event);
    }
}

DashboardMaintenanceStudentsController.$inject = ['CustomizedToast','StudentsResource','CrudDialogService'];