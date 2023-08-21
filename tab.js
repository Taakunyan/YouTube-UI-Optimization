function injectTab(element, insertPosition) {
    if (document.getElementById('injectedTab')) return;
    tabHTML = `
    <div id="injectedTab">
        <input type="radio" name="tabName" id="tab1" checked>
        <label class="tabClass" for="tab1">Related Video</label>
        <div id="tabPage1" class="contentClass"></div>
        <input type="radio" name="tabName" id="tab2" >
        <label class="tabClass" for="tab2">Description & Comment</label>
        <div id="tabPage2" class="contentClass"></div>
        <!--
        <input type="radio" name="tabName" id="tab3" >
        <label class="tabClass" for="tab3">Description</label>
        <div id="tabPage3" class="contentClass"></div>
        -->
    </div>
    `;
    element.insertAdjacentHTML(insertPosition, tabHTML);
}

function moveElement(parent, child, to) {
    document.getElementById(to).appendChild(document.getElementById(parent).removeChild(document.getElementById(child)));
}

function removeAllIds(element){
    if(element instanceof HTMLElement){
        element.removeAttribute('id');
        for(const child of element.children)removeAllIds(child);
    }
}

function exec() {
    injectTab(document.getElementById('secondary'), 'afterbegin');
    moveElement('secondary', 'secondary-inner', 'tabPage1');
    moveElement('primary-inner', 'below', 'tabPage2');
}

function waitLoad() {
    if (document.getElementById('secondary-inner') && document.getElementById('below')) exec();
    else setTimeout(waitLoad, 1000);
}

waitLoad();
