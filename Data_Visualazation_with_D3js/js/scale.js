var width=800,height=600;
var svg=d3.select('body').append('svg').attr({width:width,height:height});

var data=d3.range(30);
var color=d3.scale.category10();
var points=d3.scale.ordinal().domain(data).rangePoints([0,height],1.0);
var bands=d3.scale.ordinal().domain(data).rangeBands([0,width],0.1);

svg.selectAll('path')
  .data(data)
  .enter()
  .append('path')
  .attr({
      d:d3.svg.symbol().type('circle').size(40),
      transform:function(d){
        return 'translate('+(width/2)+', '+points(d)+')';
      }
    })
  .style('fill',function(d){
      return color(d);
  });

  svg.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr({
      x:function(d){
        return bands(d);
      },
      y:height/2,
      width: bands.rangeBand,
      height:10
    }).style('fill',function (d) {
      return color(d)
    });


  var svg2=d3.select('body').append('svg').attr({width:width,height:height});
