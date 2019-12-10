layObj = {
    "styleObject": {
        background: 'red'
    },
    "layout": {
        "childrens": [{
            "isActive": false,
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
            "remove_from_atts": ["spacing", "dimensions"],
            "childrens": [{
                "isActive": false,
            "name": "Row",
                "shortcode": "fusion_builder_row",
                "hide_from_builder": true,
                "childrens": [{
                    "isActive": false,
            "name": "Column",
                    "shortcode": "fusion_builder_column",
                    "hide_from_builder": true,
                    "params": {
                        "groups": {
                            "General": {
                                "type": "1_2",
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
                    "remove_from_atts": ["padding", "dimension_margin"],
                    "childrens": [
						{
						"isActive": false,
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
											"Classic": "pt_0", //name: image
											"Minimal": "pt_1"
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
										"gchildrens": [
											{
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
														"currency_position": "right",
														"price": "15",
														"time": "monthly"
													},
													{
														"shortcode": "fusion_pricing_row",
														"text": "Feature 1" /*v-if?*/
													},
													{
														"shortcode": "fusion_pricing_footer"
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
														"currency_position": "left",
														"price": "25.55",
														"time": "monthly"
													},
													{
														"shortcode": "fusion_pricing_row",
														"text": "Feature 1" /*v-if?*/
													},
													{
														"shortcode": "fusion_pricing_footer"
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
								}
							}
						},
						"remove_from_atts": []
					},
					{
                        "isActive": false,
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
                    }, {
                        "isActive": false,
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
                    }]
                }, {
                    "isActive": false,
            "name": "Column",
                    "shortcode": "fusion_builder_column",
                    "hide_from_builder": true,
                    "params": {
                        "groups": {
                            "General": {
                                "type": "1_2",
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
                    "remove_from_atts": ["padding", "dimension_margin"],
                    "childrens": [{
                        "isActive": false,
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
                                        "value": "CLICK ME!",
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
                                        "value": "fa-star",
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
                                        "default": "Slide",
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
                    }]
                }]
            }]
        }, {
            "isActive": false,
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
            "remove_from_atts": ["spacing", "dimensions"],
            "childrens": [{
                "isActive": false,
            "name": "Row",
                "shortcode": "fusion_builder_row",
                "hide_from_builder": true,
                "childrens": [{
                    "isActive": false,
            "name": "Column",
                    "shortcode": "fusion_builder_column",
                    "hide_from_builder": true,
                    "params": {
                        "groups": {
                            "General": {
                                "type": "1_1",
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
                    "remove_from_atts": ["padding", "dimension_margin"],
                    "childrens": [{
                        "isActive": false,
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
                    }]
                }]
            }]
        }]
    }
}