//templ0 = document.getElementsByClassName("templ")[0].innerHTML;
elpretempl1 = document.getElementsByClassName("templ")[0] //.children[0];
li = document.createElement("li");
li.setAttribute("onclick", "addC([])")
firstLi = elpretempl1.getElementsByTagName("li")[0];
elpretempl1.children[0].insertBefore(li, firstLi);
templ0 = elpretempl1.innerHTML

templ1 = document.getElementsByClassName("templ")[1].innerHTML;
templ2 = document.getElementsByClassName("templ")[0].innerHTML;

Array.prototype.insert = function(index, item){
	this.splice(index, 0, item)
}

var arr = [1,2,3,4,5,6,7,8,9]
arr.insert(2,10)


list = [1,2,3]
two = list[1]
list.indexOf(two)

//ONCLICK FUNCTION FOR CONTAINER AND COLUMNS MODAL TEMPLATE
var addC = function(array){
	//onclick dom funct that calls changing model method of ...
	//that inserts container with columns (objects)
	//where to insert is memoried by ... method
	if(Array.isArray(array)){
		//HERE WE INSERT OBJECT
		gridState.insertContent(array)

	} else {
		return console.error("Object must be a flat array!")
	}
}

var menubar = new Vue({
	el: "#complex_menu_bar",
	data: {
		seen: false,
	}
});

var sidebarTabs = new Vue({
	el: "#sidebar_tabs",
	data: {
		seen: true,
	}
});

var sidebarTitle = new Vue({
	el: "#sidebar_title",
	data: {
		title: "Element"
	}
});

var adminBar = new Vue({
	el: "#admin_bar",
	methods: {
		openFusionOptions: function(){
			menubar.seen = true;
			sidebarTabs.seen = false;
			sidebarTitle.title = "Theme Options";
		}
	}
});

var colorPicker = new Vue({
	el: "#colorpicker",
	data: {
		colors: [
			{backgroundColor: "#F44336"},
			{backgroundColor: "#E91E63"},
			{backgroundColor: "#9C27B0"},
			{backgroundColor: "#673AB7"},
			{backgroundColor: "#3F51B5"},
			{backgroundColor: "#2196f3"},
			{backgroundColor: "#03a9f4"},
			{backgroundColor: "#00bcd4"},
			{backgroundColor: "#009688"},
			{backgroundColor: "#4caf50"},
			{backgroundColor: "#8bc34a"},
			{backgroundColor: "#cddc39"},
			{backgroundColor: "#ffeb3b"},
			{backgroundColor: "#ffc107"},
			{backgroundColor: "#ff9800"},
			{backgroundColor: "#ff5722"}
		]
	},
	methods: {
		clicked: function(color){
			/*if (layout.todo != undefined){
				layout.recolor(color.backgroundColor, layout.todo)
			}*/
			console.log(lay)
			lay.recolor(color.backgroundColor, lay.children)
			
		}
	}
});

