
var index = 0;

$(function() {
// code for clicking button .etc

    $("#getJoke").click(
        function() {
            $.get("/jokes",function(data){
                $("#setup").html(data.setup);
                $("#punchline").html(data.punchline);
                index = data.id;
                alert(index);
            },"json");
        };
    );
    $('#upvote').on("click", function() {
        $.post("/upvote");
    });
    $('#downvote').on("click", function() {
        $.post("/downvote");
    });
});
