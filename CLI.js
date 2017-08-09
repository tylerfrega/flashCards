var inquirer = require("inquirer");
var fs = require("fs");
var cards = require('./cards.json');
var BasicCard = require('./BasicCard');
var questionNumber = 0;
// var contents = fs.readFile("cards.json");



 inquirer.prompt([
            {
              name: "welcome",
              type: "rawlist",
              message: "What kind of cards would you like to use",
              choices: ["Basic", "Cloze"]

            }
 ]).then(function(choice){
     if(choice.welcome === "Basic"){
        choseBasic();
     }else{
         choseCloze();
     }
 })



 
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
            choseBasic();
        }
    })
    }
 }