//age in days
function ageindays(){
    var birthyear=prompt("What year were you born?");
    var age=(2022-birthyear)*365;
    var h1=document.createElement('h1');
    var text=document.createTextNode('You are '+age+' days old.');
    h1.setAttribute('id','ageindays');
    h1.appendChild(text);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('ageindays').remove();
}
function generatecat(){
    var image=document.createElement('img');
    var div=document.getElementById('flex-cat-gen');
    image.src="./images/cool-cat.gif";
    div.appendChild(image);
}
function rpsgame(yourChoice){
    var humanchoice,botchoice;
    humanchoice=yourChoice.id;
    console.log(humanchoice);
    botchoice=numbertochoice(random());
    console.log(botchoice);
    results=decidewinner(humanchoice,botchoice);
    console.log(results);
    message=finalmessage(results);
    console.log(message);
    rpsfrontend(yourChoice.id,botchoice,message);
}

function random(){
    return Math.floor(Math.random()*3);
}

function numbertochoice(number){
    return ['rock','paper','scissors'][number];
}
function decidewinner(yourChoice,computerchoice){
    var rpsdatabase ={
        'rock':{
            'scissors':1,'rock':0.5,'paper':0
        },
        'paper':{
            'rock':1,'paper':0.5,'scissors':0
        },
        'scissors':{
            'paper':1,'scissors':0.5,'rock':0
        }
    };
    var yourscore=rpsdatabase[yourChoice][computerchoice];
    var computerscore=rpsdatabase[computerchoice][yourChoice];
    return [yourscore,computerscore];
}
function finalmessage(results){
    if(results[0]===0){
        return {'message':'You Lost!','color':'red'};
    }
    else if(results[0]===0.5){
        return {'message':'You Tied!','color':'yellow'};
    }
    else if(results[0]===1){
        return {'message':'You Won!','color':'green'};
    }
}
function rpsfrontend(humanimagechoice,botimagechoice,finalmessage){
    var imagesdatabase={
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src
    };
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humandiv=document.createElement('div');
    var botdiv=document.createElement('div');
    var messagediv=document.createElement('div');

    if(finalmessage['color']==='green'){
        humandiv.innerHTML="<img src='"+ imagesdatabase[humanimagechoice] + "'height =150 width =150 style='box-shadow:0px 10px 50px rgba(37,50,233,1);'>"
        botdiv.innerHTML="<img src='"+ imagesdatabase[botimagechoice] + "'height =150 width =150 style='box-shadow:0px 10px 50px rgba(243,38,24,1);'>"
        messagediv.innerHTML="<h1 style='color: "+finalmessage['color']+";font-size:60px; padding:30px;'>"+finalmessage['message']+"</h1>"
        document.getElementById('flex-box-rps-div').appendChild(humandiv);
        document.getElementById('flex-box-rps-div').appendChild(messagediv);
        document.getElementById('flex-box-rps-div').appendChild(botdiv);
    }
    else if(finalmessage['color']==='red'){
        humandiv.innerHTML="<img src='"+ imagesdatabase[humanimagechoice] + "'height =150 width =150 style='box-shadow:0px 10px 50px rgba(243,38,24,1);'>"
        botdiv.innerHTML="<img src='"+ imagesdatabase[botimagechoice] + "'height =150 width =150 style='box-shadow:0px 10px 50px rgba(37,50,233,1);'>"
        messagediv.innerHTML="<h1 style='color: "+finalmessage['color']+";font-size:60px; padding:30px;'>"+finalmessage['message']+"</h1>"
        document.getElementById('flex-box-rps-div').appendChild(humandiv);
        document.getElementById('flex-box-rps-div').appendChild(messagediv);
        document.getElementById('flex-box-rps-div').appendChild(botdiv);
    }
    else if(finalmessage['color']==='yellow'){
        humandiv.innerHTML="<img src='"+ imagesdatabase[humanimagechoice] + "'height =150 width =150 style='box-shadow:0px 10px 50px rgba(243 226 24);'>"
        botdiv.innerHTML="<img src='"+ imagesdatabase[botimagechoice] + "'height =150 width =150 style='box-shadow:0px 10px 50px rgba(243 226 24);'>"
        messagediv.innerHTML="<h1 style='color: "+finalmessage['color']+";font-size:60px; padding:30px;'>"+finalmessage['message']+"</h1>"
        document.getElementById('flex-box-rps-div').appendChild(humandiv);
        document.getElementById('flex-box-rps-div').appendChild(messagediv);
        document.getElementById('flex-box-rps-div').appendChild(botdiv);
    }
}

//*Challenge-4

var all_btns=document.getElementsByTagName('button');
console.log(all_btns);

var copyallbtns=[];
for(let i=0;i<all_btns.length;i++){
    copyallbtns.push(all_btns[i].classList[1]);
}
console.log(copyallbtns);
function buttoncolor(btnthing){
    if(btnthing.value==='red'){
        buttonred();
    }
    else if(btnthing.value==='green'){
        buttongreen();
    }
    else if(btnthing.value==='reset'){
        buttonreset();
    }
    else if(btnthing.value==='random'){
        randomcolor();
    }
}
function buttonred(){
    for(let  i=0;i<all_btns.length;i++){
        all_btns[i].classList.remove(all_btns[i].classList[1]);
        all_btns[i].classList.add('btn-danger');
    }
}
function buttongreen(){
    for(let  i=0;i<all_btns.length;i++){
        all_btns[i].classList.remove(all_btns[i].classList[1]);
        all_btns[i].classList.add('btn-success');
    } 
}
function buttonreset(){
    for(let i=0;i<all_btns.length;i++){
        all_btns[i].classList.remove(all_btns[i].classList[1]);
        all_btns[i].classList.add(copyallbtns[i]);
    }
}
function randomcolor(){
    var choices=['btn-danger','btn-primary','btn-success','btn-warning'];

    for(let i=0;i<all_btns.length;i++){
        var randomNumber=Math.floor(Math.random()*4);
        all_btns[i].classList.remove(all_btns[i].classList[1]);
        all_btns[i].classList.add(choices[randomNumber]);
    }
}

