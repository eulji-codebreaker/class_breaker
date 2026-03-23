function mylecture() {
    // 강의 목록 영역 가져오기
    var lectureList = document.getElementById('lecture-list');

    if (lectureList === null) return;

    // 초기화
    lectureList.innerHTML = "";

    // 사용자 정보 가져오기
    var userData = localStorage.getItem('user');

    var user = JSON.parse(userData);
    var lectures = user.lectures || [];

    // 강의 없을 때
    if (lectures.length === 0) {
        var li = document.createElement('li');
        li.innerText = '신청한 강의가 없습니다.';
        lectureList.appendChild(li);
    }
    else {
        // 강의 목록
        for (let i = 0; i < lectures.length; i++) {
            let lectureName = lectures[i];

            var lectureli = document.createElement('li');

            // 강의 이름
            var lectureTitle = document.createElement('span');
            lectureTitle.innerText = lectureName + " ";

            lectureli.appendChild(lectureTitle);
            lectureList.appendChild(lectureli);
        }
    }
}

mylecture();