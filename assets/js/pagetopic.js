let arr = [
    {
        id: "Năng lượng tích cực",
        bg: "bg3.jpg",
    },
    {
        id: "Khám phá việt nam",
        bg: "bg2.jpg",
    },
    {
        id: "Khám phá thế giới",
        bg: "bg1.jpg",
    }
];

document.addEventListener('DOMContentLoaded', function() {
    const url = new URL(window.location.href);
    const id = url.searchParams.get('id');
    console.log(id);
    const topic = arr.find(e => e.id.toLocaleLowerCase() === id.toLocaleLowerCase());
    console.log(topic);
    if (topic) {
        document.querySelector('.body__main-title').innerHTML = topic.id.toLocaleUpperCase();
        document.querySelector('.section9').style.backgroundImage = `url(../assets/img/${topic.bg})`;
    }
});