// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;
 
// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let c = document.querySelector('button#hantei');
c.addEventListener('click',hantei);
 
// ボタンを押した後の処理をする関数 hantei() の定義
function hantei(){

    // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
    let i = document.querySelector('input[name="shimei"]');
    let yoso = i.value;
    let A;

    let a1 = document.querySelector('span#kaisu');
    a1.textContent = kaisu;
    let a2 = document.querySelector('span#answer');
    a2.textContent = yoso;
    let b = document.querySelector('p#result');
    b.textContent = A;
    
    // 課題3-1: 正解判定する
    kaisu += 1;
    console.log(kaisu + '回目の予想:' + yoso);
    A = (kaisu + '回目の予想:' + yoso);
 
    if (kaisu >= 4 ){
        console.log("答えは "+kotae+" でした.すでにゲームは終わっています");
        A = ("答えは "+kotae+" でした.すでにゲームは終わっています");
    }else if (kotae == Number(yoso)){
        console.log("正解です. おめでとう！");
        A = ("正解です. おめでとう！");
    }else if (kotae == 3){
        console.log("まちがい.残念でした. 答えは "+kotae+" です.");
        A = ("まちがい.残念でした. 答えは "+kotae+" です.");
    }else {
        if (yoso < kotae){
            console.log("まちがい. 答えはもっと大きいですよ");
            A = ("まちがい. 答えはもっと大きいですよ");
        }else{
            console.log("まちがい. 答えはもっと小さいですよ");
            A = ("まちがい. 答えはもっと小さいですよ");
        }
    }
}