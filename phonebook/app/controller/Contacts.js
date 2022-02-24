Ext.define('Phonebook.controller.Contacts', {
    extend: 'Ext.app.Controller',

    refs: [{
        ref: 'ContactsView',
        selector: 'ContactsView'
    }],
    stores: ['Contact'],
    init: function () {
        this.control({
            'button#AddContact': {
                click: this.onAddClick
            },
            'button#RemoveContact': {
                click: this.onDeleteClick
            },
            'ContactsView': {
                select: this.onGridSelect
            }
        });
    },
    onAddClick: function () {
        var rec = this.getContactStore().model.create();
        this.getContactStore().insert(0, rec);
        var xhr = new XMLHttpRequest();
        xhr.open("POST", window.API_PATH + 'contacts', true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var json = JSON.parse(xhr.responseText);
                console.log(json);
                Ext.ComponentQuery.query('ContactsView')[0].getView().refresh();
            }
        };
        var data = JSON.stringify({ "name": "Contact" });
        xhr.send(data);
    },
    onDeleteClick: function () {
        var selected = this.getContactsView().getSelectionModel().getSelection()[0];
        this.getContactStore().remove(selected);
        Ext.ComponentQuery.query('ContactView')[0].setVisible(false);
    },
    onGridSelect: function (grid, record, index, eOpts) {
        this.getController('Contact').setActiveRecord(record);
    }
});
