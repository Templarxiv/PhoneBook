Ext.define('Phonebook.model.Contact', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int',
    }, {
        name: 'name',
        defaultValue: "Contact"
    }, 'comment', 'phones'],
    validations: [{
        type: 'length',
        field: 'name',
        min: 1
    }]
});
