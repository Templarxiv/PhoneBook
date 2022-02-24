
Ext.define('Phonebook.view.ContactView', {
    extend: 'Ext.form.Panel',
    alias: 'widget.ContactView',
    height: 600,
    store: 'Contact',
    frame: true,
    padding: 10,
    margin:10,
    title: 'Contact',
    activeRecord: null,
    defaultType: 'textfield',
    hidden: true,
    bodyPadding: 5,
    fieldDefaults: {
        anchor: '100%',
        labelAlign: 'right'
    },
    requires: [
        'Phonebook.view.PhonesGrid',
    ],
    initComponent: function () {
        this.activeRecord = null,
            // this.layout = {
            //     type: 'vbox',
            //     align: 'right',
            //     pack: 'center'
            // };
            this.items = [{
                fieldLabel: 'Name',
                name: 'name',
                allowBlank: false
            }, {
                fieldLabel: 'Comment',
                name: 'comment',
                allowBlank: true
            },
            {
                xtype: 'fieldset',
                title: 'Phones',
                layout: 'anchor',
                defaults: {
                    anchor: '100%'
                },
                items: [
                    {
                        xtype: 'toolbar',
                        items: [{
                            text: 'Add',
                            iconCls: 'icon-add',
                            itemId: 'AddPhone'
                        },
                        {
                            itemId: 'delete',
                            text: 'Delete',
                            iconCls: 'icon-delete',
                            itemId: 'RemovePhone'
                        }]
                    },
                    {
                        itemId: 'phones',
                        xtype: 'PhonesGrid',
                        height: 330,
                        // flex: 1,
                        margins: '0 0 10 0'
                    }]
            }
            ];
        this.dockedItems = [{
            xtype: 'toolbar',
            dock: 'bottom',
            ui: 'footer',
            items: ['->', {
                iconCls: 'icon-save',
                itemId: 'save',
                text: 'Save',
                disabled: true,
                scope: this,
                itemId: 'SaveContact'
            }, {
                    iconCls: 'icon-reset',
                    text: 'Reset',
                    scope: this,
                    itemId: 'ResetContact'
                }]
        }];
        this.callParent();
    }
});