$(document).ready(function(){
    console.log('loaded');
  
    $("#letter-input").click(function(){
      this.value = '';
    });
    $("#solve-input").click(function(){
      this.value = '';
    });
  
    var categoryName = document.querySelector('#category-name');
    var playButton = document.querySelector('#play-button');
    var inputButton = document.querySelector('#input-button');
    var solveButton = document.querySelector('#solve-button');
    var newGameButton = document.querySelector('#new-game-button');
    var gameTag = document.querySelector("#game-tag");
    var entryForm = document.querySelector("#entry-form");
    var hintSpot = document.querySelector("#hint-location");
    var response = document.getElementById('wrong');
    var showAnswerButton = document.getElementById('show-answer');
    
    //Zuerratende Wörter
    var gameBMW = "bmw";
    var gameAudi = "audi";
    var gameMercedes = "mercedes";
    var gameBugatti = "bugatti";
    var gameMaserati = "maserati";
    var gameFerrari = "ferrari";
    var gameLamborghini = "lamborghini";
    var gameBentley = "bentley";
    var gamePorsche = "porsche";
    var gameJaguar = "jaguar";
    var gameOpel = "opel";
    var gameToyota = "toyota";
    var gameFiat = "fiat";
    var gameLexus = "lexus";
    var gameTesla = "tesla";
    var gameVW = "vw";
  
  
    var gameArr = [gameBMW, gameAudi, gameMercedes, gameBugatti, gameMaserati, gameFerrari, gameLamborghini, gameBentley, gamePorsche, gameJaguar, gameOpel, gameToyota, gameFiat, gameLexus, gameTesla, gameVW];
  
    //Hinweise 1
    var hintArr = ["Hinweis: Deutsche Marke ", "Hinweis: Deutsche Marke", "Hinweis: Deutsche Marke", "Hinweis: Italienische Marke", "Hinweis: Italienische Marke", "Hinweis: Italienische Marke", "Hinnweis: Italienische Marke", "Hinnweis: Britische Marke", "Hinnweis: Deutsche Marke", "Hinnweis: Britische Marke", "Hinnweis: Deutsche Marke", "Hinnweis: Japanische Marke", "Hinweis: Italienische Marke", "Hinnweis: Japanische Marke", "Hinnweis: Amerikanische Marke", "Hinnweis: Deutsche Marke"];
  
    //Hinweise 2
    var hintArrTwo = ["Letzter Hinweis! ...Kommt aus Bayern", "Letzter Hinweis! ...1909 Gegründet", "Letzter Hinweis! ...Hat das erste Auto gebaut", "Letzter Hinweis! ...La voiture noir", "Letzter Hinweis! ...Dreizack", "Letzter Hinweis! ... f1 und rot", "Letzter Hinweis! ...Traktoren", "Letzter Hinweis! ...Gründung 1919", "Letzter Hinweis! ...Stuttgart und 911", "Letzter Hinweis! ...Ist auch ein Tier", "Letzter Hinweis! ...Corsa", "Letzter Hinweis! ...Yarris", "Letzter Hinweis! ....Multipla, das hässlichste Auto der Welt", "Letzter Hinweis! ...L im Logo", "Letzter Hinweis! ...Elektroautos", "Letzter Hinweis! ... Gehört sehr viele Automarken"];
  
s
    var random;
    var arrayIndex;
    var firstHint;
    var wordSplit;
    var children;
    var counter = 0;
    var guessCount = 10;

    entryForm.style.display = "none";
    showAnswerButton.style.visibility = "hidden";
    categoryName.style.display = "none";
  
  
  

    function randomGame(currentGame) {
  
      playButton.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('play button clicked');

        random = Math.random();
        random = random * gameArr.length;
        arrayIndex = Math.floor(random);
        currentGame = gameArr[arrayIndex];
        console.log(currentGame);
        firstHint = hintArr[arrayIndex];
        console.log(firstHint);
        secondHint = hintArrTwo[arrayIndex];
        console.log(secondHint);
        newGame = currentGame.toString();
        console.log(newGame);
        displayHint = firstHint.toString();
        console.log(displayHint);
        wordSplit = currentGame.split('');
        console.log(wordSplit);
  
        for (var i = 0; i < wordSplit.length; i++) {
        
          var placeHolder = document.createElement('span');
          placeHolder.innerHTML = `<img src=stylesheets/css/strich2.png height="10px" width="80px" hspace="10px" class="img-thumbnail">`;
          gameTag.appendChild(placeHolder);
        };
  
        children = gameTag.childNodes;
        hintSpot.textContent = displayHint;
        entryForm.style.display = "block";
        categoryName.style.display = "block";
        playButton.style.display = "none";
  
    })
  
  };
  
  randomGame();
  
  
  newGameButton.addEventListener('click', function() {
    console.log('new game button clicked');
      window.location.reload();
  });
  
  
  solveButton.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('solve button clicked');
  
    var solvePuzzle = document.getElementById('solve-input');
    var userSolution = solvePuzzle.value;
    console.log(userSolution);
  
    if (userSolution == newGame) {

      response.innerText = "Du hast das Wort erraten! Starte das Spiel neu um weiterspiele zu können";
      gameTag.innerText = newGame;
      inputButton.style.display = "none";
      solveButton.style.display = "none";
    } else if (userSolution != newGame) {
      response.innerText = "Falsch, Ha Ha Ha.";
    } else {
    }; 
  
  
    counter += 1;
    if (counter >= guessCount) {
      response.innerText = "Du hast alle deine Leben aufgebraucht. Starte das Spiel neu um weiterspielen zu können";
      showAnswerButton.style.visibility = "visible";
      inputButton.style.display = "none";
      solveButton.style.display = "none";
    };
  
    if (counter >= 3) {
      hintSpot.innerText = secondHint;
    } 
  
  });
  
    inputButton.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('input button clicked');
  
      var userInput = document.getElementById('letter-input');
      var letterGuess = userInput.value;
      console.log(letterGuess);
  
      var msg = "";
  
      if (letterGuess.length !== 1) {
        msg = 'Error: Maximal einen Buchstaben eingeben!';
      }

      else {
        for (var i = 0; i < wordSplit.length; i++) {

          if (wordSplit[i] == letterGuess) {
            console.log(children[i].innerText);
  
            children[i].innerText = letterGuess;
  
            msg = "Gut geraten";
          };
        };
  
      if (msg === "") {
          msg = "Hmmm,  der Buchstabe, " + " ' " + letterGuess + " ' " + "ist in diesem Wort nicht vorhanden. Versuche es erneut :)";
        }
      };
  
      response.innerText = msg;
  
      counter += 1;
      if (counter >= guessCount) {
        response.innerText = "Du hast alle deine Leben aufgebraucht. Starte das Spiel neu um weiterspielen zu können";
        showAnswerButton.style.visibility = "visible";
        inputButton.style.display = "none";
        solveButton.style.display = "none";
      };
  
      if (counter >= 3) {
        hintSpot.innerText = secondHint;
      };
  
    });
  
  
    showAnswerButton.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('answer button clicked');
      gameTag.innerText = newGame;
    });
  
  });