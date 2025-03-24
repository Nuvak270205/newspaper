const arrSearch = [
    {
        id: 1,
        title: 'Chủ tịch nước trao quyết định bổ nhiệm 2 phó thủ tướng và 4 bộ trưởng',
        id_link: 1,
    },
    {
        id: 2,
        title: 'Tổng Bí thư Tô Lâm tiếp Bí thư Quảng Tây, Trung Quốc',
        id_link: 2,
    },
    {
        id: 3,
        title: 'Mỹ và Nga nhất trí xây dựng lộ trình chấm dứt xung đột ở Ukraine',
        id_link: 3,
    },
    {
        id: 4,
        title: ' Nga đánh giá tích cực cuộc đàm phán với Mỹ tại Saudi Arabia',
        id_link: 4,
    },
    {
        id: 5,
        title: 'Lại lật xe trên tuyến quốc lộ 15D lên cửa khẩu quốc tế La Lay',
        id_link: 5,
    },
    {
        id: 6,
        title: 'Chuẩn bị thi công nhiều gói thầu sửa chữa hư hỏng cao tốc Nội Bài - Lào Cai',
        id_link: 6,
    },
    {
        id: 7,
        title: 'Bà Rịa – Vũng Tàu ký biên bản ghi nhớ với Tập đoàn DP World về logistics',
        id_link: 7,
    },
    {
        id: 8,
        title: 'Thông qua 2 Nghị quyết về cơ cấu tổ chức của Chính phủ và cơ cấu số lượng thành viên Chính phủ',
        id_link: 8,
    },
    {
        id: 9,
        title: 'Người đàn ông ở Phú Thọ từ chối hẹn hò nữ bác sĩ thú y vì một lý do',
        id_link: 9,
    },
    {
        id: 10,
        title: 'MU lãng phí 72 triệu bảng cho một tiền đạo không biết sút',
        id_link: 10,
    },
    {
        id: 11,
        title: 'Thái Lan, Indonesia bất lực trước cột mốc của U20 Việt Nam',
        id_link: 11,
    },
    {
        id: 12,
        title: 'Bắt đối tượng trêu ghẹo cô gái, đập phá quán ăn ở TPHCM',
        id_link: 12,
    },
    {
        id: 13,
        title: 'Ba năm xung đột với Ukraine, Nga "thân" hơn với Trung Quốc, mọi thứ không hẳn đã tốt hơn',
        id_link: 1,
    },
    {
        id: 14,
        title: 'Nghị quyết 57 là cơ hội có một không hai với các nhà khoa học, giáo sư, tiến sĩ',
        id_link: 2,
    },
    {
        id: 15,
        title: 'Phá vỡ thỏa thuận ngừng bắn, Israel phát động không kích vào Lebanon',
        id_link: 3,
    },
    {
        id: 16,
        title: 'Mẫu xe Geely Monjaro dự kiến ra mắt thị trường Việt Nam với thiết kế nổi bật',
        id_link: 4,
    },
    {
        id: 17,
        title: 'Cô gái Bắc Ninh kể màn rước dâu chưa đầy 1 phút và tấm biển "lạ" trước cổng',
        id_link: 5,
    },
    {
        id: 18,
        title: 'Ông Zelensky rắn về chuyện "nợ nần" với Mỹ',
        id_link: 6,
    },
    {
        id: 19,
        title: 'Bắt nguyên chủ tịch phường cùng nguyên cán bộ địa chính do liên quan đến sai phạm đất đai',
        id_link: 7,
    },
    {
        id: 20,
        title: 'Giá vàng hôm nay 24-2: Vừa mở cửa đã đồng loạt giảm, vàng SJC giảm mạnh',
        id_link: 8,
    },
    {
        id: 21,
        title: 'Án phạt dành cho thủ môn Nguyễn Filip',
        id_link: 9,
    },
    {
        id: 22,
        title: 'Liệu các công ty phương Tây có khả năng quay trở lại thị trường Nga?',
        id_link: 10,
    },
    {
        id: 23,
        title: 'Chủ tịch UBND tỉnh Lạng Sơn: Cao tốc Lạng Sơn - Thái Nguyên vừa có ý nghĩa phát triển KT-XH, vừa đảm bảo ANQP',
        id_link: 11,
    },
    {
        id: 24,
        title: 'Điểm danh 3 sản phẩm du lịch mới hứa hẹn "làm mưa làm gió" tại Đà Nẵng',
        id_link: 12,
    },
    {
        id: 25,
        title: "'Cha đẻ' ChatGPT đón con đầu lòng",
        id_link: 1,
    },
    {
        id: 26,
        title: 'Volvo XC60 được nâng cấp nhẹ thiết kế',
        id_link: 2,
    },
    {
        id: 27,
        title: 'Toyota ngừng sản xuất dòng xe Corolla tại Nhật Bản',
        id_link: 3,
    },
    {
       id: 28,
        title: 'Công ty của Warren Buffett lãi kỷ lục, nắm khối tiền mặt 334 tỷ USD',
        id_link: 4, 
    },
    {
        id: 29,
        title: 'Hàng trăm nạn nhân được giải cứu thành công từ trung tâm lừa đảo',
        id_link: 5,
    },
    {
        id: 30,
        title: 'Hơn 4,6 triệu lượt hành khách đi metro số 1 sau 2 tháng vận hành',
        id_link: 6,
    }
];



