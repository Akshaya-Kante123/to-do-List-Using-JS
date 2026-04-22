let form=document.getElementById("form")

const allTasks=[]
const validateForm=(event)=>{
    event.preventDefault()

    let display=document.getElementById("display")
    let userInput=event.target.ui;

    allTasks.push(userInput.value)
    display.innerHTML=""


    display.innerHTML = allTasks.map((task) => `<li>${task}</li>`).join("");

    userInput.value=""

    console.log(allTasks)
     renderTasks();
   
};
    // Separate function to display tasks
    function renderTasks() {
        let display = document.getElementById("display");

        display.innerHTML = allTasks.map((task, index) => 
            `<li>
                ${task} 
                <button onclick="deleteTask(${index})">Delete</button>
            </li>`
        ).join("");
    }

    //  MOVE THIS OUTSIDE
    function deleteTask(index) {
        allTasks.splice(index, 1);
        renderTasks(); // refresh UI
    }
form.addEventListener('submit',validateForm)