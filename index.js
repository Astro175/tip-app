var billInput = document.getElementById("bill-input"),
    btn1 = document.querySelector("#btn-1"),
    btn2 = document.querySelector("#btn-2"),
    btn3 = document.querySelector("#btn-3"),
    btn4 = document.querySelector("#btn-4"),
    btn5 = document.querySelector("#btn-5"),
    customBtn = document.querySelector("#custom"),
    numberInput = document.getElementById("number-btn"),
    tipSum = document.querySelector(".tip-sum"),
    perPerson = document.querySelector(".per-person"),
    reset = document.querySelector(".reset-btn"),
    errorMsg = document.querySelector(".errormsg"),
    labelInput = document.querySelector(".label-input")


    function activeBtnReset() {
        if (
          billInput.value !== "" ||
          numberInput.value > 0 ||
           numberInput.value!== "" ||
           numberInput.value> 0
        ) {
          reset.style.cursor = "pointer";
          reset.classList.add("btn-active");
          reset.addEventListener("click", resetForm, true);
        } else {
          reset.style.cursor = "not-allowed";
          reset.classList.remove("btn-active");
          reset.removeEventListener("click", resetForm, true);
        }
      }

      function resetForm() {
        billInput.value = "";
        numberInput.value = "";
        customBtn.value = "";
        tipSum.innerHTML = "0.00";
        perPerson.innerHTML = "0.00"; 
        activeBtnReset();
      }

    btn1.addEventListener("click", function(){
       value = billInput.value;
       activeBtnReset();
       if(numberInput.value.length === 0 || numberInput.value == 0){
        errorMsg.style.display = "block";
        labelInput.style.border = "1px solid red";
       } else{
         var p = value * 0.05/numberInput.value;
         var s = value * 0.05;
         var one = p.toFixed(2);
         var sum = s.toFixed(2);
         perPerson.innerHTML = one;
         tipSum.innerHTML = sum;
       }

    })

    btn2.addEventListener("click", function(){
        value = billInput.value;
        activeBtnReset();
        if(numberInput.value.length === 0|| numberInput.value==0){
         errorMsg.style.display = "block";
         labelInput.style.border = "1px solid red";
        } else{
          var p = value * 0.10/numberInput.value;
          var s = value * 0.10;
          var one = p.toFixed(2);
          var sum = s.toFixed(2);
          perPerson.innerHTML = one;
          tipSum.innerHTML = sum;
        }
 
     })

     btn3.addEventListener("click", function(){
        value = billInput.value;
        activeBtnReset();
        if(numberInput.value.length === 0|| numberInput.value==0){
         errorMsg.style.display = "block";
         labelInput.style.border = "1px solid red";
        } else{
          var p = value * 0.15/numberInput.value;
          var s = value * 0.15;
          var one = p.toFixed(2);
          var sum = s.toFixed(2);
          perPerson.innerHTML = one;
          tipSum.innerHTML = sum;
        }
 
     })

     btn4.addEventListener("click", function(){
        value = billInput.value;
        activeBtnReset();
        if(numberInput.value.length === 0 || numberInput.value==0){
         errorMsg.style.display = "block";
         labelInput.style.border = "1px solid red";
        } else{
          var p = value * 0.25/numberInput.value;
          var s = value * 0.25;
          var one = p.toFixed(2);
          var sum = s.toFixed(2);
          perPerson.innerHTML = one;
          tipSum.innerHTML = sum;
        }
 
     })


     btn5.addEventListener("click", function(){
        value = billInput.value;
        activeBtnReset();
        if(numberInput.value.length === 0|| numberInput.value==0){
         errorMsg.style.display = "block";
         labelInput.style.border = "1px solid red";
        } else{
          var p = value * 0.50/numberInput.value;
          var s = value * 0.50;
          var one = p.toFixed(2);
          var sum = s.toFixed(2);
          perPerson.innerHTML = one;
          tipSum.innerHTML = sum;
        }
 
     })


     customBtn.addEventListener("input", function(){
        var value = billInput.value;
        activeBtnReset();
        var input = customBtn.value/100;
        if(numberInput.value.length === 0|| numberInput.value==0){
            errorMsg.style.display = "block";
            labelInput.style.border = "1px solid red";
           } else{
             var p = value * input/numberInput.value;
             var s = value * input;
             var one = p.toFixed(2);
             var sum = s.toFixed(2);
             perPerson.innerHTML = one;
             tipSum.innerHTML = sum;
           }
      
     })

    
