let hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
let btn=document.querySelector('button')
let color=document.querySelector('.color')
btn.addEventListener('click',(e)=>{
    let hex_color='#'
  for(a=0; a<6; a++){
     hex_color +=hex[getRandomnumber()]
  }
  color.textContent=hex_color
  document.body.style.backgroundColor=hex_color
})
let getRandomnumber=()=>{
    return Math.floor(Math.random()*hex.length)
}
let img=document.querySelector('img')
img.addEventListener('click',(e)=>{
    document.querySelector(' ul ').classList.toggle('show')
})