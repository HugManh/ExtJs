Ext.define('App.view.BasicDataview', {
    extend: 'Ext.Container',
    xtype: 'dataview-basic',

    requires: [
        // 'App.store.ModelCars',
        // 'Ext.dataview.plugin.ItemTip',
        // 'Ext.plugin.Responsive'
    ],

    height: 400,
    layout: 'fit',
    width: 400,

    items: [{
        xtype: 'dataview',
        cls: 'dataview-basic',
        itemTpl: 'Name: {modelcarCategory}',
        bind: '{modelcars}',
            viewModel: {
                stores: {
                    modelcars: {
                        type:'modelcars'
                    }
                }
            },
        // plugins: {
        //     dataviewtip: {
        //         align: 'tl-bl',
        //         maxHeight: 200,
        //         width: 300,
        //         scrollable: 'y',
        //         allowOver: true,
        //         anchor: true,
        //         bind: '{record}',
        //         cls: 'dataview-basic',
        //         tpl: 'Name: {modelcarCategory}'
        //     }
        // }
    }]
});