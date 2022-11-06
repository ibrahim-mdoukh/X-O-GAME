let turn ="x";
let title = document.querySelector(".title");
let squ = [] ;
let a =1;
function end (num1,num2,num3){
    if(a==1){
        title.innerHTML = `${squ[num1]} winer`;
        document.getElementById(`box`+num1).style.backgroundColor = "rgb(42, 183, 185)";
        document.getElementById(`box`+num2).style.backgroundColor = "rgb(42, 183, 185)";
        document.getElementById(`box`+num3).style.backgroundColor = "rgb(42, 183, 185)";
        setInterval(function(){title.innerHTML +=`.`},1000)
        setTimeout(function(){location.reload()},3000)
        a=2;
    }
}
function win (){
    for(let i = 1; i<10 ; i++){
        squ[i] =document.getElementById(`box${i}`).innerHTML;
    }
    if(squ[1] == squ[2] && squ[2] ==squ [3] && squ[3] !=""){
        end (1,2,3)
    }
    if(squ[4] == squ[5] && squ[5] ==squ [6] && squ[6] !=""){
        end (4,5,6)
    }
    if(squ[7] == squ[8] && squ[8] ==squ [9] && squ[9] !=""){
        end (7,8,9)
    }
    if(squ[1] == squ[4] && squ[4] ==squ [7] && squ[7] !=""){
        end (1,4,7)
    }
    if(squ[2] == squ[5] && squ[5] ==squ [8] && squ[8] !=""){
        end (2,5,8)
    }
    if(squ[3] == squ[6] && squ[6] ==squ [9] && squ[9] !=""){
        end (3,6,9)
    }
    if(squ[1] == squ[5] && squ[5] ==squ [9] && squ[9] !=""){
        end (1,5,9)
    }
    if(squ[3] == squ[5] && squ[5] ==squ [7] && squ[7] !=""){
        end(3,5,7)
    }
}


let btn = document.querySelector("button");
btn.onclick = function (){
    setTimeout(function(){location.reload()},100)
}


function game(id){
    let element = document.getElementById(id);
    if( turn == "x" && element.innerHTML==""){
        element.innerHTML="X";
        turn = "o";
        title.innerHTML="O";
        play();
    }
    else if( turn == "o"){
        element.innerHTML="O";
        play();
    }
    win();
}



function play() {
    let ran = Math.trunc(1+Math.random()*9);
    if( document.getElementById(`box`+ran).innerHTML==""){
        document.getElementById(`box`+ran).innerHTML="O";
        turn = "x";
        title.innerHTML="X";
    }else{
        for(let i = 1; i<10 ; i++){
            squ[i] =document.getElementById(`box${i}`).innerHTML;
        }
        if(squ[1]==""||squ[2]==""||squ[3]==""||squ[4]==""||squ[5]==""||squ[6]==""||squ[7]==""||squ[8]==""||squ[9]==""){
            play();
        }
        
    }
}
