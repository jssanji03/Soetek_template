
const nextButton = document.querySelectorAll(".js-next")
const preButton = document.querySelectorAll(".js-pre")
const progressBar = document.querySelector(".progress-bar");
const steps = document.querySelectorAll(".form-progress-indicator");
const formStep = document.querySelectorAll(".js-form-step")
let active = 1;

nextButton.forEach((next) => {
    next.addEventListener("click", () => {
        active++;
    if (active > steps.length) {
        active = steps.length;
    }
        updateProgress()
        updateForm()
    })
})
preButton.forEach((pre) => {
    pre.addEventListener("click", () => {
    active--;
    if (active < 1) {
        active = 1;
    }
        updateProgress()
        updateForm()
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


function updateProgress() {
    // toggle active class on list items
    steps.forEach((step, i) => {
        if (i < active) {
            step.classList.add("active");
        } else {
            step.classList.remove("active");
        }
  });
    // set progress bar width  
  progressBar.style.width = 
    ((active - 1) / (steps.length - 1.1)) * 100 + "%";
}
