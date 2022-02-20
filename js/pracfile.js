function loginSession(){
    $ajax({
        url: "/weather/login",
        type: 'GET',
        data: {},
        success: function (response) {
            let loginData = response['login_data']
            for (let i = 0; i < loginData.length; i++) {
                let id = loginData[i]['email']
                let password = loginData[i]['password']

            }
        }
    })
}

// 로그인 GET 방식 