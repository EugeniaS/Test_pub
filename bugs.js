let dataTable = document.createElement('table');
dataTable.setAttribute('id', 'dataTable');
document.body.appendChild(dataTable);

let tableHeadRow = dataTable.insertRow(0);
let tableHeadArray = new Array();
tableHeadArray = ['Тип', 'Приоритет', 'Статус', 'Кто открыл', 'Описание'];

for (let i = 0; i < tableHeadArray.length; i++) {
  let th = document.createElement('th');
  th.innerHTML = tableHeadArray[i];
  tableHeadRow.appendChild(th);
}

document.getElementById("addRow").addEventListener("click", function(){

  const name = document.getElementById("name");
  const job = document.getElementById("job");
  const age = document.getElementById("age");
  
  const defect_type = document.getElementById("defect_type");
  const defect_priority = document.getElementById("defect_priority");
  const defect_state = document.getElementById("defect_state");
  const defect_owner = document.getElementById("defect_owner");
  const defect_description = document.getElementById("defect_description");
  
  let tr = dataTable.insertRow(-1);
  

  let tableDataArray = new Array();
  //tableDataArray = [name.value, job.value, age.value];
  tableDataArray = [
      defect_type.options[defect_type.selectedIndex].text, 
	  defect_priority.options[defect_priority.selectedIndex].text, 
	  defect_state.options[defect_state.selectedIndex].text, 
	  defect_owner.options[defect_owner.selectedIndex].text, 
	  defect_description.value];
					
  for (let i = 0; i < tableDataArray.length; i++) {
    let td = tr.insertCell(-1);
    td.innerHTML = tableDataArray[i];
  }

  let td = tr.insertCell(-1);

  let button = document.createElement('button');
  button.setAttribute('type', 'button');
  button.setAttribute('class', 'row__button');
  button.innerHTML = 'Удалить';

  button.setAttribute('onclick', 'delRow(this)');
  td.appendChild(button);

  name.value = "";
  job.value = "";
  age.value = "";
});

function delRow(el) {
  let uTable = document.getElementById('dataTable');
  uTable.deleteRow(el.parentNode.parentNode.rowIndex); 
}