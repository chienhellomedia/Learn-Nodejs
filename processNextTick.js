function now(txt) {
    console.log(new Date().toLocaleTimeString() + ' ' + txt);
}

function wait(miliSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + miliSeconds) {}
}

// process.nextTick(function(){
//     now('> Do this task at the end of event queue');
// });
// now('> Start to wait');
// now('> Do other task');
// // wait(1000);
// now('> Do other task2');

now('> Start to wait');
setTimeout(function() {
    now('> End of waiting');
}, 5000);
now('> Do other task');