console.log("No Pets, No Shoes, No Food FTW");

var storyBody = document.getElementById("story-body");
storyBody.innerHTML= "NeoHack14 Adventure";

var readerChoice = document.getElementById("reader-choice");
readerChoice.innerHTML= "Let's get hacking!";


var storyData = {
		storyText : "To hack or not to hack?", 
		choices : [
			{
				choiceText: "Stay home and Netflix House of Cards.",
				storyText: "Kevin Spacey rules.  The End.",
				choices: []
				
			},
			{
				choiceText: "Sign up for NeoHack14!",
				storyText: "It's hack day. Choose your talent!",
				choices: [
					{
						choiceText: "Freak out, and go home.",
						storyText: "You missed some serious awesomesauce.",
						choices: []
					},
					{
						choiceText: "Belive in yourself and select a pretty sticker.",
						storyText: "Listen to other people's pitches.",
						choices: [
							{
								choiceText: "Choose a team.",
								storyText:  
								choices:[]
							}
							{
								choiceText: "Be a team.",
								storyText: "Now to pick a project.",
								choices: [
									{
										choiceText: "Change the world in 6 hours or less.",
										storyText:
										choices: []
									}
									{
										choiceText: "Keep it simple, stupid.",
										storyText: "Decide which one.",
										choices: [
											{
												choiceText: "Create your own NeoHack Adventure."
												storyText: "Congratulations!  Macys.com awarded you a prize!  Everyone go to Macys.com"
												choices: []

											}
											{
												choicesText: "Create a Random Cat Generator."
												storyText: "Meow."
												choices: []
											}

										]
									}

								]
							}


						]
					}

				]
			},
			{
				

function continueTheStory(){
	storyBody.innerHTML = storyData.storyText;

	if(storyData.choices.length==0) { 
		storyBody.innerHTML+= "<br />The End!";
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













