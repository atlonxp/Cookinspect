const process = require('process');
const { ConsentString } = require('consent-string');

const consentData = new ConsentString(process.argv[2]);
console.log(JSON.stringify(consentData, null))
