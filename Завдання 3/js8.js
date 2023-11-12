let images1 = document.querySelectorAll('.i-s1 img');
let current1 = 0;
let timer1;
autoSlider();

function autoSlider(){
    timer1 = setTimeout(slider1,2800);
}

function slider1() {
    for (let i = 0; i < images1.length; i++) {
        images1[i].classList.add('opacity0');
    }
    images1[current1].classList.remove('opacity0');

    if(current1+1 ==images1.length){
        current1 = 0;
        clearTimeout(timer1);
    }
    else{
        current1++;
    }
    autoSlider();
}
