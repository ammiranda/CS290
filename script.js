$(document).ready(function(){
   var button = document.getElementById('demo');

   function ajaxCall() {
      $.ajax({
         url: 'https://api.github.com/repos/vmg/redcarpet/issues?state=closed',
         dataType: 'jsonp',
         success: function(data, textStatus, jqXHR) {
            var output = data.data[0].labels_url;
            alert(output);
         },
         error: function(jqXHR, textStatus, errorThrown) {
            alert(errorThrown);
         }
      });
   }

   button.addEventListener('click', ajaxCall, false);
});
