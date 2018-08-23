//templ0 = document.getElementsByClassName("templ")[0].innerHTML;
elpretempl1 = document.getElementsByClassName("templ")[0] //.children[0];
li = document.createElement("li");
li.setAttribute("onclick", "addC([])")
firstLi = elpretempl1.getElementsByTagName("li")[0];
elpretempl1.children[0].insertBefore(li, firstLi);
templ0 = elpretempl1.innerHTML

templ1 = document.getElementsByClassName("templ")[1].innerHTML;
templ2 = document.getElementsByClassName("templ")[0].innerHTML;
templ3 = document.getElementsByClassName("templ_three")[0].innerHTML;
//templ4 = document.getElementsByClassName("templ_four")[0].innerHTML;
templ5 = document.getElementsByClassName("templ_five")[0].innerHTML;

Array.prototype.insert = function(index, item){
	this.splice(index, 0, item)
}

var arr = [1,2,3,4,5,6,7,8,9]
arr.insert(2,10)

//?½Ñƒ?¶?½?¾ ?½?°?¿?¸Ñ??°Ñ‚ÑŒ Ñ??ºÑ€?¸?¿Ñ‚ ?´?»Ñ? ?°?²Ñ‚?¾?¼?°Ñ‚?¸Ñ‡?µÑ??º?¾?¹ ?³?µ?½?µÑ€?°Ñ†?¸?¸ Ñ??¿?¸Ñ??º?°
elsList = ["fusion_alert","fusion_blog","fusion_button","fusion_checklist","fusion_code","fusion_content_boxes","fusion_countdown","fusion_counters_box","fusion_counters_circle","fusion_dropcap","fusion_flip_boxes","fusion_fontawesome","fusion_gallery","fusion_map","fusion_highlight","fusion_images","fusion_imageframe","layerslider","fusion_lightbox","fusion_menu_anchor","fusion_modal","fusion_modal_text_link","fusion_one_page_text_link","fusion_person","fusion_popover","fusion_postslider","fusion_pricing_table","fusion_progress","fusion_recent_posts","rev_slider","fusion_section_separator","fusion_separator","fusion_sharing","fusion_slider","fusion_social_links","fusion_soundcloud","fusion_table","fusion_tabs","fusion_tagline_box","fusion_testimonials","fusion_text","fusion_title","fusion_accordion","fusion_tooltip","fusion_login","fusion_lost_password","fusion_register","fusion_vimeo","fusion_featured_products_slider","fusion_woo_shortcodes","fusion_youtube","fusion_widget_area","fusion_products_slider"];

list = [1,2,3]
two = list[1]
list.indexOf(two)

//FUCKING HACK: I dont know how to copy object faster
var copyObj = function(obj){
	return JSON.parse(JSON.stringify(obj));
};

//ONCLICK FUNCTION FOR CONTAINER AND COLUMNS MODAL TEMPLATE
var addC = function(array){
	//onclick dom funct that calls changing model method of ...
	//that inserts container with columns (objects)
	//where to insert is memoried by ... method
	if(Array.isArray(array)){
		//HERE WE INSERT OBJECT
		gridState.insertContent(array)

	} else {
		return console.error("Object must be a flat array!");
	}
}

// var menubar = new Vue({
// 	el: "#complex_menu_bar",
// 	data: {
// 		seen: false,
// 	}
// });

// var sidebarTabs = new Vue({
// 	el: "#sidebar_tabs",
// 	data: {
// 		seen: true,
// 	}
// });

// var sidebarTitle = new Vue({
// 	el: "#sidebar_title",
// 	data: {
// 		title: "Element"
// 	}
// });

// var adminBar = new Vue({
// 	el: "#admin_bar",
// 	methods: {
// 		openFusionOptions: function(){
// 			menubar.seen = true;
// 			sidebarTabs.seen = false;
// 			sidebarTitle.title = "Theme Options";
// 		}
// 	}
// });

