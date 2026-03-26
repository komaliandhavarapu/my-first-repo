function addNote() {
    let note = document.getElementById("note").value;

    let li = document.createElement("li");
    li.innerText = note;

    document.getElementById("list").appendChild(li);

    document.getElementById("note").value = "";
}