layObj = {
	childrens: [
		{
			ltype: 'container',
			isActive: false,
			tag: 'fusion_builder_container',
			className: null,
			id: null,
			backgroundColor: null,
			paddingTop: null,
			childrens: [
				{
					ltype: 'row',
					isActive: false,
					tag: 'fusion_builder_row',	
					className: null,
					id: null,
					backgroundColor: null,
					paddingTop: null,
					childrens: [
						{
							ltype: 'col',
							isActive: false,
							tag: 'fusion_builder_column',	
							className: null,
							id: null,
							backgroundColor: "pink",
							paddingTop: null,
							type: '1_2',
							childrens: [
								{
									ltype: 'el',
									isActive: false,
									tag: 'fusion_gallery',
									className: null,
									id: null,
									link: null,
									backgroundColor: null,
									paddingTop: null,
									title: 'Gallery'
								},
								{
									ltype: 'el',
									isActive: false,
									tag: 'fusion_modal',
									className: null,
									id: null,
									link: null,
									backgroundColor: null,
									paddingTop: null,
									title: 'Modal'
								},
								{
									ltype: 'el',
									isActive: false,
									tag: 'fusion_counter',
									className: null,
									id: null,
									link: null,
									backgroundColor: null,
									paddingTop: null,
									title: 'Counter'
								}
							]
						},
						{
							ltype: 'col',
							isActive: false,
							tag: 'fusion_builder_column',	
							className: null,
							id: null,
							backgroundColor: null,
							paddingTop: null,
							type: '1_2',
							childrens: [
								{
									ltype: 'el',
									isActive: false,
									tag: 'fusion_map',
									className: null,
									id: null,
									address: null,
									backgroundColor: null,
									paddingTop: null,
									title: 'Map'
								},
								{
									ltype: 'el',
									isActive: false,
									tag: 'fusion_slider',
									className: null,
									id: null,
									address: null,
									backgroundColor: null,
									paddingTop: null,
									title: 'Slider'
								},
							]
						}
					]
				}
			]
		},{
			ltype: 'container',
			isActive: false,
			tag: 'fusion_builder_container',
			className: null,
			id: null,
			backgroundColor: null,
			paddingTop: null,
			childrens: [
				{
					ltype: 'row',
					isActive: false,
					tag: 'fusion_builder_row',	
					className: null,
					id: null,
					backgroundColor: null,
					paddingTop: null,
					childrens: [
						{
							ltype: 'col',
							isActive: false,
							tag: 'fusion_builder_column',	
							className: null,
							id: null,
							backgroundColor: "pink",
							paddingTop: null,
							type: '1_2',
							childrens: [
								{
									ltype: 'el',
									isActive: false,
									tag: 'fusion_title',
									className: null,
									id: null,
									link: null,
									backgroundColor: null,
									paddingTop: null,
									title: 'Title'
								}
							]
						},
						{
							ltype: 'col',
							isActive: false,
							tag: 'fusion_builder_column',	
							className: null,
							id: null,
							backgroundColor: null,
							paddingTop: null,
							type: '1_2',
							childrens: [
								{
									ltype: 'el',
									isActive: false,
									tag: 'fusion_map',
									className: null,
									id: null,
									address: null,
									backgroundColor: null,
									paddingTop: null,
									title: 'Map'
								},
								{
									ltype: 'el',
									isActive: false,
									tag: 'fusion_map',
									className: null,
									id: null,
									address: null,
									backgroundColor: null,
									paddingTop: null,
									title: 'Map'
								},
							]
						}
					]
				}
			]
		}
	]
};

var lay = new Vue({
	el: '.layout-container',
	data: layObj,
	components: {
		'childrens-component': {
			props: ['childrens', 'ltype'],
			name: 'templ',
			methods: {
				clickedE: function(children){
					alert('clickedE')
					
					if(lay.activeItem != undefined){
						lay.activeItem.isActive = false;
					}
						
					lay.activeItem = children
					
					children.isActive = true
					lay.children = children
				}
			},
			template: '<div class="pretempl">{{ltype}}<templ v-on:click.native.stop="clickedE(children)" v-for="children in childrens" v-bind:childrens="children.childrens" v-bind:key="children.id" v-bind:class="[children.ltype, {active: children.isActive}]" :ltype="children.ltype" v-bind:style="children"></templ></div>'
		}
	},
	methods: {
		recolor: function(color){
			this.children.backgroundColor = color
		}
	}
});

var gridMainTabs = new Vue({
	el: "#grid_main_tabs",
	data: {
		seen: true,
		titles: [
			{isActive: true, title: "Builder"},
			{isActive: false, title: "Library"}
		]
	},
	methods: {
		clicked: function(title){
			this.titles.forEach(function(item){
				item.isActive = false
			})
			title.isActive = true
			
			if(title.title === "Builder"){
				gridTabs.seen = false;
				gridContentLibrary.seen = false;
				
				//CHECK THIS!!!!!!!!!!!!!!!!!!!!
				//BUILDER START STATE IS JUST START
				//HERE WE NEED A CHECKING
				//AT WHAT STATE OF BUILDER WE ARE NOW
				secondSideContent.seen = true;
			}
			if(title.title === "Library"){
				gridTabs.seen = true;
				gridContentLibrary.seen = true;
				gridTabs.setlibraryContent();
				
				secondSideContent.seen = false;
			}
		}
	}
});

