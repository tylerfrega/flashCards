var inquirer = require("inquirer");
var fs = require("fs");
var cards = require('./cards.json');
var BasicCard = require('./BasicCard');
var ClozeCard = require('./ClozeCard');

var correctAnswers = 0;
var incorrectAnswers = 0;
var questionNumber = 0;




 inquirer.prompt([
            {
              name: "welcome",
              type: "list",
              message: "What kind of cards would you like to use",
              choices: ["Basic", "Cloze"]

            }
 ]).then(function(choice){
     if(choice.welcome === "Basic"){
        choseBasic();
     }else{
         choseCloze();
     }
 });



 
 function choseBasic(){
    
    if(questionNumber < cards.basic.length){

        var newBasicCard = new BasicCard(cards.basic[questionNumber].front, cards.basic[questionNumber].back);
            
        inquirer.prompt([

               {
                name: "question",
                type: "input",
                message: newBasicCard.front
                }

        ]).then(function(answer){
            if(answer.question === newBasicCard.back){
                console.log('correct!');
                questionNumber++;
                correctAnswers++
                choseBasic();
            }else{
                console.log('incorrect!');
                questionNumber++
                incorrectAnswers++
                choseBasic();
            }
        });
    }else{
        console.log(`
-----------------------------------------------------------------------
Thats it, you got ${correctAnswers} right and ${incorrectAnswers} wrong
-----------------------------------------------------------------------
        `)
    }
 }



 
 function choseCloze(){

    if(questionNumber < cards.cloze.length){

    var newClozeCard = new ClozeCard(cards.cloze[questionNumber].fullText, cards.cloze[questionNumber].cloze);
            
        inquirer.prompt([

               {
                name: "question",
                type: "input",
                message: newClozeCard.partial
                }

        ]).then(function(answer){
            if(answer.question === newClozeCard.cloze){
                console.log('correct!');
                questionNumber++;
                correctAnswers++;
                choseCloze();
            }else{
                console.log('incorrect!');
                questionNumber++;
                incorrectAnswers++;
                choseCloze();
            }
        })
    }else{
        console.log(`
-------------------
Thats it, you got ${correctAnswers} right and ${incorrectAnswers} wrong
-------------------
        `);
    }
 }
 