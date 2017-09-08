let colPublicArray = new Array();
class PublicHealthData extends DataSet{
 callDataSet(){
		var fileName='Public_Health_Statistics.csv';
		var fileId='PHPS';
		new DataSet().loadDataSet(fileName,fileId);
	}

 tableCreate(dataframe,dataList,columnRow) {
		var phealthDiv = document.getElementById("publichealthDataSet");
	    var body = document.getElementsByTagName('body')[0];
	    var tbl = document.createElement('table');
	    tbl.id="publichealthTableId";
	    tbl.style.width = '100%';
	    tbl.setAttribute('border', '1');
	    var tbdy = document.createElement('tbody');
	    var tableRow = document.createElement('tr');
	    for(var i=0;i<columnRow.length;i++){
	    	colPublicArray[i] = columnRow[i];
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
	    phealthDiv.appendChild(tbl);
	    this.publicHealthFilter();
	}
 
 publicHealthFilter(){
		var crimeDiv = document.getElementById("publicHealthFilter");
		var length = crimeDiv.childNodes.length;
		if(length==1){
		var checkbox = null;
		var label = null;
		for(var k=0; k<colPublicArray.length;k++){
		checkbox= document.createElement('input');
		checkbox.type = "checkbox";
		checkbox.value = colPublicArray[k];
		checkbox.id = "publicHealthId"+k;
		label = document.createElement('label');
		label.htmlFor = "id";
		label.appendChild(document.createTextNode(colPublicArray[k]));
		crimeDiv.appendChild(checkbox);
		crimeDiv.appendChild(label);
		}
		}else{
			for(var k=0; k<colPublicArray.length;k++){
				document.getElementById("publicHealthId"+k).checked=false;
			}
		}
	}

	filter(){
		var tbl = document.getElementById("publichealthTableId");
		var check = false;
		for(var k=0; k<colPublicArray.length;k++){
			if(document.getElementById("publicHealthId"+k).checked==true){
				check = true;
			}
		}
		if(check){
		for (var i = 0; i < tbl.rows.length; i++) {
			for (var j = 0; j < tbl.rows[i].cells.length; j++) {
				tbl.rows[i].cells[j].style.display = "";
			if (!(document.getElementById("publicHealthId"+j).checked))
				tbl.rows[i].cells[j].style.display = "none";
			}
		}
		}
	}
}






