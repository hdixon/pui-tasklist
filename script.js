$('#add').click(function() {
    var taskText = $('input:text').val();
    console.log(taskText);
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
        var dueTimeFormatted = "";
    }

    var openDateDue = "<task><div id='timeDue'><span class='dueDate'>";
    var openTimeDue = "</span><span class='dueTime'>";
    var openText = "</span></div><span class='taskText'>";
    var closeText = "</span>";
    var buttonHTML = "<button id='done' class='btn btn-link'>Done</button></task>";
    $('#tasks').append(openDateDue + dueDateFormatted + openTimeDue + dueTimeFormatted + openText + txt + closeText + buttonHTML);    
    $("task:last-child").click(function() {    
        $(this).closest('task').remove();    
    });

}
