$('#mySchedulerStatic').scheduler();

$('#myScheduler').on('changed.fu.scheduler', function () {
    if (window.console && window.console.log) {
        window.console.log('scheduler changed.fu.scheduler: ', arguments);
    }
});

// buttons
$('#btnSchedulerEnable').on('click', function () {
    $('#myScheduler').scheduler('enable');
});

$('#btnSchedulerDisable').on('click', function () {
    $('#myScheduler').scheduler('disable');
});

$('#btnSchedulerLogValue').on('click', function () {
    var val = $('#myScheduler').scheduler('value');
    if (window.console && window.console.log) {
        window.console.log(val);
    }
});

$('#btnSchedulerSetValue').on('click', function () {
    var json = {
        "startDateTime": "2014-03-31T03:23+02:00",
        "timeZone": {
            "name": "Namibia Standard Time",
            "offset": "+02:00"
        },
        "recurrencePattern": "FREQ=MONTHLY;INTERVAL=6;BYDAY=WE;BYSETPOS=3;UNTIL=20140919;"
    };
    console.log(json);
    $('#myScheduler').scheduler('value', json);
});

$('#btnSchedulerDestroy').on('click', function () {
    var markup = $('#myScheduler').scheduler('destroy');
    console.log(markup);
    $(this).closest('.section').append(markup);
    $('#myScheduler').scheduler();
});