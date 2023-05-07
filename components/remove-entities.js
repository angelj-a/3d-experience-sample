AFRAME.registerComponent('remove-entities', {
    schema: {},
    init: function() {
        this.removableEntities = document.querySelectorAll('.selectable');
        this.eventHandlers = Array(this.removableEntities.length);

        for (var i = 0; i < this.removableEntities.length; i++) {
            // Agrega un efecto de seleccion de la entidad
            this.removableEntities[i].setAttribute('event-set__mouseenter', 'material.opacity: 0.7');
            this.removableEntities[i].setAttribute('event-set__mouseleave', 'material.opacity: 1');

            this.eventHandlers[i] = function(event) {
                let _target = event.target;
                _target.parentNode.removeChild(_target);
            }
            this.removableEntities[i].addEventListener('click', this.eventHandlers[i]);
        }
    },
    remove: function() {
        // Elimina los manejadores de eventos asociados a cada elemento
        for (var i = 0; i < this.removableEntities.length; i++) {
            this.removableEntities[i].removeEventListener('click', this.eventHandlers[i]);
        }
    }
});