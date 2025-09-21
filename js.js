const box = document.getElementById("inputbox");
const liste = document.getElementById("list");

function AddTask() {
    if (box.value === '') {
        alert("You Must Write Something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = box.value;

        let span = document.createElement("span");
        span.innerHTML = "\u00D7"; // This is the '×' symbol
        span.classList.add("close"); // Optional: Add a class for styling

        li.appendChild(span);
        liste.appendChild(li);
        
    }
    box.value = ''; // Clear the input box after adding the task
    savedata();
}

liste.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savedata();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata();
    }
});
function savedata() { 
    localStorage.setItem("data", liste.innerHTML)
}
function showtask() { list.innerHTML = localStorage.getItem('data') }
showtask();