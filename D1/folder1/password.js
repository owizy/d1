let input=document.querySelector('.password')
let img=document.querySelector('img')
img.addEventListener('click',(e)=>{
    e.preventDefault()
    
    if(input.type=="password"){
        input.type="text";
        img.src="open_eye.png"
    }else{
        input.type="password"
        img.src="close_eye.png"
    }
    
})