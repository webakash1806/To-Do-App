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

        const completeBtn = document.createElement("button")
        completeBtn.classList.add("complete-btn")
        completeBtn.innerHTML = `<i class="fa-solid fa-check"></i>`

        resultDiv.appendChild(deleteBtn)
        resultDiv.appendChild(inputTask)
        resultDiv.appendChild(editBtn)
        resultDiv.appendChild(completeBtn)

        resultDiv.querySelector(".delete-btn").addEventListener("click", (e) => {
            resultDiv.remove()
        })

        resultDiv.querySelector(".edit-btn").addEventListener("click", (e) => {
            if (inputTask.style.textDecoration === "line-through") {
                alert("you can't edit after Compeletion")
                inputTask.setAttribute("readonly", "readonly")
            }

            else if (editBtn.innerHTML === `<i class="fa-solid fa-pen-to-square"></i>`) {
                editBtn.innerHTML = `<i class="fa-solid fa-circle-arrow-right"></i>`
                inputTask.removeAttribute("readonly", "readonly")
                inputTask.style.border = "1px solid #b721f3"
                inputTask.style.boxShadow = "1px 1px 10px  #b721f3"
            }

            else {
                editBtn.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`
                inputTask.setAttribute("readonly", "readonly")
                inputTask.style.border = "1px solid #000"
                inputTask.style.boxShadow = "1px 1px 10px #000"
            }
        })

        resultDiv.querySelector(".complete-btn").addEventListener("click", (e) => {
            inputTask.style.textDecoration = "line-through"
            inputTask.style.boxShadow = "1px 1px 10px green"
        })
    }
})












