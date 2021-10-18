document.addEventListener('keydown', startGame);
let pacman = document.getElementById('player');
pacman.style.visibility = 'hidden';
let ghost1 = document.getElementById('ghost1');
ghost1.style.visibility = 'hidden';
let ghost2 = document.getElementById('ghost2');
ghost2.style.visibility = 'hidden';
let ghost3 = document.getElementById('ghost3');
ghost3.style.visibility = 'hidden';
let ghost4 = document.getElementById('ghost4');
ghost4.style.visibility = 'hidden';
let hearts = document.getElementsByClassName('hearts');
let gameOverImg = document.getElementById('gameOver');
gameOverImg.style.visibility = 'hidden';
let newGameImg = document.getElementById('newGame');
newGameImg.style.visibility = 'visible';
let liveScore = document.getElementById('liveScore');
let score = 0;
liveScore.innerText = score.toString();
let highScore =[
    {
        name: 'new',
        score: 0
    }
];
let highScoresNames = document.getElementById('highScoresNames');
let highScoresScores = document.getElementById('highScoresScores');
let speedPacman;
let speedGhosts;
let interval;
let lives;

/*START NEW GAME WITH N KEY*/
function startGame (e) {
    if (e.key === 'n' || e.key === 'N'){
        newGameImg.style.visibility = 'hidden';
        gameOverImg.style.visibility = 'hidden';
        lives = 3;
        score = 0;
        for (i=0; i<hearts.length;i++){
            hearts[i].src = '../IMG/heart.png';
        }
        setBoard();
        startTimer();
        document.addEventListener('keydown', movePacman);
        document.removeEventListener('keydown', startGame);
    }
}

/*SET BOARDTO START POSITIONS*/
function setBoard (){
    speedPacman = 5;
    speedGhosts = 5;
    pacman.style.marginLeft = '0px';
    pacman.style.marginTop = '0px';
    pacman.style.visibility = 'visible';
    ghost1.style.marginLeft = '750px';
    ghost1.style.marginTop = '0px';
    ghost2.style.marginLeft = '750px';
    ghost2.style.marginTop = '750px';
    ghost3.style.marginLeft = '0px';
    ghost3.style.marginTop = '750px';
    ghost4.style.marginLeft = '380px';
    ghost4.style.marginTop = '380px';
    interval = setInterval(function(){
        let score =parseInt(liveScore.innerText);
        if (score%100 === 0){
            speedGhosts++;
        }
        x1 = ghost1.offsetLeft;
        y1 = ghost1.offsetTop;
        moveGhost1(x1,y1);
        x2 = ghost2.offsetLeft;
        y2 = ghost2.offsetTop;
        moveGhost2(x2,y2);
        x3 = ghost3.offsetLeft;
        y3 = ghost3.offsetTop;
        moveGhost3(x3,y3);
        x4 = ghost4.offsetLeft;
        y4 = ghost4.offsetTop;
        moveGhost4(x4,y4);
    }, 100);
}

/*MOVE GHOST 1 TOWARD PACMAN*/
function moveGhost1(ghostx, ghosty){
    ghost1.style.visibility = 'visible';
    let pacmanx = pacman.offsetLeft;
    let pacmany = pacman.offsetTop;
    if (ghostx !== pacmanx || ghosty !== pacmany){
        score++;
        liveScore.innerText=score.toString();
        if (ghostx < pacmanx && ghosty < pacmany){
            ghostx+=speedGhosts;
            ghosty+=speedGhosts;
        } else if (ghostx > pacmanx && ghosty > pacmany){
            ghostx-=speedGhosts;
            ghosty-=speedGhosts;
        } else if (ghostx < pacmanx && ghosty > pacmany) {
            ghostx+=speedGhosts;
            ghosty-=speedGhosts;
        } else if (ghostx > pacmanx && ghosty < pacmany) {
            ghostx-=speedGhosts;
            ghosty+=speedGhosts;
        } else if (ghostx < pacmanx && ghosty === pacmany) {
            ghostx+=speedGhosts;
        } else if (ghostx > pacmanx && ghosty === pacmany) {
            ghostx-=speedGhosts;
        }  else if (ghostx === pacmanx && ghosty < pacmany) {
            ghosty+=speedGhosts;
        }  else if (ghostx === pacmanx && ghosty > pacmany) {
            ghosty-=speedGhosts;
        }
        ghost1.style.marginLeft = ghostx + 'px';
        ghost1.style.marginTop = ghosty + 'px';
    } else {
        console.log('collision detected');
        speedGhosts = 0;
        speedPacman = 0;
        clearInterval(interval);
        resetBoard();
    }
}

