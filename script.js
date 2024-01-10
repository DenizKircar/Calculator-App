const buttons = document.querySelectorAll(".buttons_container .button");
const AC = document.querySelector(".clear");
const DEL = document.querySelector(".delete")
const EQ = document.querySelector(".equals");


AC.addEventListener("click", function() {
    document.querySelector(".display").innerHTML = '<div class="number_class";></div>';
    
})

DEL.addEventListener("click", function() {
    if(document.querySelector(".display").lastElementChild.firstChild !== null) {
        document.querySelector(".display").lastElementChild.innerHTML = document.querySelector(".display").lastElementChild.innerHTML.slice(0, -1);
    } else if(document.querySelector(".display").firstElementChild.firstChild == null) {
        document.querySelector(".display").firstElementChild.innerHTML = null;
    } else {
        document.querySelector(".display").lastChild.previousSibling.remove();
        document.querySelector(".display").lastChild.remove(); 
        
    }

})

for(let i=0; i < buttons.length; i++) {
    if(i <= buttons.length && buttons[i].classList.contains("number")) {
        buttons[i].addEventListener("click", function() {
            document.querySelector(".display").lastElementChild.innerHTML = document.querySelector(".display").lastElementChild.textContent + buttons[i].textContent;
        })
    } else if(i <= buttons.length && buttons[i].classList.contains("op")) {
        buttons[i].addEventListener("click", function() {
            if(document.querySelector(".display").lastElementChild.firstChild !== null) {
                document.querySelector(".display").insertAdjacentHTML("beforeend", `<p class="op_b">${buttons[i].innerHTML}</p>`);
                document.querySelector(".display").insertAdjacentHTML("beforeend", `<div class="number_class";></div>`);
            } else if(document.querySelector(".display").firstElementChild.firstChild == null) {
                document.querySelector(".display").firstElementChild.innerHTML = null;
            } else {
                document.querySelector(".display").lastElementChild.previousSibling.innerHTML = buttons[i].innerHTML
            }
        })
        
    }
}


EQ.addEventListener("click", function() {
    
    // make it so that if the last element is a naked op sign you cant press = and get an alert

    let nah_win = document.querySelector(".display").children
    let idk = "";
    for(let i of nah_win){
        idk += i.textContent
    }

    if(document.querySelector(".display").lastElementChild.firstChild !== null) {
    document.querySelector(".display").innerHTML = `<div class=".number_class">${eval(String(idk))}</div>`;
}
    
    

}
)
