{
  "fusion_tb_author": {
    "defaults": {
      "animation_direction": "down",
      "animation_speed": "0.1",
      "animation_offset": "top-into-view",
      "animation_type": "",
      "avatar": "square",
      "biography": "show",
      "class": "",
      "headings": "show",
      "heading_size": "2",
      "hide_on_mobile": "small-visibility, medium-visibility, large-visibility",
      "id": "",
      "margin_bottom": "",
      "margin_left": "",
      "margin_right": "",
      "margin_top": ""
    },
    "extras": {
      "title_margin": {
        "top": "10px",
        "bottom": "15px"
      },
      "title_border_color": "#e2e2e2",
      "title_style_type": "double solid"
    },
    "settings_to_extras": {
      "title_margin": "title_margin",
      "title_border_color": "title_border_color",
      "title_style_type": "title_style_type"
    },
    "name": "Author",
    "shortcode": "fusion_tb_author",
    "icon": "fusiona-author",
    "class": "hidden",
    "component": true,
    "templates": [
      "content"
    ],
    "components_per_template": 1,
    "params": {
      "headings": {
        "type": "radio_button_set",
        "heading": "Show Headings",
        "description": "Choose to show or hide headings.",
        "param_name": "headings",
        "default": "show",
        "value": {
          "show": "Show",
          "hide": "Hide"
        },
        "dependency": []
      },
      "heading_size": {
        "type": "radio_button_set",
        "heading": "HTML Heading Size",
        "description": "Choose the size of the HTML heading that should be used, h1-h6.",
        "param_name": "heading_size",
        "value": {
          "1": "H1",
          "2": "H2",
          "3": "H3",
          "4": "H4",
          "5": "H5",
          "6": "H6"
        },
        "default": "2",
        "dependency": [
          {
            "element": "headings",
            "value": "show",
            "operator": "=="
          }
        ]
      },
      "avatar": {
        "type": "radio_button_set",
        "heading": "Author Avatar",
        "description": "Make a selection for author avatar.",
        "param_name": "avatar",
        "default": "square",
        "value": {
          "square": "Square",
          "circle": "Circle",
          "hide": "Hide"
        },
        "dependency": []
      },
      "biography": {
        "type": "radio_button_set",
        "heading": "Show Biography",
        "description": "Choose to show or hide author biography.",
        "param_name": "biography",
        "default": "show",
        "value": {
          "show": "Show",
          "hide": "Hide"
        },
        "dependency": []
      },
      "margin": {
        "type": "dimension",
        "remove_from_atts": true,
        "heading": "Margin",
        "description": "In pixels or percentage, ex: 10px or 10%.",
        "param_name": "margin",
        "value": {
          "margin_top": "",
          "margin_right": "",
          "margin_bottom": "",
          "margin_left": ""
        },
        "dependency": []
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
        "default": [
          "small-visibility",
          "medium-visibility",
          "large-visibility"
        ],
        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Options</a>.",
        "dependency": []
      },
      "class": {
        "type": "textfield",
        "heading": "CSS Class",
        "description": "Add a class to the wrapping HTML element.",
        "param_name": "class",
        "value": "",
        "dependency": []
      },
      "id": {
        "type": "textfield",
        "heading": "CSS ID",
        "description": "Add an ID to the wrapping HTML element.",
        "param_name": "id",
        "value": "",
        "dependency": []
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
        "group": "Extras",
        "preview": {
          "selector": ".fusion-author-tb",
          "type": "animation"
        },
        "dependency": []
      },
      "animation_direction": {
        "type": "radio_button_set",
        "heading": "Direction of Animation",
        "description": "Select the incoming direction for the animation.",
        "param_name": "animation_direction",
        "default": "left",
        "group": "Extras",
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          }
        ],
        "value": {
          "down": "Top",
          "right": "Right",
          "up": "Bottom",
          "left": "Left",
          "static": "Static"
        },
        "preview": {
          "selector": ".fusion-author-tb",
          "type": "animation"
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
        "group": "Extras",
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          }
        ],
        "preview": {
          "selector": ".fusion-author-tb",
          "type": "animation"
        }
      },
      "animation_offset": {
        "type": "select",
        "heading": "Offset of Animation",
        "description": "Controls when the animation should start.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#animation_offset\" target=\"_blank\" rel=\"noopener noreferrer\">Top Of Element Hits Bottom Of Viewport</a>.",
        "param_name": "animation_offset",
        "default": "",
        "group": "Extras",
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          }
        ],
        "value": {
          "": "Default",
          "top-into-view": "Top of element hits bottom of viewport",
          "top-mid-of-view": "Top of element hits middle of viewport",
          "bottom-in-view": "Bottom of element enters viewport"
        },
        "default_option": "animation_offset",
        "default_subset": "",
        "option_map": "select"
      }
    },
    "callback": {
      "function": "fusion_ajax",
      "action": "get_fusion_tb_author",
      "ajax": true
    },
    "remove_from_atts": [
      "margin"
    ]
  },
  "fusion_tb_comments": {
    "defaults": {
      "headings": "show",
      "heading_size": "2",
      "border_size": "1",
      "border_color": "#e2e2e2",
      "avatar": "square",
      "padding": "40",
      "margin_bottom": "",
      "margin_left": "",
      "margin_right": "",
      "margin_top": "",
      "hide_on_mobile": "small-visibility, medium-visibility, large-visibility",
      "class": "",
      "id": "",
      "animation_type": "",
      "animation_direction": "down",
      "animation_speed": "0.1",
      "animation_offset": "top-into-view"
    },
    "extras": {
      "title_margin": {
        "top": "10px",
        "bottom": "15px"
      },
      "title_border_color": "#e2e2e2",
      "title_style_type": "double solid"
    },
    "settings_to_params": {
      "separator_border_size": "border_size",
      "sep_color": "border_color"
    },
    "settings_to_extras": {
      "title_margin": "title_margin",
      "title_border_color": "title_border_color",
      "title_style_type": "title_style_type"
    },
    "name": "Comments",
    "shortcode": "fusion_tb_comments",
    "icon": "fusiona-comments",
    "class": "hidden",
    "component": true,
    "templates": [
      "content"
    ],
    "components_per_template": 1,
    "params": {
      "headings": {
        "type": "radio_button_set",
        "heading": "Show Headings",
        "description": "Choose to show or hide headings.",
        "param_name": "headings",
        "default": "show",
        "value": {
          "show": "Show",
          "hide": "Hide"
        },
        "dependency": []
      },
      "heading_size": {
        "type": "radio_button_set",
        "heading": "HTML Heading Size",
        "description": "Choose the size of the HTML heading that should be used, h1-h6.",
        "param_name": "heading_size",
        "value": {
          "1": "H1",
          "2": "H2",
          "3": "H3",
          "4": "H4",
          "5": "H5",
          "6": "H6"
        },
        "default": "2",
        "dependency": [
          {
            "element": "headings",
            "value": "show",
            "operator": "=="
          }
        ]
      },
      "border_size": {
        "type": "range",
        "heading": "Comment Separator Border Size",
        "description": "Controls the border size of the separators. In pixels.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#separator_border_size\" target=\"_blank\" rel=\"noopener noreferrer\">1</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-border_size\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"border_size\" value=\"\" data-default=\"1\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "border_size",
        "value": "",
        "min": "0",
        "max": "50",
        "step": "1",
        "default": "1",
        "default_option": "separator_border_size",
        "default_subset": "",
        "option_map": "range",
        "dependency": []
      },
      "border_color": {
        "type": "colorpickeralpha",
        "heading": "Comment Separator Border Color",
        "description": "Controls the border color of the separators.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#sep_color\" target=\"_blank\" rel=\"noopener noreferrer\">#e2e2e2</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-border_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"border_color\" value=\"\" data-default=\"#e2e2e2\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "border_color",
        "value": "",
        "default": "#e2e2e2",
        "dependency": [
          {
            "element": "border_size",
            "value": "0",
            "operator": "!="
          }
        ],
        "default_option": "sep_color",
        "default_subset": "",
        "option_map": ""
      },
      "padding": {
        "type": "range",
        "heading": "Comment Indent",
        "description": "Set left padding for child comments. In pixels.",
        "param_name": "padding",
        "value": "40",
        "min": "0",
        "max": "100",
        "step": "1",
        "dependency": []
      },
      "avatar": {
        "type": "radio_button_set",
        "heading": "Comment Avatar",
        "description": "Make a section for user comment avatar.",
        "param_name": "avatar",
        "default": "square",
        "value": {
          "square": "Square",
          "circle": "Circle",
          "hide": "Hide"
        },
        "dependency": []
      },
      "margin": {
        "type": "dimension",
        "remove_from_atts": true,
        "heading": "Margin",
        "description": "In pixels or percentage, ex: 10px or 10%.",
        "param_name": "margin",
        "value": {
          "margin_top": "",
          "margin_right": "",
          "margin_bottom": "",
          "margin_left": ""
        },
        "dependency": []
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
        "default": [
          "small-visibility",
          "medium-visibility",
          "large-visibility"
        ],
        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Options</a>.",
        "dependency": []
      },
      "class": {
        "type": "textfield",
        "heading": "CSS Class",
        "description": "Add a class to the wrapping HTML element.",
        "param_name": "class",
        "value": "",
        "dependency": []
      },
      "id": {
        "type": "textfield",
        "heading": "CSS ID",
        "description": "Add an ID to the wrapping HTML element.",
        "param_name": "id",
        "value": "",
        "dependency": []
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
        "group": "Extras",
        "preview": {
          "selector": ".fusion-comments-tb",
          "type": "animation"
        },
        "dependency": []
      },
      "animation_direction": {
        "type": "radio_button_set",
        "heading": "Direction of Animation",
        "description": "Select the incoming direction for the animation.",
        "param_name": "animation_direction",
        "default": "left",
        "group": "Extras",
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          }
        ],
        "value": {
          "down": "Top",
          "right": "Right",
          "up": "Bottom",
          "left": "Left",
          "static": "Static"
        },
        "preview": {
          "selector": ".fusion-comments-tb",
          "type": "animation"
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
        "group": "Extras",
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          }
        ],
        "preview": {
          "selector": ".fusion-comments-tb",
          "type": "animation"
        }
      },
      "animation_offset": {
        "type": "select",
        "heading": "Offset of Animation",
        "description": "Controls when the animation should start.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#animation_offset\" target=\"_blank\" rel=\"noopener noreferrer\">Top Of Element Hits Bottom Of Viewport</a>.",
        "param_name": "animation_offset",
        "default": "",
        "group": "Extras",
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          }
        ],
        "value": {
          "": "Default",
          "top-into-view": "Top of element hits bottom of viewport",
          "top-mid-of-view": "Top of element hits middle of viewport",
          "bottom-in-view": "Bottom of element enters viewport"
        },
        "default_option": "animation_offset",
        "default_subset": "",
        "option_map": "select"
      }
    },
    "callback": {
      "function": "fusion_ajax",
      "action": "get_fusion_tb_comments",
      "ajax": true
    },
    "remove_from_atts": [
      "margin"
    ]
  },
  "fusion_tb_content": {
    "defaults": {
      "margin_bottom": "",
      "margin_left": "",
      "margin_right": "",
      "margin_top": "",
      "hide_on_mobile": "small-visibility, medium-visibility, large-visibility",
      "class": "",
      "id": "",
      "animation_type": "",
      "animation_direction": "down",
      "animation_speed": "0.1",
      "animation_offset": "top-into-view"
    },
    "name": "Content",
    "shortcode": "fusion_tb_content",
    "icon": "fusiona-content",
    "class": "hidden",
    "component": true,
    "templates": [
      "content"
    ],
    "components_per_template": 1,
    "params": {
      "margin": {
        "type": "dimension",
        "remove_from_atts": true,
        "heading": "Margin",
        "description": "In pixels or percentage, ex: 10px or 10%.",
        "param_name": "margin",
        "value": {
          "margin_top": "",
          "margin_right": "",
          "margin_bottom": "",
          "margin_left": ""
        },
        "dependency": []
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
        "default": [
          "small-visibility",
          "medium-visibility",
          "large-visibility"
        ],
        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Options</a>.",
        "dependency": []
      },
      "class": {
        "type": "textfield",
        "heading": "CSS Class",
        "description": "Add a class to the wrapping HTML element.",
        "param_name": "class",
        "value": "",
        "dependency": []
      },
      "id": {
        "type": "textfield",
        "heading": "CSS ID",
        "description": "Add an ID to the wrapping HTML element.",
        "param_name": "id",
        "value": "",
        "dependency": []
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
        "group": "Extras",
        "preview": {
          "selector": ".fusion-content-tb",
          "type": "animation"
        },
        "dependency": []
      },
      "animation_direction": {
        "type": "radio_button_set",
        "heading": "Direction of Animation",
        "description": "Select the incoming direction for the animation.",
        "param_name": "animation_direction",
        "default": "left",
        "group": "Extras",
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          }
        ],
        "value": {
          "down": "Top",
          "right": "Right",
          "up": "Bottom",
          "left": "Left",
          "static": "Static"
        },
        "preview": {
          "selector": ".fusion-content-tb",
          "type": "animation"
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
        "group": "Extras",
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          }
        ],
        "preview": {
          "selector": ".fusion-content-tb",
          "type": "animation"
        }
      },
      "animation_offset": {
        "type": "select",
        "heading": "Offset of Animation",
        "description": "Controls when the animation should start.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#animation_offset\" target=\"_blank\" rel=\"noopener noreferrer\">Top Of Element Hits Bottom Of Viewport</a>.",
        "param_name": "animation_offset",
        "default": "",
        "group": "Extras",
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          }
        ],
        "value": {
          "": "Default",
          "top-into-view": "Top of element hits bottom of viewport",
          "top-mid-of-view": "Top of element hits middle of viewport",
          "bottom-in-view": "Bottom of element enters viewport"
        },
        "default_option": "animation_offset",
        "default_subset": "",
        "option_map": "select"
      }
    },
    "remove_from_atts": [
      "margin"
    ]
  },
  "fusion_tb_pagination": {
    "defaults": {
      "alignment": "",
      "font_size": "16px",
      "text_color": "#212934",
      "text_hover_color": "#65bc7b",
      "border_size": 1,
      "border_color": "#e2e2e2",
      "height": "36",
      "margin_bottom": "",
      "margin_left": "",
      "margin_right": "",
      "margin_top": "",
      "hide_on_mobile": "small-visibility, medium-visibility, large-visibility",
      "class": "",
      "id": "",
      "animation_type": "",
      "animation_direction": "down",
      "animation_speed": "0.1",
      "animation_offset": "top-into-view"
    },
    "settings_to_params": {
      "sep_color": "border_color",
      "link_color": "text_color",
      "primary_color": "text_hover_color",
      "body_typography[font-size]": "font_size"
    },
    "name": "Pagination",
    "shortcode": "fusion_tb_pagination",
    "icon": "fusiona-pagination",
    "class": "hidden",
    "component": true,
    "templates": [
      "content"
    ],
    "components_per_template": 2,
    "params": {
      "height": {
        "type": "range",
        "heading": "Height",
        "description": "Controls the pagination section height. In pixels.",
        "param_name": "height",
        "value": "36",
        "min": "0",
        "max": "200",
        "step": "1",
        "dependency": []
      },
      "alignment": {
        "type": "radio_button_set",
        "heading": "Text Alignment",
        "description": "Make a selection for pagination text alignment.",
        "param_name": "alignment",
        "default": "",
        "value": {
          "": "Distributed",
          "left": "Left",
          "right": "Right"
        },
        "dependency": []
      },
      "font_size": {
        "type": "textfield",
        "heading": "Text Font Size",
        "description": "Controls the font size for the pagination text. Enter value including CSS unit (px, em, rem), ex: 10px  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#body_typography\" target=\"_blank\" rel=\"noopener noreferrer\">16px</a>.",
        "param_name": "font_size",
        "value": "",
        "default_option": "body_typography",
        "default_subset": "font-size",
        "option_map": "",
        "dependency": []
      },
      "text_color": {
        "type": "colorpickeralpha",
        "heading": "Text Color",
        "description": "Controls the text color of the pagination section text.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#link_color\" target=\"_blank\" rel=\"noopener noreferrer\">#212934</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-text_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"text_color\" value=\"\" data-default=\"#212934\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "text_color",
        "value": "",
        "default": "#212934",
        "default_option": "link_color",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "text_hover_color": {
        "type": "colorpickeralpha",
        "heading": "Text Hover Color",
        "description": "Controls the text hover color of the pagination section text.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#primary_color\" target=\"_blank\" rel=\"noopener noreferrer\">#65bc7b</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-text_hover_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"text_hover_color\" value=\"\" data-default=\"#65bc7b\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "text_hover_color",
        "value": "",
        "default": "#65bc7b",
        "default_option": "primary_color",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "border_size": {
        "type": "range",
        "heading": "Separator Border Size",
        "description": "Controls the border size of the separators. In pixels.",
        "param_name": "border_size",
        "value": "1",
        "min": "0",
        "max": "50",
        "step": "1",
        "dependency": []
      },
      "border_color": {
        "type": "colorpickeralpha",
        "heading": "Separator Border Color",
        "description": "Controls the border color of the separators.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#sep_color\" target=\"_blank\" rel=\"noopener noreferrer\">#e2e2e2</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-border_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"border_color\" value=\"\" data-default=\"#e2e2e2\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "border_color",
        "value": "",
        "default": "#e2e2e2",
        "dependency": [
          {
            "element": "border_size",
            "value": "0",
            "operator": "!="
          }
        ],
        "default_option": "sep_color",
        "default_subset": "",
        "option_map": ""
      },
      "margin": {
        "type": "dimension",
        "remove_from_atts": true,
        "heading": "Margin",
        "description": "In pixels or percentage, ex: 10px or 10%.",
        "param_name": "margin",
        "value": {
          "margin_top": "",
          "margin_right": "",
          "margin_bottom": "",
          "margin_left": ""
        },
        "dependency": []
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
        "default": [
          "small-visibility",
          "medium-visibility",
          "large-visibility"
        ],
        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Options</a>.",
        "dependency": []
      },
      "class": {
        "type": "textfield",
        "heading": "CSS Class",
        "description": "Add a class to the wrapping HTML element.",
        "param_name": "class",
        "value": "",
        "dependency": []
      },
      "id": {
        "type": "textfield",
        "heading": "CSS ID",
        "description": "Add an ID to the wrapping HTML element.",
        "param_name": "id",
        "value": "",
        "dependency": []
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
        "group": "Extras",
        "preview": {
          "selector": ".fusion-pagination-tb",
          "type": "animation"
        },
        "dependency": []
      },
      "animation_direction": {
        "type": "radio_button_set",
        "heading": "Direction of Animation",
        "description": "Select the incoming direction for the animation.",
        "param_name": "animation_direction",
        "default": "left",
        "group": "Extras",
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          }
        ],
        "value": {
          "down": "Top",
          "right": "Right",
          "up": "Bottom",
          "left": "Left",
          "static": "Static"
        },
        "preview": {
          "selector": ".fusion-pagination-tb",
          "type": "animation"
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
        "group": "Extras",
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          }
        ],
        "preview": {
          "selector": ".fusion-pagination-tb",
          "type": "animation"
        }
      },
      "animation_offset": {
        "type": "select",
        "heading": "Offset of Animation",
        "description": "Controls when the animation should start.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#animation_offset\" target=\"_blank\" rel=\"noopener noreferrer\">Top Of Element Hits Bottom Of Viewport</a>.",
        "param_name": "animation_offset",
        "default": "",
        "group": "Extras",
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          }
        ],
        "value": {
          "": "Default",
          "top-into-view": "Top of element hits bottom of viewport",
          "top-mid-of-view": "Top of element hits middle of viewport",
          "bottom-in-view": "Bottom of element enters viewport"
        },
        "default_option": "animation_offset",
        "default_subset": "",
        "option_map": "select"
      }
    },
    "remove_from_atts": [
      "margin"
    ]
  },
  "fusion_tb_related": {
    "defaults": {
      "number_related_posts": "4",
      "related_posts_image_size": "cropped",
      "related_posts_columns": "4",
      "related_posts_layout": "title_on_rollover",
      "related_posts_navigation": "1",
      "related_posts_autoplay": "0",
      "related_posts_swipe": "0",
      "related_posts_column_spacing": "48",
      "related_posts_swipe_items": "0",
      "heading_enable": "yes",
      "heading_size": "3",
      "margin_bottom": "",
      "margin_left": "",
      "margin_right": "",
      "margin_top": "",
      "hide_on_mobile": "small-visibility, medium-visibility, large-visibility",
      "class": "",
      "id": "",
      "animation_type": "",
      "animation_direction": "down",
      "animation_speed": "0.1",
      "animation_offset": "top-into-view"
    },
    "extras": {
      "title_margin": {
        "top": "10px",
        "bottom": "15px"
      },
      "title_border_color": "#e2e2e2",
      "title_style_type": "double solid"
    },
    "settings_to_params": {
      "number_related_posts": "number_related_posts",
      "related_posts_image_size": "related_posts_image_size",
      "related_posts_columns": "related_posts_columns",
      "related_posts_navigation": "related_posts_navigation",
      "related_posts_autoplay": "related_posts_autoplay",
      "related_posts_swipe": "related_posts_swipe",
      "related_posts_column_spacing": "related_posts_column_spacing",
      "related_posts_swipe_items": "related_posts_swipe_items",
      "animation_offset": "animation_offset"
    },
    "settings_to_extras": {
      "title_margin": "title_margin",
      "title_border_color": "title_border_color",
      "title_style_type": "title_style_type"
    },
    "name": "Related Posts",
    "shortcode": "fusion_tb_related",
    "icon": "fusiona-related-posts",
    "class": "hidden",
    "component": true,
    "templates": [
      "content"
    ],
    "components_per_template": 1,
    "callback": {
      "function": "fusion_ajax",
      "action": "get_fusion_related_posts",
      "ajax": true
    },
    "params": {
      "related_posts_layout": {
        "heading": "Layout",
        "description": "Controls the layout style for related posts and related projects.",
        "param_name": "related_posts_layout",
        "default": "title_on_rollover",
        "type": "select",
        "value": {
          "title_on_rollover": "Title on rollover",
          "title_below_image": "Title below image"
        },
        "dependency": []
      },
      "number_related_posts": {
        "heading": "Number of Related Posts",
        "description": "Controls the number of related posts and projects that display on a single post.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#number_related_posts\" target=\"_blank\" rel=\"noopener noreferrer\">4</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-number_related_posts\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"number_related_posts\" value=\"\" data-default=\"4\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "number_related_posts",
        "value": "",
        "default": "4",
        "type": "range",
        "min": "0",
        "max": "30",
        "step": "1",
        "callback": {
          "function": "fusion_ajax",
          "action": "get_fusion_related_posts",
          "ajax": true
        },
        "default_option": "number_related_posts",
        "default_subset": "",
        "option_map": "range",
        "dependency": []
      },
      "related_posts_columns": {
        "heading": "Maximum Columns",
        "description": "Controls the number of columns for the related posts and projects layout.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#related_posts_columns\" target=\"_blank\" rel=\"noopener noreferrer\">4</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-related_posts_columns\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"related_posts_columns\" value=\"\" data-default=\"4\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "related_posts_columns",
        "value": "",
        "default": "4",
        "type": "range",
        "min": "1",
        "max": "6",
        "step": "1",
        "default_option": "related_posts_columns",
        "default_subset": "",
        "option_map": "range",
        "dependency": []
      },
      "related_posts_column_spacing": {
        "heading": "Column Spacing",
        "description": "Controls the amount of spacing between columns for the related posts.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#related_posts_column_spacing\" target=\"_blank\" rel=\"noopener noreferrer\">48</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-related_posts_column_spacing\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"related_posts_column_spacing\" value=\"\" data-default=\"48\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "related_posts_column_spacing",
        "value": "",
        "default": "48",
        "type": "range",
        "min": "0",
        "step": "1",
        "max": "300",
        "default_option": "related_posts_column_spacing",
        "default_subset": "",
        "option_map": "range",
        "dependency": []
      },
      "related_posts_image_size": {
        "heading": "Image Size",
        "description": "Controls if the featured image size is fixed (cropped) or auto (full image ratio) for related posts. IMPORTANT: Fixed works best with a standard 940px site width. Auto works best with larger site widths.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#related_posts_image_size\" target=\"_blank\" rel=\"noopener noreferrer\">Fixed</a>.",
        "param_name": "related_posts_image_size",
        "default": "",
        "type": "radio_button_set",
        "value": {
          "": "Default",
          "cropped": "Fixed",
          "full": "Auto"
        },
        "default_option": "related_posts_image_size",
        "default_subset": "",
        "option_map": "select",
        "dependency": []
      },
      "related_posts_autoplay": {
        "heading": "Autoplay",
        "description": "Turn on to autoplay the related posts carousel.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#related_posts_autoplay\" target=\"_blank\" rel=\"noopener noreferrer\">No</a>.",
        "param_name": "related_posts_autoplay",
        "default": "",
        "type": "radio_button_set",
        "value": {
          "": "Default",
          "yes": "Yes",
          "not": "No"
        },
        "default_option": "related_posts_autoplay",
        "default_subset": "",
        "option_map": "yesno",
        "dependency": []
      },
      "related_posts_navigation": {
        "heading": "Show Navigation",
        "description": "Turn on to display navigation arrows on the carousel.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#related_posts_navigation\" target=\"_blank\" rel=\"noopener noreferrer\">Yes</a>.",
        "param_name": "related_posts_navigation",
        "default": "",
        "type": "radio_button_set",
        "value": {
          "": "Default",
          "yes": "Yes",
          "not": "No"
        },
        "default_option": "related_posts_navigation",
        "default_subset": "",
        "option_map": "yesno",
        "dependency": []
      },
      "related_posts_swipe": {
        "heading": "Mouse Scroll",
        "description": "Turn on to enable mouse drag control on the carousel.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#related_posts_swipe\" target=\"_blank\" rel=\"noopener noreferrer\">No</a>.",
        "param_name": "related_posts_swipe",
        "default": "",
        "type": "radio_button_set",
        "value": {
          "": "Default",
          "yes": "Yes",
          "not": "No"
        },
        "default_option": "related_posts_swipe",
        "default_subset": "",
        "option_map": "yesno",
        "dependency": []
      },
      "related_posts_swipe_items": {
        "heading": "Scroll Items",
        "description": "Controls the number of items that scroll at one time. Set to 0 to scroll the number of visible items.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#related_posts_swipe_items\" target=\"_blank\" rel=\"noopener noreferrer\">0</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-related_posts_swipe_items\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"related_posts_swipe_items\" value=\"\" data-default=\"0\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "related_posts_swipe_items",
        "value": "",
        "default": "0",
        "type": "range",
        "min": "0",
        "max": "15",
        "step": "1",
        "default_option": "related_posts_swipe_items",
        "default_subset": "",
        "option_map": "range",
        "dependency": []
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
        "default": [
          "small-visibility",
          "medium-visibility",
          "large-visibility"
        ],
        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Options</a>.",
        "dependency": []
      },
      "class": {
        "type": "textfield",
        "heading": "CSS Class",
        "description": "Add a class to the wrapping HTML element.",
        "param_name": "class",
        "value": "",
        "dependency": []
      },
      "id": {
        "type": "textfield",
        "heading": "CSS ID",
        "description": "Add an ID to the wrapping HTML element.",
        "param_name": "id",
        "value": "",
        "dependency": []
      },
      "heading_enable": {
        "type": "radio_button_set",
        "heading": "Enable Heading",
        "description": "Turn on if you want to display default heading.",
        "param_name": "heading_enable",
        "default": "yes",
        "value": {
          "yes": "Yes",
          "no": "No"
        },
        "group": "Design",
        "dependency": []
      },
      "heading_size": {
        "type": "radio_button_set",
        "heading": "HTML Heading Size",
        "description": "Choose the size of the HTML heading that should be used, h1-h6.",
        "param_name": "heading_size",
        "value": {
          "1": "H1",
          "2": "H2",
          "3": "H3",
          "4": "H4",
          "5": "H5",
          "6": "H6"
        },
        "default": "3",
        "group": "Design",
        "dependency": [
          {
            "element": "heading_enable",
            "value": "no",
            "operator": "!="
          }
        ]
      },
      "margin": {
        "type": "dimension",
        "remove_from_atts": true,
        "heading": "Margin",
        "description": "Enter values including any valid CSS unit, ex: 4%.",
        "param_name": "margin",
        "value": {
          "margin_top": "",
          "margin_right": "",
          "margin_bottom": "",
          "margin_left": ""
        },
        "group": "Design",
        "shortcode": "fusion_tb_related",
        "dependency": []
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
        "group": "Extras",
        "preview": {
          "selector": ".fusion-related-tb",
          "type": "animation"
        },
        "dependency": []
      },
      "animation_direction": {
        "type": "radio_button_set",
        "heading": "Direction of Animation",
        "description": "Select the incoming direction for the animation.",
        "param_name": "animation_direction",
        "default": "left",
        "group": "Extras",
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          }
        ],
        "value": {
          "down": "Top",
          "right": "Right",
          "up": "Bottom",
          "left": "Left",
          "static": "Static"
        },
        "preview": {
          "selector": ".fusion-related-tb",
          "type": "animation"
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
        "group": "Extras",
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          }
        ],
        "preview": {
          "selector": ".fusion-related-tb",
          "type": "animation"
        }
      },
      "animation_offset": {
        "type": "select",
        "heading": "Offset of Animation",
        "description": "Controls when the animation should start.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#animation_offset\" target=\"_blank\" rel=\"noopener noreferrer\">Top Of Element Hits Bottom Of Viewport</a>.",
        "param_name": "animation_offset",
        "default": "",
        "group": "Extras",
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          }
        ],
        "value": {
          "": "Default",
          "top-into-view": "Top of element hits bottom of viewport",
          "top-mid-of-view": "Top of element hits middle of viewport",
          "bottom-in-view": "Bottom of element enters viewport"
        },
        "default_option": "animation_offset",
        "default_subset": "",
        "option_map": "select"
      }
    },
    "has_ajax": {
      "number_related_posts": {
        "function": "fusion_ajax",
        "action": "get_fusion_related_posts",
        "param_name": "number_related_posts"
      }
    },
    "remove_from_atts": [
      "margin"
    ]
  },
  "fusion_tb_featured_slider": {
    "defaults": {
      "hide_on_mobile": "small-visibility, medium-visibility, large-visibility",
      "class": "",
      "id": "",
      "height": "100%",
      "width": "100%",
      "hover_type": "none",
      "margin_bottom": "",
      "margin_left": "",
      "margin_right": "",
      "margin_top": "",
      "show_first_featured_image": ""
    },
    "name": "Featured Images Slider",
    "shortcode": "fusion_tb_featured_slider",
    "icon": "fusiona-featured-images",
    "class": "hidden",
    "component": true,
    "templates": [
      "content"
    ],
    "components_per_template": 1,
    "callback": {
      "function": "fusion_ajax",
      "action": "get_fusion_featured_slider",
      "ajax": true
    },
    "subparam_map": {
      "width": "dimensions",
      "height": "dimensions"
    },
    "params": {
      "show_first_featured_image": {
        "type": "radio_button_set",
        "heading": "Show First Featured Image",
        "description": "Turn on if you don&#039;t want to display first featured image.",
        "param_name": "show_first_featured_image",
        "default": "yes",
        "value": {
          "yes": "Yes",
          "no": "No"
        },
        "callback": {
          "function": "fusion_ajax",
          "action": "get_fusion_featured_slider",
          "ajax": true
        },
        "dependency": []
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
        "default": "none",
        "callback": {
          "function": "fusion_ajax",
          "action": "get_fusion_featured_slider",
          "ajax": true
        },
        "dependency": []
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
        },
        "callback": {
          "function": "fusion_ajax",
          "action": "get_fusion_featured_slider",
          "ajax": true
        },
        "dependency": []
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
        "default": [
          "small-visibility",
          "medium-visibility",
          "large-visibility"
        ],
        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Options</a>.",
        "dependency": []
      },
      "class": {
        "type": "textfield",
        "heading": "CSS Class",
        "description": "Add a class to the wrapping HTML element.",
        "param_name": "class",
        "value": "",
        "dependency": []
      },
      "id": {
        "type": "textfield",
        "heading": "CSS ID",
        "description": "Add an ID to the wrapping HTML element.",
        "param_name": "id",
        "value": "",
        "dependency": []
      },
      "margin": {
        "type": "dimension",
        "remove_from_atts": true,
        "heading": "Margin",
        "description": "Enter values including any valid CSS unit, ex: 4%.",
        "param_name": "margin",
        "value": {
          "margin_top": "",
          "margin_right": "",
          "margin_bottom": "",
          "margin_left": ""
        },
        "group": "Design",
        "shortcode": "fusion_tb_featured_slider",
        "dependency": []
      }
    },
    "has_ajax": {
      "show_first_featured_image": {
        "function": "fusion_ajax",
        "action": "get_fusion_featured_slider",
        "param_name": "show_first_featured_image"
      },
      "hover_type": {
        "function": "fusion_ajax",
        "action": "get_fusion_featured_slider",
        "param_name": "hover_type"
      },
      "dimensions": {
        "function": "fusion_ajax",
        "action": "get_fusion_featured_slider",
        "param_name": "dimensions"
      }
    },
    "remove_from_atts": [
      "dimensions",
      "margin"
    ]
  },
  "fusion_tb_archives": {
    "defaults": {
      "hide_on_mobile": "small-visibility, medium-visibility, large-visibility",
      "class": "",
      "id": "",
      "blog_grid_column_spacing": "40",
      "blog_grid_padding": {
        "top": "30px",
        "right": "25px",
        "bottom": "25px",
        "left": "25px"
      },
      "content_alignment": "",
      "equal_heights": "no",
      "blog_grid_columns": "3",
      "pull_by": "",
      "cat_slug": "",
      "tag_slug": "",
      "exclude_tags": "",
      "excerpt": "yes",
      "excerpt_length": "10",
      "exclude_cats": "",
      "grid_box_color": "rgba(255,255,255,0)",
      "grid_element_color": "#f2f3f5",
      "grid_separator_color": "#e2e2e2",
      "grid_separator_style_type": "double|solid",
      "layout": "large",
      "meta_all": "yes",
      "meta_author": "yes",
      "meta_categories": "yes",
      "meta_comments": "yes",
      "meta_date": "yes",
      "meta_link": "yes",
      "meta_read": "yes",
      "meta_tags": "no",
      "meta_type": "no",
      "number_posts": "6",
      "offset": "",
      "order": "DESC",
      "orderby": "date",
      "paging": "",
      "posts_per_page": "-1",
      "post_status": "",
      "scrolling": "infinite",
      "show_title": "yes",
      "strip_html": "yes",
      "taxonomy": "category",
      "thumbnail": "yes",
      "title_link": "yes",
      "blog_masonry_grid_ratio": "1.5",
      "blog_masonry_width_double": "2000",
      "excerpt_words": "50",
      "title": ""
    },
    "extras": {
      "disable_date_rich_snippet_pages": "1",
      "read_more_text": "Read More",
      "pagination_global": "",
      "pagination_range_global": "1",
      "pagination_start_end_range_global": "0",
      "load_more_text": "Load More Posts",
      "image_rollover": "1"
    },
    "settings_to_extras": {
      "disable_date_rich_snippet_pages": "disable_date_rich_snippet_pages",
      "image_rollover": "image_rollover",
      "pagination_range": "pagination_range_global",
      "pagination_start_end_range": "pagination_start_end_range_global"
    },
    "name": "Archives",
    "shortcode": "fusion_tb_archives",
    "icon": "fusiona-search-results",
    "class": "hidden",
    "component": true,
    "templates": [
      "content"
    ],
    "components_per_template": 1,
    "params": {
      "number_posts": {
        "type": "range",
        "heading": "Posts Per Page",
        "description": "Select number of posts per page.  Set to -1 to display all. Set to 0 to use number of posts from Settings &gt; Reading.",
        "param_name": "number_posts",
        "value": 0,
        "min": "-1",
        "max": "25",
        "step": "1",
        "callback": {
          "function": "fusion_ajax",
          "action": "get_fusion_archives",
          "ajax": true
        },
        "dependency": []
      },
      "excerpt": {
        "type": "radio_button_set",
        "heading": "Content Display",
        "description": "Controls if the content displays as an excerpt or full content or is completely disabled.",
        "param_name": "excerpt",
        "value": {
          "yes": "Excerpt",
          "no": "Full Content",
          "hide": "No Text"
        },
        "default": "yes",
        "dependency": []
      },
      "excerpt_length": {
        "type": "range",
        "heading": "Excerpt Length",
        "description": "Insert the number of words/characters you want to show in the excerpt.",
        "param_name": "excerpt_length",
        "value": "100",
        "min": "0",
        "max": "500",
        "step": "1",
        "dependency": [
          {
            "element": "excerpt",
            "value": "full_content",
            "operator": "!="
          },
          {
            "element": "excerpt",
            "value": "no_text",
            "operator": "!="
          }
        ]
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
        "dependency": [
          {
            "element": "excerpt",
            "value": "full_content",
            "operator": "!="
          },
          {
            "element": "excerpt",
            "value": "no_text",
            "operator": "!="
          }
        ]
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
        },
        "dependency": []
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
        "dependency": [
          {
            "element": "meta_all",
            "value": "yes",
            "operator": "=="
          }
        ]
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
        "dependency": [
          {
            "element": "meta_all",
            "value": "yes",
            "operator": "=="
          }
        ]
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
        "dependency": [
          {
            "element": "meta_all",
            "value": "yes",
            "operator": "=="
          }
        ]
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
        "dependency": [
          {
            "element": "meta_all",
            "value": "yes",
            "operator": "=="
          }
        ]
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
        "dependency": [
          {
            "element": "meta_all",
            "value": "yes",
            "operator": "=="
          }
        ]
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
        "dependency": [
          {
            "element": "meta_all",
            "value": "yes",
            "operator": "=="
          }
        ]
      },
      "scrolling": {
        "type": "radio_button_set",
        "heading": "Pagination Type",
        "description": "Choose the type of pagination.",
        "param_name": "scrolling",
        "default": "pagination",
        "value": {
          "pagination": "Pagination",
          "infinite": "Infinite Scroll",
          "load_more_button": "Load More Button"
        },
        "dependency": []
      },
      "element_content": {
        "type": "tinymce",
        "heading": "Nothing Found Message",
        "description": "Replacement text when no results are found.",
        "param_name": "element_content",
        "value": "Nothing Found",
        "placeholder": true,
        "dynamic_data": true,
        "dependency": []
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
        "default": [
          "small-visibility",
          "medium-visibility",
          "large-visibility"
        ],
        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Options</a>.",
        "dependency": []
      },
      "class": {
        "type": "textfield",
        "heading": "CSS Class",
        "description": "Add a class to the wrapping HTML element.",
        "param_name": "class",
        "value": "",
        "dependency": []
      },
      "id": {
        "type": "textfield",
        "heading": "CSS ID",
        "description": "Add an ID to the wrapping HTML element.",
        "param_name": "id",
        "value": "",
        "dependency": []
      },
      "layout": {
        "type": "select",
        "heading": "Layout",
        "description": "Select the layout for the element.",
        "param_name": "layout",
        "default": "medium",
        "value": {
          "large": "Large",
          "medium": "Medium",
          "large alternate": "Large Alternate",
          "medium alternate": "Medium Alternate",
          "grid": "Grid",
          "timeline": "Timeline"
        },
        "group": "Design",
        "dependency": []
      },
      "blog_grid_columns": {
        "type": "range",
        "heading": "Number of Columns",
        "description": "Controls the number of columns for grid layouts.",
        "param_name": "blog_grid_columns",
        "value": "",
        "default": "3",
        "min": "1",
        "max": "6",
        "step": "1",
        "dependency": [
          {
            "element": "layout",
            "value": "medium",
            "operator": "!="
          },
          {
            "element": "layout",
            "value": "large",
            "operator": "!="
          },
          {
            "element": "layout",
            "value": "medium alternate",
            "operator": "!="
          },
          {
            "element": "layout",
            "value": "large alternate",
            "operator": "!="
          },
          {
            "element": "layout",
            "value": "timeline",
            "operator": "!="
          }
        ],
        "group": "Design"
      },
      "blog_grid_column_spacing": {
        "type": "range",
        "heading": "Column Spacing",
        "description": "Controls the column spacing.",
        "param_name": "blog_grid_column_spacing",
        "value": "",
        "default": "10",
        "min": "0",
        "step": "1",
        "max": "300",
        "dependency": [
          {
            "element": "layout",
            "value": "medium",
            "operator": "!="
          },
          {
            "element": "layout",
            "value": "large",
            "operator": "!="
          },
          {
            "element": "layout",
            "value": "medium alternate",
            "operator": "!="
          },
          {
            "element": "layout",
            "value": "large alternate",
            "operator": "!="
          },
          {
            "element": "layout",
            "value": "timeline",
            "operator": "!="
          },
          {
            "element": "blog_grid_columns",
            "value": 1,
            "operator": "!="
          }
        ],
        "group": "Design"
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
        "dependency": [
          {
            "element": "layout",
            "value": "grid",
            "operator": "=="
          },
          {
            "element": "blog_grid_columns",
            "value": 1,
            "operator": "!="
          }
        ],
        "group": "Design"
      },
      "thumbnail": {
        "type": "radio_button_set",
        "heading": "Show Thumbnail",
        "description": "Displays featured image.",
        "param_name": "thumbnail",
        "default": "yes",
        "value": {
          "yes": "Yes",
          "no": "No"
        },
        "group": "Design",
        "dependency": []
      },
      "content_alignment": {
        "type": "radio_button_set",
        "heading": "Content Alignment",
        "description": "Controls the alignment of contents.",
        "param_name": "content_alignment",
        "default": "",
        "value": {
          "": "Text Flow",
          "left": "Left",
          "center": "Center",
          "right": "Right"
        },
        "dependency": [
          {
            "element": "layout",
            "value": "medium",
            "operator": "!="
          },
          {
            "element": "layout",
            "value": "large",
            "operator": "!="
          },
          {
            "element": "layout",
            "value": "medium alternate",
            "operator": "!="
          },
          {
            "element": "layout",
            "value": "large alternate",
            "operator": "!="
          }
        ],
        "group": "Design"
      },
      "grid_box_color": {
        "type": "colorpickeralpha",
        "heading": "Grid Box Color",
        "description": "Controls the background color for the grid boxes.",
        "param_name": "grid_box_color",
        "value": "",
        "default": "rgba(255,255,255,0)",
        "dependency": [
          {
            "element": "layout",
            "value": "medium",
            "operator": "!="
          },
          {
            "element": "layout",
            "value": "large",
            "operator": "!="
          },
          {
            "element": "layout",
            "value": "medium alternate",
            "operator": "!="
          },
          {
            "element": "layout",
            "value": "large alternate",
            "operator": "!="
          }
        ],
        "group": "Design"
      },
      "grid_element_color": {
        "type": "colorpickeralpha",
        "heading": "Grid Element Color",
        "description": "Controls the color of borders/date box/timeline dots and arrows for the grid boxes.",
        "param_name": "grid_element_color",
        "value": "",
        "default": "#f2f3f5",
        "dependency": [
          {
            "element": "layout",
            "value": "medium",
            "operator": "!="
          },
          {
            "element": "layout",
            "value": "large",
            "operator": "!="
          },
          {
            "element": "layout",
            "value": "medium alternate",
            "operator": "!="
          },
          {
            "element": "layout",
            "value": "large alternate",
            "operator": "!="
          }
        ],
        "group": "Design"
      },
      "grid_separator_style_type": {
        "type": "select",
        "heading": "Grid Separator Style",
        "description": "Controls the line style of grid separators. <strong>Note:</strong> Separators will display, when excerpt/content or meta data below the separators is displayed.",
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
        "dependency": [
          {
            "element": "layout",
            "value": "medium",
            "operator": "!="
          },
          {
            "element": "layout",
            "value": "large",
            "operator": "!="
          },
          {
            "element": "layout",
            "value": "medium alternate",
            "operator": "!="
          },
          {
            "element": "layout",
            "value": "large alternate",
            "operator": "!="
          },
          {
            "element": "layout",
            "value": "masonry",
            "operator": "!="
          }
        ],
        "group": "Design"
      },
      "grid_separator_color": {
        "type": "colorpickeralpha",
        "heading": "Grid Separator Color",
        "description": "Controls the line style color of grid separators.",
        "param_name": "grid_separator_color",
        "value": "",
        "default": "#e2e2e2",
        "dependency": [
          {
            "element": "layout",
            "value": "medium",
            "operator": "!="
          },
          {
            "element": "layout",
            "value": "large",
            "operator": "!="
          },
          {
            "element": "layout",
            "value": "medium alternate",
            "operator": "!="
          },
          {
            "element": "layout",
            "value": "large alternate",
            "operator": "!="
          },
          {
            "element": "layout",
            "value": "masonry",
            "operator": "!="
          }
        ],
        "group": "Design"
      },
      "blog_grid_padding": {
        "type": "dimension",
        "remove_from_atts": true,
        "heading": "Grid Text Padding ",
        "description": "Controls the padding for text when using grid / masonry or timeline layout. Enter values including any valid CSS unit, ex: 30px, 25px, 0px, 25px.",
        "param_name": "blog_grid_padding",
        "value": {
          "padding_top": "",
          "padding_right": "",
          "padding_bottom": "",
          "padding_left": ""
        },
        "dependency": [
          {
            "element": "layout",
            "value": "medium",
            "operator": "!="
          },
          {
            "element": "layout",
            "value": "large",
            "operator": "!="
          },
          {
            "element": "layout",
            "value": "medium alternate",
            "operator": "!="
          },
          {
            "element": "layout",
            "value": "large alternate",
            "operator": "!="
          }
        ],
        "group": "Design"
      }
    },
    "callback": {
      "function": "fusion_ajax",
      "action": "get_fusion_archives",
      "ajax": true
    },
    "has_ajax": {
      "number_posts": {
        "function": "fusion_ajax",
        "action": "get_fusion_archives",
        "param_name": "number_posts"
      }
    },
    "remove_from_atts": [
      "blog_grid_padding"
    ]
  },
  "fusion_alert": {
    "defaults": {
      "accent_color": "",
      "animation_direction": "left",
      "animation_offset": "top-into-view",
      "animation_speed": "",
      "animation_type": "",
      "background_color": "",
      "border_size": "50",
      "box_shadow": "no",
      "class": "",
      "dismissable": "yes",
      "hide_on_mobile": "small-visibility, medium-visibility, large-visibility",
      "icon": "",
      "id": "",
      "text_align": "center",
      "text_transform": "normal",
      "type": "general"
    },
    "settings_to_params": {
      "animation_offset": "animation_offset",
      "alert_box_text_align": "text_align",
      "alert_box_text_transform": "text_transform",
      "alert_box_dismissable": "dismissable",
      "alert_border_size": "border_size",
      "alert_box_shadow": {
        "param": "box_shadow",
        "callback": "toLowerCase"
      }
    },
    "name": "Alert",
    "shortcode": "fusion_alert",
    "icon": "fusiona-exclamation-triangle",
    "preview": "/var/www/html/wordpress_avada_624/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-alert-preview.php",
    "preview_id": "fusion-builder-block-module-alert-preview-template",
    "allow_generator": true,
    "inline_editor": true,
    "inline_editor_shortcodes": false,
    "help_url": "https://theme-fusion.com/documentation/fusion-builder/elements/alert-element/",
    "params": {
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
        },
        "dependency": []
      },
      "accent_color": {
        "type": "colorpickeralpha",
        "heading": "Accent Color",
        "description": "Custom setting only. Set the border, text and icon color for custom alert boxes.",
        "param_name": "accent_color",
        "value": "#808080",
        "dependency": [
          {
            "element": "type",
            "value": "custom",
            "operator": "=="
          }
        ]
      },
      "background_color": {
        "type": "colorpickeralpha",
        "heading": "Background Color",
        "description": "Custom setting only. Set the background color for custom alert boxes.",
        "param_name": "background_color",
        "value": "#ffffff",
        "dependency": [
          {
            "element": "type",
            "value": "custom",
            "operator": "=="
          }
        ]
      },
      "border_size": {
        "type": "range",
        "heading": "Border Size",
        "param_name": "border_size",
        "default": "50",
        "description": "Custom setting only. Set the border size for custom alert boxes. In pixels.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#alert_border_size\" target=\"_blank\" rel=\"noopener noreferrer\">50</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-border_size\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"border_size\" value=\"\" data-default=\"50\">Reset to default.</a><span>Using default value.</span></span>",
        "min": "0",
        "max": "20",
        "step": "1",
        "dependency": [
          {
            "element": "type",
            "value": "custom",
            "operator": "=="
          }
        ],
        "default_option": "alert_border_size",
        "default_subset": "",
        "option_map": "range"
      },
      "icon": {
        "type": "iconpicker",
        "heading": "Select Custom Icon",
        "param_name": "icon",
        "value": "",
        "description": "Click an icon to select, click again to deselect.",
        "dependency": [
          {
            "element": "type",
            "value": "custom",
            "operator": "=="
          }
        ]
      },
      "text_align": {
        "type": "radio_button_set",
        "heading": "Content Alignment",
        "description": "Choose how the content should be displayed.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#alert_box_text_align\" target=\"_blank\" rel=\"noopener noreferrer\">Center</a>.",
        "param_name": "text_align",
        "default": "",
        "value": {
          "": "Default",
          "left": "Left",
          "center": "Center",
          "right": "Right"
        },
        "default_option": "alert_box_text_align",
        "default_subset": "",
        "option_map": "select",
        "dependency": []
      },
      "text_transform": {
        "type": "radio_button_set",
        "heading": "Text Transform",
        "description": "Choose how the text is displayed.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#alert_box_text_transform\" target=\"_blank\" rel=\"noopener noreferrer\">Normal</a>.",
        "param_name": "text_transform",
        "default": "",
        "value": {
          "": "Default",
          "normal": "Normal",
          "capitalize": "Uppercase"
        },
        "default_option": "alert_box_text_transform",
        "default_subset": "",
        "option_map": "select",
        "dependency": []
      },
      "dismissable": {
        "type": "radio_button_set",
        "heading": "Dismissable Box",
        "description": "Select if the alert box should be dismissable.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#alert_box_dismissable\" target=\"_blank\" rel=\"noopener noreferrer\">Yes</a>.",
        "param_name": "dismissable",
        "default": "",
        "value": {
          "": "Default",
          "yes": "Yes",
          "no": "No"
        },
        "default_option": "alert_box_dismissable",
        "default_subset": "",
        "option_map": "select",
        "dependency": []
      },
      "box_shadow": {
        "type": "radio_button_set",
        "heading": "Box Shadow",
        "description": "Display a box shadow below the alert box.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#alert_box_shadow\" target=\"_blank\" rel=\"noopener noreferrer\">No</a>.",
        "param_name": "box_shadow",
        "default": "",
        "value": {
          "": "Default",
          "yes": "Yes",
          "no": "No"
        },
        "default_option": "alert_box_shadow",
        "default_subset": "",
        "option_map": "select",
        "dependency": []
      },
      "element_content": {
        "type": "tinymce",
        "heading": "Alert Content",
        "description": "Insert the alert&#039;s content.",
        "param_name": "element_content",
        "value": "Your Content Goes Here",
        "placeholder": true,
        "dynamic_data": true,
        "dependency": []
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
        "group": "Extras",
        "preview": {
          "selector": ".fusion-alert",
          "type": "animation"
        },
        "dependency": []
      },
      "animation_direction": {
        "type": "radio_button_set",
        "heading": "Direction of Animation",
        "description": "Select the incoming direction for the animation.",
        "param_name": "animation_direction",
        "default": "left",
        "group": "Extras",
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          }
        ],
        "value": {
          "down": "Top",
          "right": "Right",
          "up": "Bottom",
          "left": "Left",
          "static": "Static"
        },
        "preview": {
          "selector": ".fusion-alert",
          "type": "animation"
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
        "group": "Extras",
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          }
        ],
        "preview": {
          "selector": ".fusion-alert",
          "type": "animation"
        }
      },
      "animation_offset": {
        "type": "select",
        "heading": "Offset of Animation",
        "description": "Controls when the animation should start.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#animation_offset\" target=\"_blank\" rel=\"noopener noreferrer\">Top Of Element Hits Bottom Of Viewport</a>.",
        "param_name": "animation_offset",
        "default": "",
        "group": "Extras",
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          }
        ],
        "value": {
          "": "Default",
          "top-into-view": "Top of element hits bottom of viewport",
          "top-mid-of-view": "Top of element hits middle of viewport",
          "bottom-in-view": "Bottom of element enters viewport"
        },
        "default_option": "animation_offset",
        "default_subset": "",
        "option_map": "select"
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
        "default": [
          "small-visibility",
          "medium-visibility",
          "large-visibility"
        ],
        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Options</a>.",
        "dependency": []
      },
      "class": {
        "type": "textfield",
        "heading": "CSS Class",
        "param_name": "class",
        "value": "",
        "description": "Add a class to the wrapping HTML element.",
        "dependency": []
      },
      "id": {
        "type": "textfield",
        "heading": "CSS ID",
        "param_name": "id",
        "value": "",
        "description": "Add an ID to the wrapping HTML element.",
        "dependency": []
      }
    },
    "remove_from_atts": []
  },
  "fusion_audio": {
    "defaults": {
      "animation_type": "",
      "animation_direction": "down",
      "animation_speed": "",
      "animation_offset": "top-into-view",
      "hide_on_mobile": "small-visibility, medium-visibility, large-visibility",
      "class": "",
      "id": "",
      "src": "",
      "loop": "off",
      "autoplay": "off",
      "preload": "none",
      "background_color": "#1d242d",
      "progress_color": "#ffffff",
      "controls_color_scheme": "light",
      "border_size": "0",
      "border_color": "",
      "border_radius_top_left": "0px",
      "border_radius_top_right": "0px",
      "border_radius_bottom_right": "0px",
      "border_radius_bottom_left": "0px",
      "max_width": "100%",
      "box_shadow": "no",
      "box_shadow_blur": "",
      "box_shadow_color": "",
      "box_shadow_horizontal": "",
      "box_shadow_spread": "",
      "box_shadow_vertical": ""
    },
    "settings_to_params": {
      "audio_background_color": "background_color",
      "audio_progressbar_color": "progress_color",
      "audio_controls_color_scheme": "controls_color_scheme",
      "audio_border_size": "border_size",
      "audio_border_color": "border_color",
      "audio_border_radius[top_left]": "border_radius_top_left",
      "audio_border_radius[top_right]": "border_radius_top_right",
      "audio_border_radius[bottom_right]": "border_radius_bottom_right",
      "audio_border_radius[bottom_left]": "border_radius_bottom_left",
      "audio_max_width": "max_width"
    },
    "name": "Audio",
    "shortcode": "fusion_audio",
    "icon": "fusiona-audio",
    "allow_generator": false,
    "inline_editor": false,
    "inline_editor_shortcodes": false,
    "help_url": "https://theme-fusion.com/documentation/fusion-builder/elements/audio-element/",
    "params": {
      "src": {
        "type": "uploadfile",
        "heading": "Audio",
        "description": "Upload an audio file.",
        "param_name": "src",
        "value": "",
        "data_type": "audio",
        "dependency": []
      },
      "loop": {
        "type": "radio_button_set",
        "heading": "Loop",
        "description": "Turn on to loop the media.",
        "param_name": "loop",
        "default": "off",
        "value": {
          "on": "On",
          "off": "Off"
        },
        "dependency": []
      },
      "autoplay": {
        "type": "radio_button_set",
        "heading": "Autoplay",
        "description": "Turn on to autoplay the media.",
        "param_name": "autoplay",
        "default": "off",
        "value": {
          "on": "On",
          "off": "Off"
        },
        "dependency": []
      },
      "preload": {
        "type": "radio_button_set",
        "heading": "Preload",
        "description": "Specifies if and how the audio should be loaded when the page loads. Defaults to &quot;None&quot;.<br>• &quot;None&quot;: The audio should not be loaded when the page loads.<br>• &quot;Auto&quot;: The audio should be loaded entirely when the page loads.<br>• &quot;Metadata&quot;: Only metadata should be loaded when the page loads..",
        "param_name": "preload",
        "default": "none",
        "value": {
          "auto": "Auto",
          "metadata": "Metadata",
          "none": "None"
        },
        "dependency": []
      },
      "background_color": {
        "type": "colorpickeralpha",
        "heading": "Background Color",
        "description": "Controls the background color for the audio player.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#audio_background_color\" target=\"_blank\" rel=\"noopener noreferrer\">#1d242d</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-background_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"background_color\" value=\"\" data-default=\"#1d242d\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "background_color",
        "value": "",
        "default": "#1d242d",
        "group": "Design",
        "default_option": "audio_background_color",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "controls_color_scheme": {
        "type": "radio_button_set",
        "heading": "Controls Color Scheme",
        "description": "Depending on the background color you can change this value to &quot;Light&quot; or &quot;Dark&quot; to ensure controls are visible.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#audio_controls_color_scheme\" target=\"_blank\" rel=\"noopener noreferrer\">Light</a>.",
        "param_name": "controls_color_scheme",
        "default": "",
        "value": {
          "": "Default",
          "light": "Light",
          "dark": "Dark"
        },
        "group": "Design",
        "default_option": "audio_controls_color_scheme",
        "default_subset": "",
        "option_map": "select",
        "dependency": []
      },
      "progress_color": {
        "type": "colorpickeralpha",
        "heading": "Audio Progress Color",
        "description": "Select a color for the audio progress-bar.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#audio_progressbar_color\" target=\"_blank\" rel=\"noopener noreferrer\">#ffffff</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-progress_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"progress_color\" value=\"\" data-default=\"#ffffff\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "progress_color",
        "value": "",
        "default": "#ffffff",
        "group": "Design",
        "default_option": "audio_progressbar_color",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "max_width": {
        "type": "textfield",
        "heading": "Maximum Width",
        "param_name": "max_width",
        "default": "100%",
        "description": "Set the maximum width using a valid CSS value.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#audio_max_width\" target=\"_blank\" rel=\"noopener noreferrer\">100%</a>.",
        "group": "Design",
        "default_option": "audio_max_width",
        "default_subset": "",
        "option_map": "select",
        "dependency": []
      },
      "border_size": {
        "type": "range",
        "heading": "Border Size",
        "param_name": "border_size",
        "default": "0",
        "description": "Set the border size. In pixels.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#audio_border_size\" target=\"_blank\" rel=\"noopener noreferrer\">0</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-border_size\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"border_size\" value=\"\" data-default=\"0\">Reset to default.</a><span>Using default value.</span></span>",
        "min": "0",
        "max": "10",
        "step": "1",
        "group": "Design",
        "default_option": "audio_border_size",
        "default_subset": "",
        "option_map": "range",
        "dependency": []
      },
      "border_color": {
        "type": "colorpickeralpha",
        "heading": "Border Color",
        "description": "Controls the border color for the audio player.  Currently no default selected. Can be set globally from the <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#audio_border_color\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Options</a>.",
        "param_name": "border_color",
        "value": "",
        "default": "",
        "group": "Design",
        "dependency": [
          {
            "element": "border_size",
            "value": "0",
            "operator": "!="
          },
          {
            "element": "border_size",
            "value": "",
            "operator": "!="
          }
        ],
        "default_option": "audio_border_color",
        "default_subset": "",
        "option_map": ""
      },
      "border_radius": {
        "type": "dimension",
        "remove_from_atts": true,
        "heading": "Border Radius",
        "description": "Enter values including any valid CSS unit, ex: 10px.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#audio_border_radius\" target=\"_blank\" rel=\"noopener noreferrer\">0px, 0px, 0px, 0px</a>.",
        "param_name": "border_radius",
        "group": "Design",
        "value": {
          "border_radius_top_left": "",
          "border_radius_top_right": "",
          "border_radius_bottom_right": "",
          "border_radius_bottom_left": ""
        },
        "default_option": "audio_border_radius",
        "default_subset": [
          "top_left",
          "top_right",
          "bottom_right",
          "bottom_left"
        ],
        "option_map": "",
        "dependency": []
      },
      "box_shadow": {
        "type": "radio_button_set",
        "heading": "Box Shadow",
        "description": "Set to &quot;Yes&quot; to enable box shadows.",
        "param_name": "box_shadow",
        "default": "no",
        "group": "Design",
        "value": {
          "yes": "Yes",
          "no": "No"
        },
        "dependency": []
      },
      "dimension_box_shadow": {
        "type": "dimension",
        "remove_from_atts": true,
        "heading": "Box Shadow Position",
        "description": "Set the vertical and horizontal position of the box shadow. Positive values put the shadow below and right of the box, negative values put it above and left of the box. In pixels, ex. 5px.",
        "param_name": "dimension_box_shadow",
        "value": {
          "box_shadow_vertical": "",
          "box_shadow_horizontal": ""
        },
        "group": "Design",
        "dependency": [
          {
            "element": "box_shadow",
            "value": "yes",
            "operator": "=="
          }
        ]
      },
      "box_shadow_blur": {
        "type": "range",
        "heading": "Box Shadow Blur Radius",
        "description": "Set the blur radius of the box shadow. In pixels.",
        "param_name": "box_shadow_blur",
        "value": "0",
        "min": "0",
        "max": "100",
        "step": "1",
        "group": "Design",
        "dependency": [
          {
            "element": "box_shadow",
            "value": "yes",
            "operator": "=="
          }
        ]
      },
      "box_shadow_spread": {
        "type": "range",
        "heading": "Box Shadow Spread Radius",
        "description": "Set the spread radius of the box shadow. A positive value increases the size of the shadow, a negative value decreases the size of the shadow. In pixels.",
        "param_name": "box_shadow_spread",
        "value": "0",
        "min": "-100",
        "max": "100",
        "step": "1",
        "group": "Design",
        "dependency": [
          {
            "element": "box_shadow",
            "value": "yes",
            "operator": "=="
          }
        ]
      },
      "box_shadow_color": {
        "type": "colorpickeralpha",
        "heading": "Box Shadow Color",
        "description": "Controls the color of the box shadow.",
        "param_name": "box_shadow_color",
        "value": "",
        "group": "Design",
        "dependency": [
          {
            "element": "box_shadow",
            "value": "yes",
            "operator": "=="
          }
        ]
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
        "group": "Extras",
        "preview": {
          "selector": ".fusion-audio",
          "type": "animation"
        },
        "dependency": []
      },
      "animation_direction": {
        "type": "radio_button_set",
        "heading": "Direction of Animation",
        "description": "Select the incoming direction for the animation.",
        "param_name": "animation_direction",
        "default": "left",
        "group": "Extras",
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          }
        ],
        "value": {
          "down": "Top",
          "right": "Right",
          "up": "Bottom",
          "left": "Left",
          "static": "Static"
        },
        "preview": {
          "selector": ".fusion-audio",
          "type": "animation"
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
        "group": "Extras",
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          }
        ],
        "preview": {
          "selector": ".fusion-audio",
          "type": "animation"
        }
      },
      "animation_offset": {
        "type": "select",
        "heading": "Offset of Animation",
        "description": "Controls when the animation should start.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#animation_offset\" target=\"_blank\" rel=\"noopener noreferrer\">Top Of Element Hits Bottom Of Viewport</a>.",
        "param_name": "animation_offset",
        "default": "",
        "group": "Extras",
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          }
        ],
        "value": {
          "": "Default",
          "top-into-view": "Top of element hits bottom of viewport",
          "top-mid-of-view": "Top of element hits middle of viewport",
          "bottom-in-view": "Bottom of element enters viewport"
        },
        "default_option": "animation_offset",
        "default_subset": "",
        "option_map": "select"
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
        "default": [
          "small-visibility",
          "medium-visibility",
          "large-visibility"
        ],
        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Options</a>.",
        "dependency": []
      },
      "class": {
        "type": "textfield",
        "heading": "CSS Class",
        "param_name": "class",
        "value": "",
        "description": "Add a class to the wrapping HTML element.",
        "dependency": []
      },
      "id": {
        "type": "textfield",
        "heading": "CSS ID",
        "param_name": "id",
        "value": "",
        "description": "Add an ID to the wrapping HTML element.",
        "dependency": []
      }
    },
    "remove_from_atts": [
      "border_radius",
      "dimension_box_shadow"
    ]
  },
  "fusion_builder_blank_page": {
    "name": "Blank Page",
    "shortcode": "fusion_builder_blank_page",
    "hide_from_builder": true,
    "params": {
      "blank_page_content": {
        "type": "textfield",
        "heading": "",
        "description": "",
        "param_name": "blank_page_content",
        "value": "",
        "dependency": []
      }
    },
    "remove_from_atts": []
  },
  "fusion_breadcrumbs": {
    "defaults": {
      "prefix": "",
      "separator": "/",
      "show_categories": "1",
      "post_type_archive": "0",
      "alignment": "",
      "font_size": "14px",
      "text_color": "#4a4e57",
      "text_hover_color": "#65bc7b",
      "margin_bottom": "",
      "margin_left": "",
      "margin_right": "",
      "margin_top": "",
      "class": "",
      "id": "",
      "hide_on_mobile": "small-visibility, medium-visibility, large-visibility",
      "animation_direction": "left",
      "animation_offset": "top-into-view",
      "animation_speed": "",
      "animation_type": ""
    },
    "settings_to_params": {
      "breacrumb_prefix": "prefix",
      "breadcrumb_separator": "separator",
      "breadcrumbs_font_size": "font_size",
      "breadcrumbs_text_color": "text_color",
      "breadcrumbs_text_hover_color": "text_hover_color",
      "breadcrumb_show_categories": "show_categories",
      "breadcrumb_show_post_type_archive": "post_type_archive"
    },
    "name": "Breadcrumbs",
    "shortcode": "fusion_breadcrumbs",
    "icon": "fusiona-breadcrumb",
    "escape_html": true,
    "help_url": "",
    "params": {
      "prefix": {
        "type": "textfield",
        "heading": "Prefix",
        "description": "Controls the text before the breadcrumb menu.  Currently no default selected. Can be set globally from the <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#breacrumb_prefix\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Options</a>.",
        "param_name": "prefix",
        "value": "",
        "callback": {
          "function": "fusion_update_breadcrumbs_prefix",
          "args": {
            "selector": ".fusion-breadcrumbs"
          }
        },
        "default_option": "breacrumb_prefix",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "separator": {
        "type": "textfield",
        "heading": "Separator",
        "description": "Controls the type of separator between each breadcrumb.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#breadcrumb_separator\" target=\"_blank\" rel=\"noopener noreferrer\">/</a>.",
        "param_name": "separator",
        "value": "",
        "escape_html": true,
        "callback": {
          "function": "fusion_update_breadcrumbs_separator",
          "args": {
            "selector": ".fusion-breadcrumbs"
          }
        },
        "default_option": "breadcrumb_separator",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "alignment": {
        "type": "radio_button_set",
        "heading": "Alignment",
        "description": "Select the beadcrumbs alignment.",
        "param_name": "alignment",
        "default": "",
        "value": {
          "": "Text Flow",
          "left": "Left",
          "center": "Center",
          "right": "Right"
        },
        "group": "Design",
        "dependency": []
      },
      "font_size": {
        "type": "textfield",
        "heading": "Font Size",
        "description": "Controls the font size for the breadcrumbs text. Enter value including CSS unit (px, em, rem), ex: 10px  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#breadcrumbs_font_size\" target=\"_blank\" rel=\"noopener noreferrer\">14px</a>.",
        "param_name": "font_size",
        "value": "",
        "group": "Design",
        "default_option": "breadcrumbs_font_size",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "text_color": {
        "type": "colorpickeralpha",
        "heading": "Text Color",
        "description": "Controls the text color of the breadcrumbs font.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#breadcrumbs_text_color\" target=\"_blank\" rel=\"noopener noreferrer\">#4a4e57</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-text_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"text_color\" value=\"\" data-default=\"#4a4e57\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "text_color",
        "value": "",
        "default": "#4a4e57",
        "group": "Design",
        "default_option": "breadcrumbs_text_color",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "text_hover_color": {
        "type": "colorpickeralpha",
        "heading": "Text Hover Color",
        "description": "Controls the text hover color of the breadcrumbs font.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#breadcrumbs_text_hover_color\" target=\"_blank\" rel=\"noopener noreferrer\">#65bc7b</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-text_hover_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"text_hover_color\" value=\"\" data-default=\"#65bc7b\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "text_hover_color",
        "value": "",
        "default": "#65bc7b",
        "group": "Design",
        "default_option": "breadcrumbs_text_hover_color",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "margin": {
        "type": "dimension",
        "remove_from_atts": true,
        "heading": "Margin",
        "description": "In pixels or percentage, ex: 10px or 10%.",
        "param_name": "margin",
        "value": {
          "margin_top": "",
          "margin_right": "",
          "margin_bottom": "",
          "margin_left": ""
        },
        "group": "Design",
        "dependency": []
      },
      "show_categories": {
        "type": "radio_button_set",
        "heading": "Show Post Categories",
        "description": "Turn on to display the post categories in the breadcrumbs path.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#breadcrumb_show_categories\" target=\"_blank\" rel=\"noopener noreferrer\">Yes</a>.",
        "param_name": "show_categories",
        "default": "",
        "value": {
          "": "Default",
          "yes": "Yes",
          "no": "No"
        },
        "callback": {
          "function": "fusion_ajax",
          "action": "get_fusion_breadcrumbs",
          "ajax": true
        },
        "default_option": "breadcrumb_show_categories",
        "default_subset": "",
        "option_map": "yesno",
        "dependency": []
      },
      "post_type_archive": {
        "type": "radio_button_set",
        "heading": "Show Post Type Archives",
        "description": "Turn on to display post type archives in the breadcrumbs path.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#breadcrumb_show_post_type_archive\" target=\"_blank\" rel=\"noopener noreferrer\">No</a>.",
        "param_name": "post_type_archive",
        "default": "",
        "value": {
          "": "Default",
          "yes": "Yes",
          "no": "No"
        },
        "callback": {
          "function": "fusion_ajax",
          "action": "get_fusion_breadcrumbs",
          "ajax": true
        },
        "default_option": "breadcrumb_show_post_type_archive",
        "default_subset": "",
        "option_map": "yesno",
        "dependency": []
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
        "default": [
          "small-visibility",
          "medium-visibility",
          "large-visibility"
        ],
        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Options</a>.",
        "dependency": []
      },
      "class": {
        "type": "textfield",
        "heading": "CSS Class",
        "param_name": "class",
        "value": "",
        "description": "Add a class to the wrapping HTML element.",
        "dependency": []
      },
      "id": {
        "type": "textfield",
        "heading": "CSS ID",
        "param_name": "id",
        "value": "",
        "description": "Add an ID to the wrapping HTML element.",
        "dependency": []
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
        "group": "Extras",
        "preview": {
          "selector": ".fusion-breadcrumbs",
          "type": "animation"
        },
        "dependency": []
      },
      "animation_direction": {
        "type": "radio_button_set",
        "heading": "Direction of Animation",
        "description": "Select the incoming direction for the animation.",
        "param_name": "animation_direction",
        "default": "left",
        "group": "Extras",
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          }
        ],
        "value": {
          "down": "Top",
          "right": "Right",
          "up": "Bottom",
          "left": "Left",
          "static": "Static"
        },
        "preview": {
          "selector": ".fusion-breadcrumbs",
          "type": "animation"
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
        "group": "Extras",
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          }
        ],
        "preview": {
          "selector": ".fusion-breadcrumbs",
          "type": "animation"
        }
      },
      "animation_offset": {
        "type": "select",
        "heading": "Offset of Animation",
        "description": "Controls when the animation should start.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#animation_offset\" target=\"_blank\" rel=\"noopener noreferrer\">Top Of Element Hits Bottom Of Viewport</a>.",
        "param_name": "animation_offset",
        "default": "",
        "group": "Extras",
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          }
        ],
        "value": {
          "": "Default",
          "top-into-view": "Top of element hits bottom of viewport",
          "top-mid-of-view": "Top of element hits middle of viewport",
          "bottom-in-view": "Bottom of element enters viewport"
        },
        "default_option": "animation_offset",
        "default_subset": "",
        "option_map": "select"
      }
    },
    "callback": {
      "function": "fusion_ajax",
      "action": "get_fusion_breadcrumbs",
      "ajax": true
    },
    "has_ajax": {
      "show_categories": {
        "function": "fusion_ajax",
        "action": "get_fusion_breadcrumbs",
        "param_name": "show_categories"
      },
      "post_type_archive": {
        "function": "fusion_ajax",
        "action": "get_fusion_breadcrumbs",
        "param_name": "post_type_archive"
      }
    },
    "remove_from_atts": [
      "margin"
    ]
  },
  "fusion_blog": {
    "defaults": {
      "hide_on_mobile": "small-visibility, medium-visibility, large-visibility",
      "class": "",
      "id": "",
      "blog_grid_column_spacing": "40",
      "blog_grid_padding": {
        "top": "30px",
        "right": "25px",
        "bottom": "25px",
        "left": "25px"
      },
      "content_alignment": "",
      "equal_heights": "no",
      "blog_grid_columns": "3",
      "pull_by": "",
      "cat_slug": "",
      "tag_slug": "",
      "exclude_tags": "",
      "excerpt": "yes",
      "excerpt_length": "10",
      "exclude_cats": "",
      "grid_box_color": "rgba(255,255,255,0)",
      "grid_element_color": "#f2f3f5",
      "grid_separator_color": "#e2e2e2",
      "grid_separator_style_type": "double|solid",
      "layout": "large",
      "meta_all": "yes",
      "meta_author": "yes",
      "meta_categories": "yes",
      "meta_comments": "yes",
      "meta_date": "yes",
      "meta_link": "yes",
      "meta_read": "yes",
      "meta_tags": "no",
      "meta_type": "no",
      "number_posts": "6",
      "offset": "",
      "order": "DESC",
      "orderby": "date",
      "paging": "",
      "posts_per_page": "-1",
      "post_status": "",
      "scrolling": "infinite",
      "show_title": "yes",
      "strip_html": "yes",
      "taxonomy": "category",
      "thumbnail": "yes",
      "title_link": "yes",
      "blog_masonry_grid_ratio": "1.5",
      "blog_masonry_width_double": "2000",
      "excerpt_words": "50",
      "title": ""
    },
    "extras": {
      "disable_date_rich_snippet_pages": "1",
      "read_more_text": "Read More",
      "pagination_global": "",
      "pagination_range_global": "1",
      "pagination_start_end_range_global": "0",
      "load_more_text": "Load More Posts",
      "image_rollover": "1"
    },
    "settings_to_params": {
      "timeline_bg_color": "grid_box_color",
      "timeline_color": "grid_element_color",
      "blog_grid_padding": "blog_grid_padding",
      "blog_grid_columns": "blog_grid_columns",
      "blog_grid_column_spacing": "blog_grid_column_spacing",
      "blog_excerpt": "excerpt",
      "blog_excerpt_length": "excerpt_length"
    },
    "settings_to_extras": {
      "disable_date_rich_snippet_pages": "disable_date_rich_snippet_pages",
      "image_rollover": "image_rollover",
      "pagination_range": "pagination_range_global",
      "pagination_start_end_range": "pagination_start_end_range_global"
    },
    "name": "Blog",
    "shortcode": "fusion_blog",
    "icon": "fusiona-blog",
    "preview": "/var/www/html/wordpress_avada_624/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-blog-preview.php",
    "preview_id": "fusion-builder-block-module-blog-preview-template",
    "help_url": "https://theme-fusion.com/documentation/fusion-builder/elements/blog-element/",
    "params": {
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
        },
        "dependency": []
      },
      "blog_grid_columns": {
        "type": "range",
        "heading": "Number of Columns",
        "description": "Set the number of columns per row. <strong>IMPORTANT:</strong> Masonry layout does not work with 1 column.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#blog_grid_columns\" target=\"_blank\" rel=\"noopener noreferrer\">3</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-blog_grid_columns\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"blog_grid_columns\" value=\"\" data-default=\"3\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "blog_grid_columns",
        "value": "",
        "default": "3",
        "min": "1",
        "max": "6",
        "step": "1",
        "dependency": [
          {
            "element": "layout",
            "value": "medium",
            "operator": "!="
          },
          {
            "element": "layout",
            "value": "large",
            "operator": "!="
          },
          {
            "element": "layout",
            "value": "medium alternate",
            "operator": "!="
          },
          {
            "element": "layout",
            "value": "large alternate",
            "operator": "!="
          },
          {
            "element": "layout",
            "value": "timeline",
            "operator": "!="
          }
        ],
        "default_option": "blog_grid_columns",
        "default_subset": "",
        "option_map": "range"
      },
      "blog_grid_column_spacing": {
        "type": "range",
        "heading": "Column Spacing",
        "description": "Controls the column spacing for blog posts.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#blog_grid_column_spacing\" target=\"_blank\" rel=\"noopener noreferrer\">40</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-blog_grid_column_spacing\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"blog_grid_column_spacing\" value=\"\" data-default=\"40\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "blog_grid_column_spacing",
        "value": "",
        "default": "40",
        "min": "0",
        "step": "1",
        "max": "300",
        "dependency": [
          {
            "element": "layout",
            "value": "medium",
            "operator": "!="
          },
          {
            "element": "layout",
            "value": "large",
            "operator": "!="
          },
          {
            "element": "layout",
            "value": "medium alternate",
            "operator": "!="
          },
          {
            "element": "layout",
            "value": "large alternate",
            "operator": "!="
          },
          {
            "element": "layout",
            "value": "timeline",
            "operator": "!="
          },
          {
            "element": "blog_grid_columns",
            "value": 1,
            "operator": "!="
          }
        ],
        "default_option": "blog_grid_column_spacing",
        "default_subset": "",
        "option_map": "range"
      },
      "blog_masonry_grid_ratio": {
        "type": "range",
        "heading": "Masonry Image Aspect Ratio",
        "description": "Set the ratio to decide when an image should become landscape (ratio being width : height) and portrait (ratio being height : width). <strong>IMPORTANT:</strong> The value of \"1.0\" represents a special case, which will use the auto calculated ratios like in versions prior to Avada 5.5.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#masonry_grid_ratio\" target=\"_blank\" rel=\"noopener noreferrer\">1.5</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-blog_masonry_grid_ratio\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"blog_masonry_grid_ratio\" value=\"\" data-default=\"1.5\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "blog_masonry_grid_ratio",
        "value": "",
        "min": "1",
        "max": "4",
        "step": "0.1",
        "default": "1.5",
        "dependency": [
          {
            "element": "layout",
            "value": "masonry",
            "operator": "=="
          }
        ],
        "default_option": "masonry_grid_ratio",
        "default_subset": "",
        "option_map": "range"
      },
      "blog_masonry_width_double": {
        "type": "range",
        "heading": "Masonry 2x2 Width",
        "description": "This option decides when a square 1x1 image should become 2x2. This will not apply to images that highly favor landscape or portrait layouts. <strong>IMPORTANT:</strong> There is a “Masonry Image Layout” setting for every image in the WP media library that allows you to manually set how an image will appear (1x1, landscape, portrait or 2x2), regardless of the original ratio. In pixels.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#masonry_width_double\" target=\"_blank\" rel=\"noopener noreferrer\">2000</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-blog_masonry_width_double\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"blog_masonry_width_double\" value=\"\" data-default=\"2000\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "blog_masonry_width_double",
        "value": "",
        "min": "200",
        "max": "5120",
        "step": "1",
        "default": "2000",
        "dependency": [
          {
            "element": "layout",
            "value": "masonry",
            "operator": "=="
          }
        ],
        "default_option": "masonry_width_double",
        "default_subset": "",
        "option_map": "range"
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
        "dependency": [
          {
            "element": "layout",
            "value": "grid",
            "operator": "=="
          },
          {
            "element": "blog_grid_columns",
            "value": 1,
            "operator": "!="
          }
        ]
      },
      "number_posts": {
        "type": "range",
        "heading": "Posts Per Page",
        "description": "Select number of posts per page.  Set to -1 to display all. Set to 0 to use number of posts from Settings &gt; Reading.",
        "param_name": "number_posts",
        "value": "6",
        "min": "-1",
        "max": "25",
        "step": "1",
        "callback": {
          "function": "fusion_ajax",
          "action": "get_fusion_blog",
          "ajax": true
        },
        "dependency": []
      },
      "post_status": {
        "type": "multiple_select",
        "heading": "Post Status",
        "placeholder": "Post Status",
        "description": "Select the status(es) of the posts that should be included or leave blank for published only posts.",
        "param_name": "post_status",
        "value": {
          "publish": "Published",
          "draft": "Drafted",
          "future": "Scheduled",
          "private": "Private",
          "pending": "Pending"
        },
        "default": "",
        "callback": {
          "function": "fusion_ajax",
          "action": "get_fusion_blog",
          "ajax": true
        },
        "dependency": []
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
        "dependency": [
          {
            "element": "number_posts",
            "value": "-1",
            "operator": "!="
          }
        ],
        "callback": {
          "function": "fusion_ajax",
          "action": "get_fusion_blog",
          "ajax": true
        }
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
        },
        "callback": {
          "function": "fusion_ajax",
          "action": "get_fusion_blog",
          "ajax": true
        },
        "dependency": []
      },
      "cat_slug": {
        "type": "multiple_select",
        "heading": "Categories",
        "placeholder": "Categories",
        "description": "Select categories or leave blank for all.",
        "param_name": "cat_slug",
        "value": {
          "uncategorized": "Uncategorized (8)"
        },
        "default": "",
        "dependency": [
          {
            "element": "pull_by",
            "value": "tag",
            "operator": "!="
          }
        ],
        "callback": {
          "function": "fusion_ajax",
          "action": "get_fusion_blog",
          "ajax": true
        }
      },
      "exclude_cats": {
        "type": "multiple_select",
        "heading": "Exclude Categories",
        "placeholder": "Categories",
        "description": "Select categories to exclude.",
        "param_name": "exclude_cats",
        "value": {
          "uncategorized": "Uncategorized (8)"
        },
        "default": "",
        "dependency": [
          {
            "element": "pull_by",
            "value": "tag",
            "operator": "!="
          }
        ],
        "callback": {
          "function": "fusion_ajax",
          "action": "get_fusion_blog",
          "ajax": true
        }
      },
      "tag_slug": {
        "type": "multiple_select",
        "heading": "Tags",
        "placeholder": "Tags",
        "description": "Select a tag or leave blank for all.",
        "param_name": "tag_slug",
        "value": [],
        "default": "",
        "dependency": [
          {
            "element": "pull_by",
            "value": "category",
            "operator": "!="
          }
        ],
        "callback": {
          "function": "fusion_ajax",
          "action": "get_fusion_blog",
          "ajax": true
        }
      },
      "exclude_tags": {
        "type": "multiple_select",
        "heading": "Exclude Tags",
        "placeholder": "Tags",
        "description": "Select a tag to exclude.",
        "param_name": "exclude_tags",
        "value": [],
        "default": "",
        "dependency": [
          {
            "element": "pull_by",
            "value": "category",
            "operator": "!="
          }
        ],
        "callback": {
          "function": "fusion_ajax",
          "action": "get_fusion_blog",
          "ajax": true
        }
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
        },
        "callback": {
          "function": "fusion_ajax",
          "action": "get_fusion_blog",
          "ajax": true
        },
        "dependency": []
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
        "dependency": [
          {
            "element": "orderby",
            "value": "rand",
            "operator": "!="
          }
        ],
        "callback": {
          "function": "fusion_ajax",
          "action": "get_fusion_blog",
          "ajax": true
        }
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
        },
        "dependency": []
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
        },
        "dependency": []
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
        "dependency": [
          {
            "element": "title",
            "value": "yes",
            "operator": "=="
          }
        ]
      },
      "content_alignment": {
        "type": "radio_button_set",
        "heading": "Content Alignment",
        "description": "Controls the alignment of contents.",
        "param_name": "content_alignment",
        "default": "",
        "value": {
          "": "Text Flow",
          "left": "Left",
          "center": "Center",
          "right": "Right"
        },
        "dependency": [
          {
            "element": "layout",
            "value": "medium",
            "operator": "!="
          },
          {
            "element": "layout",
            "value": "large",
            "operator": "!="
          },
          {
            "element": "layout",
            "value": "medium alternate",
            "operator": "!="
          },
          {
            "element": "layout",
            "value": "large alternate",
            "operator": "!="
          }
        ]
      },
      "excerpt": {
        "type": "radio_button_set",
        "heading": "Text display",
        "description": "Controls if the blog post content is displayed as excerpt, full content or is completely disabled.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#blog_excerpt\" target=\"_blank\" rel=\"noopener noreferrer\">Excerpt</a>.",
        "param_name": "excerpt",
        "value": {
          "": "Default",
          "yes": "Excerpt",
          "no": "Full Content",
          "hide": "No Text"
        },
        "default": "",
        "default_option": "blog_excerpt",
        "default_subset": "",
        "option_map": "select",
        "dependency": []
      },
      "excerpt_length": {
        "type": "range",
        "heading": "Excerpt Length",
        "description": "Insert the number of words/characters you want to show in the excerpt.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#blog_excerpt_length\" target=\"_blank\" rel=\"noopener noreferrer\">10</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-excerpt_length\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"excerpt_length\" value=\"\" data-default=\"10\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "excerpt_length",
        "value": "",
        "min": "0",
        "max": "500",
        "step": "1",
        "default": "10",
        "dependency": [
          {
            "element": "excerpt",
            "value": "no",
            "operator": "!="
          },
          {
            "element": "excerpt",
            "value": "hide",
            "operator": "!="
          }
        ],
        "default_option": "blog_excerpt_length",
        "default_subset": "",
        "option_map": "range"
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
        "dependency": [
          {
            "element": "excerpt",
            "value": "no",
            "operator": "!="
          },
          {
            "element": "excerpt",
            "value": "hide",
            "operator": "!="
          }
        ]
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
        },
        "dependency": []
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
        "dependency": [
          {
            "element": "meta_all",
            "value": "yes",
            "operator": "=="
          }
        ]
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
        "dependency": [
          {
            "element": "meta_all",
            "value": "yes",
            "operator": "=="
          }
        ]
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
        "dependency": [
          {
            "element": "meta_all",
            "value": "yes",
            "operator": "=="
          }
        ]
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
        "dependency": [
          {
            "element": "meta_all",
            "value": "yes",
            "operator": "=="
          }
        ]
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
        "dependency": [
          {
            "element": "meta_all",
            "value": "yes",
            "operator": "=="
          }
        ]
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
        "dependency": [
          {
            "element": "meta_all",
            "value": "yes",
            "operator": "=="
          }
        ]
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
        },
        "dependency": []
      },
      "grid_box_color": {
        "type": "colorpickeralpha",
        "heading": "Grid Box Color",
        "description": "Controls the background color for the grid boxes.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#timeline_bg_color\" target=\"_blank\" rel=\"noopener noreferrer\">rgba(255,255,255,0)</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-grid_box_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"grid_box_color\" value=\"\" data-default=\"rgba(255,255,255,0)\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "grid_box_color",
        "value": "",
        "default": "rgba(255,255,255,0)",
        "dependency": [
          {
            "element": "layout",
            "value": "medium",
            "operator": "!="
          },
          {
            "element": "layout",
            "value": "large",
            "operator": "!="
          },
          {
            "element": "layout",
            "value": "medium alternate",
            "operator": "!="
          },
          {
            "element": "layout",
            "value": "large alternate",
            "operator": "!="
          }
        ],
        "default_option": "timeline_bg_color",
        "default_subset": "",
        "option_map": ""
      },
      "grid_element_color": {
        "type": "colorpickeralpha",
        "heading": "Grid Element Color",
        "description": "Controls the color of borders/date box/timeline dots and arrows for the grid boxes.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#timeline_color\" target=\"_blank\" rel=\"noopener noreferrer\">#f2f3f5</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-grid_element_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"grid_element_color\" value=\"\" data-default=\"#f2f3f5\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "grid_element_color",
        "value": "",
        "default": "#f2f3f5",
        "dependency": [
          {
            "element": "layout",
            "value": "medium",
            "operator": "!="
          },
          {
            "element": "layout",
            "value": "large",
            "operator": "!="
          },
          {
            "element": "layout",
            "value": "medium alternate",
            "operator": "!="
          },
          {
            "element": "layout",
            "value": "large alternate",
            "operator": "!="
          }
        ],
        "default_option": "timeline_color",
        "default_subset": "",
        "option_map": ""
      },
      "grid_separator_style_type": {
        "type": "select",
        "heading": "Grid Separator Style",
        "description": "Controls the line style of grid separators. <strong>Note:</strong> Separators will display, when excerpt/content or meta data below the separators is displayed.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#grid_separator_style_type\" target=\"_blank\" rel=\"noopener noreferrer\">Double Border Solid</a>.",
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
        "dependency": [
          {
            "element": "layout",
            "value": "medium",
            "operator": "!="
          },
          {
            "element": "layout",
            "value": "large",
            "operator": "!="
          },
          {
            "element": "layout",
            "value": "medium alternate",
            "operator": "!="
          },
          {
            "element": "layout",
            "value": "large alternate",
            "operator": "!="
          },
          {
            "element": "layout",
            "value": "masonry",
            "operator": "!="
          }
        ],
        "default_option": "grid_separator_style_type",
        "default_subset": "",
        "option_map": "select"
      },
      "grid_separator_color": {
        "type": "colorpickeralpha",
        "heading": "Grid Separator Color",
        "description": "Controls the line style color of grid separators.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#grid_separator_color\" target=\"_blank\" rel=\"noopener noreferrer\">#e2e2e2</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-grid_separator_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"grid_separator_color\" value=\"\" data-default=\"#e2e2e2\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "grid_separator_color",
        "value": "",
        "default": "#e2e2e2",
        "dependency": [
          {
            "element": "layout",
            "value": "medium",
            "operator": "!="
          },
          {
            "element": "layout",
            "value": "large",
            "operator": "!="
          },
          {
            "element": "layout",
            "value": "medium alternate",
            "operator": "!="
          },
          {
            "element": "layout",
            "value": "large alternate",
            "operator": "!="
          },
          {
            "element": "layout",
            "value": "masonry",
            "operator": "!="
          }
        ],
        "default_option": "grid_separator_color",
        "default_subset": "",
        "option_map": ""
      },
      "blog_grid_padding": {
        "type": "dimension",
        "remove_from_atts": true,
        "heading": "Blog Grid Text Padding ",
        "description": "Controls the padding for the blog text when using grid / masonry or timeline layout. Enter values including any valid CSS unit, ex: 30px, 25px, 0px, 25px.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#blog_grid_padding\" target=\"_blank\" rel=\"noopener noreferrer\">30px, 25px, 25px, 25px</a>.",
        "param_name": "blog_grid_padding",
        "value": {
          "padding_top": "",
          "padding_right": "",
          "padding_bottom": "",
          "padding_left": ""
        },
        "dependency": [
          {
            "element": "layout",
            "value": "medium",
            "operator": "!="
          },
          {
            "element": "layout",
            "value": "large",
            "operator": "!="
          },
          {
            "element": "layout",
            "value": "medium alternate",
            "operator": "!="
          },
          {
            "element": "layout",
            "value": "large alternate",
            "operator": "!="
          }
        ],
        "default_option": "blog_grid_padding",
        "default_subset": [
          "top",
          "left",
          "bottom",
          "right"
        ],
        "option_map": ""
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
        "default": [
          "small-visibility",
          "medium-visibility",
          "large-visibility"
        ],
        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Options</a>.",
        "dependency": []
      },
      "class": {
        "type": "textfield",
        "heading": "CSS Class",
        "description": "Add a class to the wrapping HTML element.",
        "param_name": "class",
        "value": "",
        "dependency": []
      },
      "id": {
        "type": "textfield",
        "heading": "CSS ID",
        "description": "Add an ID to the wrapping HTML element.",
        "param_name": "id",
        "value": "",
        "dependency": []
      }
    },
    "callback": {
      "function": "fusion_ajax",
      "action": "get_fusion_blog",
      "ajax": true
    },
    "has_ajax": {
      "number_posts": {
        "function": "fusion_ajax",
        "action": "get_fusion_blog",
        "param_name": "number_posts"
      },
      "post_status": {
        "function": "fusion_ajax",
        "action": "get_fusion_blog",
        "param_name": "post_status"
      },
      "offset": {
        "function": "fusion_ajax",
        "action": "get_fusion_blog",
        "param_name": "offset"
      },
      "pull_by": {
        "function": "fusion_ajax",
        "action": "get_fusion_blog",
        "param_name": "pull_by"
      },
      "cat_slug": {
        "function": "fusion_ajax",
        "action": "get_fusion_blog",
        "param_name": "cat_slug"
      },
      "exclude_cats": {
        "function": "fusion_ajax",
        "action": "get_fusion_blog",
        "param_name": "exclude_cats"
      },
      "tag_slug": {
        "function": "fusion_ajax",
        "action": "get_fusion_blog",
        "param_name": "tag_slug"
      },
      "exclude_tags": {
        "function": "fusion_ajax",
        "action": "get_fusion_blog",
        "param_name": "exclude_tags"
      },
      "orderby": {
        "function": "fusion_ajax",
        "action": "get_fusion_blog",
        "param_name": "orderby"
      },
      "order": {
        "function": "fusion_ajax",
        "action": "get_fusion_blog",
        "param_name": "order"
      }
    },
    "remove_from_atts": [
      "blog_grid_padding"
    ]
  },
  "fusion_button": {
    "defaults": {
      "hide_on_mobile": "small-visibility, medium-visibility, large-visibility",
      "class": "",
      "id": "",
      "accent_color": "#ffffff",
      "accent_hover_color": "#ffffff",
      "bevel_color": "#5db072",
      "border_color": "#ffffff",
      "border_hover_color": "#ffffff",
      "border_radius": "4px",
      "border_width": "0px",
      "color": "default",
      "gradient_colors": "",
      "icon": "",
      "icon_divider": "no",
      "icon_position": "left",
      "link": "",
      "link_attributes": "",
      "modal": "",
      "size": "large",
      "stretch": "no",
      "default_stretch_value": "no",
      "target": "_self",
      "text_transform": "",
      "title": "",
      "type": "flat",
      "alignment": "",
      "animation_type": "",
      "animation_direction": "down",
      "animation_speed": "",
      "animation_offset": "top-into-view",
      "icon_color": "",
      "text_color": "",
      "icon_hover_color": "",
      "text_hover_color": "",
      "gradient_hover_colors": "",
      "button_gradient_top_color": "#65bc7b",
      "button_gradient_bottom_color": "#65bc7b",
      "button_gradient_top_color_hover": "#5aa86c",
      "button_gradient_bottom_color_hover": "#5aa86c",
      "button_accent_color": "#ffffff",
      "button_accent_hover_color": "#ffffff",
      "button_bevel_color": "#5db072"
    },
    "extras": [],
    "settings_to_params": {
      "button_size": {
        "param": "size",
        "callback": "toLowerCase"
      },
      "button_type": "type",
      "button_gradient_top_color": "button_gradient_top_color",
      "button_gradient_bottom_color": "button_gradient_bottom_color",
      "button_gradient_top_color_hover": "button_gradient_top_color_hover",
      "button_gradient_bottom_color_hover": "button_gradient_bottom_color_hover",
      "button_accent_color": "accent_color",
      "button_accent_hover_color": "accent_hover_color",
      "button_border_color": "border_color",
      "button_border_hover_color": "border_hover_color",
      "button_bevel_color": "bevel_color",
      "button_border_width": "border_width",
      "button_border_radius": "border_radius",
      "button_span": "stretch"
    },
    "name": "Button",
    "shortcode": "fusion_button",
    "icon": "fusiona-check-empty",
    "preview": "/var/www/html/wordpress_avada_624/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-button-preview.php",
    "preview_id": "fusion-builder-block-module-button-preview-template",
    "help_url": "https://theme-fusion.com/documentation/fusion-builder/elements/button-element/",
    "inline_editor": true,
    "params": {
      "link": {
        "type": "link_selector",
        "heading": "Button URL",
        "param_name": "link",
        "value": "",
        "description": "Add the button&#039;s url ex: http://example.com.",
        "dynamic_data": true,
        "dependency": []
      },
      "element_content": {
        "type": "textfield",
        "heading": "Button Text",
        "param_name": "element_content",
        "value": "Button Text",
        "description": "Add the text that will display on button.",
        "dynamic_data": true,
        "dependency": []
      },
      "text_transform": {
        "type": "radio_button_set",
        "heading": "Text Transform",
        "description": "Choose how the text is displayed.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#button_text_transform\" target=\"_blank\" rel=\"noopener noreferrer\">Normal</a>.",
        "param_name": "text_transform",
        "default": "",
        "value": {
          "": "Default",
          "none": "Normal",
          "uppercase": "Uppercase"
        },
        "default_option": "button_text_transform",
        "default_subset": "",
        "option_map": "select",
        "dependency": []
      },
      "title": {
        "type": "textfield",
        "heading": "Button Title Attribute",
        "param_name": "title",
        "value": "",
        "description": "Set a title attribute for the button link.",
        "dynamic_data": true,
        "dependency": []
      },
      "target": {
        "type": "radio_button_set",
        "heading": "Button Target",
        "description": "_self = open in same browser tab, _blank = open in new browser tab.",
        "param_name": "target",
        "default": "_self",
        "value": {
          "_self": "_self",
          "_blank": "_blank",
          "lightbox": "Lightbox"
        },
        "dependency": []
      },
      "link_attributes": {
        "type": "textfield",
        "heading": "Button Additional Attributes",
        "param_name": "link_attributes",
        "value": "",
        "description": "Add additional attributes to the anchor tag. Separate attributes with a whitespace and use single quotes on the values, doubles don&#039;t work. If you need to add square brackets, [ ], to your attributes, please use curly brackets, { }, instead. They will be replaced correctly on the frontend. ex: rel=&#039;nofollow&#039;.",
        "dependency": []
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
        },
        "dependency": []
      },
      "modal": {
        "type": "textfield",
        "heading": "Modal Window Anchor",
        "param_name": "modal",
        "value": "",
        "description": "Add the class name of the modal window you want to open on button click. <strong>Note:</strong> The corresponding Modal Element must be added to the same page.",
        "dependency": []
      },
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
        "group": "Design",
        "dependency": []
      },
      "button_gradient_top_color": {
        "type": "colorpickeralpha",
        "heading": "Button Gradient Top Color",
        "description": "Controls the top color of the button background.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#button_gradient_top_color\" target=\"_blank\" rel=\"noopener noreferrer\">#65bc7b</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-button_gradient_top_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"button_gradient_top_color\" value=\"\" data-default=\"#65bc7b\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "button_gradient_top_color",
        "value": "",
        "group": "Design",
        "default": "#65bc7b",
        "dependency": [
          {
            "element": "color",
            "value": "custom",
            "operator": "=="
          }
        ],
        "default_option": "button_gradient_top_color",
        "default_subset": "",
        "option_map": ""
      },
      "button_gradient_bottom_color": {
        "type": "colorpickeralpha",
        "heading": "Button Gradient Bottom Color",
        "description": "Controls the bottom color of the button background.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#button_gradient_bottom_color\" target=\"_blank\" rel=\"noopener noreferrer\">#65bc7b</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-button_gradient_bottom_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"button_gradient_bottom_color\" value=\"\" data-default=\"#65bc7b\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "button_gradient_bottom_color",
        "value": "",
        "group": "Design",
        "default": "#65bc7b",
        "dependency": [
          {
            "element": "color",
            "value": "custom",
            "operator": "=="
          }
        ],
        "default_option": "button_gradient_bottom_color",
        "default_subset": "",
        "option_map": ""
      },
      "button_gradient_top_color_hover": {
        "type": "colorpickeralpha",
        "heading": "Button Gradient Top Hover Color",
        "description": "Controls the top hover color of the button background.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#button_gradient_top_color_hover\" target=\"_blank\" rel=\"noopener noreferrer\">#5aa86c</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-button_gradient_top_color_hover\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"button_gradient_top_color_hover\" value=\"\" data-default=\"#5aa86c\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "button_gradient_top_color_hover",
        "value": "",
        "group": "Design",
        "default": "#5aa86c",
        "dependency": [
          {
            "element": "color",
            "value": "custom",
            "operator": "=="
          }
        ],
        "preview": {
          "selector": ".fusion-button",
          "type": "class",
          "toggle": "hover"
        },
        "default_option": "button_gradient_top_color_hover",
        "default_subset": "",
        "option_map": ""
      },
      "button_gradient_bottom_color_hover": {
        "type": "colorpickeralpha",
        "heading": "Button Gradient Bottom Hover Color",
        "description": "Controls the bottom hover color of the button background.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#button_gradient_bottom_color_hover\" target=\"_blank\" rel=\"noopener noreferrer\">#5aa86c</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-button_gradient_bottom_color_hover\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"button_gradient_bottom_color_hover\" value=\"\" data-default=\"#5aa86c\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "button_gradient_bottom_color_hover",
        "value": "",
        "group": "Design",
        "default": "#5aa86c",
        "dependency": [
          {
            "element": "color",
            "value": "custom",
            "operator": "=="
          }
        ],
        "preview": {
          "selector": ".fusion-button",
          "type": "class",
          "toggle": "hover"
        },
        "default_option": "button_gradient_bottom_color_hover",
        "default_subset": "",
        "option_map": ""
      },
      "accent_color": {
        "type": "colorpickeralpha",
        "heading": "Button Text Color",
        "description": "Controls the color of the button text, divider and icon.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#button_accent_color\" target=\"_blank\" rel=\"noopener noreferrer\">#ffffff</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-accent_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"accent_color\" value=\"\" data-default=\"#ffffff\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "accent_color",
        "value": "",
        "group": "Design",
        "default": "#ffffff",
        "dependency": [
          {
            "element": "color",
            "value": "custom",
            "operator": "=="
          }
        ],
        "default_option": "button_accent_color",
        "default_subset": "",
        "option_map": ""
      },
      "accent_hover_color": {
        "type": "colorpickeralpha",
        "heading": "Button Accent Hover Color",
        "description": "Controls the hover color of the button text, divider and icon.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#button_accent_hover_color\" target=\"_blank\" rel=\"noopener noreferrer\">#ffffff</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-accent_hover_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"accent_hover_color\" value=\"\" data-default=\"#ffffff\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "accent_hover_color",
        "value": "",
        "group": "Design",
        "default": "#ffffff",
        "dependency": [
          {
            "element": "color",
            "value": "custom",
            "operator": "=="
          }
        ],
        "preview": {
          "selector": ".fusion-button",
          "type": "class",
          "toggle": "hover"
        },
        "default_option": "button_accent_hover_color",
        "default_subset": "",
        "option_map": ""
      },
      "type": {
        "type": "radio_button_set",
        "heading": "Button Type",
        "description": "Controls the button type.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#button_type\" target=\"_blank\" rel=\"noopener noreferrer\">Flat</a>.",
        "param_name": "type",
        "default": "",
        "group": "Design",
        "value": {
          "": "Default",
          "flat": "Flat",
          "3d": "3D"
        },
        "default_option": "button_type",
        "default_subset": "",
        "option_map": "select",
        "dependency": []
      },
      "bevel_color": {
        "type": "colorpickeralpha",
        "heading": "Button Bevel Color For 3D Mode",
        "description": "Controls the bevel color of the button when using 3D button type.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#button_bevel_color\" target=\"_blank\" rel=\"noopener noreferrer\">#5db072</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-bevel_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"bevel_color\" value=\"\" data-default=\"#5db072\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "bevel_color",
        "value": "",
        "group": "Design",
        "default": "#5db072",
        "dependency": [
          {
            "element": "type",
            "value": "flat",
            "operator": "!="
          },
          {
            "element": "color",
            "value": "custom",
            "operator": "=="
          },
          {
            "element": "type",
            "value": "",
            "operator": "!="
          }
        ],
        "default_option": "button_bevel_color",
        "default_subset": "",
        "option_map": ""
      },
      "border_width": {
        "type": "range",
        "heading": "Button Border Size",
        "param_name": "border_width",
        "description": "Controls the border size. In pixels.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#button_border_width\" target=\"_blank\" rel=\"noopener noreferrer\">0</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-border_width\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"border_width\" value=\"\" data-default=\"0\">Reset to default.</a><span>Using default value.</span></span>",
        "group": "Design",
        "dependency": [
          {
            "element": "color",
            "value": "custom",
            "operator": "=="
          }
        ],
        "min": "0",
        "max": "20",
        "step": "1",
        "value": "",
        "default": "0",
        "default_option": "button_border_width",
        "default_subset": "",
        "option_map": "range"
      },
      "border_radius": {
        "type": "range",
        "heading": "Button Border Radius",
        "param_name": "border_radius",
        "description": "Controls the border radius. In pixels.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#button_border_radius\" target=\"_blank\" rel=\"noopener noreferrer\">4</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-border_radius\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"border_radius\" value=\"\" data-default=\"4\">Reset to default.</a><span>Using default value.</span></span>",
        "group": "Design",
        "min": "0",
        "max": "50",
        "step": "1",
        "value": "",
        "default": "4",
        "default_option": "button_border_radius",
        "default_subset": "",
        "option_map": "range",
        "dependency": []
      },
      "border_color": {
        "type": "colorpickeralpha",
        "heading": "Button Border Color",
        "description": "Controls the border color of the button.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#button_border_color\" target=\"_blank\" rel=\"noopener noreferrer\">#ffffff</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-border_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"border_color\" value=\"\" data-default=\"#ffffff\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "border_color",
        "value": "",
        "group": "Design",
        "default": "#ffffff",
        "dependency": [
          {
            "element": "color",
            "value": "custom",
            "operator": "=="
          }
        ],
        "default_option": "button_border_color",
        "default_subset": "",
        "option_map": ""
      },
      "border_hover_color": {
        "type": "colorpickeralpha",
        "heading": "Button Border Hover Color",
        "description": "Controls the hover border color of the button.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#button_border_hover_color\" target=\"_blank\" rel=\"noopener noreferrer\">#ffffff</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-border_hover_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"border_hover_color\" value=\"\" data-default=\"#ffffff\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "border_hover_color",
        "value": "",
        "group": "Design",
        "default": "#ffffff",
        "dependency": [
          {
            "element": "color",
            "value": "custom",
            "operator": "=="
          }
        ],
        "preview": {
          "selector": ".fusion-button",
          "type": "class",
          "toggle": "hover"
        },
        "default_option": "button_border_hover_color",
        "default_subset": "",
        "option_map": ""
      },
      "size": {
        "type": "radio_button_set",
        "heading": "Button Size",
        "description": "Controls the button size.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#button_size\" target=\"_blank\" rel=\"noopener noreferrer\">Large</a>.",
        "param_name": "size",
        "default": "",
        "group": "Design",
        "value": {
          "": "Default",
          "small": "Small",
          "medium": "Medium",
          "large": "Large",
          "xlarge": "XLarge"
        },
        "default_option": "button_size",
        "default_subset": "",
        "option_map": "select",
        "dependency": []
      },
      "stretch": {
        "type": "radio_button_set",
        "heading": "Button Span",
        "description": "Controls if the button spans the full width of its container.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#button_span\" target=\"_blank\" rel=\"noopener noreferrer\">No</a>.",
        "param_name": "stretch",
        "default": "default",
        "group": "Design",
        "value": {
          "default": "Default",
          "yes": "Yes",
          "no": "No"
        },
        "default_option": "button_span",
        "default_subset": "",
        "option_map": "select",
        "dependency": []
      },
      "icon": {
        "type": "iconpicker",
        "heading": "Icon",
        "param_name": "icon",
        "value": "",
        "description": "Click an icon to select, click again to deselect.",
        "group": "Design",
        "dependency": []
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
        "dependency": [
          {
            "element": "icon",
            "value": "",
            "operator": "!="
          }
        ]
      },
      "icon_divider": {
        "type": "radio_button_set",
        "heading": "Icon Divider",
        "description": "Choose to display a divider between icon and text.",
        "param_name": "icon_divider",
        "default": "no",
        "group": "Design",
        "dependency": [
          {
            "element": "icon",
            "value": "",
            "operator": "!="
          }
        ],
        "value": {
          "yes": "Yes",
          "no": "No"
        }
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
        "group": "Extras",
        "preview": {
          "selector": ".fusion-button",
          "type": "animation"
        },
        "dependency": []
      },
      "animation_direction": {
        "type": "radio_button_set",
        "heading": "Direction of Animation",
        "description": "Select the incoming direction for the animation.",
        "param_name": "animation_direction",
        "default": "left",
        "group": "Extras",
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          }
        ],
        "value": {
          "down": "Top",
          "right": "Right",
          "up": "Bottom",
          "left": "Left",
          "static": "Static"
        },
        "preview": {
          "selector": ".fusion-button",
          "type": "animation"
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
        "group": "Extras",
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          }
        ],
        "preview": {
          "selector": ".fusion-button",
          "type": "animation"
        }
      },
      "animation_offset": {
        "type": "select",
        "heading": "Offset of Animation",
        "description": "Controls when the animation should start.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#animation_offset\" target=\"_blank\" rel=\"noopener noreferrer\">Top Of Element Hits Bottom Of Viewport</a>.",
        "param_name": "animation_offset",
        "default": "",
        "group": "Extras",
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          }
        ],
        "value": {
          "": "Default",
          "top-into-view": "Top of element hits bottom of viewport",
          "top-mid-of-view": "Top of element hits middle of viewport",
          "bottom-in-view": "Bottom of element enters viewport"
        },
        "default_option": "animation_offset",
        "default_subset": "",
        "option_map": "select"
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
        "default": [
          "small-visibility",
          "medium-visibility",
          "large-visibility"
        ],
        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Options</a>.",
        "dependency": []
      },
      "class": {
        "type": "textfield",
        "heading": "CSS Class",
        "param_name": "class",
        "value": "",
        "description": "Add a class to the wrapping HTML element.",
        "dependency": []
      },
      "id": {
        "type": "textfield",
        "heading": "CSS ID",
        "param_name": "id",
        "value": "",
        "description": "Add an ID to the wrapping HTML element.",
        "dependency": []
      }
    },
    "remove_from_atts": []
  },
  "fusion_chart": {
    "defaults": {
      "hide_on_mobile": "small-visibility, medium-visibility, large-visibility",
      "title": "",
      "chart_padding": "",
      "chart_type": "",
      "bg_colors": "",
      "border_colors": "",
      "chart_legend_position": "top",
      "legend_labels": "",
      "legend_text_colors": "",
      "x_axis_labels": "",
      "x_axis_label": "",
      "y_axis_label": "",
      "show_tooltips": "yes",
      "chart_border_size": 1,
      "chart_border_type": "smooth",
      "chart_fill": "start",
      "chart_point_style": "",
      "chart_point_size": "",
      "chart_point_bg_color": "",
      "chart_point_border_color": "",
      "chart_bg_color": "rgba(255,255,255,0)",
      "chart_axis_text_color": "#4a4e57",
      "chart_gridline_color": "rgba(0,0,0,0.1)",
      "class": "",
      "id": ""
    },
    "settings_to_params": {
      "chart_legend_position": "chart_legend_position",
      "chart_show_tooltips": "show_tooltips",
      "chart_bg_color": "chart_bg_color",
      "chart_axis_text_color": "chart_axis_text_color",
      "chart_gridline_color": "chart_gridline_color"
    },
    "name": "Chart",
    "shortcode": "fusion_chart",
    "icon": "fusiona-bar-chart",
    "preview": "/var/www/html/wordpress_avada_624/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-chart-preview.php",
    "multi": "multi_element_parent",
    "element_child": "fusion_chart_dataset",
    "custom_settings_view_name": "ModuleSettingsChartView",
    "custom_settings_view_js": "http://127.0.0.1/wordpress_avada_624/wp-content/plugins/fusion-builder/inc/templates/custom/js/fusion-chart-settings.js",
    "custom_settings_template_file": "/var/www/html/wordpress_avada_624/wp-content/plugins/fusion-builder/inc/templates/custom/fusion-chart-settings.php",
    "front_end_custom_settings_view_js": "http://127.0.0.1/wordpress_avada_624/wp-content/plugins/fusion-builder/inc/templates/custom/front-end/js/fusion-chart-settings.js",
    "front_end_custom_settings_template_file": "/var/www/html/wordpress_avada_624/wp-content/plugins/fusion-builder/inc/templates/custom/front-end/fusion-chart-settings.php",
    "on_save": "chartShortcodeFilter",
    "admin_enqueue_js": "http://127.0.0.1/wordpress_avada_624/wp-content/plugins/fusion-builder/shortcodes/js/fusion-chart.js",
    "preview_id": "fusion-builder-block-module-chart-preview-template",
    "child_ui": true,
    "help_url": "https://theme-fusion.com/documentation/fusion-builder/elements/chart-element/",
    "params": {
      "fake-chart-option": {
        "type": "hidden",
        "heading": "Chart Data",
        "param_name": "fake-chart-option",
        "remove_from_atts": true,
        "callback": {
          "function": "chartShortcodeFilter",
          "ajax": false
        },
        "dependency": []
      },
      "title": {
        "type": "textfield",
        "heading": "Title",
        "description": "The chart title utilizes all the H4 typography settings in <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#h4_typography\" target=\"_blank\">Theme Options</a> except for top and bottom margins.",
        "param_name": "title",
        "value": "",
        "css_class": "fusion-debounce-change",
        "dependency": []
      },
      "chart_type": {
        "type": "select",
        "heading": "Chart Type",
        "description": "Select chart type.",
        "param_name": "chart_type",
        "default": "bar",
        "value": {
          "bar": "Bar",
          "horizontalBar": "Horizontal Bar",
          "line": "Line",
          "pie": "Pie",
          "doughnut": "Doughnut",
          "radar": "Radar",
          "polarArea": "Polar Area"
        },
        "dependency": []
      },
      "chart_legend_position": {
        "type": "radio_button_set",
        "heading": "Legend Position",
        "description": "Set chart legend position. Note that on mobile devices legend will be positioned below the chart when left or right position is used.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#chart_legend_position\" target=\"_blank\" rel=\"noopener noreferrer\">Top</a>.",
        "param_name": "chart_legend_position",
        "value": {
          "": "Default",
          "top": "Top",
          "right": "Right",
          "bottom": "Bottom",
          "left": "Left",
          "off": "Off"
        },
        "default_option": "chart_legend_position",
        "default_subset": "",
        "option_map": "select",
        "dependency": []
      },
      "x_axis_label": {
        "type": "textfield",
        "heading": "X Axis Label",
        "description": "Set X axis label.",
        "param_name": "x_axis_label",
        "value": "",
        "css_class": "fusion-debounce-change",
        "dependency": [
          {
            "element": "chart_type",
            "value": "pie",
            "operator": "!="
          },
          {
            "element": "chart_type",
            "value": "doughnut",
            "operator": "!="
          },
          {
            "element": "chart_type",
            "value": "polarArea",
            "operator": "!="
          },
          {
            "element": "chart_type",
            "value": "radar",
            "operator": "!="
          }
        ]
      },
      "y_axis_label": {
        "type": "textfield",
        "heading": "Y Axis Label",
        "description": "Set Y axis label.",
        "param_name": "y_axis_label",
        "value": "",
        "css_class": "fusion-debounce-change",
        "dependency": [
          {
            "element": "chart_type",
            "value": "pie",
            "operator": "!="
          },
          {
            "element": "chart_type",
            "value": "doughnut",
            "operator": "!="
          },
          {
            "element": "chart_type",
            "value": "polarArea",
            "operator": "!="
          },
          {
            "element": "chart_type",
            "value": "radar",
            "operator": "!="
          }
        ]
      },
      "show_tooltips": {
        "type": "radio_button_set",
        "heading": "Show Tooltips",
        "description": "Choose whether tooltips should be displayed on hover. If your chart is in a column and the column has a hover type or link, tooltips are disabled.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#chart_show_tooltips\" target=\"_blank\" rel=\"noopener noreferrer\">Yes</a>.",
        "param_name": "show_tooltips",
        "value": {
          "": "Default",
          "yes": "Yes",
          "no": "No"
        },
        "default_option": "chart_show_tooltips",
        "default_subset": "",
        "option_map": "select",
        "dependency": []
      },
      "chart_border_type": {
        "type": "select",
        "heading": "Border Type",
        "description": "Select border type.",
        "param_name": "chart_border_type",
        "value": {
          "smooth": "Smooth",
          "non_smooth": "Non smooth",
          "stepped": "Stepped"
        },
        "default": "smooth",
        "dependency": [
          {
            "element": "chart_type",
            "value": "line",
            "operator": "=="
          }
        ]
      },
      "chart_fill": {
        "type": "select",
        "heading": "Chart Fill",
        "description": "Choose how line chart should be filled.",
        "param_name": "chart_fill",
        "value": {
          "start": "Start",
          "end": "End",
          "origin": "Origin",
          "off": "Not filled"
        },
        "default": "off",
        "dependency": [
          {
            "element": "chart_type",
            "value": "line",
            "operator": "=="
          }
        ]
      },
      "chart_point_style": {
        "type": "select",
        "heading": "Point Style",
        "description": "Choose point style for line charts.",
        "param_name": "chart_point_style",
        "value": {
          "circle": "Circle",
          "cross": "Cross",
          "crossRot": "Cross Rotated",
          "dash": "Dash",
          "line": "Line",
          "rect": "Rectangle",
          "rectRounded": "Rectangle Rounded",
          "rectRot": "Rectangle Rotated",
          "star": "Star",
          "triangle": "Triangle"
        },
        "default": "circle",
        "dependency": [
          {
            "element": "chart_type",
            "value": "line",
            "operator": "=="
          }
        ]
      },
      "chart_point_size": {
        "type": "range",
        "heading": "Point Size",
        "description": "Choose point size for line charts.",
        "param_name": "chart_point_size",
        "value": "3",
        "min": "0",
        "max": "20",
        "step": "1",
        "dependency": [
          {
            "element": "chart_type",
            "value": "line",
            "operator": "=="
          },
          {
            "element": "chart_point_style",
            "value": "cross",
            "operator": "!="
          },
          {
            "element": "chart_point_style",
            "value": "crossRot",
            "operator": "!="
          },
          {
            "element": "chart_point_style",
            "value": "line",
            "operator": "!="
          },
          {
            "element": "chart_point_style",
            "value": "dash",
            "operator": "!="
          },
          {
            "element": "chart_point_style",
            "value": "star",
            "operator": "!="
          }
        ]
      },
      "chart_point_bg_color": {
        "type": "colorpickeralpha",
        "heading": "Point Background Color",
        "description": "Choose point background color for line charts.",
        "param_name": "chart_point_bg_color",
        "dependency": [
          {
            "element": "chart_type",
            "value": "line",
            "operator": "=="
          },
          {
            "element": "chart_point_style",
            "value": "cross",
            "operator": "!="
          },
          {
            "element": "chart_point_style",
            "value": "crossRot",
            "operator": "!="
          },
          {
            "element": "chart_point_style",
            "value": "line",
            "operator": "!="
          },
          {
            "element": "chart_point_style",
            "value": "dash",
            "operator": "!="
          },
          {
            "element": "chart_point_style",
            "value": "star",
            "operator": "!="
          }
        ]
      },
      "chart_point_border_color": {
        "type": "colorpickeralpha",
        "heading": "Point Border Color",
        "description": "Choose point border color for line charts.",
        "param_name": "chart_point_border_color",
        "dependency": [
          {
            "element": "chart_type",
            "value": "line",
            "operator": "=="
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
        "default": [
          "small-visibility",
          "medium-visibility",
          "large-visibility"
        ],
        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Options</a>.",
        "dependency": []
      },
      "class": {
        "type": "textfield",
        "heading": "CSS Class",
        "description": "Add a class to the wrapping HTML element.",
        "param_name": "class",
        "value": "",
        "dependency": []
      },
      "id": {
        "type": "textfield",
        "heading": "CSS ID",
        "description": "Add an ID to the wrapping HTML element.",
        "param_name": "id",
        "value": "",
        "dependency": []
      }
    },
    "remove_from_atts": [
      "fake-chart-option"
    ]
  },
  "fusion_chart_dataset": {
    "defaults": {
      "title": "",
      "values": "",
      "legend_text_color": "",
      "background_color": "",
      "border_color": ""
    },
    "settings_to_params": [],
    "name": "Chart Value",
    "description": "Enter some content for this textblock",
    "shortcode": "fusion_chart_dataset",
    "custom_settings_view_name": "ModuleSettingsChartTableView",
    "front_end_custom_settings_view_js": "http://127.0.0.1/wordpress_avada_624/wp-content/plugins/fusion-builder/inc/templates/custom/front-end/js/fusion-chart-table-settings.js",
    "front_end_custom_settings_template_file": "/var/www/html/wordpress_avada_624/wp-content/plugins/fusion-builder/inc/templates/custom/front-end/fusion-chart-table-settings.php",
    "hide_from_builder": true,
    "allow_generator": true,
    "params": {
      "title": {
        "type": "textfield",
        "heading": "Label",
        "description": "Add a label for chart function.",
        "param_name": "title",
        "placeholder": true,
        "dependency": []
      },
      "values": {
        "type": "textfield",
        "heading": "Value",
        "description": "Enter values for axis. <strong>Note:</strong> Separate values with \"|\".",
        "param_name": "values",
        "placeholder": true,
        "dependency": []
      },
      "background_color": {
        "type": "colorpickeralpha",
        "heading": "Background Color",
        "description": "Controls the background color. ",
        "param_name": "background_color",
        "value": "",
        "dependency": []
      },
      "border_color": {
        "type": "colorpickeralpha",
        "heading": "Border Color",
        "description": "Controls the border color. ",
        "param_name": "border_color",
        "value": "",
        "dependency": []
      }
    },
    "remove_from_atts": []
  },
  "fusion_checklist": {
    "defaults": {
      "circle": "1",
      "circlecolor": "#65bc7b",
      "class": "",
      "divider": "no",
      "divider_color": "#e2e2e2",
      "hide_on_mobile": "small-visibility, medium-visibility, large-visibility",
      "icon": "fa-check",
      "iconcolor": "#ffffff",
      "id": "",
      "size": "16px"
    },
    "settings_to_params": {
      "checklist_circle": "circle",
      "checklist_circle_color": "circlecolor",
      "checklist_icons_color": "iconcolor",
      "checklist_divider": "divider",
      "checklist_divider_color": "divider_color",
      "checklist_item_size": "size"
    },
    "name": "Checklist",
    "shortcode": "fusion_checklist",
    "multi": "multi_element_parent",
    "element_child": "fusion_li_item",
    "icon": "fusiona-list-ul",
    "preview": "/var/www/html/wordpress_avada_624/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-checklist-preview.php",
    "preview_id": "fusion-builder-block-module-checklist-preview-template",
    "child_ui": true,
    "help_url": "https://theme-fusion.com/documentation/fusion-builder/elements/checklist-element/",
    "params": {
      "element_content": {
        "type": "tinymce",
        "heading": "Content",
        "description": "Enter some content for this content box.",
        "param_name": "element_content",
        "value": "[fusion_li_item icon=\"\"]Your Content Goes Here[/fusion_li_item]",
        "dependency": []
      },
      "icon": {
        "type": "iconpicker",
        "heading": "Select Icon",
        "param_name": "icon",
        "value": "",
        "description": "Global setting for all list items, this can be overridden individually. Click an icon to select, click again to deselect.",
        "dependency": []
      },
      "iconcolor": {
        "type": "colorpickeralpha",
        "heading": "Checklist Icon Color",
        "description": "Global setting for all list items.  Controls the color of the checklist icon.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#checklist_icons_color\" target=\"_blank\" rel=\"noopener noreferrer\">#ffffff</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-iconcolor\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"iconcolor\" value=\"\" data-default=\"#ffffff\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "iconcolor",
        "value": "",
        "default": "#ffffff",
        "default_option": "checklist_icons_color",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "circle": {
        "type": "radio_button_set",
        "heading": "Checklist Icon Circle",
        "description": "Global setting for all list items. Turn on if you want to display a circle background for checklists icons.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#checklist_circle\" target=\"_blank\" rel=\"noopener noreferrer\">Yes</a>.",
        "param_name": "circle",
        "default": "",
        "value": {
          "": "Default",
          "yes": "Yes",
          "no": "No"
        },
        "default_option": "checklist_circle",
        "default_subset": "",
        "option_map": "yesno",
        "dependency": []
      },
      "circlecolor": {
        "type": "colorpickeralpha",
        "heading": "Checklist Icon Circle Color",
        "description": "Global setting for all list items.  Controls the color of the checklist icon circle background.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#checklist_circle_color\" target=\"_blank\" rel=\"noopener noreferrer\">#65bc7b</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-circlecolor\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"circlecolor\" value=\"\" data-default=\"#65bc7b\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "circlecolor",
        "value": "",
        "default": "#65bc7b",
        "dependency": [
          {
            "element": "circle",
            "value": "no",
            "operator": "!="
          }
        ],
        "default_option": "checklist_circle_color",
        "default_subset": "",
        "option_map": ""
      },
      "size": {
        "type": "textfield",
        "heading": "Item Size",
        "description": "Select the list item&#039;s size. Enter value including any valid CSS unit, ex: 14px.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#checklist_item_size\" target=\"_blank\" rel=\"noopener noreferrer\">16px</a>.",
        "param_name": "size",
        "value": "",
        "default_option": "checklist_item_size",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "divider": {
        "type": "radio_button_set",
        "heading": "Divider Lines",
        "description": "Choose if a divider line shows between each list item.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#checklist_divider\" target=\"_blank\" rel=\"noopener noreferrer\">No</a>.",
        "param_name": "divider",
        "default": "",
        "value": {
          "": "Default",
          "yes": "Yes",
          "no": "No"
        },
        "default_option": "checklist_divider",
        "default_subset": "",
        "option_map": "select",
        "dependency": []
      },
      "divider_color": {
        "type": "colorpickeralpha",
        "heading": "Divider Line Color",
        "description": "Controls the color of the divider lines.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#checklist_divider_color\" target=\"_blank\" rel=\"noopener noreferrer\">#e2e2e2</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-divider_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"divider_color\" value=\"\" data-default=\"#e2e2e2\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "divider_color",
        "value": "",
        "default": "#e2e2e2",
        "dependency": [
          {
            "element": "divider",
            "value": "no",
            "operator": "!="
          },
          {
            "element": "divider",
            "value": "",
            "operator": "!="
          }
        ],
        "default_option": "checklist_divider_color",
        "default_subset": "",
        "option_map": ""
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
        "default": [
          "small-visibility",
          "medium-visibility",
          "large-visibility"
        ],
        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Options</a>.",
        "dependency": []
      },
      "class": {
        "type": "textfield",
        "heading": "CSS Class",
        "description": "Add a class to the wrapping HTML element.",
        "param_name": "class",
        "value": "",
        "group": "General",
        "dependency": []
      },
      "id": {
        "type": "textfield",
        "heading": "CSS ID",
        "description": "Add an ID to the wrapping HTML element.",
        "param_name": "id",
        "value": "",
        "group": "General",
        "dependency": []
      }
    },
    "remove_from_atts": []
  },
  "fusion_li_item": {
    "defaults": {
      "circle": "",
      "circlecolor": "",
      "icon": "",
      "iconcolor": ""
    },
    "settings_to_params": [],
    "name": "List Item",
    "description": "Enter some content for this list item.",
    "shortcode": "fusion_li_item",
    "hide_from_builder": true,
    "allow_generator": true,
    "inline_editor": true,
    "tag_name": "li",
    "selectors": {
      "class": "fusion-li-item"
    },
    "params": {
      "icon": {
        "type": "iconpicker",
        "heading": "Select Icon",
        "param_name": "icon",
        "value": "",
        "description": "This setting will override the global setting. ",
        "dependency": []
      },
      "element_content": {
        "type": "tinymce",
        "heading": "List Item Content",
        "description": "Add list item content.",
        "param_name": "element_content",
        "value": "Your Content Goes Here",
        "placeholder": true,
        "dynamic_data": true,
        "dependency": []
      }
    },
    "remove_from_atts": []
  },
  "fusion_code": {
    "name": "Code Block",
    "shortcode": "fusion_code",
    "icon": "fusiona-code",
    "escape_html": true,
    "help_url": "https://theme-fusion.com/documentation/fusion-builder/elements/code-block-element/",
    "params": {
      "element_content": {
        "type": "code",
        "heading": "Code",
        "description": "Enter some content for this codeblock.<br/>IMPORTANT: Please make sure that the \"Code Block Encoding\" setting in Theme Options is enabled in order for the code to appear correctly on the frontend. Currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#disable_code_block_encoding\" target=\"_blank\" rel=\"noopener noreferrer\">On</a>.",
        "param_name": "element_content",
        "value": "",
        "dependency": []
      }
    },
    "remove_from_atts": []
  },
  "fusion_builder_column_inner": {
    "defaults": {
      "hide_on_mobile": "small-visibility, medium-visibility, large-visibility",
      "class": "",
      "id": "",
      "background_color": "",
      "gradient_start_color": "",
      "gradient_end_color": "",
      "gradient_start_position": "0",
      "gradient_end_position": "100",
      "gradient_type": "linear",
      "radial_direction": "center",
      "linear_angle": "180",
      "background_image": "",
      "background_position": "left top",
      "background_repeat": "no-repeat",
      "background_blend_mode": "none",
      "border_color": "",
      "border_position": "all",
      "border_radius_bottom_left": "",
      "border_radius_bottom_right": "",
      "border_radius_top_left": "",
      "border_radius_top_right": "",
      "border_size": "",
      "border_style": "",
      "box_shadow": "",
      "box_shadow_blur": "",
      "box_shadow_color": "",
      "box_shadow_horizontal": "",
      "box_shadow_spread": "",
      "box_shadow_style": "",
      "box_shadow_vertical": "",
      "margin_top": "0px",
      "margin_bottom": "20px",
      "row_column_index": "",
      "spacing": "4%",
      "padding": "",
      "animation_type": "",
      "animation_direction": "left",
      "animation_speed": "0.3",
      "animation_offset": "top-into-view",
      "center_content": "no",
      "type": "1_3",
      "link": "",
      "target": "",
      "hover_type": "none",
      "min_height": "",
      "filter_hue": "0",
      "filter_saturation": "100",
      "filter_brightness": "100",
      "filter_contrast": "100",
      "filter_invert": "0",
      "filter_sepia": "0",
      "filter_opacity": "100",
      "filter_blur": "0",
      "filter_hue_hover": "0",
      "filter_saturation_hover": "100",
      "filter_brightness_hover": "100",
      "filter_contrast_hover": "100",
      "filter_invert_hover": "0",
      "filter_sepia_hover": "0",
      "filter_opacity_hover": "100",
      "filter_blur_hover": "0"
    },
    "settings_to_params": {
      "animation_offset": "animation_offset",
      "col_margin[top]": "margin_top",
      "col_margin[bottom]": "margin_bottom"
    },
    "name": "Nested Column",
    "shortcode": "fusion_builder_column_inner",
    "hide_from_builder": true,
    "params": {
      "spacing": {
        "type": "textfield",
        "heading": "Column Spacing",
        "description": "Controls the margin added to the column. Enter value including any valid CSS unit, ex: 4%.",
        "param_name": "spacing",
        "group": "General",
        "value": "",
        "dependency": []
      },
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
        },
        "dependency": []
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
        },
        "preview": {
          "selector": ".fusion-column-inner-bg",
          "type": "class",
          "toggle": "hover"
        },
        "dependency": []
      },
      "link": {
        "type": "link_selector",
        "heading": "Link URL",
        "description": "Add the URL the column will link to, ex: http://example.com.",
        "param_name": "link",
        "value": "",
        "dynamic_data": true,
        "dependency": []
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
        },
        "dependency": []
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
        },
        "dependency": []
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
        "default": [
          "small-visibility",
          "medium-visibility",
          "large-visibility"
        ],
        "description": "Choose to show or hide the column on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Options</a>.",
        "dependency": []
      },
      "class": {
        "type": "textfield",
        "heading": "CSS Class",
        "description": "Add a class to the wrapping HTML element.",
        "param_name": "class",
        "value": "",
        "group": "General",
        "dependency": []
      },
      "id": {
        "type": "textfield",
        "heading": "CSS ID",
        "description": "Add an ID to the wrapping HTML element.",
        "param_name": "id",
        "value": "",
        "group": "General",
        "dependency": []
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
        "group": "Design",
        "dependency": []
      },
      "border_color": {
        "type": "colorpickeralpha",
        "heading": "Border Color",
        "description": "Controls the border color.",
        "param_name": "border_color",
        "value": "",
        "group": "Design",
        "dependency": [
          {
            "element": "border_size",
            "value": "0",
            "operator": "!="
          }
        ]
      },
      "border_style": {
        "type": "radio_button_set",
        "heading": "Border Style",
        "description": "Controls the border style.",
        "param_name": "border_style",
        "default": "solid",
        "group": "Design",
        "dependency": [
          {
            "element": "border_size",
            "value": "0",
            "operator": "!="
          }
        ],
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
        "dependency": [
          {
            "element": "border_size",
            "value": "0",
            "operator": "!="
          }
        ],
        "value": {
          "all": "All",
          "top": "Top",
          "right": "Right",
          "bottom": "Bottom",
          "left": "Left"
        }
      },
      "border_radius": {
        "type": "dimension",
        "remove_from_atts": true,
        "heading": "Border Radius",
        "description": "Enter values including any valid CSS unit, ex: 10px. <strong>IMPORTANT:</strong> In order to make border radius work in browsers, the overflow CSS rule of the column needs set to hidden. Thus, depending on the setup, some contents might get clipped.",
        "param_name": "border_radius",
        "value": {
          "border_radius_top_left": "",
          "border_radius_top_right": "",
          "border_radius_bottom_right": "",
          "border_radius_bottom_left": ""
        },
        "group": "Design",
        "dependency": []
      },
      "box_shadow": {
        "type": "radio_button_set",
        "heading": "Box Shadow",
        "description": "Set to &quot;Yes&quot; to enable box shadows.",
        "param_name": "box_shadow",
        "default": "no",
        "group": "Design",
        "value": {
          "yes": "Yes",
          "no": "No"
        },
        "dependency": []
      },
      "dimension_box_shadow": {
        "type": "dimension",
        "remove_from_atts": true,
        "heading": "Box Shadow Position",
        "description": "Set the vertical and horizontal position of the box shadow. Positive values put the shadow below and right of the box, negative values put it above and left of the box. In pixels, ex. 5px.",
        "param_name": "dimension_box_shadow",
        "value": {
          "box_shadow_vertical": "",
          "box_shadow_horizontal": ""
        },
        "group": "Design",
        "dependency": [
          {
            "element": "box_shadow",
            "value": "yes",
            "operator": "=="
          }
        ]
      },
      "box_shadow_blur": {
        "type": "range",
        "heading": "Box Shadow Blur Radius",
        "description": "Set the blur radius of the box shadow. In pixels.",
        "param_name": "box_shadow_blur",
        "value": "0",
        "min": "0",
        "max": "100",
        "step": "1",
        "group": "Design",
        "dependency": [
          {
            "element": "box_shadow",
            "value": "yes",
            "operator": "=="
          }
        ]
      },
      "box_shadow_spread": {
        "type": "range",
        "heading": "Box Shadow Spread Radius",
        "description": "Set the spread radius of the box shadow. A positive value increases the size of the shadow, a negative value decreases the size of the shadow. In pixels.",
        "param_name": "box_shadow_spread",
        "value": "0",
        "min": "-100",
        "max": "100",
        "step": "1",
        "group": "Design",
        "dependency": [
          {
            "element": "box_shadow",
            "value": "yes",
            "operator": "=="
          }
        ]
      },
      "box_shadow_color": {
        "type": "colorpickeralpha",
        "heading": "Box Shadow Color",
        "description": "Controls the color of the box shadow.",
        "param_name": "box_shadow_color",
        "value": "",
        "group": "Design",
        "dependency": [
          {
            "element": "box_shadow",
            "value": "yes",
            "operator": "=="
          }
        ]
      },
      "box_shadow_style": {
        "type": "radio_button_set",
        "heading": "Box Shadow Style",
        "description": "Set the style of the box shadow to either be an outer or inner shadow.",
        "param_name": "box_shadow_style",
        "default": "",
        "group": "Design",
        "value": {
          "": "Outer",
          "inset": "Inner"
        },
        "dependency": [
          {
            "element": "box_shadow",
            "value": "yes",
            "operator": "=="
          }
        ]
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
        "group": "Design",
        "dependency": []
      },
      "dimension_margin": {
        "type": "dimension",
        "remove_from_atts": true,
        "heading": "Margin",
        "description": "Enter values including any valid CSS unit, ex: 4%.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#col_margin\" target=\"_blank\" rel=\"noopener noreferrer\">0px, 20px</a>.",
        "param_name": "dimension_margin",
        "value": {
          "margin_top": "",
          "margin_bottom": ""
        },
        "group": "Design",
        "shortcode": "fusion_builder_column_inner",
        "default_option": "col_margin",
        "default_subset": [
          "top",
          "bottom"
        ],
        "option_map": "",
        "dependency": []
      },
      "background_type": {
        "type": "subgroup",
        "heading": "Background Type",
        "description": "Use filters to see specific type of content.",
        "param_name": "background_type",
        "default": "single",
        "group": "BG",
        "remove_from_atts": true,
        "value": {
          "single": "Color",
          "gradient": "Gradient",
          "image": "Image"
        },
        "icons": {
          "single": "<span class=\"fusiona-fill-drip-solid\" style=\"font-size:18px;\"></span>",
          "gradient": "<span class=\"fusiona-gradient-fill\" style=\"font-size:18px;\"></span>",
          "image": "<span class=\"fusiona-image\" style=\"font-size:18px;\"></span>",
          "video": "<span class=\"fusiona-video\" style=\"font-size:18px;\"></span>"
        },
        "dependency": []
      },
      "background_color": {
        "type": "colorpickeralpha",
        "heading": "Background Color",
        "description": "Controls the background color.",
        "param_name": "background_color",
        "value": "",
        "group": "BG",
        "subgroup": {
          "name": "background_type",
          "tab": "single"
        },
        "dependency": []
      },
      "gradient_start_color": {
        "type": "colorpickeralpha",
        "heading": "Gradient Start Color",
        "param_name": "gradient_start_color",
        "default": "",
        "description": "Select start color for gradient.",
        "group": "BG",
        "subgroup": {
          "name": "background_type",
          "tab": "gradient"
        },
        "callback": {
          "function": "fusion_update_gradient_style",
          "args": {
            "selector": ".fusion-column-wrapper"
          }
        },
        "dependency": []
      },
      "gradient_end_color": {
        "type": "colorpickeralpha",
        "heading": "Gradient End Color",
        "param_name": "gradient_end_color",
        "default": "",
        "description": "Select end color for gradient.",
        "group": "BG",
        "subgroup": {
          "name": "background_type",
          "tab": "gradient"
        },
        "callback": {
          "function": "fusion_update_gradient_style",
          "args": {
            "selector": ".fusion-column-wrapper"
          }
        },
        "dependency": []
      },
      "gradient_start_position": {
        "type": "range",
        "heading": "Gradient Start Position",
        "description": "Select start position for gradient.",
        "param_name": "gradient_start_position",
        "value": "0",
        "min": "0",
        "max": "100",
        "group": "BG",
        "subgroup": {
          "name": "background_type",
          "tab": "gradient"
        },
        "callback": {
          "function": "fusion_update_gradient_style",
          "args": {
            "selector": ".fusion-column-wrapper"
          }
        },
        "dependency": []
      },
      "gradient_end_position": {
        "type": "range",
        "heading": "Gradient End Position",
        "description": "Select end position for gradient.",
        "param_name": "gradient_end_position",
        "value": "100",
        "min": "0",
        "max": "100",
        "group": "BG",
        "subgroup": {
          "name": "background_type",
          "tab": "gradient"
        },
        "callback": {
          "function": "fusion_update_gradient_style",
          "args": {
            "selector": ".fusion-column-wrapper"
          }
        },
        "dependency": []
      },
      "gradient_type": {
        "type": "radio_button_set",
        "heading": "Gradient Type",
        "description": "Controls gradient type.",
        "param_name": "gradient_type",
        "default": "linear",
        "group": "BG",
        "subgroup": {
          "name": "background_type",
          "tab": "gradient"
        },
        "callback": {
          "function": "fusion_update_gradient_style",
          "args": {
            "selector": ".fusion-column-wrapper"
          }
        },
        "value": {
          "linear": "Linear",
          "radial": "Radial"
        },
        "dependency": []
      },
      "radial_direction": {
        "type": "select",
        "heading": "Radial Direction",
        "description": "Select direction for radial gradient.",
        "param_name": "radial_direction",
        "default": "center center",
        "group": "BG",
        "subgroup": {
          "name": "background_type",
          "tab": "gradient"
        },
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
        "dependency": [
          {
            "element": "gradient_type",
            "value": "radial",
            "operator": "=="
          }
        ],
        "callback": {
          "function": "fusion_update_gradient_style",
          "args": {
            "selector": ".fusion-column-wrapper"
          }
        }
      },
      "linear_angle": {
        "type": "range",
        "heading": "Gradient Angle",
        "description": "Controls the gradient angle. In degrees.",
        "param_name": "linear_angle",
        "value": "180",
        "min": "0",
        "max": "360",
        "group": "BG",
        "subgroup": {
          "name": "background_type",
          "tab": "gradient"
        },
        "dependency": [
          {
            "element": "gradient_type",
            "value": "linear",
            "operator": "=="
          }
        ],
        "callback": {
          "function": "fusion_update_gradient_style",
          "args": {
            "selector": ".fusion-column-wrapper"
          }
        }
      },
      "background_image": {
        "type": "upload",
        "heading": "Background Image",
        "description": "Upload an image to display in the background.",
        "param_name": "background_image",
        "value": "",
        "group": "BG",
        "subgroup": {
          "name": "background_type",
          "tab": "image"
        },
        "dependency": []
      },
      "background_position": {
        "type": "select",
        "heading": "Background Position",
        "description": "Choose the postion of the background image.",
        "param_name": "background_position",
        "default": "left top",
        "group": "BG",
        "subgroup": {
          "name": "background_type",
          "tab": "image"
        },
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
        "dependency": [
          {
            "element": "background_image",
            "value": "",
            "operator": "!="
          }
        ]
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
        "group": "BG",
        "subgroup": {
          "name": "background_type",
          "tab": "image"
        },
        "dependency": [
          {
            "element": "background_image",
            "value": "",
            "operator": "!="
          }
        ]
      },
      "background_blend_mode": {
        "type": "select",
        "heading": "Background Blend Mode",
        "description": "Choose how blending should work for each background layer.",
        "param_name": "background_blend_mode",
        "value": {
          "none": "Disabled",
          "multiply": "Multiply",
          "screen": "Screen",
          "overlay": "Overlay",
          "darken": "Darken",
          "lighten": "Lighten",
          "color-dodge": "Color Dodge",
          "color-burn": "Color Burn",
          "hard-light": "Hard Light",
          "soft-light": "Soft Light",
          "difference": "Difference",
          "exclusion": "Exclusion",
          "hue": "Hue",
          "saturation": "Saturation",
          "color": "Color",
          "luminosity": "Luminosity"
        },
        "default": "none",
        "group": "BG",
        "subgroup": {
          "name": "background_type",
          "tab": "image"
        },
        "dependency": [
          {
            "element": "background_image",
            "value": "",
            "operator": "!="
          }
        ]
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
        "group": "Extras",
        "preview": {
          "selector": "$el",
          "type": "animation"
        },
        "dependency": []
      },
      "animation_direction": {
        "type": "radio_button_set",
        "heading": "Direction of Animation",
        "description": "Select the incoming direction for the animation.",
        "param_name": "animation_direction",
        "default": "left",
        "group": "Extras",
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          }
        ],
        "value": {
          "down": "Top",
          "right": "Right",
          "up": "Bottom",
          "left": "Left",
          "static": "Static"
        },
        "preview": {
          "selector": "$el",
          "type": "animation"
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
        "group": "Extras",
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          }
        ],
        "preview": {
          "selector": "$el",
          "type": "animation"
        }
      },
      "animation_offset": {
        "type": "select",
        "heading": "Offset of Animation",
        "description": "Controls when the animation should start.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#animation_offset\" target=\"_blank\" rel=\"noopener noreferrer\">Top Of Element Hits Bottom Of Viewport</a>.",
        "param_name": "animation_offset",
        "default": "",
        "group": "Extras",
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          }
        ],
        "value": {
          "": "Default",
          "top-into-view": "Top of element hits bottom of viewport",
          "top-mid-of-view": "Top of element hits middle of viewport",
          "bottom-in-view": "Bottom of element enters viewport"
        },
        "default_option": "animation_offset",
        "default_subset": "",
        "option_map": "select"
      },
      "filter_type": {
        "type": "subgroup",
        "heading": "Filter Type",
        "description": "Use filters to see specific type of content.",
        "param_name": "filter_type",
        "default": "regular",
        "group": "Extras",
        "remove_from_atts": true,
        "value": {
          "regular": "Regular",
          "hover": "Hover"
        },
        "icons": {
          "regular": "<span class=\"fusiona-regular-state\" style=\"font-size:18px;\"></span>",
          "hover": "<span class=\"fusiona-hover-state\" style=\"font-size:18px;\"></span>"
        },
        "dependency": []
      },
      "filter_hue": {
        "type": "range",
        "heading": "Hue",
        "description": "Filter hue.",
        "param_name": "filter_hue",
        "value": "0",
        "min": "0",
        "max": "359",
        "group": "Extras",
        "subgroup": {
          "name": "filter_type",
          "tab": "regular"
        },
        "callback": {
          "function": "fusion_update_filter_style",
          "args": {
            "selector_base": "fusion-column-wrapper-"
          }
        },
        "dependency": []
      },
      "filter_saturation": {
        "type": "range",
        "heading": "Saturation",
        "description": "Filter saturation.",
        "param_name": "filter_saturation",
        "value": "100",
        "min": "0",
        "max": "200",
        "group": "Extras",
        "subgroup": {
          "name": "filter_type",
          "tab": "regular"
        },
        "callback": {
          "function": "fusion_update_filter_style",
          "args": {
            "selector_base": "fusion-column-wrapper-"
          }
        },
        "dependency": []
      },
      "filter_brightness": {
        "type": "range",
        "heading": "Brightness",
        "description": "Filter brightness.",
        "param_name": "filter_brightness",
        "value": "100",
        "min": "0",
        "max": "200",
        "group": "Extras",
        "subgroup": {
          "name": "filter_type",
          "tab": "regular"
        },
        "callback": {
          "function": "fusion_update_filter_style",
          "args": {
            "selector_base": "fusion-column-wrapper-"
          }
        },
        "dependency": []
      },
      "filter_contrast": {
        "type": "range",
        "heading": "Contrast",
        "description": "Filter contrast.",
        "param_name": "filter_contrast",
        "value": "100",
        "min": "0",
        "max": "200",
        "group": "Extras",
        "subgroup": {
          "name": "filter_type",
          "tab": "regular"
        },
        "callback": {
          "function": "fusion_update_filter_style",
          "args": {
            "selector_base": "fusion-column-wrapper-"
          }
        },
        "dependency": []
      },
      "filter_invert": {
        "type": "range",
        "heading": "Invert",
        "description": "Filter invert.",
        "param_name": "filter_invert",
        "value": "0",
        "min": "0",
        "max": "100",
        "group": "Extras",
        "subgroup": {
          "name": "filter_type",
          "tab": "regular"
        },
        "callback": {
          "function": "fusion_update_filter_style",
          "args": {
            "selector_base": "fusion-column-wrapper-"
          }
        },
        "dependency": []
      },
      "filter_sepia": {
        "type": "range",
        "heading": "Sepia",
        "description": "Filter sepia.",
        "param_name": "filter_sepia",
        "value": "0",
        "min": "0",
        "max": "100",
        "group": "Extras",
        "subgroup": {
          "name": "filter_type",
          "tab": "regular"
        },
        "callback": {
          "function": "fusion_update_filter_style",
          "args": {
            "selector_base": "fusion-column-wrapper-"
          }
        },
        "dependency": []
      },
      "filter_opacity": {
        "type": "range",
        "heading": "Opacity",
        "description": "Filter opacity.",
        "param_name": "filter_opacity",
        "value": "100",
        "min": "0",
        "max": "100",
        "group": "Extras",
        "subgroup": {
          "name": "filter_type",
          "tab": "regular"
        },
        "callback": {
          "function": "fusion_update_filter_style",
          "args": {
            "selector_base": "fusion-column-wrapper-"
          }
        },
        "dependency": []
      },
      "filter_blur": {
        "type": "range",
        "heading": "Blur",
        "description": "Filter blur.  In pixels.",
        "param_name": "filter_blur",
        "value": "0",
        "min": "0",
        "max": "50",
        "group": "Extras",
        "subgroup": {
          "name": "filter_type",
          "tab": "regular"
        },
        "callback": {
          "function": "fusion_update_filter_style",
          "args": {
            "selector_base": "fusion-column-wrapper-"
          }
        },
        "dependency": []
      },
      "filter_hue_hover": {
        "type": "range",
        "heading": "Hue",
        "description": "Filter hue.",
        "param_name": "filter_hue_hover",
        "value": "0",
        "min": "0",
        "max": "359",
        "group": "Extras",
        "subgroup": {
          "name": "filter_type",
          "tab": "hover"
        },
        "callback": {
          "function": "fusion_update_filter_style",
          "args": {
            "selector_base": "fusion-column-wrapper-"
          }
        },
        "dependency": []
      },
      "filter_saturation_hover": {
        "type": "range",
        "heading": "Saturation",
        "description": "Filter saturation.",
        "param_name": "filter_saturation_hover",
        "value": "100",
        "min": "0",
        "max": "200",
        "group": "Extras",
        "subgroup": {
          "name": "filter_type",
          "tab": "hover"
        },
        "callback": {
          "function": "fusion_update_filter_style",
          "args": {
            "selector_base": "fusion-column-wrapper-"
          }
        },
        "dependency": []
      },
      "filter_brightness_hover": {
        "type": "range",
        "heading": "Brightness",
        "description": "Filter brightness.",
        "param_name": "filter_brightness_hover",
        "value": "100",
        "min": "0",
        "max": "200",
        "group": "Extras",
        "subgroup": {
          "name": "filter_type",
          "tab": "hover"
        },
        "callback": {
          "function": "fusion_update_filter_style",
          "args": {
            "selector_base": "fusion-column-wrapper-"
          }
        },
        "dependency": []
      },
      "filter_contrast_hover": {
        "type": "range",
        "heading": "Contrast",
        "description": "Filter contrast.",
        "param_name": "filter_contrast_hover",
        "value": "100",
        "min": "0",
        "max": "200",
        "group": "Extras",
        "subgroup": {
          "name": "filter_type",
          "tab": "hover"
        },
        "callback": {
          "function": "fusion_update_filter_style",
          "args": {
            "selector_base": "fusion-column-wrapper-"
          }
        },
        "dependency": []
      },
      "filter_invert_hover": {
        "type": "range",
        "heading": "Invert",
        "description": "Filter invert.",
        "param_name": "filter_invert_hover",
        "value": "0",
        "min": "0",
        "max": "100",
        "group": "Extras",
        "subgroup": {
          "name": "filter_type",
          "tab": "hover"
        },
        "callback": {
          "function": "fusion_update_filter_style",
          "args": {
            "selector_base": "fusion-column-wrapper-"
          }
        },
        "dependency": []
      },
      "filter_sepia_hover": {
        "type": "range",
        "heading": "Sepia",
        "description": "Filter sepia.",
        "param_name": "filter_sepia_hover",
        "value": "0",
        "min": "0",
        "max": "100",
        "group": "Extras",
        "subgroup": {
          "name": "filter_type",
          "tab": "hover"
        },
        "callback": {
          "function": "fusion_update_filter_style",
          "args": {
            "selector_base": "fusion-column-wrapper-"
          }
        },
        "dependency": []
      },
      "filter_opacity_hover": {
        "type": "range",
        "heading": "Opacity",
        "description": "Filter opacity.",
        "param_name": "filter_opacity_hover",
        "value": "100",
        "min": "0",
        "max": "100",
        "group": "Extras",
        "subgroup": {
          "name": "filter_type",
          "tab": "hover"
        },
        "callback": {
          "function": "fusion_update_filter_style",
          "args": {
            "selector_base": "fusion-column-wrapper-"
          }
        },
        "dependency": []
      },
      "filter_blur_hover": {
        "type": "range",
        "heading": "Blur",
        "description": "Filter blur.  In pixels.",
        "param_name": "filter_blur_hover",
        "value": "0",
        "min": "0",
        "max": "50",
        "group": "Extras",
        "subgroup": {
          "name": "filter_type",
          "tab": "hover"
        },
        "callback": {
          "function": "fusion_update_filter_style",
          "args": {
            "selector_base": "fusion-column-wrapper-"
          }
        },
        "dependency": []
      }
    },
    "remove_from_atts": [
      "border_radius",
      "dimension_box_shadow",
      "padding",
      "dimension_margin",
      "background_type",
      "filter_type"
    ]
  },
  "fusion_builder_column": {
    "defaults": {
      "hide_on_mobile": "small-visibility, medium-visibility, large-visibility",
      "class": "",
      "id": "",
      "background_color": "",
      "gradient_start_color": "",
      "gradient_end_color": "",
      "gradient_start_position": "0",
      "gradient_end_position": "100",
      "gradient_type": "linear",
      "radial_direction": "center",
      "linear_angle": "180",
      "background_image": "",
      "background_image_id": "",
      "background_position": "left top",
      "background_repeat": "no-repeat",
      "background_blend_mode": "none",
      "border_color": "",
      "border_position": "all",
      "border_radius_bottom_left": "",
      "border_radius_bottom_right": "",
      "border_radius_top_left": "",
      "border_radius_top_right": "",
      "border_size": "",
      "border_style": "",
      "box_shadow": "",
      "box_shadow_blur": "",
      "box_shadow_color": "",
      "box_shadow_horizontal": "",
      "box_shadow_spread": "",
      "box_shadow_style": "",
      "box_shadow_vertical": "",
      "margin_top": "0px",
      "margin_bottom": "20px",
      "row_column_index": "",
      "spacing": "4%",
      "padding": "",
      "padding_top": "0px",
      "padding_right": "0px",
      "padding_bottom": "0px",
      "padding_left": "0px",
      "animation_type": "",
      "animation_direction": "left",
      "animation_speed": "0.3",
      "animation_offset": "top-into-view",
      "center_content": "no",
      "type": "1_3",
      "last": "",
      "link": "",
      "target": "_self",
      "hover_type": "none",
      "min_height": "",
      "filter_hue": "0",
      "filter_saturation": "100",
      "filter_brightness": "100",
      "filter_contrast": "100",
      "filter_invert": "0",
      "filter_sepia": "0",
      "filter_opacity": "100",
      "filter_blur": "0",
      "filter_hue_hover": "0",
      "filter_saturation_hover": "100",
      "filter_brightness_hover": "100",
      "filter_contrast_hover": "100",
      "filter_invert_hover": "0",
      "filter_sepia_hover": "0",
      "filter_opacity_hover": "100",
      "filter_blur_hover": "0"
    },
    "extras": {
      "col_margin": {
        "top": "0px",
        "bottom": "20px"
      }
    },
    "settings_to_params": {
      "animation_offset": "animation_offset",
      "col_margin[top]": "margin_top",
      "col_margin[bottom]": "margin_bottom"
    },
    "settings_to_extras": {
      "col_margin": "col_margin"
    },
    "name": "Column",
    "shortcode": "fusion_builder_column",
    "hide_from_builder": true,
    "help_url": "https://theme-fusion.com/documentation/fusion-builder/elements/column-element/",
    "params": {
      "spacing": {
        "type": "textfield",
        "heading": "Column Spacing",
        "description": "Controls the column spacing between one column to the next. Enter value including any valid CSS unit, ex: 4%.",
        "param_name": "spacing",
        "group": "General",
        "value": "",
        "dependency": []
      },
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
        },
        "dependency": []
      },
      "link": {
        "type": "link_selector",
        "heading": "Link URL",
        "description": "Add the URL the column will link to, ex: http://example.com. IMPORTANT: This will disable links on elements inside the column.",
        "param_name": "link",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "target": {
        "type": "radio_button_set",
        "heading": "Link Target",
        "description": "_self = open in same browser tab, _blank = open in new browser tab.",
        "param_name": "target",
        "default": "_self",
        "value": {
          "_self": "_self",
          "_blank": "_blank",
          "lightbox": "Lightbox"
        },
        "dependency": []
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
        },
        "callback": {
          "function": "fusion_toggle_class",
          "args": {
            "classes": {
              "none": "fusion-column-no-min-height",
              "": ""
            }
          }
        },
        "dependency": []
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
        "default": [
          "small-visibility",
          "medium-visibility",
          "large-visibility"
        ],
        "description": "Choose to show or hide the column on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Options</a>.",
        "dependency": []
      },
      "class": {
        "type": "textfield",
        "heading": "CSS Class",
        "description": "Add a class to the wrapping HTML element.",
        "param_name": "class",
        "value": "",
        "group": "General",
        "callback": {
          "function": "fusion_add_class"
        },
        "dependency": []
      },
      "id": {
        "type": "textfield",
        "heading": "CSS ID",
        "description": "Add an ID to the wrapping HTML element.",
        "param_name": "id",
        "value": "",
        "group": "General",
        "callback": {
          "function": "fusion_add_id"
        },
        "dependency": []
      },
      "hover_type": {
        "type": "radio_button_set",
        "heading": "Hover Type",
        "description": "Select the hover effect type. <strong>IMPORTANT:</strong> For the effect to be noticeable, you'll need a background color/image, and/or a border enabled. This will disable links and hover effects on elements inside the column.",
        "param_name": "hover_type",
        "default": "none",
        "value": {
          "none": "None",
          "zoomin": "Zoom In",
          "zoomout": "Zoom Out",
          "liftup": "Lift Up"
        },
        "group": "Design",
        "preview": {
          "selector": ".fusion-column-inner-bg",
          "type": "class",
          "toggle": "hover"
        },
        "dependency": []
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
        "group": "Design",
        "dependency": []
      },
      "border_color": {
        "type": "colorpickeralpha",
        "heading": "Border Color",
        "description": "Controls the border color.",
        "param_name": "border_color",
        "value": "",
        "group": "Design",
        "dependency": [
          {
            "element": "border_size",
            "value": "0",
            "operator": "!="
          }
        ]
      },
      "border_style": {
        "type": "radio_button_set",
        "heading": "Border Style",
        "description": "Controls the border style.",
        "param_name": "border_style",
        "default": "solid",
        "group": "Design",
        "dependency": [
          {
            "element": "border_size",
            "value": "0",
            "operator": "!="
          }
        ],
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
        "dependency": [
          {
            "element": "border_size",
            "value": "0",
            "operator": "!="
          }
        ],
        "value": {
          "all": "All",
          "top": "Top",
          "right": "Right",
          "bottom": "Bottom",
          "left": "Left"
        }
      },
      "border_radius": {
        "type": "dimension",
        "remove_from_atts": true,
        "heading": "Border Radius",
        "description": "Enter values including any valid CSS unit, ex: 10px. <strong>IMPORTANT:</strong> In order to make border radius work in browsers, the overflow CSS rule of the column needs set to hidden. Thus, depending on the setup, some contents might get clipped.",
        "param_name": "border_radius",
        "value": {
          "border_radius_top_left": "",
          "border_radius_top_right": "",
          "border_radius_bottom_right": "",
          "border_radius_bottom_left": ""
        },
        "group": "Design",
        "dependency": []
      },
      "box_shadow": {
        "type": "radio_button_set",
        "heading": "Box Shadow",
        "description": "Set to &quot;Yes&quot; to enable box shadows.",
        "param_name": "box_shadow",
        "default": "no",
        "group": "Design",
        "value": {
          "yes": "Yes",
          "no": "No"
        },
        "dependency": []
      },
      "dimension_box_shadow": {
        "type": "dimension",
        "remove_from_atts": true,
        "heading": "Box Shadow Position",
        "description": "Set the vertical and horizontal position of the box shadow. Positive values put the shadow below and right of the box, negative values put it above and left of the box. In pixels, ex. 5px.",
        "param_name": "dimension_box_shadow",
        "value": {
          "box_shadow_vertical": "",
          "box_shadow_horizontal": ""
        },
        "group": "Design",
        "dependency": [
          {
            "element": "box_shadow",
            "value": "yes",
            "operator": "=="
          }
        ]
      },
      "box_shadow_blur": {
        "type": "range",
        "heading": "Box Shadow Blur Radius",
        "description": "Set the blur radius of the box shadow. In pixels.",
        "param_name": "box_shadow_blur",
        "value": "0",
        "min": "0",
        "max": "100",
        "step": "1",
        "group": "Design",
        "dependency": [
          {
            "element": "box_shadow",
            "value": "yes",
            "operator": "=="
          }
        ]
      },
      "box_shadow_spread": {
        "type": "range",
        "heading": "Box Shadow Spread Radius",
        "description": "Set the spread radius of the box shadow. A positive value increases the size of the shadow, a negative value decreases the size of the shadow. In pixels.",
        "param_name": "box_shadow_spread",
        "value": "0",
        "min": "-100",
        "max": "100",
        "step": "1",
        "group": "Design",
        "dependency": [
          {
            "element": "box_shadow",
            "value": "yes",
            "operator": "=="
          }
        ]
      },
      "box_shadow_color": {
        "type": "colorpickeralpha",
        "heading": "Box Shadow Color",
        "description": "Controls the color of the box shadow.",
        "param_name": "box_shadow_color",
        "value": "",
        "group": "Design",
        "dependency": [
          {
            "element": "box_shadow",
            "value": "yes",
            "operator": "=="
          }
        ]
      },
      "box_shadow_style": {
        "type": "radio_button_set",
        "heading": "Box Shadow Style",
        "description": "Set the style of the box shadow to either be an outer or inner shadow.",
        "param_name": "box_shadow_style",
        "default": "",
        "group": "Design",
        "value": {
          "": "Outer",
          "inset": "Inner"
        },
        "dependency": [
          {
            "element": "box_shadow",
            "value": "yes",
            "operator": "=="
          }
        ]
      },
      "padding": {
        "type": "dimension",
        "remove_from_atts": true,
        "heading": "Padding",
        "description": "Enter values including any valid CSS unit, ex: 4%.",
        "param_name": "padding",
        "value": {
          "padding_top": "",
          "padding_right": "",
          "padding_bottom": "",
          "padding_left": ""
        },
        "group": "Design",
        "dependency": []
      },
      "dimension_margin": {
        "type": "dimension",
        "remove_from_atts": true,
        "heading": "Margin",
        "description": "Enter values including any valid CSS unit, ex: 4%.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#col_margin\" target=\"_blank\" rel=\"noopener noreferrer\">0px, 20px</a>.",
        "param_name": "dimension_margin",
        "value": {
          "margin_top": "",
          "margin_bottom": ""
        },
        "group": "Design",
        "shortcode": "fusion_builder_column",
        "default_option": "col_margin",
        "default_subset": [
          "top",
          "bottom"
        ],
        "option_map": "",
        "dependency": []
      },
      "background_type": {
        "type": "subgroup",
        "heading": "Background Type",
        "description": "Use filters to see specific type of content.",
        "param_name": "background_type",
        "default": "single",
        "group": "BG",
        "remove_from_atts": true,
        "value": {
          "single": "Color",
          "gradient": "Gradient",
          "image": "Image"
        },
        "icons": {
          "single": "<span class=\"fusiona-fill-drip-solid\" style=\"font-size:18px;\"></span>",
          "gradient": "<span class=\"fusiona-gradient-fill\" style=\"font-size:18px;\"></span>",
          "image": "<span class=\"fusiona-image\" style=\"font-size:18px;\"></span>",
          "video": "<span class=\"fusiona-video\" style=\"font-size:18px;\"></span>"
        },
        "dependency": []
      },
      "gradient_start_color": {
        "type": "colorpickeralpha",
        "heading": "Gradient Start Color",
        "param_name": "gradient_start_color",
        "default": "",
        "description": "Select start color for gradient.",
        "group": "BG",
        "subgroup": {
          "name": "background_type",
          "tab": "gradient"
        },
        "callback": {
          "function": "fusion_update_gradient_style",
          "args": {
            "selector": ".fusion-column-wrapper"
          }
        },
        "dependency": []
      },
      "gradient_end_color": {
        "type": "colorpickeralpha",
        "heading": "Gradient End Color",
        "param_name": "gradient_end_color",
        "default": "",
        "description": "Select end color for gradient.",
        "group": "BG",
        "subgroup": {
          "name": "background_type",
          "tab": "gradient"
        },
        "callback": {
          "function": "fusion_update_gradient_style",
          "args": {
            "selector": ".fusion-column-wrapper"
          }
        },
        "dependency": []
      },
      "gradient_start_position": {
        "type": "range",
        "heading": "Gradient Start Position",
        "description": "Select start position for gradient.",
        "param_name": "gradient_start_position",
        "value": "0",
        "min": "0",
        "max": "100",
        "group": "BG",
        "subgroup": {
          "name": "background_type",
          "tab": "gradient"
        },
        "callback": {
          "function": "fusion_update_gradient_style",
          "args": {
            "selector": ".fusion-column-wrapper"
          }
        },
        "dependency": []
      },
      "gradient_end_position": {
        "type": "range",
        "heading": "Gradient End Position",
        "description": "Select end position for gradient.",
        "param_name": "gradient_end_position",
        "value": "100",
        "min": "0",
        "max": "100",
        "group": "BG",
        "subgroup": {
          "name": "background_type",
          "tab": "gradient"
        },
        "callback": {
          "function": "fusion_update_gradient_style",
          "args": {
            "selector": ".fusion-column-wrapper"
          }
        },
        "dependency": []
      },
      "gradient_type": {
        "type": "radio_button_set",
        "heading": "Gradient Type",
        "description": "Controls gradient type.",
        "param_name": "gradient_type",
        "default": "linear",
        "group": "BG",
        "subgroup": {
          "name": "background_type",
          "tab": "gradient"
        },
        "callback": {
          "function": "fusion_update_gradient_style",
          "args": {
            "selector": ".fusion-column-wrapper"
          }
        },
        "value": {
          "linear": "Linear",
          "radial": "Radial"
        },
        "dependency": []
      },
      "radial_direction": {
        "type": "select",
        "heading": "Radial Direction",
        "description": "Select direction for radial gradient.",
        "param_name": "radial_direction",
        "default": "center center",
        "group": "BG",
        "subgroup": {
          "name": "background_type",
          "tab": "gradient"
        },
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
        "dependency": [
          {
            "element": "gradient_type",
            "value": "radial",
            "operator": "=="
          }
        ],
        "callback": {
          "function": "fusion_update_gradient_style",
          "args": {
            "selector": ".fusion-column-wrapper"
          }
        }
      },
      "linear_angle": {
        "type": "range",
        "heading": "Gradient Angle",
        "description": "Controls the gradient angle. In degrees.",
        "param_name": "linear_angle",
        "value": "180",
        "min": "0",
        "max": "360",
        "group": "BG",
        "subgroup": {
          "name": "background_type",
          "tab": "gradient"
        },
        "dependency": [
          {
            "element": "gradient_type",
            "value": "linear",
            "operator": "=="
          }
        ],
        "callback": {
          "function": "fusion_update_gradient_style",
          "args": {
            "selector": ".fusion-column-wrapper"
          }
        }
      },
      "background_color": {
        "type": "colorpickeralpha",
        "heading": "Background Color",
        "description": "Controls the background color.",
        "param_name": "background_color",
        "value": "",
        "group": "BG",
        "subgroup": {
          "name": "background_type",
          "tab": "single"
        },
        "dependency": []
      },
      "background_image": {
        "type": "upload",
        "heading": "Background Image",
        "description": "Upload an image to display in the background.",
        "param_name": "background_image",
        "value": "",
        "group": "BG",
        "dynamic_data": true,
        "subgroup": {
          "name": "background_type",
          "tab": "image"
        },
        "dependency": []
      },
      "background_image_id": {
        "type": "textfield",
        "heading": "Background Image ID",
        "description": "Background Image ID from Media Library.",
        "param_name": "background_image_id",
        "value": "",
        "hidden": true,
        "dependency": []
      },
      "background_position": {
        "type": "select",
        "heading": "Background Position",
        "description": "Choose the postion of the background image.",
        "param_name": "background_position",
        "default": "left top",
        "group": "BG",
        "subgroup": {
          "name": "background_type",
          "tab": "image"
        },
        "dependency": [
          {
            "element": "background_image",
            "value": "",
            "operator": "!="
          }
        ],
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
        "group": "BG",
        "subgroup": {
          "name": "background_type",
          "tab": "image"
        },
        "dependency": [
          {
            "element": "background_image",
            "value": "",
            "operator": "!="
          }
        ],
        "value": {
          "no-repeat": "No Repeat",
          "repeat": "Repeat Vertically and Horizontally",
          "repeat-x": "Repeat Horizontally",
          "repeat-y": "Repeat Vertically"
        }
      },
      "background_blend_mode": {
        "type": "select",
        "heading": "Background Blend Mode",
        "description": "Choose how blending should work for each background layer.",
        "param_name": "background_blend_mode",
        "value": {
          "none": "Disabled",
          "multiply": "Multiply",
          "screen": "Screen",
          "overlay": "Overlay",
          "darken": "Darken",
          "lighten": "Lighten",
          "color-dodge": "Color Dodge",
          "color-burn": "Color Burn",
          "hard-light": "Hard Light",
          "soft-light": "Soft Light",
          "difference": "Difference",
          "exclusion": "Exclusion",
          "hue": "Hue",
          "saturation": "Saturation",
          "color": "Color",
          "luminosity": "Luminosity"
        },
        "default": "none",
        "group": "BG",
        "subgroup": {
          "name": "background_type",
          "tab": "image"
        },
        "dependency": [
          {
            "element": "background_image",
            "value": "",
            "operator": "!="
          }
        ]
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
        "group": "Extras",
        "preview": {
          "selector": "$el",
          "type": "animation"
        },
        "dependency": []
      },
      "animation_direction": {
        "type": "radio_button_set",
        "heading": "Direction of Animation",
        "description": "Select the incoming direction for the animation.",
        "param_name": "animation_direction",
        "default": "left",
        "group": "Extras",
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          }
        ],
        "value": {
          "down": "Top",
          "right": "Right",
          "up": "Bottom",
          "left": "Left",
          "static": "Static"
        },
        "preview": {
          "selector": "$el",
          "type": "animation"
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
        "group": "Extras",
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          }
        ],
        "preview": {
          "selector": "$el",
          "type": "animation"
        }
      },
      "animation_offset": {
        "type": "select",
        "heading": "Offset of Animation",
        "description": "Controls when the animation should start.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#animation_offset\" target=\"_blank\" rel=\"noopener noreferrer\">Top Of Element Hits Bottom Of Viewport</a>.",
        "param_name": "animation_offset",
        "default": "",
        "group": "Extras",
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          }
        ],
        "value": {
          "": "Default",
          "top-into-view": "Top of element hits bottom of viewport",
          "top-mid-of-view": "Top of element hits middle of viewport",
          "bottom-in-view": "Bottom of element enters viewport"
        },
        "default_option": "animation_offset",
        "default_subset": "",
        "option_map": "select"
      },
      "filter_type": {
        "type": "subgroup",
        "heading": "Filter Type",
        "description": "Use filters to see specific type of content.",
        "param_name": "filter_type",
        "default": "regular",
        "group": "Extras",
        "remove_from_atts": true,
        "value": {
          "regular": "Regular",
          "hover": "Hover"
        },
        "icons": {
          "regular": "<span class=\"fusiona-regular-state\" style=\"font-size:18px;\"></span>",
          "hover": "<span class=\"fusiona-hover-state\" style=\"font-size:18px;\"></span>"
        },
        "dependency": []
      },
      "filter_hue": {
        "type": "range",
        "heading": "Hue",
        "description": "Filter hue.",
        "param_name": "filter_hue",
        "value": "0",
        "min": "0",
        "max": "359",
        "group": "Extras",
        "subgroup": {
          "name": "filter_type",
          "tab": "regular"
        },
        "callback": {
          "function": "fusion_update_filter_style",
          "args": {
            "selector_base": "fusion-builder-column-"
          }
        },
        "dependency": []
      },
      "filter_saturation": {
        "type": "range",
        "heading": "Saturation",
        "description": "Filter saturation.",
        "param_name": "filter_saturation",
        "value": "100",
        "min": "0",
        "max": "200",
        "group": "Extras",
        "subgroup": {
          "name": "filter_type",
          "tab": "regular"
        },
        "callback": {
          "function": "fusion_update_filter_style",
          "args": {
            "selector_base": "fusion-builder-column-"
          }
        },
        "dependency": []
      },
      "filter_brightness": {
        "type": "range",
        "heading": "Brightness",
        "description": "Filter brightness.",
        "param_name": "filter_brightness",
        "value": "100",
        "min": "0",
        "max": "200",
        "group": "Extras",
        "subgroup": {
          "name": "filter_type",
          "tab": "regular"
        },
        "callback": {
          "function": "fusion_update_filter_style",
          "args": {
            "selector_base": "fusion-builder-column-"
          }
        },
        "dependency": []
      },
      "filter_contrast": {
        "type": "range",
        "heading": "Contrast",
        "description": "Filter contrast.",
        "param_name": "filter_contrast",
        "value": "100",
        "min": "0",
        "max": "200",
        "group": "Extras",
        "subgroup": {
          "name": "filter_type",
          "tab": "regular"
        },
        "callback": {
          "function": "fusion_update_filter_style",
          "args": {
            "selector_base": "fusion-builder-column-"
          }
        },
        "dependency": []
      },
      "filter_invert": {
        "type": "range",
        "heading": "Invert",
        "description": "Filter invert.",
        "param_name": "filter_invert",
        "value": "0",
        "min": "0",
        "max": "100",
        "group": "Extras",
        "subgroup": {
          "name": "filter_type",
          "tab": "regular"
        },
        "callback": {
          "function": "fusion_update_filter_style",
          "args": {
            "selector_base": "fusion-builder-column-"
          }
        },
        "dependency": []
      },
      "filter_sepia": {
        "type": "range",
        "heading": "Sepia",
        "description": "Filter sepia.",
        "param_name": "filter_sepia",
        "value": "0",
        "min": "0",
        "max": "100",
        "group": "Extras",
        "subgroup": {
          "name": "filter_type",
          "tab": "regular"
        },
        "callback": {
          "function": "fusion_update_filter_style",
          "args": {
            "selector_base": "fusion-builder-column-"
          }
        },
        "dependency": []
      },
      "filter_opacity": {
        "type": "range",
        "heading": "Opacity",
        "description": "Filter opacity.",
        "param_name": "filter_opacity",
        "value": "100",
        "min": "0",
        "max": "100",
        "group": "Extras",
        "subgroup": {
          "name": "filter_type",
          "tab": "regular"
        },
        "callback": {
          "function": "fusion_update_filter_style",
          "args": {
            "selector_base": "fusion-builder-column-"
          }
        },
        "dependency": []
      },
      "filter_blur": {
        "type": "range",
        "heading": "Blur",
        "description": "Filter blur.  In pixels.",
        "param_name": "filter_blur",
        "value": "0",
        "min": "0",
        "max": "50",
        "group": "Extras",
        "subgroup": {
          "name": "filter_type",
          "tab": "regular"
        },
        "callback": {
          "function": "fusion_update_filter_style",
          "args": {
            "selector_base": "fusion-builder-column-"
          }
        },
        "dependency": []
      },
      "filter_hue_hover": {
        "type": "range",
        "heading": "Hue",
        "description": "Filter hue.",
        "param_name": "filter_hue_hover",
        "value": "0",
        "min": "0",
        "max": "359",
        "group": "Extras",
        "subgroup": {
          "name": "filter_type",
          "tab": "hover"
        },
        "callback": {
          "function": "fusion_update_filter_style",
          "args": {
            "selector_base": "fusion-builder-column-"
          }
        },
        "dependency": []
      },
      "filter_saturation_hover": {
        "type": "range",
        "heading": "Saturation",
        "description": "Filter saturation.",
        "param_name": "filter_saturation_hover",
        "value": "100",
        "min": "0",
        "max": "200",
        "group": "Extras",
        "subgroup": {
          "name": "filter_type",
          "tab": "hover"
        },
        "callback": {
          "function": "fusion_update_filter_style",
          "args": {
            "selector_base": "fusion-builder-column-"
          }
        },
        "dependency": []
      },
      "filter_brightness_hover": {
        "type": "range",
        "heading": "Brightness",
        "description": "Filter brightness.",
        "param_name": "filter_brightness_hover",
        "value": "100",
        "min": "0",
        "max": "200",
        "group": "Extras",
        "subgroup": {
          "name": "filter_type",
          "tab": "hover"
        },
        "callback": {
          "function": "fusion_update_filter_style",
          "args": {
            "selector_base": "fusion-builder-column-"
          }
        },
        "dependency": []
      },
      "filter_contrast_hover": {
        "type": "range",
        "heading": "Contrast",
        "description": "Filter contrast.",
        "param_name": "filter_contrast_hover",
        "value": "100",
        "min": "0",
        "max": "200",
        "group": "Extras",
        "subgroup": {
          "name": "filter_type",
          "tab": "hover"
        },
        "callback": {
          "function": "fusion_update_filter_style",
          "args": {
            "selector_base": "fusion-builder-column-"
          }
        },
        "dependency": []
      },
      "filter_invert_hover": {
        "type": "range",
        "heading": "Invert",
        "description": "Filter invert.",
        "param_name": "filter_invert_hover",
        "value": "0",
        "min": "0",
        "max": "100",
        "group": "Extras",
        "subgroup": {
          "name": "filter_type",
          "tab": "hover"
        },
        "callback": {
          "function": "fusion_update_filter_style",
          "args": {
            "selector_base": "fusion-builder-column-"
          }
        },
        "dependency": []
      },
      "filter_sepia_hover": {
        "type": "range",
        "heading": "Sepia",
        "description": "Filter sepia.",
        "param_name": "filter_sepia_hover",
        "value": "0",
        "min": "0",
        "max": "100",
        "group": "Extras",
        "subgroup": {
          "name": "filter_type",
          "tab": "hover"
        },
        "callback": {
          "function": "fusion_update_filter_style",
          "args": {
            "selector_base": "fusion-builder-column-"
          }
        },
        "dependency": []
      },
      "filter_opacity_hover": {
        "type": "range",
        "heading": "Opacity",
        "description": "Filter opacity.",
        "param_name": "filter_opacity_hover",
        "value": "100",
        "min": "0",
        "max": "100",
        "group": "Extras",
        "subgroup": {
          "name": "filter_type",
          "tab": "hover"
        },
        "callback": {
          "function": "fusion_update_filter_style",
          "args": {
            "selector_base": "fusion-builder-column-"
          }
        },
        "dependency": []
      },
      "filter_blur_hover": {
        "type": "range",
        "heading": "Blur",
        "description": "Filter blur.  In pixels.",
        "param_name": "filter_blur_hover",
        "value": "0",
        "min": "0",
        "max": "50",
        "group": "Extras",
        "subgroup": {
          "name": "filter_type",
          "tab": "hover"
        },
        "callback": {
          "function": "fusion_update_filter_style",
          "args": {
            "selector_base": "fusion-builder-column-"
          }
        },
        "dependency": []
      }
    },
    "remove_from_atts": [
      "border_radius",
      "dimension_box_shadow",
      "padding",
      "dimension_margin",
      "background_type",
      "filter_type"
    ]
  },
  "fusion_builder_container": {
    "defaults": {
      "admin_label": "",
      "is_nested": "0",
      "hide_on_mobile": "small-visibility, medium-visibility, large-visibility",
      "id": "",
      "class": "",
      "status": "published",
      "publish_date": "",
      "background_color": "rgba(255,255,255,0)",
      "gradient_start_color": "rgba(255,255,255,0)",
      "gradient_end_color": "rgba(255,255,255,0)",
      "gradient_start_position": "0",
      "gradient_end_position": "100",
      "gradient_type": "linear",
      "radial_direction": "center",
      "linear_angle": "180",
      "background_image": "",
      "background_position": "center center",
      "background_repeat": "no-repeat",
      "background_parallax": "none",
      "parallax_speed": "0.3",
      "background_blend_mode": "none",
      "opacity": "100",
      "break_parents": "0",
      "fade": "no",
      "hundred_percent": "no",
      "hundred_percent_height": "no",
      "hundred_percent_height_scroll": "no",
      "hundred_percent_height_center_content": "no",
      "padding_bottom": "",
      "padding_left": "",
      "padding_right": "",
      "padding_top": "",
      "border_color": "#e2e2e2",
      "border_size": "0",
      "border_style": "solid",
      "equal_height_columns": "no",
      "data_bg_height": "",
      "data_bg_width": "",
      "enable_mobile": "no",
      "menu_anchor": "",
      "margin_top": "",
      "margin_bottom": "",
      "link_color": "#212934",
      "link_hover_color": "#65bc7b",
      "video_mp4": "",
      "video_webm": "",
      "video_ogv": "",
      "video_loop": "yes",
      "video_mute": "yes",
      "video_preview_image": "",
      "overlay_color": "",
      "overlay_opacity": "0.5",
      "video_url": "",
      "video_loop_refinement": "",
      "video_aspect_ratio": "16:9",
      "filter_hue": "0",
      "filter_saturation": "100",
      "filter_brightness": "100",
      "filter_contrast": "100",
      "filter_invert": "0",
      "filter_sepia": "0",
      "filter_opacity": "100",
      "filter_blur": "0",
      "filter_hue_hover": "0",
      "filter_saturation_hover": "100",
      "filter_brightness_hover": "100",
      "filter_contrast_hover": "100",
      "filter_invert_hover": "0",
      "filter_sepia_hover": "0",
      "filter_opacity_hover": "100",
      "filter_blur_hover": "0"
    },
    "extras": {
      "container_padding_100": {
        "top": "0px",
        "right": "30px",
        "bottom": "0px",
        "left": "30px"
      },
      "container_padding_default": {
        "top": "0px",
        "right": "0px",
        "bottom": "0px",
        "left": "0px"
      }
    },
    "settings_to_params": {
      "full_width_border_color": "border_color",
      "full_width_border_size": "border_size",
      "full_width_bg_color": "background_color",
      "full_width_gradient_start_color": "gradient_start_color",
      "full_width_gradient_end_color": "gradient_end_color",
      "link_color": "link_color",
      "link_hover_color": "primary_color"
    },
    "settings_to_extras": {
      "container_padding_100": "container_padding_100",
      "container_padding_default": "container_padding_default"
    },
    "name": "Container",
    "shortcode": "fusion_builder_container",
    "hide_from_builder": true,
    "help_url": "https://theme-fusion.com/documentation/fusion-builder/elements/container-element/",
    "params": {
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
        "group": "General",
        "dependency": []
      },
      "hundred_percent_height": {
        "type": "radio_button_set",
        "heading": "100% Height",
        "description": "Select if the container should be fixed to 100% height of the viewport. Larger content that is taller than the screen height will be cut off, this option works best with minimal content. <strong>Important:</strong> Mobile devices are even shorter in height so this option can be disabled on mobile in <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&#038;lang=en#container_hundred_percent_height_mobile\" target=\"_blank\" rel=\"noopener noreferrer\">theme options</a> while still being active on desktop.",
        "param_name": "hundred_percent_height",
        "value": {
          "yes": "Yes",
          "no": "No"
        },
        "default": "no",
        "group": "General",
        "dependency": []
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
        "dependency": [
          {
            "element": "hundred_percent_height",
            "value": "yes",
            "operator": "=="
          }
        ]
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
        "dependency": [
          {
            "element": "hundred_percent_height",
            "value": "yes",
            "operator": "=="
          }
        ]
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
        "group": "General",
        "callback": {
          "function": "fusion_toggle_class",
          "args": {
            "selector": ".fusion-fullwidth",
            "classes": {
              "yes": "fusion-equal-height-columns",
              "no": ""
            }
          }
        },
        "dependency": []
      },
      "menu_anchor": {
        "type": "textfield",
        "heading": "Name Of Menu Anchor",
        "description": "This name will be the id you will have to use in your one page menu.",
        "param_name": "menu_anchor",
        "value": "",
        "group": "General",
        "dependency": []
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
        "default": [
          "small-visibility",
          "medium-visibility",
          "large-visibility"
        ],
        "description": "Choose to show or hide the section on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Options</a>.",
        "or": true,
        "dependency": [
          {
            "element": "hundred_percent_height",
            "value": "yes",
            "operator": "!="
          },
          {
            "element": "hundred_percent_height_scroll",
            "value": "yes",
            "operator": "!="
          }
        ]
      },
      "status": {
        "type": "radio_button_set",
        "heading": "Container Publishing Status",
        "description": "Controls the publishing status of the container.  If draft is selected the container will only be visible to logged in users with the capability to publish posts.  If publish until or publish after are selected the container will be in draft mode when not published.",
        "param_name": "status",
        "default": "published",
        "value": {
          "published": "Published",
          "published_until": "Published Until",
          "publish_after": "Publish After",
          "draft": "Draft"
        },
        "dependency": []
      },
      "publish_date": {
        "type": "date_time_picker",
        "heading": "Container Publishing Date",
        "description": "Controls when the container should be published.  Can be before a date or after a date.  Use SQL time format: YYYY-MM-DD HH:MM:SS. E.g: 2016-05-10 12:30:00.  Timezone of site is used.",
        "param_name": "publish_date",
        "value": "",
        "dependency": [
          {
            "element": "status",
            "value": "published",
            "operator": "!="
          },
          {
            "element": "status",
            "value": "draft",
            "operator": "!="
          }
        ]
      },
      "class": {
        "type": "textfield",
        "heading": "CSS Class",
        "description": "Add a class to the wrapping HTML element.",
        "param_name": "class",
        "value": "",
        "group": "General",
        "callback": {
          "function": "fusion_add_class",
          "args": {
            "selector": ".fusion-fullwidth"
          }
        },
        "dependency": []
      },
      "id": {
        "type": "textfield",
        "heading": "CSS ID",
        "description": "Add an ID to the wrapping HTML element.",
        "param_name": "id",
        "value": "",
        "group": "General",
        "callback": {
          "function": "fusion_add_id",
          "args": {
            "selector": ".fusion-fullwidth"
          }
        },
        "dependency": []
      },
      "link_color": {
        "type": "colorpickeralpha",
        "heading": "Container Link Color",
        "description": "Controls the color of container links.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#link_color\" target=\"_blank\" rel=\"noopener noreferrer\">#212934</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-link_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"link_color\" value=\"\" data-default=\"#212934\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "link_color",
        "value": "",
        "group": "Design",
        "default": "#212934",
        "default_option": "link_color",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "link_hover_color": {
        "type": "colorpickeralpha",
        "heading": "Container Link Hover Color",
        "description": "Controls the color of container links in hover state.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#primary_color\" target=\"_blank\" rel=\"noopener noreferrer\">#65bc7b</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-link_hover_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"link_hover_color\" value=\"\" data-default=\"#65bc7b\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "link_hover_color",
        "value": "",
        "group": "Design",
        "default": "#65bc7b",
        "default_option": "primary_color",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "border_size": {
        "type": "range",
        "heading": "Container Border Size",
        "description": "Controls the border size of the container element. In pixels.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#full_width_border_size\" target=\"_blank\" rel=\"noopener noreferrer\">0</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-border_size\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"border_size\" value=\"\" data-default=\"0\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "border_size",
        "value": "",
        "min": "0",
        "max": "50",
        "default": "0",
        "group": "Design",
        "callback": {
          "function": "fusion_preview",
          "args": {
            "selector": ".fusion-fullwidth",
            "property": [
              "border-bottom-width",
              "border-top-width"
            ],
            "unit": "px"
          }
        },
        "default_option": "full_width_border_size",
        "default_subset": "",
        "option_map": "range",
        "dependency": []
      },
      "border_color": {
        "type": "colorpickeralpha",
        "heading": "Container Border Color",
        "description": "Controls the border color of the container element.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#full_width_border_color\" target=\"_blank\" rel=\"noopener noreferrer\">#e2e2e2</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-border_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"border_color\" value=\"\" data-default=\"#e2e2e2\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "border_color",
        "value": "",
        "group": "Design",
        "default": "#e2e2e2",
        "dependency": [
          {
            "element": "border_size",
            "value": "0",
            "operator": "!="
          },
          {
            "element": "border_size",
            "value": "",
            "operator": "!="
          }
        ],
        "callback": {
          "function": "fusion_preview",
          "args": {
            "selector": ".fusion-fullwidth",
            "property": "border-color"
          }
        },
        "default_option": "full_width_border_color",
        "default_subset": "",
        "option_map": ""
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
        "dependency": [
          {
            "element": "border_size",
            "value": "0",
            "operator": "!="
          },
          {
            "element": "border_size",
            "value": "",
            "operator": "!="
          }
        ],
        "callback": {
          "function": "fusion_preview",
          "args": {
            "selector": ".fusion-fullwidth",
            "property": [
              "border-top-style",
              "border-bottom-style"
            ]
          }
        }
      },
      "spacing": {
        "type": "dimension",
        "remove_from_atts": true,
        "heading": "Margin",
        "description": "Spacing above and below the section. Enter values including any valid CSS unit, ex: 4%.",
        "param_name": "spacing",
        "value": {
          "margin_top": "",
          "margin_bottom": ""
        },
        "group": "Design",
        "callback": {
          "function": "fusion_preview",
          "args": {
            "selector": ".fusion-fullwidth",
            "property": {
              "margin_top": "margin-top",
              "margin_bottom": "margin-bottom"
            },
            "dimension": true
          }
        },
        "shortcode": "fusion_builder_container",
        "dependency": []
      },
      "dimensions": {
        "type": "dimension",
        "remove_from_atts": true,
        "heading": "Padding",
        "description": "Enter values including any valid CSS unit, ex: 10px or 10%.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#container_padding_default\" target=\"_blank\" rel=\"noopener noreferrer\">0px, 0px, 0px, 0px</a> on default template.   Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#container_padding_100\" target=\"_blank\" rel=\"noopener noreferrer\">0px, 30px, 0px, 30px</a> on 100% width template.",
        "param_name": "dimensions",
        "value": {
          "padding_top": "",
          "padding_right": "",
          "padding_bottom": "",
          "padding_left": ""
        },
        "group": "Design",
        "callback": {
          "function": "fusion_preview",
          "args": {
            "selector": ".fusion-fullwidth",
            "property": {
              "padding_top": "padding-top",
              "padding_right": "padding-right",
              "padding_bottom": "padding-bottom",
              "padding_left": "padding-left"
            },
            "dimension": true
          }
        },
        "dependency": []
      },
      "background_type": {
        "type": "subgroup",
        "heading": "Background Options",
        "description": "Use filters to see specific type of content.",
        "param_name": "background_type",
        "default": "single",
        "group": "BG",
        "remove_from_atts": true,
        "value": {
          "single": "Color",
          "gradient": "Gradient",
          "image": "Image",
          "video": "Video"
        },
        "icons": {
          "single": "<span class=\"fusiona-fill-drip-solid\" style=\"font-size:18px;\"></span>",
          "gradient": "<span class=\"fusiona-gradient-fill\" style=\"font-size:18px;\"></span>",
          "image": "<span class=\"fusiona-image\" style=\"font-size:18px;\"></span>",
          "video": "<span class=\"fusiona-video\" style=\"font-size:18px;\"></span>"
        },
        "dependency": []
      },
      "gradient_start_color": {
        "type": "colorpickeralpha",
        "heading": "Gradient Start Color",
        "param_name": "gradient_start_color",
        "default": "rgba(255,255,255,0)",
        "description": "Select start color for gradient.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#full_width_gradient_start_color\" target=\"_blank\" rel=\"noopener noreferrer\">rgba(255,255,255,0)</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-gradient_start_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"gradient_start_color\" value=\"\" data-default=\"rgba(255,255,255,0)\">Reset to default.</a><span>Using default value.</span></span>",
        "group": "BG",
        "subgroup": {
          "name": "background_type",
          "tab": "gradient"
        },
        "callback": {
          "function": "fusion_update_gradient_style",
          "args": {
            "selector": ".fusion-fullwidth"
          }
        },
        "default_option": "full_width_gradient_start_color",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "gradient_end_color": {
        "type": "colorpickeralpha",
        "heading": "Gradient End Color",
        "param_name": "gradient_end_color",
        "default": "rgba(255,255,255,0)",
        "description": "Select end color for gradient.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#full_width_gradient_end_color\" target=\"_blank\" rel=\"noopener noreferrer\">rgba(255,255,255,0)</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-gradient_end_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"gradient_end_color\" value=\"\" data-default=\"rgba(255,255,255,0)\">Reset to default.</a><span>Using default value.</span></span>",
        "group": "BG",
        "subgroup": {
          "name": "background_type",
          "tab": "gradient"
        },
        "callback": {
          "function": "fusion_update_gradient_style",
          "args": {
            "selector": ".fusion-fullwidth"
          }
        },
        "default_option": "full_width_gradient_end_color",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "gradient_start_position": {
        "type": "range",
        "heading": "Gradient Start Position",
        "description": "Select start position for gradient.",
        "param_name": "gradient_start_position",
        "value": "0",
        "min": "0",
        "max": "100",
        "group": "BG",
        "subgroup": {
          "name": "background_type",
          "tab": "gradient"
        },
        "callback": {
          "function": "fusion_update_gradient_style",
          "args": {
            "selector": ".fusion-fullwidth"
          }
        },
        "dependency": []
      },
      "gradient_end_position": {
        "type": "range",
        "heading": "Gradient End Position",
        "description": "Select end position for gradient.",
        "param_name": "gradient_end_position",
        "value": "100",
        "min": "0",
        "max": "100",
        "group": "BG",
        "subgroup": {
          "name": "background_type",
          "tab": "gradient"
        },
        "callback": {
          "function": "fusion_update_gradient_style",
          "args": {
            "selector": ".fusion-fullwidth"
          }
        },
        "dependency": []
      },
      "gradient_type": {
        "type": "radio_button_set",
        "heading": "Gradient Type",
        "description": "Controls gradient type.",
        "param_name": "gradient_type",
        "default": "linear",
        "group": "BG",
        "subgroup": {
          "name": "background_type",
          "tab": "gradient"
        },
        "callback": {
          "function": "fusion_update_gradient_style",
          "args": {
            "selector": ".fusion-fullwidth"
          }
        },
        "value": {
          "linear": "Linear",
          "radial": "Radial"
        },
        "dependency": []
      },
      "radial_direction": {
        "type": "select",
        "heading": "Radial Direction",
        "description": "Select direction for radial gradient.",
        "param_name": "radial_direction",
        "default": "center center",
        "group": "BG",
        "subgroup": {
          "name": "background_type",
          "tab": "gradient"
        },
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
        "dependency": [
          {
            "element": "gradient_type",
            "value": "radial",
            "operator": "=="
          }
        ],
        "callback": {
          "function": "fusion_update_gradient_style",
          "args": {
            "selector": ".fusion-fullwidth"
          }
        }
      },
      "linear_angle": {
        "type": "range",
        "heading": "Gradient Angle",
        "description": "Controls the gradient angle. In degrees.",
        "param_name": "linear_angle",
        "value": "180",
        "min": "0",
        "max": "360",
        "group": "BG",
        "subgroup": {
          "name": "background_type",
          "tab": "gradient"
        },
        "dependency": [
          {
            "element": "gradient_type",
            "value": "linear",
            "operator": "=="
          }
        ],
        "callback": {
          "function": "fusion_update_gradient_style",
          "args": {
            "selector": ".fusion-fullwidth"
          }
        }
      },
      "background_color": {
        "type": "colorpickeralpha",
        "heading": "Container Background Color",
        "param_name": "background_color",
        "value": "",
        "description": "Controls the background color of the container element.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#full_width_bg_color\" target=\"_blank\" rel=\"noopener noreferrer\">rgba(255,255,255,0)</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-background_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"background_color\" value=\"\" data-default=\"rgba(255,255,255,0)\">Reset to default.</a><span>Using default value.</span></span>",
        "group": "BG",
        "subgroup": {
          "name": "background_type",
          "tab": "single"
        },
        "default": "rgba(255,255,255,0)",
        "callback": {
          "function": "fusion_preview",
          "args": {
            "selector": ".fusion-fullwidth, .fullwidth-overlay",
            "property": "background-color"
          }
        },
        "default_option": "full_width_bg_color",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "background_image": {
        "type": "upload",
        "heading": "Background Image",
        "description": "Upload an image to display in the background.",
        "param_name": "background_image",
        "value": "",
        "group": "BG",
        "dynamic_data": true,
        "subgroup": {
          "name": "background_type",
          "tab": "image"
        },
        "dependency": []
      },
      "background_position": {
        "type": "select",
        "heading": "Background Position",
        "description": "Choose the position of the background image.",
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
        "group": "BG",
        "subgroup": {
          "name": "background_type",
          "tab": "image"
        },
        "dependency": [
          {
            "element": "background_image",
            "value": "",
            "operator": "!="
          }
        ]
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
        "group": "BG",
        "subgroup": {
          "name": "background_type",
          "tab": "image"
        },
        "dependency": [
          {
            "element": "background_image",
            "value": "",
            "operator": "!="
          }
        ]
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
        "group": "BG",
        "subgroup": {
          "name": "background_type",
          "tab": "image"
        },
        "dependency": [
          {
            "element": "background_image",
            "value": "",
            "operator": "!="
          }
        ]
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
        "group": "BG",
        "subgroup": {
          "name": "background_type",
          "tab": "image"
        },
        "dependency": [
          {
            "element": "background_image",
            "value": "",
            "operator": "!="
          }
        ]
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
        "group": "BG",
        "subgroup": {
          "name": "background_type",
          "tab": "image"
        },
        "dependency": [
          {
            "element": "background_image",
            "value": "",
            "operator": "!="
          }
        ]
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
        "group": "BG",
        "subgroup": {
          "name": "background_type",
          "tab": "image"
        },
        "dependency": [
          {
            "element": "background_image",
            "value": "",
            "operator": "!="
          }
        ]
      },
      "background_blend_mode": {
        "type": "select",
        "heading": "Background Blend Mode",
        "description": "Choose how blending should work for each background layer.",
        "param_name": "background_blend_mode",
        "value": {
          "none": "Disabled",
          "multiply": "Multiply",
          "screen": "Screen",
          "overlay": "Overlay",
          "darken": "Darken",
          "lighten": "Lighten",
          "color-dodge": "Color Dodge",
          "color-burn": "Color Burn",
          "hard-light": "Hard Light",
          "soft-light": "Soft Light",
          "difference": "Difference",
          "exclusion": "Exclusion",
          "hue": "Hue",
          "saturation": "Saturation",
          "color": "Color",
          "luminosity": "Luminosity"
        },
        "default": "none",
        "group": "BG",
        "subgroup": {
          "name": "background_type",
          "tab": "image"
        },
        "dependency": [
          {
            "element": "background_image",
            "value": "",
            "operator": "!="
          }
        ]
      },
      "video_mp4": {
        "type": "uploadfile",
        "heading": "Video MP4 Upload",
        "description": "Add your MP4 video file. This format must be included to render your video with cross-browser compatibility. WebM and OGV are optional. Using videos in a 16:9 aspect ratio is recommended.",
        "param_name": "video_mp4",
        "value": "",
        "group": "BG",
        "subgroup": {
          "name": "background_type",
          "tab": "video"
        },
        "dependency": []
      },
      "video_webm": {
        "type": "uploadfile",
        "heading": "Video WebM Upload",
        "description": "Add your WebM video file. This is optional, only MP4 is required to render your video with cross-browser compatibility. Using videos in a 16:9 aspect ratio is recommended.",
        "param_name": "video_webm",
        "value": "",
        "group": "BG",
        "subgroup": {
          "name": "background_type",
          "tab": "video"
        },
        "dependency": []
      },
      "video_ogv": {
        "type": "uploadfile",
        "heading": "Video OGV Upload",
        "description": "Add your OGV video file. This is optional, only MP4 is required to render your video with cross-browser compatibility. Using videos in a 16:9 aspect ratio is recommended.",
        "param_name": "video_ogv",
        "value": "",
        "group": "BG",
        "subgroup": {
          "name": "background_type",
          "tab": "video"
        },
        "dependency": []
      },
      "video_url": {
        "type": "textfield",
        "heading": "YouTube/Vimeo Video URL or ID",
        "description": "Enter the URL to the video or the video ID of your YouTube or Vimeo video you want to use as your background. If your URL isn&#039;t showing a video, try inputting the video ID instead. Ads will show up in the video if it has them.",
        "param_name": "video_url",
        "value": "",
        "group": "BG",
        "subgroup": {
          "name": "background_type",
          "tab": "video"
        },
        "dependency": []
      },
      "video_aspect_ratio": {
        "type": "textfield",
        "heading": "Video Aspect Ratio",
        "description": "The video will be resized to maintain this aspect ratio, this is to prevent the video from showing any black bars. Enter an aspect ratio here such as: &quot;16:9&quot;, &quot;4:3&quot; or &quot;16:10&quot;. The default is &quot;16:9&quot;.",
        "param_name": "video_aspect_ratio",
        "value": "16:9",
        "group": "BG",
        "subgroup": {
          "name": "background_type",
          "tab": "video"
        },
        "or": true,
        "dependency": [
          {
            "element": "video_mp4",
            "value": "",
            "operator": "!="
          },
          {
            "element": "video_ogv",
            "value": "",
            "operator": "!="
          },
          {
            "element": "video_webm",
            "value": "",
            "operator": "!="
          },
          {
            "element": "video_url",
            "value": "",
            "operator": "!="
          }
        ]
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
        "group": "BG",
        "subgroup": {
          "name": "background_type",
          "tab": "video"
        },
        "or": true,
        "dependency": [
          {
            "element": "video_mp4",
            "value": "",
            "operator": "!="
          },
          {
            "element": "video_ogv",
            "value": "",
            "operator": "!="
          },
          {
            "element": "video_webm",
            "value": "",
            "operator": "!="
          },
          {
            "element": "video_url",
            "value": "",
            "operator": "!="
          }
        ]
      },
      "video_mute": {
        "type": "radio_button_set",
        "heading": "Mute Video",
        "description": "IMPORTANT: In some modern browsers, videos with sound won&#039;t be auto played, and thus won&#039;t show as container background when not muted.",
        "param_name": "video_mute",
        "value": {
          "yes": "Yes",
          "no": "No"
        },
        "default": "yes",
        "group": "BG",
        "subgroup": {
          "name": "background_type",
          "tab": "video"
        },
        "or": true,
        "dependency": [
          {
            "element": "video_mp4",
            "value": "",
            "operator": "!="
          },
          {
            "element": "video_ogv",
            "value": "",
            "operator": "!="
          },
          {
            "element": "video_webm",
            "value": "",
            "operator": "!="
          },
          {
            "element": "video_url",
            "value": "",
            "operator": "!="
          }
        ]
      },
      "video_preview_image": {
        "type": "upload",
        "heading": "Video Preview Image",
        "description": "IMPORTANT: This field is a fallback for self-hosted videos in older browsers that are not able to play the video. If your site is optimized for modern browsers, this field does not need to be filled in.",
        "param_name": "video_preview_image",
        "value": "",
        "group": "BG",
        "subgroup": {
          "name": "background_type",
          "tab": "video"
        },
        "or": true,
        "dependency": [
          {
            "element": "video_mp4",
            "value": "",
            "operator": "!="
          },
          {
            "element": "video_ogv",
            "value": "",
            "operator": "!="
          },
          {
            "element": "video_webm",
            "value": "",
            "operator": "!="
          },
          {
            "element": "video_url",
            "value": "",
            "operator": "!="
          }
        ]
      },
      "filter_type": {
        "type": "subgroup",
        "heading": "Filter Type",
        "description": "Use filters to see specific type of content.",
        "param_name": "filter_type",
        "default": "regular",
        "group": "Extras",
        "remove_from_atts": true,
        "value": {
          "regular": "Regular",
          "hover": "Hover"
        },
        "icons": {
          "regular": "<span class=\"fusiona-regular-state\" style=\"font-size:18px;\"></span>",
          "hover": "<span class=\"fusiona-hover-state\" style=\"font-size:18px;\"></span>"
        },
        "dependency": []
      },
      "filter_hue": {
        "type": "range",
        "heading": "Hue",
        "description": "Filter hue.",
        "param_name": "filter_hue",
        "value": "0",
        "min": "0",
        "max": "359",
        "group": "Extras",
        "subgroup": {
          "name": "filter_type",
          "tab": "regular"
        },
        "callback": {
          "function": "fusion_update_filter_style",
          "args": {
            "selector_base": "fusion-builder-row-live-"
          }
        },
        "dependency": []
      },
      "filter_saturation": {
        "type": "range",
        "heading": "Saturation",
        "description": "Filter saturation.",
        "param_name": "filter_saturation",
        "value": "100",
        "min": "0",
        "max": "200",
        "group": "Extras",
        "subgroup": {
          "name": "filter_type",
          "tab": "regular"
        },
        "callback": {
          "function": "fusion_update_filter_style",
          "args": {
            "selector_base": "fusion-builder-row-live-"
          }
        },
        "dependency": []
      },
      "filter_brightness": {
        "type": "range",
        "heading": "Brightness",
        "description": "Filter brightness.",
        "param_name": "filter_brightness",
        "value": "100",
        "min": "0",
        "max": "200",
        "group": "Extras",
        "subgroup": {
          "name": "filter_type",
          "tab": "regular"
        },
        "callback": {
          "function": "fusion_update_filter_style",
          "args": {
            "selector_base": "fusion-builder-row-live-"
          }
        },
        "dependency": []
      },
      "filter_contrast": {
        "type": "range",
        "heading": "Contrast",
        "description": "Filter contrast.",
        "param_name": "filter_contrast",
        "value": "100",
        "min": "0",
        "max": "200",
        "group": "Extras",
        "subgroup": {
          "name": "filter_type",
          "tab": "regular"
        },
        "callback": {
          "function": "fusion_update_filter_style",
          "args": {
            "selector_base": "fusion-builder-row-live-"
          }
        },
        "dependency": []
      },
      "filter_invert": {
        "type": "range",
        "heading": "Invert",
        "description": "Filter invert.",
        "param_name": "filter_invert",
        "value": "0",
        "min": "0",
        "max": "100",
        "group": "Extras",
        "subgroup": {
          "name": "filter_type",
          "tab": "regular"
        },
        "callback": {
          "function": "fusion_update_filter_style",
          "args": {
            "selector_base": "fusion-builder-row-live-"
          }
        },
        "dependency": []
      },
      "filter_sepia": {
        "type": "range",
        "heading": "Sepia",
        "description": "Filter sepia.",
        "param_name": "filter_sepia",
        "value": "0",
        "min": "0",
        "max": "100",
        "group": "Extras",
        "subgroup": {
          "name": "filter_type",
          "tab": "regular"
        },
        "callback": {
          "function": "fusion_update_filter_style",
          "args": {
            "selector_base": "fusion-builder-row-live-"
          }
        },
        "dependency": []
      },
      "filter_opacity": {
        "type": "range",
        "heading": "Opacity",
        "description": "Filter opacity.",
        "param_name": "filter_opacity",
        "value": "100",
        "min": "0",
        "max": "100",
        "group": "Extras",
        "subgroup": {
          "name": "filter_type",
          "tab": "regular"
        },
        "callback": {
          "function": "fusion_update_filter_style",
          "args": {
            "selector_base": "fusion-builder-row-live-"
          }
        },
        "dependency": []
      },
      "filter_blur": {
        "type": "range",
        "heading": "Blur",
        "description": "Filter blur.  In pixels.",
        "param_name": "filter_blur",
        "value": "0",
        "min": "0",
        "max": "50",
        "group": "Extras",
        "subgroup": {
          "name": "filter_type",
          "tab": "regular"
        },
        "callback": {
          "function": "fusion_update_filter_style",
          "args": {
            "selector_base": "fusion-builder-row-live-"
          }
        },
        "dependency": []
      },
      "filter_hue_hover": {
        "type": "range",
        "heading": "Hue",
        "description": "Filter hue.",
        "param_name": "filter_hue_hover",
        "value": "0",
        "min": "0",
        "max": "359",
        "group": "Extras",
        "subgroup": {
          "name": "filter_type",
          "tab": "hover"
        },
        "callback": {
          "function": "fusion_update_filter_style",
          "args": {
            "selector_base": "fusion-builder-row-live-"
          }
        },
        "dependency": []
      },
      "filter_saturation_hover": {
        "type": "range",
        "heading": "Saturation",
        "description": "Filter saturation.",
        "param_name": "filter_saturation_hover",
        "value": "100",
        "min": "0",
        "max": "200",
        "group": "Extras",
        "subgroup": {
          "name": "filter_type",
          "tab": "hover"
        },
        "callback": {
          "function": "fusion_update_filter_style",
          "args": {
            "selector_base": "fusion-builder-row-live-"
          }
        },
        "dependency": []
      },
      "filter_brightness_hover": {
        "type": "range",
        "heading": "Brightness",
        "description": "Filter brightness.",
        "param_name": "filter_brightness_hover",
        "value": "100",
        "min": "0",
        "max": "200",
        "group": "Extras",
        "subgroup": {
          "name": "filter_type",
          "tab": "hover"
        },
        "callback": {
          "function": "fusion_update_filter_style",
          "args": {
            "selector_base": "fusion-builder-row-live-"
          }
        },
        "dependency": []
      },
      "filter_contrast_hover": {
        "type": "range",
        "heading": "Contrast",
        "description": "Filter contrast.",
        "param_name": "filter_contrast_hover",
        "value": "100",
        "min": "0",
        "max": "200",
        "group": "Extras",
        "subgroup": {
          "name": "filter_type",
          "tab": "hover"
        },
        "callback": {
          "function": "fusion_update_filter_style",
          "args": {
            "selector_base": "fusion-builder-row-live-"
          }
        },
        "dependency": []
      },
      "filter_invert_hover": {
        "type": "range",
        "heading": "Invert",
        "description": "Filter invert.",
        "param_name": "filter_invert_hover",
        "value": "0",
        "min": "0",
        "max": "100",
        "group": "Extras",
        "subgroup": {
          "name": "filter_type",
          "tab": "hover"
        },
        "callback": {
          "function": "fusion_update_filter_style",
          "args": {
            "selector_base": "fusion-builder-row-live-"
          }
        },
        "dependency": []
      },
      "filter_sepia_hover": {
        "type": "range",
        "heading": "Sepia",
        "description": "Filter sepia.",
        "param_name": "filter_sepia_hover",
        "value": "0",
        "min": "0",
        "max": "100",
        "group": "Extras",
        "subgroup": {
          "name": "filter_type",
          "tab": "hover"
        },
        "callback": {
          "function": "fusion_update_filter_style",
          "args": {
            "selector_base": "fusion-builder-row-live-"
          }
        },
        "dependency": []
      },
      "filter_opacity_hover": {
        "type": "range",
        "heading": "Opacity",
        "description": "Filter opacity.",
        "param_name": "filter_opacity_hover",
        "value": "100",
        "min": "0",
        "max": "100",
        "group": "Extras",
        "subgroup": {
          "name": "filter_type",
          "tab": "hover"
        },
        "callback": {
          "function": "fusion_update_filter_style",
          "args": {
            "selector_base": "fusion-builder-row-live-"
          }
        },
        "dependency": []
      },
      "filter_blur_hover": {
        "type": "range",
        "heading": "Blur",
        "description": "Filter blur.  In pixels.",
        "param_name": "filter_blur_hover",
        "value": "0",
        "min": "0",
        "max": "50",
        "group": "Extras",
        "subgroup": {
          "name": "filter_type",
          "tab": "hover"
        },
        "callback": {
          "function": "fusion_update_filter_style",
          "args": {
            "selector_base": "fusion-builder-row-live-"
          }
        },
        "dependency": []
      }
    },
    "remove_from_atts": [
      "spacing",
      "dimensions",
      "background_type",
      "filter_type",
      "undefined"
    ]
  },
  "fusion_content_boxes": {
    "defaults": {
      "hide_on_mobile": "small-visibility, medium-visibility, large-visibility",
      "class": "",
      "id": "",
      "backgroundcolor": "rgba(255,255,255,0)",
      "columns": "",
      "circle": "",
      "heading_size": "2",
      "icon": "",
      "iconflip": "",
      "iconrotate": "",
      "iconspin": "",
      "iconcolor": "#ffffff",
      "circlecolor": "#212934",
      "circlebordercolor": "#212934",
      "circlebordersize": "1px",
      "outercirclebordercolor": "rgba(255,255,255,0)",
      "outercirclebordersize": "1px",
      "icon_circle": "yes",
      "icon_circle_radius": "50%",
      "icon_size": "20",
      "icon_align": "",
      "icon_hover_type": "fade",
      "hover_accent_color": "#65bc7b",
      "image": "",
      "image_id": "",
      "image_max_width": "",
      "layout": "icon-with-title",
      "margin_top": "",
      "margin_bottom": "",
      "title_size": "24px",
      "title_color": "#212934",
      "body_color": "#4a4e57",
      "link_type": "text",
      "button_span": "no",
      "link_area": "link-icon",
      "link_target": "_self",
      "animation_type": "",
      "animation_delay": "",
      "animation_direction": "left",
      "animation_speed": "0.1",
      "animation_offset": "top-into-view",
      "settings_lvl": "child",
      "linktarget": ""
    },
    "extras": [],
    "settings_to_params": {
      "content_box_icon_color": "iconcolor",
      "content_box_bg_color": "backgroundcolor",
      "content_box_icon_bg_color": "circlecolor",
      "content_box_icon_bg_inner_border_color": "circlebordercolor",
      "content_box_icon_bg_inner_border_size": "circlebordersize",
      "content_box_icon_bg_outer_border_color": "outercirclebordercolor",
      "content_box_icon_bg_outer_border_size": "outercirclebordersize",
      "content_box_icon_circle": "icon_circle",
      "content_box_icon_circle_radius": "icon_circle_radius",
      "content_box_icon_size": "icon_size",
      "content_box_icon_hover_type": "icon_hover_type",
      "content_box_hover_animation_accent_color": "hover_accent_color",
      "content_box_margin[top]": "margin_top",
      "content_box_margin[bottom]": "margin_bottom",
      "content_box_title_size": "title_size",
      "content_box_title_color": "title_color",
      "content_box_body_color": "body_color",
      "content_box_link_type": "link_type",
      "content_box_link_area": "link_area",
      "content_box_link_target": "link_target",
      "animation_offset": "animation_offset",
      "content_box_button_span": "button_span"
    },
    "settings_to_extras": [],
    "name": "Content Boxes",
    "shortcode": "fusion_content_boxes",
    "multi": "multi_element_parent",
    "element_child": "fusion_content_box",
    "icon": "fusiona-newspaper",
    "child_ui": true,
    "preview": "/var/www/html/wordpress_avada_624/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-content-boxes-preview.php",
    "preview_id": "fusion-builder-block-module-content-boxes-preview-template",
    "help_url": "https://theme-fusion.com/documentation/fusion-builder/elements/content-boxes-element/",
    "params": {
      "element_content": {
        "type": "tinymce",
        "heading": "Content",
        "description": "Enter some content for this content box.",
        "param_name": "element_content",
        "value": "[fusion_content_box title=\"Your Content Goes Here\" backgroundcolor=\"\" icon=\"\" iconflip=\"\" iconrotate=\"\" iconspin=\"\" iconcolor=\"\" circlecolor=\"\" circlebordercolor=\"\" image=\"\" image_id=\"\" image_max_width=\"\" link=\"\" linktext=\"Read More\" animation_type=\"\" animation_direction=\"left\" animation_speed=\"0.3\" ]Your Content Goes Here[/fusion_content_box]",
        "dependency": []
      },
      "layout": {
        "type": "select",
        "heading": "Box Layout",
        "description": "Select the layout for the content box.",
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
        },
        "dependency": []
      },
      "columns": {
        "type": "range",
        "heading": "Number of Columns",
        "description": "Set the number of columns per row.",
        "param_name": "columns",
        "value": "1",
        "min": "1",
        "max": "6",
        "step": "1",
        "dependency": [
          {
            "element": "layout",
            "value": "timeline-vertical",
            "operator": "!="
          }
        ]
      },
      "title_size": {
        "type": "textfield",
        "heading": "Title Size",
        "description": "Controls the size of the title.  In pixels ex: 18px.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#content_box_title_size\" target=\"_blank\" rel=\"noopener noreferrer\">24px</a>.",
        "param_name": "title_size",
        "value": "",
        "group": "Design",
        "default_option": "content_box_title_size",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "heading_size": {
        "type": "radio_button_set",
        "heading": "Heading Size",
        "description": "Choose the title size, H1-H6.",
        "param_name": "heading_size",
        "group": "Design",
        "value": {
          "1": "H1",
          "2": "H2",
          "3": "H3",
          "4": "H4",
          "5": "H5",
          "6": "H6"
        },
        "default": "2",
        "dependency": []
      },
      "title_color": {
        "type": "colorpickeralpha",
        "heading": "Title Font Color",
        "description": "Controls the color of the title font.  ex: #000.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#content_box_title_color\" target=\"_blank\" rel=\"noopener noreferrer\">#212934</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-title_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"title_color\" value=\"\" data-default=\"#212934\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "title_color",
        "value": "",
        "default": "#212934",
        "group": "Design",
        "default_option": "content_box_title_color",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "body_color": {
        "type": "colorpickeralpha",
        "heading": "Body Font Color",
        "description": "Controls the color of the body font.  ex: #000.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#content_box_body_color\" target=\"_blank\" rel=\"noopener noreferrer\">#4a4e57</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-body_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"body_color\" value=\"\" data-default=\"#4a4e57\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "body_color",
        "value": "",
        "default": "#4a4e57",
        "group": "Design",
        "default_option": "content_box_body_color",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "backgroundcolor": {
        "type": "colorpickeralpha",
        "heading": "Content Box Background Color",
        "description": "  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#content_box_bg_color\" target=\"_blank\" rel=\"noopener noreferrer\">rgba(255,255,255,0)</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-backgroundcolor\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"backgroundcolor\" value=\"\" data-default=\"rgba(255,255,255,0)\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "backgroundcolor",
        "value": "",
        "default": "rgba(255,255,255,0)",
        "group": "Design",
        "default_option": "content_box_bg_color",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "icon": {
        "type": "iconpicker",
        "heading": "Icon",
        "param_name": "icon",
        "value": "",
        "description": "Global setting for all content boxes, this can be overridden individually. Click an icon to select, click again to deselect.",
        "group": "Design",
        "dependency": []
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
        "default": "",
        "group": "Design",
        "dependency": []
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
        "default": "",
        "group": "Design",
        "dependency": []
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
        "default": "no",
        "group": "Design",
        "dependency": []
      },
      "iconcolor": {
        "type": "colorpickeralpha",
        "heading": "Icon Color",
        "description": "  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#content_box_icon_color\" target=\"_blank\" rel=\"noopener noreferrer\">#ffffff</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-iconcolor\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"iconcolor\" value=\"\" data-default=\"#ffffff\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "iconcolor",
        "value": "",
        "default": "#ffffff",
        "group": "Design",
        "default_option": "content_box_icon_color",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "icon_circle": {
        "type": "radio_button_set",
        "heading": "Icon Background",
        "description": "Choose to show a background behind the icon. Select default for theme option selection.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#content_box_icon_circle\" target=\"_blank\" rel=\"noopener noreferrer\">Yes</a>.",
        "param_name": "icon_circle",
        "value": {
          "": "Default",
          "yes": "Yes",
          "no": "No"
        },
        "child_dependency": true,
        "default": "",
        "group": "Design",
        "default_option": "content_box_icon_circle",
        "default_subset": "",
        "option_map": "select",
        "dependency": []
      },
      "icon_circle_radius": {
        "type": "textfield",
        "heading": "Icon Background Radius",
        "description": "Choose the border radius of the icon background.  In pixels (px), ex: 1px, or &quot;round&quot;.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#content_box_icon_circle_radius\" target=\"_blank\" rel=\"noopener noreferrer\">50%</a>.",
        "param_name": "icon_circle_radius",
        "value": "",
        "group": "Design",
        "dependency": [
          {
            "element": "icon_circle",
            "value": "no",
            "operator": "!="
          }
        ],
        "default_option": "content_box_icon_circle_radius",
        "default_subset": "",
        "option_map": ""
      },
      "circlecolor": {
        "type": "colorpickeralpha",
        "heading": "Icon Background Color",
        "description": "  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#content_box_icon_bg_color\" target=\"_blank\" rel=\"noopener noreferrer\">#212934</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-circlecolor\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"circlecolor\" value=\"\" data-default=\"#212934\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "circlecolor",
        "value": "",
        "default": "#212934",
        "group": "Design",
        "dependency": [
          {
            "element": "icon_circle",
            "value": "no",
            "operator": "!="
          }
        ],
        "default_option": "content_box_icon_bg_color",
        "default_subset": "",
        "option_map": ""
      },
      "circlebordersize": {
        "type": "range",
        "heading": "Icon Background Inner Border Size",
        "description": "  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#content_box_icon_bg_inner_border_size\" target=\"_blank\" rel=\"noopener noreferrer\">1</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-circlebordersize\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"circlebordersize\" value=\"\" data-default=\"1\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "circlebordersize",
        "value": "",
        "min": "0",
        "max": "20",
        "step": "1",
        "default": "1",
        "group": "Design",
        "dependency": [
          {
            "element": "icon_circle",
            "value": "no",
            "operator": "!="
          }
        ],
        "default_option": "content_box_icon_bg_inner_border_size",
        "default_subset": "",
        "option_map": "range"
      },
      "circlebordercolor": {
        "type": "colorpickeralpha",
        "heading": "Icon Background Inner Border Color",
        "description": "  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#content_box_icon_bg_inner_border_color\" target=\"_blank\" rel=\"noopener noreferrer\">#212934</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-circlebordercolor\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"circlebordercolor\" value=\"\" data-default=\"#212934\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "circlebordercolor",
        "value": "",
        "default": "#212934",
        "group": "Design",
        "dependency": [
          {
            "element": "icon_circle",
            "value": "no",
            "operator": "!="
          },
          {
            "element": "circlebordersize",
            "value": "0",
            "operator": "!="
          }
        ],
        "default_option": "content_box_icon_bg_inner_border_color",
        "default_subset": "",
        "option_map": ""
      },
      "outercirclebordersize": {
        "type": "range",
        "heading": "Icon Background Outer Border Size",
        "description": "  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#content_box_icon_bg_outer_border_size\" target=\"_blank\" rel=\"noopener noreferrer\">1</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-outercirclebordersize\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"outercirclebordersize\" value=\"\" data-default=\"1\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "outercirclebordersize",
        "value": "",
        "min": "0",
        "max": "20",
        "step": "1",
        "default": "1",
        "group": "Design",
        "dependency": [
          {
            "element": "icon_circle",
            "value": "no",
            "operator": "!="
          }
        ],
        "default_option": "content_box_icon_bg_outer_border_size",
        "default_subset": "",
        "option_map": "range"
      },
      "outercirclebordercolor": {
        "type": "colorpickeralpha",
        "heading": "Icon Background Outer Border Color",
        "description": "  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#content_box_icon_bg_outer_border_color\" target=\"_blank\" rel=\"noopener noreferrer\">rgba(255,255,255,0)</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-outercirclebordercolor\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"outercirclebordercolor\" value=\"\" data-default=\"rgba(255,255,255,0)\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "outercirclebordercolor",
        "value": "",
        "default": "rgba(255,255,255,0)",
        "group": "Design",
        "dependency": [
          {
            "element": "icon_circle",
            "value": "no",
            "operator": "!="
          },
          {
            "element": "outercirclebordersize",
            "value": "0",
            "operator": "!="
          }
        ],
        "default_option": "content_box_icon_bg_outer_border_color",
        "default_subset": "",
        "option_map": ""
      },
      "icon_size": {
        "type": "range",
        "heading": "Icon Size",
        "description": "Controls the size of the icon. In pixels.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#content_box_icon_size\" target=\"_blank\" rel=\"noopener noreferrer\">20</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-icon_size\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"icon_size\" value=\"\" data-default=\"20\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "icon_size",
        "value": "",
        "min": "0",
        "max": "250",
        "step": "1",
        "default": "20",
        "group": "Design",
        "default_option": "content_box_icon_size",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "icon_hover_type": {
        "type": "select",
        "heading": "Icon Hover Animation Type",
        "description": "Select the animation type for icon on hover. Select default for theme option selection.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#content_box_icon_hover_type\" target=\"_blank\" rel=\"noopener noreferrer\">Fade</a>.",
        "param_name": "icon_hover_type",
        "group": "Design",
        "value": {
          "": "Default",
          "none": "None",
          "fade": "Fade",
          "slide": "Slide",
          "pulsate": "Pulsate"
        },
        "default": "",
        "preview": {
          "selector": ".link-area-box,.link-area-link-icon,.link-area-link-icon",
          "type": "class",
          "toggle": "-hover",
          "append": true
        },
        "default_option": "content_box_icon_hover_type",
        "default_subset": "",
        "option_map": "select",
        "dependency": []
      },
      "hover_accent_color": {
        "type": "colorpickeralpha",
        "heading": "Hover Accent Color",
        "description": "Controls the accent color on hover.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#content_box_hover_animation_accent_color\" target=\"_blank\" rel=\"noopener noreferrer\">#65bc7b</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-hover_accent_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"hover_accent_color\" value=\"\" data-default=\"#65bc7b\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "hover_accent_color",
        "value": "",
        "default": "#65bc7b",
        "group": "Design",
        "preview": {
          "selector": ".link-area-box,.link-area-link-icon,.link-area-link-icon",
          "type": "class",
          "toggle": "-hover",
          "append": true
        },
        "default_option": "content_box_hover_animation_accent_color",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "image": {
        "type": "upload",
        "heading": "Icon Image",
        "description": "To upload your own icon image, deselect the icon above and then upload your icon image.",
        "param_name": "image",
        "value": "",
        "group": "Design",
        "dependency": []
      },
      "image_id": {
        "type": "textfield",
        "heading": "Icon Image ID",
        "description": "Icon Image ID from Media Library.",
        "param_name": "image_id",
        "value": "",
        "hidden": true,
        "group": "Design",
        "dependency": []
      },
      "image_max_width": {
        "type": "textfield",
        "heading": "Icon Image Max Width",
        "description": "Set the icon image max width. Leave empty to use image&#039;s native width. In pixels, ex: 35.",
        "param_name": "image_max_width",
        "default": "35",
        "group": "Design",
        "dependency": []
      },
      "link_type": {
        "type": "radio_button_set",
        "heading": "Link Type",
        "description": "Select the type of link that should show in the content box. Select default for theme option selection.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#content_box_link_type\" target=\"_blank\" rel=\"noopener noreferrer\">Text</a>.",
        "param_name": "link_type",
        "value": {
          "": "Default",
          "text": "Text",
          "button-bar": "Button Bar",
          "button": "Button"
        },
        "default": "",
        "default_option": "content_box_link_type",
        "default_subset": "",
        "option_map": "select",
        "dependency": []
      },
      "button_span": {
        "type": "radio_button_set",
        "heading": "Button Span",
        "description": "Choose to have the button span the full width.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#content_box_button_span\" target=\"_blank\" rel=\"noopener noreferrer\">No</a>.",
        "param_name": "button_span",
        "value": {
          "": "Default",
          "yes": "Yes",
          "no": "No"
        },
        "default": "",
        "dependency": [
          {
            "element": "link_type",
            "value": "text",
            "operator": "!="
          },
          {
            "element": "link_type",
            "value": "button-bar",
            "operator": "!="
          },
          {
            "element": "link_type",
            "value": "",
            "operator": "!="
          }
        ],
        "default_option": "content_box_button_span",
        "default_subset": "",
        "option_map": "select"
      },
      "link_area": {
        "type": "select",
        "heading": "Link Area",
        "description": "Select which area the link will be assigned to. Select default for theme option selection.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#content_box_link_area\" target=\"_blank\" rel=\"noopener noreferrer\">Link+Icon</a>.",
        "param_name": "link_area",
        "value": {
          "": "Default",
          "link-icon": "Link+Icon",
          "box": "Entire Content Box"
        },
        "default": "",
        "default_option": "content_box_link_area",
        "default_subset": "",
        "option_map": "select",
        "dependency": []
      },
      "link_target": {
        "type": "radio_button_set",
        "heading": "Link Target",
        "description": "_self = open in same window <br />_blank = open in new window  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#content_box_link_target\" target=\"_blank\" rel=\"noopener noreferrer\">Same Window</a>.",
        "param_name": "link_target",
        "value": {
          "": "Default",
          "_self": "Same Window",
          "_blank": "New Window/Tab"
        },
        "default": "",
        "default_option": "content_box_link_target",
        "default_subset": "",
        "option_map": "select",
        "dependency": []
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
        "default": "left",
        "dependency": []
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
        "dependency": [
          {
            "element": "layout",
            "value": "timeline-vertical",
            "operator": "!="
          },
          {
            "element": "layout",
            "value": "timeline-horizontal",
            "operator": "!="
          }
        ],
        "preview": {
          "selector": ".content-box-column",
          "type": "animation"
        }
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
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          },
          {
            "element": "layout",
            "value": "timeline-vertical",
            "operator": "!="
          },
          {
            "element": "layout",
            "value": "timeline-horizontal",
            "operator": "!="
          }
        ],
        "preview": {
          "selector": ".content-box-column",
          "type": "animation"
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
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          },
          {
            "element": "layout",
            "value": "timeline-vertical",
            "operator": "!="
          },
          {
            "element": "layout",
            "value": "timeline-horizontal",
            "operator": "!="
          }
        ],
        "preview": {
          "selector": ".content-box-column",
          "type": "animation"
        }
      },
      "animation_delay": {
        "type": "textfield",
        "heading": "Animation Delay",
        "description": "Controls the delay of animation between each element in a set. In milliseconds, 1000 = 1 second.",
        "param_name": "animation_delay",
        "value": "",
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          },
          {
            "element": "layout",
            "value": "timeline-vertical",
            "operator": "!="
          },
          {
            "element": "layout",
            "value": "timeline-horizontal",
            "operator": "!="
          }
        ],
        "preview": {
          "selector": ".content-box-column",
          "type": "animation"
        }
      },
      "animation_offset": {
        "type": "select",
        "heading": "Offset of Animation",
        "description": "Controls when the animation should start.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#animation_offset\" target=\"_blank\" rel=\"noopener noreferrer\">Top Of Element Hits Bottom Of Viewport</a>.",
        "param_name": "animation_offset",
        "value": {
          "": "Default",
          "top-into-view": "Top of element hits bottom of viewport",
          "top-mid-of-view": "Top of element hits middle of viewport",
          "bottom-in-view": "Bottom of element enters viewport"
        },
        "default": "",
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          },
          {
            "element": "layout",
            "value": "timeline-vertical",
            "operator": "!="
          },
          {
            "element": "layout",
            "value": "timeline-horizontal",
            "operator": "!="
          }
        ],
        "default_option": "animation_offset",
        "default_subset": "",
        "option_map": "select"
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
        },
        "group": "Design",
        "shortcode": "fusion_content_boxes",
        "dependency": []
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
        "default": [
          "small-visibility",
          "medium-visibility",
          "large-visibility"
        ],
        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Options</a>.",
        "dependency": []
      },
      "class": {
        "type": "textfield",
        "heading": "CSS Class",
        "description": "Add a class to the wrapping HTML element.",
        "param_name": "class",
        "value": "",
        "group": "General",
        "dependency": []
      },
      "id": {
        "type": "textfield",
        "heading": "CSS ID",
        "description": "Add an ID to the wrapping HTML element.",
        "param_name": "id",
        "value": "",
        "group": "General",
        "dependency": []
      }
    },
    "remove_from_atts": [
      "dimensions"
    ]
  },
  "fusion_content_box": {
    "defaults": {
      "class": "",
      "id": "",
      "backgroundcolor": "",
      "circle": "",
      "circlecolor": "",
      "circlebordercolor": "",
      "circlebordersize": "",
      "outercirclebordercolor": "",
      "outercirclebordersize": "",
      "icon": "",
      "iconcolor": "",
      "iconflip": "",
      "iconrotate": "",
      "iconspin": "",
      "image": "",
      "image_max_width": "",
      "link": "",
      "link_target": "",
      "linktext": "",
      "textcolor": "",
      "title": "",
      "animation_type": "",
      "animation_direction": "",
      "animation_speed": "",
      "animation_offset": "",
      "linktarget": ""
    },
    "extras": {
      "button_size": "large",
      "button_shape": "",
      "button_type": "flat"
    },
    "settings_to_params": [],
    "settings_to_extras": {
      "button_size": "button_size",
      "button_shape": "button_shape",
      "button_type": "button_type"
    },
    "name": "Content Box",
    "description": "Enter some content for this textblock",
    "shortcode": "fusion_content_box",
    "hide_from_builder": true,
    "allow_generator": true,
    "inline_editor": true,
    "inline_editor_shortcodes": true,
    "params": {
      "title": {
        "type": "textfield",
        "heading": "Title",
        "description": "The box title.",
        "param_name": "title",
        "value": "Your Content Goes Here",
        "placeholder": true,
        "dynamic_data": true,
        "dependency": []
      },
      "backgroundcolor": {
        "type": "colorpickeralpha",
        "heading": "Content Box Background Color",
        "description": "  Leave empty for value set in parent options. If that is also empty, the Theme Options value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#content_box_bg_color\" target=\"_blank\" rel=\"noopener noreferrer\">rgba(255,255,255,0)</a> will be used.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-backgroundcolor\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"backgroundcolor\" value=\"\" data-default=\"rgba(255,255,255,0)\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "backgroundcolor",
        "value": "",
        "default": "rgba(255,255,255,0)",
        "default_option": "content_box_bg_color",
        "default_subset": "",
        "option_map": "child",
        "dependency": []
      },
      "icon": {
        "type": "iconpicker",
        "heading": "Icon",
        "param_name": "icon",
        "value": "",
        "description": "Click an icon to select, click again to deselect.",
        "dependency": [
          {
            "element": "image",
            "value": "",
            "operator": "=="
          }
        ]
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
        "dependency": [
          {
            "element": "icon",
            "value": "",
            "operator": "!="
          },
          {
            "element": "image",
            "value": "",
            "operator": "=="
          }
        ]
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
        "dependency": [
          {
            "element": "icon",
            "value": "",
            "operator": "!="
          },
          {
            "element": "image",
            "value": "",
            "operator": "=="
          }
        ]
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
        "dependency": [
          {
            "element": "icon",
            "value": "",
            "operator": "!="
          },
          {
            "element": "image",
            "value": "",
            "operator": "=="
          }
        ]
      },
      "iconcolor": {
        "type": "colorpickeralpha",
        "heading": "Icon Color",
        "description": "Controls the color of the icon.   Leave empty for value set in parent options. If that is also empty, the Theme Options value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#content_box_icon_color\" target=\"_blank\" rel=\"noopener noreferrer\">#ffffff</a> will be used.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-iconcolor\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"iconcolor\" value=\"\" data-default=\"#ffffff\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "iconcolor",
        "value": "",
        "default": "#ffffff",
        "dependency": [
          {
            "element": "icon",
            "value": "",
            "operator": "!="
          },
          {
            "element": "image",
            "value": "",
            "operator": "=="
          }
        ],
        "default_option": "content_box_icon_color",
        "default_subset": "",
        "option_map": "child"
      },
      "circlecolor": {
        "type": "colorpickeralpha",
        "heading": "Icon Background Color",
        "description": "Choose to show a background behind the icon.  Leave empty for value set in parent options. If that is also empty, the Theme Options value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#content_box_icon_bg_color\" target=\"_blank\" rel=\"noopener noreferrer\">#212934</a> will be used.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-circlecolor\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"circlecolor\" value=\"\" data-default=\"#212934\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "circlecolor",
        "value": "",
        "default": "#212934",
        "dependency": [
          {
            "element": "icon",
            "value": "",
            "operator": "!="
          },
          {
            "element": "image",
            "value": "",
            "operator": "=="
          },
          {
            "element": "parent_icon_circle",
            "value": "no",
            "operator": "!="
          }
        ],
        "default_option": "content_box_icon_bg_color",
        "default_subset": "",
        "option_map": "child"
      },
      "circlebordersize": {
        "type": "range",
        "heading": "Icon Background Inner Border Size",
        "description": "  Leave empty for value set in parent options. If that is also empty, the Theme Options value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#content_box_icon_bg_inner_border_size\" target=\"_blank\" rel=\"noopener noreferrer\">1</a> will be used.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-circlebordersize\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"circlebordersize\" value=\"\" data-default=\"1\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "circlebordersize",
        "value": "",
        "min": "0",
        "max": "20",
        "step": "1",
        "default": "1",
        "dependency": [
          {
            "element": "icon",
            "value": "",
            "operator": "!="
          },
          {
            "element": "image",
            "value": "",
            "operator": "=="
          },
          {
            "element": "parent_icon_circle",
            "value": "no",
            "operator": "!="
          }
        ],
        "default_option": "content_box_icon_bg_inner_border_size",
        "default_subset": "",
        "option_map": "child"
      },
      "circlebordercolor": {
        "type": "colorpickeralpha",
        "heading": "Icon Background Inner Border Color",
        "description": "  Leave empty for value set in parent options. If that is also empty, the Theme Options value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#content_box_icon_bg_inner_border_color\" target=\"_blank\" rel=\"noopener noreferrer\">#212934</a> will be used.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-circlebordercolor\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"circlebordercolor\" value=\"\" data-default=\"#212934\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "circlebordercolor",
        "value": "",
        "default": "#212934",
        "dependency": [
          {
            "element": "icon",
            "value": "",
            "operator": "!="
          },
          {
            "element": "image",
            "value": "",
            "operator": "=="
          },
          {
            "element": "slidercirclebordersize",
            "value": "0",
            "operator": "!="
          },
          {
            "element": "parent_icon_circle",
            "value": "no",
            "operator": "!="
          }
        ],
        "default_option": "content_box_icon_bg_inner_border_color",
        "default_subset": "",
        "option_map": "child"
      },
      "outercirclebordersize": {
        "type": "range",
        "heading": "Icon Background Outer Border Size",
        "description": "  Leave empty for value set in parent options. If that is also empty, the Theme Options value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#content_box_icon_bg_outer_border_size\" target=\"_blank\" rel=\"noopener noreferrer\">1</a> will be used.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-outercirclebordersize\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"outercirclebordersize\" value=\"\" data-default=\"1\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "outercirclebordersize",
        "value": "",
        "min": "0",
        "max": "20",
        "step": "1",
        "default": "1",
        "dependency": [
          {
            "element": "icon",
            "value": "",
            "operator": "!="
          },
          {
            "element": "image",
            "value": "",
            "operator": "=="
          },
          {
            "element": "parent_icon_circle",
            "value": "no",
            "operator": "!="
          }
        ],
        "default_option": "content_box_icon_bg_outer_border_size",
        "default_subset": "",
        "option_map": "child"
      },
      "outercirclebordercolor": {
        "type": "colorpickeralpha",
        "heading": "Icon Background Outer Border Color",
        "description": "  Leave empty for value set in parent options. If that is also empty, the Theme Options value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#content_box_icon_bg_outer_border_color\" target=\"_blank\" rel=\"noopener noreferrer\">rgba(255,255,255,0)</a> will be used.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-outercirclebordercolor\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"outercirclebordercolor\" value=\"\" data-default=\"rgba(255,255,255,0)\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "outercirclebordercolor",
        "value": "",
        "default": "rgba(255,255,255,0)",
        "dependency": [
          {
            "element": "icon",
            "value": "",
            "operator": "!="
          },
          {
            "element": "image",
            "value": "",
            "operator": "=="
          },
          {
            "element": "slideroutercirclebordersize",
            "value": "0",
            "operator": "!="
          },
          {
            "element": "parent_icon_circle",
            "value": "no",
            "operator": "!="
          }
        ],
        "default_option": "content_box_icon_bg_outer_border_color",
        "default_subset": "",
        "option_map": "child"
      },
      "image": {
        "type": "upload",
        "heading": "Icon Image",
        "description": "To upload your own icon image, deselect the icon above and then upload your icon image.",
        "param_name": "image",
        "value": "",
        "dependency": []
      },
      "image_id": {
        "type": "textfield",
        "heading": "Icon Image ID",
        "description": "Icon Image ID from Media Library.",
        "param_name": "image_id",
        "value": "",
        "hidden": true,
        "callback": {
          "function": "fusion_ajax",
          "action": "get_fusion_content_box_image_data",
          "ajax": true
        },
        "dependency": []
      },
      "image_max_width": {
        "type": "textfield",
        "heading": "Icon Image Max Width",
        "description": "Set the icon image max width. Leave empty for value set in parent option. Set to -1 to use image&#039;s native width. In pixels, ex: 35.",
        "param_name": "image_max_width",
        "default": "",
        "dependency": [
          {
            "element": "image",
            "value": "",
            "operator": "!="
          }
        ]
      },
      "link": {
        "type": "link_selector",
        "heading": "Read More Link Url",
        "description": "Add the link&#039;s url ex: http://example.com.",
        "param_name": "link",
        "value": "",
        "dependency": []
      },
      "linktext": {
        "type": "textfield",
        "heading": "Read More Link Text",
        "description": "Insert the text to display as the link.",
        "param_name": "linktext",
        "value": "",
        "dependency": [
          {
            "element": "link",
            "value": "",
            "operator": "!="
          }
        ]
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
        "dependency": [
          {
            "element": "link",
            "value": "",
            "operator": "!="
          }
        ]
      },
      "element_content": {
        "type": "tinymce",
        "heading": "Content Box Content",
        "description": "Add content for content box.",
        "param_name": "element_content",
        "value": "Your Content Goes Here",
        "placeholder": true,
        "dynamic_data": true,
        "dependency": []
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
        "group": "Animation",
        "preview": {
          "selector": ".link-area-box,.link-area-link-icon,.link-area-link-icon",
          "type": "animation"
        },
        "dependency": []
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
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          },
          {
            "element": "animation_type",
            "value": "none",
            "operator": "!="
          }
        ],
        "preview": {
          "selector": ".link-area-box,.link-area-link-icon,.link-area-link-icon",
          "type": "animation"
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
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          },
          {
            "element": "animation_type",
            "value": "none",
            "operator": "!="
          }
        ],
        "preview": {
          "selector": ".link-area-box,.link-area-link-icon,.link-area-link-icon",
          "type": "animation"
        }
      },
      "animation_offset": {
        "type": "select",
        "heading": "Offset of Animation",
        "description": "Controls when the animation should start.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#animation_offset\" target=\"_blank\" rel=\"noopener noreferrer\">Top Of Element Hits Bottom Of Viewport</a>.",
        "param_name": "animation_offset",
        "value": {
          "": "Default",
          "top-into-view": "Top of element hits bottom of viewport",
          "top-mid-of-view": "Top of element hits middle of viewport",
          "bottom-in-view": "Bottom of element enters viewport"
        },
        "default": "",
        "group": "Animation",
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          },
          {
            "element": "animation_type",
            "value": "none",
            "operator": "!="
          }
        ],
        "default_option": "animation_offset",
        "default_subset": "",
        "option_map": "select"
      }
    },
    "has_ajax": {
      "image_id": {
        "function": "fusion_ajax",
        "action": "get_fusion_content_box_image_data",
        "param_name": "image_id"
      }
    },
    "remove_from_atts": []
  },
  "fusion_countdown": {
    "defaults": {
      "hide_on_mobile": "small-visibility, medium-visibility, large-visibility",
      "class": "",
      "id": "",
      "background_color": "#65bc7b",
      "background_image": "",
      "background_position": "center center",
      "background_repeat": "no-repeat",
      "border_radius": "",
      "counter_box_color": "#212934",
      "counter_box_spacing": "10px",
      "counter_border_color": "#1d242d",
      "counter_border_radius": "4px",
      "counter_border_size": "0",
      "counter_font_size": "18px",
      "counter_padding_bottom": "0.6em",
      "counter_padding_left": "1.1em",
      "counter_padding_right": "1.1em",
      "counter_padding_top": "0.6em",
      "counter_text_color": "#ffffff",
      "countdown_end": "2000-01-01 00:00:00",
      "dash_titles": "short",
      "heading_font_size": "18px",
      "heading_text": "",
      "heading_text_color": "#ffffff",
      "label_color": "#ffffff",
      "label_font_size": "18px",
      "label_position": "text_flow",
      "layout": "floated",
      "link_text": "",
      "link_text_color": "#ffffff",
      "link_target": "_self",
      "link_url": "",
      "show_weeks": "no",
      "subheading_font_size": "14px",
      "subheading_text": "",
      "subheading_text_color": "#ffffff",
      "timezone": "site_time"
    },
    "extras": {
      "gmt_offset": "0",
      "weeks_text": "Weeks",
      "days_text": "Days",
      "hrs_text": "Hrs",
      "hours_text": "Hours",
      "min_text": "Min",
      "minutes_text": "Minutes",
      "sec_text": "Sec",
      "seconds_text": "Seconds"
    },
    "settings_to_params": {
      "countdown_background_color": "background_color",
      "countdown_background_image": {
        "param": "background_image",
        "callback": "urlFromObject"
      },
      "countdown_background_position": "background_position",
      "countdown_background_repeat": "background_repeat",
      "countdown_counter_border_color": "counter_border_color",
      "countdown_counter_border_radius": "counter_border_radius",
      "countdown_counter_border_size": "counter_border_size",
      "countdown_counter_box_color": "counter_box_color",
      "countdown_counter_box_spacing": "counter_box_spacing",
      "countdown_counter_font_size": "counter_font_size",
      "countdown_counter_padding[bottom]": "counter_padding_bottom",
      "countdown_counter_padding[left]": "counter_padding_left",
      "countdown_counter_padding[right]": "counter_padding_right",
      "countdown_counter_padding[top]": "counter_padding_bottom",
      "countdown_counter_text_color": "counter_text_color",
      "countdown_heading_font_size": "heading_font_size",
      "countdown_heading_text_color": "heading_text_color",
      "countdown_label_color": "label_color",
      "countdown_label_font_size": "label_font_size",
      "countdown_label_position": "label_position",
      "countdown_layout": "layout",
      "countdown_link_text_color": "link_text_color",
      "countdown_link_target": "link_target",
      "countdown_show_weeks": "show_weeks",
      "countdown_subheading_font_size": "subheading_font_size",
      "countdown_subheading_text_color": "subheading_text_color",
      "countdown_timezone": "timezone"
    },
    "name": "Countdown",
    "shortcode": "fusion_countdown",
    "icon": "fusiona-calendar-check-o",
    "preview": "/var/www/html/wordpress_avada_624/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-countdown-preview.php",
    "preview_id": "fusion-builder-block-module-countdown-preview-template",
    "help_url": "https://theme-fusion.com/documentation/fusion-builder/elements/countdown-element/",
    "inline_editor": true,
    "params": {
      "countdown_end": {
        "type": "date_time_picker",
        "heading": "Countdown Timer End",
        "description": "Set the end date and time for the countdown time. Click the calendar icon to use the date picker. Use SQL time format: YYYY-MM-DD HH:MM:SS. E.g: 2016-05-10 12:30:00.",
        "param_name": "countdown_end",
        "value": "",
        "dependency": []
      },
      "timezone": {
        "type": "radio_button_set",
        "heading": "Timezone",
        "description": "Choose which timezone should be used for the countdown calculation.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#countdown_timezone\" target=\"_blank\" rel=\"noopener noreferrer\">Timezone Of Site</a>.",
        "param_name": "timezone",
        "value": {
          "": "Default",
          "site_time": "Timezone of Site",
          "user_time": "Timezone of User"
        },
        "default": "",
        "default_option": "countdown_timezone",
        "default_subset": "",
        "option_map": "select",
        "dependency": []
      },
      "layout": {
        "type": "radio_button_set",
        "heading": "Layout",
        "description": "Select the layout of the coundown element.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#countdown_layout\" target=\"_blank\" rel=\"noopener noreferrer\">Floated</a>.",
        "param_name": "layout",
        "value": {
          "": "Default",
          "floated": "Floated",
          "stacked": "Stacked"
        },
        "default": "",
        "default_option": "countdown_layout",
        "default_subset": "",
        "option_map": "select",
        "dependency": []
      },
      "show_weeks": {
        "type": "radio_button_set",
        "heading": "Show Weeks",
        "description": "Select &quot;yes&quot; to show weeks for longer countdowns.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#countdown_show_weeks\" target=\"_blank\" rel=\"noopener noreferrer\">No</a>.",
        "param_name": "show_weeks",
        "value": {
          "": "Default",
          "yes": "Yes",
          "no": "No"
        },
        "default": "",
        "default_option": "countdown_show_weeks",
        "default_subset": "",
        "option_map": "select",
        "dependency": []
      },
      "label_position": {
        "type": "radio_button_set",
        "heading": "Label Position",
        "description": "Select the position of the date/time labels.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#countdown_label_position\" target=\"_blank\" rel=\"noopener noreferrer\">Text Flow</a>.",
        "param_name": "label_position",
        "value": {
          "": "Default",
          "text_flow": "Text Flow",
          "top": "Top",
          "bottom": "Bottom"
        },
        "default": "",
        "default_option": "countdown_label_position",
        "default_subset": "",
        "option_map": "select",
        "dependency": []
      },
      "background_color": {
        "type": "colorpickeralpha",
        "heading": "Background Color",
        "description": "Choose a background color for the countdown wrapping box.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#countdown_background_color\" target=\"_blank\" rel=\"noopener noreferrer\">#65bc7b</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-background_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"background_color\" value=\"\" data-default=\"#65bc7b\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "background_color",
        "value": "",
        "default": "#65bc7b",
        "group": "Background",
        "default_option": "countdown_background_color",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "background_image": {
        "type": "upload",
        "heading": "Background Image",
        "description": "Upload an image to display in the background.  Currently no default selected. Can be set globally from the <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#countdown_background_image\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Options</a>.",
        "param_name": "background_image",
        "value": "",
        "group": "Background",
        "default_option": "countdown_background_image",
        "default_subset": "thumbnail",
        "option_map": "",
        "dependency": []
      },
      "background_position": {
        "type": "select",
        "heading": "Background Position",
        "description": "Choose the position of the background image.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#countdown_background_position\" target=\"_blank\" rel=\"noopener noreferrer\">Center Center</a>.",
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
        "dependency": [
          {
            "element": "background_image",
            "value": "",
            "operator": "!="
          }
        ],
        "default_option": "countdown_background_position",
        "default_subset": "",
        "option_map": ""
      },
      "background_repeat": {
        "type": "select",
        "heading": "Background Repeat",
        "description": "Choose how the background image repeats.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#countdown_background_repeat\" target=\"_blank\" rel=\"noopener noreferrer\">No Repeat</a>.",
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
        "dependency": [
          {
            "element": "background_image",
            "value": "",
            "operator": "!="
          }
        ],
        "default_option": "countdown_background_repeat",
        "default_subset": "",
        "option_map": ""
      },
      "border_radius": {
        "type": "textfield",
        "heading": "Element Border Radius",
        "description": "Choose the radius of outer box. In pixels (px), ex: 1px.",
        "param_name": "border_radius",
        "value": "",
        "dependency": []
      },
      "counter_box_spacing": {
        "type": "textfield",
        "heading": "Counter Box Spacing",
        "description": "Controls the space between the counter boxes. Enter value including any valid CSS unit, ex: 20px.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#countdown_counter_box_spacing\" target=\"_blank\" rel=\"noopener noreferrer\">10px</a>.",
        "param_name": "counter_box_spacing",
        "value": "",
        "group": "Design",
        "default_option": "countdown_counter_box_spacing",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "counter_box_color": {
        "type": "colorpickeralpha",
        "heading": "Counter Box Background Color",
        "description": "Choose a background color for the counter boxes.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#countdown_counter_box_color\" target=\"_blank\" rel=\"noopener noreferrer\">#212934</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-counter_box_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"counter_box_color\" value=\"\" data-default=\"#212934\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "counter_box_color",
        "value": "",
        "default": "#212934",
        "group": "Design",
        "default_option": "countdown_counter_box_color",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "counter_border_size": {
        "type": "range",
        "heading": "Counter Box Border Size",
        "description": "In pixels.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#countdown_counter_border_size\" target=\"_blank\" rel=\"noopener noreferrer\">0</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-counter_border_size\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"counter_border_size\" value=\"\" data-default=\"0\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "counter_border_size",
        "value": "",
        "min": "0",
        "max": "50",
        "step": "1",
        "default": "0",
        "group": "Design",
        "default_option": "countdown_counter_border_size",
        "default_subset": "",
        "option_map": "range",
        "dependency": []
      },
      "counter_border_color": {
        "type": "colorpickeralpha",
        "heading": "Counter Box Border Color",
        "description": "Controls the border color for the counter boxes.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#countdown_counter_border_color\" target=\"_blank\" rel=\"noopener noreferrer\">#1d242d</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-counter_border_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"counter_border_color\" value=\"\" data-default=\"#1d242d\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "counter_border_color",
        "value": "",
        "default": "0",
        "dependency": [
          {
            "element": "counter_border_size",
            "value": "0",
            "operator": "!="
          }
        ],
        "group": "Design",
        "default_option": "countdown_counter_border_color",
        "default_subset": "",
        "option_map": ""
      },
      "counter_border_radius": {
        "type": "textfield",
        "heading": "Counter Box Border Radius",
        "description": "Controls the border radius for the counter boxes. In pixels (px), ex: 1px, or &quot;round&quot;.   Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#countdown_counter_border_radius\" target=\"_blank\" rel=\"noopener noreferrer\">4px</a>.",
        "param_name": "counter_border_radius",
        "value": "",
        "group": "Design",
        "default_option": "countdown_counter_border_radius",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "counter_padding": {
        "type": "dimension",
        "remove_from_atts": true,
        "heading": "Counter Box Padding",
        "description": "Set the padding for the counter boxes. Enter values including any valid CSS unit, ex: 4%.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#countdown_counter_padding\" target=\"_blank\" rel=\"noopener noreferrer\">0.6em, 1.1em, 0.6em, 1.1em</a>.",
        "param_name": "counter_padding",
        "value": {
          "counter_padding_top": "",
          "counter_padding_right": "",
          "counter_padding_bottom": "",
          "counter_padding_left": ""
        },
        "group": "Design",
        "default_option": "countdown_counter_padding",
        "default_subset": [
          "top",
          "right",
          "bottom",
          "left"
        ],
        "option_map": "",
        "dependency": []
      },
      "counter_font_size": {
        "type": "textfield",
        "heading": "Counter Font Size",
        "description": "Controls the font size for the countdown timer. Enter value including any valid CSS unit, ex: 20px.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#countdown_counter_font_size\" target=\"_blank\" rel=\"noopener noreferrer\">18px</a>.",
        "param_name": "counter_font_size",
        "value": "",
        "group": "Design",
        "default_option": "countdown_counter_font_size",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "counter_text_color": {
        "type": "colorpickeralpha",
        "heading": "Counter Text Color",
        "description": "Choose a text color for the countdown timer.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#countdown_counter_text_color\" target=\"_blank\" rel=\"noopener noreferrer\">#ffffff</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-counter_text_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"counter_text_color\" value=\"\" data-default=\"#ffffff\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "counter_text_color",
        "value": "",
        "default": "#ffffff",
        "group": "Design",
        "default_option": "countdown_counter_text_color",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "label_font_size": {
        "type": "textfield",
        "heading": "Counter Label Font Size",
        "description": "Controls the font size for the countdown label. Enter value including any valid CSS unit, ex: 20px.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#countdown_label_font_size\" target=\"_blank\" rel=\"noopener noreferrer\">18px</a>.",
        "param_name": "label_font_size",
        "value": "",
        "group": "Design",
        "default_option": "countdown_label_font_size",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "label_color": {
        "type": "colorpickeralpha",
        "heading": "Counter Label Text Color",
        "description": "Choose a text color for the countdown timer labels.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#countdown_label_color\" target=\"_blank\" rel=\"noopener noreferrer\">#ffffff</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-label_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"label_color\" value=\"\" data-default=\"#ffffff\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "label_color",
        "value": "",
        "default": "#ffffff",
        "group": "Design",
        "default_option": "countdown_label_color",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "heading_text": {
        "type": "textfield",
        "heading": "Heading Text",
        "description": "Choose a heading text for the countdown.",
        "param_name": "heading_text",
        "value": "Your Content Goes Here",
        "placeholder": true,
        "dynamic_data": true,
        "dependency": []
      },
      "heading_font_size": {
        "type": "textfield",
        "heading": "Heading Font Size",
        "description": "Controls the font size for the countdown heading. Enter value including any valid CSS unit, ex: 20px.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#countdown_heading_font_size\" target=\"_blank\" rel=\"noopener noreferrer\">18px</a>.",
        "param_name": "heading_font_size",
        "value": "",
        "group": "Design",
        "default_option": "countdown_heading_font_size",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "heading_text_color": {
        "type": "colorpickeralpha",
        "heading": "Heading Text Color",
        "description": "Choose a text color for the countdown heading.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#countdown_heading_text_color\" target=\"_blank\" rel=\"noopener noreferrer\">#ffffff</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-heading_text_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"heading_text_color\" value=\"\" data-default=\"#ffffff\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "heading_text_color",
        "value": "",
        "default": "#ffffff",
        "group": "Design",
        "default_option": "countdown_heading_text_color",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "subheading_text": {
        "type": "textfield",
        "heading": "Subheading Text",
        "description": "Choose a subheading text for the countdown.",
        "param_name": "subheading_text",
        "value": "Your Content Goes Here",
        "placeholder": true,
        "dynamic_data": true,
        "dependency": []
      },
      "subheading_font_size": {
        "type": "textfield",
        "heading": "Subheading Font Size",
        "description": "Controls the font size for the countdown subheading. Enter value including any valid CSS unit, ex: 20px.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#countdown_subheading_font_size\" target=\"_blank\" rel=\"noopener noreferrer\">14px</a>.",
        "param_name": "subheading_font_size",
        "value": "",
        "group": "Design",
        "default_option": "countdown_subheading_font_size",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "subheading_text_color": {
        "type": "colorpickeralpha",
        "heading": "Subheading Text Color",
        "description": "Choose a text color for the countdown subheading.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#countdown_subheading_text_color\" target=\"_blank\" rel=\"noopener noreferrer\">#ffffff</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-subheading_text_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"subheading_text_color\" value=\"\" data-default=\"#ffffff\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "subheading_text_color",
        "value": "",
        "default": "#ffffff",
        "group": "Design",
        "default_option": "countdown_subheading_text_color",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "link_url": {
        "type": "link_selector",
        "heading": "Link URL",
        "description": "Add a url for the link. E.g: http://example.com.",
        "param_name": "link_url",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "link_text": {
        "type": "textfield",
        "heading": "Link Text",
        "description": "Choose a link text for the countdown.",
        "param_name": "link_text",
        "value": "",
        "dependency": [
          {
            "element": "link_url",
            "value": "",
            "operator": "!="
          }
        ]
      },
      "link_text_color": {
        "type": "colorpickeralpha",
        "heading": "Link Text Color",
        "description": "Choose a text color for the countdown link.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#countdown_link_text_color\" target=\"_blank\" rel=\"noopener noreferrer\">#ffffff</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-link_text_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"link_text_color\" value=\"\" data-default=\"#ffffff\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "link_text_color",
        "value": "",
        "default": "#ffffff",
        "group": "Design",
        "dependency": [
          {
            "element": "link_url",
            "value": "",
            "operator": "!="
          }
        ],
        "default_option": "countdown_link_text_color",
        "default_subset": "",
        "option_map": ""
      },
      "link_target": {
        "type": "radio_button_set",
        "heading": "Link Target",
        "description": "_self = open in same window\n\t \t\t\t\t                                      _blank = open in new window  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#countdown_link_target\" target=\"_blank\" rel=\"noopener noreferrer\">Same Window</a>.",
        "param_name": "link_target",
        "value": {
          "default": "Default",
          "_self": "_self",
          "_blank": "_blank"
        },
        "default": "default",
        "dependency": [
          {
            "element": "link_url",
            "value": "",
            "operator": "!="
          }
        ],
        "default_option": "countdown_link_target",
        "default_subset": "",
        "option_map": "select"
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
        "default": [
          "small-visibility",
          "medium-visibility",
          "large-visibility"
        ],
        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Options</a>.",
        "dependency": []
      },
      "class": {
        "type": "textfield",
        "heading": "CSS Class",
        "description": "Add a class to the wrapping HTML element.",
        "param_name": "class",
        "value": "",
        "dependency": []
      },
      "id": {
        "type": "textfield",
        "heading": "CSS ID",
        "description": "Add an ID to the wrapping HTML element.",
        "param_name": "id",
        "value": "",
        "dependency": []
      }
    },
    "remove_from_atts": [
      "counter_padding"
    ]
  },
  "fusion_counters_box": {
    "defaults": {
      "hide_on_mobile": "small-visibility, medium-visibility, large-visibility",
      "class": "",
      "id": "",
      "animation_offset": "top-into-view",
      "body_color": "#4a4e57",
      "body_size": "14",
      "border_color": "#e2e2e2",
      "color": "#65bc7b",
      "columns": "",
      "icon": "",
      "icon_size": "50",
      "icon_top": "no",
      "title_size": "50"
    },
    "extras": {
      "counter_speed": "1000"
    },
    "settings_to_params": {
      "animation_offset": "animation_offset",
      "counter_box_body_color": "body_color",
      "counter_box_body_size": "body_size",
      "counter_box_border_color": "border_color",
      "counter_box_color": "color",
      "counter_box_icon_size": "icon_size",
      "counter_box_icon_top": "icon_top",
      "counter_box_title_size": "title_size",
      "counter_box_speed": "counter_speed"
    },
    "settings_to_extras": {
      "counter_box_speed": "counter_speed"
    },
    "name": "Counter Boxes",
    "shortcode": "fusion_counters_box",
    "multi": "multi_element_parent",
    "element_child": "fusion_counter_box",
    "icon": "fusiona-browser",
    "preview": "/var/www/html/wordpress_avada_624/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-counter-box-preview.php",
    "preview_id": "fusion-builder-block-module-counter-box-preview-template",
    "child_ui": true,
    "help_url": "https://theme-fusion.com/documentation/fusion-builder/elements/counter-boxes-element/",
    "params": {
      "element_content": {
        "type": "tinymce",
        "heading": "Content",
        "description": "Enter some content for this counter box.",
        "param_name": "element_content",
        "value": "[fusion_counter_box value=\"20\" delimiter=\"\" unit=\"\" unit_pos=\"suffix\" icon=\"\" direction=\"up\"]Your Content Goes Here[/fusion_counter_box]",
        "dependency": []
      },
      "columns": {
        "type": "range",
        "heading": "Number of Columns",
        "description": "Set the number of columns per row.",
        "param_name": "columns",
        "value": "4",
        "min": "1",
        "max": "6",
        "step": "1",
        "dependency": []
      },
      "color": {
        "type": "colorpickeralpha",
        "heading": "Counter Box Value Font Color",
        "description": "Controls the color of the counter &#039;value&#039; and icon.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#counter_box_color\" target=\"_blank\" rel=\"noopener noreferrer\">#65bc7b</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"color\" value=\"\" data-default=\"#65bc7b\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "color",
        "value": "",
        "default": "#65bc7b",
        "default_option": "counter_box_color",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "title_size": {
        "type": "range",
        "heading": "Counter Box Value Font Size",
        "description": "Controls the size of the counter &#039;value&#039;. Enter the font size without &#039;px&#039; ex: 50.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#counter_box_title_size\" target=\"_blank\" rel=\"noopener noreferrer\">50</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-title_size\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"title_size\" value=\"\" data-default=\"50\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "title_size",
        "value": "",
        "default": "50",
        "min": "1",
        "max": "200",
        "step": "1",
        "default_option": "counter_box_title_size",
        "default_subset": "",
        "option_map": "range",
        "dependency": []
      },
      "icon": {
        "type": "iconpicker",
        "heading": "Icon",
        "param_name": "icon",
        "value": "",
        "description": "Global setting for all counter boxes, this can be overridden individually. Click an icon to select, click again to deselect.",
        "dependency": []
      },
      "icon_size": {
        "type": "range",
        "heading": "Counter Box Icon Size",
        "description": "Controls the size of the icon. Enter the font size without &#039;px&#039;. Default is 50.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#counter_box_icon_size\" target=\"_blank\" rel=\"noopener noreferrer\">50</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-icon_size\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"icon_size\" value=\"\" data-default=\"50\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "icon_size",
        "value": "",
        "default": "50",
        "min": "1",
        "max": "500",
        "step": "1",
        "default_option": "counter_box_icon_size",
        "default_subset": "",
        "option_map": "range",
        "dependency": []
      },
      "icon_top": {
        "type": "radio_button_set",
        "heading": "Counter Box Icon Top",
        "description": "Controls the position of the icon.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#counter_box_icon_top\" target=\"_blank\" rel=\"noopener noreferrer\">No</a>.",
        "param_name": "icon_top",
        "value": {
          "": "Default",
          "no": "No",
          "yes": "Yes"
        },
        "default": "",
        "default_option": "counter_box_icon_top",
        "default_subset": "",
        "option_map": "yesno",
        "dependency": []
      },
      "body_color": {
        "type": "colorpickeralpha",
        "heading": "Counter Box Body Font Color",
        "param_name": "body_color",
        "value": "",
        "default": "#4a4e57",
        "description": "Controls the color of the counter body text.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#counter_box_body_color\" target=\"_blank\" rel=\"noopener noreferrer\">#4a4e57</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-body_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"body_color\" value=\"\" data-default=\"#4a4e57\">Reset to default.</a><span>Using default value.</span></span>",
        "default_option": "counter_box_body_color",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "body_size": {
        "type": "range",
        "heading": "Counter Box Body Font Size",
        "description": "Controls the size of the counter body text. Enter the font size without &#039;px&#039; ex: 13.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#counter_box_body_size\" target=\"_blank\" rel=\"noopener noreferrer\">14</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-body_size\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"body_size\" value=\"\" data-default=\"14\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "body_size",
        "value": "",
        "default": "14",
        "min": "1",
        "max": "200",
        "step": "1",
        "default_option": "counter_box_body_size",
        "default_subset": "",
        "option_map": "range",
        "dependency": []
      },
      "border_color": {
        "type": "colorpickeralpha",
        "heading": "Counter Box Border Color",
        "param_name": "border_color",
        "description": "Controls the color of the border.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#counter_box_border_color\" target=\"_blank\" rel=\"noopener noreferrer\">#e2e2e2</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-border_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"border_color\" value=\"\" data-default=\"#e2e2e2\">Reset to default.</a><span>Using default value.</span></span>",
        "value": "",
        "default": "#e2e2e2",
        "default_option": "counter_box_border_color",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "animation_offset": {
        "type": "select",
        "heading": "Offset of Animation",
        "description": "Controls when the animation should start.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#animation_offset\" target=\"_blank\" rel=\"noopener noreferrer\">Top Of Element Hits Bottom Of Viewport</a>.",
        "param_name": "animation_offset",
        "value": {
          "": "Default",
          "top-into-view": "Top of element hits bottom of viewport",
          "top-mid-of-view": "Top of element hits middle of viewport",
          "bottom-in-view": "Bottom of element enters viewport"
        },
        "default": "",
        "default_option": "animation_offset",
        "default_subset": "",
        "option_map": "select",
        "dependency": []
      },
      "hide_on_mobile": {
        "type": "checkbox_button_set",
        "heading": "Element Visibility",
        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Options</a>.",
        "param_name": "hide_on_mobile",
        "value": {
          "small-visibility": "Small Screen",
          "medium-visibility": "Medium Screen",
          "large-visibility": "Large Screen"
        },
        "default": [
          "small-visibility",
          "medium-visibility",
          "large-visibility"
        ],
        "dependency": []
      },
      "class": {
        "type": "textfield",
        "heading": "CSS Class",
        "description": "Add a class to the wrapping HTML element.",
        "param_name": "class",
        "value": "",
        "group": "General",
        "dependency": []
      },
      "id": {
        "type": "textfield",
        "heading": "CSS ID",
        "description": "Add an ID to the wrapping HTML element.",
        "param_name": "id",
        "value": "",
        "group": "General",
        "dependency": []
      }
    },
    "remove_from_atts": []
  },
  "fusion_counter_box": {
    "defaults": {
      "class": "",
      "id": "",
      "decimals": "0",
      "delimiter": "",
      "direction": "up",
      "icon": "",
      "unit": "",
      "unit_pos": "suffix",
      "value": "20"
    },
    "extras": [],
    "settings_to_params": [],
    "settings_to_extras": [],
    "name": "Counter Box",
    "description": "Enter some content for this block.",
    "shortcode": "fusion_counter_box",
    "hide_from_builder": true,
    "inline_editor": true,
    "inline_editor_shortcodes": false,
    "params": {
      "value": {
        "type": "textfield",
        "heading": "Counter Value",
        "description": "The number to which the counter will animate. Decimal numbers are supported by using the &quot;.&quot; (period) delimiter.",
        "param_name": "value",
        "value": "20",
        "dependency": []
      },
      "delimiter": {
        "type": "textfield",
        "heading": "Delimiter Digit",
        "description": "Insert a delimiter digit for better readability. ex: ,",
        "param_name": "delimiter",
        "value": "",
        "dependency": []
      },
      "unit": {
        "type": "textfield",
        "heading": "Counter Box Unit",
        "description": "Insert a unit for the counter. ex %",
        "param_name": "unit",
        "value": "",
        "dependency": []
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
        "default": "suffix",
        "dependency": []
      },
      "icon": {
        "type": "iconpicker",
        "heading": "Icon",
        "param_name": "icon",
        "value": "",
        "description": "Click an icon to select, click again to deselect.",
        "dependency": []
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
        "default": "up",
        "dependency": []
      },
      "element_content": {
        "type": "textfield",
        "heading": "Counter Box Text",
        "description": "Insert text for counter box.",
        "param_name": "element_content",
        "value": "Your Content Goes Here",
        "placeholder": true,
        "dynamic_data": true,
        "dependency": []
      }
    },
    "remove_from_atts": []
  },
  "fusion_counters_circle": {
    "defaults": {
      "hide_on_mobile": "small-visibility, medium-visibility, large-visibility",
      "class": "",
      "id": "",
      "animation_offset": "top-into-view"
    },
    "settings_to_params": {
      "animation_offset": "animation_offset"
    },
    "name": "Counter Circles",
    "shortcode": "fusion_counters_circle",
    "multi": "multi_element_parent",
    "element_child": "fusion_counter_circle",
    "sortable": false,
    "icon": "fusiona-clock",
    "help_url": "https://theme-fusion.com/documentation/fusion-builder/elements/counter-circles-element/",
    "params": {
      "element_content": {
        "type": "tinymce",
        "heading": "Content",
        "description": "Enter some content for this counter circle.",
        "param_name": "element_content",
        "value": "[fusion_counter_circle value=\"50\" filledcolor=\"\" unfilledcolor=\"\" size=\"220\" scales=\"no\" countdown=\"no\" speed=\"1500\"]Counter Content[/fusion_counter_circle]",
        "dependency": []
      },
      "animation_offset": {
        "type": "select",
        "heading": "Offset of Animation",
        "description": "Controls when the animation should start.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#animation_offset\" target=\"_blank\" rel=\"noopener noreferrer\">Top Of Element Hits Bottom Of Viewport</a>.",
        "param_name": "animation_offset",
        "value": {
          "": "Default",
          "top-into-view": "Top of element hits bottom of viewport",
          "top-mid-of-view": "Top of element hits middle of viewport",
          "bottom-in-view": "Bottom of element enters viewport"
        },
        "default": "",
        "default_option": "animation_offset",
        "default_subset": "",
        "option_map": "select",
        "dependency": []
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
        "default": [
          "small-visibility",
          "medium-visibility",
          "large-visibility"
        ],
        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Options</a>.",
        "dependency": []
      },
      "class": {
        "type": "textfield",
        "heading": "CSS Class",
        "description": "Add a class to the wrapping HTML element.",
        "param_name": "class",
        "value": "",
        "group": "General",
        "dependency": []
      },
      "id": {
        "type": "textfield",
        "heading": "CSS ID",
        "description": "Add an ID to the wrapping HTML element.",
        "param_name": "id",
        "value": "",
        "group": "General",
        "dependency": []
      }
    },
    "remove_from_atts": []
  },
  "fusion_counter_circle": {
    "defaults": {
      "class": "",
      "id": "",
      "countdown": "no",
      "filledcolor": "#65bc7b",
      "unfilledcolor": "#f2f3f5",
      "scales": "no",
      "size": "220",
      "speed": "1500",
      "value": "1"
    },
    "settings_to_params": {
      "counter_filled_color": "filledcolor",
      "counter_unfilled_color": "unfilledcolor"
    },
    "name": "Counter Circle",
    "description": "Enter some content for this block.",
    "shortcode": "fusion_counter_circle",
    "hide_from_builder": true,
    "params": {
      "value": {
        "type": "range",
        "heading": "Filled Area Percentage",
        "description": "From 1% to 100%.",
        "param_name": "value",
        "value": "50",
        "dependency": []
      },
      "filledcolor": {
        "type": "colorpickeralpha",
        "heading": "Filled Color",
        "param_name": "filledcolor",
        "value": "",
        "default": "#65bc7b",
        "description": "Controls the color of the filled in area.   Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#counter_filled_color\" target=\"_blank\" rel=\"noopener noreferrer\">#65bc7b</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-filledcolor\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"filledcolor\" value=\"\" data-default=\"#65bc7b\">Reset to default.</a><span>Using default value.</span></span>",
        "default_option": "counter_filled_color",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "unfilledcolor": {
        "type": "colorpickeralpha",
        "heading": "Unfilled Color",
        "param_name": "unfilledcolor",
        "value": "",
        "default": "#f2f3f5",
        "description": "Controls the color of the unfilled in area.   Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#counter_unfilled_color\" target=\"_blank\" rel=\"noopener noreferrer\">#f2f3f5</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-unfilledcolor\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"unfilledcolor\" value=\"\" data-default=\"#f2f3f5\">Reset to default.</a><span>Using default value.</span></span>",
        "default_option": "counter_unfilled_color",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "size": {
        "type": "range",
        "heading": "Size of the Counter",
        "description": "Insert size of the counter in px. ex: 220.",
        "param_name": "size",
        "value": "200",
        "min": "1",
        "max": "1000",
        "step": "1",
        "dependency": []
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
        "default": "no",
        "dependency": []
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
        "default": "no",
        "dependency": []
      },
      "speed": {
        "type": "textfield",
        "heading": "Animation Speed",
        "description": "Insert animation speed in milliseconds.",
        "param_name": "speed",
        "value": "1500",
        "dependency": []
      },
      "element_content": {
        "type": "textfield",
        "heading": "Counter Circle Text",
        "description": "Insert text for counter circle box, keep it short.",
        "param_name": "element_content",
        "value": "Counter Content",
        "placeholder": true,
        "dynamic_data": true,
        "dependency": []
      }
    },
    "remove_from_atts": []
  },
  "fusion_dropcap": {
    "defaults": {
      "class": "",
      "id": "",
      "boxed": "",
      "boxed_radius": "",
      "color": "#65bc7b",
      "text_color": "#fff"
    },
    "settings_to_params": {
      "dropcap_color": "color",
      "dropcap_text_color": "text_color"
    },
    "name": "Dropcap",
    "shortcode": "fusion_dropcap",
    "generator_only": true,
    "icon": "fusiona-font",
    "help_url": "https://theme-fusion.com/documentation/fusion-builder/elements/dropcap-element/",
    "params": {
      "element_content": {
        "type": "textarea",
        "heading": "Dropcap Letter",
        "description": "Add the letter to be used as dropcap.",
        "param_name": "element_content",
        "value": "A",
        "dependency": []
      },
      "color": {
        "type": "colorpickeralpha",
        "heading": "Color",
        "description": "Controls the color of the dropcap. Leave blank for theme option selection.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#dropcap_color\" target=\"_blank\" rel=\"noopener noreferrer\">#65bc7b</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"color\" value=\"\" data-default=\"#65bc7b\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "color",
        "value": "",
        "default": "#65bc7b",
        "group": "Design",
        "default_option": "dropcap_color",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "text_color": {
        "type": "colorpickeralpha",
        "heading": "Text Color",
        "description": "Controls the color of the dropcap letter when using a box. Leave blank for theme option selection.",
        "param_name": "text_color",
        "value": "",
        "default": "#fff",
        "group": "Design",
        "dependency": [
          {
            "element": "boxed",
            "value": "yes",
            "operator": "=="
          }
        ]
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
        "default": "no",
        "dependency": []
      },
      "boxed_radius": {
        "type": "textfield",
        "heading": "Box Radius",
        "param_name": "boxed_radius",
        "value": "",
        "description": "Choose the radius of the boxed dropcap. In pixels (px), ex: 1px, or &quot;round&quot;.",
        "dependency": [
          {
            "element": "boxed",
            "value": "yes",
            "operator": "=="
          }
        ]
      },
      "class": {
        "type": "textfield",
        "heading": "CSS Class",
        "param_name": "class",
        "value": "",
        "description": "Add a class to the wrapping HTML element.",
        "dependency": []
      },
      "id": {
        "type": "textfield",
        "heading": "CSS ID",
        "param_name": "id",
        "value": "",
        "description": "Add an ID to the wrapping HTML element.",
        "dependency": []
      }
    },
    "remove_from_atts": []
  },
  "fusion_flip_boxes": {
    "defaults": {
      "hide_on_mobile": "small-visibility, medium-visibility, large-visibility",
      "class": "",
      "id": "",
      "columns": "1",
      "circle": "",
      "circle_color": "#4a4e57",
      "circle_border_color": "#4a4e57",
      "equal_heights": "no",
      "flip_direction": "right",
      "flip_effect": "classic",
      "flip_duration": "0.8",
      "icon": "",
      "icon_color": "#ffffff",
      "icon_flip": "",
      "icon_rotate": "",
      "icon_spin": "",
      "image": "",
      "image_id": "",
      "image_max_width": ""
    },
    "settings_to_params": {
      "flip_boxes_flip_effect": "flip_effect",
      "flip_boxes_flip_direction": "flip_direction",
      "flip_boxes_flip_duration": "flip_duration",
      "flip_boxes_equal_heights": "equal_heights",
      "icon_color": "icon_color",
      "circle_color": "icon_circle_color",
      "circle_border_color": "icon_border_color"
    },
    "name": "Flip Boxes",
    "shortcode": "fusion_flip_boxes",
    "multi": "multi_element_parent",
    "element_child": "fusion_flip_box",
    "icon": "fusiona-loop-alt2",
    "preview": "/var/www/html/wordpress_avada_624/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-flipboxes-preview.php",
    "preview_id": "fusion-builder-block-module-flipboxes-preview-template",
    "help_url": "https://theme-fusion.com/documentation/fusion-builder/elements/flip-boxes-element/",
    "params": {
      "element_content": {
        "type": "tinymce",
        "heading": "Content",
        "description": "Enter some content for this filp box.",
        "param_name": "element_content",
        "value": "[fusion_flip_box title_front=\"Your Content Goes Here\" title_back=\"Your Content Goes Here\" text_front=\"Your Content Goes Here\" background_color_front=\"\" title_front_color=\"\" text_front_color=\"\" background_color_back=\"\" title_back_color=\"\" text_back_color=\"\" border_size=\"\" border_color=\"\" border_radius=\"\" icon=\"\" icon_color=\"\" circle=\"\" circle_color=\"\" circle_border_color=\"\" icon_flip=\"\" icon_rotate=\"\" icon_spin=\"\" image=\"\" image_max_width=\"\" animation_offset=\"\" animation_type=\"\" animation_direction=\"left\" animation_speed=\"0.1\"]Your Content Goes Here[/fusion_flip_box]",
        "dependency": []
      },
      "columns": {
        "type": "range",
        "heading": "Number of Columns",
        "description": "Set the number of columns per row.",
        "param_name": "columns",
        "value": "1",
        "min": "1",
        "max": "6",
        "step": "1",
        "dependency": []
      },
      "flip_effect": {
        "type": "radio_button_set",
        "heading": "Flip Effect",
        "description": "Set the flip effect for the boxes.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#flip_boxes_flip_effect\" target=\"_blank\" rel=\"noopener noreferrer\">Classic</a>.",
        "param_name": "flip_effect",
        "default": "",
        "value": {
          "": "Default",
          "classic": "Classic",
          "3d": "3d"
        },
        "default_option": "flip_boxes_flip_effect",
        "default_subset": "",
        "option_map": "select",
        "dependency": []
      },
      "flip_direction": {
        "type": "select",
        "heading": "Flip Direction",
        "description": "Set the direction in which the boxes should flip.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#flip_boxes_flip_direction\" target=\"_blank\" rel=\"noopener noreferrer\">Flip Right</a>.",
        "param_name": "flip_direction",
        "default": "",
        "value": {
          "": "Default",
          "left": "Flip Left",
          "right": "Flip Right",
          "up": "Flip Up",
          "down": "Flip Down"
        },
        "default_option": "flip_boxes_flip_direction",
        "default_subset": "",
        "option_map": "select",
        "dependency": []
      },
      "flip_duration": {
        "type": "range",
        "heading": "Flip Duration",
        "description": "Set the speed at which the boxes flip.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#flip_boxes_flip_duration\" target=\"_blank\" rel=\"noopener noreferrer\">0.8</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-flip_duration\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"flip_duration\" value=\"\" data-default=\"0.8\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "flip_duration",
        "value": "",
        "default": "0.8",
        "min": "0.1",
        "max": "2",
        "step": "0.1",
        "default_option": "flip_boxes_flip_duration",
        "default_subset": "",
        "option_map": "range",
        "dependency": []
      },
      "equal_heights": {
        "type": "radio_button_set",
        "heading": "Equal Heights",
        "description": "Set to yes to display flip boxes to equal heights.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#flip_boxes_equal_heights\" target=\"_blank\" rel=\"noopener noreferrer\">No</a>.",
        "param_name": "equal_heights",
        "default": "",
        "value": {
          "": "Default",
          "yes": "Yes",
          "no": "No"
        },
        "default_option": "flip_boxes_equal_heights",
        "default_subset": "",
        "option_map": "select",
        "dependency": []
      },
      "icon": {
        "type": "iconpicker",
        "heading": "Icon",
        "param_name": "icon",
        "value": "",
        "description": "Click an icon to select, click again to deselect.",
        "dependency": []
      },
      "icon_color": {
        "type": "colorpickeralpha",
        "heading": "Icon Color",
        "description": "Controls the color of the icon.   Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#icon_color\" target=\"_blank\" rel=\"noopener noreferrer\">#ffffff</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-icon_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"icon_color\" value=\"\" data-default=\"#ffffff\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "icon_color",
        "value": "",
        "default": "#ffffff",
        "default_option": "icon_color",
        "default_subset": "",
        "option_map": "",
        "dependency": []
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
        "default": "yes",
        "dependency": []
      },
      "circle_color": {
        "type": "colorpickeralpha",
        "heading": "Icon Circle Background Color",
        "description": "Controls the color of the circle.   Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#icon_circle_color\" target=\"_blank\" rel=\"noopener noreferrer\">#4a4e57</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-circle_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"circle_color\" value=\"\" data-default=\"#4a4e57\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "circle_color",
        "value": "",
        "default": "#4a4e57",
        "default_option": "icon_circle_color",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "circle_border_color": {
        "type": "colorpickeralpha",
        "heading": "Icon Circle Border Color",
        "description": "Controls the color of the circle border.   Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#icon_border_color\" target=\"_blank\" rel=\"noopener noreferrer\">#4a4e57</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-circle_border_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"circle_border_color\" value=\"\" data-default=\"#4a4e57\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "circle_border_color",
        "value": "",
        "default": "#4a4e57",
        "default_option": "icon_border_color",
        "default_subset": "",
        "option_map": "",
        "dependency": []
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
        "default": "",
        "dependency": []
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
        "default": "",
        "dependency": []
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
        "default": "no",
        "dependency": []
      },
      "image": {
        "type": "upload",
        "heading": "Icon Image",
        "description": "To upload your own icon image, deselect the icon above and then upload your icon image.",
        "param_name": "image",
        "value": "",
        "dependency": []
      },
      "image_id": {
        "type": "textfield",
        "heading": "Icon Image ID",
        "description": "Icon Image ID from Media Library.",
        "param_name": "image_id",
        "value": "",
        "hidden": true,
        "dependency": []
      },
      "image_max_width": {
        "type": "textfield",
        "heading": "Icon Image Max Width",
        "description": "Set the icon image max width. Leave empty to use image&#039;s native width. In pixels, ex: 35.",
        "param_name": "image_max_width",
        "default": "35",
        "dependency": []
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
        "default": [
          "small-visibility",
          "medium-visibility",
          "large-visibility"
        ],
        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Options</a>.",
        "dependency": []
      },
      "class": {
        "type": "textfield",
        "heading": "CSS Class",
        "description": "Add a class to the wrapping HTML element.",
        "param_name": "class",
        "value": "",
        "dependency": []
      },
      "id": {
        "type": "textfield",
        "heading": "CSS ID",
        "description": "Add an ID to the wrapping HTML element.",
        "param_name": "id",
        "value": "",
        "dependency": []
      }
    },
    "remove_from_atts": []
  },
  "fusion_flip_box": {
    "defaults": {
      "class": "",
      "id": "",
      "background_color_back": "#65bc7b",
      "background_color_front": "#212934",
      "background_image_back": "",
      "background_image_front": "",
      "border_color": "rgba(0,0,0,0)",
      "border_radius": "6px",
      "border_size": "1px",
      "circle": "",
      "circle_color": "#4a4e57",
      "circle_border_color": "#4a4e57",
      "flip_direction": "right",
      "icon": "",
      "icon_color": "#ffffff",
      "icon_flip": "",
      "icon_rotate": "",
      "icon_spin": "",
      "image": "",
      "image_id": "",
      "image_max_width": "",
      "text_back_color": "rgba(255,255,255,0.8)",
      "text_front": "",
      "text_front_color": "#4a4e57",
      "title_front": "",
      "title_front_color": "#f9f9fb",
      "title_back": "",
      "title_back_color": "#ffffff",
      "animation_type": "",
      "animation_direction": "left",
      "animation_speed": "0.1",
      "animation_offset": "top-into-view"
    },
    "settings_to_params": {
      "flip_boxes_front_bg": "background_color_front",
      "flip_boxes_back_bg": "background_color_back",
      "flip_boxes_border_color": "border_color",
      "flip_boxes_border_radius": "border_radius",
      "flip_boxes_border_size": "border_size",
      "icon_circle_color": "circle_color",
      "icon_border_color": "circle_border_color",
      "icon_color": "icon_color",
      "flip_boxes_back_text": "text_back_color",
      "flip_boxes_front_text": "text_front_color",
      "flip_boxes_front_heading": "title_front_color",
      "flip_boxes_back_heading": "title_back_color",
      "flip_boxes_flip_direction": "flip_direction",
      "animation_offset": "animation_offset"
    },
    "name": "Flip Box",
    "description": "Enter some content for this textblock",
    "shortcode": "fusion_flip_box",
    "hide_from_builder": true,
    "allow_generator": true,
    "params": {
      "flip_direction": {
        "type": "select",
        "heading": "Flip Direction",
        "description": "Set the direction in which the boxes should flip.  Leave empty for value set in parent options. If that is also empty, the Theme Options value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#flip_boxes_flip_direction\" target=\"_blank\" rel=\"noopener noreferrer\">Flip Right</a> will be used.",
        "param_name": "flip_direction",
        "default": "",
        "value": {
          "": "Default",
          "left": "Flip Left",
          "right": "Flip Right",
          "up": "Flip Up",
          "down": "Flip Down"
        },
        "default_option": "flip_boxes_flip_direction",
        "default_subset": "",
        "option_map": "child",
        "dependency": []
      },
      "title_front": {
        "type": "textfield",
        "heading": "Flip Box Frontside Heading",
        "description": "Add a heading for the frontside of the flip box.",
        "param_name": "title_front",
        "value": "Your Content Goes Here",
        "placeholder": true,
        "dynamic_data": true,
        "dependency": []
      },
      "title_back": {
        "type": "textfield",
        "heading": "Flip Box Backside Heading",
        "description": "Add a heading for the backside of the flip box.",
        "param_name": "title_back",
        "value": "Your Content Goes Here",
        "placeholder": true,
        "preview": {
          "selector": ".fusion-flip-box",
          "type": "class",
          "toggle": "hover"
        },
        "dynamic_data": true,
        "dependency": []
      },
      "text_front": {
        "type": "textfield",
        "heading": "Flip Box Frontside Content",
        "description": "Add content for the frontside of the flip box.",
        "param_name": "text_front",
        "value": "Your Content Goes Here",
        "placeholder": true,
        "dynamic_data": true,
        "dependency": []
      },
      "element_content": {
        "type": "tinymce",
        "heading": "Flip Box Backside Content",
        "description": "Add content for the backside of the flip box.",
        "param_name": "element_content",
        "value": "Your Content Goes Here",
        "placeholder": true,
        "preview": {
          "selector": ".fusion-flip-box",
          "type": "class",
          "toggle": "hover"
        },
        "dynamic_data": true,
        "dependency": []
      },
      "background_color_front": {
        "type": "colorpickeralpha",
        "heading": "Background Color Frontside",
        "description": "Controls the background color of the frontside. IMPORTANT: Flip boxes must have background colors to work correctly in all browsers.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#flip_boxes_front_bg\" target=\"_blank\" rel=\"noopener noreferrer\">#212934</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-background_color_front\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"background_color_front\" value=\"\" data-default=\"#212934\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "background_color_front",
        "value": "",
        "default": "#212934",
        "group": "Design",
        "default_option": "flip_boxes_front_bg",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "background_image_front": {
        "type": "upload",
        "heading": "Background Image Frontside",
        "description": "Upload an image to display in the background of the frontside.",
        "param_name": "background_image_front",
        "value": "",
        "group": "Design",
        "dependency": []
      },
      "background_image_id_front": {
        "type": "textfield",
        "heading": "Background Image ID Frontside",
        "description": "Background Image ID from Media Library.",
        "param_name": "background_image_id_front",
        "value": "",
        "hidden": true,
        "group": "Design",
        "dependency": []
      },
      "title_front_color": {
        "type": "colorpickeralpha",
        "heading": "Heading Color Frontside",
        "description": "Controls the heading color of the frontside.   Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#flip_boxes_front_heading\" target=\"_blank\" rel=\"noopener noreferrer\">#f9f9fb</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-title_front_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"title_front_color\" value=\"\" data-default=\"#f9f9fb\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "title_front_color",
        "value": "",
        "default": "#f9f9fb",
        "group": "Design",
        "default_option": "flip_boxes_front_heading",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "text_front_color": {
        "type": "colorpickeralpha",
        "heading": "Text Color Frontside",
        "description": "Controls the text color of the frontside.   Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#flip_boxes_front_text\" target=\"_blank\" rel=\"noopener noreferrer\">#4a4e57</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-text_front_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"text_front_color\" value=\"\" data-default=\"#4a4e57\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "text_front_color",
        "value": "",
        "default": "#4a4e57",
        "group": "Design",
        "default_option": "flip_boxes_front_text",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "background_color_back": {
        "type": "colorpickeralpha",
        "heading": "Background Color Backside",
        "description": "Controls the background color of the backside. IMPORTANT: Flip boxes must have background colors to work correctly in all browsers.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#flip_boxes_back_bg\" target=\"_blank\" rel=\"noopener noreferrer\">#65bc7b</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-background_color_back\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"background_color_back\" value=\"\" data-default=\"#65bc7b\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "background_color_back",
        "value": "",
        "default": "#65bc7b",
        "preview": {
          "selector": ".fusion-flip-box",
          "type": "class",
          "toggle": "hover"
        },
        "group": "Design",
        "default_option": "flip_boxes_back_bg",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "background_image_back": {
        "type": "upload",
        "heading": "Background Image Backside",
        "description": "Upload an image to display in the background of the backside.",
        "param_name": "background_image_back",
        "value": "",
        "group": "Design",
        "dependency": []
      },
      "background_image_id_back": {
        "type": "textfield",
        "heading": "Background Image ID Backside",
        "description": "Background Image ID from Media Library.",
        "param_name": "background_image_id_back",
        "value": "",
        "hidden": true,
        "group": "Design",
        "dependency": []
      },
      "title_back_color": {
        "type": "colorpickeralpha",
        "heading": "Heading Color Backside",
        "description": "Controls the heading color of the backside.   Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#flip_boxes_back_heading\" target=\"_blank\" rel=\"noopener noreferrer\">#ffffff</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-title_back_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"title_back_color\" value=\"\" data-default=\"#ffffff\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "title_back_color",
        "value": "",
        "default": "#ffffff",
        "preview": {
          "selector": ".fusion-flip-box",
          "type": "class",
          "toggle": "hover"
        },
        "group": "Design",
        "default_option": "flip_boxes_back_heading",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "text_back_color": {
        "type": "colorpickeralpha",
        "heading": "Text Color Backside",
        "description": "Controls the text color of the backside.   Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#flip_boxes_back_text\" target=\"_blank\" rel=\"noopener noreferrer\">rgba(255,255,255,0.8)</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-text_back_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"text_back_color\" value=\"\" data-default=\"rgba(255,255,255,0.8)\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "text_back_color",
        "value": "",
        "default": "rgba(255,255,255,0.8)",
        "preview": {
          "selector": ".fusion-flip-box",
          "type": "class",
          "toggle": "hover"
        },
        "group": "Design",
        "default_option": "flip_boxes_back_text",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "border_size": {
        "type": "range",
        "heading": "Border Size",
        "description": "In pixels.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#flip_boxes_border_size\" target=\"_blank\" rel=\"noopener noreferrer\">1</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-border_size\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"border_size\" value=\"\" data-default=\"1\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "border_size",
        "value": "",
        "min": "0",
        "max": "50",
        "step": "1",
        "default": "1",
        "group": "Design",
        "default_option": "flip_boxes_border_size",
        "default_subset": "",
        "option_map": "range",
        "dependency": []
      },
      "border_color": {
        "type": "colorpickeralpha",
        "heading": "Border Color",
        "description": "Controls the border color.   Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#flip_boxes_border_color\" target=\"_blank\" rel=\"noopener noreferrer\">rgba(0,0,0,0)</a>.",
        "param_name": "border_color",
        "value": "",
        "default": "rgba(0,0,0,0)",
        "dependency": [
          {
            "element": "border_size",
            "value": "0",
            "operator": "!="
          }
        ],
        "group": "Design",
        "default_option": "flip_boxes_border_color",
        "default_subset": "",
        "option_map": ""
      },
      "border_radius": {
        "type": "textfield",
        "heading": "Border Radius",
        "description": "Controls the flip box border radius. In pixels (px), ex: 1px, or &quot;round&quot;.   Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#flip_boxes_border_radius\" target=\"_blank\" rel=\"noopener noreferrer\">6px</a>.",
        "param_name": "border_radius",
        "value": "",
        "group": "Design",
        "default_option": "flip_boxes_border_radius",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "icon": {
        "type": "iconpicker",
        "heading": "Icon",
        "param_name": "icon",
        "value": "",
        "description": "Click an icon to select, click again to deselect.",
        "dependency": []
      },
      "icon_color": {
        "type": "colorpickeralpha",
        "heading": "Icon Color",
        "description": "Controls the color of the icon.   Leave empty for value set in parent options. If that is also empty, the Theme Options value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#icon_color\" target=\"_blank\" rel=\"noopener noreferrer\">#ffffff</a> will be used.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-icon_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"icon_color\" value=\"\" data-default=\"#ffffff\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "icon_color",
        "value": "",
        "default": "#ffffff",
        "dependency": [
          {
            "element": "icon",
            "value": "",
            "operator": "!="
          }
        ],
        "default_option": "icon_color",
        "default_subset": "",
        "option_map": "child"
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
        "dependency": [
          {
            "element": "icon",
            "value": "",
            "operator": "!="
          }
        ]
      },
      "circle_color": {
        "type": "colorpickeralpha",
        "heading": "Icon Circle Background Color",
        "description": "Controls the color of the circle.   Leave empty for value set in parent options. If that is also empty, the Theme Options value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#icon_circle_color\" target=\"_blank\" rel=\"noopener noreferrer\">#4a4e57</a> will be used.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-circle_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"circle_color\" value=\"\" data-default=\"#4a4e57\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "circle_color",
        "value": "",
        "default": "#4a4e57",
        "dependency": [
          {
            "element": "icon",
            "value": "",
            "operator": "!="
          },
          {
            "element": "circle",
            "value": "yes",
            "operator": "=="
          }
        ],
        "default_option": "icon_circle_color",
        "default_subset": "",
        "option_map": "child"
      },
      "circle_border_color": {
        "type": "colorpickeralpha",
        "heading": "Icon Circle Border Color",
        "description": "Controls the color of the circle border.   Leave empty for value set in parent options. If that is also empty, the Theme Options value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#icon_border_color\" target=\"_blank\" rel=\"noopener noreferrer\">#4a4e57</a> will be used.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-circle_border_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"circle_border_color\" value=\"\" data-default=\"#4a4e57\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "circle_border_color",
        "value": "",
        "default": "#4a4e57",
        "dependency": [
          {
            "element": "icon",
            "value": "",
            "operator": "!="
          },
          {
            "element": "circle",
            "value": "yes",
            "operator": "=="
          }
        ],
        "default_option": "icon_border_color",
        "default_subset": "",
        "option_map": "child"
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
        "dependency": [
          {
            "element": "icon",
            "value": "",
            "operator": "!="
          }
        ]
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
        "dependency": [
          {
            "element": "icon",
            "value": "",
            "operator": "!="
          }
        ]
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
        "dependency": [
          {
            "element": "icon",
            "value": "",
            "operator": "!="
          }
        ]
      },
      "image": {
        "type": "upload",
        "heading": "Icon Image",
        "description": "To upload your own icon image, deselect the icon above and then upload your icon image.",
        "param_name": "image",
        "value": "",
        "dependency": []
      },
      "image_id": {
        "type": "textfield",
        "heading": "Image ID",
        "description": "Image ID from Media Library.",
        "param_name": "image_id",
        "value": "",
        "hidden": true,
        "dependency": []
      },
      "image_max_width": {
        "type": "textfield",
        "heading": "Icon Image Max Width",
        "description": "Set the icon image max width. Leave empty for value set in parent option. Set to -1 to use image&#039;s native width. In pixels, ex: 35.",
        "param_name": "image_max_width",
        "default": "",
        "dependency": [
          {
            "element": "image",
            "value": "",
            "operator": "!="
          }
        ]
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
        "group": "Extras",
        "preview": {
          "selector": ".fusion-flip-box",
          "type": "animation"
        },
        "dependency": []
      },
      "animation_direction": {
        "type": "radio_button_set",
        "heading": "Direction of Animation",
        "description": "Select the incoming direction for the animation.",
        "param_name": "animation_direction",
        "default": "left",
        "group": "Extras",
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          }
        ],
        "value": {
          "down": "Top",
          "right": "Right",
          "up": "Bottom",
          "left": "Left",
          "static": "Static"
        },
        "preview": {
          "selector": ".fusion-flip-box",
          "type": "animation"
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
        "group": "Extras",
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          }
        ],
        "preview": {
          "selector": ".fusion-flip-box",
          "type": "animation"
        }
      },
      "animation_offset": {
        "type": "select",
        "heading": "Offset of Animation",
        "description": "Controls when the animation should start.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#animation_offset\" target=\"_blank\" rel=\"noopener noreferrer\">Top Of Element Hits Bottom Of Viewport</a>.",
        "param_name": "animation_offset",
        "default": "",
        "group": "Extras",
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          }
        ],
        "value": {
          "": "Default",
          "top-into-view": "Top of element hits bottom of viewport",
          "top-mid-of-view": "Top of element hits middle of viewport",
          "bottom-in-view": "Bottom of element enters viewport"
        },
        "default_option": "animation_offset",
        "default_subset": "",
        "option_map": "select"
      }
    },
    "remove_from_atts": []
  },
  "fusion_fontawesome": {
    "defaults": {
      "hide_on_mobile": "small-visibility, medium-visibility, large-visibility",
      "class": "",
      "id": "",
      "alignment": "",
      "circle": "yes",
      "circlebordersize": "1",
      "circlecolor": "#4a4e57",
      "circlecolor_hover": "#65bc7b",
      "circlebordercolor": "#4a4e57",
      "circlebordercolor_hover": "#65bc7b",
      "flip": "",
      "icon": "",
      "icon_hover_type": "fade",
      "iconcolor": "#ffffff",
      "iconcolor_hover": "#ffffff",
      "link": "",
      "linktarget": "_self",
      "margin_bottom": "",
      "margin_left": "",
      "margin_right": "",
      "margin_top": "",
      "rotate": "",
      "size": "32",
      "spin": "no",
      "animation_type": "",
      "animation_direction": "down",
      "animation_speed": "0.1",
      "animation_offset": "top-into-view"
    },
    "settings_to_params": {
      "icon_border_size": "circlebordersize",
      "icon_size": "size",
      "icon_circle": "circle",
      "icon_circle_color": "circlecolor",
      "icon_circle_color_hover": "circlecolor_hover",
      "icon_border_color": "circlebordercolor",
      "icon_border_color_hover": "circlebordercolor_hover",
      "icon_color": "iconcolor",
      "icon_color_hover": "iconcolor_hover",
      "icon_hover_type": "icon_hover_type",
      "animation_offset": "animation_offset"
    },
    "name": "Icon",
    "shortcode": "fusion_fontawesome",
    "icon": "fusiona-flag",
    "preview": "/var/www/html/wordpress_avada_624/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-font-awesome-preview.php",
    "preview_id": "fusion-builder-block-module-font-awesome-preview-template",
    "help_url": "https://theme-fusion.com/documentation/fusion-builder/elements/font-awesome-icon-element/",
    "params": {
      "icon": {
        "type": "iconpicker",
        "heading": "Select Icon",
        "param_name": "icon",
        "value": "fa-flag fas",
        "description": "Click an icon to select, click again to deselect.",
        "dependency": []
      },
      "size": {
        "type": "range",
        "heading": "Icon Size",
        "description": "Controls the size of the icon. In pixels.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#icon_size\" target=\"_blank\" rel=\"noopener noreferrer\">32</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-size\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"size\" value=\"\" data-default=\"32\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "size",
        "value": "",
        "min": "0",
        "max": "250",
        "step": "1",
        "default": "32",
        "default_option": "icon_size",
        "default_subset": "",
        "option_map": "",
        "dependency": []
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
        "default": "",
        "dependency": []
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
        "default": "",
        "dependency": []
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
        "default": "no",
        "dependency": []
      },
      "link": {
        "type": "link_selector",
        "heading": "Link",
        "description": "Add the url the icon should link to.",
        "param_name": "link",
        "value": "",
        "dynamic_data": true,
        "dependency": []
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
        "dependency": []
      },
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
        },
        "dependency": []
      },
      "iconcolor": {
        "type": "colorpickeralpha",
        "heading": "Icon Color",
        "description": "Controls the color of the icon.   Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#icon_color\" target=\"_blank\" rel=\"noopener noreferrer\">#ffffff</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-iconcolor\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"iconcolor\" value=\"\" data-default=\"#ffffff\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "iconcolor",
        "value": "",
        "default": "#ffffff",
        "group": "Design",
        "default_option": "icon_color",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "iconcolor_hover": {
        "type": "colorpickeralpha",
        "heading": "Icon Hover Color",
        "description": "Controls the color of the icon on hover.   Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#icon_color_hover\" target=\"_blank\" rel=\"noopener noreferrer\">#ffffff</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-iconcolor_hover\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"iconcolor_hover\" value=\"\" data-default=\"#ffffff\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "iconcolor_hover",
        "value": "",
        "default": "#ffffff",
        "group": "Design",
        "preview": {
          "selector": ".fontawesome-icon",
          "type": "class",
          "toggle": "hover"
        },
        "default_option": "icon_color_hover",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "circle": {
        "type": "radio_button_set",
        "heading": "Icon Background",
        "description": "Turn on to display a background behind the icon.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#icon_circle\" target=\"_blank\" rel=\"noopener noreferrer\">Yes</a>.",
        "param_name": "circle",
        "value": {
          "": "Default",
          "yes": "Yes",
          "no": "No"
        },
        "default": "",
        "group": "Design",
        "default_option": "icon_circle",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "circlecolor": {
        "type": "colorpickeralpha",
        "heading": "Icon Background Color",
        "description": "Controls the color of the icon background.   Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#icon_circle_color\" target=\"_blank\" rel=\"noopener noreferrer\">#4a4e57</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-circlecolor\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"circlecolor\" value=\"\" data-default=\"#4a4e57\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "circlecolor",
        "value": "",
        "default": "#4a4e57",
        "group": "Design",
        "dependency": [
          {
            "element": "circle",
            "value": "no",
            "operator": "!="
          }
        ],
        "default_option": "icon_circle_color",
        "default_subset": "",
        "option_map": ""
      },
      "circlecolor_hover": {
        "type": "colorpickeralpha",
        "heading": "Icon Hover Background Color",
        "description": "Controls the color of the icon background on hover.   Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#icon_circle_color_hover\" target=\"_blank\" rel=\"noopener noreferrer\">#65bc7b</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-circlecolor_hover\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"circlecolor_hover\" value=\"\" data-default=\"#65bc7b\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "circlecolor_hover",
        "value": "",
        "default": "#65bc7b",
        "group": "Design",
        "preview": {
          "selector": ".fontawesome-icon",
          "type": "class",
          "toggle": "hover"
        },
        "dependency": [
          {
            "element": "circle",
            "value": "no",
            "operator": "!="
          }
        ],
        "default_option": "icon_circle_color_hover",
        "default_subset": "",
        "option_map": ""
      },
      "circlebordersize": {
        "type": "range",
        "heading": "Icon Background Border Size",
        "description": "  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#icon_border_size\" target=\"_blank\" rel=\"noopener noreferrer\">1</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-circlebordersize\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"circlebordersize\" value=\"\" data-default=\"1\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "circlebordersize",
        "value": "",
        "min": "0",
        "max": "20",
        "step": "1",
        "default": "1",
        "group": "Design",
        "dependency": [
          {
            "element": "circle",
            "value": "no",
            "operator": "!="
          }
        ],
        "default_option": "icon_border_size",
        "default_subset": "",
        "option_map": ""
      },
      "circlebordercolor": {
        "type": "colorpickeralpha",
        "heading": "Icon Background Border Color",
        "description": "Controls the color of the background border.   Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#icon_border_color\" target=\"_blank\" rel=\"noopener noreferrer\">#4a4e57</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-circlebordercolor\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"circlebordercolor\" value=\"\" data-default=\"#4a4e57\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "circlebordercolor",
        "value": "",
        "default": "#4a4e57",
        "group": "Design",
        "dependency": [
          {
            "element": "circle",
            "value": "no",
            "operator": "!="
          },
          {
            "element": "circlebordersize",
            "value": "0",
            "operator": "!="
          }
        ],
        "default_option": "icon_border_color",
        "default_subset": "",
        "option_map": ""
      },
      "circlebordercolor_hover": {
        "type": "colorpickeralpha",
        "heading": "Icon Hover Background Border Color",
        "description": "Controls the color of the background border on hover.   Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#icon_border_color_hover\" target=\"_blank\" rel=\"noopener noreferrer\">#65bc7b</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-circlebordercolor_hover\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"circlebordercolor_hover\" value=\"\" data-default=\"#65bc7b\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "circlebordercolor_hover",
        "value": "",
        "default": "#65bc7b",
        "group": "Design",
        "preview": {
          "selector": ".fontawesome-icon",
          "type": "class",
          "toggle": "hover"
        },
        "dependency": [
          {
            "element": "circle",
            "value": "no",
            "operator": "!="
          },
          {
            "element": "circlebordersize",
            "value": "0",
            "operator": "!="
          }
        ],
        "default_option": "icon_border_color_hover",
        "default_subset": "",
        "option_map": ""
      },
      "icon_hover_type": {
        "type": "select",
        "heading": "Icon Hover Animation Type",
        "description": "Select the animation type for icon on hover. Select default for theme option selection.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#icon_hover_type\" target=\"_blank\" rel=\"noopener noreferrer\">Fade</a>.",
        "param_name": "icon_hover_type",
        "value": {
          "": "Default",
          "fade": "Fade",
          "slide": "Slide",
          "pulsate": "Pulsate"
        },
        "default": "",
        "group": "Design",
        "preview": {
          "selector": ".fontawesome-icon",
          "type": "class",
          "toggle": "hover"
        },
        "default_option": "icon_hover_type",
        "default_subset": "",
        "option_map": "select",
        "dependency": []
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
        "default": "",
        "dependency": []
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
        "default": [
          "small-visibility",
          "medium-visibility",
          "large-visibility"
        ],
        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Options</a>.",
        "dependency": []
      },
      "class": {
        "type": "textfield",
        "heading": "CSS Class",
        "param_name": "class",
        "value": "",
        "description": "Add a class to the wrapping HTML element.",
        "dependency": []
      },
      "id": {
        "type": "textfield",
        "heading": "CSS ID",
        "param_name": "id",
        "value": "",
        "description": "Add an ID to the wrapping HTML element.",
        "dependency": []
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
        "group": "Extras",
        "preview": {
          "selector": ".fontawesome-icon",
          "type": "animation"
        },
        "dependency": []
      },
      "animation_direction": {
        "type": "radio_button_set",
        "heading": "Direction of Animation",
        "description": "Select the incoming direction for the animation.",
        "param_name": "animation_direction",
        "default": "left",
        "group": "Extras",
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          }
        ],
        "value": {
          "down": "Top",
          "right": "Right",
          "up": "Bottom",
          "left": "Left",
          "static": "Static"
        },
        "preview": {
          "selector": ".fontawesome-icon",
          "type": "animation"
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
        "group": "Extras",
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          }
        ],
        "preview": {
          "selector": ".fontawesome-icon",
          "type": "animation"
        }
      },
      "animation_offset": {
        "type": "select",
        "heading": "Offset of Animation",
        "description": "Controls when the animation should start.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#animation_offset\" target=\"_blank\" rel=\"noopener noreferrer\">Top Of Element Hits Bottom Of Viewport</a>.",
        "param_name": "animation_offset",
        "default": "",
        "group": "Extras",
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          }
        ],
        "value": {
          "": "Default",
          "top-into-view": "Top of element hits bottom of viewport",
          "top-mid-of-view": "Top of element hits middle of viewport",
          "bottom-in-view": "Bottom of element enters viewport"
        },
        "default_option": "animation_offset",
        "default_subset": "",
        "option_map": "select"
      }
    },
    "remove_from_atts": [
      "margin"
    ]
  },
  "fusion_gallery": {
    "defaults": {
      "hide_on_mobile": "small-visibility, medium-visibility, large-visibility",
      "class": "",
      "id": "",
      "image_ids": "",
      "columns": 3,
      "hover_type": "none",
      "lightbox_content": "none",
      "lightbox": "1",
      "column_spacing": "10",
      "picture_size": "auto",
      "layout": "grid",
      "gallery_masonry_grid_ratio": "1.5",
      "gallery_masonry_width_double": "2000",
      "bordersize": "0",
      "bordercolor": "#e2e2e2",
      "border_radius": "0px"
    },
    "settings_to_params": {
      "gallery_columns": "columns",
      "gallery_hover_type": "hover_type",
      "gallery_lightbox_content": "lightbox_content",
      "status_lightbox": "lightbox",
      "gallery_column_spacing": "column_spacing",
      "gallery_picture_size": "picture_size",
      "gallery_layout": "layout",
      "masonry_grid_ratio": "gallery_masonry_grid_ratio",
      "masonry_width_double": "gallery_masonry_width_double",
      "gallery_border_size": "bordersize",
      "gallery_border_color": "bordercolor",
      "gallery_border_radius": "border_radius"
    },
    "name": "Gallery",
    "shortcode": "fusion_gallery",
    "icon": "fusiona-dashboard",
    "preview": "/var/www/html/wordpress_avada_624/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-gallery-preview.php",
    "preview_id": "fusion-builder-block-module-gallery-preview-template",
    "allow_generator": true,
    "multi": "multi_element_parent",
    "element_child": "fusion_gallery_image",
    "sortable": false,
    "help_url": "https://theme-fusion.com/documentation/fusion-builder/elements/gallery-element/",
    "params": {
      "element_content": {
        "type": "tinymce",
        "heading": "Content",
        "description": "Enter some content for this gallery.",
        "param_name": "element_content",
        "value": "[fusion_gallery_image link=\"\" linktarget=\"_self\" alt=\"\" /]",
        "dependency": []
      },
      "multiple_upload": {
        "type": "multiple_upload",
        "heading": "Bulk Image Upload",
        "description": "This option allows you to select multiple images at once and they will populate into individual items. It saves time instead of adding one image at a time.",
        "param_name": "multiple_upload",
        "child_params": {
          "image": "url",
          "image_id": "id"
        },
        "remove_from_atts": true,
        "callback": {
          "function": "fusion_gallery_images",
          "action": "get_fusion_gallery",
          "ajax": true
        },
        "dependency": []
      },
      "layout": {
        "type": "radio_button_set",
        "heading": "Gallery Layout",
        "description": "Select the gallery layout type.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#gallery_layout\" target=\"_blank\" rel=\"noopener noreferrer\">Grid</a>.",
        "param_name": "layout",
        "value": {
          "": "Default",
          "grid": "Grid",
          "masonry": "Masonry"
        },
        "default": "",
        "default_option": "gallery_layout",
        "default_subset": "",
        "option_map": "select",
        "dependency": []
      },
      "picture_size": {
        "type": "radio_button_set",
        "heading": "Picture Size",
        "description": "Fixed = width and height will be fixed.<br/>Auto = width and height will adjust to the image.<br/>  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#gallery_picture_size\" target=\"_blank\" rel=\"noopener noreferrer\">Auto</a>.",
        "param_name": "picture_size",
        "value": {
          "": "Default",
          "fixed": "Fixed",
          "auto": "Auto"
        },
        "dependency": [
          {
            "element": "layout",
            "value": "masonry",
            "operator": "!="
          }
        ],
        "default": "",
        "callback": {
          "function": "fusion_gallery_images",
          "action": "get_fusion_gallery",
          "ajax": true
        },
        "default_option": "gallery_picture_size",
        "default_subset": "",
        "option_map": "select"
      },
      "columns": {
        "type": "range",
        "heading": "Number of Columns",
        "description": "Set the number of columns per row. <strong>IMPORTANT:</strong> Masonry layout does not work with 1 column.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#gallery_columns\" target=\"_blank\" rel=\"noopener noreferrer\">3</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-columns\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"columns\" value=\"\" data-default=\"3\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "columns",
        "value": "",
        "min": "1",
        "max": "6",
        "step": "1",
        "default": "3",
        "default_option": "gallery_columns",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "column_spacing": {
        "type": "range",
        "heading": "Column Spacing",
        "description": "Controls the column spacing for gallery images.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#gallery_column_spacing\" target=\"_blank\" rel=\"noopener noreferrer\">10</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-column_spacing\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"column_spacing\" value=\"\" data-default=\"10\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "column_spacing",
        "value": "",
        "min": "0",
        "max": "300",
        "step": "1",
        "default": "10",
        "dependency": [
          {
            "element": "columns",
            "value": "1",
            "operator": "!="
          }
        ],
        "default_option": "gallery_column_spacing",
        "default_subset": "",
        "option_map": ""
      },
      "gallery_masonry_grid_ratio": {
        "type": "range",
        "heading": "Masonry Image Aspect Ratio",
        "description": "Set the ratio to decide when an image should become landscape (ratio being width : height) and portrait (ratio being height : width). <strong>IMPORTANT:</strong> The value of \"1.0\" represents a special case, which will use the auto calculated ratios like in versions prior to Avada 5.5.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#masonry_grid_ratio\" target=\"_blank\" rel=\"noopener noreferrer\">1.5</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-gallery_masonry_grid_ratio\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"gallery_masonry_grid_ratio\" value=\"\" data-default=\"1.5\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "gallery_masonry_grid_ratio",
        "value": "",
        "min": "1",
        "max": "4",
        "step": "0.1",
        "default": "1.5",
        "dependency": [
          {
            "element": "layout",
            "value": "masonry",
            "operator": "=="
          }
        ],
        "default_option": "masonry_grid_ratio",
        "default_subset": "",
        "option_map": "range"
      },
      "gallery_masonry_width_double": {
        "type": "range",
        "heading": "Masonry 2x2 Width",
        "description": "This option decides when a square 1x1 image should become 2x2. This will not apply to images that highly favor landscape or portrait layouts. <strong>IMPORTANT:</strong> There is a “Masonry Image Layout” setting for every image in the WP media library that allows you to manually set how an image will appear (1x1, landscape, portrait or 2x2), regardless of the original ratio. In pixels.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#masonry_width_double\" target=\"_blank\" rel=\"noopener noreferrer\">2000</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-gallery_masonry_width_double\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"gallery_masonry_width_double\" value=\"\" data-default=\"2000\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "gallery_masonry_width_double",
        "value": "",
        "min": "200",
        "max": "5120",
        "step": "1",
        "default": "2000",
        "dependency": [
          {
            "element": "layout",
            "value": "masonry",
            "operator": "=="
          }
        ],
        "default_option": "masonry_width_double",
        "default_subset": "",
        "option_map": "range"
      },
      "hover_type": {
        "type": "select",
        "heading": "Hover Type",
        "description": "Select the hover effect type.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#gallery_hover_type\" target=\"_blank\" rel=\"noopener noreferrer\">None</a>.",
        "param_name": "hover_type",
        "value": {
          "": "Default",
          "none": "None",
          "zoomin": "Zoom In",
          "zoomout": "Zoom Out",
          "liftup": "Lift Up"
        },
        "default": "",
        "preview": {
          "selector": ".fusion-grid-column,.fusion-gallery-image-liftup",
          "type": "class",
          "toggle": "hover"
        },
        "default_option": "gallery_hover_type",
        "default_subset": "",
        "option_map": "select",
        "dependency": []
      },
      "lightbox": {
        "type": "radio_button_set",
        "heading": "Image Lightbox",
        "description": "Show image in lightbox. Lightbox must be enabled in <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&#038;lang=en#lightbox_status\" target=\"_blank\">Theme Options</a> or the image will open up in the same tab by itself.  Current value set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#status_lightbox\" target=\"_blank\" rel=\"noopener noreferrer\">Yes</a>.",
        "param_name": "lightbox",
        "value": {
          "yes": "Yes",
          "no": "No"
        },
        "default": "yes",
        "default_option": "status_lightbox",
        "default_subset": "",
        "option_map": "yesno",
        "dependency": []
      },
      "lightbox_content": {
        "type": "select",
        "heading": "Lightbox Content",
        "description": "Choose if titles and captions will display in the lightbox. Titles and captions can only be displayed when this is globally enabled for the lightbox on the corresponding <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&#038;lang=en#lightbox_title\" target=\"_blank\">Theme Options</a> tab.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#gallery_lightbox_content\" target=\"_blank\" rel=\"noopener noreferrer\">None</a>.",
        "param_name": "lightbox_content",
        "default": "",
        "value": {
          "": "Default",
          "none": "None",
          "titles": "Titles",
          "captions": "Captions",
          "title_and_caption": "Titles and Captions"
        },
        "dependency": [
          {
            "element": "lightbox",
            "value": "no",
            "operator": "!="
          }
        ],
        "default_option": "gallery_lightbox_content",
        "default_subset": "",
        "option_map": "select"
      },
      "bordersize": {
        "type": "range",
        "heading": "Gallery Image Border Size",
        "description": "In pixels.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#gallery_border_size\" target=\"_blank\" rel=\"noopener noreferrer\">0</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-bordersize\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"bordersize\" value=\"\" data-default=\"0\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "bordersize",
        "value": "",
        "min": "0",
        "max": "50",
        "step": "1",
        "default": "0",
        "default_option": "gallery_border_size",
        "default_subset": "",
        "option_map": "range",
        "dependency": []
      },
      "bordercolor": {
        "type": "colorpickeralpha",
        "heading": "Gallery Image Border Color",
        "description": "Choose the border color.   Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#gallery_border_color\" target=\"_blank\" rel=\"noopener noreferrer\">#e2e2e2</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-bordercolor\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"bordercolor\" value=\"\" data-default=\"#e2e2e2\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "bordercolor",
        "value": "",
        "default": "#e2e2e2",
        "dependency": [
          {
            "element": "bordersize",
            "value": "0",
            "operator": "!="
          },
          {
            "element": "bordersize",
            "value": "",
            "operator": "!="
          }
        ],
        "default_option": "gallery_border_color",
        "default_subset": "",
        "option_map": ""
      },
      "border_radius": {
        "type": "textfield",
        "heading": "Gallery Image Border Radius",
        "description": "Controls the gallery image border radius. In pixels (px), ex: 1px, or &quot;round&quot;.   Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#gallery_border_radius\" target=\"_blank\" rel=\"noopener noreferrer\">0px</a>.",
        "param_name": "border_radius",
        "value": "",
        "default_option": "gallery_border_radius",
        "default_subset": "",
        "option_map": "",
        "dependency": []
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
        "default": [
          "small-visibility",
          "medium-visibility",
          "large-visibility"
        ],
        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Options</a>.",
        "dependency": []
      },
      "class": {
        "type": "textfield",
        "heading": "CSS Class",
        "description": "Add a class to the wrapping HTML element.",
        "param_name": "class",
        "value": "",
        "group": "General",
        "dependency": []
      },
      "id": {
        "type": "textfield",
        "heading": "CSS ID",
        "description": "Add an ID to the wrapping HTML element.",
        "param_name": "id",
        "value": "",
        "group": "General",
        "dependency": []
      }
    },
    "has_ajax": {
      "multiple_upload": {
        "function": "fusion_gallery_images",
        "action": "get_fusion_gallery",
        "param_name": "multiple_upload"
      },
      "picture_size": {
        "function": "fusion_gallery_images",
        "action": "get_fusion_gallery",
        "param_name": "picture_size"
      }
    },
    "remove_from_atts": [
      "multiple_upload"
    ]
  },
  "fusion_gallery_image": {
    "defaults": {
      "image": "",
      "image_id": "",
      "link": "",
      "linktarget": "_self"
    },
    "settings_to_params": [],
    "name": "Image",
    "description": "Enter some content for this textblock.",
    "shortcode": "fusion_gallery_image",
    "hide_from_builder": true,
    "params": {
      "image": {
        "type": "upload",
        "heading": "Image",
        "description": "Upload an image to display.",
        "param_name": "image",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "image_id": {
        "type": "textfield",
        "heading": "Image ID",
        "description": "Image ID from Media Library.",
        "param_name": "image_id",
        "value": "",
        "hidden": true,
        "callback": {
          "function": "fusion_gallery_image",
          "action": "get_fusion_gallery",
          "ajax": true
        },
        "dependency": []
      },
      "link": {
        "type": "link_selector",
        "heading": "Image Link",
        "description": "Add the url the image should link to. If lightbox option is enabled, you can also use this to open a different image in the lightbox.",
        "param_name": "link",
        "value": "",
        "dependency": []
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
        "dependency": []
      }
    },
    "callback": {
      "function": "fusion_gallery_image",
      "action": "get_fusion_gallery",
      "ajax": true
    },
    "has_ajax": {
      "image_id": {
        "function": "fusion_gallery_image",
        "action": "get_fusion_gallery",
        "param_name": "image_id"
      }
    },
    "remove_from_atts": []
  },
  "fusion_map": {
    "defaults": {
      "api_type": "js",
      "embed_address": "",
      "embed_map_type": "",
      "hide_on_mobile": "small-visibility, medium-visibility, large-visibility",
      "class": "",
      "id": "",
      "animation": "no",
      "address": "",
      "height": "300px",
      "icon": "",
      "icon_static": "",
      "infobox": "",
      "infobox_background_color": "",
      "infobox_content": "",
      "infobox_text_color": "",
      "map_style": "",
      "overlay_color": "",
      "static_map_color": "",
      "popup": "yes",
      "scale": "yes",
      "scrollwheel": "yes",
      "type": "roadmap",
      "width": "100%",
      "zoom": "14",
      "zoom_pancontrol": "yes"
    },
    "extras": {
      "primary_color": "#65bc7b",
      "theme_icon": "http://127.0.0.1/wordpress_avada_624/wp-content/plugins/fusion-builder/images/avada_map_marker.png",
      "cached_addresses": false,
      "gmap_api": "",
      "amms_icon": "http://127.0.0.1/wordpress_avada_624/wp-content/plugins/fusion-builder/images/amms.png"
    },
    "settings_to_params": {
      "google_map_api_type": "api_type"
    },
    "settings_to_extras": {
      "primary_color": "primary_color",
      "gmap_api": "gmap_api"
    },
    "name": "Google Map",
    "shortcode": "fusion_map",
    "icon": "fusiona-map",
    "preview": "/var/www/html/wordpress_avada_624/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-google-map-preview.php",
    "preview_id": "fusion-builder-block-module-google-map-preview-template",
    "help_url": "https://theme-fusion.com/documentation/fusion-builder/elements/google-map-element/",
    "params": {
      "api_type": {
        "type": "radio_button_set",
        "heading": "Google API Type",
        "description": "Select the Google API type that should be used to load your map. The JavaScript API allows for more options and custom styling, but could be charged for by Google depending on the amount of map loads. The embed and the static API can be used for free regardless of map loads. For more information please see the <a href=\"https://cloud.google.com/maps-platform/user-guide/\" target=\"_blank\">Google Maps Users Guide</a>.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#google_map_api_type\" target=\"_blank\" rel=\"noopener noreferrer\">JS API</a>.",
        "param_name": "api_type",
        "value": {
          "": "Default",
          "js": "JS API",
          "embed": "Embed API",
          "static": "Static API"
        },
        "default": "",
        "default_option": "google_map_api_type",
        "default_subset": "",
        "option_map": "select",
        "dependency": []
      },
      "embed_address": {
        "type": "textfield",
        "heading": "Address",
        "description": "Add the address of the location you wish to display. Address example: 775 New York Ave, Brooklyn, Kings, New York 11203. If the location is off, please try to use long/lat coordinates. ex: 12.381068,-1.492711.",
        "param_name": "embed_address",
        "value": "",
        "dependency": [
          {
            "element": "api_type",
            "value": "js",
            "operator": "!="
          },
          {
            "element": "api_type",
            "value": "static",
            "operator": "!="
          },
          {
            "element": "api_type",
            "value": "",
            "operator": "!="
          }
        ]
      },
      "embed_map_type": {
        "type": "radio_button_set",
        "heading": "Map Type",
        "description": "Select the type of google map to display.",
        "param_name": "embed_map_type",
        "value": {
          "roadmap": "Roadmap",
          "satellite": "Satellite"
        },
        "default": "roadmap",
        "dependency": [
          {
            "element": "api_type",
            "value": "js",
            "operator": "!="
          },
          {
            "element": "api_type",
            "value": "static",
            "operator": "!="
          },
          {
            "element": "api_type",
            "value": "",
            "operator": "!="
          }
        ]
      },
      "address": {
        "type": "textarea",
        "heading": "Address",
        "description": "Add the address of the location you wish to display. Single address example: 775 New York Ave, Brooklyn, Kings, New York 11203. If the location is off, please try to use long/lat coordinates with latlng=. ex: latlng=12.381068,-1.492711. For multiple addresses, separate addresses by using the | symbol. ex: Address 1|Address 2|Address 3.",
        "param_name": "address",
        "value": "",
        "dependency": [
          {
            "element": "api_type",
            "value": "embed",
            "operator": "!="
          }
        ]
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
        "default": "roadmap",
        "dependency": [
          {
            "element": "api_type",
            "value": "embed",
            "operator": "!="
          }
        ]
      },
      "map_dimensions": {
        "type": "dimension",
        "remove_from_atts": true,
        "heading": "Map Dimensions",
        "description": "Map dimensions in percentage, pixels or ems. <strong>NOTE:</strong> Height does not accept percentage value. In case static API is selected width and height are limited to 640px (except for the premium Google Maps API plan) and must be specified in px only.",
        "param_name": "map_dimensions",
        "value": {
          "width": "100%",
          "height": "300px"
        },
        "dependency": []
      },
      "zoom": {
        "type": "range",
        "heading": "Zoom Level",
        "description": "Choose the zoom level for the map. 0 corresponds to a map of the earth fully zoomed out, and larger zoom levels zoom in at a higher resolution.",
        "param_name": "zoom",
        "value": "14",
        "min": "1",
        "max": "25",
        "step": "1",
        "dependency": []
      },
      "scrollwheel": {
        "type": "radio_button_set",
        "heading": "Scrollwheel on Map",
        "description": "Enable zooming using the mouse scroll wheel. Use Cmd/Ctrl key + scroll to zoom. If set to no, zooming through two-finger movements (cooperative gesture handling) will be enabled.",
        "param_name": "scrollwheel",
        "value": {
          "yes": "Yes",
          "no": "No"
        },
        "default": "yes",
        "dependency": [
          {
            "element": "api_type",
            "value": "embed",
            "operator": "!="
          },
          {
            "element": "api_type",
            "value": "static",
            "operator": "!="
          }
        ]
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
        "default": "yes",
        "dependency": [
          {
            "element": "api_type",
            "value": "embed",
            "operator": "!="
          },
          {
            "element": "api_type",
            "value": "static",
            "operator": "!="
          }
        ]
      },
      "zoom_pancontrol": {
        "type": "radio_button_set",
        "heading": "Show Pan Control on Map",
        "description": "Display pan control button.",
        "param_name": "zoom_pancontrol",
        "value": {
          "yes": "Yes",
          "no": "No"
        },
        "default": "yes",
        "dependency": [
          {
            "element": "api_type",
            "value": "embed",
            "operator": "!="
          },
          {
            "element": "api_type",
            "value": "static",
            "operator": "!="
          }
        ]
      },
      "animation": {
        "type": "radio_button_set",
        "heading": "Address Pin Animation",
        "description": "Animate the address pin when the map first loads.",
        "param_name": "animation",
        "value": {
          "yes": "Yes",
          "no": "No"
        },
        "default": "no",
        "dependency": [
          {
            "element": "api_type",
            "value": "embed",
            "operator": "!="
          },
          {
            "element": "api_type",
            "value": "static",
            "operator": "!="
          }
        ]
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
        "default": "yes",
        "dependency": [
          {
            "element": "api_type",
            "value": "embed",
            "operator": "!="
          },
          {
            "element": "api_type",
            "value": "static",
            "operator": "!="
          }
        ]
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
        "default": "default",
        "dependency": [
          {
            "element": "api_type",
            "value": "embed",
            "operator": "!="
          },
          {
            "element": "api_type",
            "value": "static",
            "operator": "!="
          }
        ]
      },
      "overlay_color": {
        "type": "colorpickeralpha",
        "heading": "Map Overlay Color",
        "description": "Custom styling setting only. Pick any overlaying color for the map besides pure black or white. Works best with &quot;roadmap&quot; type.",
        "param_name": "overlay_color",
        "value": "",
        "dependency": [
          {
            "element": "api_type",
            "value": "embed",
            "operator": "!="
          },
          {
            "element": "api_type",
            "value": "static",
            "operator": "!="
          },
          {
            "element": "map_style",
            "value": "custom",
            "operator": "=="
          }
        ]
      },
      "static_map_color": {
        "type": "colorpicker",
        "heading": "Map Color",
        "description": "Custom styling setting only. Pick any color for the map besides pure black or white.",
        "param_name": "static_map_color",
        "value": "",
        "dependency": [
          {
            "element": "api_type",
            "value": "js",
            "operator": "!="
          },
          {
            "element": "api_type",
            "value": "embed",
            "operator": "!="
          },
          {
            "element": "api_type",
            "value": "",
            "operator": "!="
          }
        ]
      },
      "infobox_content": {
        "type": "raw_textarea",
        "heading": "Infobox Content",
        "description": "Custom styling setting only. Type in custom info box content to replace address string. For multiple addresses, separate info box contents by using the | symbol. ex: InfoBox 1|InfoBox 2|InfoBox 3.",
        "param_name": "infobox_content",
        "value": "",
        "dynamic_data": true,
        "dependency": [
          {
            "element": "api_type",
            "value": "embed",
            "operator": "!="
          },
          {
            "element": "api_type",
            "value": "static",
            "operator": "!="
          },
          {
            "element": "map_style",
            "value": "custom",
            "operator": "=="
          }
        ]
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
        "dependency": [
          {
            "element": "api_type",
            "value": "embed",
            "operator": "!="
          },
          {
            "element": "api_type",
            "value": "static",
            "operator": "!="
          },
          {
            "element": "map_style",
            "value": "custom",
            "operator": "=="
          }
        ]
      },
      "infobox_text_color": {
        "type": "colorpickeralpha",
        "heading": "Info Box Text Color",
        "description": "Custom styling setting only. Pick a color for the info box text.",
        "param_name": "infobox_text_color",
        "value": "",
        "dependency": [
          {
            "element": "api_type",
            "value": "embed",
            "operator": "!="
          },
          {
            "element": "api_type",
            "value": "static",
            "operator": "!="
          },
          {
            "element": "map_style",
            "value": "custom",
            "operator": "=="
          },
          {
            "element": "infobox",
            "value": "custom",
            "operator": "=="
          }
        ]
      },
      "infobox_background_color": {
        "type": "colorpickeralpha",
        "heading": "Info Box Background Color",
        "description": "Custom styling setting only. Pick a color for the info box background.",
        "param_name": "infobox_background_color",
        "value": "",
        "dependency": [
          {
            "element": "api_type",
            "value": "embed",
            "operator": "!="
          },
          {
            "element": "api_type",
            "value": "static",
            "operator": "!="
          },
          {
            "element": "map_style",
            "value": "custom",
            "operator": "=="
          },
          {
            "element": "infobox",
            "value": "custom",
            "operator": "=="
          }
        ]
      },
      "icon": {
        "type": "textarea",
        "heading": "Custom Marker Icon",
        "description": "Custom styling setting only. Use full image urls for custom marker icons or input &quot;theme&quot; for our custom marker. For multiple addresses, separate icons by using the | symbol or use one for all. ex: Icon 1|Icon 2|Icon 3.",
        "param_name": "icon",
        "value": "",
        "dependency": [
          {
            "element": "api_type",
            "value": "embed",
            "operator": "!="
          },
          {
            "element": "api_type",
            "value": "static",
            "operator": "!="
          },
          {
            "element": "map_style",
            "value": "custom",
            "operator": "=="
          }
        ]
      },
      "icon_static": {
        "type": "textarea",
        "heading": "Custom Marker Icon",
        "description": "Custom styling setting only. Use full image urls for custom marker icons or input &quot;theme&quot; for our custom marker. For multiple addresses, separate icons by using the | symbol or use one for all. ex: Icon 1|Icon 2|Icon 3. NOTE: Icon images may be in PNG, JPEG or GIF formats and may be up to 4096 pixels maximum size (64x64 for square images).",
        "param_name": "icon_static",
        "value": "",
        "dependency": [
          {
            "element": "api_type",
            "value": "js",
            "operator": "!="
          },
          {
            "element": "api_type",
            "value": "embed",
            "operator": "!="
          },
          {
            "element": "api_type",
            "value": "",
            "operator": "!="
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
        "default": [
          "small-visibility",
          "medium-visibility",
          "large-visibility"
        ],
        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Options</a>.",
        "dependency": []
      },
      "class": {
        "type": "textfield",
        "heading": "CSS Class",
        "description": "Add a class to the wrapping HTML element.",
        "param_name": "class",
        "value": "",
        "group": "General",
        "dependency": []
      },
      "id": {
        "type": "textfield",
        "heading": "CSS ID",
        "description": "Add an ID to the wrapping HTML element.",
        "param_name": "id",
        "value": "",
        "group": "General",
        "dependency": []
      }
    },
    "remove_from_atts": [
      "map_dimensions"
    ]
  },
  "fusion_highlight": {
    "defaults": {
      "class": "",
      "id": "",
      "color": "#65bc7b",
      "text_color": "",
      "rounded": "no"
    },
    "settings_to_params": {
      "primary_color": "color"
    },
    "name": "Highlight",
    "shortcode": "fusion_highlight",
    "icon": "fusiona-H",
    "generator_only": true,
    "help_url": "https://theme-fusion.com/documentation/fusion-builder/elements/highlight-element/",
    "params": {
      "color": {
        "type": "colorpickeralpha",
        "heading": "Highlight Color",
        "description": "Pick a highlight color.",
        "param_name": "color",
        "value": "",
        "default": "#65bc7b",
        "dependency": []
      },
      "text_color": {
        "type": "colorpickeralpha",
        "heading": "Highlight Text Color",
        "description": "Pick a text-color for your highlight. Leave empty to use an auto-calculated value.",
        "param_name": "text_color",
        "value": "",
        "default": "",
        "dependency": []
      },
      "rounded": {
        "type": "radio_button_set",
        "heading": "Highlight With Round Edges",
        "description": "Choose to have rounded edges.",
        "param_name": "rounded",
        "value": {
          "no": "No",
          "yes": "Yes"
        },
        "default": "no",
        "dependency": []
      },
      "element_content": {
        "type": "textarea",
        "heading": "Content",
        "description": "Enter some text to highlight.",
        "param_name": "element_content",
        "value": "",
        "dependency": []
      },
      "class": {
        "type": "textfield",
        "heading": "CSS Class",
        "param_name": "class",
        "value": "",
        "description": "Add a class to the wrapping HTML element.",
        "dependency": []
      },
      "id": {
        "type": "textfield",
        "heading": "CSS ID",
        "param_name": "id",
        "value": "",
        "description": "Add an ID to the wrapping HTML element.",
        "dependency": []
      }
    },
    "remove_from_atts": []
  },
  "fusion_image_before_after": {
    "defaults": {
      "type": "before_after",
      "before_image": "",
      "before_image_id": "",
      "before_label": "",
      "after_image": "",
      "after_image_id": "",
      "after_label": "",
      "link": "",
      "target": "_self",
      "font_size": "14",
      "accent_color": "#ffffff",
      "label_placement": "image-centered",
      "handle_type": "default",
      "handle_bg": "rgba(255,255,255,0)",
      "handle_color": "#ffffff",
      "transition_time": "0.5",
      "offset": "50",
      "orientation": "horizontal",
      "handle_movement": "drag_click",
      "hide_on_mobile": "small-visibility, medium-visibility, large-visibility",
      "animation_type": "",
      "animation_direction": "left",
      "animation_speed": "",
      "animation_offset": "top-into-view",
      "class": "",
      "id": ""
    },
    "settings_to_params": {
      "before_after_type": "type",
      "before_after_font_size": "font_size",
      "before_after_accent_color": "accent_color",
      "before_after_label_placement": "label_placement",
      "before_after_handle_type": "handle_type",
      "before_after_handle_bg": "handle_bg",
      "before_after_handle_color": "handle_color",
      "before_after_transition_time": "transition_time",
      "before_after_offset": "offset",
      "before_after_orientation": "orientation",
      "before_after_handle_movement": "handle_movement",
      "animation_offset": "animation_offset"
    },
    "name": "Image Before & After",
    "shortcode": "fusion_image_before_after",
    "icon": "fusiona-object-ungroup",
    "preview": "/var/www/html/wordpress_avada_624/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-image-before-after-preview.php",
    "preview_id": "fusion-builder-block-module-image-before-after-preview-template",
    "help_url": "https://theme-fusion.com/documentation/fusion-builder/elements/image-before-after-element/",
    "params": {
      "type": {
        "type": "radio_button_set",
        "heading": "Effect Type",
        "description": "Select which type of effect your before and after image uses. “Slide” provides a handle to move back and forth while “Fade” changes the image on mouse hover.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#before_after_type\" target=\"_blank\" rel=\"noopener noreferrer\">Slide</a>.",
        "param_name": "type",
        "default": "",
        "value": {
          "": "Default",
          "before_after": "Slide",
          "switch": "Fade"
        },
        "default_option": "before_after_type",
        "default_subset": "",
        "option_map": "select",
        "dependency": []
      },
      "before_image": {
        "type": "upload",
        "heading": "Before Image",
        "description": "Upload a before image to display.",
        "param_name": "before_image",
        "value": "",
        "dependency": []
      },
      "before_image_id": {
        "type": "textfield",
        "heading": "Before Image ID",
        "description": "Before Image ID from Media Library.",
        "param_name": "before_image_id",
        "value": "",
        "hidden": true,
        "dependency": []
      },
      "before_label": {
        "type": "textfield",
        "heading": "Before Image Label",
        "description": "Add text that will be displayed as a label on the before image when hovered. If left empty, no label will show.",
        "param_name": "before_label",
        "value": "",
        "dependency": [
          {
            "element": "before_image",
            "value": "",
            "operator": "!="
          },
          {
            "element": "type",
            "value": "switch",
            "operator": "!="
          }
        ]
      },
      "after_image": {
        "type": "upload",
        "heading": "After Image",
        "description": "Upload an after image to display.",
        "param_name": "after_image",
        "value": "",
        "dependency": []
      },
      "after_image_id": {
        "type": "textfield",
        "heading": "After Image ID",
        "description": "After Image ID from Media Library.",
        "param_name": "after_image_id",
        "value": "",
        "hidden": true,
        "dependency": []
      },
      "after_label": {
        "type": "textfield",
        "heading": "After Image Label",
        "description": "Add text that will be displayed as a label on the after image when hovered. If left empty, no label will show.",
        "param_name": "after_label",
        "value": "",
        "dependency": [
          {
            "element": "after_image",
            "value": "",
            "operator": "!="
          },
          {
            "element": "type",
            "value": "switch",
            "operator": "!="
          }
        ]
      },
      "font_size": {
        "type": "range",
        "heading": "Label Font Size",
        "description": "Controls the font size of the label text. In Pixels. Note: font family is controlled by body font in theme options.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#before_after_font_size\" target=\"_blank\" rel=\"noopener noreferrer\">14</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-font_size\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"font_size\" value=\"\" data-default=\"14\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "font_size",
        "default": 14,
        "value": "",
        "choices": {
          "min": "10",
          "max": "100",
          "step": "1"
        },
        "dependency": [
          {
            "element": "after_image",
            "value": "",
            "operator": "!="
          },
          {
            "element": "before_image",
            "value": "",
            "operator": "!="
          },
          {
            "element": "before_label",
            "value": "",
            "operator": "!="
          },
          {
            "element": "after_label",
            "value": "",
            "operator": "!="
          },
          {
            "element": "type",
            "value": "switch",
            "operator": "!="
          }
        ],
        "default_option": "before_after_font_size",
        "default_subset": "",
        "option_map": "range"
      },
      "accent_color": {
        "type": "colorpickeralpha",
        "heading": "Label Accent Color",
        "description": "Controls the color of the label background and text. Text takes 100% of this color, background takes a % of it.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#before_after_accent_color\" target=\"_blank\" rel=\"noopener noreferrer\">#ffffff</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-accent_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"accent_color\" value=\"\" data-default=\"#ffffff\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "accent_color",
        "value": "",
        "default": "#ffffff",
        "dependency": [
          {
            "element": "after_image",
            "value": "",
            "operator": "!="
          },
          {
            "element": "before_image",
            "value": "",
            "operator": "!="
          },
          {
            "element": "before_label",
            "value": "",
            "operator": "!="
          },
          {
            "element": "after_label",
            "value": "",
            "operator": "!="
          },
          {
            "element": "type",
            "value": "switch",
            "operator": "!="
          }
        ],
        "default_option": "before_after_accent_color",
        "default_subset": "",
        "option_map": ""
      },
      "label_placement": {
        "type": "select",
        "heading": "Label Placement",
        "description": "Choose if labels are on top of the image and centered, on top of the image up &amp; down or outside of the image up &amp; down.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#before_after_label_placement\" target=\"_blank\" rel=\"noopener noreferrer\">Image Centered</a>.",
        "param_name": "label_placement",
        "value": {
          "": "Default",
          "image-centered": "Image Centered",
          "image-up-down": "Image Up & Down",
          "out-image-up-down": "Outside Image Up & Down"
        },
        "dependency": [
          {
            "element": "after_image",
            "value": "",
            "operator": "!="
          },
          {
            "element": "before_image",
            "value": "",
            "operator": "!="
          },
          {
            "element": "before_label",
            "value": "",
            "operator": "!="
          },
          {
            "element": "after_label",
            "value": "",
            "operator": "!="
          },
          {
            "element": "type",
            "value": "switch",
            "operator": "!="
          }
        ],
        "default_option": "before_after_label_placement",
        "default_subset": "",
        "option_map": "select"
      },
      "transition_time": {
        "type": "range",
        "heading": "Image Fade Transition Speed",
        "description": "Controls the speed of the fade transition on mouse hover. In seconds.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#before_after_transition_time\" target=\"_blank\" rel=\"noopener noreferrer\">0.5</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-transition_time\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"transition_time\" value=\"\" data-default=\"0.5\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "transition_time",
        "value": "",
        "default": "0.5",
        "min": "0",
        "max": "1",
        "step": ".1",
        "dependency": [
          {
            "element": "type",
            "value": "before_after",
            "operator": "!="
          },
          {
            "element": "type",
            "value": "",
            "operator": "!="
          }
        ],
        "default_option": "before_after_transition_time",
        "default_subset": "",
        "option_map": "range"
      },
      "link": {
        "type": "link_selector",
        "heading": "Link URL",
        "description": "Add the URL the item will link to, ex: http://example.com.",
        "param_name": "link",
        "value": "",
        "dynamic_data": true,
        "dependency": [
          {
            "element": "before_image",
            "value": "",
            "operator": "!="
          },
          {
            "element": "after_image",
            "value": "",
            "operator": "!="
          },
          {
            "element": "type",
            "value": "before_after",
            "operator": "!="
          },
          {
            "element": "type",
            "value": "",
            "operator": "!="
          }
        ]
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
        },
        "dependency": [
          {
            "element": "link",
            "value": "",
            "operator": "!="
          },
          {
            "element": "before_image",
            "value": "",
            "operator": "!="
          },
          {
            "element": "after_image",
            "value": "",
            "operator": "!="
          },
          {
            "element": "type",
            "value": "before_after",
            "operator": "!="
          }
        ]
      },
      "handle_type": {
        "type": "select",
        "heading": "Handle Design Style",
        "description": "Controls the design of the handle used to change the before and after image.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#before_after_handle_type\" target=\"_blank\" rel=\"noopener noreferrer\">Circle With Arrows</a>.",
        "param_name": "handle_type",
        "value": {
          "": "Default",
          "default": "Circle With Arrows",
          "square": "Square With Arrows",
          "rectangle": "Rectangle With Arrows",
          "arrows": "Arrows",
          "diamond": "Diamond",
          "circle": "Single Circle"
        },
        "dependency": [
          {
            "element": "type",
            "value": "switch",
            "operator": "!="
          }
        ],
        "default_option": "before_after_handle_type",
        "default_subset": "",
        "option_map": "select"
      },
      "handle_color": {
        "type": "colorpickeralpha",
        "heading": "Handle Color",
        "description": "Controls the color of the before and after image handle line and arrows. ex: #ffffff.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#before_after_handle_color\" target=\"_blank\" rel=\"noopener noreferrer\">#ffffff</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-handle_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"handle_color\" value=\"\" data-default=\"#ffffff\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "handle_color",
        "value": "",
        "default": "#ffffff",
        "dependency": [
          {
            "element": "type",
            "value": "switch",
            "operator": "!="
          }
        ],
        "default_option": "before_after_handle_color",
        "default_subset": "",
        "option_map": ""
      },
      "handle_bg": {
        "type": "colorpickeralpha",
        "heading": "Handle Background Color",
        "description": "Controls the background color of the before and after image handle switch. ex: #000000.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#before_after_handle_bg\" target=\"_blank\" rel=\"noopener noreferrer\">rgba(255,255,255,0)</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-handle_bg\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"handle_bg\" value=\"\" data-default=\"rgba(255,255,255,0)\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "handle_bg",
        "value": "",
        "default": "rgba(255,255,255,0)",
        "dependency": [
          {
            "element": "type",
            "value": "switch",
            "operator": "!="
          },
          {
            "element": "handle_type",
            "value": "arrows",
            "operator": "!="
          },
          {
            "element": "handle_type",
            "value": "circle",
            "operator": "!="
          }
        ],
        "default_option": "before_after_handle_bg",
        "default_subset": "",
        "option_map": ""
      },
      "offset": {
        "type": "range",
        "heading": "Handle Offset",
        "description": "Controls where the handle will be positioned on page load allowing you to control how much of each image displays by default. In percentage.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#before_after_offset\" target=\"_blank\" rel=\"noopener noreferrer\">50</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-offset\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"offset\" value=\"\" data-default=\"50\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "offset",
        "value": "",
        "default": "50",
        "min": "0",
        "max": "100",
        "step": "1",
        "dependency": [
          {
            "element": "type",
            "value": "switch",
            "operator": "!="
          }
        ],
        "default_option": "before_after_offset",
        "default_subset": "",
        "option_map": "range"
      },
      "orientation": {
        "type": "radio_button_set",
        "heading": "Handle Orientation",
        "description": "Controls the position of the before and after image handle.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#before_after_orientation\" target=\"_blank\" rel=\"noopener noreferrer\">Horizontal</a>.",
        "param_name": "orientation",
        "default": "",
        "value": {
          "": "Default",
          "horizontal": "Horizontal",
          "vertical": "Vertical"
        },
        "dependency": [
          {
            "element": "type",
            "value": "switch",
            "operator": "!="
          }
        ],
        "default_option": "before_after_orientation",
        "default_subset": "",
        "option_map": "select"
      },
      "handle_movement": {
        "type": "radio_button_set",
        "heading": "Handle Movement Control",
        "description": "Controls how the viewer interacts with the image handler. The image handle can use Drag &amp; Click, Drag Only, or Hover.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#before_after_handle_movement\" target=\"_blank\" rel=\"noopener noreferrer\">Drag & Click</a>.",
        "param_name": "handle_movement",
        "default": "",
        "value": {
          "": "Default",
          "drag_click": "Drag & Click",
          "drag": "Drag Only",
          "hover": "Hover"
        },
        "dependency": [
          {
            "element": "type",
            "value": "switch",
            "operator": "!="
          }
        ],
        "default_option": "before_after_handle_movement",
        "default_subset": "",
        "option_map": "select"
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
        "group": "Extras",
        "preview": {
          "selector": ".fusion-image-before-after-element",
          "type": "animation"
        },
        "dependency": []
      },
      "animation_direction": {
        "type": "radio_button_set",
        "heading": "Direction of Animation",
        "description": "Select the incoming direction for the animation.",
        "param_name": "animation_direction",
        "default": "left",
        "group": "Extras",
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          }
        ],
        "value": {
          "down": "Top",
          "right": "Right",
          "up": "Bottom",
          "left": "Left",
          "static": "Static"
        },
        "preview": {
          "selector": ".fusion-image-before-after-element",
          "type": "animation"
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
        "group": "Extras",
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          }
        ],
        "preview": {
          "selector": ".fusion-image-before-after-element",
          "type": "animation"
        }
      },
      "animation_offset": {
        "type": "select",
        "heading": "Offset of Animation",
        "description": "Controls when the animation should start.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#animation_offset\" target=\"_blank\" rel=\"noopener noreferrer\">Top Of Element Hits Bottom Of Viewport</a>.",
        "param_name": "animation_offset",
        "default": "",
        "group": "Extras",
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          }
        ],
        "value": {
          "": "Default",
          "top-into-view": "Top of element hits bottom of viewport",
          "top-mid-of-view": "Top of element hits middle of viewport",
          "bottom-in-view": "Bottom of element enters viewport"
        },
        "default_option": "animation_offset",
        "default_subset": "",
        "option_map": "select"
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
        "default": [
          "small-visibility",
          "medium-visibility",
          "large-visibility"
        ],
        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Options</a>.",
        "dependency": []
      },
      "class": {
        "type": "textfield",
        "heading": "CSS Class",
        "param_name": "class",
        "value": "",
        "description": "Add a class to the wrapping HTML element.",
        "dependency": []
      },
      "id": {
        "type": "textfield",
        "heading": "CSS ID",
        "param_name": "id",
        "value": "",
        "description": "Add an ID to the wrapping HTML element.",
        "dependency": []
      }
    },
    "remove_from_atts": []
  },
  "fusion_images": {
    "defaults": {
      "hide_on_mobile": "small-visibility, medium-visibility, large-visibility",
      "class": "",
      "id": "",
      "autoplay": "no",
      "border": "yes",
      "columns": "5",
      "column_spacing": "13",
      "image_id": "",
      "lightbox": "no",
      "mouse_scroll": "no",
      "picture_size": "fixed",
      "scroll_items": "",
      "show_nav": "yes",
      "hover_type": "none"
    },
    "name": "Image Carousel",
    "shortcode": "fusion_images",
    "multi": "multi_element_parent",
    "element_child": "fusion_image",
    "icon": "fusiona-images",
    "preview": "/var/www/html/wordpress_avada_624/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-image-carousel-preview.php",
    "preview_id": "fusion-builder-block-module-image-carousel-preview-template",
    "child_ui": true,
    "sortable": false,
    "help_url": "https://theme-fusion.com/documentation/fusion-builder/elements/image-carousel-element/",
    "params": {
      "element_content": {
        "type": "tinymce",
        "heading": "Content",
        "description": "Enter some content for this image carousel.",
        "param_name": "element_content",
        "value": "[fusion_image link=\"\" linktarget=\"_self\" alt=\"\" image_id=\"\" /]",
        "dependency": []
      },
      "multiple_upload": {
        "type": "multiple_upload",
        "heading": "Bulk Image Upload",
        "description": "This option allows you to select multiple images at once and they will populate into individual items. It saves time instead of adding one image at a time.",
        "param_name": "multiple_upload",
        "child_params": {
          "image": "url",
          "image_id": "id"
        },
        "remove_from_atts": true,
        "dependency": []
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
        "default": "fixed",
        "callback": {
          "function": "fusion_carousel_images",
          "action": "get_fusion_image_carousel_children_data",
          "ajax": true
        },
        "dependency": []
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
        "default": "none",
        "preview": {
          "selector": ".fusion-image-wrapper",
          "type": "class",
          "toggle": "hover"
        },
        "dependency": []
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
        "default": "no",
        "dependency": []
      },
      "columns": {
        "type": "range",
        "heading": "Maximum Columns",
        "description": "Select the number of max columns to display.",
        "param_name": "columns",
        "value": "5",
        "min": "1",
        "max": "6",
        "step": "1",
        "dependency": []
      },
      "column_spacing": {
        "type": "range",
        "heading": "Column Spacing",
        "description": "Insert the amount of spacing between items without &quot;px&quot;. ex: 13.",
        "param_name": "column_spacing",
        "value": "13",
        "min": "0",
        "max": "300",
        "step": "1",
        "dependency": []
      },
      "scroll_items": {
        "type": "textfield",
        "heading": "Scroll Items",
        "description": "Insert the amount of items to scroll. Leave empty to scroll number of visible items.",
        "param_name": "scroll_items",
        "value": "",
        "dependency": []
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
        "default": "yes",
        "dependency": []
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
        "default": "no",
        "dependency": []
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
        "default": "yes",
        "dependency": []
      },
      "lightbox": {
        "type": "radio_button_set",
        "heading": "Image lightbox",
        "description": "Show image in lightbox. Lightbox must be enabled in Theme Options or the image will open up in the same tab by itself.  Current value set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#status_lightbox\" target=\"_blank\" rel=\"noopener noreferrer\">Yes</a>.",
        "param_name": "lightbox",
        "value": {
          "yes": "Yes",
          "no": "No"
        },
        "default": "no",
        "default_option": "status_lightbox",
        "default_subset": "",
        "option_map": "yesno",
        "dependency": []
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
        "default": [
          "small-visibility",
          "medium-visibility",
          "large-visibility"
        ],
        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Options</a>.",
        "dependency": []
      },
      "class": {
        "type": "textfield",
        "heading": "CSS Class",
        "description": "Add a class to the wrapping HTML element.",
        "param_name": "class",
        "value": "",
        "group": "General",
        "dependency": []
      },
      "id": {
        "type": "textfield",
        "heading": "CSS ID",
        "description": "Add an ID to the wrapping HTML element.",
        "param_name": "id",
        "value": "",
        "group": "General",
        "dependency": []
      }
    },
    "has_ajax": {
      "picture_size": {
        "function": "fusion_carousel_images",
        "action": "get_fusion_image_carousel_children_data",
        "param_name": "picture_size"
      }
    },
    "remove_from_atts": [
      "multiple_upload"
    ]
  },
  "fusion_image": {
    "defaults": {
      "alt": "",
      "image": "",
      "image_id": "",
      "link": "",
      "linktarget": "_self"
    },
    "name": "Image",
    "description": "Enter some content for this textblock.",
    "shortcode": "fusion_image",
    "hide_from_builder": true,
    "params": {
      "image": {
        "type": "upload",
        "heading": "Image",
        "description": "Upload an image to display.",
        "param_name": "image",
        "value": "",
        "dependency": []
      },
      "image_id": {
        "type": "textfield",
        "heading": "Image ID",
        "description": "Image ID from Media Library.",
        "param_name": "image_id",
        "value": "",
        "hidden": true,
        "callback": {
          "function": "fusion_ajax",
          "action": "get_fusion_image_carousel",
          "ajax": true
        },
        "dependency": []
      },
      "link": {
        "type": "link_selector",
        "heading": "Image Link",
        "description": "Add the url the image should link to. If lightbox option is enabled, you can also use this to open a different image in the lightbox.",
        "param_name": "link",
        "value": "",
        "dependency": []
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
        "dependency": []
      },
      "alt": {
        "type": "textfield",
        "heading": "Image Alt Text",
        "description": "The alt attribute provides alternative information if an image cannot be viewed.",
        "param_name": "alt",
        "value": "",
        "dependency": []
      }
    },
    "tag_name": "li",
    "callback": {
      "function": "fusion_ajax",
      "action": "get_fusion_image_carousel",
      "ajax": true
    },
    "has_ajax": {
      "image_id": {
        "function": "fusion_ajax",
        "action": "get_fusion_image_carousel",
        "param_name": "image_id"
      }
    },
    "remove_from_atts": []
  },
  "fusion_imageframe": {
    "defaults": {
      "align": "",
      "alt": "",
      "animation_direction": "left",
      "animation_offset": "top-into-view",
      "animation_speed": "",
      "animation_type": "",
      "blur": "3",
      "bordercolor": "#e2e2e2",
      "borderradius": "0px",
      "bordersize": "0",
      "class": "",
      "gallery_id": "",
      "hide_on_mobile": "small-visibility, medium-visibility, large-visibility",
      "hover_type": "none",
      "image_id": "",
      "id": "",
      "lightbox": "no",
      "lightbox_image": "",
      "lightbox_image_id": "",
      "link": "",
      "linktarget": "_self",
      "max_width": "",
      "stylecolor": "#000000",
      "style_type": "none",
      "filter_hue": "0",
      "filter_saturation": "100",
      "filter_brightness": "100",
      "filter_contrast": "100",
      "filter_invert": "0",
      "filter_sepia": "0",
      "filter_opacity": "100",
      "filter_blur": "0",
      "filter_hue_hover": "0",
      "filter_saturation_hover": "100",
      "filter_brightness_hover": "100",
      "filter_contrast_hover": "100",
      "filter_invert_hover": "0",
      "filter_sepia_hover": "0",
      "filter_opacity_hover": "100",
      "filter_blur_hover": "0",
      "style": ""
    },
    "settings_to_params": {
      "animation_offset": "animation_offset",
      "imageframe_blur": "blur",
      "imgframe_border_color": "bordercolor",
      "imageframe_border_radius": "borderradius",
      "imageframe_border_size": "bordersize",
      "imgframe_style_color": "stylecolor",
      "imageframe_style_type": "style_type"
    },
    "name": "Image",
    "shortcode": "fusion_imageframe",
    "icon": "fusiona-image",
    "preview": "/var/www/html/wordpress_avada_624/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-image-frame-preview.php",
    "preview_id": "fusion-builder-block-module-image-frame-preview-template",
    "help_url": "https://theme-fusion.com/documentation/fusion-builder/elements/image-element/",
    "params": {
      "element_content": {
        "type": "upload",
        "heading": "Image",
        "description": "Upload an image to display.",
        "param_name": "element_content",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "image_id": {
        "type": "textfield",
        "heading": "Image ID",
        "description": "Image ID from Media Library.",
        "param_name": "image_id",
        "value": "",
        "hidden": true,
        "dependency": []
      },
      "max_width": {
        "type": "textfield",
        "heading": "Image Max Width",
        "description": "Set the maximum width the image should take up. Enter value including any valid CSS unit, ex: 200px. Leave empty to use full image width.",
        "param_name": "max_width",
        "value": "",
        "dependency": []
      },
      "style_type": {
        "type": "radio_button_set",
        "heading": "Style Type",
        "description": "Select the style type.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#imageframe_style_type\" target=\"_blank\" rel=\"noopener noreferrer\">None</a>.",
        "param_name": "style_type",
        "value": {
          "": "Default",
          "none": "None",
          "glow": "Glow",
          "dropshadow": "Drop Shadow",
          "bottomshadow": "Bottom Shadow"
        },
        "default_option": "imageframe_style_type",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "blur": {
        "type": "range",
        "heading": "Glow / Drop Shadow Blur",
        "description": "Choose the amount of blur added to glow or drop shadow effect. In pixels.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#imageframe_blur\" target=\"_blank\" rel=\"noopener noreferrer\">3</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-blur\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"blur\" value=\"\" data-default=\"3\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "blur",
        "value": "",
        "min": "0",
        "max": "50",
        "step": "1",
        "default": "3",
        "dependency": [
          {
            "element": "style_type",
            "value": "none",
            "operator": "!="
          },
          {
            "element": "style_type",
            "value": "bottomshadow",
            "operator": "!="
          },
          {
            "element": "style_type",
            "value": "",
            "operator": "!="
          }
        ],
        "default_option": "imageframe_blur",
        "default_subset": "",
        "option_map": "range"
      },
      "stylecolor": {
        "type": "colorpickeralpha",
        "heading": "Style Color",
        "description": "Controls the style color for all style types except border. Hex colors will use a subtle auto added alpha level to produce a nice effect.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#imgframe_style_color\" target=\"_blank\" rel=\"noopener noreferrer\">#000000</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-stylecolor\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"stylecolor\" value=\"\" data-default=\"#000000\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "stylecolor",
        "value": "",
        "default": "#000000",
        "dependency": [
          {
            "element": "style_type",
            "value": "none",
            "operator": "!="
          },
          {
            "element": "style_type",
            "value": "",
            "operator": "!="
          }
        ],
        "default_option": "imgframe_style_color",
        "default_subset": "",
        "option_map": ""
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
        "preview": {
          "selector": ".fusion-imageframe",
          "type": "class",
          "toggle": "hover"
        },
        "dependency": []
      },
      "bordersize": {
        "type": "range",
        "heading": "Border Size",
        "description": "In pixels.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#imageframe_border_size\" target=\"_blank\" rel=\"noopener noreferrer\">0</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-bordersize\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"bordersize\" value=\"\" data-default=\"0\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "bordersize",
        "value": "",
        "min": "0",
        "max": "50",
        "step": "1",
        "default": "0",
        "default_option": "imageframe_border_size",
        "default_subset": "",
        "option_map": "range",
        "dependency": []
      },
      "bordercolor": {
        "type": "colorpickeralpha",
        "heading": "Border Color",
        "description": "Controls the border color.   Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#imgframe_border_color\" target=\"_blank\" rel=\"noopener noreferrer\">#e2e2e2</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-bordercolor\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"bordercolor\" value=\"\" data-default=\"#e2e2e2\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "bordercolor",
        "value": "",
        "default": "#e2e2e2",
        "dependency": [
          {
            "element": "bordersize",
            "value": "0",
            "operator": "!="
          },
          {
            "element": "bordersize",
            "value": "",
            "operator": "!="
          }
        ],
        "default_option": "imgframe_border_color",
        "default_subset": "",
        "option_map": ""
      },
      "borderradius": {
        "type": "textfield",
        "heading": "Border Radius",
        "description": "Controls the image border radius. In pixels (px), ex: 1px, or &quot;round&quot;.   Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#imageframe_border_radius\" target=\"_blank\" rel=\"noopener noreferrer\">0px</a>.",
        "param_name": "borderradius",
        "value": "",
        "dependency": [
          {
            "element": "style_type",
            "value": "bottomshadow",
            "operator": "!="
          }
        ],
        "default_option": "imageframe_border_radius",
        "default_subset": "",
        "option_map": ""
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
        "default": "none",
        "dependency": []
      },
      "lightbox": {
        "type": "radio_button_set",
        "heading": "Image lightbox",
        "description": "Show image in lightbox. Lightbox must be enabled in Theme Options or the image will open up in the same tab by itself.  Current value set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#status_lightbox\" target=\"_blank\" rel=\"noopener noreferrer\">Yes</a>.",
        "param_name": "lightbox",
        "value": {
          "yes": "Yes",
          "no": "No"
        },
        "default": "no",
        "default_option": "status_lightbox",
        "default_subset": "",
        "option_map": "yesno",
        "dependency": []
      },
      "gallery_id": {
        "type": "textfield",
        "heading": "Gallery ID",
        "description": "Set a name for the lightbox gallery this image should belong to.",
        "param_name": "gallery_id",
        "value": "",
        "dependency": [
          {
            "element": "lightbox",
            "value": "no",
            "operator": "!="
          }
        ]
      },
      "lightbox_image": {
        "type": "upload",
        "heading": "Lightbox Image",
        "description": "Upload an image that will show up in the lightbox.",
        "param_name": "lightbox_image",
        "value": "",
        "dependency": [
          {
            "element": "lightbox",
            "value": "no",
            "operator": "!="
          }
        ]
      },
      "lightbox_image_id": {
        "type": "textfield",
        "heading": "Lightbox Image ID",
        "description": "Lightbox Image ID from Media Library.",
        "param_name": "lightbox_image_id",
        "value": "",
        "hidden": true,
        "dependency": []
      },
      "alt": {
        "type": "textfield",
        "heading": "Image Alt Text",
        "description": "The alt attribute provides alternative information if an image cannot be viewed.",
        "param_name": "alt",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "link": {
        "type": "link_selector",
        "heading": "Picture Link URL",
        "description": "Add the URL the picture will link to, ex: http://example.com.",
        "param_name": "link",
        "value": "",
        "dynamic_data": true,
        "dependency": [
          {
            "element": "lightbox",
            "value": "yes",
            "operator": "!="
          }
        ]
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
        "dependency": [
          {
            "element": "lightbox",
            "value": "yes",
            "operator": "!="
          },
          {
            "element": "link",
            "value": "",
            "operator": "!="
          }
        ]
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
        "group": "Extras",
        "preview": {
          "selector": ".fusion-imageframe",
          "type": "animation"
        },
        "dependency": []
      },
      "animation_direction": {
        "type": "radio_button_set",
        "heading": "Direction of Animation",
        "description": "Select the incoming direction for the animation.",
        "param_name": "animation_direction",
        "default": "left",
        "group": "Extras",
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          }
        ],
        "value": {
          "down": "Top",
          "right": "Right",
          "up": "Bottom",
          "left": "Left",
          "static": "Static"
        },
        "preview": {
          "selector": ".fusion-imageframe",
          "type": "animation"
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
        "group": "Extras",
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          }
        ],
        "preview": {
          "selector": ".fusion-imageframe",
          "type": "animation"
        }
      },
      "animation_offset": {
        "type": "select",
        "heading": "Offset of Animation",
        "description": "Controls when the animation should start.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#animation_offset\" target=\"_blank\" rel=\"noopener noreferrer\">Top Of Element Hits Bottom Of Viewport</a>.",
        "param_name": "animation_offset",
        "default": "",
        "group": "Extras",
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          }
        ],
        "value": {
          "": "Default",
          "top-into-view": "Top of element hits bottom of viewport",
          "top-mid-of-view": "Top of element hits middle of viewport",
          "bottom-in-view": "Bottom of element enters viewport"
        },
        "default_option": "animation_offset",
        "default_subset": "",
        "option_map": "select"
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
        "default": [
          "small-visibility",
          "medium-visibility",
          "large-visibility"
        ],
        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Options</a>.",
        "dependency": []
      },
      "class": {
        "type": "textfield",
        "heading": "CSS Class",
        "description": "Add a class to the wrapping HTML element.",
        "param_name": "class",
        "value": "",
        "group": "General",
        "dependency": []
      },
      "id": {
        "type": "textfield",
        "heading": "CSS ID",
        "description": "Add an ID to the wrapping HTML element.",
        "param_name": "id",
        "value": "",
        "group": "General",
        "dependency": []
      },
      "filter_type": {
        "type": "subgroup",
        "heading": "Filter Type",
        "description": "Use filters to see specific type of content.",
        "param_name": "filter_type",
        "default": "regular",
        "group": "Extras",
        "remove_from_atts": true,
        "value": {
          "regular": "Regular",
          "hover": "Hover"
        },
        "icons": {
          "regular": "<span class=\"fusiona-regular-state\" style=\"font-size:18px;\"></span>",
          "hover": "<span class=\"fusiona-hover-state\" style=\"font-size:18px;\"></span>"
        },
        "dependency": []
      },
      "filter_hue": {
        "type": "range",
        "heading": "Hue",
        "description": "Filter hue.",
        "param_name": "filter_hue",
        "value": "0",
        "min": "0",
        "max": "359",
        "group": "Extras",
        "subgroup": {
          "name": "filter_type",
          "tab": "regular"
        },
        "callback": {
          "function": "fusion_update_filter_style",
          "args": {
            "selector_base": "imageframe-cid"
          }
        },
        "dependency": []
      },
      "filter_saturation": {
        "type": "range",
        "heading": "Saturation",
        "description": "Filter saturation.",
        "param_name": "filter_saturation",
        "value": "100",
        "min": "0",
        "max": "200",
        "group": "Extras",
        "subgroup": {
          "name": "filter_type",
          "tab": "regular"
        },
        "callback": {
          "function": "fusion_update_filter_style",
          "args": {
            "selector_base": "imageframe-cid"
          }
        },
        "dependency": []
      },
      "filter_brightness": {
        "type": "range",
        "heading": "Brightness",
        "description": "Filter brightness.",
        "param_name": "filter_brightness",
        "value": "100",
        "min": "0",
        "max": "200",
        "group": "Extras",
        "subgroup": {
          "name": "filter_type",
          "tab": "regular"
        },
        "callback": {
          "function": "fusion_update_filter_style",
          "args": {
            "selector_base": "imageframe-cid"
          }
        },
        "dependency": []
      },
      "filter_contrast": {
        "type": "range",
        "heading": "Contrast",
        "description": "Filter contrast.",
        "param_name": "filter_contrast",
        "value": "100",
        "min": "0",
        "max": "200",
        "group": "Extras",
        "subgroup": {
          "name": "filter_type",
          "tab": "regular"
        },
        "callback": {
          "function": "fusion_update_filter_style",
          "args": {
            "selector_base": "imageframe-cid"
          }
        },
        "dependency": []
      },
      "filter_invert": {
        "type": "range",
        "heading": "Invert",
        "description": "Filter invert.",
        "param_name": "filter_invert",
        "value": "0",
        "min": "0",
        "max": "100",
        "group": "Extras",
        "subgroup": {
          "name": "filter_type",
          "tab": "regular"
        },
        "callback": {
          "function": "fusion_update_filter_style",
          "args": {
            "selector_base": "imageframe-cid"
          }
        },
        "dependency": []
      },
      "filter_sepia": {
        "type": "range",
        "heading": "Sepia",
        "description": "Filter sepia.",
        "param_name": "filter_sepia",
        "value": "0",
        "min": "0",
        "max": "100",
        "group": "Extras",
        "subgroup": {
          "name": "filter_type",
          "tab": "regular"
        },
        "callback": {
          "function": "fusion_update_filter_style",
          "args": {
            "selector_base": "imageframe-cid"
          }
        },
        "dependency": []
      },
      "filter_opacity": {
        "type": "range",
        "heading": "Opacity",
        "description": "Filter opacity.",
        "param_name": "filter_opacity",
        "value": "100",
        "min": "0",
        "max": "100",
        "group": "Extras",
        "subgroup": {
          "name": "filter_type",
          "tab": "regular"
        },
        "callback": {
          "function": "fusion_update_filter_style",
          "args": {
            "selector_base": "imageframe-cid"
          }
        },
        "dependency": []
      },
      "filter_blur": {
        "type": "range",
        "heading": "Blur",
        "description": "Filter blur.  In pixels.",
        "param_name": "filter_blur",
        "value": "0",
        "min": "0",
        "max": "50",
        "group": "Extras",
        "subgroup": {
          "name": "filter_type",
          "tab": "regular"
        },
        "callback": {
          "function": "fusion_update_filter_style",
          "args": {
            "selector_base": "imageframe-cid"
          }
        },
        "dependency": []
      },
      "filter_hue_hover": {
        "type": "range",
        "heading": "Hue",
        "description": "Filter hue.",
        "param_name": "filter_hue_hover",
        "value": "0",
        "min": "0",
        "max": "359",
        "group": "Extras",
        "subgroup": {
          "name": "filter_type",
          "tab": "hover"
        },
        "callback": {
          "function": "fusion_update_filter_style",
          "args": {
            "selector_base": "imageframe-cid"
          }
        },
        "dependency": []
      },
      "filter_saturation_hover": {
        "type": "range",
        "heading": "Saturation",
        "description": "Filter saturation.",
        "param_name": "filter_saturation_hover",
        "value": "100",
        "min": "0",
        "max": "200",
        "group": "Extras",
        "subgroup": {
          "name": "filter_type",
          "tab": "hover"
        },
        "callback": {
          "function": "fusion_update_filter_style",
          "args": {
            "selector_base": "imageframe-cid"
          }
        },
        "dependency": []
      },
      "filter_brightness_hover": {
        "type": "range",
        "heading": "Brightness",
        "description": "Filter brightness.",
        "param_name": "filter_brightness_hover",
        "value": "100",
        "min": "0",
        "max": "200",
        "group": "Extras",
        "subgroup": {
          "name": "filter_type",
          "tab": "hover"
        },
        "callback": {
          "function": "fusion_update_filter_style",
          "args": {
            "selector_base": "imageframe-cid"
          }
        },
        "dependency": []
      },
      "filter_contrast_hover": {
        "type": "range",
        "heading": "Contrast",
        "description": "Filter contrast.",
        "param_name": "filter_contrast_hover",
        "value": "100",
        "min": "0",
        "max": "200",
        "group": "Extras",
        "subgroup": {
          "name": "filter_type",
          "tab": "hover"
        },
        "callback": {
          "function": "fusion_update_filter_style",
          "args": {
            "selector_base": "imageframe-cid"
          }
        },
        "dependency": []
      },
      "filter_invert_hover": {
        "type": "range",
        "heading": "Invert",
        "description": "Filter invert.",
        "param_name": "filter_invert_hover",
        "value": "0",
        "min": "0",
        "max": "100",
        "group": "Extras",
        "subgroup": {
          "name": "filter_type",
          "tab": "hover"
        },
        "callback": {
          "function": "fusion_update_filter_style",
          "args": {
            "selector_base": "imageframe-cid"
          }
        },
        "dependency": []
      },
      "filter_sepia_hover": {
        "type": "range",
        "heading": "Sepia",
        "description": "Filter sepia.",
        "param_name": "filter_sepia_hover",
        "value": "0",
        "min": "0",
        "max": "100",
        "group": "Extras",
        "subgroup": {
          "name": "filter_type",
          "tab": "hover"
        },
        "callback": {
          "function": "fusion_update_filter_style",
          "args": {
            "selector_base": "imageframe-cid"
          }
        },
        "dependency": []
      },
      "filter_opacity_hover": {
        "type": "range",
        "heading": "Opacity",
        "description": "Filter opacity.",
        "param_name": "filter_opacity_hover",
        "value": "100",
        "min": "0",
        "max": "100",
        "group": "Extras",
        "subgroup": {
          "name": "filter_type",
          "tab": "hover"
        },
        "callback": {
          "function": "fusion_update_filter_style",
          "args": {
            "selector_base": "imageframe-cid"
          }
        },
        "dependency": []
      },
      "filter_blur_hover": {
        "type": "range",
        "heading": "Blur",
        "description": "Filter blur.  In pixels.",
        "param_name": "filter_blur_hover",
        "value": "0",
        "min": "0",
        "max": "50",
        "group": "Extras",
        "subgroup": {
          "name": "filter_type",
          "tab": "hover"
        },
        "callback": {
          "function": "fusion_update_filter_style",
          "args": {
            "selector_base": "imageframe-cid"
          }
        },
        "dependency": []
      }
    },
    "remove_from_atts": [
      "filter_type"
    ]
  },
  "fusion_lightbox": {
    "name": "Lightbox",
    "shortcode": "fusion_lightbox",
    "icon": "fusiona-uniF602",
    "on_save": "lightboxShortcodeFilter",
    "on_change": "lightboxShortcodeFilter",
    "admin_enqueue_js": "http://127.0.0.1/wordpress_avada_624/wp-content/plugins/fusion-builder/shortcodes/js/fusion-lightbox.js",
    "help_url": "https://theme-fusion.com/documentation/fusion-builder/elements/lightbox-element/",
    "params": {
      "type": {
        "type": "radio_button_set",
        "heading": "Content Type",
        "description": "Select what you want to display in the lightbox.",
        "param_name": "type",
        "defaults": "",
        "value": {
          "": "Image",
          "video": "Video"
        },
        "dependency": []
      },
      "full_image": {
        "type": "upload",
        "heading": "Full Image",
        "description": "Upload an image that will show up in the lightbox.",
        "param_name": "full_image",
        "value": "",
        "dependency": [
          {
            "element": "type",
            "value": "",
            "operator": "=="
          }
        ]
      },
      "video_url": {
        "type": "textfield",
        "heading": "Video URL",
        "description": "Insert the video URL that will show in the lightbox. This can be a YouTube, Vimeo or a self-hosted video URL.",
        "param_name": "video_url",
        "value": "",
        "dependency": [
          {
            "element": "type",
            "value": "",
            "operator": "!="
          }
        ]
      },
      "thumbnail_image": {
        "type": "upload",
        "heading": "Thumbnail Image",
        "description": "Clicking this image will show lightbox.",
        "param_name": "thumbnail_image",
        "value": "",
        "dependency": []
      },
      "alt_text": {
        "type": "textfield",
        "heading": "Alt Text",
        "param_name": "alt_text",
        "value": "",
        "description": "The alt attribute provides alternative information if an image cannot be viewed.",
        "dependency": []
      },
      "title": {
        "type": "textfield",
        "heading": "Lightbox Title",
        "param_name": "title",
        "value": "",
        "description": "This will show up in the lightbox as a title above the image.",
        "dynamic_data": true,
        "dependency": []
      },
      "description": {
        "type": "textfield",
        "heading": "Lightbox Description",
        "param_name": "description",
        "value": "",
        "description": "This will show up in the lightbox as a description below the image.",
        "dynamic_data": true,
        "dependency": []
      },
      "class": {
        "type": "textfield",
        "heading": "CSS Class",
        "param_name": "class",
        "value": "",
        "description": "Add a class to the wrapping HTML element.",
        "dependency": []
      },
      "id": {
        "type": "textfield",
        "heading": "CSS ID",
        "param_name": "id",
        "value": "",
        "description": "Add an ID to the wrapping HTML element.",
        "dependency": []
      }
    },
    "remove_from_atts": []
  },
  "fusion_menu_anchor": {
    "defaults": {
      "class": "",
      "name": ""
    },
    "name": "Menu Anchor",
    "shortcode": "fusion_menu_anchor",
    "icon": "fusiona-anchor",
    "preview": "/var/www/html/wordpress_avada_624/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-menu-anchor-preview.php",
    "preview_id": "fusion-builder-block-module-menu-anchor-preview-template",
    "help_url": "https://theme-fusion.com/documentation/fusion-builder/elements/menu-anchor-element/",
    "params": {
      "name": {
        "type": "textfield",
        "heading": "Name",
        "param_name": "name",
        "value": "",
        "description": "This name will be the id you will have to use in your one page menu.",
        "dependency": []
      },
      "class": {
        "type": "textfield",
        "heading": "CSS Class",
        "param_name": "class",
        "value": "",
        "description": "Add a class to the wrapping HTML element.",
        "dependency": []
      }
    },
    "remove_from_atts": []
  },
  "fusion_modal": {
    "defaults": {
      "class": "",
      "id": "",
      "background": "#ffffff",
      "border_color": "#e2e2e2",
      "name": "",
      "size": "small",
      "title": "",
      "show_footer": "yes"
    },
    "extras": {
      "close_text": "Close"
    },
    "settings_to_params": {
      "modal_bg_color": "background",
      "modal_border_color": "border_color"
    },
    "name": "Modal",
    "shortcode": "fusion_modal",
    "icon": "fusiona-external-link",
    "preview": "/var/www/html/wordpress_avada_624/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-modal-preview.php",
    "preview_id": "fusion-builder-block-module-modal-preview-template",
    "allow_generator": true,
    "help_url": "https://theme-fusion.com/documentation/fusion-builder/elements/modal-element/",
    "inline_editor": true,
    "params": {
      "name": {
        "type": "textfield",
        "heading": "Name Of Modal",
        "description": "Needs to be a unique identifier (lowercase), used for button or modal_text_link element to open the modal. ex: mymodal.",
        "param_name": "name",
        "value": "",
        "dependency": []
      },
      "title": {
        "type": "textfield",
        "heading": "Modal Heading",
        "description": "Heading text for the modal.",
        "param_name": "title",
        "value": "Your Content Goes Here",
        "placeholder": true,
        "dynamic_data": true,
        "dependency": []
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
        "default": "small",
        "dependency": []
      },
      "background": {
        "type": "colorpickeralpha",
        "heading": "Background Color",
        "description": "Controls the modal background color.   Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#modal_bg_color\" target=\"_blank\" rel=\"noopener noreferrer\">#ffffff</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-background\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"background\" value=\"\" data-default=\"#ffffff\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "background",
        "value": "",
        "default": "#ffffff",
        "default_option": "modal_bg_color",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "border_color": {
        "type": "colorpickeralpha",
        "heading": "Border Color",
        "description": "Controls the modal border color.   Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#modal_border_color\" target=\"_blank\" rel=\"noopener noreferrer\">#e2e2e2</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-border_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"border_color\" value=\"\" data-default=\"#e2e2e2\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "border_color",
        "value": "",
        "default": "#e2e2e2",
        "default_option": "modal_border_color",
        "default_subset": "",
        "option_map": "",
        "dependency": []
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
        "default": "yes",
        "dependency": []
      },
      "element_content": {
        "type": "tinymce",
        "heading": "Contents of Modal",
        "description": "Add your content to be displayed in modal.",
        "param_name": "element_content",
        "value": "Your Content Goes Here",
        "placeholder": true,
        "dependency": []
      },
      "class": {
        "type": "textfield",
        "heading": "CSS Class",
        "description": "Add a class to the wrapping HTML element.",
        "param_name": "class",
        "value": "",
        "group": "General",
        "dependency": []
      },
      "id": {
        "type": "textfield",
        "heading": "CSS ID",
        "description": "Add an ID to the wrapping HTML element.",
        "param_name": "id",
        "value": "",
        "group": "General",
        "dependency": []
      }
    },
    "remove_from_atts": []
  },
  "fusion_modal_text_link": {
    "defaults": [],
    "name": "Modal Text / HTML Link",
    "shortcode": "fusion_modal_text_link",
    "icon": "fusiona-external-link",
    "inline_editor": true,
    "params": {
      "name": {
        "type": "textfield",
        "heading": "Name Of Modal",
        "description": "Unique identifier of the modal to open on click.",
        "param_name": "name",
        "value": "",
        "dependency": []
      },
      "element_content": {
        "type": "textarea",
        "heading": "Text or HTML code",
        "description": "Insert text or HTML code here (e.g: HTML for image). This content will be used to trigger the modal popup.",
        "param_name": "element_content",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "class": {
        "type": "textfield",
        "heading": "CSS Class",
        "param_name": "class",
        "value": "",
        "description": "Add a class to the wrapping HTML element.",
        "dependency": []
      },
      "id": {
        "type": "textfield",
        "heading": "CSS ID",
        "param_name": "id",
        "value": "",
        "description": "Add an ID to the wrapping HTML element.",
        "dependency": []
      }
    },
    "remove_from_atts": []
  },
  "fusion_builder_next_page": {
    "name": "Next Page",
    "shortcode": "fusion_builder_next_page",
    "hide_from_builder": true,
    "help_url": "https://theme-fusion.com/documentation/fusion-builder/elements/next-page-pagination-element/",
    "params": {
      "next_page_content": {
        "type": "textfield",
        "heading": "",
        "description": "",
        "param_name": "next_page_content",
        "value": "",
        "dependency": []
      }
    },
    "remove_from_atts": []
  },
  "fusion_one_page_text_link": {
    "defaults": {
      "class": "",
      "id": "",
      "link": ""
    },
    "name": "One Page Text Link",
    "shortcode": "fusion_one_page_text_link",
    "icon": "fusiona-external-link",
    "help_url": "https://theme-fusion.com/documentation/fusion-builder/elements/one-page-text-link-element/",
    "params": {
      "link": {
        "type": "textfield",
        "heading": "Name Of Anchor",
        "description": "Unique identifier of the anchor to scroll to on click. Anchor names need to be prefixed with a hastag, ex: #anchorname.",
        "param_name": "link",
        "value": "",
        "dependency": []
      },
      "element_content": {
        "type": "textarea",
        "heading": "Text or HTML code",
        "description": "Insert text or HTML code here (e.g: HTML for image). This content will be used to trigger the scrolling to the anchor.",
        "param_name": "element_content",
        "value": "",
        "dependency": []
      },
      "class": {
        "type": "textfield",
        "heading": "CSS Class",
        "param_name": "class",
        "value": "",
        "description": "Add a class to the wrapping HTML element.",
        "dependency": []
      },
      "id": {
        "type": "textfield",
        "heading": "CSS ID",
        "param_name": "id",
        "value": "",
        "description": "Add an ID to the wrapping HTML element.",
        "dependency": []
      }
    },
    "remove_from_atts": []
  },
  "fusion_person": {
    "defaults": {
      "hide_on_mobile": "small-visibility, medium-visibility, large-visibility",
      "class": "",
      "id": "",
      "lightbox": "no",
      "linktarget": "_self",
      "name": "",
      "social_icon_boxed": "0",
      "social_icon_boxed_colors": "#f2f3f5",
      "social_icon_boxed_radius": "4px",
      "social_icon_color_type": "custom",
      "social_icon_colors": "#9ea0a4",
      "social_icon_font_size": "16px",
      "social_icon_order": "facebook|twitter|instagram|pinterest",
      "social_icon_padding": "8px",
      "social_icon_tooltip": "top",
      "pic_bordercolor": "#e2e2e2",
      "pic_borderradius": "0px",
      "pic_bordersize": "0",
      "pic_link": "",
      "pic_style": "none",
      "pic_style_blur": "3",
      "pic_style_color": "#000000",
      "show_custom": "no",
      "picture": "",
      "picture_id": "",
      "title": "",
      "hover_type": "none",
      "background_color": "rgba(0,0,0,0)",
      "content_alignment": "left",
      "icon_position": "top",
      "facebook": "",
      "twitch": "",
      "twitter": "",
      "instagram": "",
      "linkedin": "",
      "dribbble": "",
      "rss": "",
      "youtube": "",
      "pinterest": "",
      "flickr": "",
      "vimeo": "",
      "tumblr": "",
      "discord": "",
      "digg": "",
      "blogger": "",
      "skype": "",
      "mixer": "",
      "myspace": "",
      "deviantart": "",
      "yahoo": "",
      "reddit": "",
      "forrst": "",
      "paypal": "",
      "dropbox": "",
      "soundcloud": "",
      "vk": "",
      "whatsapp": "",
      "xing": "",
      "yelp": "",
      "spotify": "",
      "email": ""
    },
    "extras": {
      "linktarget": "_blank",
      "social_links_box_color": "#f2f3f5",
      "social_links_icon_color": "#9ea0a4",
      "social_media_icons": {
        "fusionredux_repeater_data": [
          {
            "title": ""
          },
          {
            "title": ""
          },
          {
            "title": ""
          },
          {
            "title": ""
          }
        ],
        "icon": [
          "facebook",
          "twitter",
          "instagram",
          "pinterest"
        ],
        "url": [
          "#",
          "#",
          "#",
          "#"
        ],
        "custom_title": [
          "",
          "",
          "",
          ""
        ],
        "custom_source": [
          {
            "url": "",
            "id": "",
            "height": "",
            "width": "",
            "thumbnail": ""
          },
          {
            "url": "",
            "id": "",
            "height": "",
            "width": "",
            "thumbnail": ""
          },
          {
            "url": "",
            "id": "",
            "height": "",
            "width": "",
            "thumbnail": ""
          },
          {
            "url": "",
            "id": "",
            "height": "",
            "width": "",
            "thumbnail": ""
          }
        ]
      }
    },
    "settings_to_params": {
      "social_links_boxed": "social_icon_boxed",
      "social_links_box_color": "social_icon_boxed_colors",
      "social_links_boxed_radius": "social_icon_boxed_radius",
      "social_links_color_type": "social_icon_color_type",
      "social_links_icon_color": "social_icon_colors",
      "social_links_font_size": "social_icon_font_size",
      "social_links_boxed_padding": "social_icon_padding",
      "social_links_tooltip_placement": "social_icon_tooltip",
      "person_border_color": "pic_bordercolor",
      "person_border_radius": "pic_borderradius",
      "person_border_size": "pic_bordersize",
      "person_style_color": "pic_style_color",
      "person_pic_style": "pic_style",
      "person_pic_style_blur": "pic_style_blur",
      "person_background_color": "background_color",
      "person_alignment": {
        "param": "content_alignment",
        "callback": "toLowerCase"
      },
      "person_icon_position": {
        "param": "icon_position",
        "callback": "toLowerCase"
      }
    },
    "settings_to_extras": {
      "social_icons_new": "linktarget",
      "social_links_box_color": "social_links_box_color",
      "social_links_icon_color": "social_links_icon_color",
      "social_media_icons": "social_media_icons"
    },
    "name": "Person",
    "shortcode": "fusion_person",
    "icon": "fusiona-user",
    "preview": "/var/www/html/wordpress_avada_624/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-person-preview.php",
    "preview_id": "fusion-builder-block-module-person-preview-template",
    "help_url": "https://theme-fusion.com/documentation/fusion-builder/elements/person-element/",
    "params": {
      "name": {
        "type": "textfield",
        "heading": "Name",
        "description": "Insert the name of the person.",
        "param_name": "name",
        "value": "Name",
        "placeholder": true,
        "dynamic_data": true,
        "dependency": []
      },
      "title": {
        "type": "textfield",
        "heading": "Title",
        "description": "Insert the title of the person.",
        "param_name": "title",
        "value": "Title",
        "placeholder": true,
        "dynamic_data": true,
        "dependency": []
      },
      "element_content": {
        "type": "textarea",
        "heading": "Profile Description",
        "description": "Enter the content to be displayed.",
        "param_name": "element_content",
        "value": "Your Content Goes Here",
        "placeholder": true,
        "dynamic_data": true,
        "dependency": []
      },
      "picture": {
        "type": "upload",
        "heading": "Picture",
        "description": "Upload an image to display.",
        "param_name": "picture",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "picture_id": {
        "type": "textfield",
        "heading": "Picture ID",
        "description": "Picture ID from Media Library.",
        "param_name": "picture_id",
        "value": "",
        "hidden": true,
        "dependency": []
      },
      "pic_link": {
        "type": "link_selector",
        "heading": "Picture Link URL",
        "description": "Add the URL the picture will link to, ex: http://example.com.",
        "param_name": "pic_link",
        "dynamic_data": true,
        "value": "",
        "dependency": [
          {
            "element": "picture",
            "value": "",
            "operator": "!="
          }
        ]
      },
      "linktarget": {
        "type": "radio_button_set",
        "heading": "Link Target",
        "description": "_self = open in same window.<br />_blank = open in new window.",
        "param_name": "linktarget",
        "value": {
          "_self": "_self",
          "_blank": "_blank"
        },
        "default": "_self",
        "dependency": [
          {
            "element": "picture",
            "value": "",
            "operator": "!="
          }
        ]
      },
      "pic_style": {
        "type": "radio_button_set",
        "heading": "Picture Style Type",
        "description": "Select the style type for the picture.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#person_pic_style\" target=\"_blank\" rel=\"noopener noreferrer\">None</a>.",
        "param_name": "pic_style",
        "value": {
          "": "Default",
          "none": "None",
          "glow": "Glow",
          "dropshadow": "Drop Shadow",
          "bottomshadow": "Bottom Shadow"
        },
        "default": "",
        "dependency": [
          {
            "element": "picture",
            "value": "",
            "operator": "!="
          }
        ],
        "default_option": "person_pic_style",
        "default_subset": "",
        "option_map": ""
      },
      "pic_style_blur": {
        "type": "range",
        "heading": "Picture Glow / Drop Shadow Blur",
        "description": "Choose the amount of blur added to glow or drop shadow effect. In pixels.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#person_pic_style_blur\" target=\"_blank\" rel=\"noopener noreferrer\">3</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-pic_style_blur\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"pic_style_blur\" value=\"\" data-default=\"3\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "pic_style_blur",
        "value": "",
        "min": "0",
        "max": "50",
        "step": "1",
        "default": "3",
        "dependency": [
          {
            "element": "picture",
            "operator": "!=",
            "value": ""
          },
          {
            "element": "pic_style",
            "operator": "!=",
            "value": "none"
          },
          {
            "element": "pic_style",
            "operator": "!=",
            "value": "bottomshadow"
          },
          {
            "element": "pic_style",
            "value": "",
            "operator": "!="
          }
        ],
        "preview": {
          "selector": ".person-image-container",
          "type": "class",
          "toggle": "hover"
        },
        "default_option": "person_pic_style_blur",
        "default_subset": "",
        "option_map": "range"
      },
      "pic_style_color": {
        "type": "colorpickeralpha",
        "heading": "Picture Style Color",
        "description": "For all style types except border. Controls the style color.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#person_style_color\" target=\"_blank\" rel=\"noopener noreferrer\">#000000</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-pic_style_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"pic_style_color\" value=\"\" data-default=\"#000000\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "pic_style_color",
        "value": "",
        "default": "#000000",
        "dependency": [
          {
            "element": "picture",
            "value": "",
            "operator": "!="
          },
          {
            "element": "pic_style",
            "value": "",
            "operator": "!="
          }
        ],
        "default_option": "person_style_color",
        "default_subset": "",
        "option_map": ""
      },
      "pic_bordersize": {
        "type": "range",
        "heading": "Picture Border Size",
        "description": "In pixels.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#person_border_size\" target=\"_blank\" rel=\"noopener noreferrer\">0</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-pic_bordersize\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"pic_bordersize\" value=\"\" data-default=\"0\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "pic_bordersize",
        "value": "",
        "min": "0",
        "max": "50",
        "step": "1",
        "default": "0",
        "dependency": [
          {
            "element": "picture",
            "value": "",
            "operator": "!="
          }
        ],
        "default_option": "person_border_size",
        "default_subset": "",
        "option_map": "range"
      },
      "pic_bordercolor": {
        "type": "colorpickeralpha",
        "heading": "Picture Border Color",
        "description": "Controls the picture&#039;s border color.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#person_border_color\" target=\"_blank\" rel=\"noopener noreferrer\">#e2e2e2</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-pic_bordercolor\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"pic_bordercolor\" value=\"\" data-default=\"#e2e2e2\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "pic_bordercolor",
        "value": "",
        "default": "#e2e2e2",
        "dependency": [
          {
            "element": "picture",
            "value": "",
            "operator": "!="
          },
          {
            "element": "pic_bordersize",
            "value": "0",
            "operator": "!="
          }
        ],
        "default_option": "person_border_color",
        "default_subset": "",
        "option_map": ""
      },
      "pic_borderradius": {
        "type": "textfield",
        "heading": "Picture Border Radius",
        "description": "Choose the border radius of the person image. In pixels (px), ex: 1px, or &quot;round&quot;.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#person_border_radius\" target=\"_blank\" rel=\"noopener noreferrer\">0px</a>.",
        "param_name": "pic_borderradius",
        "value": "",
        "dependency": [
          {
            "element": "picture",
            "value": "",
            "operator": "!="
          }
        ],
        "default_option": "person_border_radius",
        "default_subset": "",
        "option_map": ""
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
        "dependency": [
          {
            "element": "picture",
            "value": "",
            "operator": "!="
          }
        ],
        "preview": {
          "selector": ".person-image-container",
          "type": "class",
          "toggle": "hover"
        }
      },
      "background_color": {
        "type": "colorpickeralpha",
        "heading": "Background Color",
        "description": "Controls the background color.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#person_background_color\" target=\"_blank\" rel=\"noopener noreferrer\">rgba(0,0,0,0)</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-background_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"background_color\" value=\"\" data-default=\"rgba(0,0,0,0)\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "background_color",
        "value": "",
        "default": "rgba(0,0,0,0)",
        "default_option": "person_background_color",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "content_alignment": {
        "type": "radio_button_set",
        "heading": "Content Alignment",
        "description": "Choose the alignment of content.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#person_alignment\" target=\"_blank\" rel=\"noopener noreferrer\">Left</a>.",
        "param_name": "content_alignment",
        "value": {
          "": "Default",
          "left": "Left",
          "center": "Center",
          "right": "Right"
        },
        "default": "",
        "default_option": "person_alignment",
        "default_subset": "",
        "option_map": "select",
        "dependency": []
      },
      "icon_position": {
        "type": "radio_button_set",
        "heading": "Social Icons Position",
        "description": "Choose the social icon position.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#person_icon_position\" target=\"_blank\" rel=\"noopener noreferrer\">Top</a>.",
        "param_name": "icon_position",
        "value": {
          "": "Default",
          "top": "Top",
          "bottom": "Bottom"
        },
        "default": "",
        "default_option": "person_icon_position",
        "default_subset": "",
        "option_map": "select",
        "dependency": []
      },
      "social_icon_boxed": {
        "type": "radio_button_set",
        "heading": "Boxed Social Icons",
        "description": "Choose to get boxed icons.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#social_links_boxed\" target=\"_blank\" rel=\"noopener noreferrer\">No</a>.",
        "param_name": "social_icon_boxed",
        "value": {
          "": "Default",
          "yes": "Yes",
          "no": "No"
        },
        "default": "",
        "default_option": "social_links_boxed",
        "default_subset": "",
        "option_map": "yesno",
        "dependency": []
      },
      "social_icon_boxed_radius": {
        "type": "textfield",
        "heading": "Social Icon Box Radius",
        "description": "Choose the border radius of the boxed icons. In pixels (px), ex: 1px, or &quot;round&quot;.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#social_links_boxed_radius\" target=\"_blank\" rel=\"noopener noreferrer\">4px</a>.",
        "param_name": "social_icon_boxed_radius",
        "value": "",
        "dependency": [
          {
            "element": "social_icon_boxed",
            "value": "no",
            "operator": "!="
          },
          {
            "element": "social_icon_boxed",
            "value": "",
            "operator": "!="
          }
        ],
        "default_option": "social_links_boxed_radius",
        "default_subset": "",
        "option_map": ""
      },
      "social_icon_color_type": {
        "type": "radio_button_set",
        "heading": "Social Icon Color Type",
        "description": "Controls the color type of the social icons.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#social_links_color_type\" target=\"_blank\" rel=\"noopener noreferrer\">Custom Colors</a>.",
        "param_name": "social_icon_color_type",
        "value": {
          "": "Default",
          "custom": "Custom Colors",
          "brand": "Brand Colors"
        },
        "default": "",
        "default_option": "social_links_color_type",
        "default_subset": "",
        "option_map": "select",
        "dependency": []
      },
      "social_icon_colors": {
        "type": "textarea",
        "heading": "Social Icon Custom Colors",
        "description": "Specify the color of social icons. Use one for all or separate by | symbol. ex: #AA0000|#00AA00|#0000AA.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#social_links_icon_color\" target=\"_blank\" rel=\"noopener noreferrer\">#9ea0a4</a>.",
        "param_name": "social_icon_colors",
        "value": "",
        "dependency": [
          {
            "element": "social_icon_color_type",
            "value": "brand",
            "operator": "!="
          }
        ],
        "default_option": "social_links_icon_color",
        "default_subset": "",
        "option_map": ""
      },
      "social_icon_boxed_colors": {
        "type": "textarea",
        "heading": "Social Icon Custom Box Colors",
        "description": "Specify the box color of social icons. Use one for all or separate by | symbol. ex: #AA0000|#00AA00|#0000AA.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#social_links_box_color\" target=\"_blank\" rel=\"noopener noreferrer\">#f2f3f5</a>.",
        "param_name": "social_icon_boxed_colors",
        "value": "",
        "dependency": [
          {
            "element": "social_icon_boxed",
            "value": "no",
            "operator": "!="
          },
          {
            "element": "social_icon_color_type",
            "value": "brand",
            "operator": "!="
          },
          {
            "element": "social_icon_boxed",
            "value": "",
            "operator": "!="
          }
        ],
        "default_option": "social_links_box_color",
        "default_subset": "",
        "option_map": ""
      },
      "social_icon_tooltip": {
        "type": "radio_button_set",
        "heading": "Social Icon Tooltip Position",
        "description": "Choose the display position for tooltips.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#social_links_tooltip_placement\" target=\"_blank\" rel=\"noopener noreferrer\">Top</a>.",
        "param_name": "social_icon_tooltip",
        "value": {
          "": "Default",
          "top": "Top",
          "bottom": "Bottom",
          "left": "Left",
          "Right": "Right",
          "none": "None"
        },
        "default": "",
        "default_option": "social_links_tooltip_placement",
        "default_subset": "",
        "option_map": "select",
        "dependency": []
      },
      "blogger": {
        "type": "textfield",
        "heading": "Blogger Link",
        "description": "Insert your custom Blogger link.",
        "param_name": "blogger",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "deviantart": {
        "type": "textfield",
        "heading": "Deviantart Link",
        "description": "Insert your custom Deviantart link.",
        "param_name": "deviantart",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "discord": {
        "type": "textfield",
        "heading": "Discord Link",
        "description": "Insert your custom Discord link.",
        "param_name": "discord",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "digg": {
        "type": "textfield",
        "heading": "Digg Link",
        "description": "Insert your custom Digg link.",
        "param_name": "digg",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "dribbble": {
        "type": "textfield",
        "heading": "Dribbble Link",
        "description": "Insert your custom Dribbble link.",
        "param_name": "dribbble",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "dropbox": {
        "type": "textfield",
        "heading": "Dropbox Link",
        "description": "Insert your custom Dropbox link.",
        "param_name": "dropbox",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "facebook": {
        "type": "textfield",
        "heading": "Facebook Link",
        "description": "Insert your custom Facebook link.",
        "param_name": "facebook",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "flickr": {
        "type": "textfield",
        "heading": "Flickr Link",
        "description": "Insert your custom Flickr link.",
        "param_name": "flickr",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "forrst": {
        "type": "textfield",
        "heading": "Forrst Link",
        "description": "Insert your custom Forrst link.",
        "param_name": "forrst",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "instagram": {
        "type": "textfield",
        "heading": "Instagram Link",
        "description": "Insert your custom Instagram link.",
        "param_name": "instagram",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "linkedin": {
        "type": "textfield",
        "heading": "LinkedIn Link",
        "description": "Insert your custom LinkedIn link.",
        "param_name": "linkedin",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "mixer": {
        "type": "textfield",
        "heading": "Mixer Link",
        "description": "Insert your custom Mixer link.",
        "param_name": "mixer",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "myspace": {
        "type": "textfield",
        "heading": "Myspace Link",
        "description": "Insert your custom Myspace link.",
        "param_name": "myspace",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "paypal": {
        "type": "textfield",
        "heading": "PayPal Link",
        "description": "Insert your custom PayPal link.",
        "param_name": "paypal",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "pinterest": {
        "type": "textfield",
        "heading": "Pinterest Link",
        "description": "Insert your custom Pinterest link.",
        "param_name": "pinterest",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "reddit": {
        "type": "textfield",
        "heading": "Reddit Link",
        "description": "Insert your custom Reddit link.",
        "param_name": "reddit",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "rss": {
        "type": "textfield",
        "heading": "RSS Link",
        "description": "Insert your custom RSS link.",
        "param_name": "rss",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "skype": {
        "type": "textfield",
        "heading": "Skype Link",
        "description": "Insert your custom Skype link.",
        "param_name": "skype",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "soundcloud": {
        "type": "textfield",
        "heading": "SoundCloud Link",
        "description": "Insert your custom SoundCloud link.",
        "param_name": "soundcloud",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "spotify": {
        "type": "textfield",
        "heading": "Spotify Link",
        "description": "Insert your custom Spotify link.",
        "param_name": "spotify",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "tumblr": {
        "type": "textfield",
        "heading": "Tumblr Link",
        "description": "Insert your custom Tumblr link.",
        "param_name": "tumblr",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "twitch": {
        "type": "textfield",
        "heading": "Twitch Link",
        "description": "Insert your custom Twitch link.",
        "param_name": "twitch",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "twitter": {
        "type": "textfield",
        "heading": "Twitter Link",
        "description": "Insert your custom Twitter link.",
        "param_name": "twitter",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "vimeo": {
        "type": "textfield",
        "heading": "Vimeo Link",
        "description": "Insert your custom Vimeo link.",
        "param_name": "vimeo",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "vk": {
        "type": "textfield",
        "heading": "VK Link",
        "description": "Insert your custom VK link.",
        "param_name": "vk",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "whatsapp": {
        "type": "textfield",
        "heading": "WhatsApp Link",
        "description": "Insert your custom WhatsApp link.",
        "param_name": "whatsapp",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "xing": {
        "type": "textfield",
        "heading": "Xing Link",
        "description": "Insert your custom Xing link.",
        "param_name": "xing",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "yahoo": {
        "type": "textfield",
        "heading": "Yahoo Link",
        "description": "Insert your custom Yahoo link.",
        "param_name": "yahoo",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "yelp": {
        "type": "textfield",
        "heading": "Yelp Link",
        "description": "Insert your custom Yelp link.",
        "param_name": "yelp",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "youtube": {
        "type": "textfield",
        "heading": "Youtube Link",
        "description": "Insert your custom Youtube link.",
        "param_name": "youtube",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "email": {
        "type": "textfield",
        "heading": "Email Address",
        "description": "Insert an email address to display the email icon.",
        "param_name": "email",
        "value": "",
        "dynamic_data": true,
        "dependency": []
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
        "default": "no",
        "dependency": []
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
        "default": [
          "small-visibility",
          "medium-visibility",
          "large-visibility"
        ],
        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Options</a>.",
        "dependency": []
      },
      "class": {
        "type": "textfield",
        "heading": "CSS Class",
        "param_name": "class",
        "value": "",
        "description": "Add a class to the wrapping HTML element.",
        "dependency": []
      },
      "id": {
        "type": "textfield",
        "heading": "CSS ID",
        "param_name": "id",
        "value": "",
        "description": "Add an ID to the wrapping HTML element.",
        "dependency": []
      }
    },
    "remove_from_atts": []
  },
  "fusion_popover": {
    "defaults": {
      "class": "",
      "id": "",
      "animation": true,
      "content": "",
      "content_bg_color": "",
      "delay": "50",
      "placement": "top",
      "title": "",
      "title_bg_color": "",
      "bordercolor": "",
      "textcolor": "",
      "trigger": "click"
    },
    "settings_to_params": {
      "popover_placement": "placement"
    },
    "name": "Popover",
    "shortcode": "fusion_popover",
    "icon": "fusiona-uniF61C",
    "help_url": "https://theme-fusion.com/documentation/fusion-builder/elements/popover-element/",
    "params": {
      "element_content": {
        "type": "tinymce",
        "heading": "Triggering Content",
        "param_name": "element_content",
        "value": "",
        "description": "Content that will trigger the popover.",
        "dynamic_data": true,
        "dependency": []
      },
      "title": {
        "type": "textfield",
        "heading": "Popover Heading",
        "description": "Heading text of the popover.",
        "param_name": "title",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "title_bg_color": {
        "type": "colorpickeralpha",
        "heading": "Popover Heading Background Color",
        "description": "Controls the background color of the popover heading.   Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#popover_heading_bg_color\" target=\"_blank\" rel=\"noopener noreferrer\">#f9f9fb</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-title_bg_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"title_bg_color\" value=\"\" data-default=\"#f9f9fb\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "title_bg_color",
        "value": "",
        "default": "#f9f9fb",
        "group": "Design",
        "default_option": "popover_heading_bg_color",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "content": {
        "type": "raw_textarea",
        "heading": "Contents Inside Popover",
        "description": "Text to be displayed inside the popover.",
        "param_name": "content",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "content_bg_color": {
        "type": "colorpickeralpha",
        "heading": "Popover Content Background Color",
        "description": "Controls the background color of the popover content area.   Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#popover_content_bg_color\" target=\"_blank\" rel=\"noopener noreferrer\">#ffffff</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-content_bg_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"content_bg_color\" value=\"\" data-default=\"#ffffff\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "content_bg_color",
        "value": "",
        "default": "#ffffff",
        "group": "Design",
        "default_option": "popover_content_bg_color",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "bordercolor": {
        "type": "colorpickeralpha",
        "heading": "Popover Border Color",
        "description": "Controls the border color of the of the popover box.   Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#popover_border_color\" target=\"_blank\" rel=\"noopener noreferrer\">#e2e2e2</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-bordercolor\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"bordercolor\" value=\"\" data-default=\"#e2e2e2\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "bordercolor",
        "value": "",
        "default": "#e2e2e2",
        "group": "Design",
        "default_option": "popover_border_color",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "textcolor": {
        "type": "colorpickeralpha",
        "heading": "Popover Text Color",
        "description": "Controls all the text color inside the popover box.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#popover_text_color\" target=\"_blank\" rel=\"noopener noreferrer\">#4a4e57</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-textcolor\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"textcolor\" value=\"\" data-default=\"#4a4e57\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "textcolor",
        "value": "",
        "default": "#4a4e57",
        "group": "Design",
        "default_option": "popover_text_color",
        "default_subset": "",
        "option_map": "",
        "dependency": []
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
        "default": "click",
        "dependency": []
      },
      "placement": {
        "type": "radio_button_set",
        "heading": "Popover Position",
        "description": "Choose the display position of the popover. Choose default for theme option selection.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#popover_placement\" target=\"_blank\" rel=\"noopener noreferrer\">Top</a>.",
        "param_name": "placement",
        "value": {
          "default": "Default",
          "top": "Top",
          "bottom": "Bottom",
          "left": "Left",
          "right": "Right"
        },
        "default": "default",
        "default_option": "popover_placement",
        "default_subset": "",
        "option_map": "select",
        "dependency": []
      },
      "class": {
        "type": "textfield",
        "heading": "CSS Class",
        "param_name": "class",
        "value": "",
        "description": "Add a class to the wrapping HTML element.",
        "dependency": []
      },
      "id": {
        "type": "textfield",
        "heading": "CSS ID",
        "param_name": "id",
        "value": "",
        "description": "Add an ID to the wrapping HTML element.",
        "dependency": []
      }
    },
    "remove_from_atts": []
  },
  "fusion_postslider": {
    "defaults": {
      "hide_on_mobile": "small-visibility, medium-visibility, large-visibility",
      "class": "",
      "id": "",
      "category": "",
      "excerpt": "35",
      "layout": "attachments",
      "lightbox": "yes",
      "limit": "3",
      "post_id": ""
    },
    "name": "Post Slider",
    "shortcode": "fusion_postslider",
    "icon": "fusiona-layers-alt",
    "preview": "/var/www/html/wordpress_avada_624/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-post-slider-preview.php",
    "preview_id": "fusion-builder-block-module-post-slider-preview-template",
    "help_url": "https://theme-fusion.com/documentation/fusion-builder/elements/post-slider-element/",
    "params": {
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
        "default": "posts",
        "callback": {
          "function": "fusion_post_slider_query",
          "ajax": true
        },
        "dependency": []
      },
      "upload_attachments": {
        "type": "uploadattachment",
        "heading": "Attach Images to Post/Page Gallery",
        "description": "To add images to this post or page for attachments layout, navigate to &quot;Upload Files&quot; tab in media manager and upload new images.",
        "param_name": "upload_attachments",
        "value": "",
        "remove_from_atts": true,
        "dependency": [
          {
            "element": "layout",
            "value": "attachments",
            "operator": "=="
          }
        ],
        "callback": {
          "function": "fusion_post_slider_query",
          "ajax": true
        }
      },
      "excerpt": {
        "type": "textfield",
        "heading": "Excerpt Number of Words",
        "description": "Insert the number of words you want to show in the excerpt.",
        "param_name": "excerpt",
        "value": "35",
        "dependency": [
          {
            "element": "layout",
            "value": "posts-with-excerpt",
            "operator": "=="
          }
        ]
      },
      "category": {
        "type": "multiple_select",
        "heading": "Categories",
        "placeholder": "Categories",
        "description": "Select categories of posts to display or leave blank for all.",
        "param_name": "category",
        "value": {
          "uncategorized": "Uncategorized (8)"
        },
        "default": "",
        "dependency": [
          {
            "element": "layout",
            "value": "attachments",
            "operator": "!="
          }
        ],
        "callback": {
          "function": "fusion_post_slider_query",
          "ajax": true
        }
      },
      "limit": {
        "type": "textfield",
        "heading": "Number of Slides",
        "description": "Select the number of slides to display.",
        "param_name": "limit",
        "value": "3",
        "callback": {
          "function": "fusion_post_slider_query",
          "ajax": true
        },
        "dependency": []
      },
      "lightbox": {
        "type": "radio_button_set",
        "heading": "Image Lightbox",
        "description": "Only works on attachment layout. Lightbox must be enabled in Theme Options or the image will open up by in the same tab by itself.  Current value set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#status_lightbox\" target=\"_blank\" rel=\"noopener noreferrer\">Yes</a>.",
        "param_name": "lightbox",
        "value": {
          "yes": "Yes",
          "no": "No"
        },
        "default": "yes",
        "dependency": [
          {
            "element": "layout",
            "value": "attachments",
            "operator": "=="
          }
        ],
        "default_option": "status_lightbox",
        "default_subset": "",
        "option_map": "yesno"
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
        "default": [
          "small-visibility",
          "medium-visibility",
          "large-visibility"
        ],
        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Options</a>.",
        "dependency": []
      },
      "class": {
        "type": "textfield",
        "heading": "CSS Class",
        "description": "Add a class to the wrapping HTML element.",
        "param_name": "class",
        "value": "",
        "dependency": []
      },
      "id": {
        "type": "textfield",
        "heading": "CSS ID",
        "description": "Add an ID to the wrapping HTML element.",
        "param_name": "id",
        "value": "",
        "dependency": []
      }
    },
    "callback": {
      "function": "fusion_post_slider_query",
      "ajax": true
    },
    "has_ajax": {
      "layout": {
        "function": "fusion_post_slider_query",
        "action": false,
        "param_name": "layout"
      },
      "upload_attachments": {
        "function": "fusion_post_slider_query",
        "action": false,
        "param_name": "upload_attachments"
      },
      "category": {
        "function": "fusion_post_slider_query",
        "action": false,
        "param_name": "category"
      },
      "limit": {
        "function": "fusion_post_slider_query",
        "action": false,
        "param_name": "limit"
      }
    },
    "remove_from_atts": [
      "upload_attachments"
    ]
  },
  "fusion_pricing_table": {
    "defaults": {
      "hide_on_mobile": "small-visibility, medium-visibility, large-visibility",
      "class": "",
      "id": "",
      "backgroundcolor": "#ffffff",
      "background_color_hover": "#f2f3f5",
      "bordercolor": "#f2f3f5",
      "heading_color_style_1": "#212934",
      "heading_color_style_2": "#212934",
      "pricing_color": "#65bc7b",
      "body_text_color": "#4a4e57",
      "columns": "",
      "dividercolor": "#e2e2e2",
      "type": "1"
    },
    "settings_to_params": {
      "pricing_bg_color": "backgroundcolor",
      "pricing_background_color_hover": "background_color_hover",
      "pricing_border_color": "bordercolor",
      "full_boxed_pricing_box_heading_color": "heading_color_style_1",
      "sep_pricing_box_heading_color": "heading_color_style_2",
      "pricing_box_color": "pricing_color",
      "body_typography[color]": "body_text_color",
      "pricing_divider_color": "dividercolor"
    },
    "name": "Pricing Table",
    "shortcode": "fusion_pricing_table",
    "multi": "multi_element_parent",
    "element_child": "fusion_pricing_column",
    "child_ui": true,
    "icon": "fusiona-dollar",
    "preview": "/var/www/html/wordpress_avada_624/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-pricing-table-preview.php",
    "preview_id": "fusion-builder-block-module-pricing-table-preview-template",
    "custom_settings_view_name": "ModuleSettingsTableView",
    "custom_settings_view_js": "http://127.0.0.1/wordpress_avada_624/wp-content/plugins/fusion-builder/inc/templates/custom/js/fusion-pricing-table-settings.js",
    "custom_settings_template_file": "/var/www/html/wordpress_avada_624/wp-content/plugins/fusion-builder/inc/templates/custom/fusion-pricing-table-settings.php",
    "front_end_custom_settings_view_js": "http://127.0.0.1/wordpress_avada_624/wp-content/plugins/fusion-builder/inc/templates/custom/front-end/js/fusion-pricing-table-settings.js",
    "front_end_custom_settings_template_file": "/var/www/html/wordpress_avada_624/wp-content/plugins/fusion-builder/inc/templates/custom/front-end/fusion-pricing-table-settings.php",
    "on_save": "pricingTableShortcodeFilter",
    "on_change": "pricingTableShortcodeFilter",
    "admin_enqueue_js": "http://127.0.0.1/wordpress_avada_624/wp-content/plugins/fusion-builder/shortcodes/js/fusion-pricing-table.js",
    "help_url": "https://theme-fusion.com/documentation/fusion-builder/elements/pricing-table-element/",
    "params": {
      "type": {
        "type": "radio_button_set",
        "heading": "Type",
        "description": "Select the type of pricing table.",
        "param_name": "type",
        "value": {
          "1": "Style 1",
          "2": "Style 2"
        },
        "default": "1",
        "dependency": []
      },
      "backgroundcolor": {
        "type": "colorpickeralpha",
        "heading": "Background Color",
        "description": "Set pricing table background color.   Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#pricing_bg_color\" target=\"_blank\" rel=\"noopener noreferrer\">#ffffff</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-backgroundcolor\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"backgroundcolor\" value=\"\" data-default=\"#ffffff\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "backgroundcolor",
        "value": "",
        "default": "#ffffff",
        "default_option": "pricing_bg_color",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "background_color_hover": {
        "type": "colorpickeralpha",
        "heading": "Background Hover Color",
        "description": "Set pricing table background hover color.   Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#pricing_background_color_hover\" target=\"_blank\" rel=\"noopener noreferrer\">#f2f3f5</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-background_color_hover\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"background_color_hover\" value=\"\" data-default=\"#f2f3f5\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "background_color_hover",
        "value": "",
        "default": "#f2f3f5",
        "preview": {
          "selector": ".panel-wrapper",
          "type": "class",
          "toggle": "hover"
        },
        "default_option": "pricing_background_color_hover",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "bordercolor": {
        "type": "colorpickeralpha",
        "heading": "Border Color",
        "description": "Set pricing table border color.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#pricing_border_color\" target=\"_blank\" rel=\"noopener noreferrer\">#f2f3f5</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-bordercolor\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"bordercolor\" value=\"\" data-default=\"#f2f3f5\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "bordercolor",
        "value": "",
        "default": "#f2f3f5",
        "default_option": "pricing_border_color",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "dividercolor": {
        "type": "colorpickeralpha",
        "heading": "Divider Color",
        "description": "Set pricing table divider color.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#pricing_divider_color\" target=\"_blank\" rel=\"noopener noreferrer\">#e2e2e2</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-dividercolor\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"dividercolor\" value=\"\" data-default=\"#e2e2e2\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "dividercolor",
        "value": "",
        "default": "#e2e2e2",
        "default_option": "pricing_divider_color",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "heading_color_style_1": {
        "type": "colorpickeralpha",
        "heading": "Heading Color",
        "description": "Set pricing table headings color.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#full_boxed_pricing_box_heading_color\" target=\"_blank\" rel=\"noopener noreferrer\">#212934</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-heading_color_style_1\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"heading_color_style_1\" value=\"\" data-default=\"#212934\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "heading_color_style_1",
        "value": "",
        "default": "#212934",
        "dependency": [
          {
            "element": "type",
            "value": "1",
            "operator": "=="
          }
        ],
        "default_option": "full_boxed_pricing_box_heading_color",
        "default_subset": "",
        "option_map": ""
      },
      "heading_color_style_2": {
        "type": "colorpickeralpha",
        "heading": "Heading Color",
        "description": "Set pricing table headings color.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#sep_pricing_box_heading_color\" target=\"_blank\" rel=\"noopener noreferrer\">#212934</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-heading_color_style_2\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"heading_color_style_2\" value=\"\" data-default=\"#212934\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "heading_color_style_2",
        "value": "",
        "default": "#212934",
        "dependency": [
          {
            "element": "type",
            "value": "2",
            "operator": "=="
          }
        ],
        "default_option": "sep_pricing_box_heading_color",
        "default_subset": "",
        "option_map": ""
      },
      "pricing_color": {
        "type": "colorpickeralpha",
        "heading": "Pricing Text Color",
        "description": "Set pricing table price text color.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#pricing_box_color\" target=\"_blank\" rel=\"noopener noreferrer\">#65bc7b</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-pricing_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"pricing_color\" value=\"\" data-default=\"#65bc7b\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "pricing_color",
        "value": "",
        "default": "#65bc7b",
        "default_option": "pricing_box_color",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "body_text_color": {
        "type": "colorpickeralpha",
        "heading": "Body Text Color",
        "description": "Set pricing table body text color  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#body_typography\" target=\"_blank\" rel=\"noopener noreferrer\">#4a4e57</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-body_text_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"body_text_color\" value=\"\" data-default=\"#4a4e57\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "body_text_color",
        "value": "",
        "default": "#4a4e57",
        "default_option": "body_typography",
        "default_subset": "color",
        "option_map": "",
        "dependency": []
      },
      "element_content": {
        "type": "textarea",
        "heading": "Short Code",
        "description": "Pricing Table short code content.",
        "param_name": "element_content",
        "value": "[fusion_pricing_column title=\"Standard\" standout=\"no\" class=\"\" id=\"\"][fusion_pricing_price currency=\"$\" price=\"15.55\" time=\"monthly\"][/fusion_pricing_price][fusion_pricing_row]Feature 1[/fusion_pricing_row][fusion_pricing_row]Feature 2[/fusion_pricing_row][fusion_pricing_footer]Order Now[/fusion_pricing_footer][/fusion_pricing_column][fusion_pricing_column title=\"Premium\" standout=\"yes\" class=\"\" id=\"\"][fusion_pricing_price currency=\"$\" price=\"25.55\" time=\"monthly\"][/fusion_pricing_price][fusion_pricing_row]Feature 1[/fusion_pricing_row][fusion_pricing_row]Feature 2[/fusion_pricing_row][fusion_pricing_footer]Order Now[/fusion_pricing_footer][/fusion_pricing_column]",
        "hidden": true,
        "dependency": []
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
        "default": [
          "small-visibility",
          "medium-visibility",
          "large-visibility"
        ],
        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Options</a>.",
        "dependency": []
      },
      "class": {
        "type": "textfield",
        "heading": "CSS Class",
        "description": "Add a class to the wrapping HTML element.",
        "param_name": "class",
        "value": "",
        "group": "General",
        "dependency": []
      },
      "id": {
        "type": "textfield",
        "heading": "CSS ID",
        "description": "Add an ID to the wrapping HTML element.",
        "param_name": "id",
        "value": "",
        "group": "General",
        "dependency": []
      }
    },
    "remove_from_atts": []
  },
  "fusion_pricing_column": {
    "defaults": {
      "class": "fusion-pricingtable-column",
      "id": "",
      "standout": "no",
      "title": ""
    },
    "settings_to_params": [],
    "name": "Pricing Column",
    "description": "Pricing table column.",
    "shortcode": "fusion_pricing_column",
    "hide_from_builder": true,
    "allow_generator": true,
    "custom_settings_view_name": "ModuleSettingsColumnView",
    "front_end_custom_settings_view_js": "http://127.0.0.1/wordpress_avada_624/wp-content/plugins/fusion-builder/inc/templates/custom/front-end/js/fusion-pricing-column-settings.js",
    "inline_editor": true,
    "params": {
      "element_content": {
        "type": "tinymce",
        "param_name": "element_content",
        "value": "[fusion_pricing_price currency=\"$\" price=\"25.55\" time=\"monthly\"][/fusion_pricing_price][fusion_pricing_row]Feature 1[/fusion_pricing_row][fusion_pricing_row]Feature 2[/fusion_pricing_row][fusion_pricing_footer]Order Now[/fusion_pricing_footer]",
        "hidden": true,
        "dependency": []
      },
      "title": {
        "type": "textfield",
        "heading": "Column Title",
        "description": "The title for the pricing column.",
        "param_name": "title",
        "value": "Standard",
        "placeholder": true,
        "dependency": []
      },
      "standout": {
        "type": "radio_button_set",
        "heading": "Standout",
        "description": "Choose to apply standout styling to the pricing column..",
        "param_name": "standout",
        "value": {
          "yes": "Yes",
          "no": "No"
        },
        "default": "no",
        "dependency": []
      },
      "currency": {
        "type": "textfield",
        "heading": "Currency Symbol",
        "description": "Set the curreny symbol if desired.",
        "param_name": "currency",
        "value": "$",
        "callback": {
          "function": "fusionPricingTablePrice"
        },
        "dependency": []
      },
      "currency_position": {
        "type": "radio_button_set",
        "heading": "Currency Position",
        "description": "Choose to flip the icon.",
        "param_name": "currency_position",
        "value": {
          "left": "Before",
          "right": "After"
        },
        "default": "left",
        "callback": {
          "function": "fusionPricingTablePrice"
        },
        "dependency": []
      },
      "price": {
        "type": "textfield",
        "heading": "Price",
        "description": "Set the price.",
        "param_name": "price",
        "value": "15.99",
        "callback": {
          "function": "fusionPricingTablePrice"
        },
        "dependency": []
      },
      "time": {
        "type": "textfield",
        "heading": "Time Period",
        "description": "Set the period for the price.",
        "param_name": "time",
        "value": "monthly",
        "callback": {
          "function": "fusionPricingTablePrice"
        },
        "dependency": []
      },
      "feature_rows": {
        "type": "sortable_text",
        "heading": "Featured Rows",
        "description": "Organize and add content to the pricing table.",
        "param_name": "feature_rows",
        "placeholder": "Feature",
        "add_label": "Add Feature Row",
        "default": "Feature 1|Feature 2",
        "callback": {
          "function": "fusionPricingTableRows"
        },
        "dependency": []
      },
      "footer_content": {
        "type": "tinymce",
        "heading": "Footer Content",
        "description": "Enter some content for column footer.",
        "param_name": "footer_content",
        "callback": {
          "function": "fusionPricingTableFooter"
        },
        "dependency": []
      }
    },
    "remove_from_atts": []
  },
  "fusion_progress": {
    "defaults": {
      "hide_on_mobile": "small-visibility, medium-visibility, large-visibility",
      "class": "",
      "id": "",
      "animated_stripes": "no",
      "filledcolor": "#65bc7b",
      "height": "48px",
      "percentage": "70",
      "show_percentage": "yes",
      "striped": "no",
      "textcolor": "#ffffff",
      "text_position": "on_bar",
      "unfilledcolor": "#f2f3f5",
      "unit": "",
      "filledbordercolor": "#ffffff",
      "filledbordersize": "0"
    },
    "settings_to_params": {
      "progressbar_filled_color": "filledcolor",
      "progressbar_height": "height",
      "progressbar_text_color": "textcolor",
      "progressbar_text_position": "text_position",
      "progressbar_unfilled_color": "unfilledcolor",
      "progressbar_filled_border_color": "filledbordercolor",
      "progressbar_filled_border_size": "filledbordersize"
    },
    "name": "Progress Bar",
    "shortcode": "fusion_progress",
    "icon": "fusiona-tasks",
    "preview": "/var/www/html/wordpress_avada_624/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-progress-preview.php",
    "preview_id": "fusion-builder-block-module-progress-preview-template",
    "help_url": "https://theme-fusion.com/documentation/fusion-builder/elements/progress-bar-element/",
    "inline_editor": true,
    "params": {
      "dimensions": {
        "type": "dimension",
        "remove_from_atts": true,
        "heading": "Progress Bar Height",
        "description": "Insert a height for the progress bar. Enter value including any valid CSS unit, ex: 10px.",
        "param_name": "dimensions",
        "value": {
          "height": ""
        },
        "dependency": []
      },
      "text_position": {
        "type": "radio_button_set",
        "heading": "Text Position",
        "description": "Select the position of the progress bar text. Choose &quot;Default&quot; for theme option selection.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#progressbar_text_position\" target=\"_blank\" rel=\"noopener noreferrer\">On Bar</a>.",
        "param_name": "text_position",
        "value": {
          "": "Default",
          "on_bar": "On Bar",
          "above_bar": "Above Bar",
          "below_bar": "Below Bar"
        },
        "default": "",
        "default_option": "progressbar_text_position",
        "default_subset": "",
        "option_map": "select",
        "dependency": []
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
        "default": "yes",
        "dependency": []
      },
      "unit": {
        "type": "textfield",
        "heading": "Progress Bar Unit",
        "description": "Insert a unit for the progress bar. ex %.",
        "param_name": "unit",
        "value": "",
        "dependency": [
          {
            "element": "show_percentage",
            "value": "yes",
            "operator": "=="
          }
        ]
      },
      "percentage": {
        "type": "range",
        "heading": "Filled Area Percentage",
        "description": "From 1% to 100%.",
        "param_name": "percentage",
        "value": "70",
        "dependency": []
      },
      "filledcolor": {
        "type": "colorpickeralpha",
        "heading": "Filled Color",
        "description": "Controls the color of the filled in area.   Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#progressbar_filled_color\" target=\"_blank\" rel=\"noopener noreferrer\">#65bc7b</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-filledcolor\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"filledcolor\" value=\"\" data-default=\"#65bc7b\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "filledcolor",
        "value": "",
        "default": "#65bc7b",
        "default_option": "progressbar_filled_color",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "filledbordersize": {
        "type": "range",
        "heading": "Filled Border Size",
        "description": "In pixels.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#progressbar_filled_border_size\" target=\"_blank\" rel=\"noopener noreferrer\">0</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-filledbordersize\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"filledbordersize\" value=\"\" data-default=\"0\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "filledbordersize",
        "value": "",
        "min": "0",
        "max": "20",
        "step": "1",
        "default": "0",
        "default_option": "progressbar_filled_border_size",
        "default_subset": "",
        "option_map": "range",
        "dependency": []
      },
      "filledbordercolor": {
        "type": "colorpickeralpha",
        "heading": "Filled Border Color",
        "description": "Controls the border color of the filled in area.   Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#progressbar_filled_border_color\" target=\"_blank\" rel=\"noopener noreferrer\">#ffffff</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-filledbordercolor\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"filledbordercolor\" value=\"\" data-default=\"#ffffff\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "filledbordercolor",
        "value": "",
        "default": "#ffffff",
        "dependency": [
          {
            "element": "filledbordersize",
            "value": "0",
            "operator": "!="
          },
          {
            "element": "filledbordersize",
            "value": "",
            "operator": "!="
          }
        ],
        "default_option": "progressbar_filled_border_color",
        "default_subset": "",
        "option_map": ""
      },
      "unfilledcolor": {
        "type": "colorpickeralpha",
        "heading": "Unfilled Color",
        "description": "Controls the color of the unfilled in area.   Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#progressbar_unfilled_color\" target=\"_blank\" rel=\"noopener noreferrer\">#f2f3f5</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-unfilledcolor\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"unfilledcolor\" value=\"\" data-default=\"#f2f3f5\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "unfilledcolor",
        "value": "",
        "default": "#f2f3f5",
        "default_option": "progressbar_unfilled_color",
        "default_subset": "",
        "option_map": "",
        "dependency": []
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
        "default": "no",
        "dependency": []
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
        "dependency": [
          {
            "element": "striped",
            "value": "yes",
            "operator": "=="
          }
        ]
      },
      "element_content": {
        "type": "textfield",
        "heading": "Progress Bar Text",
        "description": "Text will show up on progress bar.",
        "param_name": "element_content",
        "value": "Your Content Goes Here",
        "placeholder": true,
        "dependency": []
      },
      "textcolor": {
        "type": "colorpickeralpha",
        "heading": "Text Color",
        "description": "Controls the text color.   Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#progressbar_text_color\" target=\"_blank\" rel=\"noopener noreferrer\">#ffffff</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-textcolor\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"textcolor\" value=\"\" data-default=\"#ffffff\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "textcolor",
        "value": "",
        "default": "#ffffff",
        "default_option": "progressbar_text_color",
        "default_subset": "",
        "option_map": "",
        "dependency": []
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
        "default": [
          "small-visibility",
          "medium-visibility",
          "large-visibility"
        ],
        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Options</a>.",
        "dependency": []
      },
      "class": {
        "type": "textfield",
        "heading": "CSS Class",
        "description": "Add a class to the wrapping HTML element.",
        "param_name": "class",
        "value": "",
        "group": "General",
        "dependency": []
      },
      "id": {
        "type": "textfield",
        "heading": "CSS ID",
        "description": "Add an ID to the wrapping HTML element.",
        "param_name": "id",
        "value": "",
        "group": "General",
        "dependency": []
      }
    },
    "remove_from_atts": [
      "dimensions"
    ]
  },
  "fusion_recent_posts": {
    "defaults": {
      "hide_on_mobile": "small-visibility, medium-visibility, large-visibility",
      "class": "",
      "id": "",
      "pull_by": "",
      "cat_id": "",
      "cat_slug": "",
      "tag_slug": "",
      "exclude_tags": "",
      "columns": 3,
      "content_alignment": "",
      "excerpt": "no",
      "exclude_cats": "",
      "excerpt_length": "",
      "excerpt_words": "15",
      "hover_type": "none",
      "layout": "default",
      "meta": "yes",
      "meta_author": "no",
      "meta_categories": "no",
      "meta_comments": "yes",
      "meta_date": "yes",
      "meta_tags": "no",
      "number_posts": "4",
      "offset": "",
      "picture_size": "fixed",
      "post_status": "",
      "scrolling": "no",
      "strip_html": "yes",
      "title": "yes",
      "thumbnail": "yes",
      "animation_direction": "left",
      "animation_speed": "",
      "animation_type": "",
      "animation_offset": "top-into-view"
    },
    "extras": {
      "disable_date_rich_snippet_pages": "1",
      "pagination_range_global": "1",
      "pagination_start_end_range_global": "0"
    },
    "settings_to_params": {
      "animation_offset": "animation_offset"
    },
    "settings_to_extras": {
      "disable_date_rich_snippet_pages": "disable_date_rich_snippet_pages",
      "pagination_range": "pagination_range_global",
      "pagination_start_end_range": "pagination_start_end_range_global"
    },
    "name": "Recent Posts",
    "shortcode": "fusion_recent_posts",
    "icon": "fusiona-feather",
    "preview": "/var/www/html/wordpress_avada_624/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-recent-posts-preview.php",
    "preview_id": "fusion-builder-block-module-recent-posts-preview-template",
    "help_url": "https://theme-fusion.com/documentation/fusion-builder/elements/recent-posts-element/",
    "params": {
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
        "default": "default",
        "dependency": []
      },
      "picture_size": {
        "type": "radio_button_set",
        "heading": "Picture Size",
        "description": "Fixed = width and height will be fixed.<br/>Auto = width and height will adjust to the image.<br/>",
        "param_name": "picture_size",
        "default": "fixed",
        "value": {
          "fixed": "Fixed",
          "auto": "Auto"
        },
        "dependency": [
          {
            "element": "layout",
            "value": "date-on-side",
            "operator": "!="
          },
          {
            "element": "thumbnail",
            "value": "yes",
            "operator": "=="
          }
        ]
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
        "preview": {
          "selector": ".fusion-flexslider>.slides>li>a",
          "type": "class",
          "toggle": "hover"
        },
        "dependency": [
          {
            "element": "layout",
            "value": "date-on-side",
            "operator": "!="
          },
          {
            "element": "thumbnail",
            "value": "yes",
            "operator": "=="
          }
        ]
      },
      "columns": {
        "type": "range",
        "heading": "Number of Columns",
        "description": "Select the number of columns to display.",
        "param_name": "columns",
        "value": "3",
        "min": "1",
        "max": "6",
        "step": "1",
        "dependency": []
      },
      "number_posts": {
        "type": "range",
        "heading": "Posts Per Page",
        "description": "Select number of posts per page.  Set to -1 to display all.",
        "param_name": "number_posts",
        "value": "6",
        "min": "-1",
        "max": "25",
        "step": "1",
        "callback": {
          "function": "fusion_ajax",
          "action": "get_fusion_recent_posts",
          "ajax": true
        },
        "dependency": []
      },
      "post_status": {
        "type": "multiple_select",
        "heading": "Post Status",
        "placeholder": "Post Status",
        "description": "Select the status(es) of the posts that should be included or leave blank for published only posts.",
        "param_name": "post_status",
        "value": {
          "publish": "Published",
          "draft": "Drafted",
          "future": "Scheduled",
          "private": "Private",
          "pending": "Pending"
        },
        "default": "",
        "callback": {
          "function": "fusion_ajax",
          "action": "get_fusion_recent_posts",
          "ajax": true
        },
        "dependency": []
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
        "callback": {
          "function": "fusion_ajax",
          "action": "get_fusion_recent_posts",
          "ajax": true
        },
        "dependency": []
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
        },
        "callback": {
          "function": "fusion_ajax",
          "action": "get_fusion_recent_posts",
          "ajax": true
        },
        "dependency": []
      },
      "cat_slug": {
        "type": "multiple_select",
        "heading": "Categories",
        "placeholder": "Categories",
        "description": "Select a category or leave blank for all.",
        "param_name": "cat_slug",
        "value": {
          "uncategorized": "Uncategorized (8)"
        },
        "default": "",
        "dependency": [
          {
            "element": "pull_by",
            "value": "tag",
            "operator": "!="
          }
        ],
        "callback": {
          "function": "fusion_ajax",
          "action": "get_fusion_recent_posts",
          "ajax": true
        }
      },
      "exclude_cats": {
        "type": "multiple_select",
        "heading": "Exclude Categories",
        "placeholder": "Categories",
        "description": "Select a category to exclude.",
        "param_name": "exclude_cats",
        "value": {
          "uncategorized": "Uncategorized (8)"
        },
        "default": "",
        "dependency": [
          {
            "element": "pull_by",
            "value": "tag",
            "operator": "!="
          }
        ],
        "callback": {
          "function": "fusion_ajax",
          "action": "get_fusion_recent_posts",
          "ajax": true
        }
      },
      "tag_slug": {
        "type": "multiple_select",
        "heading": "Tags",
        "placeholder": "Tags",
        "description": "Select a tag or leave blank for all.",
        "param_name": "tag_slug",
        "value": [],
        "default": "",
        "dependency": [
          {
            "element": "pull_by",
            "value": "category",
            "operator": "!="
          }
        ],
        "callback": {
          "function": "fusion_ajax",
          "action": "get_fusion_recent_posts",
          "ajax": true
        }
      },
      "exclude_tags": {
        "type": "multiple_select",
        "heading": "Exclude Tags",
        "placeholder": "Tags",
        "description": "Select a tag to exclude.",
        "param_name": "exclude_tags",
        "value": [],
        "default": "",
        "dependency": [
          {
            "element": "pull_by",
            "value": "category",
            "operator": "!="
          }
        ],
        "callback": {
          "function": "fusion_ajax",
          "action": "get_fusion_recent_posts",
          "ajax": true
        }
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
        "dependency": [
          {
            "element": "layout",
            "value": "date-on-side",
            "operator": "!="
          }
        ]
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
        "default": "yes",
        "dependency": []
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
        "default": "yes",
        "dependency": []
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
        "dependency": [
          {
            "element": "meta",
            "value": "yes",
            "operator": "=="
          }
        ]
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
        "dependency": [
          {
            "element": "meta",
            "value": "yes",
            "operator": "=="
          }
        ]
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
        "dependency": [
          {
            "element": "meta",
            "value": "yes",
            "operator": "=="
          }
        ]
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
        "dependency": [
          {
            "element": "meta",
            "value": "yes",
            "operator": "=="
          }
        ]
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
        "dependency": [
          {
            "element": "meta",
            "value": "yes",
            "operator": "=="
          }
        ]
      },
      "content_alignment": {
        "type": "radio_button_set",
        "heading": "Content Alignment",
        "description": "Select the alignment of contents.",
        "param_name": "content_alignment",
        "default": "",
        "value": {
          "": "Text Flow",
          "left": "Left",
          "center": "Center",
          "right": "Right"
        },
        "dependency": [
          {
            "element": "layout",
            "value": "default",
            "operator": "=="
          }
        ]
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
        "default": "yes",
        "dependency": []
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
        "dependency": [
          {
            "element": "excerpt",
            "value": "yes",
            "operator": "=="
          }
        ]
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
        "dependency": [
          {
            "element": "excerpt",
            "value": "yes",
            "operator": "=="
          }
        ]
      },
      "scrolling": {
        "type": "radio_button_set",
        "heading": "Pagination Type",
        "description": "Choose the type of pagination.",
        "param_name": "scrolling",
        "default": "no",
        "value": {
          "no": "No Pagination",
          "pagination": "Pagination",
          "infinite": "Infinite Scrolling",
          "load_more_button": "Load More Button"
        },
        "dependency": []
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
        "group": "Extras",
        "preview": {
          "selector": ".fusion-column",
          "type": "animation"
        },
        "dependency": []
      },
      "animation_direction": {
        "type": "radio_button_set",
        "heading": "Direction of Animation",
        "description": "Select the incoming direction for the animation.",
        "param_name": "animation_direction",
        "default": "left",
        "group": "Extras",
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          }
        ],
        "value": {
          "down": "Top",
          "right": "Right",
          "up": "Bottom",
          "left": "Left",
          "static": "Static"
        },
        "preview": {
          "selector": ".fusion-column",
          "type": "animation"
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
        "group": "Extras",
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          }
        ],
        "preview": {
          "selector": ".fusion-column",
          "type": "animation"
        }
      },
      "animation_offset": {
        "type": "select",
        "heading": "Offset of Animation",
        "description": "Controls when the animation should start.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#animation_offset\" target=\"_blank\" rel=\"noopener noreferrer\">Top Of Element Hits Bottom Of Viewport</a>.",
        "param_name": "animation_offset",
        "default": "",
        "group": "Extras",
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          }
        ],
        "value": {
          "": "Default",
          "top-into-view": "Top of element hits bottom of viewport",
          "top-mid-of-view": "Top of element hits middle of viewport",
          "bottom-in-view": "Bottom of element enters viewport"
        },
        "default_option": "animation_offset",
        "default_subset": "",
        "option_map": "select"
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
        "default": [
          "small-visibility",
          "medium-visibility",
          "large-visibility"
        ],
        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Options</a>.",
        "dependency": []
      },
      "class": {
        "type": "textfield",
        "heading": "CSS Class",
        "description": "Add a class to the wrapping HTML element.",
        "param_name": "class",
        "value": "",
        "group": "General",
        "dependency": []
      },
      "id": {
        "type": "textfield",
        "heading": "CSS ID",
        "description": "Add an ID to the wrapping HTML element.",
        "param_name": "id",
        "value": "",
        "group": "General",
        "dependency": []
      }
    },
    "callback": {
      "function": "fusion_ajax",
      "action": "get_fusion_recent_posts",
      "ajax": true
    },
    "has_ajax": {
      "number_posts": {
        "function": "fusion_ajax",
        "action": "get_fusion_recent_posts",
        "param_name": "number_posts"
      },
      "post_status": {
        "function": "fusion_ajax",
        "action": "get_fusion_recent_posts",
        "param_name": "post_status"
      },
      "offset": {
        "function": "fusion_ajax",
        "action": "get_fusion_recent_posts",
        "param_name": "offset"
      },
      "pull_by": {
        "function": "fusion_ajax",
        "action": "get_fusion_recent_posts",
        "param_name": "pull_by"
      },
      "cat_slug": {
        "function": "fusion_ajax",
        "action": "get_fusion_recent_posts",
        "param_name": "cat_slug"
      },
      "exclude_cats": {
        "function": "fusion_ajax",
        "action": "get_fusion_recent_posts",
        "param_name": "exclude_cats"
      },
      "tag_slug": {
        "function": "fusion_ajax",
        "action": "get_fusion_recent_posts",
        "param_name": "tag_slug"
      },
      "exclude_tags": {
        "function": "fusion_ajax",
        "action": "get_fusion_recent_posts",
        "param_name": "exclude_tags"
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
    "defaults": {
      "divider_type": "triangle",
      "divider_position": "center",
      "hide_on_mobile": "small-visibility, medium-visibility, large-visibility",
      "class": "",
      "id": "",
      "backgroundcolor": "#f9f9fb",
      "bordersize": "1",
      "bordercolor": "#e2e2e2",
      "divider_candy": "top",
      "icon": "",
      "icon_color": "#ffffff"
    },
    "extras": {
      "container_padding_100": {
        "top": "0px",
        "right": "30px",
        "bottom": "0px",
        "left": "30px"
      },
      "layout": "wide",
      "site_width": "1200px",
      "header_position": "top",
      "side_header_width": "280",
      "hundredp_padding": "30px"
    },
    "settings_to_params": {
      "section_sep_bg": "backgroundcolor",
      "section_sep_border_size": "bordersize",
      "section_sep_border_color": "bordercolor",
      "icon_color": "icon_color"
    },
    "settings_to_extras": {
      "container_padding_100": "container_padding_100",
      "layout": "layout",
      "site_width": "site_width",
      "header_position": "header_position",
      "side_header_width": "side_header_width",
      "hundredp_padding": "hundredp_padding"
    },
    "name": "Section Separator",
    "shortcode": "fusion_section_separator",
    "icon": "fusiona-ellipsis",
    "preview": "/var/www/html/wordpress_avada_624/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-section-separator-preview.php",
    "preview_id": "fusion-builder-block-module-section-separator-preview-template",
    "help_url": "https://theme-fusion.com/documentation/fusion-builder/elements/section-separator-element/",
    "params": {
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
          "clouds": "Clouds",
          "horizon": "Horizon",
          "waves": "Waves",
          "waves_opacity": "Waves Opacity",
          "hills": "Hills",
          "hills_opacity": "Hills Opacity"
        },
        "default": "triangle",
        "dependency": []
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
        "dependency": [
          {
            "element": "divider_type",
            "value": "triangle",
            "operator": "!="
          },
          {
            "element": "divider_type",
            "value": "rounded-split",
            "operator": "!="
          },
          {
            "element": "divider_type",
            "value": "big-half-circle",
            "operator": "!="
          },
          {
            "element": "divider_type",
            "value": "clouds",
            "operator": "!="
          },
          {
            "element": "divider_type",
            "value": "horizon",
            "operator": "!="
          },
          {
            "element": "divider_type",
            "value": "hills",
            "operator": "!="
          },
          {
            "element": "divider_type",
            "value": "hills_opacity",
            "operator": "!="
          }
        ]
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
        "dependency": [
          {
            "element": "divider_type",
            "value": "clouds",
            "operator": "!="
          }
        ]
      },
      "icon": {
        "type": "iconpicker",
        "heading": "Icon",
        "param_name": "icon",
        "value": "",
        "description": "Click an icon to select, click again to deselect.",
        "dependency": [
          {
            "element": "divider_type",
            "value": "triangle",
            "operator": "=="
          }
        ]
      },
      "icon_color": {
        "type": "colorpickeralpha",
        "heading": "Icon Color",
        "description": "  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#icon_color\" target=\"_blank\" rel=\"noopener noreferrer\">#ffffff</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-icon_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"icon_color\" value=\"\" data-default=\"#ffffff\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "icon_color",
        "value": "",
        "default": "#ffffff",
        "dependency": [
          {
            "element": "divider_type",
            "value": "triangle",
            "operator": "=="
          },
          {
            "element": "icon",
            "value": "",
            "operator": "!="
          }
        ],
        "default_option": "icon_color",
        "default_subset": "",
        "option_map": ""
      },
      "bordersize": {
        "type": "range",
        "heading": "Border",
        "description": "In pixels.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#section_sep_border_size\" target=\"_blank\" rel=\"noopener noreferrer\">1</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-bordersize\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"bordersize\" value=\"\" data-default=\"1\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "bordersize",
        "value": "",
        "min": "0",
        "max": "50",
        "step": "1",
        "default": "1",
        "dependency": [
          {
            "element": "divider_type",
            "value": "triangle",
            "operator": "=="
          }
        ],
        "default_option": "section_sep_border_size",
        "default_subset": "",
        "option_map": "range"
      },
      "bordercolor": {
        "type": "colorpickeralpha",
        "heading": "Border Color",
        "description": "Controls the border color.   Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#section_sep_border_color\" target=\"_blank\" rel=\"noopener noreferrer\">#e2e2e2</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-bordercolor\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"bordercolor\" value=\"\" data-default=\"#e2e2e2\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "bordercolor",
        "value": "",
        "default": "#e2e2e2",
        "dependency": [
          {
            "element": "divider_type",
            "value": "triangle",
            "operator": "=="
          },
          {
            "element": "bordersize",
            "value": "0",
            "operator": "!="
          }
        ],
        "default_option": "section_sep_border_color",
        "default_subset": "",
        "option_map": ""
      },
      "backgroundcolor": {
        "type": "colorpickeralpha",
        "heading": "Background Color of the Section Separator",
        "description": "Controls the background color of the section separator style.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#section_sep_bg\" target=\"_blank\" rel=\"noopener noreferrer\">#f9f9fb</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-backgroundcolor\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"backgroundcolor\" value=\"\" data-default=\"#f9f9fb\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "backgroundcolor",
        "value": "",
        "default": "#f9f9fb",
        "default_option": "section_sep_bg",
        "default_subset": "",
        "option_map": "",
        "dependency": []
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
        "default": [
          "small-visibility",
          "medium-visibility",
          "large-visibility"
        ],
        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Options</a>.",
        "dependency": []
      },
      "class": {
        "type": "textfield",
        "heading": "CSS Class",
        "description": "Add a class to the wrapping HTML element.",
        "param_name": "class",
        "value": "",
        "dependency": []
      },
      "id": {
        "type": "textfield",
        "heading": "CSS ID",
        "description": "Add an ID to the wrapping HTML element.",
        "param_name": "id",
        "value": "",
        "dependency": []
      }
    },
    "remove_from_atts": []
  },
  "fusion_separator": {
    "defaults": {
      "hide_on_mobile": "small-visibility, medium-visibility, large-visibility",
      "class": "",
      "id": "",
      "alignment": "center",
      "bottom_margin": "",
      "border_size": "1",
      "icon": "",
      "icon_size": "16",
      "icon_circle": "1",
      "icon_circle_color": "rgba(255,255,255,0)",
      "sep_color": "#e2e2e2",
      "style_type": "double",
      "top_margin": "",
      "width": "",
      "bottom": "",
      "color": "",
      "style": "",
      "top": ""
    },
    "settings_to_params": {
      "separator_border_size": "border_size",
      "separator_icon_size": "icon_size",
      "separator_circle": "icon_circle",
      "separator_circle_bg_color": "icon_circle_color",
      "sep_color": "sep_color",
      "separator_style_type": "style_type"
    },
    "name": "Separator",
    "shortcode": "fusion_separator",
    "icon": "fusiona-minus",
    "preview": "/var/www/html/wordpress_avada_624/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-separator-preview.php",
    "preview_id": "fusion-builder-block-module-separator-preview-template",
    "help_url": "https://theme-fusion.com/documentation/fusion-builder/elements/separator-element/",
    "params": {
      "style_type": {
        "type": "select",
        "heading": "Style",
        "description": "Choose the separator line style.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#separator_style_type\" target=\"_blank\" rel=\"noopener noreferrer\">Double Border Solid</a>.",
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
        "default": "default",
        "default_option": "separator_style_type",
        "default_subset": "",
        "option_map": "select",
        "dependency": []
      },
      "sep_color": {
        "type": "colorpickeralpha",
        "heading": "Separator Color",
        "description": "Controls the separator color.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#sep_color\" target=\"_blank\" rel=\"noopener noreferrer\">#e2e2e2</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-sep_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"sep_color\" value=\"\" data-default=\"#e2e2e2\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "sep_color",
        "value": "",
        "default": "#e2e2e2",
        "group": "Design",
        "default_option": "sep_color",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "dimensions": {
        "type": "dimension",
        "remove_from_atts": true,
        "heading": "Margin",
        "description": "Spacing above and below the separator. In px, em or %, e.g. 10px.",
        "param_name": "dimensions",
        "value": {
          "top_margin": "",
          "bottom_margin": ""
        },
        "group": "Design",
        "shortcode": "fusion_separator",
        "dependency": []
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
        "description": "In pixels.   Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#separator_border_size\" target=\"_blank\" rel=\"noopener noreferrer\">1</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-border_size\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"border_size\" value=\"\" data-default=\"1\">Reset to default.</a><span>Using default value.</span></span>",
        "group": "Design",
        "default_option": "separator_border_size",
        "default_subset": "",
        "option_map": "range",
        "dependency": []
      },
      "icon": {
        "type": "iconpicker",
        "heading": "Select Icon",
        "param_name": "icon",
        "value": "",
        "description": "Click an icon to select, click again to deselect.",
        "group": "Design",
        "dependency": []
      },
      "icon_size": {
        "type": "range",
        "heading": "Icon Size",
        "param_name": "icon_size",
        "value": "",
        "min": "1",
        "max": "100",
        "step": "1",
        "default": "16",
        "description": "In pixels.   Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#separator_icon_size\" target=\"_blank\" rel=\"noopener noreferrer\">16</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-icon_size\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"icon_size\" value=\"\" data-default=\"16\">Reset to default.</a><span>Using default value.</span></span>",
        "group": "Design",
        "dependency": [
          {
            "element": "icon",
            "value": "",
            "operator": "!="
          }
        ],
        "default_option": "separator_icon_size",
        "default_subset": "",
        "option_map": "range"
      },
      "icon_circle": {
        "type": "radio_button_set",
        "heading": "Circled Icon",
        "description": "Choose to have a circle in separator color around the icon.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#separator_circle\" target=\"_blank\" rel=\"noopener noreferrer\">Yes</a>.",
        "param_name": "icon_circle",
        "value": {
          "": "Default",
          "yes": "Yes",
          "no": "No"
        },
        "default": "",
        "group": "Design",
        "dependency": [
          {
            "element": "icon",
            "value": "",
            "operator": "!="
          }
        ],
        "default_option": "separator_circle",
        "default_subset": "",
        "option_map": "yesno"
      },
      "icon_circle_color": {
        "type": "colorpickeralpha",
        "heading": "Circle Color",
        "description": "Controls the background color of the circle around the icon.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#separator_circle_bg_color\" target=\"_blank\" rel=\"noopener noreferrer\">rgba(255,255,255,0)</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-icon_circle_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"icon_circle_color\" value=\"\" data-default=\"rgba(255,255,255,0)\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "icon_circle_color",
        "value": "",
        "default": "rgba(255,255,255,0)",
        "group": "Design",
        "dependency": [
          {
            "element": "icon",
            "value": "",
            "operator": "!="
          },
          {
            "element": "icon_circle",
            "value": "no",
            "operator": "!="
          }
        ],
        "default_option": "separator_circle_bg_color",
        "default_subset": "",
        "option_map": ""
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
        "group": "Design",
        "dependency": []
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
        "group": "Design",
        "dependency": []
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
        "default": [
          "small-visibility",
          "medium-visibility",
          "large-visibility"
        ],
        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Options</a>.",
        "dependency": []
      },
      "class": {
        "type": "textfield",
        "heading": "CSS Class",
        "param_name": "class",
        "value": "",
        "description": "Add a class to the wrapping HTML element.",
        "dependency": []
      },
      "id": {
        "type": "textfield",
        "heading": "CSS ID",
        "param_name": "id",
        "value": "",
        "description": "Add an ID to the wrapping HTML element.",
        "dependency": []
      }
    },
    "remove_from_atts": [
      "dimensions",
      "dimensions_width"
    ]
  },
  "fusion_sharing": {
    "defaults": {
      "hide_on_mobile": "small-visibility, medium-visibility, large-visibility",
      "class": "",
      "id": "",
      "backgroundcolor": "#f9f9fb",
      "description": "",
      "color_type": "custom",
      "icon_colors": "#9ea0a4",
      "box_colors": "#e8e8e8",
      "icons_boxed": "no",
      "icons_boxed_radius": "4px",
      "link": false,
      "pinterest_image": "",
      "pinterest_image_id": "",
      "social_networks": "facebook|twitter|linkedin|reddit|whatsapp|tumblr|pinterest|vk|mail",
      "tagline": "",
      "tagline_color": "#212934",
      "title": "",
      "tooltip_placement": "top"
    },
    "extras": {
      "linktarget": "1"
    },
    "settings_to_params": {
      "social_bg_color": "backgroundcolor",
      "sharing_social_links_color_type": "color_type",
      "sharing_social_links_boxed": {
        "param": "icons_boxed",
        "callback": "toYes"
      },
      "sharing_social_links_boxed_radius": "icons_boxed_radius",
      "sharing_box_tagline_text_color": "tagline_color",
      "sharing_social_links_tooltip_placement": "tooltip_placement",
      "sharing_social_links_box_color": "box_colors",
      "sharing_social_links_icon_color": "icon_colors",
      "sharing_email": {
        "param": "social_networks",
        "callback": "createSocialNetworks"
      },
      "sharing_vk": {
        "param": "social_networks",
        "callback": "createSocialNetworks"
      },
      "sharing_pinterest": {
        "param": "social_networks",
        "callback": "createSocialNetworks"
      },
      "sharing_tumblr": {
        "param": "social_networks",
        "callback": "createSocialNetworks"
      },
      "sharing_whatsapp": {
        "param": "social_networks",
        "callback": "createSocialNetworks"
      },
      "sharing_reddit": {
        "param": "social_networks",
        "callback": "createSocialNetworks"
      },
      "sharing_linkedin": {
        "param": "social_networks",
        "callback": "createSocialNetworks"
      },
      "sharing_twitter": {
        "param": "social_networks",
        "callback": "createSocialNetworks"
      },
      "sharing_facebook": {
        "param": "social_networks",
        "callback": "createSocialNetworks"
      }
    },
    "settings_to_extras": {
      "social_icons_new": "linktarget"
    },
    "name": "Sharing Box",
    "shortcode": "fusion_sharing",
    "icon": "fusiona-share2",
    "preview": "/var/www/html/wordpress_avada_624/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-sharingbox-preview.php",
    "preview_id": "fusion-builder-block-module-sharingbox-preview-template",
    "help_url": "https://theme-fusion.com/documentation/fusion-builder/elements/sharing-box-element/",
    "inline_editor": true,
    "params": {
      "tagline": {
        "type": "textfield",
        "heading": "Tagline",
        "description": "The title tagline that will display.",
        "param_name": "tagline",
        "value": "Share This Story, Choose Your Platform!",
        "dependency": []
      },
      "tagline_color": {
        "type": "colorpickeralpha",
        "heading": "Tagline Color",
        "description": "Controls the text color.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#sharing_box_tagline_text_color\" target=\"_blank\" rel=\"noopener noreferrer\">#212934</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-tagline_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"tagline_color\" value=\"\" data-default=\"#212934\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "tagline_color",
        "value": "",
        "default": "#212934",
        "dependency": [
          {
            "element": "tagline",
            "value": "",
            "operator": "!="
          }
        ],
        "default_option": "sharing_box_tagline_text_color",
        "default_subset": "",
        "option_map": ""
      },
      "backgroundcolor": {
        "type": "colorpickeralpha",
        "heading": "Background Color",
        "description": "Controls the background color.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#social_bg_color\" target=\"_blank\" rel=\"noopener noreferrer\">#f9f9fb</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-backgroundcolor\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"backgroundcolor\" value=\"\" data-default=\"#f9f9fb\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "backgroundcolor",
        "value": "",
        "default": "#f9f9fb",
        "default_option": "social_bg_color",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "title": {
        "type": "textfield",
        "heading": "Title",
        "description": "The post title that will be shared. Leave empty to use title of current post. <strong>Note:</strong> Some of the social networks will ignore this option and will instead auto pull the post title based on the shared link.",
        "param_name": "title",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "link": {
        "type": "link_selector",
        "heading": "Link to Share",
        "description": "The link that will be shared. Leave empty to use URL of current post.",
        "param_name": "link",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "description": {
        "type": "raw_textarea",
        "heading": "Description",
        "description": "The description that will be shared. Leave empty to use excerpt of current post. <strong>Note:</strong> Some of the social networks do not offer description in their sharing options and others might ignore it and will instead auto pull the post excerpt based on the shared link.",
        "param_name": "description",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "icons_boxed": {
        "type": "radio_button_set",
        "heading": "Boxed Social Icons",
        "description": "Choose the color type of social icons. Brand colors will use the exact brand color of each network for the icons or boxes.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#sharing_social_links_boxed\" target=\"_blank\" rel=\"noopener noreferrer\">No</a>.",
        "param_name": "icons_boxed",
        "value": {
          "": "Default",
          "yes": "Yes",
          "no": "No"
        },
        "default": "",
        "default_option": "sharing_social_links_boxed",
        "default_subset": "",
        "option_map": "yesno",
        "dependency": []
      },
      "icons_boxed_radius": {
        "type": "textfield",
        "heading": "Social Icon Box Radius",
        "description": "Choose the radius of the boxed icons. In pixels (px), ex: 1px, or &quot;round&quot;.   Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#sharing_social_links_boxed_radius\" target=\"_blank\" rel=\"noopener noreferrer\">4px</a>.",
        "param_name": "icons_boxed_radius",
        "value": "",
        "dependency": [
          {
            "element": "icons_boxed",
            "value": "no",
            "operator": "!="
          },
          {
            "element": "icons_boxed",
            "value": "",
            "operator": "!="
          },
          {
            "element": "icons_boxed",
            "value": "",
            "operator": "!="
          }
        ],
        "default_option": "sharing_social_links_boxed_radius",
        "default_subset": "",
        "option_map": ""
      },
      "color_type": {
        "type": "radio_button_set",
        "heading": "Social Icons Color Type",
        "description": "Choose to get a boxed icons. Choose default for theme option selection.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#sharing_social_links_color_type\" target=\"_blank\" rel=\"noopener noreferrer\">Custom Colors</a>.",
        "param_name": "color_type",
        "value": {
          "": "Default",
          "custom": "Custom Colors",
          "brand": "Brand Colors"
        },
        "default": "",
        "default_option": "sharing_social_links_color_type",
        "default_subset": "",
        "option_map": "select",
        "dependency": []
      },
      "icon_colors": {
        "type": "textarea",
        "heading": "Social Icon Custom Colors",
        "description": "Specify the color of social icons.   Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#sharing_social_links_icon_color\" target=\"_blank\" rel=\"noopener noreferrer\">#9ea0a4</a>.",
        "param_name": "icon_colors",
        "value": "",
        "dependency": [
          {
            "element": "color_type",
            "value": "brand",
            "operator": "!="
          }
        ],
        "default_option": "sharing_social_links_icon_color",
        "default_subset": "",
        "option_map": ""
      },
      "box_colors": {
        "type": "textarea",
        "heading": "Social Icon Custom Box Colors",
        "description": "Specify the box color of social icons.   Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#sharing_social_links_box_color\" target=\"_blank\" rel=\"noopener noreferrer\">#e8e8e8</a>.",
        "param_name": "box_colors",
        "value": "",
        "dependency": [
          {
            "element": "icons_boxed",
            "value": "no",
            "operator": "!="
          },
          {
            "element": "color_type",
            "value": "brand",
            "operator": "!="
          },
          {
            "element": "icons_boxed",
            "value": "",
            "operator": "!="
          },
          {
            "element": "icons_boxed",
            "value": "",
            "operator": "!="
          }
        ],
        "default_option": "sharing_social_links_box_color",
        "default_subset": "",
        "option_map": ""
      },
      "tooltip_placement": {
        "type": "radio_button_set",
        "heading": "Social Icon Tooltip Position",
        "description": "Choose the display position for tooltips. Choose default for theme option selection.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#sharing_social_links_tooltip_placement\" target=\"_blank\" rel=\"noopener noreferrer\">Top</a>.",
        "param_name": "tooltip_placement",
        "value": {
          "": "Default",
          "top": "Top",
          "bottom": "Bottom",
          "left": "Left",
          "Right": "Right"
        },
        "default": "",
        "default_option": "sharing_social_links_tooltip_placement",
        "default_subset": "",
        "option_map": "select",
        "dependency": []
      },
      "pinterest_image": {
        "type": "upload",
        "heading": "Pinterest Sharing Image",
        "description": "Choose an image to share on pinterest.",
        "param_name": "pinterest_image",
        "value": "",
        "dependency": []
      },
      "pinterest_image_id": {
        "type": "textfield",
        "heading": "Pinterest Image ID",
        "description": "Pinterest Image ID from Media Library.",
        "param_name": "pinterest_image_id",
        "value": "",
        "hidden": true,
        "dependency": []
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
        "default": [
          "small-visibility",
          "medium-visibility",
          "large-visibility"
        ],
        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Options</a>.",
        "dependency": []
      },
      "class": {
        "type": "textfield",
        "heading": "CSS Class",
        "param_name": "class",
        "value": "",
        "description": "Add a class to the wrapping HTML element.",
        "dependency": []
      },
      "id": {
        "type": "textfield",
        "heading": "CSS ID",
        "param_name": "id",
        "value": "",
        "description": "Add an ID to the wrapping HTML element.",
        "dependency": []
      }
    },
    "remove_from_atts": []
  },
  "fusion_slider": {
    "defaults": {
      "hide_on_mobile": "small-visibility, medium-visibility, large-visibility",
      "class": "",
      "id": "",
      "height": "100%",
      "width": "100%",
      "hover_type": "none",
      "alignment": "",
      "margin_bottom": "",
      "margin_left": "",
      "margin_right": "",
      "margin_top": "",
      "slideshow_autoplay": "1",
      "slideshow_smooth_height": "0",
      "slideshow_speed": "7000"
    },
    "settings_to_params": {
      "slideshow_autoplay": "slideshow_autoplay",
      "slideshow_smooth_height": "slideshow_smooth_height",
      "slideshow_speed": "slideshow_speed"
    },
    "name": "Slider",
    "shortcode": "fusion_slider",
    "multi": "multi_element_parent",
    "element_child": "fusion_slide",
    "icon": "fusiona-uniF61C",
    "preview": "/var/www/html/wordpress_avada_624/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-slider-preview.php",
    "preview_id": "fusion-builder-block-module-slider-preview-template",
    "child_ui": true,
    "help_url": "https://theme-fusion.com/documentation/fusion-builder/elements/slider-element/",
    "sortable": false,
    "params": {
      "element_content": {
        "type": "tinymce",
        "heading": "Content",
        "description": "Enter some content for this slider.",
        "param_name": "element_content",
        "value": "[fusion_slide type=\"image\" link=\"\" linktarget=\"_self\" lightbox=\"no\" /]",
        "dependency": []
      },
      "multiple_upload": {
        "type": "multiple_upload",
        "heading": "Bulk Image Upload",
        "description": "This option allows you to select multiple images at once and they will populate into individual items. It saves time instead of adding one image at a time.",
        "param_name": "multiple_upload",
        "child_params": {
          "image": "url",
          "image_id": "id"
        },
        "remove_from_atts": true,
        "dependency": []
      },
      "margin": {
        "type": "dimension",
        "remove_from_atts": true,
        "heading": "Margin",
        "description": "Enter values including any valid CSS unit, ex: 4%.",
        "param_name": "margin",
        "value": {
          "margin_top": "",
          "margin_right": "",
          "margin_bottom": "",
          "margin_left": ""
        },
        "shortcode": "fusion_slider",
        "dependency": []
      },
      "alignment": {
        "type": "radio_button_set",
        "heading": "Alignment",
        "description": "Select the slider&#039;s alignment.",
        "param_name": "alignment",
        "default": "",
        "value": {
          "": "Text Flow",
          "left": "Left",
          "center": "Center",
          "right": "Right"
        },
        "dependency": []
      },
      "slideshow_autoplay": {
        "heading": "Autoplay",
        "description": "Turn on to autoplay the slideshows.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#slideshow_autoplay\" target=\"_blank\" rel=\"noopener noreferrer\">Yes</a>.",
        "param_name": "slideshow_autoplay",
        "default": "",
        "type": "radio_button_set",
        "value": {
          "": "Default",
          "yes": "Yes",
          "no": "No"
        },
        "default_option": "slideshow_autoplay",
        "default_subset": "",
        "option_map": "yesno",
        "dependency": []
      },
      "slideshow_smooth_height": {
        "heading": "Smooth Height",
        "description": "Turn on to enable smooth height on slideshows when using images with different heights.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#slideshow_smooth_height\" target=\"_blank\" rel=\"noopener noreferrer\">No</a>.",
        "param_name": "slideshow_smooth_height",
        "default": "",
        "type": "radio_button_set",
        "value": {
          "": "Default",
          "yes": "Yes",
          "no": "No"
        },
        "default_option": "slideshow_smooth_height",
        "default_subset": "",
        "option_map": "yesno",
        "dependency": []
      },
      "slideshow_speed": {
        "heading": "Slideshow Speed",
        "description": "Controls the speed of slideshows for the slider element. ex: 1000 = 1 second.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#slideshow_speed\" target=\"_blank\" rel=\"noopener noreferrer\">7000</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-slideshow_speed\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"slideshow_speed\" value=\"\" data-default=\"7000\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "slideshow_speed",
        "value": "",
        "default": "7000",
        "type": "range",
        "min": "100",
        "max": "20000",
        "step": "50",
        "default_option": "slideshow_speed",
        "default_subset": "",
        "option_map": "range",
        "dependency": []
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
        "default": "none",
        "preview": {
          "selector": ".fusion-image-hover-element",
          "type": "class",
          "toggle": "hover"
        },
        "dependency": []
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
        },
        "dependency": []
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
        "default": [
          "small-visibility",
          "medium-visibility",
          "large-visibility"
        ],
        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Options</a>.",
        "dependency": []
      },
      "class": {
        "type": "textfield",
        "heading": "CSS Class",
        "description": "Add a class to the wrapping HTML element.",
        "param_name": "class",
        "value": "",
        "dependency": []
      },
      "id": {
        "type": "textfield",
        "heading": "CSS ID",
        "description": "Add an ID to the wrapping HTML element.",
        "param_name": "id",
        "value": "",
        "dependency": []
      }
    },
    "remove_from_atts": [
      "multiple_upload",
      "margin",
      "dimensions"
    ]
  },
  "fusion_slide": {
    "defaults": {
      "image_id": "",
      "lightbox": "no",
      "link": null,
      "linktarget": "_self",
      "type": "image"
    },
    "settings_to_params": {
      "slideshow_autoplay": "slideshow_autoplay",
      "slideshow_smooth_height": "slideshow_smooth_height",
      "slideshow_speed": "slideshow_speed"
    },
    "name": "Slide",
    "description": "Enter some content for this textblock.",
    "shortcode": "fusion_slide",
    "option_dependency": "type",
    "hide_from_builder": true,
    "params": {
      "element_content": {
        "type": "textarea",
        "heading": "Content",
        "description": "Content",
        "param_name": "element_content",
        "value": "",
        "hidden": true,
        "dependency": []
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
        "default": "image",
        "dependency": []
      },
      "image": {
        "type": "upload",
        "heading": "Image",
        "description": "Upload an image to display.",
        "param_name": "image",
        "remove_from_atts": true,
        "value": "",
        "dependency": [
          {
            "element": "type",
            "value": "image",
            "operator": "=="
          }
        ]
      },
      "image_id": {
        "type": "textfield",
        "heading": "Image ID",
        "description": "Image ID from Media Library.",
        "param_name": "image_id",
        "value": "",
        "hidden": true,
        "dependency": []
      },
      "video": {
        "type": "textarea",
        "heading": "Video Element or Video Embed Code",
        "description": "Click the Youtube or Vimeo Element button below then enter your unique video ID, or copy and paste your video embed code. <p class=\"insert-slider-video-wrap\"><a href=\"#\" class=\"insert-slider-video\" data-type=\"fusion_youtube\">Add YouTube Video</a></p><p class=\"insert-slider-video-wrap\"><a href=\"#\" class=\"insert-slider-video\" data-type=\"fusion_vimeo\">Add Vimeo Video</a></p>.",
        "param_name": "video",
        "remove_from_atts": true,
        "value": "",
        "dependency": [
          {
            "element": "type",
            "value": "video",
            "operator": "=="
          }
        ]
      },
      "link": {
        "type": "textfield",
        "heading": "Full Image Link or External Link",
        "description": "Add the url of where the image will link to. If lightbox option is enabled, you have to add the full image link to show it in the lightbox.",
        "param_name": "link",
        "value": "",
        "dependency": [
          {
            "element": "type",
            "value": "image",
            "operator": "=="
          }
        ]
      },
      "lightbox": {
        "type": "radio_button_set",
        "heading": "Lighbox",
        "description": "Show image in lightbox. Lightbox must be enabled in Theme Options or the image will open up in the same tab by itself.  Current value set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#status_lightbox\" target=\"_blank\" rel=\"noopener noreferrer\">Yes</a>.",
        "param_name": "lightbox",
        "value": {
          "yes": "Yes",
          "no": "No"
        },
        "default": "no",
        "dependency": [
          {
            "element": "type",
            "value": "image",
            "operator": "=="
          },
          {
            "element": "link",
            "value": "",
            "operator": "!="
          }
        ],
        "default_option": "status_lightbox",
        "default_subset": "",
        "option_map": "yesno"
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
        "dependency": [
          {
            "element": "type",
            "value": "image",
            "operator": "=="
          },
          {
            "element": "link",
            "value": "",
            "operator": "!="
          },
          {
            "element": "lightbox",
            "value": "no",
            "operator": "=="
          }
        ]
      }
    },
    "tag_name": "li",
    "remove_from_atts": [
      "image",
      "video"
    ]
  },
  "fusion_social_links": {
    "defaults": {
      "hide_on_mobile": "small-visibility, medium-visibility, large-visibility",
      "class": "",
      "id": "",
      "icons_boxed": "0",
      "icons_boxed_radius": "4px",
      "color_type": "custom",
      "icon_colors": "#9ea0a4",
      "box_colors": "#f2f3f5",
      "icon_order": "",
      "show_custom": "no",
      "alignment": "",
      "tooltip_placement": "top",
      "facebook": "",
      "twitch": "",
      "twitter": "",
      "instagram": "",
      "linkedin": "",
      "dribbble": "",
      "rss": "",
      "youtube": "",
      "pinterest": "",
      "flickr": "",
      "vimeo": "",
      "tumblr": "",
      "discord": "",
      "digg": "",
      "blogger": "",
      "skype": "",
      "mixer": "",
      "myspace": "",
      "deviantart": "",
      "yahoo": "",
      "reddit": "",
      "forrst": "",
      "paypal": "",
      "dropbox": "",
      "soundcloud": "",
      "vk": "",
      "whatsapp": "",
      "xing": "",
      "yelp": "",
      "spotify": "",
      "email": ""
    },
    "extras": {
      "linktarget": "1",
      "social_links_box_color": "#f2f3f5",
      "social_links_icon_color": "#9ea0a4",
      "social_media_icons": {
        "fusionredux_repeater_data": [
          {
            "title": ""
          },
          {
            "title": ""
          },
          {
            "title": ""
          },
          {
            "title": ""
          }
        ],
        "icon": [
          "facebook",
          "twitter",
          "instagram",
          "pinterest"
        ],
        "url": [
          "#",
          "#",
          "#",
          "#"
        ],
        "custom_title": [
          "",
          "",
          "",
          ""
        ],
        "custom_source": [
          {
            "url": "",
            "id": "",
            "height": "",
            "width": "",
            "thumbnail": ""
          },
          {
            "url": "",
            "id": "",
            "height": "",
            "width": "",
            "thumbnail": ""
          },
          {
            "url": "",
            "id": "",
            "height": "",
            "width": "",
            "thumbnail": ""
          },
          {
            "url": "",
            "id": "",
            "height": "",
            "width": "",
            "thumbnail": ""
          }
        ]
      }
    },
    "settings_to_params": {
      "social_links_boxed": {
        "param": "icons_boxed",
        "callback": "toYes"
      },
      "social_links_boxed_radius": "icons_boxed_radius",
      "social_links_color_type": "color_type",
      "social_links_icon_color": "icon_colors",
      "social_links_box_color": "box_colors",
      "social_links_tooltip_placement": {
        "param": "tooltip_placement",
        "callback": "toLowerCase"
      }
    },
    "settings_to_extras": {
      "social_icons_new": "linktarget",
      "social_links_box_color": "social_links_box_color",
      "social_links_icon_color": "social_links_icon_color",
      "social_media_icons": "social_media_icons"
    },
    "name": "Social Links",
    "shortcode": "fusion_social_links",
    "icon": "fusiona-link",
    "help_url": "https://theme-fusion.com/documentation/fusion-builder/elements/social-links-element/",
    "params": {
      "icons_boxed": {
        "type": "radio_button_set",
        "heading": "Boxed Social Icons",
        "description": "Choose to get boxed icons.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#social_links_boxed\" target=\"_blank\" rel=\"noopener noreferrer\">No</a>.",
        "param_name": "icons_boxed",
        "value": {
          "": "Default",
          "yes": "Yes",
          "no": "No"
        },
        "default": "",
        "default_option": "social_links_boxed",
        "default_subset": "",
        "option_map": "yesno",
        "dependency": []
      },
      "icons_boxed_radius": {
        "type": "textfield",
        "heading": "Social Icon Box Radius",
        "description": "Choose the border radius of the boxed icons. In pixels (px), ex: 1px, or &quot;round&quot;.   Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#social_links_boxed_radius\" target=\"_blank\" rel=\"noopener noreferrer\">4px</a>.",
        "param_name": "icons_boxed_radius",
        "value": "",
        "dependency": [
          {
            "element": "icons_boxed",
            "value": "no",
            "operator": "!="
          },
          {
            "element": "icons_boxed",
            "value": "",
            "operator": "!="
          }
        ],
        "default_option": "social_links_boxed_radius",
        "default_subset": "",
        "option_map": ""
      },
      "color_type": {
        "type": "radio_button_set",
        "heading": "Social Icons Color Type",
        "description": "Choose the color type of social icons. Brand colors will use the exact brand color of each network for the icons or boxes.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#social_links_color_type\" target=\"_blank\" rel=\"noopener noreferrer\">Custom Colors</a>.",
        "param_name": "color_type",
        "value": {
          "": "Default",
          "custom": "Custom Colors",
          "brand": "Brand Colors"
        },
        "default": "",
        "default_option": "social_links_color_type",
        "default_subset": "",
        "option_map": "select",
        "dependency": []
      },
      "icon_colors": {
        "type": "textarea",
        "heading": "Social Icon Custom Colors",
        "description": "Specify the color of social icons.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#social_links_icon_color\" target=\"_blank\" rel=\"noopener noreferrer\">#9ea0a4</a>.",
        "param_name": "icon_colors",
        "value": "",
        "dependency": [
          {
            "element": "color_type",
            "value": "brand",
            "operator": "!="
          }
        ],
        "default_option": "social_links_icon_color",
        "default_subset": "",
        "option_map": ""
      },
      "box_colors": {
        "type": "textarea",
        "heading": "Social Icon Custom Box Colors",
        "description": "Specify the box color of social icons.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#social_links_box_color\" target=\"_blank\" rel=\"noopener noreferrer\">#f2f3f5</a>.",
        "param_name": "box_colors",
        "value": "",
        "dependency": [
          {
            "element": "icons_boxed",
            "value": "no",
            "operator": "!="
          },
          {
            "element": "color_type",
            "value": "brand",
            "operator": "!="
          },
          {
            "element": "icons_boxed",
            "value": "",
            "operator": "!="
          }
        ],
        "default_option": "social_links_box_color",
        "default_subset": "",
        "option_map": ""
      },
      "tooltip_placement": {
        "type": "radio_button_set",
        "heading": "Social Icon Tooltip Position",
        "description": "Choose the display position for tooltips.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#social_links_tooltip_placement\" target=\"_blank\" rel=\"noopener noreferrer\">Top</a>.",
        "param_name": "tooltip_placement",
        "value": {
          "": "Default",
          "top": "Top",
          "bottom": "Bottom",
          "left": "Left",
          "Right": "Right"
        },
        "default": "",
        "default_option": "social_links_tooltip_placement",
        "default_subset": "",
        "option_map": "select",
        "dependency": []
      },
      "blogger": {
        "type": "textfield",
        "heading": "Blogger Link",
        "description": "Insert your custom Blogger link.",
        "param_name": "blogger",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "deviantart": {
        "type": "textfield",
        "heading": "Deviantart Link",
        "description": "Insert your custom Deviantart link.",
        "param_name": "deviantart",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "discord": {
        "type": "textfield",
        "heading": "Discord Link",
        "description": "Insert your custom Discord link.",
        "param_name": "discord",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "digg": {
        "type": "textfield",
        "heading": "Digg Link",
        "description": "Insert your custom Digg link.",
        "param_name": "digg",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "dribbble": {
        "type": "textfield",
        "heading": "Dribbble Link",
        "description": "Insert your custom Dribbble link.",
        "param_name": "dribbble",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "dropbox": {
        "type": "textfield",
        "heading": "Dropbox Link",
        "description": "Insert your custom Dropbox link.",
        "param_name": "dropbox",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "facebook": {
        "type": "textfield",
        "heading": "Facebook Link",
        "description": "Insert your custom Facebook link.",
        "param_name": "facebook",
        "value": "#",
        "dynamic_data": true,
        "dependency": []
      },
      "flickr": {
        "type": "textfield",
        "heading": "Flickr Link",
        "description": "Insert your custom Flickr link.",
        "param_name": "flickr",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "forrst": {
        "type": "textfield",
        "heading": "Forrst Link",
        "description": "Insert your custom Forrst link.",
        "param_name": "forrst",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "instagram": {
        "type": "textfield",
        "heading": "Instagram Link",
        "description": "Insert your custom Instagram link.",
        "param_name": "instagram",
        "value": "#",
        "dynamic_data": true,
        "dependency": []
      },
      "linkedin": {
        "type": "textfield",
        "heading": "LinkedIn Link",
        "description": "Insert your custom LinkedIn link.",
        "param_name": "linkedin",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "mixer": {
        "type": "textfield",
        "heading": "Mixer Link",
        "description": "Insert your custom Mixer link.",
        "param_name": "mixer",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "myspace": {
        "type": "textfield",
        "heading": "Myspace Link",
        "description": "Insert your custom Myspace link.",
        "param_name": "myspace",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "paypal": {
        "type": "textfield",
        "heading": "PayPal Link",
        "description": "Insert your custom PayPal link.",
        "param_name": "paypal",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "pinterest": {
        "type": "textfield",
        "heading": "Pinterest Link",
        "description": "Insert your custom Pinterest link.",
        "param_name": "pinterest",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "reddit": {
        "type": "textfield",
        "heading": "Reddit Link",
        "description": "Insert your custom Reddit link.",
        "param_name": "reddit",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "rss": {
        "type": "textfield",
        "heading": "RSS Link",
        "description": "Insert your custom RSS link.",
        "param_name": "rss",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "skype": {
        "type": "textfield",
        "heading": "Skype Link",
        "description": "Insert your custom Skype link.",
        "param_name": "skype",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "soundcloud": {
        "type": "textfield",
        "heading": "SoundCloud Link",
        "description": "Insert your custom SoundCloud link.",
        "param_name": "soundcloud",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "spotify": {
        "type": "textfield",
        "heading": "Spotify Link",
        "description": "Insert your custom Spotify link.",
        "param_name": "spotify",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "tumblr": {
        "type": "textfield",
        "heading": "Tumblr Link",
        "description": "Insert your custom Tumblr link.",
        "param_name": "tumblr",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "twitch": {
        "type": "textfield",
        "heading": "Twitch Link",
        "description": "Insert your custom Twitch link.",
        "param_name": "twitch",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "twitter": {
        "type": "textfield",
        "heading": "Twitter Link",
        "description": "Insert your custom Twitter link.",
        "param_name": "twitter",
        "value": "#",
        "dynamic_data": true,
        "dependency": []
      },
      "vimeo": {
        "type": "textfield",
        "heading": "Vimeo Link",
        "description": "Insert your custom Vimeo link.",
        "param_name": "vimeo",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "vk": {
        "type": "textfield",
        "heading": "VK Link",
        "description": "Insert your custom VK link.",
        "param_name": "vk",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "whatsapp": {
        "type": "textfield",
        "heading": "WhatsApp Link",
        "description": "Insert your custom WhatsApp link.",
        "param_name": "whatsapp",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "xing": {
        "type": "textfield",
        "heading": "Xing Link",
        "description": "Insert your custom Xing link.",
        "param_name": "xing",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "yahoo": {
        "type": "textfield",
        "heading": "Yahoo Link",
        "description": "Insert your custom Yahoo link.",
        "param_name": "yahoo",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "yelp": {
        "type": "textfield",
        "heading": "Yelp Link",
        "description": "Insert your custom Yelp link.",
        "param_name": "yelp",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "youtube": {
        "type": "textfield",
        "heading": "Youtube Link",
        "description": "Insert your custom Youtube link.",
        "param_name": "youtube",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "email": {
        "type": "textfield",
        "heading": "Email Address",
        "description": "Insert an email address to display the email icon.",
        "param_name": "email",
        "value": "",
        "dynamic_data": true,
        "dependency": []
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
        "default": "no",
        "dependency": []
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
        "default": "",
        "dependency": []
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
        "default": [
          "small-visibility",
          "medium-visibility",
          "large-visibility"
        ],
        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Options</a>.",
        "dependency": []
      },
      "class": {
        "type": "textfield",
        "heading": "CSS Class",
        "param_name": "class",
        "value": "",
        "description": "Add a class to the wrapping HTML element.",
        "dependency": []
      },
      "id": {
        "type": "textfield",
        "heading": "CSS ID",
        "param_name": "id",
        "value": "",
        "description": "Add an ID to the wrapping HTML element.",
        "dependency": []
      }
    },
    "remove_from_atts": []
  },
  "fusion_soundcloud": {
    "defaults": {
      "hide_on_mobile": "small-visibility, medium-visibility, large-visibility",
      "class": "fusion-soundcloud",
      "id": "",
      "auto_play": "no",
      "color": "ff7700",
      "comments": "yes",
      "height": "",
      "layout": "classic",
      "show_related": "no",
      "show_reposts": "no",
      "show_user": "yes",
      "url": "",
      "width": "100%"
    },
    "name": "Soundcloud",
    "shortcode": "fusion_soundcloud",
    "icon": "fusiona-soundcloud",
    "preview": "/var/www/html/wordpress_avada_624/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-soundcloud-preview.php",
    "preview_id": "fusion-builder-block-module-soundcloud-preview-template",
    "help_url": "https://theme-fusion.com/documentation/fusion-builder/elements/soundcloud-element/",
    "params": {
      "url": {
        "type": "textfield",
        "heading": "SoundCloud Url",
        "description": "The SoundCloud url, ex: https://soundcloud.com/dani-pop-shocr-n/miles-davis-smoke-gets-in-your.",
        "param_name": "url",
        "value": "",
        "dependency": []
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
        "default": "classic",
        "dependency": []
      },
      "comments": {
        "type": "radio_button_set",
        "heading": "Show Comments",
        "description": "Choose to display comments. <strong>Note:</strong> This feature can only be turned off on tracks uploaded through a SoundCloud pro plan.",
        "param_name": "comments",
        "value": {
          "yes": "Yes",
          "no": "No"
        },
        "default": "yes",
        "dependency": []
      },
      "show_related": {
        "type": "radio_button_set",
        "heading": "Show Related",
        "description": "Choose to display related items. <strong>Note:</strong> This feature can only be turned off on tracks uploaded through a SoundCloud pro plan.",
        "param_name": "show_related",
        "value": {
          "yes": "Yes",
          "no": "No"
        },
        "default": "yes",
        "dependency": []
      },
      "show_user": {
        "type": "radio_button_set",
        "heading": "Show User",
        "description": "Choose to display the user who posted the item. <strong>Note:</strong> This feature can only be turned off on tracks uploaded through a SoundCloud pro plan.",
        "param_name": "show_user",
        "value": {
          "yes": "Yes",
          "no": "No"
        },
        "default": "yes",
        "dependency": []
      },
      "auto_play": {
        "type": "radio_button_set",
        "heading": "Autoplay",
        "description": "Choose to autoplay the track. <strong>Note:</strong> SoundCloud does not allow autoplay on mobile devices.",
        "param_name": "auto_play",
        "value": {
          "yes": "Yes",
          "no": "No"
        },
        "default": "no",
        "dependency": []
      },
      "color": {
        "type": "colorpicker",
        "heading": "Color",
        "description": "Select the color of the element.",
        "param_name": "color",
        "value": "#ff7700",
        "dependency": []
      },
      "dimensions": {
        "type": "dimension",
        "remove_from_atts": true,
        "heading": "Dimensions",
        "description": "Width can be specified in pixels (px) or percentage (%) values, height in pixels (px) only.",
        "param_name": "dimensions",
        "value": {
          "width": "100%",
          "height": "150px"
        },
        "dependency": []
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
        "default": [
          "small-visibility",
          "medium-visibility",
          "large-visibility"
        ],
        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Options</a>.",
        "dependency": []
      },
      "class": {
        "type": "textfield",
        "heading": "CSS Class",
        "description": "Add a class to the wrapping HTML element.",
        "param_name": "class",
        "value": "",
        "group": "General",
        "dependency": []
      },
      "id": {
        "type": "textfield",
        "heading": "CSS ID",
        "description": "Add an ID to the wrapping HTML element.",
        "param_name": "id",
        "value": "",
        "group": "General",
        "dependency": []
      }
    },
    "remove_from_atts": [
      "dimensions"
    ]
  },
  "fusion_syntax_highlighter": {
    "defaults": {
      "border_style": "solid",
      "border_size": "1",
      "border_color": "#e2e2e2",
      "background_color": "",
      "class": "",
      "copy_to_clipboard": "yes",
      "copy_to_clipboard_text": "Copy to Clipboard",
      "font_size": "14",
      "hide_on_mobile": "small-visibility, medium-visibility, large-visibility",
      "id": "",
      "language": "",
      "line_numbers": "yes",
      "line_number_background_color": "",
      "line_number_text_color": "",
      "line_wrapping": "scroll",
      "margin_top": "0px",
      "margin_left": "0px",
      "margin_bottom": "0px",
      "margin_right": "0px",
      "theme": "default"
    },
    "extras": {
      "syntax_highlighter_background_color": "",
      "wp_enqueue_code_editor": true
    },
    "settings_to_params": {
      "syntax_highlighter_border_style": "border_style",
      "syntax_highlighter_border_size": "border_size",
      "syntax_highlighter_border_color": "border_color",
      "syntax_highlighter_background_color": "background_color",
      "syntax_highlighter_copy_to_clipboard": "copy_to_clipboard",
      "syntax_highlighter_copy_to_clipboard_text": "copy_to_clipboard_text",
      "syntax_highlighter_font_size": "font_size",
      "syntax_highlighter_line_numbers": "line_numbers",
      "syntax_highlighter_line_number_background_color": "line_number_background_color",
      "syntax_highlighter_line_number_text_color": "line_number_text_color",
      "syntax_highlighter_line_wrapping": "line_wrapping",
      "syntax_highlighter_margin[top]": "margin_top",
      "syntax_highlighter_margin[left]": "margin_left",
      "syntax_highlighter_margin[right]": "margin_right",
      "syntax_highlighter_margin[bottom]": "margin_bottom",
      "syntax_highlighter_theme": "theme"
    },
    "settings_to_extras": {
      "syntax_highlighter_background_color": "syntax_highlighter_background_color"
    },
    "name": "Syntax Highlighter",
    "shortcode": "fusion_syntax_highlighter",
    "icon": "fusiona-code",
    "escape_html": true,
    "help_url": "https://theme-fusion.com/documentation/fusion-builder/elements/syntax-highlighter-element/",
    "params": {
      "element_content": {
        "type": "code",
        "heading": "Code to Highlight",
        "description": "Enter some code to be displayed with highlighted syntax.<br/>IMPORTANT: Please make sure that the \"Code Block Encoding\" setting in Theme Options is enabled in order for the code to appear correctly on the frontend. Currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#disable_code_block_encoding\" target=\"_blank\" rel=\"noopener noreferrer\">On</a>.",
        "param_name": "element_content",
        "value": "",
        "callback": {
          "function": "fusion_code_mirror"
        },
        "dependency": []
      },
      "theme": {
        "type": "radio_button_set",
        "heading": "Highlighter Theme",
        "description": "Select which theme you want to use for code highlighting.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#syntax_highlighter_theme\" target=\"_blank\" rel=\"noopener noreferrer\">Light 1</a>.",
        "param_name": "theme",
        "value": {
          "": "Default",
          "default": "Light 1",
          "elegant": "Light 2",
          "hopscotch": "Dark 1",
          "oceanic-next": "Dark 2"
        },
        "default": "",
        "default_option": "syntax_highlighter_theme",
        "default_subset": "",
        "option_map": "select",
        "dependency": []
      },
      "language": {
        "type": "select",
        "heading": "Code Language",
        "description": "Select the language the code is in.",
        "param_name": "language",
        "value": {
          "x-sh": "bash",
          "css": "css",
          "conf": "conf",
          "diff": "diff",
          "html": "html",
          "htm": "htm",
          "http": "http",
          "javascript": "javascript",
          "json": "json",
          "jsx": "jsx",
          "x-less": "less",
          "md": "md",
          "patch": "patch",
          "x-php": "php",
          "phtml": "phtml",
          "x-sass": "sass",
          "x-scss": "scss",
          "sql": "sql",
          "svg": "svg",
          "txt": "txt",
          "xml": "xml",
          "yaml": "yaml",
          "yml": "yml"
        },
        "dependency": []
      },
      "line_numbers": {
        "type": "radio_button_set",
        "heading": "Line Numbers",
        "description": "Choose if you want to display or hide line numbers.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#syntax_highlighter_line_numbers\" target=\"_blank\" rel=\"noopener noreferrer\">Yes</a>.",
        "param_name": "line_numbers",
        "value": {
          "": "Default",
          "yes": "Yes",
          "no": "No"
        },
        "default": "",
        "default_option": "syntax_highlighter_line_numbers",
        "default_subset": "",
        "option_map": "select",
        "dependency": []
      },
      "line_wrapping": {
        "type": "radio_button_set",
        "heading": "Line Wrapping",
        "description": "Controls whether the long line should break or add horizontal scroll.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#syntax_highlighter_line_wrapping\" target=\"_blank\" rel=\"noopener noreferrer\">Scroll</a>.",
        "param_name": "line_wrapping",
        "value": {
          "": "Default",
          "scroll": "Scroll",
          "break": "Break"
        },
        "default": "",
        "default_option": "syntax_highlighter_line_wrapping",
        "default_subset": "",
        "option_map": "select",
        "dependency": []
      },
      "copy_to_clipboard": {
        "type": "radio_button_set",
        "heading": "Copy to Clipboard",
        "description": "Choose if you want to allow your visitors to easily copy your code with a click of the button.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#syntax_highlighter_copy_to_clipboard\" target=\"_blank\" rel=\"noopener noreferrer\">Yes</a>.",
        "param_name": "copy_to_clipboard",
        "value": {
          "": "Default",
          "yes": "Yes",
          "no": "No"
        },
        "default": "",
        "default_option": "syntax_highlighter_copy_to_clipboard",
        "default_subset": "",
        "option_map": "select",
        "dependency": []
      },
      "copy_to_clipboard_text": {
        "type": "textfield",
        "heading": "Copy to Clipboard Text",
        "description": "Enter text to be displayed for user to click to copy.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#syntax_highlighter_copy_to_clipboard_text\" target=\"_blank\" rel=\"noopener noreferrer\">Copy to Clipboard</a>.",
        "param_name": "copy_to_clipboard_text",
        "dependency": [
          {
            "element": "copy_to_clipboard",
            "value": "no",
            "operator": "!="
          }
        ],
        "default_option": "syntax_highlighter_copy_to_clipboard_text",
        "default_subset": "",
        "option_map": "reset"
      },
      "font_size": {
        "type": "range",
        "heading": "Font Size",
        "description": "Controls the font size of the syntax highlight code. In pixels.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#syntax_highlighter_font_size\" target=\"_blank\" rel=\"noopener noreferrer\">14</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-font_size\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"font_size\" value=\"\" data-default=\"14\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "font_size",
        "default": 14,
        "value": "",
        "choices": {
          "min": "10",
          "max": "100",
          "step": "1"
        },
        "group": "Design",
        "default_option": "syntax_highlighter_font_size",
        "default_subset": "",
        "option_map": "range",
        "dependency": []
      },
      "border_size": {
        "type": "range",
        "heading": "Border Size",
        "description": "Controls the border size of the syntax highlighter. In pixels.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#syntax_highlighter_border_size\" target=\"_blank\" rel=\"noopener noreferrer\">1</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-border_size\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"border_size\" value=\"\" data-default=\"1\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "border_size",
        "default": 1,
        "value": "",
        "choices": {
          "min": "0",
          "max": "50",
          "step": "1"
        },
        "group": "Design",
        "default_option": "syntax_highlighter_border_size",
        "default_subset": "",
        "option_map": "range",
        "dependency": []
      },
      "border_color": {
        "type": "colorpickeralpha",
        "heading": "Border Color",
        "description": "Controls the border color.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#syntax_highlighter_border_color\" target=\"_blank\" rel=\"noopener noreferrer\">#e2e2e2</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-border_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"border_color\" value=\"\" data-default=\"#e2e2e2\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "border_color",
        "value": "",
        "default": "#e2e2e2",
        "group": "Design",
        "dependency": [
          {
            "element": "border_size",
            "value": "0",
            "operator": "!="
          }
        ],
        "default_option": "syntax_highlighter_border_color",
        "default_subset": "",
        "option_map": ""
      },
      "border_style": {
        "type": "radio_button_set",
        "heading": "Border Style",
        "description": "Controls the border style.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#syntax_highlighter_border_style\" target=\"_blank\" rel=\"noopener noreferrer\">Solid</a>.",
        "param_name": "border_style",
        "default": "",
        "group": "Design",
        "dependency": [
          {
            "element": "border_size",
            "value": "0",
            "operator": "!="
          }
        ],
        "value": {
          "": "Default",
          "solid": "Solid",
          "dashed": "Dashed",
          "dotted": "Dotted"
        },
        "default_option": "syntax_highlighter_border_style",
        "default_subset": "",
        "option_map": "select"
      },
      "background_color": {
        "type": "colorpickeralpha",
        "heading": "Background Color",
        "description": "Controls the background color for code highlight area.  Currently no default selected. Can be set globally from the <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#syntax_highlighter_background_color\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Options</a>.",
        "param_name": "background_color",
        "value": "",
        "default": "",
        "group": "Design",
        "default_option": "syntax_highlighter_background_color",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "line_number_background_color": {
        "type": "colorpickeralpha",
        "heading": "Line Number Background Color",
        "description": "Controls the line number background color for code highlight area.  Currently no default selected. Can be set globally from the <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#syntax_highlighter_line_number_background_color\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Options</a>.",
        "param_name": "line_number_background_color",
        "value": "",
        "default": "",
        "dependency": [
          {
            "element": "line_numbers",
            "value": "no",
            "operator": "!="
          }
        ],
        "group": "Design",
        "default_option": "syntax_highlighter_line_number_background_color",
        "default_subset": "",
        "option_map": ""
      },
      "line_number_text_color": {
        "type": "colorpickeralpha",
        "heading": "Line Number Text Color",
        "description": "Controls the line number text color for code highlight area.  Currently no default selected. Can be set globally from the <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#syntax_highlighter_line_number_text_color\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Options</a>.",
        "param_name": "line_number_text_color",
        "value": "",
        "default": "",
        "dependency": [
          {
            "element": "line_numbers",
            "value": "no",
            "operator": "!="
          }
        ],
        "group": "Design",
        "default_option": "syntax_highlighter_line_number_text_color",
        "default_subset": "",
        "option_map": ""
      },
      "margin": {
        "type": "dimension",
        "remove_from_atts": true,
        "heading": "Margin",
        "description": "Control spacing around the syntax highlighter. In px, em or %, e.g. 10px.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#syntax_highlighter_margin\" target=\"_blank\" rel=\"noopener noreferrer\">0px, 0px, 0px, 0px</a>.",
        "param_name": "margin",
        "value": {
          "margin_top": "",
          "margin_right": "",
          "margin_bottom": "",
          "margin_left": ""
        },
        "group": "Design",
        "shortcode": "fusion_syntax_highlighter",
        "default_option": "syntax_highlighter_margin",
        "default_subset": [
          "top",
          "left",
          "bottom",
          "right"
        ],
        "option_map": "",
        "dependency": []
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
        "default": [
          "small-visibility",
          "medium-visibility",
          "large-visibility"
        ],
        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Options</a>.",
        "dependency": []
      },
      "class": {
        "type": "textfield",
        "heading": "CSS Class",
        "param_name": "class",
        "value": "",
        "description": "Add a class to the wrapping HTML element.",
        "dependency": []
      },
      "id": {
        "type": "textfield",
        "heading": "CSS ID",
        "param_name": "id",
        "value": "",
        "description": "Add an ID to the wrapping HTML element.",
        "dependency": []
      }
    },
    "remove_from_atts": [
      "margin"
    ]
  },
  "fusion_search": {
    "defaults": {
      "animation_type": "",
      "animation_direction": "down",
      "animation_speed": "",
      "animation_offset": "top-into-view",
      "class": "",
      "search_content": "",
      "placeholder": "Search...",
      "design": "clean",
      "live_search": "no",
      "search_limit_to_post_titles": "no",
      "hide_on_mobile": "small-visibility, medium-visibility, large-visibility",
      "id": "",
      "margin_bottom": "",
      "margin_left": "",
      "margin_right": "",
      "margin_top": ""
    },
    "settings_to_params": {
      "search_form_design": "design"
    },
    "name": "Search",
    "shortcode": "fusion_search",
    "icon": "fusiona-search",
    "preview": "/var/www/html/wordpress_avada_624/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-search-preview.php",
    "preview_id": "fusion-builder-block-module-search-preview-template",
    "help_url": "",
    "params": {
      "live_search": {
        "type": "radio_button_set",
        "heading": "Enable Live Search",
        "description": "Turn on to enable live search results on menu search field and other fitting search forms.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#live_search\" target=\"_blank\" rel=\"noopener noreferrer\">No</a>.",
        "param_name": "live_search",
        "default": "",
        "value": {
          "": "Default",
          "yes": "Yes",
          "no": "No"
        },
        "default_option": "live_search",
        "default_subset": "",
        "option_map": "yesno",
        "dependency": []
      },
      "design": {
        "type": "radio_button_set",
        "heading": "Search Form Design",
        "description": "Controls the design of the search form.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#search_form_design\" target=\"_blank\" rel=\"noopener noreferrer\">Clean</a>.",
        "param_name": "design",
        "default": "",
        "value": {
          "": "Default",
          "classic": "Classic",
          "clean": "Clean"
        },
        "default_option": "search_form_design",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "search_content": {
        "type": "multiple_select",
        "heading": "Search Results Content",
        "description": "Controls the type of content that displays in search results.",
        "param_name": "search_content",
        "default": [
          "post",
          "page",
          "avada_portfolio",
          "avada_faq"
        ],
        "choices": {
          "post": "Posts",
          "page": "Pages",
          "avada_portfolio": "Portfolio Items",
          "avada_faq": "FAQ Items",
          "product": "WooCommerce Products",
          "tribe_events": "Events Calendar Posts"
        },
        "dependency": []
      },
      "search_limit_to_post_titles": {
        "type": "radio_button_set",
        "heading": "Limit Search to Post Titles",
        "description": "Turn on to limit the search to post titles only.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#search_limit_to_post_titles\" target=\"_blank\" rel=\"noopener noreferrer\">No</a>.",
        "param_name": "search_limit_to_post_titles",
        "default": "",
        "value": {
          "": "Default",
          "yes": "Yes",
          "no": "No"
        },
        "default_option": "search_limit_to_post_titles",
        "default_subset": "",
        "option_map": "yesno",
        "dependency": []
      },
      "placeholder": {
        "type": "textfield",
        "heading": "Placeholder",
        "description": "Search placeholder",
        "param_name": "placeholder",
        "value": "",
        "dependency": []
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
        "group": "Extras",
        "preview": {
          "selector": ".fusion-search-element",
          "type": "animation"
        },
        "dependency": []
      },
      "animation_direction": {
        "type": "radio_button_set",
        "heading": "Direction of Animation",
        "description": "Select the incoming direction for the animation.",
        "param_name": "animation_direction",
        "default": "left",
        "group": "Extras",
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          }
        ],
        "value": {
          "down": "Top",
          "right": "Right",
          "up": "Bottom",
          "left": "Left",
          "static": "Static"
        },
        "preview": {
          "selector": ".fusion-search-element",
          "type": "animation"
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
        "group": "Extras",
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          }
        ],
        "preview": {
          "selector": ".fusion-search-element",
          "type": "animation"
        }
      },
      "animation_offset": {
        "type": "select",
        "heading": "Offset of Animation",
        "description": "Controls when the animation should start.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#animation_offset\" target=\"_blank\" rel=\"noopener noreferrer\">Top Of Element Hits Bottom Of Viewport</a>.",
        "param_name": "animation_offset",
        "default": "",
        "group": "Extras",
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          }
        ],
        "value": {
          "": "Default",
          "top-into-view": "Top of element hits bottom of viewport",
          "top-mid-of-view": "Top of element hits middle of viewport",
          "bottom-in-view": "Bottom of element enters viewport"
        },
        "default_option": "animation_offset",
        "default_subset": "",
        "option_map": "select"
      },
      "margin": {
        "type": "dimension",
        "remove_from_atts": true,
        "heading": "Margin",
        "description": "Enter values including any valid CSS unit, ex: 4%.",
        "param_name": "margin",
        "value": {
          "margin_top": "",
          "margin_right": "",
          "margin_bottom": "",
          "margin_left": ""
        },
        "dependency": []
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
        "default": [
          "small-visibility",
          "medium-visibility",
          "large-visibility"
        ],
        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Options</a>.",
        "dependency": []
      },
      "class": {
        "type": "textfield",
        "heading": "CSS Class",
        "param_name": "class",
        "value": "",
        "description": "Add a class to the wrapping HTML element.",
        "dependency": []
      },
      "id": {
        "type": "textfield",
        "heading": "CSS ID",
        "param_name": "id",
        "value": "",
        "description": "Add an ID to the wrapping HTML element.",
        "dependency": []
      }
    },
    "remove_from_atts": [
      "margin"
    ]
  },
  "fusion_table": {
    "name": "Table",
    "shortcode": "fusion_table",
    "icon": "fusiona-table",
    "allow_generator": true,
    "admin_enqueue_js": "http://127.0.0.1/wordpress_avada_624/wp-content/plugins/fusion-builder/shortcodes/js/fusion-table.js",
    "help_url": "https://theme-fusion.com/documentation/fusion-builder/elements/table-element/",
    "on_settings": "calculateTableData",
    "params": {
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
        "dependency": []
      },
      "fusion_table_rows": {
        "type": "range",
        "heading": "Number of Rows",
        "description": "Select how many rows to display.",
        "param_name": "fusion_table_rows",
        "value": "",
        "min": "1",
        "max": "50",
        "step": "1",
        "default": "2",
        "dependency": []
      },
      "fusion_table_columns": {
        "type": "range",
        "heading": "Number of Columns",
        "description": "Select how many columns to display.",
        "param_name": "fusion_table_columns",
        "value": "",
        "min": "1",
        "max": "25",
        "step": "1",
        "default": "2",
        "dependency": []
      },
      "element_content": {
        "type": "tinymce",
        "heading": "Table",
        "description": "Table content will appear here.",
        "param_name": "element_content",
        "value": "<div class=\"table-1\"><table width=\"100%\"><thead><tr><th align=\"left\">Column 1</th><th align=\"left\">Column 2</th></tr></thead><tbody><tr><td align=\"left\">Column 1 Value</td><td align=\"left\">Column 2 Value</td></tr></tbody></table></div>",
        "dependency": []
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
        "group": "Extras",
        "preview": {
          "selector": ".table-1,.table-2",
          "type": "animation"
        },
        "dependency": []
      },
      "animation_direction": {
        "type": "radio_button_set",
        "heading": "Direction of Animation",
        "description": "Select the incoming direction for the animation.",
        "param_name": "animation_direction",
        "default": "left",
        "group": "Extras",
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          }
        ],
        "value": {
          "down": "Top",
          "right": "Right",
          "up": "Bottom",
          "left": "Left",
          "static": "Static"
        },
        "preview": {
          "selector": ".table-1,.table-2",
          "type": "animation"
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
        "group": "Extras",
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          }
        ],
        "preview": {
          "selector": ".table-1,.table-2",
          "type": "animation"
        }
      },
      "animation_offset": {
        "type": "select",
        "heading": "Offset of Animation",
        "description": "Controls when the animation should start.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#animation_offset\" target=\"_blank\" rel=\"noopener noreferrer\">Top Of Element Hits Bottom Of Viewport</a>.",
        "param_name": "animation_offset",
        "default": "",
        "group": "Extras",
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          }
        ],
        "value": {
          "": "Default",
          "top-into-view": "Top of element hits bottom of viewport",
          "top-mid-of-view": "Top of element hits middle of viewport",
          "bottom-in-view": "Bottom of element enters viewport"
        },
        "default_option": "animation_offset",
        "default_subset": "",
        "option_map": "select"
      },
      "hide_on_mobile": {
        "type": "checkbox_button_set",
        "heading": "Element Visibility",
        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Options</a>.",
        "param_name": "hide_on_mobile",
        "value": {
          "small-visibility": "Small Screen",
          "medium-visibility": "Medium Screen",
          "large-visibility": "Large Screen"
        },
        "default": [
          "small-visibility",
          "medium-visibility",
          "large-visibility"
        ],
        "dependency": []
      },
      "class": {
        "type": "textfield",
        "heading": "CSS Class",
        "description": "Add a class to the wrapping HTML element.",
        "param_name": "class",
        "value": "",
        "dependency": []
      },
      "id": {
        "type": "textfield",
        "heading": "CSS ID",
        "description": "Add an ID to the wrapping HTML element.",
        "param_name": "id",
        "value": "",
        "dependency": []
      }
    },
    "remove_from_atts": []
  },
  "fusion_tabs": {
    "defaults": {
      "hide_on_mobile": "small-visibility, medium-visibility, large-visibility",
      "class": "",
      "id": "",
      "backgroundcolor": "#ffffff",
      "bordercolor": "#e2e2e2",
      "icon_position": "left",
      "icon_size": "16",
      "design": "classic",
      "inactivecolor": "#f9f9fb",
      "justified": "yes",
      "layout": "horizontal"
    },
    "settings_to_params": {
      "tabs_bg_color": "backgroundcolor",
      "tabs_border_color": "bordercolor",
      "tabs_icon_position": "icon_position",
      "tabs_icon_size": "icon_size",
      "tabs_inactive_color": "inactivecolor"
    },
    "name": "Tabs",
    "shortcode": "fusion_tabs",
    "multi": "multi_element_parent",
    "element_child": "fusion_tab",
    "icon": "fusiona-folder",
    "preview": "/var/www/html/wordpress_avada_624/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-tabs-preview.php",
    "preview_id": "fusion-builder-block-module-tabs-preview-template",
    "child_ui": true,
    "help_url": "https://theme-fusion.com/documentation/fusion-builder/elements/tabs-element/",
    "sortable": false,
    "params": {
      "element_content": {
        "type": "tinymce",
        "heading": "Content",
        "description": "Enter some content for this tabs element.",
        "param_name": "element_content",
        "value": "[fusion_tab title=\"Your Content Goes Here\" icon=\"\"]Your Content Goes Here[/fusion_tab]",
        "dependency": []
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
        "default": "classic",
        "dependency": []
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
        "default": "horizontal",
        "dependency": []
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
        "dependency": [
          {
            "element": "layout",
            "value": "horizontal",
            "operator": "=="
          }
        ]
      },
      "backgroundcolor": {
        "type": "colorpickeralpha",
        "heading": "Background Color",
        "description": "Controls the background tab color.   Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#tabs_bg_color\" target=\"_blank\" rel=\"noopener noreferrer\">#ffffff</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-backgroundcolor\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"backgroundcolor\" value=\"\" data-default=\"#ffffff\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "backgroundcolor",
        "value": "",
        "default": "#ffffff",
        "default_option": "tabs_bg_color",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "inactivecolor": {
        "type": "colorpickeralpha",
        "heading": "Inactive Color",
        "description": "Controls the inactive tab color.   Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#tabs_inactive_color\" target=\"_blank\" rel=\"noopener noreferrer\">#f9f9fb</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-inactivecolor\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"inactivecolor\" value=\"\" data-default=\"#f9f9fb\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "inactivecolor",
        "value": "",
        "default": "#f9f9fb",
        "default_option": "tabs_inactive_color",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "bordercolor": {
        "type": "colorpickeralpha",
        "heading": "Border Color",
        "description": "Controls the color of the outer tab border.   Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#tabs_border_color\" target=\"_blank\" rel=\"noopener noreferrer\">#e2e2e2</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-bordercolor\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"bordercolor\" value=\"\" data-default=\"#e2e2e2\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "bordercolor",
        "value": "",
        "default": "#e2e2e2",
        "default_option": "tabs_border_color",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "icon": {
        "type": "iconpicker",
        "heading": "Icon",
        "param_name": "icon",
        "value": "",
        "description": "Global setting for all tabs, this can be overridden individually. Click an icon to select, click again to deselect.",
        "dependency": []
      },
      "icon_position": {
        "heading": "Icon Position",
        "description": "Choose the position of the icon on the tab. Icons are selected in each child tab element on the left side and do not have to be used.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#tabs_icon_position\" target=\"_blank\" rel=\"noopener noreferrer\">Left</a>.",
        "param_name": "icon_position",
        "default": "",
        "type": "radio_button_set",
        "value": {
          "": "Default",
          "left": "Left",
          "right": "Right",
          "top": "Top"
        },
        "default_option": "tabs_icon_position",
        "default_subset": "",
        "option_map": "select",
        "dependency": []
      },
      "icon_size": {
        "heading": "Tabs Icon Size",
        "description": "Set the size of the icon. In pixels (px), ex: 13px. Icons are selected in each child tab element on the left side and do not have to be used.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#tabs_icon_size\" target=\"_blank\" rel=\"noopener noreferrer\">16</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-icon_size\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"icon_size\" value=\"\" data-default=\"16\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "icon_size",
        "default": "16",
        "min": "1",
        "max": "150",
        "step": "1",
        "type": "range",
        "default_option": "tabs_icon_size",
        "default_subset": "",
        "option_map": "range",
        "dependency": []
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
        "default": [
          "small-visibility",
          "medium-visibility",
          "large-visibility"
        ],
        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Options</a>.",
        "dependency": []
      },
      "class": {
        "type": "textfield",
        "heading": "CSS Class",
        "description": "Add a class to the wrapping HTML element.",
        "param_name": "class",
        "value": "",
        "group": "General",
        "dependency": []
      },
      "id": {
        "type": "textfield",
        "heading": "CSS ID",
        "description": "Add an ID to the wrapping HTML element.",
        "param_name": "id",
        "value": "",
        "group": "General",
        "dependency": []
      }
    },
    "remove_from_atts": []
  },
  "fusion_tab": {
    "defaults": {
      "icon": "none",
      "id": "",
      "fusion_tab": "no"
    },
    "settings_to_params": [],
    "name": "Tab",
    "shortcode": "fusion_tab",
    "hide_from_builder": true,
    "allow_generator": true,
    "params": {
      "title": {
        "type": "textfield",
        "heading": "Tab Title",
        "description": "Title of the tab.",
        "param_name": "title",
        "value": "Your Content Goes Here",
        "placeholder": true,
        "dependency": []
      },
      "icon": {
        "type": "iconpicker",
        "heading": "Icon",
        "param_name": "icon",
        "value": "",
        "description": "Click an icon to select, click again to deselect.",
        "dependency": []
      },
      "element_content": {
        "type": "tinymce",
        "heading": "Tab Content",
        "description": "Add content for the tab.",
        "param_name": "element_content",
        "value": "Your Content Goes Here",
        "placeholder": true,
        "dynamic_data": true,
        "dependency": []
      }
    },
    "tag_name": "li",
    "remove_from_atts": []
  },
  "fusion_tagline_box": {
    "defaults": {
      "hide_on_mobile": "small-visibility, medium-visibility, large-visibility",
      "class": "",
      "id": "",
      "backgroundcolor": "#f9f9fb",
      "border": "0px",
      "bordercolor": "rgba(226,226,226,0)",
      "button": "",
      "buttoncolor": "default",
      "button_border_radius": "4",
      "button_size": "Large",
      "button_type": "Flat",
      "content_alignment": "left",
      "description": "",
      "highlightposition": "left",
      "link": "",
      "linktarget": "_self",
      "margin_bottom": "20px",
      "margin_top": "0px",
      "modal": "",
      "shadow": "no",
      "shadowopacity": "0.7",
      "title": "",
      "animation_type": "",
      "animation_direction": "left",
      "animation_speed": "",
      "animation_offset": "top-into-view"
    },
    "extras": {
      "primary_color": "#65bc7b"
    },
    "settings_to_params": {
      "tagline_bg": "backgroundcolor",
      "tagline_border_color": "bordercolor",
      "button_border_radius": "button_border_radius",
      "button_size": "button_size",
      "button_type": "button_type",
      "tagline_margin[top]": "margin_top",
      "tagline_margin[bottom]": "margin_bottom",
      "animation_offset": "animation_offset"
    },
    "settings_to_extras": {
      "primary_color": "primary_color"
    },
    "name": "Tagline Box",
    "shortcode": "fusion_tagline_box",
    "icon": "fusiona-list-alt",
    "preview": "/var/www/html/wordpress_avada_624/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-tagline-preview.php",
    "preview_id": "fusion-builder-block-module-tagline-preview-template",
    "allow_generator": true,
    "inline_editor": true,
    "help_url": "https://theme-fusion.com/documentation/fusion-builder/elements/tagline-box-element/",
    "params": {
      "backgroundcolor": {
        "type": "colorpickeralpha",
        "heading": "Background Color",
        "description": "Controls the background color.   Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#tagline_bg\" target=\"_blank\" rel=\"noopener noreferrer\">#f9f9fb</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-backgroundcolor\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"backgroundcolor\" value=\"\" data-default=\"#f9f9fb\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "backgroundcolor",
        "value": "",
        "default": "#f9f9fb",
        "group": "Design",
        "default_option": "tagline_bg",
        "default_subset": "",
        "option_map": "",
        "dependency": []
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
        "default": "no",
        "group": "Design",
        "dependency": []
      },
      "shadowopacity": {
        "type": "range",
        "heading": "Shadow Opacity",
        "description": "Choose the opacity of the shadow.",
        "param_name": "shadowopacity",
        "min": "0",
        "max": "1",
        "step": "0.05",
        "value": "0.7",
        "group": "Design",
        "dependency": [
          {
            "element": "shadow",
            "value": "yes",
            "operator": "=="
          }
        ]
      },
      "border": {
        "type": "range",
        "heading": "Border Size",
        "param_name": "border",
        "description": "In pixels.",
        "min": "0",
        "max": "20",
        "value": "1",
        "group": "Design",
        "dependency": []
      },
      "bordercolor": {
        "type": "colorpickeralpha",
        "heading": "Border Color",
        "description": "Controls the border color.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#tagline_border_color\" target=\"_blank\" rel=\"noopener noreferrer\">rgba(226,226,226,0)</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-bordercolor\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"bordercolor\" value=\"\" data-default=\"rgba(226,226,226,0)\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "bordercolor",
        "value": "",
        "default": "rgba(226,226,226,0)",
        "group": "Design",
        "dependency": [
          {
            "element": "border",
            "value": "0",
            "operator": "!="
          }
        ],
        "default_option": "tagline_border_color",
        "default_subset": "",
        "option_map": ""
      },
      "highlightposition": {
        "type": "radio_button_set",
        "heading": "Highlight Border Position",
        "description": "Choose the position of the highlight. This border highlight is from theme options primary color and does not take the color from border color above.",
        "param_name": "highlightposition",
        "group": "Design",
        "value": {
          "top": "Top",
          "bottom": "Bottom",
          "left": "Left",
          "right": "Right",
          "none": "None"
        },
        "default": "left",
        "dependency": []
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
        "default": "left",
        "dependency": []
      },
      "link": {
        "type": "link_selector",
        "heading": "Button Link",
        "description": "The url the button will link to.",
        "param_name": "link",
        "value": "",
        "dynamic_data": true,
        "dependency": []
      },
      "button": {
        "type": "textfield",
        "heading": "Button Text",
        "description": "Insert the text that will display in the button.",
        "param_name": "button",
        "value": "",
        "dependency": [
          {
            "element": "link",
            "value": "",
            "operator": "!="
          }
        ]
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
        "dependency": [
          {
            "element": "link",
            "value": "",
            "operator": "!="
          }
        ]
      },
      "modal": {
        "type": "textfield",
        "heading": "Modal Window Anchor",
        "description": "Add the class name of the modal window you want to open on button click.",
        "param_name": "modal",
        "value": "",
        "dependency": [
          {
            "element": "link",
            "value": "",
            "operator": "!="
          }
        ]
      },
      "button_size": {
        "type": "radio_button_set",
        "heading": "Button Size",
        "description": "Select the button&#039;s size. Choose default for theme option selection.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#button_size\" target=\"_blank\" rel=\"noopener noreferrer\">Large</a>.",
        "param_name": "button_size",
        "value": {
          "": "Default",
          "small": "Small",
          "medium": "Medium",
          "large": "Large",
          "xlarge": "XLarge"
        },
        "default": "",
        "dependency": [
          {
            "element": "link",
            "value": "",
            "operator": "!="
          }
        ],
        "default_option": "button_size",
        "default_subset": "",
        "option_map": "select"
      },
      "button_type": {
        "type": "radio_button_set",
        "heading": "Button Type",
        "description": "Select the button&#039;s type.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#button_type\" target=\"_blank\" rel=\"noopener noreferrer\">Flat</a>.",
        "param_name": "button_type",
        "value": {
          "": "Default",
          "flat": "Flat",
          "3d": "3D"
        },
        "default": "",
        "dependency": [
          {
            "element": "link",
            "value": "",
            "operator": "!="
          }
        ],
        "default_option": "button_type",
        "default_subset": "",
        "option_map": "select"
      },
      "button_border_radius": {
        "type": "range",
        "heading": "Button Border Radius",
        "param_name": "button_border_radius",
        "description": "Controls the border radius of the tagline button. In pixels.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#button_border_radius\" target=\"_blank\" rel=\"noopener noreferrer\">4</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-button_border_radius\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"button_border_radius\" value=\"\" data-default=\"4\">Reset to default.</a><span>Using default value.</span></span>",
        "min": "0",
        "max": "50",
        "step": "1",
        "value": "",
        "default": "4",
        "dependency": [
          {
            "element": "link",
            "value": "",
            "operator": "!="
          }
        ],
        "default_option": "button_border_radius",
        "default_subset": "",
        "option_map": ""
      },
      "buttoncolor": {
        "type": "select",
        "heading": "Button Color",
        "description": "Choose the button color.",
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
        "dependency": [
          {
            "element": "link",
            "value": "",
            "operator": "!="
          }
        ]
      },
      "title": {
        "type": "raw_textarea",
        "heading": "Tagline Title",
        "description": "Insert the title text.",
        "param_name": "title",
        "value": "Your Content Goes Here",
        "placeholder": true,
        "dynamic_data": true,
        "dependency": []
      },
      "description": {
        "type": "raw_textarea",
        "heading": "Tagline Description",
        "description": "Insert the description text.",
        "param_name": "description",
        "value": "Your Content Goes Here",
        "placeholder": true,
        "dynamic_data": true,
        "dependency": []
      },
      "element_content": {
        "type": "tinymce",
        "heading": "Additional Content",
        "description": "This is additional content you can add to the tagline box. This will show below the title and description if one is used.",
        "param_name": "element_content",
        "value": "Your Content Goes Here",
        "placeholder": true,
        "dynamic_data": true,
        "dependency": []
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
        },
        "group": "Design",
        "shortcode": "fusion_tagline_box",
        "dependency": []
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
        "group": "Extras",
        "preview": {
          "selector": ".fusion-reading-box-container",
          "type": "animation"
        },
        "dependency": []
      },
      "animation_direction": {
        "type": "radio_button_set",
        "heading": "Direction of Animation",
        "description": "Select the incoming direction for the animation.",
        "param_name": "animation_direction",
        "default": "left",
        "group": "Extras",
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          }
        ],
        "value": {
          "down": "Top",
          "right": "Right",
          "up": "Bottom",
          "left": "Left",
          "static": "Static"
        },
        "preview": {
          "selector": ".fusion-reading-box-container",
          "type": "animation"
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
        "group": "Extras",
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          }
        ],
        "preview": {
          "selector": ".fusion-reading-box-container",
          "type": "animation"
        }
      },
      "animation_offset": {
        "type": "select",
        "heading": "Offset of Animation",
        "description": "Controls when the animation should start.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#animation_offset\" target=\"_blank\" rel=\"noopener noreferrer\">Top Of Element Hits Bottom Of Viewport</a>.",
        "param_name": "animation_offset",
        "default": "",
        "group": "Extras",
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          }
        ],
        "value": {
          "": "Default",
          "top-into-view": "Top of element hits bottom of viewport",
          "top-mid-of-view": "Top of element hits middle of viewport",
          "bottom-in-view": "Bottom of element enters viewport"
        },
        "default_option": "animation_offset",
        "default_subset": "",
        "option_map": "select"
      },
      "hide_on_mobile": {
        "type": "checkbox_button_set",
        "heading": "Element Visibility",
        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Options</a>.",
        "param_name": "hide_on_mobile",
        "value": {
          "small-visibility": "Small Screen",
          "medium-visibility": "Medium Screen",
          "large-visibility": "Large Screen"
        },
        "default": [
          "small-visibility",
          "medium-visibility",
          "large-visibility"
        ],
        "dependency": []
      },
      "class": {
        "type": "textfield",
        "heading": "CSS Class",
        "description": "Add a class to the wrapping HTML element.",
        "param_name": "class",
        "value": "",
        "dependency": []
      },
      "id": {
        "type": "textfield",
        "heading": "CSS ID",
        "description": "Add an ID to the wrapping HTML element.",
        "param_name": "id",
        "value": "",
        "dependency": []
      }
    },
    "remove_from_atts": [
      "dimensions"
    ]
  },
  "fusion_testimonials": {
    "defaults": {
      "hide_on_mobile": "small-visibility, medium-visibility, large-visibility",
      "class": "",
      "id": "",
      "backgroundcolor": "#f9f9fb",
      "design": "classic",
      "navigation": "",
      "speed": "4000",
      "random": "0",
      "textcolor": "#4a4e57"
    },
    "settings_to_params": {
      "testimonial_bg_color": "backgroundcolor",
      "testimonials_random": "random",
      "testimonial_text_color": "textcolor"
    },
    "name": "Testimonials",
    "shortcode": "fusion_testimonials",
    "multi": "multi_element_parent",
    "element_child": "fusion_testimonial",
    "icon": "fusiona-bubbles",
    "preview": "/var/www/html/wordpress_avada_624/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-testimonials-preview.php",
    "preview_id": "fusion-builder-block-module-testimonials-preview-template",
    "child_ui": true,
    "sortable": false,
    "help_url": "https://theme-fusion.com/documentation/fusion-builder/elements/testimonials-element/",
    "params": {
      "element_content": {
        "type": "tinymce",
        "heading": "Content",
        "description": "Enter some content for this testimonial element.",
        "param_name": "element_content",
        "value": "[fusion_testimonial name=\"Your Content Goes Here\" avatar=\"male\" image=\"\" image_border_radius=\"\" company=\"Your Content Goes Here\" link=\"\" target=\"_self\"]Your Content Goes Here[/fusion_testimonial]",
        "dependency": []
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
        "default": "classic",
        "dependency": []
      },
      "navigation": {
        "type": "radio_button_set",
        "heading": "Navigation Bullets",
        "description": "Select to show navigation bullets.",
        "param_name": "navigation",
        "value": {
          "yes": "Show",
          "no": "Hide"
        },
        "default": "no",
        "dependency": []
      },
      "speed": {
        "type": "range",
        "heading": "Testimonials Speed",
        "description": "Set the speed of the testimonial slider. ex: 1000 = 1 second. <strong>IMPORTANT:</strong> Setting speed to 0 will disable autoplay for testimonials slider.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#testimonials_speed\" target=\"_blank\" rel=\"noopener noreferrer\">4000</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-speed\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"speed\" value=\"\" data-default=\"4000\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "speed",
        "default": "4000",
        "min": "0",
        "max": "20000",
        "step": "250",
        "default_option": "testimonials_speed",
        "default_subset": "",
        "option_map": "range",
        "dependency": []
      },
      "backgroundcolor": {
        "type": "colorpickeralpha",
        "heading": "Background Color",
        "description": "Controls the background color.   Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#testimonial_bg_color\" target=\"_blank\" rel=\"noopener noreferrer\">#f9f9fb</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-backgroundcolor\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"backgroundcolor\" value=\"\" data-default=\"#f9f9fb\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "backgroundcolor",
        "value": "",
        "default": "#f9f9fb",
        "default_option": "testimonial_bg_color",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "textcolor": {
        "type": "colorpickeralpha",
        "heading": "Text Color",
        "description": "Controls the text color.   Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#testimonial_text_color\" target=\"_blank\" rel=\"noopener noreferrer\">#4a4e57</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-textcolor\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"textcolor\" value=\"\" data-default=\"#4a4e57\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "textcolor",
        "value": "",
        "default": "#4a4e57",
        "default_option": "testimonial_text_color",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "random": {
        "type": "radio_button_set",
        "heading": "Random Order",
        "description": "Turn on to display testimonials in a random order.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#testimonials_random\" target=\"_blank\" rel=\"noopener noreferrer\">No</a>.",
        "param_name": "random",
        "value": {
          "": "Default",
          "yes": "Yes",
          "no": "No"
        },
        "default": "",
        "default_option": "testimonials_random",
        "default_subset": "",
        "option_map": "yesno",
        "dependency": []
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
        "default": [
          "small-visibility",
          "medium-visibility",
          "large-visibility"
        ],
        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Options</a>.",
        "dependency": []
      },
      "class": {
        "type": "textfield",
        "heading": "CSS Class",
        "description": "Add a class to the wrapping HTML element.",
        "param_name": "class",
        "value": "",
        "group": "General",
        "dependency": []
      },
      "id": {
        "type": "textfield",
        "heading": "CSS ID",
        "description": "Add an ID to the wrapping HTML element.",
        "param_name": "id",
        "value": "",
        "group": "General",
        "dependency": []
      }
    },
    "remove_from_atts": []
  },
  "fusion_testimonial": {
    "defaults": {
      "avatar": "male",
      "company": "",
      "image": "",
      "image_id": "",
      "image_border_radius": "",
      "link": "",
      "name": "",
      "target": "_self",
      "gender": ""
    },
    "settings_to_params": [],
    "name": "Testimonial",
    "shortcode": "fusion_testimonial",
    "hide_from_builder": true,
    "allow_generator": true,
    "params": {
      "name": {
        "type": "textfield",
        "heading": "Name",
        "description": "Insert the name of the person.",
        "param_name": "name",
        "value": "Your Content Goes Here",
        "placeholder": true,
        "dependency": []
      },
      "avatar": {
        "type": "radio_button_set",
        "heading": "Avatar",
        "description": "Choose which kind of Avatar to be displayed.",
        "param_name": "avatar",
        "value": {
          "none": "None",
          "male": "Male",
          "female": "Female",
          "image": "Image"
        },
        "icons": {
          "male": "<svg width=\"18\" height=\"18\" viewBox=\"0 0 1024 1024\"><path d=\"M889.366 737.92c-44.8-58.454-98.986-96.426-176.618-117.952l-72.748 254.698c0 23.466-19.2 42.666-42.666 42.666s-42.666-19.2-42.666-42.666v-202.666c0-29.44-23.894-53.334-53.334-53.334s-53.334 23.894-53.334 53.334v202.666c0 23.466-19.2 42.666-42.666 42.666s-42.666-19.2-42.666-42.666l-72.746-254.698c-77.654 21.76-131.84 59.498-176.64 117.952-17.708 23.040-27.308 69.334-27.948 94.080v106.666c0 47.146 38.186 85.334 85.334 85.334h661.334c47.146 0 85.334-38.186 85.334-85.334v-106.666c-0.642-24.746-10.242-71.040-27.97-94.080zM501.334 533.334c143.786 0 224-183.040 224-307.628s-100.268-225.706-224-225.706-224 101.12-224 225.706 77.652 307.628 224 307.628z\"></path></svg>",
          "female": "<svg width=\"18\" height=\"18\" viewBox=\"0 0 1024 1024\"><path d=\"M889.366 737.92c-24.96-32.618-52.886-58.88-86.4-79.552-51.82 114.966-167.446 194.966-301.632 194.966s-249.814-80-301.674-194.986c-33.28 20.694-61.418 46.934-86.378 79.552-17.708 23.060-27.33 69.354-27.948 94.1 0.214 6.4 0 106.666 0 106.666 0 47.146 38.186 85.334 85.334 85.334h661.334c47.146 0 85.334-38.186 85.334-85.334 0 0-0.214-100.266 0-106.666-0.642-24.746-10.242-71.040-27.97-94.080zM385.472 602.666c-17.898 1.92-34.986 4.266-51.178 7.040-18.56 4.694-32.64 21.546-32.64 41.6 0 8.32 2.346 15.766 6.4 22.4 44.8 57.388 114.752 94.294 193.28 94.294 76.586 0 144.854-34.986 189.866-89.814 5.952-7.254 9.366-16.64 9.366-26.88 0-20.906-15.146-38.4-35.2-42.026-16.618-3.008-34.134-5.568-52.886-7.488-24.106-4.458-42.24-21.526-42.24-47.126 0-23.466 17.472-41.366 40.96-44.374 2.326-0.426 7.872-0.618 7.872-0.618 114.794-8.128 192.874-31.382 244.266-75.754 7.062-7.466 11.328-17.494 11.328-28.586 0-22.186-16.854-40.32-38.4-42.454-63.36-12.8-110.932-65.28-110.932-128.214v-8.96c0-124.586-100.268-225.706-224-225.706s-224 101.12-224 225.706v8.96c0 62.934-47.574 115.414-110.934 128.214-21.546 2.134-38.4 20.266-38.4 42.454 0 11.094 4.266 21.12 11.286 28.586 51.648 44.374 129.706 67.626 244.714 75.754 3.414 0 6.634 0.214 9.6 0.618 23.872 3.414 38.806 20.48 38.806 44.374 0.020 27.308-20.438 44.8-46.934 48z\"></path></svg>",
          "image": "<span class=\"fusiona-image\" style=\"font-size:18px;\"></span>"
        },
        "default": "male",
        "dependency": []
      },
      "image": {
        "type": "upload",
        "heading": "Custom Avatar",
        "description": "Upload a custom avatar image.",
        "param_name": "image",
        "value": "",
        "dependency": [
          {
            "element": "avatar",
            "value": "image",
            "operator": "=="
          }
        ]
      },
      "image_id": {
        "type": "textfield",
        "heading": "Avatar Image ID",
        "description": "Avatar Image ID from Media Library.",
        "param_name": "image_id",
        "value": "",
        "hidden": true,
        "dependency": []
      },
      "image_border_radius": {
        "type": "textfield",
        "heading": "Border Radius",
        "description": "Choose the radius of the testimonial image. In pixels (px), ex: 1px, or &quot;round&quot;. ",
        "param_name": "image_border_radius",
        "value": "",
        "dependency": [
          {
            "element": "avatar",
            "value": "image",
            "operator": "=="
          }
        ]
      },
      "company": {
        "type": "textfield",
        "heading": "Company",
        "description": "Insert the name of the company.",
        "param_name": "company",
        "value": "Your Content Goes Here",
        "placeholder": true,
        "dependency": []
      },
      "link": {
        "type": "link_selector",
        "heading": "Link",
        "description": "Add the URL the company name will link to.",
        "param_name": "link",
        "value": "",
        "dependency": []
      },
      "target": {
        "type": "radio_button_set",
        "heading": "Link Target",
        "description": "_self = open in same window. <br />_blank = open in new window.",
        "param_name": "target",
        "value": {
          "_self": "_self",
          "_blank": "_blank"
        },
        "default": "_self",
        "dependency": [
          {
            "element": "link",
            "value": "",
            "operator": "!="
          }
        ]
      },
      "element_content": {
        "type": "tinymce",
        "heading": "Testimonial Content",
        "description": "Add the testimonial content.",
        "param_name": "element_content",
        "value": "Your Content Goes Here",
        "placeholder": true,
        "dependency": []
      }
    },
    "remove_from_atts": []
  },
  "fusion_text": {
    "defaults": {
      "animation_direction": "left",
      "animation_offset": "top-into-view",
      "animation_speed": "",
      "animation_type": "",
      "class": "",
      "columns": "1",
      "column_min_width": "100px",
      "column_spacing": "2em",
      "hide_on_mobile": "small-visibility, medium-visibility, large-visibility",
      "id": "",
      "rule_color": "#e2e2e2",
      "rule_size": "1",
      "rule_style": "none"
    },
    "settings_to_params": {
      "text_rule_style": "rule_style",
      "text_rule_size": "rule_size",
      "text_rule_color": "rule_color",
      "text_column_spacing": "column_spacing",
      "text_column_min_width": "column_min_width",
      "text_columns": "columns"
    },
    "name": "Text Block",
    "shortcode": "fusion_text",
    "icon": "fusiona-font",
    "preview": "/var/www/html/wordpress_avada_624/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-text-preview.php",
    "preview_id": "fusion-builder-block-module-text-preview-template",
    "allow_generator": true,
    "inline_editor": true,
    "help_url": "https://theme-fusion.com/documentation/fusion-builder/elements/text-block-element/",
    "params": {
      "columns": {
        "type": "range",
        "heading": "Number Of Inline Columns",
        "description": "Set the number of columns the text should be broken into.<br />IMPORTANT: This feature is designed to be used for running text, images, dropcaps and other inline content. While some block elements will work, their usage is not recommended and others can easily break the layout.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#text_columns\" target=\"_blank\" rel=\"noopener noreferrer\">1</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-columns\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"columns\" value=\"\" data-default=\"1\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "columns",
        "default": "1",
        "min": "1",
        "max": "6",
        "step": "1",
        "default_option": "text_columns",
        "default_subset": "",
        "option_map": "range",
        "dependency": []
      },
      "column_min_width": {
        "type": "textfield",
        "heading": "Column Min Width",
        "description": "Set the minimum width for each column, this allows your columns to gracefully break into the selected size as the screen width narrows. Leave this option empty if you wish to keep the same amount of columns from desktop to mobile. Enter value including any valid CSS unit, ex: 200px.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#text_column_min_width\" target=\"_blank\" rel=\"noopener noreferrer\">100px</a>.",
        "param_name": "column_min_width",
        "value": "",
        "dependency": [
          {
            "element": "columns",
            "value": "1",
            "operator": ">"
          }
        ],
        "default_option": "text_column_min_width",
        "default_subset": "",
        "option_map": ""
      },
      "column_spacing": {
        "type": "textfield",
        "heading": "Column Spacing",
        "description": "Controls the column spacing between one column to the next. Enter value including any valid CSS unit besides % which does not work for inline columns, ex: 2em.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#text_column_spacing\" target=\"_blank\" rel=\"noopener noreferrer\">2em</a>.",
        "param_name": "column_spacing",
        "value": "",
        "dependency": [
          {
            "element": "columns",
            "value": "1",
            "operator": ">"
          }
        ],
        "default_option": "text_column_spacing",
        "default_subset": "",
        "option_map": ""
      },
      "rule_style": {
        "type": "select",
        "heading": "Rule Style",
        "description": "Select the style of the vertical line between columns. Some of the styles depend on the rule size and color.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#text_rule_style\" target=\"_blank\" rel=\"noopener noreferrer\">None</a>.",
        "param_name": "rule_style",
        "value": {
          "default": "Default",
          "none": "None",
          "solid": "Solid",
          "dashed": "Dashed",
          "dotted": "Dotted",
          "double": "Double",
          "groove": "Groove",
          "ridge": "Ridge"
        },
        "default": "default",
        "dependency": [
          {
            "element": "columns",
            "value": "1",
            "operator": ">"
          }
        ],
        "default_option": "text_rule_style",
        "default_subset": "",
        "option_map": "select"
      },
      "rule_size": {
        "type": "range",
        "heading": "Rule Size",
        "description": "Sets the size of the vertical line between columns. The rule is rendered as &quot;below&quot; spacing and columns, so it can span over the gap between columns if it is larger than the column spacing amount. In pixels.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#text_rule_size\" target=\"_blank\" rel=\"noopener noreferrer\">1</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-rule_size\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"rule_size\" value=\"\" data-default=\"1\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "rule_size",
        "default": "1",
        "min": "1",
        "max": "50",
        "step": "1",
        "dependency": [
          {
            "element": "columns",
            "value": "1",
            "operator": ">"
          },
          {
            "element": "rule_style",
            "value": "none",
            "operator": "!="
          }
        ],
        "default_option": "text_rule_size",
        "default_subset": "",
        "option_map": "range"
      },
      "rule_color": {
        "type": "colorpickeralpha",
        "heading": "Rule Color",
        "description": "Controls the color of the vertical line between columns.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#text_rule_color\" target=\"_blank\" rel=\"noopener noreferrer\">#e2e2e2</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-rule_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"rule_color\" value=\"\" data-default=\"#e2e2e2\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "rule_color",
        "value": "",
        "default": "#e2e2e2",
        "dependency": [
          {
            "element": "columns",
            "value": "1",
            "operator": ">"
          },
          {
            "element": "rule_style",
            "value": "none",
            "operator": "!="
          }
        ],
        "default_option": "text_rule_color",
        "default_subset": "",
        "option_map": ""
      },
      "element_content": {
        "type": "tinymce",
        "heading": "Content",
        "description": "Enter some content for this text block.",
        "param_name": "element_content",
        "value": "Your Content Goes Here",
        "placeholder": true,
        "dynamic_data": true,
        "dependency": []
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
        "group": "Extras",
        "preview": {
          "selector": ".fusion-text",
          "type": "animation"
        },
        "dependency": []
      },
      "animation_direction": {
        "type": "radio_button_set",
        "heading": "Direction of Animation",
        "description": "Select the incoming direction for the animation.",
        "param_name": "animation_direction",
        "default": "left",
        "group": "Extras",
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          }
        ],
        "value": {
          "down": "Top",
          "right": "Right",
          "up": "Bottom",
          "left": "Left",
          "static": "Static"
        },
        "preview": {
          "selector": ".fusion-text",
          "type": "animation"
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
        "group": "Extras",
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          }
        ],
        "preview": {
          "selector": ".fusion-text",
          "type": "animation"
        }
      },
      "animation_offset": {
        "type": "select",
        "heading": "Offset of Animation",
        "description": "Controls when the animation should start.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#animation_offset\" target=\"_blank\" rel=\"noopener noreferrer\">Top Of Element Hits Bottom Of Viewport</a>.",
        "param_name": "animation_offset",
        "default": "",
        "group": "Extras",
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          }
        ],
        "value": {
          "": "Default",
          "top-into-view": "Top of element hits bottom of viewport",
          "top-mid-of-view": "Top of element hits middle of viewport",
          "bottom-in-view": "Bottom of element enters viewport"
        },
        "default_option": "animation_offset",
        "default_subset": "",
        "option_map": "select"
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
        "default": [
          "small-visibility",
          "medium-visibility",
          "large-visibility"
        ],
        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Options</a>.",
        "dependency": []
      },
      "class": {
        "type": "textfield",
        "heading": "CSS Class",
        "description": "Add a class to the wrapping HTML element.",
        "param_name": "class",
        "value": "",
        "dependency": []
      },
      "id": {
        "type": "textfield",
        "heading": "CSS ID",
        "description": "Add an ID to the wrapping HTML element.",
        "param_name": "id",
        "value": "",
        "dependency": []
      }
    },
    "remove_from_atts": []
  },
  "fusion_title": {
    "defaults": {
      "animation_direction": "left",
      "animation_offset": "top-into-view",
      "animation_speed": "",
      "animation_type": "",
      "hide_on_mobile": "small-visibility, medium-visibility, large-visibility",
      "class": "",
      "id": "",
      "title_type": "text",
      "rotation_effect": "bounceIn",
      "display_time": "1200",
      "highlight_effect": "circle",
      "loop_animation": "off",
      "highlight_width": "9",
      "highlight_top_margin": "0",
      "before_text": "",
      "rotation_text": "",
      "highlight_text": "",
      "fusion_font_family_title_font": "",
      "fusion_font_variant_title_font": "",
      "fusion_font_subset_title_font": "",
      "after_text": "",
      "content_align": "left",
      "font_size": "",
      "animated_font_size": "",
      "letter_spacing": "",
      "line_height": "",
      "margin_bottom": "15px",
      "margin_bottom_mobile": "10px",
      "margin_top": "10px",
      "margin_top_mobile": "10px",
      "sep_color": "#e2e2e2",
      "size": 1,
      "style_tag": "",
      "style_type": "double solid",
      "text_color": "",
      "animated_text_color": "",
      "highlight_color": ""
    },
    "extras": {
      "content_break_point": "800"
    },
    "settings_to_params": {
      "title_margin[top]": "margin_top",
      "title_margin[bottom]": "margin_bottom",
      "title_margin_mobile[top]": "margin_top_mobile",
      "title_margin_mobile[bottom]": "margin_bottom_mobile",
      "title_border_color": "sep_color",
      "title_style_type": "style_type"
    },
    "settings_to_extras": {
      "content_break_point": "content_break_point"
    },
    "name": "Title",
    "shortcode": "fusion_title",
    "icon": "fusiona-H",
    "preview": "/var/www/html/wordpress_avada_624/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-title-preview.php",
    "preview_id": "fusion-builder-block-module-title-preview-template",
    "allow_generator": true,
    "inline_editor": true,
    "help_url": "https://theme-fusion.com/documentation/fusion-builder/elements/title-element/",
    "params": {
      "title_type": {
        "type": "radio_button_set",
        "heading": "Title Type",
        "description": "Choose the title type.",
        "param_name": "title_type",
        "value": {
          "text": "Text",
          "rotating": "Rotating",
          "highlight": "Highlight"
        },
        "default": "text",
        "dependency": []
      },
      "rotation_effect": {
        "type": "select",
        "heading": "Rotation Effect",
        "description": "Select the style for rotation text.",
        "param_name": "rotation_effect",
        "default": "bounceIn",
        "value": {
          "bounceIn": "Bounce",
          "clipIn": "Clip",
          "fadeIn": "Fade",
          "flipInX": "Flip",
          "lightSpeedIn": "Light Speed",
          "rollIn": "Roll",
          "typeIn": "Typing",
          "slideInDown": "Slide Down",
          "zoomIn": "Zoom"
        },
        "dependency": [
          {
            "element": "title_type",
            "value": "rotating",
            "operator": "=="
          }
        ]
      },
      "display_time": {
        "type": "range",
        "heading": "Display Time",
        "description": "Controls the delay of animation between each text in a set. In milliseconds, 1000 = 1 second.",
        "param_name": "display_time",
        "value": "1200",
        "min": "0",
        "max": "10000",
        "step": "100",
        "dependency": [
          {
            "element": "title_type",
            "value": "rotating",
            "operator": "=="
          }
        ]
      },
      "highlight_effect": {
        "type": "select",
        "heading": "Highlight Effect",
        "description": "Select the highlight effect.",
        "param_name": "highlight_effect",
        "default": "circle",
        "value": {
          "circle": "Circle",
          "curly": "Curly",
          "underline": "Underline",
          "double": "Double",
          "double_underline": "Double Underline",
          "underline_zigzag": "Underline Zigzag",
          "diagonal_bottom_left": "Diagonal Bottom Left",
          "diagonal_top_left": "Diagonal Top Left",
          "strikethrough": "Strikethrough",
          "x": "X"
        },
        "dependency": [
          {
            "element": "title_type",
            "value": "highlight",
            "operator": "=="
          }
        ]
      },
      "loop_animation": {
        "type": "radio_button_set",
        "heading": "Loop Animation",
        "description": "Turn on to loop the animation.",
        "param_name": "loop_animation",
        "default": "off",
        "value": {
          "off": "Off",
          "on": "On"
        },
        "dependency": [
          {
            "element": "title_type",
            "value": "text",
            "operator": "!="
          }
        ]
      },
      "highlight_width": {
        "type": "range",
        "heading": "Highlight Shape Width",
        "description": "Controls the width of highlight shape.",
        "param_name": "highlight_width",
        "value": "9",
        "min": "1",
        "max": "30",
        "step": "1",
        "dependency": [
          {
            "element": "title_type",
            "value": "highlight",
            "operator": "=="
          }
        ]
      },
      "highlight_top_margin": {
        "type": "range",
        "heading": "Highlight Top Margin",
        "description": "Controls the top margin of highlight shape.",
        "param_name": "highlight_top_margin",
        "value": "0",
        "min": "-30",
        "max": "30",
        "step": "1",
        "dependency": [
          {
            "element": "title_type",
            "value": "highlight",
            "operator": "=="
          },
          {
            "element": "highlight_effect",
            "value": "circle",
            "operator": "!="
          },
          {
            "element": "highlight_effect",
            "value": "double",
            "operator": "!="
          },
          {
            "element": "highlight_effect",
            "value": "diagonal_bottom_left",
            "operator": "!="
          },
          {
            "element": "highlight_effect",
            "value": "diagonal_top_left",
            "operator": "!="
          },
          {
            "element": "highlight_effect",
            "value": "strikethrough",
            "operator": "!="
          },
          {
            "element": "highlight_effect",
            "value": "x",
            "operator": "!="
          }
        ]
      },
      "before_text": {
        "type": "textfield",
        "heading": "Before Text",
        "description": "Enter before text.",
        "param_name": "before_text",
        "value": "",
        "group": "General",
        "dynamic_data": true,
        "dependency": [
          {
            "element": "title_type",
            "value": "text",
            "operator": "!="
          }
        ]
      },
      "rotation_text": {
        "type": "sortable_text",
        "heading": "Rotation Text",
        "description": "Enter text for rotation.",
        "param_name": "rotation_text",
        "placeholder": "Text",
        "add_label": "Add Rotation Text",
        "dependency": [
          {
            "element": "title_type",
            "value": "rotating",
            "operator": "=="
          }
        ]
      },
      "highlight_text": {
        "type": "textfield",
        "heading": "Highlighted Text",
        "description": "Enter text which should be highlighted.",
        "param_name": "highlight_text",
        "value": "",
        "dynamic_data": true,
        "dependency": [
          {
            "element": "title_type",
            "value": "highlight",
            "operator": "=="
          }
        ]
      },
      "after_text": {
        "type": "textfield",
        "heading": "After Text",
        "description": "Enter after text.",
        "param_name": "after_text",
        "value": "",
        "dynamic_data": true,
        "dependency": [
          {
            "element": "title_type",
            "value": "text",
            "operator": "!="
          }
        ]
      },
      "element_content": {
        "type": "tinymce",
        "heading": "Title",
        "description": "Insert the title text.",
        "param_name": "element_content",
        "value": "Your Content Goes Here",
        "placeholder": true,
        "dynamic_data": true,
        "dependency": [
          {
            "element": "title_type",
            "value": "text",
            "operator": "=="
          }
        ]
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
        "group": "Design",
        "dependency": []
      },
      "size": {
        "type": "radio_button_set",
        "heading": "HTML Heading Size",
        "description": "Choose the size of the HTML heading that should be used, h1-h6.",
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
        "group": "Design",
        "dependency": []
      },
      "font_size": {
        "type": "textfield",
        "heading": "Font Size",
        "description": "Controls the font size of the title. Enter value including any valid CSS unit, ex: 20px. Leave empty if the global font size for the corresponding heading size (h1-h6) should be used: <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&#038;lang=en#headers_typography_important_note_info\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Option Heading Settings</a>.",
        "param_name": "font_size",
        "value": "",
        "group": "Design",
        "dependency": []
      },
      "animated_font_size": {
        "type": "textfield",
        "heading": "Animated Text Font Size",
        "description": "Controls the font size of the animated text. Enter value including any valid CSS unit, ex: 20px. Leave empty if the global font size for the corresponding heading size (h1-h6) should be used: <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&#038;lang=en#headers_typography_important_note_info\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Option Heading Settings</a>.",
        "param_name": "animated_font_size",
        "value": "",
        "group": "Design",
        "dependency": [
          {
            "element": "title_type",
            "value": "text",
            "operator": "!="
          }
        ]
      },
      "title_font": {
        "type": "font_family",
        "remove_from_atts": true,
        "heading": "Font Family",
        "description": "Controls the font family of the title text.  Leave empty if the global font family for the corresponding heading size (h1-h6) should be used: <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&#038;lang=en#headers_typography_important_note_info\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Option Heading Settings</a>.",
        "param_name": "title_font",
        "group": "Design",
        "default": {
          "font-family": "",
          "font-variant": "400",
          "font-subset": "latin"
        },
        "dependency": []
      },
      "line_height": {
        "type": "textfield",
        "heading": "Line Height",
        "description": "Controls the line height of the title. Enter value including any valid CSS unit, ex: 28px. Leave empty if the global line height for the corresponding heading size (h1-h6) should be used: <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&#038;lang=en#headers_typography_important_note_info\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Option Heading Settings</a>.",
        "param_name": "line_height",
        "value": "",
        "group": "Design",
        "dependency": []
      },
      "letter_spacing": {
        "type": "textfield",
        "heading": "Letter Spacing",
        "description": "Controls the letter spacing of the title. Enter value including any valid CSS unit, ex: 2px. Leave empty if the global letter spacing for the corresponding heading size (h1-h6) should be used: <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&#038;lang=en#headers_typography_important_note_info\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Option Heading Settings</a>.",
        "param_name": "letter_spacing",
        "value": "",
        "group": "Design",
        "dependency": []
      },
      "dimensions": {
        "type": "dimension",
        "remove_from_atts": true,
        "heading": "Margin",
        "description": "Spacing above and below the title. In px, em or %, e.g. 10px.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#title_margin\" target=\"_blank\" rel=\"noopener noreferrer\">10px, 15px</a>.",
        "param_name": "dimensions",
        "value": {
          "margin_top": "",
          "margin_bottom": ""
        },
        "group": "Design",
        "shortcode": "fusion_title",
        "default_option": "title_margin",
        "default_subset": [
          "top",
          "bottom"
        ],
        "option_map": "",
        "dependency": []
      },
      "margin_mobile": {
        "type": "dimension",
        "remove_from_atts": true,
        "heading": "Mobile Margin",
        "description": "Spacing above and below the title on mobiles. In px, em or %, e.g. 10px.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#title_margin_mobile\" target=\"_blank\" rel=\"noopener noreferrer\">10px, 10px</a>.",
        "param_name": "margin_mobile",
        "value": {
          "margin_top_mobile": "",
          "margin_bottom_mobile": ""
        },
        "group": "Design",
        "shortcode": "fusion_title",
        "default_option": "title_margin_mobile",
        "default_subset": [
          "top",
          "bottom"
        ],
        "option_map": "",
        "dependency": []
      },
      "text_color": {
        "type": "colorpickeralpha",
        "heading": "Font Color",
        "description": "Controls the color of the title, ex: #000. Leave empty if the global color for the corresponding heading size (h1-h6) should be used: <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&#038;lang=en#headers_typography_important_note_info\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Option Heading Settings</a>.",
        "param_name": "text_color",
        "value": "",
        "default": "#212934",
        "group": "Design",
        "dependency": []
      },
      "animated_text_color": {
        "type": "colorpickeralpha",
        "heading": "Animated Text Font Color",
        "description": "Controls the color of the animated title, ex: #000. Leave empty if the global color for the corresponding heading size (h1-h6) should be used: <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&#038;lang=en#headers_typography_important_note_info\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Option Heading Settings</a>.",
        "param_name": "animated_text_color",
        "value": "",
        "default": "#212934",
        "group": "Design",
        "dependency": [
          {
            "element": "title_type",
            "value": "text",
            "operator": "!="
          }
        ]
      },
      "highlight_color": {
        "type": "colorpickeralpha",
        "heading": "Highlight Shape Color",
        "description": "Controls the color of the highlight shape, ex: #000.",
        "param_name": "highlight_color",
        "value": "",
        "default": "",
        "group": "Design",
        "dependency": [
          {
            "element": "title_type",
            "value": "highlight",
            "operator": "=="
          }
        ]
      },
      "style_type": {
        "type": "select",
        "heading": "Separator",
        "description": "Choose the kind of the title separator you want to use.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#title_style_type\" target=\"_blank\" rel=\"noopener noreferrer\">Double Solid</a>.",
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
        "group": "Design",
        "dependency": [
          {
            "element": "title_type",
            "value": "text",
            "operator": "=="
          }
        ],
        "default_option": "title_style_type",
        "default_subset": "",
        "option_map": "select"
      },
      "sep_color": {
        "type": "colorpickeralpha",
        "heading": "Separator Color",
        "param_name": "sep_color",
        "value": "",
        "description": "Controls the separator color.   Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#title_border_color\" target=\"_blank\" rel=\"noopener noreferrer\">#e2e2e2</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-sep_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"sep_color\" value=\"\" data-default=\"#e2e2e2\">Reset to default.</a><span>Using default value.</span></span>",
        "group": "Design",
        "dependency": [
          {
            "element": "style_type",
            "value": "none",
            "operator": "!="
          },
          {
            "element": "title_type",
            "value": "text",
            "operator": "=="
          }
        ],
        "default": "#e2e2e2",
        "default_option": "title_border_color",
        "default_subset": "",
        "option_map": ""
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
        "group": "Extras",
        "preview": {
          "selector": ".fusion-title",
          "type": "animation"
        },
        "dependency": []
      },
      "animation_direction": {
        "type": "radio_button_set",
        "heading": "Direction of Animation",
        "description": "Select the incoming direction for the animation.",
        "param_name": "animation_direction",
        "default": "left",
        "group": "Extras",
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          }
        ],
        "value": {
          "down": "Top",
          "right": "Right",
          "up": "Bottom",
          "left": "Left",
          "static": "Static"
        },
        "preview": {
          "selector": ".fusion-title",
          "type": "animation"
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
        "group": "Extras",
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          }
        ],
        "preview": {
          "selector": ".fusion-title",
          "type": "animation"
        }
      },
      "animation_offset": {
        "type": "select",
        "heading": "Offset of Animation",
        "description": "Controls when the animation should start.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#animation_offset\" target=\"_blank\" rel=\"noopener noreferrer\">Top Of Element Hits Bottom Of Viewport</a>.",
        "param_name": "animation_offset",
        "default": "",
        "group": "Extras",
        "dependency": [
          {
            "element": "animation_type",
            "value": "",
            "operator": "!="
          }
        ],
        "value": {
          "": "Default",
          "top-into-view": "Top of element hits bottom of viewport",
          "top-mid-of-view": "Top of element hits middle of viewport",
          "bottom-in-view": "Bottom of element enters viewport"
        },
        "default_option": "animation_offset",
        "default_subset": "",
        "option_map": "select"
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
        "default": [
          "small-visibility",
          "medium-visibility",
          "large-visibility"
        ],
        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Options</a>.",
        "dependency": []
      },
      "class": {
        "type": "textfield",
        "heading": "CSS Class",
        "param_name": "class",
        "value": "",
        "description": "Add a class to the wrapping HTML element.",
        "dependency": []
      },
      "id": {
        "type": "textfield",
        "heading": "CSS ID",
        "param_name": "id",
        "value": "",
        "description": "Add an ID to the wrapping HTML element.",
        "dependency": []
      }
    },
    "remove_from_atts": [
      "title_font",
      "dimensions",
      "margin_mobile"
    ]
  },
  "fusion_accordion": {
    "defaults": {
      "background_color": "#ffffff",
      "border_color": "#e2e2e2",
      "border_size": "1px",
      "boxed_mode": "0",
      "class": "",
      "divider_line": "1",
      "hide_on_mobile": "small-visibility, medium-visibility, large-visibility",
      "hover_color": "#f9f9fb",
      "icon_alignment": "left",
      "icon_boxed_mode": "1",
      "icon_box_color": "#212934",
      "icon_color": "#ffffff",
      "icon_size": "16",
      "id": "",
      "title_font_size": "28px",
      "toggle_hover_accent_color": "#65bc7b",
      "type": "accordions"
    },
    "settings_to_params": {
      "accordion_divider_line": "divider_line",
      "accordion_boxed_mode": "boxed_mode",
      "accordion_border_size": "border_size",
      "accordian_border_color": "border_color",
      "accordian_background_color": "background_color",
      "accordian_hover_color": "hover_color",
      "accordion_type": "type"
    },
    "name": "Toggles",
    "shortcode": "fusion_accordion",
    "multi": "multi_element_parent",
    "element_child": "fusion_toggle",
    "icon": "fusiona-expand-alt",
    "preview": "/var/www/html/wordpress_avada_624/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-toggles-preview.php",
    "preview_id": "fusion-builder-block-module-toggles-preview-template",
    "help_url": "https://theme-fusion.com/documentation/fusion-builder/elements/toggles-element/",
    "params": {
      "element_content": {
        "type": "tinymce",
        "heading": "Content",
        "description": "Enter some content for this toggles element.",
        "param_name": "element_content",
        "value": "[fusion_toggle title=\"Your Content Goes Here\" open=\"no\" ]Your Content Goes Here[/fusion_toggle]",
        "dependency": []
      },
      "type": {
        "type": "radio_button_set",
        "heading": "Toggles or Accordions",
        "description": "Toggles allow several items to be open at a time. Accordions only allow one item to be open at a time.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#accordion_type\" target=\"_blank\" rel=\"noopener noreferrer\">Accordions</a>.",
        "param_name": "type",
        "value": {
          "": "Default",
          "toggles": "Toggles",
          "accordions": "Accordions"
        },
        "default": "",
        "default_option": "accordion_type",
        "default_subset": "",
        "option_map": "select",
        "dependency": []
      },
      "boxed_mode": {
        "type": "radio_button_set",
        "heading": "Boxed Mode",
        "description": "Choose to display items in boxed mode.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#accordion_boxed_mode\" target=\"_blank\" rel=\"noopener noreferrer\">No</a>.",
        "param_name": "boxed_mode",
        "value": {
          "": "Default",
          "yes": "Yes",
          "no": "No"
        },
        "default": "",
        "default_option": "accordion_boxed_mode",
        "default_subset": "",
        "option_map": "yesno",
        "dependency": []
      },
      "border_size": {
        "type": "range",
        "heading": "Boxed Mode Border Width",
        "description": "Set the border width for toggle item. In pixels.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#accordion_border_size\" target=\"_blank\" rel=\"noopener noreferrer\">1</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-border_size\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"border_size\" value=\"\" data-default=\"1\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "border_size",
        "value": "1",
        "default": "1",
        "min": "0",
        "max": "20",
        "step": "1",
        "dependency": [
          {
            "element": "boxed_mode",
            "value": "no",
            "operator": "!="
          },
          {
            "element": "boxed_mode",
            "value": "",
            "operator": "!="
          }
        ],
        "default_option": "accordion_border_size",
        "default_subset": "",
        "option_map": "range"
      },
      "border_color": {
        "type": "colorpickeralpha",
        "heading": "Boxed Mode Border Color",
        "description": "Set the border color for toggle item.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#accordian_border_color\" target=\"_blank\" rel=\"noopener noreferrer\">#e2e2e2</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-border_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"border_color\" value=\"\" data-default=\"#e2e2e2\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "border_color",
        "value": "",
        "default": "#e2e2e2",
        "dependency": [
          {
            "element": "boxed_mode",
            "value": "no",
            "operator": "!="
          },
          {
            "element": "border_size",
            "value": "0",
            "operator": "!="
          },
          {
            "element": "boxed_mode",
            "value": "",
            "operator": "!="
          }
        ],
        "default_option": "accordian_border_color",
        "default_subset": "",
        "option_map": ""
      },
      "background_color": {
        "type": "colorpickeralpha",
        "heading": "Boxed Mode Background Color",
        "description": "Set the background color for toggle item.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#accordian_background_color\" target=\"_blank\" rel=\"noopener noreferrer\">#ffffff</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-background_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"background_color\" value=\"\" data-default=\"#ffffff\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "background_color",
        "value": "",
        "default": "#ffffff",
        "dependency": [
          {
            "element": "boxed_mode",
            "value": "no",
            "operator": "!="
          },
          {
            "element": "boxed_mode",
            "value": "",
            "operator": "!="
          }
        ],
        "default_option": "accordian_background_color",
        "default_subset": "",
        "option_map": ""
      },
      "hover_color": {
        "type": "colorpickeralpha",
        "heading": "Boxed Mode Background Hover Color",
        "description": "Set the background hover color for toggle item.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#accordian_hover_color\" target=\"_blank\" rel=\"noopener noreferrer\">#f9f9fb</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-hover_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"hover_color\" value=\"\" data-default=\"#f9f9fb\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "hover_color",
        "value": "",
        "default": "#f9f9fb",
        "dependency": [
          {
            "element": "boxed_mode",
            "value": "no",
            "operator": "!="
          },
          {
            "element": "boxed_mode",
            "value": "",
            "operator": "!="
          }
        ],
        "preview": {
          "selector": ".fusion-builder-live-child-element,.panel-title>a",
          "type": "class",
          "toggle": "hover"
        },
        "default_option": "accordian_hover_color",
        "default_subset": "",
        "option_map": ""
      },
      "divider_line": {
        "type": "radio_button_set",
        "heading": "Divider Line",
        "description": "Choose to display a divider line between each item.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#accordion_divider_line\" target=\"_blank\" rel=\"noopener noreferrer\">Yes</a>.",
        "param_name": "divider_line",
        "value": {
          "": "Default",
          "yes": "Yes",
          "no": "No"
        },
        "default": "",
        "dependency": [
          {
            "element": "boxed_mode",
            "value": "yes",
            "operator": "!="
          }
        ],
        "default_option": "accordion_divider_line",
        "default_subset": "",
        "option_map": "yesno"
      },
      "title_font_size": {
        "type": "textfield",
        "heading": "Title Size",
        "description": "Controls the size of the title. Enter value including any valid CSS unit, ex: 13px.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#accordion_title_font_size\" target=\"_blank\" rel=\"noopener noreferrer\">28px</a>.",
        "param_name": "title_font_size",
        "value": "",
        "default_option": "accordion_title_font_size",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "icon_size": {
        "heading": "Toggle Icon Size",
        "description": "Set the size of the icon. In pixels (px), ex: 13px.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#accordion_icon_size\" target=\"_blank\" rel=\"noopener noreferrer\">16</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-icon_size\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"icon_size\" value=\"\" data-default=\"16\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "icon_size",
        "default": "16",
        "min": "1",
        "max": "40",
        "step": "1",
        "type": "range",
        "default_option": "accordion_icon_size",
        "default_subset": "",
        "option_map": "range",
        "dependency": []
      },
      "icon_color": {
        "type": "colorpickeralpha",
        "heading": "Toggle Icon Color",
        "description": "Set the color of icon in toggle box.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#accordian_icon_color\" target=\"_blank\" rel=\"noopener noreferrer\">#ffffff</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-icon_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"icon_color\" value=\"\" data-default=\"#ffffff\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "icon_color",
        "value": "",
        "default": "#ffffff",
        "default_option": "accordian_icon_color",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "icon_boxed_mode": {
        "type": "radio_button_set",
        "heading": "Toggle Icon Boxed Mode",
        "description": "Choose to display icon in boxed mode.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#accordion_icon_boxed\" target=\"_blank\" rel=\"noopener noreferrer\">Yes</a>.",
        "param_name": "icon_boxed_mode",
        "value": {
          "": "Default",
          "yes": "Yes",
          "no": "No"
        },
        "default": "",
        "default_option": "accordion_icon_boxed",
        "default_subset": "",
        "option_map": "yesno",
        "dependency": []
      },
      "icon_box_color": {
        "type": "colorpickeralpha",
        "heading": "Toggle Icon Inactive Box Color",
        "description": "Controls the color of the inactive toggle box.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#accordian_inactive_color\" target=\"_blank\" rel=\"noopener noreferrer\">#212934</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-icon_box_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"icon_box_color\" value=\"\" data-default=\"#212934\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "icon_box_color",
        "value": "",
        "default": "#212934",
        "dependency": [
          {
            "element": "icon_boxed_mode",
            "value": "no",
            "operator": "!="
          }
        ],
        "default_option": "accordian_inactive_color",
        "default_subset": "",
        "option_map": ""
      },
      "icon_alignment": {
        "type": "radio_button_set",
        "heading": "Toggle Icon Alignment",
        "description": "Controls the alignment of toggle icon.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#accordion_icon_align\" target=\"_blank\" rel=\"noopener noreferrer\">Left</a>.",
        "param_name": "icon_alignment",
        "value": {
          "": "Default",
          "left": "Left",
          "right": "Right"
        },
        "default": "",
        "default_option": "accordion_icon_align",
        "default_subset": "",
        "option_map": "select",
        "dependency": []
      },
      "toggle_hover_accent_color": {
        "type": "colorpickeralpha",
        "heading": "Toggle Hover Accent Color",
        "description": "Controls the accent color on hover for icon box and title.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#accordian_active_color\" target=\"_blank\" rel=\"noopener noreferrer\">#65bc7b</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-toggle_hover_accent_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"toggle_hover_accent_color\" value=\"\" data-default=\"#65bc7b\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "toggle_hover_accent_color",
        "value": "",
        "default": "#65bc7b",
        "preview": {
          "selector": ".panel-title>a,.fusion-toggle-boxed-mode",
          "type": "class",
          "toggle": "hover"
        },
        "default_option": "accordian_active_color",
        "default_subset": "",
        "option_map": "",
        "dependency": []
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
        "default": [
          "small-visibility",
          "medium-visibility",
          "large-visibility"
        ],
        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Options</a>.",
        "dependency": []
      },
      "class": {
        "type": "textfield",
        "heading": "CSS Class",
        "description": "Add a class to the wrapping HTML element.",
        "param_name": "class",
        "value": "",
        "group": "General",
        "dependency": []
      },
      "id": {
        "type": "textfield",
        "heading": "CSS ID",
        "description": "Add an ID to the wrapping HTML element.",
        "param_name": "id",
        "value": "",
        "group": "General",
        "dependency": []
      }
    },
    "remove_from_atts": []
  },
  "fusion_toggle": {
    "defaults": {
      "open": "no",
      "title": "",
      "class": "",
      "id": ""
    },
    "settings_to_params": [],
    "name": "Toggle",
    "shortcode": "fusion_toggle",
    "hide_from_builder": true,
    "allow_generator": true,
    "inline_editor": true,
    "inline_editor_shortcodes": true,
    "params": {
      "title": {
        "type": "textfield",
        "heading": "Title",
        "description": "Insert the toggle title.",
        "param_name": "title",
        "value": "Your Content Goes Here",
        "placeholder": true,
        "dynamic_data": true,
        "dependency": []
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
        "default": "no",
        "dependency": []
      },
      "element_content": {
        "type": "tinymce",
        "heading": "Toggle Content",
        "description": "Insert the toggle content.",
        "param_name": "element_content",
        "value": "Your Content Goes Here",
        "placeholder": true,
        "dynamic_data": true,
        "dependency": []
      },
      "class": {
        "type": "textfield",
        "heading": "CSS Class",
        "description": "Add a class to the wrapping child HTML element.",
        "param_name": "class",
        "value": "",
        "dependency": []
      },
      "id": {
        "type": "textfield",
        "heading": "CSS ID",
        "description": "Add an ID to the wrapping child HTML element.",
        "param_name": "id",
        "value": "",
        "dependency": []
      }
    },
    "remove_from_atts": []
  },
  "fusion_tooltip": {
    "defaults": {
      "class": "",
      "id": "",
      "animation": false,
      "delay": 0,
      "placement": "top",
      "title": "none",
      "trigger": "hover"
    },
    "name": "Tooltip",
    "shortcode": "fusion_tooltip",
    "icon": "fusiona-exclamation-sign",
    "generator_only": true,
    "help_url": "https://theme-fusion.com/documentation/fusion-builder/elements/tooltip-element/",
    "params": {
      "title": {
        "type": "textfield",
        "heading": "Tooltip Title",
        "description": "Insert the text that displays in the tooltip.",
        "param_name": "title",
        "value": "",
        "dependency": []
      },
      "element_content": {
        "type": "textarea",
        "heading": "Triggering Content",
        "description": "Insert the text that will activate the tooltip when hovered or clicked.",
        "param_name": "element_content",
        "value": "",
        "dependency": []
      },
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
        "group": "Design",
        "dependency": []
      },
      "trigger": {
        "type": "radio_button_set",
        "heading": "Tooltip Trigger Action",
        "description": "Choose action to trigger the tooltip.",
        "param_name": "trigger",
        "value": {
          "hover": "Hover",
          "click": "Click"
        },
        "default": "hover",
        "group": "Design",
        "dependency": []
      },
      "class": {
        "type": "textfield",
        "heading": "CSS Class",
        "param_name": "class",
        "value": "",
        "description": "Add a class to the wrapping HTML element.",
        "dependency": []
      },
      "id": {
        "type": "textfield",
        "heading": "CSS ID",
        "param_name": "id",
        "value": "",
        "description": "Add an ID to the wrapping HTML element.",
        "dependency": []
      }
    },
    "remove_from_atts": []
  },
  "fusion_login": {
    "defaults": {
      "hide_on_mobile": "small-visibility, medium-visibility, large-visibility",
      "class": "",
      "id": "",
      "button_fullwidth": "no",
      "caption": "",
      "caption_color": "",
      "form_field_layout": "stacked",
      "form_background_color": "#f9f9fb",
      "heading": "",
      "heading_color": "",
      "link_color": "",
      "lost_password_link": "",
      "redirection_link": "",
      "register_link": "",
      "register_note": "",
      "show_labels": "no",
      "show_placeholders": "yes",
      "show_remember_me": "no",
      "text_align": "center",
      "disable_form": "",
      "main_container": "form",
      "label_class": "fusion-hidden-content"
    },
    "extras": {
      "username_text": "Username",
      "password_text": "Password",
      "login_text": "Log in",
      "rememberme_text": "Remember Me",
      "lost_text": "Lost password?",
      "register_text": "Register",
      "button_size": "large",
      "lostfull_text": "Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.",
      "useroremail_text": "Username or Email",
      "reset_text": "Reset Password",
      "email_text": "Email",
      "registerfull_text": "Registration confirmation will be emailed to you.",
      "welcome_text": "Welcome Admin",
      "user_avatar": "<img alt='' src='http://0.gravatar.com/avatar/6a11f7f7ed4b64001e95a64bf77716bf?s=50&#038;d=mm&#038;r=g' srcset='http://0.gravatar.com/avatar/6a11f7f7ed4b64001e95a64bf77716bf?s=100&#038;d=mm&#038;r=g 2x' class='avatar avatar-50 photo' height='50' width='50' />",
      "dashboard_text": "Dashboard",
      "profile_text": "Profile",
      "logout_text": "Logout"
    },
    "settings_to_params": {
      "button_span": "button_fullwidth",
      "user_login_form_field_layout": "form_field_layout",
      "user_login_form_background_color": "form_background_color",
      "user_login_form_show_labels": "show_labels",
      "user_login_form_show_placeholders": "show_placeholders",
      "user_login_form_show_remember_me": "show_remember_me",
      "user_login_text_align": "text_align"
    },
    "settings_to_extras": {
      "button_size": "button_size"
    },
    "name": "User Login",
    "description": "Enter some content for this block",
    "shortcode": "fusion_login",
    "icon": "fusiona-calendar-check-o",
    "help_url": "https://theme-fusion.com/documentation/fusion-builder/elements/user-login-element/",
    "params": {
      "text_align": {
        "type": "radio_button_set",
        "heading": "Text Align",
        "description": "Choose the alignment of all content parts. &quot;Text Flow&quot; follows the default text align of the site. &quot;Center&quot; will center all elements.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#user_login_text_align\" target=\"_blank\" rel=\"noopener noreferrer\">Center</a>.",
        "param_name": "text_align",
        "value": {
          "": "Default",
          "textflow": "Text Flow",
          "center": "Center"
        },
        "default": "",
        "default_option": "user_login_text_align",
        "default_subset": "",
        "option_map": "select",
        "dependency": []
      },
      "form_field_layout": {
        "type": "radio_button_set",
        "heading": "Form Field Layout",
        "description": "Choose if form fields should be stacked and full width, or if they should be floated.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#user_login_form_field_layout\" target=\"_blank\" rel=\"noopener noreferrer\">Stacked</a>.",
        "param_name": "form_field_layout",
        "value": {
          "": "Default",
          "stacked": "Stacked",
          "floated": "Floated"
        },
        "default": "",
        "default_option": "user_login_form_field_layout",
        "default_subset": "",
        "option_map": "select",
        "dependency": []
      },
      "heading": {
        "type": "textfield",
        "heading": "Heading",
        "description": "Choose a heading text.",
        "param_name": "heading",
        "value": "Your Content Goes Here",
        "placeholder": true,
        "dependency": []
      },
      "heading_color": {
        "type": "colorpickeralpha",
        "heading": "Heading Color",
        "description": "Choose a heading color.",
        "param_name": "heading_color",
        "value": "",
        "dependency": [
          {
            "element": "heading",
            "value": "",
            "operator": "!="
          }
        ]
      },
      "caption": {
        "type": "textfield",
        "heading": "Caption",
        "description": "Choose a caption text.",
        "param_name": "caption",
        "value": "Your Content Goes Here",
        "placeholder": true,
        "dependency": []
      },
      "caption_color": {
        "type": "colorpickeralpha",
        "heading": "Caption Color",
        "description": "Choose a caption color.",
        "param_name": "caption_color",
        "value": "",
        "dependency": [
          {
            "element": "caption",
            "value": "",
            "operator": "!="
          }
        ]
      },
      "show_labels": {
        "type": "radio_button_set",
        "heading": "Show Labels",
        "description": "Controls if the form field labels should be shown.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#user_login_form_show_labels\" target=\"_blank\" rel=\"noopener noreferrer\">No</a>.",
        "param_name": "show_labels",
        "value": {
          "": "Default",
          "yes": "Yes",
          "no": "No"
        },
        "default": "",
        "default_option": "user_login_form_show_labels",
        "default_subset": "",
        "option_map": "select",
        "dependency": []
      },
      "show_placeholders": {
        "type": "radio_button_set",
        "heading": "Show Placeholders",
        "description": "Controls if the form field placeholders should be shown.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#user_login_form_show_placeholders\" target=\"_blank\" rel=\"noopener noreferrer\">Yes</a>.",
        "param_name": "show_placeholders",
        "value": {
          "": "Default",
          "yes": "Yes",
          "no": "No"
        },
        "default": "",
        "default_option": "user_login_form_show_placeholders",
        "default_subset": "",
        "option_map": "select",
        "dependency": []
      },
      "button_fullwidth": {
        "type": "radio_button_set",
        "heading": "Button Span",
        "description": "Choose to have the button span the full width.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#button_span\" target=\"_blank\" rel=\"noopener noreferrer\">No</a>.",
        "param_name": "button_fullwidth",
        "value": {
          "": "Default",
          "yes": "Yes",
          "no": "No"
        },
        "default": "",
        "default_option": "button_span",
        "default_subset": "",
        "option_map": "yesno",
        "dependency": []
      },
      "form_background_color": {
        "type": "colorpickeralpha",
        "heading": "Form Background Color",
        "description": "Choose a background color for the form wrapping box.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#user_login_form_background_color\" target=\"_blank\" rel=\"noopener noreferrer\">#f9f9fb</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-form_background_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"form_background_color\" value=\"\" data-default=\"#f9f9fb\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "form_background_color",
        "value": "",
        "default": "#f9f9fb",
        "default_option": "user_login_form_background_color",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "link_color": {
        "type": "colorpickeralpha",
        "heading": "Link Color",
        "description": "Choose a link color.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#link_color\" target=\"_blank\" rel=\"noopener noreferrer\">#212934</a>.",
        "param_name": "link_color",
        "value": "",
        "default": "#212934",
        "default_option": "link_color",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "show_remember_me": {
        "type": "radio_button_set",
        "heading": "Show Remember Me Checkbox",
        "description": "Controls if the remember me checkbox should be displayed in the login form.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#user_login_form_show_remember_me\" target=\"_blank\" rel=\"noopener noreferrer\">No</a>.",
        "param_name": "show_remember_me",
        "value": {
          "": "Default",
          "yes": "Yes",
          "no": "No"
        },
        "default": "",
        "default_option": "user_login_form_show_remember_me",
        "default_subset": "",
        "option_map": "select",
        "dependency": []
      },
      "redirection_link": {
        "type": "link_selector",
        "heading": "Redirection Link",
        "description": "Add the url to which a user should redirected after form submission. Leave empty to use the same page.",
        "param_name": "redirection_link",
        "value": "",
        "dependency": []
      },
      "register_link": {
        "type": "link_selector",
        "heading": "Register Link",
        "description": "Add the url the &quot;Register&quot; link should open.",
        "param_name": "register_link",
        "value": "",
        "dependency": []
      },
      "lost_password_link": {
        "type": "link_selector",
        "heading": "Lost Password Link",
        "description": "Add the url the &quot;Lost Password&quot; link should open.",
        "param_name": "lost_password_link",
        "value": "",
        "dependency": []
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
        "default": [
          "small-visibility",
          "medium-visibility",
          "large-visibility"
        ],
        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Options</a>.",
        "dependency": []
      },
      "class": {
        "type": "textfield",
        "heading": "CSS Class",
        "description": "Add a class to the wrapping HTML element.",
        "param_name": "class",
        "value": "",
        "group": "General",
        "dependency": []
      },
      "id": {
        "type": "textfield",
        "heading": "CSS ID",
        "description": "Add an ID to the wrapping HTML element.",
        "param_name": "id",
        "value": "",
        "group": "General",
        "dependency": []
      }
    },
    "remove_from_atts": []
  },
  "fusion_lost_password": {
    "defaults": {
      "hide_on_mobile": "small-visibility, medium-visibility, large-visibility",
      "class": "",
      "id": "",
      "button_fullwidth": "no",
      "caption": "",
      "caption_color": "",
      "form_field_layout": "stacked",
      "form_background_color": "#f9f9fb",
      "heading": "",
      "heading_color": "",
      "link_color": "",
      "lost_password_link": "",
      "redirection_link": "",
      "register_link": "",
      "register_note": "",
      "show_labels": "no",
      "show_placeholders": "yes",
      "show_remember_me": "no",
      "text_align": "center",
      "disable_form": "",
      "main_container": "form",
      "label_class": "fusion-hidden-content"
    },
    "extras": {
      "username_text": "Username",
      "password_text": "Password",
      "login_text": "Log in",
      "rememberme_text": "Remember Me",
      "lost_text": "Lost password?",
      "register_text": "Register",
      "button_size": "large",
      "lostfull_text": "Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.",
      "useroremail_text": "Username or Email",
      "reset_text": "Reset Password",
      "email_text": "Email",
      "registerfull_text": "Registration confirmation will be emailed to you.",
      "welcome_text": "Welcome Admin",
      "user_avatar": "<img alt='' src='http://0.gravatar.com/avatar/6a11f7f7ed4b64001e95a64bf77716bf?s=50&#038;d=mm&#038;r=g' srcset='http://0.gravatar.com/avatar/6a11f7f7ed4b64001e95a64bf77716bf?s=100&#038;d=mm&#038;r=g 2x' class='avatar avatar-50 photo' height='50' width='50' />",
      "dashboard_text": "Dashboard",
      "profile_text": "Profile",
      "logout_text": "Logout"
    },
    "settings_to_params": {
      "button_span": "button_fullwidth",
      "user_login_form_field_layout": "form_field_layout",
      "user_login_form_background_color": "form_background_color",
      "user_login_form_show_labels": "show_labels",
      "user_login_form_show_placeholders": "show_placeholders",
      "user_login_form_show_remember_me": "show_remember_me",
      "user_login_text_align": "text_align"
    },
    "settings_to_extras": {
      "button_size": "button_size"
    },
    "name": "User Lost Password",
    "shortcode": "fusion_lost_password",
    "icon": "fusiona-calendar-check-o",
    "help_url": "https://theme-fusion.com/documentation/fusion-builder/elements/user-lost-password-element/",
    "params": {
      "text_align": {
        "type": "radio_button_set",
        "heading": "Text Align",
        "description": "Choose the alignment of all content parts. &quot;Text Flow&quot; follows the default text align of the site. &quot;Center&quot; will center all elements.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#user_login_text_align\" target=\"_blank\" rel=\"noopener noreferrer\">Center</a>.",
        "param_name": "text_align",
        "value": {
          "": "Default",
          "textflow": "Text Flow",
          "center": "Center"
        },
        "default": "",
        "default_option": "user_login_text_align",
        "default_subset": "",
        "option_map": "select",
        "dependency": []
      },
      "heading": {
        "type": "textfield",
        "heading": "Heading",
        "description": "Choose a heading text.",
        "param_name": "heading",
        "value": "Your Content Goes Here",
        "placeholder": true,
        "dependency": []
      },
      "heading_color": {
        "type": "colorpickeralpha",
        "heading": "Heading Color",
        "description": "Choose a heading color.",
        "param_name": "heading_color",
        "value": "",
        "dependency": [
          {
            "element": "heading",
            "value": "",
            "operator": "!="
          }
        ]
      },
      "caption": {
        "type": "textfield",
        "heading": "Caption",
        "description": "Choose a caption text.",
        "param_name": "caption",
        "value": "Your Content Goes Here",
        "placeholder": true,
        "dependency": []
      },
      "caption_color": {
        "type": "colorpickeralpha",
        "heading": "Caption Color",
        "description": "Choose a caption color.",
        "param_name": "caption_color",
        "value": "",
        "dependency": [
          {
            "element": "caption",
            "value": "",
            "operator": "!="
          }
        ]
      },
      "show_labels": {
        "type": "radio_button_set",
        "heading": "Show Labels",
        "description": "Controls if the form field labels should be shown.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#user_login_form_show_labels\" target=\"_blank\" rel=\"noopener noreferrer\">No</a>.",
        "param_name": "show_labels",
        "value": {
          "": "Default",
          "yes": "Yes",
          "no": "No"
        },
        "default": "",
        "default_option": "user_login_form_show_labels",
        "default_subset": "",
        "option_map": "select",
        "dependency": []
      },
      "show_placeholders": {
        "type": "radio_button_set",
        "heading": "Show Placeholders",
        "description": "Controls if the form field placeholders should be shown.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#user_login_form_show_placeholders\" target=\"_blank\" rel=\"noopener noreferrer\">Yes</a>.",
        "param_name": "show_placeholders",
        "value": {
          "": "Default",
          "yes": "Yes",
          "no": "No"
        },
        "default": "",
        "default_option": "user_login_form_show_placeholders",
        "default_subset": "",
        "option_map": "select",
        "dependency": []
      },
      "button_fullwidth": {
        "type": "radio_button_set",
        "heading": "Button Span",
        "description": "Choose to have the button span the full width.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#button_span\" target=\"_blank\" rel=\"noopener noreferrer\">No</a>.",
        "param_name": "button_fullwidth",
        "value": {
          "": "Default",
          "yes": "Yes",
          "no": "No"
        },
        "default": "",
        "default_option": "button_span",
        "default_subset": "",
        "option_map": "yesno",
        "dependency": []
      },
      "form_background_color": {
        "type": "colorpickeralpha",
        "heading": "Form Background Color",
        "description": "Choose a background color for the form wrapping box.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#user_login_form_background_color\" target=\"_blank\" rel=\"noopener noreferrer\">#f9f9fb</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-form_background_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"form_background_color\" value=\"\" data-default=\"#f9f9fb\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "form_background_color",
        "value": "",
        "default": "#f9f9fb",
        "default_option": "user_login_form_background_color",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "link_color": {
        "type": "colorpickeralpha",
        "heading": "Link Color",
        "description": "Choose a link color.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#link_color\" target=\"_blank\" rel=\"noopener noreferrer\">#212934</a>.",
        "param_name": "link_color",
        "value": "",
        "default": "#212934",
        "default_option": "link_color",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "redirection_link": {
        "type": "link_selector",
        "heading": "Redirection Link",
        "description": "Add the url to which a user should redirected after form submission. Leave empty to use the same page.",
        "param_name": "redirection_link",
        "value": "",
        "dependency": []
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
        "default": [
          "small-visibility",
          "medium-visibility",
          "large-visibility"
        ],
        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Options</a>.",
        "dependency": []
      },
      "class": {
        "type": "textfield",
        "heading": "CSS Class",
        "description": "Add a class to the wrapping HTML element.",
        "param_name": "class",
        "value": "",
        "group": "General",
        "dependency": []
      },
      "id": {
        "type": "textfield",
        "heading": "CSS ID",
        "description": "Add an ID to the wrapping HTML element.",
        "param_name": "id",
        "value": "",
        "group": "General",
        "dependency": []
      }
    },
    "remove_from_atts": []
  },
  "fusion_register": {
    "defaults": {
      "hide_on_mobile": "small-visibility, medium-visibility, large-visibility",
      "class": "",
      "id": "",
      "button_fullwidth": "no",
      "caption": "",
      "caption_color": "",
      "form_field_layout": "stacked",
      "form_background_color": "#f9f9fb",
      "heading": "",
      "heading_color": "",
      "link_color": "",
      "lost_password_link": "",
      "redirection_link": "",
      "register_link": "",
      "register_note": "",
      "show_labels": "no",
      "show_placeholders": "yes",
      "show_remember_me": "no",
      "text_align": "center",
      "disable_form": "",
      "main_container": "form",
      "label_class": "fusion-hidden-content"
    },
    "extras": {
      "username_text": "Username",
      "password_text": "Password",
      "login_text": "Log in",
      "rememberme_text": "Remember Me",
      "lost_text": "Lost password?",
      "register_text": "Register",
      "button_size": "large",
      "lostfull_text": "Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.",
      "useroremail_text": "Username or Email",
      "reset_text": "Reset Password",
      "email_text": "Email",
      "registerfull_text": "Registration confirmation will be emailed to you.",
      "welcome_text": "Welcome Admin",
      "user_avatar": "<img alt='' src='http://0.gravatar.com/avatar/6a11f7f7ed4b64001e95a64bf77716bf?s=50&#038;d=mm&#038;r=g' srcset='http://0.gravatar.com/avatar/6a11f7f7ed4b64001e95a64bf77716bf?s=100&#038;d=mm&#038;r=g 2x' class='avatar avatar-50 photo' height='50' width='50' />",
      "dashboard_text": "Dashboard",
      "profile_text": "Profile",
      "logout_text": "Logout"
    },
    "settings_to_params": {
      "button_span": "button_fullwidth",
      "user_login_form_field_layout": "form_field_layout",
      "user_login_form_background_color": "form_background_color",
      "user_login_form_show_labels": "show_labels",
      "user_login_form_show_placeholders": "show_placeholders",
      "user_login_form_show_remember_me": "show_remember_me",
      "user_login_text_align": "text_align"
    },
    "settings_to_extras": {
      "button_size": "button_size"
    },
    "name": "User Register",
    "shortcode": "fusion_register",
    "icon": "fusiona-calendar-check-o",
    "help_url": "https://theme-fusion.com/documentation/fusion-builder/elements/user-register-element/",
    "params": {
      "text_align": {
        "type": "radio_button_set",
        "heading": "Text Align",
        "description": "Choose the alignment of all content parts. &quot;Text Flow&quot; follows the default text align of the site. &quot;Center&quot; will center all elements.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#user_login_text_align\" target=\"_blank\" rel=\"noopener noreferrer\">Center</a>.",
        "param_name": "text_align",
        "value": {
          "": "Default",
          "textflow": "Text Flow",
          "center": "Center"
        },
        "default": "",
        "default_option": "user_login_text_align",
        "default_subset": "",
        "option_map": "select",
        "dependency": []
      },
      "form_field_layout": {
        "type": "radio_button_set",
        "heading": "Form Field Layout",
        "description": "Choose if form fields should be stacked and full width, or if they should be floated.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#user_login_form_field_layout\" target=\"_blank\" rel=\"noopener noreferrer\">Stacked</a>.",
        "param_name": "form_field_layout",
        "value": {
          "": "Default",
          "stacked": "Stacked",
          "floated": "Floated"
        },
        "default": "",
        "default_option": "user_login_form_field_layout",
        "default_subset": "",
        "option_map": "select",
        "dependency": []
      },
      "heading": {
        "type": "textfield",
        "heading": "Heading",
        "description": "Choose a heading text.",
        "param_name": "heading",
        "value": "Your Content Goes Here",
        "placeholder": true,
        "dependency": []
      },
      "heading_color": {
        "type": "colorpickeralpha",
        "heading": "Heading Color",
        "description": "Choose a heading color.",
        "param_name": "heading_color",
        "value": "",
        "dependency": [
          {
            "element": "heading",
            "value": "",
            "operator": "!="
          }
        ]
      },
      "caption": {
        "type": "textfield",
        "heading": "Caption",
        "description": "Choose a caption text.",
        "param_name": "caption",
        "value": "Your Content Goes Here",
        "placeholder": true,
        "dependency": []
      },
      "caption_color": {
        "type": "colorpickeralpha",
        "heading": "Caption Color",
        "description": "Choose a caption color.",
        "param_name": "caption_color",
        "value": "",
        "dependency": [
          {
            "element": "caption",
            "value": "",
            "operator": "!="
          }
        ]
      },
      "show_labels": {
        "type": "radio_button_set",
        "heading": "Show Labels",
        "description": "Controls if the form field labels should be shown.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#user_login_form_show_labels\" target=\"_blank\" rel=\"noopener noreferrer\">No</a>.",
        "param_name": "show_labels",
        "value": {
          "": "Default",
          "yes": "Yes",
          "no": "No"
        },
        "default": "",
        "default_option": "user_login_form_show_labels",
        "default_subset": "",
        "option_map": "select",
        "dependency": []
      },
      "show_placeholders": {
        "type": "radio_button_set",
        "heading": "Show Placeholders",
        "description": "Controls if the form field placeholders should be shown.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#user_login_form_show_placeholders\" target=\"_blank\" rel=\"noopener noreferrer\">Yes</a>.",
        "param_name": "show_placeholders",
        "value": {
          "": "Default",
          "yes": "Yes",
          "no": "No"
        },
        "default": "",
        "default_option": "user_login_form_show_placeholders",
        "default_subset": "",
        "option_map": "select",
        "dependency": []
      },
      "button_fullwidth": {
        "type": "radio_button_set",
        "heading": "Button Span",
        "description": "Choose to have the button span the full width.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#button_span\" target=\"_blank\" rel=\"noopener noreferrer\">No</a>.",
        "param_name": "button_fullwidth",
        "value": {
          "": "Default",
          "yes": "Yes",
          "no": "No"
        },
        "default": "",
        "default_option": "button_span",
        "default_subset": "",
        "option_map": "yesno",
        "dependency": []
      },
      "form_background_color": {
        "type": "colorpickeralpha",
        "heading": "Form Background Color",
        "description": "Choose a background color for the form wrapping box.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#user_login_form_background_color\" target=\"_blank\" rel=\"noopener noreferrer\">#f9f9fb</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-form_background_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"form_background_color\" value=\"\" data-default=\"#f9f9fb\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "form_background_color",
        "value": "",
        "default": "#f9f9fb",
        "default_option": "user_login_form_background_color",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "link_color": {
        "type": "colorpickeralpha",
        "heading": "Link Color",
        "description": "Choose a link color.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#link_color\" target=\"_blank\" rel=\"noopener noreferrer\">#212934</a>.",
        "param_name": "link_color",
        "value": "",
        "default": "#212934",
        "default_option": "link_color",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "register_note": {
        "type": "textfield",
        "heading": "Registration Notice",
        "description": "Choose a notice text that will be displayed before the register button. Leave empty if no text should be displayed.",
        "param_name": "register_note",
        "value": "Registration confirmation will be emailed to you.",
        "dependency": []
      },
      "redirection_link": {
        "type": "link_selector",
        "heading": "Redirection Link",
        "description": "Add the url to which a user should redirected after form submission. Leave empty to use the same page.",
        "param_name": "redirection_link",
        "value": "",
        "dependency": []
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
        "default": [
          "small-visibility",
          "medium-visibility",
          "large-visibility"
        ],
        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Options</a>.",
        "dependency": []
      },
      "class": {
        "type": "textfield",
        "heading": "CSS Class",
        "description": "Add a class to the wrapping HTML element.",
        "param_name": "class",
        "value": "",
        "group": "General",
        "dependency": []
      },
      "id": {
        "type": "textfield",
        "heading": "CSS ID",
        "description": "Add an ID to the wrapping HTML element.",
        "param_name": "id",
        "value": "",
        "group": "General",
        "dependency": []
      }
    },
    "remove_from_atts": []
  },
  "fusion_vimeo": {
    "defaults": {
      "hide_on_mobile": "small-visibility, medium-visibility, large-visibility",
      "class": "",
      "css_id": "",
      "api_params": "",
      "autoplay": "no",
      "alignment": "",
      "center": "no",
      "height": 360,
      "id": "",
      "width": 600
    },
    "name": "Vimeo",
    "shortcode": "fusion_vimeo",
    "icon": "fusiona-vimeo2",
    "preview": "/var/www/html/wordpress_avada_624/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-vimeo-preview.php",
    "preview_id": "fusion-builder-block-module-vimeo-preview-template",
    "help_url": "https://theme-fusion.com/documentation/fusion-builder/elements/vimeo-element/",
    "params": {
      "id": {
        "type": "textfield",
        "heading": "Video ID",
        "description": "For example the Video ID for https://vimeo.com/75230326 is 75230326.",
        "param_name": "id",
        "value": "",
        "dependency": []
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
        },
        "dependency": []
      },
      "dimensions": {
        "type": "dimension",
        "remove_from_atts": true,
        "heading": "Dimensions",
        "description": "Video dimensions in pixels. If only one dimension is provided the video will be adjusted to 16:9 ratio.",
        "param_name": "dimensions",
        "value": {
          "width": "600",
          "height": "350"
        },
        "dependency": []
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
        "default": "false",
        "dependency": []
      },
      "api_params": {
        "type": "textfield",
        "heading": "Additional API Parameter",
        "description": "Use additional API parameter, for example &amp;rel=0 to disable related videos.",
        "param_name": "api_params",
        "value": "",
        "dependency": []
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
        "default": [
          "small-visibility",
          "medium-visibility",
          "large-visibility"
        ],
        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Options</a>.",
        "dependency": []
      },
      "class": {
        "type": "textfield",
        "heading": "CSS Class",
        "param_name": "class",
        "value": "",
        "description": "Add a class to the wrapping HTML element.",
        "dependency": []
      },
      "css_id": {
        "type": "textfield",
        "heading": "CSS ID",
        "description": "Add an ID to the wrapping HTML element.",
        "param_name": "css_id",
        "value": "",
        "dependency": []
      }
    },
    "remove_from_atts": [
      "dimensions"
    ]
  },
  "fusion_video": {
    "defaults": {
      "alignment": "",
      "autoplay": "yes",
      "border_radius_bottom_left": "",
      "border_radius_bottom_right": "",
      "border_radius_top_left": "",
      "border_radius_top_right": "",
      "box_shadow": "no",
      "box_shadow_blur": "",
      "box_shadow_color": "",
      "box_shadow_horizontal": "",
      "box_shadow_spread": "",
      "box_shadow_vertical": "",
      "controls": "yes",
      "class": "",
      "css_id": "",
      "hide_on_mobile": "small-visibility, medium-visibility, large-visibility",
      "loop": "yes",
      "margin_top": "",
      "margin_bottom": "",
      "mute": "yes",
      "overlay_color": "",
      "preload": "auto",
      "preview_image": "",
      "video": "",
      "video_webm": "",
      "width": "100%"
    },
    "settings_to_params": {
      "video_max_width": "width",
      "video_controls": "controls",
      "video_preload": "preload"
    },
    "name": "Video",
    "shortcode": "fusion_video",
    "icon": "fusiona-video",
    "preview": "/var/www/html/wordpress_avada_624/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-video-preview.php",
    "preview_id": "fusion-builder-block-module-video-preview-template",
    "params": {
      "video": {
        "type": "uploadfile",
        "heading": "Video MP4 Upload",
        "description": "Add your MP4 video file. This format must be included to render your video with cross-browser compatibility.",
        "param_name": "video",
        "value": "",
        "dependency": []
      },
      "video_webm": {
        "type": "uploadfile",
        "heading": "Video WebM Upload",
        "description": "Add your WebM video file. This is optional, only MP4 is required to render your video with cross-browser compatibility.",
        "param_name": "video_webm",
        "value": "",
        "dependency": []
      },
      "width": {
        "type": "textfield",
        "heading": "Video Max Width",
        "description": "Set the maximum width the video should take up. Enter value in pixel (px) or percentage (%), ex: 200px. Leave empty to use full video width.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#video_max_width\" target=\"_blank\" rel=\"noopener noreferrer\">100%</a>.",
        "param_name": "width",
        "value": "",
        "default_option": "video_max_width",
        "default_subset": "",
        "option_map": "select",
        "dependency": []
      },
      "controls": {
        "type": "radio_button_set",
        "heading": "Video Controls",
        "description": "Controls whether the video controls should show or not.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#video_controls\" target=\"_blank\" rel=\"noopener noreferrer\">Show</a>.",
        "param_name": "controls",
        "value": {
          "": "Default",
          "yes": "Show",
          "no": "Hide"
        },
        "default": "",
        "default_option": "video_controls",
        "default_subset": "",
        "option_map": "select",
        "dependency": []
      },
      "preload": {
        "type": "radio_button_set",
        "heading": "Video Preloading",
        "description": "Controls how / if the browser should preload the video. Choose &quot;Metadata&quot; if only the video metadata should be preloaded on page load (in Chrome needed for the preview image to load) or &quot;Auto&quot; to preload the full video on page load.  Default currently set to <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#video_preload\" target=\"_blank\" rel=\"noopener noreferrer\">Auto</a>.",
        "param_name": "preload",
        "value": {
          "": "Default",
          "auto": "Auto",
          "metadata": "Metadata",
          "none": "None"
        },
        "default": "",
        "default_option": "video_preload",
        "default_subset": "",
        "option_map": "select",
        "dependency": []
      },
      "loop": {
        "type": "radio_button_set",
        "heading": "Loop Video",
        "description": "Controls whether the video should loop or not.",
        "param_name": "loop",
        "value": {
          "yes": "Yes",
          "no": "No"
        },
        "default": "yes",
        "dependency": []
      },
      "autoplay": {
        "type": "radio_button_set",
        "heading": "Autoplay Video",
        "description": "IMPORTANT: In some modern browsers, videos with sound won&#039;t be auto played, and thus won&#039;t show as container background when not muted.",
        "param_name": "autoplay",
        "value": {
          "yes": "Yes",
          "no": "No"
        },
        "default": "yes",
        "dependency": []
      },
      "mute": {
        "type": "radio_button_set",
        "heading": "Mute Video",
        "description": "IMPORTANT: In some modern browsers, videos with sound won&#039;t be auto played, and thus won&#039;t show as container background when not muted.",
        "param_name": "mute",
        "value": {
          "yes": "Yes",
          "no": "No"
        },
        "default": "yes",
        "dependency": []
      },
      "preview_image": {
        "type": "upload",
        "heading": "Preview Image",
        "description": "Upload an image to display as a video preview. IMPORTANT: In Chrome the preview image will only be displayed, if &quot;Preview Mode&quot; needs to be set to &quot;metadata&quot;.",
        "param_name": "preview_image",
        "value": "",
        "dependency": []
      },
      "overlay_color": {
        "type": "colorpickeralpha",
        "heading": "Overlay Color",
        "description": "Controls the overlay color of the video element.",
        "param_name": "overlay_color",
        "group": "Design",
        "value": "",
        "default": "",
        "dependency": []
      },
      "border_radius": {
        "type": "dimension",
        "remove_from_atts": true,
        "heading": "Border Radius",
        "description": "Enter values including any valid CSS unit, ex: 10px.",
        "param_name": "border_radius",
        "group": "Design",
        "value": {
          "border_radius_top_left": "",
          "border_radius_top_right": "",
          "border_radius_bottom_right": "",
          "border_radius_bottom_left": ""
        },
        "dependency": []
      },
      "box_shadow": {
        "type": "radio_button_set",
        "heading": "Box Shadow",
        "description": "Set to &quot;Yes&quot; to enable box shadows.",
        "param_name": "box_shadow",
        "default": "no",
        "group": "Design",
        "value": {
          "yes": "Yes",
          "no": "No"
        },
        "dependency": []
      },
      "dimension_box_shadow": {
        "type": "dimension",
        "remove_from_atts": true,
        "heading": "Box Shadow Position",
        "description": "Set the vertical and horizontal position of the box shadow. Positive values put the shadow below and right of the box, negative values put it above and left of the box. In pixels, ex. 5px.",
        "param_name": "dimension_box_shadow",
        "value": {
          "box_shadow_vertical": "",
          "box_shadow_horizontal": ""
        },
        "group": "Design",
        "dependency": [
          {
            "element": "box_shadow",
            "value": "yes",
            "operator": "=="
          }
        ]
      },
      "box_shadow_blur": {
        "type": "range",
        "heading": "Box Shadow Blur Radius",
        "description": "Set the blur radius of the box shadow. In pixels.",
        "param_name": "box_shadow_blur",
        "value": "0",
        "min": "0",
        "max": "100",
        "step": "1",
        "group": "Design",
        "dependency": [
          {
            "element": "box_shadow",
            "value": "yes",
            "operator": "=="
          }
        ]
      },
      "box_shadow_spread": {
        "type": "range",
        "heading": "Box Shadow Spread Radius",
        "description": "Set the spread radius of the box shadow. A positive value increases the size of the shadow, a negative value decreases the size of the shadow. In pixels.",
        "param_name": "box_shadow_spread",
        "value": "0",
        "min": "-100",
        "max": "100",
        "step": "1",
        "group": "Design",
        "dependency": [
          {
            "element": "box_shadow",
            "value": "yes",
            "operator": "=="
          }
        ]
      },
      "box_shadow_color": {
        "type": "colorpickeralpha",
        "heading": "Box Shadow Color",
        "description": "Controls the color of the box shadow.",
        "param_name": "box_shadow_color",
        "value": "",
        "group": "Design",
        "dependency": [
          {
            "element": "box_shadow",
            "value": "yes",
            "operator": "=="
          }
        ]
      },
      "alignment": {
        "type": "radio_button_set",
        "heading": "Alignment",
        "description": "Select the video&#039;s alignment.",
        "param_name": "alignment",
        "default": "",
        "group": "Design",
        "value": {
          "": "Text Flow",
          "left": "Left",
          "center": "Center",
          "right": "Right"
        },
        "dependency": []
      },
      "spacing": {
        "type": "dimension",
        "remove_from_atts": true,
        "heading": "Margin",
        "description": "Spacing above and below the video. Enter values including any valid CSS unit, ex: 4%.",
        "param_name": "spacing",
        "value": {
          "margin_top": "",
          "margin_bottom": ""
        },
        "group": "Design",
        "shortcode": "fusion_video",
        "dependency": []
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
        "default": [
          "small-visibility",
          "medium-visibility",
          "large-visibility"
        ],
        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Options</a>.",
        "dependency": []
      },
      "class": {
        "type": "textfield",
        "heading": "CSS Class",
        "param_name": "class",
        "value": "",
        "description": "Add a class to the wrapping HTML element.",
        "dependency": []
      },
      "css_id": {
        "type": "textfield",
        "heading": "CSS ID",
        "description": "Add an ID to the wrapping HTML element.",
        "param_name": "css_id",
        "value": "",
        "dependency": []
      }
    },
    "remove_from_atts": [
      "border_radius",
      "dimension_box_shadow",
      "spacing",
      "undefined"
    ]
  },
  "fusion_youtube": {
    "defaults": {
      "hide_on_mobile": "small-visibility, medium-visibility, large-visibility",
      "class": "",
      "css_id": "",
      "api_params": "",
      "autoplay": "false",
      "alignment": "",
      "center": "no",
      "height": 360,
      "id": "",
      "width": 600
    },
    "name": "Youtube",
    "shortcode": "fusion_youtube",
    "icon": "fusiona-youtube",
    "preview": "/var/www/html/wordpress_avada_624/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-youtube-preview.php",
    "preview_id": "fusion-builder-block-module-youtube-preview-template",
    "help_url": "https://theme-fusion.com/documentation/fusion-builder/elements/youtube-element/",
    "params": {
      "id": {
        "type": "textfield",
        "heading": "Video ID",
        "description": "For example the Video ID for https://www.youtube.com/watch?v=569TlvRLn90 is 569TlvRLn90.",
        "param_name": "id",
        "value": "",
        "dependency": []
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
        },
        "dependency": []
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
        },
        "dependency": []
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
        "default": "false",
        "dependency": []
      },
      "api_params": {
        "type": "textfield",
        "heading": "Additional API Parameter",
        "description": "Use an additional API parameter, for example, &amp;rel=0 to only display related videos from the same channel.",
        "param_name": "api_params",
        "value": "",
        "dependency": []
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
        "default": [
          "small-visibility",
          "medium-visibility",
          "large-visibility"
        ],
        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Options</a>.",
        "dependency": []
      },
      "class": {
        "type": "textfield",
        "heading": "CSS Class",
        "param_name": "class",
        "value": "",
        "description": "Add a class to the wrapping HTML element.",
        "dependency": []
      },
      "css_id": {
        "type": "textfield",
        "heading": "CSS ID",
        "description": "Add an ID to the wrapping HTML element.",
        "param_name": "css_id",
        "value": "",
        "dependency": []
      }
    },
    "remove_from_atts": [
      "dimensions"
    ]
  },
  "fusion_widget_area": {
    "defaults": {
      "hide_on_mobile": "small-visibility, medium-visibility, large-visibility",
      "class": "",
      "id": "",
      "background_color": "",
      "name": "",
      "padding": "",
      "title_color": "#212934",
      "title_size": "28px"
    },
    "settings_to_params": {
      "widget_area_title_color": "title_color",
      "widget_area_title_size": "title_size"
    },
    "name": "Widget Area",
    "shortcode": "fusion_widget_area",
    "icon": "fusiona-sidebar",
    "help_url": "https://theme-fusion.com/documentation/fusion-builder/elements/widget-area-element/",
    "params": {
      "name": {
        "type": "select",
        "heading": "Widget Area Name",
        "description": "Choose the name of the widget area to display.",
        "param_name": "name",
        "value": {
          "avada-blog-sidebar": "Blog Sidebar",
          "avada-footer-widget-1": "Footer Widget 1",
          "avada-footer-widget-2": "Footer Widget 2",
          "avada-footer-widget-3": "Footer Widget 3",
          "avada-footer-widget-4": "Footer Widget 4",
          "avada-slidingbar-widget-1": "Sliding Bar Widget 1",
          "avada-slidingbar-widget-2": "Sliding Bar Widget 2"
        },
        "default": "avada-blog-sidebar",
        "callback": {
          "function": "fusion_widget_area",
          "ajax": true
        },
        "dependency": []
      },
      "title_size": {
        "type": "textfield",
        "heading": "Widget Title Size",
        "description": "Controls the size of widget titles. In pixels ex: 18px.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#widget_area_title_size\" target=\"_blank\" rel=\"noopener noreferrer\">28px</a>.",
        "param_name": "title_size",
        "value": "",
        "default": "28px",
        "default_option": "widget_area_title_size",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "title_color": {
        "type": "colorpickeralpha",
        "heading": "Widget Title Color",
        "description": "Controls the color of widget titles.  Leave empty for default value of <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#widget_area_title_color\" target=\"_blank\" rel=\"noopener noreferrer\">#212934</a>.  <span class=\"fusion-builder-default-reset\"><a href=\"#\" id=\"default-title_color\" class=\"fusion-range-default fusion-reset-to-default fusion-hide-from-atts\" type=\"radio\" name=\"title_color\" value=\"\" data-default=\"#212934\">Reset to default.</a><span>Using default value.</span></span>",
        "param_name": "title_color",
        "value": "",
        "default": "#212934",
        "default_option": "widget_area_title_color",
        "default_subset": "",
        "option_map": "",
        "dependency": []
      },
      "background_color": {
        "type": "colorpickeralpha",
        "heading": "Background Color",
        "description": "Choose a background color for the widget area.",
        "param_name": "background_color",
        "value": "",
        "dependency": []
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
        },
        "dependency": []
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
        "default": [
          "small-visibility",
          "medium-visibility",
          "large-visibility"
        ],
        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Options</a>.",
        "dependency": []
      },
      "class": {
        "type": "textfield",
        "heading": "CSS Class",
        "description": "Add a class to the wrapping HTML element.",
        "param_name": "class",
        "value": "",
        "dependency": []
      },
      "id": {
        "type": "textfield",
        "heading": "CSS ID",
        "description": "Add an ID to the wrapping HTML element.",
        "param_name": "id",
        "value": "",
        "dependency": []
      }
    },
    "callback": {
      "function": "fusion_widget_area",
      "ajax": true
    },
    "has_ajax": {
      "name": {
        "function": "fusion_widget_area",
        "action": false,
        "param_name": "name"
      }
    },
    "remove_from_atts": [
      "padding"
    ]
  },
  "fusion_widget": {
    "defaults": {
      "hide_on_mobile": "small-visibility, medium-visibility, large-visibility",
      "class": "",
      "id": "",
      "type": "",
      "fusion_bg_color": "",
      "fusion_padding_color": "",
      "fusion_border_style": "",
      "fusion_border_color": "",
      "fusion_border_size": "",
      "fusion_bg_radius_size": "",
      "fusion_margin": "",
      "fusion_align": "",
      "fusion_align_mobile": "",
      "fusion_display_title": ""
    },
    "name": "Widget",
    "shortcode": "fusion_widget",
    "icon": "fusion-module-icon fusiona-widget",
    "custom_settings_view_name": "ModuleSettingsWpWidget",
    "custom_settings_view_js": "http://127.0.0.1/wordpress_avada_624/wp-content/plugins/fusion-builder/inc/templates/custom/js/fusion-widget-settings.js",
    "custom_settings_template_file": "/var/www/html/wordpress_avada_624/wp-content/plugins/fusion-builder/inc/templates/custom/front-end/fusion-widget-settings.php",
    "front_end_custom_settings_view_js": "http://127.0.0.1/wordpress_avada_624/wp-content/plugins/fusion-builder/inc/templates/custom/front-end/js/fusion-widget-settings.js",
    "admin_enqueue_js": "http://127.0.0.1/wordpress_avada_624/wp-content/plugins/fusion-builder/shortcodes/js/fusion-widget.js",
    "on_save": "wpWidgetShortcodeFilter",
    "help_url": "https://theme-fusion.com/documentation/fusion-builder/elements/widget/",
    "preview": "/var/www/html/wordpress_avada_624/wp-content/plugins/fusion-builder/inc/templates/previews/fusion-widget-preview.php",
    "preview_id": "fusion-builder-block-module-widget-preview-template",
    "params": {
      "type": {
        "type": "select",
        "heading": "Widget",
        "description": "Choose widget type.",
        "param_name": "type",
        "value": {
          "default": "Select a widget",
          "WP_Widget_Pages": "Pages",
          "WP_Widget_Calendar": "Calendar",
          "WP_Widget_Archives": "Archives",
          "WP_Widget_Media_Audio": "Audio",
          "WP_Widget_Media_Image": "Image",
          "WP_Widget_Media_Gallery": "Gallery",
          "WP_Widget_Media_Video": "Video",
          "WP_Widget_Meta": "Meta",
          "WP_Widget_Search": "Search",
          "WP_Widget_Text": "Text",
          "WP_Widget_Categories": "Categories",
          "WP_Widget_Recent_Posts": "Recent Posts",
          "WP_Widget_Recent_Comments": "Recent Comments",
          "WP_Widget_RSS": "RSS",
          "WP_Widget_Tag_Cloud": "Tag Cloud",
          "WP_Nav_Menu_Widget": "Navigation Menu",
          "WP_Widget_Custom_HTML": "Custom HTML"
        },
        "default": "default",
        "callback": {
          "function": "fusion_widget_changed"
        },
        "dependency": []
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
        "default": [
          "small-visibility",
          "medium-visibility",
          "large-visibility"
        ],
        "description": "Choose to show or hide the element on small, medium or large screens. You can choose more than one at a time.  Each of the 3 sizes has a custom width setting on the Fusion Builder Elements tab in the <a href=\"http://127.0.0.1/wordpress_avada_624/wp-admin/themes.php?page=avada_options&lang=en#visibility_small\" target=\"_blank\" rel=\"noopener noreferrer\">Theme Options</a>.",
        "dependency": []
      },
      "class": {
        "type": "textfield",
        "heading": "CSS Class",
        "param_name": "class",
        "value": "",
        "description": "Add a class to the wrapping HTML element.",
        "dependency": []
      },
      "id": {
        "type": "textfield",
        "heading": "CSS ID",
        "param_name": "id",
        "value": "",
        "description": "Add an ID to the wrapping HTML element.",
        "dependency": []
      },
      "fusion_display_title": {
        "type": "radio_button_set",
        "param_name": "fusion_display_title",
        "group": "Design",
        "description": "Choose to enable or disable the widget title. Specifically usefull for WP&#039;s default widget titles.",
        "heading": "Display Widget Title",
        "value": {
          "yes": "Yes",
          "no": "No"
        },
        "default": "yes"
      },
      "fusion_padding_color": {
        "type": "textfield",
        "param_name": "fusion_padding_color",
        "group": "Design",
        "description": "Controls the padding for this widget container. Enter value including any valid CSS unit, ex: 10px.",
        "heading": "Padding",
        "value": "",
        "css_property": "padding"
      },
      "fusion_margin": {
        "type": "textfield",
        "param_name": "fusion_margin",
        "group": "Design",
        "description": "Controls the margin for this widget container. Enter value including any valid CSS unit, ex: 10px.",
        "heading": "Margin",
        "value": "",
        "css_property": "margin"
      },
      "fusion_bg_color": {
        "type": "colorpickeralpha",
        "param_name": "fusion_bg_color",
        "group": "Design",
        "description": "Controls the background color for this widget container.",
        "heading": "Background Color",
        "value": "",
        "css_property": "background-color"
      },
      "fusion_bg_radius_size": {
        "type": "textfield",
        "param_name": "fusion_bg_radius_size",
        "group": "Design",
        "description": "Controls the background radius for this widget container.",
        "heading": "Background Radius",
        "value": "",
        "css_property": "border-radius"
      },
      "fusion_border_size": {
        "type": "range",
        "param_name": "fusion_border_size",
        "group": "Design",
        "description": "Controls the border size for this widget container.",
        "heading": "Border Size",
        "value": 0,
        "css_property": "border-width",
        "min": 0,
        "max": 50,
        "step": 1
      },
      "fusion_border_style": {
        "type": "select",
        "param_name": "fusion_border_style",
        "group": "Design",
        "description": "Controls the border style for this widget container.",
        "heading": "Border Style",
        "value": {
          "solid": "Solid",
          "dotted": "Dotted",
          "dashed": "Dashed"
        },
        "css_property": "border-style",
        "dependency": [
          {
            "element": "fusion_border_size",
            "value": "0",
            "operator": "!="
          }
        ],
        "default": "solid"
      },
      "fusion_border_color": {
        "type": "colorpickeralpha",
        "param_name": "fusion_border_color",
        "group": "Design",
        "description": "Controls the border color for this widget container.",
        "heading": "Border Color",
        "value": "",
        "css_property": "border-color",
        "dependency": [
          {
            "element": "fusion_border_size",
            "value": "0",
            "operator": "!="
          }
        ]
      },
      "fusion_align": {
        "type": "select",
        "param_name": "fusion_align",
        "group": "Design",
        "description": "Controls content alignment for this widget container. Inherit means it will inherit alignment from its parent element.",
        "heading": "Content Align",
        "value": {
          "": "Inherit",
          "left": "Left",
          "right": "Right",
          "center": "Center"
        },
        "css_property": "text-align"
      },
      "fusion_align_mobile": {
        "type": "select",
        "param_name": "fusion_align_mobile",
        "group": "Design",
        "description": "Controls mobile content alignment for this widget container. Inherit means it will inherit alignment from its parent element.",
        "heading": "Mobile Content Align",
        "value": {
          "": "Inherit",
          "left": "Left",
          "right": "Right",
          "center": "Center"
        },
        "css_property": "text-align"
      }
    },
    "remove_from_atts": []
  }
}