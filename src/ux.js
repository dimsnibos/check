const load = document.getElementById("loading")
const body = document.body

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
    calcLeft.append(button)
    button.innerHTML = number
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
calcRight.append(del)

const clear = document.createElement("button")
clear.innerHTML = "CLEAR"
clear.addEventListener("click",()=>{
    value.innerHTML = " "
})
calcRight.append(clear)

const enter = document.createElement("button")
enter.innerHTML = "ENTER"
calcRight.append(enter)
enter.addEventListener("click",()=>{
    let ekspresi = value.innerHTML
    ekspresi = ekspresi.replace(/x/g,"*")
    try{
        value.innerHTML = eval(ekspresi)
    }
    catch(error){
        value.innerHTML = error
    }
})

let enit = 0
const bgr = document.createElement("button")
bgr.innerHTML = "BGR"
calcRight.append(bgr)
const warna = ["red","blue","white","brown","transparent"]
const parallax2 = document.getElementById("parallax2")
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

const user = document.getElementById("userTanya")
const botAnswer = document.getElementById("botJawab")

function botSay(data){
    return[
        `Hello, whats your name??`,
        `Hi ${data?.nama}, Where are you from? `,
        `Ouh youre from ${data?.kota}, great!, what's your hoby?`,
        `Wow ${data?.hobi}, such a good hobby`,
    ]
}

let userData = [ ]
let init = 0
botAnswer.innerHTML = botSay()[0]

function submit(){
    init ++
    if(init === 1){
        responseBot({nama : user.value})
    }
    else if (init === 2){
        responseBot({kota : user.value})
    }
    else if (init === 3){
        responseBot({hobi : user.value})
        user.style.display = "none"
    }
    else if (init === 4){
        botAnswer.innerHTML = "Thank You"
        setTimeout(()=>{
            load.style.display = "flex"
            body.style.opacity = "0.7"
        },500)
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
        user.value = ""
        body.style.opacity = "1"
        botAnswer.innerHTML = botSay(jawabanUser)[init]
    },1200)
}
































// const silang = document.getElementById("silang")
// const link = document.getElementById("linkwoi")
// link.style.display = "none"
// silang.addEventListener("click",()=>{
//     if (link.style.display === "none"){
//         link.style.display = "block"
//     }
//     else{
//         link.style.display = "none"
//     }
// })


// const load = document.getElementById("loading")
// const body = document.body
// function instagram(){
//     body.style.opacity = "0.7"
//     load.style.display = "flex"
//     setTimeout(()=>{
//     body.style.opacity = "1"
//     load.style.display = "none"
//     window.location.href = "https://instagram.com/ptramadian_"
//     },1200)
// }

// const value = document.getElementById("value")
// const calcLeft = document.getElementById("calc-left")
// const calcRight = document.getElementById("calc-right")

// const numbers = ["1","2","3","4","5","6","7","8","9","(","0",")"]
// numbers.forEach((number)=>{
//     const button = document.createElement("button")
//     button.innerHTML = number
//     calcLeft.append(button)
//     button.addEventListener("click",()=>{
//         value.innerHTML += number
//     })
// })

// const operations = ["+","-","x","/"]
// operations.forEach((operation)=>{
//     const button = document.createElement("button")
//     button.innerHTML = operation
//     calcRight.append(button)
//     button.addEventListener("click",()=>{
//         value.innerHTML += operation
//     })
// })

// const del = document.createElement("button")
// del.innerHTML = "DEL"
// del.addEventListener("click",()=>{
//     value.innerHTML = value.innerHTML.slice(0, -1)
// })
// calcRight.append(del)

// const enter = document.createElement("button")
// enter.innerHTML = "ENTER"
// enter.addEventListener("click",()=>{
//     let ekspresi = value.innerHTML
//     ekspresi = ekspresi.replace(/x/g, "*")
//     try{
//         value.innerHTML = eval(ekspresi)
//     }
//     catch(error){
//         value.innerHTML = error
//     }
// })
// calcRight.append(enter)

// const clear = document.createElement("button")
// clear.innerHTML = "CLEAR"
// clear.addEventListener("click",()=>{
//     value.innerHTML = "CLEAR THE AREA...."
//     setTimeout(()=>{
//         value.innerHTML = " "
//     },1200)
// })
// calcRight.append(clear)

// const changeBg = document.createElement("button")
// changeBg.innerHTML = "BGR"
// const parallax2 = document.getElementById("parallax2")
// let enit = 0
// const warna = ["red","white","yellow","brown","transparent"]
// changeBg.addEventListener("click",()=>{
//     parallax2.style.backgroundColor = warna[enit]
// })
// calcRight.append(changeBg)

// const piano = document.getElementById("chord")
// const chords = ["a","c","d","e","f"]
// chords.forEach((chord)=>{
//     const button = document.createElement("button")
//     button.innerText = chord
//     piano.append(button)
//     button.addEventListener("click",()=>{
//         const sound = new Audio(`asset/${chord}.wav`)
//         sound.play()
//     })
// })

// const user = document.getElementById("userTanya")
// const botAnswer = document.getElementById("botJawab")

// function botSay(data){
//     return[
//         `Hello, Im DimsKuy Who are you??`,
//         `Hi ${data?.nama}, where are you from?`,
//         `Ohh youre from ${data?.kota}, Whats your hobby? `,
//         `Wow ${data?.hobi}, such a good hobby..`,
//     ]
// }

// let userData = [ ]
// botAnswer.innerHTML = botSay()[0]
// let init = 0

// function submit(){
//     init++
//     if(init === 1){
//         responseBot({nama : user.value})
//     }
//     else if (init === 2){
//         responseBot({kota : user.value})
//     }
//     else if (init === 3){
//         responseBot({hobi : user.value})
//     }
//     else if (init === 4){
//         user.style.display = "none"
//         botAnswer.innerHTML = "Restarting bottt...."
//         setTimeout(()=>{
//               load.style.display = "flex"
//               body.style.opacity = "0.7"
//         },300)
//         setTimeout(()=>{
//             window.location.reload()
//         },2000)
//     }
// }

// function responseBot(jawabanUser){
//     userData.push(user.value)
//       load.style.display = "flex"
//       body.style.opacity = "0.7"
//       setTimeout(()=>{
//         user.value = " "
//         load.style.display = "none"
//         body.style.opacity = "1"
//         botAnswer.innerText = botSay(jawabanUser)[init]
//       },1200)

// }

