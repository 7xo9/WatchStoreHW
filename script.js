


function Timer(){

    let time = document.getElementById("Time")
    const now = new Date()
    let H = now.getHours()
    let M = now.getMinutes()
    let S = now.getSeconds()
    let realtime = `${H} : ${M} : ${S}`

    time.textContent = realtime;
}

setInterval(Timer, 1000)

Timer();


let img = document.getElementById("img")

let red = document.getElementById("red")
let black = document.getElementById("black")
let rosee = document.getElementById("rose")
let pink = document.getElementById("pink")
let pur = document.getElementById("pur")

let color = document.getElementById("color")
let name = document.getElementById("name2")
let para = document.getElementById("para")

red.addEventListener("click" ,()=>{
    img.src = "red.png"
    color.style.cssText = "color:#cb3d23;"
    color.innerText = "Red"
    para.innerText = "A red watch is a stylish and bold timepiece that adds a vibrant touch to your wristwear. Its crimson hue makes it a striking and fashionable accessory, perfect for both casual and formal occasions."

})
black.addEventListener("click" ,()=>{
    img.src = "black.png"
    color.style.cssText = "color:#23211e;"
    color.innerText = "Black"
    para.innerText ="A black watch is the epitome of timeless elegance and versatility. Its sleek and sophisticated design makes it a classic accessory suitable for any occasion. Whether you're attending a formal event or going about your daily routine"
})
pink.addEventListener("click" ,()=>{
    img.src = "pink.png"
    color.style.cssText = "color:#8a5462;"
    color.innerText = "Pink"
    para.innerText = "A pink watch is a delightful and charming accessory that adds a pop of color and playfulness to your ensemble. Its soft and feminine hue brings a touch of whimsy and individuality to your wristwear."
})
rosee.addEventListener("click" ,()=>{
    img.src = "rose.png"
    color.style.cssText = "color:#e9c7bf;"
    color.innerText = "Rose"
    para.innerText= `
    A rose watch captures the essence of romance and elegance in its design. Its soft, rosy hue evokes feelings of love and tenderness. A rose watch is a symbol of refinement, making it an ideal accessory for sophisticated occasions and intimate moments`
})

pur.addEventListener("click" ,()=>{
    img.src = "pur.png"
    color.style.cssText = "color:#565682;"
    color.innerText = "Purpel"
    para.innerText = "YOU GOT SHIT TASTE LMAO"
})
