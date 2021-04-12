

  document.addEventListener('scroll', () => {
     console.log(isColliding(document.querySelector('.skills__section'),document.querySelector('.social-media')))
  })


  let isColliding = function (div1, div2) {

    let d1Offset = div1.offsetTop;
    let d1Height = div1.clientHeight;
    let d1Width = div1.clientWidth;
    let d1Top = d1Offset + d1Height;
    let d1Left = div1.offsetLeft+ d1Width;

    let d2Offset = div2.offsetTop;
    let d2Height = div2.clientHeight;
    let d2Width = div2.clientWidth;
    let d2Top = d2Offset + d2Height;
    let d2Left = d2Offset.offsetLeft + d2Width;

    return !(d1Top < d2Offset || d1Offset > d2Top || d1Left < d2Offset || d1Offset > d2Left);
};