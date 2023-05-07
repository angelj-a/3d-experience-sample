AFRAME.registerComponent('add-entities', {
    schema: {
      primitive: {default: 'box'},
      color: {default: 'blue'},
      centerOfMassesOffsetY: {default: 1}
    },
    // doc: https://aframe.io/docs/1.4.0/core/component.html#events
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
      newEntity.setAttribute('material', 'color', this.data.color);
      newEntity.setAttribute('position', position);

      newEntity.classList.add('selectable');
      return newEntity;
    }
});