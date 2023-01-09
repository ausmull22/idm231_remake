function result() {
    //let toggleAble = document.querySelector('.togglable');
    //toggleAble.classList.toggle('active');

    let toggleAble = document.querySelectorAll('.js-cereal-name');
    
    for(let x of toggleAble) {
        x.classList.toggle('active');
    }

    let toggleAble_b = document.querySelectorAll('.js-zodiac-sign-name');
    
    for(let x of toggleAble_b) {
        x.classList.toggle('active');
    }

    let toggleAble_cereal_icon = document.querySelectorAll('.js-cereal-icon');
    
    for(let x of toggleAble_cereal_icon) {
        x.classList.toggle('active');
    }

    let toggleAble_zodiac_icon = document.querySelectorAll('.js-zodiac-icon');
    
    for(let x of toggleAble_zodiac_icon) {
        x.classList.toggle('active');
    }


}

function toggle_instructions() {

    let toggleAble_help_screen = document.querySelectorAll('.js-help-screen');
    
    for(let x of toggleAble_help_screen) {
        x.classList.toggle('active');
    }

}

