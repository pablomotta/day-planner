var workHoursArr = [
    { id: '0', time: '9AM' },
    { id: '1', time: '10AM' },
    { id: '2', time: '11AM' },
    { id: '3', time: '12PM' },
    { id: '4', time: '1PM' },
    { id: '5', time: '2PM' },
    { id: '6', time: '3PM' },
    { id: '7', time: '4PM' },
    { id: '8', time: '5PM' }
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

$('.save-button').on('click', function() {
    $('.save-button').prop('disabled', true);
});

var time = moment().format('hA');
console.log(time);
// console.log(moment().isAfter('hA'));

if ('7PM' < time) {
    console.log('same hour');
}
