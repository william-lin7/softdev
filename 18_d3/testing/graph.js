// borrows heavily from [ https://www.d3-graph-gallery.com/graph/line_basic.html ]

let DATA = [
	{independent: 1, dependent: 50},
	{independent: 2, dependent: 170},
	{independent: 3, dependent: 20},
	{independent: 4, dependent: 70},
	{independent: 5, dependent: 75},
	{independent: 6, dependent: 66},
];

// set the dimensions and margins of the graph
var margin = {top: 10, right: 30, bottom: 30, left: 60},
	width = 460 - margin.left - margin.right,
	height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
	.append("svg")
	.attr("width", width + margin.left + margin.right)
	.attr("height", height + margin.top + margin.bottom)
	.append("g")
	.attr("transform",
			"translate(" + margin.left + "," + margin.top + ")");

// d3.csv("/data?file=dataset1", function(incoming) {DATA = incoming;});
const x_param = "independent";
const y_param = "dependent";

// d3 objects
const chart = d3.select("#chart");
const WIDTH = chart.attr("width");
const HEIGHT = chart.attr("height");

console.log(WIDTH);
console.log(HEIGHT);

const axes = function(data) {
	let x = d3.scaleTime().domain([0, d3.max(data, function(entry) {return entry[x_param]})]).range(0, WIDTH);
	svg.append("g")
		.attr("transform", "translate(0," + height + ")")
		.call(d3.axisBottom(x));
	let y = d3.scaleLinear().domain([0, d3.max(data, function(entry) {return entry[y_param]})]).range(0, HEIGHT);
	svg.append("g").call(d3.axisLeft(y));
	svg.append("path")
		.datum(data)
		.attr("fill", "none")
		.attr("stroke", "steelblue")
		.attr("stroke-width", 1.5)
		.attr("d", d3.line()
		.x(function(d) { return x(d.date) })
		.y(function(d) { return y(d.value) })
		)
	return [x, y];
};

const graph = function(image, dataum) {
	image.append()
};
