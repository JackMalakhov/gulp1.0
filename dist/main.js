
function getEmail(a){
    document.getElementById('start__'+a).style.display = 'none';
    document.getElementById('end__'+a).style.display = 'grid';
}

function inputCheck(a){
    let getInput = document.getElementById('email__'+a);
    let getlabel = document.getElementById('label__'+a);

    if (getInput.value.length != ""){
        getlabel.style.color = 'transparent';
        
    }
    else{
        getlabel.style.color = '#1792C7'
    }
}
