const fs = require('fs');

try {
    console.log(fs.readFileSync('abc.txt').toString());
    console.log('End');
} catch (error) {
    console.log(error);
}