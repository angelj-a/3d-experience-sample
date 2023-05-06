export const ACTION_EDIT_PROPERTY = 0;
export const ACTION_ADD_ENTITY = 1;
export const ACTION_REMOVE_ENTITY = 2;

export function Toolbar(system) {
    this.mode = ACTION_ADD_ENTITY;
    this.selectedPrimitive = document.querySelector('#add-entity-list option:checked').value;

    document.querySelector('#action-edit-properties').addEventListener('click', (event) => {
        this.mode = ACTION_EDIT_PROPERTY;
        system.changeMode(ACTION_EDIT_PROPERTY);
    });
   
    document.querySelector('#action-add-entity').addEventListener('click', (event) => {
        this.mode = ACTION_ADD_ENTITY;
        system.changeMode(ACTION_ADD_ENTITY);
    });
    
    document.querySelector('#action-remove-entity').addEventListener('click', (event) => {
        this.mode = ACTION_REMOVE_ENTITY;
        system.changeMode(ACTION_REMOVE_ENTITY);
    });

    document.querySelector('#add-entity-list').addEventListener('change', (event) => {
        this.selectedPrimitive = event.target.value;
        system.changePrimitive(this.selectedPrimitive);
    });

    this.getSelectedPrimitive = () => this.selectedPrimitive;
    this.getMode = () => this.mode;
}