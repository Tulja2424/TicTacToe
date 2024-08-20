let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset-btn");
let newgamebtn=document.querySelector("#new-btn");
let msg=document.querySelector("#msg");
let msgContainer=document.querySelector(".msg-container");
let turno=true;//playerX playerO
const winpatterns=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
];
let count=0;
const resetGame =()=>{
    turno=true;
    count=0;
    enablebtn();
    msgContainer.classList.add("hide");
 };
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       if(turno){
           box.innerText="O";
           turno=false;
           box.style.color="#FFF5E1";
       }
       else{
         box.innerText="X";
         turno=true;
         box.style.color="#0C1844";
       }
       box.disabled=true;
       count++;
       let isWinner = checkwinner();
       if(count===9 && !isWinner){
           gamedraw();
       }
    });
});
const gamedraw=()=>{
    msg.innerText="Game was a Draw";
    msgContainer.classList.remove("hide");
    disablebtn();
};
const disablebtn=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enablebtn=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const checkwinner=()=>{
    for(let pattern of winpatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1==pos2 && pos2==pos3 && pos3==pos1){
                 console.log("winner",pos1);
                 showwinner(pos1);
                 return true;
            }
            
        }
       
   }
};
const showwinner=(winner)=>{
    msg.innerText=`Congratulations ,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disablebtn();
};
newgamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);