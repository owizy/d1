let display=document.querySelector('.display_1');
let buttons=document.querySelectorAll('button');
let special_character=['%','*','/','-','+','=']
let output=''
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
