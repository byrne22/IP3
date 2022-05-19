


var score=0;
function getScore(){
    
    if (document.getElementById('right1').checked){
        score+=20;
       

    }
    else {
        score+=0;
    }
    if (document.getElementById('right2').checked){
        score+=20;
       

    }
    else {
        score+=0;
    }
    if (document.getElementById('right3').checked){
        score+=20;
       

    }
    else {
        score+=0;
    }
    if (document.getElementById('right4').checked){
        score+=20;
       

    }
    else {
        score+=0;
    }
    if (document.getElementById('right5').checked){
        score+=20;
       

    }
    else {
        score+=0;
    }
    document.write('Your score is '+score +'% ')
        
    if (score>=80){
        document.write(' Excellent, you have passed the test')
    }
    else if (score<50){
        document.write(' Failed')
    }
    else{
        document.write(' Fairly Passed')
    }

    

}