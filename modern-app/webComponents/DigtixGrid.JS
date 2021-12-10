import '../node_modules/@sencha/ext-web-components/src/ext-grid.component';
import '../node_modules/@sencha/ext-web-components/src/ext-column.component';
import '../node_modules/@sencha/ext-web-components/src/ext-container.component';

export default class MyGrid extends HTMLElement {
  constructor() {
    super();
    const data = this.data;
    const gridContainer = document.createElement('div');
    const cols = JSON.parse(data);

    gridContainer.classList.add('digtix-grid-container');

    gridContainer.innerHTML = `
     <ext-container padding="10" layout="fit" fitToParent="true" height="100%" width="100%">
      <ext-grid
        title="Digtix Test Web Components Grid"
        store=${data}
        height="300px"
        extname="grid"
        multiColumnSort="true"
      >
      ${cols.fields
        .map(
          (item) => `
      <ext-column text=${
        item[0].toUpperCase() + item.substring(1)
      } dataIndex=${item} flex="1"> </ext-column>
      `
        )
        .join('')}
      </ext-grid>
    </ext-container>
    `;

    this.appendChild(gridContainer);
  }

  get data() {
    return this.getAttribute('data') || '';
  }
}

window.customElements.define('my-grid', MyGrid);
