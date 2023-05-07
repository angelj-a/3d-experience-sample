AFRAME.registerComponent('edit-properties', {
    schema: {},
    init: function() {
        this.selectableEntities = document.querySelectorAll('.selectable');
        this.eventHandlers = Array(this.selectableEntities.length);

        let _this = this;
        for (var i = 0; i < this.selectableEntities.length; i++) {
            this.selectableEntities[i].setAttribute('event-set__mouseenter', 'material.opacity: 0.7');
            this.selectableEntities[i].setAttribute('event-set__mouseleave', 'material.opacity: 1');

            this.eventHandlers[i] = function(event) {
                // let _target = event.target;
                // Notifica a la escena de que fue seleccionado un objeto para ser modificado
                _this.el.sceneEl.emit('entity-selected', event.target);
            }
            this.selectableEntities[i].addEventListener('click', this.eventHandlers[i]);
        }
    },
    remove: function() {
        for (var i = 0; i < this.selectableEntities.length; i++) {
            this.selectableEntities[i].removeEventListener('click', this.eventHandlers[i]);
        }
    }
});