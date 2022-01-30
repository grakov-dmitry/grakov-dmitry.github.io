var myCards = document.getElementById('container');
var a;
var resultsArray = [];
var counter = 00;
var seconds = 00;
var tens = 00;
var tries = 00;
var appendTens = document.getElementById("tens");
var appendSeconds = document.getElementById("seconds");
var buttonPause = document.getElementById('button-pause');
var Interval ;
var images = [
  '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15' 
];
var clone = images.slice(0);
var cards = images.concat(clone);
let cardss =  document.getElementsByClassName("test"); 

function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i],   o[i] = o[j], o[j] = x);
    return o;
  }
  shuffle(cards);

  for (var i = 0; i < cards.length; i++) {
    card = document.createElement('div');
    card.dataset.item = cards[i];
    card.dataset.view = "card";
    card.className = 'test';
    card.id = "newID";
    myCards.appendChild(card);
  
    card.onclick = function () {
      if (this.className != 'flipped' && this.className != 'correct'){
          this.className = 'flipped';
          var result = this.dataset.item;
          resultsArray.push(result);
          clearInterval(Interval);
          Interval = setInterval(startTimer, 10);
      }
      if (resultsArray.length > 1) {
        if (resultsArray[0] === resultsArray[1]) {
          check("correct");
          counter ++;
          win();
          resultsArray = [];
        }
         else if (a==1){ 
         
           check('reverse1');  
            resultsArray = [];}
            else if (a==2){ 
         
             check('reverse2');  
              resultsArray = [];}
        
              else if (a==3){ 
         
               check('reverse3');  
                resultsArray = [];}

                else if (a==4){ 
         
                 check('reverse4');  
                  resultsArray = [];}

                  else if (a==5){ 
         
                   check('reverse5');  
                    resultsArray = [];}

                    else if (a==6){ 
         
                     check('reverse6');  
                      resultsArray = [];}

                      else if (a==7){ 
         
                       check('reverse7');  
                        resultsArray = [];}

                        else if (a==8){ 
         
                         check('reverse8');  
                          resultsArray = [];}

                          else if (a==9){ 
         
                           check('reverse9');  
                            resultsArray = [];}
           
       }
      }
     }

     window.onload = function () {
      if (localStorage.getItem('Shirt_local')=='one'){
        for(i = 0; i < cardss.length; i++) {
       cardss[i].classList.add("new1");
       a=1;
        }
      }
      else if(localStorage.getItem('Shirt_local')=='two'){
        for(i = 0; i < cardss.length; i++) {
       cardss[i].classList.add("new2");
       a=2;
        }
      }
      else if(localStorage.getItem('Shirt_local')=='three'){
        for(i = 0; i < cardss.length; i++) {
       cardss[i].classList.add("new3");
       a=3;
        }
      }
      else if(localStorage.getItem('Shirt_local')=='four'){
        for(i = 0; i < cardss.length; i++) {
       cardss[i].classList.add("new4");
       a=4;
        }
      }
      else if(localStorage.getItem('Shirt_local')=='five'){
        for(i = 0; i < cardss.length; i++) {
       cardss[i].classList.add("new5");
       a=5;
        }
      }
      else if(localStorage.getItem('Shirt_local')=='six'){
        for(i = 0; i < cardss.length; i++) {
       cardss[i].classList.add("new6");
       a=6;
        }
      }
      else if(localStorage.getItem('Shirt_local')=='seven'){
        for(i = 0; i < cardss.length; i++) {
       cardss[i].classList.add("new7");
       a=7;
        }
      }else if(localStorage.getItem('Shirt_local')=='eight'){
        for(i = 0; i < cardss.length; i++) {
       cardss[i].classList.add("new8");
       a=8;
        }
      }else if(localStorage.getItem('Shirt_local')=='nine'){
        for(i = 0; i < cardss.length; i++) {
       cardss[i].classList.add("new9");
       a=9;
        }
      }
      span = document.getElementById('triesid');
      span.innerHTML = tries;
      document.body.onclick = function (e) {
          e = e || event;
          var target = e.target || e.srcElement;
          if (target.className != 'flipped') return;
          tries++;
          span.innerHTML = Math.floor(tries / 2);
      }
  }
  var check = function(className) {
      var x = document.getElementsByClassName("flipped");
    
      setTimeout(function() {
    
        for(var i = (x.length - 1); i >= 0; i--) {
          x[i].className = className;
        }
    
      },500);
   }
  
      var win = function () {
          if(counter === 15) {
            clearInterval(Interval);
            text.innerHTML = "Score: " + (10000 - (20* (seconds + Math.floor(tries / 2))));
            score = document.getElementById('text')
            b = (10000 - (20*(seconds + Math.floor(tries / 2))));
            localStorage.setItem('Score', b)
          }
        
        }
   
    buttonPause.onclick = function() {
      clearInterval(Interval);
  }
  function startTimer () {
      tens++;
    
      if(tens < 9){
        appendTens.innerHTML = "0" + tens;
      }
    
      if (tens > 9){
        appendTens.innerHTML = tens;
    
      }
    
      if (tens > 99) {
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
      }
    
      if (seconds > 9){
        appendSeconds.innerHTML = seconds;
      }
    
    } 