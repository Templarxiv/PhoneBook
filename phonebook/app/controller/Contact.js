Ext.define('Phonebook.controller.Contact', {
    extend: 'Ext.app.Controller',

    refs: [{
        ref: 'ContactView',
        selector: 'ContactView'
    }],
    stores: ['Contact', 'Phone'],
    init: function () {
        this.control({
            'button#SaveContact': {
                click: this.onSave
            },
            'button#ResetContact': {
                click: this.onReset
            },
            'button#AddPhone': {
                click: this.onAddClick
            },
            'button#RemovePhone': {
                click: this.onDeleteClick
            }
        });
    },
    setActiveRecord: function (record) {
        this.activeRecord = record;
        if (record) {
            Ext.ComponentQuery.query('button#SaveContact')[0].enable();
            this.getContactView().loadRecord(record);
            var url = window.API_PATH + 'contacts/' + record.getId() + '/phones';
            this.getPhoneStore().proxy.url = url;
            this.getPhoneStore().load();
            this.getContactView().setVisible(true);
        } else {
            Ext.ComponentQuery.query('button#SaveContact')[0].disable();
            this.getContactView().form.reset();
        }
    },
    onSave: function () {
        var active = this.activeRecord,
            form = this.getContactView();

        if (!active) {
            return;
        }
        if (form.isValid()) {
            form.updateRecord(active);
            this.onReset();

        }
    },
    onReset: function () {
        this.setActiveRecord(null);
        this.getContactView().form.reset();
        this.getContactView().setVisible(false);
    },
    onAddClick: function () {
        var rec = this.getPhoneStore().model.create();
        rec.data.contact_id = this.activeRecord.getId();
        this.getPhoneStore().insert(0, rec);
        phoneEditing.startEdit(rec, 0);
    },
    onDeleteClick: function () {
        var phoneView = Ext.ComponentQuery.query('PhonesGrid')[0];
        var selected = phoneView.getSelectionModel().getSelection()[0];
        this.getPhoneStore().remove(selected);
    }
});
