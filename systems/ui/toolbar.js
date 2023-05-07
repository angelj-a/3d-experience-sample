export const NO_ACTION = 0;
export const ACTION_EDIT_PROPERTY = 1;
export const ACTION_ADD_ENTITY = 2;
export const ACTION_REMOVE_ENTITY = 3;

export function Toolbar(system) {
    this.system = system;
    this.actions = {
        'action-edit-properties': ACTION_EDIT_PROPERTY,
        'action-add-entity': ACTION_ADD_ENTITY,
        'action-remove-entity': ACTION_REMOVE_ENTITY
    };

    this.selectedPrimitive = document.querySelector('#add-entity-list option:checked').value;

    // Selección de acción Editar propiedades de entidad
    document.querySelector('#action-edit-properties').addEventListener('click', (event) => {
        system.setMode(ACTION_EDIT_PROPERTY);
    });
   
    // Selección de acción Agregar entidades
    document.querySelector('#action-add-entity').addEventListener('click', (event) => {
        this.system.setMode(ACTION_ADD_ENTITY);
    });
    
    // Selección de acción Borrar entidades
    document.querySelector('#action-remove-entity').addEventListener('click', (event) => {
        this.system.setMode(ACTION_REMOVE_ENTITY);
    });

    // Selección de primitiva usada por Agregar entidades
    document.querySelector('#add-entity-list').addEventListener('change', (event) => {
        this.selectedPrimitive = event.target.value;
        this.system.changePrimitive(this.selectedPrimitive);
    });

    // Getters
    this.getSelectedPrimitive = () => this.selectedPrimitive;
    this.getSelectedAction = () => {
        let selectedOption = document.querySelector('#app-toolbar [name="actions"]:checked');
        if (selectedOption !== null) {
            return this.actions[selectedOption.value];
        }
        return NO_ACTION
    };
}