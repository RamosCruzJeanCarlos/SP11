@echo off
COPY "..\Libreria de trabajo\Documentos\Formato de pase a produccion.xlsx" "Formato de pase a produccion.xlsx"
set NOMBRE_PROYECTO=SCAE
set FECHA_ACTUAL=%DATE%
set ANIO=%FECHA_ACTUAL:~6,4%
set MES=%FECHA_ACTUAL:~3,2%
set DIA=%FECHA_ACTUAL:~0,2%
set RUTA=%NOMBRE_PROYECTO%_%DIA%%MES%%ANIO%
MD %RUTA%
cd %RUTA% 
MD Documentos
MD Scripts
MD Ejecutable
MD Rollback
exit
