fetch("../layout/header.html") //웹문서 요청
    .then((response) => response.text()) //응답을 받고 text로 변환
    .then((responseText) => {
        // console.log(responseText);
        document.querySelector('body').insertAdjacentHTML("afterbegin", responseText);
    })
fetch("../layout/footer.html") //웹문서 요청
    .then((response) => response.text()) //응답을 받고 text로 변환
    .then((responseText) => {
        // console.log(responseText);
        document.querySelector('body').insertAdjacentHTML("beforeend", responseText);
    })

// fetch("../layout/sidebar.html") //사이드바 있는경우만!!! sidebar불러오기
//     .then((response) => response.text())
//     .then((responseText) => {
//         document.querySelector('main').insertAdjacentHTML("afterbegin", responseText);
//     })


    
const topbarItems = document.querySelectorAll('.topbar div');

topbarItems[0].addEventListener('click', () => {
    location.href = "check.html";
});

topbarItems[1].addEventListener('click', () => {
    location.href = "basket.html";
});

topbarItems[2].addEventListener('click', () => {
    location.href = "register.html";
});

topbarItems[3].addEventListener('click', () => {
    location.href = "timetable.html";
});


var role=JSON.parse(localStorage.getItem('student')).userPosition;