// var colorPicker = new Vue({
// 	el: "#colorpicker",
// 	data: {
// 		colors: [
// 			{backgroundColor: "#F44336"},
// 			{backgroundColor: "#E91E63"},
// 			{backgroundColor: "#9C27B0"},
// 			{backgroundColor: "#673AB7"},
// 			{backgroundColor: "#3F51B5"},
// 			{backgroundColor: "#2196f3"},
// 			{backgroundColor: "#03a9f4"},
// 			{backgroundColor: "#00bcd4"},
// 			{backgroundColor: "#009688"},
// 			{backgroundColor: "#4caf50"},
// 			{backgroundColor: "#8bc34a"},
// 			{backgroundColor: "#cddc39"},
// 			{backgroundColor: "#ffeb3b"},
// 			{backgroundColor: "#ffc107"},
// 			{backgroundColor: "#ff9800"},
// 			{backgroundColor: "#ff5722"}
// 		]
// 	},
// 	methods: {
// 		clicked: function(color){
// 			/*if (layout.todo != undefined){
// 				layout.recolor(color.backgroundColor, layout.todo)
// 			}*/
// 			console.log(lay)
// 			lay.recolor(color.backgroundColor, lay.children)
			
// 		}
// 	}
// });

var page_settings = {
	fullwidth: true
};

