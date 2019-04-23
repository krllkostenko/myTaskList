'use strict';
let viewTasks =() =>{
    let tasksData = getFromLS('tasksTODO');
    manageUI();
    for(let i = 0;i<tasksData.length;i++){
        let priority = parseInt(tasksData[i].priority);
        if(tasksData[i].status!=='Finished'){
            if(priority === 1){
                sortByPriority('.highPriority',i);
            }else if(priority === 2){
                sortByPriority('.majorPriority',i);
            }else if(priority === 3){
                sortByPriority('.minorPriority',i);
            }else if(priority === 4){
                sortByPriority('.lowPriority',i);
            }
            finishTask(i);
            editTask(i);
            changePriority(i);
            removeTask(i);
        }
    }
    viewFinishedTasks();

}
let sortByPriority = (taskPrioity,index)=>{
    let task = $('<div>',{
        class:'task',
        'data-taskIndex':index
    });
    let tasksData = getFromLS('tasksTODO');
    let image = imagesCollection();
    createButton($(task),`priorityUp${index}`,image.arrowUp);
    createButton($(task),`priorityDown${index}`,image.arrowDown);
    $(task).append(tasksData[index].value+'');
    createButton($(task),`editTask${index}`,image.edit);
    createButton($(task),`finishTask${index}`,image.checkMark);
    createButton($(task),`deleteTask${index}`,image.deleteTask);
    $(taskPrioity).append(task);
}
let viewFinishedTasks = () =>{
    let tasksData = getFromLS('tasksTODO');
    $('.finishedTasks').html('');
    for(let i=0;i<tasksData.length;i++){
        let finishedTask = $('<div>');
        if(tasksData[i].status === 'Finished'){
            finishedTask.append(tasksData[i].value);
            $('.finishedTasks').append(finishedTask);          
        }
    }
}
