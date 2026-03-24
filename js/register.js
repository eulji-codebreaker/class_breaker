fetch("../layout/header.html") //웹문서 요청
    .then((response) => response.text()) //응답을 받고 text로 변환
    .then((responseText) => {
        // console.log(responseText);
        document.querySelector('body').insertAdjacentHTML("afterbegin", responseText);
        const day = document.querySelector('#dday');

            function diffDay() {
            const getDay = new Date(2026, 3, 21); //설정하고자 하는 달에서 -1로 설정해야 함
            const today = new Date();
            const diff = getDay - today;
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));

            day.innerText = `중간고사 D-${days}`;
        }

            diffDay();
            setInterval(diffDay, 1000 * 60 * 60);
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



//메뉴 요소들을 선택합니다.
const menuMyPage = document.querySelector('.menu3');   // 마이페이지
const menuClass = document.querySelector('.menu4');    // 강의실
const menuRegister = document.querySelector('.menu5'); // 수강신청
const menuNotice = document.querySelector('.menu6');   // 공지사항

// 1. 마이페이지 클릭 시
menuMyPage.addEventListener('click', () => {
    location.href = "/myPage/myPage_student.html"; // 마이페이지 경로
});

// 2. 강의실 클릭 시
menuClass.addEventListener('click', () => {
    location.href = "/lectureRoom/index.html"; // 강의실 경로
});

// 3. 수강신청 클릭 시
menuRegister.addEventListener('click', () => {
    location.href = "../register/index.html"; // 수강신청 경로
});

// // 4. 공지사항 클릭 시
// menuNotice.addEventListener('click', () => {
//     location.href = "../


