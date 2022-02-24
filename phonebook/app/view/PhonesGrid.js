var phoneEditing = Ext.create('Ext.grid.plugin.RowEditing', {
    listeners: {
        cancelEdit: function (rowEditing, context) {
            // Canceling editing of a locally added, unsaved record: remove it
            if (context.record.phantom) {
                Ext.getStore('Phone').remove(context.record);
            }
        }
    }
})
Ext.define('Phonebook.view.PhonesGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.PhonesGrid',
    plugins: [phoneEditing],
    hideHeaders: true,
    store: 'Phone',
    columns: [{
        text: 'Phones',
        flex: 1,
        dataIndex: 'phone',
        field: {
            xtype: 'textfield'
        }
    }]
});