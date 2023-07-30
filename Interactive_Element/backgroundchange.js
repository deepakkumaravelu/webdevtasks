let counter=0;
function addCSS(){
    counter++
    if(counter %2!==0){
        document.getElementById("head").innerHTML='<title>Toggle CSS</title> \n<link rel="stylesheet" href="./style.css" />'
    }else{
        document.getElementById("head").innerHTML='<title>Toggle CSS</title>'
    }
}