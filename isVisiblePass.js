web.init();
web.setTimeout(6000);
web.open("https://www.wikipedia.org/");
const visible = web.isVisible("#searchLanguage");
assert.equal(visible, false);

const h1Strong = '#www-wikipedia-org > div.central-textlogo > h1 > strong';
const visible2 = web.isVisible(h1Strong);
assert.equal(visible2, true);