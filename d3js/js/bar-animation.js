var w=1200,h=700,interval=10;
var svg=d3.select('body').append('svg').attr('height',h).attr('width',w);
var dataset=[];
for(var i=0;i<10;i++){
  dataset.push(Math.random()*100);
}

var barwidth=(w)/dataset.length;
var xScale=d3.scale.ordinal().domain(d3.range(dataset.length)).rangeRoundBands([0,w],0.05);
var yScale=d3.scale.linear().domain([0,d3.max(dataset)]).range([0,h]);
svg.selectAll('rect').data(dataset).enter().append('rect')
.attr({
    x:function (d,i) {
       return xScale(i);
    },
    y:function (d,i) {
    return h-yScale(d);
    },
    width:function (d,i) {
      return xScale.rangeBand();
    },
   height:function (d,i) {
      return yScale(d);
    },
   fill:function (d,i) {
      return "rgb(145,175,"+Math.floor(d*2)+")";
    }
});

svg.selectAll('text').data(dataset).enter().append('text').text(function (d) {
  return Math.floor(d*5);
}).attr({
  x:function (d,i) {
    return xScale(i)+xScale.rangeBand()/2;
  },
  y:function (d,i) {
    return h-yScale(d)+20
  }
}).style({
  'font-family':'monospace',
  'font-size':'20px',
  fill:'brown'
});

d3.select('p').on('click',function(){
  var dataset=[];
  for(var i=0;i<10;i++){
  dataset.push(Math.random()*100);
  }
  svg.selectAll('rect').data(dataset).transition().delay(function(d,i){
    return i*100;
  }).attr({
    y:function(d){
      return h-yScale(d);
    },
    height:function(d){
      return yScale(d);
    },
    fill:function (d,i) {
      return "rgb(145,175,"+Math.floor(d*2)+")";
    }
  });

  svg.selectAll('text').data(dataset).transition().delay(function(d,i){
    return i*100;
  }).text(function (d) {
    return Math.floor(d*5);
  }).attr({
    x:function (d,i) {
      return xScale(i)+xScale.rangeBand()/2;
    },
    y:function (d,i) {
      return h-yScale(d)+20
    }
  });
})


