var gridTabs = new Vue({
	el: "#grid_tabs",
	data: {
		seen: false,
		titles: [
			{isActive: true, title: "Builder Elements"},
			{isActive: false, title: "Library Elements"},
			{isActive: false, title: "Nested Columns"}
		]
	},
	methods: {
		clicked: function(title){
			this.titles.forEach(function(item){
				item.isActive = false
			})
			title.isActive = true
			
			gridContentLibrary.headers.forEach(function(item){
				item.isActive = false
			})
			
			if(title.title === "Demos"){
				gridContentLibrary.headers[0].isActive = true
			}
			if(title.title === "Templates"){
				gridContentLibrary.headers[1].isActive = true
			}
			if(title.title === "Containers"){
				gridContentLibrary.headers[2].isActive = true
			}
			if(title.title === "Columns"){
				gridContentLibrary.headers[3].isActive = true
			}
			if(title.title === "Elements"){
				gridContentLibrary.headers[4].isActive = true
			}
		},
		setlibraryContent: function(){
			this.titles = [
				{isActive: true, title: "Demos"},
				{isActive: false, title: "Templates"},
				{isActive: false, title: "Containers"},
				{isActive: false, title: "Columns"},
				{isActive: false, title: "Elements"}
			]
		},
		setContainerMenu: function(){
			this.titles = [
				{isActive: true, title: "Builder Container"},
				{isActive: false, title: "Library Containers"},
				{isActive: false, title: "Special"}
			]
		},
		setColumnsMenu: function(){
			this.titles = [
				{isActive: true, title: "Builder Columns"},
				{isActive: false, title: "Library Columns"}
			]
		},
		setElementsMenu: function(){
			this.titles = [
				{isActive: true, title: "Builder Elements"},
				{isActive: false, title: "Library Elements"},
				{isActive: false, title: "Nested Columns"}
			]
		}
	}
});

var gridTitle = new Vue({
	el: "#grid_title",
	data: {
		title: "Fusion Builder"
	}
});

var gridContentLibrary = new Vue({
	el: "#grid_content_area_library",
	data: {
		seen: false,
		headers: [
			{
				isActive: true, 
				title: "Select a demo to view the pages you can import",
				info: "Importing a single demo page is to receive the skeleton layout only. <strong>You will not receive demo images, fusion theme options, custom post types or sliders so there will be differences in style and layout compared to the online demos.</strong> The items that import are the builder layout, page template, fusion page options and image placeholders. If you wish to import everything from a demo, you need to import the full demo on the Avada &gt; Import Demos tab."},
			{
				isActive: false,
				title: "Save current page layout as a template",
				info: "Enter a name for your template and click the Save button. This will save the entire page layout, page template from the page attributes box, custom css and Fusion Page Options. IMPORTANT: when loading a saved template, everything will load except for Fusion Page Options. The only time Fusion Page Options will load is if you choose to 'Replace All Content'."
			},
			{
				isActive: false,
				title: "Saved Containers",
				info: "Manage your saved containers. Containers cannot be inserted from the library window. The globe icon indicates the element is a <a href='https://theme-fusion.com/fb-doc/fusion-builder-global-elements/' target='_blank'>global element</a>."
			},
			{
				isActive: false,
				title: "Saved Columns",
				info: "Manage your saved columns. Columns cannot be inserted from the library window and they must always go inside a container. The globe icon indicates the element is a <a href='https://theme-fusion.com/fb-doc/fusion-builder-global-elements/' target='_blank'>global element</a>."
			},
			{
				isActive: false,
				title: "Saved Elements",
				info: "Manage your saved elements. Elements cannot be inserted from the library window and they must always go inside a column. The globe icon indicates the element is a <a href='https://theme-fusion.com/fb-doc/fusion-builder-global-elements/' target='_blank'>global element</a>."
			},
		]
	}
});

