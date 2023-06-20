let colors=['green','red','rgba(132,122,200)','#f15025']
let btn=document.querySelector('button')
let color=document.querySelector('.color')

btn.addEventListener('click',(e)=>{
    let random_number=get_random_number();
    document.body.style.backgroundColor=colors[random_number]
    color.textContent=colors[random_number]
})
let get_random_number=()=>{
    return Math.floor(Math.random()*colors.length);
}
let img=document.querySelector('img')
img.addEventListener('click',(e)=>{
    document.querySelector('ul').classList.toggle('show')
})