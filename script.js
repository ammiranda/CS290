$(document).ready(function(){
   var button = document.getElementById('demo');

   function ajaxCall() {
      $.ajax({
         url: 'https://api.github.com/repos/vmg/redcarpet/issues?state=closed',
         dataType: 'jsonp',
         success: function(data, textStatus, jqXHR) {
            var title = data.data[0].title;
            var body = data.data[0].body;
            alert("title: " + title + " body: " + body);
         },
         error: function(jqXHR, textStatus, errorThrown) {
            alert(errorThrown);
         }
      });
   }

   button.addEventListener('click', ajaxCall, false);
});
