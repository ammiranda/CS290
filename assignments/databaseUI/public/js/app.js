$(document).ready(function(){
   $.ajax({
      url: '/tasks',
      dataType: 'json',
      success: function(data, textStatus, jqXHR) {
         console.log(data);
      }
   });   

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
         success: function(data, textStatus, jqXHR) {
            console.log(data);
         }
      });   
   });       
});
