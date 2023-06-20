let text=document.querySelector('.s_text')
let textloader=()=>{
    setTimeout(()=>{
   text.innerHTML="Freelancer"
    },0)
    setTimeout(()=>{
        text.innerHTML="Blogger"
    },4000)
    setTimeout(()=>{
        text.innerHTML="Youtuber"
    },8000)
    setInterval(textloader,12000)
}
textloader()