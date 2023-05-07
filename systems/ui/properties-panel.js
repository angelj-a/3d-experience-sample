export function PropertiesPanel(system, selector) {

    this.selector = selector;
    this.element = document.querySelector(this.selector);

    this.hide = () => {
        this.element.hidden = true;
    };
    this.show = () => {
        this.element.hidden = false;
    };
    this.entitySelectedHandler = (event) => {
        // to do: formulario <--> componentes, inputs <--> data
    }
}