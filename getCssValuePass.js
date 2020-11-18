web.init();
web.setTimeout(6000);
web.open("https://www.wikipedia.org/");
const h1Strong = '#www-wikipedia-org > div.central-textlogo > h1 > strong';
const color = web.getCssValue(h1Strong, "color");
const validColor = color && typeof color === 'string' && color === 'rgba(0,0,0,1)';
assert.equal(validColor, true);