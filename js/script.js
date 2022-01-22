//age in days
function ageindays(){
    var birthyear=prompt("What year were you born?");
    var age=(2022-birthyear)*365;
    var h1=document.createElement('h1');
    var text=document.createTextNode('You are'+age+' days old.');
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
    image.src="/images/cool-cat.gif";
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
