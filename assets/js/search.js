const items = document.querySelectorAll('.section7__body-main .body__item');
const heading = document.querySelectorAll('.section7__body-main .item__content h2');
const title = document.querySelector('.heading__title2');
let count = 0;

const url = new URL(window.location.href);
const searchValue = url.searchParams.get('value');

function searchNews() {
    let arr = Array.from(items);
    arr.forEach((item) => {
      item.classList.add('d-none');
    });

   heading.forEach((item, index) => {
      if (item.textContent.toLowerCase().includes(searchValue.toLowerCase())) {
         arr[index].classList.remove('d-none');
        if(count === 0){
            arr[index].classList.add('border-0');
        }
      } else {
         arr[index].classList.add('d-none');
      }
   });
}

title.innerHTML = `<a href="${url}">${searchValue.toLocaleUpperCase()}</a>`;

searchNews();