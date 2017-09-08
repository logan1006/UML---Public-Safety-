let colFireArray = new Array();
class FireStationData extends DataSet{
 callDataSet(){
		var fileName='Fire_Stations.csv';
		var fileId='FSPS';
		new DataSet().loadDataSet(fileName,fileId);
	}

 tableCreate(dataframe,dataList,columnRow) {
		var fireDiv = document.getElementById("fireDataSet");
	    var body = document.getElementsByTagName('body')[0];
	    var tbl = document.createElement('table');
	    tbl.id="fireTableId";
	    tbl.style.width = '100%';
	    tbl.setAttribute('border', '1');
	    var tbdy = document.createElement('tbody');
	    var tableRow = document.createElement('tr');
	    for(var i=0;i<columnRow.length;i++){
	    	colFireArray[i] = columnRow[i];
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
	    fireDiv.appendChild(tbl);
	    this.fireStationFilter();
	}
 
 fireStationFilter(){
		var crimeDiv = document.getElementById("fireStationFilter");
		var length = crimeDiv.childNodes.length;
		if(length==1){
		var checkbox = null;
		var label = null;
		for(var k=0; k<colFireArray.length;k++){
		checkbox= document.createElement('input');
		checkbox.type = "checkbox";
		checkbox.value = colFireArray[k];
		checkbox.id = "fireStationId"+k;
		label = document.createElement('label');
		label.htmlFor = "id";
		label.appendChild(document.createTextNode(colFireArray[k]));
		crimeDiv.appendChild(checkbox);
		crimeDiv.appendChild(label);
		}
		}else{
			for(var k=0; k<colFireArray.length;k++){
				document.getElementById("fireStationId"+k).checked=false;
			}
		}
	}

 	filter(){
		var tbl = document.getElementById("fireTableId");
		var check = false;
		for(var k=0; k<colFireArray.length;k++){
			if(document.getElementById("fireStationId"+k).checked==true){
				check = true;
			}
		}
		if(check){
		for (var i = 0; i < tbl.rows.length; i++) {
			for (var j = 0; j < tbl.rows[i].cells.length; j++) {
				tbl.rows[i].cells[j].style.display = "";
			if (!(document.getElementById("fireStationId"+j).checked))
                tbl.rows[i].cells[j].style.display = "none";
      }
		}
		}
	}
}






