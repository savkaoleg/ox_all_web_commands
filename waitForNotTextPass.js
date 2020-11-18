web.init();
web.setTimeout(6000);
web.open("https://www.wikipedia.org/");
const h1Strong = '#www-wikipedia-org > div.central-textlogo > h1 > strong';
const textElem = web.findElement(h1Strong);

const text = web.getText(textElem);

web.waitForNotText(h1Strong, text+'-not-valid');