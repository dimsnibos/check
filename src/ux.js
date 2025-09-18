let namaLu = prompt("Masukkan nama anda : ")
if(namaLu != "Dimas" ){
    alert("Hello " + namaLu + " !, Welcome to my web")
    const load = document.getElementById("loading")
const body = document.body

const silang = document.getElementById("silang")
const link = document.getElementById("linkwoi")
link.style.display = "none"
silang.addEventListener("click",()=>{
    if(link.style.display === "none"){
        link.style.display = "block"
    }
    else{
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

const operations = ["+","x","-","/"]
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
calcRight.append(del)

const clear = document.createElement("button")
clear.innerHTML = "CLEAR"
clear.addEventListener("click",()=>{
    value.innerHTML = "CLEAR THE AREA"
    setTimeout(()=>{
        value.innerHTML = " "
    },1200)
})
calcRight.append(clear)

const enter = document.createElement("button")
enter.innerHTML = "ENTER"
enter.addEventListener("click",()=>{
    let ekspresi = value.innerHTML
    ekspresi = ekspresi.replace(/x/g, "*")
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

const bgr = document.createElement("button")
bgr.innerHTML = "BGR"
const warna = ["red","black","white","brown","black","transparent"]
let enit = 0
const parallax2 = document.getElementById("parallax2")

bgr.addEventListener("click",()=>{
    enit++
    parallax2.style.backgroundColor = warna[enit]
})
calcRight.append(bgr)

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
        `Hello i'm D, What's your name?`,
        `Hi ${data?.nama}, Where are you from?`,
        `Ouhh youre from ${data?.kota}, what's your fav game?`,
        `Wow ${data?.game}, that's interesting!`,
        `Nice to know ya!`,
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
    else if (init === 3){
        responseBot({game : user.value})
        user.style.display = "none"
    }
    else if(init === 4){
        setTimeout(()=>{
            load.style.display = "flex"
            body.style.opacity = "0.7"
        },1200)
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
        botAnswer.innerHTML = botSay(jawabanUser)[init]
        load.style.display = "none"
        body.style.opacity = "1"
        user.value = " "
    },1200)
}
}
else{
    alert("ERROR WRONG NAME !")
    setTimeout(()=>{
        window.location.reload()
    },1200)
}