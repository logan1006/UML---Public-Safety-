let colPoliceArray = new Array();
class PoliceStationData extends DataSet{
 callDataSet(){
		var fileName='Police_Stations.csv';
		var fileId='PSPS';
		new DataSet().loadDataSet(fileName,fileId);
	}

 tableCreate(dataframe,dataList,columnRow) {
		var policeDiv = document.getElementById("policeDataSet");
	    var body = document.getElementsByTagName('body')[0];
	    var tbl = document.createElement('table');
	    tbl.id="policeTableId";
	    tbl.style.width = '100%';
	    tbl.setAttribute('border', '1');
	    var tbdy = document.createElement('tbody');
	    var tableRow = document.createElement('tr');
	    for(var i=0;i<columnRow.length;i++){
	    	colPoliceArray[i] = columnRow[i];
			var tableHeader = document.createElement('th');
			tableHeader.appendChild(document.createTextNode(columnRow[i]));
			tableRow.appendChild(tableHeader);
		}
	    tbdy.appendChild(tableRow);
	    for (var i=0;i<dataList.length;i++) {
	        var tr = document.createElement('tr');
	        for (var j=0;j<dataList[i].length;j++) {
	                var td = document.createElement('td');
	                td.appendChild(document.createTextNode(dataList[i][j]))
	                tr.appendChild(td)
	        }
	        tbdy.appendChild(tr);
	    }
	    tbl.appendChild(tbdy);
	    policeDiv.appendChild(tbl);
	    this.policeStationFilter();
	}
 
 policeStationFilter(){
		var crimeDiv = document.getElementById("policeStationFilter");
		var length = crimeDiv.childNodes.length;
		if(length==1){
		var checkbox = null;
		var label = null;
		for(var k=0; k<colPoliceArray.length;k++){
		checkbox= document.createElement('input');
		checkbox.type = "checkbox";
		checkbox.value = colPoliceArray[k];
		checkbox.id = "policeStationId"+k;
		label = document.createElement('label');
		label.htmlFor = "id";
		label.appendChild(document.createTextNode(colPoliceArray[k]));
		crimeDiv.appendChild(checkbox);
		crimeDiv.appendChild(label);
		}
		}else{
			for(var k=0; k<colPoliceArray.length;k++){
				document.getElementById("policeStationId"+k).checked=false;
			}
		}
	}
 
 filter(){
		
		var tbl = document.getElementById("policeTableId");
		var check = false;
		for(var k=0; k<colPoliceArray.length;k++){
			if(document.getElementById("policeStationId"+k).checked==true){
				check = true;
			}
		}
		if(check){
		for (var i = 0; i < tbl.rows.length; i++) {
         for (var j = 0; j < tbl.rows[i].cells.length; j++) {
             tbl.rows[i].cells[j].style.display = "";
             if (!(document.getElementById("policeStationId"+j).checked))
                 tbl.rows[i].cells[j].style.display = "none";
         }
     }
		}
	}
}






