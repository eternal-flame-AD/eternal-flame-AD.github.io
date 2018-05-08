function initProgressbar_1(item) {
	var target = $(item);
	target.css({
		'display': 'inline',
		'font-family': 'Consolas',
	})
	var Update = function(target) {
		prog = parseFloat(target.attr("progress"));
		total = target.attr("len");
		complete = Math.round(prog * total);
		var result = "[";
		while(complete > 1) {
			result += "=";
			complete--;
		}
		result += ">";
		var i = total - result.length + 1;
		while(i > 0) {
			result += "&nbsp;";
			i--;
		}
		result += "]";
		result += "  " + String((prog * 100).toFixed(2)) + "%";
		target.html(result);
	};
	Update(target);
	if(target.attr("refresh")) {
		setInterval(Update, parseFloat(target.attr("refresh")), target);
	}
}

function initProgressbar_2(item) {
	var target = $(item);
	target.css({
		'display': 'inline',
		'font-family': 'Consolas',
	})
	var pos = 0;
	var Update = function(target) {
		prog = parseFloat(target.attr("progress"));
		total = target.attr("len");
		complete = Math.round(prog * total);
		var result = "[";
		while(complete > 1) {
			result += "#";
			complete--;
		}
		if(pos > 3) {
			pos -= 4;
		}
		switch(pos) {
			case 0:
				result += "/";
				break;
			case 1:
				result += "-";
				break;
			case 2:
				result += '\\';
				break;
			case 3:
				result += "|";
				break;
		}
		pos++;
		var i = total - result.length + 1;
		while(i > 0) {
			result += ".";
			i--;
		}
		result += "]";
		result += "  " + String((prog * 100).toFixed(2)) + "%";
		target.html(result);
	};
	Update(target);
	if(target.attr("refresh")) {
		setInterval(Update, parseFloat(target.attr("refresh")), target);
	} else {
		setInterval(Update, 100, target);
	}
}
window.onload = function() {
	progressbars = $(".classical-progressbar-1");
	progressbars.each((function(_, item) {
		initProgressbar_1(item);
	}));
	progressbars = $(".classical-progressbar-2");
	progressbars.each((function(_, item) {
		initProgressbar_2(item);
	}));
};