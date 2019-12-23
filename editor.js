//templ0 = document.getElementsByClassName("templ")[0].innerHTML;
schema_templ = document.getElementsByClassName("schema-templ")[0];
sidedemos = document.getElementsByClassName("side-demos-popup")[0];
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

//COLORS ARRAY FOR ICONS
/*colorrs = ["red", "orange", "yellow", "green", "blue", "violet"]
icons = document.getElementsByClassName("socnets")[0].getElementsByTagName("a")
for (i=0; i<colorrs.length;i++){
	icons[i].style.backgroundColor = colorrs[i];
}*/

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

Vue.directive('demo', function (el, binding) {
  console.log(binding.value)
})

var lay = new Vue({
	//LAYOUT TEMPLATE
	el: '.layout-container',
	//data: layObj.layout,
	data: {
		childrens: layObj.layout.childrens,
		styleObject: layObj.styleObject,
		fullwidth: page_settings.fullwidth,
		active_dom_el: null,
		likera: 42,
		message: 'Hello world!',

		/*PERSONE ELEMENT*/
		elements_list: ['box1', 'box2', 'box3', 'box4'],
		colorInput: ""
		/*PERSONE ELEMENT*/

	},
	props: ['shortcode', 'isfheight'],
	components: {
		//COMPONENT INSIDE LAYOUT TEMPLATE DIV
		'childrens-component': {
			props: ['childrens', 'shortcode', 'params', 'sto', 'title', 'dim','styleObject', 'isfheight', 'isfullwcontainer', 'fullwidth', 'cl', 'likes', 'likera', 'gchildrens'],
			name: 'templ',
			methods: {
				classish: function (params){
					
					var classobj = [];
					
					//make the round options
					//DESIGN OPTIONS GROUP
					if(params.groups.Design){
						if(params.groups.Animation.stretch){
							classobj.push(
								{fspan: params.groups.Design.stretch.default == 'Yes'},
								{nospan: params.groups.Design.stretch.default == 'No'}
							)
						}
						if(params.groups.Animation.color){
							classobj.push(
								[params.groups.Design.color.default.replace(' ','').toLowerCase()]
							)
						}
						if(params.groups.Animation.type){
							classobj.push(
								{'b-3d': params.groups.Design.type.default == '3D'},
								{'b-flat': params.groups.Design.type.default == 'Flat'}
							)
						}
						if(params.groups.Animation.shape){
							classobj.push(
								{'square': params.groups.Design.shape.default == 'Square'},
								{'pill': params.groups.Design.shape.default == 'Pill'},
								{'round': params.groups.Design.shape.default == 'Round'}
							)
						}
						if(params.groups.Animation.icon_position){
							classobj.push(
								{'licon': params.groups.Design.icon_position.default == 'Left'}
							)
						}
						if(params.groups.Animation.icon_divider){
							classobj.push(
								{'divider': params.groups.Design.icon_divider.default == 'Yes'}
							)
						}
						if(params.groups.Animation.icon){
							classobj.push(
								params.groups.Design.icon.value + ' fa'
							)
						}
					}
					//ANIMATION OPTIONS GROUP
					if(params.groups.Animation){
						//Animation Type
						if(params.groups.Animation.animation_type){
							classobj.push(
								{'bounce': params.groups.Animation.animation_type.default == 'Bounce' && params.groups.Animation.animation_direction.default.toLowerCase() == 'static'},
								{'bounceinleft': params.groups.Animation.animation_type.default == 'Bounce' && params.groups.Animation.animation_direction.default.toLowerCase() == 'left'},
								{'bounceinright': params.groups.Animation.animation_type.default == 'Bounce' && params.groups.Animation.animation_direction.default.toLowerCase() == 'right'},
								{'bounceinup': params.groups.Animation.animation_type.default == 'Bounce' && params.groups.Animation.animation_direction.default.toLowerCase() == 'top'},
								{'bounceindown': params.groups.Animation.animation_type.default == 'Bounce' && params.groups.Animation.animation_direction.default.toLowerCase() == 'bottom'},

								{'flash': params.groups.Animation.animation_type.default == 'Flash'},

								{'rubberband': params.groups.Animation.animation_type.default == 'Rubberband'},

								{'shake': params.groups.Animation.animation_type.default == 'Shake'},

								{'fadein': params.groups.Animation.animation_type.default == 'Fade' && params.groups.Animation.animation_direction.default.toLowerCase() == 'static'},
								{'fadeinleft': params.groups.Animation.animation_type.default == 'Fade' && params.groups.Animation.animation_direction.default.toLowerCase() == 'left'},
								{'fadeinright': params.groups.Animation.animation_type.default == 'Fade' && params.groups.Animation.animation_direction.default.toLowerCase() == 'right'},
								{'fadeinup': params.groups.Animation.animation_type.default == 'Fade' && params.groups.Animation.animation_direction.default.toLowerCase() == 'top'},
								{'fadeindown': params.groups.Animation.animation_type.default == 'Fade' && params.groups.Animation.animation_direction.default.toLowerCase() == 'bottom'},

								{'slideinleft': params.groups.Animation.animation_type.default == 'Slide' && params.groups.Animation.animation_direction.default.toLowerCase() == 'left'},
								{'slideinright': params.groups.Animation.animation_type.default == 'Slide' && params.groups.Animation.animation_direction.default.toLowerCase() == 'right'},
								{'slideinup': params.groups.Animation.animation_type.default == 'Slide' && params.groups.Animation.animation_direction.default.toLowerCase() == 'top'},
								{'slideindown': params.groups.Animation.animation_type.default == 'Slide' && params.groups.Animation.animation_direction.default.toLowerCase() == 'bottom'},

								{'zoomin': params.groups.Animation.animation_type.default == 'Zoom' && params.groups.Animation.animation_direction.default.toLowerCase() == 'static'},
								{'zoominleft': params.groups.Animation.animation_type.default == 'Zoom' && params.groups.Animation.animation_direction.default.toLowerCase() == 'left'},
								{'zoominright': params.groups.Animation.animation_type.default == 'Zoom' && params.groups.Animation.animation_direction.default.toLowerCase() == 'right'},
								{'zoominup': params.groups.Animation.animation_type.default == 'Zoom' && params.groups.Animation.animation_direction.default.toLowerCase() == 'top'},
								{'zoomindown': params.groups.Animation.animation_type.default == 'Zoom' && params.groups.Animation.animation_direction.default.toLowerCase() == 'bottom'}
							);
						}
					}
					//GENERAL OPTIONS GROUP
					if(params.groups.General){
						if(params.groups.General.icon_position){
							classobj.push(
								{'bottom': params.groups.General.icon_position.default == 'Bottom'}
							)
						}
						if(params.groups.General.social_icon_tooltip){
							classobj.push(
								{'tltp-bottom': params.groups.General.social_icon_tooltip.default == 'Bottom'},
								{'tltp-left': params.groups.General.social_icon_tooltip.default == 'Left'},
								{'tltp-right': params.groups.General.social_icon_tooltip.default == 'Right'}
							)
						}
						if(params.groups.General.social_icon_boxed){
							classobj.push(
								{'boxed-icons': params.groups.General.social_icon_boxed.default == 'Yes'}
							)
						}	
						//Alert Type (only?)
						if(params.groups.General.type){
							classobj.push(
								/*{'gen': params.groups.General.type.default == 'General' },*/
								{'err': params.groups.General.type.default == 'Error' },
								{'succ': params.groups.General.type.default == 'Success' },
								{'notc': params.groups.General.type.default == 'Notice' }
							);
						}
						//Alignment
						if(params.groups.General.alignment){
							classobj.push(params.groups.General.alignment.default);
						}
						//CSS Class
						if(params.groups.General.class){
							classobj.push([params.groups.General.class.value]);
						}
						//Element Visibility
						if(params.groups.General.hide_on_mobile){
								classobj.push(
									{'no-l-v': params.groups.General.hide_on_mobile.default.indexOf('large-visibility') == -1 },
									{'no-m-v': params.groups.General.hide_on_mobile.default.indexOf('medium-visibility') == -1 },
									{'no-s-v': params.groups.General.hide_on_mobile.default.indexOf('small-visibility') == -1 }
								);
						}
						//Hover Type
						if(params.groups.General.hover_type){
							classobj.push(
								{'izoomin': params.groups.General.hover_type.default == 'Zoom In' },
								{'izoomout': params.groups.General.hover_type.default == 'Zoom Out' },
								{'iliftup': params.groups.General.hover_type.default == 'Lift Up' }
							)
						}
						if(params.groups.General.pic_style){
							classobj.push(
								{'glow': params.groups.General.pic_style.default == 'Glow' },
								{'dropshadow': params.groups.General.pic_style.default == 'Drop Shadow' },
								{'bshdw': params.groups.General.pic_style.default == 'Bottom Shadow' }
							)
						}
						if(params.groups.General.align){
							classobj.push(
								{'left': params.groups.General.align.default == 'Left' },
								{'right': params.groups.General.align.default == 'Right' },
								{'center': params.groups.General.align.default == 'Center' }
							)
						}
						if(params.groups.General.content_alignment){
							classobj.push(
								{'left': params.groups.General.content_alignment.default == 'Left' },
								{'right': params.groups.General.content_alignment.default == 'Right'},
								{'center': params.groups.General.content_alignment.default == 'Center'}
							)
						}
						if(params.groups.General.box_shadow){
							classobj.push(
								{'shdw': params.groups.General.box_shadow.default == 'Yes' }
							)
						}
						if(params.groups.General.shadow){
							classobj.push(
								{'bshdw': params.groups.General.shadow.default == 'Yes'}								
							)
						}
						if(params.groups.General.highlightposition){
							classobj.push(
								{'lbrd': params.groups.General.highlightposition.default == 'Left'},
								{'rbrd': params.groups.General.highlightposition.default == 'Right'},
								{'tbrd': params.groups.General.highlightposition.default == 'Top'},
								{'bbrd': params.groups.General.highlightposition.default == 'Bottom'}
							)
						}
						if(params.groups.General.content_alignment){
							classobj.push(
								{'left': params.groups.General.content_alignment.default == 'Left' },
								{'right': params.groups.General.content_alignment.default == 'Right'},
								{'center': params.groups.General.content_alignment.default == 'Center'}
							)
						}
						if(params.groups.General.button_size){
							classobj.push(
								{'smallb': params.groups.General.button_size.default == 'Small'},
								{'mediumb': params.groups.General.button_size.default == 'Medium'},
								{'largeb': params.groups.General.button_size.default == 'Large'},
								{'x-largeb': params.groups.General.button_size.default == 'XLarge'}
							)
						}
						if(params.groups.General.button_shape){
							classobj.push(
								{'b-3d': params.groups.General.button_type.default == '3D'},
								{'b-flat': params.groups.General.button_type.default == 'Flat'}
							)
						}
						if(params.groups.General.button_shape){
							classobj.push(
								{'square': params.groups.General.button_shape.default == 'Square'},
								{'pill': params.groups.General.button_shape.default == 'Pill'},
								{'round': params.groups.General.button_shape.default == 'Round'}
							)
						}
						if(params.groups.General.buttoncolor){
							classobj.push(
								{'orange': params.groups.General.buttoncolor.default == 'Orange'},
								{'darkgreen': params.groups.General.buttoncolor.default == 'Dark Green'},
								{'green': params.groups.General.buttoncolor.default == 'Green'},
								{'blue': params.groups.General.buttoncolor.default == 'Blue'},
								{'red': params.groups.General.buttoncolor.default == 'Red'},
								{'pink': params.groups.General.buttoncolor.default == 'Pink'},
								{'lightgray': params.groups.General.buttoncolor.default == 'Light Gray'},
								{'darkgray': params.groups.General.buttoncolor.default == 'Dark Gray'}
							)
						}
						/*if(params.groups.General.one){
							classobj.push(

							)
						}*/
					}
					
					return classobj;
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

					if(element_type === 'Button'){
						//console.log(children.params.groups.Design.button_gradient_bottom_color.value)
						var style_object = {
							backgroundImage: 'linear-gradient( to top, '+children.params.groups.Design.button_gradient_bottom_color.value+', '+ children.params.groups.Design.button_gradient_top_color.value +' )',
							color: children.params.groups.Design.accent_color.value,
							borderWidth: children.params.groups.Design.border_width.value
							/*paddingTop: children.params.groups.Design.padding.value.padding_top,
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
							borderColor: children.params.groups.Design.border_color.value*/
						}
					}
					if(element_type === 'Person'){
						var style_object = {
							backgroundColor: children.params.groups.General.background_color.value
						};
					}
					if(element_type === 'Youtube'){
						var style_object = {
							maxWidth: children.params.groups.General.dimensions.value.width,
							maxHeight: children.params.groups.General.dimensions.value.height
						};
					}
					if(element_type === 'Image'){
						var boxShadowValue;
						if(children.params.groups.General.style_type.default == 'Glow'){
							boxShadowValue = '0 0 3px';
						}
						if(children.params.groups.General.style_type.default == 'Drop Shadow'){
							boxShadowValue = '2px 3px 7px';
						}
						if(children.params.groups.General.style_type.default == 'Bottom Shadow'){
							boxShadowValue = '0 17px 10px';
						}
						var style_object = {
							boxShadow: boxShadowValue + ' ' + children.params.groups.General.stylecolor.value,
							borderWidth: children.params.groups.General.bordersize.value,
							borderColor: children.params.groups.General.bordercolor.value,
							borderRadius: children.params.groups.General.borderradius.value + 'px'
						};
					}
					if(element_type === 'Alert'){
						var style_object = {
							borderWidth: children.params.groups.General.border_size.value,
							backgroundColor: children.params.groups.General.background_color.value
						}
					}
					if(element_type === 'Tagline Box'){
						var style_object = {
							borderWidth: children.params.groups.General.border.value,
							borderColor: children.params.groups.General.bordercolor.value,
							backgroundColor: children.params.groups.General.backgroundcolor.value,
							marginTop: children.params.groups.General.dimensions.value.margin_top,
							marginBottom: children.params.groups.General.dimensions.value.margin_bottom
						}
					}
					if(element_type === 'Pricing Table'){
						var style_object = {
							//backgroundColor: children.params.groups.General.backgroundcolor.value
						}
					}

					/*else {
						var style_object = {
							backgroundColor: 'violet'
						}
					}*/
					return style_object;
				},
				socialnets: function (){
					return [
						['facebook','blogger', 'deviantart', 'digg', 'dribbble', 'dropbox',  'flickr', 'forrst', 'googleplus', 'instagram', 'linkedin', 'myspace', 'paypal', 'pinterest', 'reddit', 'rss', 'skype', 'soundcloud', 'spotify', 'tumblr', 'twitter', 'vimeo', 'vk', 'xing', 'yahoo', 'yelp', 'youtube', 'email'],
						['red','blue','green']
					]
				},
				//return filtered socialnets
				clac: function (){
					return [
						['facebook','blogger', 'deviantart', 'digg', 'dribbble', 'dropbox',  'flickr', 'forrst', 'googleplus', 'instagram', 'linkedin', 'myspace', 'paypal', 'pinterest', 'reddit', 'rss', 'skype', 'soundcloud', 'spotify', 'tumblr', 'twitter', 'vimeo', 'vk', 'xing', 'yahoo', 'yelp', 'youtube', 'email'],
						['red','blue','green']
					]
				},
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
				isEl: function(shortcode){
					//list = ["fusion_builder_blank_page","fusion_li_item","fusion_builder_column_inner","fusion_builder_column","fusion_builder_container","fusion_content_box","fusion_counter_box","fusion_counter_circle","fusion_flip_box","fusion_image","fusion_builder_next_page","fusion_builder_row_inner","fusion_builder_row","fusion_slide","fusion_tab","fusion_testimonial","fusion_toggle"];
					list = elsList;

					return list.indexOf(shortcode) !== -1;
				},
				editle: function(e){
                     /*
                     todo: perf (input rerendering redundancy after native rendering by typing)
                     maybe <keep-alive> ?
                     */
                    this.params.groups.General.element_content.value = e.target.innerText;
				}
			},
			computed: {
				selectedBoxes: function(){
					
					var els = this.socElements
					
					var values = Object.keys(els).map( function(e){ return els[e] } )

					var filteredvals = values.filter(function(el){ return el.value }) //filter for with values
					//.map((el, ndx) => ({value: el.value, backcolor: this.colors[ndx]}))

					var color_values = []
					
					if(this.colors !== undefined || this.bcolors !== undefined){
						
						for(i=0; i<filteredvals.length; i++){
							color_values.push(
								{
									value: filteredvals[i].value,
									title: filteredvals[i].title,
									cn: filteredvals[i].cn,
									backcolor: this.bcolors[i],
									color: this.colors[i]
								}
							)
						}
					} else {
						var color_values = filteredvals;
					}

					return color_values

				},
				colors: function() {
					//HERE I NEED TO BIND field from editor
					
					var result = elementsSlot.activeobject.params.groups.General.social_icon_colors.social_icon_colors;
					
					if(result !== undefined){
						//split color input string on to ['orange', 'pink', 'purple'] …
						return result.split(',');
					} else {
						return ['']
					}
				},
				bcolors: function() {
					var result = elementsSlot.activeobject.params.groups.General.social_icon_boxed_colors.social_icon_boxed_colors;
					
					if(result !== undefined){
						//split color input string on to ['orange', 'pink', 'purple'] …
						return result.split(',');
					} else {
						return ['']
					}
				},
				socElements: function(){
					var parent = elementsSlot.activeobject.params.groups.General;
					
					return {
						0: { title: 'Facebook', value: parent.facebook.value, cn: 'tfacebook' },
						1: { title: 'Blogger', value: parent.blogger.value, cn: 'tblogger' },
						2: { title: 'Deviantart', value: parent.deviantart.value, cn: 'tdeviantart' },
						3: { title: 'Digg', value: parent.digg.value, cn: 'tdigg' },
						4: { title: 'Dribbble', value: parent.dribbble.value, cn: 'tdribbble' },
						5: { title: 'Dropbox', value: parent.dropbox.value, cn: 'tdropbox' },
						6: { title: 'Flickr', value: parent.flickr.value, cn: 'tflickr' },
						7: { title: 'Forrst', value: parent.forrst.value, cn: 'tforrst' },
						8: { title: 'Google+', value: parent.googleplus.value, cn: 'tgplus' },
						9: { title: 'Instagram', value: parent.instagram.value, cn: 'tinstagram' },
						10: { title: 'Linkedin', value: parent.linkedin.value, cn: 'tlinkedin' },
						11: { title: 'Myspace', value: parent.myspace.value, cn: 'tmyspace' },
						12: { title: 'Paypal', value: parent.paypal.value, cn: 'tpaypal' },
						13: { title: 'Pinterest', value: parent.pinterest.value, cn: 'tpinterest' },
						14: { title: 'Reddit', value: parent.reddit.value, cn: 'treddit' },
						15: { title: 'RSS', value: parent.rss.value, cn: 'trss' },
						16: { title: 'Skype', value: parent.skype.value, cn: 'tskype' },
						17: { title: 'Soundcloud', value: parent.soundcloud.value, cn: 'tsoundcloud' },
						18: { title: 'Spotify', value: parent.spotify.value, cn: 'tspotify' },
						19: { title: 'Tumblr', value: parent.tumblr.value, cn: 'ttumblr' },
						20: { title: 'Twitter', value: parent.twitter.value, cn: 'ttwitter' },
						21: { title: 'Vimeo', value: parent.vimeo.value, cn: 'tvimeo' },
						22: { title: 'VK', value: parent.vk.value, cn: 'tvk' },
						23: { title: 'Xing', value: parent.xing.value, cn: 'txing' },
						24: { title: 'Yahoo', value: parent.yahoo.value, cn: 'tyahoo' },
						26: { title: 'Yelp', value: parent.yelp.value, cn: 'tyelp' },
						27: { title: 'Youtube', value: parent.youtube.value, cn: 'tyoutube' },
						28: { title: 'Email', value: parent.email.value, cn: 'temail' }
					}
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
			}
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
		//AVAILABLE ELEMENTS WNDOW AND MENU OPTIONS TO SEEN
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
		},

		//MODAL WINDOW FOR EDITING PRICING TABLE, TABLE AND INSERT ITEMS
		openSchemaEditor: function(){
			/*this.seen = false;
			gridTabs.seen = true;
			gridContentLibrary.seen = true;
			gridMainTabs.titles[0].isActive = false;
			gridMainTabs.titles[1].isActive = true;*/

		}
	}
});

//schemaEditorState.activeElHaveSchema = true;
var schemaEditorState = new Vue({
	data: {
		activeElHaveSchema: false,
		pricingTableGrid: false,
		maxrows: 0,
		columns_count: 0,
		//launch equalizeRowsOnce method once
		firstCalc: false,
		firstCalc_MC: false
	},
	props: ['super_title', 'super_subtitle', 'gchildrens', 'ch', 'column', 'eq', 'cpr', 'overtitles'],
	el: '.schema-editor',
	name: 'schemaed',
	template: schema_templ,
	methods: {
		closeTableEditor: function(){
			this.activeElHaveSchema = false;
		},
		/***************************************/
		maincalc: function(){
			var cols = elementsSlot.activeobject.params.groups.General.element_content.gchildrens;
			console.log('maincalc!!!')
			this.columns_count = cols.length;
				
			//CREATE LIST OF COUNT
			var rows_list_count = [];
				
			//FOR EVERY COLUMN
			for(i=0; i< this.columns_count; i++){
				
				//COUNT ROWS PER COLUMN
				rows_per_col = 0;
				
				for(ia=0; ia<cols[i].gchildrens.length; ia++){
					//IGNORE OTHER SUBOBJECTS THAN fusion_pricing_row shortcode
					if(cols[i].gchildrens[ia].shortcode == 'fusion_pricing_row'){
						rows_per_col += 1;
					}
				}
				
				//PUSH NUM OF ROWS INSIDE LIST
				rows_list_count.push(rows_per_col);
			}
			
			//SORT LIST FROM MIN TO MAX
			
			//BECAUSE SORT() IS MUTABLE
			rows_list_count_orig = copyObj(rows_list_count);
			rows_list_count.sort();
			
			//CHECK 'FLATNESS' OF THE LIST
			//IF ROWS DISTRIBUTED NOT EQUALLY
			this.maxrows = rows_list_count[rows_list_count.length - 1]; //3
		},
		tcalc: function(){
			return [
				this.maxrows,
				this.columns_count
			]
		},
		/***************************************/
		
		
		//LAUNCH ONCE FOR EQUAL NUM OR ROWS PER EACH COLUMN
		//INSIDE EDITOR (FOR EDITABLE INPUTS)
		equalizeRowsOnce: function(gchildrens){
			if(this.firstCalc == false){
				this.firstCalc = true;
				this.etAddRow(gchildrens, true);
			}
		},
		equalizeRowsOnce_MC: function(gchildrens){
			if(this.firstCalc_MC == false){
				this.firstCalc_MC = true;
				this.etAddRow(gchildrens, true);
			}
		},
		etAddCol: function(gchildrens){
			this.columns_count +=  1;
			var pcolumn = {"shortcode":"fusion_pricing_column","title":"","standout":"no","class":"","id":"","overtitles": {"super_title": "1111ololo111Super Title","super_subtitle": "1111ololo111Super Subtitle Centered"},"gchildrens":[{"shortcode":"fusion_pricing_price","currency":"$","price":"","currency_position":"right","time":""},{"shortcode":"fusion_pricing_row","text":"Feature1"},{"shortcode":"fusion_pricing_footer","text":""}]};
			
			var gchildren = copyObj(pcolumn);
			gchildrens.push(gchildren);
			this.etAddRow(gchildrens, true);
		},
		calcCols: function(gchildrens){
			console.log(gchildrens, gchildrens.length)
			this.columns_count = gchildrens.length;
		},
		etAddRow: function(gchildrens, equalize){
			console.log('start etAddRow (maxrows):', this.maxrows)
			//default for equalization rows
			var plusOneRow = 0;
			
			if(!equalize){
				//value 1 as +1 to rows count if we 'Add row' into table
				plusOneRow = 1;
			}
			//WARNING
			//THIS CODE IS QUICK UGLY SOLUTION FOR PRICING TABLE ELEMENT
			//EVERY TIME WHEN NEW FEATURE ROW ADDED WE NEED TO ADD IT FOR EVERY OTHER COLUMN EQUALLY
			//SO WE INSERT NEW AND EMPTY ROWS FOR OTHER COLUMNS
			//BUT WE DELETE EMPTY ROWS BEFORE CONVERTING BACK INTO SHORTCODE
			
			var rows_list_count, rows_per_col;
			
			this.columns_count = gchildrens.length;
			
			//CREATE LIST OF COUNT
			rows_list_count = [];
				
			//FOR EVERY COLUMN
			for(i=0; i<gchildrens.length; i++){
				
				//COUNT ROWS PER COLUMN
				rows_per_col = 0;
				
				
				for(ia=0; ia<gchildrens[i].gchildrens.length; ia++){
					//IGNORE OTHER SUBOBJECTS THAN fusion_pricing_row shortcode
					if(gchildrens[i].gchildrens[ia].shortcode == 'fusion_pricing_row'){
						rows_per_col += 1;
					}
				}
				
				//PUSH NUM OF ROWS INSIDE LIST
				rows_list_count.push(rows_per_col);
			}
			
			//SORT LIST FROM MIN TO MAX
			
			//BECAUSE SORT() IS MUTABLE
			rows_list_count_orig = copyObj(rows_list_count);
			rows_list_count.sort();
			
			//CHECK 'FLATNESS' OF THE LIST
			//IF ROWS DISTRIBUTED NOT EQUALLY
			var rc = rows_list_count[rows_list_count.length - 1];
			
			if(rc == undefined){
				//undefined + 0 = NaN = Render Error
				rc = 0;
			}
			
			var maxcount = rc;
			
			this.maxrows = rc + plusOneRow; //3
			
			//PUSH ROWS PER EVERY COLUMN + 1 NEW ROW FOR ALL
			for(i=0; i<rows_list_count_orig.length; i++){
				//MAX - CURRENT + 1 ROW (exception: first equalization)
				var rowstoadd = maxcount - rows_list_count_orig[i] + plusOneRow;
				//PUSH
				for(z=0; z<rowstoadd; z++){
					//insert before last (fusion_pricing_footer) element
					gchildrens[i].gchildrens.insert(-1, {"shortcode": "fusion_pricing_row", "text": ""})
				}
			}
			console.log('end etAddRow (maxrows):', this.maxrows);
		},
		etDeleteRow: function(gchildrens, row_index){
			//console.log('row_index:', row_index)
			this.maxrows -=  1;
			for(i=0;i<gchildrens.length; i++){
				//console.log(gchildrens[i].gchildrens[row_index])
				gchildrens[i].gchildrens.splice(row_index, 1);
			}
		},
		etCopy: function(gchildrens, index){
			this.columns_count +=  1;
			var gchildren = copyObj(gchildrens[index]);
			gchildrens.push(gchildren)
		},
		etDelete: function(gchildrens, index){
			this.columns_count -=  1;
			gchildrens.splice(index, 1);
		},
		etEditRow: function(col_index, row_index){
			console.log(col_index, row_index)
			//console.log(this)
			//console.log(e.target.value)
			//this.params.groups.General.element_content.value = e.target.innerText;
		},
		fuck: function(gchildrens, col_index, row_index){
			console.log(1013, gchildrens, col_index, row_index)
			console.log(gchildrens[col_index - 1].gchildrens[row_index].text)
		}
	}
});

var sideDemos = new Vue({
	data: {
		show: false,
		demo_selected: false,
		savedSettings: undefined
	},
	template: sidedemos,
	el: '.demo-selector',
	name: 'sidedemos',
	methods: {
		demos_list: function(){
			return elementsSlot.activeobject.params.groups.General.type.value;
		},
		selectDemo: function(index){
			//open note message that settings were changed
			this.demo_selected = true;
			
			//save settings (but at first time before changing)
			this.savedSettings = copyObj(elementsSlot.activeobject.params.groups);
			
			//changing of one of the available layouts for element
			elementsSlot.activeobject.params.groups.General.type.default = index;
			//select style for this demo element from demo style collection
			
			var shortcode = elementsSlot.activeobject.shortcode;
			
			this.insertDemoStyle(shortcode, index);
		},
		insertDemoStyle: function(shortcode, demo_index){
			//actual editable object (properties): elementsSlot.activeobject.params.groups
			
			obj1 = elementsSlot.activeobject.params.groups;
			obj2 = demoStyles[shortcode][demo_index].params.groups;
			
			MergeRecursive(obj1, obj2);
		},
		undoSettings: function(){
			var currEl = elementsSlot.activeobject.params.groups;
			MergeRecursive(currEl, this.savedSettings);
			
			//clear saved settings because we revert
			//?
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
			console.log(1132, "gridState.activeModelChildrens", gridState.activeModelChildrens)
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
					console.log(1194, "gridState.activeModelChildrens", gridState.activeModelChildrens)
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
					//WINDOW WITH AVAILABLE ELEMENTS TO INSERT
					secondSideContent.openElementsModal();
					//just set refer to column for pushing element
					elementsSlot.activecolumn = this.$props.childrens;
					//console.log(this.$props.childrens);
					//console.info(this)
				},
				isEl: function(shortcode){
					//list = ["fusion_builder_blank_page","fusion_li_item","fusion_builder_column_inner","fusion_builder_column","fusion_builder_container","fusion_content_box","fusion_counter_box","fusion_counter_circle","fusion_flip_box","fusion_image","fusion_builder_next_page","fusion_builder_row_inner","fusion_builder_row","fusion_slide","fusion_tab","fusion_testimonial","fusion_toggle"];
					list = elsList;

					return list.indexOf(shortcode) !== -1;
				},

				//BUTTONS OF ELEMENT INSIDE GRID
				editElement: function(children){
//					console.warn(children);

					//(EDIT) SET REF TO __ELEMENT__
//					console.log(contextWindow.$data.groups, children.params.groups, 960)
					contextWindow.$data.groups = children.params.groups;
					if(children.shortcode == "fusion_pricing_table"){
						//WARNING: THIS CODE DUPLICATE insertElement method of elementsSlot
						schemaEditorState.gchildrens = children.params.groups.General.element_content.gchildrens;
						schemaEditorState.overtitles = children.params.groups.General.element_content.overtitles;
						
						//recalc rows (schemaEditorState.maxrows)
						schemaEditorState.etAddRow(schemaEditorState.gchildrens, true);
						//recalc cols (schemaEditorState.columns_count)
						schemaEditorState.calcCols(schemaEditorState.gchildrens);
						
						schemaEditorState.activeElHaveSchema = true;
						schemaEditorState.pricingTableGrid = true;
					}
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
function MergeRecursive(obj1, obj2){
	for (p in obj2) {
		try {
			if (obj2[p].constructor == Object){
				obj1[p] = MergeRecursive(obj1[p], obj2[p]);
			} else {
				obj1[p] = obj2[p];
			}
		}
		catch(e){
			obj1[p] = obj2[p];	
		}
	};
	return obj1;
}

listElements = listElemnts();

//elementsSlot is 
var elementsSlot = new Vue({
	el: "#elements_pseudoslot",
	data: {
		//REFERENCE of column model for pushing objects (of elements like button etc)
		activeobject: null,
		activecolumn: null,
		seen: false,
		query: '',
		//compile light list of elements for modal rendering
		elements: listElements
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
		//insertElement is the method of grid editor, we have window modal and rendered elements list, we click element and insert it inside model
		//:click=insertElement() pushed elements inside column
		//(only elements: because click method inside modal of elements)
		//THIS FUNCTION RUNS BY CLICK ON ELEMENT FROM WINDOW WITH ELEMENTS TO INSERT
		//LOOK openElementsModal INSIDE _EDITOR.JS_ AND grid-content-modal_insert INSIDE _INDEX1.HTML_
		insertElement: function(tag, title){
			
			//CLOSE ELEMENTS MODAL
			this.seen = false;

			elobj = copyObj(fusionAllElements[tag]);
			elobj.name = title;
			elobj.isActive = false;
			
			//If we add Person element we insert parsed element inside
			//Just for work
			if(title === "Pricing Table"){
				//we need calc max rows and equalize num of rows for first time before render
				schemaEditorState.firstCalc_MC = false;
				schemaEditorState.gchildrens = elobj.params.groups.General.element_content.gchildrens;
				schemaEditorState.overtitles = elobj.params.groups.General.element_content.overtitles;
			}

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

			//OPEN SCHEMA EDITOR MODAL FOR ELEMENT WITH RICH EDITABLE STRUCTURE
			if( ['Table', 'Pricing Table'].indexOf(title) !== -1 ){
				schemaEditorState.activeElHaveSchema = true;
				schemaEditorState.pricingTableGrid = true;
			}
		}
	}
})



//CENTRALIZED STATE FOR CONTEXT OF SELECTED ELEMENT
var contextTabs = copyObj(fusionAllElements.fusion_alert.params.groups);

/** vvv CONTEXT OF WINDOW  <keep-alive><depo v-bind:is="currentTabComponent"></depo></keep-alive> vvv **/
//OBJs DATA OF COMPONENTS 'tab-customization', 'tab-pages', 'tab-options'
var tab_cust = {
	props: ['groups', 'subtitle', 'selectedtabx', 'descrseen'],
	template: templ3,
	methods: {
		custTabClick: function(selectedtabx, index){
			this.selectedtabx = index;
			if(index == "Demos"){
				//pin grid while select
				//direct dirty DOM way because conflict between components
				document.getElementById("grid").className = 'pin-grid';
				
				//open demo sidebar
				sideDemos.show = true;
			}
		},
		isSocNetOption: function(param_name){
			//TOO MUCH CHECKINGS FOR OPTION LISTS! We no need to run this method
			//for elements except 'Person' and another with soc net icons
			//CASE 1
//			console.log('computation')
			var nets = ['facebook','blogger', 'deviantart', 'digg', 'dribbble', 'dropbox',  'flickr', 'forrst', 'googleplus', 'instagram', 'linkedin', 'myspace', 'paypal', 'pinterest', 'reddit', 'rss', 'skype', 'soundcloud', 'spotify', 'tumblr', 'twitter', 'vimeo', 'vk', 'xing', 'yahoo', 'yelp', 'youtube', 'email'];
			return nets.indexOf(param_name) !== -1;
		},
		showOption: function (heading, groups) {
			//this method checks might or not be showed option inside sidebar
			//as example relate to type of element or closed option of color picker if color is none

			//show by default
			var show = true;

			if (heading === "Divider Color"){
				//close Divider Color option if type of pricing element is 2 (1 index from 0)
				if(groups['General'].type.default == '1'){
					show = false;
				}
			}

			return show;
		}
	}
  /*,
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


  }*/
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