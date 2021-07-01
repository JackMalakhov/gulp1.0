
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




function asideSlider(){
    let moveX = -75;
    let scrollX = -75;
    const info = document.getElementById('asideInfo');
    const img = document.getElementById('asideImg');
    setInterval(()=>{
        info.style.transform= "translateX("+moveX+"vw)";
        img.style.transform= "translateX("+moveX+"vw)";
        if (moveX+scrollX<-75*3){
            moveX=0;
        }
        else{
            moveX+=scrollX;
        }}, 2000)
    }
