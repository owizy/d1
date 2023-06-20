let hr=document.querySelector('.hour')
let min=document.querySelector('.min')
let sec=document.querySelector('.sec')
setInterval(()=>{
  let time=new Date()
  hr.innerHTML=time.getHours();
  min.innerHTML=time.getMinutes();
  sec.innerHTML=time.getSeconds();
},1000)
let display=document.querySelector('.display_1');
let buttons=document.querySelectorAll('button');
let special_character=['%','*','/','-','+','=']
let output=''
// calculator
let calculate=(btn_value)=>{
    if(btn_value ==='='&&output!==''){
    
    output=eval(output.replace('%','/100'))
    }else if(btn_value === 'AC'){
        output=''
    }else if(btn_value ==='DEL'){
        output=output.toString().slice(0,-1)
        }
        else{
            if(output===''&& special_character.includes(btn_value))return;
            output+=btn_value
        }
        display.value=output;
}

buttons.forEach(button =>{
    button.addEventListener('click',(e)=>calculate(e.target.dataset.value));
})
let image=document.querySelector('img')
image.addEventListener('click',(e)=>{
    document.querySelector('.container').classList.toggle('show')
})
