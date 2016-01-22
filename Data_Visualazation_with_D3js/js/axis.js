var w=800,h=600,interval=10,pad=30,left_pad=100;
var svg=d3.select('#graph').append('svg').attr('height',h).attr('width',w);
var dataset=[];
for(var i=0;i<10;i++){
  dataset.push(Math.random()*100);
}

var barwidth=(w)/dataset.length;
var x=d3.scale.ordinal().domain(d3.range(dataset.length)).rangeRoundBands([left_pad,w-pad],0.05);
var y=d3.scale.linear().domain([0,d3.max(dataset)]).range([h-pad,pad]);

var xAxis=d3.svg.axis().scale(x).orient("bottom");
var yAxis=d3.svg.axis().scale(y).orient('left');
svg.selectAll('rect').data(dataset).enter().append('rect')
.attr({
    x:function (d,i) {
       return x(i);
    },
    y:function (d,i) {
    return y(d);
    },
    width:function (d,i) {
      return x.rangeBand();
    },
   height:function (d,i) {
      return h-pad-y(d);
    },
   fill:function (d,i) {
      return "rgb(145,175,"+Math.floor(d*2)+")";
    }
});
svg.selectAll('text').data(dataset).enter().append('text').text(function (d) {
  return Math.floor(d);
}).attr({
  x:function (d,i) {
    return x(i);
  },
  y:function (d,i) {
    return y(d)
  }
}).style({
  'font-family':'monospace',
  'font-size':'20px',
  fill:'brown'
});

svg.append('g')
   .attr("class",'axis')
   .attr("transform","translate(0, "+(h-pad)+")")
   .call(xAxis);

svg.append("g")
    .attr("class",'axis')
    .attr("transform","translate("+(left_pad-pad)+",0)")
    .call(yAxis);



var svg_1=d3.select('#graph-1').append('svg').attr('height',h).attr('width',w);
var barwidth_1=(h)/dataset.length;
var x_1=d3.scale.ordinal().domain(d3.range(dataset.length)).rangeRoundBands([pad,h-pad],0.05);
var y_1=d3.scale.linear().domain([0,d3.max(dataset)]).range([left_pad,w-left_pad]);
var xAxis_1=d3.svg.axis().scale(x_1).orient("left");
var yAxis_1=d3.svg.axis().scale(y_1).orient('top');


svg_1.selectAll('rect').data(dataset).enter().append('rect')
.attr({
    x:function (d,i) {
       return left_pad;
    },
    y:function (d,i) {
    return x_1(i)+pad;
    },
    width:function (d,i) {
      return y_1(d)-left_pad;
    },
   height:function (d,i) {
      return x_1.rangeBand();
    },
   fill:function (d,i) {
      return "rgb(145,175,"+Math.floor(d*2)+")";
    }
});
svg_1.selectAll('text').data(dataset).enter().append('text').text(function (d) {
  return Math.floor(d);
}).attr({
  x:function (d,i) {
    return y_1(d)-pad;
  },
  y:function (d,i) {
    return x_1(i)+pad+x_1.rangeBand()
  },
  transform:function(d,i){
    return "rotate(90,"+y_1(d)+","+(x_1(i)+pad+x_1.rangeBand())+")"
  }
}).style({
  "text-anchor":"middle",
  'font-family':'monospace',
  'font-size':'20px',
  fill:'brown'
});

svg_1.append('g')
   .attr("class",'axis')
   .attr("transform","translate("+left_pad+","+pad+")")
   .call(xAxis_1);

svg_1.append("g")
    .attr("class",'axis')
    .attr("transform","translate(0,"+pad+")")
    .call(yAxis_1);





























// d3.select('.add').on('click',function(){
//   dataset.push(Math.random()*100);
//   var bars=svg.selectAll('rect').data(dataset);
//   xScale.domain(d3.range(dataset.length));
//   bars.enter().append("rect").attr({
//     x:w,
//     y:function(d,i){
//       return h-yScale(d);
//     },
//     width:xScale.rangeBand(),
//     height:function(d){
//       return yScale(d);
//     },
//     fill:function(d){
//       return "rgb(145,175,"+Math.floor(d*2)+")";
//     }
//   });
//   bars.transition().duration(1000).attr({
//     x:function(d,i){
//       return xScale(i);
//     },
//     y:function(d,i){
//       return h-yScale(d);
//     },
//     width:xScale.rangeBand(),
//     height:function(d){
//       return yScale(d);
//     }
  // });
//   var labels=svg.selectAll('text').data(dataset)
//   labels.enter().append('text').text(function (d) {
//     return Math.floor(d*5);
//   }).attr({
//     x:w+xScale.rangeBand()/2,
//     y:function (d,i) {
//       return h-yScale(d)+20
//     }
//   }).style({
//     'font-family':'monospace',
//     'font-size':'20px',
//     fill:'brown'
//   });
//   labels.transition().duration(900).attr({
//     x:function (d,i) {
//       return xScale(i);
//     },
//     y:function (d,i) {
//       return h-yScale(d)+20
//     }
//   }).style({
//   'font-size':'15px',
//   fill:'brown'
// });
//
// })


// d3.select('.delete').on('click',function(){
//   dataset.pop();
//   var bars=d3.select('svg').selectAll('rect').data(dataset);
//   xScale.domain(d3.range(dataset.length));
//   bars.exit().transition().duration(1000).attr({
//     x:w,
//   }).remove();
//   bars.transition().duration(1000).attr({
//     x:function(d,i){
//       return xScale(i);
//     },
//     y:function(d,i){
//       return h-yScale(d);
//     },
//     width:xScale.rangeBand(),
//     height:function(d){
//       return yScale(d);
//     }
//   });
//
//     var labels=svg.selectAll('text').data(dataset)
//     labels.exit().transition().duration(900).attr({
//        x:w,
//      }).remove();
//     labels.transition().duration(900).attr({
//       x:function (d,i) {
//         return xScale(i);
//       },
//       y:function (d,i) {
//         return h-yScale(d)+20
//       }
//     }).style({
//     'font-size':'15px',
//     fill:'brown'
//   });
//
// });
