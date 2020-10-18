

$(document).ready( () => {

    $("body").addClass("animate__animated animate__fadeInDown");


    // Selecting color theme
    let themeMode = 0;
    $("#theme-mode").click(() => {
        themeMode++;
        if (themeMode % 2 == 0) {
        $("body").addClass("dark-mode").removeClass("white-mode");
        } else {
        $("body").addClass("white-mode").removeClass("dark-mode");
        }
    })

     // When cool guy is clicked
     $(".cool-guy").click(() => {
        $("body").removeClass("animate__animated animate__fadeInDown");
        $("body").html("<p class='cool-guy2'>😎</p><p>nice</p>").addClass("animate__animated animate__bounceInRight");
    })
  
    // 1
    $("#flip").click(function() {
        $("#panel").slideToggle("slow");
    });

    // 2
    $("#shutdown").click( () => {
        $("main").addClass("animate__animated animate__flash")
        setTimeout(() => {
            $("body").addClass("animate__animated animate__hinge")
        }, 1000);

        
    })

    // 3
    $("#read-3").click( () => {
        $("#read-3").remove();
        $("#article-text-3").append("Sapiente voluptatum adipisci saepe impedit deleniti dolorum ex eaque consequuntur, suscipit quos. Necessitatibus similique vitae omnis consectetur qui error, nulla explicabo, totam nemo molestias delectus magni. Dolorem, at distinctio atque optio hic quas ratione cum velit, eligendi, corrupti inventore quidem eius error.")
    })
   
})