var secondSideContent = new Vue({
	el: ".builder-blank-page",
	data: {
		seen: true
	},
	methods: {
		openContainerModal: function(text){
			gridTabs.seen = true;
			gridTabs.setContainerMenu();
				
			secondSideContent.seen = false;
			
			insertModal_content.containerContent();
			insertModal_content.seen = true;
		},
		openColumnsModal: function(){
			gridTabs.seen = true;
			gridTabs.setColumnsMenu();
				
			secondSideContent.seen = false;
			
			insertModal_content.columnsContent();
			insertModal_content.seen = true;
		},
		openElementsModal: function(){
			gridTabs.seen = true;
			gridTabs.setElementsMenu();
				
			secondSideContent.seen = false;
			
			elementsSlot.seen = true;
		},
		openPreBuiltPage: function(){
			this.seen = false;
			gridTabs.seen = true;
			gridContentLibrary.seen = true;
			gridMainTabs.titles[0].isActive = false;
			gridMainTabs.titles[1].isActive = true;
		}
	}
});

var gridState = new Vue({
	//there lives GRID editor (.grid_content_area_grider.builder-common-container)
	el: ".grid_content_area_grider",
	data: {
		childrens: layObj.childrens,
		seen: true,
		activeModelChildrens: null,
		actIndexChildren: null,
		actualSecBarState: null
	},
	methods: {
		insertContent: function(array){
			this.cnstrctr = function(elType, array){
				if(elType === 'container'){
					var columns = [];
					
					var column = function (type) {
						return {
							ltype: 'col',
							isActive: false,
							tag: 'fusion_builder_column',	
							className: null,
							id: null,
							backgroundColor: "pink",
							paddingTop: null,
							type: type,
							childrens: []
						};
					};
					
					if(array[0] !== undefined){
						for(i=0; i<array.length; i++){
							var icol = column(array[i].toString());
							columns.push(icol);
						}
					} else {
						//if [] i.e. (for blank container)
						//nothing
					}

					var container = {
						ltype: 'container',
						isActive: false,
						tag: 'fusion_builder_container',
						className: null,
						id: null,
						backgroundColor: null,
						paddingTop: null,
						childrens: [
							{
								ltype: 'row',
								isActive: false,
								tag: 'fusion_builder_row',	
								className: null,
								id: null,
								backgroundColor: null,
								paddingTop: null,
								childrens: columns
							}
						]
					};
					
					return container;
				}
			};

			//HERE WE INSERT OBJECTS TO CREATED LINK IN PREVIOUS
			var indx = gridState.actIndexChildren+1;
			gridState.activeModelChildrens.insert(indx, this.cnstrctr('container', array));

			//HERE WE NEED TO CHECK ARRAY CHANGE BEFORE NEXT

			//HERE WE CLOSE INSERT MODAL
			insertModal_content.close();

			//this.latestMountedElIndex = gridState.actIndexChildren+1;
		},
		highlightAdded: function(elem){
			var state = true;
			
			var show = function(){
				if(state){
					elem.style.backgroundColor = "orange";
				} else {
					elem.style.backgroundColor = "";
				}
				state = !state;
			}
			
			var intervalId = setInterval(show, 400);

			setTimeout(function(){
				clearInterval(intervalId);
			}, 2000);
		}
	},
	components: {
		'child-component': {
			props: ['childrens', 'ltype', 'tag', 'ind', 'newel', 'title'],
			name: 'templ',
			mounted: function(){
				//GRIDSTATE OBJECT CHECKING BECAUSE WE NOT NEED TO HIGHLIGHT
				//ALL CONTAINERS FROM RENDERING MODEL AT PAGE LOAD
				//ADDITIONALLY IT CUT ERRORS AND ANOTHER JOB
				if(gridState !== undefined && this.$el.className === 'builder-container'){
					var containerEl = this.$parent.$children[gridState.actIndexChildren+1].$el

					//SCROLL DOWN

					//HIGHLIGHT NEWLY ADDED CONTAINER FOR THE SHORT TIME
					gridState.highlightAdded(containerEl);
				}

			},
			methods: {
				clickedE: function(children){
					
					if(lay.activeItem != undefined){
						lay.activeItem.isActive = false;
					}
						
					lay.activeItem = children
					
					children.isActive = true
					lay.children = children
				},
				openModalAddContnr: function(index){
					//HERE WE CREATE INDEX OF OBJECT
					gridState.actIndexChildren = index;

					//HERE WE CREATE LINK TO INSERT OBJECTS
					gridState.activeModelChildrens = this.$parent.$parent.childrens;

					//HERE WE OPEN MODAL
					secondSideContent.openContainerModal()
				},
				openModalAddCols: function(index){
					secondSideContent.openColumnsModal()
					console.log(this.$props)
					this.$props.childrens.push(this.$props.childrens[0])
				},
				openModalAddElmnt: function(e){
					secondSideContent.openElementsModal()
					elementsSlot.activecolumn = this.$props.childrens
					console.log(this.$props.childrens)
				},
				click: function(index){
					//alert()
				},
				alert: function(){
					console.log("ALEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEERT!")
				}
			},
			template: templ1
		}
	}
});

