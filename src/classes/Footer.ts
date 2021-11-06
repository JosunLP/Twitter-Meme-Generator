export class Footer {
    /**
     * Content of the footer
     */
    public static renderContent() {
        let target = <HTMLParagraphElement>document.getElementById("footer");
        target.innerHTML = '&copy; JosunLP ' + new Date().getFullYear().toString() + ' - <a href="https://josunlp.de">JosunLP.de</a>'
    }
}