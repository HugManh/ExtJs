Ext.define('App.model.ModelCar', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'modelcarId', type: 'int' },
        { name: 'modelcarCategory', type: 'string' },
        { name: 'modelcarName', type: 'string' },
        { name: 'vendorId', type: 'int' },
        { name: 'vendorName', type: 'string' }
    ]
});