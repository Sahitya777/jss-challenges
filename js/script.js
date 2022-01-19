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
