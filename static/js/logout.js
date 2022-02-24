// jwt로 발급해준 서버 쿠키의 토큰 삭제로 로그아웃합니다.
// path는 쿠키를 설정해준 경로입니다. '/' default 값입니다.
// 제이쿼리 쿠키 스크립트 임포트 필수!
function logout() {
    $.removeCookie('mytoken', {path: '/'});
    alert('로그아웃 완료!')
    window.location.href = '/';
}