var birthdayInit = function(defaultAge) {
	var model = {
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

var controller = {
	currentAge: defaultAge,
	getAgeResults: function(age) {
		displayResult = model.ageResult[age];
		if (model.ageResult[age] instanceof Array == false) {
			printResult = displayResult;
		} else { 
			printResult = "prev. " + displayResult[0] + " next";
		};
	},	
};

var viewSlider = {
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

var viewAge = {
	render: function() {
		$("#age").text(controller.currentAge);
	}
}

var viewResult = {
	render: function() {
		controller.getAgeResults(controller.currentAge);
		$("#result").text(printResult);
	},
}

viewSlider.render();
}