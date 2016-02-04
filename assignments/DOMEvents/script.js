function tableCreate(cb) {
   var body = document.body;
   var table = document.createElement('table');
   var tableBody = document.createElement('tbody');

   table.style.width = '100%';
   table.setAttribute('border', '1');

   for (var i = 0; i < 4; i++) {
      var tr = document.createElement('tr');
      for (var j = 0; j < 4; j++) {
         if (i === 4 && j === 4) {
            break;
         } else {
            if (i === 0) {
               var th = document.createElement('th');
               th.appendChild(document.createTextNode("Header " + (j + 1)));
               tr.appendChild(th);
            } else {
               var td = document.createElement('td');
               td.appendChild(document.createTextNode((j + 1) + "," + i));
               if (j === 0 && i === 1) {
                  td.style.border = "5px";
               }
               tr.appendChild(td);
            }
         }
      }
      tableBody.appendChild(tr);
   }
   table.appendChild(tableBody);
   body.appendChild(table);
   
   if (cb) {
      cb();
   }
}

function appendButtons(cb) {
   var body = document.body;
   var labels = ["Left", "Up", "Right", "Down", "Mark Cell"];

   for (var i = 0; i < labels.length; i++) {
      var button = document.createElement('button');
      button.appendChild(document.createTextNode(labels[i]));
      body.appendChild(button);
   }
}

tableCreate(appendButtons);
