


// 헤더 불러오기 및 로그아웃 모달 제어
fetch("../layout/nosideheader.html")
    .then((response) => response.text())
    .then((responseText) => {
        document.querySelector('body').insertAdjacentHTML("afterbegin", responseText);

        var logoutBtn = document.getElementById('logoutBtn'); // 헤더의 로그아웃 글자
        var logoutModal = document.getElementById('logout-confirm-modal');
        var realLogoutBtn = document.getElementById('real-logout-btn');

        if (logoutBtn) {
            // 로그아웃 클릭 시 모달 열기
            logoutBtn.onclick = function () {
                logoutModal.style.display = "flex";
            };
        }

        if (realLogoutBtn) {
            // 로그아웃
            realLogoutBtn.onclick = function () {
                localStorage.removeItem('user');
                localStorage.removeItem('currentLecture');
                location.assign("../index.html");
            };
        }
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
    });


// 취소 버튼
function closeLogoutModal() {
    document.getElementById('logout-confirm-modal').style.display = "none";
}

fetch("../layout/footer.html") //footer불러오기
    .then((response) => response.text()) //응답을 받고 text로 변환
    .then((responseText) => {
        document.querySelector('body').insertAdjacentHTML("beforeend", responseText);
    })

// 페이지 이동
// 수강신청으로 이동
function toregister() {
    location.assign("../register/index.html");
}



// 마이페이지로 이동
function tomypage() {


    if (role === 'prof') {
        location.assign(`../mypage/mypage_professor.html`);
    }
    else {
        location.assign(`../mypage/mypage_${role}.html`);
    }
}

// 강의실로 이동
function tolectureroom() {
    location.assign("../lectureroom/index.html");
}

// 내 정보-로그인 불러오기
var userLocal = localStorage.getItem('user');

if (userLocal !== null) {
    var user = JSON.parse(userLocal);
    var role = user.userPosition;
    var name = user.userName;
    var id = user.userId;
    var major = user.userMajor;
    var grade = user.userGrade;

    if (role === 'student') {
        document.querySelector('#val1').innerText = name;
        document.querySelector('#val2').innerText = id;
        document.querySelector('#val3').innerText = major;
        document.querySelector('#val4').innerText = grade;
    }
    else if (role === 'prof') {
        document.querySelector('#label2').innerText = '사번: ';
        document.querySelector('#val1').innerText = name;
        document.querySelector('#val2').innerText = id;
        document.querySelector('#val3').innerText = major;
        document.querySelector('#label4').style.display = "none";
        document.querySelector('#val4').style.display = "none";
        const dummy = [
            { lessonId: "160m11", lessonName: "프로그래밍기초", lessonProf: "강교수", lessonProfId: "201016001", lessonMajorName: "첨단학부", lessonGrade: 1, lessonMax: 30, lessonNow: 7, lessonRoom: "박애관421호", lessonDay: 1, lessonBegin: 9, lessonEnd: 11, lessonPoint: 3, lessonContent: "자바스크립트 기반 프로그래밍 입문" },
            { lessonId: "160m12", lessonName: "웹프론트엔드", lessonProf: "강교수", lessonProfId: "201016001", lessonMajorName: "첨단학부", lessonGrade: 2, lessonMax: 25, lessonNow: 12, lessonRoom: "본관302호", lessonDay: 3, lessonBegin: 13, lessonEnd: 15, lessonPoint: 3, lessonContent: "HTML, CSS, JS 기반 웹 개발" },
            { lessonId: "160m13", lessonName: "데이터구조", lessonProf: "강교수", lessonProfId: "201016001", lessonMajorName: "첨단학부", lessonGrade: 2, lessonMax: 30, lessonNow: 18, lessonRoom: "범석관210호", lessonDay: 2, lessonBegin: 10, lessonEnd: 12, lessonPoint: 3, lessonContent: "자료구조 이론 및 구현" },
            { lessonId: "160m14", lessonName: "알고리즘", lessonProf: "강교수", lessonProfId: "201016001", lessonMajorName: "첨단학부", lessonGrade: 3, lessonMax: 25, lessonNow: 15, lessonRoom: "을지관110호", lessonDay: 4, lessonBegin: 14, lessonEnd: 16, lessonPoint: 3, lessonContent: "문제 해결 능력 향상" },
            { lessonId: "160m15", lessonName: "캡스톤디자인", lessonProf: "강교수", lessonProfId: "201016001", lessonMajorName: "첨단학부", lessonGrade: 4, lessonMax: 20, lessonNow: 10, lessonRoom: "본관401호", lessonDay: 5, lessonBegin: 10, lessonEnd: 12, lessonPoint: 3, lessonContent: "팀 프로젝트 기반 실무 개발" }]
        localStorage.setItem('myLessons', JSON.stringify(dummy));
    }
    else if (role === 'admin') {
        document.querySelector('#label2').innerText = '사번: ';
        document.querySelector('#val1').innerText = name;
        document.querySelector('#val2').innerText = id;
        document.querySelector('#label3').style.display = "none";
        document.querySelector('#val3').style.display = "none";
        document.querySelector('#label4').style.display = "none";
        document.querySelector('#val4').style.display = "none";
    }
}

// 내 강의실-강의 정보 불러오기

const lectureList = JSON.parse(localStorage.getItem('myLessons'));
const $lectureList = document.querySelector('#lecture-list');
const addLecture = (name) => {
    const li = document.createElement('li');
    li.classList.add('lecture-list')
    li.innerText = name;
    $lectureList.appendChild(li);
}
const loadlecture = () => {
    // 강의 없을  때 
    if (!lectureList || lectureList.length === 0) {
        const li = document.createElement('li');
        li.classList.add('lecture-list', 'empty-lecture');
        li.innerText = "강의가 없습니다.";
        $lectureList.appendChild(li);
        return;
    }
    lectureList.forEach((e) => {
        addLecture(e.lessonName);
    })
}

loadlecture();
