var dataset=[];
var h=520,w=800;
var padding=40;
for(var i=0;i<20;i++){
  var x=Math.floor(Math.random()*w),
      y=Math.floor(Math.random()*h);
  dataset.push([x,y]);
}

var scale=d3.scale.linear().domain([100.500]).range(10,450);

var svg=d3.select('body').append('svg').attr('height',h).attr('width',w).style('background-color','coral');

var xScale=d3.scale.linear().domain([0,d3.max(dataset,function (d) {
  return d[0];
})]).range([padding,w-padding]);

var yScale=d3.scale.linear().domain([0,d3.max(dataset,function (d) {
  return d[1];
})]).range([h-padding,padding]);

var rScale=d3.scale.linear().domain([0,d3.max(dataset,function (d) {
  return d[1];
})]).range([10,20]).nice();


svg.selectAll('circle').data(dataset).enter().append('circle')
   .attr({
     cx:function (d,i) {
       return xScale(d[0]);
     },
     cy:function (d,i) {
       return yScale(d[1]);
     },
     r:function (d,i) {
       return rScale(d[1]);
     }
}).attr('fill','white');

svg.selectAll('text').data(dataset).enter().append('text').text(function (d) {
  return d[0]+':'+d[1];
}).attr({
     x:function (d,i) {
       return xScale(d[0]);
     },
     y:function (d,i) {
       return yScale(d[1]);
     }
});

var xAxis=d3.svg.axis();
xAxis.scale(xScale).orient('bottom');

svg.append("g").attr("class","axis").attr("transform","translate(0,"+(h-padding)+")").call(xAxis);


var yAxis=d3.svg.axis();
yAxis.scale(yScale).orient('left');
svg.append('g').attr("class","axis").attr('transform',"translate("+padding+",0)").call(yAxis);


d3.select('h1').on('click',function(){
  var dataset=[];
  for(var i=0;i<20;i++){
  var x=Math.floor(Math.random()*w),
      y=Math.floor(Math.random()*h);
  dataset.push([x,y]);
  svg.selectAll('circle').data(dataset)
   .transition().duration(1000).each('start',function(){
    d3.select(this).attr('r',3)
   }).attr({
     cx:function (d,i) {
       return xScale(d[0]);
     },
     cy:function (d,i) {
       return yScale(d[1]);
     },
     r:function (d,i) {
       return rScale(d[1]);
     }
    }).each('end',function(){
      d3.select(this).attr('fill','white');
    });
}

});

