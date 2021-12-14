Ext.define('ModernApp.view.home.HomeViewController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.homeviewcontroller',
  initViewModel: function () {},
  onbeforeshow: function () {
    var grid = document.querySelector('fouriq-grid');
    const store = {
      fields: ['name', 'email', 'phone'],
      data: [
        {
          name: 'Lisa',
          email: 'lisa@simpsons.com',
          phone: '555-111-1224',
        },
        {
          name: 'Barts',
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

    grid.setStore(store);
    console.log(grid.getStore());
  },
});
