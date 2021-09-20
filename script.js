count = Number(window.localStorage.getItem("count"));
if(!count){
    window.localStorage.setItem("count", "0")
}

function createNote(noteTitle, noteBody) {
    
    
    document.getElementById("no-notes").classList.add("hidden")


    let li = document.createElement("li")
    let a = document.createElement("a")
    let h2 = document.createElement("h2")
    let p = document.createElement("p")
    let xButton = document.createElement("Button")
    let eButton = document.createElement("Button")

    xButton.classList.add("delete")
    eButton.classList.add("edit")

    // creating text node
    let xText = document.createTextNode("X")
    let eText = document.createTextNode('edit')
    let h2TN = document.createTextNode(noteTitle)
    let pTN = document.createTextNode(noteBody)


    h2.appendChild(h2TN)
    p.appendChild(pTN)
    xButton.appendChild(xText)
    eButton.appendChild(eText)

    // adding children to the a tag
    a.appendChild(h2)
    a.appendChild(xButton);
    a.appendChild(p);
    a.appendChild(eButton)
    // setting attribute
    a.setAttribute("href", "#")

    li.appendChild(a)

    // append the lists to the ul element
    document.getElementById("notes").appendChild(li)

   

}

function createNoteFromInput(e) {
    e.preventDefault();

    let noteTitle = document.getElementById("new-note-title-input").value
    let noteBody = document.getElementById("new-note-body-input").value

    document.getElementById("new-note-title-input").value = ""
    document.getElementById("new-note-body-input").value = ""


    // save the current count
     count += 1;
     window.localStorage.setItem("count", count)

     window.localStorage.setItem(noteTitle, noteBody)

    // create note when submitted
    createNote(noteTitle, noteBody);
}

function removeItem(e) {
   
    if(e.target.classList.contains("delete")){//check if the target contains the class name "delete"
        if(confirm("Are you sure you want to remove this note")){
            let li = e.target.parentElement.parentElement
            // grab the items
            let ul = document.getElementById("notes")
            ul.removeChild(li)
        }
    }

    count -= 1

     if (count < 1) {
       document.getElementById("no-notes").className = "";
     }
}

function edit(e) {
  if(e.target.classList.contains("edit")){
    let li = e.target.parentElement.parentElement
    let ul = document.getElementById("notes")
    
  }
}

for (i=0; i<count + 1; i++){
  // instead of getItem method, key method is used to
  // Returns the name of the nth key, or null if n is 
//   greater than or equal to the number of key/value pairs.
  let noteTitle = window.localStorage.key(i);
  let noteBody = window.localStorage.getItem(noteTitle)

//   create a note only if note title is note equal to count and note title is not empty 
  if (noteTitle !== "count" && noteTitle){
      createNote(noteTitle, noteBody)
  }
}

document.getElementById('inputForm').addEventListener("submit", createNoteFromInput, false);
document.getElementById("notes").addEventListener("click", removeItem)