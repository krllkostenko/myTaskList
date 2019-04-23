'use strict';
let createTask = button =>{
    $(button).click(()=>{
        if($('#newTask').val()!=='' && $("input[name='inlineRadioOptions']:checked").val() !== undefined){
            console.log($("input[name='inlineRadioOptions']:checked").val()); 
            let newTask = new Task($('#newTask').val(),'Open',$("input[name='inlineRadioOptions']:checked").val());
            let tasks = getFromLS('tasksTODO');
            tasks.push(newTask);
            addToLS('tasksTODO',tasks);
            $('#newTask').val('');  
            $('.form-check-input').prop('checked',false);
            viewTasks();
        }else{
            showAlert();
        }
    }); 
}
let finishTask = index =>{
    $(`#finishTask${index}`).click(()=>{
        let taskElement = `.task[data-taskIndex=${index}]`;
        $(taskElement).animate({
            'marginLeft' : "+=70px",
        }).fadeOut(200);
        let taskData = getFromLS('tasksTODO');
        taskData[index].status = 'Finished';
        addToLS('tasksTODO',taskData);
        setTimeout(viewTasks,1000);

    })
}
let removeTask = index =>{
    $(`#deleteTask${index}`).click(()=>{       
    $('#showModal').modal('show');
    $('#confirmChoice').click(()=>{
        $('#showModal').modal('hide');
        let taskElement = `.task[data-taskIndex=${index}]`;
        $(`.task[data-taskIndex=${index}]`).fadeOut(400);
        let tasks = getFromLS('tasksTODO');
        tasks.splice(index,1);
        addToLS('tasksTODO',tasks);
        $('#tasks').remove(taskElement);
    });
});
}
let editTask = index =>{
    let tasks = getFromLS('tasksTODO');
    $(`#editTask${index}`).click(()=>{   
        editingMode();
        $('#newTask').val(tasks[index].value);
        $('#confirmEditing').click(()=>{
            tasks[index].value = $('#newTask').val();
            if(tasks[index].value!==''){
                addToLS('tasksTODO',tasks);
                $('#addNewTask').show();
                setTimeout(()=>{
                    viewTasks();
                    $('#newTask').val('');
                },0)
            }else{
               showAlert();
            }
        });
    });
    
}
let changePriority = index =>{
    let tasks  = getFromLS('tasksTODO');
    $('#priorityUp'+index).click(()=>{ 
        let taskElement = $(`.task[data-taskIndex=${index}]`);
        taskElement.fadeOut();
        tasks[index].priority--;
        if(tasks[index].priority > 4){
            tasks[index].priority = 1;
        }else if(tasks[index].priority < 1){
            tasks[index].priority = 4;
        }
        addToLS('tasksTODO',tasks);
        setTimeout(viewTasks,500);
    })
    $('#priorityDown'+index).click(()=>{ 
        let taskElement = $(`.task[data-taskIndex=${index}]`);
        taskElement.fadeOut();
        tasks[index].priority++;
        if(tasks[index].priority > 4){
            tasks[index].priority = 1;
        }else if(tasks[index].priority < 1){
            tasks[index].priority = 4;
        }
        addToLS('tasksTODO',tasks);
        setTimeout(viewTasks,350);
    })
}
let clearAll = ()=>{
    $('#clearAll').click(()=>{
        $('#showModal').modal('show');
        $('#confirmChoice').click(()=>{
            $('#showModal').modal('hide');
            let tasks = getFromLS('tasksTODO');
            tasks = [];
            addToLS('tasksTODO',tasks);
            viewTasks();
        });
    })
}