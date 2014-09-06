console.log("Pepper's Epic Tale");

var storyBody = document.getElementById("story-body");
storyBody.innerHTML= "Pepper's Incredible Adventure: Part One";

var readerChoice = document.getElementById("reader-choice");
readerChoice.innerHTML= "Don't kick the Pepper!";



var list = ["one", "two", "three"];
list[0]; // "one"
list[2]; // "three"





// var storyText1 = "Once upon a time there was a fat little Pepper puppy.";

// var choiceText1 = "Pet the little Pepper.";

// var choiceText2 = "Kick the fat Pepper.";

// storyBody.innerHTML = storyText1;

// var choiceHTML = "<div class='choice'>" + choiceText1 + "</div>";

// choiceHTML += "<div class='choice'>" + choiceText2 + "</div>";

// readerChoice.innerHTML = choiceHTML;



// var choices = document.getElementsByClassName("choice");

// for (var i = 0; i < choices.length; i++) {
// 	choices[i].addEventListener("click", onChoiceClick);
// }


// function onChoiceClick(event){
// 	console.log("You have selected " + event.target.innerHTML);

// }












var storyData = {
		storyText : "Once upon a time there was a fat little Pepper puppy.", 
		choices : [
			{
				choiceText: "Pet the little Pepper",
				storyText: "The Pepper wiggles",
				choices: [
					{
						choiceText: "Keep petting the Pepper",
						storyText: "The Pepper paws at you.",
						choices:[
							{
								choiceText: "Pick the Pepper up.",
								storyText: "The Pepper's face smells.",
								choices: []
							},
							{
								choiceText: "Tell the Pepper to follow you.",
							 	storyText: "The Pepper sneezes at you.",
							 	choices: []
							}
						]
					},
					{
						choiceText: "Steal the Pepper",
						storyText: "The Pepper gets nervous.",
						choices: []
					}
				]
			},
			{
				choiceText: "Kick the fat Pepper",
				storyText: "The Pepper screams and runs away. You're a terrible person!!! <img class='pepperpepper' src='http://image.yaymicro.com/rz_1210x1210/1/ca7/angry-chihuahua-1ca7df2.jpg'>",
				choices: [
					{
						choiceText: "Run after the Pepper to console her.",
						storyText: "She graciously forgives you.",
						choices: []
					},
					{
						choiceText: "Laugh and point.",
						storyText: "You remain a terrible person.",
						choices: []
					}

				]
			},
			{
				choiceText: "Ignore the Pepper",
				storyText: "The Pepper rolls over and makes cute noises.",
				choices: [
					{
						choiceText: "Pet the Pepper",
						storyText: "The Pepper makes happy wiggles",
						choices: []
					},
					{
						choiceText: "Leash the Pepper",
						storyText: "Pepper pulls on the leash",
						choices: []
					}
				]
			}
		]
	};

function continueTheStory(){
	storyBody.innerHTML = storyData.storyText;

	if(storyData.choices.length==0) { 
		storyBody.innerHTML+= "<br />Congratulations!";
		readerChoice.innerHTML= "";
		return;
	}
	
	var choiceHTML = '';

	for (var i = 0; i < storyData.choices.length; i++) {
		choiceHTML += '<div class="choice">' + storyData.choices[i].choiceText + '</div>';
	};

	readerChoice.innerHTML= choiceHTML;

	var choices = document.getElementsByClassName("choice");

	for (var i = 0; i < choices.length; i++) {
		choices[i].addEventListener("click", onChoiceClick);
	}
}

continueTheStory();

function onChoiceClick(event){
	for (var i = 0; i < storyData.choices.length; i++) {
		if (storyData.choices[i].choiceText == event.target.innerHTML){
			storyData = storyData.choices[i]; 
			break;
		}
	};

	continueTheStory();
}













