Ext.define('App.view.ViewportController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.viewport',
    newRecordId: '',
    isNewRecord: false,
    // onRowEditorEdit: function (editor, ctx, eOpts) {
    //     var vendorColIdx = 2;
    //     var combo = ctx.Grid.columns[vendorColIdx].getEditor(ctx.record);
    //     var vendorRecord = combo.findRecord('name', combo.getValue());
    //     ctx.record.set('vendorId', vendorRecord.get('id'));
    //     ctx.Grid.getStore().sync();  // Force a post with the updated data.
	// },
	
	resetHandler: function() {
        var dataview = this.lookup('modelCarsGrid'),
            store = dataview.getStore();

        store.load();
    },

    onGridEditorBeforeEdit: function (editor, ctx, eOpts) {
	    this.lookupReference('newRecordButton').setDisabled(true);
	    var vendorColIdx = 2;
	    var combo = ctx.grid.columns[vendorColIdx].getEditor(ctx.record);
	    if (ctx.record.get('vendorId') === -1) {
	        combo.emptyText = 'Select a vendor...';
	    }
	},

	onGridEditorCancelEdit: function (editor, ctx, eOpts) {
	    if (this.newRecordId && ctx.record.get('id') === this.newRecordId && this.isNewRecord) {
	        ctx.grid.getStore().remove(ctx.record);
	        this.isNewRecord = false;
	        this.newRecordId = null;
	    }
	    this.lookupReference('newRecordButton').setDisabled(false);
	},

	onGridEditorEdit: function (editor, ctx, eOpts) {
	    var vendorColIdx = 2;
	    var combo = ctx.grid.columns[vendorColIdx].getEditor(ctx.record);
	    var vendorRecord = combo.findRecord('vendorName', ctx.record.get('vendorName'));
	    ctx.record.set('vendorId', vendorRecord.get('vendorId'));
		ctx.grid.getStore().sync();  // Force a post with the updated data.
		Ext.Msg.alert('Hoàn thành chỉnh sửa!!!!');
	    this.isNewRecord = false;
	    this.newRecordId = null;
	    this.lookupReference('newRecordButton').setDisabled(false);
		this.lookupReference('deleteRecordButton').setDisabled(true);
		
	},

    onNewButtonClick: function (button, evt) {
	    var newCar = Ext.create('App.model.ModelCar', {
	        modelcarCategory: '',
	        modelcarName: '',
	        vendorId: -1,
	        vendorName: ''
	    });
	    this.isNewRecord = true;
	    this.newRecordId = newCar.get('id');
	     // this.newRecordId = newCar.get(4);
	    var grid = this.lookupReference('modelCarsGrid');
	    grid.getStore().insert(0, newCar);
		grid.getPlugin('modelCarsRowEditingPlugin').startEdit(newCar);
		
	},

	onDeleteButtonClick: function (button, evt) {
	    var grid = this.lookupReference('modelCarsGrid'),
	        selectedRecords = grid.getSelection(),
	        store = grid.getStore();
	    store.remove(selectedRecords);
	    store.sync(); 
		this.lookupReference('deleteRecordButton').setDisabled(true);
	},

	onGridSelect: function (rowModel, record, idx, eOpts) {
	    this.lookupReference('deleteRecordButton').setDisabled(false);
	},
	onGridDeselect: function (rowModel, record, idx, eOpts) {
	    this.lookupReference('deleteRecordButton').setDisabled(true);
	},


	seachHandler: function(btn){
		var searchText = this.lookupReference('searchText');
		alert(searchText.getValue());
	},
	onSearchTextHandler: function(obj, e, oPts){
		if(e.getKey() == e.ENTER){
			var searchButton = this.lookupReference('searchButton');
			searchButton.click();
		}
	},

	onDeleteHandler: function(grid, rowIndex, colIndex){
		var rec = grid.getStore().getAt(rowIndex);
		Ext.Msg.alert('Delete', rec.get('modelcarName'));
	},
	onEditHandler: function(grid, rowIndex, colIndex){
		var rec = grid.getStore().getAt(rowIndex);
		Ext.Msg.alert('Edit', rec.get('modelcarName'));
	},

	// // khi an vao 1 hang bat ky se hien thong bao thong tin cua hang do
	init: function(application){
		this.control({
			"#customerGridId": {
				itemdblclick: this.griditemdbdclick
			}
		});
	},

	testalert: function(){
		console.log('fdsfsd');
	},

	griditemdbdclick: function(dv, record, item, index, e){
		console.log(dv);
		var name = record.get("modelcarName");
		// Ext.Msg.alert('Information', name);
		// Ext.getStore('modelcars').filter('modelcarName', name);
		
		var window = Ext.create('Ext.window.Window', {
			xtype: 'formpanel',
			title: 'Update Record',
			width: 350,
			floating: true,
			centered: true,
			modal: true,
			bodyPadding: 10,
			record: record,
			viewModel : {
				data: {
					modelcars: record
				}
			},
			items: [
				{
					xtype: 'textfield',
					name: 'Name',
					fieldLabel: 'Name',
					bind: '{modelcars.modelcarName}'
				},
				{
					xtype: 'textfield',
					name: 'Vendor',
					fieldLabel: 'Vendor',
					bind: '{modelcars.vendorName}',
				},
				{
					xtype: 'textfield',
					name: 'Category',
					fieldLabel: 'Category',
					bind: '{modelcars.modelcarCategory}'
				},
				{
					xtype: 'toolbar',
					docked: 'bottom',
					items: [
						'->', {
							xtype: 'button',
							text: 'Update',
							iconCls: 'x-fa fa-check',
							handler: function () {
								// this.isNewRecord = true;
								// this.newRecordId = 'modelcars.modelcarId';
								// var grid = this.lookupReference('modelCarsGrid');
								// grid.getStore().sync();
								Ext.Msg.alert('Update','Update Success!!!');
								this.up('window').destroy();
								// record.set('vendorId', record.get('vendorId'));
								// var grid = this.lookupReference('modelCarsGrid');
								// grid.getStore().sync();
							}
						},
						{
							xtype: 'button',
							text: 'Cancel',
							iconCls: 'x-fa fa-close',
							handler: function() {
								this.up('window').destroy();
							}
						}
					]
				}
			]
		});
		window.show();
		
	},
	

});