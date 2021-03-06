web.init();
web.setTimeout(6000);
web.open('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_link_target');

const closeModal = '//*[@id="accept-choices"]';
web.pause(10000);

try {
    const exist = web.isExist(closeModal);
    log.info('exist');
    log.info(exist);
    if(exist){
        log.info('modal finded');
        const el = web.findElement(closeModal);
        if(el){
            el.click();
        }
    }
} catch(e){
    log.info(e);
    log.info('modal not finded');
}

web.selectFrame('id=iframeResult');
web.click('/html/body/a');
const handles = web.getWindowHandles();
const handlesCorrect = handles && Array.isArray(handles) && handles.length > 0 && handles.length === 2;
assert.equal(handlesCorrect, true);