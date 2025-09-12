let namaUser = prompt("Masukkan Nama Anda ")
if(namaUser != "Dimas"){
    const load = document.getElementById("loading")
const body = document.body

function instagram(){
    load.style.display = "flex"
    body.style.opacity = "0.7"
    setTimeout(()=>{
        window.location.href = "https://instagram.com/ptramadian_"
    },1200)
}

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

const calcLeft = document.getElementById("calc-left")
const calcRight = document.getElementById("calc-right")
const value = document.getElementById("value")

const numbers = ["1","2","3","4","5","6","7","8","9","(","0",")"]
numbers.forEach((number)=>{
    const button = document.createElement("button")
    button.innerHTML = number
    button.addEventListener("click",()=>{
        value.innerHTML += number
    })
    calcLeft.append(button)
})

const operations = ["+","-","x","/"]
operations.forEach((operation)=>{
    const button = document.createElement("button")
    button.innerHTML = operation
    button.addEventListener("click",()=>{
        value.innerText += operation
    })
    calcRight.append(button)
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
calcRight.append(enter)
enter.addEventListener("click",()=>{
    let ekspresi = value.innerHTML
    ekspresi = ekspresi.replace(/x/g, "*")
    try{
        value.innerHTML = eval(ekspresi)
    }
    catch(error){
        value.innerHTML = error
    }
})

let enit = 0
const warna = ["red","black","white","brown","blue","white","transparent"]
const bgr = document.createElement("button")
const parallax2 = document.getElementById("parallax2")
calcRight.append(bgr)
bgr.addEventListener("click",()=>{
    enit ++
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
        "Hi! Whats Your Name?",
        `Hello ${data?.nama}, where are you from`,
        `Ohh youre from ${data?.kota}, whats your hobby??`,
        `Wow ${data?.hobi}, such a good hobby`,
    ]
}

let init = 0
let userData = [ ]
botAnswer.innerHTML = botSay()[0]

function submit(){
    init ++
    if(init === 1){
        responseBot({nama :user.value})
    }
    else if (init === 2){
        responseBot({kota : user.value})
    }
    else if (init === 3){
        responseBot({hobi : user.value})
        user.style.display = "none"
    }
    else if (init === 4){
        botAnswer.innerHTML = "Nice to know You!"
        setTimeout(()=>{
            load.style.display = "flex"
            body.style.opacity = "0.7"
        },500)
        setTimeout(()=>{
            window.location.reload()
        },2500)
    }
}

function responseBot(jawabanUser){
    userData.push(user.value)
    load.style.display = "flex"
    body.style.opacity = "0.7"
    setTimeout(()=>{
        load.style.display = "none"
        body.style.opacity = "1"
        user.value = ' '
        botAnswer.innerHTML = botSay(jawabanUser)[init]
    },1300)
}

}
else{
    alert("ERROR COBA KEMBALI")
    setTimeout(()=>{
        window.location.reload()
    },2000)
}