function expand() {
    let b = document.getElementById("slidbar");
    let c=document.getElementById("content");
    try{
        b.attributes.removeNamedItem("style");
        c.attributes.removeNamedItem("style");
    }
    catch{}
    if(window.screen.width>=992){
        if(b.classList.contains("col-lg-1")){
            b.classList.replace("col-lg-1","col-lg-2");
            c.classList.replace("col-lg-11","col-lg-10")
        }
        else{
            b.classList.replace("col-lg-2","col-lg-1");
            c.classList.replace("col-lg-10","col-lg-11");
        }
    }
     else if (window.screen.width >= 767) {
        if(b.classList.contains("col-md-1")){
            b.classList.replace("col-md-1","col-md-2");
            c.classList.replace("col-md-11","col-md-10")
        }
        else{
            b.classList.replace("col-md-2","col-md-1");
            c.classList.replace("col-md-10","col-md-11");
        }
    }
    else {
        if (b.classList.contains("d-none")) {
            b.style.width = "20%";
            b.classList.remove('d-none');
        }
        else {
            b.classList.add('d-none');
        }
    }
}