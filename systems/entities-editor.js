import { Toolbar, ACTION_EDIT_PROPERTY, ACTION_ADD_ENTITY, ACTION_REMOVE_ENTITY } from './ui/toolbar.js';

AFRAME.registerSystem('entities-editor', {
    init: function () {
        this.ui = {
            toolbar: new Toolbar(this)
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
    },
  
    changeMode: function(newMode) {
        this.supportingElement.removeAttribute(this.state.enabledComponent);

        switch (newMode) {
            case ACTION_EDIT_PROPERTY:
                this.state = {
                    enabledComponent: 'edit-properties',
                    currentMode: ACTION_EDIT_PROPERTY
                };
                break;
            case ACTION_ADD_ENTITY:
                this.state = {
                    enabledComponent: 'add-entities',
                    currentMode: ACTION_ADD_ENTITY
                };
                this.supportingElement.setAttribute('add-entities', 'primitive', this.ui.toolbar.getSelectedPrimitive());
                break;
            case ACTION_REMOVE_ENTITY:
                this.state = {
                    enabledComponent: 'remove-entities',
                    currentMode: ACTION_REMOVE_ENTITY
                };
                break;
            default:
                console.warn('Unknown action');
        }
    },

    changePrimitive: function(newPrimitive) {
        if (this.state.currentMode == ACTION_ADD_ENTITY) {
            this.supportingElement.setAttribute('add-entities', 'primitive', newPrimitive);
        }
    }
  });