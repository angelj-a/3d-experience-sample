AFRAME.registerComponent('add-entities', {
    schema: {
      primitive: {default: 'box'},
      centerOfMassesOffsetY: {default: 1}
    },
    events: {
      click: function (evt) {
        var newEntity = document.createElement('a-entity');
        var newPosition = evt.detail.intersection.point;
        newPosition.y = this.data.centerOfMassesOffsetY;

        newEntity.setAttribute('geometry', 'primitive', this.data.primitive);
        newEntity.setAttribute('position', newPosition);
        newEntity.setAttribute('class', 'selectable');

        this.el.sceneEl.appendChild(newEntity);

        // to-do refrescar raycaster
      }
    }
});