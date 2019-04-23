'use strict';
$(document).ready(()=>{
    useDefaultData();
    setTimeout(() => {
        viewTasks();
    },200);
    createTask('#addNewTask');
    saveData();
    clearAll()

});