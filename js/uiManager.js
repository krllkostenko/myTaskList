'use strict';
let createButton = (parent,id,image)=>{
    let button = $('<button>',{
        type:'button',
        value:'Change Priority',
        class:'btn btn-outline-default',
        id:id,
    });
    button.append(image)
    parent.append(button);
}
let getImage = (imageSrc) =>{
    let image = new Image;
    image.src = imageSrc;
    $('.tasks').append(image)
    return image;
}
let imagesCollection = () =>{
    const images = {
        arrowDown:getImage('images/priorityDown.png'),
        arrowUp:getImage('images/priorityUp.png'),
        deleteTask:getImage('images/delete.png'),
        checkMark:getImage('images/checked.png'),
        edit:getImage('images/edit.png'),
    }
    return images;
}
let manageUI = ()=>{
    $('.highPriority').html('').append('High priority:<br>');
    $('.majorPriority').html('').append('Major priority:<br>');
    $('.minorPriority').html('').append('Minor priority:<br>');
    $('.lowPriority').html('').append('Low priority:<br>');
    $('#confirmEditing').hide();
    $('#priorities').show();
    $('#alert').hide();
    $('#saveAll').show();
    $('#clearAll').show();
}
let editingMode = ()=>{
    $('#priorities').fadeOut();
    $('#addNewTask').fadeOut();
    $('#saveAll').fadeOut();
    $('#clearAll').fadeOut();
    $('#confirmEditing').fadeIn();
    $('[id^=deleteTask]').fadeOut(150);
    $('[id^=finishTask]').fadeOut(150);

}
let showAlert = () =>{
    $('#alert').fadeIn();
    setTimeout(()=>{
        $('#alert').fadeOut();
    },2500);
}
