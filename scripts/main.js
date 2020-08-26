window.addEventListener("scroll", () => {
  var divArr = document.getElementsByClassName("fadeout");
  for (var i = 0; i < divArr.length; i++){
    if (divArr[i].offsetTop <= window.pageYOffset + window.innerHeight){
        fadeOut(divArr[i]);
        console.log(i);
    }
    else{
        break;
    }
  }
  var divArr = document.getElementsByClassName("fadein");
  for (var i = divArr.length - 1; i >= 0; i--){
    if (divArr[i].offsetTop >= window.pageYOffset - window.innerHeight){
        fadeIn(divArr[i]);
    }
    else{
        break;
    }
  }
});

function fadeOut (curDiv) {
  const checkpoint = curDiv.offsetTop;
  const currentScroll = window.pageYOffset;
  if (currentScroll >= checkpoint + window.innerHeight / 3){
    opacity = Math.max(1 + 1.5 * (checkpoint + window.innerHeight / 3 - currentScroll) / 600, 0.4) ;
  }
  else{
    opacity = 1;
  }
  curDiv.style.opacity = opacity;
}

function fadeIn(curDiv){
  const checkpoint = curDiv.offsetTop;
  const currentScroll = window.pageYOffset;
  if (currentScroll >= checkpoint - window.innerHeight){
    opacity = Math.max(0.2, (currentScroll - checkpoint + window.innerHeight) / 600);
  }
  else{
    opacity = 0.2;
  }
  curDiv.style.opacity = opacity;
}
