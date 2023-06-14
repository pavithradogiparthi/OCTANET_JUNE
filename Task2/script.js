const item = document.getElementById("item");
const listContainer = document.getElementById("list-container");
const dead = document.getElementById("deadline");
const label = document.getElementById("label");
const prior = document.getElementById("priority");
function addTask() {
    if(item.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = `<p style = "font-size: 24px">${item.value}</p><p style = "font-size: 16px">Priotity: ${prior.value}</p><p style = "font-size: 16px"> Deadline: ${dead.value}</p><p style ="font-size: 16px">#${label.value}</p>`
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    item.value = "";
    dead.value = "";
    label.value = "";
    prior.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();