/////FRONTPAGE///////

let openButton = document.querySelector("#open");
let cover = document.querySelector("#frontpage");
let heroBox = document.querySelector("#hero-img");
let header = document.querySelector("#header-frontpage");
let backLogo =document.querySelector("#logo-back");


setTimeout(function(){
    console.log("open jump")
    openButton.classList.add('openJump');
    backLogo.classList.add('logoAppear')
},4500)

openButton.addEventListener('mouseover', function(){
    console.log("Mouse over");
    openButton.classList.remove('openJump');
    openButton.classList.add('openHover');
});

openButton.addEventListener('mouseout', function(){
    console.log("Mouse leave");
    openButton.classList.add('openJump');
    openButton.classList.remove('openHover');
})


openButton.addEventListener('click', function(){
    console.log("open frontpage");
    cover.classList.add('openCover');

    setTimeout(function(){
    heroBox.style.overflow="visible";
    header.classList.add('headerAppear');
    heroBox.classList.add('portfolioboxDown');
    },950)

    });


