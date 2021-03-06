Ext.define('App.store.ModelCars', {
    extend: 'Ext.data.Store',
    model: 'App.model.ModelCar',
    alias: 'store.modelcars',
    storeId: 'modelcars',
    sorters: ['modelcarName'],
    pageSize: 3,
    autoLoad: true,
    autoSync: false,
    proxy: {
            type: 'jsonp',
            url: 'model-cars.php',
            api: {
                create: 'model-cars.php?action=create',
                read: 'model-cars.php?action=read',
                update: 'model-cars.php?action=update',
                destroy: 'model-cars.php?action=destroy'
            },
        
            reader: {
                type: 'json',
                rootProperty: 'items',
                totalProperty: 'total'
            }

    }
});