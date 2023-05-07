AFRAME.registerComponent('add-entities', {
    schema: {
      primitive: {default: 'box'},
      centerOfMassesOffsetY: {default: 1}
    },
    events: {
      click: function (evt) {
        let position = evt.detail.intersection.point;
        position.y = this.data.centerOfMassesOffsetY;

        let newEntity = this.createEntity(position);
        this.el.sceneEl.appendChild(newEntity);
      }
    },
    createEntity: function(position) {
      let newEntity = document.createElement('a-entity');

      newEntity.setAttribute('geometry', 'primitive', this.data.primitive);
      newEntity.setAttribute('position', position);
      newEntity.classList.add('selectable');
      return newEntity;
    }
});