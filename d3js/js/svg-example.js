var w=1000,h=550,interval=10;
var svg=d3.select('body').append('svg').attr('height',h).attr('width',w);
var dataset=[];
for(var i=0;i<10;i++){
  dataset.push(Math.random()*100);
}
// svg.selectAll("circle").data(dataset).enter().append('circle').attr('cx',function (d,i) {
//   return i*100+50;
// }).attr('cy',h/2).attr("r",function (d) {
//   return d;
// }).attr('fill','darkorange');
var barwidth=(w)/dataset.length;
svg.selectAll('rect').data(dataset).enter().append('rect')
.attr({
    x:function (d,i) {
      return i*barwidth;
    },
    y:function (d,i) {
    return h-d*5;
    },
    width:function (d,i) {
      return barwidth-interval;
    },
   height:function (d,i) {
      return d*5;
    },
   fill:function (d,i) {
      return "rgb(145,175,"+Math.floor(d*2)+")";
    }
});

svg.selectAll('text').data(dataset).enter().append('text').text(function (d) {
  return Math.floor(d*5);
}).attr({
  x:function (d,i) {
    return i*barwidth+25;
  },
  y:function (d,i) {
    return h-d*5-10;
  }
}).style({
  'font-family':'monospace',
  'font-size':'20px',
  fill:'brown'
});
