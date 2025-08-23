const load = document.getElementById("loading")
const body = document.body
function instagram(){
    body.style.opacity = "0.7"
    load.style.display = "flex"

    setTimeout(()=>{
        load.style.display = "none"
        window.location.href="https://instagram.com/ptramadian_"
          body.style.transition = "all 0.3s ease-in-out"
    },2000)
    
}

const value = document.getElementById("value")
const calcLeft = document.getElementById("calc-left")
const calcRight = document.getElementById("calc-right")
const numbers = ["1","2","3","4","5","6","7","8","9","(","0",")"]
const operations = ["+","-","/","x"]
const del = document.createElement("button")
const enter = document.createElement("button")


numbers.forEach((number)=>{
    const button = document.createElement("button")
    button.innerHTML = number
    calcLeft.append(button)
    button.addEventListener("click",()=>{
        value.innerHTML += number
    })
})

operations.forEach((operation)=>{
    const button = document.createElement("button")
    button.innerHTML = operation
    calcRight.append(button)
    button.addEventListener("click",()=>{
        value.innerHTML += operation
    })
})

del.innerHTML = "DEL"
calcRight.append(del)
del.addEventListener("click",()=>{
    value.innerHTML = value.innerHTML.slice(0, -1)
})

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
        setTimeout(()=>{
          value.innerHTML = ""  
        },1200)
    }
})

const bg = document.createElement("button")
const p2 = document.getElementById("parallax2")
bg.innerText = "BGR"
calcRight.append(bg)
init = -1
const color = ["white","yellow","brown","transparent"]
bg.addEventListener("click", ()=>{
    init++
    console.log("A")
    init <= 3
    p2.style.backgroundColor = color[init]
})

const piano = document.getElementById("chord")
const chords = ["a","c","d","e","f"]
chords.forEach((chord)=>{
    const button = document.createElement("button")
    button.innerHTML = chord
    piano.append(button)
    button.addEventListener("click",()=>{
        const sound = new Audio(`asset/${chord}.wav`)
        // value.innerHTML = chord
        sound.play()
    })
})

const user = document.getElementById("userTanya")
const botAnswer = document.getElementById("botJawab")

function bottSay(data){
    return [
        `Hi Im DIMSBOT, What's your name? `,
        `Hi ${data?.nama}, what's your hobby?`,
        `Wow ${data?.hobi}, where are u form? `,
        `Ouhh youre from ${data?.kota}, that's good place`,
        `Nice to talk with you, BYEE`
    ]

}

botAnswer.innerHTML = bottSay()[0]
enit = 0
let userData = [ ]

function submit(){
    enit = enit + 1
    if(enit === 1){
        responseBot({nama : user.value})
        user.value = ""
    }
    else if(enit === 2){
        responseBot({hobi : user.value})
         user.value = ""
    }
        else if(enit === 3){
        responseBot({kota : user.value})
        user.style.display = "none"
    }
        else if(enit === 4){
         botAnswer.innerHTML = bottSay()[4]
                 user.style.display = "none"
                         setTimeout(()=>{

            load.style.display = "flex"
            body.style.opacity = '0.69'
        },2000)
        setTimeout(()=>{
            window.location.reload()
        },3000)
    }
        

    
}

function responseBot(jawabanUser){
    userData.push(user.value)
    load.style.display = "flex"
    body.style.opacity = "0.6"
    setTimeout(()=>{
         load.style.display = "none"
    body.style.opacity = "1"
    botAnswer.innerHTML = bottSay(jawabanUser)[enit]
    },1100)
}


const silang = document.getElementById("silang")
const link = document.getElementById("linkwoi")
 link.style.display = "none"

silang.addEventListener("click",()=>{
   
    if (link.style.display === "none"){
        link.style.display = "block"
    }
    else{
        link.style.display = "none"
    }   
})
// function botSay(data){
//     return [
//      'Hello! my name is DimsKuyBot, Who`s your name?',           //Fungsi ini bikin list pertanyaan (pakai array).           
//      `Hii ${data?.nama}, How old are youu?`,                     // 'data?' itu optional chaining. Jadi kalau datanya belum ada, gak error
//      `Ouhh ${data?.usia}, what about your goals?`,               //- Gunanya buat personalisasi pertanyaan sesuai jawaban user sebelumnya 🫶
//      `woww ${data?.citaCita}, such a good goal, Goodluck!`,
// ]
// }
// botAnswer.innerText = botSay()[0]
// enit = 0
// let Data = [ ]

// function submit(){

//     enit = enit + 1
//     if(enit === 1){
//         dataUser({nama : user.value}) 
//             user.value = ""
//     }
//     else if(enit === 2){
//         dataUser({usia : user.value})
//         setTimeout(()=>{
//             user.value = ""
//         },2000)
//     }
//      else if(enit === 3){
//         dataUser({citaCita : user.value})
//         user.value = "thanks"
//     }
//      else if(enit === 4){
//        window.location.reload ()
//     }
// }
//  const silang = document.getElementById("silang")
//  const linkwoi = document.getElementById("linkwoi")
// function link() {
//     linkwoi.style.display = "block";

//     silang.addEventListener("click", () => {
    
//         // Toggle display
//         if (linkwoi.style.display === "block") {
//             linkwoi.style.display = "none";
//         } else {
//             linkwoi.style.display = "block";

//         }
//     });
// }
// function dataUser(jawabanUser){
//     Data.push(user.value)
//     body.style.opacity = "0.7"
//     load.style.display = "flex"

//     setTimeout(()=>{
//             botAnswer.innerHTML = botSay(jawabanUser)[enit]
//             body.style.opacity = "1"
//     load.style.display = "none"
//     body.style.transition = "all 0.3s ease-in-out"
//         },2000)

// }