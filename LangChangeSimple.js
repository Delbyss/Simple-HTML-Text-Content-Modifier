const initLang = await fetch("initLang.json").then((response) => {
    return response.json();
});

function initDomSelectorOption() {
    const inclu = initLang.optionGlobal.selectorCssInclu ? initLang.optionGlobal.selectorCssInclu : undefined
    const exclu = initLang.optionGlobal.selectorCssExclu ? initLang.optionGlobal.selectorCssExclu : undefined
    const selector = `:is(${inclu}) :not(${exclu})`
    return document.querySelectorAll(selector)

}


async function initHTMLLang(theLang, name) {


    let domPageList = initDomSelectorOption()
    let iLangText = 0
    let langSelected = name ? theLang.langSection.find(element => element === name) || theLang.langSection[0] : theLang.langSection[0];

    
    domPageList.forEach(elementDomPage => {


        elementDomPage.childNodes.forEach(elementChildPage => {

            if (elementChildPage.nodeType == 3) {
                if (elementChildPage.nodeValue.trim()) {
                    console.log(elementChildPage.textContent = langSelected.text[iLangText])
                    iLangText ++
                }
            }
        });
    })
}

async function callLang(tagLang, name) {
    let fileLangSelected = initLang.langListInfo.find(item => item.tag === tagLang).file

    await fetch(fileLangSelected)
        .then(response => response.json())
        .then((theLang) => {
            initHTMLLang(theLang, name)
        });

        }


callLang("fr", "")


/* test */
