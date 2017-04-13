$(document).ready(function () {
	$("#input").keyup(function () {
		$("#result").text(search($("#input").val().toLowerCase())[0]);
	})
	$("#search-button").click(function () {
		$("#result").text(search($("#input").val().toLowerCase())[0]);
	})

	function search(input) {
		var result = 0;
		var resultsArray = [];
		var strippedTextArray = $("#actual-paragraph").text().replace(/[^a-z0-9\s]/gi, '').toLowerCase().split(" ");
		for (var i = 0; i < strippedTextArray.length; i++) {
			if (strippedTextArray[i] === input) {
				resultsArray.push(strippedTextArray[i]);
				result += 1;
			}
		}
		return [result, resultsArray];
	}
});