const openResume=()=>{
    window.open("https://rxresu.me/atulnayak7869/resume-atul","_blank")
}

const header=document.querySelector("header")
window.addEventListener("scroll",()=>{
    header.classList.toggle("sticky",window.scrollY>100)
})

let menu=document.getElementById("menu-button")
let navlist=document.querySelector(".navlist")

menu.onclick=()=>{
    menu.classList.toggle('bx-x')
    navlist.classList.toggle("open")
}

window.onscroll=()=>{
    menu.classList.remove('bx-x')
    navlist.classList.remove("open")
}