var insertModal_content = new Vue({
	//there lives modal states of inserts of content to the GRID editor
	el: "#grid-content-modal_insert",
	data: {
		seen: false,
		title: "test title",
		content: "<h1>Empty Start State</h>"
	},
	methods: {
		close: function(){
			this.seen = false;
			gridTabs.seen = false;
		},
		containerContent: function(){
			this.title = "Insert Container"
			this.content = templ0
		},
		libraryContent: function(){
			this.title = "Insert Container"
			this.content = "<p class='empty-lib-messg'>There are no custom containers in your library</p>"
		},
		specialsContent: function(){
			this.title = "Insert Container"
			this.content = '<div class="builder-lays-header-info"><h2>Special Items</h2><span class="builder-lay-info">The nextpage item allows you to break your page into several pages. Simply insert it onto the page, and automatic pagination will show on the frontend.</span></div><ul class="fusion-builder-all-modules"><li class="fusion-builder-section-next-page"><h4 class="fusion_module_title">Next Page</h4></li></ul>'
		},
		////////
		columnsContent: function(){
			this.title = "Insert Columns"
			this.content = '<ul class="builder-col-lay"><li><div class="column-1_1">1/1</div></li><li d="1_2,1_2"><div class="column-1_2">1/2</div><div class="column-1_2">1/2</div></li><li><div class="column-1_3">1/3</div><div class="column-1_3">1/3</div><div class="column-1_3">1/3</div></li><li><div class="column-1_4">1/4</div><div class="column-1_4">1/4</div><div class="column-1_4">1/4</div><div class="column-1_4">1/4</div></li><li><div class="column-2_3">2/3</div><div class="column-1_3">1/3</div></li><li><div class="column-1_3">1/3</div><div class="column-2_3">2/3</div></li><li><div class="column-1_4">1/4</div><div class="column-3_4">3/4</div></li><li><div class="column-3_4">3/4</div><div class="column-1_4">1/4</div></li><li><div class="column-1_2">1/2</div><div class="column-1_4">1/4</div><div class="column-1_4">1/4</div></li><li><div class="column-1_4">1/4</div><div class="column-1_4">1/4</div><div class="column-1_2">1/2</div></li><li><div class="column-1_4">1/4</div><div class="column-1_2">1/2</div><div class="column-1_4">1/4</div></li><li><div class="column-1_5">1/5</div><div class="column-4_5">4/5</div></li><li><div class="column-4_5">4/5</div><div class="column-1_5">1/5</div></li><li><div class="column-3_5">3/5</div><div class="column-2_5">2/5</div></li><li><div class="column-2_5">2/5</div><div class="column-3_5">3/5</div></li><li><div class="column-1_5">1/5</div><div class="column-1_5">1/5</div><div class="column-3_5">3/5</div></li><li><div class="column-1_5">1/5</div><div class="column-3_5">3/5</div><div class="column-1_5">1/5</div></li><li><div class="column-1_2">1/2</div><div class="column-1_6">1/6</div><div class="column-1_6">1/6</div><div class="column-1_6">1/6</div></li><li><div class="column-1_6">1/6</div><div class="column-1_6">1/6</div><div class="column-1_6">1/6</div><div class="column-1_2">1/2</div></li><li><div class="column-1_6">1/6</div><div class="column-2_3">2/3</div><div class="column-1_6">1/6</div></li><li><div class="column-1_5">1/5</div><div class="column-1_5">1/5</div><div class="column-1_5">1/5</div><div class="column-1_5">1/5</div><div class="column-1_5">1/5</div></li><li><div class="column-1_6">1/6</div><div class="column-1_6">1/6</div><div class="column-1_6">1/6</div><div class="column-1_6">1/6</div><div class="column-1_6">1/6</div><div class="column-1_6">1/6</div></li><li><div class="column-5_6">5/6</div></li><li><div class="column-4_5">4/5</div></li><li><div class="column-3_4">3/4</div></li><li><div class="column-2_3">2/3</div></li><li><div class="column-3_5">3/5</div></li><li><div class="column-1_2">1/2</div></li><li><div class="column-2_5">2/5</div></li><li><div class="column-1_3">1/3</div></li><li><div class="column-1_4">1/4</div></li><li><div class="column-1_5">1/5</div></li><li><div class="column-1_6">1/6</div></li></ul>'
		},
		elementsContent: function(){
			this.title = "Select Element"
			this.content = '<ul class="builder-col-lay"><li><div class="column-1_1">1/1</div></li><li d="1_2,1_2"><div class="column-1_2">1/2</div><div class="column-1_2">1/2</div></li><li><div class="column-1_3">1/3</div><div class="column-1_3">1/3</div><div class="column-1_3">1/3</div></li><li><div class="column-1_4">1/4</div><div class="column-1_4">1/4</div><div class="column-1_4">1/4</div><div class="column-1_4">1/4</div></li><li><div class="column-2_3">2/3</div><div class="column-1_3">1/3</div></li><li><div class="column-1_3">1/3</div><div class="column-2_3">2/3</div></li><li><div class="column-1_4">1/4</div><div class="column-3_4">3/4</div></li><li><div class="column-3_4">3/4</div><div class="column-1_4">1/4</div></li><li><div class="column-1_2">1/2</div><div class="column-1_4">1/4</div><div class="column-1_4">1/4</div></li><li><div class="column-1_4">1/4</div><div class="column-1_4">1/4</div><div class="column-1_2">1/2</div></li><li><div class="column-1_4">1/4</div><div class="column-1_2">1/2</div><div class="column-1_4">1/4</div></li><li><div class="column-1_5">1/5</div><div class="column-4_5">4/5</div></li><li><div class="column-4_5">4/5</div><div class="column-1_5">1/5</div></li><li><div class="column-3_5">3/5</div><div class="column-2_5">2/5</div></li><li><div class="column-2_5">2/5</div><div class="column-3_5">3/5</div></li><li><div class="column-1_5">1/5</div><div class="column-1_5">1/5</div><div class="column-3_5">3/5</div></li><li><div class="column-1_5">1/5</div><div class="column-3_5">3/5</div><div class="column-1_5">1/5</div></li><li><div class="column-1_2">1/2</div><div class="column-1_6">1/6</div><div class="column-1_6">1/6</div><div class="column-1_6">1/6</div></li><li><div class="column-1_6">1/6</div><div class="column-1_6">1/6</div><div class="column-1_6">1/6</div><div class="column-1_2">1/2</div></li><li><div class="column-1_6">1/6</div><div class="column-2_3">2/3</div><div class="column-1_6">1/6</div></li><li><div class="column-1_5">1/5</div><div class="column-1_5">1/5</div><div class="column-1_5">1/5</div><div class="column-1_5">1/5</div><div class="column-1_5">1/5</div></li><li><div class="column-1_6">1/6</div><div class="column-1_6">1/6</div><div class="column-1_6">1/6</div><div class="column-1_6">1/6</div><div class="column-1_6">1/6</div><div class="column-1_6">1/6</div></li><li><div class="column-5_6">5/6</div></li><li><div class="column-4_5">4/5</div></li><li><div class="column-3_4">3/4</div></li><li><div class="column-2_3">2/3</div></li><li><div class="column-3_5">3/5</div></li><li><div class="column-1_2">1/2</div></li><li><div class="column-2_5">2/5</div></li><li><div class="column-1_3">1/3</div></li><li><div class="column-1_4">1/4</div></li><li><div class="column-1_5">1/5</div></li><li><div class="column-1_6">1/6</div></li></ul>'
		}
	}
});

