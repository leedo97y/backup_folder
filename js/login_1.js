
$(document).ready(function (){
    $('#btn_login').on('click', function (){
        loginSession();
    })
});

function loginSession() {
    var id_give = $('#email').val();
    var pw_give = $('#password').val();
}



function loginSession() {



    $.ajax({
        url:"/weather/login",
        type:'POST',
        dataType:'text',
        data:JSON.stringify({"id_give":$("#email").val(),"pw_give":$("#password").val()}),
        contentType: 'application/json',
        success:function(data) {
                alert("로그인 성공");
                window.location.href = "comment.html";
            },
            error: function(data){
                alert("로그인 실패");
            }
        },

        error:function(data,status,er) {
            alert("error: "+data+" status: "+status+" er:"+er);
        }

    });
}








