function expand() {
    let a = document.getElementById("sidebar");
    b = a.classList;
    if (b.contains("sidebar")) {
        document.body.classList.replace("sidebar","sidebar-toggled");

        b.replace("sidebar", "sidebar-toggled");
    }
    else {
        
        document.body.classList.replace("sidebar-toggled","sidebar");
        document.body.classList.remove("sidebar-toggled");
        b.replace("sidebar-toggled", "sidebar")
    }
}
function tabs(id1, id2) {
    let one = document.getElementById(id1);
    let second = document.getElementById(id2);
    let c = document.getElementById("main-product-btn1").style;
    let d = document.getElementById("main-product-btn2").style;
    if (id1 === 'product1') {
        c.backgroundColor = "#5D5FEF"
        c.color = "#FFFFFF";
        d.backgroundColor = "transparent";
        d.color = "black";
        one.style.display = "flex";
        second.style.display = "none";
    }
    else {
        d.backgroundColor = "#5D5FEF"
        d.color = "#FFFFFF";
        c.backgroundColor = "transparent";
        c.color = "black";
        one.style.display = "flex";
        second.style.display = "none";
    }
}