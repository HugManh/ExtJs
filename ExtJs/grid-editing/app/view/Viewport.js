Ext.define('App.view.Viewport', {
    extend: 'Ext.container.Viewport',
    controller: 'viewport',
    requires: ['Ext.grid.Panel'],
    // style: 'padding:25px',
    layout: 'vbox',
    items: [
        {
            xtype: 'gridpanel',
            reference: 'modelCarsGrid',
            width: 650,
            // height: 300,
            title: 'List of cars',
            store: 'ModelCars',
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
                      }
                  ]
                },
            listeners: {
                select: 'onGridSelect',
                deselect: 'onGridDeselect'
            },
                

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
                }
           ],
            selType: 'rowmodel',
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