
const nextButton = document.querySelectorAll(".js-next")
const preButton = document.querySelectorAll(".js-pre")
const progressBar = document.querySelector(".progress-bar");
const progressBarArea = document.querySelector(".form-progress");
const steps = document.querySelectorAll(".form-progress-indicator");
const formStep = document.querySelectorAll(".js-form-step")
const menuStep = document.querySelectorAll(".js-check-Step")

let active = 1;


function init() {
    const select = $(".form-progress-indicator.three")
    const next = $(select).next();
    const prev = $(select).prev();
    const prevSecond = $(prev).prev();
    const nextSecond = $(next).next();
    if ($(".form-progress-indicator").hasClass("three")) {
        select.addClass("selected")
        prev.addClass("prev")
        prevSecond.addClass("secondPre")
        next.addClass("next")
        nextSecond.addClass("secondNext")
    }
}
init()

function moveCurrent(element) {
    if (element == "下一頁") {
        const selected = $(".selected").next();
        const next = $(selected).next();
        const prev = $(selected).prev();
        const prevSecond = $(prev).prev();
        const nextSecond = $(next).next();
        if (active > 3 ) { 
            $(selected).removeClass("next secondNext prev secondPre hidden").addClass("selected");
            $(prev).removeClass("next secondNext secondPre selected hidden").addClass("prev");
            $(next).removeClass("secondNext secondPre selected hidden").addClass("next");
            $(nextSecond).removeClass("secondPre prev next selected hidden").addClass("secondNext");
            $(prevSecond).removeClass("secondNext prev next selected hidden").addClass("secondPre");
            $(prevSecond).prevAll().removeClass("next secondNext prev secondPre").addClass('hidden')
            $(nextSecond).nextAll().removeClass("next secondNext prev secondPre").addClass('hidden')
        } 
    }
    else if (element == "上一頁") {
        const selected = $(".selected").prev();
        const next = $(selected).next();
        const prev = $(selected).prev();
        const prevSecond = $(prev).prev();
        const nextSecond = $(next).next();

        $(selected).removeClass("next secondNext prev secondPre hidden").addClass("selected");
        $(prev).removeClass("next secondNext secondPre selected hidden").addClass("prev");
        $(next).removeClass("secondNext secondPre selected hidden").addClass("next");
        $(nextSecond).removeClass("secondPre prev next selected hidden").addClass("secondNext");
        $(prevSecond).removeClass("secondNext prev next selected hidden").addClass("secondPre");
        $(prevSecond).prevAll().removeClass("next secondNext prev secondPre").addClass('hidden')
        $(nextSecond).nextAll().removeClass("next secondNext prev secondPre").addClass('hidden')
        if (active < 3) { 
            const select = $(".form-progress-indicator.three");
            const next = $(select).next();
            const prev = $(select).prev();
            const prevSecond = $(prev).prev();
            const nextSecond = $(next).next();
            select.removeClass("next secondNext prev secondPre hidden").addClass("selected")
            prev.removeClass("next secondNext prev secondPre hidden selected").addClass("prev")
            prevSecond.removeClass("next secondNext prev secondPre hidden selected").addClass("secondPre")
            next.removeClass("next secondNext prev secondPre hidden selected").addClass("next")
            nextSecond.removeClass("next secondNext prev secondPre hidden selected").addClass("secondNext")
        } 
    }
    else {
        let selected = element;
        steps.forEach((step) => {
            const currentStep = step.getAttribute("data-step")
            if (selected == currentStep ) {
                const select = $(".form-progress-indicator.three");
                const next = $(select).next();
                const prev = $(select).prev();
                const prevSecond = $(prev).prev();
                const nextSecond = $(next).next();
                if (selected == 2 ) { 
                    select.removeClass("next secondNext prev secondPre actives hidden").addClass("selected")
                    prev.removeClass("next secondNext prev secondPre hidden selected").addClass("prev")
                    prevSecond.removeClass("next secondNext prev secondPre hidden selected").addClass("secondPre")
                    next.removeClass("next secondNext prev secondPre hidden selected actives").addClass("next")
                    nextSecond.removeClass("next secondNext prev secondPre hidden selected actives").addClass("secondNext");
                    progressBar.style.width = 25 + "%";
                }
                else if (selected == 1) {
                    prev.removeClass("actives")
                    progressBar.style.width = 0 + "%";
                }
                else {
                const selected = $(step).removeClass("next secondNext prev secondPre hidden").addClass("selected");
                const next = $(selected).next();
                const prev = $(selected).prev();
                const prevSecond = $(prev).prev();
                const nextSecond = $(next).next();
                $(selected).removeClass("next secondNext prev secondPre hidden").addClass("selected actives");
                $(prev).removeClass("next secondNext secondPre selected hidden").addClass("prev actives");
                $(next).removeClass("secondNext secondPre selected actives hidden").addClass("next");
                $(nextSecond).removeClass("secondPre prev next selected actives hidden").addClass("secondNext");
                $(prevSecond).removeClass("secondNext prev next selected hidden").addClass("secondPre actives");
                $(prevSecond).prevAll().removeClass("next secondNext prev secondPre").addClass('hidden')
                $(nextSecond).nextAll().removeClass("next secondNext prev secondPre").addClass('hidden')
                progressBar.style.width = 50 + "%";
                }
            }
            // else {
            //     form.classList.add("hidden")
            // }
        })
    }
}


