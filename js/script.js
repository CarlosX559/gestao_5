function faq() {

    const quest = document.querySelectorAll(".quest");
    const aswer = document.querySelectorAll(".aswer");
    const img_icon = document.querySelectorAll('.btn_1');
    for (let i = 0; i < quest.length; i++) {
  
      quest[i].addEventListener("click", () => {
  
        if (quest[i].classList.contains("close_faq")) {
          quest[i].classList.toggle("close_faq");
          aswer[i].classList.toggle("open_faq");
          img_icon[i].src = 'img/+.png';
        } else {
          quest[i].classList.add("close_faq");
          aswer[i].classList.add("open_faq");
          img_icon[i].src = 'img/-.png';
        }
  
  
      });
  
    }
  
  
  }
  faq();

function menu() {

    let open = document.querySelector(".menu_open");
    let menu = document.getElementById("container_menu");
    open.addEventListener("click", () => {
        menu.style.display = "flex";
        menu.style.left = "0px";
        menu.style.animation = "move ease-in 400ms";
    });



    let close = document.querySelector(".close");

    close.addEventListener("click", () => {
        menu.style.display = "flex";
        menu.style.left = "-100%";
        menu.style.animation = "move ease-out 400ms";
    });


    let area_menu = document.querySelectorAll(".area_menu nav ul li a");

    area_menu.forEach((element) => {
        element.addEventListener("click", () => {
            menu.style.left = "-100%";
            menu.style.animation = "move ease-out 400ms";
        });
    });
}
menu();
const animations = document.querySelectorAll("[data-animation]");
const animationClass = "animate";

function animation_scroll() {
    const area_window = window.innerHeight * 0.21 * 3.8;

    animations.forEach((element) => {
        let posicaoAtual = element.getBoundingClientRect().top;

        if (area_window > posicaoAtual) {
            element.classList.add(animationClass);
        } else {
            element.classList.remove(animationClass);
        }
    });
}

if (animations.length) {
    window.addEventListener("scroll", animation_scroll);
}
