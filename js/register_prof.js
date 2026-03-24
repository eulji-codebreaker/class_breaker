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
fetch("../layout/sidebar.html") //사이드바 있는경우만!!! sidebar불러오기
    .then((response) => response.text())
    .then((responseText) => {
        document.querySelector('main').insertAdjacentHTML("afterbegin", responseText);
    })
    
const topbarItems = document.querySelectorAll('.topbar div');

topbarItems[0].addEventListener('click', () => {
    location.href = "prof_index.html";
});

topbarItems[1].addEventListener('click', () => {
    location.href = "prof_update.html";
});

topbarItems[2].addEventListener('click', () => {
    location.href = "prof_delete.html";
});

topbarItems[3].addEventListener('click', () => {
    location.href = "prof_timetable.html";
});



var role=JSON.parse(localStorage.getItem('prof')).userPosition;