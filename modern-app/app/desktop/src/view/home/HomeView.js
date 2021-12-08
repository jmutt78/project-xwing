// 2. Define the store
Ext.create('Ext.data.Store', {
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
  // Named Store
  storeId: 'peronsStore',
});

// 3. Define the reusable component with grid
class MyGrid extends HTMLElement {
  // When the element is ready...
  connectedCallback() {
    // The components html template
    this.innerHTML = `
            <ext-grid
                title="Justin"
                height="300px"
                store="peronsStore"
                scrollable="true"
                shadow="true">
                    <ext-column
                      text="Name"
                      dataIndex="name"
                      flex="1">
                    </ext-column>
                    <ext-column
                      text="Email"
                      width="200"
                      dataIndex="email">
                    </ext-column>
                    <ext-column
                      text="Phone"
                      width="150"
                      dataIndex="phone">
                    </ext-column>
            </ext-grid>`;

    let grid = this.querySelector('ext-grid');

    // Workaround for 7.0+
    grid.ext.rowHeight = null;
  }
}
// 4. Register the component
window.customElements.define('my-grid', MyGrid);

Ext.define('ModernApp.view.home.HomeView', {
  xtype: 'homeview',
  cls: 'homeview',
  //   controller: { type: 'homeviewcontroller' },
  //   viewModel: { type: 'homeviewmodel' },
  requires: [],
  extend: 'Ext.Container',
  scrollable: true,
  height: '500px',
  html: `
      <my-grid></my-grid>
    `,
});
