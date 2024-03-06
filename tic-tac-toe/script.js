let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const disableBtns=()=>{
    for(let btn of boxes)
    {
        btn.disabled=true;
    }
};
const enableBtns=()=>{
    for(let btn of boxes)
    {
        btn.disabled=false;
        btn.innerText="";
    }
};

const resetGame=()=>{
    turnO=true;
    enableBtns();
    msgContainer.classList.add("hide");
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Clicked!!");
        if(turnO==true){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const showWinner=(pos2Val)=>{
    msg.innerText=`Congratulations!\n\nWinner is ${pos2Val} `;
    msgContainer.classList.remove("hide");
    disableBtns();
}

const checkWinner=()=>{
    for(let pattern of winPatterns){
         let pos1Val=boxes[pattern[0]].innerText;
         
         let pos2Val=boxes[pattern[1]].innerText;
         
         let pos3Val=boxes[pattern[2]].innerText;
         
         if(pos1Val!="" && pos2Val!="" && pos3Val!="")
         {
             if(pos1Val===pos2Val && pos2Val===pos3Val)
             {
               console.log(`Winner! ${pos2Val}`); 
               showWinner(pos2Val); 
             }
         }
         
    }
 };

 newBtn.addEventListener("click",resetGame);
 reset.addEventListener("click",resetGame);