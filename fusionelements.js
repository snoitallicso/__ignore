var fusionAllElements = {
    "fusion_alert": {
        "name": "Alert",
        "shortcode": "fusion_alert",
        "icon": "fa fa-lg fa-exclamation-triangle",
        "preview": "C:/xamppp/htdocs/wp_avada542/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-alert-preview.php",
        "preview_id": "fusion-builder-block-module-alert-preview-template",
        "allow_generator": true,
        "params": {
            "groups": {
                "General": {
                    "type": {
                        "type": "select",
                        "heading": "Alert Type",
                        "description": "Select the type of alert message. Choose custom for advanced color options below.",
                        "param_name": "type",
                        "default": "error",
                        "value": {
                            "general": "General",
                            "error": "Error",
                            "success": "Success",
                            "notice": "Notice",
                            "custom": "Custom"
                        }
                    },
                    "accent_color": {
                        "type": "colorpicker",
                        "heading": "Accent Color",
                        "description": "Custom setting only. Set the border, text and icon color for custom alert boxes.",
                        "param_name": "accent_color",
                        "value": "#808080",
                        "dependency": [{
                            "element": "type",
                            "value": "custom",
                            "operator": "=="
                        }]
                    },
                    "background_color": {
                        "type": "colorpicker",
                        "heading": "Background Color",
                        "description": "Custom setting only. Set the background color for custom alert boxes.",
                        "param_name": "background_color",
                        "value": "#ffffff",
                        "dependency": [{
                            "element": "type",
                            "value": "custom",
                            "operator": "=="
                        }]
                    },
                    "border_size": {
                        "type": "range",
                        "heading": "Border Width",
                        "param_name": "border_size",
                        "default": 1,
                        "description": "Custom setting only. Set the border width for custom alert boxes. In pixels.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#alert_border_size\" target=\"_blank\" rel=\"noopener noreferrer\">1px</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-border_size\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"border_size\" value=\"\" data-default=\"1px\">Reset to default.</a><span>Using default value.</span></span>",
                        "choices": {
                            "min": "0",
                            "max": "20",
                            "step": "1"
                        },
                        "dependency": [{
                            "element": "type",
                            "value": "custom",
                            "operator": "=="
                        }]
                    },
                    "icon": {
                        "type": "iconpicker",
                        "heading": "Select Custom Icon",
                        "param_name": "icon",
                        "value": "",
                        "description": "Click an icon to select, click again to deselect.",
                        "dependency": [{
                            "element": "type",
                            "value": "custom",
                            "operator": "=="
                        }]
                    },
                    "box_shadow": {
                        "type": "radio_button_set",
                        "heading": "Box Shadow",
                        "description": "Display a box shadow below the alert box.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#alert_box_shadow\" target=\"_blank\" rel=\"noopener noreferrer\">No</a>.",
                        "param_name": "box_shadow",
                        "default": "",
                        "value": {
                            "": "Default",
                            "yes": "Yes",
                            "no": "No"
                        }
                    },
                    "element_content": {
                        "type": "tinymce",
                        "heading": "Alert Content",
                        "description": "Insert the alert&#039;s content.",
                        "param_name": "element_content",
                        "value": "Your Content Goes Here",
                        "placeholder": true
                    },
                    "hide_on_mobile": {
                        "type": "checkbox_button_set",
                        "heading": "Element Visibility",
                        "param_name": "hide_on_mobile",
                        "value": {
                            "small-visibility": "Small Screen",
                            "medium-visibility": "Medium Screen",
                            "large-visibility": "Large Screen"
                        },
                        "default": ["small-visibility", "medium-visibility", "large-visibility"],
                        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Element Options</a>."
                    },
                    "class": {
                        "type": "textfield",
                        "heading": "CSS Class",
                        "param_name": "class",
                        "value": "",
                        "description": "Add a class to the wrapping HTML element."
                    },
                    "id": {
                        "type": "textfield",
                        "heading": "CSS ID",
                        "param_name": "id",
                        "value": "",
                        "description": "Add an ID to the wrapping HTML element."
                    }
                },
                "Animation": {
                    "animation_type": {
                        "type": "select",
                        "heading": "Animation Type",
                        "description": "Select the type of animation to use on the element.",
                        "param_name": "animation_type",
                        "value": {
                            "": "None",
                            "bounce": "Bounce",
                            "fade": "Fade",
                            "flash": "Flash",
                            "rubberBand": "Rubberband",
                            "shake": "Shake",
                            "slide": "Slide",
                            "zoom": "Zoom"
                        },
                        "default": "",
                        "group": "Animation"
                    },
                    "animation_direction": {
                        "type": "radio_button_set",
                        "heading": "Direction of Animation",
                        "description": "Select the incoming direction for the animation.",
                        "param_name": "animation_direction",
                        "value": {
                            "down": "Top",
                            "right": "Right",
                            "up": "Bottom",
                            "left": "Left",
                            "static": "Static"
                        },
                        "default": "left",
                        "group": "Animation",
                        "dependency": [{
                            "element": "animation_type",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "animation_speed": {
                        "type": "range",
                        "heading": "Speed of Animation",
                        "description": "Type in speed of animation in seconds (0.1 - 1).",
                        "param_name": "animation_speed",
                        "min": "0.1",
                        "max": "1",
                        "step": "0.1",
                        "value": "0.3",
                        "group": "Animation",
                        "dependency": [{
                            "element": "animation_type",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "animation_offset": {
                        "type": "select",
                        "heading": "Offset of Animation",
                        "description": "Controls when the animation should start.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#animation_offset\" target=\"_blank\" rel=\"noopener noreferrer\">Top Of Element Hits Bottom Of Viewport</a>.",
                        "param_name": "animation_offset",
                        "value": {
                            "": "Default",
                            "top-into-view": "Top of element hits bottom of viewport",
                            "top-mid-of-view": "Top of element hits middle of viewport",
                            "bottom-in-view": "Bottom of element enters viewport"
                        },
                        "default": "",
                        "group": "Animation",
                        "dependency": [{
                            "element": "animation_type",
                            "value": "",
                            "operator": "!="
                        }]
                    }
                }
            }
        },
        "remove_from_atts": []
    },
    "fusion_builder_blank_page": {
        "name": "Blank Page",
        "shortcode": "fusion_builder_blank_page",
        "hide_from_builder": true,
        "params": {
            "groups": {
                "General": {
                    "blank_page_content": {
                        "type": "textfield",
                        "heading": "",
                        "description": "",
                        "param_name": "blank_page_content",
                        "value": ""
                    }
                }
            }
        },
        "remove_from_atts": []
    },
    "fusion_blog": {
        "name": "Blog",
        "shortcode": "fusion_blog",
        "icon": "fusiona-blog",
        "preview": "C:/xamppp/htdocs/wp_avada542/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-blog-preview.php",
        "preview_id": "fusion-builder-block-module-blog-preview-template",
        "params": {
            "groups": {
                "General": {
                    "layout": {
                        "type": "select",
                        "heading": "Blog Layout",
                        "description": "Select the layout for the element",
                        "param_name": "layout",
                        "default": "large",
                        "value": {
                            "large": "Large",
                            "medium": "Medium",
                            "large alternate": "Large Alternate",
                            "medium alternate": "Medium Alternate",
                            "grid": "Grid",
                            "timeline": "Timeline",
                            "masonry": "Masonry"
                        }
                    },
                    "blog_grid_columns": {
                        "type": "range",
                        "heading": "Grid Layout # of Columns",
                        "description": "Set the number of columns per row.",
                        "param_name": "blog_grid_columns",
                        "value": "3",
                        "min": "1",
                        "max": "6",
                        "step": "1",
                        "dependency": [{
                            "element": "layout",
                            "value": "medium",
                            "operator": "!="
                        }, {
                            "element": "layout",
                            "value": "large",
                            "operator": "!="
                        }, {
                            "element": "layout",
                            "value": "medium alternate",
                            "operator": "!="
                        }, {
                            "element": "layout",
                            "value": "large alternate",
                            "operator": "!="
                        }, {
                            "element": "layout",
                            "value": "timeline",
                            "operator": "!="
                        }]
                    },
                    "blog_grid_column_spacing": {
                        "type": "range",
                        "heading": "Column Spacing",
                        "description": "Insert the amount of spacing between blog posts.",
                        "param_name": "blog_grid_column_spacing",
                        "value": "40",
                        "min": "0",
                        "step": "1",
                        "max": "300",
                        "dependency": [{
                            "element": "layout",
                            "value": "medium",
                            "operator": "!="
                        }, {
                            "element": "layout",
                            "value": "large",
                            "operator": "!="
                        }, {
                            "element": "layout",
                            "value": "medium alternate",
                            "operator": "!="
                        }, {
                            "element": "layout",
                            "value": "large alternate",
                            "operator": "!="
                        }, {
                            "element": "layout",
                            "value": "timeline",
                            "operator": "!="
                        }]
                    },
                    "equal_heights": {
                        "type": "radio_button_set",
                        "heading": "Equal Heights",
                        "description": "Set to yes to display grid boxes with equal heights per row.",
                        "param_name": "equal_heights",
                        "default": "no",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        },
                        "dependency": [{
                            "element": "layout",
                            "value": "grid",
                            "operator": "=="
                        }, {
                            "element": "blog_grid_columns",
                            "value": 1,
                            "operator": ">"
                        }]
                    },
                    "number_posts": {
                        "type": "range",
                        "heading": "Posts Per Page",
                        "description": "Select number of posts per page.  Set to -1 to display all. Set to 0 to use number of posts from Settings &gt; Reading.",
                        "param_name": "number_posts",
                        "value": "6",
                        "min": "-1",
                        "max": "25",
                        "step": "1"
                    },
                    "offset": {
                        "type": "range",
                        "heading": "Post Offset",
                        "description": "The number of posts to skip. ex: 1.",
                        "param_name": "offset",
                        "value": "0",
                        "min": "0",
                        "max": "25",
                        "step": "1",
                        "dependency": [{
                            "element": "number_posts",
                            "value": "-1",
                            "operator": "!="
                        }]
                    },
                    "pull_by": {
                        "type": "radio_button_set",
                        "heading": "Pull Posts By",
                        "description": "Choose to show posts by category or tag.",
                        "param_name": "pull_by",
                        "default": "category",
                        "value": {
                            "category": "Category",
                            "tag": "Tag"
                        }
                    },
                    "cat_slug": {
                        "type": "multiple_select",
                        "heading": "Categories",
                        "description": "Select a category or leave blank for all.",
                        "param_name": "cat_slug",
                        "value": {
                            "uncategorized": "Uncategorized (1)"
                        },
                        "default": "",
                        "dependency": [{
                            "element": "pull_by",
                            "value": "tag",
                            "operator": "!="
                        }]
                    },
                    "exclude_cats": {
                        "type": "multiple_select",
                        "heading": "Exclude Categories",
                        "description": "Select a category to exclude.",
                        "param_name": "exclude_cats",
                        "value": {
                            "uncategorized": "Uncategorized (1)"
                        },
                        "default": "",
                        "dependency": [{
                            "element": "pull_by",
                            "value": "tag",
                            "operator": "!="
                        }]
                    },
                    "tag_slug": {
                        "type": "multiple_select",
                        "heading": "Tags",
                        "description": "Select a tag or leave blank for all.",
                        "param_name": "tag_slug",
                        "value": [],
                        "default": "",
                        "dependency": [{
                            "element": "pull_by",
                            "value": "category",
                            "operator": "!="
                        }]
                    },
                    "exclude_tags": {
                        "type": "multiple_select",
                        "heading": "Exclude Tags",
                        "description": "Select a tag to exclude.",
                        "param_name": "exclude_tags",
                        "value": [],
                        "default": "",
                        "dependency": [{
                            "element": "pull_by",
                            "value": "category",
                            "operator": "!="
                        }]
                    },
                    "orderby": {
                        "type": "select",
                        "heading": "Order By",
                        "description": "Defines how posts should be ordered.",
                        "param_name": "orderby",
                        "default": "date",
                        "value": {
                            "date": "Date",
                            "title": "Post Title",
                            "name": "Post Slug",
                            "author": "Author",
                            "comment_count": "Number of Comments",
                            "modified": "Last Modified",
                            "rand": "Random"
                        }
                    },
                    "order": {
                        "type": "radio_button_set",
                        "heading": "Order",
                        "description": "Defines the sorting order of posts.",
                        "param_name": "order",
                        "default": "DESC",
                        "value": {
                            "DESC": "Descending",
                            "ASC": "Ascending"
                        },
                        "dependency": [{
                            "element": "orderby",
                            "value": "rand",
                            "operator": "!="
                        }]
                    },
                    "thumbnail": {
                        "type": "radio_button_set",
                        "heading": "Show Thumbnail",
                        "description": "Display the post featured image.",
                        "param_name": "thumbnail",
                        "default": "yes",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        }
                    },
                    "title": {
                        "type": "radio_button_set",
                        "heading": "Show Title",
                        "description": "Display the post title below the featured image.",
                        "param_name": "title",
                        "default": "yes",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        }
                    },
                    "title_link": {
                        "type": "radio_button_set",
                        "heading": "Link Title To Post",
                        "description": "Choose if the title should be a link to the single post page.",
                        "default": "yes",
                        "param_name": "title_link",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        },
                        "dependency": [{
                            "element": "title",
                            "value": "yes",
                            "operator": "=="
                        }]
                    },
                    "excerpt": {
                        "type": "radio_button_set",
                        "heading": "Text display",
                        "description": "Controls if the blog post content is displayed as excerpt, full content or is completely disabled.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#blog_excerpt\" target=\"_blank\" rel=\"noopener noreferrer\">Excerpt</a>.",
                        "param_name": "excerpt",
                        "value": {
                            "": "Default",
                            "yes": "Excerpt",
                            "no": "Full Content",
                            "hide": "No Text"
                        },
                        "default": ""
                    },
                    "excerpt_length": {
                        "type": "range",
                        "heading": "Excerpt Length",
                        "description": "Insert the number of words/characters you want to show in the excerpt.",
                        "param_name": "excerpt_length",
                        "value": "10",
                        "min": "0",
                        "max": "500",
                        "step": "1",
                        "dependency": [{
                            "element": "excerpt",
                            "value": "no",
                            "operator": "!="
                        }, {
                            "element": "excerpt",
                            "value": "hide",
                            "operator": "!="
                        }]
                    },
                    "strip_html": {
                        "type": "radio_button_set",
                        "heading": "Strip HTML from Posts Content",
                        "description": "Choose to strip HTML from the post content.",
                        "param_name": "strip_html",
                        "default": "yes",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        },
                        "dependency": [{
                            "element": "excerpt",
                            "value": "no",
                            "operator": "!="
                        }, {
                            "element": "excerpt",
                            "value": "hide",
                            "operator": "!="
                        }]
                    },
                    "meta_all": {
                        "type": "radio_button_set",
                        "heading": "Show Meta Info",
                        "description": "Choose to show all meta data.",
                        "param_name": "meta_all",
                        "default": "yes",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        }
                    },
                    "meta_author": {
                        "type": "radio_button_set",
                        "heading": "Show Author Name",
                        "description": "Choose to show the author.",
                        "param_name": "meta_author",
                        "default": "yes",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        },
                        "dependency": [{
                            "element": "meta_all",
                            "value": "yes",
                            "operator": "=="
                        }]
                    },
                    "meta_categories": {
                        "type": "radio_button_set",
                        "heading": "Show Categories",
                        "description": "Choose to show the categories.",
                        "param_name": "meta_categories",
                        "default": "yes",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        },
                        "dependency": [{
                            "element": "meta_all",
                            "value": "yes",
                            "operator": "=="
                        }]
                    },
                    "meta_comments": {
                        "type": "radio_button_set",
                        "heading": "Show Comment Count",
                        "description": "Choose to show the comments.",
                        "param_name": "meta_comments",
                        "default": "yes",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        },
                        "dependency": [{
                            "element": "meta_all",
                            "value": "yes",
                            "operator": "=="
                        }]
                    },
                    "meta_date": {
                        "type": "radio_button_set",
                        "heading": "Show Date",
                        "description": "Choose to show the date.",
                        "param_name": "meta_date",
                        "default": "yes",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        },
                        "dependency": [{
                            "element": "meta_all",
                            "value": "yes",
                            "operator": "=="
                        }]
                    },
                    "meta_link": {
                        "type": "radio_button_set",
                        "heading": "Show Read More Link",
                        "description": "Choose to show the Read More link.",
                        "param_name": "meta_link",
                        "default": "yes",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        },
                        "dependency": [{
                            "element": "meta_all",
                            "value": "yes",
                            "operator": "=="
                        }]
                    },
                    "meta_tags": {
                        "type": "radio_button_set",
                        "heading": "Show Tags",
                        "description": "Choose to show the tags.",
                        "param_name": "meta_tags",
                        "default": "yes",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        },
                        "dependency": [{
                            "element": "meta_all",
                            "value": "yes",
                            "operator": "=="
                        }]
                    },
                    "scrolling": {
                        "type": "radio_button_set",
                        "heading": "Pagination Type",
                        "description": "Choose the type of pagination.",
                        "param_name": "scrolling",
                        "default": "pagination",
                        "value": {
                            "no": "No Pagination",
                            "pagination": "Pagination",
                            "infinite": "Infinite Scrolling",
                            "load_more_button": "Load More Button"
                        }
                    },
                    "grid_box_color": {
                        "type": "colorpickeralpha",
                        "heading": "Grid Box Color",
                        "description": "Controls the background color for the grid boxes.  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#timeline_bg_color\" target=\"_blank\" rel=\"noopener noreferrer\">rgba(255,255,255,0)</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-grid_box_color\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"grid_box_color\" value=\"\" data-default=\"rgba(255,255,255,0)\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "grid_box_color",
                        "value": "",
                        "default": "rgba(255,255,255,0)",
                        "dependency": [{
                            "element": "layout",
                            "value": "medium",
                            "operator": "!="
                        }, {
                            "element": "layout",
                            "value": "large",
                            "operator": "!="
                        }, {
                            "element": "layout",
                            "value": "medium alternate",
                            "operator": "!="
                        }, {
                            "element": "layout",
                            "value": "large alternate",
                            "operator": "!="
                        }]
                    },
                    "grid_element_color": {
                        "type": "colorpickeralpha",
                        "heading": "Grid Element Color",
                        "description": "Controls the color of borders/date box/timeline dots and arrows for the grid boxes.  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#timeline_color\" target=\"_blank\" rel=\"noopener noreferrer\">#ebeaea</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-grid_element_color\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"grid_element_color\" value=\"\" data-default=\"#ebeaea\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "grid_element_color",
                        "value": "",
                        "default": "#ebeaea",
                        "dependency": [{
                            "element": "layout",
                            "value": "medium",
                            "operator": "!="
                        }, {
                            "element": "layout",
                            "value": "large",
                            "operator": "!="
                        }, {
                            "element": "layout",
                            "value": "medium alternate",
                            "operator": "!="
                        }, {
                            "element": "layout",
                            "value": "large alternate",
                            "operator": "!="
                        }]
                    },
                    "grid_separator_style_type": {
                        "type": "select",
                        "heading": "Grid Separator Style",
                        "description": "Controls the line style of grid separators. <strong>Note:</strong> At least one meta data field must be enabled and excerpt or full content must be shown in order that the separator will be displayed.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#grid_separator_style_type\" target=\"_blank\" rel=\"noopener noreferrer\">Double Border Solid</a>.",
                        "param_name": "grid_separator_style_type",
                        "value": {
                            "": "Default",
                            "none": "No Style",
                            "single|solid": "Single Border Solid",
                            "double|solid": "Double Border Solid",
                            "single|dashed": "Single Border Dashed",
                            "double|dashed": "Double Border Dashed",
                            "single|dotted": "Single Border Dotted",
                            "double|dotted": "Double Border Dotted",
                            "shadow": "Shadow"
                        },
                        "default": "",
                        "dependency": [{
                            "element": "layout",
                            "value": "medium",
                            "operator": "!="
                        }, {
                            "element": "layout",
                            "value": "large",
                            "operator": "!="
                        }, {
                            "element": "layout",
                            "value": "medium alternate",
                            "operator": "!="
                        }, {
                            "element": "layout",
                            "value": "large alternate",
                            "operator": "!="
                        }, {
                            "element": "layout",
                            "value": "masonry",
                            "operator": "!="
                        }]
                    },
                    "grid_separator_color": {
                        "type": "colorpickeralpha",
                        "heading": "Grid Separator Color",
                        "description": "Controls the line style color of grid separators.  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#grid_separator_color\" target=\"_blank\" rel=\"noopener noreferrer\">#ebeaea</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-grid_separator_color\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"grid_separator_color\" value=\"\" data-default=\"#ebeaea\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "grid_separator_color",
                        "value": "",
                        "default": "#ebeaea",
                        "dependency": [{
                            "element": "layout",
                            "value": "medium",
                            "operator": "!="
                        }, {
                            "element": "layout",
                            "value": "large",
                            "operator": "!="
                        }, {
                            "element": "layout",
                            "value": "medium alternate",
                            "operator": "!="
                        }, {
                            "element": "layout",
                            "value": "large alternate",
                            "operator": "!="
                        }, {
                            "element": "layout",
                            "value": "masonry",
                            "operator": "!="
                        }]
                    },
                    "blog_grid_padding": {
                        "type": "dimension",
                        "remove_from_atts": true,
                        "heading": "Blog Grid Text Padding ",
                        "description": "Controls the padding for the blog text when using grid / masonry or timeline layout. Enter values including any valid CSS unit, ex: 30px, 25px, 0px, 25px.  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#blog_grid_padding\" target=\"_blank\" rel=\"noopener noreferrer\">30px, 25px, 20px, 25px</a>.",
                        "param_name": "blog_grid_padding",
                        "value": {
                            "padding_top": "",
                            "padding_right": "",
                            "padding_bottom": "",
                            "padding_left": ""
                        },
                        "dependency": [{
                            "element": "layout",
                            "value": "medium",
                            "operator": "!="
                        }, {
                            "element": "layout",
                            "value": "large",
                            "operator": "!="
                        }, {
                            "element": "layout",
                            "value": "medium alternate",
                            "operator": "!="
                        }, {
                            "element": "layout",
                            "value": "large alternate",
                            "operator": "!="
                        }]
                    },
                    "hide_on_mobile": {
                        "type": "checkbox_button_set",
                        "heading": "Element Visibility",
                        "param_name": "hide_on_mobile",
                        "value": {
                            "small-visibility": "Small Screen",
                            "medium-visibility": "Medium Screen",
                            "large-visibility": "Large Screen"
                        },
                        "default": ["small-visibility", "medium-visibility", "large-visibility"],
                        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Element Options</a>."
                    },
                    "class": {
                        "type": "textfield",
                        "heading": "CSS Class",
                        "description": "Add a class to the wrapping HTML element.",
                        "param_name": "class",
                        "value": ""
                    },
                    "id": {
                        "type": "textfield",
                        "heading": "CSS ID",
                        "description": "Add an ID to the wrapping HTML element.",
                        "param_name": "id",
                        "value": ""
                    }
                }
            }
        },
        "remove_from_atts": ["blog_grid_padding"]
    },
    "fusion_button": {
        "name": "Button",
        "shortcode": "fusion_button",
        "icon": "fusiona-check-empty",
        "preview": "C:/xamppp/htdocs/wp_avada542/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-button-preview.php",
        "preview_id": "fusion-builder-block-module-button-preview-template",
        "params": {
            "groups": {
                "General": {
                    "link": {
                        "type": "link_selector",
                        "heading": "Button URL",
                        "param_name": "link",
                        "value": "",
                        "description": "Add the button&#039;s url ex: http://example.com."
                    },
                    "element_content": {
                        "type": "textfield",
                        "heading": "Button Text",
                        "param_name": "element_content",
                        "value": "Button Text",
                        "description": "Add the text that will display on button."
                    },
                    "title": {
                        "type": "textfield",
                        "heading": "Button Title Attribute",
                        "param_name": "title",
                        "value": "",
                        "description": "Set a title attribute for the button link."
                    },
                    "target": {
                        "type": "radio_button_set",
                        "heading": "Button Target",
                        "description": "_self = open in same browser tab, _blank = open in new browser tab.",
                        "param_name": "target",
                        "default": "_self",
                        "value": {
                            "_self": "_self",
                            "_blank": "_blank"
                        }
                    },
                    "link_attributes": {
                        "type": "textfield",
                        "heading": "Button Additional Attributes",
                        "param_name": "link_attributes",
                        "value": "",
                        "description": "Add additional attributes to the anchor tag. Separate attributes with a whitespace and use single quotes on the values, doubles don&#039;t work. If you need to add square brackets, [ ], to your attributes, please use curly brackets, { }, instead. They will be replaced correctly on the frontend. ex: rel=&#039;nofollow&#039;."
                    },
                    "alignment": {
                        "type": "radio_button_set",
                        "heading": "Alignment",
                        "description": "Select the button&#039;s alignment.",
                        "param_name": "alignment",
                        "default": "",
                        "value": {
                            "": "Text Flow",
                            "left": "Left",
                            "center": "Center",
                            "right": "Right"
                        }
                    },
                    "modal": {
                        "type": "textfield",
                        "heading": "Modal Window Anchor",
                        "param_name": "modal",
                        "value": "",
                        "description": "Add the class name of the modal window you want to open on button click."
                    },
                    "hide_on_mobile": {
                        "type": "checkbox_button_set",
                        "heading": "Element Visibility",
                        "param_name": "hide_on_mobile",
                        "value": {
                            "small-visibility": "Small Screen",
                            "medium-visibility": "Medium Screen",
                            "large-visibility": "Large Screen"
                        },
                        "default": ["small-visibility", "medium-visibility", "large-visibility"],
                        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Element Options</a>."
                    },
                    "class": {
                        "type": "textfield",
                        "heading": "CSS Class",
                        "param_name": "class",
                        "value": "",
                        "description": "Add a class to the wrapping HTML element."
                    },
                    "id": {
                        "type": "textfield",
                        "heading": "CSS ID",
                        "param_name": "id",
                        "value": "",
                        "description": "Add an ID to the wrapping HTML element."
                    }
                },
                "Design": {
                    "color": {
                        "type": "select",
                        "heading": "Button Style",
                        "description": "Select the button&#039;s color. Select default or color name for theme options, or select custom to use advanced color options below.",
                        "param_name": "color",
                        "value": {
                            "default": "Default",
                            "custom": "Custom",
                            "green": "Green",
                            "darkgreen": "Dark Green",
                            "orange": "Orange",
                            "blue": "Blue",
                            "red": "Red",
                            "pink": "Pink",
                            "darkgray": "Dark Gray",
                            "lightgray": "Light Gray"
                        },
                        "default": "default",
                        "group": "Design"
                    },
                    "button_gradient_top_color": {
                        "type": "colorpickeralpha",
                        "heading": "Button Gradient Top Color",
                        "description": "Controls the top color of the button background.  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#button_gradient_top_color\" target=\"_blank\" rel=\"noopener noreferrer\">#78bca1</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-button_gradient_top_color\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"button_gradient_top_color\" value=\"\" data-default=\"#78bca1\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "button_gradient_top_color",
                        "value": "",
                        "group": "Design",
                        "default": "#78bca1",
                        "dependency": [{
                            "element": "color",
                            "value": "custom",
                            "operator": "=="
                        }]
                    },
                    "button_gradient_bottom_color": {
                        "type": "colorpickeralpha",
                        "heading": "Button Gradient Bottom Color",
                        "description": "Controls the bottom color of the button background.  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#button_gradient_bottom_color\" target=\"_blank\" rel=\"noopener noreferrer\">#78bca1</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-button_gradient_bottom_color\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"button_gradient_bottom_color\" value=\"\" data-default=\"#78bca1\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "button_gradient_bottom_color",
                        "value": "",
                        "group": "Design",
                        "default": "#78bca1",
                        "dependency": [{
                            "element": "color",
                            "value": "custom",
                            "operator": "=="
                        }]
                    },
                    "button_gradient_top_color_hover": {
                        "type": "colorpickeralpha",
                        "heading": "Button Gradient Top Hover Color",
                        "description": "Controls the top hover color of the button background.  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#button_gradient_top_color_hover\" target=\"_blank\" rel=\"noopener noreferrer\">#6fb297</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-button_gradient_top_color_hover\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"button_gradient_top_color_hover\" value=\"\" data-default=\"#6fb297\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "button_gradient_top_color_hover",
                        "value": "",
                        "group": "Design",
                        "default": "#6fb297",
                        "dependency": [{
                            "element": "color",
                            "value": "custom",
                            "operator": "=="
                        }]
                    },
                    "button_gradient_bottom_color_hover": {
                        "type": "colorpickeralpha",
                        "heading": "Button Gradient Bottom Hover Color",
                        "description": "Controls the bottom hover color of the button background.  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#button_gradient_bottom_color_hover\" target=\"_blank\" rel=\"noopener noreferrer\">#6fb297</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-button_gradient_bottom_color_hover\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"button_gradient_bottom_color_hover\" value=\"\" data-default=\"#6fb297\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "button_gradient_bottom_color_hover",
                        "value": "",
                        "group": "Design",
                        "default": "#6fb297",
                        "dependency": [{
                            "element": "color",
                            "value": "custom",
                            "operator": "=="
                        }]
                    },
                    "accent_color": {
                        "type": "colorpickeralpha",
                        "heading": "Button Accent Color",
                        "description": "Controls the color of the button border, divider, text and icon.  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#button_accent_color\" target=\"_blank\" rel=\"noopener noreferrer\">#ffffff</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-accent_color\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"accent_color\" value=\"\" data-default=\"#ffffff\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "accent_color",
                        "value": "",
                        "group": "Design",
                        "default": "#ffffff",
                        "dependency": [{
                            "element": "color",
                            "value": "custom",
                            "operator": "=="
                        }]
                    },
                    "accent_hover_color": {
                        "type": "colorpickeralpha",
                        "heading": "Button Accent Hover Color",
                        "description": "Controls the hover color of the button border, divider, text and icon.  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#button_accent_hover_color\" target=\"_blank\" rel=\"noopener noreferrer\">#ffffff</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-accent_hover_color\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"accent_hover_color\" value=\"\" data-default=\"#ffffff\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "accent_hover_color",
                        "value": "",
                        "group": "Design",
                        "default": "#ffffff",
                        "dependency": [{
                            "element": "color",
                            "value": "custom",
                            "operator": "=="
                        }]
                    },
                    "type": {
                        "type": "radio_button_set",
                        "heading": "Button Type",
                        "description": "Controls the button type.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#button_type\" target=\"_blank\" rel=\"noopener noreferrer\">Flat</a>.",
                        "param_name": "type",
                        "default": "",
                        "group": "Design",
                        "value": {
                            "": "Default",
                            "flat": "Flat",
                            "3d": "3D"
                        }
                    },
                    "bevel_color": {
                        "type": "colorpickeralpha",
                        "heading": "Button Bevel Color For 3D Mode",
                        "description": "Controls the bevel color of the button when using 3D button type.  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#button_bevel_color\" target=\"_blank\" rel=\"noopener noreferrer\">#54770F</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-bevel_color\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"bevel_color\" value=\"\" data-default=\"#54770F\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "bevel_color",
                        "value": "",
                        "group": "Design",
                        "default": "#54770F",
                        "dependency": [{
                            "element": "type",
                            "value": "flat",
                            "operator": "!="
                        }, {
                            "element": "color",
                            "value": "custom",
                            "operator": "=="
                        }, {
                            "element": "type",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "border_width": {
                        "type": "range",
                        "heading": "Button Border Width",
                        "param_name": "border_width",
                        "description": "Controls the border width. In pixels.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#button_border_width\" target=\"_blank\" rel=\"noopener noreferrer\">0</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-border_width\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"border_width\" value=\"\" data-default=\"0\">Reset to default.</a><span>Using default value.</span></span>",
                        "group": "Design",
                        "dependency": [{
                            "element": "color",
                            "value": "custom",
                            "operator": "=="
                        }],
                        "min": "0",
                        "max": "20",
                        "step": "1",
                        "value": "",
                        "default": "0"
                    },
                    "size": {
                        "type": "radio_button_set",
                        "heading": "Button Size",
                        "description": "Controls the button size.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#button_size\" target=\"_blank\" rel=\"noopener noreferrer\">Large</a>.",
                        "param_name": "size",
                        "default": "",
                        "group": "Design",
                        "value": {
                            "": "Default",
                            "small": "Small",
                            "medium": "Medium",
                            "large": "Large",
                            "xlarge": "X-Large"
                        }
                    },
                    "stretch": {
                        "type": "radio_button_set",
                        "heading": "Button Span",
                        "description": "Controls if the button spans the full width of its container.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#button_span\" target=\"_blank\" rel=\"noopener noreferrer\">No</a>.",
                        "param_name": "stretch",
                        "default": "default",
                        "group": "Design",
                        "value": {
                            "default": "Default",
                            "yes": "Yes",
                            "no": "No"
                        }
                    },
                    "shape": {
                        "type": "radio_button_set",
                        "heading": "Button Shape",
                        "description": "Controls the button shape.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#button_shape\" target=\"_blank\" rel=\"noopener noreferrer\">Square</a>.",
                        "param_name": "shape",
                        "default": "",
                        "group": "Design",
                        "value": {
                            "": "Default",
                            "square": "Square",
                            "pill": "Pill",
                            "round": "Round"
                        }
                    },
                    "icon": {
                        "type": "iconpicker",
                        "heading": "Icon",
                        "param_name": "icon",
                        "value": "",
                        "description": "Click an icon to select, click again to deselect.",
                        "group": "Design"
                    },
                    "icon_position": {
                        "type": "radio_button_set",
                        "heading": "Icon Position",
                        "description": "Choose the position of the icon on the button.",
                        "param_name": "icon_position",
                        "value": {
                            "left": "Left",
                            "right": "Right"
                        },
                        "default": "left",
                        "group": "Design",
                        "dependency": [{
                            "element": "icon",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "icon_divider": {
                        "type": "radio_button_set",
                        "heading": "Icon Divider",
                        "description": "Choose to display a divider between icon and text.",
                        "param_name": "icon_divider",
                        "default": "no",
                        "group": "Design",
                        "dependency": [{
                            "element": "icon",
                            "value": "",
                            "operator": "!="
                        }],
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        }
                    }
                },
                "Animation": {
                    "animation_type": {
                        "type": "select",
                        "heading": "Animation Type",
                        "description": "Select the type of animation to use on the element.",
                        "param_name": "animation_type",
                        "value": {
                            "": "None",
                            "bounce": "Bounce",
                            "fade": "Fade",
                            "flash": "Flash",
                            "rubberBand": "Rubberband",
                            "shake": "Shake",
                            "slide": "Slide",
                            "zoom": "Zoom"
                        },
                        "default": "",
                        "group": "Animation"
                    },
                    "animation_direction": {
                        "type": "radio_button_set",
                        "heading": "Direction of Animation",
                        "description": "Select the incoming direction for the animation.",
                        "param_name": "animation_direction",
                        "default": "left",
                        "group": "Animation",
                        "dependency": [{
                            "element": "animation_type",
                            "value": "",
                            "operator": "!="
                        }],
                        "value": {
                            "down": "Top",
                            "right": "Right",
                            "up": "Bottom",
                            "left": "Left",
                            "static": "Static"
                        }
                    },
                    "animation_speed": {
                        "type": "range",
                        "heading": "Speed of Animation",
                        "description": "Type in speed of animation in seconds (0.1 - 1).",
                        "param_name": "animation_speed",
                        "min": "0.1",
                        "max": "1",
                        "step": "0.1",
                        "value": "0.3",
                        "group": "Animation",
                        "dependency": [{
                            "element": "animation_type",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "animation_offset": {
                        "type": "select",
                        "heading": "Offset of Animation",
                        "description": "Controls when the animation should start.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#animation_offset\" target=\"_blank\" rel=\"noopener noreferrer\">Top Of Element Hits Bottom Of Viewport</a>.",
                        "param_name": "animation_offset",
                        "default": "",
                        "group": "Animation",
                        "dependency": [{
                            "element": "animation_type",
                            "value": "",
                            "operator": "!="
                        }],
                        "value": {
                            "": "Default",
                            "top-into-view": "Top of element hits bottom of viewport",
                            "top-mid-of-view": "Top of element hits middle of viewport",
                            "bottom-in-view": "Bottom of element enters viewport"
                        }
                    }
                }
            }
        },
        "remove_from_atts": []
    },
    "fusion_checklist": {
        "name": "Checklist",
        "shortcode": "fusion_checklist",
        "multi": "multi_element_parent",
        "element_child": "fusion_li_item",
        "icon": "fusiona-list-ul",
        "preview": "C:/xamppp/htdocs/wp_avada542/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-checklist-preview.php",
        "preview_id": "fusion-builder-block-module-checklist-preview-template",
        "params": {
            "groups": {
                "General": {
                    "element_content": {
                        "type": "tinymce",
                        "heading": "Content",
                        "description": "Enter some content for this contentbox.",
                        "param_name": "element_content",
                        "value": "[fusion_li_item icon=\"\"]Your Content Goes Here[/fusion_li_item]"
                    },
                    "icon": {
                        "type": "iconpicker",
                        "heading": "Select Icon",
                        "param_name": "icon",
                        "value": "",
                        "description": "Global setting for all list items, this can be overridden individually. Click an icon to select, click again to deselect."
                    },
                    "iconcolor": {
                        "type": "colorpicker",
                        "heading": "Checklist Icon Color",
                        "description": "Global setting for all list items.  Controls the color of the checklist icon.  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#checklist_icons_color\" target=\"_blank\" rel=\"noopener noreferrer\">#ffffff</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-iconcolor\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"iconcolor\" value=\"\" data-default=\"#ffffff\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "iconcolor",
                        "value": "",
                        "default": "#ffffff"
                    },
                    "circle": {
                        "type": "radio_button_set",
                        "heading": "Checklist Circle",
                        "description": "Global setting for all list items. Turn on if you want to display a circle background for checklists.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#checklist_circle\" target=\"_blank\" rel=\"noopener noreferrer\">Yes</a>.",
                        "param_name": "circle",
                        "default": "",
                        "value": {
                            "": "Default",
                            "yes": "Yes",
                            "no": "No"
                        }
                    },
                    "circlecolor": {
                        "type": "colorpickeralpha",
                        "heading": "Checklist Circle Color",
                        "description": "Global setting for all list items.  Controls the color of the checklist circle background.  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#checklist_circle_color\" target=\"_blank\" rel=\"noopener noreferrer\">#a0ce4e</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-circlecolor\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"circlecolor\" value=\"\" data-default=\"#a0ce4e\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "circlecolor",
                        "value": "",
                        "default": "#a0ce4e",
                        "dependency": [{
                            "element": "circle",
                            "value": "no",
                            "operator": "!="
                        }]
                    },
                    "size": {
                        "type": "textfield",
                        "heading": "Item Size",
                        "description": "Select the list item&#039;s size. In pixels (px), ex: 13px.",
                        "param_name": "size",
                        "value": "13px"
                    },
                    "hide_on_mobile": {
                        "type": "checkbox_button_set",
                        "heading": "Element Visibility",
                        "param_name": "hide_on_mobile",
                        "value": {
                            "small-visibility": "Small Screen",
                            "medium-visibility": "Medium Screen",
                            "large-visibility": "Large Screen"
                        },
                        "default": ["small-visibility", "medium-visibility", "large-visibility"],
                        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Element Options</a>."
                    },
                    "class": {
                        "type": "textfield",
                        "heading": "CSS Class",
                        "description": "Add a class to the wrapping HTML element.",
                        "param_name": "class",
                        "value": "",
                        "group": "General"
                    },
                    "id": {
                        "type": "textfield",
                        "heading": "CSS ID",
                        "description": "Add an ID to the wrapping HTML element.",
                        "param_name": "id",
                        "value": "",
                        "group": "General"
                    }
                }
            }
        },
        "remove_from_atts": []
    },
    "fusion_li_item": {
        "name": "List Item",
        "description": "Enter some content for this textblock",
        "shortcode": "fusion_li_item",
        "hide_from_builder": true,
        "allow_generator": true,
        "params": {
            "groups": {
                "General": {
                    "icon": {
                        "type": "iconpicker",
                        "heading": "Select Icon",
                        "param_name": "icon",
                        "value": "",
                        "description": "This setting will override the global setting. "
                    },
                    "element_content": {
                        "type": "tinymce",
                        "heading": "List Item Content",
                        "description": "Add list item content.",
                        "param_name": "element_content",
                        "value": "Your Content Goes Here",
                        "placeholder": true
                    }
                }
            }
        },
        "remove_from_atts": []
    },
    "fusion_code": {
        "name": "Code Block",
        "shortcode": "fusion_code",
        "icon": "fusiona-code",
        "escape_html": true,
        "params": {
            "groups": {
                "General": {
                    "element_content": {
                        "type": "code",
                        "heading": "Code",
                        "description": "Enter some content for this codeblock.",
                        "param_name": "element_content",
                        "value": ""
                    }
                }
            }
        },
        "remove_from_atts": []
    },
    "fusion_builder_column_inner": {
        "name": "Nested Column",
        "shortcode": "fusion_builder_column_inner",
        "hide_from_builder": true,
        "params": {
            "groups": {
                "General": {
                    "type": null ,
                    "center_content": {
                        "type": "radio_button_set",
                        "heading": "Center Content",
                        "description": "Set to &quot;Yes&quot; to center the content vertically. Equal heights on the parent container must be turned on.",
                        "param_name": "center_content",
                        "default": "no",
                        "group": "General",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        }
                    },
                    "hover_type": {
                        "type": "radio_button_set",
                        "heading": "Hover Type",
                        "description": "Select the hover effect type. This will disable links and hover effects on elements inside the column.",
                        "param_name": "hover_type",
                        "default": "none",
                        "value": {
                            "none": "None",
                            "zoomin": "Zoom In",
                            "zoomout": "Zoom Out",
                            "liftup": "Lift Up"
                        }
                    },
                    "link": {
                        "type": "link_selector",
                        "heading": "Link URL",
                        "description": "Add the URL the column will link to, ex: http://example.com.",
                        "param_name": "link",
                        "value": ""
                    },
                    "min_height": {
                        "type": "radio_button_set",
                        "heading": "Ignore Equal Heights",
                        "description": "Choose to ignore equal heights on this column if you are using equal heights on the surrounding container.",
                        "param_name": "min_height",
                        "default": "",
                        "group": "General",
                        "value": {
                            "none": "Yes",
                            "": "No"
                        }
                    },
                    "hide_on_mobile": {
                        "type": "checkbox_button_set",
                        "heading": "Column Visibility",
                        "param_name": "hide_on_mobile",
                        "value": {
                            "small-visibility": "Small Screen",
                            "medium-visibility": "Medium Screen",
                            "large-visibility": "Large Screen"
                        },
                        "default": ["small-visibility", "medium-visibility", "large-visibility"],
                        "description": "Choose to show or hide the column on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Element Options</a>."
                    },
                    "class": {
                        "type": "textfield",
                        "heading": "CSS Class",
                        "description": "Add a class to the wrapping HTML element.",
                        "param_name": "class",
                        "value": "",
                        "group": "General"
                    },
                    "id": {
                        "type": "textfield",
                        "heading": "CSS ID",
                        "description": "Add an ID to the wrapping HTML element.",
                        "param_name": "id",
                        "value": "",
                        "group": "General"
                    }
                },
                "Design": {
                    "background_color": {
                        "type": "colorpickeralpha",
                        "heading": "Background Color",
                        "description": "Controls the background color.",
                        "param_name": "background_color",
                        "value": "",
                        "group": "Design"
                    },
                    "background_image": {
                        "type": "upload",
                        "heading": "Background Image",
                        "description": "Upload an image to display in the background.",
                        "param_name": "background_image",
                        "value": "",
                        "group": "Design"
                    },
                    "background_position": {
                        "type": "select",
                        "heading": "Background Position",
                        "description": "Choose the postion of the background image.",
                        "param_name": "background_position",
                        "default": "left top",
                        "group": "Design",
                        "dependency": [{
                            "element": "background_image",
                            "value": "",
                            "operator": "!="
                        }],
                        "value": {
                            "left top": "Left Top",
                            "left center": "Left Center",
                            "left bottom": "Left Bottom",
                            "right top": "Right Top",
                            "right center": "Right Center",
                            "right bottom": "Right Bottom",
                            "center top": "Center Top",
                            "center center": "Center Center",
                            "center bottom": "Center Bottom"
                        }
                    },
                    "background_repeat": {
                        "type": "select",
                        "heading": "Background Repeat",
                        "description": "Choose how the background image repeats.",
                        "param_name": "background_repeat",
                        "value": {
                            "no-repeat": "No Repeat",
                            "repeat": "Repeat Vertically and Horizontally",
                            "repeat-x": "Repeat Horizontally",
                            "repeat-y": "Repeat Vertically"
                        },
                        "default": "no-repeat",
                        "group": "Design",
                        "dependency": [{
                            "element": "background_image",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "border_size": {
                        "type": "range",
                        "heading": "Border Size",
                        "description": "In pixels.",
                        "param_name": "border_size",
                        "value": "0",
                        "min": "0",
                        "max": "50",
                        "step": "1",
                        "group": "Design"
                    },
                    "border_color": {
                        "type": "colorpicker",
                        "heading": "Border Color",
                        "description": "Controls the border color.",
                        "param_name": "border_color",
                        "value": "",
                        "group": "Design",
                        "dependency": [{
                            "element": "border_size",
                            "value": "0",
                            "operator": "!="
                        }]
                    },
                    "border_style": {
                        "type": "radio_button_set",
                        "heading": "Border Style",
                        "description": "Controls the border style.",
                        "param_name": "border_style",
                        "default": "solid",
                        "group": "Design",
                        "dependency": [{
                            "element": "border_size",
                            "value": "0",
                            "operator": "!="
                        }],
                        "value": {
                            "solid": "Solid",
                            "dashed": "Dashed",
                            "dotted": "Dotted"
                        }
                    },
                    "padding": {
                        "type": "dimension",
                        "remove_from_atts": true,
                        "heading": "Padding",
                        "description": "In pixels (px), ex: 10px.",
                        "param_name": "padding",
                        "value": {
                            "padding_top": "",
                            "padding_right": "",
                            "padding_bottom": "",
                            "padding_left": ""
                        },
                        "group": "Design"
                    },
                    "dimension_margin": {
                        "type": "dimension",
                        "remove_from_atts": true,
                        "heading": "Margin",
                        "description": "Spacing above and below the column. In px, em or %, e.g. 10px.  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#col_margin\" target=\"_blank\" rel=\"noopener noreferrer\">0px, 20px</a>.",
                        "param_name": "dimension_margin",
                        "value": {
                            "margin_top": "",
                            "margin_bottom": ""
                        },
                        "group": "Design"
                    }
                },
                "Animation": {
                    "animation_type": {
                        "type": "select",
                        "heading": "Animation Type",
                        "description": "Select the type of animation to use on the element.",
                        "param_name": "animation_type",
                        "value": {
                            "": "None",
                            "bounce": "Bounce",
                            "fade": "Fade",
                            "flash": "Flash",
                            "rubberBand": "Rubberband",
                            "shake": "Shake",
                            "slide": "Slide",
                            "zoom": "Zoom"
                        },
                        "default": "",
                        "group": "Animation"
                    },
                    "animation_direction": {
                        "type": "radio_button_set",
                        "heading": "Direction of Animation",
                        "description": "Select the incoming direction for the animation.",
                        "param_name": "animation_direction",
                        "default": "left",
                        "group": "Animation",
                        "dependency": [{
                            "element": "animation_type",
                            "value": "",
                            "operator": "!="
                        }],
                        "value": {
                            "down": "Top",
                            "right": "Right",
                            "up": "Bottom",
                            "left": "Left",
                            "static": "Static"
                        }
                    },
                    "animation_speed": {
                        "type": "range",
                        "heading": "Speed of Animation",
                        "description": "Type in speed of animation in seconds (0.1 - 1).",
                        "param_name": "animation_speed",
                        "min": "0.1",
                        "max": "1",
                        "step": "0.1",
                        "value": "0.3",
                        "group": "Animation",
                        "dependency": [{
                            "element": "animation_type",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "animation_offset": {
                        "type": "select",
                        "heading": "Offset of Animation",
                        "description": "Controls when the animation should start.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#animation_offset\" target=\"_blank\" rel=\"noopener noreferrer\">Top Of Element Hits Bottom Of Viewport</a>.",
                        "param_name": "animation_offset",
                        "default": "",
                        "group": "Animation",
                        "dependency": [{
                            "element": "animation_type",
                            "value": "",
                            "operator": "!="
                        }],
                        "value": {
                            "": "Default",
                            "top-into-view": "Top of element hits bottom of viewport",
                            "top-mid-of-view": "Top of element hits middle of viewport",
                            "bottom-in-view": "Bottom of element enters viewport"
                        }
                    }
                }
            }
        },
        "remove_from_atts": ["padding", "dimension_margin"]
    },
    "fusion_builder_column": {
        "name": "Column",
        "shortcode": "fusion_builder_column",
        "hide_from_builder": true,
        "params": {
            "groups": {
                "General": {
                    "type": null ,
                    "center_content": {
                        "type": "radio_button_set",
                        "heading": "Center Content",
                        "description": "Set to &quot;Yes&quot; to center the content vertically. Equal heights on the parent container must be turned on.",
                        "param_name": "center_content",
                        "default": "no",
                        "group": "General",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        }
                    },
                    "link": {
                        "type": "link_selector",
                        "heading": "Link URL",
                        "description": "Add the URL the column will link to, ex: http://example.com. IMPORTANT: This will disable links on elements inside the column.",
                        "param_name": "link",
                        "value": ""
                    },
                    "target": {
                        "type": "radio_button_set",
                        "heading": "Link Target",
                        "description": "_self = open in same browser tab, _blank = open in new browser tab.",
                        "param_name": "target",
                        "default": "_self",
                        "value": {
                            "_self": "_self",
                            "_blank": "_blank"
                        }
                    },
                    "min_height": {
                        "type": "radio_button_set",
                        "heading": "Ignore Equal Heights",
                        "description": "Choose to ignore equal heights on this column if you are using equal heights on the surrounding container.",
                        "param_name": "min_height",
                        "default": "",
                        "group": "General",
                        "value": {
                            "none": "Yes",
                            "": "No"
                        }
                    },
                    "hide_on_mobile": {
                        "type": "checkbox_button_set",
                        "heading": "Column Visibility",
                        "param_name": "hide_on_mobile",
                        "value": {
                            "small-visibility": "Small Screen",
                            "medium-visibility": "Medium Screen",
                            "large-visibility": "Large Screen"
                        },
                        "default": ["small-visibility", "medium-visibility", "large-visibility"],
                        "description": "Choose to show or hide the column on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Element Options</a>."
                    },
                    "class": {
                        "type": "textfield",
                        "heading": "CSS Class",
                        "description": "Add a class to the wrapping HTML element.",
                        "param_name": "class",
                        "value": "",
                        "group": "General"
                    },
                    "id": {
                        "type": "textfield",
                        "heading": "CSS ID",
                        "description": "Add an ID to the wrapping HTML element.",
                        "param_name": "id",
                        "value": "",
                        "group": "General"
                    }
                },
                "Design": {
                    "background_color": {
                        "type": "colorpickeralpha",
                        "heading": "Background Color",
                        "description": "Controls the background color.",
                        "param_name": "background_color",
                        "value": "",
                        "group": "Design"
                    },
                    "background_image": {
                        "type": "upload",
                        "heading": "Background Image",
                        "description": "Upload an image to display in the background.",
                        "param_name": "background_image",
                        "value": "",
                        "group": "Design"
                    },
                    "background_position": {
                        "type": "select",
                        "heading": "Background Position",
                        "description": "Choose the postion of the background image.",
                        "param_name": "background_position",
                        "default": "left top",
                        "group": "Design",
                        "dependency": [{
                            "element": "background_image",
                            "value": "",
                            "operator": "!="
                        }],
                        "value": {
                            "left top": "Left Top",
                            "left center": "Left Center",
                            "left bottom": "Left Bottom",
                            "right top": "Right Top",
                            "right center": "Right Center",
                            "right bottom": "Right Bottom",
                            "center top": "Center Top",
                            "center center": "Center Center",
                            "center bottom": "Center Bottom"
                        }
                    },
                    "background_repeat": {
                        "type": "select",
                        "heading": "Background Repeat",
                        "description": "Choose how the background image repeats.",
                        "param_name": "background_repeat",
                        "default": "no-repeat",
                        "group": "Design",
                        "dependency": [{
                            "element": "background_image",
                            "value": "",
                            "operator": "!="
                        }],
                        "value": {
                            "no-repeat": "No Repeat",
                            "repeat": "Repeat Vertically and Horizontally",
                            "repeat-x": "Repeat Horizontally",
                            "repeat-y": "Repeat Vertically"
                        }
                    },
                    "hover_type": {
                        "type": "radio_button_set",
                        "heading": "Hover Type",
                        "description": "Select the hover effect type. IMPORTANT: For the effect to be noticeable, you&#039;ll need a background color/image, and/or a border enabled. This will disable links and hover effects on elements inside the column.",
                        "param_name": "hover_type",
                        "default": "none",
                        "value": {
                            "none": "None",
                            "zoomin": "Zoom In",
                            "zoomout": "Zoom Out",
                            "liftup": "Lift Up"
                        },
                        "group": "Design"
                    },
                    "border_size": {
                        "type": "range",
                        "heading": "Border Size",
                        "description": "Controls the border size of the column. In pixels.",
                        "param_name": "border_size",
                        "value": "0",
                        "min": "0",
                        "max": "50",
                        "step": "1",
                        "group": "Design"
                    },
                    "border_color": {
                        "type": "colorpicker",
                        "heading": "Border Color",
                        "description": "Controls the border color.",
                        "param_name": "border_color",
                        "value": "",
                        "group": "Design",
                        "dependency": [{
                            "element": "border_size",
                            "value": "0",
                            "operator": "!="
                        }]
                    },
                    "border_style": {
                        "type": "radio_button_set",
                        "heading": "Border Style",
                        "description": "Controls the border style.",
                        "param_name": "border_style",
                        "default": "solid",
                        "group": "Design",
                        "dependency": [{
                            "element": "border_size",
                            "value": "0",
                            "operator": "!="
                        }],
                        "value": {
                            "solid": "Solid",
                            "dashed": "Dashed",
                            "dotted": "Dotted"
                        }
                    },
                    "border_position": {
                        "type": "radio_button_set",
                        "heading": "Border Position",
                        "description": "Choose the postion of the border.",
                        "param_name": "border_position",
                        "default": "all",
                        "group": "Design",
                        "dependency": [{
                            "element": "border_size",
                            "value": "0",
                            "operator": "!="
                        }],
                        "value": {
                            "all": "All",
                            "top": "Top",
                            "right": "Right",
                            "bottom": "Bottom",
                            "left": "Left"
                        }
                    },
                    "padding": {
                        "type": "dimension",
                        "remove_from_atts": true,
                        "heading": "Padding",
                        "description": "In pixels (px), ex: 10px.",
                        "param_name": "padding",
                        "value": {
                            "padding_top": "",
                            "padding_right": "",
                            "padding_bottom": "",
                            "padding_left": ""
                        },
                        "group": "Design"
                    },
                    "dimension_margin": {
                        "type": "dimension",
                        "remove_from_atts": true,
                        "heading": "Margin",
                        "description": "In pixels (px), ex: 10px.  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#col_margin\" target=\"_blank\" rel=\"noopener noreferrer\">0px, 20px</a>.",
                        "param_name": "dimension_margin",
                        "value": {
                            "margin_top": "",
                            "margin_bottom": ""
                        },
                        "group": "Design"
                    }
                },
                "Animation": {
                    "animation_type": {
                        "type": "select",
                        "heading": "Animation Type",
                        "description": "Select the type of animation to use on the element.",
                        "param_name": "animation_type",
                        "value": {
                            "": "None",
                            "bounce": "Bounce",
                            "fade": "Fade",
                            "flash": "Flash",
                            "rubberBand": "Rubberband",
                            "shake": "Shake",
                            "slide": "Slide",
                            "zoom": "Zoom"
                        },
                        "default": "",
                        "group": "Animation"
                    },
                    "animation_direction": {
                        "type": "radio_button_set",
                        "heading": "Direction of Animation",
                        "description": "Select the incoming direction for the animation.",
                        "param_name": "animation_direction",
                        "value": {
                            "down": "Top",
                            "right": "Right",
                            "up": "Bottom",
                            "left": "Left",
                            "static": "Static"
                        },
                        "default": "left",
                        "group": "Animation",
                        "dependency": [{
                            "element": "animation_type",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "animation_speed": {
                        "type": "range",
                        "heading": "Speed of Animation",
                        "description": "Type in speed of animation in seconds (0.1 - 1).",
                        "param_name": "animation_speed",
                        "min": "0.1",
                        "max": "1",
                        "step": "0.1",
                        "value": "0.3",
                        "group": "Animation",
                        "dependency": [{
                            "element": "animation_type",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "animation_offset": {
                        "type": "select",
                        "heading": "Offset of Animation",
                        "description": "Controls when the animation should start.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#animation_offset\" target=\"_blank\" rel=\"noopener noreferrer\">Top Of Element Hits Bottom Of Viewport</a>.",
                        "param_name": "animation_offset",
                        "default": "",
                        "group": "Animation",
                        "dependency": [{
                            "element": "animation_type",
                            "value": "",
                            "operator": "!="
                        }],
                        "value": {
                            "": "Default",
                            "top-into-view": "Top of element hits bottom of viewport",
                            "top-mid-of-view": "Top of element hits middle of viewport",
                            "bottom-in-view": "Bottom of element enters viewport"
                        }
                    }
                }
            }
        },
        "remove_from_atts": ["padding", "dimension_margin"]
    },
    "fusion_builder_container": {
        "name": "Container",
        "shortcode": "fusion_builder_container",
        "hide_from_builder": true,
        "params": {
            "groups": {
                "General": {
                    "hundred_percent": {
                        "type": "radio_button_set",
                        "heading": "Interior Content Width",
                        "description": "Select if the interior content is contained to site width or 100% width.",
                        "param_name": "hundred_percent",
                        "value": {
                            "yes": "100% Width",
                            "no": "Site Width"
                        },
                        "default": "no",
                        "group": "General"
                    },
                    "hundred_percent_height": {
                        "type": "radio_button_set",
                        "heading": "100% Height",
                        "description": "Select if the container should be fixed to 100% height of the viewport. Larger content that is taller than the screen height will be cut off, this option works best with minimal content. <strong>Important:</strong> Mobile devices are even shorter in height so this option can be disabled on mobile in <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#container_hundred_percent_height_mobile\" target=\"_blank\" rel=\"noopener noreferrer\">theme options</a> while still being active on desktop.",
                        "param_name": "hundred_percent_height",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        },
                        "default": "no",
                        "group": "General"
                    },
                    "hundred_percent_height_scroll": {
                        "type": "radio_button_set",
                        "heading": "Enable 100% Height Scroll",
                        "description": "Select to add this container to a collection of 100% height containers that share scrolling navigation. <strong>Important:</strong> When this option is used, the mobile visibility settings are disabled.",
                        "param_name": "hundred_percent_height_scroll",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        },
                        "default": "no",
                        "group": "General",
                        "dependency": [{
                            "element": "hundred_percent_height",
                            "value": "yes",
                            "operator": "=="
                        }]
                    },
                    "hundred_percent_height_center_content": {
                        "type": "radio_button_set",
                        "heading": "Center Content",
                        "description": "Set to &quot;Yes&quot; to center the content vertically on 100% height containers.",
                        "param_name": "hundred_percent_height_center_content",
                        "default": "yes",
                        "group": "General",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        },
                        "dependency": [{
                            "element": "hundred_percent_height",
                            "value": "yes",
                            "operator": "=="
                        }]
                    },
                    "equal_height_columns": {
                        "type": "radio_button_set",
                        "heading": "Set Columns to Equal Height",
                        "description": "Select to set all columns that are used inside the container to have equal height.",
                        "param_name": "equal_height_columns",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        },
                        "default": "no",
                        "group": "General"
                    },
                    "menu_anchor": {
                        "type": "textfield",
                        "heading": "Name Of Menu Anchor",
                        "description": "This name will be the id you will have to use in your one page menu.",
                        "param_name": "menu_anchor",
                        "value": "",
                        "group": "General"
                    },
                    "hide_on_mobile": {
                        "type": "checkbox_button_set",
                        "heading": "Container Visibility",
                        "param_name": "hide_on_mobile",
                        "value": {
                            "small-visibility": "Small Screen",
                            "medium-visibility": "Medium Screen",
                            "large-visibility": "Large Screen"
                        },
                        "default": ["small-visibility", "medium-visibility", "large-visibility"],
                        "description": "Choose to show or hide the section on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Element Options</a>.",
                        "or": true,
                        "dependency": [{
                            "element": "hundred_percent_height",
                            "value": "yes",
                            "operator": "!="
                        }, {
                            "element": "hundred_percent_height_scroll",
                            "value": "yes",
                            "operator": "!="
                        }]
                    },
                    "class": {
                        "type": "textfield",
                        "heading": "CSS Class",
                        "description": "Add a class to the wrapping HTML element.",
                        "param_name": "class",
                        "value": "",
                        "group": "General"
                    },
                    "id": {
                        "type": "textfield",
                        "heading": "CSS ID",
                        "description": "Add an ID to the wrapping HTML element.",
                        "param_name": "id",
                        "value": "",
                        "group": "General"
                    }
                },
                "Background": {
                    "background_color": {
                        "type": "colorpickeralpha",
                        "heading": "Container Background Color",
                        "param_name": "background_color",
                        "value": "",
                        "description": "Controls the background color of the container element.  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#full_width_bg_color\" target=\"_blank\" rel=\"noopener noreferrer\">rgba(255,255,255,0)</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-background_color\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"background_color\" value=\"\" data-default=\"rgba(255,255,255,0)\">Reset to default.</a><span>Using default value.</span></span>",
                        "group": "Background",
                        "default": "rgba(255,255,255,0)"
                    },
                    "background_image": {
                        "type": "upload",
                        "heading": "Background Image",
                        "description": "Upload an image to display in the background.",
                        "param_name": "background_image",
                        "value": "",
                        "group": "Background"
                    },
                    "background_position": {
                        "type": "select",
                        "heading": "Background Position",
                        "description": "Choose the postion of the background image.",
                        "param_name": "background_position",
                        "value": {
                            "left top": "Left Top",
                            "left center": "Left Center",
                            "left bottom": "Left Bottom",
                            "right top": "Right Top",
                            "right center": "Right Center",
                            "right bottom": "Right Bottom",
                            "center top": "Center Top",
                            "center center": "Center Center",
                            "center bottom": "Center Bottom"
                        },
                        "default": "center center",
                        "group": "Background",
                        "dependency": [{
                            "element": "background_image",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "background_repeat": {
                        "type": "select",
                        "heading": "Background Repeat",
                        "description": "Choose how the background image repeats.",
                        "param_name": "background_repeat",
                        "value": {
                            "no-repeat": "No Repeat",
                            "repeat": "Repeat Vertically and Horizontally",
                            "repeat-x": "Repeat Horizontally",
                            "repeat-y": "Repeat Vertically"
                        },
                        "default": "no-repeat",
                        "group": "Background",
                        "dependency": [{
                            "element": "background_image",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "fade": {
                        "type": "radio_button_set",
                        "heading": "Fading Animation",
                        "description": "Choose to have the background image fade and blur on scroll. WARNING: Only works for images.",
                        "param_name": "fade",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        },
                        "default": "no",
                        "group": "Background",
                        "dependency": [{
                            "element": "background_image",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "background_parallax": {
                        "type": "select",
                        "heading": "Background Parallax",
                        "description": "Choose how the background image scrolls and responds. This does not work for videos and must be set to &quot;No Parallax&quot; for the video to show.",
                        "param_name": "background_parallax",
                        "value": {
                            "none": "No Parallax (no effects)",
                            "fixed": "Fixed (fixed on desktop, non-fixed on mobile)",
                            "up": "Up (moves up on desktop and mobile)",
                            "down": "Down (moves down on desktop and mobile)",
                            "left": "Left (moves left on desktop and mobile)",
                            "right": "Right (moves right on desktop and mobile)"
                        },
                        "default": "none",
                        "group": "Background",
                        "dependency": [{
                            "element": "background_image",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "enable_mobile": {
                        "type": "radio_button_set",
                        "heading": "Enable Parallax on Mobile",
                        "description": "Works for up/down/left/right only. Parallax effects would most probably cause slowdowns when your site is viewed in mobile devices. If the device width is less than 980 pixels, then it is assumed that the site is being viewed in a mobile device.",
                        "param_name": "enable_mobile",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        },
                        "default": "no",
                        "group": "Background",
                        "dependency": [{
                            "element": "background_image",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "parallax_speed": {
                        "type": "range",
                        "heading": "Parallax Speed",
                        "description": "The movement speed, value should be between 0.1 and 1.0. A lower number means slower scrolling speed. Higher scrolling speeds will enlarge the image more.",
                        "param_name": "parallax_speed",
                        "value": "0.3",
                        "min": "0",
                        "max": "1",
                        "step": "0.1",
                        "group": "Background",
                        "dependency": [{
                            "element": "background_image",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "video_mp4": {
                        "type": "uploadfile",
                        "heading": "Video MP4 Upload",
                        "description": "Video must be in a 16:9 aspect ratio. Add your WebM video file. WebM and MP4 format must be included to render your video with cross browser compatibility. OGV is optional.",
                        "param_name": "video_mp4",
                        "value": "",
                        "group": "Background"
                    },
                    "video_webm": {
                        "type": "uploadfile",
                        "heading": "Video WebM Upload",
                        "description": "Video must be in a 16:9 aspect ratio. Add your WebM video file. WebM and MP4 format must be included to render your video with cross browser compatibility. OGV is optional.",
                        "param_name": "video_webm",
                        "value": "",
                        "group": "Background"
                    },
                    "video_ogv": {
                        "type": "uploadfile",
                        "heading": "Video OGV Upload",
                        "description": "Add your OGV video file. This is optional.",
                        "param_name": "video_ogv",
                        "value": "",
                        "group": "Background"
                    },
                    "video_url": {
                        "type": "textfield",
                        "heading": "YouTube/Vimeo Video URL or ID",
                        "description": "Enter the URL to the video or the video ID of your YouTube or Vimeo video you want to use as your background. If your URL isn&#039;t showing a video, try inputting the video ID instead. Ads will show up in the video if it has them.",
                        "param_name": "video_url",
                        "value": "",
                        "group": "Background"
                    },
                    "video_aspect_ratio": {
                        "type": "textfield",
                        "heading": "Video Aspect Ratio",
                        "description": "The video will be resized to maintain this aspect ratio, this is to prevent the video from showing any black bars. Enter an aspect ratio here such as: &quot;16:9&quot;, &quot;4:3&quot; or &quot;16:10&quot;. The default is &quot;16:9&quot;.",
                        "param_name": "video_aspect_ratio",
                        "value": "16:9",
                        "group": "Background",
                        "or": true,
                        "dependency": [{
                            "element": "video_mp4",
                            "value": "",
                            "operator": "!="
                        }, {
                            "element": "video_ogv",
                            "value": "",
                            "operator": "!="
                        }, {
                            "element": "video_webm",
                            "value": "",
                            "operator": "!="
                        }, {
                            "element": "video_url",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "video_loop": {
                        "type": "radio_button_set",
                        "heading": "Loop Video",
                        "param_name": "video_loop",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        },
                        "default": "yes",
                        "group": "Background",
                        "or": true,
                        "dependency": [{
                            "element": "video_mp4",
                            "value": "",
                            "operator": "!="
                        }, {
                            "element": "video_ogv",
                            "value": "",
                            "operator": "!="
                        }, {
                            "element": "video_webm",
                            "value": "",
                            "operator": "!="
                        }, {
                            "element": "video_url",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "video_mute": {
                        "type": "radio_button_set",
                        "heading": "Mute Video",
                        "param_name": "video_mute",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        },
                        "default": "yes",
                        "group": "Background",
                        "or": true,
                        "dependency": [{
                            "element": "video_mp4",
                            "value": "",
                            "operator": "!="
                        }, {
                            "element": "video_ogv",
                            "value": "",
                            "operator": "!="
                        }, {
                            "element": "video_webm",
                            "value": "",
                            "operator": "!="
                        }, {
                            "element": "video_url",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "video_preview_image": {
                        "type": "upload",
                        "heading": "Video Preview Image",
                        "description": "IMPORTANT: This field must be used for self hosted videos. Self hosted videos do not work correctly on mobile devices. The preview image will be seen in place of your video on older browsers or mobile devices.",
                        "param_name": "video_preview_image",
                        "value": "",
                        "group": "Background",
                        "or": true,
                        "dependency": [{
                            "element": "video_mp4",
                            "value": "",
                            "operator": "!="
                        }, {
                            "element": "video_ogv",
                            "value": "",
                            "operator": "!="
                        }, {
                            "element": "video_webm",
                            "value": "",
                            "operator": "!="
                        }, {
                            "element": "video_url",
                            "value": "",
                            "operator": "!="
                        }]
                    }
                },
                "Design": {
                    "border_size": {
                        "type": "range",
                        "heading": "Container Border Size",
                        "description": "Controls the border size of the container element. In pixels.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#full_width_border_size\" target=\"_blank\" rel=\"noopener noreferrer\">0</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-border_size\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"border_size\" value=\"\" data-default=\"0\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "border_size",
                        "value": "",
                        "min": "0",
                        "max": "50",
                        "default": "0",
                        "group": "Design"
                    },
                    "border_color": {
                        "type": "colorpickeralpha",
                        "heading": "Container Border Color",
                        "description": "Controls the border color of the container element.  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#full_width_border_color\" target=\"_blank\" rel=\"noopener noreferrer\">#eae9e9</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-border_color\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"border_color\" value=\"\" data-default=\"#eae9e9\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "border_color",
                        "value": "",
                        "group": "Design",
                        "default": "#eae9e9",
                        "dependency": [{
                            "element": "border_size",
                            "value": "0",
                            "operator": "!="
                        }, {
                            "element": "border_size",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "border_style": {
                        "type": "radio_button_set",
                        "heading": "Border Style",
                        "description": "Controls the border style.",
                        "param_name": "border_style",
                        "value": {
                            "solid": "Solid",
                            "dashed": "Dashed",
                            "dotted": "Dotted"
                        },
                        "default": "solid",
                        "group": "Design",
                        "dependency": [{
                            "element": "border_size",
                            "value": "0",
                            "operator": "!="
                        }, {
                            "element": "border_size",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "spacing": {
                        "type": "dimension",
                        "remove_from_atts": true,
                        "heading": "Margin",
                        "param_name": "spacing",
                        "value": {
                            "margin_top": "",
                            "margin_bottom": ""
                        },
                        "description": "Spacing above and below the section. In pixels. Use a number without px.",
                        "group": "Design"
                    },
                    "dimensions": {
                        "type": "dimension",
                        "remove_from_atts": true,
                        "heading": "Padding",
                        "description": "In pixels or percentage, ex: 10px or 10%.  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#container_padding_default\" target=\"_blank\" rel=\"noopener noreferrer\">0px, 0px, 0px, 0px</a> on default template.   Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#container_padding_100\" target=\"_blank\" rel=\"noopener noreferrer\">0px, 30px, 0px, 30px</a> on 100% width template.",
                        "param_name": "dimensions",
                        "value": {
                            "padding_top": "",
                            "padding_right": "",
                            "padding_bottom": "",
                            "padding_left": ""
                        },
                        "group": "Design"
                    }
                }
            }
        },
        "remove_from_atts": ["spacing", "dimensions"]
    },
    "fusion_content_boxes": {
        "name": "Content Boxes",
        "shortcode": "fusion_content_boxes",
        "multi": "multi_element_parent",
        "element_child": "fusion_content_box",
        "icon": "fusiona-newspaper",
        "preview": "C:/xamppp/htdocs/wp_avada542/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-content-boxes-preview.php",
        "preview_id": "fusion-builder-block-module-content-boxes-preview-template",
        "params": {
            "groups": {
                "General": {
                    "element_content": {
                        "type": "tinymce",
                        "heading": "Content",
                        "description": "Enter some content for this contentbox",
                        "param_name": "element_content",
                        "value": "[fusion_content_box title=\"Your Content Goes Here\" backgroundcolor=\"\" icon=\"\" iconflip=\"\" iconrotate=\"\" iconspin=\"no\" iconcolor=\"\" circlecolor=\"\" circlebordercolor=\"\" image=\"\" image_width=\"35\" image_height=\"35\" link=\"\" linktext=\"Read More\" linktarget=\"default\" animation_type=\"\" animation_direction=\"left\" animation_speed=\"0.3\" ]Your Content Goes Here[/fusion_content_box]"
                    },
                    "layout": {
                        "type": "select",
                        "heading": "Box Layout",
                        "description": "Select the layout for the content box",
                        "param_name": "layout",
                        "default": "icon-with-title",
                        "value": {
                            "icon-with-title": "Classic Icon With Title",
                            "icon-on-top": "Classic Icon On Top",
                            "icon-on-side": "Classic Icon On Side",
                            "icon-boxed": "Classic Icon Boxed",
                            "clean-vertical": "Clean Layout Vertical",
                            "clean-horizontal": "Clean Layout Horizontal",
                            "timeline-vertical": "Timeline Vertical",
                            "timeline-horizontal": "Timeline Horizontal"
                        }
                    },
                    "columns": {
                        "type": "range",
                        "heading": "Number of Columns",
                        "description": "Set the number of columns per row.",
                        "param_name": "columns",
                        "value": "1",
                        "min": "1",
                        "max": "6",
                        "step": "1"
                    },
                    "title_size": {
                        "type": "textfield",
                        "heading": "Title Size",
                        "description": "Controls the size of the title.  In pixels ex: 18px.  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#content_box_title_size\" target=\"_blank\" rel=\"noopener noreferrer\">18px</a>.",
                        "param_name": "title_size",
                        "value": ""
                    },
                    "title_color": {
                        "type": "colorpicker",
                        "heading": "Title Font Color",
                        "description": "Controls the color of the title font.  ex: #000.  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#content_box_title_color\" target=\"_blank\" rel=\"noopener noreferrer\">#333333</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-title_color\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"title_color\" value=\"\" data-default=\"#333333\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "title_color",
                        "value": "",
                        "default": "#333333"
                    },
                    "body_color": {
                        "type": "colorpicker",
                        "heading": "Body Font Color",
                        "description": "Controls the color of the body font.  ex: #000.  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#content_box_body_color\" target=\"_blank\" rel=\"noopener noreferrer\">#747474</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-body_color\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"body_color\" value=\"\" data-default=\"#747474\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "body_color",
                        "value": "",
                        "default": "#747474"
                    },
                    "backgroundcolor": {
                        "type": "colorpickeralpha",
                        "heading": "Content Box Background Color",
                        "description": "  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#content_box_bg_color\" target=\"_blank\" rel=\"noopener noreferrer\">rgba(255,255,255,0)</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-backgroundcolor\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"backgroundcolor\" value=\"\" data-default=\"rgba(255,255,255,0)\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "backgroundcolor",
                        "value": "",
                        "default": "rgba(255,255,255,0)"
                    },
                    "icon": {
                        "type": "iconpicker",
                        "heading": "Icon",
                        "param_name": "icon",
                        "value": "",
                        "description": "Global setting for all content boxes, this can be overridden individually. Click an icon to select, click again to deselect."
                    },
                    "iconflip": {
                        "type": "radio_button_set",
                        "heading": "Flip Icon",
                        "description": "Choose to flip the icon.",
                        "param_name": "iconflip",
                        "value": {
                            "": "None",
                            "horizontal": "Horizontal",
                            "vertical": "Vertical"
                        },
                        "default": ""
                    },
                    "iconrotate": {
                        "type": "radio_button_set",
                        "heading": "Rotate Icon",
                        "description": "Choose to rotate the icon.",
                        "param_name": "iconrotate",
                        "value": {
                            "90": "90",
                            "180": "180",
                            "270": "270",
                            "": "None"
                        },
                        "default": ""
                    },
                    "iconspin": {
                        "type": "radio_button_set",
                        "heading": "Spinning Icon",
                        "description": "Choose to let the icon spin.",
                        "param_name": "iconspin",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        },
                        "default": "no"
                    },
                    "iconcolor": {
                        "type": "colorpicker",
                        "heading": "Icon Color",
                        "description": "  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#content_box_icon_color\" target=\"_blank\" rel=\"noopener noreferrer\">#ffffff</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-iconcolor\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"iconcolor\" value=\"\" data-default=\"#ffffff\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "iconcolor",
                        "value": "",
                        "default": "#ffffff"
                    },
                    "icon_circle": {
                        "type": "radio_button_set",
                        "heading": "Icon Background",
                        "description": "Choose to show a background behind the icon. Select default for theme option selection.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#content_box_icon_circle\" target=\"_blank\" rel=\"noopener noreferrer\">Yes</a>.",
                        "param_name": "icon_circle",
                        "value": {
                            "": "Default",
                            "yes": "Yes",
                            "no": "No"
                        },
                        "child_dependency": true,
                        "default": ""
                    },
                    "icon_circle_radius": {
                        "type": "textfield",
                        "heading": "Icon Background Radius",
                        "description": "Choose the border radius of the icon background.  In pixels (px), ex: 1px, or &quot;round&quot;.  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#content_box_icon_circle_radius\" target=\"_blank\" rel=\"noopener noreferrer\">50%</a>.",
                        "param_name": "icon_circle_radius",
                        "value": "",
                        "dependency": [{
                            "element": "icon_circle",
                            "value": "no",
                            "operator": "!="
                        }]
                    },
                    "circlecolor": {
                        "type": "colorpickeralpha",
                        "heading": "Icon Background Color",
                        "description": "  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#content_box_icon_bg_color\" target=\"_blank\" rel=\"noopener noreferrer\">#333333</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-circlecolor\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"circlecolor\" value=\"\" data-default=\"#333333\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "circlecolor",
                        "value": "",
                        "default": "#333333",
                        "dependency": [{
                            "element": "icon_circle",
                            "value": "no",
                            "operator": "!="
                        }]
                    },
                    "circlebordersize": {
                        "type": "range",
                        "heading": "Icon Background Inner Border Size",
                        "description": "  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#content_box_icon_bg_inner_border_size\" target=\"_blank\" rel=\"noopener noreferrer\">1</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-circlebordersize\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"circlebordersize\" value=\"\" data-default=\"1\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "circlebordersize",
                        "value": "",
                        "min": "0",
                        "max": "20",
                        "step": "1",
                        "default": "1",
                        "dependency": [{
                            "element": "icon_circle",
                            "value": "no",
                            "operator": "!="
                        }]
                    },
                    "circlebordercolor": {
                        "type": "colorpickeralpha",
                        "heading": "Icon Background Inner Border Color",
                        "description": "  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#content_box_icon_bg_inner_border_color\" target=\"_blank\" rel=\"noopener noreferrer\">#333333</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-circlebordercolor\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"circlebordercolor\" value=\"\" data-default=\"#333333\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "circlebordercolor",
                        "value": "",
                        "default": "#333333",
                        "dependency": [{
                            "element": "icon_circle",
                            "value": "no",
                            "operator": "!="
                        }, {
                            "element": "circlebordersize",
                            "value": "0",
                            "operator": "!="
                        }]
                    },
                    "outercirclebordersize": {
                        "type": "range",
                        "heading": "Icon Background Outer Border Size",
                        "description": "  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#content_box_icon_bg_outer_border_size\" target=\"_blank\" rel=\"noopener noreferrer\">0</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-outercirclebordersize\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"outercirclebordersize\" value=\"\" data-default=\"0\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "outercirclebordersize",
                        "value": "",
                        "min": "0",
                        "max": "20",
                        "step": "1",
                        "default": "0",
                        "dependency": [{
                            "element": "icon_circle",
                            "value": "no",
                            "operator": "!="
                        }]
                    },
                    "outercirclebordercolor": {
                        "type": "colorpickeralpha",
                        "heading": "Icon Background Outer Border Color",
                        "description": "  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#content_box_icon_bg_outer_border_color\" target=\"_blank\" rel=\"noopener noreferrer\">rgba(255,255,255,0)</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-outercirclebordercolor\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"outercirclebordercolor\" value=\"\" data-default=\"rgba(255,255,255,0)\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "outercirclebordercolor",
                        "value": "",
                        "default": "rgba(255,255,255,0)",
                        "dependency": [{
                            "element": "icon_circle",
                            "value": "no",
                            "operator": "!="
                        }, {
                            "element": "outercirclebordersize",
                            "value": "0",
                            "operator": "!="
                        }, {
                            "element": "outercirclebordersize",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "icon_size": {
                        "type": "range",
                        "heading": "Icon Size",
                        "description": "Controls the size of the icon. In pixels.  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#content_box_icon_size\" target=\"_blank\" rel=\"noopener noreferrer\">21</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-icon_size\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"icon_size\" value=\"\" data-default=\"21\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "icon_size",
                        "value": "",
                        "min": "0",
                        "max": "250",
                        "step": "1",
                        "default": "21"
                    },
                    "icon_hover_type": {
                        "type": "select",
                        "heading": "Icon Hover Animation Type",
                        "description": "Select the animation type for icon on hover. Select default for theme option selection.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#content_box_icon_hover_type\" target=\"_blank\" rel=\"noopener noreferrer\">Fade</a>.",
                        "param_name": "icon_hover_type",
                        "value": {
                            "": "Default",
                            "none": "None",
                            "fade": "Fade",
                            "slide": "Slide",
                            "pulsate": "Pulsate"
                        },
                        "default": ""
                    },
                    "hover_accent_color": {
                        "type": "colorpickeralpha",
                        "heading": "Hover Accent Color",
                        "description": "Controls the accent color on hover.  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#content_box_hover_animation_accent_color\" target=\"_blank\" rel=\"noopener noreferrer\">#a0ce4e</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-hover_accent_color\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"hover_accent_color\" value=\"\" data-default=\"#a0ce4e\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "hover_accent_color",
                        "value": "",
                        "default": "#a0ce4e"
                    },
                    "image": {
                        "type": "upload",
                        "heading": "Icon Image",
                        "description": "To upload your own icon image, deselect the icon above and then upload your icon image.",
                        "param_name": "image",
                        "value": ""
                    },
                    "image_width": {
                        "type": "textfield",
                        "heading": "Icon Image Width",
                        "description": "If using an icon image, specify the image width in pixels but do not add px, ex: 35.",
                        "param_name": "image_width",
                        "dependency": [{
                            "element": "image",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "image_height": {
                        "type": "textfield",
                        "heading": "Icon Image Height",
                        "description": "If using an icon image, specify the image height in pixels but do not add px, ex: 35.",
                        "param_name": "image_height",
                        "dependency": [{
                            "element": "image",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "link_type": {
                        "type": "radio_button_set",
                        "heading": "Link Type",
                        "description": "Select the type of link that should show in the content box. Select default for theme option selection.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#content_box_link_type\" target=\"_blank\" rel=\"noopener noreferrer\">Text</a>.",
                        "param_name": "link_type",
                        "value": {
                            "": "Default",
                            "text": "Text",
                            "button-bar": "Button Bar",
                            "button": "Button"
                        },
                        "default": ""
                    },
                    "link_area": {
                        "type": "select",
                        "heading": "Link Area",
                        "description": "Select which area the link will be assigned to. Select default for theme option selection.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#content_box_link_area\" target=\"_blank\" rel=\"noopener noreferrer\">Link+Icon</a>.",
                        "param_name": "link_area",
                        "value": {
                            "": "Default",
                            "link-icon": "Link+Icon",
                            "box": "Entire Content Box"
                        },
                        "default": ""
                    },
                    "link_target": {
                        "type": "radio_button_set",
                        "heading": "Link Target",
                        "description": "_self = open in same window <br />_blank = open in new window  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#content_box_link_target\" target=\"_blank\" rel=\"noopener noreferrer\">Same Window</a>.",
                        "param_name": "link_target",
                        "value": {
                            "": "Default",
                            "_self": "Same Window",
                            "_blank": "New Window/Tab"
                        },
                        "default": ""
                    },
                    "icon_align": {
                        "type": "radio_button_set",
                        "heading": "Content Alignment",
                        "description": "Works with &quot;Classic Icon With Title&quot; and &quot;Classic Icon On Side&quot; layout options.",
                        "param_name": "icon_align",
                        "value": {
                            "left": "Left",
                            "right": "Right"
                        },
                        "default": "left"
                    },
                    "animation_type": {
                        "type": "select",
                        "heading": "Animation Type",
                        "description": "Select the type of animation to use on the element.",
                        "param_name": "animation_type",
                        "value": {
                            "": "None",
                            "bounce": "Bounce",
                            "fade": "Fade",
                            "flash": "Flash",
                            "rubberBand": "Rubberband",
                            "shake": "Shake",
                            "slide": "Slide",
                            "zoom": "Zoom"
                        },
                        "default": "",
                        "dependency": [{
                            "element": "layout",
                            "value": "timeline-vertical",
                            "operator": "!="
                        }, {
                            "element": "layout",
                            "value": "timeline-horizontal",
                            "operator": "!="
                        }]
                    },
                    "animation_delay": {
                        "type": "textfield",
                        "heading": "Animation Delay",
                        "description": "Controls the delay of animation between each element in a set. In milliseconds, 1000 = 1 second.",
                        "param_name": "animation_delay",
                        "value": "",
                        "dependency": [{
                            "element": "animation_type",
                            "value": "",
                            "operator": "!="
                        }, {
                            "element": "layout",
                            "value": "timeline-vertical",
                            "operator": "!="
                        }, {
                            "element": "layout",
                            "value": "timeline-horizontal",
                            "operator": "!="
                        }]
                    },
                    "animation_offset": {
                        "type": "select",
                        "heading": "Offset of Animation",
                        "description": "Controls when the animation should start.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#animation_offset\" target=\"_blank\" rel=\"noopener noreferrer\">Top Of Element Hits Bottom Of Viewport</a>.",
                        "param_name": "animation_offset",
                        "value": {
                            "": "Default",
                            "top-into-view": "Top of element hits bottom of viewport",
                            "top-mid-of-view": "Top of element hits middle of viewport",
                            "bottom-in-view": "Bottom of element enters viewport"
                        },
                        "default": "",
                        "dependency": [{
                            "element": "animation_type",
                            "value": "",
                            "operator": "!="
                        }, {
                            "element": "layout",
                            "value": "timeline-vertical",
                            "operator": "!="
                        }, {
                            "element": "layout",
                            "value": "timeline-horizontal",
                            "operator": "!="
                        }]
                    },
                    "animation_direction": {
                        "type": "radio_button_set",
                        "heading": "Direction of Animation",
                        "description": "Select the incoming direction for the animation.",
                        "param_name": "animation_direction",
                        "value": {
                            "down": "Top",
                            "right": "Right",
                            "up": "Bottom",
                            "left": "Left",
                            "static": "Static"
                        },
                        "default": "left",
                        "dependency": [{
                            "element": "animation_type",
                            "value": "",
                            "operator": "!="
                        }, {
                            "element": "layout",
                            "value": "timeline-vertical",
                            "operator": "!="
                        }, {
                            "element": "layout",
                            "value": "timeline-horizontal",
                            "operator": "!="
                        }]
                    },
                    "animation_speed": {
                        "type": "select",
                        "heading": "Speed of Animation",
                        "description": "Type in speed of animation in seconds (0.1 - 1).",
                        "param_name": "animation_speed",
                        "value": {
                            "1": "1",
                            "0.1": "0.1",
                            "0.2": "0.2",
                            "0.3": "0.3",
                            "0.4": "0.4",
                            "0.5": "0.5",
                            "0.6": "0.6",
                            "0.7": "0.7",
                            "0.8": "0.8",
                            "0.9": "0.9"
                        },
                        "default": "0.3",
                        "dependency": [{
                            "element": "animation_type",
                            "value": "",
                            "operator": "!="
                        }, {
                            "element": "layout",
                            "value": "timeline-vertical",
                            "operator": "!="
                        }, {
                            "element": "layout",
                            "value": "timeline-horizontal",
                            "operator": "!="
                        }]
                    },
                    "dimensions": {
                        "type": "dimension",
                        "remove_from_atts": true,
                        "heading": "Margin",
                        "description": "Spacing above and below the content boxes. In px, em or %, e.g. 10px.",
                        "param_name": "dimensions",
                        "value": {
                            "margin_top": "",
                            "margin_bottom": ""
                        }
                    },
                    "hide_on_mobile": {
                        "type": "checkbox_button_set",
                        "heading": "Element Visibility",
                        "param_name": "hide_on_mobile",
                        "value": {
                            "small-visibility": "Small Screen",
                            "medium-visibility": "Medium Screen",
                            "large-visibility": "Large Screen"
                        },
                        "default": ["small-visibility", "medium-visibility", "large-visibility"],
                        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Element Options</a>."
                    },
                    "class": {
                        "type": "textfield",
                        "heading": "CSS Class",
                        "description": "Add a class to the wrapping HTML element.",
                        "param_name": "class",
                        "value": "",
                        "group": "General"
                    },
                    "id": {
                        "type": "textfield",
                        "heading": "CSS ID",
                        "description": "Add an ID to the wrapping HTML element.",
                        "param_name": "id",
                        "value": "",
                        "group": "General"
                    }
                }
            }
        },
        "remove_from_atts": ["dimensions"]
    },
    "fusion_content_box": {
        "name": "Content Box",
        "description": "Enter some content for this textblock",
        "shortcode": "fusion_content_box",
        "hide_from_builder": true,
        "allow_generator": true,
        "params": {
            "groups": {
                "General": {
                    "title": {
                        "type": "textfield",
                        "heading": "Title",
                        "description": "The box title.",
                        "param_name": "title",
                        "value": "Your Content Goes Here",
                        "placeholder": true
                    },
                    "backgroundcolor": {
                        "type": "colorpickeralpha",
                        "heading": "Content Box Background Color",
                        "description": "  Leave empty for value set in parent options.  If that is also empty, the Element Options value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#content_box_bg_color\" target=\"_blank\" rel=\"noopener noreferrer\">rgba(255,255,255,0)</a> will be used.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-backgroundcolor\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"backgroundcolor\" value=\"\" data-default=\"rgba(255,255,255,0)\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "backgroundcolor",
                        "value": "",
                        "default": "rgba(255,255,255,0)"
                    },
                    "icon": {
                        "type": "iconpicker",
                        "heading": "Icon",
                        "param_name": "icon",
                        "value": "",
                        "description": "Click an icon to select, click again to deselect.",
                        "dependency": [{
                            "element": "image",
                            "value": "",
                            "operator": "=="
                        }]
                    },
                    "iconflip": {
                        "type": "radio_button_set",
                        "heading": "Flip Icon",
                        "description": "Choose to flip the icon.",
                        "param_name": "iconflip",
                        "value": {
                            "": "Default",
                            "none": "None",
                            "horizontal": "Horizontal",
                            "vertical": "Vertical"
                        },
                        "default": "",
                        "dependency": [{
                            "element": "icon",
                            "value": "",
                            "operator": "!="
                        }, {
                            "element": "image",
                            "value": "",
                            "operator": "=="
                        }]
                    },
                    "iconrotate": {
                        "type": "radio_button_set",
                        "heading": "Rotate Icon",
                        "description": "Choose to rotate the icon.",
                        "param_name": "iconrotate",
                        "value": {
                            "90": "90",
                            "180": "180",
                            "270": "270",
                            "": "Default",
                            "none": "None"
                        },
                        "default": "",
                        "dependency": [{
                            "element": "icon",
                            "value": "",
                            "operator": "!="
                        }, {
                            "element": "image",
                            "value": "",
                            "operator": "=="
                        }]
                    },
                    "iconspin": {
                        "type": "radio_button_set",
                        "heading": "Spinning Icon",
                        "description": "Choose to let the icon spin.",
                        "param_name": "iconspin",
                        "value": {
                            "": "Default",
                            "yes": "Yes",
                            "no": "No"
                        },
                        "default": "",
                        "dependency": [{
                            "element": "icon",
                            "value": "",
                            "operator": "!="
                        }, {
                            "element": "image",
                            "value": "",
                            "operator": "=="
                        }]
                    },
                    "iconcolor": {
                        "type": "colorpicker",
                        "heading": "Icon Color",
                        "description": "Controls the color of the icon.   Leave empty for value set in parent options.  If that is also empty, the Element Options value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#content_box_icon_color\" target=\"_blank\" rel=\"noopener noreferrer\">#ffffff</a> will be used.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-iconcolor\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"iconcolor\" value=\"\" data-default=\"#ffffff\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "iconcolor",
                        "value": "",
                        "default": "#ffffff",
                        "dependency": [{
                            "element": "icon",
                            "value": "",
                            "operator": "!="
                        }, {
                            "element": "image",
                            "value": "",
                            "operator": "=="
                        }]
                    },
                    "circlecolor": {
                        "type": "colorpickeralpha",
                        "heading": "Icon Background Color",
                        "description": "Choose to show a background behind the icon.  Leave empty for value set in parent options.  If that is also empty, the Element Options value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#content_box_icon_bg_color\" target=\"_blank\" rel=\"noopener noreferrer\">#333333</a> will be used.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-circlecolor\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"circlecolor\" value=\"\" data-default=\"#333333\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "circlecolor",
                        "value": "",
                        "default": "#333333",
                        "dependency": [{
                            "element": "icon",
                            "value": "",
                            "operator": "!="
                        }, {
                            "element": "image",
                            "value": "",
                            "operator": "=="
                        }, {
                            "element": "parent_icon_circle",
                            "value": "no",
                            "operator": "!="
                        }]
                    },
                    "circlebordersize": {
                        "type": "range",
                        "heading": "Icon Background Inner Border Size",
                        "description": "  Leave empty for value set in parent options.  If that is also empty, the Element Options value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#content_box_icon_bg_inner_border_size\" target=\"_blank\" rel=\"noopener noreferrer\">1</a> will be used.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-circlebordersize\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"circlebordersize\" value=\"\" data-default=\"1\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "circlebordersize",
                        "value": "",
                        "min": "0",
                        "max": "20",
                        "step": "1",
                        "default": "1",
                        "dependency": [{
                            "element": "icon",
                            "value": "",
                            "operator": "!="
                        }, {
                            "element": "image",
                            "value": "",
                            "operator": "=="
                        }, {
                            "element": "parent_icon_circle",
                            "value": "no",
                            "operator": "!="
                        }]
                    },
                    "circlebordercolor": {
                        "type": "colorpickeralpha",
                        "heading": "Icon Background Inner Border Color",
                        "description": "  Leave empty for value set in parent options.  If that is also empty, the Element Options value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#content_box_icon_bg_inner_border_color\" target=\"_blank\" rel=\"noopener noreferrer\">#333333</a> will be used.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-circlebordercolor\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"circlebordercolor\" value=\"\" data-default=\"#333333\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "circlebordercolor",
                        "value": "",
                        "default": "#333333",
                        "dependency": [{
                            "element": "icon",
                            "value": "",
                            "operator": "!="
                        }, {
                            "element": "image",
                            "value": "",
                            "operator": "=="
                        }, {
                            "element": "slidercirclebordersize",
                            "value": "0",
                            "operator": "!="
                        }, {
                            "element": "parent_icon_circle",
                            "value": "no",
                            "operator": "!="
                        }]
                    },
                    "outercirclebordersize": {
                        "type": "range",
                        "heading": "Icon Background Outer Border Size",
                        "description": "  Leave empty for value set in parent options.  If that is also empty, the Element Options value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#content_box_icon_bg_outer_border_size\" target=\"_blank\" rel=\"noopener noreferrer\">0</a> will be used.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-outercirclebordersize\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"outercirclebordersize\" value=\"\" data-default=\"0\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "outercirclebordersize",
                        "value": "",
                        "min": "0",
                        "max": "20",
                        "step": "1",
                        "default": "0",
                        "dependency": [{
                            "element": "icon",
                            "value": "",
                            "operator": "!="
                        }, {
                            "element": "image",
                            "value": "",
                            "operator": "=="
                        }, {
                            "element": "parent_icon_circle",
                            "value": "no",
                            "operator": "!="
                        }]
                    },
                    "outercirclebordercolor": {
                        "type": "colorpickeralpha",
                        "heading": "Icon Background Outer Border Color",
                        "description": "  Leave empty for value set in parent options.  If that is also empty, the Element Options value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#content_box_icon_bg_outer_border_color\" target=\"_blank\" rel=\"noopener noreferrer\">rgba(255,255,255,0)</a> will be used.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-outercirclebordercolor\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"outercirclebordercolor\" value=\"\" data-default=\"rgba(255,255,255,0)\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "outercirclebordercolor",
                        "value": "",
                        "default": "rgba(255,255,255,0)",
                        "dependency": [{
                            "element": "icon",
                            "value": "",
                            "operator": "!="
                        }, {
                            "element": "image",
                            "value": "",
                            "operator": "=="
                        }, {
                            "element": "slideroutercirclebordersize",
                            "value": "0",
                            "operator": "!="
                        }, {
                            "element": "parent_icon_circle",
                            "value": "no",
                            "operator": "!="
                        }]
                    },
                    "image": {
                        "type": "upload",
                        "heading": "Icon Image",
                        "description": "To upload your own icon image, deselect the icon above and then upload your icon image.",
                        "param_name": "image",
                        "value": ""
                    },
                    "image_width": {
                        "type": "textfield",
                        "heading": "Icon Image Width",
                        "description": "If using an icon image, specify the image width in pixels but do not add px, ex: 35.",
                        "param_name": "image_width",
                        "dependency": [{
                            "element": "image",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "image_height": {
                        "type": "textfield",
                        "heading": "Icon Image Height",
                        "description": "If using an icon image, specify the image height in pixels but do not add px, ex: 35.",
                        "param_name": "image_height",
                        "dependency": [{
                            "element": "image",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "link": {
                        "type": "link_selector",
                        "heading": "Read More Link Url",
                        "description": "Add the link&#039;s url ex: http://example.com.",
                        "param_name": "link",
                        "value": ""
                    },
                    "linktext": {
                        "type": "textfield",
                        "heading": "Read More Link Text",
                        "description": "Insert the text to display as the link.",
                        "param_name": "linktext",
                        "value": "",
                        "dependency": [{
                            "element": "link",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "link_target": {
                        "type": "radio_button_set",
                        "heading": "Read More Link Target",
                        "description": "Default = use option selected in parent.",
                        "param_name": "link_target",
                        "value": {
                            "": "Default",
                            "_self": "Same Window",
                            "_blank": "New Window/Tab"
                        },
                        "default": "",
                        "dependency": [{
                            "element": "link",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "element_content": {
                        "type": "tinymce",
                        "heading": "Content Box Content",
                        "description": "Add content for content box.",
                        "param_name": "element_content",
                        "value": "Your Content Goes Here",
                        "placeholder": true
                    }
                },
                "Animation": {
                    "animation_type": {
                        "type": "select",
                        "heading": "Animation Type",
                        "description": "Select the type of animation to use on the element.",
                        "param_name": "animation_type",
                        "value": {
                            "": "Default",
                            "none": "None",
                            "bounce": "Bounce",
                            "fade": "Fade",
                            "flash": "Flash",
                            "rubberBand": "Rubberband",
                            "shake": "Shake",
                            "slide": "Slide",
                            "zoom": "Zoom"
                        },
                        "default": "",
                        "group": "Animation"
                    },
                    "animation_direction": {
                        "type": "radio_button_set",
                        "heading": "Direction of Animation",
                        "description": "Select the incoming direction for the animation.",
                        "param_name": "animation_direction",
                        "value": {
                            "down": "Top",
                            "right": "Right",
                            "up": "Bottom",
                            "left": "Left",
                            "static": "Static"
                        },
                        "default": "left",
                        "group": "Animation",
                        "dependency": [{
                            "element": "animation_type",
                            "value": "",
                            "operator": "!="
                        }, {
                            "element": "animation_type",
                            "value": "none",
                            "operator": "!="
                        }]
                    },
                    "animation_speed": {
                        "type": "range",
                        "heading": "Speed of Animation",
                        "description": "Type in speed of animation in seconds (0.1 - 1).",
                        "param_name": "animation_speed",
                        "min": "0.1",
                        "max": "1",
                        "step": "0.1",
                        "value": "0.3",
                        "group": "Animation",
                        "dependency": [{
                            "element": "animation_type",
                            "value": "",
                            "operator": "!="
                        }, {
                            "element": "animation_type",
                            "value": "none",
                            "operator": "!="
                        }]
                    },
                    "animation_offset": {
                        "type": "select",
                        "heading": "Offset of Animation",
                        "description": "Controls when the animation should start.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#animation_offset\" target=\"_blank\" rel=\"noopener noreferrer\">Top Of Element Hits Bottom Of Viewport</a>.",
                        "param_name": "animation_offset",
                        "value": {
                            "": "Default",
                            "top-into-view": "Top of element hits bottom of viewport",
                            "top-mid-of-view": "Top of element hits middle of viewport",
                            "bottom-in-view": "Bottom of element enters viewport"
                        },
                        "default": "",
                        "group": "Animation",
                        "dependency": [{
                            "element": "animation_type",
                            "value": "",
                            "operator": "!="
                        }, {
                            "element": "animation_type",
                            "value": "none",
                            "operator": "!="
                        }]
                    }
                }
            }
        },
        "remove_from_atts": []
    },
    "fusion_countdown": {
        "name": "Countdown",
        "shortcode": "fusion_countdown",
        "icon": "fusiona-calendar-check-o",
        "preview": "C:/xamppp/htdocs/wp_avada542/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-countdown-preview.php",
        "preview_id": "fusion-builder-block-module-countdown-preview-template",
        "params": {
            "groups": {
                "General": {
                    "countdown_end": {
                        "type": "date_time_picker",
                        "heading": "Countdown Timer End",
                        "description": "Set the end date and time for the countdown time. Click the calendar icon to use the date picker. Use SQL time format: YYYY-MM-DD HH:MM:SS. E.g: 2016-05-10 12:30:00.",
                        "param_name": "countdown_end",
                        "value": ""
                    },
                    "timezone": {
                        "type": "radio_button_set",
                        "heading": "Timezone",
                        "description": "Choose which timezone should be used for the countdown calculation.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#countdown_timezone\" target=\"_blank\" rel=\"noopener noreferrer\">Timezone Of Site</a>.",
                        "param_name": "timezone",
                        "value": {
                            "": "Default",
                            "site_time": "Timezone of Site",
                            "user_time": "Timezone of User"
                        },
                        "default": ""
                    },
                    "show_weeks": {
                        "type": "radio_button_set",
                        "heading": "Show Weeks",
                        "description": "Select &quot;yes&quot; to show weeks for longer countdowns.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#countdown_show_weeks\" target=\"_blank\" rel=\"noopener noreferrer\">No</a>.",
                        "param_name": "show_weeks",
                        "value": {
                            "": "Default",
                            "yes": "Yes",
                            "no": "No"
                        },
                        "default": ""
                    },
                    "border_radius": {
                        "type": "textfield",
                        "heading": "Border Radius",
                        "description": "Choose the radius of outer box and also the countdown. In pixels (px), ex: 1px.",
                        "param_name": "border_radius",
                        "value": ""
                    },
                    "heading_text": {
                        "type": "textfield",
                        "heading": "Heading Text",
                        "description": "Choose a heading text for the countdown.",
                        "param_name": "heading_text",
                        "value": "Your Content Goes Here",
                        "placeholder": true
                    },
                    "subheading_text": {
                        "type": "textfield",
                        "heading": "Subheading Text",
                        "description": "Choose a subheading text for the countdown.",
                        "param_name": "subheading_text",
                        "value": "Your Content Goes Here",
                        "placeholder": true
                    },
                    "link_url": {
                        "type": "link_selector",
                        "heading": "Link URL",
                        "description": "Add a url for the link. E.g: http://example.com.",
                        "param_name": "link_url",
                        "value": ""
                    },
                    "link_text": {
                        "type": "textfield",
                        "heading": "Link Text",
                        "description": "Choose a link text for the countdown.",
                        "param_name": "link_text",
                        "value": "",
                        "dependency": [{
                            "element": "link_url",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "link_target": {
                        "type": "radio_button_set",
                        "heading": "Link Target",
                        "description": "_self = open in same window\n    \t\t\t\t                                      _blank = open in new window  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#countdown_link_target\" target=\"_blank\" rel=\"noopener noreferrer\">Same Window</a>.",
                        "param_name": "link_target",
                        "value": {
                            "default": "Default",
                            "_self": "_self",
                            "_blank": "_blank"
                        },
                        "default": "default",
                        "dependency": [{
                            "element": "link_url",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "hide_on_mobile": {
                        "type": "checkbox_button_set",
                        "heading": "Element Visibility",
                        "param_name": "hide_on_mobile",
                        "value": {
                            "small-visibility": "Small Screen",
                            "medium-visibility": "Medium Screen",
                            "large-visibility": "Large Screen"
                        },
                        "default": ["small-visibility", "medium-visibility", "large-visibility"],
                        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Element Options</a>."
                    },
                    "class": {
                        "type": "textfield",
                        "heading": "CSS Class",
                        "description": "Add a class to the wrapping HTML element.",
                        "param_name": "class",
                        "value": ""
                    },
                    "id": {
                        "type": "textfield",
                        "heading": "CSS ID",
                        "description": "Add an ID to the wrapping HTML element.",
                        "param_name": "id",
                        "value": ""
                    }
                },
                "Background": {
                    "background_color": {
                        "type": "colorpickeralpha",
                        "heading": "Background Color",
                        "description": "Choose a background color for the countdown wrapping box.  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#countdown_background_color\" target=\"_blank\" rel=\"noopener noreferrer\">#a0ce4e</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-background_color\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"background_color\" value=\"\" data-default=\"#a0ce4e\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "background_color",
                        "value": "",
                        "default": "#a0ce4e",
                        "group": "Background"
                    },
                    "background_image": {
                        "type": "upload",
                        "heading": "Background Image",
                        "description": "Upload an image to display in the background.  Currently no default selected. Can be set globally from the <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#countdown_background_image\" target=\"_blank\" rel=\"noopener noreferrer\">Element Options</a>.",
                        "param_name": "background_image",
                        "value": "",
                        "group": "Background"
                    },
                    "background_position": {
                        "type": "select",
                        "heading": "Background Position",
                        "description": "Choose the position of the background image.  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#countdown_background_position\" target=\"_blank\" rel=\"noopener noreferrer\">Center Center</a>.",
                        "param_name": "background_position",
                        "value": {
                            "": "Default",
                            "left top": "Left Top",
                            "left center": "Left Center",
                            "left bottom": "Left Bottom",
                            "right top": "Right Top",
                            "right center": "Right Center",
                            "right bottom": "Right Bottom",
                            "center top": "Center Top",
                            "center center": "Center Center",
                            "center bottom": "Center Bottom"
                        },
                        "default": "",
                        "group": "Background",
                        "dependency": [{
                            "element": "background_image",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "background_repeat": {
                        "type": "select",
                        "heading": "Background Repeat",
                        "description": "Choose how the background image repeats.  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#countdown_background_repeat\" target=\"_blank\" rel=\"noopener noreferrer\">No Repeat</a>.",
                        "param_name": "background_repeat",
                        "value": {
                            "": "Default",
                            "no-repeat": "No Repeat",
                            "repeat": "Repeat Vertically and Horizontally",
                            "repeat-x": "Repeat Horizontally",
                            "repeat-y": "Repeat Vertically"
                        },
                        "default": "",
                        "group": "Background",
                        "dependency": [{
                            "element": "background_image",
                            "value": "",
                            "operator": "!="
                        }]
                    }
                },
                "Design": {
                    "counter_box_color": {
                        "type": "colorpickeralpha",
                        "heading": "Countdown Color",
                        "description": "Choose a background color for the countdown.  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#countdown_counter_box_color\" target=\"_blank\" rel=\"noopener noreferrer\">#333333</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-counter_box_color\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"counter_box_color\" value=\"\" data-default=\"#333333\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "counter_box_color",
                        "value": "",
                        "default": "#333333",
                        "group": "Design"
                    },
                    "counter_text_color": {
                        "type": "colorpicker",
                        "heading": "Countdown Text Color",
                        "description": "Choose a text color for the countdown timer.  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#countdown_counter_text_color\" target=\"_blank\" rel=\"noopener noreferrer\">#ffffff</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-counter_text_color\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"counter_text_color\" value=\"\" data-default=\"#ffffff\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "counter_text_color",
                        "value": "",
                        "default": "#ffffff",
                        "group": "Design"
                    },
                    "heading_text_color": {
                        "type": "colorpicker",
                        "heading": "Heading Text Color",
                        "description": "Choose a text color for the countdown heading.  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#countdown_heading_text_color\" target=\"_blank\" rel=\"noopener noreferrer\">#ffffff</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-heading_text_color\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"heading_text_color\" value=\"\" data-default=\"#ffffff\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "heading_text_color",
                        "value": "",
                        "default": "#ffffff",
                        "group": "Design"
                    },
                    "subheading_text_color": {
                        "type": "colorpicker",
                        "heading": "Subheading Text Color",
                        "description": "Choose a text color for the countdown subheading.  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#countdown_subheading_text_color\" target=\"_blank\" rel=\"noopener noreferrer\">#ffffff</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-subheading_text_color\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"subheading_text_color\" value=\"\" data-default=\"#ffffff\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "subheading_text_color",
                        "value": "",
                        "default": "#ffffff",
                        "group": "Design"
                    },
                    "link_text_color": {
                        "type": "colorpicker",
                        "heading": "Link Text Color",
                        "description": "Choose a text color for the countdown link.  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#countdown_link_text_color\" target=\"_blank\" rel=\"noopener noreferrer\">#ffffff</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-link_text_color\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"link_text_color\" value=\"\" data-default=\"#ffffff\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "link_text_color",
                        "value": "",
                        "default": "#ffffff",
                        "group": "Design",
                        "dependency": [{
                            "element": "link_url",
                            "value": "",
                            "operator": "!="
                        }]
                    }
                }
            }
        },
        "remove_from_atts": []
    },
    "fusion_counters_box": {
        "name": "Counter Boxes",
        "shortcode": "fusion_counters_box",
        "multi": "multi_element_parent",
        "element_child": "fusion_counter_box",
        "icon": "fusiona-browser",
        "preview": "C:/xamppp/htdocs/wp_avada542/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-counter-box-preview.php",
        "preview_id": "fusion-builder-block-module-counter-box-preview-template",
        "params": {
            "groups": {
                "General": {
                    "element_content": {
                        "type": "tinymce",
                        "heading": "Content",
                        "description": "Enter some content for this contentbox.",
                        "param_name": "element_content",
                        "value": "[fusion_counter_box value=\"20\" delimiter=\"\" unit=\"\" unit_pos=\"suffix\" icon=\"\" direction=\"up\"]Your Content Goes Here[/fusion_counter_box]"
                    },
                    "columns": {
                        "type": "range",
                        "heading": "Number of Columns",
                        "description": "Set the number of columns per row.",
                        "param_name": "columns",
                        "value": "4",
                        "min": "1",
                        "max": "6",
                        "step": "1"
                    },
                    "color": {
                        "type": "colorpickeralpha",
                        "heading": "Counter Box Title Font Color",
                        "param_name": "color",
                        "value": "",
                        "default": "#a0ce4e",
                        "description": "Controls the color of the counter &quot;value&quot; and icon. Leave blank for theme option styling.  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#counter_box_color\" target=\"_blank\" rel=\"noopener noreferrer\">#a0ce4e</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-color\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"color\" value=\"\" data-default=\"#a0ce4e\">Reset to default.</a><span>Using default value.</span></span>"
                    },
                    "title_size": {
                        "type": "textfield",
                        "heading": "Counter Box Title Font Size",
                        "description": "Controls the size of the counter &#039;value&#039; and icon. Enter the font size without &#039;px&#039; ex: 50. Leave blank for theme option styling.  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#counter_box_title_size\" target=\"_blank\" rel=\"noopener noreferrer\">50px</a>.",
                        "param_name": "title_size",
                        "value": ""
                    },
                    "icon": {
                        "type": "iconpicker",
                        "heading": "Icon",
                        "param_name": "icon",
                        "value": "",
                        "description": "Global setting for all counter boxes, this can be overridden individually. Click an icon to select, click again to deselect."
                    },
                    "icon_size": {
                        "type": "textfield",
                        "heading": "Counter Box Icon Size",
                        "description": "Controls the size of the icon. Enter the font size without &#039;px&#039;. Default is 50. Leave blank for theme option styling.  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#counter_box_icon_size\" target=\"_blank\" rel=\"noopener noreferrer\">50px</a>.",
                        "param_name": "icon_size",
                        "value": ""
                    },
                    "icon_top": {
                        "type": "radio_button_set",
                        "heading": "Counter Box Icon Top",
                        "description": "Controls the position of the icon. Select Default for theme option styling.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#counter_box_icon_top\" target=\"_blank\" rel=\"noopener noreferrer\">No</a>.",
                        "param_name": "icon_top",
                        "value": {
                            "": "Default",
                            "no": "No",
                            "yes": "Yes"
                        },
                        "default": ""
                    },
                    "body_color": {
                        "type": "colorpicker",
                        "heading": "Counter Box Body Font Color",
                        "param_name": "body_color",
                        "value": "",
                        "default": "#747474",
                        "description": "Controls the color of the counter body text. Leave blank for theme option styling.  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#counter_box_body_color\" target=\"_blank\" rel=\"noopener noreferrer\">#747474</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-body_color\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"body_color\" value=\"\" data-default=\"#747474\">Reset to default.</a><span>Using default value.</span></span>"
                    },
                    "body_size": {
                        "type": "textfield",
                        "heading": "Counter Box Body Font Size",
                        "description": "Controls the size of the counter body text. Enter the font size without &#039;px&#039; ex: 13. Leave blank for theme option styling.  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#counter_box_body_size\" target=\"_blank\" rel=\"noopener noreferrer\">13px</a>.",
                        "param_name": "body_size",
                        "value": ""
                    },
                    "border_color": {
                        "type": "colorpickeralpha",
                        "heading": "Counter Box Border Color",
                        "param_name": "border_color",
                        "value": "",
                        "default": "#e0dede",
                        "description": "Controls the color of the border.  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#counter_box_border_color\" target=\"_blank\" rel=\"noopener noreferrer\">#e0dede</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-border_color\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"border_color\" value=\"\" data-default=\"#e0dede\">Reset to default.</a><span>Using default value.</span></span>"
                    },
                    "animation_offset": {
                        "type": "select",
                        "heading": "Offset of Animation",
                        "description": "Controls when the animation should start.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#animation_offset\" target=\"_blank\" rel=\"noopener noreferrer\">Top Of Element Hits Bottom Of Viewport</a>.",
                        "param_name": "animation_offset",
                        "value": {
                            "": "Default",
                            "top-into-view": "Top of element hits bottom of viewport",
                            "top-mid-of-view": "Top of element hits middle of viewport",
                            "bottom-in-view": "Bottom of element enters viewport"
                        },
                        "default": ""
                    },
                    "hide_on_mobile": {
                        "type": "checkbox_button_set",
                        "heading": "Element Visibility",
                        "param_name": "hide_on_mobile",
                        "value": {
                            "small-visibility": "Small Screen",
                            "medium-visibility": "Medium Screen",
                            "large-visibility": "Large Screen"
                        },
                        "default": ["small-visibility", "medium-visibility", "large-visibility"],
                        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Element Options</a>."
                    },
                    "class": {
                        "type": "textfield",
                        "heading": "CSS Class",
                        "description": "Add a class to the wrapping HTML element.",
                        "param_name": "class",
                        "value": "",
                        "group": "General"
                    },
                    "id": {
                        "type": "textfield",
                        "heading": "CSS ID",
                        "description": "Add an ID to the wrapping HTML element.",
                        "param_name": "id",
                        "value": "",
                        "group": "General"
                    }
                }
            }
        },
        "remove_from_atts": []
    },
    "fusion_counter_box": {
        "name": "Counter Box",
        "description": "Enter some content for this block.",
        "shortcode": "fusion_counter_box",
        "hide_from_builder": true,
        "params": {
            "groups": {
                "General": {
                    "value": {
                        "type": "textfield",
                        "heading": "Counter Value",
                        "description": "The number to which the counter will animate. Decimal numbers are supported by using the &quot;.&quot; (period) delimiter.",
                        "param_name": "value",
                        "value": "20"
                    },
                    "delimiter": {
                        "type": "textfield",
                        "heading": "Delimiter Digit",
                        "description": "Insert a delimiter digit for better readability. ex: ,",
                        "param_name": "delimiter",
                        "value": ""
                    },
                    "unit": {
                        "type": "textfield",
                        "heading": "Counter Box Unit",
                        "description": "Insert a unit for the counter. ex %",
                        "param_name": "unit",
                        "value": ""
                    },
                    "unit_pos": {
                        "type": "radio_button_set",
                        "heading": "Unit Position",
                        "description": "Choose the positioning of the unit.",
                        "param_name": "unit_pos",
                        "value": {
                            "suffix": "After Counter",
                            "prefix": "Before Counter"
                        },
                        "default": "suffix"
                    },
                    "icon": {
                        "type": "iconpicker",
                        "heading": "Icon",
                        "param_name": "icon",
                        "value": "",
                        "description": "Click an icon to select, click again to deselect."
                    },
                    "direction": {
                        "type": "radio_button_set",
                        "heading": "Counter Direction",
                        "description": "Choose to count up or down.",
                        "param_name": "direction",
                        "value": {
                            "up": "Count Up",
                            "down": "Count Down"
                        },
                        "default": "up"
                    },
                    "element_content": {
                        "type": "textfield",
                        "heading": "Counter Box Text",
                        "description": "Insert text for counter box.",
                        "param_name": "element_content",
                        "value": "Your Content Goes Here",
                        "placeholder": true
                    }
                }
            }
        },
        "remove_from_atts": []
    },
    "fusion_counters_circle": {
        "name": "Counter Circles",
        "shortcode": "fusion_counters_circle",
        "multi": "multi_element_parent",
        "element_child": "fusion_counter_circle",
        "icon": "fusiona-clock",
        "params": {
            "groups": {
                "General": {
                    "element_content": {
                        "type": "tinymce",
                        "heading": "Content",
                        "description": "Enter some content for this contentbox.",
                        "param_name": "element_content",
                        "value": "[fusion_counter_circle value=\"50\" filledcolor=\"\" unfilledcolor=\"\" size=\"220\" scales=\"no\" countdown=\"no\" speed=\"1500\"]Your Content Goes Here[/fusion_counter_circle]"
                    },
                    "animation_offset": {
                        "type": "select",
                        "heading": "Offset of Animation",
                        "description": "Controls when the animation should start.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#animation_offset\" target=\"_blank\" rel=\"noopener noreferrer\">Top Of Element Hits Bottom Of Viewport</a>.",
                        "param_name": "animation_offset",
                        "value": {
                            "": "Default",
                            "top-into-view": "Top of element hits bottom of viewport",
                            "top-mid-of-view": "Top of element hits middle of viewport",
                            "bottom-in-view": "Bottom of element enters viewport"
                        },
                        "default": ""
                    },
                    "hide_on_mobile": {
                        "type": "checkbox_button_set",
                        "heading": "Element Visibility",
                        "param_name": "hide_on_mobile",
                        "value": {
                            "small-visibility": "Small Screen",
                            "medium-visibility": "Medium Screen",
                            "large-visibility": "Large Screen"
                        },
                        "default": ["small-visibility", "medium-visibility", "large-visibility"],
                        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Element Options</a>."
                    },
                    "class": {
                        "type": "textfield",
                        "heading": "CSS Class",
                        "description": "Add a class to the wrapping HTML element.",
                        "param_name": "class",
                        "value": "",
                        "group": "General"
                    },
                    "id": {
                        "type": "textfield",
                        "heading": "CSS ID",
                        "description": "Add an ID to the wrapping HTML element.",
                        "param_name": "id",
                        "value": "",
                        "group": "General"
                    }
                }
            }
        },
        "remove_from_atts": []
    },
    "fusion_counter_circle": {
        "name": "Counter Circle",
        "description": "Enter some content for this block.",
        "shortcode": "fusion_counter_circle",
        "hide_from_builder": true,
        "params": {
            "groups": {
                "General": {
                    "value": {
                        "type": "range",
                        "heading": "Filled Area Percentage",
                        "description": "From 1% to 100%.",
                        "param_name": "value",
                        "value": "50"
                    },
                    "filledcolor": {
                        "type": "colorpickeralpha",
                        "heading": "Filled Color",
                        "param_name": "filledcolor",
                        "value": "",
                        "default": "#a0ce4e",
                        "description": "Controls the color of the filled in area.   Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#counter_filled_color\" target=\"_blank\" rel=\"noopener noreferrer\">#a0ce4e</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-filledcolor\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"filledcolor\" value=\"\" data-default=\"#a0ce4e\">Reset to default.</a><span>Using default value.</span></span>"
                    },
                    "unfilledcolor": {
                        "type": "colorpickeralpha",
                        "heading": "Unfilled Color",
                        "param_name": "unfilledcolor",
                        "value": "",
                        "default": "#f6f6f6",
                        "description": "Controls the color of the unfilled in area.   Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#counter_unfilled_color\" target=\"_blank\" rel=\"noopener noreferrer\">#f6f6f6</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-unfilledcolor\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"unfilledcolor\" value=\"\" data-default=\"#f6f6f6\">Reset to default.</a><span>Using default value.</span></span>"
                    },
                    "size": {
                        "type": "textfield",
                        "heading": "Size of the Counter",
                        "description": "Insert size of the counter in px. ex: 220.",
                        "param_name": "size",
                        "value": "220"
                    },
                    "scales": {
                        "type": "radio_button_set",
                        "heading": "Show Scales",
                        "description": "Choose to show a scale around circles.",
                        "param_name": "scales",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        },
                        "default": "no"
                    },
                    "countdown": {
                        "type": "radio_button_set",
                        "heading": "Countdown",
                        "description": "Choose to let the circle filling move counter clockwise.",
                        "param_name": "countdown",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        },
                        "default": "no"
                    },
                    "speed": {
                        "type": "textfield",
                        "heading": "Animation Speed",
                        "description": "Insert animation speed in milliseconds.",
                        "param_name": "speed",
                        "value": "1500"
                    },
                    "element_content": {
                        "type": "textfield",
                        "heading": "Counter Circle Text",
                        "description": "Insert text for counter circle box, keep it short.",
                        "param_name": "element_content",
                        "value": "Your Content Goes Here",
                        "placeholder": true
                    }
                }
            }
        },
        "remove_from_atts": []
    },
    "fusion_dropcap": {
        "name": "Dropcap",
        "shortcode": "fusion_dropcap",
        "generator_only": true,
        "icon": "fusiona-font",
        "params": {
            "groups": {
                "General": {
                    "element_content": {
                        "type": "textarea",
                        "heading": "Dropcap Letter",
                        "description": "Add the letter to be used as dropcap.",
                        "param_name": "element_content",
                        "value": "A"
                    },
                    "boxed": {
                        "type": "radio_button_set",
                        "heading": "Boxed Dropcap",
                        "description": "Choose to get a boxed dropcap.",
                        "param_name": "boxed",
                        "value": {
                            "no": "No",
                            "yes": "Yes"
                        },
                        "default": "no"
                    },
                    "boxed_radius": {
                        "type": "textfield",
                        "heading": "Box Radius",
                        "param_name": "boxed_radius",
                        "value": "",
                        "description": "Choose the radius of the boxed dropcap. In pixels (px), ex: 1px, or &quot;round&quot;.",
                        "dependency": [{
                            "element": "boxed",
                            "value": "yes",
                            "operator": "=="
                        }]
                    },
                    "class": {
                        "type": "textfield",
                        "heading": "CSS Class",
                        "param_name": "class",
                        "value": "",
                        "description": "Add a class to the wrapping HTML element."
                    },
                    "id": {
                        "type": "textfield",
                        "heading": "CSS ID",
                        "param_name": "id",
                        "value": "",
                        "description": "Add an ID to the wrapping HTML element."
                    }
                },
                "Design": {
                    "color": {
                        "type": "colorpickeralpha",
                        "heading": "Color",
                        "description": "Controls the color of the dropcap letter. Leave blank for theme option selection.  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#dropcap_color\" target=\"_blank\" rel=\"noopener noreferrer\">#a0ce4e</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-color\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"color\" value=\"\" data-default=\"#a0ce4e\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "color",
                        "value": "",
                        "default": "#a0ce4e",
                        "group": "Design"
                    }
                }
            }
        },
        "remove_from_atts": []
    },
    "fusion_flip_boxes": {
        "name": "Flip Boxes",
        "shortcode": "fusion_flip_boxes",
        "multi": "multi_element_parent",
        "element_child": "fusion_flip_box",
        "icon": "fusiona-loop-alt2",
        "preview": "C:/xamppp/htdocs/wp_avada542/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-flipboxes-preview.php",
        "preview_id": "fusion-builder-block-module-flipboxes-preview-template",
        "params": {
            "groups": {
                "General": {
                    "element_content": {
                        "type": "tinymce",
                        "heading": "Content",
                        "description": "Enter some content for this contentbox.",
                        "param_name": "element_content",
                        "value": "[fusion_flip_box title_front=\"Your Content Goes Here\" title_back=\"Your Content Goes Here\" text_front=\"Your Content Goes Here\" background_color_front=\"\" title_front_color=\"\" text_front_color=\"\" background_color_back=\"\" title_back_color=\"\" text_back_color=\"\" border_size=\"\" border_color=\"\" border_radius=\"\" icon=\"\" icon_color=\"\" circle=\"yes\" circle_color=\"\" circle_border_color=\"\" icon_flip=\"\" icon_rotate=\"\" icon_spin=\"no\" image=\"\" image_width=\"35\" image_height=\"35\" animation_offset=\"\" animation_type=\"\" animation_direction=\"left\" animation_speed=\"0.1\"]Your Content Goes Here[/fusion_flip_box]"
                    },
                    "columns": {
                        "type": "range",
                        "heading": "Number of Columns",
                        "description": "Set the number of columns per row.",
                        "param_name": "columns",
                        "value": "1",
                        "min": "1",
                        "max": "6",
                        "step": "1"
                    },
                    "icon": {
                        "type": "iconpicker",
                        "heading": "Icon",
                        "param_name": "icon",
                        "value": "",
                        "description": "Click an icon to select, click again to deselect."
                    },
                    "icon_color": {
                        "type": "colorpickeralpha",
                        "heading": "Icon Color",
                        "description": "Controls the color of the icon.   Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#icon_color\" target=\"_blank\" rel=\"noopener noreferrer\">#ffffff</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-icon_color\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"icon_color\" value=\"\" data-default=\"#ffffff\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "icon_color",
                        "value": "",
                        "default": "#ffffff"
                    },
                    "circle": {
                        "type": "radio_button_set",
                        "heading": "Icon Circle",
                        "description": "Choose to use a circled background on the icon.",
                        "param_name": "circle",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        },
                        "default": ""
                    },
                    "circle_color": {
                        "type": "colorpickeralpha",
                        "heading": "Icon Circle Background Color",
                        "description": "Controls the color of the circle.   Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#icon_circle_color\" target=\"_blank\" rel=\"noopener noreferrer\">#333333</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-circle_color\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"circle_color\" value=\"\" data-default=\"#333333\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "circle_color",
                        "value": "",
                        "default": "#333333"
                    },
                    "circle_border_color": {
                        "type": "colorpickeralpha",
                        "heading": "Icon Circle Border Color",
                        "description": "Controls the color of the circle border.   Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#icon_border_color\" target=\"_blank\" rel=\"noopener noreferrer\">#333333</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-circle_border_color\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"circle_border_color\" value=\"\" data-default=\"#333333\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "circle_border_color",
                        "value": "",
                        "default": "#333333"
                    },
                    "icon_flip": {
                        "type": "radio_button_set",
                        "heading": "Flip Icon",
                        "description": "Choose to flip the icon.",
                        "param_name": "icon_flip",
                        "value": {
                            "": "None",
                            "horizontal": "Horizontal",
                            "vertical": "Vertical"
                        },
                        "default": ""
                    },
                    "icon_rotate": {
                        "type": "radio_button_set",
                        "heading": "Rotate Icon",
                        "description": "Choose to rotate the icon.",
                        "param_name": "icon_rotate",
                        "value": {
                            "90": "90",
                            "180": "180",
                            "270": "270",
                            "": "None"
                        },
                        "default": ""
                    },
                    "icon_spin": {
                        "type": "radio_button_set",
                        "heading": "Spinning Icon",
                        "description": "Choose to let the icon spin.",
                        "param_name": "icon_spin",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        },
                        "default": "no"
                    },
                    "image": {
                        "type": "upload",
                        "heading": "Icon Image",
                        "description": "To upload your own icon image, deselect the icon above and then upload your icon image.",
                        "param_name": "image",
                        "value": ""
                    },
                    "image_width": {
                        "type": "textfield",
                        "heading": "Icon Image Width",
                        "description": "If using an icon image, specify the image width in pixels but do not add px, ex: 35.",
                        "param_name": "image_width",
                        "value": "",
                        "dependency": [{
                            "element": "image",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "image_height": {
                        "type": "textfield",
                        "heading": "Icon Image Height",
                        "description": "If using an icon image, specify the image height in pixels but do not add px, ex: 35.",
                        "param_name": "image_height",
                        "value": "",
                        "dependency": [{
                            "element": "image",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "hide_on_mobile": {
                        "type": "checkbox_button_set",
                        "heading": "Element Visibility",
                        "param_name": "hide_on_mobile",
                        "value": {
                            "small-visibility": "Small Screen",
                            "medium-visibility": "Medium Screen",
                            "large-visibility": "Large Screen"
                        },
                        "default": ["small-visibility", "medium-visibility", "large-visibility"],
                        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Element Options</a>."
                    },
                    "class": {
                        "type": "textfield",
                        "heading": "CSS Class",
                        "description": "Add a class to the wrapping HTML element.",
                        "param_name": "class",
                        "value": ""
                    },
                    "id": {
                        "type": "textfield",
                        "heading": "CSS ID",
                        "description": "Add an ID to the wrapping HTML element.",
                        "param_name": "id",
                        "value": ""
                    }
                }
            }
        },
        "remove_from_atts": []
    },
    "fusion_flip_box": {
        "name": "Flip Box",
        "description": "Enter some content for this textblock",
        "shortcode": "fusion_flip_box",
        "hide_from_builder": true,
        "allow_generator": true,
        "params": {
            "groups": {
                "General": {
                    "title_front": {
                        "type": "textfield",
                        "heading": "Flip Box Frontside Heading",
                        "description": "Add a heading for the frontside of the flip box.",
                        "param_name": "title_front",
                        "value": "Your Content Goes Here",
                        "placeholder": true
                    },
                    "title_back": {
                        "type": "textfield",
                        "heading": "Flip Box Backside Heading",
                        "description": "Add a heading for the backside of the flip box.",
                        "param_name": "title_back",
                        "value": "Your Content Goes Here",
                        "placeholder": true
                    },
                    "text_front": {
                        "type": "textfield",
                        "heading": "Flip Box Frontside Content",
                        "description": "Add content for the frontside of the flip box.",
                        "param_name": "text_front",
                        "value": "Your Content Goes Here",
                        "placeholder": true
                    },
                    "element_content": {
                        "type": "tinymce",
                        "heading": "Flip Box Backside Content",
                        "description": "Add content for the backside of the flip box.",
                        "param_name": "element_content",
                        "value": "Your Content Goes Here",
                        "placeholder": true
                    },
                    "background_color_front": {
                        "type": "colorpickeralpha",
                        "heading": "Background Color Frontside",
                        "description": "Controls the background color of the frontside.  NOTE: flip boxes must have background colors to work correctly in all browsers.  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#flip_boxes_front_bg\" target=\"_blank\" rel=\"noopener noreferrer\">#f6f6f6</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-background_color_front\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"background_color_front\" value=\"\" data-default=\"#f6f6f6\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "background_color_front",
                        "value": "",
                        "default": "#f6f6f6"
                    },
                    "title_front_color": {
                        "type": "colorpickeralpha",
                        "heading": "Heading Color Frontside",
                        "description": "Controls the heading color of the frontside.   Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#flip_boxes_front_heading\" target=\"_blank\" rel=\"noopener noreferrer\">#333333</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-title_front_color\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"title_front_color\" value=\"\" data-default=\"#333333\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "title_front_color",
                        "value": "",
                        "default": "#333333"
                    },
                    "text_front_color": {
                        "type": "colorpickeralpha",
                        "heading": "Text Color Frontside",
                        "description": "Controls the text color of the frontside.   Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#flip_boxes_front_text\" target=\"_blank\" rel=\"noopener noreferrer\">#747474</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-text_front_color\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"text_front_color\" value=\"\" data-default=\"#747474\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "text_front_color",
                        "value": "",
                        "default": "#747474"
                    },
                    "background_color_back": {
                        "type": "colorpickeralpha",
                        "heading": "Background Color Backside",
                        "description": "Controls the background color of the backside.  NOTE: flip boxes must have background colors to work correctly in all browsers.  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#flip_boxes_back_bg\" target=\"_blank\" rel=\"noopener noreferrer\">#a0ce4e</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-background_color_back\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"background_color_back\" value=\"\" data-default=\"#a0ce4e\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "background_color_back",
                        "value": "",
                        "default": "#a0ce4e"
                    },
                    "title_back_color": {
                        "type": "colorpickeralpha",
                        "heading": "Heading Color Backside",
                        "description": "Controls the heading color of the backside.   Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#flip_boxes_back_heading\" target=\"_blank\" rel=\"noopener noreferrer\">#eeeded</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-title_back_color\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"title_back_color\" value=\"\" data-default=\"#eeeded\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "title_back_color",
                        "value": "",
                        "default": "#eeeded"
                    },
                    "text_back_color": {
                        "type": "colorpickeralpha",
                        "heading": "Text Color Backside",
                        "description": "Controls the text color of the backside.   Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#flip_boxes_back_text\" target=\"_blank\" rel=\"noopener noreferrer\">#ffffff</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-text_back_color\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"text_back_color\" value=\"\" data-default=\"#ffffff\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "text_back_color",
                        "value": "",
                        "default": "#ffffff"
                    },
                    "border_size": {
                        "type": "range",
                        "heading": "Border Size",
                        "description": "In pixels.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#flip_boxes_border_size\" target=\"_blank\" rel=\"noopener noreferrer\">1</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-border_size\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"border_size\" value=\"\" data-default=\"1\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "border_size",
                        "value": "",
                        "min": "0",
                        "max": "50",
                        "step": "1",
                        "default": "1"
                    },
                    "border_color": {
                        "type": "colorpickeralpha",
                        "heading": "Border Color",
                        "description": "Controls the border color.   Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#flip_boxes_border_color\" target=\"_blank\" rel=\"noopener noreferrer\">rgba(0,0,0,0)</a>.",
                        "param_name": "border_color",
                        "value": "",
                        "default": "rgba(0,0,0,0)",
                        "dependency": [{
                            "element": "border_size",
                            "value": "0",
                            "operator": "!="
                        }]
                    },
                    "border_radius": {
                        "type": "textfield",
                        "heading": "Border Radius",
                        "description": "Controls the flip box border radius. In pixels (px), ex: 1px, or &quot;round&quot;.   Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#flip_boxes_border_radius\" target=\"_blank\" rel=\"noopener noreferrer\">4px</a>.",
                        "param_name": "border_radius",
                        "value": ""
                    },
                    "icon": {
                        "type": "iconpicker",
                        "heading": "Icon",
                        "param_name": "icon",
                        "value": "",
                        "description": "Click an icon to select, click again to deselect."
                    },
                    "icon_color": {
                        "type": "colorpickeralpha",
                        "heading": "Icon Color",
                        "description": "Controls the color of the icon.   Leave empty for value set in parent options.  If that is also empty, the Element Options value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#icon_color\" target=\"_blank\" rel=\"noopener noreferrer\">#ffffff</a> will be used.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-icon_color\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"icon_color\" value=\"\" data-default=\"#ffffff\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "icon_color",
                        "value": "",
                        "default": "#ffffff",
                        "dependency": [{
                            "element": "icon",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "circle": {
                        "type": "radio_button_set",
                        "heading": "Icon Circle",
                        "description": "Choose to use a circled background on the icon.",
                        "param_name": "circle",
                        "value": {
                            "": "Default",
                            "yes": "Yes",
                            "no": "No"
                        },
                        "default": "",
                        "dependency": [{
                            "element": "icon",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "circle_color": {
                        "type": "colorpickeralpha",
                        "heading": "Icon Circle Background Color",
                        "description": "Controls the color of the circle.   Leave empty for value set in parent options.  If that is also empty, the Element Options value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#icon_circle_color\" target=\"_blank\" rel=\"noopener noreferrer\">#333333</a> will be used.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-circle_color\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"circle_color\" value=\"\" data-default=\"#333333\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "circle_color",
                        "value": "",
                        "default": "#333333",
                        "dependency": [{
                            "element": "icon",
                            "value": "",
                            "operator": "!="
                        }, {
                            "element": "circle",
                            "value": "yes",
                            "operator": "=="
                        }]
                    },
                    "circle_border_color": {
                        "type": "colorpickeralpha",
                        "heading": "Icon Circle Border Color",
                        "description": "Controls the color of the circle border.   Leave empty for value set in parent options.  If that is also empty, the Element Options value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#icon_border_color\" target=\"_blank\" rel=\"noopener noreferrer\">#333333</a> will be used.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-circle_border_color\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"circle_border_color\" value=\"\" data-default=\"#333333\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "circle_border_color",
                        "value": "",
                        "default": "#333333",
                        "dependency": [{
                            "element": "icon",
                            "value": "",
                            "operator": "!="
                        }, {
                            "element": "circle",
                            "value": "yes",
                            "operator": "=="
                        }]
                    },
                    "icon_flip": {
                        "type": "radio_button_set",
                        "heading": "Flip Icon",
                        "description": "Choose to flip the icon.",
                        "param_name": "icon_flip",
                        "value": {
                            "": "Default",
                            "none": "None",
                            "horizontal": "Horizontal",
                            "vertical": "Vertical"
                        },
                        "default": "",
                        "dependency": [{
                            "element": "icon",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "icon_rotate": {
                        "type": "radio_button_set",
                        "heading": "Rotate Icon",
                        "description": "Choose to rotate the icon.",
                        "param_name": "icon_rotate",
                        "value": {
                            "90": "90",
                            "180": "180",
                            "270": "270",
                            "": "Default",
                            "none": "None"
                        },
                        "default": "",
                        "dependency": [{
                            "element": "icon",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "icon_spin": {
                        "type": "radio_button_set",
                        "heading": "Spinning Icon",
                        "description": "Choose to let the icon spin.",
                        "param_name": "icon_spin",
                        "value": {
                            "": "Default",
                            "yes": "Yes",
                            "no": "No"
                        },
                        "default": "",
                        "dependency": [{
                            "element": "icon",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "image": {
                        "type": "upload",
                        "heading": "Icon Image",
                        "description": "To upload your own icon image, deselect the icon above and then upload your icon image.",
                        "param_name": "image",
                        "value": ""
                    },
                    "image_width": {
                        "type": "textfield",
                        "heading": "Icon Image Width",
                        "description": "If using an icon image, specify the image width in pixels but do not add px, ex: 35.",
                        "param_name": "image_width",
                        "value": "35",
                        "dependency": [{
                            "element": "image",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "image_height": {
                        "type": "textfield",
                        "heading": "Icon Image Height",
                        "description": "If using an icon image, specify the image height in pixels but do not add px, ex: 35.",
                        "param_name": "image_height",
                        "value": "35",
                        "dependency": [{
                            "element": "image",
                            "value": "",
                            "operator": "!="
                        }]
                    }
                },
                "Animation": {
                    "animation_type": {
                        "type": "select",
                        "heading": "Animation Type",
                        "description": "Select the type of animation to use on the element.",
                        "param_name": "animation_type",
                        "value": {
                            "": "None",
                            "bounce": "Bounce",
                            "fade": "Fade",
                            "flash": "Flash",
                            "rubberBand": "Rubberband",
                            "shake": "Shake",
                            "slide": "Slide",
                            "zoom": "Zoom"
                        },
                        "default": "",
                        "group": "Animation"
                    },
                    "animation_direction": {
                        "type": "radio_button_set",
                        "heading": "Direction of Animation",
                        "description": "Select the incoming direction for the animation.",
                        "param_name": "animation_direction",
                        "value": {
                            "down": "Top",
                            "right": "Right",
                            "up": "Bottom",
                            "left": "Left",
                            "static": "Static"
                        },
                        "default": "left",
                        "group": "Animation",
                        "dependency": [{
                            "element": "animation_type",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "animation_speed": {
                        "type": "select",
                        "heading": "Speed of Animation",
                        "description": "Type in speed of animation in seconds (0.1 - 1).",
                        "param_name": "animation_speed",
                        "value": {
                            "1": "1",
                            "0.1": "0.1",
                            "0.2": "0.2",
                            "0.3": "0.3",
                            "0.4": "0.4",
                            "0.5": "0.5",
                            "0.6": "0.6",
                            "0.7": "0.7",
                            "0.8": "0.8",
                            "0.9": "0.9"
                        },
                        "default": "0.1",
                        "group": "Animation",
                        "dependency": [{
                            "element": "animation_type",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "animation_offset": {
                        "type": "select",
                        "heading": "Offset of Animation",
                        "description": "Controls when the animation should start.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#animation_offset\" target=\"_blank\" rel=\"noopener noreferrer\">Top Of Element Hits Bottom Of Viewport</a>.",
                        "param_name": "animation_offset",
                        "value": {
                            "": "Default",
                            "top-into-view": "Top of element hits bottom of viewport",
                            "top-mid-of-view": "Top of element hits middle of viewport",
                            "bottom-in-view": "Bottom of element enters viewport"
                        },
                        "default": "",
                        "group": "Animation",
                        "dependency": [{
                            "element": "animation_type",
                            "value": "",
                            "operator": "!="
                        }]
                    }
                }
            }
        },
        "remove_from_atts": []
    },
    "fusion_fontawesome": {
        "name": "Font Awesome Icon",
        "shortcode": "fusion_fontawesome",
        "icon": "fusiona-flag",
        "preview": "C:/xamppp/htdocs/wp_avada542/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-font-awesome-preview.php",
        "preview_id": "fusion-builder-block-module-font-awesome-preview-template",
        "params": {
            "groups": {
                "General": {
                    "icon": {
                        "type": "iconpicker",
                        "heading": "Select Icon",
                        "param_name": "icon",
                        "value": "",
                        "description": "Click an icon to select, click again to deselect."
                    },
                    "size": {
                        "type": "textfield",
                        "heading": "Size of Icon",
                        "description": "Set the size of the icon. In pixels (px), ex: 13px.",
                        "param_name": "size",
                        "value": ""
                    },
                    "flip": {
                        "type": "radio_button_set",
                        "heading": "Flip Icon",
                        "description": "Choose to flip the icon.",
                        "param_name": "flip",
                        "value": {
                            "": "None",
                            "horizontal": "Horizontal",
                            "vertical": "Vertical"
                        },
                        "default": ""
                    },
                    "rotate": {
                        "type": "radio_button_set",
                        "heading": "Rotate Icon",
                        "description": "Choose to rotate the icon.",
                        "param_name": "rotate",
                        "value": {
                            "90": "90",
                            "180": "180",
                            "270": "270",
                            "": "None"
                        },
                        "default": ""
                    },
                    "spin": {
                        "type": "radio_button_set",
                        "heading": "Spinning Icon",
                        "description": "Choose to let the icon spin.",
                        "param_name": "spin",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        },
                        "default": "no"
                    },
                    "alignment": {
                        "type": "radio_button_set",
                        "heading": "Alignment",
                        "description": "Select the icon&#039;s alignment.",
                        "param_name": "alignment",
                        "value": {
                            "": "Text Flow",
                            "center": "Center",
                            "left": "Left",
                            "right": "Right"
                        },
                        "default": ""
                    },
                    "hide_on_mobile": {
                        "type": "checkbox_button_set",
                        "heading": "Element Visibility",
                        "param_name": "hide_on_mobile",
                        "value": {
                            "small-visibility": "Small Screen",
                            "medium-visibility": "Medium Screen",
                            "large-visibility": "Large Screen"
                        },
                        "default": ["small-visibility", "medium-visibility", "large-visibility"],
                        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Element Options</a>."
                    },
                    "class": {
                        "type": "textfield",
                        "heading": "CSS Class",
                        "param_name": "class",
                        "value": "",
                        "description": "Add a class to the wrapping HTML element."
                    },
                    "id": {
                        "type": "textfield",
                        "heading": "CSS ID",
                        "param_name": "id",
                        "value": "",
                        "description": "Add an ID to the wrapping HTML element."
                    }
                },
                "Design": {
                    "margin": {
                        "type": "dimension",
                        "remove_from_atts": true,
                        "heading": "Margin",
                        "description": "Spacing around the font awesome icon. In px, em or %, e.g. 10px. <strong>Note:</strong> Leave empty for automatic margin calculation, based on alignment and icon size.",
                        "param_name": "margin",
                        "group": "Design",
                        "value": {
                            "margin_top": "",
                            "margin_right": "",
                            "margin_bottom": "",
                            "margin_left": ""
                        }
                    },
                    "circle": {
                        "type": "radio_button_set",
                        "heading": "Icon in Circle",
                        "description": "Choose to display the icon in a circle.",
                        "param_name": "circle",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        },
                        "default": "yes",
                        "group": "Design"
                    },
                    "iconcolor": {
                        "type": "colorpickeralpha",
                        "heading": "Icon Color",
                        "description": "Controls the color of the icon.   Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#icon_color\" target=\"_blank\" rel=\"noopener noreferrer\">#ffffff</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-iconcolor\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"iconcolor\" value=\"\" data-default=\"#ffffff\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "iconcolor",
                        "value": "",
                        "default": "#ffffff",
                        "group": "Design"
                    },
                    "circlecolor": {
                        "type": "colorpickeralpha",
                        "heading": "Icon Circle Background Color",
                        "description": "Controls the color of the circle.   Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#icon_circle_color\" target=\"_blank\" rel=\"noopener noreferrer\">#333333</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-circlecolor\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"circlecolor\" value=\"\" data-default=\"#333333\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "circlecolor",
                        "value": "",
                        "default": "#333333",
                        "group": "Design",
                        "dependency": [{
                            "element": "circle",
                            "value": "yes",
                            "operator": "=="
                        }]
                    },
                    "circlebordercolor": {
                        "type": "colorpickeralpha",
                        "heading": "Icon Circle Border Color",
                        "description": "Controls the color of the circle border.   Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#icon_border_color\" target=\"_blank\" rel=\"noopener noreferrer\">#333333</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-circlebordercolor\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"circlebordercolor\" value=\"\" data-default=\"#333333\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "circlebordercolor",
                        "value": "",
                        "default": "#333333",
                        "group": "Design",
                        "dependency": [{
                            "element": "circle",
                            "value": "yes",
                            "operator": "=="
                        }]
                    }
                },
                "Animation": {
                    "animation_type": {
                        "type": "select",
                        "heading": "Animation Type",
                        "description": "Select the type of animation to use on the element.",
                        "param_name": "animation_type",
                        "value": {
                            "": "None",
                            "bounce": "Bounce",
                            "fade": "Fade",
                            "flash": "Flash",
                            "rubberBand": "Rubberband",
                            "shake": "Shake",
                            "slide": "Slide",
                            "zoom": "Zoom"
                        },
                        "default": "",
                        "group": "Animation"
                    },
                    "animation_direction": {
                        "type": "radio_button_set",
                        "heading": "Direction of Animation",
                        "description": "Select the incoming direction for the animation.",
                        "param_name": "animation_direction",
                        "value": {
                            "down": "Top",
                            "right": "Right",
                            "up": "Bottom",
                            "left": "Left",
                            "static": "Static"
                        },
                        "default": "down",
                        "group": "Animation",
                        "dependency": [{
                            "element": "animation_type",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "animation_speed": {
                        "type": "select",
                        "heading": "Speed of Animation",
                        "description": "Type in speed of animation in seconds (0.1 - 1).",
                        "param_name": "animation_speed",
                        "value": {
                            "1": "1",
                            "0.1": "0.1",
                            "0.2": "0.2",
                            "0.3": "0.3",
                            "0.4": "0.4",
                            "0.5": "0.5",
                            "0.6": "0.6",
                            "0.7": "0.7",
                            "0.8": "0.8",
                            "0.9": "0.9"
                        },
                        "default": "0.1",
                        "group": "Animation",
                        "dependency": [{
                            "element": "animation_type",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "animation_offset": {
                        "type": "select",
                        "heading": "Offset of Animation",
                        "description": "Controls when the animation should start.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#animation_offset\" target=\"_blank\" rel=\"noopener noreferrer\">Top Of Element Hits Bottom Of Viewport</a>.",
                        "param_name": "animation_offset",
                        "value": {
                            "": "Default",
                            "top-into-view": "Top of element hits bottom of viewport",
                            "top-mid-of-view": "Top of element hits middle of viewport",
                            "bottom-in-view": "Bottom of element enters viewport"
                        },
                        "default": "",
                        "group": "Animation",
                        "dependency": [{
                            "element": "animation_type",
                            "value": "",
                            "operator": "!="
                        }]
                    }
                }
            }
        },
        "remove_from_atts": ["margin"]
    },
    "fusion_gallery": {
        "name": "Gallery",
        "shortcode": "fusion_gallery",
        "icon": "fusiona-dashboard",
        "preview": "C:/xamppp/htdocs/wp_avada542/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-gallery-preview.php",
        "preview_id": "fusion-builder-block-module-gallery-preview-template",
        "allow_generator": true,
        "params": {
            "groups": {
                "General": {
                    "image_ids": {
                        "type": "upload_images",
                        "heading": "Gallery Images",
                        "description": "Upload or select images from media library.",
                        "param_name": "image_ids",
                        "element": "fusion_gallery",
                        "value": ""
                    },
                    "layout": {
                        "type": "radio_button_set",
                        "heading": "Gallery Layout",
                        "description": "Select the gallery layout type.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#gallery_layout\" target=\"_blank\" rel=\"noopener noreferrer\">Grid</a>.",
                        "param_name": "layout",
                        "value": {
                            "": "Default",
                            "grid": "Grid",
                            "masonry": "Masonry"
                        },
                        "default": ""
                    },
                    "picture_size": {
                        "type": "radio_button_set",
                        "heading": "Picture Size",
                        "description": "Fixed = width and height will be fixed.<br/>Auto = width and height will adjust to the image.<br/>  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#gallery_picture_size\" target=\"_blank\" rel=\"noopener noreferrer\">Auto</a>.",
                        "param_name": "picture_size",
                        "value": {
                            "": "Default",
                            "fixed": "Fixed",
                            "auto": "Auto"
                        },
                        "dependency": [{
                            "element": "layout",
                            "value": "masonry",
                            "operator": "!="
                        }],
                        "default": ""
                    },
                    "columns": {
                        "type": "range",
                        "heading": "Number of Columns",
                        "description": "Set the number of columns per row.  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#gallery_columns\" target=\"_blank\" rel=\"noopener noreferrer\">3</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-columns\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"columns\" value=\"\" data-default=\"3\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "columns",
                        "value": "",
                        "min": "1",
                        "max": "6",
                        "step": "1",
                        "default": "3"
                    },
                    "column_spacing": {
                        "type": "range",
                        "heading": "Column Spacing",
                        "description": "Insert the amount of spacing between gallery images without &quot;px&quot;. ex: 7.  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#gallery_column_spacing\" target=\"_blank\" rel=\"noopener noreferrer\">10</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-column_spacing\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"column_spacing\" value=\"\" data-default=\"10\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "column_spacing",
                        "value": "10",
                        "min": "0",
                        "max": "300",
                        "step": "1",
                        "default": "10",
                        "dependency": [{
                            "element": "columns",
                            "value": "1",
                            "operator": "!="
                        }]
                    },
                    "hover_type": {
                        "type": "radio_button_set",
                        "heading": "Hover Type",
                        "description": "Select the hover effect type.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#gallery_hover_type\" target=\"_blank\" rel=\"noopener noreferrer\">None</a>.",
                        "param_name": "hover_type",
                        "value": {
                            "": "Default",
                            "none": "None",
                            "zoomin": "Zoom In",
                            "zoomout": "Zoom Out",
                            "liftup": "Lift Up"
                        },
                        "default": ""
                    },
                    "lightbox": {
                        "type": "radio_button_set",
                        "heading": "Image lightbox",
                        "description": "Show image in lightbox. Lightbox must be enabled in Theme Options or the image will open up in the same tab by itself.  Current value set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#status_lightbox\" target=\"_blank\" rel=\"noopener noreferrer\">Yes</a>.",
                        "param_name": "lightbox",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        },
                        "default": "yes"
                    },
                    "lightbox_content": {
                        "type": "radio_button_set",
                        "heading": "Lightbox Content",
                        "param_name": "lightbox_content",
                        "default": "",
                        "value": {
                            "": "Default",
                            "titles": "Titles",
                            "title_and_caption": "Titles and Captions",
                            "none": "None"
                        },
                        "description": "Choose if titles and captions will display in the lightbox.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#gallery_lightbox_content\" target=\"_blank\" rel=\"noopener noreferrer\">None</a>.",
                        "dependency": [{
                            "element": "lightbox",
                            "value": "no",
                            "operator": "!="
                        }]
                    },
                    "hide_on_mobile": {
                        "type": "checkbox_button_set",
                        "heading": "Element Visibility",
                        "param_name": "hide_on_mobile",
                        "value": {
                            "small-visibility": "Small Screen",
                            "medium-visibility": "Medium Screen",
                            "large-visibility": "Large Screen"
                        },
                        "default": ["small-visibility", "medium-visibility", "large-visibility"],
                        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Element Options</a>."
                    },
                    "class": {
                        "type": "textfield",
                        "heading": "CSS Class",
                        "description": "Add a class to the wrapping HTML element.",
                        "param_name": "class",
                        "value": "",
                        "group": "General"
                    },
                    "id": {
                        "type": "textfield",
                        "heading": "CSS ID",
                        "description": "Add an ID to the wrapping HTML element.",
                        "param_name": "id",
                        "value": "",
                        "group": "General"
                    }
                }
            }
        },
        "remove_from_atts": []
    },
    "fusion_map": {
        "name": "Google Map",
        "shortcode": "fusion_map",
        "icon": "fusiona-map",
        "preview": "C:/xamppp/htdocs/wp_avada542/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-google-map-preview.php",
        "preview_id": "fusion-builder-block-module-google-map-preview-template",
        "params": {
            "groups": {
                "General": {
                    "address": {
                        "type": "textarea",
                        "heading": "Address",
                        "description": "Add the address to the location you wish to display. Single address example: 775 New York Ave, Brooklyn, Kings, New York 11203. If the location is off, please try to use long/lat coordinates with latlng=. ex: latlng=12.381068,-1.492711. For multiple addresses, separate addresses by using the | symbol. ex: Address 1|Address 2|Address 3.",
                        "param_name": "address",
                        "value": ""
                    },
                    "type": {
                        "type": "radio_button_set",
                        "heading": "Map Type",
                        "description": "Select the type of google map to display.",
                        "param_name": "type",
                        "value": {
                            "roadmap": "Roadmap",
                            "satellite": "Satellite",
                            "hybrid": "Hybrid",
                            "terrain": "Terrain"
                        },
                        "default": "roadmap"
                    },
                    "dimensions": {
                        "type": "dimension",
                        "remove_from_atts": true,
                        "heading": "Map Dimensions",
                        "description": "Map dimensions in percentage, pixels or ems. NOTE: height does not accept percentage value.",
                        "param_name": "dimensions",
                        "value": {
                            "width": "100%",
                            "height": "300px"
                        }
                    },
                    "zoom": {
                        "type": "range",
                        "heading": "Zoom Level",
                        "description": "Higher number will be more zoomed in.",
                        "param_name": "zoom",
                        "value": "14",
                        "min": "1",
                        "max": "25",
                        "step": "1"
                    },
                    "scrollwheel": {
                        "type": "radio_button_set",
                        "heading": "Scrollwheel on Map",
                        "description": "Enable zooming using a mouse&#039;s scroll wheel. Use Cmd/Ctrl key + scroll to zoom.",
                        "param_name": "scrollwheel",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        },
                        "default": "yes"
                    },
                    "scale": {
                        "type": "radio_button_set",
                        "heading": "Show Scale Control on Map",
                        "description": "Display the map scale.",
                        "param_name": "scale",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        },
                        "default": "yes"
                    },
                    "zoom_pancontrol": {
                        "type": "radio_button_set",
                        "heading": "Show Pan Control on Map",
                        "description": "Displays pan control button.",
                        "param_name": "zoom_pancontrol",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        },
                        "default": "yes"
                    },
                    "animation": {
                        "type": "radio_button_set",
                        "heading": "Address Pin Animation",
                        "description": "Choose to animate the address pins when the map first loads.",
                        "param_name": "animation",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        },
                        "default": "no"
                    },
                    "popup": {
                        "type": "radio_button_set",
                        "heading": "Show Tooltip by Default",
                        "description": "Display or hide tooltip by default when the map first loads.",
                        "param_name": "popup",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        },
                        "default": "yes"
                    },
                    "map_style": {
                        "type": "radio_button_set",
                        "heading": "Select the Map Styling Switch",
                        "description": "Choose default styling for classic google map styles. Choose theme styling for our custom style. Choose custom styling to make your own with the advanced options below.",
                        "param_name": "map_style",
                        "value": {
                            "default": "Default Styling",
                            "theme": "Theme Styling",
                            "custom": "Custom Styling"
                        },
                        "default": "default"
                    },
                    "overlay_color": {
                        "type": "colorpicker",
                        "heading": "Map Overlay Color",
                        "description": "Custom styling setting only. Pick any overlaying color for the map besides pure black or white. Works best with &quot;roadmap&quot; type.",
                        "param_name": "overlay_color",
                        "value": "",
                        "dependency": [{
                            "element": "map_style",
                            "value": "custom",
                            "operator": "=="
                        }]
                    },
                    "infobox_content": {
                        "type": "raw_textarea",
                        "heading": "Infobox Content",
                        "description": "Custom styling setting only. Type in custom info box content to replace address string. For multiple addresses, separate info box contents by using the | symbol. ex: InfoBox 1|InfoBox 2|InfoBox 3.",
                        "param_name": "infobox_content",
                        "value": "",
                        "dependency": [{
                            "element": "map_style",
                            "value": "custom",
                            "operator": "=="
                        }]
                    },
                    "infobox": {
                        "type": "radio_button_set",
                        "heading": "Infobox Styling",
                        "description": "Custom styling setting only. Choose between default or custom info box.",
                        "param_name": "infobox",
                        "value": {
                            "default": "Default Infobox",
                            "custom": "Custom Infobox"
                        },
                        "default": "default",
                        "dependency": [{
                            "element": "map_style",
                            "value": "custom",
                            "operator": "=="
                        }]
                    },
                    "infobox_text_color": {
                        "type": "colorpicker",
                        "heading": "Info Box Text Color",
                        "description": "Custom styling setting only. Pick a color for the info box text.",
                        "param_name": "infobox_text_color",
                        "value": "",
                        "dependency": [{
                            "element": "map_style",
                            "value": "custom",
                            "operator": "=="
                        }, {
                            "element": "infobox",
                            "value": "custom",
                            "operator": "=="
                        }]
                    },
                    "infobox_background_color": {
                        "type": "colorpicker",
                        "heading": "Info Box Background Color",
                        "description": "Custom styling setting only. Pick a color for the info box background.",
                        "param_name": "infobox_background_color",
                        "value": "",
                        "dependency": [{
                            "element": "map_style",
                            "value": "custom",
                            "operator": "=="
                        }, {
                            "element": "infobox",
                            "value": "custom",
                            "operator": "=="
                        }]
                    },
                    "icon": {
                        "type": "textarea",
                        "heading": "Custom Marker Icon",
                        "description": "Custom styling setting only. Use full image urls for custom marker icons or input &quot;theme&quot; for our custom marker. For multiple addresses, separate icons by using the | symbol or use one for all. ex: Icon 1|Icon 2|Icon 3.",
                        "param_name": "icon",
                        "value": "",
                        "dependency": [{
                            "element": "map_style",
                            "value": "custom",
                            "operator": "=="
                        }]
                    },
                    "hide_on_mobile": {
                        "type": "checkbox_button_set",
                        "heading": "Element Visibility",
                        "param_name": "hide_on_mobile",
                        "value": {
                            "small-visibility": "Small Screen",
                            "medium-visibility": "Medium Screen",
                            "large-visibility": "Large Screen"
                        },
                        "default": ["small-visibility", "medium-visibility", "large-visibility"],
                        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Element Options</a>."
                    },
                    "class": {
                        "type": "textfield",
                        "heading": "CSS Class",
                        "description": "Add a class to the wrapping HTML element.",
                        "param_name": "class",
                        "value": "",
                        "group": "General"
                    },
                    "id": {
                        "type": "textfield",
                        "heading": "CSS ID",
                        "description": "Add an ID to the wrapping HTML element.",
                        "param_name": "id",
                        "value": "",
                        "group": "General"
                    }
                }
            }
        },
        "remove_from_atts": ["dimensions"]
    },
    "fusion_highlight": {
        "name": "Highlight",
        "shortcode": "fusion_highlight",
        "icon": "fusiona-H",
        "generator_only": true,
        "params": {
            "groups": {
                "General": {
                    "color": {
                        "type": "colorpicker",
                        "heading": "Highlight Color",
                        "description": "Pick a highlight color.",
                        "param_name": "color",
                        "value": ""
                    },
                    "rounded": {
                        "type": "select",
                        "heading": "Highlight With Round Edges",
                        "description": "Choose to have rounded edges.",
                        "param_name": "rounded",
                        "value": {
                            "no": "No",
                            "yes": "Yes"
                        },
                        "default": "no"
                    },
                    "element_content": {
                        "type": "textarea",
                        "heading": "Content",
                        "description": "Enter some text to highlight.",
                        "param_name": "element_content",
                        "value": ""
                    },
                    "class": {
                        "type": "textfield",
                        "heading": "CSS Class",
                        "param_name": "class",
                        "value": "",
                        "description": "Add a class to the wrapping HTML element."
                    },
                    "id": {
                        "type": "textfield",
                        "heading": "CSS ID",
                        "param_name": "id",
                        "value": "",
                        "description": "Add an ID to the wrapping HTML element."
                    }
                }
            }
        },
        "remove_from_atts": []
    },
    "fusion_images": {
        "name": "Image Carousel",
        "shortcode": "fusion_images",
        "multi": "multi_element_parent",
        "element_child": "fusion_image",
        "icon": "fusiona-images",
        "preview": "C:/xamppp/htdocs/wp_avada542/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-image-carousel-preview.php",
        "preview_id": "fusion-builder-block-module-image-carousel-preview-template",
        "params": {
            "groups": {
                "General": {
                    "element_content": {
                        "type": "tinymce",
                        "heading": "Content",
                        "description": "Enter some content for this contentbox.",
                        "param_name": "element_content",
                        "value": "[fusion_image link=\"\" linktarget=\"_self\" alt=\"\" /]"
                    },
                    "multiple_upload": {
                        "type": "multiple_upload",
                        "heading": "Bulk Image Upload",
                        "description": "This option allows you to select multiple images at once and they will populate into individual items. It saves time instead of adding one image at a time.",
                        "param_name": "multiple_upload",
                        "element_target": "fusion_image",
                        "param_target": "image",
                        "remove_from_atts": true
                    },
                    "picture_size": {
                        "type": "radio_button_set",
                        "heading": "Picture Size",
                        "description": "fixed = width and height will be fixed <br />auto = width and height will adjust to the image.",
                        "param_name": "picture_size",
                        "value": {
                            "fixed": "Fixed",
                            "auto": "Auto"
                        },
                        "default": "fixed"
                    },
                    "hover_type": {
                        "type": "select",
                        "heading": "Hover Type",
                        "description": "Select the hover effect type.",
                        "param_name": "hover_type",
                        "value": {
                            "none": "None",
                            "zoomin": "Zoom In",
                            "zoomout": "Zoom Out",
                            "liftup": "Lift Up"
                        },
                        "default": "none"
                    },
                    "autoplay": {
                        "type": "radio_button_set",
                        "heading": "Autoplay",
                        "description": "Choose to autoplay the carousel.",
                        "param_name": "autoplay",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        },
                        "default": "no"
                    },
                    "columns": {
                        "type": "range",
                        "heading": "Maximum Columns",
                        "description": "Select the number of max columns to display.",
                        "param_name": "columns",
                        "value": "5",
                        "min": "1",
                        "max": "6",
                        "step": "1"
                    },
                    "column_spacing": {
                        "type": "range",
                        "heading": "Column Spacing",
                        "description": "Insert the amount of spacing between items without &quot;px&quot;. ex: 13.",
                        "param_name": "column_spacing",
                        "value": "13",
                        "min": "0",
                        "max": "300",
                        "step": "1"
                    },
                    "scroll_items": {
                        "type": "textfield",
                        "heading": "Scroll Items",
                        "description": "Insert the amount of items to scroll. Leave empty to scroll number of visible items.",
                        "param_name": "scroll_items",
                        "value": ""
                    },
                    "show_nav": {
                        "type": "radio_button_set",
                        "heading": "Show Navigation",
                        "description": "Choose to show navigation buttons on the carousel.",
                        "param_name": "show_nav",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        },
                        "default": "yes"
                    },
                    "mouse_scroll": {
                        "type": "radio_button_set",
                        "heading": "Mouse Scroll",
                        "description": "Choose to enable mouse drag control on the carousel. IMPORTANT: For easy draggability, when mouse scroll is activated, links will be disabled.",
                        "param_name": "mouse_scroll",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        },
                        "default": "no"
                    },
                    "border": {
                        "type": "radio_button_set",
                        "heading": "Border",
                        "description": "Choose to enable a border around the images.",
                        "param_name": "border",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        },
                        "default": "yes"
                    },
                    "lightbox": {
                        "type": "radio_button_set",
                        "heading": "Image lightbox",
                        "description": "Show image in lightbox. Lightbox must be enabled in Theme Options or the image will open up in the same tab by itself.  Current value set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#status_lightbox\" target=\"_blank\" rel=\"noopener noreferrer\">Yes</a>.",
                        "param_name": "lightbox",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        },
                        "default": "no"
                    },
                    "hide_on_mobile": {
                        "type": "checkbox_button_set",
                        "heading": "Element Visibility",
                        "param_name": "hide_on_mobile",
                        "value": {
                            "small-visibility": "Small Screen",
                            "medium-visibility": "Medium Screen",
                            "large-visibility": "Large Screen"
                        },
                        "default": ["small-visibility", "medium-visibility", "large-visibility"],
                        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Element Options</a>."
                    },
                    "class": {
                        "type": "textfield",
                        "heading": "CSS Class",
                        "description": "Add a class to the wrapping HTML element.",
                        "param_name": "class",
                        "value": "",
                        "group": "General"
                    },
                    "id": {
                        "type": "textfield",
                        "heading": "CSS ID",
                        "description": "Add an ID to the wrapping HTML element.",
                        "param_name": "id",
                        "value": "",
                        "group": "General"
                    }
                }
            }
        },
        "remove_from_atts": ["multiple_upload"]
    },
    "fusion_image": {
        "name": "Image",
        "description": "Enter some content for this textblock.",
        "shortcode": "fusion_image",
        "hide_from_builder": true,
        "params": {
            "groups": {
                "General": {
                    "image": {
                        "type": "upload",
                        "heading": "Image",
                        "description": "Upload an image to display.",
                        "param_name": "image",
                        "value": ""
                    },
                    "image_id": {
                        "type": "textfield",
                        "heading": "Image ID",
                        "description": "Image ID from Media Library.",
                        "param_name": "image_id",
                        "value": "",
                        "hidden": true
                    },
                    "link": {
                        "type": "link_selector",
                        "heading": "Image Website Link",
                        "description": "Add the url to image&#039;s website. If lightbox option is enabled, you have to add the full image link to show it in the lightbox.",
                        "param_name": "link",
                        "value": ""
                    },
                    "linktarget": {
                        "type": "radio_button_set",
                        "heading": "Link Target",
                        "description": "_self = open in same window <br />_blank = open in new window.",
                        "param_name": "linktarget",
                        "value": {
                            "_self": "_self",
                            "_blank": "_blank"
                        },
                        "default": "_self"
                    },
                    "alt": {
                        "type": "textfield",
                        "heading": "Image Alt Text",
                        "description": "The alt attribute provides alternative information if an image cannot be viewed.",
                        "param_name": "alt",
                        "value": ""
                    }
                }
            }
        },
        "remove_from_atts": []
    },
    "fusion_imageframe": {
        "name": "Image",
        "shortcode": "fusion_imageframe",
        "icon": "fusiona-image",
        "preview": "C:/xamppp/htdocs/wp_avada542/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-image-frame-preview.php",
        "preview_id": "fusion-builder-block-module-image-frame-preview-template",
        "params": {
            "groups": {
                "General": {
                    "element_content": {
                        "type": "upload",
                        "heading": "Image",
                        "description": "Upload an image to display.",
                        "param_name": "element_content",
                        "value": ""
                    },
                    "image_id": {
                        "type": "textfield",
                        "heading": "Image ID",
                        "description": "Image ID from Media Library.",
                        "param_name": "image_id",
                        "value": "",
                        "hidden": true
                    },
                    "style_type": {
                        "type": "radio_button_set",
                        "heading": "Style Type",
                        "description": "Select the style type.",
                        "param_name": "style_type",
                        "value": {
                            "none": "None",
                            "glow": "Glow",
                            "dropshadow": "Drop Shadow",
                            "bottomshadow": "Bottom Shadow"
                        },
                        "default": "none"
                    },
                    "stylecolor": {
                        "type": "colorpickeralpha",
                        "heading": "Style Color",
                        "description": "For all style types except border. Controls the style color.   Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#imgframe_style_color\" target=\"_blank\" rel=\"noopener noreferrer\">#000000</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-stylecolor\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"stylecolor\" value=\"\" data-default=\"#000000\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "stylecolor",
                        "value": "",
                        "default": "#000000",
                        "dependency": [{
                            "element": "style_type",
                            "value": "none",
                            "operator": "!="
                        }]
                    },
                    "hover_type": {
                        "type": "radio_button_set",
                        "heading": "Hover Type",
                        "description": "Select the hover effect type.",
                        "param_name": "hover_type",
                        "value": {
                            "none": "None",
                            "zoomin": "Zoom In",
                            "zoomout": "Zoom Out",
                            "liftup": "Lift Up"
                        },
                        "default": "none"
                    },
                    "bordersize": {
                        "type": "range",
                        "heading": "Border Size",
                        "description": "In pixels.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#imageframe_border_size\" target=\"_blank\" rel=\"noopener noreferrer\">0</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-bordersize\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"bordersize\" value=\"\" data-default=\"0\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "bordersize",
                        "value": "",
                        "min": "0",
                        "max": "50",
                        "step": "1",
                        "default": "0"
                    },
                    "bordercolor": {
                        "type": "colorpickeralpha",
                        "heading": "Border Color",
                        "description": "Controls the border color.   Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#imgframe_border_color\" target=\"_blank\" rel=\"noopener noreferrer\">#f6f6f6</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-bordercolor\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"bordercolor\" value=\"\" data-default=\"#f6f6f6\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "bordercolor",
                        "value": "",
                        "default": "#f6f6f6",
                        "dependency": [{
                            "element": "bordersize",
                            "value": "0",
                            "operator": "!="
                        }, {
                            "element": "bordersize",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "borderradius": {
                        "type": "textfield",
                        "heading": "Border Radius",
                        "description": "Controls the image border radius. In pixels (px), ex: 1px, or &quot;round&quot;.   Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#imageframe_border_radius\" target=\"_blank\" rel=\"noopener noreferrer\">0px</a>.",
                        "param_name": "borderradius",
                        "value": "",
                        "dependency": [{
                            "element": "style_type",
                            "value": "bottomshadow",
                            "operator": "!="
                        }]
                    },
                    "align": {
                        "type": "radio_button_set",
                        "heading": "Align",
                        "description": "Choose how to align the image.",
                        "param_name": "align",
                        "value": {
                            "none": "Text Flow",
                            "left": "Left",
                            "right": "Right",
                            "center": "Center"
                        },
                        "default": "none"
                    },
                    "lightbox": {
                        "type": "radio_button_set",
                        "heading": "Image lightbox",
                        "description": "Show image in lightbox. Lightbox must be enabled in Theme Options or the image will open up in the same tab by itself.  Current value set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#status_lightbox\" target=\"_blank\" rel=\"noopener noreferrer\">Yes</a>.",
                        "param_name": "lightbox",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        },
                        "default": "no"
                    },
                    "gallery_id": {
                        "type": "textfield",
                        "heading": "Gallery ID",
                        "description": "Set a name for the lightbox gallery this image should belong to.",
                        "param_name": "gallery_id",
                        "value": "",
                        "dependency": [{
                            "element": "lightbox",
                            "value": "no",
                            "operator": "!="
                        }]
                    },
                    "lightbox_image": {
                        "type": "upload",
                        "heading": "Lightbox Image",
                        "description": "Upload an image that will show up in the lightbox.",
                        "param_name": "lightbox_image",
                        "value": "",
                        "dependency": [{
                            "element": "lightbox",
                            "value": "no",
                            "operator": "!="
                        }]
                    },
                    "alt": {
                        "type": "textfield",
                        "heading": "Image Alt Text",
                        "description": "The alt attribute provides alternative information if an image cannot be viewed.",
                        "param_name": "alt",
                        "value": ""
                    },
                    "link": {
                        "type": "link_selector",
                        "heading": "Picture Link URL",
                        "description": "Add the URL the picture will link to, ex: http://example.com.",
                        "param_name": "link",
                        "value": "",
                        "dependency": [{
                            "element": "lightbox",
                            "value": "yes",
                            "operator": "!="
                        }]
                    },
                    "linktarget": {
                        "type": "radio_button_set",
                        "heading": "Link Target",
                        "description": "_self = open in same window<br />_blank = open in new window.",
                        "param_name": "linktarget",
                        "value": {
                            "_self": "_self",
                            "_blank": "_blank"
                        },
                        "default": "_self",
                        "dependency": [{
                            "element": "lightbox",
                            "value": "yes",
                            "operator": "!="
                        }, {
                            "element": "link",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "hide_on_mobile": {
                        "type": "checkbox_button_set",
                        "heading": "Element Visibility",
                        "param_name": "hide_on_mobile",
                        "value": {
                            "small-visibility": "Small Screen",
                            "medium-visibility": "Medium Screen",
                            "large-visibility": "Large Screen"
                        },
                        "default": ["small-visibility", "medium-visibility", "large-visibility"],
                        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Element Options</a>."
                    },
                    "class": {
                        "type": "textfield",
                        "heading": "CSS Class",
                        "description": "Add a class to the wrapping HTML element.",
                        "param_name": "class",
                        "value": "",
                        "group": "General"
                    },
                    "id": {
                        "type": "textfield",
                        "heading": "CSS ID",
                        "description": "Add an ID to the wrapping HTML element.",
                        "param_name": "id",
                        "value": "",
                        "group": "General"
                    }
                },
                "Animation": {
                    "animation_type": {
                        "type": "select",
                        "heading": "Animation Type",
                        "description": "Select the type of animation to use on the element.",
                        "param_name": "animation_type",
                        "value": {
                            "": "None",
                            "bounce": "Bounce",
                            "fade": "Fade",
                            "flash": "Flash",
                            "rubberBand": "Rubberband",
                            "shake": "Shake",
                            "slide": "Slide",
                            "zoom": "Zoom"
                        },
                        "default": "",
                        "group": "Animation"
                    },
                    "animation_direction": {
                        "type": "radio_button_set",
                        "heading": "Direction of Animation",
                        "description": "Select the incoming direction for the animation.",
                        "param_name": "animation_direction",
                        "value": {
                            "down": "Top",
                            "right": "Right",
                            "up": "Bottom",
                            "left": "Left",
                            "static": "Static"
                        },
                        "default": "left",
                        "group": "Animation",
                        "dependency": [{
                            "element": "animation_type",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "animation_speed": {
                        "type": "range",
                        "heading": "Speed of Animation",
                        "description": "Type in speed of animation in seconds (0.1 - 1).",
                        "param_name": "animation_speed",
                        "min": "0.1",
                        "max": "1",
                        "step": "0.1",
                        "value": "0.3",
                        "group": "Animation",
                        "dependency": [{
                            "element": "animation_type",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "animation_offset": {
                        "type": "select",
                        "heading": "Offset of Animation",
                        "description": "Controls when the animation should start.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#animation_offset\" target=\"_blank\" rel=\"noopener noreferrer\">Top Of Element Hits Bottom Of Viewport</a>.",
                        "param_name": "animation_offset",
                        "value": {
                            "": "Default",
                            "top-into-view": "Top of element hits bottom of viewport",
                            "top-mid-of-view": "Top of element hits middle of viewport",
                            "bottom-in-view": "Bottom of element enters viewport"
                        },
                        "default": "",
                        "group": "Animation",
                        "dependency": [{
                            "element": "animation_type",
                            "value": "",
                            "operator": "!="
                        }]
                    }
                }
            }
        },
        "remove_from_atts": []
    },
    "fusion_lightbox": {
        "name": "Lightbox",
        "shortcode": "fusion_lightbox",
        "icon": "fusiona-uniF602",
        "on_save": "lightboxShortcodeFilter",
        "admin_enqueue_js": "http://127.0.0.1/wp_avada542/wp-content/plugins/fusion-builder/shortcodes/js/fusion-lightbox.js",
        "params": {
            "groups": {
                "General": {
                    "type": {
                        "type": "radio_button_set",
                        "heading": "Content Type",
                        "description": "Select what you want to display in the lightbox.",
                        "param_name": "type",
                        "defaults": "",
                        "value": {
                            "": "Image",
                            "video": "Video"
                        }
                    },
                    "full_image": {
                        "type": "upload",
                        "heading": "Full Image",
                        "description": "Upload an image that will show up in the lightbox.",
                        "param_name": "full_image",
                        "value": "",
                        "dependency": [{
                            "element": "type",
                            "value": "",
                            "operator": "=="
                        }]
                    },
                    "video_url": {
                        "type": "textfield",
                        "heading": "YouTube or Vimeo Video url",
                        "description": "Enter the full video url that will show up in the lightbox.",
                        "param_name": "video_url",
                        "value": "",
                        "dependency": [{
                            "element": "type",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "thumbnail_image": {
                        "type": "upload",
                        "heading": "Thumbnail Image",
                        "description": "Clicking this image will show lightbox.",
                        "param_name": "thumbnail_image",
                        "value": ""
                    },
                    "alt_text": {
                        "type": "textfield",
                        "heading": "Alt Text",
                        "param_name": "alt_text",
                        "value": "",
                        "description": "The alt attribute provides alternative information if an image cannot be viewed."
                    },
                    "description": {
                        "type": "textfield",
                        "heading": "Lightbox Description",
                        "param_name": "description",
                        "value": "",
                        "description": "This will show up in the lightbox as a description below the image."
                    },
                    "class": {
                        "type": "textfield",
                        "heading": "CSS Class",
                        "param_name": "class",
                        "value": "",
                        "description": "Add a class to the wrapping HTML element."
                    },
                    "id": {
                        "type": "textfield",
                        "heading": "CSS ID",
                        "param_name": "id",
                        "value": "",
                        "description": "Add an ID to the wrapping HTML element."
                    }
                }
            }
        },
        "remove_from_atts": []
    },
    "fusion_menu_anchor": {
        "name": "Menu Anchor",
        "shortcode": "fusion_menu_anchor",
        "icon": "fusiona-anchor",
        "preview": "C:/xamppp/htdocs/wp_avada542/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-menu-anchor-preview.php",
        "preview_id": "fusion-builder-block-module-menu-anchor-preview-template",
        "params": {
            "groups": {
                "General": {
                    "name": {
                        "type": "textfield",
                        "heading": "Name",
                        "param_name": "name",
                        "value": "",
                        "description": "This name will be the id you will have to use in your one page menu."
                    },
                    "class": {
                        "type": "textfield",
                        "heading": "CSS Class",
                        "param_name": "class",
                        "value": "",
                        "description": "Add a class to the wrapping HTML element."
                    }
                }
            }
        },
        "remove_from_atts": []
    },
    "fusion_modal": {
        "name": "Modal",
        "shortcode": "fusion_modal",
        "icon": "fusiona-external-link",
        "preview": "C:/xamppp/htdocs/wp_avada542/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-modal-preview.php",
        "preview_id": "fusion-builder-block-module-modal-preview-template",
        "allow_generator": true,
        "params": {
            "groups": {
                "General": {
                    "name": {
                        "type": "textfield",
                        "heading": "Name Of Modal",
                        "description": "Needs to be a unique identifier (lowercase), used for button or modal_text_link element to open the modal. ex: mymodal.",
                        "param_name": "name",
                        "value": ""
                    },
                    "title": {
                        "type": "textfield",
                        "heading": "Modal Heading",
                        "description": "Heading text for the modal.",
                        "param_name": "title",
                        "value": "Your Content Goes Here",
                        "placeholder": true
                    },
                    "size": {
                        "type": "radio_button_set",
                        "heading": "Size Of Modal",
                        "description": "Select the modal window size.",
                        "param_name": "size",
                        "value": {
                            "small": "Small",
                            "large": "Large"
                        },
                        "default": "small"
                    },
                    "background": {
                        "type": "colorpickeralpha",
                        "heading": "Background Color",
                        "description": "Controls the modal background color.   Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#modal_bg_color\" target=\"_blank\" rel=\"noopener noreferrer\">#f6f6f6</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-background\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"background\" value=\"\" data-default=\"#f6f6f6\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "background",
                        "value": "",
                        "default": "#f6f6f6"
                    },
                    "border_color": {
                        "type": "colorpickeralpha",
                        "heading": "Border Color",
                        "description": "Controls the modal border color.   Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#modal_border_color\" target=\"_blank\" rel=\"noopener noreferrer\">#ebebeb</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-border_color\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"border_color\" value=\"\" data-default=\"#ebebeb\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "border_color",
                        "value": "",
                        "default": "#ebebeb"
                    },
                    "show_footer": {
                        "type": "radio_button_set",
                        "heading": "Show Footer",
                        "description": "Choose to show the modal footer with close button.",
                        "param_name": "show_footer",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        },
                        "default": "yes"
                    },
                    "element_content": {
                        "type": "tinymce",
                        "heading": "Contents of Modal",
                        "description": "Add your content to be displayed in modal.",
                        "param_name": "element_content",
                        "value": "Your Content Goes Here",
                        "placeholder": true
                    },
                    "class": {
                        "type": "textfield",
                        "heading": "CSS Class",
                        "description": "Add a class to the wrapping HTML element.",
                        "param_name": "class",
                        "value": "",
                        "group": "General"
                    },
                    "id": {
                        "type": "textfield",
                        "heading": "CSS ID",
                        "description": "Add an ID to the wrapping HTML element.",
                        "param_name": "id",
                        "value": "",
                        "group": "General"
                    }
                }
            }
        },
        "remove_from_atts": []
    },
    "fusion_modal_text_link": {
        "name": "Modal Text Link",
        "shortcode": "fusion_modal_text_link",
        "icon": "fusiona-external-link",
        "params": {
            "groups": {
                "General": {
                    "name": {
                        "type": "textfield",
                        "heading": "Name Of Modal",
                        "description": "Unique identifier of the modal to open on click.",
                        "param_name": "name",
                        "value": ""
                    },
                    "element_content": {
                        "type": "textarea",
                        "heading": "Text or HTML code",
                        "description": "Insert text or HTML code here (e.g: HTML for image). This content will be used to trigger the modal popup.",
                        "param_name": "element_content",
                        "value": ""
                    },
                    "class": {
                        "type": "textfield",
                        "heading": "CSS Class",
                        "param_name": "class",
                        "value": "",
                        "description": "Add a class to the wrapping HTML element."
                    },
                    "id": {
                        "type": "textfield",
                        "heading": "CSS ID",
                        "param_name": "id",
                        "value": "",
                        "description": "Add an ID to the wrapping HTML element."
                    }
                }
            }
        },
        "remove_from_atts": []
    },
    "fusion_builder_next_page": {
        "name": "Next Page",
        "shortcode": "fusion_builder_next_page",
        "hide_from_builder": true,
        "params": {
            "groups": {
                "General": {
                    "next_page_content": {
                        "type": "textfield",
                        "heading": "",
                        "description": "",
                        "param_name": "next_page_content",
                        "value": ""
                    }
                }
            }
        },
        "remove_from_atts": []
    },
    "fusion_one_page_text_link": {
        "name": "One Page Text Link",
        "shortcode": "fusion_one_page_text_link",
        "generator_only": true,
        "icon": "fusiona-external-link",
        "params": {
            "groups": {
                "General": {
                    "link": {
                        "type": "textfield",
                        "heading": "Name Of Anchor",
                        "description": "Unique identifier of the anchor to scroll to on click.",
                        "param_name": "link",
                        "value": ""
                    },
                    "element_content": {
                        "type": "textarea",
                        "heading": "Text or HTML code",
                        "description": "Insert text or HTML code here (e.g: HTML for image). This content will be used to trigger the scrolling to the anchor.",
                        "param_name": "element_content",
                        "value": ""
                    },
                    "class": {
                        "type": "textfield",
                        "heading": "CSS Class",
                        "param_name": "class",
                        "value": "",
                        "description": "Add a class to the wrapping HTML element."
                    },
                    "id": {
                        "type": "textfield",
                        "heading": "CSS ID",
                        "param_name": "id",
                        "value": "",
                        "description": "Add an ID to the wrapping HTML element."
                    }
                }
            }
        },
        "remove_from_atts": []
    },
    "fusion_person": {
        "name": "Person",
        "shortcode": "fusion_person",
        "icon": "fusiona-user",
        "preview": "C:/xamppp/htdocs/wp_avada542/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-person-preview.php",
        "preview_id": "fusion-builder-block-module-person-preview-template",
        "params": {
            "groups": {
                "General": {
                    "name": {
                        "type": "textfield",
                        "heading": "Name",
                        "description": "Insert the name of the person.",
                        "param_name": "name",
                        "value": "Your Content Goes Here",
                        "placeholder": true
                    },
                    "title": {
                        "type": "textfield",
                        "heading": "Title",
                        "description": "Insert the title of the person",
                        "param_name": "title",
                        "value": "Your Content Goes Here",
                        "placeholder": true
                    },
                    "element_content": {
                        "type": "textarea",
                        "heading": "Profile Description",
                        "description": "Enter the content to be displayed",
                        "param_name": "element_content",
                        "value": "Your Content Goes Here",
                        "placeholder": true
                    },
                    "picture": {
                        "type": "upload",
                        "heading": "Picture",
                        "description": "Upload an image to display.",
                        "param_name": "picture",
                        "value": ""
                    },
                    "pic_link": {
                        "type": "link_selector",
                        "heading": "Picture Link URL",
                        "description": "Add the URL the picture will link to, ex: http://example.com.",
                        "param_name": "pic_link",
                        "value": "",
                        "dependency": [{
                            "element": "picture",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "linktarget": {
                        "type": "radio_button_set",
                        "heading": "Link Target",
                        "description": "_self = open in same window <br />_blank = open in new window",
                        "param_name": "linktarget",
                        "value": {
                            "_self": "_self",
                            "_blank": "_blank"
                        },
                        "default": "_self",
                        "dependency": [{
                            "element": "picture",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "pic_style": {
                        "type": "radio_button_set",
                        "heading": "Picture Style Type",
                        "description": "Selected the style type for the picture.",
                        "param_name": "pic_style",
                        "value": {
                            "none": "None",
                            "glow": "Glow",
                            "dropshadow": "Drop Shadow",
                            "bottomshadow": "Bottom Shadow"
                        },
                        "default": "none",
                        "dependency": [{
                            "element": "picture",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "hover_type": {
                        "type": "radio_button_set",
                        "heading": "Hover Type",
                        "description": "Select the hover effect type.",
                        "param_name": "hover_type",
                        "value": {
                            "none": "None",
                            "zoomin": "Zoom In",
                            "zoomout": "Zoom Out",
                            "liftup": "Lift Up"
                        },
                        "default": "none",
                        "dependency": [{
                            "element": "picture",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "background_color": {
                        "type": "colorpickeralpha",
                        "heading": "Background Color",
                        "description": "Controls the background color. Leave blank for theme option selection  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#person_background_color\" target=\"_blank\" rel=\"noopener noreferrer\">rgba(0,0,0,0)</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-background_color\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"background_color\" value=\"\" data-default=\"rgba(0,0,0,0)\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "background_color",
                        "value": "",
                        "default": "rgba(0,0,0,0)"
                    },
                    "content_alignment": {
                        "type": "radio_button_set",
                        "heading": "Content Alignment",
                        "description": "Choose the alignment of content. Choose default for theme option selection.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#person_alignment\" target=\"_blank\" rel=\"noopener noreferrer\">Left</a>.",
                        "param_name": "content_alignment",
                        "value": {
                            "": "Default",
                            "left": "Left",
                            "center": "Center",
                            "right": "Right"
                        },
                        "default": ""
                    },
                    "pic_style_color": {
                        "type": "colorpickeralpha",
                        "heading": "Picture Style Color",
                        "description": "For all style types except border. Controls the style color.   Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#person_style_color\" target=\"_blank\" rel=\"noopener noreferrer\">#000000</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-pic_style_color\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"pic_style_color\" value=\"\" data-default=\"#000000\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "pic_style_color",
                        "value": "",
                        "default": "#000000",
                        "dependency": [{
                            "element": "picture",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "pic_bordersize": {
                        "type": "range",
                        "heading": "Picture Border Size",
                        "description": "In pixels.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#person_border_size\" target=\"_blank\" rel=\"noopener noreferrer\">0</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-pic_bordersize\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"pic_bordersize\" value=\"\" data-default=\"0\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "pic_bordersize",
                        "value": "",
                        "min": "0",
                        "max": "50",
                        "step": "1",
                        "default": "0",
                        "dependency": [{
                            "element": "picture",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "pic_bordercolor": {
                        "type": "colorpickeralpha",
                        "heading": "Picture Border Color",
                        "description": "Controls the picture&#039;s border color.   Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#person_border_color\" target=\"_blank\" rel=\"noopener noreferrer\">#f6f6f6</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-pic_bordercolor\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"pic_bordercolor\" value=\"\" data-default=\"#f6f6f6\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "pic_bordercolor",
                        "value": "",
                        "default": "#f6f6f6",
                        "dependency": [{
                            "element": "picture",
                            "value": "",
                            "operator": "!="
                        }, {
                            "element": "pic_bordersize",
                            "value": "0",
                            "operator": "!="
                        }]
                    },
                    "pic_borderradius": {
                        "type": "textfield",
                        "heading": "Picture Border Radius",
                        "description": "Choose the border radius of the person image. In pixels (px), ex: 1px, or &quot;round&quot;.   Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#person_border_radius\" target=\"_blank\" rel=\"noopener noreferrer\">0px</a>.",
                        "param_name": "pic_borderradius",
                        "value": "",
                        "dependency": [{
                            "element": "picture",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "icon_position": {
                        "type": "radio_button_set",
                        "heading": "Social Icons Position",
                        "description": "Choose the social icon position. Choose default for theme option selection.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#person_icon_position\" target=\"_blank\" rel=\"noopener noreferrer\">Top</a>.",
                        "param_name": "icon_position",
                        "value": {
                            "": "Default",
                            "top": "Top",
                            "bottom": "Bottom"
                        },
                        "default": ""
                    },
                    "social_icon_boxed": {
                        "type": "radio_button_set",
                        "heading": "Boxed Social Icons",
                        "description": "Choose to get a boxed icons. Choose default for theme option selection.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#social_links_boxed\" target=\"_blank\" rel=\"noopener noreferrer\">No</a>.",
                        "param_name": "social_icon_boxed",
                        "value": {
                            "": "Default",
                            "yes": "Yes",
                            "no": "No"
                        },
                        "default": ""
                    },
                    "social_icon_boxed_radius": {
                        "type": "textfield",
                        "heading": "Social Icon Box Radius",
                        "description": "Choose the border radius of the boxed icons. In pixels (px), ex: 1px, or &quot;round&quot;.   Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#social_links_boxed_radius\" target=\"_blank\" rel=\"noopener noreferrer\">4px</a>.",
                        "param_name": "social_icon_boxed_radius",
                        "value": "",
                        "dependency": [{
                            "element": "social_icon_boxed",
                            "value": "no",
                            "operator": "!="
                        }, {
                            "element": "social_icon_boxed",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "social_icon_color_type": {
                        "type": "radio_button_set",
                        "heading": "Social Icon Color Type",
                        "description": "Controls the color type of the social icons. Choose default for theme option selection.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#social_links_color_type\" target=\"_blank\" rel=\"noopener noreferrer\">Custom Colors</a>.",
                        "param_name": "social_icon_color_type",
                        "value": {
                            "": "Default",
                            "custom": "Custom Colors",
                            "brand": "Brand Colors"
                        },
                        "default": ""
                    },
                    "social_icon_colors": {
                        "type": "textarea",
                        "heading": "Social Icon Custom Colors",
                        "description": "Specify the color of social icons. Use one for all or separate by | symbol. ex: #AA0000|#00AA00|#0000AA.   Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#social_links_icon_color\" target=\"_blank\" rel=\"noopener noreferrer\">#bebdbd</a>.",
                        "param_name": "social_icon_colors",
                        "value": "",
                        "dependency": [{
                            "element": "social_icon_color_type",
                            "value": "brand",
                            "operator": "!="
                        }]
                    },
                    "social_icon_boxed_colors": {
                        "type": "textarea",
                        "heading": "Social Icon Custom Box Colors",
                        "description": "Specify the box color of social icons. Use one for all or separate by | symbol. ex: #AA0000|#00AA00|#0000AA.   Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#social_links_box_color\" target=\"_blank\" rel=\"noopener noreferrer\">#e8e8e8</a>.",
                        "param_name": "social_icon_boxed_colors",
                        "value": "",
                        "dependency": [{
                            "element": "social_icon_boxed",
                            "value": "no",
                            "operator": "!="
                        }, {
                            "element": "social_icon_color_type",
                            "value": "brand",
                            "operator": "!="
                        }, {
                            "element": "social_icon_boxed",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "social_icon_tooltip": {
                        "type": "radio_button_set",
                        "heading": "Social Icon Tooltip Position",
                        "description": "Choose the display position for tooltips. Choose default for theme option selection.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#social_links_tooltip_placement\" target=\"_blank\" rel=\"noopener noreferrer\">Top</a>.",
                        "param_name": "social_icon_tooltip",
                        "value": {
                            "": "Default",
                            "top": "Top",
                            "bottom": "Bottom",
                            "left": "Left",
                            "Right": "Right",
                            "none": "None"
                        },
                        "default": ""
                    },
                    "blogger": {
                        "type": "textfield",
                        "heading": "Blogger Link",
                        "description": "Insert your custom Blogger link.",
                        "param_name": "blogger",
                        "value": ""
                    },
                    "deviantart": {
                        "type": "textfield",
                        "heading": "Deviantart Link",
                        "description": "Insert your custom Deviantart link.",
                        "param_name": "deviantart",
                        "value": ""
                    },
                    "digg": {
                        "type": "textfield",
                        "heading": "Digg Link",
                        "description": "Insert your custom Digg link.",
                        "param_name": "digg",
                        "value": ""
                    },
                    "dribbble": {
                        "type": "textfield",
                        "heading": "Dribbble Link",
                        "description": "Insert your custom Dribbble link.",
                        "param_name": "dribbble",
                        "value": ""
                    },
                    "dropbox": {
                        "type": "textfield",
                        "heading": "Dropbox Link",
                        "description": "Insert your custom Dropbox link.",
                        "param_name": "dropbox",
                        "value": ""
                    },
                    "facebook": {
                        "type": "textfield",
                        "heading": "Facebook Link",
                        "description": "Insert your custom Facebook link.",
                        "param_name": "facebook",
                        "value": ""
                    },
                    "flickr": {
                        "type": "textfield",
                        "heading": "Flickr Link",
                        "description": "Insert your custom Flickr link.",
                        "param_name": "flickr",
                        "value": ""
                    },
                    "forrst": {
                        "type": "textfield",
                        "heading": "Forrst Link",
                        "description": "Insert your custom Forrst link.",
                        "param_name": "forrst",
                        "value": ""
                    },
                    "googleplus": {
                        "type": "textfield",
                        "heading": "Google+ Link",
                        "description": "Insert your custom Google+ link.",
                        "param_name": "googleplus",
                        "value": ""
                    },
                    "instagram": {
                        "type": "textfield",
                        "heading": "Instagram Link",
                        "description": "Insert your custom Instagram link.",
                        "param_name": "instagram",
                        "value": ""
                    },
                    "linkedin": {
                        "type": "textfield",
                        "heading": "LinkedIn Link",
                        "description": "Insert your custom LinkedIn link.",
                        "param_name": "linkedin",
                        "value": ""
                    },
                    "myspace": {
                        "type": "textfield",
                        "heading": "Myspace Link",
                        "description": "Insert your custom Myspace link.",
                        "param_name": "myspace",
                        "value": ""
                    },
                    "paypal": {
                        "type": "textfield",
                        "heading": "PayPal Link",
                        "description": "Insert your custom PayPal link.",
                        "param_name": "paypal",
                        "value": ""
                    },
                    "pinterest": {
                        "type": "textfield",
                        "heading": "Pinterest Link",
                        "description": "Insert your custom Pinterest link.",
                        "param_name": "pinterest",
                        "value": ""
                    },
                    "reddit": {
                        "type": "textfield",
                        "heading": "Reddit Link",
                        "description": "Insert your custom Reddit link.",
                        "param_name": "reddit",
                        "value": ""
                    },
                    "rss": {
                        "type": "textfield",
                        "heading": "RSS Link",
                        "description": "Insert your custom RSS link.",
                        "param_name": "rss",
                        "value": ""
                    },
                    "skype": {
                        "type": "textfield",
                        "heading": "Skype Link",
                        "description": "Insert your custom Skype link.",
                        "param_name": "skype",
                        "value": ""
                    },
                    "soundcloud": {
                        "type": "textfield",
                        "heading": "SoundCloud Link",
                        "description": "Insert your custom SoundCloud link.",
                        "param_name": "soundcloud",
                        "value": ""
                    },
                    "spotify": {
                        "type": "textfield",
                        "heading": "Spotify Link",
                        "description": "Insert your custom Spotify link.",
                        "param_name": "spotify",
                        "value": ""
                    },
                    "tumblr": {
                        "type": "textfield",
                        "heading": "Tumblr Link",
                        "description": "Insert your custom Tumblr link.",
                        "param_name": "tumblr",
                        "value": ""
                    },
                    "twitter": {
                        "type": "textfield",
                        "heading": "Twitter Link",
                        "description": "Insert your custom Twitter link.",
                        "param_name": "twitter",
                        "value": ""
                    },
                    "vimeo": {
                        "type": "textfield",
                        "heading": "Vimeo Link",
                        "description": "Insert your custom Vimeo link.",
                        "param_name": "vimeo",
                        "value": ""
                    },
                    "vk": {
                        "type": "textfield",
                        "heading": "VK Link",
                        "description": "Insert your custom VK link.",
                        "param_name": "vk",
                        "value": ""
                    },
                    "xing": {
                        "type": "textfield",
                        "heading": "Xing Link",
                        "description": "Insert your custom Xing link.",
                        "param_name": "xing",
                        "value": ""
                    },
                    "yahoo": {
                        "type": "textfield",
                        "heading": "Yahoo Link",
                        "description": "Insert your custom Yahoo link.",
                        "param_name": "yahoo",
                        "value": ""
                    },
                    "yelp": {
                        "type": "textfield",
                        "heading": "Yelp Link",
                        "description": "Insert your custom Yelp link.",
                        "param_name": "yelp",
                        "value": ""
                    },
                    "youtube": {
                        "type": "textfield",
                        "heading": "Youtube Link",
                        "description": "Insert your custom Youtube link.",
                        "param_name": "youtube",
                        "value": ""
                    },
                    "email": {
                        "type": "textfield",
                        "heading": "Email Address",
                        "description": "Insert an email address to display the email icon.",
                        "param_name": "email",
                        "value": ""
                    },
                    "show_custom": {
                        "type": "radio_button_set",
                        "heading": "Show Custom Social Icons",
                        "description": "Show the custom social icons specified in Theme Options.",
                        "param_name": "show_custom",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        },
                        "default": "no"
                    },
                    "hide_on_mobile": {
                        "type": "checkbox_button_set",
                        "heading": "Element Visibility",
                        "param_name": "hide_on_mobile",
                        "value": {
                            "small-visibility": "Small Screen",
                            "medium-visibility": "Medium Screen",
                            "large-visibility": "Large Screen"
                        },
                        "default": ["small-visibility", "medium-visibility", "large-visibility"],
                        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Element Options</a>."
                    },
                    "class": {
                        "type": "textfield",
                        "heading": "CSS Class",
                        "param_name": "class",
                        "value": "",
                        "description": "Add a class to the wrapping HTML element."
                    },
                    "id": {
                        "type": "textfield",
                        "heading": "CSS ID",
                        "param_name": "id",
                        "value": "",
                        "description": "Add an ID to the wrapping HTML element."
                    }
                }
            }
        },
        "remove_from_atts": []
    },
    "fusion_popover": {
        "name": "Popover",
        "shortcode": "fusion_popover",
        "generator_only": true,
        "icon": "fusiona-uniF61C",
        "params": {
            "groups": {
                "General": {
                    "element_content": {
                        "type": "tinymce",
                        "heading": "Triggering Content",
                        "param_name": "element_content",
                        "value": "",
                        "description": "Content that will trigger the popover."
                    },
                    "title": {
                        "type": "textfield",
                        "heading": "Popover Heading",
                        "description": "Heading text of the popover.",
                        "param_name": "title",
                        "value": ""
                    },
                    "content": {
                        "type": "textarea",
                        "heading": "Contents Inside Popover",
                        "description": "Text to be displayed inside the popover.",
                        "param_name": "content",
                        "value": ""
                    },
                    "trigger": {
                        "type": "radio_button_set",
                        "heading": "Popover Trigger Method",
                        "description": "Choose mouse action to trigger popover.",
                        "param_name": "trigger",
                        "value": {
                            "hover": "Hover",
                            "click": "Click"
                        },
                        "default": "click"
                    },
                    "placement": {
                        "type": "radio_button_set",
                        "heading": "Popover Position",
                        "description": "Choose the display position of the popover. Choose default for theme option selection.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#popover_placement\" target=\"_blank\" rel=\"noopener noreferrer\">Top</a>.",
                        "param_name": "placement",
                        "value": {
                            "default": "Default",
                            "top": "Top",
                            "bottom": "Bottom",
                            "left": "Left",
                            "right": "Right"
                        },
                        "default": "default"
                    },
                    "class": {
                        "type": "textfield",
                        "heading": "CSS Class",
                        "param_name": "class",
                        "value": "",
                        "description": "Add a class to the wrapping HTML element."
                    },
                    "id": {
                        "type": "textfield",
                        "heading": "CSS ID",
                        "param_name": "id",
                        "value": "",
                        "description": "Add an ID to the wrapping HTML element."
                    }
                },
                "Design": {
                    "title_bg_color": {
                        "type": "colorpickeralpha",
                        "heading": "Popover Heading Background Color",
                        "description": "Controls the background color of the popover heading.   Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#popover_heading_bg_color\" target=\"_blank\" rel=\"noopener noreferrer\">#f6f6f6</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-title_bg_color\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"title_bg_color\" value=\"\" data-default=\"#f6f6f6\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "title_bg_color",
                        "value": "",
                        "default": "#f6f6f6",
                        "group": "Design"
                    },
                    "content_bg_color": {
                        "type": "colorpickeralpha",
                        "heading": "Popover Content Background Color",
                        "description": "Controls the background color of the popover content area.   Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#popover_content_bg_color\" target=\"_blank\" rel=\"noopener noreferrer\">#ffffff</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-content_bg_color\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"content_bg_color\" value=\"\" data-default=\"#ffffff\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "content_bg_color",
                        "value": "",
                        "default": "#ffffff",
                        "group": "Design"
                    },
                    "bordercolor": {
                        "type": "colorpickeralpha",
                        "heading": "Popover Border Color",
                        "description": "Controls the border color of the of the popover box.   Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#popover_border_color\" target=\"_blank\" rel=\"noopener noreferrer\">#ebebeb</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-bordercolor\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"bordercolor\" value=\"\" data-default=\"#ebebeb\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "bordercolor",
                        "value": "",
                        "default": "#ebebeb",
                        "group": "Design"
                    },
                    "textcolor": {
                        "type": "colorpicker",
                        "heading": "Popover Text Color",
                        "description": "Controls all the text color inside the popover box. Leave blank for theme option selection.  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#popover_text_color\" target=\"_blank\" rel=\"noopener noreferrer\">#747474</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-textcolor\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"textcolor\" value=\"\" data-default=\"#747474\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "textcolor",
                        "value": "",
                        "default": "#747474",
                        "group": "Design"
                    }
                }
            }
        },
        "remove_from_atts": []
    },
    "fusion_postslider": {
        "name": "Post Slider",
        "shortcode": "fusion_postslider",
        "icon": "fusiona-layers-alt",
        "preview": "C:/xamppp/htdocs/wp_avada542/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-post-slider-preview.php",
        "preview_id": "fusion-builder-block-module-post-slider-preview-template",
        "params": {
            "groups": {
                "General": {
                    "layout": {
                        "type": "select",
                        "heading": "Layout",
                        "description": "Choose a layout style for Post Slider.",
                        "param_name": "layout",
                        "value": {
                            "posts": "Posts with Title",
                            "posts-with-excerpt": "Posts with Title and Excerpt",
                            "attachments": "Attachment Layout, Only Images Attached to Post/Page"
                        },
                        "default": "attachments"
                    },
                    "upload_attachments": {
                        "type": "uploadattachment",
                        "heading": "Attach Images to Post/Page Gallery",
                        "description": "To add images to this post or page for attachments layout, navigate to &quot;Upload Files&quot; tab in media manager and upload new images.",
                        "param_name": "upload_attachments",
                        "value": "",
                        "remove_from_atts": true,
                        "dependency": [{
                            "element": "layout",
                            "value": "attachments",
                            "operator": "=="
                        }]
                    },
                    "excerpt": {
                        "type": "textfield",
                        "heading": "Excerpt Number of Words",
                        "description": "Insert the number of words you want to show in the excerpt.",
                        "param_name": "excerpt",
                        "value": "35",
                        "dependency": [{
                            "element": "layout",
                            "value": "posts-with-excerpt",
                            "operator": "=="
                        }]
                    },
                    "category": {
                        "type": "select",
                        "heading": "Category",
                        "description": "Select a category of posts to display.",
                        "param_name": "category",
                        "value": {
                            "All": "",
                            "uncategorized": "Uncategorized (1)"
                        },
                        "default": "",
                        "dependency": [{
                            "element": "layout",
                            "value": "attachments",
                            "operator": "!="
                        }]
                    },
                    "limit": {
                        "type": "textfield",
                        "heading": "Number of Slides",
                        "description": "Select the number of slides to display.",
                        "param_name": "limit",
                        "value": "3"
                    },
                    "lightbox": {
                        "type": "radio_button_set",
                        "heading": "Image Lightbox",
                        "description": "Only works on attachment layout. Lightbox must be enabled in Theme Options or the image will open up by in the same tab by itself.  Current value set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#status_lightbox\" target=\"_blank\" rel=\"noopener noreferrer\">Yes</a>.",
                        "param_name": "lightbox",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        },
                        "default": "yes",
                        "dependency": [{
                            "element": "layout",
                            "value": "attachments",
                            "operator": "=="
                        }]
                    },
                    "hide_on_mobile": {
                        "type": "checkbox_button_set",
                        "heading": "Element Visibility",
                        "param_name": "hide_on_mobile",
                        "value": {
                            "small-visibility": "Small Screen",
                            "medium-visibility": "Medium Screen",
                            "large-visibility": "Large Screen"
                        },
                        "default": ["small-visibility", "medium-visibility", "large-visibility"],
                        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Element Options</a>."
                    },
                    "class": {
                        "type": "textfield",
                        "heading": "CSS Class",
                        "description": "Add a class to the wrapping HTML element.",
                        "param_name": "class",
                        "value": ""
                    },
                    "id": {
                        "type": "textfield",
                        "heading": "CSS ID",
                        "description": "Add an ID to the wrapping HTML element.",
                        "param_name": "id",
                        "value": ""
                    }
                }
            }
        },
        "remove_from_atts": ["upload_attachments"]
    },
    "fusion_pricing_table": {
        "name": "Pricing Table",
        "shortcode": "fusion_pricing_table",
        "icon": "fusiona-dollar",
        "preview": "C:/xamppp/htdocs/wp_avada542/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-pricing-table-preview.php",
        "preview_id": "fusion-builder-block-module-pricing-table-preview-template",
        "custom_settings_view_name": "ModuleSettingsTableView",
        "custom_settings_view_js": "http://127.0.0.1/wp_avada542/wp-content/plugins/fusion-builder/inc/templates/custom/js/fusion-pricing-table-settings.js",
        "custom_settings_template_file": "C:/xamppp/htdocs/wp_avada542/wp-content/plugins/fusion-builder/inc/templates/custom/fusion-pricing-table-settings.php",
        "on_save": "pricingTableShortcodeFilter",
        "admin_enqueue_js": "http://127.0.0.1/wp_avada542/wp-content/plugins/fusion-builder/shortcodes/js/fusion-pricing-table.js",
        "params": {
            "groups": {
                "General": {
                    "type": {
                        "type": "radio_button_set",
                        "heading": "Type",
                        "description": "Select the type of pricing table.",
                        "param_name": "type",
                        "value": {
							"Classic": "0", //"pt_0", //name: image
							"Minimal": "1" //"pt_1"
						},
                        "default": "0"
                    },
                    "style": {
                        "type": "radio_button_set",
                        "heading": "Style",
                        "description": "Select the style of pricing table.",
                        "param_name": "box_style",
                        "value": {
                            "box": "Box", //name: image
                            "table": "Table"
                        },
                        "default": "box"
                    },
                    "decimal_pos":{
                        "type": "radio_button_set",
                        "heading": "Decimal Currency Position",
                        "description": "Cents of price will be showed in up or down position",
                        "param_name": "decimal_pos",
                        "value": {
                            "up": "Up", //name: image
                            "down": "Down"
                        },
                        "default": "up"
                    },
                    "backgroundcolor": {
                        "type": "colorpickeralpha",
                        "heading": "Background Color",
                        "description": "Set pricing table background color.   Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#pricing_bg_color\" target=\"_blank\" rel=\"noopener noreferrer\">#ffffff</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-backgroundcolor\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"backgroundcolor\" value=\"\" data-default=\"#ffffff\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "backgroundcolor",
                        "value": "",
                        "default": "#ffffff"
                    },
                    "headingcolor": {
                        "type": "colorpickeralpha",
                        "heading": "Price Title Color",
                        "description": "Set pricing table title color. Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#pricing_bg_color\" target=\"_blank\" rel=\"noopener noreferrer\">#ffffff</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-backgroundcolor\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"backgroundcolor\" value=\"\" data-default=\"#ffffff\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "headingcolor",
                        "value": "",
                        "default": "#000000"
                    },
                    "background_color_hover": {
                        "type": "colorpickeralpha",
                        "heading": "Background Hover Color",
                        "description": "Set pricing table background hover color.   Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#pricing_background_color_hover\" target=\"_blank\" rel=\"noopener noreferrer\">#f8f8f8</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-background_color_hover\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"background_color_hover\" value=\"\" data-default=\"#f8f8f8\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "background_color_hover",
                        "value": "",
                        "default": "#f8f8f8"
                    },
                    "bordercolor": {
                        "type": "colorpickeralpha",
                        "heading": "Border Color",
                        "description": "Set pricing table border color.  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#pricing_border_color\" target=\"_blank\" rel=\"noopener noreferrer\">#f8f8f8</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-bordercolor\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"bordercolor\" value=\"\" data-default=\"#f8f8f8\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "bordercolor",
                        "value": "",
                        "default": "#f8f8f8"
                    },
                    "dividercolor": {
                        "type": "colorpickeralpha",
                        "heading": "Divider Color",
                        "description": "Set pricing table divider color.  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#pricing_divider_color\" target=\"_blank\" rel=\"noopener noreferrer\">#ededed</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-dividercolor\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"dividercolor\" value=\"\" data-default=\"#ededed\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "dividercolor",
                        "value": "",
                        "default": "#ededed"
                    },
                    "heading_color_style_1": {
                        "type": "colorpicker",
                        "heading": "Heading Color",
                        "description": "Set pricing table headings color.  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#full_boxed_pricing_box_heading_color\" target=\"_blank\" rel=\"noopener noreferrer\">#333333</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-heading_color_style_1\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"heading_color_style_1\" value=\"\" data-default=\"#333333\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "heading_color_style_1",
                        "value": "",
                        "default": "#333333",
                        "dependency": [{
                            "element": "type",
                            "value": "1",
                            "operator": "=="
                        }]
                    },
                    "heading_color_style_2": {
                        "type": "colorpicker",
                        "heading": "Heading Color",
                        "description": "Set pricing table headings color.  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#sep_pricing_box_heading_color\" target=\"_blank\" rel=\"noopener noreferrer\">#333333</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-heading_color_style_2\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"heading_color_style_2\" value=\"\" data-default=\"#333333\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "heading_color_style_2",
                        "value": "",
                        "default": "#333333",
                        "dependency": [{
                            "element": "type",
                            "value": "2",
                            "operator": "=="
                        }]
                    },
                    "pricing_color": {
                        "type": "colorpicker",
                        "heading": "Pricing Text Color",
                        "description": "Set pricing table price text color.  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#pricing_box_color\" target=\"_blank\" rel=\"noopener noreferrer\">#a0ce4e</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-pricing_color\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"pricing_color\" value=\"\" data-default=\"#a0ce4e\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "pricing_color",
                        "value": "",
                        "default": "#a0ce4e"
                    },
                    "body_text_color": {
                        "type": "colorpicker",
                        "heading": "Body Text Color",
                        "description": "Set pricing table body text color  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#body_typography\" target=\"_blank\" rel=\"noopener noreferrer\">#747474</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-body_text_color\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"body_text_color\" value=\"\" data-default=\"#747474\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "body_text_color",
                        "value": "",
                        "default": "#747474"
                    },
                    "element_content": {
                        "type": "textarea",
                        "heading": "Short Code",
                        "description": "Pricing Table short code content.",
                        "param_name": "element_content",
                        "value": "[fusion_pricing_column title=\"Standard\" standout=\"no\" class=\"\" id=\"\"][fusion_pricing_price currency=\"$\" price=\"15.55\" time=\"monthly\"][/fusion_pricing_price][fusion_pricing_row]Feature 1[/fusion_pricing_row][fusion_pricing_footer][/fusion_pricing_footer][/fusion_pricing_column][fusion_pricing_column title=\"Premium\" standout=\"yes\" class=\"\" id=\"\"][fusion_pricing_price currency=\"$\" price=\"25.55\" time=\"monthly\"][/fusion_pricing_price][fusion_pricing_row]Feature 1[/fusion_pricing_row][fusion_pricing_footer][/fusion_pricing_footer][/fusion_pricing_column]",
                        "hidden": true,
                        "super_title": "Super Title",
                        "super_subtitle": "Super Subtitle Centered",
						"gchildrens": [
							{
                                //ADD: supertitle, subprice etc
                                "shortcode": "fusion_pricing_column",
								"title": "Standard",
								"subtitle": "Pricing Subtitle",
								"standout": "no",
								"class": "",
								"id": "",
								"gchildrens": [
									{
										"shortcode": "fusion_pricing_price",
										"currency": "$",
										"price": "15.55",
										"currency_position": "left",
										"time": "monthly"
									},
									{
										"shortcode": "fusion_pricing_row",
										"text": "Feature 1"
									},
									{
										"shortcode": "fusion_pricing_footer",
										"text": ""
									}
								]
							},
							{
								"shortcode": "fusion_pricing_column",
                                "title": "Premium",
                                "subtitle": "Pricing Subtitle",
								"standout": "yes",
								"class": "",
								"id": "",
								"gchildrens": [
									{
										"shortcode": "fusion_pricing_price",
										"currency": "$",
										"price": "25.55",
										"currency_position": "right",
										"time": "monthly"
									},
									{
										"shortcode": "fusion_pricing_row",
										"text": "Feature 1"
									},
									{
										"shortcode": "fusion_pricing_row",
										"text": "Feature 2!"
									},
									{
										"shortcode": "fusion_pricing_row",
										"text": "Feature 3!"
									},
									{
										"shortcode": "fusion_pricing_footer",
										"text": ""
									}
									
								]
							}
						]
                    },
                    "hide_on_mobile": {
                        "type": "checkbox_button_set",
                        "heading": "Element Visibility",
                        "param_name": "hide_on_mobile",
                        "value": {
                            "small-visibility": "Small Screen",
                            "medium-visibility": "Medium Screen",
                            "large-visibility": "Large Screen"
                        },
                        "default": ["small-visibility", "medium-visibility", "large-visibility"],
                        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Element Options</a>."
                    },
                    "class": {
                        "type": "textfield",
                        "heading": "CSS Class",
                        "description": "Add a class to the wrapping HTML element.",
                        "param_name": "class",
                        "value": "",
                        "group": "General"
                    },
                    "id": {
                        "type": "textfield",
                        "heading": "CSS ID",
                        "description": "Add an ID to the wrapping HTML element.",
                        "param_name": "id",
                        "value": "",
                        "group": "General"
                    }
                },
				"Demos": {
					
				}
            }
        },
        "remove_from_atts": []
    },
    "fusion_progress": {
        "name": "Progress Bar",
        "shortcode": "fusion_progress",
        "icon": "fusiona-tasks",
        "preview": "C:/xamppp/htdocs/wp_avada542/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-progress-preview.php",
        "preview_id": "fusion-builder-block-module-progress-preview-template",
        "params": {
            "groups": {
                "General": {
                    "dimensions": {
                        "type": "dimension",
                        "remove_from_atts": true,
                        "heading": "Progress Bar Height",
                        "description": "Insert a height for the progress bar. Enter value including any valid CSS unit, ex: 10px. ",
                        "param_name": "dimensions",
                        "value": {
                            "height": ""
                        }
                    },
                    "text_position": {
                        "type": "radio_button_set",
                        "heading": "Text Position",
                        "description": "Select the position of the progress bar text. Choose &quot;Default&quot; for theme option selection.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#progressbar_text_position\" target=\"_blank\" rel=\"noopener noreferrer\">On Bar</a>.",
                        "param_name": "text_position",
                        "value": {
                            "": "Default",
                            "on_bar": "On Bar",
                            "above_bar": "Above Bar",
                            "below_bar": "Below Bar"
                        },
                        "default": ""
                    },
                    "show_percentage": {
                        "type": "radio_button_set",
                        "heading": "Display Percentage Value",
                        "description": "Select if you want the filled area percentage value to be shown.",
                        "param_name": "show_percentage",
                        "value": {
                            "no": "No",
                            "yes": "Yes"
                        },
                        "default": "yes"
                    },
                    "unit": {
                        "type": "textfield",
                        "heading": "Progress Bar Unit",
                        "description": "Insert a unit for the progress bar. ex %.",
                        "param_name": "unit",
                        "value": "",
                        "dependency": [{
                            "element": "show_percentage",
                            "value": "yes",
                            "operator": "=="
                        }]
                    },
                    "percentage": {
                        "type": "range",
                        "heading": "Filled Area Percentage",
                        "description": "From 1% to 100%.",
                        "param_name": "percentage",
                        "value": "70"
                    },
                    "filledcolor": {
                        "type": "colorpickeralpha",
                        "heading": "Filled Color",
                        "description": "Controls the color of the filled in area.   Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#progressbar_filled_color\" target=\"_blank\" rel=\"noopener noreferrer\">#a0ce4e</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-filledcolor\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"filledcolor\" value=\"\" data-default=\"#a0ce4e\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "filledcolor",
                        "value": "",
                        "default": "#a0ce4e"
                    },
                    "filledbordersize": {
                        "type": "range",
                        "heading": "Filled Border Size",
                        "description": "In pixels.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#progressbar_filled_border_size\" target=\"_blank\" rel=\"noopener noreferrer\">0</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-filledbordersize\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"filledbordersize\" value=\"\" data-default=\"0\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "filledbordersize",
                        "value": "",
                        "min": "0",
                        "max": "20",
                        "step": "1",
                        "default": "0"
                    },
                    "filledbordercolor": {
                        "type": "colorpickeralpha",
                        "heading": "Filled Border Color",
                        "description": "Controls the border color of the filled in area.   Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#progressbar_filled_border_color\" target=\"_blank\" rel=\"noopener noreferrer\">#ffffff</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-filledbordercolor\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"filledbordercolor\" value=\"\" data-default=\"#ffffff\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "filledbordercolor",
                        "value": "",
                        "default": "#ffffff",
                        "dependency": [{
                            "element": "filledbordersize",
                            "value": "0",
                            "operator": "!="
                        }, {
                            "element": "filledbordersize",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "unfilledcolor": {
                        "type": "colorpickeralpha",
                        "heading": "Unfilled Color",
                        "description": "Controls the color of the unfilled in area.   Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#progressbar_unfilled_color\" target=\"_blank\" rel=\"noopener noreferrer\">#f6f6f6</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-unfilledcolor\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"unfilledcolor\" value=\"\" data-default=\"#f6f6f6\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "unfilledcolor",
                        "value": "",
                        "default": "#f6f6f6"
                    },
                    "striped": {
                        "type": "radio_button_set",
                        "heading": "Striped Filling",
                        "description": "Choose to get the filled area striped.",
                        "param_name": "striped",
                        "value": {
                            "no": "No",
                            "yes": "Yes"
                        },
                        "default": "no"
                    },
                    "animated_stripes": {
                        "type": "radio_button_set",
                        "heading": "Animated Stripes",
                        "description": "Choose to get the the stripes animated.",
                        "param_name": "animated_stripes",
                        "value": {
                            "no": "No",
                            "yes": "Yes"
                        },
                        "default": "no",
                        "dependency": [{
                            "element": "striped",
                            "value": "yes",
                            "operator": "=="
                        }]
                    },
                    "element_content": {
                        "type": "textfield",
                        "heading": "Progess Bar Text",
                        "description": "Text will show up on progess bar.",
                        "param_name": "element_content",
                        "value": "Your Content Goes Here",
                        "placeholder": true
                    },
                    "textcolor": {
                        "type": "colorpickeralpha",
                        "heading": "Text Color",
                        "description": "Controls the text color.   Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#progressbar_text_color\" target=\"_blank\" rel=\"noopener noreferrer\">#ffffff</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-textcolor\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"textcolor\" value=\"\" data-default=\"#ffffff\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "textcolor",
                        "value": "",
                        "default": "#ffffff"
                    },
                    "hide_on_mobile": {
                        "type": "checkbox_button_set",
                        "heading": "Element Visibility",
                        "param_name": "hide_on_mobile",
                        "value": {
                            "small-visibility": "Small Screen",
                            "medium-visibility": "Medium Screen",
                            "large-visibility": "Large Screen"
                        },
                        "default": ["small-visibility", "medium-visibility", "large-visibility"],
                        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Element Options</a>."
                    },
                    "class": {
                        "type": "textfield",
                        "heading": "CSS Class",
                        "description": "Add a class to the wrapping HTML element.",
                        "param_name": "class",
                        "value": "",
                        "group": "General"
                    },
                    "id": {
                        "type": "textfield",
                        "heading": "CSS ID",
                        "description": "Add an ID to the wrapping HTML element.",
                        "param_name": "id",
                        "value": "",
                        "group": "General"
                    }
                }
            }
        },
        "remove_from_atts": ["dimensions"]
    },
    "fusion_recent_posts": {
        "name": "Recent Posts",
        "shortcode": "fusion_recent_posts",
        "icon": "fusiona-feather",
        "preview": "C:/xamppp/htdocs/wp_avada542/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-recent-posts-preview.php",
        "preview_id": "fusion-builder-block-module-recent-posts-preview-template",
        "params": {
            "groups": {
                "General": {
                    "layout": {
                        "type": "radio_button_set",
                        "heading": "Layout",
                        "description": "Select the layout for the element.",
                        "param_name": "layout",
                        "value": {
                            "default": "Standard",
                            "thumbnails-on-side": "Thumbnails on Side",
                            "date-on-side": "Date on Side"
                        },
                        "default": "default"
                    },
                    "hover_type": {
                        "type": "radio_button_set",
                        "heading": "Hover Type",
                        "description": "Select the hover effect type.",
                        "param_name": "hover_type",
                        "value": {
                            "none": "None",
                            "zoomin": "Zoom In",
                            "zoomout": "Zoom Out",
                            "liftup": "Lift Up"
                        },
                        "default": "none"
                    },
                    "columns": {
                        "type": "range",
                        "heading": "Columns",
                        "description": "Select the number of columns to display.",
                        "param_name": "columns",
                        "value": "3",
                        "min": "1",
                        "max": "6",
                        "step": "1"
                    },
                    "number_posts": {
                        "type": "range",
                        "heading": "Posts Per Page",
                        "description": "Select number of posts per page.  Set to -1 to display all.",
                        "param_name": "number_posts",
                        "value": "6",
                        "min": "-1",
                        "max": "25",
                        "step": "1"
                    },
                    "offset": {
                        "type": "range",
                        "heading": "Post Offset",
                        "description": "The number of posts to skip. ex: 1.",
                        "param_name": "offset",
                        "value": "0",
                        "min": "0",
                        "max": "25",
                        "step": "1"
                    },
                    "pull_by": {
                        "type": "radio_button_set",
                        "heading": "Pull Posts By",
                        "description": "Choose to show posts by category or tag.",
                        "param_name": "pull_by",
                        "default": "category",
                        "value": {
                            "category": "Category",
                            "tag": "Tag"
                        }
                    },
                    "cat_slug": {
                        "type": "multiple_select",
                        "heading": "Categories",
                        "description": "Select a category or leave blank for all.",
                        "param_name": "cat_slug",
                        "value": {
                            "uncategorized": "Uncategorized (1)"
                        },
                        "default": "",
                        "dependency": [{
                            "element": "pull_by",
                            "value": "tag",
                            "operator": "!="
                        }]
                    },
                    "exclude_cats": {
                        "type": "multiple_select",
                        "heading": "Exclude Categories",
                        "description": "Select a category to exclude.",
                        "param_name": "exclude_cats",
                        "value": {
                            "uncategorized": "Uncategorized (1)"
                        },
                        "default": "",
                        "dependency": [{
                            "element": "pull_by",
                            "value": "tag",
                            "operator": "!="
                        }]
                    },
                    "tag_slug": {
                        "type": "multiple_select",
                        "heading": "Tags",
                        "description": "Select a tag or leave blank for all.",
                        "param_name": "tag_slug",
                        "value": [],
                        "default": "",
                        "dependency": [{
                            "element": "pull_by",
                            "value": "category",
                            "operator": "!="
                        }]
                    },
                    "exclude_tags": {
                        "type": "multiple_select",
                        "heading": "Exclude Tags",
                        "description": "Select a tag to exclude.",
                        "param_name": "exclude_tags",
                        "value": [],
                        "default": "",
                        "dependency": [{
                            "element": "pull_by",
                            "value": "category",
                            "operator": "!="
                        }]
                    },
                    "thumbnail": {
                        "type": "radio_button_set",
                        "heading": "Show Thumbnail",
                        "description": "Display the post featured image.",
                        "param_name": "thumbnail",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        },
                        "default": "yes",
                        "dependency": [{
                            "element": "layout",
                            "value": "date-on-side",
                            "operator": "!="
                        }]
                    },
                    "title": {
                        "type": "radio_button_set",
                        "heading": "Show Title",
                        "description": "Display the post title below the featured image.",
                        "param_name": "title",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        },
                        "default": "yes"
                    },
                    "meta": {
                        "type": "radio_button_set",
                        "heading": "Show Meta",
                        "description": "Choose to show all meta data.",
                        "param_name": "meta",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        },
                        "default": "yes"
                    },
                    "meta_author": {
                        "type": "radio_button_set",
                        "heading": "Show Author Name",
                        "description": "Choose to show the author.",
                        "param_name": "meta_author",
                        "default": "no",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        },
                        "dependency": [{
                            "element": "meta",
                            "value": "yes",
                            "operator": "=="
                        }]
                    },
                    "meta_categories": {
                        "type": "radio_button_set",
                        "heading": "Show Categories",
                        "description": "Choose to show the categories.",
                        "param_name": "meta_categories",
                        "default": "no",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        },
                        "dependency": [{
                            "element": "meta",
                            "value": "yes",
                            "operator": "=="
                        }]
                    },
                    "meta_date": {
                        "type": "radio_button_set",
                        "heading": "Show Date",
                        "description": "Choose to show the date.",
                        "param_name": "meta_date",
                        "default": "yes",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        },
                        "dependency": [{
                            "element": "meta",
                            "value": "yes",
                            "operator": "=="
                        }]
                    },
                    "meta_comments": {
                        "type": "radio_button_set",
                        "heading": "Show Comment Count",
                        "description": "Choose to show the comments.",
                        "param_name": "meta_comments",
                        "default": "yes",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        },
                        "dependency": [{
                            "element": "meta",
                            "value": "yes",
                            "operator": "=="
                        }]
                    },
                    "meta_tags": {
                        "type": "radio_button_set",
                        "heading": "Show Tags",
                        "description": "Choose to show the tags.",
                        "param_name": "meta_tags",
                        "default": "no",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        },
                        "dependency": [{
                            "element": "meta",
                            "value": "yes",
                            "operator": "=="
                        }]
                    },
                    "excerpt": {
                        "type": "radio_button_set",
                        "heading": "Text display",
                        "description": "Choose to display the post excerpt.",
                        "param_name": "excerpt",
                        "value": {
                            "yes": "Excerpt",
                            "full": "Full Content",
                            "no": "None"
                        },
                        "default": "yes"
                    },
                    "excerpt_length": {
                        "type": "range",
                        "heading": "Excerpt Length",
                        "description": "Insert the number of words/characters you want to show in the excerpt.",
                        "param_name": "excerpt_length",
                        "value": "35",
                        "min": "0",
                        "max": "500",
                        "step": "1",
                        "dependency": [{
                            "element": "excerpt",
                            "value": "yes",
                            "operator": "=="
                        }]
                    },
                    "strip_html": {
                        "type": "radio_button_set",
                        "heading": "Strip HTML",
                        "description": "Strip HTML from the post excerpt.",
                        "param_name": "strip_html",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        },
                        "default": "yes",
                        "dependency": [{
                            "element": "excerpt",
                            "value": "yes",
                            "operator": "=="
                        }]
                    },
                    "hide_on_mobile": {
                        "type": "checkbox_button_set",
                        "heading": "Element Visibility",
                        "param_name": "hide_on_mobile",
                        "value": {
                            "small-visibility": "Small Screen",
                            "medium-visibility": "Medium Screen",
                            "large-visibility": "Large Screen"
                        },
                        "default": ["small-visibility", "medium-visibility", "large-visibility"],
                        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Element Options</a>."
                    },
                    "class": {
                        "type": "textfield",
                        "heading": "CSS Class",
                        "description": "Add a class to the wrapping HTML element.",
                        "param_name": "class",
                        "value": "",
                        "group": "General"
                    },
                    "id": {
                        "type": "textfield",
                        "heading": "CSS ID",
                        "description": "Add an ID to the wrapping HTML element.",
                        "param_name": "id",
                        "value": "",
                        "group": "General"
                    }
                },
                "Animation": {
                    "animation_type": {
                        "type": "select",
                        "heading": "Animation Type",
                        "description": "Select the type of animation to use on the element.",
                        "param_name": "animation_type",
                        "value": {
                            "": "None",
                            "bounce": "Bounce",
                            "fade": "Fade",
                            "flash": "Flash",
                            "rubberBand": "Rubberband",
                            "shake": "Shake",
                            "slide": "Slide",
                            "zoom": "Zoom"
                        },
                        "default": "",
                        "group": "Animation"
                    },
                    "animation_direction": {
                        "type": "radio_button_set",
                        "heading": "Direction of Animation",
                        "description": "Select the incoming direction for the animation.",
                        "param_name": "animation_direction",
                        "value": {
                            "down": "Top",
                            "right": "Right",
                            "up": "Bottom",
                            "left": "Left",
                            "static": "Static"
                        },
                        "default": "left",
                        "group": "Animation",
                        "dependency": [{
                            "element": "animation_type",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "animation_speed": {
                        "type": "range",
                        "heading": "Speed of Animation",
                        "description": "Type in speed of animation in seconds (0.1 - 1).",
                        "param_name": "animation_speed",
                        "min": "0.1",
                        "max": "1",
                        "step": "0.1",
                        "value": "0.3",
                        "group": "Animation",
                        "dependency": [{
                            "element": "animation_type",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "animation_offset": {
                        "type": "select",
                        "heading": "Offset of Animation",
                        "description": "Controls when the animation should start.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#animation_offset\" target=\"_blank\" rel=\"noopener noreferrer\">Top Of Element Hits Bottom Of Viewport</a>.",
                        "param_name": "animation_offset",
                        "value": {
                            "": "Default",
                            "top-into-view": "Top of element hits bottom of viewport",
                            "top-mid-of-view": "Top of element hits middle of viewport",
                            "bottom-in-view": "Bottom of element enters viewport"
                        },
                        "default": "",
                        "group": "Animation",
                        "dependency": [{
                            "element": "animation_type",
                            "value": "",
                            "operator": "!="
                        }]
                    }
                }
            }
        },
        "remove_from_atts": []
    },
    "rev_slider": {
        "name": "Revolution Slider",
        "shortcode": "rev_slider",
        "icon": "fusiona-air",
        "preview": "C:/xamppp/htdocs/wp_avada542/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-revolution-slider-preview.php",
        "preview_id": "fusion-builder-block-module-revolution-slider-preview-template",
        "params": {
            "groups": {
                "General": {
                    "alias": {
                        "type": "select",
                        "heading": "Select Slider",
                        "description": "Select a slider group.",
                        "param_name": "alias",
                        "value": {
                            "0": "Select a slider",
                            "ded": "ss"
                        }
                    }
                }
            }
        },
        "remove_from_atts": []
    },
    "fusion_builder_row_inner": {
        "name": "Nested Columns",
        "shortcode": "fusion_builder_row_inner",
        "hide_from_builder": true
    },
    "fusion_builder_row": {
        "name": "Row",
        "shortcode": "fusion_builder_row",
        "hide_from_builder": true
    },
    "fusion_section_separator": {
        "name": "Section Separator",
        "shortcode": "fusion_section_separator",
        "icon": "fusiona-ellipsis",
        "params": {
            "groups": {
                "General": {
                    "divider_type": {
                        "type": "select",
                        "heading": "Section Separator Style",
                        "description": "Select the type of the section separator",
                        "param_name": "divider_type",
                        "value": {
                            "triangle": "Triangle",
                            "slant": "Slant",
                            "bigtriangle": "Big Triangle",
                            "rounded-split": "Rounded Split",
                            "curved": "Curved",
                            "big-half-circle": "Big Half Circle",
                            "clouds": "Clouds"
                        },
                        "default": "triangle"
                    },
                    "divider_position": {
                        "type": "radio_button_set",
                        "heading": "Horizontal Position of the Section Separator",
                        "description": "Select the horizontal position of the section separator.",
                        "param_name": "divider_position",
                        "value": {
                            "left": "Left",
                            "center": "Center",
                            "right": "Right"
                        },
                        "default": "center",
                        "dependency": [{
                            "element": "divider_type",
                            "value": "triangle",
                            "operator": "!="
                        }, {
                            "element": "divider_type",
                            "value": "rounded-split",
                            "operator": "!="
                        }, {
                            "element": "divider_type",
                            "value": "big-half-circle",
                            "operator": "!="
                        }, {
                            "element": "divider_type",
                            "value": "clouds",
                            "operator": "!="
                        }]
                    },
                    "divider_candy": {
                        "type": "radio_button_set",
                        "heading": "Vertical Position of the Section Separator",
                        "description": "Select the vertical position of the section separator.",
                        "param_name": "divider_candy",
                        "value": {
                            "top": "Top",
                            "bottom": "Bottom",
                            "bottom,top": "Top and Bottom"
                        },
                        "default": "top",
                        "dependency": [{
                            "element": "divider_type",
                            "value": "clouds",
                            "operator": "!="
                        }]
                    },
                    "icon": {
                        "type": "iconpicker",
                        "heading": "Icon",
                        "param_name": "icon",
                        "value": "",
                        "description": "Click an icon to select, click again to deselect.",
                        "dependency": [{
                            "element": "divider_type",
                            "value": "triangle",
                            "operator": "=="
                        }]
                    },
                    "icon_color": {
                        "type": "colorpicker",
                        "heading": "Icon Color",
                        "description": "  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#icon_color\" target=\"_blank\" rel=\"noopener noreferrer\">#ffffff</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-icon_color\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"icon_color\" value=\"\" data-default=\"#ffffff\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "icon_color",
                        "value": "",
                        "default": "#ffffff",
                        "dependency": [{
                            "element": "divider_type",
                            "value": "triangle",
                            "operator": "=="
                        }, {
                            "element": "icon",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "bordersize": {
                        "type": "range",
                        "heading": "Border",
                        "description": "In pixels.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#section_sep_border_size\" target=\"_blank\" rel=\"noopener noreferrer\">1</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-bordersize\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"bordersize\" value=\"\" data-default=\"1\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "bordersize",
                        "value": "",
                        "min": "0",
                        "max": "50",
                        "step": "1",
                        "default": "1",
                        "dependency": [{
                            "element": "divider_type",
                            "value": "triangle",
                            "operator": "=="
                        }]
                    },
                    "bordercolor": {
                        "type": "colorpicker",
                        "heading": "Border Color",
                        "description": "Controls the border color.   Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#section_sep_border_color\" target=\"_blank\" rel=\"noopener noreferrer\">#f6f6f6</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-bordercolor\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"bordercolor\" value=\"\" data-default=\"#f6f6f6\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "bordercolor",
                        "value": "",
                        "default": "#f6f6f6",
                        "dependency": [{
                            "element": "divider_type",
                            "value": "triangle",
                            "operator": "=="
                        }, {
                            "element": "bordersize",
                            "value": "0",
                            "operator": "!="
                        }]
                    },
                    "backgroundcolor": {
                        "type": "colorpickeralpha",
                        "heading": "Background Color of the Section Separator",
                        "description": "Controls the background color of the section separator style. Leave empty for default value of #f6f6f6.  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#section_sep_bg\" target=\"_blank\" rel=\"noopener noreferrer\">#f6f6f6</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-backgroundcolor\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"backgroundcolor\" value=\"\" data-default=\"#f6f6f6\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "backgroundcolor",
                        "value": "",
                        "default": "#f6f6f6"
                    },
                    "hide_on_mobile": {
                        "type": "checkbox_button_set",
                        "heading": "Element Visibility",
                        "param_name": "hide_on_mobile",
                        "value": {
                            "small-visibility": "Small Screen",
                            "medium-visibility": "Medium Screen",
                            "large-visibility": "Large Screen"
                        },
                        "default": ["small-visibility", "medium-visibility", "large-visibility"],
                        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Element Options</a>."
                    },
                    "class": {
                        "type": "textfield",
                        "heading": "CSS Class",
                        "description": "Add a class to the wrapping HTML element.",
                        "param_name": "class",
                        "value": ""
                    },
                    "id": {
                        "type": "textfield",
                        "heading": "CSS ID",
                        "description": "Add an ID to the wrapping HTML element.",
                        "param_name": "id",
                        "value": ""
                    }
                }
            }
        },
        "remove_from_atts": []
    },
    "fusion_separator": {
        "name": "Separator",
        "shortcode": "fusion_separator",
        "icon": "fusiona-minus",
        "preview": "C:/xamppp/htdocs/wp_avada542/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-separator-preview.php",
        "preview_id": "fusion-builder-block-module-separator-preview-template",
        "params": {
            "groups": {
                "General": {
                    "style_type": {
                        "type": "select",
                        "heading": "Style",
                        "description": "Choose the separator line style.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#separator_style_type\" target=\"_blank\" rel=\"noopener noreferrer\">Double Border Solid</a>.",
                        "param_name": "style_type",
                        "value": {
                            "default": "Default",
                            "none": "No Style",
                            "single solid": "Single Border Solid",
                            "double solid": "Double Border Solid",
                            "single|dashed": "Single Border Dashed",
                            "double|dashed": "Double Border Dashed",
                            "single|dotted": "Single Border Dotted",
                            "double|dotted": "Double Border Dotted",
                            "shadow": "Shadow"
                        },
                        "default": "default"
                    },
                    "hide_on_mobile": {
                        "type": "checkbox_button_set",
                        "heading": "Element Visibility",
                        "param_name": "hide_on_mobile",
                        "value": {
                            "small-visibility": "Small Screen",
                            "medium-visibility": "Medium Screen",
                            "large-visibility": "Large Screen"
                        },
                        "default": ["small-visibility", "medium-visibility", "large-visibility"],
                        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Element Options</a>."
                    },
                    "class": {
                        "type": "textfield",
                        "heading": "CSS Class",
                        "param_name": "class",
                        "value": "",
                        "description": "Add a class to the wrapping HTML element."
                    },
                    "id": {
                        "type": "textfield",
                        "heading": "CSS ID",
                        "param_name": "id",
                        "value": "",
                        "description": "Add an ID to the wrapping HTML element."
                    }
                },
                "Design": {
                    "sep_color": {
                        "type": "colorpickeralpha",
                        "heading": "Separator Color",
                        "description": "Controls the separator color.  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#sep_color\" target=\"_blank\" rel=\"noopener noreferrer\">#e0dede</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-sep_color\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"sep_color\" value=\"\" data-default=\"#e0dede\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "sep_color",
                        "value": "",
                        "default": "#e0dede",
                        "group": "Design"
                    },
                    "dimensions": {
                        "type": "dimension",
                        "remove_from_atts": true,
                        "heading": "Margin",
                        "param_name": "dimensions",
                        "value": {
                            "top_margin": "",
                            "bottom_margin": ""
                        },
                        "description": "Spacing above and below the separator. In px, em or %, e.g. 10px.",
                        "group": "Design"
                    },
                    "border_size": {
                        "type": "range",
                        "heading": "Border Size",
                        "param_name": "border_size",
                        "value": "",
                        "min": "0",
                        "max": "50",
                        "step": "1",
                        "default": "1",
                        "description": "In pixels.   Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#separator_border_size\" target=\"_blank\" rel=\"noopener noreferrer\">1</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-border_size\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"border_size\" value=\"\" data-default=\"1\">Reset to default.</a><span>Using default value.</span></span>",
                        "group": "Design"
                    },
                    "icon": {
                        "type": "iconpicker",
                        "heading": "Select Icon",
                        "param_name": "icon",
                        "value": "",
                        "description": "Click an icon to select, click again to deselect.",
                        "group": "Design"
                    },
                    "icon_circle": {
                        "type": "radio_button_set",
                        "heading": "Circled Icon",
                        "description": "Choose to have a circle in separator color around the icon.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#separator_circle\" target=\"_blank\" rel=\"noopener noreferrer\">Yes</a>.",
                        "param_name": "icon_circle",
                        "value": {
                            "": "Default",
                            "yes": "Yes",
                            "no": "No"
                        },
                        "default": "",
                        "group": "Design",
                        "dependency": [{
                            "element": "icon",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "icon_circle_color": {
                        "type": "colorpickeralpha",
                        "heading": "Circle Color",
                        "description": "Controls the background color of the circle around the icon.",
                        "param_name": "icon_circle_color",
                        "value": "",
                        "default": "#333333",
                        "group": "Design",
                        "dependency": [{
                            "element": "icon",
                            "value": "",
                            "operator": "!="
                        }, {
                            "element": "icon_circle",
                            "value": "no",
                            "operator": "!="
                        }]
                    },
                    "dimensions_width": {
                        "type": "dimension",
                        "remove_from_atts": true,
                        "heading": "Separator Width",
                        "param_name": "dimensions_width",
                        "value": {
                            "width": ""
                        },
                        "description": "In pixels (px or %), ex: 1px, ex: 50%. Leave blank for full width.",
                        "group": "Design"
                    },
                    "alignment": {
                        "type": "radio_button_set",
                        "heading": "Alignment",
                        "description": "Select the separator alignment; only works when a width is specified.",
                        "param_name": "alignment",
                        "value": {
                            "center": "Center",
                            "left": "Left",
                            "right": "Right"
                        },
                        "default": "center",
                        "group": "Design"
                    }
                }
            }
        },
        "remove_from_atts": ["dimensions", "dimensions_width"]
    },
    "fusion_sharing": {
        "name": "Sharing Box",
        "shortcode": "fusion_sharing",
        "icon": "fusiona-share2",
        "preview": "C:/xamppp/htdocs/wp_avada542/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-sharingbox-preview.php",
        "preview_id": "fusion-builder-block-module-sharingbox-preview-template",
        "params": {
            "groups": {
                "General": {
                    "tagline": {
                        "type": "textfield",
                        "heading": "Tagline",
                        "description": "The title tagline that will display.",
                        "param_name": "tagline",
                        "value": "Share This Story, Choose Your Platform!"
                    },
                    "tagline_color": {
                        "type": "colorpicker",
                        "heading": "Tagline Color",
                        "description": "Controls the text color. Leave blank for theme option selection.  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#sharing_box_tagline_text_color\" target=\"_blank\" rel=\"noopener noreferrer\">#333333</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-tagline_color\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"tagline_color\" value=\"\" data-default=\"#333333\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "tagline_color",
                        "value": "",
                        "default": "#333333",
                        "dependency": [{
                            "element": "tagline",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "backgroundcolor": {
                        "type": "colorpickeralpha",
                        "heading": "Background Color",
                        "description": "Controls the background color.   Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#social_bg_color\" target=\"_blank\" rel=\"noopener noreferrer\">#f6f6f6</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-backgroundcolor\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"backgroundcolor\" value=\"\" data-default=\"#f6f6f6\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "backgroundcolor",
                        "value": "",
                        "default": "#f6f6f6"
                    },
                    "title": {
                        "type": "textfield",
                        "heading": "Title",
                        "description": "The post title that will be shared.",
                        "param_name": "title",
                        "value": ""
                    },
                    "link": {
                        "type": "link_selector",
                        "heading": "Link to Share",
                        "description": "The link that will be shared.",
                        "param_name": "link",
                        "value": ""
                    },
                    "description": {
                        "type": "raw_textarea",
                        "heading": "Description",
                        "description": "The description that will be shared.",
                        "param_name": "description",
                        "value": ""
                    },
                    "icons_boxed": {
                        "type": "radio_button_set",
                        "heading": "Boxed Social Icons",
                        "description": "Choose to get a boxed icons. Choose default for theme option selection.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#social_links_boxed\" target=\"_blank\" rel=\"noopener noreferrer\">No</a>.",
                        "param_name": "icons_boxed",
                        "value": {
                            "": "Default",
                            "yes": "Yes",
                            "no": "No"
                        },
                        "default": ""
                    },
                    "icons_boxed_radius": {
                        "type": "textfield",
                        "heading": "Social Icon Box Radius",
                        "description": "Choose the radius of the boxed icons. In pixels (px), ex: 1px, or &quot;round&quot;.   Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#social_links_boxed_radius\" target=\"_blank\" rel=\"noopener noreferrer\">4px</a>.",
                        "param_name": "icons_boxed_radius",
                        "value": "",
                        "dependency": [{
                            "element": "icons_boxed",
                            "value": "no",
                            "operator": "!="
                        }, {
                            "element": "icons_boxed",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "color_type": {
                        "type": "radio_button_set",
                        "heading": "Social Icons Color Type",
                        "description": "Choose to get a boxed icons. Choose default for theme option selection.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#social_links_color_type\" target=\"_blank\" rel=\"noopener noreferrer\">Custom Colors</a>.",
                        "param_name": "color_type",
                        "value": {
                            "": "Default",
                            "custom": "Custom Colors",
                            "brand": "Brand Colors"
                        },
                        "default": ""
                    },
                    "icon_colors": {
                        "type": "textarea",
                        "heading": "Social Icon Custom Colors",
                        "description": "Specify the color of social icons.   Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#social_links_icon_color\" target=\"_blank\" rel=\"noopener noreferrer\">#bebdbd</a>.",
                        "param_name": "icon_colors",
                        "value": "",
                        "dependency": [{
                            "element": "color_type",
                            "value": "brand",
                            "operator": "!="
                        }]
                    },
                    "box_colors": {
                        "type": "textarea",
                        "heading": "Social Icon Custom Box Colors",
                        "description": "Specify the box color of social icons.   Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#social_links_box_color\" target=\"_blank\" rel=\"noopener noreferrer\">#e8e8e8</a>.",
                        "param_name": "box_colors",
                        "value": "",
                        "dependency": [{
                            "element": "icons_boxed",
                            "value": "no",
                            "operator": "!="
                        }, {
                            "element": "color_type",
                            "value": "brand",
                            "operator": "!="
                        }, {
                            "element": "icons_boxed",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "tooltip_placement": {
                        "type": "radio_button_set",
                        "heading": "Social Icon Tooltip Position",
                        "description": "Choose the display position for tooltips. Choose default for theme option selection.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#sharing_social_links_tooltip_placement\" target=\"_blank\" rel=\"noopener noreferrer\">Top</a>.",
                        "param_name": "tooltip_placement",
                        "value": {
                            "": "Default",
                            "top": "Top",
                            "bottom": "Bottom",
                            "left": "Left",
                            "Right": "Right"
                        },
                        "default": ""
                    },
                    "pinterest_image": {
                        "type": "upload",
                        "heading": "Choose Image to Share on Pinterest.",
                        "param_name": "pinterest_image",
                        "value": ""
                    },
                    "hide_on_mobile": {
                        "type": "checkbox_button_set",
                        "heading": "Element Visibility",
                        "param_name": "hide_on_mobile",
                        "value": {
                            "small-visibility": "Small Screen",
                            "medium-visibility": "Medium Screen",
                            "large-visibility": "Large Screen"
                        },
                        "default": ["small-visibility", "medium-visibility", "large-visibility"],
                        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Element Options</a>."
                    },
                    "class": {
                        "type": "textfield",
                        "heading": "CSS Class",
                        "param_name": "class",
                        "value": "",
                        "description": "Add a class to the wrapping HTML element."
                    },
                    "id": {
                        "type": "textfield",
                        "heading": "CSS ID",
                        "param_name": "id",
                        "value": "",
                        "description": "Add an ID to the wrapping HTML element."
                    }
                }
            }
        },
        "remove_from_atts": []
    },
    "fusion_slider": {
        "name": "Slider",
        "shortcode": "fusion_slider",
        "multi": "multi_element_parent",
        "element_child": "fusion_slide",
        "icon": "fusiona-uniF61C",
        "preview": "C:/xamppp/htdocs/wp_avada542/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-slider-preview.php",
        "preview_id": "fusion-builder-block-module-slider-preview-template",
        "params": {
            "groups": {
                "General": {
                    "element_content": {
                        "type": "tinymce",
                        "heading": "Content",
                        "description": "Enter some content for this contentbox.",
                        "param_name": "element_content",
                        "value": "[fusion_slide type=\"image\" link=\"\" linktarget=\"_self\" lightbox=\"no\" /]"
                    },
                    "multiple_upload": {
                        "type": "multiple_upload",
                        "heading": "Bulk Image Upload",
                        "description": "This option allows you to select multiple images at once and they will populate into individual items. It saves time instead of adding one image at a time.",
                        "param_name": "multiple_upload",
                        "element_target": "fusion_slide",
                        "param_target": "image",
                        "remove_from_atts": true
                    },
                    "hover_type": {
                        "type": "select",
                        "heading": "Hover Type",
                        "description": "Select the hover effect type.",
                        "param_name": "hover_type",
                        "value": {
                            "none": "None",
                            "zoomin": "Zoom In",
                            "zoomout": "Zoom Out",
                            "liftup": "Lift Up"
                        },
                        "default": "none"
                    },
                    "dimensions": {
                        "type": "dimension",
                        "remove_from_atts": true,
                        "heading": "Image Size Dimensions",
                        "description": "Dimensions in percentage (%) or pixels (px).",
                        "param_name": "dimensions",
                        "value": {
                            "width": "100%",
                            "height": "100%"
                        }
                    },
                    "hide_on_mobile": {
                        "type": "checkbox_button_set",
                        "heading": "Element Visibility",
                        "param_name": "hide_on_mobile",
                        "value": {
                            "small-visibility": "Small Screen",
                            "medium-visibility": "Medium Screen",
                            "large-visibility": "Large Screen"
                        },
                        "default": ["small-visibility", "medium-visibility", "large-visibility"],
                        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Element Options</a>."
                    },
                    "class": {
                        "type": "textfield",
                        "heading": "CSS Class",
                        "description": "Add a class to the wrapping HTML element.",
                        "param_name": "class",
                        "value": ""
                    },
                    "id": {
                        "type": "textfield",
                        "heading": "CSS ID",
                        "description": "Add an ID to the wrapping HTML element.",
                        "param_name": "id",
                        "value": ""
                    }
                }
            }
        },
        "remove_from_atts": ["multiple_upload", "dimensions"]
    },
    "fusion_slide": {
        "name": "Slide",
        "description": "Enter some content for this textblock.",
        "shortcode": "fusion_slide",
        "option_dependency": "type",
        "hide_from_builder": true,
        "params": {
            "groups": {
                "General": {
                    "element_content": {
                        "type": "textarea",
                        "heading": "Content",
                        "description": "Content",
                        "param_name": "element_content",
                        "value": "",
                        "hidden": true
                    },
                    "type": {
                        "type": "select",
                        "heading": "Slide Type",
                        "description": "Choose a video or image slide.",
                        "param_name": "type",
                        "value": {
                            "image": "Image",
                            "video": "Video"
                        },
                        "default": "image"
                    },
                    "image": {
                        "type": "upload",
                        "heading": "Image",
                        "description": "Upload an image to display.",
                        "param_name": "image",
                        "remove_from_atts": true,
                        "value": "",
                        "dependency": [{
                            "element": "type",
                            "value": "image",
                            "operator": "=="
                        }]
                    },
                    "video": {
                        "type": "textarea",
                        "heading": "Video Element or Video Embed Code",
                        "description": "Click the Youtube or Vimeo Element button below then enter your unique video ID, or copy and paste your video embed code. <p><a href=\"#\" class=\"insert-slider-video\" data-type=\"fusion_youtube\">Add YouTube Video</a></p><p><a href=\"#\" class=\"insert-slider-video\" data-type=\"fusion_vimeo\">Add Vimeo Video</a></p>.",
                        "param_name": "video",
                        "remove_from_atts": true,
                        "value": "",
                        "dependency": [{
                            "element": "type",
                            "value": "video",
                            "operator": "=="
                        }]
                    },
                    "link": {
                        "type": "textfield",
                        "heading": "Full Image Link or External Link",
                        "description": "Add the url of where the image will link to. If lightbox option is enabled, you have to add the full image link to show it in the lightbox.",
                        "param_name": "link",
                        "value": "",
                        "dependency": [{
                            "element": "type",
                            "value": "image",
                            "operator": "=="
                        }]
                    },
                    "lightbox": {
                        "type": "radio_button_set",
                        "heading": "Lighbox",
                        "description": "Show image in lightbox. Lightbox must be enabled in Theme Options or the image will open up in the same tab by itself.  Current value set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#status_lightbox\" target=\"_blank\" rel=\"noopener noreferrer\">Yes</a>.",
                        "param_name": "lightbox",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        },
                        "default": "no",
                        "dependency": [{
                            "element": "type",
                            "value": "image",
                            "operator": "=="
                        }, {
                            "element": "link",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "linktarget": {
                        "type": "radio_button_set",
                        "heading": "Link Target",
                        "description": "_self = open in same window <br />_blank = open in new window.",
                        "param_name": "linktarget",
                        "value": {
                            "_self": "_self",
                            "_blank": "_blank"
                        },
                        "default": "_self",
                        "dependency": [{
                            "element": "type",
                            "value": "image",
                            "operator": "=="
                        }, {
                            "element": "link",
                            "value": "",
                            "operator": "!="
                        }, {
                            "element": "lightbox",
                            "value": "no",
                            "operator": "=="
                        }]
                    }
                }
            }
        },
        "remove_from_atts": ["image", "video"]
    },
    "fusion_social_links": {
        "name": "Social Links",
        "shortcode": "fusion_social_links",
        "icon": "fusiona-link",
        "params": {
            "groups": {
                "General": {
                    "icons_boxed": {
                        "type": "radio_button_set",
                        "heading": "Boxed Social Icons",
                        "description": "Choose to get a boxed icons. Choose default for theme option selection.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#social_links_boxed\" target=\"_blank\" rel=\"noopener noreferrer\">No</a>.",
                        "param_name": "icons_boxed",
                        "value": {
                            "": "Default",
                            "yes": "Yes",
                            "no": "No"
                        },
                        "default": ""
                    },
                    "icons_boxed_radius": {
                        "type": "textfield",
                        "heading": "Social Icon Box Radius",
                        "description": "Choose the radius of the boxed icons. In pixels (px), ex: 1px, or &quot;round&quot;.   Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#social_links_boxed_radius\" target=\"_blank\" rel=\"noopener noreferrer\">4px</a>.",
                        "param_name": "icons_boxed_radius",
                        "value": "",
                        "dependency": [{
                            "element": "icons_boxed",
                            "value": "no",
                            "operator": "!="
                        }, {
                            "element": "icons_boxed",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "color_type": {
                        "type": "radio_button_set",
                        "heading": "Social Icons Color Type",
                        "description": "Choose to get a boxed icons. Choose default for theme option selection.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#social_links_color_type\" target=\"_blank\" rel=\"noopener noreferrer\">Custom Colors</a>.",
                        "param_name": "color_type",
                        "value": {
                            "": "Default",
                            "custom": "Custom Colors",
                            "brand": "Brand Colors"
                        },
                        "default": ""
                    },
                    "icon_colors": {
                        "type": "textarea",
                        "heading": "Social Icon Custom Colors",
                        "description": "Specify the color of social icons.   Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#social_links_icon_color\" target=\"_blank\" rel=\"noopener noreferrer\">#bebdbd</a>.",
                        "param_name": "icon_colors",
                        "value": "",
                        "dependency": [{
                            "element": "color_type",
                            "value": "brand",
                            "operator": "!="
                        }]
                    },
                    "box_colors": {
                        "type": "textarea",
                        "heading": "Social Icon Custom Box Colors",
                        "description": "Specify the box color of social icons.   Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#social_links_box_color\" target=\"_blank\" rel=\"noopener noreferrer\">#e8e8e8</a>.",
                        "param_name": "box_colors",
                        "value": "",
                        "dependency": [{
                            "element": "icons_boxed",
                            "value": "no",
                            "operator": "!="
                        }, {
                            "element": "color_type",
                            "value": "brand",
                            "operator": "!="
                        }, {
                            "element": "icons_boxed",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "tooltip_placement": {
                        "type": "radio_button_set",
                        "heading": "Social Icon Tooltip Position",
                        "description": "Choose the display position for tooltips. Choose default for theme option selection.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#social_links_tooltip_placement\" target=\"_blank\" rel=\"noopener noreferrer\">Top</a>.",
                        "param_name": "tooltip_placement",
                        "value": {
                            "": "Default",
                            "top": "Top",
                            "bottom": "Bottom",
                            "left": "Left",
                            "Right": "Right"
                        },
                        "default": ""
                    },
                    "blogger": {
                        "type": "textfield",
                        "heading": "Blogger Link",
                        "description": "Insert your custom Blogger link.",
                        "param_name": "blogger",
                        "value": ""
                    },
                    "deviantart": {
                        "type": "textfield",
                        "heading": "Deviantart Link",
                        "description": "Insert your custom Deviantart link.",
                        "param_name": "deviantart",
                        "value": ""
                    },
                    "digg": {
                        "type": "textfield",
                        "heading": "Digg Link",
                        "description": "Insert your custom Digg link.",
                        "param_name": "digg",
                        "value": ""
                    },
                    "dribbble": {
                        "type": "textfield",
                        "heading": "Dribbble Link",
                        "description": "Insert your custom Dribbble link.",
                        "param_name": "dribbble",
                        "value": ""
                    },
                    "dropbox": {
                        "type": "textfield",
                        "heading": "Dropbox Link",
                        "description": "Insert your custom Dropbox link.",
                        "param_name": "dropbox",
                        "value": ""
                    },
                    "facebook": {
                        "type": "textfield",
                        "heading": "Facebook Link",
                        "description": "Insert your custom Facebook link.",
                        "param_name": "facebook",
                        "value": ""
                    },
                    "flickr": {
                        "type": "textfield",
                        "heading": "Flickr Link",
                        "description": "Insert your custom Flickr link.",
                        "param_name": "flickr",
                        "value": ""
                    },
                    "forrst": {
                        "type": "textfield",
                        "heading": "Forrst Link",
                        "description": "Insert your custom Forrst link.",
                        "param_name": "forrst",
                        "value": ""
                    },
                    "googleplus": {
                        "type": "textfield",
                        "heading": "Google+ Link",
                        "description": "Insert your custom Google+ link.",
                        "param_name": "googleplus",
                        "value": ""
                    },
                    "instagram": {
                        "type": "textfield",
                        "heading": "Instagram Link",
                        "description": "Insert your custom Instagram link.",
                        "param_name": "instagram",
                        "value": ""
                    },
                    "linkedin": {
                        "type": "textfield",
                        "heading": "LinkedIn Link",
                        "description": "Insert your custom LinkedIn link.",
                        "param_name": "linkedin",
                        "value": ""
                    },
                    "myspace": {
                        "type": "textfield",
                        "heading": "Myspace Link",
                        "description": "Insert your custom Myspace link.",
                        "param_name": "myspace",
                        "value": ""
                    },
                    "paypal": {
                        "type": "textfield",
                        "heading": "PayPal Link",
                        "description": "Insert your custom PayPal link.",
                        "param_name": "paypal",
                        "value": ""
                    },
                    "pinterest": {
                        "type": "textfield",
                        "heading": "Pinterest Link",
                        "description": "Insert your custom Pinterest link.",
                        "param_name": "pinterest",
                        "value": ""
                    },
                    "reddit": {
                        "type": "textfield",
                        "heading": "Reddit Link",
                        "description": "Insert your custom Reddit link.",
                        "param_name": "reddit",
                        "value": ""
                    },
                    "rss": {
                        "type": "textfield",
                        "heading": "RSS Link",
                        "description": "Insert your custom RSS link.",
                        "param_name": "rss",
                        "value": ""
                    },
                    "skype": {
                        "type": "textfield",
                        "heading": "Skype Link",
                        "description": "Insert your custom Skype link.",
                        "param_name": "skype",
                        "value": ""
                    },
                    "soundcloud": {
                        "type": "textfield",
                        "heading": "SoundCloud Link",
                        "description": "Insert your custom SoundCloud link.",
                        "param_name": "soundcloud",
                        "value": ""
                    },
                    "spotify": {
                        "type": "textfield",
                        "heading": "Spotify Link",
                        "description": "Insert your custom Spotify link.",
                        "param_name": "spotify",
                        "value": ""
                    },
                    "tumblr": {
                        "type": "textfield",
                        "heading": "Tumblr Link",
                        "description": "Insert your custom Tumblr link.",
                        "param_name": "tumblr",
                        "value": ""
                    },
                    "twitter": {
                        "type": "textfield",
                        "heading": "Twitter Link",
                        "description": "Insert your custom Twitter link.",
                        "param_name": "twitter",
                        "value": ""
                    },
                    "vimeo": {
                        "type": "textfield",
                        "heading": "Vimeo Link",
                        "description": "Insert your custom Vimeo link.",
                        "param_name": "vimeo",
                        "value": ""
                    },
                    "vk": {
                        "type": "textfield",
                        "heading": "VK Link",
                        "description": "Insert your custom VK link.",
                        "param_name": "vk",
                        "value": ""
                    },
                    "xing": {
                        "type": "textfield",
                        "heading": "Xing Link",
                        "description": "Insert your custom Xing link.",
                        "param_name": "xing",
                        "value": ""
                    },
                    "yahoo": {
                        "type": "textfield",
                        "heading": "Yahoo Link",
                        "description": "Insert your custom Yahoo link.",
                        "param_name": "yahoo",
                        "value": ""
                    },
                    "yelp": {
                        "type": "textfield",
                        "heading": "Yelp Link",
                        "description": "Insert your custom Yelp link.",
                        "param_name": "yelp",
                        "value": ""
                    },
                    "youtube": {
                        "type": "textfield",
                        "heading": "Youtube Link",
                        "description": "Insert your custom Youtube link.",
                        "param_name": "youtube",
                        "value": ""
                    },
                    "email": {
                        "type": "textfield",
                        "heading": "Email Address",
                        "description": "Insert an email address to display the email icon.",
                        "param_name": "email",
                        "value": ""
                    },
                    "show_custom": {
                        "type": "radio_button_set",
                        "heading": "Show Custom Social Icon",
                        "description": "Show the custom social icon specified in Theme Options.",
                        "param_name": "show_custom",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        },
                        "default": "no"
                    },
                    "alignment": {
                        "type": "radio_button_set",
                        "heading": "Alignment",
                        "description": "Select the icon&#039;s alignment.",
                        "param_name": "alignment",
                        "value": {
                            "": "Text Flow",
                            "left": "Left",
                            "center": "Center",
                            "right": "Right"
                        },
                        "default": ""
                    },
                    "hide_on_mobile": {
                        "type": "checkbox_button_set",
                        "heading": "Element Visibility",
                        "param_name": "hide_on_mobile",
                        "value": {
                            "small-visibility": "Small Screen",
                            "medium-visibility": "Medium Screen",
                            "large-visibility": "Large Screen"
                        },
                        "default": ["small-visibility", "medium-visibility", "large-visibility"],
                        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Element Options</a>."
                    },
                    "class": {
                        "type": "textfield",
                        "heading": "CSS Class",
                        "param_name": "class",
                        "value": "",
                        "description": "Add a class to the wrapping HTML element."
                    },
                    "id": {
                        "type": "textfield",
                        "heading": "CSS ID",
                        "param_name": "id",
                        "value": "",
                        "description": "Add an ID to the wrapping HTML element."
                    }
                }
            }
        },
        "remove_from_atts": []
    },
    "fusion_soundcloud": {
        "name": "Soundcloud",
        "shortcode": "fusion_soundcloud",
        "icon": "fusiona-soundcloud",
        "preview": "C:/xamppp/htdocs/wp_avada542/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-soundcloud-preview.php",
        "preview_id": "fusion-builder-block-module-soundcloud-preview-template",
        "params": {
            "groups": {
                "General": {
                    "url": {
                        "type": "textfield",
                        "heading": "SoundCloud Url",
                        "description": "The SoundCloud url, ex: https://soundcloud.com/zaaali/miles-davis-kind-of-blue-26-03.",
                        "param_name": "url",
                        "value": ""
                    },
                    "layout": {
                        "type": "radio_button_set",
                        "heading": "Layout",
                        "description": "Choose the layout of the soundcloud embed.",
                        "param_name": "layout",
                        "value": {
                            "classic": "Classic",
                            "visual": "Visual"
                        },
                        "default": "classic"
                    },
                    "comments": {
                        "type": "radio_button_set",
                        "heading": "Show Comments",
                        "description": "Choose to display comments.",
                        "param_name": "comments",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        },
                        "default": "yes"
                    },
                    "show_related": {
                        "type": "radio_button_set",
                        "heading": "Show Related",
                        "description": "Choose to display related items.",
                        "param_name": "show_related",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        },
                        "default": "no"
                    },
                    "show_user": {
                        "type": "radio_button_set",
                        "heading": "Show User",
                        "description": "Choose to display the user who posted the item.",
                        "param_name": "show_user",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        },
                        "default": "yes"
                    },
                    "auto_play": {
                        "type": "radio_button_set",
                        "heading": "Autoplay",
                        "description": "Choose to autoplay the track.",
                        "param_name": "auto_play",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        },
                        "default": "no"
                    },
                    "color": {
                        "type": "colorpicker",
                        "heading": "Color",
                        "description": "Select the color of the element.",
                        "param_name": "color",
                        "value": "#ff7700"
                    },
                    "dimensions": {
                        "type": "dimension",
                        "remove_from_atts": true,
                        "heading": "Dimensions",
                        "description": "In pixels (px) or percentage (%).",
                        "param_name": "dimensions",
                        "value": {
                            "width": "100%",
                            "height": "150px"
                        }
                    },
                    "hide_on_mobile": {
                        "type": "checkbox_button_set",
                        "heading": "Element Visibility",
                        "param_name": "hide_on_mobile",
                        "value": {
                            "small-visibility": "Small Screen",
                            "medium-visibility": "Medium Screen",
                            "large-visibility": "Large Screen"
                        },
                        "default": ["small-visibility", "medium-visibility", "large-visibility"],
                        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Element Options</a>."
                    },
                    "class": {
                        "type": "textfield",
                        "heading": "CSS Class",
                        "description": "Add a class to the wrapping HTML element.",
                        "param_name": "class",
                        "value": "",
                        "group": "General"
                    },
                    "id": {
                        "type": "textfield",
                        "heading": "CSS ID",
                        "description": "Add an ID to the wrapping HTML element.",
                        "param_name": "id",
                        "value": "",
                        "group": "General"
                    }
                }
            }
        },
        "remove_from_atts": ["dimensions"]
    },
    "fusion_table": {
        "name": "Table",
        "shortcode": "fusion_table",
        "icon": "fusiona-table",
        "allow_generator": true,
        "admin_enqueue_js": "http://127.0.0.1/wp_avada542/wp-content/plugins/fusion-builder/shortcodes/js/fusion-table.js",
        "params": {
            "groups": {
                "General": {
                    "fusion_table_type": {
                        "type": "select",
                        "heading": "Type",
                        "description": "Select the table style.",
                        "param_name": "fusion_table_type",
                        "value": {
                            "1": "Style 1",
                            "2": "Style 2"
                        },
                        "default": "1",
                        "remove_from_atts": true
                    },
                    "fusion_table_columns": {
                        "type": "select",
                        "heading": "Number of Columns",
                        "description": "Select how many columns to display.",
                        "param_name": "fusion_table_columns",
                        "value": {
                            "1": "1 Column",
                            "2": "2 Column",
                            "3": "3 Column",
                            "4": "4 Column",
                            "5": "5 Column",
                            "": "Select Columns"
                        },
                        "default": "",
                        "remove_from_atts": true
                    },
                    "element_content": {
                        "type": "tinymce",
                        "heading": "Table",
                        "description": "Table content will appear here.",
                        "param_name": "element_content",
                        "value": ""
                    }
                }
            }
        },
        "remove_from_atts": ["fusion_table_type", "fusion_table_columns"]
    },
    "fusion_tabs": {
        "name": "Tabs",
        "shortcode": "fusion_tabs",
        "multi": "multi_element_parent",
        "element_child": "fusion_tab",
        "icon": "fusiona-folder",
        "preview": "C:/xamppp/htdocs/wp_avada542/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-tabs-preview.php",
        "preview_id": "fusion-builder-block-module-tabs-preview-template",
        "params": {
            "groups": {
                "General": {
                    "element_content": {
                        "type": "tinymce",
                        "heading": "Content",
                        "description": "Enter some content for this contentbox.",
                        "param_name": "element_content",
                        "value": "[fusion_tab title=\"Your Content Goes Here\" icon=\"\"]Your Content Goes Here[/fusion_tab]"
                    },
                    "design": {
                        "type": "radio_button_set",
                        "heading": "Design",
                        "description": "Choose a design for the element.",
                        "param_name": "design",
                        "value": {
                            "classic": "Classic",
                            "clean": "Clean"
                        },
                        "default": "classic"
                    },
                    "layout": {
                        "type": "radio_button_set",
                        "heading": "Layout",
                        "description": "Choose the layout of the element.",
                        "param_name": "layout",
                        "value": {
                            "horizontal": "Horizontal",
                            "vertical": "Vertical"
                        },
                        "default": "horizontal"
                    },
                    "justified": {
                        "type": "radio_button_set",
                        "heading": "Justify Tabs",
                        "description": "Choose to get tabs stretched over full element width.",
                        "param_name": "justified",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        },
                        "default": "yes",
                        "dependency": [{
                            "element": "layout",
                            "value": "horizontal",
                            "operator": "=="
                        }]
                    },
                    "backgroundcolor": {
                        "type": "colorpickeralpha",
                        "heading": "Background Color",
                        "description": "Controls the background tab color.   Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#tabs_bg_color\" target=\"_blank\" rel=\"noopener noreferrer\">#ffffff</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-backgroundcolor\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"backgroundcolor\" value=\"\" data-default=\"#ffffff\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "backgroundcolor",
                        "value": "",
                        "default": "#ffffff"
                    },
                    "inactivecolor": {
                        "type": "colorpickeralpha",
                        "heading": "Inactive Color",
                        "description": "Controls the inactive tab color.   Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#tabs_inactive_color\" target=\"_blank\" rel=\"noopener noreferrer\">#ebeaea</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-inactivecolor\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"inactivecolor\" value=\"\" data-default=\"#ebeaea\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "inactivecolor",
                        "value": "",
                        "default": "#ebeaea"
                    },
                    "bordercolor": {
                        "type": "colorpickeralpha",
                        "heading": "Border Color",
                        "description": "Controls the color of the outer tab border.   Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#tabs_border_color\" target=\"_blank\" rel=\"noopener noreferrer\">#ebeaea</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-bordercolor\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"bordercolor\" value=\"\" data-default=\"#ebeaea\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "bordercolor",
                        "value": "",
                        "default": "#ebeaea"
                    },
                    "icon": {
                        "type": "iconpicker",
                        "heading": "Icon",
                        "param_name": "icon",
                        "value": "",
                        "description": "Global setting for all tabs, this can be overridden individually. Click an icon to select, click again to deselect."
                    },
                    "icon_position": {
                        "heading": "Icon Position",
                        "description": "Choose the position of the icon on the tab. Icons are selected in each child tab element on the left side and do not have to be used.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#tabs_icon_position\" target=\"_blank\" rel=\"noopener noreferrer\">Left</a>.",
                        "param_name": "icon_position",
                        "default": "",
                        "type": "radio_button_set",
                        "value": {
                            "": "Default",
                            "left": "Left",
                            "right": "Right",
                            "top": "Top"
                        }
                    },
                    "icon_size": {
                        "heading": "Tabs Icon Size",
                        "description": "Set the size of the icon. In pixels (px), ex: 13px. Icons are selected in each child tab element on the left side and do not have to be used.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#tabs_icon_size\" target=\"_blank\" rel=\"noopener noreferrer\">13</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-icon_size\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"icon_size\" value=\"\" data-default=\"13\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "icon_size",
                        "default": "13",
                        "min": "1",
                        "max": "150",
                        "step": "1",
                        "type": "range"
                    },
                    "hide_on_mobile": {
                        "type": "checkbox_button_set",
                        "heading": "Element Visibility",
                        "param_name": "hide_on_mobile",
                        "value": {
                            "small-visibility": "Small Screen",
                            "medium-visibility": "Medium Screen",
                            "large-visibility": "Large Screen"
                        },
                        "default": ["small-visibility", "medium-visibility", "large-visibility"],
                        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Element Options</a>."
                    },
                    "class": {
                        "type": "textfield",
                        "heading": "CSS Class",
                        "description": "Add a class to the wrapping HTML element.",
                        "param_name": "class",
                        "value": "",
                        "group": "General"
                    },
                    "id": {
                        "type": "textfield",
                        "heading": "CSS ID",
                        "description": "Add an ID to the wrapping HTML element.",
                        "param_name": "id",
                        "value": "",
                        "group": "General"
                    }
                }
            }
        },
        "remove_from_atts": []
    },
    "fusion_tab": {
        "name": "Tab",
        "shortcode": "fusion_tab",
        "hide_from_builder": true,
        "allow_generator": true,
        "params": {
            "groups": {
                "General": {
                    "title": {
                        "type": "textfield",
                        "heading": "Tab Title",
                        "description": "Title of the tab.",
                        "param_name": "title",
                        "value": "Your Content Goes Here",
                        "placeholder": true
                    },
                    "icon": {
                        "type": "iconpicker",
                        "heading": "Icon",
                        "param_name": "icon",
                        "value": "",
                        "description": "Click an icon to select, click again to deselect."
                    },
                    "element_content": {
                        "type": "tinymce",
                        "heading": "Tab Content",
                        "description": "Add content for the tab.",
                        "param_name": "element_content",
                        "value": "Your Content Goes Here",
                        "placeholder": true
                    }
                }
            }
        },
        "remove_from_atts": []
    },
    "fusion_tagline_box": {
        "name": "Tagline Box",
        "shortcode": "fusion_tagline_box",
        "icon": "fusiona-list-alt",
        "preview": "C:/xamppp/htdocs/wp_avada542/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-tagline-preview.php",
        "preview_id": "fusion-builder-block-module-tagline-preview-template",
        "allow_generator": true,
        "params": {
            "groups": {
                "General": {
                    "backgroundcolor": {
                        "type": "colorpickeralpha",
                        "heading": "Background Color",
                        "description": "Controls the background color.   Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#tagline_bg\" target=\"_blank\" rel=\"noopener noreferrer\">#f6f6f6</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-backgroundcolor\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"backgroundcolor\" value=\"\" data-default=\"#f6f6f6\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "backgroundcolor",
                        "value": "",
                        "default": "#f6f6f6"
                    },
                    "shadow": {
                        "type": "radio_button_set",
                        "heading": "Shadow",
                        "description": "Show the shadow below the box.",
                        "param_name": "shadow",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        },
                        "default": "no"
                    },
                    "shadowopacity": {
                        "type": "select",
                        "heading": "Shadow Opacity",
                        "description": "Choose the opacity of the shadow.",
                        "param_name": "shadowopacity",
                        "value": {
                            "1": "1",
                            "0.1": "0.1",
                            "0.2": "0.2",
                            "0.3": "0.3",
                            "0.4": "0.4",
                            "0.5": "0.5",
                            "0.6": "0.6",
                            "0.7": "0.7",
                            "0.8": "0.8",
                            "0.9": "0.9"
                        },
                        "default": "0.7",
                        "dependency": [{
                            "element": "shadow",
                            "value": "yes",
                            "operator": "=="
                        }]
                    },
                    "border": {
                        "type": "range",
                        "heading": "Border Size",
                        "param_name": "border",
                        "description": "In pixels.",
                        "min": "0",
                        "max": "20",
                        "value": "1"
                    },
                    "bordercolor": {
                        "type": "colorpickeralpha",
                        "heading": "Border Color",
                        "description": "Controls the border color.   Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#tagline_border_color\" target=\"_blank\" rel=\"noopener noreferrer\">#f6f6f6</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-bordercolor\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"bordercolor\" value=\"\" data-default=\"#f6f6f6\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "bordercolor",
                        "value": "",
                        "default": "#f6f6f6",
                        "dependency": [{
                            "element": "border",
                            "value": "0",
                            "operator": "!="
                        }]
                    },
                    "highlightposition": {
                        "type": "radio_button_set",
                        "heading": "Highlight Border Position",
                        "description": "Choose the position of the highlight. This border highlight is from theme options primary color and does not take the color from border color above.",
                        "param_name": "highlightposition",
                        "value": {
                            "top": "Top",
                            "bottom": "Bottom",
                            "left": "Left",
                            "right": "Right",
                            "none": "None"
                        },
                        "default": "left"
                    },
                    "content_alignment": {
                        "type": "radio_button_set",
                        "heading": "Content Alignment",
                        "description": "Choose how the content should be displayed.",
                        "param_name": "content_alignment",
                        "value": {
                            "left": "Left",
                            "center": "Center",
                            "right": "Right"
                        },
                        "default": "left"
                    },
                    "link": {
                        "type": "link_selector",
                        "heading": "Button Link",
                        "description": "The url the button will link to.",
                        "param_name": "link",
                        "value": ""
                    },
                    "button": {
                        "type": "textfield",
                        "heading": "Button Text",
                        "description": "Insert the text that will display in the button.",
                        "param_name": "button",
                        "value": "",
                        "dependency": [{
                            "element": "link",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "linktarget": {
                        "type": "radio_button_set",
                        "heading": "Link Target",
                        "description": "_self = open in same window <br />_blank = open in new window.",
                        "param_name": "linktarget",
                        "value": {
                            "_self": "_self",
                            "_blank": "_blank"
                        },
                        "default": "_self",
                        "dependency": [{
                            "element": "link",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "modal": {
                        "type": "textfield",
                        "heading": "Modal Window Anchor",
                        "description": "Add the class name of the modal window you want to open on button click.",
                        "param_name": "modal",
                        "value": "",
                        "dependency": [{
                            "element": "link",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "button_size": {
                        "type": "radio_button_set",
                        "heading": "Button Size",
                        "description": "Select the button&#039;s size. Choose default for theme option selection.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#button_size\" target=\"_blank\" rel=\"noopener noreferrer\">Large</a>.",
                        "param_name": "button_size",
                        "value": {
                            "": "Default",
                            "small": "Small",
                            "medium": "Medium",
                            "large": "Large",
                            "xlarge": "XLarge"
                        },
                        "default": "",
                        "dependency": [{
                            "element": "link",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "button_type": {
                        "type": "radio_button_set",
                        "heading": "Button Type",
                        "description": "Select the button&#039;s type. Choose default for theme option selection.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#button_type\" target=\"_blank\" rel=\"noopener noreferrer\">Flat</a>.",
                        "param_name": "button_type",
                        "value": {
                            "": "Default",
                            "flat": "Flat",
                            "3d": "3D"
                        },
                        "default": "",
                        "dependency": [{
                            "element": "link",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "button_shape": {
                        "type": "radio_button_set",
                        "heading": "Button Shape",
                        "description": "Select the button&#039;s shape. Choose default for theme option selection.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#button_shape\" target=\"_blank\" rel=\"noopener noreferrer\">Square</a>.",
                        "param_name": "button_shape",
                        "value": {
                            "": "Default",
                            "square": "Square",
                            "pill": "Pill",
                            "round": "Round"
                        },
                        "default": "",
                        "dependency": [{
                            "element": "link",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "buttoncolor": {
                        "type": "select",
                        "heading": "Button Color",
                        "description": "Choose the button color. Default uses theme option selection.",
                        "param_name": "buttoncolor",
                        "value": {
                            "default": "Default",
                            "green": "Green",
                            "darkgreen": "Dark Green",
                            "orange": "Orange",
                            "blue": "Blue",
                            "red": "Red",
                            "pink": "Pink",
                            "darkgray": "Dark Gray",
                            "lightgray": "Light Gray"
                        },
                        "default": "default",
                        "dependency": [{
                            "element": "link",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "title": {
                        "type": "textarea",
                        "heading": "Tagline Title",
                        "description": "Insert the title text.",
                        "param_name": "title",
                        "value": "Your Content Goes Here",
                        "placeholder": true
                    },
                    "description": {
                        "type": "raw_textarea",
                        "heading": "Tagline Description",
                        "description": "Insert the description text.",
                        "param_name": "description",
                        "value": "Your Content Goes Here",
                        "placeholder": true
                    },
                    "element_content": {
                        "type": "tinymce",
                        "heading": "Additional Content",
                        "description": "This is additional content you can add to the tagline box. This will show below the title and description if one is used.",
                        "param_name": "element_content",
                        "value": "Your Content Goes Here",
                        "placeholder": true
                    },
                    "dimensions": {
                        "type": "dimension",
                        "remove_from_atts": true,
                        "heading": "Margin",
                        "description": "Spacing above and below the tagline. In px, em or %, e.g. 10px.",
                        "param_name": "dimensions",
                        "value": {
                            "margin_top": "",
                            "margin_bottom": ""
                        }
                    },
                    "hide_on_mobile": {
                        "type": "checkbox_button_set",
                        "heading": "Element Visibility",
                        "param_name": "hide_on_mobile",
                        "value": {
                            "small-visibility": "Small Screen",
                            "medium-visibility": "Medium Screen",
                            "large-visibility": "Large Screen"
                        },
                        "default": ["small-visibility", "medium-visibility", "large-visibility"],
                        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Element Options</a>."
                    },
                    "class": {
                        "type": "textfield",
                        "heading": "CSS Class",
                        "param_name": "class",
                        "value": "",
                        "description": "Add a class to the wrapping HTML element."
                    },
                    "id": {
                        "type": "textfield",
                        "heading": "CSS ID",
                        "param_name": "id",
                        "value": "",
                        "description": "Add an ID to the wrapping HTML element."
                    }
                },
                "Animation": {
                    "animation_type": {
                        "type": "select",
                        "heading": "Animation Type",
                        "description": "Select the type of animation to use on the element.",
                        "param_name": "animation_type",
                        "value": {
                            "": "None",
                            "bounce": "Bounce",
                            "fade": "Fade",
                            "flash": "Flash",
                            "rubberBand": "Rubberband",
                            "shake": "Shake",
                            "slide": "Slide",
                            "zoom": "Zoom"
                        },
                        "default": "",
                        "group": "Animation"
                    },
                    "animation_direction": {
                        "type": "radio_button_set",
                        "heading": "Direction of Animation",
                        "description": "Select the incoming direction for the animation.",
                        "param_name": "animation_direction",
                        "value": {
                            "down": "Top",
                            "right": "Right",
                            "up": "Bottom",
                            "left": "Left",
                            "static": "Static"
                        },
                        "default": "left",
                        "group": "Animation",
                        "dependency": [{
                            "element": "animation_type",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "animation_speed": {
                        "type": "select",
                        "heading": "Speed of Animation",
                        "description": "Type in speed of animation in seconds (0.1 - 1).",
                        "param_name": "animation_speed",
                        "value": {
                            "1": "1",
                            "0.1": "0.1",
                            "0.2": "0.2",
                            "0.3": "0.3",
                            "0.4": "0.4",
                            "0.5": "0.5",
                            "0.6": "0.6",
                            "0.7": "0.7",
                            "0.8": "0.8",
                            "0.9": "0.9"
                        },
                        "default": "0.3",
                        "group": "Animation",
                        "dependency": [{
                            "element": "animation_type",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "animation_offset": {
                        "type": "select",
                        "heading": "Offset of Animation",
                        "description": "Controls when the animation should start.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#animation_offset\" target=\"_blank\" rel=\"noopener noreferrer\">Top Of Element Hits Bottom Of Viewport</a>.",
                        "param_name": "animation_offset",
                        "value": {
                            "": "Default",
                            "top-into-view": "Top of element hits bottom of viewport",
                            "top-mid-of-view": "Top of element hits middle of viewport",
                            "bottom-in-view": "Bottom of element enters viewport"
                        },
                        "default": "",
                        "group": "Animation",
                        "dependency": [{
                            "element": "animation_type",
                            "value": "",
                            "operator": "!="
                        }]
                    }
                }
            }
        },
        "remove_from_atts": ["dimensions"]
    },
    "fusion_testimonials": {
        "name": "Testimonials",
        "shortcode": "fusion_testimonials",
        "multi": "multi_element_parent",
        "element_child": "fusion_testimonial",
        "icon": "fusiona-bubbles",
        "preview": "C:/xamppp/htdocs/wp_avada542/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-testimonials-preview.php",
        "preview_id": "fusion-builder-block-module-testimonials-preview-template",
        "params": {
            "groups": {
                "General": {
                    "element_content": {
                        "type": "tinymce",
                        "heading": "Content",
                        "description": "Enter some content for this contentbox.",
                        "param_name": "element_content",
                        "value": "[fusion_testimonial name=\"Your Content Goes Here\" avatar=\"male\" image=\"\" image_border_radius=\"\" company=\"Your Content Goes Here\" link=\"\" target=\"_self\"]Your Content Goes Here[/fusion_testimonial]"
                    },
                    "design": {
                        "type": "radio_button_set",
                        "heading": "Design",
                        "description": "Choose a design for the element.",
                        "param_name": "design",
                        "value": {
                            "classic": "Classic",
                            "clean": "Clean"
                        },
                        "default": "classic"
                    },
                    "backgroundcolor": {
                        "type": "colorpickeralpha",
                        "heading": "Background Color",
                        "description": "Controls the background color.   Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#testimonial_bg_color\" target=\"_blank\" rel=\"noopener noreferrer\">#f6f6f6</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-backgroundcolor\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"backgroundcolor\" value=\"\" data-default=\"#f6f6f6\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "backgroundcolor",
                        "value": "",
                        "default": "#f6f6f6"
                    },
                    "textcolor": {
                        "type": "colorpicker",
                        "heading": "Text Color",
                        "description": "Controls the text color.   Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#testimonial_text_color\" target=\"_blank\" rel=\"noopener noreferrer\">#747474</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-textcolor\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"textcolor\" value=\"\" data-default=\"#747474\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "textcolor",
                        "value": "",
                        "default": "#747474"
                    },
                    "random": {
                        "type": "radio_button_set",
                        "heading": "Random Order",
                        "description": "Turn on to display testimonials in a random order.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#testimonials_random\" target=\"_blank\" rel=\"noopener noreferrer\">No</a>.",
                        "param_name": "random",
                        "value": {
                            "": "Default",
                            "yes": "Yes",
                            "no": "No"
                        },
                        "default": ""
                    },
                    "hide_on_mobile": {
                        "type": "checkbox_button_set",
                        "heading": "Element Visibility",
                        "param_name": "hide_on_mobile",
                        "value": {
                            "small-visibility": "Small Screen",
                            "medium-visibility": "Medium Screen",
                            "large-visibility": "Large Screen"
                        },
                        "default": ["small-visibility", "medium-visibility", "large-visibility"],
                        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Element Options</a>."
                    },
                    "class": {
                        "type": "textfield",
                        "heading": "CSS Class",
                        "description": "Add a class to the wrapping HTML element.",
                        "param_name": "class",
                        "value": "",
                        "group": "General"
                    },
                    "id": {
                        "type": "textfield",
                        "heading": "CSS ID",
                        "description": "Add an ID to the wrapping HTML element.",
                        "param_name": "id",
                        "value": "",
                        "group": "General"
                    }
                }
            }
        },
        "remove_from_atts": []
    },
    "fusion_testimonial": {
        "name": "Testimonial",
        "shortcode": "fusion_testimonial",
        "hide_from_builder": true,
        "allow_generator": true,
        "params": {
            "groups": {
                "General": {
                    "name": {
                        "type": "textfield",
                        "heading": "Name",
                        "description": "Insert the name of the person.",
                        "param_name": "name",
                        "value": "Your Content Goes Here",
                        "placeholder": true
                    },
                    "avatar": {
                        "type": "radio_button_set",
                        "heading": "Avatar",
                        "description": "Choose which kind of Avatar to be displayed.",
                        "param_name": "avatar",
                        "value": {
                            "male": "Male",
                            "female": "Female",
                            "image": "Image",
                            "none": "None"
                        },
                        "default": "male"
                    },
                    "image": {
                        "type": "upload",
                        "heading": "Custom Avatar",
                        "description": "Upload a custom avatar image.",
                        "param_name": "image",
                        "value": "",
                        "dependency": [{
                            "element": "avatar",
                            "value": "image",
                            "operator": "=="
                        }]
                    },
                    "image_border_radius": {
                        "type": "textfield",
                        "heading": "Border Radius",
                        "description": "Choose the radius of the testimonial image. In pixels (px), ex: 1px, or &quot;round&quot;. ",
                        "param_name": "image_border_radius",
                        "value": "",
                        "dependency": [{
                            "element": "avatar",
                            "value": "image",
                            "operator": "=="
                        }]
                    },
                    "company": {
                        "type": "textfield",
                        "heading": "Company",
                        "description": "Insert the name of the company.",
                        "param_name": "company",
                        "value": "Your Content Goes Here",
                        "placeholder": true
                    },
                    "link": {
                        "type": "link_selector",
                        "heading": "Link",
                        "description": "Add the url the company name will link to.",
                        "param_name": "link",
                        "value": ""
                    },
                    "target": {
                        "type": "radio_button_set",
                        "heading": "Link Target",
                        "description": "_self = open in same window <br />_blank = open in new window.",
                        "param_name": "target",
                        "value": {
                            "_self": "_self",
                            "_blank": "_blank"
                        },
                        "default": "_self",
                        "dependency": [{
                            "element": "link",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "element_content": {
                        "type": "tinymce",
                        "heading": "Testimonial Content",
                        "description": "Add the testimonial content.",
                        "param_name": "element_content",
                        "value": "Your Content Goes Here",
                        "placeholder": true
                    }
                }
            }
        },
        "remove_from_atts": []
    },
    "fusion_text": {
        "name": "Text Block",
        "shortcode": "fusion_text",
        "icon": "fusiona-font",
        "preview": "C:/xamppp/htdocs/wp_avada542/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-text-preview.php",
        "preview_id": "fusion-builder-block-module-text-preview-template",
        "allow_generator": true,
        "params": {
            "groups": {
                "General": {
                    "element_content": {
                        "type": "tinymce",
                        "heading": "Content",
                        "description": "Enter some content for this textblock.",
                        "param_name": "element_content",
                        "value": "Click edit button to change this text.",
                        "placeholder": true
                    }
                }
            }
        },
        "remove_from_atts": []
    },
    "fusion_title": {
        "name": "Title",
        "shortcode": "fusion_title",
        "icon": "fusiona-H",
        "preview": "C:/xamppp/htdocs/wp_avada542/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-title-preview.php",
        "preview_id": "fusion-builder-block-module-title-preview-template",
        "allow_generator": true,
        "params": {
            "groups": {
                "General": {
                    "element_content": {
                        "type": "tinymce",
                        "heading": "Title",
                        "description": "Insert the title text.",
                        "param_name": "element_content",
                        "value": "Your Content Goes Here",
                        "placeholder": true
                    },
                    "dimensions": {
                        "type": "dimension",
                        "remove_from_atts": true,
                        "heading": "Margin",
                        "param_name": "dimensions",
                        "value": {
                            "margin_top": "",
                            "margin_bottom": ""
                        },
                        "description": "Spacing above and below the title. In px, em or %, e.g. 10px.  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#title_margin\" target=\"_blank\" rel=\"noopener noreferrer\">0px, 31px</a>."
                    },
                    "hide_on_mobile": {
                        "type": "checkbox_button_set",
                        "heading": "Element Visibility",
                        "param_name": "hide_on_mobile",
                        "value": {
                            "small-visibility": "Small Screen",
                            "medium-visibility": "Medium Screen",
                            "large-visibility": "Large Screen"
                        },
                        "default": ["small-visibility", "medium-visibility", "large-visibility"],
                        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Element Options</a>."
                    },
                    "class": {
                        "type": "textfield",
                        "heading": "CSS Class",
                        "param_name": "class",
                        "value": "",
                        "description": "Add a class to the wrapping HTML element."
                    },
                    "id": {
                        "type": "textfield",
                        "heading": "CSS ID",
                        "param_name": "id",
                        "value": "",
                        "description": "Add an ID to the wrapping HTML element."
                    }
                },
                "Design Options": {
                    "size": {
                        "type": "radio_button_set",
                        "heading": "Size",
                        "description": "Choose the title size, H1-H6.",
                        "param_name": "size",
                        "value": {
                            "1": "H1",
                            "2": "H2",
                            "3": "H3",
                            "4": "H4",
                            "5": "H5",
                            "6": "H6"
                        },
                        "default": "1",
                        "group": "Design Options"
                    },
                    "content_align": {
                        "type": "radio_button_set",
                        "heading": "Title Alignment",
                        "description": "Choose to align the heading left or right.",
                        "param_name": "content_align",
                        "value": {
                            "left": "Left",
                            "center": "Center",
                            "right": "Right"
                        },
                        "default": "left",
                        "group": "Design Options"
                    },
                    "style_type": {
                        "type": "select",
                        "heading": "Separator",
                        "description": "Choose the kind of the title separator you want to use.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#title_style_type\" target=\"_blank\" rel=\"noopener noreferrer\">Double</a>.",
                        "param_name": "style_type",
                        "value": {
                            "default": "Default",
                            "single solid": "Single Solid",
                            "single dashed": "Single Dashed",
                            "single dotted": "Single Dotted",
                            "double solid": "Double Solid",
                            "double dashed": "Double Dashed",
                            "double dotted": "Double Dotted",
                            "underline solid": "Underline Solid",
                            "underline dashed": "Underline Dashed",
                            "underline dotted": "Underline Dotted",
                            "none": "None"
                        },
                        "default": "default",
                        "group": "Design Options"
                    },
                    "sep_color": {
                        "type": "colorpickeralpha",
                        "heading": "Separator Color",
                        "param_name": "sep_color",
                        "value": "",
                        "description": "Controls the separator color.   Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#title_border_color\" target=\"_blank\" rel=\"noopener noreferrer\">#e0dede</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-sep_color\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"sep_color\" value=\"\" data-default=\"#e0dede\">Reset to default.</a><span>Using default value.</span></span>",
                        "group": "Design Options",
                        "dependency": [{
                            "element": "style_type",
                            "value": "none",
                            "operator": "!="
                        }],
                        "default": "#e0dede"
                    }
                }
            }
        },
        "remove_from_atts": ["dimensions"]
    },
    "fusion_accordion": {
        "name": "Toggles",
        "shortcode": "fusion_accordion",
        "multi": "multi_element_parent",
        "element_child": "fusion_toggle",
        "icon": "fusiona-expand-alt",
        "preview": "C:/xamppp/htdocs/wp_avada542/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-toggles-preview.php",
        "preview_id": "fusion-builder-block-module-toggles-preview-template",
        "params": {
            "groups": {
                "General": {
                    "element_content": {
                        "type": "tinymce",
                        "heading": "Content",
                        "description": "Enter some content for this contentbox.",
                        "param_name": "element_content",
                        "value": "[fusion_toggle title=\"Your Content Goes Here\" open=\"no\" ]Your Content Goes Here[/fusion_toggle]"
                    },
                    "type": {
                        "type": "radio_button_set",
                        "heading": "Toggles or Accordions",
                        "description": "Toggles allow several items to be open at a time. Accordions only allow one item to be open at a time.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#accordion_type\" target=\"_blank\" rel=\"noopener noreferrer\">Accordions</a>.",
                        "param_name": "type",
                        "value": {
                            "": "Default",
                            "toggles": "Toggles",
                            "accordions": "Accordions"
                        },
                        "default": ""
                    },
                    "boxed_mode": {
                        "type": "radio_button_set",
                        "heading": "Boxed Mode",
                        "description": "Choose to display items in boxed mode.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#accordion_boxed_mode\" target=\"_blank\" rel=\"noopener noreferrer\">No</a>.",
                        "param_name": "boxed_mode",
                        "value": {
                            "": "Default",
                            "yes": "Yes",
                            "no": "No"
                        },
                        "default": ""
                    },
                    "border_size": {
                        "type": "range",
                        "heading": "Boxed Mode Border Width",
                        "description": "Set the border width for toggle item. In pixels.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#accordion_border_size\" target=\"_blank\" rel=\"noopener noreferrer\">1</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-border_size\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"border_size\" value=\"\" data-default=\"1\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "border_size",
                        "value": "1",
                        "default": "1",
                        "min": "0",
                        "max": "20",
                        "step": "1",
                        "dependency": [{
                            "element": "boxed_mode",
                            "value": "no",
                            "operator": "!="
                        }, {
                            "element": "boxed_mode",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "border_color": {
                        "type": "colorpickeralpha",
                        "heading": "Boxed Mode Border Color",
                        "description": "Set the border color for toggle item.  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#accordian_border_color\" target=\"_blank\" rel=\"noopener noreferrer\">#cccccc</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-border_color\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"border_color\" value=\"\" data-default=\"#cccccc\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "border_color",
                        "value": "",
                        "default": "#cccccc",
                        "dependency": [{
                            "element": "boxed_mode",
                            "value": "no",
                            "operator": "!="
                        }, {
                            "element": "border_size",
                            "value": "0",
                            "operator": "!="
                        }, {
                            "element": "boxed_mode",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "background_color": {
                        "type": "colorpickeralpha",
                        "heading": "Boxed Mode Background Color",
                        "description": "Set the background color for toggle item.  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#accordian_background_color\" target=\"_blank\" rel=\"noopener noreferrer\">#ffffff</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-background_color\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"background_color\" value=\"\" data-default=\"#ffffff\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "background_color",
                        "value": "",
                        "default": "#ffffff",
                        "dependency": [{
                            "element": "boxed_mode",
                            "value": "no",
                            "operator": "!="
                        }, {
                            "element": "boxed_mode",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "hover_color": {
                        "type": "colorpickeralpha",
                        "heading": "Boxed Mode Background Hover Color",
                        "description": "Set the background hover color for toggle item.  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#accordian_hover_color\" target=\"_blank\" rel=\"noopener noreferrer\">#f9f9f9</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-hover_color\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"hover_color\" value=\"\" data-default=\"#f9f9f9\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "hover_color",
                        "value": "",
                        "default": "#f9f9f9",
                        "dependency": [{
                            "element": "boxed_mode",
                            "value": "no",
                            "operator": "!="
                        }, {
                            "element": "boxed_mode",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "divider_line": {
                        "type": "radio_button_set",
                        "heading": "Divider Line",
                        "description": "Choose to display a divider line between each item.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#accordion_divider_line\" target=\"_blank\" rel=\"noopener noreferrer\">Yes</a>.",
                        "param_name": "divider_line",
                        "value": {
                            "": "Default",
                            "yes": "Yes",
                            "no": "No"
                        },
                        "default": "",
                        "dependency": [{
                            "element": "boxed_mode",
                            "value": "yes",
                            "operator": "!="
                        }]
                    },
                    "icon_size": {
                        "heading": "Toggle Icon Size",
                        "description": "Set the size of the icon. In pixels (px), ex: 13px.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#accordion_icon_size\" target=\"_blank\" rel=\"noopener noreferrer\">13</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-icon_size\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"icon_size\" value=\"\" data-default=\"13\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "icon_size",
                        "default": "13",
                        "min": "1",
                        "max": "40",
                        "step": "1",
                        "type": "range"
                    },
                    "icon_color": {
                        "type": "colorpicker",
                        "heading": "Toggle Icon Color",
                        "description": "Set the color of icon in toggle box.  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#accordian_icon_color\" target=\"_blank\" rel=\"noopener noreferrer\">#ffffff</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-icon_color\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"icon_color\" value=\"\" data-default=\"#ffffff\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "icon_color",
                        "value": "",
                        "default": "#ffffff"
                    },
                    "icon_boxed_mode": {
                        "type": "radio_button_set",
                        "heading": "Toggle Icon Boxed Mode",
                        "description": "Choose to display icon in boxed mode.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#accordion_icon_boxed\" target=\"_blank\" rel=\"noopener noreferrer\">Yes</a>.",
                        "param_name": "icon_boxed_mode",
                        "value": {
                            "": "Default",
                            "yes": "Yes",
                            "no": "No"
                        },
                        "default": ""
                    },
                    "icon_alignment": {
                        "type": "radio_button_set",
                        "heading": "Toggle Icon Alignment",
                        "description": "Controls the alignment of toggle icon.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#accordion_icon_align\" target=\"_blank\" rel=\"noopener noreferrer\">Left</a>.",
                        "param_name": "icon_alignment",
                        "value": {
                            "": "Default",
                            "left": "Left",
                            "right": "Right"
                        },
                        "default": ""
                    },
                    "hide_on_mobile": {
                        "type": "checkbox_button_set",
                        "heading": "Element Visibility",
                        "param_name": "hide_on_mobile",
                        "value": {
                            "small-visibility": "Small Screen",
                            "medium-visibility": "Medium Screen",
                            "large-visibility": "Large Screen"
                        },
                        "default": ["small-visibility", "medium-visibility", "large-visibility"],
                        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Element Options</a>."
                    },
                    "class": {
                        "type": "textfield",
                        "heading": "CSS Class",
                        "description": "Add a class to the wrapping HTML element.",
                        "param_name": "class",
                        "value": "",
                        "group": "General"
                    },
                    "id": {
                        "type": "textfield",
                        "heading": "CSS ID",
                        "description": "Add an ID to the wrapping HTML element.",
                        "param_name": "id",
                        "value": "",
                        "group": "General"
                    }
                }
            }
        },
        "remove_from_atts": []
    },
    "fusion_toggle": {
        "name": "Toggle",
        "shortcode": "fusion_toggle",
        "hide_from_builder": true,
        "allow_generator": true,
        "params": {
            "groups": {
                "General": {
                    "title": {
                        "type": "textfield",
                        "heading": "Title",
                        "description": "Insert the toggle title.",
                        "param_name": "title",
                        "value": "Your Content Goes Here",
                        "placeholder": true
                    },
                    "open": {
                        "type": "radio_button_set",
                        "heading": "Open by Default",
                        "description": "Choose to have the toggle open when page loads.",
                        "param_name": "open",
                        "value": {
                            "no": "No",
                            "yes": "Yes"
                        },
                        "default": "no"
                    },
                    "element_content": {
                        "type": "tinymce",
                        "heading": "Toggle Content",
                        "description": "Insert the toggle content.",
                        "param_name": "element_content",
                        "value": "Your Content Goes Here",
                        "placeholder": true
                    }
                }
            }
        },
        "remove_from_atts": []
    },
    "fusion_tooltip": {
        "name": "Tooltip",
        "shortcode": "fusion_tooltip",
        "icon": "fusiona-exclamation-sign",
        "generator_only": true,
        "params": {
            "groups": {
                "General": {
                    "title": {
                        "type": "textfield",
                        "heading": "Title",
                        "description": "Insert the text that displays in the tooltip.",
                        "param_name": "title",
                        "value": ""
                    },
                    "element_content": {
                        "type": "textarea",
                        "heading": "Content",
                        "description": "Insert the text that will activate the tooltip hover.",
                        "param_name": "element_content",
                        "value": ""
                    },
                    "class": {
                        "type": "textfield",
                        "heading": "CSS Class",
                        "param_name": "class",
                        "value": "",
                        "description": "Add a class to the wrapping HTML element."
                    },
                    "id": {
                        "type": "textfield",
                        "heading": "CSS ID",
                        "param_name": "id",
                        "value": "",
                        "description": "Add an ID to the wrapping HTML element."
                    }
                },
                "Design": {
                    "placement": {
                        "type": "radio_button_set",
                        "heading": "Tooltip Position",
                        "description": "Choose the display position.",
                        "param_name": "placement",
                        "value": {
                            "top": "Top",
                            "bottom": "Bottom",
                            "left": "Left",
                            "right": "Right"
                        },
                        "default": "top",
                        "group": "Design"
                    },
                    "trigger": {
                        "type": "radio_button_set",
                        "heading": "Tooltip Trigger",
                        "description": "Choose action to trigger the tooltip.",
                        "param_name": "trigger",
                        "value": {
                            "hover": "Hover",
                            "click": "Click"
                        },
                        "default": "hover",
                        "group": "Design"
                    }
                }
            }
        },
        "remove_from_atts": []
    },
    "fusion_login": {
        "name": "User Login",
        "description": "Enter some content for this block",
        "shortcode": "fusion_login",
        "icon": "fusiona-calendar-check-o",
        "params": {
            "groups": {
                "General": {
                    "text_align": {
                        "type": "radio_button_set",
                        "heading": "Text Align",
                        "description": "Choose the alignment of all content parts. &quot;Text Flow&quot; follows the default text align of the site. &quot;Center&quot; will center all elements.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#user_login_text_align\" target=\"_blank\" rel=\"noopener noreferrer\">Center</a>.",
                        "param_name": "text_align",
                        "value": {
                            "": "Default",
                            "textflow": "Text Flow",
                            "center": "Center"
                        },
                        "default": ""
                    },
                    "heading": {
                        "type": "textfield",
                        "heading": "Heading",
                        "description": "Choose a heading text.",
                        "param_name": "heading",
                        "value": "Your Content Goes Here",
                        "placeholder": true
                    },
                    "heading_color": {
                        "type": "colorpicker",
                        "heading": "Heading Color",
                        "description": "Choose a heading color.",
                        "param_name": "heading_color",
                        "value": "",
                        "dependency": [{
                            "element": "heading",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "caption": {
                        "type": "textfield",
                        "heading": "Caption",
                        "description": "Choose a caption text.",
                        "param_name": "caption",
                        "value": "Your Content Goes Here",
                        "placeholder": true
                    },
                    "caption_color": {
                        "type": "colorpicker",
                        "heading": "Caption Color",
                        "description": "Choose a caption color.",
                        "param_name": "caption_color",
                        "value": "",
                        "dependency": [{
                            "element": "caption",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "button_fullwidth": {
                        "type": "radio_button_set",
                        "heading": "Button Span",
                        "description": "Choose to have the button span the full width.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#button_span\" target=\"_blank\" rel=\"noopener noreferrer\">No</a>.",
                        "param_name": "button_fullwidth",
                        "value": {
                            "": "Default",
                            "yes": "Yes",
                            "no": "No"
                        },
                        "default": ""
                    },
                    "form_background_color": {
                        "type": "colorpickeralpha",
                        "heading": "Form Background Color",
                        "description": "Choose a background color for the form wrapping box.  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#user_login_form_background_color\" target=\"_blank\" rel=\"noopener noreferrer\">#f6f6f6</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-form_background_color\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"form_background_color\" value=\"\" data-default=\"#f6f6f6\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "form_background_color",
                        "value": "",
                        "default": "#f6f6f6"
                    },
                    "link_color": {
                        "type": "colorpicker",
                        "heading": "Link Color",
                        "description": "Choose a link color.  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#link_color\" target=\"_blank\" rel=\"noopener noreferrer\">#333333</a>.",
                        "param_name": "link_color",
                        "value": "",
                        "default": "#333333"
                    },
                    "redirection_link": {
                        "type": "link_selector",
                        "heading": "Redirection Link",
                        "description": "Add the url to which a user should redirected after form submission. Leave empty to use the same page.",
                        "param_name": "redirection_link",
                        "value": ""
                    },
                    "register_link": {
                        "type": "link_selector",
                        "heading": "Register Link",
                        "description": "Add the url the &quot;Register&quot; link should open.",
                        "param_name": "register_link",
                        "value": ""
                    },
                    "lost_password_link": {
                        "type": "link_selector",
                        "heading": "Lost Password Link",
                        "description": "Add the url the &quot;Lost Password&quot; link should open.",
                        "param_name": "lost_password_link",
                        "value": ""
                    },
                    "hide_on_mobile": {
                        "type": "checkbox_button_set",
                        "heading": "Element Visibility",
                        "param_name": "hide_on_mobile",
                        "value": {
                            "small-visibility": "Small Screen",
                            "medium-visibility": "Medium Screen",
                            "large-visibility": "Large Screen"
                        },
                        "default": ["small-visibility", "medium-visibility", "large-visibility"],
                        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Element Options</a>."
                    },
                    "class": {
                        "type": "textfield",
                        "heading": "CSS Class",
                        "description": "Add a class to the wrapping HTML element.",
                        "param_name": "class",
                        "value": "",
                        "group": "General"
                    },
                    "id": {
                        "type": "textfield",
                        "heading": "CSS ID",
                        "description": "Add an ID to the wrapping HTML element.",
                        "param_name": "id",
                        "value": "",
                        "group": "General"
                    }
                }
            }
        },
        "remove_from_atts": []
    },
    "fusion_lost_password": {
        "name": "User Lost Password",
        "shortcode": "fusion_lost_password",
        "icon": "fusiona-calendar-check-o",
        "params": {
            "groups": {
                "General": {
                    "text_align": {
                        "type": "radio_button_set",
                        "heading": "Text Align",
                        "description": "Choose the alignment of all content parts. &quot;Text Flow&quot; follows the default text align of the site. &quot;Center&quot; will center all elements.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#user_login_text_align\" target=\"_blank\" rel=\"noopener noreferrer\">Center</a>.",
                        "param_name": "text_align",
                        "value": {
                            "": "Default",
                            "textflow": "Text Flow",
                            "center": "Center"
                        },
                        "default": ""
                    },
                    "heading": {
                        "type": "textfield",
                        "heading": "Heading",
                        "description": "Choose a heading text.",
                        "param_name": "heading",
                        "value": "Your Content Goes Here",
                        "placeholder": true
                    },
                    "heading_color": {
                        "type": "colorpicker",
                        "heading": "Heading Color",
                        "description": "Choose a heading color.",
                        "param_name": "heading_color",
                        "value": "",
                        "dependency": [{
                            "element": "heading",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "caption": {
                        "type": "textfield",
                        "heading": "Caption",
                        "description": "Choose a caption text.",
                        "param_name": "caption",
                        "value": "Your Content Goes Here",
                        "placeholder": true
                    },
                    "caption_color": {
                        "type": "colorpicker",
                        "heading": "Caption Color",
                        "description": "Choose a caption color.",
                        "param_name": "caption_color",
                        "value": "",
                        "dependency": [{
                            "element": "caption",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "button_fullwidth": {
                        "type": "radio_button_set",
                        "heading": "Button Span",
                        "description": "Choose to have the button span the full width.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#button_span\" target=\"_blank\" rel=\"noopener noreferrer\">No</a>.",
                        "param_name": "button_fullwidth",
                        "value": {
                            "": "Default",
                            "yes": "Yes",
                            "no": "No"
                        },
                        "default": ""
                    },
                    "form_background_color": {
                        "type": "colorpickeralpha",
                        "heading": "Form Background Color",
                        "description": "Choose a background color for the form wrapping box.  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#user_login_form_background_color\" target=\"_blank\" rel=\"noopener noreferrer\">#f6f6f6</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-form_background_color\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"form_background_color\" value=\"\" data-default=\"#f6f6f6\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "form_background_color",
                        "value": "",
                        "default": "#f6f6f6"
                    },
                    "link_color": {
                        "type": "colorpicker",
                        "heading": "Link Color",
                        "description": "Choose a link color.  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#link_color\" target=\"_blank\" rel=\"noopener noreferrer\">#333333</a>.",
                        "param_name": "link_color",
                        "value": "",
                        "default": "#333333"
                    },
                    "redirection_link": {
                        "type": "link_selector",
                        "heading": "Redirection Link",
                        "description": "Add the url to which a user should redirected after form submission. Leave empty to use the same page.",
                        "param_name": "redirection_link",
                        "value": ""
                    },
                    "hide_on_mobile": {
                        "type": "checkbox_button_set",
                        "heading": "Element Visibility",
                        "param_name": "hide_on_mobile",
                        "value": {
                            "small-visibility": "Small Screen",
                            "medium-visibility": "Medium Screen",
                            "large-visibility": "Large Screen"
                        },
                        "default": ["small-visibility", "medium-visibility", "large-visibility"],
                        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Element Options</a>."
                    },
                    "class": {
                        "type": "textfield",
                        "heading": "CSS Class",
                        "description": "Add a class to the wrapping HTML element.",
                        "param_name": "class",
                        "value": "",
                        "group": "General"
                    },
                    "id": {
                        "type": "textfield",
                        "heading": "CSS ID",
                        "description": "Add an ID to the wrapping HTML element.",
                        "param_name": "id",
                        "value": "",
                        "group": "General"
                    }
                }
            }
        },
        "remove_from_atts": []
    },
    "fusion_register": {
        "name": "User Register",
        "shortcode": "fusion_register",
        "icon": "fusiona-calendar-check-o",
        "params": {
            "groups": {
                "General": {
                    "text_align": {
                        "type": "radio_button_set",
                        "heading": "Text Align",
                        "description": "Choose the alignment of all content parts. &quot;Text Flow&quot; follows the default text align of the site. &quot;Center&quot; will center all elements.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#user_login_text_align\" target=\"_blank\" rel=\"noopener noreferrer\">Center</a>.",
                        "param_name": "text_align",
                        "value": {
                            "": "Default",
                            "textflow": "Text Flow",
                            "center": "Center"
                        },
                        "default": ""
                    },
                    "heading": {
                        "type": "textfield",
                        "heading": "Heading",
                        "description": "Choose a heading text.",
                        "param_name": "heading",
                        "value": "Your Content Goes Here",
                        "placeholder": true
                    },
                    "heading_color": {
                        "type": "colorpicker",
                        "heading": "Heading Color",
                        "description": "Choose a heading color.",
                        "param_name": "heading_color",
                        "value": "",
                        "dependency": [{
                            "element": "heading",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "caption": {
                        "type": "textfield",
                        "heading": "Caption",
                        "description": "Choose a caption text.",
                        "param_name": "caption",
                        "value": "Your Content Goes Here",
                        "placeholder": true
                    },
                    "caption_color": {
                        "type": "colorpicker",
                        "heading": "Caption Color",
                        "description": "Choose a caption color.",
                        "param_name": "caption_color",
                        "value": "",
                        "dependency": [{
                            "element": "caption",
                            "value": "",
                            "operator": "!="
                        }]
                    },
                    "button_fullwidth": {
                        "type": "radio_button_set",
                        "heading": "Button Span",
                        "description": "Choose to have the button span the full width.  Default currently set to <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#button_span\" target=\"_blank\" rel=\"noopener noreferrer\">No</a>.",
                        "param_name": "button_fullwidth",
                        "value": {
                            "": "Default",
                            "yes": "Yes",
                            "no": "No"
                        },
                        "default": ""
                    },
                    "form_background_color": {
                        "type": "colorpickeralpha",
                        "heading": "Form Background Color",
                        "description": "Choose a background color for the form wrapping box.  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#user_login_form_background_color\" target=\"_blank\" rel=\"noopener noreferrer\">#f6f6f6</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-form_background_color\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"form_background_color\" value=\"\" data-default=\"#f6f6f6\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "form_background_color",
                        "value": "",
                        "default": "#f6f6f6"
                    },
                    "link_color": {
                        "type": "colorpicker",
                        "heading": "Link Color",
                        "description": "Choose a link color.  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#link_color\" target=\"_blank\" rel=\"noopener noreferrer\">#333333</a>.",
                        "param_name": "link_color",
                        "value": "",
                        "default": "#333333"
                    },
                    "redirection_link": {
                        "type": "link_selector",
                        "heading": "Redirection Link",
                        "description": "Add the url to which a user should redirected after form submission. Leave empty to use the same page.",
                        "param_name": "redirection_link",
                        "value": ""
                    },
                    "hide_on_mobile": {
                        "type": "checkbox_button_set",
                        "heading": "Element Visibility",
                        "param_name": "hide_on_mobile",
                        "value": {
                            "small-visibility": "Small Screen",
                            "medium-visibility": "Medium Screen",
                            "large-visibility": "Large Screen"
                        },
                        "default": ["small-visibility", "medium-visibility", "large-visibility"],
                        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Element Options</a>."
                    },
                    "class": {
                        "type": "textfield",
                        "heading": "CSS Class",
                        "description": "Add a class to the wrapping HTML element.",
                        "param_name": "class",
                        "value": "",
                        "group": "General"
                    },
                    "id": {
                        "type": "textfield",
                        "heading": "CSS ID",
                        "description": "Add an ID to the wrapping HTML element.",
                        "param_name": "id",
                        "value": "",
                        "group": "General"
                    }
                }
            }
        },
        "remove_from_atts": []
    },
    "fusion_vimeo": {
        "name": "Vimeo",
        "shortcode": "fusion_vimeo",
        "icon": "fusiona-vimeo2",
        "preview": "C:/xamppp/htdocs/wp_avada542/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-vimeo-preview.php",
        "preview_id": "fusion-builder-block-module-vimeo-preview-template",
        "params": {
            "groups": {
                "General": {
                    "id": {
                        "type": "textfield",
                        "heading": "Video ID",
                        "description": "For example the Video ID for https://vimeo.com/75230326 is 75230326.",
                        "param_name": "id",
                        "value": ""
                    },
                    "alignment": {
                        "type": "radio_button_set",
                        "heading": "Alignment",
                        "description": "Select the video&#039;s alignment.",
                        "param_name": "alignment",
                        "default": "",
                        "value": {
                            "": "Text Flow",
                            "left": "Left",
                            "center": "Center",
                            "right": "Right"
                        }
                    },
                    "dimensions": {
                        "type": "dimension",
                        "remove_from_atts": true,
                        "heading": "Dimensions",
                        "description": "In pixels but only enter a number, ex: 600.",
                        "param_name": "dimensions",
                        "value": {
                            "width": "600",
                            "height": "350"
                        }
                    },
                    "autoplay": {
                        "type": "radio_button_set",
                        "heading": "Autoplay Video",
                        "description": "Set to yes to make video autoplaying.",
                        "param_name": "autoplay",
                        "value": {
                            "false": "No",
                            "true": "Yes"
                        },
                        "default": "false"
                    },
                    "api_params": {
                        "type": "textfield",
                        "heading": "Additional API Parameter",
                        "description": "Use additional API parameter, for example &amp;rel=0 to disable related videos.",
                        "param_name": "api_params",
                        "value": ""
                    },
                    "hide_on_mobile": {
                        "type": "checkbox_button_set",
                        "heading": "Element Visibility",
                        "param_name": "hide_on_mobile",
                        "value": {
                            "small-visibility": "Small Screen",
                            "medium-visibility": "Medium Screen",
                            "large-visibility": "Large Screen"
                        },
                        "default": ["small-visibility", "medium-visibility", "large-visibility"],
                        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Element Options</a>."
                    },
                    "class": {
                        "type": "textfield",
                        "heading": "CSS Class",
                        "param_name": "class",
                        "value": "",
                        "description": "Add a class to the wrapping HTML element."
                    }
                }
            }
        },
        "remove_from_atts": ["dimensions"]
    },
    "fusion_featured_products_slider": {
        "name": "Woo Featured",
        "shortcode": "fusion_featured_products_slider",
        "icon": "fusiona-star-empty",
        "params": {
            "groups": {
                "General": {
                    "picture_size": {
                        "type": "radio_button_set",
                        "heading": "Picture Size",
                        "description": "fixed = width and height will be fixed <br />auto = width and height will adjust to the image.",
                        "param_name": "picture_size",
                        "value": {
                            "fixed": "Fixed",
                            "auto": "Auto"
                        },
                        "default": "fixed"
                    },
                    "carousel_layout": {
                        "type": "radio_button_set",
                        "heading": "Carousel Layout",
                        "description": "Choose to show titles on rollover image, or below image.",
                        "param_name": "carousel_layout",
                        "value": {
                            "title_on_rollover": "Title on rollover",
                            "title_below_image": "Title below image"
                        },
                        "default": "title_on_rollover"
                    },
                    "autoplay": {
                        "type": "radio_button_set",
                        "heading": "Carousel Autoplay",
                        "description": "Choose to autoplay the carousel.",
                        "param_name": "autoplay",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        },
                        "default": "no"
                    },
                    "columns": {
                        "type": "range",
                        "heading": "Maximum Columns",
                        "description": "Select the number of max columns to display.",
                        "param_name": "columns",
                        "value": "5",
                        "min": "1",
                        "max": "6",
                        "step": "1"
                    },
                    "column_spacing": {
                        "type": "textfield",
                        "heading": "Column Spacing",
                        "description": "Insert the amount of spacing between items without &#039;px&#039;. ex: 13.",
                        "param_name": "column_spacing",
                        "value": ""
                    },
                    "scroll_items": {
                        "type": "textfield",
                        "heading": "Scroll Items",
                        "description": "Insert the amount of items to scroll. Leave empty to scroll number of visible items.",
                        "param_name": "scroll_items",
                        "value": ""
                    },
                    "show_nav": {
                        "type": "radio_button_set",
                        "heading": "Show Navigation",
                        "description": "Choose to show navigation buttons on the carousel.",
                        "param_name": "show_nav",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        },
                        "default": "yes"
                    },
                    "mouse_scroll": {
                        "type": "radio_button_set",
                        "heading": "Mouse Scroll",
                        "description": "Choose to enable mouse drag control on the carousel. IMPORTANT: For easy draggability, when mouse scroll is activated, links will be disabled.",
                        "param_name": "mouse_scroll",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        },
                        "default": "no"
                    },
                    "show_cats": {
                        "type": "radio_button_set",
                        "heading": "Show Categories",
                        "description": "Choose to show or hide the categories.",
                        "param_name": "show_cats",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        },
                        "default": "yes"
                    },
                    "show_price": {
                        "type": "radio_button_set",
                        "heading": "Show Price",
                        "description": "Choose to show or hide the price.",
                        "param_name": "show_price",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        },
                        "default": "yes"
                    },
                    "show_buttons": {
                        "type": "radio_button_set",
                        "heading": "Show Buttons",
                        "description": "Choose to show or hide the icon buttons.",
                        "param_name": "show_buttons",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        },
                        "default": "yes"
                    },
                    "hide_on_mobile": {
                        "type": "checkbox_button_set",
                        "heading": "Element Visibility",
                        "param_name": "hide_on_mobile",
                        "value": {
                            "small-visibility": "Small Screen",
                            "medium-visibility": "Medium Screen",
                            "large-visibility": "Large Screen"
                        },
                        "default": ["small-visibility", "medium-visibility", "large-visibility"],
                        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Element Options</a>."
                    },
                    "class": {
                        "type": "textfield",
                        "heading": "CSS Class",
                        "description": "Add a class to the wrapping HTML element.",
                        "param_name": "class",
                        "value": "",
                        "group": "General"
                    },
                    "id": {
                        "type": "textfield",
                        "heading": "CSS ID",
                        "description": "Add an ID to the wrapping HTML element.",
                        "param_name": "id",
                        "value": "",
                        "group": "General"
                    }
                }
            }
        },
        "remove_from_atts": []
    },
    "fusion_woo_shortcodes": {
        "name": "Woo Shortcodes",
        "shortcode": "fusion_woo_shortcodes",
        "icon": "fusiona-tag",
        "admin_enqueue_js": "http://127.0.0.1/wp_avada542/wp-content/plugins/fusion-builder/shortcodes/js/fusion-woo-shortcodes.js",
        "params": {
            "groups": {
                "General": {
                    "fusion_woo_shortcode": {
                        "type": "select",
                        "heading": "Shortocode",
                        "description": "Choose woocommerce shortcode.",
                        "param_name": "fusion_woo_shortcode",
                        "value": {
                            "1": "Order tracking",
                            "2": "Product price/cart button",
                            "3": "Product by SKU/ID",
                            "4": "Products by SKU/ID",
                            "5": "Product categories",
                            "6": "Products by category slug",
                            "7": "Recent products",
                            "8": "Featured products",
                            "9": "Shop Message"
                        },
                        "default": "",
                        "remove_from_atts": true
                    },
                    "element_content": {
                        "type": "textarea",
                        "heading": "Shortcode content",
                        "description": "Shortcode will appear here.",
                        "param_name": "element_content",
                        "value": "[woocommerce_order_tracking]"
                    }
                }
            }
        },
        "remove_from_atts": ["fusion_woo_shortcode"]
    },
    "fusion_youtube": {
        "name": "Youtube",
        "shortcode": "fusion_youtube",
        "icon": "fusiona-youtube",
        "preview": "C:/xamppp/htdocs/wp_avada542/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-youtube-preview.php",
        "preview_id": "fusion-builder-block-module-youtube-preview-template",
        "params": {
            "groups": {
                "General": {
                    "id": {
                        "type": "textfield",
                        "heading": "Video ID",
                        "description": "For example the Video ID for https://www.youtube.com/watch?v=UDyNsnB_COA is UDyNsnB_COA.",
                        "param_name": "id",
                        "value": ""
                    },
                    "alignment": {
                        "type": "radio_button_set",
                        "heading": "Alignment",
                        "description": "Select the video&#039;s alignment.",
                        "param_name": "alignment",
                        "default": "",
                        "value": {
                            "": "Text Flow",
                            "left": "Left",
                            "center": "Center",
                            "right": "Right"
                        }
                    },
                    "dimensions": {
                        "type": "dimension",
                        "remove_from_atts": true,
                        "heading": "Dimensions",
                        "description": "In pixels but only enter a number, ex: 600.",
                        "param_name": "dimensions",
                        "value": {
                            "width": "600",
                            "height": "350"
                        }
                    },
                    "autoplay": {
                        "type": "radio_button_set",
                        "heading": "Autoplay Video",
                        "description": "Set to yes to make video autoplaying.",
                        "param_name": "autoplay",
                        "value": {
                            "false": "No",
                            "true": "Yes"
                        },
                        "default": "false"
                    },
                    "api_params": {
                        "type": "textfield",
                        "heading": "Additional API Parameter",
                        "description": "Use additional API parameter, for example &amp;rel=0 to disable related videos.",
                        "param_name": "api_params",
                        "value": ""
                    },
                    "hide_on_mobile": {
                        "type": "checkbox_button_set",
                        "heading": "Element Visibility",
                        "param_name": "hide_on_mobile",
                        "value": {
                            "small-visibility": "Small Screen",
                            "medium-visibility": "Medium Screen",
                            "large-visibility": "Large Screen"
                        },
                        "default": ["small-visibility", "medium-visibility", "large-visibility"],
                        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Element Options</a>."
                    },
                    "class": {
                        "type": "textfield",
                        "heading": "CSS Class",
                        "param_name": "class",
                        "value": "",
                        "description": "Add a class to the wrapping HTML element."
                    }
                }
            }
        },
        "remove_from_atts": ["dimensions"]
    },
    "fusion_widget_area": {
        "name": "Widget Area",
        "shortcode": "fusion_widget_area",
        "icon": "fusiona-sidebar",
        "params": {
            "groups": {
                "General": {
                    "name": {
                        "type": "select",
                        "heading": "Widget Area Name",
                        "description": "Choose the name of the widget area to display.",
                        "param_name": "name",
                        "value": {
                            "sidebar-1": "Blog Sidebar",
                            "sidebar-2": "Footer 1",
                            "sidebar-3": "Footer 2"
                        },
                        "default": ""
                    },
                    "title_size": {
                        "type": "textfield",
                        "heading": "Widget Title Size",
                        "description": "Controls the size of widget titles. In pixels ex: 18px.  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#widget_area_title_size\" target=\"_blank\" rel=\"noopener noreferrer\">13px</a>.",
                        "param_name": "title_size",
                        "value": "",
                        "default": "13px"
                    },
                    "title_color": {
                        "type": "colorpickeralpha",
                        "heading": "Widget Title Color",
                        "description": "Controls the color of widget titles.  Leave empty for default value of <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#widget_area_title_color\" target=\"_blank\" rel=\"noopener noreferrer\">#333333</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-title_color\" class=\"fusion-range-default fusion-hide-from-atts\" type=\"radio\" name=\"title_color\" value=\"\" data-default=\"#333333\">Reset to default.</a><span>Using default value.</span></span>",
                        "param_name": "title_color",
                        "value": "",
                        "default": "#333333"
                    },
                    "background_color": {
                        "type": "colorpicker",
                        "heading": "Backgound Color",
                        "description": "Choose a background color for the widget area.",
                        "param_name": "background_color",
                        "value": ""
                    },
                    "padding": {
                        "type": "dimension",
                        "remove_from_atts": true,
                        "heading": "Padding",
                        "description": "In pixels or percentage, ex: 10px or 10%.",
                        "param_name": "padding",
                        "value": {
                            "padding_top": "",
                            "padding_right": "",
                            "padding_bottom": "",
                            "padding_left": ""
                        }
                    },
                    "hide_on_mobile": {
                        "type": "checkbox_button_set",
                        "heading": "Element Visibility",
                        "param_name": "hide_on_mobile",
                        "value": {
                            "small-visibility": "Small Screen",
                            "medium-visibility": "Medium Screen",
                            "large-visibility": "Large Screen"
                        },
                        "default": ["small-visibility", "medium-visibility", "large-visibility"],
                        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Element Options</a>."
                    },
                    "class": {
                        "type": "textfield",
                        "heading": "CSS Class",
                        "description": "Add a class to the wrapping HTML element.",
                        "param_name": "class",
                        "value": ""
                    },
                    "id": {
                        "type": "textfield",
                        "heading": "CSS ID",
                        "description": "Add an ID to the wrapping HTML element.",
                        "param_name": "id",
                        "value": ""
                    }
                }
            }
        },
        "remove_from_atts": ["padding"]
    },
    "fusion_products_slider": {
        "name": "Woo Carousel",
        "shortcode": "fusion_products_slider",
        "icon": "fusiona-tag",
        "params": {
            "groups": {
                "General": {
                    "picture_size": {
                        "type": "radio_button_set",
                        "heading": "Picture Size",
                        "description": "fixed = width and height will be fixed <br />auto = width and height will adjust to the image.",
                        "param_name": "picture_size",
                        "value": {
                            "fixed": "Fixed",
                            "auto": "Auto"
                        },
                        "default": "fixed"
                    },
                    "cat_slug": {
                        "type": "multiple_select",
                        "heading": "Categories",
                        "description": "Select a category or leave blank for all.",
                        "param_name": "cat_slug",
                        "value": {
                            "uncategorized": "Uncategorized (6)"
                        },
                        "default": ""
                    },
                    "number_posts": {
                        "type": "textfield",
                        "heading": "Number of Products",
                        "description": "Select the number of products to display.",
                        "param_name": "number_posts",
                        "value": "5"
                    },
                    "carousel_layout": {
                        "type": "radio_button_set",
                        "heading": "Carousel Layout",
                        "description": "Choose to show titles on rollover image, or below image.",
                        "param_name": "carousel_layout",
                        "value": {
                            "title_on_rollover": "Title on rollover",
                            "title_below_image": "Title below image"
                        },
                        "default": "title_on_rollover"
                    },
                    "autoplay": {
                        "type": "radio_button_set",
                        "heading": "Carousel Autoplay",
                        "description": "Choose to autoplay the carousel.",
                        "param_name": "autoplay",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        },
                        "default": "no"
                    },
                    "columns": {
                        "type": "range",
                        "heading": "Maximum Columns",
                        "description": "Select the number of max columns to display.",
                        "param_name": "columns",
                        "value": "5",
                        "min": "1",
                        "max": "6",
                        "step": "1"
                    },
                    "column_spacing": {
                        "type": "textfield",
                        "heading": "Column Spacing",
                        "description": "Insert the amount of spacing between items without &#039;px&#039;. ex: 13.",
                        "param_name": "column_spacing",
                        "value": ""
                    },
                    "scroll_items": {
                        "type": "textfield",
                        "heading": "Scroll Items",
                        "description": "Insert the amount of items to scroll. Leave empty to scroll number of visible items.",
                        "param_name": "scroll_items",
                        "value": ""
                    },
                    "show_nav": {
                        "type": "radio_button_set",
                        "heading": "Show Navigation",
                        "description": "Choose to show navigation buttons on the carousel.",
                        "param_name": "show_nav",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        },
                        "default": "yes"
                    },
                    "mouse_scroll": {
                        "type": "radio_button_set",
                        "heading": "Mouse Scroll",
                        "description": "Choose to enable mouse drag control on the carousel. IMPORTANT: For easy draggability, when mouse scroll is activated, links will be disabled.",
                        "param_name": "mouse_scroll",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        },
                        "default": "no"
                    },
                    "show_cats": {
                        "type": "radio_button_set",
                        "heading": "Show Categories",
                        "description": "Choose to show or hide the categories.",
                        "param_name": "show_cats",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        },
                        "default": "yes"
                    },
                    "show_price": {
                        "type": "radio_button_set",
                        "heading": "Show Price",
                        "description": "Choose to show or hide the price.",
                        "param_name": "show_price",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        },
                        "default": "yes"
                    },
                    "show_buttons": {
                        "type": "radio_button_set",
                        "heading": "Show Buttons",
                        "description": "Choose to show or hide the icon buttons.",
                        "param_name": "show_buttons",
                        "value": {
                            "yes": "Yes",
                            "no": "No"
                        },
                        "default": "yes"
                    },
                    "hide_on_mobile": {
                        "type": "checkbox_button_set",
                        "heading": "Element Visibility",
                        "param_name": "hide_on_mobile",
                        "value": {
                            "small-visibility": "Small Screen",
                            "medium-visibility": "Medium Screen",
                            "large-visibility": "Large Screen"
                        },
                        "default": ["small-visibility", "medium-visibility", "large-visibility"],
                        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wp_avada542/wp-admin/admin.php?page=fusion-element-options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Element Options</a>."
                    },
                    "class": {
                        "type": "textfield",
                        "heading": "CSS Class",
                        "description": "Add a class to the wrapping HTML element.",
                        "param_name": "class",
                        "value": "",
                        "group": "General"
                    },
                    "id": {
                        "type": "textfield",
                        "heading": "CSS ID",
                        "description": "Add an ID to the wrapping HTML element.",
                        "param_name": "id",
                        "value": "",
                        "group": "General"
                    }
                }
            }
        },
        "remove_from_atts": []
    }
}
