var images =[
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6rajg0Fj5ESRqQrXRJNAev2LFQVvNbIxlwzk7zKvsqbV0GX-M-XG2t69vos4NoLX3eeg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAsuZtT56YoV9U30RMtIOOdKeNrSuiXlImiVfHhDfyEWx2sDLxw2-rlicERSu0v64m9mA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Joj-Ua6VEgXcGXwEE4EyaUldyjjENLcH0iSa-4ZHzlqLaQJV26y-clfZbBb4AgqMeFM&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkyCTyPbSN1XWJ2TChp3YGq-_aOZkSr79QvQ&usqp=CAU'
];

var num = 0;
function next(){
    var slider = document.getElementById('slider');
    num++;
    if (num >= images.length) {
        num = 0;
    }
    slider.src = images[num];

}

function prev(){
    var slider = document.getElementById('slider')
    num--;
    if (num < 0) {
        num = images.length - 1;
    }
    slider.src = images[num];
}


burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.navlist')


burger.addEventListener('click',()=>{
   
    navlist.classList.toggle('v-class');
    navbar.classList.toggle('navHight');
})