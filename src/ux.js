let namalu = prompt("masukkan nama anda")
if(namalu != "Dimas"){
    alert("HELLOWWW WELCOMEE "+ namalu)
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

const calcLeft = document.getElementById("calc-left")
const calcRight = document.getElementById("calc-right")
const value = document.getElementById("value")

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
del.addEventListener("click",()=>{
    value.innerHTML = value.innerHTML.slice(0, -1)
})
calcRight.appendChild(del)

const clear = document.createElement("button")
clear.innerHTML = "CLEAR"
clear.addEventListener("click",()=>{
    value.innerHTML = "CLEAR THE AREA..."
    setTimeout(()=>{
        value.innerHTML = " "
    },1200)
})
calcRight.append(clear)

const enter = document.createElement("button")
enter.innerHTML = "enter"
calcRight.append(enter)
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

const warna = ["red","white","blue","brown","white","transparent"]
let enit = 0
const parallax2 = document.getElementById("parallax2")

const bgr = document.createElement("button")
bgr.innerHTML = "BGR"
calcRight.append(bgr)
bgr.addEventListener("click",()=>{
    enit = enit + 1
    parallax2.style.backgroundColor = warna[enit]
})

const piano = document.getElementById("chord")
const chords = ["a","c","d","e","f"]
chords.forEach((chord)=>{
    const button = document.createElement("button")
    button.innerHTML = chord
    piano.append(button)
    button.addEventListener("click",()=>{
        const sound = new Audio(`asset/${chord}.wav`)
        sound.play()
    })
})

const user = document.getElementById("userTanya")
const botAnswer = document.getElementById("botJawab")

function botSay(data){
    return[
    `Hoy, Whats your name?`,
        `Hi ${data?.nama}, where are you from?`,
        `Ouh youre from ${data?.kota}, whats your favourite game?`,
        `Wow ${data?.game} thats interesting!`,
]
}

let init = 0
let userData = [ ]
botAnswer.innerHTML = botSay()[0]

function submit(){
    init++
    if(init === 1){
        responseBot({nama : user.value})
    }
    else if(init === 2){
        responseBot({kota : user.value})
    }
    else if(init === 3){
        responseBot({game : user.value})
        user.style.display = "none"
    }
    else if(init === 4){
        botAnswer.innerHTML = `Nice to know ya!`
        setTimeout(()=>{
            load.style.display = "flex"
            body.style.opacity = "0.7"
        },1000)
        setTimeout(()=>{
            window.location.reload()
        },3000)
    }
}

function responseBot(jawabanUser){
    userData.push(user.value)
    load.style.display = "flex"
    body.style.opacity = "0.7"
    setTimeout(()=>{
        load.style.display = "none"
        body.style.opacity = "1"
        botAnswer.innerHTML = botSay(jawabanUser)[init]
        user.value = ""
    },1200)
}
}
else{
    alert ("Nama lu "+namalu+", SALAH")
    setTimeout(()=>{
        window.location.reload()
    },1200)
}