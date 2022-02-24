

Ext.define('Phonebook.store.Phone', {
    extend: 'Ext.data.Store',
    requires: 'Phonebook.model.Phone',    
    autoLoad: false,
    autoSync: true,
    model: 'Phonebook.model.Phone',
    proxy: {
        type: 'rest',
        url: '',
        reader: {
            type: 'json',
            rootProperty: 'data'
        },
        writer: {
            type: 'json'
        }
    }
});