let boxes= document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let newGameBtn = document.querySelector("#newBtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; 
let count=0;
const winPattern =[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]
];



const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
    

};

const drawMethod=()=>{
    if(count%9==0){
        msg.innerHTML="Draw!!, Both Played Well";
        msgContainer.classList.remove("hide");
    }
};
boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        
        if(turnO){
            box.innerText='O';
            box.style.color="black";
            turnO=false;
            count++
        drawMethod();
            
       

           
        }
        else{
            box.innerText='X';
            box.style.color="brown";
            turnO=true;
            count++
        drawMethod();
        
        }
        
        box.disabled=true;
        checkWinner();
    });
});

const showWinner=(winner)=>{
    msg.innerHTML = `Congratulations!! the winner is, ${winner} `;
    msgContainer.classList.remove("hide");
}

const checkWinner=()=>{
    for(let pattern of winPattern){
       let post1Val = boxes[pattern[0]].innerText;
       let post2Val = boxes[pattern[1]].innerText;
       let post3Val = boxes[pattern[2]].innerText;
    

    if(post1Val != "" && post2Val != "" && post3Val != ""){
        if(post1Val===post2Val && post2Val===post3Val){
            showWinner(post1Val);
            disableBoxes();
            
            }
         }
        
    }
};

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click",resetGame);

