let colLifeArray = new Array();
class LifeSafetyData extends DataSet{
 callDataSet(){
		var fileName='Life_Safety_Evaluations.csv';
		var fileId='LSPS';
		new DataSet().loadDataSet(fileName,fileId);
	}

 tableCreate(dataframe,dataList,columnRow) {
		var lsafetyDiv = document.getElementById("lifesafetyDataSet");
	    var body = document.getElementsByTagName('body')[0];
	    var tbl = document.createElement('table');
	    tbl.id="lifesafetyTableId";
	    tbl.style.width = '100%';
	    tbl.setAttribute('border', '1');
	    var tbdy = document.createElement('tbody');
	    var tableRow = document.createElement('tr');
	    for(var i=0;i<columnRow.length;i++){
	    	colLifeArray[i] = columnRow[i];
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
	    lsafetyDiv.appendChild(tbl);
	    this.lifeSafetyFilter();
	}
 
 lifeSafetyFilter(){
		var crimeDiv = document.getElementById("lifeSafetyFilter");
		var length = crimeDiv.childNodes.length;
		if(length==1){
		var checkbox = null;
		var label = null;
		for(var k=0; k<colLifeArray.length;k++){
		checkbox= document.createElement('input');
		checkbox.type = "checkbox";
		checkbox.value = colLifeArray[k];
		checkbox.id = "lifeSafetyId"+k;
		label = document.createElement('label');
		label.htmlFor = "id";
		label.appendChild(document.createTextNode(colLifeArray[k]));
		crimeDiv.appendChild(checkbox);
		crimeDiv.appendChild(label);
		}
		}else{
			for(var k=0; k<colLifeArray.length;k++){
				document.getElementById("lifeSafetyId"+k).checked=false;
			}
		}
	}

	filter(){
		var tbl = document.getElementById("lifesafetyTableId");
		var check = false;
		for(var k=0; k<colLifeArray.length;k++){
			if(document.getElementById("lifeSafetyId"+k).checked==true){
				check = true;
			}
		}
		if(check){
		for (var i = 0; i < tbl.rows.length; i++) {
			for (var j = 0; j < tbl.rows[i].cells.length; j++) {
				tbl.rows[i].cells[j].style.display = "";
			if (!(document.getElementById("lifeSafetyId"+j).checked))
				tbl.rows[i].cells[j].style.display = "none";
			}
		}
		}
	}
}






