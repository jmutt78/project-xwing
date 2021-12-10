class MyGrid extends HTMLElement {
  constructor() {
    super();
    const data = this.data;

    const gridContainer = document.createElement('div');

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
        <ext-column text="Name" dataIndex="name" flex="1"> </ext-column>
        <ext-column text="Email" width="200" dataIndex="email"> </ext-column>
        <ext-column text="Phone" width="150" dataIndex="phone"> </ext-column>
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

const store = {
  fields: ['name', 'email', 'phone'],
  data: [
    {
      name: 'Lisa',
      email: 'lisa@simpsons.com',
      phone: '555-111-1224',
    },
    {
      name: 'Bart',
      email: 'bart@simpsons.com',
      phone: '555-222-1234',
    },
    {
      name: 'Homer',
      email: 'home@simpsons.com',
      phone: '555-222-1244',
    },
    {
      name: 'Marge',
      email: 'marge@simpsons.com',
      phone: '555-222-1254',
    },
  ],

  storeId: 'simpsonsStore',
};

Ext.define('ModernApp.view.home.HomeView', {
  xtype: 'homeview',
  cls: 'homeview',
  controller: { type: 'homeviewcontroller' },
  viewModel: { type: 'homeviewmodel' },
  requires: [],
  extend: 'Ext.Container',
  scrollable: true,
  height: '500px',
  html: `
      <my-grid data=${JSON.stringify(store)}></my-grid>
    `,
});
