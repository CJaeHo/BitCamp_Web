$(function(){
    // Now Playing 부분 클릭 시 노래 목록 나오게 하기
    $("h1.title").click(function(){
        $("ul.music-list").slideDown('slow')
    });

    // 노래 제목 클릭 시 목록 다시 slideUp으로 없애기
    $("ul.music-list li").click(function(){
        // 1. 클릭한 곳의 노래 제목을 변수 title에 저장
        var title=$(this).text();                   // 제목을 저장하니까 text로 간단하게
        // 2. title을 h1.title에 넣기
        $("h1.title").text(title);                  // 얘도 글자를 넣는거니까 text로 간단하게
        // 3. class 이름을 얻기(변수명 clname)
        var clname=$(this).attr("class");           // this로부터 class 이름 얻음.. this는 music-list에서 클릭한 'music(1,2,3)'이거 말하는거
        // 4. cd change #cd의 width를 0으로하고 완료시 호출되는 함수에서
        // #cd에 clname을 class로 변경하고 width를 다시 300px로 변경
        $("#cd").animate({"width":"0"},'slow',function(){  // 들어가고
            $("#cd").attr("class",clname);
            $(this).animate({"width":"300px"},'slow');      // 다시나와
        });     // 들어가고 클릭한 music으로 바뀌고 다시 나오고
        // 목록 없애기
        $("ul.music-list").slideUp("slow");
    });
});