
// d3.select('body').append('p').text('Hello d3<---This text created by d3.function');
//
// d3.csv('./data/example-1.csv',function (err,data) {
//   if(err){
//     return;
//   }
//   console.log(data);
// });

d3.json('./data/example-1.json',function (err,data) {
  if(err){
    return;
  }
  d3.select('body').selectAll('p').data(data).enter().append('p').text(function (d) {
    console.log(d);
    return "name:"+d.name+" age:"+d.age;
  }).style("color",function(d){
    return d.age>17?"red":"green";
  });
  d3.select('body').selectAll('div').data(data).enter().append('div').attr('class','bar').style('height',function (d) {
    return d.age+"px";
  });

});
