
let inputText = document.querySelector("#input-text")
let addTaskBtn = document.querySelector("#add-task-btn")

let deletListBtn = document.querySelector("#delet-list-btn")
let listDiv = document.querySelector("#list-div")
let deleteBtn = document.querySelector("#delete-btn")
let allDeleteBtn = document.querySelector("#all-delete-btn")
let myListBtn = document.querySelector(".been")
let checkboxs = document.querySelectorAll("#list-checkbox")


// add new task 
function addlistfunction(){
    let inputValue = document.querySelector(".input").value
    if (inputValue === "") {
        console.log("error")

    } else {
        let ListId = Date.now()
        let task = document.querySelector("#task")
        let newLI = document.createElement("li")
        newLI.id = ListId 
        newLI.innerHTML = ` <span>${inputValue}</span> <i class="been fas fa-trash"></i> `     
        listDiv.append(newLI)
        document.querySelector('.input').value = '';
        let body = document.querySelectorAll("li")
        let neli = body.length
        task.innerText = `${neli}`   
   
       
    }
    

}
addTaskBtn.addEventListener("click", function lidun()  {
    addlistfunction()
  

})



        // All Task delet  
allDeleteBtn.addEventListener("click", function () {

    let deletLi = document.querySelectorAll("li")

        deletLi.forEach(deletbeen =>{
            deletbeen.remove();
        })    
        let task = document.querySelector("#task")
        task.innerText = 0

   
   

})

function taski(){
              let task = document.querySelector("#task")
          task.innerText -= 1 
       if (task === -1 ){
         task = 0      
        }
     
}
        // singl task delet function 

    // Event Delegation for Delete
    document.getElementById("list-div").addEventListener("click", (e) => {
        if (e.target.classList.contains("been")) {
       
          e.target.closest("li").remove();    
          taski()
       }
      });
  
   

 


