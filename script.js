let boxes=document.querySelectorAll(".box");

let resebtn=document.querySelector("#resetbtn");

let newgamebtn=document.querySelector("#newbtn");

let msgcontainer=document.querySelector(".msgcontainer");

let msg=document.querySelector("#msg");

let turno=true;//player x, player o

let winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const resetgame=()=>{
    turno=true;
    enableboxes();
    msgcontainer.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       if(turno){
        box.innerText="O";
        turno=false;
       }
       else{
        box.innerText="X";
        turno=true;
       } 
       box.disabled=true;
       checkwinner();
});
    });
    const disableboxes=()=>{
        for(let box of boxes){
            box.disabled=true;
        }
    };
    const enableboxes=()=>{
        for(let box of boxes){
            box.disabled=true;
            box.innerText=""
        }
    }
    const showwinner=(winner)=>{
        msg.innerText=`Congratulations,winner is ${winner}`;
        msgcontainer.classList.remove("hide");
        disableboxes();
    };
    const checkwinner=()=>{
        for(pattern of winpatterns){
                let pos1val=boxes[pattern[0]].innerText;
                  let pos2val=boxes[pattern[1]].innerText;
                    let pos3val=boxes[pattern[2]].innerText;
                    if(pos1val!= "" && pos2val!= "" && pos3val!= ""){
                        if(pos1val==pos2val && pos2val==pos3val){
                            console.log("winner",pos1val)
                         showwinner(pos1val);
                        }
                    }
        }
    }
    newgamebtn.addEventListener("click",resetgame);
    resetbtn.addEventListener("click",resetgame);
