$(document).ready(function() {
    let taskCount = 0;

    $('#addTaskBtn').click(function() {
        const taskName = $('#taskName').val().trim();
        const taskDescription = $('#taskDescription').val().trim();

        if (!taskName || !taskDescription) {
            alert("Please fill in both Task Name and Task Description.");
            return;
        }

        taskCount++;

        const taskRow = `
            <tr>
                <td>${taskCount}</td>
                <td>${taskName}</td>
                <td>${taskDescription}</td>
                <td><button class="btn btn-danger btn-sm deleteBtn">Delete</button></td>
            </tr>
        `;

        $('table tbody').append(taskRow);

        $('#taskName').val('');
        $('#taskDescription').val('');
    });

    $('table').on('click', '.deleteBtn', function() {
        const isConfirmed = confirm("Are you sure you want to delete this task?");
        if (isConfirmed) {
            $(this).closest('tr').remove();
            updateItemNumbers();
        }
    });

    function updateItemNumbers() {
        taskCount = 0;
        $('table tbody tr').each(function() {
            taskCount++;
            $(this).find('td:first').text(taskCount);
        });
    }
});
