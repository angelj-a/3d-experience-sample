import { Toolbar, ACTION_EDIT_PROPERTY, ACTION_ADD_ENTITY, ACTION_REMOVE_ENTITY, NO_ACTION } from './ui/toolbar.js';
import { PropertiesPanel } from './ui/properties-panel.js';

AFRAME.registerSystem('entities-editor', {
    init: function () {
        this.ui = {
            toolbar: new Toolbar(this),
            propertiesPanel: new PropertiesPanel(this, '#app-entity-properties')
        }
        this.supportingElement = this.sceneEl.querySelector('#ground');
        this.models = {
            entities: {
                'ground': this.supportingElement
            }
        }

        this.state = {
            enabledComponent: '',
            currentMode: null
        }
        let _initialMode = this.ui.toolbar.getSelectedAction();
        if (_initialMode !== NO_ACTION) {
            this.setMode(_initialMode);
        }
    },
  
    setMode: function(newMode) {
        // Quita componente con accion actual
        this.supportingElement.removeAttribute(this.state.enabledComponent);

        // Agrega el componente correspondiente a la acción elegida
        switch (newMode) {
            case ACTION_EDIT_PROPERTY:
                this.state.enabledComponent = 'edit-properties';
                this.supportingElement.setAttribute('edit-properties', 'formSelector', '#app-entity-properties');
                this.sceneEl.querySelector('[raycaster]').setAttribute('raycaster', 'objects', '.selectable');
                this.ui.propertiesPanel.show();
                break;
            case ACTION_ADD_ENTITY:
                this.state.enabledComponent = 'add-entities';
                this.sceneEl.querySelector('[raycaster]').setAttribute('raycaster', 'objects', `#${this.supportingElement.id}`);
                this.supportingElement.setAttribute('add-entities', 'primitive', this.ui.toolbar.getSelectedPrimitive());
                this.ui.propertiesPanel.hide();
                break;
            case ACTION_REMOVE_ENTITY:
                this.state.enabledComponent = 'remove-entities';
                this.supportingElement.setAttribute('remove-entities', '');
                this.sceneEl.querySelector('[raycaster]').setAttribute('raycaster', 'objects', '.selectable');
                this.ui.propertiesPanel.hide();
                break;
            default:
                console.warn('Unknown action');
        }
        // Establece el modo actual
        this.state.currentMode = newMode;
    },

    changePrimitive: function(newPrimitive) {
        if (this.state.currentMode == ACTION_ADD_ENTITY) {
            this.supportingElement.setAttribute('add-entities', 'primitive', newPrimitive);
        }
    }
  });