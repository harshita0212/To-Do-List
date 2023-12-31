const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("you must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);//this li will be under the container as we enter any text 
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";// this will create an element cross icon under the span
        li.appendChild(span);
    }
    inputBox = "";
    saveData();//whenever we will add any data this save data will be called and save content in the browser. 
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);


function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function displayContent(){
    listContainer.innerHTML = localStorage.getItem("data");

}
displayContent();
