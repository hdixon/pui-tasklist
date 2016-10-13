$('#add').click(function() {
    var taskText = $('input:text').val();
    if (taskText != "") {
        $('input:text').val("");
        addTask(taskText);
    }
});

$('#done').click(function() {
  console.log("Remove: " + $(this).closest('task'));
  $(this).closest('task').remove();
});


function addTask(txt) {
  var results = chrono.parse(txt);
  if (results.length > 0) {
    var dueDateRaw = results[0].start.date();
    var dueDateFormatted = moment(dueDateRaw).format('dddd');
    var dueTimeFormatted = moment(dueDateRaw).format('h a');
  } else {
    var dueDateFormatted = "";
    var dueTimeFormatted = ""
  }

  $('#tasks').append("<task><div id='timeDue'><span class='dueDate'>" + dueDateFormatted + "</span><span class='dueTime'>" + dueTimeFormatted + "</span></div><span class='taskText'>" + txt + "<span><button id='done' class='btn btn-link'>Done</button></task>");
      
  $("task:last-child").click(function() {    
      $(this).closest('task').remove();    
  });

}
