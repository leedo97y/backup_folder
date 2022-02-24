function postComment() {
        let local = $("#post-local").val();
        let talk = $("#post-talk").val();

        if ($('#post-local').val() == '') {
            alert('지역을 입력하세요!');
            return false;
        }
        if ($('#post-talk').val() == '') {
            alert('날씨 이야기를 입력하세요!');
            return false;
        } else {
            local = $("#post-local").val();
            talk = $("#post-talk").val();

            function getToday() {
                var date = new Date();
                return date.getFullYear() + "." + ("0" + (date.getMonth() + 1)).slice(-2) + "." + ("0" + date.getDate()).slice(-2) + " " + ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2);
            }
            //날짜 부분 수정 작업 예정

            let date = getToday();

            $.ajax({
                type: "POST",
                url: "/weather/comment",
                data: {local_give: local, talk_give: talk, date_give: date},
                success: function (response) {
                    alert(response["msg"]);
                    window.location.reload();
                }
            })
        }
    }