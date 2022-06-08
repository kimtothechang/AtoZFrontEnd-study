function Nodes({ $app, initialState }) {
  this.state = initialState;
  this.$target = document.createElement('ul');
  this.$target.setAttribute('class', 'Nodes');

  $app.appendChild(this.$target);

  this.setState = (nextState) => {
    this.state = nextState;

    this.render();
  };

  this.render = () => {
    if (this.state.nodes) {
      const nodesTemplate = this.state.nodes
        .map((node) => {
          return `
          <div class="Node" data-node-id="${node.id}">
            <img src="./img/icon.jpeg" />
            <div>${node.name}</div>
          </div>
        `;
        })
        .join('');

      this.$target.innerHTML = nodesTemplate;
    }
  };

  this.render();
}

export default Nodes;
