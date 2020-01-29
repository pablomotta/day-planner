var workHoursArr = [
    { id: '0', time: '9AM', hourInt: 9 },
    { id: '1', time: '10AM', hourInt: 10 },
    { id: '2', time: '11AM', hourInt: 11 },
    { id: '3', time: '12PM', hourInt: 12 },
    { id: '4', time: '1PM', hourInt: 13 },
    { id: '5', time: '2PM', hourInt: 14 },
    { id: '6', time: '3PM', hourInt: 15 },
    { id: '7', time: '4PM', hourInt: 16 },
    { id: '8', time: '5PM', hourInt: 17 }
];

// create calendar time slots
function addTimeSlots(schedule) {
    schedule.forEach(item => {
        var $div = $('<div class="hours col-md-1 col-sm-1"></div>');
        var $input = $('<input>');
        var $btn = $(
            '<button class="save-button col-md-1 col-sm-1">Save</button>'
        );
        var hour = item.time;
        var dataTarget = item.id;

        $div.text(hour);

        $input.attr({
            type: 'text',
            target: dataTarget,
            id: `input-${dataTarget}`
        });

        $btn.attr({
            target: dataTarget,
            id: `button-${dataTarget}`
        });
        $input.addClass('events col-md-10 col-sm-10');

        $('#time-slots').append($div, $input, $btn);
        $btn.prop('disabled', true);
        var localData = localStorage.getItem(`input-${dataTarget}`);
        $input.val(localData);
    });
}
addTimeSlots(workHoursArr);

//enable button related to input form.
$(document).on('click', '.events', function() {
    var buttonNum = $(this).attr('target');
    var $selectedButton = $(`#button-${buttonNum}`);
    $selectedButton.prop('disabled', false);
});

//save input value to local storage
$(document).on('click', '.save-button', function() {
    var inputNum = $(this).attr('target');
    var $selectedInput = $(`#input-${inputNum}`);
    var inputValue = $selectedInput.val();
    var inputTarget = 'input-' + inputNum;
    localStorage.setItem(inputTarget, inputValue);
});

$('.events').on('click', function() {
    $('.save-button').prop('disabled', true);
});

// loop each work hour and add appropriate css class based on past, present or future.
workHoursArr.forEach(function(item) {
    var $inputSelected = $(`#input-${item.id}`);
    var currentHour = moment().format('k');
    var currentHourInt = parseInt(currentHour);
    var calendarHour = item.hourInt;

    if (currentHourInt === calendarHour) {
        $inputSelected.addClass('present');
    }
    if (currentHourInt > calendarHour) {
        $inputSelected.addClass('past');
    }
    if (currentHourInt < calendarHour) {
        $inputSelected.addClass('future');
    }
});
