import {Request} from "./request"
import {UI} from "./ui";
const form = document.getElementById("employee-form");
const nameInput = document.getElementById("name");
const departmentInput = document.getElementById("department");
const salaryInput = document.getElementById("salary");
const employeesList = document.getElementById("employees");
const cardbody = document.getElementById("card-body1");
const modalSalaryInput = document.getElementById("employee-salary");
const modalNameInput = document.getElementById("employee-name");
const modalDepartmentInput = document.getElementById("employee-department");
const modalUpdateButton = document.getElementById("modal-update");
const modalTitle = document.getElementById("modal-title");
const ui = new UI();
const request = new Request("http://localhost:3000/employees");
events();

function events(){
employeesList.addEventListener("click",deleteOrUpdateEmployee);
   
    
form.addEventListener("submit",addEmployee);
document.addEventListener("DOMContentLoaded",getAllEmployees);

}
function getAllEmployees(){
    request.get()
    .then(employees => {
        ui.addAllEmployessToUI(employees);
    })
}

function addEmployee(e){

    const employeeName =  nameInput.value.trim();
    const employeeDepartment = departmentInput.value.trim();
    const employeeSalary =  salaryInput.value.trim();

    if(employeeName ==="" || employeeDepartment ==="" || employeeSalary ==="")
    {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Lütfen Tüm Alanları Doldurun!',
            
          });

         
          
    }

    else
    {
            request.post({name : employeeName, department : employeeDepartment, salary : Number(employeeSalary)})
            .then(employee => {
               ui.addEmployessToUI(employee);
            })
            .catch(err => console.log(err));

            ui.success( nameInput.value,"Başarıyla Eklendi");
    }

    
    
    ui.clearInputs();
    e.preventDefault();
    
}



function deleteOrUpdateEmployee(e){
//delete
const id= e.target.parentElement.previousSibling.previousSibling;
if(e.target.id == "delete-employee")
{
   
   
   ui.deleteEmployeeFromUI(e.target.parentElement.parentElement);
  request.delete(id.previousSibling.previousSibling.textContent);

  ui.success(id.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.textContent,"Başarıyla Silindi");
}


//update
else if(e.target.id == "update-employee") {
modalSalaryInput.value = e.target.parentElement.previousSibling.previousSibling.previousSibling.previousSibling.textContent;
modalNameInput.value = e.target.parentElement.parentElement.children[0].textContent;
modalDepartmentInput.value = e.target.parentElement.parentElement.children[1].textContent;
modalTitle.textContent=`Güncelle:  ${modalNameInput.value}`;

function updateEmployee(){
    request.put(id.textContent,{name:modalNameInput.value, department:modalDepartmentInput.value ,salary:Number(modalSalaryInput.value)});

    ui.updateEmployeeFromUI(id);
    ui.successUpdate( modalTitle.textContent,modalNameInput.value);
    
}


modalUpdateButton.addEventListener("click",updateEmployee)   

}


request.put(id,{name:modalNameInput.value, department:modalDepartmentInput.value, salary:Number(modalSalaryInput.value)});
}




