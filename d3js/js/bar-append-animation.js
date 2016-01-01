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

d3.select('.add').on('click',function(){
  dataset.push(Math.random()*100);
  var bars=svg.selectAll('rect').data(dataset);
  xScale.domain(d3.range(dataset.length));
  bars.enter().append("rect").attr({
    x:w,
    y:function(d,i){
      return h-yScale(d);
    },
    width:xScale.rangeBand(),
    height:function(d){
      return yScale(d);
    },
    fill:function(d){
      return "rgb(145,175,"+Math.floor(d*2)+")";
    }
  });
  bars.transition().duration(1000).attr({
    x:function(d,i){
      return xScale(i);
    },
    y:function(d,i){
      return h-yScale(d);
    },
    width:xScale.rangeBand(),
    height:function(d){
      return yScale(d);
    }
  });
  var labels=svg.selectAll('text').data(dataset)
  labels.enter().append('text').text(function (d) {
    return Math.floor(d*5);
  }).attr({
    x:w+xScale.rangeBand()/2,
    y:function (d,i) {
      return h-yScale(d)+20
    }
  }).style({
    'font-family':'monospace',
    'font-size':'20px',
    fill:'brown'
  });
  labels.transition().duration(900).attr({
    x:function (d,i) {
      return xScale(i);
    },
    y:function (d,i) {
      return h-yScale(d)+20
    }
  }).style({
  'font-size':'15px',
  fill:'brown'
});

})


d3.select('.delete').on('click',function(){
  dataset.pop();
  var bars=d3.select('svg').selectAll('rect').data(dataset);
  xScale.domain(d3.range(dataset.length));
  bars.exit().transition().duration(1000).attr({
    x:w,
  }).remove();
  bars.transition().duration(1000).attr({
    x:function(d,i){
      return xScale(i);
    },
    y:function(d,i){
      return h-yScale(d);
    },
    width:xScale.rangeBand(),
    height:function(d){
      return yScale(d);
    }
  });

    var labels=svg.selectAll('text').data(dataset)
    labels.exit().transition().duration(900).attr({
       x:w,
     }).remove();
    labels.transition().duration(900).attr({
      x:function (d,i) {
        return xScale(i);
      },
      y:function (d,i) {
        return h-yScale(d)+20
      }
    }).style({
    'font-size':'15px',
    fill:'brown'
  });

});


