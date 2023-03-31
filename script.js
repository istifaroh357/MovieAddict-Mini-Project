

function darkLightModee () {
    document.getElementsByClassName("beranda")[0].style.backgroundColor="white";
    document.getElementsByClassName("p-beranda")[0].style.color="#000032";
    document.getElementsByClassName("p-beranda")[0].style.fontWeight="bolder";

    document.getElementsByClassName("subBeranda")[0].style.backgroundImage ="linear-gradient(white, rgb(85, 98, 216))";
    document.getElementsByClassName("p-subBeranda1")[0].style.color="#000032";
    document.getElementsByClassName("p-subBeranda2")[0].style.color="#000032";
    document.getElementsByClassName("p-subBeranda1")[0].style.fontWeight="bolder";
    document.getElementsByClassName("p-subBeranda2")[0].style.fontWeight="bolder";

    document.getElementsByClassName("subBeranda")[1].style.backgroundImage ="linear-gradient(rgb(85, 98, 216), white)";
    document.getElementsByClassName("p-subBeranda1")[1].style.color="#000032";
    document.getElementsByClassName("p-subBeranda2")[1].style.color="#000032";
    document.getElementsByClassName("p-subBeranda1")[1].style.fontWeight="bolder";
    document.getElementsByClassName("p-subBeranda2")[1].style.fontWeight="bolder";
    
}

document.getElementsByClassName('darkLightMode')[0].onclick= darkLightModee;

function darkLightMode2 () {
    document.getElementsByClassName("beranda")[0].style.backgroundColor="#0b0b5e";
    document.getElementsByClassName("p-beranda")[0].style.color="white";

    document.getElementsByClassName("subBeranda")[0].style.backgroundImage ="linear-gradient(#0b0b5e, rgb(85, 98, 216))";
    document.getElementsByClassName("p-subBeranda1")[0].style.color="white";
    document.getElementsByClassName("p-subBeranda2")[0].style.color="white";

    document.getElementsByClassName("subBeranda")[1].style.backgroundImage ="linear-gradient(rgb(85, 98, 216), #0b0b5e)";
    document.getElementsByClassName("p-subBeranda1")[1].style.color="white";
    document.getElementsByClassName("p-subBeranda2")[1].style.color="white";
    
}

document.getElementsByClassName('darkLightMode2')[0].onclick= darkLightMode2;