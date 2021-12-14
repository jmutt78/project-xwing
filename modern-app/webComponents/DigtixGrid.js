export default class MyGrid extends HTMLElement {
  constructor() {
    super();

    const gridContainer = document.createElement('div');
    // console.log(data);
    // const cols = JSON.parse(data);
    // this.store = Ext.create('Ext.data.Store', data);

    gridContainer.classList.add('digtix-grid-container');

    gridContainer.innerHTML = ``;

    // gridContainer.innerHTML = `
    //  <ext-container padding="10" layout="fit" fitToParent="true" height="100%" width="100%">
    //   <ext-grid
    //     title="Digtix Test Web Components Grid"

    //     store=${this.store}
    //     height="300px"
    //     extname="grid"
    //     multiColumnSort="true"
    //   >
    //   ${this.cols.fields
    //     .map(
    //       (item) => `
    //   <ext-column text=${
    //     item[0].toUpperCase() + item.substring(1)
    //   } dataIndex=${item} flex="1"> </ext-column>
    //   `
    //     )
    //     .join('')}
    //   </ext-grid>
    // </ext-container>
    // `;

    this.appendChild(gridContainer);
  }

  getData(data) {
    console.log(data);
    // return data;
  }
}

window.customElements.define('my-grid', MyGrid);

// Ext.create('Ext.data.Store', store);
// this.cols = store;
