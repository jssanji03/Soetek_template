
const nextButton = document.querySelectorAll(".js-next")
const preButton = document.querySelectorAll(".js-pre")
const progressBar = document.querySelector(".progress-bar");
const parentDOM = document.querySelector('.form-progress');
const steps = document.querySelectorAll(".form-progress-indicator");
// const formStep = document.querySelectorAll(".js-form-step")

let active = 1;

function init() {
    let stepWidth = 0
    steps.forEach((step,i) => {
        if (i == 0) {
            step.style.left = 5 + "%"
        } else {
            step.style.left = (stepWidth += 42) + "%"
        }
  });
}

$(document).ready(function () { 
    init()
});
// nextButton.forEach((next) => {
   
//     next.addEventListener("click", () => {
//         active++;
//     if (active > steps.length) {
//         active = steps.length;
//     }
//         updateProgress()
//         updateForm()
//     })
// })
// preButton.forEach((pre) => {
//     pre.addEventListener("click", () => {
//     active--;
//     if (active < 1) {
//         active = 1;
//     }
//         updateProgress()
//         updateForm()
//     })
// })

// function updateForm() {
//     formStep.forEach((form) => {
//         const currentStep = form.getAttribute("data-step")
//         if (active == currentStep) {
//             form.classList.remove("hidden")
//         } else {
//             form.classList.add("hidden")
//         }
//     })
// }


// function updateProgress() {
//     // toggle active class on list items
//     steps.forEach((step, i) => {
//         const nowStep = step.style.left
//         let nowStepLeft = nowStep.slice(0, nowStep.length - 1)
//         console.log(active);
//         if (i < active) {
//             step.classList.add("active");
//             progressBar.style.width = 50 + "%";
//         } else {
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