document.addEventListener('DOMContentLoaded', () => {
    const section1 = document.querySelector('.section1');
    const goUpButton = document.querySelector('.go-up');
    const navbarMenu = document.querySelector('.navbar__menu-icon');
    const menuFull = document.querySelector('.navbar__menu-full');
    const loading = document.querySelector('.loading');
    const input = document.querySelector('.input__group input');
    const search = document.querySelector('.btn-search');
    const searchList = document.querySelector('.header__search-list');
    const inputFooter = document.querySelector('.input__group-footer input');
    const searchFooter = document.querySelector('.btn-search-footer');
    const searchListFooter = document.querySelector('.footer__search-list');
    const inputMobile = document.querySelector(".section8 .input");
    const searchButtonMobile = document.querySelector(".section8 .btn-search");
    const searchListMobile = document.querySelector(".section8 .header__search-list");
    const container = document.querySelector('.navbar__menu-full .containers');
    const header = document.querySelector('.header');
    const icon_search = document.querySelector('.right__icon-search');
    const searchMobile = document.querySelector('.section8');
    const pagetopic = document.querySelectorAll('.navbar__menu-topic .menu__topic-item');

    const heightHeader = header.clientHeight;
    console.log(heightHeader);
    let tops1 = section1.offsetTop;
    let isMenuOpen = false;
    let isSearchOpen = false;
    let isSearchFooterOpen = false;
    let isSearchMobile = false;
    let isSearchMobileOpen = false;

    document.body.classList.add('loading');

    setTimeout(() => {
        loading.style.display = 'none';
        document.body.classList.remove('loading');
    }, 1000);

    document.addEventListener('scroll', () => {
        if (window.scrollY > tops1) {
            section1.classList.add('position-fixed');
            section1.classList.remove('position-relative');
        } else {
            section1.classList.remove('position-fixed');
            section1.classList.add('position-relative');
        }

        if (window.scrollY > 1000 && document.body.scrollHeight > window.innerHeight * 1.5) {
            goUpButton.classList.add('show', 'position-fixed');
            goUpButton.classList.remove('position-relative');
        } else {
            goUpButton.classList.remove('show', 'position-fixed');
            goUpButton.classList.add('position-relative');
        }
    });

    goUpButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    navbarMenu.addEventListener('click', (e) => {
        e.stopPropagation();
        menuFull.classList.toggle('d-none');
    
        if (!menuFull.classList.contains('d-none')) {
            updateMenuHeight(); 
            isMenuOpen = true;
        } else {
            updateMenuHeight();
            isMenuOpen = false; 
        }
    });

    window.addEventListener('resize', () => {
        updateMenuHeight();
    });
    
    function updateMenuHeight() {
        if (!menuFull.classList.contains('d-none')) {
            let height = 0;
            container.style.height = 'auto';
            height = container.clientHeight;

            if (window.innerWidth < 800) {
                document.body.classList.add('overflow-hidden');

                if (window.scrollY <= tops1) {
                    container.style.height = `${height + heightHeader - window.scrollY}px`;
                }else{
                    container.style.height = `${height}px`;
                }
            }else {
                document.body.classList.remove('overflow-hidden');
                isMenuOpen = false; 
                container.style.height = 'auto';
            }
            isMenuOpen = true; 
        }else{
            isMenuOpen = false;
            document.body.classList.remove('overflow-hidden');
        } 
    }
    

    document.addEventListener('click', (e) => {
        if (isMenuOpen && !menuFull.contains(e.target) && !navbarMenu.contains(e.target)) {
            menuFull.classList.add('d-none');
            document.body.classList.remove('overflow-hidden');
            isMenuOpen = false;
        }
    });

    document.addEventListener('click', (e) => {
        if (isMenuOpen && !menuFull.contains(e.target) && !navbarMenu.contains(e.target)) {
            menuFull.classList.add('d-none');
            document.body.classList.remove('overflow-hidden');
            isMenuOpen = false;
        }
    });

    menuFull.addEventListener('click', (e) => {
        e.stopPropagation(); 
    });


    input.addEventListener('focus', () => {
        searchList.classList.remove('d-none');
        isSearchOpen = true;
        if (input.value.trim() !== '') {
            searchNews();
        }
    });

    document.addEventListener('click', (e) => {
        if (isSearchOpen && !searchList.contains(e.target) && !input.contains(e.target)) {
            searchList.classList.add('d-none');
            isSearchOpen = false;
        }
    });

    input.addEventListener('keyup', (e) => {
        searchNews();
        if(e.key === 'Enter'){
            let values = input.value.trim();
            if (values) {
                window.location.href = `./search.html?value=${values}`;
            }else{
                alert('Vui lòng nhập từ khóa tìm kiếm!');
            }
        }
    });

    search.addEventListener('click', () => {
        let values = input.value.trim();
        if (values) {
            window.location.href = `./search.html?value=${values}`;
        }else{
            alert('Vui lòng nhập từ khóa tìm kiếm!');
        }
    });

    function searchNews() {
        let count = 5;
        let lis = '';
        let values = input.value.trim();
        if (values === '') {
            searchList.innerHTML = '';
            return;
        }
        let arr = arrSearch.filter((item) => item.title.toLowerCase().includes(values.toLowerCase()));

        arr.slice(0, count).forEach((item) => {
            lis += `<li><a href="./page.html?id=${item.id_link}">${item.title}</a></li>`;
        });

        if (lis === '') return;

        searchList.innerHTML = `
        <div class="search__list">
            <ul>${lis}</ul>
        </div>`;
    }

    inputFooter.addEventListener('focus', () => {
        searchListFooter.classList.remove('d-none');
        isSearchFooterOpen = true;
        if (inputFooter.value.trim() !== '') {
            searchFooterNews();
        }
    });
  
    document.addEventListener('click', (e) => {
        if (isSearchFooterOpen && !searchListFooter.contains(e.target) && !inputFooter.contains(e.target)) {
            searchListFooter.classList.add('d-none');
            isSearchFooterOpen = false;
        }
    });
    
    inputFooter.addEventListener('keyup', (e) => {
        searchFooterNews();
        if(e.key === 'Enter'){
            let values = inputFooter.value.trim();
            if (values) {
                window.location.href = `./search.html?value=${values}`;
            }else{
                alert('Vui lòng nhập từ khóa tìm kiếm!');
            }
        }
    });
    
    searchFooter.addEventListener('click', () => {
        let values = inputFooter.value.trim();
        if (values) {
            window.location.href = `./search.html?value=${values}`;
        }else{
            alert('Vui lòng nhập từ khóa tìm kiếm!');
        }
    });

    function searchFooterNews() {
        let count = 5;
        let lis = '';
        let values = inputFooter.value.trim();

        if (values === '') {
            searchListFooter.innerHTML = '';
            return;
        }
        let arr = arrSearch.filter((item) => item.title.toLowerCase().includes(values.toLowerCase()));

        arr.slice(0, count).forEach((item) => {
            lis += `<li><a href="./page.html?id=${item.id_link}">${item.title}</a></li>`;
        });

        if (lis === '') return;

        searchListFooter.innerHTML = `
        <div class="search__list">
            <ul>${lis}</ul>
        </div>`;
    }

    inputMobile.addEventListener("focus", () => {
        searchListMobile.classList.remove("d-none");
        isSearchMobile = true;
        if (inputMobile.value.trim() !== "") {
            searchMobileNews();
        }
    });

    document.addEventListener("click", (e) => {
        if (isSearchOpen && !searchListMobile.contains(e.target) && !inputMobile.contains(e.target)) {
            searchListMobile.classList.add("d-none");
            isSearchMobile = false;
        }
    });

   
    inputMobile.addEventListener("keyup", (e) => {
        searchMobileNews();
        if (e.key === "Enter") {
            let values = inputMobile.value.trim();
            if (values) {
                window.location.href = `./search.html?value=${values}`;
            }else{
                alert('Vui lòng nhập từ khóa tìm kiếm!');
            }
        }
    });

   
    searchButtonMobile.addEventListener("click", () => {
        let values = inputMobile.value.trim();
        if (values) {
            window.location.href = `./search.html?value=${values}`;
        }else{
            alert('Vui lòng nhập từ khóa tìm kiếm!');
        }
    });

 
    function searchMobileNews() {
        let count = 5;
        let lis = "";
        let values = inputMobile.value.trim();

        if (values === "") {
            searchListMobile.innerHTML = "";
            searchListMobile.classList.add("d-none");
            return;
        }

        let arr = arrSearch.filter((item) => item.title.toLowerCase().includes(values.toLowerCase()));
        searchListMobile.innerHTML = "";

        arr.slice(0, count).forEach((item) => {
            lis += `<li><a href="./page.html?id=${item.id_link}">${item.title}</a></li>`;
        });

        if (lis === "") return;

        searchListMobile.innerHTML = `
        <div class="search__list">
            <ul>${lis}</ul>
        </div>`;

    }

    icon_search.addEventListener('click', (e) => {
        e.stopPropagation();
        searchMobile.classList.toggle('d-none');
        isSearchMobileOpen = true;
    });
    document.addEventListener('click', (e) => {
        if (isSearchMobileOpen && !searchMobile.contains(e.target) && !icon_search.contains(e.target)) {
            searchMobile.classList.add('d-none');
            isSearchMobileOpen = false;
        }
    });

    pagetopic.forEach((item) => {
        item.addEventListener('click', (e) => {
            let id = item.innerHTML;
            let value = id.slice(1, id.length).trim();
            window.location.href = `./pagetopic.html?id=${value}`;
        });
    });

    function updateUI() {
        const icon_block = document.querySelector('.right__icon-block');
        const icon_search = document.querySelector('.right__icon-search');
        const menu_topic = document.querySelector('.navbar__menu-topic');
        const footer_left = document.querySelector('.footer__level .level__left');

        if (window.innerWidth < 800) {
            icon_block.classList.add('d-none');
            menu_topic.classList.add('d-none');
            footer_left.classList.add('d-none');
            icon_search.classList.remove('d-none');
        } else {
            icon_block.classList.remove('d-none');
            menu_topic.classList.remove('d-none');
            footer_left.classList.remove('d-none');
            icon_search.classList.add('d-none');
            searchMobile.classList.add('d-none');
        }
    }

    updateUI();
    window.addEventListener('resize', updateUI);
});




