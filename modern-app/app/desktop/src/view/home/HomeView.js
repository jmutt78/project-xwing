class MyGrid extends HTMLElement {
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
      <ext-toolbar docked="top">
      <ext-button text="Aaron's button" ui="toolbar-default" ontap="toolbar.buttonHandler"></ext-button>
      <ext-spacer></ext-spacer>
      <ext-spacer></ext-spacer>
      <ext-searchfield ui="faded" placeholder="Search"></ext-searchfield>
      </ext-toolbar>
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

//fix the errors when loading the app
// add it to a basic react app
// package it up
//package and handit over to the team
