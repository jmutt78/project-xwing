// var grid = document.createElement('my-grid');
// grid.getData(store);
// console.log(grid);
// // grid.getGrid().setDataProxy('rest', 'api/users');
// // document.body.appendChild(grid);

Ext.define('ModernApp.view.home.HomeView', {
  xtype: 'homeview',
  cls: 'homeview',
  controller: { type: 'homeviewcontroller' },
  viewModel: { type: 'homeviewmodel' },
  requires: [],
  extend: 'Ext.Container',
  scrollable: true,
  height: '500px',
  listeners: {
    painted: 'onbeforeshow',
  },
  html: `
      <fouriq-grid></fouriq-grid>
    `,
});

// var grid = document.querySelector('my-grid');
// console.log(grid);
