/* eslint-disable */
let swipe_about = document.querySelector(".swipe__about");

setTimeout(() => swipe_about.classList.toggle('revealed'), 2000)

let swipe_tools = document.querySelector(".swipe__tools");

setTimeout(() => swipe_tools.classList.toggle('revealed'), 4000)

let swipe_blog = document.querySelector(".swipe__blog");

setTimeout(() => swipe_blog.classList.toggle('revealed'), 6000)

let swipe_projects = document.querySelector(".swipe__projects");

setTimeout(() => swipe_projects.classList.toggle('revealed'), 7000)

let header = document.querySelector('.hamburger');
let overlay = document.querySelector('#overlay'); 

header.addEventListener("click", () => {
    header.classList.toggle('active')
    overlay.classList.toggle('open')
})

Array.from(document.querySelectorAll('nav ul li')).map(v => v.addEventListener("click", () => {
    header.classList.toggle('active')
    overlay.classList.toggle('open')
    
}))

let section_swipe = document.querySelectorAll("section div p.swipe")
console.log(section_swipe.classList)

section_swipe.forEach((v) => {
    console.log(v)
    setInterval(() => v.classList.toggle('revealed'), 3000)
})

let span_offset = document.querySelectorAll(".text")

span_offset.forEach((v, i) => setTimeout(() => v.classList.toggle('slide-in-right'),i*1000))