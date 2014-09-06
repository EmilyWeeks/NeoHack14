// Variables

	var theNumber = 10 + 10;

	var myName = "Jeremy" + " " + "Weeks";
	var isBookedMessage = "This room is already booked";
	var notBookableMessage = "This room is not bookable";

	var isBooked = false;
	var isBookable = false;


	// alert(isBooked);

	var list = ["zero", "one", "two", "three"];
	// alert(   list[3]  );

	var jeremy = {
		name: "Jeremy Weeks",
		age: 30,
		address: {
			city: "Alameda",
			street: "Union",
			zip: 94501
		}
	};

	// alert(jeremy.age);

// Conditionals

	// if (isBooked) {
	// 	alert(isBookedMessage);
	// } else if (!isBookable) {
	// 	alert(notBookableMessage);
	// } else {
	// 	alert('book the room');
	// }

// Functions




	function multiplyBy(number1, number2) {
		console.log(number1 * number2);
	}



	// sayMessage("the message");
	// sayMessage("the second message");
	// sayMessage("the third message");

	// multiplyBy(2, 20);
	// multiplyBy(12, 120);
	// multiplyBy(200, 900);


// Iterators

	var rooms = [
		{ name: 'Turing', isBooked: true, isBookable: false },
		{ name: 'Einstein', isBooked: false, isBookable: false },
		{ name: 'Curie', isBooked: true, isBookable: true },
		{ name: 'Newton', isBooked: false, isBookable: true },
		{ name: 'da Vinci', isBooked: true, isBookable: true },
		{ name: 'Darwin', isBooked: true, isBookable: true }
	];

	var index = 1;
	
	// while (index != 10) {
	// 	console.log(index);

	// 	index++;
	// }

	function getRandomInt(min, max) {
  		return Math.floor(Math.random() * (max - min)) + min;	
	}

	$(document).ready(function(){

		for (var i = 0; i < rooms.length; i++) {
			$('body').append('<div class="room" data-index="' + i + '">' +rooms[i].name + '</div>')
		};

		$('.room').click(function(){
			console.log( $(this).text() );
			var index = $(this).data('index');
			var room = rooms[index];

			if (room.isBooked) {
				alert(isBookedMessage);
			} else if (!room.isBookable) {
				alert(notBookableMessage);
			} else {
				alert('book the room');
			}
		});


		function makeCat() {
			var w = getRandomInt(50, 300);
			var h = getRandomInt(50, 300);
			var x = getRandomInt(10, 1000);
			var y = getRandomInt(50, 500);

			// var $div = $('<img src="http://thecatapi.com/api/images/get?format=src&type=gif" />');
			var $div = $('<img src="http://placekitten.com/g/'+w+'/'+w+'" />');
			$div.css({
				position: 'absolute',
				width: w,
				height: w,
				top: y,
				left: x
			});
			$('body').append($div);
		}

		setInterval(makeCat, 1000);
		makeCat();
	});








