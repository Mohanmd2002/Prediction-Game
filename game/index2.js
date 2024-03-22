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
    function duplicate(){
        count=0
        for(i=0;i<4;i++){
            for(j=0;j==i;j++){
                if(our_number[i]==our_number[j]){
                    count+=1
                }
            }
        }
        console.log("NO")
        return "x"
    }
    if(our_number.length==4){
    div='' 
    for(i=0;i<4;i++){
    if (our_number[i]===a[i]){
        div+="+"
    }
    else if(a.includes(our_number[i])){
        div+='-'
    }
    else if(our_number.includes(our_number[i])){
        console.log("NOT")
        let x=duplicate()
        console.log(x)
        div+=x
    }
    else{
        div+="x"
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
            result[0].innerHTML=("Your score is "+score);
            if(score==10){
                console.log("win")
            }
            else if(score==9){
                console.log("good luck")
            }
            else if(score==8){
                console.log("good")
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