nextButton.forEach((next) => {
    next.addEventListener("click", (e) => {
    active++
    if (active > steps.length) {
        active = steps.length;
    }
        updateProgress()
        moveCurrent("下一頁")
        updateForm()
        updateMenu()
    })
})
   
preButton.forEach((pre) => {
    pre.addEventListener("click", () => {
    active--;
    if (active < 1) {
        active = 1;
    }
        preProgress()
        moveCurrent("上一頁")
        updateForm()
        updateMenu()
    })
})

function updateForm() {
    formStep.forEach((form) => {
        const currentStep = form.getAttribute("data-step")
        if (active == currentStep) {
            form.classList.remove("hidden")
        } else {
            form.classList.add("hidden")
        }
    })
}

function updateMenu() {
    menuStep.forEach((menu) => {
        const currentMenu = menu.getAttribute("data-slide")
        const parentNode = menu.parentNode.previousElementSibling
        if (active == currentMenu) {
            menu.classList.add("active")
            menu.classList.add("onPage")
            menu.classList.remove("disabled")
            parentNode.children[0].firstChild.classList = "far fa-check-circle"
        }
        else {
            menu.classList.remove("onPage")
        }
        $(menu).click((e) => {
            const clickTarget = e.target.getAttribute("data-slide")
            const onClick = e.target
            
            setTimeout(() => {
                const $preloader = $('.preloader')
                if ($preloader) {
                    $preloader.css('display', 'flex')
                    $preloader.css('height', 0)
                    setTimeout(() => {
                        $preloader.children().hide()
                        $('.preloader').css('display', 'none')
                        $('.preloader').css('height', '100vh')
                    }, 200)
                }
                else {
                    $preloader.css('display', 'none')
                    $preloader.css('height', '100vh')
                }
            }, 200)
            if (clickTarget !== "") {
                onClick.classList.add("onPage")
                $(onClick).parent().siblings().children().removeClass("onPage")
            }
            formStep.forEach((form) => {
                const currentForm = form.getAttribute("data-step")
                if (currentMenu == currentForm ) {
                    form.classList.remove("hidden");
                    moveCurrent(clickTarget)
                }
                else {
                    form.classList.add("hidden")
                }
            })
        })
    })
}

function updateProgress() {
    // toggle active class on list items
    steps.forEach((step, i) => {
        const actives = document.querySelectorAll('.actives')
        console.log(actives.length);
        if (i < active) {
            progressBar.style.width = (actives.length) * 25 + '%'
            step.classList.add("actives");
        } 
        else {
            step.classList.remove("actives");
        }
        if (active > 3) {
            progressBar.style.width = 50 + "%";
        }
    });   
    
}

function preProgress() {
    // toggle active class on list items
    steps.forEach((step, i) => {
        // const nowStep = step.style.left
        // let nowStepLeft = Number(nowStep.slice(0, nowStep.length - 1))
        const actives = document.querySelectorAll('.actives')
        if(i < active) {
            progressBar.style.width = (actives.length) * 25 + '%'
            step.classList.add("actives");
        } 
        else {
            step.classList.remove("actives");
        }
        if (active > 2) {
            progressBar.style.width = 50 + "%";
         }
         else if (active == 2) {
             progressBar.style.width = 25 + "%";
        }
         else {
             progressBar.style.width = 0 + "%";
        }
    });   
}

function loadingPage() {
    console.log("hi");
    setInterval(() => {
          const $preloader = $('.preloader')
          if ($preloader) {
            $preloader.css('height', 0)
            setInterval(() => {
              $preloader.children().hide()
            }, 200)
          }
    }, 200)
}
// setTimeout(() => {
//           const $preloader = $('.preloader')
//           if ($preloader) {
//             $preloader.css('height', 0)
//             setTimeout(() => {
//               $preloader.children().hide()
//             }, 200)
//           }
// }, 200)
    


function alertFunc() {
    console.log("hi");
  setTimeout(() => {
          const $preloader = $('.preloader')
          if ($preloader) {
            $preloader.css('height', 0)
            setTimeout(() => {
              $preloader.children().hide()
            }, 200)
          }
    }, 200)
}