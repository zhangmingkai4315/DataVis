var w=600,h=600;
var outerRadius=w/2;
var innerRadius=w/3;
var dataset=[];
for(var i=0;i<10;i++){
  dataset.push(Math.random()*100);
}

var arc=d3.svg.arc().innerRadius(innerRadius).outerRadius(outerRadius);

var svg=d3.select('body').append('svg').attr("width",w).attr("height",h);
var pie=d3.layout.pie();
var color=d3.scale.category10();

var arcs=svg.selectAll('g.arc')
			.data(pie(dataset))
			.enter()
			.append('g')
			.attr("class","arc")
			.attr("transform","translate("+outerRadius+","+outerRadius+")");

arcs.append("path").attr('fill',function(d,i){
	return color(i);
}).attr('d',arc);


arcs.append('text').attr("transform",function(d){
	return "translate("+arc.centroid(d)+")";
}).attr("text-anchor","middle").text(function(d){
	return parseInt(d.value);
});
