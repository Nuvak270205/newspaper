const user = document.querySelector('.fa-regular.fa-user');
const usertb = document.querySelector('.user__downdrop');
const checkradio = document.querySelector('.user__downdrop-item .form-check-input');
const btnlogin = document.querySelector('.user__downdrop-button .btn__login');
const btnlogout = document.querySelector('.user__downdrop-button .btn__logout');
const item = document.querySelector('.user__downdrop-item');
const item1 = document.querySelector('.user__downdrop-item2');
const avatar = document.querySelector('.user__downdrop-item2 .downdrop__items-avatar');
const nameuser = document.querySelector('.downdrop__items-info h5');
const email = document.querySelector('.downdrop__items-info p');
const closemodels = document.querySelector('.modal-header .btn-close');
let isLogin = false;
user.addEventListener('click', () => {
    if (!isLogin) {
        usertb.classList.remove('d-none');
        isLogin = true;
    } else {
        usertb.classList.add('d-none');
        isLogin = false;
    }
});

document.addEventListener('click', (e) => {
    if (isLogin && !usertb.contains(e.target) && !user.contains(e.target)) {
        usertb.classList.add('d-none');
        isLogin = false;
    }
});

checkradio.addEventListener('change', () => {
    if (checkradio.checked) {
        btnlogin.disabled = false;
    }else {
        btnlogin.disabled = true;
    }
});


btnlogout.addEventListener('click', () => {
    localStorage.removeItem('isLogin');
    window.location.href = './index.html';
});

function checkLogin() {
    const check = localStorage.getItem("isLogin");
    if (check) {
        const userStore = JSON.parse(localStorage.getItem("user")) || {};
        const userlogin = userStore[check];

        if (userlogin) {
            if (!avatar || !nameuser || !email) {
                console.error("Lỗi: avatar, nameuser hoặc email không tìm thấy trong DOM!");
                return;
            }
    
            if (!userlogin) {
                console.error("Lỗi: Không tìm thấy thông tin tài khoản trong localStorage!");
                return;
            }
            item.classList.add("d-none");
            item1.classList.remove("d-none");
            btnlogin.classList.add("d-none");
            btnlogout.classList.remove("d-none");

            avatar.innerHTML = `<div>${slideavatar(userlogin.user)}</div>`;
            nameuser.innerHTML = userlogin.user || "Người dùng";
            email.innerHTML = userlogin.email || "Không có email";
        }
    } else {
        item.classList.remove('d-none');
        item1.classList.add('d-none');
        btnlogin.classList.remove('d-none');
        btnlogout.classList.add('d-none');
    }
}


function slideavatar(str) {
    if (!str || str.trim() === "") return "U"; 

    let arr = str.trim().split(' '); 
    if (arr.length === 1) {
        return arr[0].substring(0, 2).toUpperCase(); 
    } else {
        return arr[0].charAt(0).toUpperCase() + arr[arr.length - 1].charAt(0).toUpperCase();
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const authModal = document.getElementById("authModal");
    const userDropdown = document.querySelector(".user__downdrop");

    if (authModal && userDropdown) {
        authModal.addEventListener("show.bs.modal", function () {
            userDropdown.style.opacity = 0; 
        });

        authModal.addEventListener("hidden.bs.modal", function () {
            userDropdown.style.opacity = 1;
        });
    }
    
});

closemodels.addEventListener('click', () => {
    checkradio.checked = false;
    btnlogin.disabled = true;
});

document.addEventListener("DOMContentLoaded", function () {
    const btns = document.querySelectorAll('.modal-body .btn'); 
    console.log(btns);

    btns.forEach((btn) =>{
        console.log(btn);
        btn.addEventListener('focus', ()=>{
            console.log('focus');
            btn.classList.add('custom-btn');
        })
        btn.addEventListener('blur', ()=>{
            btn.classList.remove('custom-btn');
        })
    })
});




checkLogin();