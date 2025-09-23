let namalu = prompt("masukkan nama lu")
if(namalu != "Dimas"){
    alert("HIII WELCOMEE " + namalu)
    const load = document.getElementById("loading")
const body = document.body

const silang = document.getElementById("silang")
const link = document.getElementById("linkwoi")
link.style.display = "none"

silang.addEventListener("click",()=>{
    if(link.style.display === "none"){
        link.style.display = "block"
    }else{
        link.style.display = "none"
    }
})

function instagram(){
    load.style.display = "flex"
    body.style.opacity = "0.7"
    setTimeout(()=>{
        window.location.href = "https://instagram.com/ptramadian_"
    },1200) 
}

const value = document.getElementById("value")
const calcLeft = document.getElementById("calc-left")
const calcRight = document.getElementById("calc-right")

const numbers = ["1","2","3","4","5","6","7","8","9","(","0",")"]
numbers.forEach((number)=>{
    const button = document.createElement("button")
    button.innerHTML = number
    calcLeft.append(button)
    button.addEventListener("click",()=>{
        value.innerHTML += number
    })
})

const operations = ["+","-","x","/"]
operations.forEach((operation)=>{
    const button = document.createElement("button")
    button.innerHTML = operation
    calcRight.append(button)
    button.addEventListener("click",()=>{
        value.innerHTML += operation
    })
})

const del = document.createElement("button")
del.innerHTML = "DEL"
calcRight.append(del)
del.addEventListener("click",()=>{
    value.innerHTML = value.innerHTML.slice(0, -1)
})

const enter = document.createElement("button")
enter.innerHTML = "ENTER"
enter.addEventListener("click",()=>{
    let ekspresi = value.innerHTML
    ekspresi = ekspresi.replace(/x/g,"*")
    try{
        value.innerHTML = eval(ekspresi)
    }
    catch{
        value.innerHTML = "ERROR"
        setTimeout(()=>{
            value.innerHTML = " "
        },1200)
    }
})
calcRight.append(enter)

const clear = document.createElement("button")
clear.innerHTML = "CLEAR"
calcRight.append(clear)
clear.addEventListener("click",()=>{
    value.innerHTML = "CLEAR THE AREA"
    setTimeout(()=>{
        value.innerHTML = " "
    },1200)
})

const warna = ["red","white","blue","brown","transparent"]
const parallax2 = document.getElementById("parallax2")
let initt = 0

const bgr = document.createElement("button")
bgr.innerHTML = "BGR"
calcRight.append(bgr)
bgr.addEventListener("click",()=>{
    initt = initt + 1
    parallax2.style.backgroundColor = warna[initt]
})

const piano = document.getElementById("chord")
const chords = [ "a","c","d","e","f"]
chords.forEach((chord)=>{
    const button = document.createElement("button")
    button.innerHTML = chord
    button.addEventListener("click",()=>{
        const sound = new Audio(`asset/${chord}.wav`)
        sound.play()
    })
    piano.append(button)
})

const user = document.getElementById("userTanya")
const botAnswer = document.getElementById("botJawab")

function botSay(data){
    return[
        `Whats your namee?`,
        `Hii ${data?.nama}, where are you from?`,
        `Ouhh youre from ${data?.kota}, whats your favourite game?`,
        `Wow ${data?.game}, thats interesting!`,
    ]
}

let userData = [ ]
let init = 0
botAnswer.innerHTML = botSay()[0]

function submit(){
    init = init + 1
    if(init === 1){
    responseBot({nama : user.value})
    }
    else if (init === 2){
    responseBot({kota : user.value})
    }
    else if (init === 3){
        responseBot({game : user.value})
        user.style.display = "none"
    }
    else if (init === 4){
        botAnswer.innerHTML = "Nice to know ya!"
        setTimeout(()=>{
            window.location.reload()
        },1200)
    }
}

function responseBot(jawabanUser){
    userData.push(user.value)
    load.style.display = "flex"
    body.style.opacity = "0.7"
    setTimeout(()=>{
        load.style.display = "none"
        body.style.opacity = "1"
        user.value = ""
        botAnswer.innerHTML = botSay(jawabanUser)[init]
    },1200)
}
}
else{
    alert("ASUU")
    setTimeout(()=>{
        window.location.reload()
    },1200)
}