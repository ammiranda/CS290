function renderTable(data, textStatus, jqXHR) {
   var json = JSON.parse(data.results);
   $('.tableContainer').html('');
   
   if (json.length > 0) {
      var body = document.body;
      var table = document.createElement('table');
      var tableBody = document.createElement('tbody');

      table.style.width = '100%';
      table.setAttribute('border', '1');

   } else {
      $('.tableContainer').html('No records to show');
   }
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
      newTask['name'] = $('.name').val();
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
