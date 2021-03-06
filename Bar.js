/**
 * 
 */
class Bar extends ChartConfig{
	
	createCanvas(fileName,labelId,dataId,chartType){
		var DataFrame = dfjs.DataFrame;
		DataFrame.fromCSV(fileName).then(
		df => {
			var columnRow = df.listColumns();
			var dataframe = new DataFrame(df);
			var dataList = df.toArray();
			var labelArr = new Array();
			var dataArr = new Array();
			var red,green,blue,alpha;
			var red1,green1,blue1,alpha1;
			var backGroundColorArray = [];
			var borderColorArray =[];
			for(var i=0;i<dataList.length;i++){
				labelArr[i] = dataList[i][labelId];
				dataArr[i] = dataList[i][dataId];
				red = Math.floor((Math.random()*150)+0);
				green = Math.floor((Math.random()*150)+0);
				blue = Math.floor((Math.random()*150)+0);
				red1 = Math.floor((Math.random()*106)+150);
				green1 = Math.floor((Math.random()*106)+150);
				blue1 = Math.floor((Math.random()*106)+150);
				alpha = 0.8;
				alpha1 = 0.8;
				backGroundColorArray[i] = 'rgba('+red+','+blue+','+green+','+alpha+')';
				borderColorArray[i] = 'rgba('+red1+','+blue1+','+green1+','+alpha1+')';
			}
			
	var ctx = document.getElementById(chartType);
	var myChart = new Chart(ctx, {					
	type: 'bar',
	data: {
	labels: labelArr,
	datasets: [{
	label: 'Staff Strength',
	data: dataArr,
	backgroundColor: backGroundColorArray,
	borderColor: borderColorArray,
	borderWidth: 1
	}]
	},
	options: {
	scales: {
	yAxes: [{
	ticks: {
	beginAtZero:true
	}
	}] }
	}
	})/*.Bar(data,options);*/
		}).catch(err => {
			console.log(err);
		});
	}
}