function signUpSession() {
    var id = $('#inputEmail4').val();
    var pw = $('#form-control-pw')
    
        $.ajax({
            type: 'POST',
            url: 'weather/signUp',
            data: {
                id : email
            },
            
        })
}