function addGlobal() {
    var taskText = $('#taskInput').val();
    if (taskText != "") {
        $('input:text').val("");
        addTask(taskText);
    }
}

function complete(elem) {
    var div = $(elem).closest('task');
    div.css("background-color", "green");
    div.fadeOut(200, "swing");
}

function cancel(elem) {
    var div = $(elem).closest('task');
    div.css("background-color", "#F83F56");
    div.fadeOut(200, "swing");
}

function edit(elem) {
    var modal = $('#modal');
    var cancel = $('#cancelEdit');
    var confirm = $('#confirmEdit');
    var taskText = $(elem).html();

    $('#editInput').val(taskText);
    modal.css("display", "block");


    confirm.click(function() {
        var newTaskText = $('#editInput').val();
        var newElem = "<span class='taskText'>" + newTaskText + "</span>";
        console.log(elem);
        $(elem).replaceWith(newElem);
        console.log(elem);
        modal.css("display", "none");
    });

    cancel.click(function() {
        modal.css("display", "none");
    })

}

// to edit tasks
$('.taskText').click(function() {
    edit(this);
});

$('#add').click(function() {
    addGlobal();
});

$('#done').click(function() {
    complete(this);
});

$("#cancel").click(function() {
    cancel(this);
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
    var buttonHTML = '<button id="done" class="btn btn-link"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span></button><button id="cancel" class="btn btn-link"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>'
    $('#tasks').append(openDateDue + dueDateFormatted + openTimeDue + dueTimeFormatted + openText + txt + closeText + buttonHTML);    


    $("task #done").click(function() {
        complete(this);
    });

    $("task #cancel").click(function() {
        cancel(this);
    });

}