//*Challenge 5

let blackjackgame={
    'you':{'scorespan':'#your-blackjack-result','div':'#your-box','score':0},
    'dealer':{'scorespan':'#dealer-blackjack-result','div':'#dealer-box','score':0},
    'cards':['2','3','4','5','6','7','8','9','10','K','J','Q','A'],
    'cardsmap':{'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'K':10,'Q':10,'J':10,'A':11},
    'wins':0,
    'losses':0,
    'draws':0,
    'istand':false,
    'turnsover':false,
};

const You = blackjackgame['you']
const Dealer=blackjackgame['dealer']

const hitsound=new Audio('sounds/swish.m4a');
const winsound = new Audio('sounds/cash.mp3');
const lostsound= new Audio('sounds/aww.mp3');
document.querySelector('#blackjack-hit-btn').addEventListener('click',blackjackhit);
document.querySelector('#blackjack-deal-btn').addEventListener('click',blackjackdeal);
document.querySelector('#blackjack-stand-btn').addEventListener('click',blackjackstand);
function blackjackhit(){
    if(blackjackgame['istand']==false){
        let card = randomcard();
        console.log(card);
        showcard(card,You);
        updatescore(card,You);
        console.log(You['score']);
        showscore(You);
    }


}
async function blackjackstand(){
    blackjackgame['istand']=true;

    while(Dealer['score']<17 &&blackjackgame['istand']==true){
        let card=randomcard();
        showcard(card,Dealer);
        updatescore(card,Dealer);
        showscore(Dealer);
        await sleep(1000);
    }

    blackjackgame['turnsover']=true;
    showresult(computewinner());


    
}
function showcard(card,activeplayer){
    if(activeplayer['score']<=21){
        let cardimg=document.createElement('img');
        cardimg.src='images/'+card+'.png';
        document.querySelector(activeplayer['div']).appendChild(cardimg);
        hitsound.play();
    }

}

function blackjackdeal(){

    if(blackjackgame['turnsover']==true){

        blackjackgame['istand']=false;
        let yourimages=document.querySelector('#your-box').querySelectorAll('img');
        let dealerimages=document.querySelector('#dealer-box').querySelectorAll('img');
        for(let i=0;i<yourimages.length;i++){
            yourimages[i].remove();
        }
        for(let i=0;i<dealerimages.length;i++){
            dealerimages[i].remove();
    
        }
        You['score']=0;
        Dealer['score']=0;
        document.querySelector('#your-blackjack-result').textContent=0;
        document.querySelector('#dealer-blackjack-result').textContent=0;
        document.querySelector('#dealer-blackjack-result').style.color='#ffffff';
        document.querySelector('#your-blackjack-result').style.color='#ffffff';
        document.querySelector('#blackjack-results').textContent="Let's Play";
        document.querySelector('#blackjack-results').style.color='black';
        blackjackgame['turnsover']=true;
    }

 
    
}
function randomcard(){
    let randomindex=Math.floor(Math.random()*13);
    return blackjackgame['cards'][randomindex];
}

function updatescore(card,activeplayer){
    activeplayer['score']+=blackjackgame['cardsmap'][card];

}
function showscore(activeplayer){
    if(activeplayer['score']>21){
        document.querySelector(activeplayer['scorespan']).textContent='BUST!';
        document.querySelector(activeplayer['scorespan']).style.color='red';
    }
    else{
        document.querySelector(activeplayer['scorespan']).textContent=activeplayer['score'];
    }

}

function computewinner(){
    let winner;
    console.log(Dealer['score']);
    console.log(Dealer['score']>You['score']);
    if(You['score']<=21){
        if(You['score']>Dealer['score'] || Dealer['score']>21){
            blackjackgame['wins']++;
            winner=You;

        }
        else if(You['score']<Dealer['score']){
            blackjackgame['losses']++;
            winner=Dealer;
        }
        else if(You['score']==Dealer['score']){
            blackjackgame['draws']++;

        }
    }

    else if(You['score']>21 && Dealer['score']>21){
        blackjackgame['draws']++;
    }
    else if(You['score']>21 && Dealer['score']<=21){
        blackjackgame['losses']++;
        winner=Dealer;
    }

    console.log(blackjackgame);
    console.log("Winner is",winner);
    return winner;
}
function showresult(winner){
    if(blackjackgame['turnsover']==true){
        let message ,messagecolor;
        if(winner==You){
            document.querySelector('#wins').textContent=blackjackgame['wins'];
            message="You Won!";
            messagecolor='green';
            winsound.play();
            
        }
        else if(winner==Dealer){
            document.querySelector('#losses').textContent=blackjackgame['losses'];
            message="You Lost!";
            messagecolor='red';
            lostsound.play();
    
        }
        else{
            document.querySelector('#draws').textContent=blackjackgame['draws'];
            message="Draw!";
            messagecolor='black';
        }
        document.querySelector('#blackjack-results').textContent=message;
        document.querySelector('#blackjack-results').style.color=messagecolor;
    
    }
    
}
function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}