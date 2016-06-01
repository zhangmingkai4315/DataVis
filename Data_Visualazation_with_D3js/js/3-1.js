

var width=1200;
var height=1000;
var svg=d3.select('#graph').append('svg').attr({
	width:width,height:height
});
var dataset=[]
dataset.push({data:1,direction:{up:0,down:0,left:0,right:1}});
var start=2
for(var i=2;i<20;i++){
	var groupNumber=(i-1)*8/4;
	for(var j=0;j<(i-1)*8;j++){
		var direction={up:0,down:0,left:0,right:0};
		if(j<groupNumber-1){
			direction={up:1,down:0,left:0,right:0};
		}
		if(j>=groupNumber-1&&j<groupNumber*2-1){
			direction={up:0,down:0,left:1,right:0};
		}
		if(j>=2*groupNumber-1&&j<groupNumber*3-1){
			direction={up:0,down:1,left:0,right:0};
		}
		if(j>=3*groupNumber-1&&j<4*groupNumber*2){
			direction={up:0,down:0,left:0,right:1};
		}
		var datapices={data:start++,direction:direction}
		dataset.push(datapices)
	}
}


var startPoint={x:Math.floor(width/2),y:Math.floor(height/2)};

function isPrime(i) {
	var ones = "";
	while(--i >= 0) ones += "1";
	return !/^1?$|^(11+?)\1+$/.test(ones);
}

svg.selectAll('circle').data(dataset).enter().append('circle').attr({
	cy:function(d,i){
		var temp=startPoint.y;
		if(d['direction']['up']){
			startPoint['y']-=20;
		}
		if(d['direction']['down']){
			startPoint['y']+=20;
		}
		return temp;
	},
	cx:function(d,i){
		var temp=startPoint.x;
		if(d['direction']['right']){
			startPoint['x']+=20;
		}
		if(d['direction']['left']){
			startPoint['x']-=20;
		}
		return temp;
	},
	r:10
}).classed('primed',function(d,i){
	if(isPrime(d['data'])){
		return true;
	}else{
		return false
	}
});
svg.select('circle').style('fill','orange')
