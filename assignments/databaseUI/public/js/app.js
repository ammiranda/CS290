function renderTable(data, textStatus, jqXHR) {
   var json = JSON.parse(data.results);
   $('.tableContainer').html('');
   console.log(json);
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
