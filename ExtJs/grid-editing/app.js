Ext.application({
    name: 'App',
    models: ['ModelCar', 'Vendor'],
    stores: ['ModelCars', 'Vendors'],
    views: ['Viewport', 'ViewportController'],
    mainView: 'App.view.Viewport',
    autoCreateViewport: true,
    launch: function () {
    }
});