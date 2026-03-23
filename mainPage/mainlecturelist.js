const lectureList = [ //전체 강의목록 불러오기(서민지님 마이페이지 완성되면 받아오기)
            { lessonId: 1, lessonName: "기모띠" },
            { lessonId: 123, lessonName: "하이" },
            { lessonId: 1234, lessonName: "fffffffffffffffff" },
            { lessonId: 12345, lessonName: "eeeeeeeeeeeeeeeeee" },
            { lessonId: 123456, lessonName: "ssssssss" },
            { lessonId: 1234567, lessonName: "gggggggg" },
            { lessonId: 12345678, lessonName: "qqqqqqqqq" },
            { lessonId: 123456789, lessonName: "reeeeeeee" },
        ];
// const lectureList=JSON.parse(localStorage.getItem('mylesson'));
const $lectureList=document.querySelector('#lecture-list');
const addLecture=(name)=>{
    const li=document.createElement('li');
    li.classList.add('lecture-list')
    li.innerText=name;
    $lectureList.appendChild(li);
}
const loadlecture=()=>{
    lectureList.forEach((e)=>{
        addLecture(e.lessonName);
    })
}

loadlecture();






// function mylecture() {
//     // 강의 목록 영역 가져오기
//     // var lectureList = document.getElementById('lecture-list');

//     if (lectureList === null) return;

//     // 초기화
//     lectureList.innerHTML = "";

//     // 사용자 정보 가져오기
//     var userData = localStorage.getItem('user');

//     var user = JSON.parse(userData);
//     var lectures = user.lectures || [];

//     // 강의 없을 때
//     if (lectures.length === 0) {
//         var li = document.createElement('li');
//         li.innerText = '신청한 강의가 없습니다.';
//         lectureList.appendChild(li);
//     }
//     else {
//         // 강의 목록
//         for (let i = 0; i < lectures.length; i++) {
//             let lectureName = lectures[i];

//             var lectureli = document.createElement('li');

//             // 강의 이름
//             var lectureTitle = document.createElement('span');
//             lectureTitle.innerText = lectureName + " ";

//             lectureli.appendChild(lectureTitle);
//             lectureList.appendChild(lectureli);
//         }
//     }
// }

// mylecture();