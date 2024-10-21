<script>
(function() {
    const url = "요청 url";

    // 요청에 필요한 데이터 설정
    const data = new URLSearchParams({
        //파라미터
        // 이름 : 값,
    });

    // POST 요청 보내기
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: data,
        credentials: 'include' // 쿠키를 자동으로 포함
    });
})();
</script>
