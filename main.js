/*catch input value*/
let num;
const $qButtons = document.querySelector(".number");
const $containerNumbers = document. querySelector(".numbers-block");
const $fragment = document.createDocumentFragment();
const $btnClear = document.querySelector(".btn-clear");

function catchValue(){    
    num = Number($qButtons.value);
    console.log("El valor es: "+ num);
    AddButtons(num);
}

function AddButtons(num){
    for (let i = 0; i <num; i++) {
        const $dButton = document.createElement("input");
        $dButton.setAttribute("type", "button");
        $dButton.setAttribute("value", i+1);        
        $fragment.appendChild($dButton);       
    }
    $containerNumbers.appendChild($fragment);    
}

function clean(){
   // $qButtons.value = '';
    location.reload();
    //$containerNumbers.removeChild($dButton);
}

$qButtons.addEventListener("keypress",function(e){
    if(e.key === 'Enter'){
        catchValue();
    }
});
$btnClear.addEventListener("click",clean);