alert(`Welcome !
First you must see the terms & conditions.`)
let name= prompt("Enter your name")

function show() {
  var div = document.querySelector(".tcc");
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
}

random_number='';
    for(i=0;i<4;i++){
    let ran_num=Math.floor(Math.random()*9);
    random_number+=ran_num;
}
    console.log(random_number);
    
    let a=random_number;
    // for(j=0;j<a.length;j++){
    // console.log(a[j])}
    let count=0;
function get_number(){ 
    count+=1;
    let our_number=document.getElementById('number').value
    console.log(our_number)
    // for(i=0;i<our_number.length;i++){
    // console.log(our_number[i]);
    // }
    if(our_number.length==4){
        div='' 
    for(i=0;i<4;i++){
        if (our_number[i]===a[i]){
            div+="+ "
        }
        else if(a.includes(our_number[i])){
            div+='- '
        }
        else{
            div+="x "
        }
    }
    let ans=document.getElementById('ans');
    ans.innerHTML=div;
    console.log('count',count);
    if(count<11){
        let score=("Your Score is :",10-(count-1))
        console.log(score);
        if(random_number==our_number){
            let result=document.getElementsByClassName("result");
            result[0].innerHTML=("Your score is "+score+".");
            let content=document.querySelector(".common");
            if(score==10){
                content.innerHTML=`Congrats ${name},you are miracle.`
                content.style.display = "block";
            }
            else if(score==9){
                content.innerHTML=`Congrats ${name},you are magic.`
                content.style.display = "block";
            }
            else if(score<8){
                content.innerHTML=`Congrats ${name},you are good luck.`
                content.style.display = "block";
            }
        }
        else{
            let result=document.getElementsByClassName("result");
            result[0].innerHTML=("");
        }
    }
    else{
        let ans=document.getElementById('ans');
        ans.innerHTML='';
        let result=document.getElementsByClassName("result");
        result[0].innerHTML=("Your chance is over.Better luck next time.");
    }
}
else{
    let ans=document.getElementById('ans');
    ans.innerHTML='';
    let result=document.getElementsByClassName("result");
    result[0].innerHTML=("Please enter minimum four digits number.");
}
}

// function startGame(){
//     const computerNumber = a;
//     console.log(computerNumber)
//     console.log('Guess a 4-digit number without repeating digits.');
//     let numGuesses = 0;
//     while (true) {
//         let our_number=document.getElementById('number').value
//         numGuesses++;
//         // const result = getGuessResult(computerNumber, our_number);
//         if (div === '++++') {
//             console.log(`You won in ${numGuesses} guesses and ${(endTime - startTime) / 1000} seconds.`);
//             break;
//         }
//         else {
//             console.log(`Result: ${div}`);
//         }
//     }
// }
// startGame()