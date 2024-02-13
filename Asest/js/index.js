function expand(){
    let b=document.getElementById("sidebar").classList;
    if(b.contains("sidebar")){
        b.replace("sidebar","sidebar-toggled");
    }
    else{
        b.replace("sidebar-toggled","sidebar")
    }
}
function tabs(id1,id2){
    let one=document.getElementById(id1);
    let second=document.getElementById(id2);
    console.log(one);
    console.log(second);
    if(id1==='product1'){
        console.log("first")
        one.style.display="flex";
        second.style.display="none";
    }
    else{
        console.log("second")
        one.style.display="flex";
        second.style.display="none";
    }
}