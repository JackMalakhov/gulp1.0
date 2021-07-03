
function getEmail(a){
    document.getElementById('start__'+a).style.display = 'none';
    document.getElementById('end__'+a).style.display = 'grid';
}

function inputCheck(a){
    let getInput = document.getElementById('input__'+a);
    let getlabel = document.getElementById('label__'+a);
    // alert(getInput);

    if (getInput.value.length != ""){
        getlabel.style.color = 'transparent';
        
    }
    else{
        getlabel.style.color = '#1792C7';
    }
}




function asideSlider(){
    let moveX = -80;
    let scrollX = -80;
    const info = document.getElementById('asideInfo');
    const img = document.getElementById('asideImg');
    setInterval(()=>{
        info.style.transform= "translateX("+moveX+"vw)";
        img.style.transform= "translateX("+moveX+"vw)";
        if (moveX+scrollX<-80*3){
            moveX=0;
        }
        else{
            moveX+=scrollX;
        }}, 3000)
    }

let menuShown = false;
function showMenu(){
    let drop = document.getElementById('dropDown')
    let head = document.getElementById('header')
    let page = document.body
    if (!menuShown){
        drop.style.display= "grid";
        page.style.overflow = "hidden"
        head.style.height="100%"
        menuShown = true;
    }
    else{
        drop.style.display= "none";
        page.style.overflow = "visible"
        head.style.height = "auto"
        menuShown = false; 
    }

}
function paintDot(a){
    let dots = document.querySelectorAll('label.bar');
    let dot = document.getElementById('l_'+a);
    for( let i = 0; i < dots.length; i++){ 
	    dots[i].style.background = "white"}
    dot.style.background = 'linear-gradient(180deg, #1792C7 0%, #00B8F0 100%)';
}