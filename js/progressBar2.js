
const nextButton = document.querySelectorAll(".js-next")
const preButton = document.querySelectorAll(".js-pre")
const progressBar = document.querySelector(".progress-bar");
const progressBarArea = document.querySelector(".form-progress");
const steps = document.querySelectorAll(".form-progress-indicator");
const formStep = document.querySelectorAll(".js-form-step")
const menuStep = document.querySelectorAll(".js-check-Step")

let active = 1;


function init() {
    let stepWidth = 0
    steps.forEach((step, i) => {
        console.log(i);
        if (step.className == 'form-progress-indicator one actives') {
            step.style.left = 0 + "%"
        } else {
            step.style.left = (stepWidth += 25) + "%"
        }
    });
}
init()

nextButton.forEach((next) => {
    next.addEventListener("click", () => {
    // localStorage.setItem("myActive", active++);
    active++
    if (active > steps.length) {
        active = steps.length;
    }
        updateProgress()
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
        const currentMenu = menu.getAttribute("data-step")
        const parentNode = menu.parentNode.previousElementSibling
        if (active == currentMenu) {
            menu.classList.add("active")
            menu.classList.add("onPage")
            menu.classList.remove("disabled")
            // console.log(menu.firstChild.classList = "far fa-check-circle");
            parentNode.children[0].firstChild.classList = "far fa-check-circle"
        }
        else {
            menu.classList.remove("onPage")
        }
        menu.addEventListener("click", (e) => {
            formStep.forEach((form) => {
                const currentForm = form.getAttribute("data-step")
                if (currentMenu == currentForm ) {
                    form.classList.remove("hidden")
                    // menu.classList.add("onPage")
                    } else {
                    form.classList.add("hidden")
                    // menu.classList.remove("onPage")
                }
            })
            steps.forEach((step, i) => {
                
                const nowStep = step.style.left
                const currentStep = step.getAttribute("data-step")
                let nowStepLeft = Number(nowStep.slice(0, nowStep.length - 1))
                if (currentMenu == currentStep ) {
                    step.style.left = 50 + "%"
                }
                else if (currentMenu < currentStep) {
                    step.style.left = (nowStepLeft += 25) + "%"
                    console.log(nowStepLeft);
                }
                else {
                    step.style.left = ((nowStepLeft -= 25)) + "%"
                }
            });
            // const steps = document.querySelectorAll(".form-progress-indicator");
             
        })
    })
}
function moveCurrent() {
    steps.forEach((step, i) => {
        
        const nowStep = step.style.left
        const currentForm = step.getAttribute("data-step")
        let nowStepLeft = Number(nowStep.slice(0, nowStep.length - 1))
        if (currentMenu == currentForm ) {
            // step.style.left = ((nowStepLeft -= 25)) + "%"
            console.log("hi");
        }
        // else {
        //     form.classList.add("hidden")
        // }
    });
}


// function updateProgress() {
//     // toggle active class on list items
//     steps.forEach((step, i) => {
//         const nowStep = step.style.left
//         let nowStepLeft = nowStep.slice(0, nowStep.length - 1)
//         const currentStep = formStep.getAttribute("data-step")
//         console.log("active",active);
//         console.log("currentStep",currentStep);
//         if (i < active) {
//             step.classList.add("active");
//             // progressBar.style.width = 50 + "%";
//         } 
//         else {
//             step.classList.remove("active");
//         }
//         if (active > 2) {
//             step.style.left = (nowStepLeft-= 42) + "%"
//         }
//     });   
//     // set progress bar width  

// //   progressBar.style.width = 
// //     ((active - 1) / (steps.length - 1)) * 100 + "%";
// }

function updateProgress() {
    // toggle active class on list items
    steps.forEach((step, i) => {
        const actives = document.querySelectorAll('.actives')
        const nowStep = step.style.left
        let nowStepLeft = Number(nowStep.slice(0, nowStep.length - 1))
        if (i < active) {
            progressBar.style.width = (actives.length) * 25 + '%'
            step.classList.add("actives");
        } 
        else {
            step.classList.remove("actives");
        }
        if (active > 3) {
            step.style.left = ((nowStepLeft -= 25)) + "%"
            progressBar.style.width = 50 + "%";
        }
    });   
    
}

function preProgress() {
    // toggle active class on list items
    steps.forEach((step, i) => {
        const nowStep = step.style.left
        const actives = document.querySelectorAll('.actives')
        let nowStepLeft = Number(nowStep.slice(0, nowStep.length - 1))
        if(i < active) {
            progressBar.style.width = (actives.length) * 25 + '%'
            step.classList.add("actives");
        } 
        else {
            step.classList.remove("actives");
        }
         if (active > 2) {
            step.style.left = ((nowStepLeft += 25)) + "%"
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



// const exampleModal = document.querySelector('exampleModal')
// exampleModal.addEventListener('show.bs.modal', function (event) {
//   // Button that triggered the modal
//     const button = event.relatedTarget
//     $('#full-width').modal();

// })