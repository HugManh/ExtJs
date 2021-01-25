Ext.define('App.view.Viewport', {
    extend: 'Ext.container.Viewport',
    xtype:'viewport',
    controller: 'viewport',
    requires: ['Ext.grid.Panel','App.view.BasicDataview'],
    // style: 'padding:25px',
    layout: 'vbox',
    // layout: 'fit',
    items: [
        {
            xtype: 'gridpanel',
            id: 'customerGridId',
            reference: 'modelCarsGrid',
            width: 700,
            height: 500,
            title: 'List of cars',
            // store: 'ModelCar',
            bind: '{modelcars}',
            viewModel: {
                stores: {
                    modelcars: {
                        type:'modelcars'
                    }
                }
            },
            // frame: true,
            tbar: {
                items: [
                    {
                        xtype: 'button',
                        reference: 'newRecordButton',
                        text: 'New',
                        handler: 'onNewButtonClick'
                    },
                    {
                        xtype: 'button',
                        reference: 'deleteRecordButton',
                        text: 'Delete',
                        handler: 'onDeleteButtonClick',
                        disabled:true
                    },
                    // {
                    //     xtype: 'button',
                    //     text: 'LoadData',
                    //     handler: 'onLoad'
                    // },
                    // {
                    //     xtype: 'textfield',
                    //     emptyText: 'Search...',
                    //     width: 200,
                    //     reference: 'searchText',
                    //     enableKeyEvents: true,
                    //     listeners: {
                    //         keyup: 'onSearchTextHandler'
                    //     }
                    // },
                    // {
                    //     xtype: 'button',
                    //     text: 'Search',
                    //     iconCls: 'x-fa fa-search blue',
                    //     handler: 'seachHandler',
                    //     reference: 'searchButton'
                    // },
                    {
                        xtype: 'button',
                        text: 'Refresh',
                        iconCls: 'x-fa fa-refresh blue',
                        handler: 'resetHandler'
                    }
                  ]
                },
            listeners: {
                select: 'onGridSelect',
                deselect: 'onGridDeselect',
            },
            // actions: {
            //     delete: {
            //         iconCls: 'x-fa fa-trash-o red',
            //         tooltip: 'Delete',
            //         flex:1
            //         // reference: 'deleteRecordButton',
            //         // handler: 'onDeleteButtonClick',
            //     },
            //     edit: {
            //         iconCls: 'x-fa fa-pencil-square blue',
            //         tooltip: 'Edit',
            //         flex:1,
            //         handler: function (values) {
            //             var form = this.getView('App.view.PopUpNew')
            //             this.view = Ext.create('App.view.PopUpNew');
            //             this.view.show();
            //             this.values = values;

            //             console.log('abc')
            //         }
            //     }
            // },
            columns: [
                {
                    text: 'Id',
                    hidden: true,  
                    dataIndex: 'modelcarId'
                },
                {
                    text: 'Name',
                    sortable: true,  
                    dataIndex: 'modelcarName',
                    flex: 3,
                    editor: {
                        xtype: 'textfield',
                        allowBlank: false
                    }
                },
                {
                    text: 'Vendor',
                    sortable: true,
                    dataIndex: 'vendorName',
                    flex: 2,
                    editor: {
                        xtype: 'combobox',
                        store: 'Vendors',
                        displayField: 'vendorName',
                        valueField: 'vendorName',
                        editable: false,
                        queryMode: 'local',
                        forceSelection: true,
                        triggerAction: 'all',
                        allowBlank: false
                    }
                },
                {
                    text: 'Category',
                    sortable: true,
                    dataIndex: 'modelcarCategory',
                    flex: 2,
                    editor: {
                        xtype: 'textfield',
                        allowBlank: false
                    }
                },
                // {
                //     width: 70,
                //     sortable: false,
                //     menuDisabled: true,
                //     xtype:'actioncolumn',
                //     items: ['@delete', '@edit']
                // },
            ],
            //Add Paginnation toolbar, Paging not working yet, this just sample 
            // bbar: {
            //     xtype: 'pagingtoolbar',
            //     displayInfo: true,
            //     displayMsg: 'Display records {0} - {1} of {2}',
            //     emptyMsg:'No Record to display'
            // },
            selType: 'rowmodel',
            // khi click vao hang bat ky co the update luon
            plugins: {
                ptype: 'rowediting',
                pluginId: 'modelCarsRowEditingPlugin',
                clicksToEdit: 1,
                listeners: {
                    beforeedit: 'onGridEditorBeforeEdit',
                    canceledit: 'onGridEditorCancelEdit',
                    edit: 'onGridEditorEdit',
                }
            }
        }
    ]
});
