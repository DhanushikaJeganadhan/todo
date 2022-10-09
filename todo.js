var text=document.querySelector(".textbox");
var add=document.querySelector(".add");
var task=document.querySelector(".task");

function keypress(){
    if(text.value.trim()!=0){
        add.classList.add("active")
    }
    else{
        add.classList.remove("active")
    }
}

function additem() {
    if (text.value.trim()!=0) {
        var item = `<div class=\"item\"><p>${text.value}</p><div class=\"btn\"><i  class=\"fa-solid fa-list-ol\"></i><i  class=\"fa-sharp fa-solid fa-xmark\"></i></div></div>`
        task.innerHTML= task.innerHTML + item;
        text.value="";
    }else {
        alert("Please enter text")
    }
}
