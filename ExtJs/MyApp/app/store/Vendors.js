Ext.define('App.store.Vendors', {
    extend: 'Ext.data.Store',
    model: 'App.model.Vendor',
    sorters: ['vendorName'],
    autoLoad: true,

    proxy: {
            type: 'jsonp',
            api: {
                read: "vendors.php",
            },
        
            reader: {
                type: 'json',
                rootProperty: 'items',

            }

    }
});