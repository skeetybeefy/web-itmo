const body = document.body

const form = document.createElement("form")

const linesField = document.createElement("input")
linesField.setAttribute("type", "number")
linesField.placeholder = "Enter number of lines"

const rowsField = document.createElement("input")
rowsField.setAttribute("type", "number")
rowsField.placeholder = "Enter number of rows"

const createTable = document.createElement("button")
createTable.innerText = "Создать таблицу"
createTable.setAttribute("type", "button")
createTable.addEventListener("click", tableCreator)

body.appendChild(form)

form.appendChild(linesField)
form.appendChild(rowsField)
form.appendChild(createTable)


function tableCreator() {
    [lines, rows] = document.getElementsByTagName("input")
    lines = lines.value
    rows = rows.value
    form.remove()

    const table = document.createElement("table")
    body.appendChild(table)
    for (let i = 0; i < lines; i++) {
        const line = document.createElement("tr")
        table.appendChild(line)
        for (let j = 0; j < rows; j++) {
            const row = document.createElement("td")

            const div = document.createElement("div")
            div.className = 'cell-container'

            const textarea = document.createElement("textarea")
            div.appendChild(textarea)

            const save = document.createElement("button")
            save.setAttribute("type", "button")
            save.className = 'save-btn'
            save.innerText = "Сохранить"
            div.appendChild(save)
            row.appendChild(div)
            save.addEventListener("click", () => {
                div.innerHTML = textarea.value                
            })

            line.appendChild(row)
        }
    }

    const functionsDiv = document.createElement("div")
    functionsDiv.className = 'border-func'

    const funcHeader = document.createElement("p")
    funcHeader.innerHTML = "Изменить границы таблицы"
    functionsDiv.appendChild(funcHeader)

    const input = document.createElement("input")
    input.setAttribute("type", "number")
    functionsDiv.appendChild(input)
    input.addEventListener("keyup", updateButtonText)

    const dropdown = document.createElement("select")
    functionsDiv.appendChild(dropdown)
    dropdown.addEventListener("change", () => {
        selected = dropdown.childNodes[dropdown.selectedIndex].value
        updateButtonText()
    })

    for (let border of ['solid', 'dashed', 'dotted', 'double']) {
        const option = document.createElement("option")
        if (border == "solid") option.setAttribute("selected", true)        
        option.value = border
        option.innerText = border
        dropdown.appendChild(option)
    }
    
    selected = dropdown.childNodes[dropdown.selectedIndex].value

    const apply = document.createElement("button")
    apply.setAttribute("type", "button")
    apply.innerText = 'Применить'
    functionsDiv.appendChild(apply)
    apply.addEventListener("click", () => {
        table.style.border = `${input.value}px ${selected} black`
    })

    function updateButtonText() {
        apply.innerText = `Применить ${input.value}px и рамка ${selected}`
    }

    const addHeader = document.createElement("p")
    addHeader.innerHTML = "Добавить заголовок"
    functionsDiv.appendChild(addHeader)

    const headerText = document.createElement("input")
    headerText.setAttribute("type", "text")
    functionsDiv.appendChild(headerText)

    const addButton = document.createElement("button")
    addButton.setAttribute("type", "button")
    addButton.innerText = "Добавить"
    addButton.addEventListener("click", () => {
        const tableHeader = document.createElement("div")
        tableHeader.className = 'header'
        tableHeader.innerText = headerText.value
        body.insertBefore(tableHeader, table)
    })
    functionsDiv.appendChild(addButton)

    const removeLineHeader = document.createElement("p")
    removeLineHeader.innerText = "Удалить строку"
    functionsDiv.appendChild(removeLineHeader)

    const removeLineInput = document.createElement("input")
    removeLineInput.setAttribute("type", "number")
    functionsDiv.appendChild(removeLineInput)

    const removeLineButton = document.createElement("button")
    removeLineButton.setAttribute("type", "button")
    removeLineButton.innerText = "Удалить"
    currentLines = lines
    removeLineButton.addEventListener("click", () => {
        if (removeLineInput.value > currentLines) {
            alert("Введено число больше количества существующих строк")    
        }
        else {
            deleted = document.getElementsByTagName("tr")[removeLineInput.value - 1]
            deleted.remove()
            currentLines -= 1
        }
    })

    functionsDiv.appendChild(removeLineButton)

    const magicButton = document.createElement("button")
    magicButton.setAttribute("type", "button")
    magicButton.innerText = "Magic!"
    magicButton.className = 'magic-btn'
    magicButton.addEventListener("click", () => {
        elem = document.getElementsByTagName("tr")[Math.floor(Math.random() * lines)].childNodes[Math.floor(Math.random() * rows)].childNodes[0]
        switch (Math.floor(Math.random() * 2)) {
            case 0:
                elem.style['background-color'] = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
                elem.style.color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
                elem.style['font-size'] = `${Math.floor(Math.random() * 10) + 15}pt`
            case 1:
                elem.innerHTML = ''
                textareaNew = document.createElement("textarea")
                elem.appendChild(textareaNew)
                const saveNew = document.createElement("button")
                saveNew.setAttribute("type", "button")
                saveNew.className = 'save-btn'
                saveNew.innerText = 'Сохранить'
                saveNew.addEventListener("click", () => {
                    elem.innerText = textareaNew.value
                })
                elem.appendChild(saveNew)
        }
    })

    functionsDiv.appendChild(magicButton)

    const deleteTableButton = document.createElement("button")
    deleteTableButton.setAttribute("type", "button")
    deleteTableButton.className = 'delete-btn'
    deleteTableButton.innerText = 'Удалить таблицу'
    deleteTableButton.addEventListener("click", () => {
        functionsDiv.remove()
        table.remove()
        body.appendChild(form)
    })

    functionsDiv.appendChild(deleteTableButton)

    body.insertBefore(functionsDiv, table)

} 



