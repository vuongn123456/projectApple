
const color = document.getElementById("color-selected");
const btn1 = document.getElementById("color1");
const btn2 = document.getElementById("color2");
const btn3 = document.getElementById("color3");

let color_picked1 = "Graphite";
let color_picked2 = "Gold";
let color_picked3 = "Silver";
let reset_info = ""

btn1.onclick = function() {
    color.textContent = color_picked1;
}
btn2.onclick = function() {
    color.textContent = color_picked2;
}
btn3.onclick = function() {
    color.textContent = color_picked3;
}

// model
const cellular = document.getElementById("gps_cellular");
const model_btn = document.getElementById("model");
let result = "GPS + Cellular";

model_btn.addEventListener("click", function(){
    cellular.textContent = result;
});

// strap
const strap_picked = document.getElementById("strap-selected");
const strap_btn1 = document.getElementById("strap1");
const strap_btn2 = document.getElementById("strap2");

let strap_picked1 = "Dây thép";
let strap_picked2 = "Dây thể thao";

strap_btn1.addEventListener("click", function() {
    strap_picked.textContent = strap_picked1;
});
strap_btn2.addEventListener("click", function() {
    strap_picked.textContent = strap_picked2;
});

// dimension
const dimension_info = document.getElementById("watch_dimension");
const dimension_btn1 = document.getElementById("dimension1");
const dimension_btn2 = document.getElementById("dimension2");

let dimension_info1 = "41mm";
let dimension_info2 = "45mm";

dimension_btn1.onclick = function() {
    dimension_info.textContent = dimension_info1;
}
dimension_btn2.onclick = function() {
    dimension_info.textContent = dimension_info2;
}

// reset
const reset_btn = document.getElementById("reset");
reset_btn.onclick = function() {
    color.textContent = reset_info;
    cellular.textContent = reset_info;
    strap_picked.textContent = reset_info;
    dimension_info.textContent = reset_info;
}

// change image and price
$(function () {
    $(".button_circle_img").click(function () {
        let watch_color1 = $(this).attr('image_product1');
        $("#silde-img1").attr('src', watch_color1);
        let watch_color2 = $(this).attr('image_product2');
        $("#silde-img2").attr('src', watch_color2);
        let watch_color3 = $(this).attr('image_product3');
        $("#silde-img3").attr('src', watch_color3);
        let watch_color4 = $(this).attr('image_product4');
        $("#silde-img4").attr('src', watch_color4);
        let watch_color5 = $(this).attr('image_product5');
        $("#silde-img5").attr('src', watch_color5);
        let new_price1= $(this).attr('price');
        $(".original_price").html(new_price1);
        let new_price2= $(this).attr('sale_price');
        $(".price_cross").html(new_price2);
    })
})