var canvas_main = document.getElementById('canvas')
var select_pixel = document.querySelectorAll('#pixel')
var color_pixel = "#FFFF00"
var canvas_wh = 20; 
var canvas_hg = 20;    


function pull_size_canvas(height, widht){
    var canvas = "";
    for (let i = 1; i < widht + 1; i++ ){
        for (let j = 1; j < height + 1; j++ ){
            canvas += '<div id="pixel"></div>';
        }
        canvas += '<br>';
    }
    canvas_main.innerHTML = canvas;
    select_pixel = document.querySelectorAll('#pixel');
    pick_your_love();
}

pull_size_canvas(canvas_hg, canvas_wh);

function pick_your_love(){
select_pixel.forEach(select_pixels => {
    select_pixels.addEventListener('click', fuk => {
        select_pixels.style.backgroundColor = color_pixel;
    });    
});
}

function select_color(target_pixel){
    color_pixel = target_pixel.attr("value")
    $(".color_pick").css('background-color', target_pixel.attr("value"))
}

function handler( event ){
    var target = $( event.target )
    if(target.is(".color")) {
        select_color(target);
    }
}

$(".color").click(handler);