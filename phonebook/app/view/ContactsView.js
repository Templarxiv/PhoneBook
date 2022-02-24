var rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
    listeners: {
        cancelEdit: function (rowEditing, context) {
            // Canceling editing of a locally added, unsaved record: remove it
            if (context.record.phantom) {
                Ext.getStore('Contact').remove(context.record);
            }
        }
    }
});
Ext.define('Phonebook.view.ContactsView', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.ContactsView',
    height: 600,
    frame: true,
    padding: 10,
    title: 'Phones Book',
    margin: 10,
    store: 'Contact',
    plugins: [rowEditing],
    initComponent: function () {

        this.layout = {
            type: 'vbox',
            align: 'stretch'
        };
        this.columns = [{
            text: 'ID',
            width: 50,
            sortable: true,
            dataIndex: 'id',
            renderer: function (v, meta, rec) {
                return rec.phantom ? '' : v;
            }
        }, {
            text: 'Name',
            flex: 1,
            sortable: true,
            dataIndex: 'name',
            field: {
                xtype: 'textfield'
            }
        }, {
            text: 'Comment',
            flex: 1,
            sortable: true,
            dataIndex: 'comment',
            field: {
                xtype: 'textfield'
            }
        }];
        this.dockedItems = [{
            xtype: 'toolbar',
            items: [{
                text: 'Add',
                iconCls: 'icon-add',
                itemId: 'AddContact'
            }, '-', {
                itemId: 'delete',
                text: 'Delete',
                iconCls: 'icon-delete',
                itemId: 'RemoveContact'
            }]
        }];
        this.callParent();
    }
});