function getId(e) {
   return $(e.target).parent('tr').data('id');
}

function addListeners() {
   $('.delete').on('click', function(e) {
      var id = getId(e);
      $.ajax({
         url: '/tasks?id=' + id,
         method: 'DELETE',
         success: getData
      });    
   });

   $('.edit').on('click', function(e) {
      var id = getId(e);
      
   });
}

function renderTable(data, textStatus, jqXHR) {
   var json = JSON.parse(data.results);
   $('.tableContainer').html('');
   
   if (json.length > 0) {
      var body = document.body;
      var table = document.createElement('table');
      var tableBody = document.createElement('tbody');

      table.style.width = '100%';
      table.setAttribute('border', '1');
      var tr = document.createElement('tr');
      for (var key in json[0]) {
         if (key !== 'id') {
            var th = document.createElement('th');
            th.appendChild(document.createTextNode(key));
            tr.appendChild(th);
         }
      }
      tableBody.appendChild(tr);
      for (var i = 0; i < json.length; i++) {
         tr = document.createElement('tr');
         for (var k in json[i]) {
            if (k !== 'id') {
               var td = document.createElement('td');
               var label = json[i][k];
               td.appendChild(document.createTextNode(label));
               tr.appendChild(td);
            } else {
               tr.setAttribute('data-id', json[i][k]);
            }
         }
         var edit = document.createElement('button');
         edit.className = 'btn btn-default edit';
         edit.appendChild(document.createTextNode('edit'));
         var del = document.createElement('button');
         del.className = 'btn btn-danger delete';
         del.appendChild(document.createTextNode('delete'));
         tr.appendChild(edit);
         tr.appendChild(del);
         tableBody.appendChild(tr); 
      }
      table.appendChild(tableBody);
      var div = document.getElementsByClassName('tableContainer')[0];
      div.appendChild(table);
   } else {
      $('.tableContainer').html('No records to show');
   }
   addListeners();
}

function getData() {
   $.ajax({
      url: '/tasks',
      dataType: 'json',
      success: renderTable
   });
}

$(document).ready(function(){
   getData();

   $('.add-task').on('click', function(e) {
      e.preventDefault();
      var newTask = {};
      if ($('.name').val() !== ''){
        newTask['name'] = $('.name').val();
      }
      newTask['rep'] = $('.rep').val();
      newTask['weight'] = $('.weight').val();
      newTask['date'] = $('.date').val();
      newTask['units'] = $('.units').val();
      $.ajax({
         url: '/tasks',
         method: 'POST',
         data: newTask,
         success: getData
      });   
   });       
});
