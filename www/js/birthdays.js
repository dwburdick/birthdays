var model = {

};

var controller = {
	currentAge: 51,
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
			},
			slide: function(event, ui) {
				controller.currentAge = ui.value;
				viewAge.render();
			},
		});
		viewAge.render();
	},
};

var viewAge = {
	render: function() {
		$("#age").text(controller.currentAge);
	}
}

var viewResults = {
	render: function() {

	},
}

viewSlider.render();