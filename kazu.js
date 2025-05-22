let kotae=Math.floor(Math.random()*10)+1;
let kaisu=0;
 
let z1=document.querySelector('button');
z1.addEventListener('click',hantei);
 
function hantei(){
    let i=document.querySelector('input[name="shimei"]');
    let yoso=i.value;
    let A;
 
    kaisu += 1;
    console.log(kaisu+'回目の予想:'+yoso);
    A=(kaisu+'回目の予想:'+yoso);
 
    if(kaisu>=4){
        console.log("答えは "+kotae+" でした.すでにゲームは終わっています");
        A=("答えは "+kotae+" でした.すでにゲームは終わっています");
    }else if(kotae==Number(yoso)){
        console.log("正解です. おめでとう！");
        A=("正解です. おめでとう！");
    }else if(kotae==3){
        console.log("まちがい.残念でした. 答えは "+kotae+" です.");
        A=("まちがい.残念でした. 答えは "+kotae+" です.");
    }else{
        if(yoso<kotae){
            console.log("まちがい. 答えはもっと大きいですよ");
            A=("まちがい. 答えはもっと大きいですよ");
        }else{
            console.log("まちがい. 答えはもっと小さいですよ");
            A=("まちがい. 答えはもっと小さいですよ");
        }
    }
 
    let x1=document.querySelector('span#kaisu');
    x1.textContent=kaisu;
    let x2=document.querySelector('span#answer');
    x2.textContent=yoso;
 
    let y1=document.querySelector('p#result');
    y1.textContent=A;
}