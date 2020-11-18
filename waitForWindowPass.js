web.init();
web.setTimeout(6000);
web.open('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_link_target');
const title = web.getTitle();

const closeModal = '//*[@id="accept-choices"]';
web.pause(10000);
try {
    const exist = web.isExist(closeModal);
    log.info('exist');
    log.info(exist);
    if(exist){
        log.info('modal finded');
        const el = web.isExist(closeModal);
        if(el){
            el.click();
        }
    }
} catch(e){
    log.info('modal not finded');
}

web.selectFrame('id=iframeResult');
web.click('/html/body/a');
web.waitForWindow("title="+title);