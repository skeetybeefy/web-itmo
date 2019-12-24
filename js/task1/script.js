document.writeln("LUL UR COOL<br>")
text = document.currentScript.parentElement.innerHTML.split("</script>")[1]
text = text.split("<")[0]

let spaces = 0;
let letters = 0;
for (let i of text) {
    if (i == ' ') {
        spaces++;
    }
    else {
        letters++;
    }
}

document.write(`WORDS = ${spaces + 1}, `);
document.write(`LETTERS = ${letters}<br>`);
//document.write('Да, там должно быть 9, но из-за br стало 10, перенос \\n и writeln не особо работают<br>')
document.write("Потому что не может динамически изменять контент, придется перерисовывать страницу<br>")
document.write("Записывается прямо туда где он стоит, поставить скрипт в то место куда надо<br>")

url = document.URL
protocol = url.split("://")[0]
fileAndArgs = url.split("://")[1].split("/")[1]
let [file, args] = fileAndArgs.split("?")
let [name, ext] = file.split(".")
argsObj = {}

if (typeof(args) != "undefined") {
    for (let pair of args.split("&")){
    argsObj[`${pair.split("=")[0]}`] = pair.split("=")[1]
    }
}

document.write(`Protocol: ${protocol}<br>`)
document.write(`File name: ${name}<br>`)
document.write(`File extension: ${ext}<br>`)
document.write(`Args object in console, look:<br>`)
console.log(argsObj)
document.write("------------------TASK2----------------------<br>")

// part 2 below

document.write(`Number of anchors: ${document.getElementsByTagName("a").length}<br>`)
document.write(`Number of links: ${document.getElementsByTagName("link").length}<br>`)
document.write(`First anchor text: ${document.getElementsByTagName("a")[0].innerText}<br>`)
document.write(`Number of images: ${document.getElementsByTagName("img").length}<br>`)
document.write(`Width of the first img: ${document.getElementsByTagName("img")[0].width}<br>`)

maxWidth = 0
totalHeight = 0
for (img of document.getElementsByTagName("img")) {
    if (maxWidth < img.width) {
        maxWidth = img.width 
    } 
    totalHeight += img.height
} 
document.write(`Max width is: ${maxWidth}<br>`)
document.write(`Total height is: ${totalHeight}<br>`)
document.write("------------------TASK3----------------------<br>")

//part 3 below

const body = document.getElementsByTagName("body")[0]
formString = '' // to display even forms
types = ['text', 'time', 'password', 'email'] 


for (let i = 1; i <= 10; i++) {

    const form = document.createElement("form")
    form.setAttribute("name", `form${i}`)
    form.id = i
    body.appendChild(form)

    if (i % 2 == 0) {
        formString += form.name + ", "
    }

    inputNumber = Math.floor(Math.random() * 3) + 2
    for (let a = 1; a <= inputNumber; a++) {
        const input = document.createElement("input")
        input.setAttribute("type", types[Math.floor(Math.random() * types.length)])
        input.setAttribute("placeholder", `${input.type}`)
        form.appendChild(input)
    }

    const formNameButton = document.createElement("button")
    formNameButton.className = "form-name-btn"
    formNameButton.innerHTML = "<img width='25' height='25' src='./assets/avocado.png'>"
    formNameButton.innerHTML += "Show the name of a form"
    formNameButton.setAttribute("type", "button")
    form.appendChild(formNameButton)
    formNameButton.addEventListener("click", () => {
        alert(formNameButton.innerText);
    })
    
    const childOf = document.createElement("button")
    childOf.innerHTML = "<img width='25' height='25' src='./assets/lemon.png'>"
    childOf.innerHTML += "Show ID of the parent"
    childOf.className = "child-btn"
    childOf.setAttribute("type", "button")
    form.appendChild(childOf)
    childOf.addEventListener("click", () => {
        alert(childOf.parentNode.id)
    })

    const clearAll = document.createElement("button")
    clearAll.innerHTML = "<img width='25' height='25' src='./assets/apple.png'>"
    clearAll.className = 'clear-btn'
    clearAll.setAttribute("type", "reset")
    clearAll.innerHTML += "Clear form"
    form.appendChild(clearAll)

    const inputsCount = document.createElement("button")
    inputsCount.className = 'input-btn'
    inputsCount.setAttribute("type", "button")
    inputsCount.innerHTML = "<img width='25' height='25' src='./assets/banana.png'>"
    inputsCount.innerHTML += "Show the number of input fields"
    form.appendChild(inputsCount)
    inputsCount.addEventListener("click", () => {
        inputs = 0
        for (let b = 0; b < form.childNodes.length; b++) {
            if (form.childNodes[b].localName == "input") inputs += 1
        }
        alert(inputs)
    })

}


formString = formString.slice(0, formString.length - 2)
document.write(formString)

