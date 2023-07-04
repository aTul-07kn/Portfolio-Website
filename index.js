const openResume=()=>{
    window.open("https://rxresu.me/atulnayak7869/resume-atul","_blank")
}

const header=document.querySelector("header")
window.addEventListener("scroll",()=>{
    header.classList.toggle("sticky",window.scrollY>100)
})