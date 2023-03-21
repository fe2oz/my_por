window.addEventListener('scroll', function(){
    var section = document.querySelectorAll('.section');
    for(var i=0; i<section.length; i++){
        if(window.scrollY > section[i].getBoundingClientRect().top){
            section[i].classList.add('ani');
        }else{
            section[i].classList.remove('ani');
        }
        
    }    
});