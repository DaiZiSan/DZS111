
function addTask() {
    var input = document.getElementById('todo-input');
    var newTask = input.value;
    if (newTask) {
        var li = document.createElement('li');
        li.textContent = newTask;

        var setReminderBtn = document.createElement('button');
        setReminderBtn.textContent = 'Set Reminder';
        setReminderBtn.onclick = function() {
            showReminderModal(this.parentElement);
        };

        var deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = function() {
            this.parentElement.remove();
        };

        li.appendChild(setReminderBtn);
        li.appendChild(deleteBtn);
        document.getElementById('todo-list').appendChild(li);
        input.value = '';
    }
}

function showReminderModal(taskElement) {
    var modal = document.getElementById('reminderModal');
    var taskName = document.getElementById('task-name');
    taskName.textContent = taskElement.childNodes[0].textContent;
    modal.style.display = 'block';

    window.setReminder = function() {
        var reminderTime = new Date(document.getElementById('reminder-time').value);
        var now = new Date();
        if (reminderTime > now) {
            setTimeout(function() {
                alert('Reminder: ' + taskElement.childNodes[0].textContent);
                modal.style.display = 'none';
            }, reminderTime - now);
        }
    };
}

var closeModalElements = document.getElementsByClassName('close');
for (var i = 0; i < closeModalElements.length; i++) {
    closeModalElements[i].onclick = function() {
        var modal = document.getElementById('reminderModal');
        modal.style.display = 'none';
    };
}

window.onclick = function(event) {
    var modal = document.getElementById('reminderModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};
