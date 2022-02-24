
Ext.define('Phonebook.store.Contact', {
    extend: 'Ext.data.Store',
    requires: 'Phonebook.model.Contact',
    autoLoad: true,
    autoSync: true,
    model: 'Phonebook.model.Contact',
    proxy: {
        type: 'rest',
        url: window.API_PATH + 'contacts',
        reader: {
            type: 'json',
            rootProperty: 'data'
        },
        writer: {
            type: 'json'
        }
    }
});
