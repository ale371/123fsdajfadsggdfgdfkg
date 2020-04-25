function myFunction(){
   let burger = document.getElementById("burger"); 
   let nav = document.getElementById("menu");
   burger.addEventListener("click",function(){
        nav.classList.toggle("active-menu");
        burger.classList.toggle("tog_divs");
   });   
}

myFunction();