/*MOVE GHOST 2 TOWARD PACMAN*/
function moveGhost2(ghostx, ghosty){
    ghost2.style.visibility = 'visible';
    let pacmanx = pacman.offsetLeft;
    let pacmany = pacman.offsetTop;
    if (ghostx !== pacmanx || ghosty !== pacmany){
        liveScore.innerText=score.toString();
        if (ghostx < pacmanx && ghosty < pacmany){
            ghostx+=speedGhosts;
            ghosty+=speedGhosts;
        } else if (ghostx > pacmanx && ghosty > pacmany){
            ghostx-=speedGhosts;
            ghosty-=speedGhosts;
        } else if (ghostx < pacmanx && ghosty > pacmany) {
            ghostx+=speedGhosts;
            ghosty-=speedGhosts;
        } else if (ghostx > pacmanx && ghosty < pacmany) {
            ghostx-=speedGhosts;
            ghosty+=speedGhosts;
        } else if (ghostx < pacmanx && ghosty === pacmany) {
            ghostx+=speedGhosts;
        } else if (ghostx > pacmanx && ghosty === pacmany) {
            ghostx-=speedGhosts;
        }  else if (ghostx === pacmanx && ghosty < pacmany) {
            ghosty+=speedGhosts;
        }  else if (ghostx === pacmanx && ghosty > pacmany) {
            ghosty-=speedGhosts;
        }
        ghost2.style.marginLeft = ghostx + 'px';
        ghost2.style.marginTop = ghosty + 'px';
    } else {
        console.log('collision detected');
        speedGhosts = 0;
        speedPacman = 0;
        clearInterval(interval);
        resetBoard();
    }
}

/*MOVE GHOST 3 TOWARD PACMAN*/
function moveGhost3(ghostx, ghosty){
    ghost3.style.visibility = 'visible';
    let pacmanx = pacman.offsetLeft;
    let pacmany = pacman.offsetTop;
    if (ghostx !== pacmanx || ghosty !== pacmany){
        liveScore.innerText=score.toString();
        if (ghostx < pacmanx && ghosty < pacmany){
            ghostx+=speedGhosts;
            ghosty+=speedGhosts;
        } else if (ghostx > pacmanx && ghosty > pacmany){
            ghostx-=speedGhosts;
            ghosty-=speedGhosts;
        } else if (ghostx < pacmanx && ghosty > pacmany) {
            ghostx+=speedGhosts;
            ghosty-=speedGhosts;
        } else if (ghostx > pacmanx && ghosty < pacmany) {
            ghostx-=speedGhosts;
            ghosty+=speedGhosts;
        } else if (ghostx < pacmanx && ghosty === pacmany) {
            ghostx+=speedGhosts;
        } else if (ghostx > pacmanx && ghosty === pacmany) {
            ghostx-=speedGhosts;
        }  else if (ghostx === pacmanx && ghosty < pacmany) {
            ghosty+=speedGhosts;
        }  else if (ghostx === pacmanx && ghosty > pacmany) {
            ghosty-=speedGhosts;
        }
        ghost3.style.marginLeft = ghostx + 'px';
        ghost3.style.marginTop = ghosty + 'px';
    } else {
        console.log('collision detected');
        speedGhosts = 0;
        speedPacman = 0;
        clearInterval(interval);
        resetBoard();
    }
}

/*MOVE GHOST 3 TOWARD PACMAN*/
function moveGhost4(ghostx, ghosty){
    ghost4.style.visibility = 'visible';
    let pacmanx = pacman.offsetLeft;
    let pacmany = pacman.offsetTop;
    if (ghostx !== pacmanx || ghosty !== pacmany){
        liveScore.innerText=score.toString();
        if (ghostx < pacmanx && ghosty < pacmany){
            ghostx+=speedGhosts;
            ghosty+=speedGhosts;
        } else if (ghostx > pacmanx && ghosty > pacmany){
            ghostx-=speedGhosts;
            ghosty-=speedGhosts;
        } else if (ghostx < pacmanx && ghosty > pacmany) {
            ghostx+=speedGhosts;
            ghosty-=speedGhosts;
        } else if (ghostx > pacmanx && ghosty < pacmany) {
            ghostx-=speedGhosts;
            ghosty+=speedGhosts;
        } else if (ghostx < pacmanx && ghosty === pacmany) {
            ghostx+=speedGhosts;
        } else if (ghostx > pacmanx && ghosty === pacmany) {
            ghostx-=speedGhosts;
        }  else if (ghostx === pacmanx && ghosty < pacmany) {
            ghosty+=speedGhosts;
        }  else if (ghostx === pacmanx && ghosty > pacmany) {
            ghosty-=speedGhosts;
        }
        ghost4.style.marginLeft = ghostx + 'px';
        ghost4.style.marginTop = ghosty + 'px';
    } else {
        console.log('collision detected');
        speedGhosts = 0;
        speedPacman = 0;
        clearInterval(interval);
        resetBoard();
    }
}

