Ext.define('Phonebook.view.Viewport', {
    extend: 'Ext.container.Viewport',
    layout: 'fit',
    padding:10,
    margin:40,
    requires: [
        'Phonebook.view.ContactsView',
        'Phonebook.view.ContactView'
    ],

    initComponent: function () {
        this.items = {
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [{
                width: 600,
                xtype: 'panel',
                layout: {
                    type: 'hbox',
                    align: 'stretch'
                },
                items: [{
                    xtype: 'ContactsView',
                    width: 300,
                }, {
                    xtype: 'ContactView',
                    width: 300,
                }]
            }]
        };

        this.callParent();
    }
});