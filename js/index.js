var workHoursArr = [
    { id: '0', time: '9AM', event: 'add event here' },
    { id: '1', time: '10AM', event: 'add event here' },
    { id: '2', time: '11AM', event: 'add event here' },
    { id: '3', time: '12PM', event: 'add event here' },
    { id: '4', time: '1PM', event: 'add event here' },
    { id: '5', time: '2PM', event: 'add event here' },
    { id: '6', time: '3PM', event: 'add event here' },
    { id: '7', time: '4PM', event: 'add event here' },
    { id: '8', time: '5PM', event: 'add event here' }
];
// store data set to local storage
localStorage.setItem('workHoursArr', JSON.stringify(workHoursArr));
// retrieve data from local storage
var scheduleFromLocalStorage = JSON.parse(localStorage.getItem('workHoursArr'));
// create calendar time slots
function addTimeSlots(schedule) {
    schedule.forEach(item => {
        var $div = $('<div class="hours col-md-1"></div>');
        var $input = $('<input>');
        var $btn = $('<button class="save-button col-md-1">Save</button>');
        var hour = item.time;
        var event = item.event;
        var dataTarget = item.id;

        $div.text(hour);

        $input.attr({
            type: 'text',
            placeholder: event,
            target: dataTarget
        });

        $btn.attr({
            target: dataTarget,
            id: `button-${dataTarget}`
        });
        $btn.prop('disabled', true);
        $input.addClass('events col-md-10');

        $('#time-slots').append($div, $input, $btn);
    });
}
addTimeSlots(scheduleFromLocalStorage);

// save text from input to placeholder when save button is clicked.
function updateTimeSlot() {
    var buttonNum = $(this).attr('target');
    console.log(buttonNum);
    $(`#button-${buttonNum}`)
        // .attr(`target=${buttonNum}`)
        .prop('disabled', false);
    $();
}

$(document).on('click', '.events', updateTimeSlot);

// var time = moment().format('hA');
// console.log(time);
