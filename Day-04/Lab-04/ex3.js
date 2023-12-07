let input = document.querySelector('#taskName')
let btn = document.querySelector('#addBtn')
let taskView = document.querySelector('#viewTask')
let arrTask = []
btn.onclick = createNew;

function createNew(){
    const task = {
        id : Date.now(),
        name: input.value,
        status:false,
    }

    if(input.value){
        arrTask.push(task)
        // console.log(arrTask)
    }

    input.value = ''
    
    console.log(arrTask)
    addTasksToPage(arrTask)
}

function  addTasksToPage (){
    //to clear the taskView from the previous version of tasks

    taskView.innerHTML = ''
    arrTask.forEach(function(task){
        let div = document.createElement('div')
        div.className = 'form-control'
        div.setAttribute('task-id',task.id)
        div.appendChild(document.createTextNode(task.name))
        //Add the Done Button
        let doneBtn = document.createElement('button')
        doneBtn.className = 'btn btn-success doneBtn'
        doneBtn.appendChild(document.createTextNode('✔'))

        div.appendChild(doneBtn)

        //Add Delete Button 
        let delBtn = document.createElement('button')
        delBtn.className = 'btn btn-danger delBtn'
        delBtn.appendChild(document.createTextNode('X'))

        div.appendChild(delBtn)

        // console.log(div)

        //Add the every task div to the main one
        taskView.appendChild(div)
    })

}

//TaskView Div DELETE
taskView.addEventListener('click', function(el){
    //Using classList method to pick up the choosen element
    if(el.target.classList.contains('delBtn')){
        //getting the ID of the deleted task
        console.log('>>>> the Array of tasks before Delete element' , arrTask)

        let delTaskId = el.target.parentElement.getAttribute('task-id');

        arrTask = arrTask.filter(function(task){
            return task.id != delTaskId
        })
        el.target.parentElement.remove()
    
    }
    console.log('>>>> the Array of tasks after Delete element' , arrTask)
})

//TaskView Div COMPLETE
taskView.addEventListener('click', function(el){
    //Using classList method to pick up the choosen element
    if(el.target.classList.contains('doneBtn')){
        let doneTaskId = el.target.parentElement.getAttribute('task-id')
        let donetask = arrTask.find(function(task){
            return task.id == doneTaskId
        })
        console.log(donetask)
        if(donetask.status === false){
            donetask.status = true
        }
        el.target.parentElement.style.backgroundColor = 'green';
    }
    console.log('>>>> the Array of tasks after complete' , arrTask)
})

// console.log('>>>>' , arrTask)