export default class Page {

    open (path) {
        return browser.url(`https://qa-task.backbasecloud.com/${path}`)
    }

}
