$(document).ready(function() {
    // Select the list where to-do tasks are
    var $todoList = $('#todo-list');

    // Double-click event handler for each list item
    $todoList.on('dblclick', 'li', function() {
        var $li = $(this);
        var originalText = $li.text();

        // Create an input element with the original text
        var $input = $('<input type="text" class="edit-input">').val(originalText);

        // Replace the list item's content with the input field
        $li.html($input);

        // Focus on the new input field
        $input.focus();

        // Function to save the changes
        function saveTask() {
            var newText = $input.val().trim();
            if (newText !== '') {
                // Replace the input field with the new text
                $li.text(newText);
            } else {
                // If the input is empty, revert to the original text
                $li.text(originalText);
            }
        }

        // Event handler for when the input loses focus (blur event)
        $input.on('blur', function() {
            saveTask();
        });

        // Event handler for keydown event on the input field
        $input.on('keydown', function(event) {
            // Check if the pressed key is Enter (key code 13)
            if (event.which === 13) {
                saveTask();
            }
        });
    });
});