
    function crapsHelp()
    {
        document.getElementById("howTo").innerHTML = "This is a simplified version of Craps, with no bets to keep the game easy to understand and not involve tracking money. <br> <br> To play: roll the dice and see your result. <br> You win when the numbers match. <br> You lose when the numbers equal 7 or 11. <br>  Anything else is considered neutral, and prompts you to try again. <br><br> Have fun!";
    }
    function hlHelp()
    {
        document.getElementById("howTo").innerHTML = "Higher or Lower is a simple game of numbers. <br><br> To play: you and the dealer are given a number between 1 and 20. <br> You choose the button of your bet to see if your number will be Higher, Lower, or Even with the dealer's number. <br> You win by guessing correctly, and lose if the numbers do not line up with your guess. <br><br> Have fun!";
    }
    function cTossHelp()
    {
        document.getElementById("howTo").innerHTML = "Coin Toss is meant to mimic the feel of flipping a coin and calling which side is heads-up. <br><br> To Play: Guess if the coin will land Heads or Tails up.<br> Win by guessing the correct side. <br> <br> Have fun!";
    }



    //********** EVERYTHING BELOW IS UNTOUCHED *******/

    // craps
    function craps() {
    //variables to set up the dice
    var die1 = Math.ceil( Math.random()*6);
    var die2 = Math.ceil( Math.random()*6);
    var sum = die1+die2;
    
    
    //presenting to the user
    
    //die 1
    document.getElementById("die1Result").innerHTML = "Die 1: "+ die1;
    //die 2
    document.getElementById("die2Result").innerHTML = "Die 2: "+ die2;
    //sum
    document.getElementById("sumResult").innerHTML = "The sum of the dice is: " + sum;
    
    
    //Loss
    if(sum == 7 || sum ==11){
        document.getElementById("conclusion").innerHTML = "CRAPS - You Lose! <br/> Try again?";
    }else if(die1 == die2 && die1%die2 == 0){//Win 
        document.getElementById("conclusion").innerHTML = "DOUBLES - You Win! <br/> Try for more?";
    }else{//Continue
        document.getElementById("conclusion").innerHTML = "Nothing gained, nothing lost. <br/> Try again?";
    }
    
    }
    
    // higher or lower
    {
    function high(){
        var d1 = Math.ceil( Math.random()*20 );
        var p1 = Math.ceil( Math.random()*20 );
    
    
        document.getElementById("dealer").innerHTML = "Dealer: "+ d1 ;
        document.getElementById("player").innerHTML = "Player: "+ p1 ;
    
        if (d1 < p1){
            document.getElementById("concHi").innerHTML = "You Win! <br/> Try for more?";
        }else if (d1 > p1){
            document.getElementById("concHi").innerHTML = "You Lose! <br/> Try again?";
        }else{
            document.getElementById("concHi").innerHTML = "Nothing gained, Nothing lost. <br/> Try again?";
        }
    
    }
    
    function low(){
        var d1 = Math.ceil( Math.random()*20 );
        var p1 = Math.ceil( Math.random()*20 );
    
    
        document.getElementById("dealer").innerHTML = "Dealer: "+ d1 ;
        document.getElementById("player").innerHTML = "Player: "+ p1 ;
    
        if (d1 > p1){
            document.getElementById("concHi").innerHTML = "You Win! <br/> Try for more?";
        }else if (d1 < p1){
            document.getElementById("concHi").innerHTML = "You Lose! <br/> Try again?";
        }else{
            document.getElementById("concHi").innerHTML = "Nothing gained, Nothing lost. <br/> Try again?";
        }
    
    }
    
    function even(){
        var d1 = Math.ceil( Math.random()*20 );
        var p1 = Math.ceil( Math.random()*20 );
    
    
        document.getElementById("dealer").innerHTML = "Dealer: "+ d1 ;
        document.getElementById("player").innerHTML = "Player: "+ p1 ;
    
        if (d1 == p1){
            document.getElementById("concHi").innerHTML = "You Win! <br/> Try for more?";
        }else{
            document.getElementById("concHi").innerHTML = "You Lose! <br/> Try again?";
        }
    
    }
    }
    
    //Coin Toss
    {
    function heads(){
        //to flip the coin
        var coin = Math.ceil(Math.random()*20);
    
        //the results
        if(coin <= 10){
            document.getElementById("coin").innerHTML = "Heads: You Win! <br/> Try for more?";
        }else{
            document.getElementById("coin").innerHTML = "Tails: You Lose! <br/> Try Again?";
        }
    }
    
    function tails(){
        //to flip a coin
        var coin = Math.ceil(Math.random()*20);
    
        //The results
        if(coin >= 10){
            document.getElementById("coin").innerHTML = "Tails: You Win! <br/> Try for more?";
        }else{
            document.getElementById("coin").innerHTML = "Heads: You Lose! <br/> Try Again?";
        }
    }
    }