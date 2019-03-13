
console.log("Working")
window.onload = function () {

    let newtask = document.getElementById('newtask')
    let addbtn = document.getElementById('addbtn')
    let tasklist = document.getElementById('tasklist')

    function newLineTask() {

        let newtaskvalue = newtask.value
        let newtasklist = document.createElement('li')
        newtasklist.className = "list-group-item"
        newtasklist.innerText = newtaskvalue
        tasklist.appendChild(newtasklist)
        newtask.value = ""
        newtasklist.onclick = function (ev) {
            if (ev.target.className.indexOf('disabled') === -1) {
                ev.target.className = 'list-group-item disabled'
            }
            else {
                ev.target.className = 'list-group-item'
            }

        }
    }

    addbtn.onclick = function () {
        newLineTask()
    }

    newtask.addEventListener('keypress', function (ev) {//for enter key
        if (ev.keyCode == '13')
            newLineTask()
    })
}
