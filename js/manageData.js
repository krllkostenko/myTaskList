'use strict';
let postData = ()=>{
    let data = getFromLS('tasks');
    $.ajax({
        type: "POST",
        url: "http://api.jquery.com/jquery.ajax/",
        data: data,
        success: msg => {
            if (msg) {
                console.log('Done');
                location.reload(true);
            } else {
                console.log("Cannot add to list !");
            }
        },});
    
}

let saveData = ()=>{
    $('#saveAll').click(function(){
        postData();
        console.log('done');
    })
}
let getData =()=>{
    $.ajax({
        type: "GET",
        url: "/data/data.json",
    }).done(function (data) {
        console.log("Ok ");
        addToLS('tasksTODO',data);
    }).fail(msg=>{
        console.log("Error");
    }).always(msg=>{
        console.log("Complete");
    });

}
let addToLS = (key,value) => localStorage.setItem(key,JSON.stringify(value));

let  getFromLS = key =>{
    let data = localStorage.getItem(key);
    return JSON.parse(data);
}
let useDefaultData = () =>{
    let tasks = getFromLS('tasksTODO');
    if(tasks === null || tasks.length===0){
        getData();
    }
}