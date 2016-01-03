var width=900;height=300,pad=20,left_pad=100;

var x=d3.scale.ordinal().rangeRoundBands([left_pad,width-pad],0.1);
var y=d3.scale.linear().range([height-pad,pad]);

var xAxis=d3.svg.axis().scale(x).orient('bottom');
var yAxis=d3.svg.axis().scale(y).orient('left');

var svg=d3.select('#graph').append('svg').attr({
	width:width,
	height:height
});
d3.json('./data//hours.json',function(data){
	data=d3.keys(data).map(function(key){
		return {
			bucket:Number(key),
			N:data[key]
		}
	});
	x.domain(data.map(function(d){
		return d.bucket;
	}));
	y.domain([0,d3.max(data,function(d){
		return d.N;
	})]);

	svg.append('g')
	.attr("class","axis")
	.attr("transform","translate(0,"+(height-pad)+")")
	.call(xAxis);

	svg.append('g')
	.attr("class","axis")
	.attr("transform","translate("+(left_pad-pad)+",0)")
	.call(yAxis);


	// svg.selectAll('rect').data(data).enter().append('rect')
	//    .attr({
	//    	x:function(d){
	//    		return x(d.bucket);
	//    	},
	//    	y:function(d){
	//    		return y(d.N);
	//    	},
	//    	width:x.rangeBand(),
	//    	height:function(d){
	//    		return height-pad-y(d.N)
	//    	},
	//    	class:'bar'
	//    });

	svg.selectAll('rect').data(data).enter().append('rect')
	.classed('bar',true)
	.attr('x',function(d){
		return x(d.bucket);
	})
	.attr('width',x.rangeBand())
	.attr('height',0)
	.attr('y',height-pad)
	.transition()
	.delay(function(d){return d.bucket*40})
	.duration(1000)
	.attr('y',function(d){
		return y(d.N);
	})
	.attr('height',function(d){
		return height-pad-y(d.N);
	});




})