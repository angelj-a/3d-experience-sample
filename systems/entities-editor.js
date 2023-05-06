import { Toolbar, ACTION_EDIT_PROPERTY, ACTION_ADD_ENTITY, ACTION_REMOVE_ENTITY } from './ui/toolbar.js';

AFRAME.registerSystem('entities-editor', {
    init: function () {
        this.toolbar = new Toolbar(this);
        this.componentAddEntity = this.sceneEl.querySelector('[add-entities]');
        this.componentAddEntity.setAttribute('add-entities', 'primitive', this.toolbar.getSelectedPrimitive());
    },
  
    changeMode: function(newMode) {
        var mode = undefined;
        switch (newMode) {
            case ACTION_EDIT_PROPERTY:
                mode = 'edit-property';
                break;
            case ACTION_ADD_ENTITY:
                mode = 'add-entity';
                break;
            case ACTION_REMOVE_ENTITY:
                mode = 'edit-property';
                break;
            default:
                console.warn('Unknown action');
        }
    },

    changePrimitive: function(newPrimitive) {
        this.componentAddEntity.setAttribute('add-entities', 'primitive', newPrimitive);
    }
  });