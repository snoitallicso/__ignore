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
		return console.error("Object must be a flat array!")
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

var lay = new Vue({
	el: '.layout-container',
	data: layObj,
	components: {
		'childrens-component': {
			props: ['childrens', 'shortcode'],
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
			template: '<div class="pretempl">{{shortcode}}<templ v-on:click.native.stop="clickedE(children)" v-for="children in childrens" v-bind:childrens="children.childrens" v-bind:key="children.id" v-bind:class="[children.shortcode, {active: children.isActive}]" :shortcode="children.shortcode" v-bind:style="children"></templ></div>'
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

					//OPTIMIZE FOR ONE CALL!!!!!!!!!!!!!!!!!! (+ LOOP)

					var column = function(type){
						var colobj = copyObj(fusionAllElements.fusion_builder_column);
						colobj.params.type = type;
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
			props: ['childrens', 'ltype', 'tag', 'ind', 'newel', 'title', 'shortcode'],
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
					secondSideContent.openColumnsModal();
					console.log(this.$props);
					this.$props.childrens.push(this.$props.childrens[0]);
				},
				openModalAddElmnt: function(e){
					secondSideContent.openElementsModal()
					elementsSlot.activecolumn = this.$props.childrens;
				},
				click: function(index){
					//alert()
				},
				alert: function(){
					console.log("ALEET!")
				},
				isEl: function(shortcode){
					//list = ["fusion_builder_blank_page","fusion_li_item","fusion_builder_column_inner","fusion_builder_column","fusion_builder_container","fusion_content_box","fusion_counter_box","fusion_counter_circle","fusion_flip_box","fusion_image","fusion_builder_next_page","fusion_builder_row_inner","fusion_builder_row","fusion_slide","fusion_tab","fusion_testimonial","fusion_toggle"];
					list = elsList;

					return list.indexOf(shortcode) !== -1;
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
	  if(!fusionAllElements[propname].hide_from_builder){
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
		activecolumn: null,
		seen: false,
		query: '',
		//compile light list of elements for modal rendering
		elements: listElements,
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

			var elobj = copyObj(fusionAllElements[tag]);
			elobj.name = title;
			//elobj.isActive = false;

			this.activecolumn.push(elobj);
		}
	}
})

Vue.component('tab-customization', {
  data: function () {
    return {
      posts: [
        {
          id: 1,
          title: 'General',
          content: '<p>Dont wait for the storm to pass, dance in the rain kick up litter decide to want nothing to do with my owner today demand to be let outside at once, and expect owner to wait for me as i think about it cat cat moo moo lick ears lick paws so make meme, make cute face but lick the other cats. Kitty poochy chase imaginary bugs, but stand in front of the computer screen. Sweet beast cat dog hate mouse eat string barf pillow no baths hate everything stare at guinea pigs. My left donut is missing, as is my right loved it, hated it, loved it, hated it scoot butt on the rug cat not kitten around</p>'
        },
        {
          id: 2,
          title: 'Background',
          content: '<p>Bushwick blue bottle scenester helvetica ugh, meh four loko. Put a bird on it lumbersexual franzen shabby chic, street art knausgaard trust fund shaman scenester live-edge mixtape taxidermy viral yuccie succulents. Keytar poke bicycle rights, crucifix street art neutra air plant PBR&B hoodie plaid venmo. Tilde swag art party fanny pack vinyl letterpress venmo jean shorts offal mumblecore. Vice blog gentrify mlkshk tattooed occupy snackwave, hoodie craft beer next level migas 8-bit chartreuse. Trust fund food truck drinking vinegar gochujang.</p>'
        },
        {
          id: 3,
          title: 'Design',
          content: '<p>Icing dessert soufflé lollipop chocolate bar sweet tart cake chupa chups. Soufflé marzipan jelly beans croissant toffee marzipan cupcake icing fruitcake. Muffin cake pudding soufflé wafer jelly bear claw sesame snaps marshmallow. Marzipan soufflé croissant lemon drops gingerbread sugar plum lemon drops apple pie gummies. Sweet roll donut oat cake toffee cake. Liquorice candy macaroon toffee cookie marzipan.</p>'
        }
      ],
      selectedPost: null
    }
  },
  template: '\
    <div class="sidebar_content">\
      <div class="sidebar_title"><h1>Sidebar Title</h1></div>\
      <div class="sidebar_tabs"><ul>\
        <li\
          v-for="post in posts"\
          v-bind:key="post.id"\
          v-bind:class="[\'side_tab\', { \'active\': post === selectedPost }]"\
          v-on:click="selectedPost = post"\
        >\
          {{ post.title }}\
        </li>\
      </ul></div>\
      <div class="content_area">\
        <div \
          v-if="selectedPost"\
          class="dynamic-component-demo-post"\
        >\
          <h3>{{ selectedPost.title }}</h3>\
          <div v-html="selectedPost.content"></div>\
        </div>\
        <strong v-else>\
          Click on a blog title to the left to view it.\
        </strong>\
      </div>\
    </div>\
  ',
  // template: '\
  //   <div class="">\
  //     <div class="sidebar_title"><h1>Sidebar Title</h1></div>\
  //     <div class="sidebar_tabs"><ul>\
  //       <li\
  //         v-for="post in posts"\
  //         v-bind:key="post.id"\
  //         v-bind:class="[\'side_tab\', { \'active\': post === selectedPost }]"\
  //         v-on:click="selectedPost = post"\
  //       >\
  //         {{ post.title }}\
  //       </li>\
  //     </ul></div>\
  //     <div class="content_area">\
  //       <div \
  //         v-if="selectedPost"\
  //         class="dynamic-component-demo-post"\
  //       >\
  //         <h3>{{ selectedPost.title }}</h3>\
  //         <div v-html="selectedPost.content"></div>\
  //       </div>\
  //       <strong v-else>\
  //         Click on a blog title to the left to view it.\
  //       </strong>\
  //     </div>\
  //   </div>\
  // ',
  methods: {
    alert: function(message){
      console.log(message)
    }
  }
})

Vue.component('tab-pages', {
  template: '<div>Pages component</div>'
})
Vue.component('tab-options', {
  template: '<div>Options component</div>'
})

new Vue({
	el: "#contextside",
	data: {
		currentTab: 'Customization',
		tabs: ['Customization', 'Pages', 'Options']
	},
	computed: {
		currentTabComponent: function () {
		  console.log('tab-' + this.currentTab.toLowerCase())
		  return 'tab-' + this.currentTab.toLowerCase()
		}
	}
})

