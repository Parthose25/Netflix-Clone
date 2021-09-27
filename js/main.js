var buttons=document.querySelectorAll(".questions-asked");

buttons.forEach(button=>{
    button.addEventListener("click",e=>{
        const target=e.target.parentElement.nextElementSibling;
        target.classList.toggle("display-block");
    });
});