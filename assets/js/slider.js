//slider
const slider = document.querySelector('.slider__body');
const silderItems = document.querySelectorAll('.slider__body-img');
const sliderstyle = window.getComputedStyle(slider);

let sliderWidth = slider.clientWidth;
const sliderGap = parseInt(sliderstyle.getPropertyValue('gap'));
let sliderCount = silderItems[0].clientWidth;
const sliderLength = silderItems.length;
let index = Math.ceil(sliderWidth / (sliderCount + sliderGap));
let indexcurrent = 0;
let speed = 0.3;

for (let i = 0; i < index; i++) {
    slider.appendChild(silderItems[i].cloneNode(true));
}

function sliderlogo(){
    indexcurrent -= speed;
    let maxScroll = (sliderCount + sliderGap) * sliderLength;
    indexcurrent = indexcurrent % maxScroll;
    slider.style.transform = `translateX(${indexcurrent}px)`;
    requestAnimationFrame(sliderlogo);
}

sliderlogo();

// document.addEventListener('DOMContentLoaded', function () {
//     const arrContentsindex = document.querySelectorAll('.section2 .body__content .content__list');
//     console.log(arrContentsindex);
//     const slider_fake = document.querySelector('.extra__list-slider');
//     console.log(slider_fake);

//     function updateUI() {
//         if (arrContentsindex.length === 0) return; 

//         const targetContainer = arrContentsindex[arrContentsindex.length - 1]; 

//         if (window.innerWidth < 800) {
//             if (slider_fake.parentElement && slider_fake.parentElement !== targetContainer) {
//                 slider_fake.parentElement.removeChild(slider_fake);
//             }

//             if (!targetContainer.contains(slider_fake)) {
//                 targetContainer.appendChild(slider_fake);
//             }
//         } else {
//             if (slider_fake.parentElement) {
//                 slider_fake.parentElement.removeChild(slider_fake);
//             }
//         }
//     }
//     updateUI(); 
//     window.addEventListener('resize', updateUI); 
// });


