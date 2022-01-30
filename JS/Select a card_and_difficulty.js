function next(){
if (localStorage.getItem('Difficulty_local')=='2x8'){
    document.location.href = 'start_game.HTML';
    document.getElementById('2x8').classList.add('dificult-active');
}
else if(localStorage.getItem('Difficulty_local')=='3x6'){
    window.location.href = "3x6.html";
    document.getElementById('3x6').classList.add('dificult-active');
}
else if(localStorage.getItem('Difficulty_local')=='3x8'){
    window.location.href = "3x8.html";
    document.getElementById('3x8').classList.add('dificult-active');
}
else if(localStorage.getItem('Difficulty_local')=='3x10'){
    window.location.href = "3x10.html";
    document.getElementById('3x10').classList.add('dificult-active');
}
}

function setDeficult(id){
    localStorage.setItem('Difficulty_local', id);
    activeButtons = document.getElementsByClassName('dificult-active');
    for (let i = 0; i<activeButtons.length; i++){
        activeButtons[i].classList.remove('dificult-active');
    }
    document.getElementById(id).classList.add('dificult-active');
}

function setShirt(num){
    localStorage.setItem('Shirt_local', num);
    activeButtons = document.getElementsByClassName('active_shirt');
    for (let i = 0; i<activeButtons.length; i++){
        activeButtons[i].classList.remove('active_shirt');
    }
    document.getElementById('Card_shirt_' + num).classList.add('active_shirt');
}


window.onload = function() {
    shirt = localStorage.getItem('Shirt_local');
    dificulty = localStorage.getItem('Difficulty_local');
    if (shirt != null){
        setShirt(shirt);
    }
    if (dificulty != null){
        setDeficult(dificulty);
    }
};