var lay = new Vue({
	el: '.layout-container',
	//data: layObj.layout,
	data: {
		childrens: layObj.layout.childrens,
		styleObject: layObj.styleObject,
		fullwidth: page_settings.fullwidth,
		active_dom_el: null
	},
	props: ['shortcode', 'isfheight'],
	components: {
		'childrens-component': {
			props: ['childrens', 'shortcode', 'params', 'sto', 'title', 'dim','styleObject', 'isfheight', 'isfullwcontainer', 'fullwidth'],
			name: 'templ',
			methods: {
				clickedE: function(children, index){
					
					//console.log(this.$refs.ele_ref[index].$el);
					//THIS IS REF TO ELEMENT IN DOM
					lay.active_dom_el = this.$refs.ele_ref[index].$el;
					
					if(lay.activeItem != undefined){
						lay.activeItem.isActive = false;
					}
						
					lay.activeItem = children;
					
					children.isActive = true
					lay.children = children

					//(CONTEXT OF LAYOUT ELEMENT BY CLICK) SET REF TO __ELEMENT__
					contextWindow.$data.groups = lay.children.params.groups;
				},
				stylish: function(children, sto){
					reka= children
					//here we get type of element
					var element_type = children.name;
					//for elements we set object with links to prop
					//returns styleobject for :style="stylish(children)"
					//var style_object = layObj.styleObject;
					if(element_type === 'Container'){
						var style_object = {
							//backgroundColor: '#f5edf0',
							backgroundColor: children.params.groups.Background.background_color.value,
							paddingTop: children.params.groups.Design.dimensions.value.padding_top,
							paddingBottom: children.params.groups.Design.dimensions.value.padding_bottom,
							paddingLeft: children.params.groups.Design.dimensions.value.padding_left,
							paddingRight: children.params.groups.Design.dimensions.value.padding_right,
							marginTop: children.params.groups.Design.spacing.value.margin_top,
							marginBottom: children.params.groups.Design.spacing.value.margin_bottom,
							marginLeft: children.params.groups.Design.spacing.value.margin_left,
							marginRight: children.params.groups.Design.spacing.value.margin_right,
							borderTopWidth: children.params.groups.Design.border_size.value,
							borderBottomWidth: children.params.groups.Design.border_size.value,
							borderTopStyle: children.params.groups.Design.border_style.default,
							borderBottomStyle: children.params.groups.Design.border_style.default,
							borderColor: children.params.groups.Design.border_color.value
						}
					} 
					
					if(element_type === 'Column'){
						var style_object = {
							backgroundColor: children.params.groups.Design.background_color.value,
							paddingTop: children.params.groups.Design.padding.value.padding_top,
							paddingBottom: children.params.groups.Design.padding.value.padding_bottom,
							paddingLeft: children.params.groups.Design.padding.value.padding_left,
							paddingRight: children.params.groups.Design.padding.value.padding_right,
							marginTop: children.params.groups.Design.dimension_margin.value.margin_top,
							marginBottom: children.params.groups.Design.dimension_margin.value.margin_bottom,
							marginLeft: children.params.groups.Design.dimension_margin.value.margin_left,
							marginRight: children.params.groups.Design.dimension_margin.value.margin_right,
							
							borderTopWidth: children.params.groups.Design.border_size.value,
							borderBottomWidth: children.params.groups.Design.border_size.value,
							borderTopStyle: children.params.groups.Design.border_style.default,
							borderBottomStyle: children.params.groups.Design.border_style.default,
							borderColor: children.params.groups.Design.border_color.value
						}
					} 

					/*else {
						var style_object = {
							backgroundColor: 'violet'
						}
					}*/
					return style_object;
				},
				isEl: function(shortcode){
					//list = ["fusion_builder_blank_page","fusion_li_item","fusion_builder_column_inner","fusion_builder_column","fusion_builder_container","fusion_content_box","fusion_counter_box","fusion_counter_circle","fusion_flip_box","fusion_image","fusion_builder_next_page","fusion_builder_row_inner","fusion_builder_row","fusion_slide","fusion_tab","fusion_testimonial","fusion_toggle"];
					list = elsList;

					return list.indexOf(shortcode) !== -1;
				},
				editle: function(e){
					//todo: perf (input rerendering redundancy after native rendering by typing)
					//maybe <keep-alive> ?
					this.params.groups.General.element_content.value = e.target.innerText;
				}
			},
			template: templ5
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
		childrens: layObj.layout.childrens,
		seen: true,
		activeModelChildrens: null,
		actIndexChildren: null,
		actualSecBarState: null
	},
	methods: {
		insertContent: function(array){
			this.constrctr = function(elType, array){
				if(elType === 'container'){
					var columns = [];

					//OPTIMIZE FOR ONE CALL!!!!!!!!!!!!!!!!!! (+ LOOP)

					var column = function(type){
						var colobj = copyObj(fusionAllElements.fusion_builder_column);
						colobj.params.groups["General"].type = type;
						colobj.childrens = [];
						return colobj;
					}
					
					if(array[0] !== undefined){
						for(i=0; i<array.length; i++){
							var icol = column(array[i].toString());
							columns.push(icol);
						}
					} else {
						//if [] i.e. (for blank container)
						//nothing
					}

					var container = copyObj(fusionAllElements.fusion_builder_container);
					var row = copyObj(fusionAllElements.fusion_builder_row);
					row.childrens = columns;
					container.childrens = [row];
					
					return container;
				}
			};

			//HERE WE INSERT OBJECTS TO CREATED LINK IN PREVIOUS
			var indx = gridState.actIndexChildren+1;
			gridState.activeModelChildrens.insert(indx, this.constrctr('container', array));

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
			props: ['childrens', 'ltype', 'tag', 'ind', 'newel', 'title', 'shortcode', 'children','index'],
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
						
					lay.activeItem = children;
					
					children.isActive = true;
					lay.children = children;
				},
				openModalAddContnr: function(index){
					//HERE WE CREATE INDEX OF OBJECT
					gridState.actIndexChildren = index;

					//HERE WE CREATE LINK TO INSERT OBJECTS
					gridState.activeModelChildrens = this.$parent.$parent.childrens;

					//HERE WE OPEN MODAL
					secondSideContent.openContainerModal();
				},
				openModalAddCols: function(index){
					secondSideContent.openColumnsModal();
					//console.log(this.$props);
					this.$props.childrens.push(this.$props.childrens[0]);
				},
				openModalAddElmnt: function(e){
					secondSideContent.openElementsModal();
					//just set refer to column for pushing element
					elementsSlot.activecolumn = this.$props.childrens;
					//console.log(this.$props.childrens);
					//console.info(this)
				},
				alert: function(){
					console.log("ALEET!")
				},
				isEl: function(shortcode){
					//list = ["fusion_builder_blank_page","fusion_li_item","fusion_builder_column_inner","fusion_builder_column","fusion_builder_container","fusion_content_box","fusion_counter_box","fusion_counter_circle","fusion_flip_box","fusion_image","fusion_builder_next_page","fusion_builder_row_inner","fusion_builder_row","fusion_slide","fusion_tab","fusion_testimonial","fusion_toggle"];
					list = elsList;

					return list.indexOf(shortcode) !== -1;
				},

				//BUTTONS OF ELEMENT INSIDE GRID
				editElement: function(children){
					console.warn(children);

					//(EDIT) SET REF TO __ELEMENT__
					contextWindow.$data.groups = children.params.groups;
				},
				cloneElement: function(children, index){
					var element = copyObj(children);
					this.$parent.childrens.insert(index, element);
				},
				saveElement: function(){
					alert();
				},
				deleteElement: function(index){
					this.$options.parent.childrens.splice(index, 1);
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

//returns [{title: "Alert", label: "alert"}, ... ]
var listElemnts = function(){
	var obj = [];

	for (var propname in fusionAllElements){
	  if(!fusionAllElements[propname].hide_from_builder && !fusionAllElements[propname].generator_only){
	    propvalue = fusionAllElements[propname];
	    //console.log(propname, propvalue.name);
	    var el = {title: propvalue.name, label: propname};
	    obj.push(el);
	  };
	};

	return obj;
}

listElements = listElemnts();

var elementsSlot = new Vue({
	el: "#elements_pseudoslot",
	data: {
		//REFERENCE of column model for pushing objects (of elements like button etc)
		activeobject: null,
		activecolumn: null,
		seen: false,
		query: '',
		//compile light list of elements for modal rendering
		elements: listElements,
	},
	computed: {
		//search inside elements modal
		computedList: function () {
			var vm = this
			return this.elements.filter(function (element) {
				return element.title.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1
			})
		}
	},
	methods: {
		//this click pushed elements into column
		//(only elements: because click method inside modal of elements)
		clickor: function(tag, title){
			//HERE WE CLOSE ELEMENTS MODAL
			this.seen = false;

			elobj = copyObj(fusionAllElements[tag]);
			elobj.name = title;
			//elobj.isActive = false;

			//here we insert element into column
			this.activecolumn.push(elobj);

			//problem: context will not work for container, row and columns
			contextTabs = elobj.params.groups;

			this.activeobject = elobj;

			//(INSERT) SET REF TO NEWLY ADDED __ELEMENT__
			contextWindow.$data.groups = this.activeobject.params.groups;
			//AND SET SUB TITLE WITH ELEMENT NAME IN THE "SIDEBAR MDOAL"
			contextWindow.subtitle = this.activeobject.name;
			//FIX bug with remembering default tab name - highlight only last selected name
			//contextWindow.selectedtabx = "General"
		}
	}
})

//CENTRALIZED STATE FOR CONTEXT OF SELECTED ELEMENT
var contextTabs = copyObj(fusionAllElements.fusion_button.params.groups);

/** vvv CONTEXT OF WINDOW  <keep-alive><depo v-bind:is="currentTabComponent"></depo></keep-alive> vvv **/
//OBJs DATA OF COMPONENTS 'tab-customization', 'tab-pages', 'tab-options'
var tab_cust = {
	props: ['groups', 'subtitle', 'selectedtabx', 'descrseen'],
  template: templ3,
  methods: {
  	renderPicker: function(){
  		setTimeout(function(){
	  		var target = document.querySelectorAll('input.spectrum');

		    // set hooks for each target element
		    for (var i = 0, len = target.length; i < len; ++i) {
		    		var p = document.querySelectorAll('p.spectrum')[i];
		    		var picker = new CP(target[i], false, p);
		        picker.on("change", function(color) {
		            this.target.value = '#' + color;
		            lay.active_dom_el.style.backgroundColor = '#' + color;
		        });

		        // ...
				    picker.fit = function() { // do nothing ...
				        this.picker.style.left = this.picker.style.top = "";
				    };

				    // add a `static` class to the color picker panel
				    picker.picker.classList.add('static');

				    // force to show the color picker panel
				    picker.enter();

		    }
	  	}, 1);
  }


  }
};
var tab_pages = {
  template: '<div>Pages component</div>'
};
var tab_options = {
  template: '<h4 style="color: hotpink;">Options component</h4>'
}

//todo: bug 1) new object but membered tab name 2) another state of editor change last tab
//MANAGEMENT OF SIDEBAR COMPONENT LIVES HERE
var contextWindow = new Vue({
	el: "#contextside",
	components: {
    'tab-customization': tab_cust,
    'tab-pages': tab_pages,
    'tab-options': tab_options
  },
	data: {
		selectedtabx: "General",
		//element title above options and under main title
		subtitle: "Sidebar subtitle",
		groups: contextTabs,
		descrseen: false,
		//selectedTab: null,
		//default active button and state (further we call component for template binding)
		currentTab: 'Customization',
		//list of buttons of menu
		tabs: ['Customization', 'Pages', 'Options']
	},
	computed: {
		currentTabComponent: function () {
			//create name of component 'tab-' + 'pages' = 'tab-pages' for calling bind component
			//<keep-alive><depo v-bind:is="currentTabComponent"></depo></keep-alive>
		  return 'tab-' + this.currentTab.toLowerCase();
		}
	}
});
/** ^^^ CONTEXT OF WINDOW  <keep-alive><depo v-bind:is="currentTabComponent"></depo></keep-alive> ^^^ **/

//todo (1906 6.8.18): connect click on lay and element in grid HL + context in sidebar
//todo (2218 6.8.18): correct bug with 1_2 inside context for columns
//todo (0034 6.8.18): change context to before or next element or column, container at removing actually edited element
//todo (1331 7.8.18): create first editing template for element in sidebar