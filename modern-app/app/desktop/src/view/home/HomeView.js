// Ext._find = require('../../../../../webComponents/DigtixGrid');

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
