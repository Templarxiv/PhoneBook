Ext.define('Phonebook.model.Phone', {
	extend: 'Ext.data.Model',
	fields: [{
		name: 'id',
		type: 'int',
		useNull: true
	}, 'contact_id', 'phone'],
	validations: [{
		type: 'length',
		field: 'contact_id',
		min: 1
	}, {
		type: 'length',
		field: 'phone',
		min: 1
	}]
});