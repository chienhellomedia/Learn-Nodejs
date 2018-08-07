const fs = require('fs');

fs.readFile('abc.txt', function (err, data) {
    if (!err)
        console.log(data.toString() );
})
console.log('End');