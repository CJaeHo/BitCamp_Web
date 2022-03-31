$(function(){   // js는 $(function(){});을 무조건 주고 시작해야함
    var n=0;    // 맞춘 인형 갯수..전역변수로 선언..
    // 총을 클릭하면 0~11 사이의 랜덤값을 발생
    // 해당 인형을 안보이게 처리
    // 메세지 창 : 1번째 인형을 맞추셨어요
    // 1번이 이미 사라지고 없는 경우 : 1번 인형은 이미 처리되었어요
    // 12개의 인형이 모두 사라지면 : "Win!!"


    $(".gun").click(function(){
        var idx=parseInt(Math.random()*12);     // 0~11
        // 결국 둘다 11까지나옴
        // var idx=Math.ceil(Math.random()*11);   // 무조건 올림.. 0.1이나 0.9나 그냥 올림
        // var idx=Math.floor(Math.random()*12);   // 무조건 내림.. round는 반올림

        if($(".sunban li img").eq(idx).is(":hidden")){
            // 만약 선반 class아래 li아래 img의 idx번째가 hidden이면...
            $("#msg").html((idx+1)+"번 인형은 이미 처리되었어요");
        }else{
            $("#msg").html((idx+1)+"번째 인형을 맞추셨어요!!");
            // $(".sunban li img").eq(idx).hide();     // 조금 재미없게 사라지니깐
            $(".sunban li img").eq(idx).fadeOut('slow');    // 천천히 사라지게끔
            // 근데 얘가 문제점이 마지막 1개 남았을 때 먼저 win이 나와버림..
            n++;    // 새로운 인형을 맞출 때마다 1 증가시키기
        }

        if(n>=12){
            $("#msg").html("Win!!");
        }


    });

    

    // money를 클릭하면 모두 초기화 (사라진 인형을 재배치, 메세지 창 지우기)후
    // 클릭한 지폐는 안보이게 처리


    $(".money img").click(function(){       // money가 묶여있으니까 사진하나하나로 인식시키게
        // $(this).hide();         // hide는 자리를 차지하지 않아서 남은게 올라옴
        $(this).css("opacity",0);   // 이게 싫으면 투명도를 조정해서 안보이게하는 방법을 쓰면됨
        n=0;
        $(".sunban li img").show();
        $("#msg").html("");
    });







});