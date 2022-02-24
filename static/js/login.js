function check_All() {
    //html id, pw 가져오기
    let user_id = document.getElementById("id")
    let user_pw = document.getElementById("pw")

    // 비어있는 경우 예외처리
    if (user_id.value === "") {
        alert("아이디를 입력해주세요")
        user_id.focus(); // focus() : 커서가 깜빡이게 설정
        return false; // 비어있으면 아래 함수들 작동 x
    };
    if (user_pw.value === "") {
        alert("비밀번호를 입력해주세요");
        user_pw.focus();
        return false;
    };


// ['쿠키'라는 개념에 대해 알아봅시다] -> 브라우저에 저장되어있는 정보
// 로그인을 구현하면, 반드시 쿠키라는 개념을 사용합니다.
// 페이지에 관계없이 브라우저에 임시로 저장되는 정보입니다. 키:밸류 형태(딕셔너리 형태)로 저장됩니다.
// 쿠키가 있기 때문에, 한번 로그인하면 네이버에서 다시 로그인할 필요가 없는 것입니다.
// 브라우저를 닫으면 자동 삭제되게 하거나, 일정 시간이 지나면 삭제되게 할 수 있습니다.
    function login() {
        let id = $('#id').val();
        let pw = $('#pw').val();

        $.ajax({
            type: "POST",
            url: "/api/login",
            data: {id_give: id, pw_give: pw},

            success: function (response) {
                if (response['result'] == 'success') {
                    // 로그인이 정상적으로 되면, 토큰을 받아옵니다.
                    // 이 토큰을 mytoken이라는 키 값으로 쿠키에 저장합니다.

                    $.cookie('mytoken', response['token']);

                    alert('로그인 완료!')
                    window.location.href = 'index_ok'
                } else {
                    // 로그인이 안되면 에러메시지를 띄웁니다.
                    alert(response['msg'])
                    window.location.replace('login')
                }
            }
        })
    }
    login();
}