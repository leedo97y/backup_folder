let idToken = false
let pwToken = false
let nickToken = false

let user_id = document.getElementById("id")
let user_pw = document.getElementById("pw")
let user_nickname = document.getElementById("nickname")

// onkeyup 이벤트로 small 문구 작성
// 작성할 때마다 확인하여 small에서 확인 문구 이벤트 발생
// test() 메서드는 주어진 문자열이 정규 표현식을 만족하는지 판별하고, 그 여부를 true 또는 false로 반환

// 1. 아이디
user_id.onkeyup = () => {
    const idReg = /^[a-z0-9]{3,20}$/;
    if (!idReg.test(document.getElementById('id').value)) {
        document.getElementsByClassName('check-text')[0].innerText = "영문소문자/숫자, 3~20자리로 입력해주세요."
        idToken = false;
    } else {
        document.getElementsByClassName('check-text')[0].innerText = "올바른 아이디입니다"
        idToken = true;
    }
}
// 2. 닉네임
user_nickname.onkeyup = () => {
    const nicknameReg = /^[가-힣a-zA-Z0-9]{2,10}$/;
    if (!nicknameReg.test(document.getElementById('nickname').value)) {
        document.getElementsByClassName('check-text')[1].innerText = "한글/영문자/숫자 2~10자리로 입력해주세요"
        pwToken = false;
    } else {
        document.getElementsByClassName('check-text')[1].innerText = "올바른 닉네임입니다"
        nickToken = true;
    }
}
// 3. 비밀번호
user_pw.onkeyup = () => {
    // 비밀번호 영문자, 숫자, 특수 문자 및 8~20자리 체크
    const pwReg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (!pwReg.test(document.getElementById('pw').value)) {
        console.log(!pwReg.test(document.getElementById('pw').value));
        document.getElementsByClassName('check-text')[2].innerText = "영문자/숫자/특수문자 8~20자리로 입력해주세요."
        pwToken = false;
    } else {
        console.log(!pwReg.test(document.getElementById('pw').value));
        document.getElementsByClassName('check-text')[2].innerText = "올바른 비밀번호입니다"
        pwToken = true;
    }
}

function check_All(){
    console.log("작동중")
    // 비어있는 경우 예외처리
    if (user_id.value === "" || user_id.value == null) {
        alert("아이디를 입력해주세요")
        user_id.focus(); // focus() : 커서가 깜빡이게 설정
        return false; // 비어있으면 아래 함수들 작동 x
    };

    if (user_nickname.value === "" || nickname.value == null) {
        alert("비밀번호를 입력해주세요");
        nickname.focus();
        return false;
    };

    if (user_pw.value === "" || user_pw.value == null) {
        alert("비밀번호를 입력해주세요");
        user_pw.focus();
        return false;
    };

    // id, pw, nicname을 제대로 썼는지 토큰으로 확인
    if(!idToken) {
        alert("아이디 형식을 확인하세요");
        return false;
    }

    if(!pwToken){
        alert("비밀번호 형식을 확인하세요");
        return false;
    }

    if(!nickToken){
        alert("닉네임임 형식을 확인세요.");
        return false;
    }

    console.log("if문 통과")

    // api 발송
    function register() {
        let id = $('#id').val();
        let pw = $('#pw').val();
        let nickname = $('#nickname').val();
        $.ajax({
            type: "POST",
            url: "/api/register",
            data: {id_give: id, pw_give: pw, nickname_give: nickname},
            success: function (response) { // 성공하면
                alert(response["msg"]);
                window.location.replace('login')
            }
        })
    }
    register();
}