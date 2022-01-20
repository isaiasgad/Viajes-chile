$(document).ready(function(){

    $("a").click(function(){
        var gato = this.hash

        $("html, body").animate(
            {
                scrollTop: $(gato).offset().top - 120
            },
            1500
        )
        

    })

    var nav = document.getElementById('nav');
    window.onscroll = function() {
        if (window.pageYOffset > 100) {
            nav.classList.add("white");
        }
        else {
            nav.classList.remove("white");
        }
    }
})

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
}) 