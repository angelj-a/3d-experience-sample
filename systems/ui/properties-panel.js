export function PropertiesPanel(system, selector) {

    this.selector = selector;
    this.hide = () => {
        document.querySelector(this.selector).hidden = true;
    }
    this.show = () => {
        document.querySelector(this.selector).hidden = false;
    }
}