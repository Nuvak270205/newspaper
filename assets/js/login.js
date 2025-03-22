document.addEventListener("DOMContentLoaded", function () {
    const userlogin = document.querySelector('.loginEmail');
    const passlogin = document.querySelector('.loginPassword');
    const btnlogins = document.querySelector('.switchToRegister');
    const userregister = document.querySelector('.registerUser');
    const emailregister = document.querySelector('.registerEmail');
    const passregister = document.querySelector('.registerPassword');
    const btnregister = document.querySelector('.switchToLogin');
    const closemodel = document.querySelector('.modal-header .btn-close');
    const obStores = JSON.parse(localStorage.getItem("user")) || {};
    console.log(obStores);


    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const authModalLabel = document.getElementById("authModalLabel");

    function checkRegister() {
        const user = userregister.value.trim();
        const email = emailregister.value.trim();
        const pass = passregister.value.trim();
        const obStore = JSON.parse(localStorage.getItem("user")) || {};

        if (!user || !email || !pass) {
            alert('Vui lòng nhập đầy đủ thông tin');
            return false;
        }
        if (!emailRegex.test(email)) {
            alert('Email không hợp lệ');
            return false;
        }
        if (obStore[email]) {
            alert('Tài khoản đã tồn tại');
            return false;
        }

        return true;
    }

    function checkLogin() {
        if (!userlogin || !passlogin) {
            console.error('Lỗi: Không tìm thấy input đăng nhập.');
            return false;
        }
        const email = userlogin.value.trim();
        const pass = passlogin.value.trim();
        const obStore = JSON.parse(localStorage.getItem("user")) || {};

        if (!email || !pass) {
            alert('Vui lòng nhập đầy đủ thông tin');
            return false;
        }
        if (!obStore[email] || obStore[email].pass !== pass) {
            alert('Tài khoản hoặc mật khẩu không đúng');
            return false;
        }

        return true;
    }

    document.querySelector("#loginForm form").addEventListener("submit", (e) => {
        e.preventDefault();
        if (!checkLogin()) return;

        const email = userlogin.value;
        localStorage.setItem("isLogin", email);
        alert("Đăng nhập thành công!");
        window.location.href = "../html/index.html";
    });

    document.querySelector("#registerForm form").addEventListener("click", (e) => {
        e.preventDefault();
        if (!checkRegister()) return;

        const user = userregister.value;
        const email = emailregister.value;
        const pass = passregister.value;
        
        const obStore = JSON.parse(localStorage.getItem("user")) || {};
        obStore[email] = { user, email, pass };

        localStorage.setItem("user", JSON.stringify(obStore));
        localStorage.setItem("isLogin", email);
        
        alert("Đăng ký thành công");
        window.location.href = "../html/index.html";
    });



    btnlogins?.addEventListener("click", function (event) {
        event.preventDefault();
        loginForm.style.display = "none";
        registerForm.style.display = "block";
        authModalLabel.textContent = "Register";
    });

    btnregister?.addEventListener("click", function (event) {
        event.preventDefault();
        loginForm.style.display = "block";
        registerForm.style.display = "none";
        authModalLabel.textContent = "Login";
    });

    closemodel?.addEventListener('click', () => {
        loginForm.style.display = "block";
        registerForm.style.display = "none";
        authModalLabel.textContent = "Login";
    });

});
