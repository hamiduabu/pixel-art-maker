$(function () {
    const gridArea = $('#pixel-canvas');
    const sizePicker = $('#size-picker');
    const bgColorPicker = $('#bg-color-picker');

    // Select size input

    function makeGrid() {
        const gridHeight = $('#input-height').val();
        const gridWidth = $('#input-width').val();

        for (let n = 0; n < gridHeight; n++) {
            gridArea.append('<tr></tr>');
        }
        for (let m = 0; m < gridWidth; m++) {
            $('#pixel-canvas>tr').append('<td></td>');
        }
    }

    // When size is submitted by the user, call makeGrid()

    sizePicker.submit(function (event) {
        gridArea.children().remove();
        makeGrid();
        event.preventDefault();
    });

    // Change mouse pointer to 'cell' type when over created grid

    gridArea.mouseover(function () {
        $(this).css('cursor', 'cell');
    });

    //Select background color input

    bgColorPicker.on('change', function () {
        const bgColor = bgColorPicker.val();
        $('body').css('background', bgColor);
        gridArea.css('background', 'white');
    });

    // Select color input

    gridArea.on('click', 'td', function () {
        const color = $('#color-picker').val();
        $(this).attr('style') ? $(this).removeAttr('style') : $(this).css('background', color);
    });

    // Clear color input

    $('#clear').on('click', function () {
        $('td').removeAttr('style');
    });

    // Delete Grid and reset input

    $('#reset').on('click', function () {
        gridArea.children().remove();
        const height = $('#input-height');
        const width = $('#input-width');
        height.val('1');
        width.val('1');
    });

    // Toggle 'full screen' to display grid in a larger view

    $('#hide').on('click', function () {
        $('#top').toggle('100ms', 'linear', function () {
            $('#hide').html() === 'full screen' ? $('#hide').html('normal screen'): $('#hide').html('full screen');
        });
    });
});
