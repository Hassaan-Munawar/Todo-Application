var getul = document.querySelector("#ul")
var getinp = document.querySelector("#inp")


function addTodo() {
    var createli = document.createElement("li")
    createli.style.marginTop = '40px'
    createli.style.height = "40px"
    var litext = document.createTextNode(getinp.value)
    createli.appendChild(litext)
    getul.appendChild(createli)
    getinp.value = ""
    var maindiv = document.createElement("div")
    maindiv.style.display = "inline-block"
    maindiv.setAttribute("id", "moveright")
    createli.appendChild(maindiv)
    var spams = document.createElement("div")
    spams.style.display = 'inline-block'
    spams.style.width = '15px'
    maindiv.appendChild(spams)
    var delBtn = document.createElement("button")
    delBtn.setAttribute("class", "btn btn-warning mobile")
    delBtn.style.width = "85px"
    var delText = document.createTextNode("Delete")
    delBtn.appendChild(delText)
    maindiv.appendChild(delBtn)
    delBtn.setAttribute("onclick", "delList(this)")
    var spam = document.createElement("div")
    spam.style.display = 'inline-block'
    spam.style.width = '5px'
    maindiv.appendChild(spam)
    var editBtn = document.createElement("button")
    editBtn.setAttribute("class", "btn btn-danger mobile")
    editBtn.style.width = "85px"
    var editText = document.createTextNode("Edit")
    editBtn.appendChild(editText)
    maindiv.appendChild(editBtn)
    editBtn.setAttribute("onclick", "editList(this)")
    var spamssss = document.createElement("div")
    spamssss.style.display = 'inline-block'
    spamssss.style.width = '5px'
    maindiv.appendChild(spamssss)
    var spamss = document.createElement("div")
    spamss.style.display = 'inline-block'
    // spamss.style.width='5px'
    maindiv.appendChild(spamss)
    var doneBtn = document.createElement("button")
    var doneText = document.createTextNode("Done")
    doneBtn.appendChild(doneText)
    spamss.appendChild(doneBtn)
    doneBtn.setAttribute("onclick", "done(this)")
    doneBtn.setAttribute("class", "btn btn-info mobile")
    doneBtn.style.width = "90px"
}

function done(e) {
    e.parentNode.parentNode.parentNode.style.backgroundColor = 'lightgreen'
    var get = e.parentNode
    console.log(e.parentNode)
    var undone = document.createElement("button")
    var undoneText = document.createTextNode("Undo")
    undone.appendChild(undoneText)
    get.appendChild(undone)
    undone.style.width = "85px"
    undone.setAttribute("onclick", "again(this)")
    undone.setAttribute("class", "btn btn-primary mobile")
    e.remove()
}

function again(e) {
    e.parentNode.parentNode.parentNode.style.backgroundColor = 'beige'
    var get = e.parentNode
    var doneBtn = document.createElement("button")
    var doneText = document.createTextNode("Done")
    doneBtn.appendChild(doneText)
    get.appendChild(doneBtn)
    doneBtn.setAttribute("onclick", "done(this)")
    doneBtn.setAttribute("class", "btn btn-info mobile")
    doneBtn.style.width = "90px"
    e.remove()

}

var editTodo = document.createElement("button")
var editText = document.createTextNode("Edit Todo")
editTodo.setAttribute("class", "btn btn-primary")


function editList(e) {

    getinp.value = e.parentNode.parentNode.firstChild.data
    var c = e.parentNode.parentNode.setAttribute("id", "list")
    editTodo.appendChild(editText)
    var add = document.getElementById("addTdo")
    add.disabled = true
    var getspan = document.getElementById("span")
    getspan.appendChild(editTodo)
    editTodo.setAttribute("onclick", "edits()")
}

function edits() {
    var getid = document.querySelector("#list")
    getid.firstChild.data = getinp.value
    getinp.value = ''
    var add = document.getElementById("addTdo")
    add.disabled = false
    editTodo.remove()
    getid.removeAttribute("id")
}
function delList(e) {
    e.parentNode.parentNode.remove()
}
function delall() {
    getul.innerHTML = ""
    getinp.value = ""
}