let mainnav=document.getElementById('main-nav');
let navtoggle=document.getElementById('nav-toggle');

navtoggle.addEventListener("click",function(){

    if(this.classList.contains('active')){
        mainnav.style.display="none";
        this.classList.remove('active');
    }
    else{
        mainnav.style.display="flex";
        this.classList.add('active');
    }
});