web.init();
web.setTimeout(6000);
web.open('wikipedia.org');
const h1Strong = '#www-wikipedia-org > div.central-textlogo > h1 > strong';
web.waitForVisible(h1Strong)