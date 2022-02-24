$(document).ready(function () {
        showComment();
    });

function showComment() {
        $.ajax({
            type: "GET",
            url: "/weather/comment",
            data: {},
            success : function (response) {
                let comments = response['all_comments']
                for (let i = 0; i < comments.length; i++) {
                    let local = comments[i]['local']
                    let talk = comments[i]['talk']
                    let date = comments[i]['date']

                    let temp_html = `<tr>
                                        <td class="form-text"><small class="text-muted">${local} <span
                                                class="date">${date}</span></small>
                                            ${talk}
                                        </td>
                                    </tr>`
                    $('#table-box').append(temp_html)
                }
            }
        })
    }