const caps = require('../assets/caps');

web.init();
web.setTimeout(6000);
web.open("https://www.wikipedia.org/");
const text = web.getText("#searchLanguage > option:nth-child(24)");
const value = web.getValue("#searchLanguage > option:nth-child(24)");
const visible = web.isVisible("#searchLanguage > option:nth-child(24)");
assert.equal(visible, false);


const visible2 = web.isVisible(caps.h1Strong);
assert.equal(visible2, true);