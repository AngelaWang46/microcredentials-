let topIcon = document.querySelector('.toTop');
let pageTopLoc;
window.addEventListener('scroll', function(){
  pageTopLoc = window.pageYOffset;
  if(pageTopLoc>10){
    topIcon.style.display = 'block';
  }
  else{
    topIcon.style.display = 'none';
  }
});
function passvalues1() {
    // get the value that the user entered
    let p = document.querySelector('#im1').textContent;
    localStorage.setItem("productName", p);

    let pPrice = document.querySelector('#p1').textContent;
    localStorage.setItem("productPrice", pPrice);
}
function passvalues2() {
    // get the value that the user entered
    let p = document.querySelector('#im2').textContent;
    localStorage.setItem("productName", p);

    let pPrice = document.querySelector('#p2').textContent;
    localStorage.setItem("productPrice", pPrice);
}
function passvalues3() {
    // get the value that the user entered
    let p = document.querySelector('#im3').textContent;
    localStorage.setItem("productName", p);

    let pPrice = document.querySelector('#p3').textContent;
    localStorage.setItem("productPrice", pPrice);
}
function myFunction() {
    var element = document.body;
    element.classList.toggle("darkmode");
}
