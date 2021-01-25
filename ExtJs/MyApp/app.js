Ext.application({
    name: 'App',
    models: ['ModelCar', 'Vendor'],
    stores: ['ModelCars', 'Vendors'],
    views: ['BasicDataview','Viewport', 'ViewportController'],
    
	// mainView: 'App.view.Mainview',
	mainView: 'App.view.Viewport',
    // autoCreateViewport: true,
    launch: function () {
    }
});