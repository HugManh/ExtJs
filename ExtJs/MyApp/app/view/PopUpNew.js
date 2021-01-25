Ext.define('App.view.PopUpNew', {
    extend: 'Ext.window.Window',
    title: 'Information',
    height: 200,
    width: 400,
    layout: 'fit',
    shadow: true,
    items: {  // Let's put an empty grid in just to illustrate fit layout
        xtype: 'grid',
        border: false,
        bind: '{modelcars}',
        viewModel: {
            stores: {
                modelcars: {
                    type:'modelcars'
                }
            }
        },
        columns: [
            { header: 'Name', dataIndex: 'modelcarName' },
            { header: 'Vendor', dataIndex: 'vendorName' },
            { header: 'Category',dataIndex: 'modelcarCategory', }
        ],       
        
    }
});