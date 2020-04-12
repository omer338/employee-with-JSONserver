export class UI{
constructor(){

    this.employeesList = document.getElementById("employees");
    this.updateButton = document.getElementById("update");
    this.departmentInput = document.getElementById("department");
    this.salaryInput = document.getElementById("salary");
    this.employeesList = document.getElementById("employees");
    this.nameInput = document.getElementById("name");
    this.cardBody = document.getElementById("card-body1");
    this.modalSalaryInput = document.getElementById("employee-salary");
    this.modalNameInput = document.getElementById("employee-name");
    this.modalDepartmentInput = document.getElementById("employee-department");
    this.modalCancel = document.getElementById("modal-cancel");
}
    addAllEmployessToUI(employees){

        let result ="";

        employees.forEach(employee => {
                
            result+=`

            <tr>
                                            
                <td>${employee.name}</td>
                <td>${employee.department}</td>
                <td>${employee.salary}</td>
                <td>${employee.id}</td>
                <td><a href="#" id = "update-employee" class= "btn btn-danger" data-toggle="modal" data-target="#exampleModal">Güncelle</a></td> 
                <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
            </tr>
            
            `;
        });
        this.employeesList.innerHTML = result;
    }

    clearInputs(){
        this.nameInput.value = "";
        this.departmentInput.value = "";
        this.salaryInput.value = "";
    }



    addEmployessToUI(employee){
        this.employeesList.innerHTML += 
        `

            <tr>
                                            
                <td>${employee.name}</td>
                <td>${employee.department}</td>
                <td>${employee.salary}</td>
                <td>${employee.id}</td>
                <td><a href="#" id = "update-employee" class= "btn btn-danger" data-toggle="modal" data-target="#exampleModal">Güncelle</a></td> 
                <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
            </tr>
            
            `;
    }


    success(emp,message){
       
        const div = document.createElement("div");
        div.className = "alert alert-success";
        div.textContent = `${emp}  ${message}`;
        
        
        this.cardBody.appendChild(div);

    setTimeout(function(){

    div.remove();

    } ,3210);
    }

    deleteEmployeeFromUI(element){
        element.remove();
    }

    updateEmployeeFromUI(id){
       
        id.parentElement.innerHTML = 
        `

            <tr>
                                            
                <td>${this.modalNameInput.value}</td>
                <td>${this.modalDepartmentInput.value}</td>
                <td>${this.modalSalaryInput.value}</td>
                <td>${id.textContent}</td>
                <td><a href="#" id = "update-employee" class= "btn btn-danger" data-toggle="modal" data-target="#exampleModal">Güncelle</a></td> 
                <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
            </tr>
            
            `;

        
        }

        successUpdate(old,neww){
            const div = document.createElement("div");
            div.className = "alert alert-success";
            div.textContent = `${old} Başarıyla ${neww} Güncellendi `;
            this.cardBody.appendChild(div);

            setTimeout(function(){

                div.remove();
            
                } ,3210);
        }

}
