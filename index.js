const cMInterface = require('./lib/inq');
const figlet = require('figlet')

figlet('malcontentManagement', function(err, data) {
    if (err) {
        console.log('something went wrong');
        console.dir(err);
        return;
    }
    console.log('\n');
    console.log(data);
});

cMInterface();
