var API_PATH = "http://127.0.0.1:8000/api/"

Ext.define('Phonebook.Config', {
    singleton: true,
    API_PATH: "http://127.0.0.1:8000/api/",
    globalProperty2: 'some_value'
});

Ext.application({
    name: 'Phonebook',
    autoCreateViewport: true,
    requires: [
        'Phonebook.Config',
    ],
    models: ['Contact', 'Phone'],
    stores: ['Contact', 'Phone'],
    controllers: ['Contacts', 'Contact']
    // globals: {
    //     API_PATH: 'http://127.0.0.1:8000/api/'
    // }
});