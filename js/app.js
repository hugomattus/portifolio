const accordion = document.querySelectorAll('.accordion-content')// 


// ACCORDION HABILIDADES
accordion.forEach((item, index) => {
    let header = item.querySelector("header");
    header.addEventListener('click', () =>{
        item.classList.toggle("open");

        let description = item.querySelector(".description");
        if(item.classList.contains("open")){
            description.style.height = `${description.scrollHeight}px`;
            item.querySelector("i").classList.replace("fa-plus", "fa-minus")
        }else{
            description.style.height = "0px"
            item.querySelector("i").classList.replace("fa-minus", "fa-plus")
        }
        removeOpen(index);
    })
})

function removeOpen(index1){
    accordion.forEach((item2, index2) => {
        if(index1 != index2){
            item2.classList.remove("open")


            let des = item2.querySelector(".description");
            des.style.height = "0px";
            item2.querySelector("i").classList.replace("fa-minus", "fa-plus")
        }
    })
}


// botão voltar ao topo

const btnTop = document.getElementById('btnTop');  // button voltar ao topo

btnTop.addEventListener("click", function(){
    window.scrollTo(0,0)
})

 document.addEventListener('scroll', ocultar)

function ocultar(){
    if(window.scrollY > 400){
       btnTop.style.display = "flex"
    }else{
        btnTop.style.display = "none"
    }

}

ocultar()


// MENU MOBILE

function menuOpen(){
    let menuMobile = document.querySelector('.menu-mobile');
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
    }else{
        menuMobile.classList.add('open')
    }
}





