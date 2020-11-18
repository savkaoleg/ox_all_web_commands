web.init();
web.setTimeout(6000);
const caps = web.getCapabilities();
const capsValid = caps && caps.browserName;
assert.equal(capsValid, true, 'Caps not valid');