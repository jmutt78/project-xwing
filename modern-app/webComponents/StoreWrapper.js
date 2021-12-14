export default class FourIQGrid extends HTMLElement {
  constructor() {
    super();
    Ext.define('User', {
      extend: 'Ext.data.Model',
      fields: [
        { name: 'firstName', type: 'string' },
        { name: 'lastName', type: 'string' },
        { name: 'age', type: 'int' },
        { name: 'eyeColor', type: 'string' },
      ],
    });

    this.store = new Ext.data.Store({
      model: 'User',
      proxy: {
        type: 'ajax',
        url: '/users.json',
        reader: {
          type: 'json',
          rootProperty: 'users',
        },
      },
    });
  }

  setStore(store) {
    this.store = store;
  }

  getStore() {
    return this.store;
  }
}

customElements.define('fouriq-grid', FourIQGrid);

// export default class DigtixStore extends HTMLElement {
//   constructor() {
//     super();
//     this.store = new Ext.data.Store();
//   }

//   setStore(store) {
//     this.store = store;
//   }

//   getStore() {
//     return this.store;
//   }
// }

// window.customElements.define('digtix-store', DigtixStore);
