// d3.json('./data/example-2.json',function (err,data) {
//   if(err){
//     return;
//   }
//   d3.select('body').selectAll('div').data(data).enter().append('div').attr('class','bar').style('height',function (d) {
//     return d.age*10+"px";
//   });
//
//
// });


//random number

var dataset=[];
for(var i=0;i<10;i++){
  dataset.push(Math.random()*100);
}
d3.select('body').selectAll('div').data(dataset).enter().append('div').attr('class','bar').style('height',function (d) {
  return d*10+"px";
});


//
