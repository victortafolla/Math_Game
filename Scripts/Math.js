
var nImages= [
    {
        nDisplay: '../Images/Numb_1.jpg',
        nDots: '../Images/Numb_1_D.jpg',
        nNumber: 1
    },
    {
        nDisplay: '../Images/Numb_2.jpg',
        nDots: '../Images/Numb_2_D.jpg',
        nNumber: 2
    },
    {
        nDisplay: '../Images/Numb_3.jpg',
        nDots: '../Images/Numb_3_D.jpg',
        nNumber: 3
    },
    {
        nDisplay: '../Images/Numb_4.jpg',
        nDots: '../Images/Numb_4_D.jpg',
        nNumber: 4
    },
    {
        nDisplay: '../Images/Numb_5.jpg',
        nDots: '../Images/Numb_5_D.jpg',
        nNumber: 5
    },
    {
        nDisplay: '../Images/Numb_6.jpg',
        nDots: '../Images/Numb_6_D.jpg',
        nNumber: 6
    },
    {
        nDisplay: '../Images/Numb_7.jpg',
        nDots: '../Images/Numb_7_D.jpg',
        nNumber: 7
    },
    {
        nDisplay: '../Images/Numb_8.jpg',
        nDots: '../Images/Numb_8_D.jpg',
        nNumber: 8
    },
    {
        nDisplay: '../Images/Numb_9.jpg',
        nDots: '../Images/Numb_9_D.jpg',
        nNumber: 9
    },
]

//global variables
var carryN1;
var carryN2;
//randomize numbers function
function changenumb(){
    //    document.getElementById('greatjob').style.visibility='hidden';
    //DOM to variable
    var image1 = document.getElementById('numb1');
    var image2 = document.getElementById('numb2');
    //randomize numbers
    var randNumbImg1 = nImages[Math.floor(Math.random()*nImages.length)];
    var randNumbImg2 = nImages[Math.floor(Math.random()*nImages.length)];
    //replace DOM image with randomized array
    image1.src = randNumbImg1.nDisplay
    image2.src = randNumbImg2.nDisplay
    document.getElementById('txt_answer').select();

    //return randomized array to global variables
    return ( carryN1 = randNumbImg1,
            carryN2 = randNumbImg2);
}
//show dots function
function shownumb(){
    //DOM to variables
    var image1 = document.getElementById('numb1');
    var image2 = document.getElementById('numb2');
    //bringing in global variables from changenumb() function for use
    image1.src = carryN1.nDots
    image2.src = carryN2.nDots
    //console.log(carry2.nDisplay);//testing purposes
    //console.log(carry2.nDots);//testing purposes
    var x = window.getComputedStyle(document.documentElement).getPropertyValue('--g');
    if (x<9){//<---checks if it is less than 6 rows in css grid
        var x = window.getComputedStyle(document.documentElement).getPropertyValue('--g');
        var x = ++x;//moves image "down" when show dots is button is pressed
        document.documentElement.style.setProperty('--g',x);
    }else if(x=9){//<---if on grid row 6, than leave at 6.

    } 
    document.getElementById('iceCreamImage').classList.remove('correct');//removes .correct from css if it was added
    document.getElementById('iceCreamImage').classList.remove('wrong');//removes .wrong from css
    void document.getElementById('iceCreamImage').offsetWidth;//fixes the css animation issue.  Lets the css animation play more than once. this is key!
    document.getElementById('iceCreamImage').classList.add('wrong');//adds .wrong from css
}
function checknumb(){ 
    var userAnswer = parseInt(document.getElementById('txt_answer').value);
    var mathAnswer = (carryN1.nNumber+carryN2.nNumber); 
    if (userAnswer===mathAnswer) {//---------------------------------------------------------If answer is correct do the following:
        //prompt('yes');//testing
        changenumb();//randomizes numbers
        document.getElementById('iceCreamImage').classList.remove('correct');//removes .correct from css
        void document.getElementById('iceCreamImage').offsetWidth;//fixes the css animation issue.  Lets the css animation play more than once. this is key!
        document.getElementById('iceCreamImage').classList.add('correct');//adds .correct from css
        document.getElementById('txt_answer').value="";//sets text box to blank
        document.getElementById('txt_answer').select();//focuses on text box 
        var x = window.getComputedStyle(document.documentElement).getPropertyValue('--g');//Getting variable from CSS
        if(x<=9){     
            var x = --x;//moving image up for not using the dots to solve the problem
            document.documentElement.style.setProperty('--g',x);//sets the new value in CSS for the ice cream image
        }
    }else //--------------------------------------------------------------------------------If answer is wrong do the following:
    {
        var x = window.getComputedStyle(document.documentElement).getPropertyValue('--g');
        if (x<9){//<---checks if it is less than 6 rows in css grid
            var x = window.getComputedStyle(document.documentElement).getPropertyValue('--g');
            var x = ++x;//moves image "down" when wrong answer
            document.documentElement.style.setProperty('--g',x);
        }else if(x=6){//<---if on grid row 6, than leave at 6.
        }    
        document.getElementById('txt_answer').value="";
        document.getElementById('txt_answer').select();
        document.getElementById('iceCreamImage').classList.remove('correct');//removes .correct from css if it was added
        document.getElementById('iceCreamImage').classList.remove('wrong');//removes .wrong from css
        void document.getElementById('iceCreamImage').offsetWidth;//fixes the css animation issue.  Lets the css animation play more than once. this is key!
        document.getElementById('iceCreamImage').classList.add('wrong');//adds .wrong from css
        //console.log(userAnswer);//Testing
    }
}
