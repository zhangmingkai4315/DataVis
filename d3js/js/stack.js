var data=[ {
	apples:150,orange:13,grapes:14
},{
	apples:25,orange:10,grapes:14
},{
	apples:13,orange:13,grapes:42
},{
	apples:14,orange:10,grapes:12
},{
	apples:14,orange:20,grapes:30
}
];

var dataset=[]
for (var i in data[0]){
	var tempArra=[] 
	for (var j=0;j<data.length;j++){
		tempArra.push({x:j,y:data[j][i]})
	}
	dataset.push(tempArra);
}

var stack=d3.layout.stack();

var margin = {top: 20, right: 30, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;


var colors = d3.scale.category10();

var x = d3.scale.ordinal()
    .rangeRoundBands([0, width]);

var y = d3.scale.linear()
    .rangeRound([height, 0]);

var z = d3.scale.category20c();

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var stack = d3.layout.stack()
      .offset("zero")
    
var layers = stack(dataset);


x.domain(layers[0].map(function(d) { return d.x; }));
  y.domain([0, d3.max(layers[layers.length - 1], function(d) { return d.y0 + d.y; })]).nice();

 var layer = svg.selectAll(".layer")
      .data(layers)
    .enter().append("g")
      .attr("class", "layer")
      .style("fill", function(d, i) { return z(i); });

  layer.selectAll("rect")
      .data(function(d) { return d; })
    .enter().append("rect")
      .attr("x", function(d) { return x(d.x); })
      .attr("y", function(d) { return y(d.y + d.y0); })
      .attr("height", function(d) { return y(d.y0) - y(d.y + d.y0); })
      .attr("width", x.rangeBand() - 1);