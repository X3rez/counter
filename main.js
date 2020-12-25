const $num = document.querySelector(".box-counter__num"),
      $boxCounter = document.querySelector(".box-counter"),
      $increment = document.querySelector(".box-counter__button-increment"),
      $decrement = document.querySelector(".box-counter__button-decrement");
        
    // This is the number to increment or to decrement
      let num = 0;


      // This is the event to increment or to decrement
    $boxCounter.addEventListener("click",(e)=>{

        if(e.target.matches(".box-counter__button-increment")){
            num++
            $num.textContent = num;
        }else if(e.target.matches(".box-counter__button-decrement")){
            num--
            $num.textContent = num;
}

    // Here we goin to change the color of the num
        if(num <= 0){
            $num.style.color = "red";
        }else if(num > 0) {
            $num.style.color = "green"
        }
    })

