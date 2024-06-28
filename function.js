var numberHolder = 0;

function style_change() {

    if (numberHolder == 0) {

        document.getElementById("page_style").setAttribute("href", "style2.css");
        numberHolder = 1;
    }
    else {

        document.getElementById("page_style").setAttribute("href", "style.css");
        numberHolder = 0;
    }
}