var elementsSlot = new Vue({
	el: "#elements_pseudoslot",
	data: {
		activecolumn: null,
		seen: false,
		query: '',
		elements: [
			{
				title: "Alert",
				label: "alert"
			},
			{
				title: "Blog",
				label: "blog"
			},
			{
				title: "Button",
				label: "button"
			},
			{
				title: "Checklist",
				label: "checklist"
			},
			{
				title: "Code Block",
				label: "code_block"
			},
			{
				title: "Content Boxes",
				label: "content_boxes"
			},
			{
				title: "Countdown",
				label: "countdown"
			},
			{
				title: "Counter Boxes",
				label: "counter_boxes"
			},
			{
				title: "Counter Circles",
				label: "counter_circles"
			},
			{
				title: "Flip Boxes",
				label: "flip_boxes"
			},
			{
				title: "Font Awesome Icon",
				label: "font_awesome_icon"
			},
			{
				title: "Gallery",
				label: "gallery"
			},
			{
				title: "Google Map",
				label: "google_map"
			},
			{
				title: "Image",
				label: "image"
			},
			{
				title: "Image Carousel",
				label: "image_carousel"
			},
			{
				title: "Layer Slider",
				label: "layer_slider"
			},
			{
				title: "Lightbox",
				label: "lightbox"
			},
			{
				title: "Menu Anchor",
				label: "menu_anchor"
			},
			{
				title: "Modal",
				label: "modal"
			},
			{
				title: "Modal Text Link",
				label: "modal_text_link"
			},
			{
				title: "Person",
				label: "person"
			},
			{
				title: "Post Slider",
				label: "post_slider"
			},
			{
				title: "Pricing Table",
				label: "pricing_table"
			},
			{
				title: "Progress Bar",
				label: "progress_bar"
			},
			{
				title: "Recent Posts",
				label: "recent_posts"
			},
			{
				title: "Revolution Slider",
				label: "revolution_slider"
			},
			{
				title: "Section Separator",
				label: "section_separator"
			},
			{
				title: "Separator",
				label: "separator"
			},
			{
				title: "Sharing Box",
				label: "sharing_box"
			},
			{
				title: "Slider",
				label: "slider"
			},
			{
				title: "Social Links",
				label: "social_link"
			},
			{
				title: "Soundcloud",
				label: "soundcloud"
			},
			{
				title: "Table",
				label: "table"
			},
			{
				title: "Tabs",
				label: "tabs"
			},
			{
				title: "Tagline Box",
				label: "tagline_box"
			},
			{
				title: "Testimonials",
				label: "testimonials"
			},
			{
				title: "Text Block",
				label: "text_block"
			},
			{
				title: "Title",
				label: "title"
			},
			{
				title: "Toggles",
				label: "toggles"
			},
			{
				title: "User Login",
				label: "user_login"
			},
			{
				title: "User Lost Password",
				label: "user_lost_password"
			},
			{
				title: "User Register",
				label: "user_register"
			},
			{
				title: "Vimeo",
				label: "vimeo"
			},
			{
				title: "Widget Area",
				label: "widget_area"
			},
			{
				title: "Woo Carousel",
				label: "woo_carousel"
			},
			{
				title: "Woo Featured",
				label: "woo_featured"
			},
			{
				title: "Woo Shortcodes",
				label: "woo_shortcodes"
			},
			{
				title: "Youtube",
				label: "youtube"
			}
		]
	},
	computed: {
		computedList: function () {
			var vm = this
			return this.elements.filter(function (element) {
				return element.title.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1
			})
		}
	},
	methods: {
		click: function(tag, title){
			//HERE WE CLOSE ELEMENTS MODAL
			this.seen = false;

			//this.activecolumn.push(this.activecolumn[0])
			this.activecolumn.push({
				ltype: 'el',
				isActive: false,
				tag: tag,
				className: null,
				id: null,
				link: null,
				backgroundColor: null,
				paddingTop: null,
				title: title
			});
		}
	}
})

/*new Vue({
	el: "#contextside"
})*/