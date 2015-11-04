var birthdayInit = function(defaultAge) {
	model = {
		ageResult: {
			1: "One",
			2: "Two",
			3: "Three",
			4: "Four",
			5: "Five",
			6: "Six",
			49: [
				"Forty-nine",
				"Forty and nine",
				"One fewer than fifty"
			],
			50: "Fifty",
			51: "Fifty-one"
		},
	};

	controller = {
		init: function() {
			currentResultIndex = 0;
		},
		currentAge: defaultAge,
		getAgeResults: function(age) {
			displayResult = model.ageResult[age];
			if (model.ageResult[age] instanceof Array == false) {
				printResult = displayResult;
			} else { 
				printResult = "prev. " + displayResult[currentResultIndex] + " <input type='button' value='Next' id='nextResult'>";
				controller.nextResult();
			};
		},
		//the nextResult button loads -- and the code works in devtools -- but it must be scoped in some way that makes it not work
		nextResult: function() {
			$(document).ready(function(){
				alert("triggered");
				$("#nextResult").click(function(){
					currentResultIndex++;
					viewResult.render();
				});
			});
		},
		prevResult: function() {

		},
	};

	viewSlider = {
		render: function() {
			$("#slider").slider({
				max: 103,
				min: 1,
				step: 1,
				value: controller.currentAge,
				change: function(event, ui) {
					currentAge = ui.value;
					viewAge.render();
					viewResult.render();				
				},
				slide: function(event, ui) {
					controller.currentAge = ui.value;
					viewAge.render();
					viewResult.render();
				},
			});
			viewAge.render();
			viewResult.render();
		},
	};

	viewAge = {
		render: function() {
			$("#age").text(controller.currentAge);
		}
	};

	viewResult = {
		render: function() {
			controller.getAgeResults(controller.currentAge);
			$("#result").empty();
			$("#result").append(printResult);
		},
	};

	controller.init();
	viewSlider.render();
}