var career1 = [
				{
					value: 14,
					color:"#F7464A",
					highlight: "#FF5A5E",
					label: "No"
				},
				{
					value: 14,
					color: "#46BFBD",
					highlight: "#5AD3D1",
					label: "Yes"
				},
				{
					value: 72,
					color: "#FDB45C",
					highlight: "#FFC870",
					label: "Unsure"
				}

];

var career2 = [
		{
			value: 89,
			color: "#46BFBD",
			highlight: "#5AD3D1",
			label: "Yes"
		},
		{
			value: 11,
			color:"#F7464A",
			highlight: "#FF5A5E",
			label: "No"
		}
];

var animated = false;


window.onscroll = function(){
	var ctx = document.getElementById("chart-area1").getContext("2d");
	var ctx2 = document.getElementById("chart-area2").getContext("2d");
	
	var blah = document.getElementById("chart-area1");
	var test = isScrolledIntoView(blah);
	if (test == true && animated == false) {
		window.myDoughnut1 = new Chart(ctx).Doughnut(career1, {responsive : true});
		window.myDoughnut1 = new Chart(ctx2).Doughnut(career2, {responsive : true});
		animated = true;
	}

		
};

function isScrolledIntoView(el) {
    var elemTop = el.getBoundingClientRect().top;
    var elemBottom = el.getBoundingClientRect().bottom;

    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    return isVisible;
}