/*BOARD RESET AFTER LIVE LOST*/
function resetBoard(){
    stopTimer();
    lives--;
    console.log(lives);
    if (lives !== 0){
       setBoard();
       hearts[lives].src = '../IMG/emptyHeart.png';
    } else {
        hearts[lives].src = '../IMG/emptyHeart.png';
        gameOver();
    }
}

/*GAME OVER SCREEN + HIGHSCORE CHECK*/
function gameOver(){
    resetTimer();
    gameOverImg.style.visibility = 'visible';
    newGameImg.style.visibility = 'visible';
    let userInput = prompt("Enter username (only first 3 digits are used)");
    userInput = userInput.toUpperCase();
    let playerName='';
    for (i=0;i<3;i++){
        playerName += userInput.charAt(i);
    }
    let finalScore = parseInt(liveScore.innerText);
    let player = {
        name: playerName,
        score: finalScore
    }
    console.log(player);
    if (player.score >= highScore[0].score || highScore[0].score===0){
        highScore.unshift(player);
    } else {
        for (i = 1; i < highScore.length; i++) {
           if (player.score >= highScore[i].score) {
                highScore[i].name = player.name;
                highScore[i].score = player.score;
           } else {
            highScore.push(player);
           }
        }
    }
    console.log(highScore);
    highScoresNames.innerHTML ='';
    highScoresScores.innerHTML ='';
    for (i=0;i<highScore.length;i++){
        if (highScore[i].score !== 0){
            highScoresNames.innerHTML += '<li>'+highScore[i].name+'</li>';
            highScoresScores.innerHTML += '<li>'+highScore[i].score+'</li>';
        }
    }
    document.removeEventListener('keydown', movePacman);
    document.addEventListener('keydown', startGame);
}

/*MOVE PACMAN USING ARROWKEYS*/

function movePacman(e) {
    let pacmanx = pacman.offsetLeft;
    let pacmany = pacman.offsetTop;

    if (e.key === 'ArrowUp') {
        //UP
        if (pacman.offsetTop !==0){
            pacmany-=speedPacman;
            pacman.style.marginTop = pacmany + 'px';
        }
    } else if (e.key === 'ArrowDown') {
        //DOWN
        if (pacman.offsetTop !== 750) {
            pacmany+=speedPacman;
            pacman.style.marginTop = pacmany + 'px';
        }
    } else if (e.key === 'ArrowLeft') {
        //LEFT
        if (pacman.offsetLeft !== 0){
            pacmanx-=speedPacman;
            pacman.style.marginLeft = pacmanx + 'px';
        }
    } else if (e.key === 'ArrowRight') {
        //RIGHT
        if (pacman.offsetLeft !== 750){
            pacmanx+=speedPacman;
            pacman.style.marginLeft = pacmanx + 'px';
        }
    }
}

/*SHOW TIMER*/

const timer = document.getElementById('stopwatch');
timer.innerHTML = '00:00:00';

var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;

function startTimer() {
    if (stoptime === true) {
        stoptime = false;
        timerCycle();
    }
}
function stopTimer() {
    if (stoptime === false) {
        stoptime = true;
    }
}

function timerCycle() {
    if (stoptime === false) {
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);

        sec = sec + 1;

        if (sec === 60) {
            min = min + 1;
            sec = 0;
        }
        if (min === 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;
        }

        if (sec < 10 || sec === 0) {
            sec = '0' + sec;
        }
        if (min < 10 || min === 0) {
            min = '0' + min;
        }
        if (hr < 10 || hr === 0) {
            hr = '0' + hr;
        }

        timer.innerHTML = hr + ':' + min + ':' + sec;

        setTimeout("timerCycle()", 1000);
    }
}

function resetTimer() {
    timer.innerHTML = '00:00:00';
}