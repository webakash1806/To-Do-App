document.getElementById("sub").addEventListener("click", function submit() {
    let inp = document.getElementById("inp").value

    if (inp === "") {
        alert("Enter Something")
    }
    else {
        const resultDiv = document.createElement("div")
        resultDiv.classList.add("item")

        document.getElementById("mainCont").appendChild(resultDiv)

        const inputTask = document.createElement("input")
        inputTask.classList.add("input-task")
        inputTask.value = inp
        inputTask.setAttribute("readonly", "readonly")

        const deleteBtn = document.createElement("button")
        deleteBtn.classList.add("delete-btn")
        deleteBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`

        const editBtn = document.createElement("button")
        editBtn.classList.add("edit-btn")
        editBtn.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`

        resultDiv.appendChild(inputTask)
        resultDiv.appendChild(deleteBtn)
        resultDiv.appendChild(editBtn)

        resultDiv.querySelector(".delete-btn").addEventListener("click", (e) => {
            resultDiv.remove()
        })

        resultDiv.querySelector(".edit-btn").addEventListener("click", (e) => {
            if (editBtn.innerHTML === `<i class="fa-solid fa-pen-to-square"></i>`) {
                editBtn.innerHTML = `<i class="fa-solid fa-circle-arrow-right"></i>`
                inputTask.removeAttribute("readonly", "readonly")
            }
            else {
                editBtn.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`
                inputTask.setAttribute("readonly", "readonly")

            }
        })
    }
})


// function updateLSData() {
//     const textData = document.querySelectorAll('.input-task').value
//     const notes = []
//     textData.forEach((note) => {
//         return notes.push(note.value)
//     })
//     console.log(notes)
//     localStorage.setItem('notes', JSON.stringify(notes))
// }

// updateLSData()









