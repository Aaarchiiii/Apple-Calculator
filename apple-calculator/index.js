

let buttons = document.querySelectorAll('button');

let input = document.querySelector('input');

for(let button of buttons){
    button.addEventListener('click', function(event){
        let btnText = event.target.textContent;
        if(btnText === 'AC'){
            input.value = '';
        }
        else if(btnText === '='){
            try{
                input.value = eval(input.value);
            }
            catch(e){
                input.value = 'Invalid';
            }
        }
        else{
        input.value += btnText;
        }
         // after 10 seconds input should be empty
        setTimeout(function(){
        input.value = '';
        }, 10000);
    })
   
}