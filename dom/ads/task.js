const rotatorCase = Array.from(document.querySelector('.rotator__case_active'));
let index = 0;
setInterval(() => {
    rotatorCase.forEach(element => {
      if (element.classList.contains('rotator__case_active')){
        element.classList.toggle('rotator__case_active')
}})
      if (index >= (rotatorCase.length - 1)) {
        index = 0;
      } else {
        index ++;
      }
     rotatorCase[index].classList.toggle('rotator__case_active') }
, 1000);