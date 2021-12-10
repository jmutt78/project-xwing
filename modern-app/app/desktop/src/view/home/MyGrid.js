// import template from './HomeView.html';

// Ext.require(['Ext.grid.plugin.HeaderReorder']);

// export default class MyGrid {
//   constructor() {
//     super();
//     this.store = Ext.create('Ext.data.Store', {
//       fields: ['name', 'email', 'phone'],
//       data: [
//         {
//           name: 'Tests',
//           email: '@test.com',
//           phone: '555-111-1224',
//         },
//         {
//           name: 'Testers',
//           email: '@test.com',
//           phone: '555-222-1234',
//         },
//         {
//           name: 'Test Me',
//           email: 'test.com',
//           phone: '555-222-1244',
//         },
//         {
//           name: 'Testsssss',
//           email: 'test.com',
//           phone: '555-222-1254',
//         },
//       ],

//       storeId: 'peronsStore',
//     });

//     this.innerHTML = template;
//   }
// }

Ext.create('Ext.data.Store', {
  fields: ['name', 'email', 'phone'],
  data: [
    {
      name: 'Tests',
      email: '@test.com',
      phone: '555-111-1224',
    },
    {
      name: 'Testers',
      email: '@test.com',
      phone: '555-222-1234',
    },
    {
      name: 'Test Me',
      email: 'test.com',
      phone: '555-222-1244',
    },
    {
      name: 'Testsssss',
      email: 'test.com',
      phone: '555-222-1254',
    },
  ],

  storeId: 'peronsStore',
});

Ext.create('Ext.data.Store', {
  store: { type: 'homeviewstore' },
});

Ext.define('Grid', {
  extend: 'ModernApp.view.home.Grid.js',
});

export default class MyGrid extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
	<ext-container
    padding="10"
    layout="fit"
    fitToParent="true"
    height="100%"
    width="100%"
>

            <ext-grid
                title="Digtix Test Web Components Grid"
                height="300px"
                store="{ type: 'homeviewstore' }"
                scrollable="true"
				extname="grid"
    			multiColumnSort="true"
    			shadow="true"
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
            </ext-grid>
			</ext-container>`;
  }
}
