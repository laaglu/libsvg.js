define([], function () {
  /**
   * Class to define constants commonly used in CSS, SVG and XLink
   * @constructor
   */
  function SVGConstants() {
  }

  /////////////////////////////////////////////////////////////////////////
  // XML general
  /////////////////////////////////////////////////////////////////////////
  SVGConstants.XML_PREFIX = "xml";
  SVGConstants.XMLNS_PREFIX = "xmlns";
  SVGConstants.XML_ID_ATTRIBUTE = "id";

  /////////////////////////////////////////////////////////////////////////
  // SVG general
  /////////////////////////////////////////////////////////////////////////

  SVGConstants.SVG_PUBLIC_ID = "-//W3C//DTD SVG 1.1//EN";
  SVGConstants.SVG_SYSTEM_ID = "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd";
  SVGConstants.SVG_NAMESPACE_URI = "http://www.w3.org/2000/svg";
  SVGConstants.SVG_PREFIX = "svg";
  SVGConstants.SVG_VERSION = "1.1";

  /////////////////////////////////////////////////////////////////////////
  // XLink tag and attributes
  /////////////////////////////////////////////////////////////////////////

  SVGConstants.XLINK_NAMESPACE_URI = "http://www.w3.org/1999/xlink";
  SVGConstants.XLINK_PREFIX = "xlink";
  SVGConstants.XLINK_HREF_ATTRIBUTE = "href";

  /////////////////////////////////////////////////////////////////////////
  // CSS tags (must use camel case as they will be set from javascript)
  /////////////////////////////////////////////////////////////////////////

  SVGConstants.CSS_ALIGNMENT_BASELINE_PROPERTY = "alignment-baseline";
  SVGConstants.CSS_BASELINE_SHIFT_PROPERTY = "baseline-shift";
  SVGConstants.CSS_CLIP_PROPERTY = "clip";
  SVGConstants.CSS_CLIP_PATH_PROPERTY = "clip-path";
  SVGConstants.CSS_CLIP_RULE_PROPERTY = "clip-rule";
  SVGConstants.CSS_COLOR_PROFILE_PROPERTY = "color-profile";
  SVGConstants.CSS_COLOR_PROPERTY = "color";
  SVGConstants.CSS_COLOR_INTERPOLATION_PROPERTY = "color-interpolation";
  SVGConstants.CSS_COLOR_INTERPOLATION_FILTERS_PROPERTY = "color-interpolation-filters";
  SVGConstants.CSS_COLOR_RENDERING_PROPERTY = "color-rendering";
  SVGConstants.CSS_CURSOR_PROPERTY = "cursor";
  SVGConstants.CSS_DIRECTION_PROPERTY = "direction";
  SVGConstants.CSS_DISPLAY_PROPERTY = "display";
  SVGConstants.CSS_DOMINANT_BASELINE_PROPERTY = "dominant-baseline";
  SVGConstants.CSS_ENABLE_BACKGROUND_PROPERTY = "enable-background";
  SVGConstants.CSS_FILL_OPACITY_PROPERTY = "fill-opacity";
  SVGConstants.CSS_FILL_PROPERTY = "fill";
  SVGConstants.CSS_FILL_RULE_PROPERTY = "fill-rule";
  SVGConstants.CSS_FILTER_PROPERTY = "filter";
  SVGConstants.CSS_FLOOD_COLOR_PROPERTY = "flood-color";
  SVGConstants.CSS_FLOOD_OPACITY_PROPERTY = "flood-opacity";
  SVGConstants.CSS_FONT_PROPERTY = "font";
  SVGConstants.CSS_FONT_FAMILY_PROPERTY = "font-family";
  SVGConstants.CSS_FONT_SIZE_PROPERTY = "font-size";
  SVGConstants.CSS_FONT_SIZE_ADJUST_PROPERTY = "font-size-adjust";
  SVGConstants.CSS_FONT_STRETCH_PROPERTY = "font-stretch";
  SVGConstants.CSS_FONT_STYLE_PROPERTY = "font-style";
  SVGConstants.CSS_FONT_VARIANT_PROPERTY = "font-variant";
  SVGConstants.CSS_FONT_WEIGHT_PROPERTY = "font-weight";
  SVGConstants.CSS_GLYPH_ORIENTATION_HORIZONTAL_PROPERTY = "glyph-orientation-horizontal";
  SVGConstants.CSS_GLYPH_ORIENTATION_VERTICAL_PROPERTY = "glyph-orientation-vertical";
  SVGConstants.CSS_IMAGE_RENDERING_PROPERTY = "image-rendering";
  SVGConstants.CSS_KERNING_PROPERTY = "kerning";
  SVGConstants.CSS_LETTER_SPACING_PROPERTY = "letter-spacing";
  SVGConstants.CSS_LIGHTING_COLOR_PROPERTY = "lighting-color";
  SVGConstants.CSS_LINE_HEIGHT_PROPERTY = "line-height";
  SVGConstants.CSS_MARKER_PROPERTY = "marker";
  SVGConstants.CSS_MARKER_END_PROPERTY = "marker-end";
  SVGConstants.CSS_MARKER_MID_PROPERTY = "marker-mid";
  SVGConstants.CSS_MARKER_START_PROPERTY = "marker-start";
  SVGConstants.CSS_MASK_PROPERTY = "mask";
  SVGConstants.CSS_OPACITY_PROPERTY = "opacity";
  SVGConstants.CSS_OVERFLOW_PROPERTY = "overflow";
  SVGConstants.CSS_POINTER_EVENTS_PROPERTY = "pointer-events";
  SVGConstants.CSS_SHAPE_RENDERING_PROPERTY = "shape-rendering";
  SVGConstants.CSS_SRC_PROPERTY = "src";
  SVGConstants.CSS_STOP_COLOR_PROPERTY = "stop-color";
  SVGConstants.CSS_STOP_OPACITY_PROPERTY = "stop-opacity";
  SVGConstants.CSS_STROKE_PROPERTY = "stroke";
  SVGConstants.CSS_STROKE_DASHARRAY_PROPERTY = "stroke-dasharray";
  SVGConstants.CSS_STROKE_DASHOFFSET_PROPERTY = "stroke-dashoffset";
  SVGConstants.CSS_STROKE_LINECAP_PROPERTY = "stroke-linecap";
  SVGConstants.CSS_STROKE_LINEJOIN_PROPERTY = "stroke-linejoin";
  SVGConstants.CSS_STROKE_MITERLIMIT_PROPERTY = "stroke-miterlimit";
  SVGConstants.CSS_STROKE_OPACITY_PROPERTY = "stroke-opacity";
  SVGConstants.CSS_STROKE_WIDTH_PROPERTY = "stroke-width";
  SVGConstants.CSS_TEXT_ANCHOR_PROPERTY = "text-anchor";
  SVGConstants.CSS_TEXT_DECORATION_PROPERTY = "text-decoration";
  SVGConstants.CSS_TEXT_RENDERING_PROPERTY = "text-rendering";
  SVGConstants.CSS_UNICODE_BIDI_PROPERTY = "unicode-bidi";
  SVGConstants.CSS_VISIBILITY_PROPERTY = "visibility";
  SVGConstants.CSS_WORD_SPACING_PROPERTY = "word-spacing";
  SVGConstants.CSS_WRITING_MODE_PROPERTY = "writing-mode";

  /////////////////////////////////////////////////////////////////////////
  // The CSS property values.
  /////////////////////////////////////////////////////////////////////////
  SVGConstants.CSS_ACCUMULATE_VALUE = "accumulate";
  SVGConstants.CSS_ACTIVEBORDER_VALUE = "activeborder";
  SVGConstants.CSS_ACTIVECAPTION_VALUE = "activecaption";
  SVGConstants.CSS_AFTER_EDGE_VALUE = "after-edge";
  SVGConstants.CSS_ALICEBLUE_VALUE = "aliceblue";
  SVGConstants.CSS_ALL_VALUE = "all";
  SVGConstants.CSS_ALPHABETIC_VALUE = "alphabetic";
  SVGConstants.CSS_ANTIQUEWHITE_VALUE = "antiquewhite";
  SVGConstants.CSS_APPWORKSPACE_VALUE = "appworkspace";
  SVGConstants.CSS_AQUAMARINE_VALUE = "aquamarine";
  SVGConstants.CSS_AQUA_VALUE = "aqua";
  SVGConstants.CSS_AUTOSENSE_SCRIPT_VALUE = "autosense-script";
  SVGConstants.CSS_AUTO_VALUE = "auto";
  SVGConstants.CSS_AZURE_VALUE = "azure";
  SVGConstants.CSS_BACKGROUND_VALUE = "background";
  SVGConstants.CSS_BASELINE_VALUE = "baseline";
  SVGConstants.CSS_BEFORE_EDGE_VALUE = "before-edge";
  SVGConstants.CSS_BEIGE_VALUE = "beige";
  SVGConstants.CSS_BEVEL_VALUE = "bevel";
  SVGConstants.CSS_BIDI_OVERRIDE_VALUE = "bidi-override";
  SVGConstants.CSS_BISQUE_VALUE = "bisque";
  SVGConstants.CSS_BLACK_VALUE = "black";
  SVGConstants.CSS_BLANCHEDALMOND_VALUE = "blanchedalmond";
  SVGConstants.CSS_BLINK_VALUE = "blink";
  SVGConstants.CSS_BLOCK_VALUE = "block";
  SVGConstants.CSS_BLUEVIOLET_VALUE = "blueviolet";
  SVGConstants.CSS_BLUE_VALUE = "blue";
  SVGConstants.CSS_BOLDER_VALUE = "bolder";
  SVGConstants.CSS_BOLD_VALUE = "bold";
  SVGConstants.CSS_BOTTOM_VALUE = "bottom";
  SVGConstants.CSS_BROWN_VALUE = "brown";
  SVGConstants.CSS_BURLYWOOD_VALUE = "burlywood";
  SVGConstants.CSS_BUTTONFACE_VALUE = "buttonface";
  SVGConstants.CSS_BUTTONHIGHLIGHT_VALUE = "buttonhighlight";
  SVGConstants.CSS_BUTTONSHADOW_VALUE = "buttonshadow";
  SVGConstants.CSS_BUTTONTEXT_VALUE = "buttontext";
  SVGConstants.CSS_BUTT_VALUE = "butt";
  SVGConstants.CSS_CADETBLUE_VALUE = "cadetblue";
  SVGConstants.CSS_CAPTIONTEXT_VALUE = "captiontext";
  SVGConstants.CSS_CAPTION_VALUE = "caption";
  SVGConstants.CSS_CENTER_VALUE = "center";
  SVGConstants.CSS_CENTRAL_VALUE = "central";
  SVGConstants.CSS_CHARTREUSE_VALUE = "chartreuse";
  SVGConstants.CSS_CHOCOLATE_VALUE = "chocolate";
  SVGConstants.CSS_COLLAPSE_VALUE = "collapse";
  SVGConstants.CSS_COMPACT_VALUE = "compact";
  SVGConstants.CSS_CONDENSED_VALUE = "condensed";
  SVGConstants.CSS_CORAL_VALUE = "coral";
  SVGConstants.CSS_CORNFLOWERBLUE_VALUE = "cornflowerblue";
  SVGConstants.CSS_CORNSILK_VALUE = "cornsilk";
  SVGConstants.CSS_CRIMSON_VALUE = "crimson";
  SVGConstants.CSS_CRISPEDGES_VALUE = "crispedges";
  SVGConstants.CSS_CROSSHAIR_VALUE = "crosshair";
  SVGConstants.CSS_CURRENTCOLOR_VALUE = "currentColor";
  SVGConstants.CSS_CURSIVE_VALUE = "cursive";
  SVGConstants.CSS_CYAN_VALUE = "cyan";
  SVGConstants.CSS_DARKBLUE_VALUE = "darkblue";
  SVGConstants.CSS_DARKCYAN_VALUE = "darkcyan";
  SVGConstants.CSS_DARKGOLDENROD_VALUE = "darkgoldenrod";
  SVGConstants.CSS_DARKGRAY_VALUE = "darkgray";
  SVGConstants.CSS_DARKGREEN_VALUE = "darkgreen";
  SVGConstants.CSS_DARKGREY_VALUE = "darkgrey";
  SVGConstants.CSS_DARKKHAKI_VALUE = "darkkhaki";
  SVGConstants.CSS_DARKMAGENTA_VALUE = "darkmagenta";
  SVGConstants.CSS_DARKOLIVEGREEN_VALUE = "darkolivegreen";
  SVGConstants.CSS_DARKORANGE_VALUE = "darkorange";
  SVGConstants.CSS_DARKORCHID_VALUE = "darkorchid";
  SVGConstants.CSS_DARKRED_VALUE = "darkred";
  SVGConstants.CSS_DARKSALMON_VALUE = "darksalmon";
  SVGConstants.CSS_DARKSEAGREEN_VALUE = "darkseagreen";
  SVGConstants.CSS_DARKSLATEBLUE_VALUE = "darkslateblue";
  SVGConstants.CSS_DARKSLATEGRAY_VALUE = "darkslategray";
  SVGConstants.CSS_DARKSLATEGREY_VALUE = "darkslategrey";
  SVGConstants.CSS_DARKTURQUOISE_VALUE = "darkturquoise";
  SVGConstants.CSS_DARKVIOLET_VALUE = "darkviolet";
  SVGConstants.CSS_DEEPPINK_VALUE = "deeppink";
  SVGConstants.CSS_DEEPSKYBLUE_VALUE = "deepskyblue";
  SVGConstants.CSS_DEFAULT_VALUE = "default";
  SVGConstants.CSS_DIMGRAY_VALUE = "dimgray";
  SVGConstants.CSS_DIMGREY_VALUE = "dimgrey";
  SVGConstants.CSS_DODGERBLUE_VALUE = "dodgerblue";
  SVGConstants.CSS_EMBED_VALUE = "embed";
  SVGConstants.CSS_END_VALUE = "end";
  SVGConstants.CSS_EVENODD_VALUE = "evenodd";
  SVGConstants.CSS_EXPANDED_VALUE = "expanded";
  SVGConstants.CSS_EXTRA_CONDENSED_VALUE = "extra-condensed";
  SVGConstants.CSS_EXTRA_EXPANDED_VALUE = "extra-expanded";
  SVGConstants.CSS_E_RESIZE_VALUE = "e-resize";
  SVGConstants.CSS_FANTASY_VALUE = "fantasy";
  SVGConstants.CSS_FILLSTROKE_VALUE = "fillstroke";
  SVGConstants.CSS_FILL_VALUE = "fill";
  SVGConstants.CSS_FIREBRICK_VALUE = "firebrick";
  SVGConstants.CSS_FLORALWHITE_VALUE = "floralwhite";
  SVGConstants.CSS_FORESTGREEN_VALUE = "forestgreen";
  SVGConstants.CSS_FUCHSIA_VALUE = "fuchsia";
  SVGConstants.CSS_GAINSBORO_VALUE = "gainsboro";
  SVGConstants.CSS_GEOMETRICPRECISION_VALUE = "geometricprecision";
  SVGConstants.CSS_GHOSTWHITE_VALUE = "ghostwhite";
  SVGConstants.CSS_GOLDENROD_VALUE = "goldenrod";
  SVGConstants.CSS_GOLD_VALUE = "gold";
  SVGConstants.CSS_GRAYTEXT_VALUE = "graytext";
  SVGConstants.CSS_GRAY_VALUE = "gray";
  SVGConstants.CSS_GREENYELLOW_VALUE = "greenyellow";
  SVGConstants.CSS_GREEN_VALUE = "green";
  SVGConstants.CSS_GREY_VALUE = "grey";
  SVGConstants.CSS_HANGING_VALUE = "hanging";
  SVGConstants.CSS_HELP_VALUE = "help";
  SVGConstants.CSS_HIDDEN_VALUE = "hidden";
  SVGConstants.CSS_HIGHLIGHTTEXT_VALUE = "highlighttext";
  SVGConstants.CSS_HIGHLIGHT_VALUE = "highlight";
  SVGConstants.CSS_HONEYDEW_VALUE = "honeydew";
  SVGConstants.CSS_HOTPINK_VALUE = "hotpink";
  SVGConstants.CSS_ICON_VALUE = "icon";
  SVGConstants.CSS_IDEOGRAPHIC_VALUE = "ideographic";
  SVGConstants.CSS_INACTIVEBORDER_VALUE = "inactiveborder";
  SVGConstants.CSS_INACTIVECAPTIONTEXT_VALUE = "inactivecaptiontext";
  SVGConstants.CSS_INACTIVECAPTION_VALUE = "inactivecaption";
  SVGConstants.CSS_INDIANRED_VALUE = "indianred";
  SVGConstants.CSS_INDIGO_VALUE = "indigo";
  SVGConstants.CSS_INFOBACKGROUND_VALUE = "infobackground";
  SVGConstants.CSS_INFOTEXT_VALUE = "infotext";
  SVGConstants.CSS_INHERIT_VALUE = "inherit";
  SVGConstants.CSS_INLINE_TABLE_VALUE = "inline-table";
  SVGConstants.CSS_INLINE_VALUE = "inline";
  SVGConstants.CSS_ITALIC_VALUE = "italic";
  SVGConstants.CSS_IVORY_VALUE = "ivory";
  SVGConstants.CSS_KHAKI_VALUE = "khaki";
  SVGConstants.CSS_LARGER_VALUE = "larger";
  SVGConstants.CSS_LARGE_VALUE = "large";
  SVGConstants.CSS_LAVENDERBLUSH_VALUE = "lavenderblush";
  SVGConstants.CSS_LAVENDER_VALUE = "lavender";
  SVGConstants.CSS_LAWNGREEN_VALUE = "lawngreen";
  SVGConstants.CSS_LEMONCHIFFON_VALUE = "lemonchiffon";
  SVGConstants.CSS_LIGHTBLUE_VALUE = "lightblue";
  SVGConstants.CSS_LIGHTCORAL_VALUE = "lightcoral";
  SVGConstants.CSS_LIGHTCYAN_VALUE = "lightcyan";
  SVGConstants.CSS_LIGHTER_VALUE = "lighter";
  SVGConstants.CSS_LIGHTGOLDENRODYELLOW_VALUE = "lightgoldenrodyellow";
  SVGConstants.CSS_LIGHTGRAY_VALUE = "lightgray";
  SVGConstants.CSS_LIGHTGREEN_VALUE = "lightgreen";
  SVGConstants.CSS_LIGHTGREY_VALUE = "lightgrey";
  SVGConstants.CSS_LIGHTPINK_VALUE = "lightpink";
  SVGConstants.CSS_LIGHTSALMON_VALUE = "lightsalmon";
  SVGConstants.CSS_LIGHTSEAGREEN_VALUE = "lightseagreen";
  SVGConstants.CSS_LIGHTSKYBLUE_VALUE = "lightskyblue";
  SVGConstants.CSS_LIGHTSLATEGRAY_VALUE = "lightslategray";
  SVGConstants.CSS_LIGHTSLATEGREY_VALUE = "lightslategrey";
  SVGConstants.CSS_LIGHTSTEELBLUE_VALUE = "lightsteelblue";
  SVGConstants.CSS_LIGHTYELLOW_VALUE = "lightyellow";
  SVGConstants.CSS_LIMEGREEN_VALUE = "limegreen";
  SVGConstants.CSS_LIME_VALUE = "lime";
  SVGConstants.CSS_LINEARRGB_VALUE = "linearrgb";
  SVGConstants.CSS_LINEN_VALUE = "linen";
  SVGConstants.CSS_LINE_THROUGH_VALUE = "line-through";
  SVGConstants.CSS_LIST_ITEM_VALUE = "list-item";
  SVGConstants.CSS_LOWER_VALUE = "lower";
  SVGConstants.CSS_LR_TB_VALUE = "lr-tb";
  SVGConstants.CSS_LR_VALUE = "lr";
  SVGConstants.CSS_LTR_VALUE = "ltr";
  SVGConstants.CSS_MAGENTA_VALUE = "magenta";
  SVGConstants.CSS_MARKER_VALUE = "marker";
  SVGConstants.CSS_MAROON_VALUE = "maroon";
  SVGConstants.CSS_MATHEMATICAL_VALUE = "mathematical";
  SVGConstants.CSS_MEDIUMAQUAMARINE_VALUE = "mediumaquamarine";
  SVGConstants.CSS_MEDIUMBLUE_VALUE = "mediumblue";
  SVGConstants.CSS_MEDIUMORCHID_VALUE = "mediumorchid";
  SVGConstants.CSS_MEDIUMPURPLE_VALUE = "mediumpurple";
  SVGConstants.CSS_MEDIUMSEAGREEN_VALUE = "mediumseagreen";
  SVGConstants.CSS_MEDIUMSLATEBLUE_VALUE = "mediumslateblue";
  SVGConstants.CSS_MEDIUMSPRINGGREEN_VALUE = "mediumspringgreen";
  SVGConstants.CSS_MEDIUMTURQUOISE_VALUE = "mediumturquoise";
  SVGConstants.CSS_MEDIUMVIOLETRED_VALUE = "mediumvioletred";
  SVGConstants.CSS_MEDIUM_VALUE = "medium";
  SVGConstants.CSS_MENU_VALUE = "menu";
  SVGConstants.CSS_MENUTEXT_VALUE = "menutext";
  SVGConstants.CSS_MESSAGE_BOX_VALUE = "message-box";
  SVGConstants.CSS_MIDDLE_VALUE = "middle";
  SVGConstants.CSS_MIDNIGHTBLUE_VALUE = "midnightblue";
  SVGConstants.CSS_MINTCREAM_VALUE = "mintcream";
  SVGConstants.CSS_MISTYROSE_VALUE = "mistyrose";
  SVGConstants.CSS_MITER_VALUE = "miter";
  SVGConstants.CSS_MOCCASIN_VALUE = "moccasin";
  SVGConstants.CSS_MONOSPACE_VALUE = "monospace";
  SVGConstants.CSS_MOVE_VALUE = "move";
  SVGConstants.CSS_NARROWER_VALUE = "narrower";
  SVGConstants.CSS_NAVAJOWHITE_VALUE = "navajowhite";
  SVGConstants.CSS_NAVY_VALUE = "navy";
  SVGConstants.CSS_NEW_VALUE = "new";
  SVGConstants.CSS_NE_RESIZE_VALUE = "ne-resize";
  SVGConstants.CSS_NONE_VALUE = "none";
  SVGConstants.CSS_NONZERO_VALUE = "nonzero";
  SVGConstants.CSS_NORMAL_VALUE = "normal";
  SVGConstants.CSS_NO_CHANGE_VALUE = "no-change";
  SVGConstants.CSS_NW_RESIZE_VALUE = "nw-resize";
  SVGConstants.CSS_N_RESIZE_VALUE = "n-resize";
  SVGConstants.CSS_OBLIQUE_VALUE = "oblique";
  SVGConstants.CSS_OLDLACE_VALUE = "oldlace";
  SVGConstants.CSS_OLIVEDRAB_VALUE = "olivedrab";
  SVGConstants.CSS_OLIVE_VALUE = "olive";
  SVGConstants.CSS_OPTIMIZELEGIBILITY_VALUE = "optimizelegibility";
  SVGConstants.CSS_OPTIMIZEQUALITY_VALUE = "optimizequality";
  SVGConstants.CSS_OPTIMIZESPEED_VALUE = "optimizespeed";
  SVGConstants.CSS_ORANGERED_VALUE = "orangered";
  SVGConstants.CSS_ORANGE_VALUE = "orange";
  SVGConstants.CSS_ORCHID_VALUE = "orchid";
  SVGConstants.CSS_OVERLINE_VALUE = "overline";
  SVGConstants.CSS_PAINTED_VALUE = "painted";
  SVGConstants.CSS_PALEGOLDENROD_VALUE = "palegoldenrod";
  SVGConstants.CSS_PALEGREEN_VALUE = "palegreen";
  SVGConstants.CSS_PALETURQUOISE_VALUE = "paleturquoise";
  SVGConstants.CSS_PALEVIOLETRED_VALUE = "palevioletred";
  SVGConstants.CSS_PAPAYAWHIP_VALUE = "papayawhip";
  SVGConstants.CSS_PEACHPUFF_VALUE = "peachpuff";
  SVGConstants.CSS_PERU_VALUE = "peru";
  SVGConstants.CSS_PINK_VALUE = "pink";
  SVGConstants.CSS_PLUM_VALUE = "plum";
  SVGConstants.CSS_POINTER_VALUE = "pointer";
  SVGConstants.CSS_POWDERBLUE_VALUE = "powderblue";
  SVGConstants.CSS_PURPLE_VALUE = "purple";
  SVGConstants.CSS_RED_VALUE = "red";
  SVGConstants.CSS_RESET_SIZE_VALUE = "reset-size";
  SVGConstants.CSS_RESET_VALUE = "reset";
  SVGConstants.CSS_RL_TB_VALUE = "rl-tb";
  SVGConstants.CSS_RL_VALUE = "rl";
  SVGConstants.CSS_ROSYBROWN_VALUE = "rosybrown";
  SVGConstants.CSS_ROUND_VALUE = "round";
  SVGConstants.CSS_ROYALBLUE_VALUE = "royalblue";
  SVGConstants.CSS_RTL_VALUE = "rtl";
  SVGConstants.CSS_RUN_IN_VALUE = "run-in";
  SVGConstants.CSS_SADDLEBROWN_VALUE = "saddlebrown";
  SVGConstants.CSS_SALMON_VALUE = "salmon";
  SVGConstants.CSS_SANDYBROWN_VALUE = "sandybrown";
  SVGConstants.CSS_SANS_SERIF_VALUE = "sans-serif";
  SVGConstants.CSS_SCROLLBAR_VALUE = "scrollbar";
  SVGConstants.CSS_SCROLL_VALUE = "scroll";
  SVGConstants.CSS_SEAGREEN_VALUE = "seagreen";
  SVGConstants.CSS_SEASHELL_VALUE = "seashell";
  SVGConstants.CSS_SEMI_CONDENSED_VALUE = "semi-condensed";
  SVGConstants.CSS_SEMI_EXPANDED_VALUE = "semi-expanded";
  SVGConstants.CSS_SERIF_VALUE = "serif";
  SVGConstants.CSS_SE_RESIZE_VALUE = "se-resize";
  SVGConstants.CSS_SIENNA_VALUE = "sienna";
  SVGConstants.CSS_SILVER_VALUE = "silver";
  SVGConstants.CSS_SKYBLUE_VALUE = "skyblue";
  SVGConstants.CSS_SLATEBLUE_VALUE = "slateblue";
  SVGConstants.CSS_SLATEGRAY_VALUE = "slategray";
  SVGConstants.CSS_SLATEGREY_VALUE = "slategrey";
  SVGConstants.CSS_SMALLER_VALUE = "smaller";
  SVGConstants.CSS_SMALL_CAPS_VALUE = "small-caps";
  SVGConstants.CSS_SMALL_CAPTION_VALUE = "small-caption";
  SVGConstants.CSS_SMALL_VALUE = "small";
  SVGConstants.CSS_SNOW_VALUE = "snow";
  SVGConstants.CSS_SPRINGGREEN_VALUE = "springgreen";
  SVGConstants.CSS_SQUARE_VALUE = "square";
  SVGConstants.CSS_SRGB_VALUE = "srgb";
  SVGConstants.CSS_START_VALUE = "start";
  SVGConstants.CSS_STATUS_BAR_VALUE = "status-bar";
  SVGConstants.CSS_STEELBLUE_VALUE = "steelblue";
  SVGConstants.CSS_STROKE_VALUE = "stroke";
  SVGConstants.CSS_SUB_VALUE = "sub";
  SVGConstants.CSS_SUPER_VALUE = "super";
  SVGConstants.CSS_SW_RESIZE_VALUE = "sw-resize";
  SVGConstants.CSS_S_RESIZE_VALUE = "s-resize";
  SVGConstants.CSS_TABLE_CAPTION_VALUE = "table-caption";
  SVGConstants.CSS_TABLE_CELL_VALUE = "table-cell";
  SVGConstants.CSS_TABLE_COLUMN_GROUP_VALUE = "table-column-group";
  SVGConstants.CSS_TABLE_COLUMN_VALUE = "table-column";
  SVGConstants.CSS_TABLE_FOOTER_GROUP_VALUE = "table-footer-group";
  SVGConstants.CSS_TABLE_HEADER_GROUP_VALUE = "table-header-group";
  SVGConstants.CSS_TABLE_ROW_GROUP_VALUE = "table-row-group";
  SVGConstants.CSS_TABLE_ROW_VALUE = "table-row";
  SVGConstants.CSS_TABLE_VALUE = "table";
  SVGConstants.CSS_TAN_VALUE = "tan";
  SVGConstants.CSS_TB_RL_VALUE = "tb-rl";
  SVGConstants.CSS_TB_VALUE = "tb";
  SVGConstants.CSS_TEAL_VALUE = "teal";
  SVGConstants.CSS_TEXT_AFTER_EDGE_VALUE = "text-after-edge";
  SVGConstants.CSS_TEXT_BEFORE_EDGE_VALUE = "text-before-edge";
  SVGConstants.CSS_TEXT_BOTTOM_VALUE = "text-bottom";
  SVGConstants.CSS_TEXT_TOP_VALUE = "text-top";
  SVGConstants.CSS_TEXT_VALUE = "text";
  SVGConstants.CSS_THISTLE_VALUE = "thistle";
  SVGConstants.CSS_THREEDDARKSHADOW_VALUE = "threeddarkshadow";
  SVGConstants.CSS_THREEDFACE_VALUE = "threedface";
  SVGConstants.CSS_THREEDHIGHLIGHT_VALUE = "threedhighlight";
  SVGConstants.CSS_THREEDLIGHTSHADOW_VALUE = "threedlightshadow";
  SVGConstants.CSS_THREEDSHADOW_VALUE = "threedshadow";
  SVGConstants.CSS_TOMATO_VALUE = "tomato";
  SVGConstants.CSS_TOP_VALUE = "top";
  SVGConstants.CSS_TURQUOISE_VALUE = "turquoise";
  SVGConstants.CSS_ULTRA_CONDENSED_VALUE = "ultra-condensed";
  SVGConstants.CSS_ULTRA_EXPANDED_VALUE = "ultra-expanded";
  SVGConstants.CSS_UNDERLINE_VALUE = "underline";
  SVGConstants.CSS_USE_SCRIPT_VALUE = "use-script";
  SVGConstants.CSS_VIOLET_VALUE = "violet";
  SVGConstants.CSS_VISIBLEFILLSTROKE_VALUE = "visiblefillstroke";
  SVGConstants.CSS_VISIBLEFILL_VALUE = "visiblefill";
  SVGConstants.CSS_VISIBLEPAINTED_VALUE = "visiblepainted";
  SVGConstants.CSS_VISIBLESTROKE_VALUE = "visiblestroke";
  SVGConstants.CSS_VISIBLE_VALUE = "visible";
  SVGConstants.CSS_WAIT_VALUE = "wait";
  SVGConstants.CSS_WHEAT_VALUE = "wheat";
  SVGConstants.CSS_WHITESMOKE_VALUE = "whitesmoke";
  SVGConstants.CSS_WHITE_VALUE = "white";
  SVGConstants.CSS_WIDER_VALUE = "wider";
  SVGConstants.CSS_WINDOWFRAME_VALUE = "windowframe";
  SVGConstants.CSS_WINDOWTEXT_VALUE = "windowtext";
  SVGConstants.CSS_WINDOW_VALUE = "window";
  SVGConstants.CSS_W_RESIZE_VALUE = "w-resize";
  SVGConstants.CSS_XX_LARGE_VALUE = "xx-large";
  SVGConstants.CSS_XX_SMALL_VALUE = "xx-small";
  SVGConstants.CSS_X_LARGE_VALUE = "x-large";
  SVGConstants.CSS_X_SMALL_VALUE = "x-small";
  SVGConstants.CSS_YELLOWGREEN_VALUE = "yellowgreen";
  SVGConstants.CSS_YELLOW_VALUE = "yellow";
  /////////////////////////////////////////////////////////////////////////
  // SVG tags
  /////////////////////////////////////////////////////////////////////////

  SVGConstants.SVG_A_TAG = "a";
  SVGConstants.SVG_ALT_GLYPH_TAG = "altGlyph";
  SVGConstants.SVG_ALT_GLYPH_DEF_TAG = "altGlyphDef";
  SVGConstants.SVG_ALT_GLYPH_ITEM_TAG = "altGlyphItem";
  SVGConstants.SVG_ANIMATE_TAG = "animate";
  SVGConstants.SVG_ANIMATE_COLOR_TAG = "animateColor";
  SVGConstants.SVG_ANIMATE_MOTION_TAG = "animateMotion";
  SVGConstants.SVG_ANIMATE_TRANSFORM_TAG = "animateTransform";
  SVGConstants.SVG_CIRCLE_TAG = "circle";
  SVGConstants.SVG_CLIP_PATH_TAG = "clipPath";
  SVGConstants.SVG_COLOR_PROFILE_TAG = "color-profile";
  SVGConstants.SVG_CURSOR_TAG = "cursor";
  SVGConstants.SVG_DEFS_TAG = "defs";
  SVGConstants.SVG_DESC_TAG = "desc";
  SVGConstants.SVG_ELLIPSE_TAG = "ellipse";
  SVGConstants.SVG_FE_BLEND_TAG = "feBlend";
  SVGConstants.SVG_FE_COLOR_MATRIX_TAG = "feColorMatrix";
  SVGConstants.SVG_FE_COMPONENT_TRANSFER_TAG = "feComponentTransfer";
  SVGConstants.SVG_FE_COMPOSITE_TAG = "feComposite";
  SVGConstants.SVG_FE_CONVOLVE_MATRIX_TAG = "feConvolveMatrix";
  SVGConstants.SVG_FE_DIFFUSE_LIGHTING_TAG = "feDiffuseLighting";
  SVGConstants.SVG_FE_DISPLACEMENT_MAP_TAG = "feDisplacementMap";
  SVGConstants.SVG_FE_DISTANT_LIGHT_TAG = "feDistantLight";
  SVGConstants.SVG_FE_FLOOD_TAG = "feFlood";
  SVGConstants.SVG_FE_FUNC_A_TAG = "feFuncA";
  SVGConstants.SVG_FE_FUNC_B_TAG = "feFuncB";
  SVGConstants.SVG_FE_FUNC_G_TAG = "feFuncG";
  SVGConstants.SVG_FE_FUNC_R_TAG = "feFuncR";
  SVGConstants.SVG_FE_GAUSSIAN_BLUR_TAG = "feGaussianBlur";
  SVGConstants.SVG_FE_IMAGE_TAG = "feImage";
  SVGConstants.SVG_FE_MERGE_NODE_TAG = "feMergeNode";
  SVGConstants.SVG_FE_MERGE_TAG = "feMerge";
  SVGConstants.SVG_FE_MORPHOLOGY_TAG = "feMorphology";
  SVGConstants.SVG_FE_OFFSET_TAG = "feOffset";
  SVGConstants.SVG_FE_POINT_LIGHT_TAG = "fePointLight";
  SVGConstants.SVG_FE_SPECULAR_LIGHTING_TAG = "feSpecularLighting";
  SVGConstants.SVG_FE_SPOT_LIGHT_TAG = "feSpotLight";
  SVGConstants.SVG_FE_TILE_TAG = "feTile";
  SVGConstants.SVG_FE_TURBULENCE_TAG = "feTurbulence";
  SVGConstants.SVG_FILTER_TAG = "filter";
  SVGConstants.SVG_FONT_TAG = "font";
  SVGConstants.SVG_FONT_FACE_TAG = "font-face";
  SVGConstants.SVG_FONT_FACE_FORMAT_TAG = "font-face-format";
  SVGConstants.SVG_FONT_FACE_NAME_TAG = "font-face-name";
  SVGConstants.SVG_FONT_FACE_SRC_TAG = "font-face-src";
  SVGConstants.SVG_FONT_FACE_URI_TAG = "font-face-uri";
  SVGConstants.SVG_FOREIGN_OBJECT_TAG = "foreignObject";
  SVGConstants.SVG_G_TAG = "g";
  SVGConstants.SVG_GLYPH_TAG = "glyph";
  SVGConstants.SVG_GLYPH_REF_TAG = "glyphRef";
  SVGConstants.SVG_H_KERN_TAG = "hkern";
  SVGConstants.SVG_IMAGE_TAG = "image";
  SVGConstants.SVG_LINE_TAG = "line";
  SVGConstants.SVG_LINEAR_GRADIENT_TAG = "linearGradient";
  SVGConstants.SVG_MARKER_TAG = "marker";
  SVGConstants.SVG_MASK_TAG = "mask";
  SVGConstants.SVG_METADATA_TAG = "metadata";
  SVGConstants.SVG_MISSING_GLYPH_TAG = "missing-glyph";
  SVGConstants.SVG_M_PATH_TAG = "mpath";
  SVGConstants.SVG_PATH_TAG = "path";
  SVGConstants.SVG_PATTERN_TAG = "pattern";
  SVGConstants.SVG_POLYGON_TAG = "polygon";
  SVGConstants.SVG_POLYLINE_TAG = "polyline";
  SVGConstants.SVG_RADIAL_GRADIENT_TAG = "radialGradient";
  SVGConstants.SVG_RECT_TAG = "rect";
  SVGConstants.SVG_SET_TAG = "set";
  SVGConstants.SVG_SCRIPT_TAG = "script";
  SVGConstants.SVG_STOP_TAG = "stop";
  SVGConstants.SVG_STYLE_TAG = "style";
  SVGConstants.SVG_SVG_TAG = "svg";
  SVGConstants.SVG_SWITCH_TAG = "switch";
  SVGConstants.SVG_SYMBOL_TAG = "symbol";
  SVGConstants.SVG_TEXT_PATH_TAG = "textPath";
  SVGConstants.SVG_TEXT_TAG = "text";
  SVGConstants.SVG_TITLE_TAG = "title";
  SVGConstants.SVG_T_REF_TAG = "tref";
  SVGConstants.SVG_T_SPAN_TAG = "tspan";
  SVGConstants.SVG_USE_TAG = "use";
  SVGConstants.SVG_VIEW_TAG = "view";
  SVGConstants.SVG_V_KERN_TAG = "vkern";

  /////////////////////////////////////////////////////////////////////////
  // SVG attributes
  /////////////////////////////////////////////////////////////////////////

  SVGConstants.SVG_ACCENT_HEIGHT_ATTRIBUTE = "accent-height";
  SVGConstants.SVG_ACCUMULATE_ATTRIBUTE = "accumulate";
  SVGConstants.SVG_ADDITIVE_ATTRIBUTE = "additive";
  SVGConstants.SVG_AMPLITUDE_ATTRIBUTE = "amplitude";
  SVGConstants.SVG_ARABIC_FORM_ATTRIBUTE = "arabic-form";
  SVGConstants.SVG_ASCENT_ATTRIBUTE = "ascent";
  SVGConstants.SVG_AZIMUTH_ATTRIBUTE = "azimuth";
  SVGConstants.SVG_ALPHABETIC_ATTRIBUTE = "alphabetic";
  SVGConstants.SVG_ATTRIBUTE_NAME_ATTRIBUTE = "attributeName";
  SVGConstants.SVG_ATTRIBUTE_TYPE_ATTRIBUTE = "attributeType";
  SVGConstants.SVG_BASE_FREQUENCY_ATTRIBUTE = "baseFrequency";
  SVGConstants.SVG_BASE_PROFILE_ATTRIBUTE = "baseProfile";
  SVGConstants.SVG_BEGIN_ATTRIBUTE = "begin";
  SVGConstants.SVG_BBOX_ATTRIBUTE = "bbox";
  SVGConstants.SVG_BIAS_ATTRIBUTE = "bias";
  SVGConstants.SVG_BY_ATTRIBUTE = "by";
  SVGConstants.SVG_CALC_MODE_ATTRIBUTE = "calcMode";
  SVGConstants.SVG_CAP_HEIGHT_ATTRIBUTE = "cap-height";
  SVGConstants.SVG_CLASS_ATTRIBUTE = "class";
  SVGConstants.SVG_CLIP_PATH_ATTRIBUTE = SVGConstants.CSS_CLIP_PATH_PROPERTY;
  SVGConstants.SVG_CLIP_PATH_UNITS_ATTRIBUTE = "clipPathUnits";
  SVGConstants.SVG_COLOR_INTERPOLATION_ATTRIBUTE = SVGConstants.CSS_COLOR_INTERPOLATION_PROPERTY;
  SVGConstants.SVG_COLOR_RENDERING_ATTRIBUTE = SVGConstants.CSS_COLOR_RENDERING_PROPERTY;
  SVGConstants.SVG_CONTENT_SCRIPT_TYPE_ATTRIBUTE = "contentScriptType";
  SVGConstants.SVG_CONTENT_STYLE_TYPE_ATTRIBUTE = "contentStyleType";
  SVGConstants.SVG_CX_ATTRIBUTE = "cx";
  SVGConstants.SVG_CY_ATTRIBUTE = "cy";
  SVGConstants.SVG_DESCENT_ATTRIBUTE = "descent";
  SVGConstants.SVG_DIFFUSE_CONSTANT_ATTRIBUTE = "diffuseConstant";
  SVGConstants.SVG_DIVISOR_ATTRIBUTE = "divisor";
  SVGConstants.SVG_DUR_ATTRIBUTE = "dur";
  SVGConstants.SVG_DX_ATTRIBUTE = "dx";
  SVGConstants.SVG_DY_ATTRIBUTE = "dy";
  SVGConstants.SVG_D_ATTRIBUTE = "d";
  SVGConstants.SVG_EDGE_MODE_ATTRIBUTE = "edgeMode";
  SVGConstants.SVG_ELEVATION_ATTRIBUTE = "elevation";
  SVGConstants.SVG_ENABLE_BACKGROUND_ATTRIBUTE = SVGConstants.CSS_ENABLE_BACKGROUND_PROPERTY;
  SVGConstants.SVG_END_ATTRIBUTE = "end";
  SVGConstants.SVG_EXPONENT_ATTRIBUTE = "exponent";
  SVGConstants.SVG_EXTERNAL_RESOURCES_REQUIRED_ATTRIBUTE = "externalResourcesRequired";
  SVGConstants.SVG_FILL_ATTRIBUTE = SVGConstants.CSS_FILL_PROPERTY;
  SVGConstants.SVG_FILL_OPACITY_ATTRIBUTE = SVGConstants.CSS_FILL_OPACITY_PROPERTY;
  SVGConstants.SVG_FILL_RULE_ATTRIBUTE = SVGConstants.CSS_FILL_RULE_PROPERTY;
  SVGConstants.SVG_FILTER_ATTRIBUTE = SVGConstants.CSS_FILTER_PROPERTY;
  SVGConstants.SVG_FILTER_RES_ATTRIBUTE = "filterRes";
  SVGConstants.SVG_FILTER_UNITS_ATTRIBUTE = "filterUnits";
  SVGConstants.SVG_FLOOD_COLOR_ATTRIBUTE = SVGConstants.CSS_FLOOD_COLOR_PROPERTY;
  SVGConstants.SVG_FLOOD_OPACITY_ATTRIBUTE = SVGConstants.CSS_FLOOD_OPACITY_PROPERTY;
  SVGConstants.SVG_FORMAT_ATTRIBUTE = "format";
  SVGConstants.SVG_FONT_FAMILY_ATTRIBUTE = SVGConstants.CSS_FONT_FAMILY_PROPERTY;
  SVGConstants.SVG_FONT_SIZE_ATTRIBUTE = SVGConstants.CSS_FONT_SIZE_PROPERTY;
  SVGConstants.SVG_FONT_STRETCH_ATTRIBUTE = SVGConstants.CSS_FONT_STRETCH_PROPERTY;
  SVGConstants.SVG_FONT_STYLE_ATTRIBUTE = SVGConstants.CSS_FONT_STYLE_PROPERTY;
  SVGConstants.SVG_FONT_VARIANT_ATTRIBUTE = SVGConstants.CSS_FONT_VARIANT_PROPERTY;
  SVGConstants.SVG_FONT_WEIGHT_ATTRIBUTE = SVGConstants.CSS_FONT_WEIGHT_PROPERTY;
  SVGConstants.SVG_FROM_ATTRIBUTE = "from";
  SVGConstants.SVG_FX_ATTRIBUTE = "fx";
  SVGConstants.SVG_FY_ATTRIBUTE = "fy";
  SVGConstants.SVG_G1_ATTRIBUTE = "g1";
  SVGConstants.SVG_G2_ATTRIBUTE = "g2";
  SVGConstants.SVG_GLYPH_NAME_ATTRIBUTE = "glyph-name";
  SVGConstants.SVG_GLYPH_REF_ATTRIBUTE = "glyphRef";
  SVGConstants.SVG_GRADIENT_TRANSFORM_ATTRIBUTE = "gradientTransform";
  SVGConstants.SVG_GRADIENT_UNITS_ATTRIBUTE = "gradientUnits";
  SVGConstants.SVG_HANGING_ATTRIBUTE = "hanging";
  SVGConstants.SVG_HEIGHT_ATTRIBUTE = "height";
  SVGConstants.SVG_HORIZ_ADV_X_ATTRIBUTE = "horiz-adv-x";
  SVGConstants.SVG_HORIZ_ORIGIN_X_ATTRIBUTE = "horiz-origin-x";
  SVGConstants.SVG_HORIZ_ORIGIN_Y_ATTRIBUTE = "horiz-origin-y";
  SVGConstants.SVG_ID_ATTRIBUTE = SVGConstants.XML_ID_ATTRIBUTE;
  SVGConstants.SVG_IDEOGRAPHIC_ATTRIBUTE = "ideographic";
  SVGConstants.SVG_IMAGE_RENDERING_ATTRIBUTE = SVGConstants.CSS_IMAGE_RENDERING_PROPERTY;
  SVGConstants.SVG_IN2_ATTRIBUTE = "in2";
  SVGConstants.SVG_INTERCEPT_ATTRIBUTE = "intercept";
  SVGConstants.SVG_IN_ATTRIBUTE = "in";
  SVGConstants.SVG_K_ATTRIBUTE = "k";
  SVGConstants.SVG_K1_ATTRIBUTE = "k1";
  SVGConstants.SVG_K2_ATTRIBUTE = "k2";
  SVGConstants.SVG_K3_ATTRIBUTE = "k3";
  SVGConstants.SVG_K4_ATTRIBUTE = "k4";
  SVGConstants.SVG_KERNEL_MATRIX_ATTRIBUTE = "kernelMatrix";
  SVGConstants.SVG_KERNEL_UNIT_LENGTH_ATTRIBUTE = "kernelUnitLength";
  SVGConstants.SVG_KERNING_ATTRIBUTE = SVGConstants.CSS_KERNING_PROPERTY;
  SVGConstants.SVG_KEY_POINTS_ATTRIBUTE = "keyPoints";
  SVGConstants.SVG_KEY_SPLINES_ATTRIBUTE = "keySplines";
  SVGConstants.SVG_KEY_TIMES_ATTRIBUTE = "keyTimes";
  SVGConstants.SVG_LANG_ATTRIBUTE = "lang";
  SVGConstants.SVG_LENGTH_ADJUST_ATTRIBUTE = "lengthAdjust";
  SVGConstants.SVG_LIGHT_COLOR_ATTRIBUTE = "lightColor";
  SVGConstants.SVG_LIGHTING_COLOR_ATTRIBUTE = "lighting-color";
  SVGConstants.SVG_LIMITING_CONE_ANGLE_ATTRIBUTE = "limitingConeAngle";
  SVGConstants.SVG_LOCAL_ATTRIBUTE = "local";
  SVGConstants.SVG_MARKER_HEIGHT_ATTRIBUTE = "markerHeight";
  SVGConstants.SVG_MARKER_UNITS_ATTRIBUTE = "markerUnits";
  SVGConstants.SVG_MARKER_WIDTH_ATTRIBUTE = "markerWidth";
  SVGConstants.SVG_MASK_ATTRIBUTE = SVGConstants.CSS_MASK_PROPERTY;
  SVGConstants.SVG_MASK_CONTENT_UNITS_ATTRIBUTE = "maskContentUnits";
  SVGConstants.SVG_MASK_UNITS_ATTRIBUTE = "maskUnits";
  SVGConstants.SVG_MATHEMATICAL_ATTRIBUTE = "mathematical";
  SVGConstants.SVG_MAX_ATTRIBUTE = "max";
  SVGConstants.SVG_MEDIA_ATTRIBUTE = "media";
  SVGConstants.SVG_METHOD_ATTRIBUTE = "method";
  SVGConstants.SVG_MIN_ATTRIBUTE = "min";
  SVGConstants.SVG_MODE_ATTRIBUTE = "mode";
  SVGConstants.SVG_NAME_ATTRIBUTE = "name";
  SVGConstants.SVG_NUM_OCTAVES_ATTRIBUTE = "numOctaves";
  SVGConstants.SVG_OFFSET_ATTRIBUTE = "offset";
  SVGConstants.SVG_OPACITY_ATTRIBUTE = SVGConstants.CSS_OPACITY_PROPERTY;
  SVGConstants.SVG_OPERATOR_ATTRIBUTE = "operator";
  SVGConstants.SVG_ORDER_ATTRIBUTE = "order";
  SVGConstants.SVG_ORDER_X_ATTRIBUTE = "orderX";
  SVGConstants.SVG_ORDER_Y_ATTRIBUTE = "orderY";
  SVGConstants.SVG_ORIENT_ATTRIBUTE = "orient";
  SVGConstants.SVG_ORIENTATION_ATTRIBUTE = "orientation";
  SVGConstants.SVG_ORIGIN_ATTRIBUTE = "origin";
  SVGConstants.SVG_OVERLINE_POSITION_ATTRIBUTE = "overline-position";
  SVGConstants.SVG_OVERLINE_THICKNESS_ATTRIBUTE = "overline-thickness";
  SVGConstants.SVG_PANOSE_1_ATTRIBUTE = "panose-1";
  SVGConstants.SVG_PATH_ATTRIBUTE = "path";
  SVGConstants.SVG_PATH_LENGTH_ATTRIBUTE = "pathLength";
  SVGConstants.SVG_PATTERN_CONTENT_UNITS_ATTRIBUTE = "patternContentUnits";
  SVGConstants.SVG_PATTERN_TRANSFORM_ATTRIBUTE = "patternTransform";
  SVGConstants.SVG_PATTERN_UNITS_ATTRIBUTE = "patternUnits";
  SVGConstants.SVG_POINTS_ATTRIBUTE = "points";
  SVGConstants.SVG_POINTS_AT_X_ATTRIBUTE = "pointsAtX";
  SVGConstants.SVG_POINTS_AT_Y_ATTRIBUTE = "pointsAtY";
  SVGConstants.SVG_POINTS_AT_Z_ATTRIBUTE = "pointsAtZ";
  SVGConstants.SVG_PRESERVE_ALPHA_ATTRIBUTE = "preserveAlpha";
  SVGConstants.SVG_PRESERVE_ASPECT_RATIO_ATTRIBUTE = "preserveAspectRatio";
  SVGConstants.SVG_PRIMITIVE_UNITS_ATTRIBUTE = "primitiveUnits";
  SVGConstants.SVG_RADIUS_ATTRIBUTE = "radius";
  SVGConstants.SVG_REF_X_ATTRIBUTE = "refX";
  SVGConstants.SVG_REF_Y_ATTRIBUTE = "refY";
  SVGConstants.SVG_RENDERING_INTENT_ATTRIBUTE = "rendering-intent";
  SVGConstants.SVG_REPEAT_COUNT_ATTRIBUTE = "repeatCount";
  SVGConstants.SVG_REPEAT_DUR_ATTRIBUTE = "repeatDur";
  SVGConstants.SVG_REQUIRED_FEATURES_ATTRIBUTE = "requiredFeatures";
  SVGConstants.SVG_REQUIRED_EXTENSIONS_ATTRIBUTE = "requiredExtensions";
  SVGConstants.SVG_RESULT_ATTRIBUTE = "result";
  SVGConstants.SVG_RESULT_SCALE_ATTRIBUTE = "resultScale";
  SVGConstants.SVG_RESTART_ATTRIBUTE = "restart";
  SVGConstants.SVG_RX_ATTRIBUTE = "rx";
  SVGConstants.SVG_RY_ATTRIBUTE = "ry";
  SVGConstants.SVG_R_ATTRIBUTE = "r";
  SVGConstants.SVG_ROTATE_ATTRIBUTE = "rotate";
  SVGConstants.SVG_SCALE_ATTRIBUTE = "scale";
  SVGConstants.SVG_SEED_ATTRIBUTE = "seed";
  SVGConstants.SVG_SHAPE_RENDERING_ATTRIBUTE = SVGConstants.CSS_SHAPE_RENDERING_PROPERTY;
  SVGConstants.SVG_SLOPE_ATTRIBUTE = "slope";
  SVGConstants.SVG_SNAPSHOT_TIME_ATTRIBUTE = "snapshotTime";
  SVGConstants.SVG_SPACE_ATTRIBUTE = "space";
  SVGConstants.SVG_SPACING_ATTRIBUTE = "spacing";
  SVGConstants.SVG_SPECULAR_CONSTANT_ATTRIBUTE = "specularConstant";
  SVGConstants.SVG_SPECULAR_EXPONENT_ATTRIBUTE = "specularExponent";
  SVGConstants.SVG_SPREAD_METHOD_ATTRIBUTE = "spreadMethod";
  SVGConstants.SVG_START_OFFSET_ATTRIBUTE = "startOffset";
  SVGConstants.SVG_STD_DEVIATION_ATTRIBUTE = "stdDeviation";
  SVGConstants.SVG_STEMH_ATTRIBUTE = "stemh";
  SVGConstants.SVG_STEMV_ATTRIBUTE = "stemv";
  SVGConstants.SVG_STITCH_TILES_ATTRIBUTE = "stitchTiles";
  SVGConstants.SVG_STOP_COLOR_ATTRIBUTE = "stop-color";
  SVGConstants.SVG_STOP_OPACITY_ATTRIBUTE = SVGConstants.CSS_STOP_OPACITY_PROPERTY;
  SVGConstants.SVG_STRIKETHROUGH_POSITION_ATTRIBUTE = "strikethrough-position";
  SVGConstants.SVG_STRIKETHROUGH_THICKNESS_ATTRIBUTE = "strikethrough-thickness";
  SVGConstants.SVG_STRING_ATTRIBUTE = "string";
  SVGConstants.SVG_STROKE_ATTRIBUTE = SVGConstants.CSS_STROKE_PROPERTY;
  SVGConstants.SVG_STROKE_DASHARRAY_ATTRIBUTE = SVGConstants.CSS_STROKE_DASHARRAY_PROPERTY;
  SVGConstants.SVG_STROKE_DASHOFFSET_ATTRIBUTE = SVGConstants.CSS_STROKE_DASHOFFSET_PROPERTY;
  SVGConstants.SVG_STROKE_LINECAP_ATTRIBUTE = SVGConstants.CSS_STROKE_LINECAP_PROPERTY;
  SVGConstants.SVG_STROKE_LINEJOIN_ATTRIBUTE = SVGConstants.CSS_STROKE_LINEJOIN_PROPERTY;
  SVGConstants.SVG_STROKE_MITERLIMIT_ATTRIBUTE = SVGConstants.CSS_STROKE_MITERLIMIT_PROPERTY;
  SVGConstants.SVG_STROKE_OPACITY_ATTRIBUTE = SVGConstants.CSS_STROKE_OPACITY_PROPERTY;
  SVGConstants.SVG_STROKE_WIDTH_ATTRIBUTE = SVGConstants.CSS_STROKE_WIDTH_PROPERTY;
  SVGConstants.SVG_STYLE_ATTRIBUTE = "style";
  SVGConstants.SVG_SURFACE_SCALE_ATTRIBUTE = "surfaceScale";
  SVGConstants.SVG_SYSTEM_LANGUAGE_ATTRIBUTE = "systemLanguage";
  SVGConstants.SVG_TABLE_ATTRIBUTE = "table";
  SVGConstants.SVG_TABLE_VALUES_ATTRIBUTE = "tableValues";
  SVGConstants.SVG_TARGET_ATTRIBUTE = "target";
  SVGConstants.SVG_TARGET_X_ATTRIBUTE = "targetX";
  SVGConstants.SVG_TARGET_Y_ATTRIBUTE = "targetY";
  SVGConstants.SVG_TEXT_ANCHOR_ATTRIBUTE = SVGConstants.CSS_TEXT_ANCHOR_PROPERTY;
  SVGConstants.SVG_TEXT_LENGTH_ATTRIBUTE = "textLength";
  SVGConstants.SVG_TEXT_RENDERING_ATTRIBUTE = SVGConstants.CSS_TEXT_RENDERING_PROPERTY;
  SVGConstants.SVG_TITLE_ATTRIBUTE = "title";
  SVGConstants.SVG_TO_ATTRIBUTE = "to";
  SVGConstants.SVG_TRANSFORM_ATTRIBUTE = "transform";
  SVGConstants.SVG_TYPE_ATTRIBUTE = "type";
  SVGConstants.SVG_U1_ATTRIBUTE = "u1";
  SVGConstants.SVG_U2_ATTRIBUTE = "u2";
  SVGConstants.SVG_UNDERLINE_POSITION_ATTRIBUTE = "underline-position";
  SVGConstants.SVG_UNDERLINE_THICKNESS_ATTRIBUTE = "underline-thickness";
  SVGConstants.SVG_UNICODE_ATTRIBUTE = "unicode";
  SVGConstants.SVG_UNICODE_RANGE_ATTRIBUTE = "unicode-range";
  SVGConstants.SVG_UNITS_PER_EM_ATTRIBUTE = "units-per-em";
  SVGConstants.SVG_V_ALPHABETIC_ATTRIBUTE = "v-alphabetic";
  SVGConstants.SVG_V_HANGING_ATTRIBUTE = "v-hanging";
  SVGConstants.SVG_V_IDEOGRAPHIC_ATTRIBUTE = "v-ideographic";
  SVGConstants.SVG_V_MATHEMATICAL_ATTRIBUTE = "v-mathematical";
  SVGConstants.SVG_VALUES_ATTRIBUTE = "values";
  SVGConstants.SVG_VERSION_ATTRIBUTE = "version";
  SVGConstants.SVG_VERT_ADV_Y_ATTRIBUTE = "vert-adv-y";
  SVGConstants.SVG_VERT_ORIGIN_X_ATTRIBUTE = "vert-origin-x";
  SVGConstants.SVG_VERT_ORIGIN_Y_ATTRIBUTE = "vert-origin-y";
  SVGConstants.SVG_VIEW_BOX_ATTRIBUTE = "viewBox";
  SVGConstants.SVG_VIEW_TARGET_ATTRIBUTE = "viewTarget";
  SVGConstants.SVG_WIDTH_ATTRIBUTE = "width";
  SVGConstants.SVG_WIDTHS_ATTRIBUTE = "widths";
  SVGConstants.SVG_X1_ATTRIBUTE = "x1";
  SVGConstants.SVG_X2_ATTRIBUTE = "x2";
  SVGConstants.SVG_X_ATTRIBUTE = "x";
  SVGConstants.SVG_X_CHANNEL_SELECTOR_ATTRIBUTE = "xChannelSelector";
  SVGConstants.SVG_X_HEIGHT_ATTRIBUTE = "xHeight";
  SVGConstants.SVG_Y1_ATTRIBUTE = "y1";
  SVGConstants.SVG_Y2_ATTRIBUTE = "y2";
  SVGConstants.SVG_Y_ATTRIBUTE = "y";
  SVGConstants.SVG_Y_CHANNEL_SELECTOR_ATTRIBUTE = "yChannelSelector";
  SVGConstants.SVG_Z_ATTRIBUTE = "z";
  SVGConstants.SVG_ZOOM_AND_PAN_ATTRIBUTE = "zoomAndPan";

  /////////////////////////////////////////////////////////////////////////
  // SVG attribute value
  /////////////////////////////////////////////////////////////////////////

  SVGConstants.SVG_100_VALUE = "100";
  SVGConstants.SVG_200_VALUE = "200";
  SVGConstants.SVG_300_VALUE = "300";
  SVGConstants.SVG_400_VALUE = "400";
  SVGConstants.SVG_500_VALUE = "500";
  SVGConstants.SVG_600_VALUE = "600";
  SVGConstants.SVG_700_VALUE = "700";
  SVGConstants.SVG_800_VALUE = "800";
  SVGConstants.SVG_900_VALUE = "900";
  SVGConstants.SVG_ABSOLUTE_COLORIMETRIC_VALUE = "absolute-colorimetric";
  SVGConstants.SVG_ALIGN_VALUE = "align";
  SVGConstants.SVG_ALL_VALUE = "all";
  SVGConstants.SVG_ARITHMETIC_VALUE = "arithmetic";
  SVGConstants.SVG_ATOP_VALUE = "atop";
  SVGConstants.SVG_AUTO_VALUE = "auto";
  SVGConstants.SVG_A_VALUE = "A";
  SVGConstants.SVG_BACKGROUND_ALPHA_VALUE = "BackgroundAlpha";
  SVGConstants.SVG_BACKGROUND_IMAGE_VALUE = "BackgroundImage";
  SVGConstants.SVG_BEVEL_VALUE = "bevel";
  SVGConstants.SVG_BOLDER_VALUE = "bolder";
  SVGConstants.SVG_BOLD_VALUE = "bold";
  SVGConstants.SVG_BUTT_VALUE = "butt";
  SVGConstants.SVG_B_VALUE = "B";
  SVGConstants.SVG_COMPOSITE_VALUE = "composite";
  SVGConstants.SVG_CRISP_EDGES_VALUE = "crispEdges";
  SVGConstants.SVG_CROSSHAIR_VALUE = "crosshair";
  SVGConstants.SVG_DARKEN_VALUE = "darken";
  SVGConstants.SVG_DEFAULT_VALUE = "default";
  SVGConstants.SVG_DIGIT_ONE_VALUE = "1";
  SVGConstants.SVG_DILATE_VALUE = "dilate";
  SVGConstants.SVG_DISABLE_VALUE = "disable";
  SVGConstants.SVG_DISCRETE_VALUE = "discrete";
  SVGConstants.SVG_DUPLICATE_VALUE = "duplicate";
  SVGConstants.SVG_END_VALUE = "end";
  SVGConstants.SVG_ERODE_VALUE = "erode";
  SVGConstants.SVG_EVEN_ODD_VALUE = "evenodd";
  SVGConstants.SVG_EXACT_VALUE = "exact";
  SVGConstants.SVG_E_RESIZE_VALUE = "e-resize";
  SVGConstants.SVG_FALSE_VALUE = "false";
  SVGConstants.SVG_FILL_PAINT_VALUE = "FillPaint";
  SVGConstants.SVG_FLOOD_VALUE = "flood";
  SVGConstants.SVG_FRACTAL_NOISE_VALUE = "fractalNoise";
  SVGConstants.SVG_GAMMA_VALUE = "gamma";
  SVGConstants.SVG_GEOMETRIC_PRECISION_VALUE = "geometricPrecision";
  SVGConstants.SVG_G_VALUE = "G";
  SVGConstants.SVG_HELP_VALUE = "help";
  SVGConstants.SVG_HUE_ROTATE_VALUE = "hueRotate";
  SVGConstants.SVG_HUNDRED_PERCENT_VALUE = "100%";
  SVGConstants.SVG_H_VALUE = "h";
  SVGConstants.SVG_IDENTITY_VALUE = "identity";
  SVGConstants.SVG_INITIAL_VALUE = "initial";
  SVGConstants.SVG_IN_VALUE = "in";
  SVGConstants.SVG_ISOLATED_VALUE = "isolated";
  SVGConstants.SVG_ITALIC_VALUE = "italic";
  SVGConstants.SVG_LIGHTEN_VALUE = "lighten";
  SVGConstants.SVG_LIGHTER_VALUE = "lighter";
  SVGConstants.SVG_LINEAR_RGB_VALUE = "linearRGB";
  SVGConstants.SVG_LINEAR_VALUE = "linear";
  SVGConstants.SVG_LUMINANCE_TO_ALPHA_VALUE = "luminanceToAlpha";
  SVGConstants.SVG_MAGNIFY_VALUE = "magnify";
  SVGConstants.SVG_MATRIX_VALUE = "matrix";
  SVGConstants.SVG_MEDIAL_VALUE = "medial";
  SVGConstants.SVG_MEET_VALUE = "meet";
  SVGConstants.SVG_MIDDLE_VALUE = "middle";
  SVGConstants.SVG_MITER_VALUE = "miter";
  SVGConstants.SVG_MOVE_VALUE = "move";
  SVGConstants.SVG_MULTIPLY_VALUE = "multiply";
  SVGConstants.SVG_NEW_VALUE = "new";
  SVGConstants.SVG_NE_RESIZE_VALUE = "ne-resize";
  SVGConstants.SVG_NINETY_VALUE = "90";
  SVGConstants.SVG_NONE_VALUE = "none";
  SVGConstants.SVG_NON_ZERO_VALUE = "nonzero";
  SVGConstants.SVG_NORMAL_VALUE = "normal";
  SVGConstants.SVG_NO_STITCH_VALUE = "noStitch";
  SVGConstants.SVG_NW_RESIZE_VALUE = "nw-resize";
  SVGConstants.SVG_N_RESIZE_VALUE = "n-resize";
  SVGConstants.SVG_OBJECT_BOUNDING_BOX_VALUE = "objectBoundingBox";
  SVGConstants.SVG_OBLIQUE_VALUE = "oblique";
  SVGConstants.SVG_ONE_VALUE = "1";
  SVGConstants.SVG_OPAQUE_VALUE = "1";
  SVGConstants.SVG_OPTIMIZE_LEGIBILITY_VALUE = "optimizeLegibility";
  SVGConstants.SVG_OPTIMIZE_QUALITY_VALUE = "optimizeQuality";
  SVGConstants.SVG_OPTIMIZE_SPEED_VALUE = "optimizeSpeed";
  SVGConstants.SVG_OUT_VALUE = "out";
  SVGConstants.SVG_OVER_VALUE = "over";
  SVGConstants.SVG_PACED_VALUE = "paced";
  SVGConstants.SVG_PAD_VALUE = "pad";
  SVGConstants.SVG_PERCEPTUAL_VALUE = "perceptual";
  SVGConstants.SVG_POINTER_VALUE = "pointer";
  SVGConstants.SVG_PRESERVE_VALUE = "preserve";
  SVGConstants.SVG_REFLECT_VALUE = "reflect";
  SVGConstants.SVG_RELATIVE_COLORIMETRIC_VALUE = "relative-colorimetric";
  SVGConstants.SVG_REPEAT_VALUE = "repeat";
  SVGConstants.SVG_ROUND_VALUE = "round";
  SVGConstants.SVG_R_VALUE = "R";
  SVGConstants.SVG_SATURATE_VALUE = "saturate";
  SVGConstants.SVG_SATURATION_VALUE = "saturation";
  SVGConstants.SVG_SCREEN_VALUE = "screen";
  SVGConstants.SVG_SE_RESIZE_VALUE = "se-resize";
  SVGConstants.SVG_SLICE_VALUE = "slice";
  SVGConstants.SVG_SOURCE_ALPHA_VALUE = "SourceAlpha";
  SVGConstants.SVG_SOURCE_GRAPHIC_VALUE = "SourceGraphic";
  SVGConstants.SVG_SPACING_AND_GLYPHS_VALUE = "spacingAndGlyphs";
  SVGConstants.SVG_SPACING_VALUE = "spacing";
  SVGConstants.SVG_SQUARE_VALUE = "square";
  SVGConstants.SVG_SRGB_VALUE = "sRGB";
  SVGConstants.SVG_START_VALUE = "start";
  SVGConstants.SVG_STITCH_VALUE = "stitch";
  SVGConstants.SVG_STRETCH_VALUE = "stretch";
  SVGConstants.SVG_STROKE_PAINT_VALUE = "StrokePaint";
  SVGConstants.SVG_STROKE_WIDTH_VALUE = "strokeWidth";
  SVGConstants.SVG_SW_RESIZE_VALUE = "sw-resize";
  SVGConstants.SVG_S_RESIZE_VALUE = "s-resize";
  SVGConstants.SVG_TABLE_VALUE = "table";
  SVGConstants.SVG_TERMINAL_VALUE = "terminal";
  SVGConstants.SVG_TEXT_VALUE = "text";
  SVGConstants.SVG_TRANSLATE_VALUE = "translate";
  SVGConstants.SVG_TRUE_VALUE = "true";
  SVGConstants.SVG_TURBULENCE_VALUE = "turbulence";
  SVGConstants.SVG_USER_SPACE_ON_USE_VALUE = "userSpaceOnUse";
  SVGConstants.SVG_V_VALUE = "v";
  SVGConstants.SVG_WAIT_VALUE = "wait";
  SVGConstants.SVG_WRAP_VALUE = "wrap";
  SVGConstants.SVG_W_RESIZE_VALUE = "w-resize";
  SVGConstants.SVG_XMAXYMAX_VALUE = "xMaxYMax";
  SVGConstants.SVG_XMAXYMID_VALUE = "xMaxYMid";
  SVGConstants.SVG_XMAXYMIN_VALUE = "xMaxYMin";
  SVGConstants.SVG_XMIDYMAX_VALUE = "xMidYMax";
  SVGConstants.SVG_XMIDYMID_VALUE = "xMidYMid";
  SVGConstants.SVG_XMIDYMIN_VALUE = "xMidYMin";
  SVGConstants.SVG_XMINYMAX_VALUE = "xMinYMax";
  SVGConstants.SVG_XMINYMID_VALUE = "xMinYMid";
  SVGConstants.SVG_XMINYMIN_VALUE = "xMinYMin";
  SVGConstants.SVG_XOR_VALUE = "xor";
  SVGConstants.SVG_ZERO_PERCENT_VALUE = "0%";
  SVGConstants.SVG_ZERO_VALUE = "0";

  ///////////////////////////////////////////////////////////////////
  // default values for attributes
  ///////////////////////////////////////////////////////////////////

  SVGConstants.SVG_CIRCLE_CX_DEFAULT_VALUE = "0";
  SVGConstants.SVG_CIRCLE_CY_DEFAULT_VALUE = "0";
  SVGConstants.SVG_CLIP_PATH_CLIP_PATH_UNITS_DEFAULT_VALUE = SVGConstants.SVG_USER_SPACE_ON_USE_VALUE;
  SVGConstants.SVG_COMPONENT_TRANSFER_FUNCTION_AMPLITUDE_DEFAULT_VALUE = "1";
  SVGConstants.SVG_COMPONENT_TRANSFER_FUNCTION_EXPONENT_DEFAULT_VALUE = "1";
  SVGConstants.SVG_COMPONENT_TRANSFER_FUNCTION_INTERCEPT_DEFAULT_VALUE = "0";
  SVGConstants.SVG_COMPONENT_TRANSFER_FUNCTION_OFFSET_DEFAULT_VALUE = "0";
  SVGConstants.SVG_COMPONENT_TRANSFER_FUNCTION_SLOPE_DEFAULT_VALUE = "1";
  SVGConstants.SVG_COMPONENT_TRANSFER_FUNCTION_TABLE_VALUES_DEFAULT_VALUE = "";
  SVGConstants.SVG_CURSOR_X_DEFAULT_VALUE = "0";
  SVGConstants.SVG_CURSOR_Y_DEFAULT_VALUE = "0";
  SVGConstants.SVG_ELLIPSE_CX_DEFAULT_VALUE = "0";
  SVGConstants.SVG_ELLIPSE_CY_DEFAULT_VALUE = "0";
  SVGConstants.SVG_FE_COMPOSITE_K1_DEFAULT_VALUE = "0";
  SVGConstants.SVG_FE_COMPOSITE_K2_DEFAULT_VALUE = "0";
  SVGConstants.SVG_FE_COMPOSITE_K3_DEFAULT_VALUE = "0";
  SVGConstants.SVG_FE_COMPOSITE_K4_DEFAULT_VALUE = "0";
  SVGConstants.SVG_FE_COMPOSITE_OPERATOR_DEFAULT_VALUE = SVGConstants.SVG_OVER_VALUE;
  SVGConstants.SVG_FE_CONVOLVE_MATRIX_EDGE_MODE_DEFAULT_VALUE = SVGConstants.SVG_DUPLICATE_VALUE;
  SVGConstants.SVG_FE_DIFFUSE_LIGHTING_DIFFUSE_CONSTANT_DEFAULT_VALUE = "1";
  SVGConstants.SVG_FE_DIFFUSE_LIGHTING_SURFACE_SCALE_DEFAULT_VALUE = "1";
  SVGConstants.SVG_FE_DISPLACEMENT_MAP_SCALE_DEFAULT_VALUE = "0";
  SVGConstants.SVG_FE_DISTANT_LIGHT_AZIMUTH_DEFAULT_VALUE = "0";
  SVGConstants.SVG_FE_DISTANT_LIGHT_ELEVATION_DEFAULT_VALUE = "0";
  SVGConstants.SVG_FE_POINT_LIGHT_X_DEFAULT_VALUE = "0";
  SVGConstants.SVG_FE_POINT_LIGHT_Y_DEFAULT_VALUE = "0";
  SVGConstants.SVG_FE_POINT_LIGHT_Z_DEFAULT_VALUE = "0";
  SVGConstants.SVG_FE_SPECULAR_LIGHTING_SPECULAR_CONSTANT_DEFAULT_VALUE = "1";
  SVGConstants.SVG_FE_SPECULAR_LIGHTING_SPECULAR_EXPONENT_DEFAULT_VALUE = "1";
  SVGConstants.SVG_FE_SPECULAR_LIGHTING_SURFACE_SCALE_DEFAULT_VALUE = "1";
  SVGConstants.SVG_FE_SPOT_LIGHT_LIMITING_CONE_ANGLE_DEFAULT_VALUE = "90";
  SVGConstants.SVG_FE_SPOT_LIGHT_POINTS_AT_X_DEFAULT_VALUE = "0";
  SVGConstants.SVG_FE_SPOT_LIGHT_POINTS_AT_Y_DEFAULT_VALUE = "0";
  SVGConstants.SVG_FE_SPOT_LIGHT_POINTS_AT_Z_DEFAULT_VALUE = "0";
  SVGConstants.SVG_FE_SPOT_LIGHT_SPECULAR_EXPONENT_DEFAULT_VALUE = "1";
  SVGConstants.SVG_FE_SPOT_LIGHT_X_DEFAULT_VALUE = "0";
  SVGConstants.SVG_FE_SPOT_LIGHT_Y_DEFAULT_VALUE = "0";
  SVGConstants.SVG_FE_SPOT_LIGHT_Z_DEFAULT_VALUE = "0";
  SVGConstants.SVG_FE_TURBULENCE_NUM_OCTAVES_DEFAULT_VALUE = "1";
  SVGConstants.SVG_FE_TURBULENCE_SEED_DEFAULT_VALUE = "0";
  SVGConstants.SVG_FILTER_FILTER_UNITS_DEFAULT_VALUE = SVGConstants.SVG_USER_SPACE_ON_USE_VALUE;
  SVGConstants.SVG_FILTER_HEIGHT_DEFAULT_VALUE = "120%";
  SVGConstants.SVG_FILTER_PRIMITIVE_X_DEFAULT_VALUE = "0%";
  SVGConstants.SVG_FILTER_PRIMITIVE_Y_DEFAULT_VALUE = "0%";
  SVGConstants.SVG_FILTER_PRIMITIVE_WIDTH_DEFAULT_VALUE = "100%";
  SVGConstants.SVG_FILTER_PRIMITIVE_HEIGHT_DEFAULT_VALUE = "100%";
  SVGConstants.SVG_FILTER_PRIMITIVE_UNITS_DEFAULT_VALUE = SVGConstants.SVG_USER_SPACE_ON_USE_VALUE;
  SVGConstants.SVG_FILTER_WIDTH_DEFAULT_VALUE = "120%";
  SVGConstants.SVG_FILTER_X_DEFAULT_VALUE = "-10%";
  SVGConstants.SVG_FILTER_Y_DEFAULT_VALUE = "-10%";
  SVGConstants.SVG_FONT_FACE_FONT_STRETCH_DEFAULT_VALUE = SVGConstants.SVG_NORMAL_VALUE;
  SVGConstants.SVG_FONT_FACE_FONT_STYLE_DEFAULT_VALUE = SVGConstants.SVG_ALL_VALUE;
  SVGConstants.SVG_FONT_FACE_FONT_VARIANT_DEFAULT_VALUE = SVGConstants.SVG_NORMAL_VALUE;
  SVGConstants.SVG_FONT_FACE_FONT_WEIGHT_DEFAULT_VALUE = SVGConstants.SVG_ALL_VALUE;
  SVGConstants.SVG_FONT_FACE_PANOSE_1_DEFAULT_VALUE = "0 0 0 0 0 0 0 0 0 0";
  SVGConstants.SVG_FONT_FACE_SLOPE_DEFAULT_VALUE = "0";
  SVGConstants.SVG_FONT_FACE_UNITS_PER_EM_DEFAULT_VALUE = "1000";
  SVGConstants.SVG_FOREIGN_OBJECT_X_DEFAULT_VALUE = "0";
  SVGConstants.SVG_FOREIGN_OBJECT_Y_DEFAULT_VALUE = "0";
  SVGConstants.SVG_HORIZ_ORIGIN_X_DEFAULT_VALUE = "0";
  SVGConstants.SVG_HORIZ_ORIGIN_Y_DEFAULT_VALUE = "0";
  SVGConstants.SVG_KERN_K_DEFAULT_VALUE = "0";
  SVGConstants.SVG_IMAGE_X_DEFAULT_VALUE = "0";
  SVGConstants.SVG_IMAGE_Y_DEFAULT_VALUE = "0";
  SVGConstants.SVG_LINE_X1_DEFAULT_VALUE = "0";
  SVGConstants.SVG_LINE_X2_DEFAULT_VALUE = "0";
  SVGConstants.SVG_LINE_Y1_DEFAULT_VALUE = "0";
  SVGConstants.SVG_LINE_Y2_DEFAULT_VALUE = "0";
  SVGConstants.SVG_LINEAR_GRADIENT_X1_DEFAULT_VALUE = "0%";
  SVGConstants.SVG_LINEAR_GRADIENT_X2_DEFAULT_VALUE = "100%";
  SVGConstants.SVG_LINEAR_GRADIENT_Y1_DEFAULT_VALUE = "0%";
  SVGConstants.SVG_LINEAR_GRADIENT_Y2_DEFAULT_VALUE = "0%";
  SVGConstants.SVG_MARKER_MARKER_HEIGHT_DEFAULT_VALUE = "3";
  SVGConstants.SVG_MARKER_MARKER_UNITS_DEFAULT_VALUE = SVGConstants.SVG_STROKE_WIDTH_VALUE;
  SVGConstants.SVG_MARKER_MARKER_WIDTH_DEFAULT_VALUE = "3";
  SVGConstants.SVG_MARKER_ORIENT_DEFAULT_VALUE = "0";
  SVGConstants.SVG_MARKER_REF_X_DEFAULT_VALUE = "0";
  SVGConstants.SVG_MARKER_REF_Y_DEFAULT_VALUE = "0";
  SVGConstants.SVG_MASK_HEIGHT_DEFAULT_VALUE = "120%";
  SVGConstants.SVG_MASK_MASK_UNITS_DEFAULT_VALUE = SVGConstants.SVG_USER_SPACE_ON_USE_VALUE;
  SVGConstants.SVG_MASK_WIDTH_DEFAULT_VALUE = "120%";
  SVGConstants.SVG_MASK_X_DEFAULT_VALUE = "-10%";
  SVGConstants.SVG_MASK_Y_DEFAULT_VALUE = "-10%";
  SVGConstants.SVG_PATTERN_X_DEFAULT_VALUE = "0";
  SVGConstants.SVG_PATTERN_Y_DEFAULT_VALUE = "0";
  SVGConstants.SVG_PATTERN_WIDTH_DEFAULT_VALUE = "0";
  SVGConstants.SVG_PATTERN_HEIGHT_DEFAULT_VALUE = "0";
  SVGConstants.SVG_RADIAL_GRADIENT_CX_DEFAULT_VALUE = "50%";
  SVGConstants.SVG_RADIAL_GRADIENT_CY_DEFAULT_VALUE = "50%";
  SVGConstants.SVG_RADIAL_GRADIENT_R_DEFAULT_VALUE = "50%";
  SVGConstants.SVG_RECT_X_DEFAULT_VALUE = "0";
  SVGConstants.SVG_RECT_Y_DEFAULT_VALUE = "0";
  SVGConstants.SVG_SCRIPT_TYPE_ECMASCRIPT = "text/ecmascript";
  SVGConstants.SVG_SCRIPT_TYPE_APPLICATION_ECMASCRIPT = "application/ecmascript";
  SVGConstants.SVG_SCRIPT_TYPE_JAVASCRIPT = "text/javascript";
  SVGConstants.SVG_SCRIPT_TYPE_APPLICATION_JAVASCRIPT = "application/javascript";
  SVGConstants.SVG_SCRIPT_TYPE_DEFAULT_VALUE = SVGConstants.SVG_SCRIPT_TYPE_ECMASCRIPT;
  SVGConstants.SVG_SCRIPT_TYPE_JAVA = "application/java-archive";
  SVGConstants.SVG_SVG_X_DEFAULT_VALUE = "0";
  SVGConstants.SVG_SVG_Y_DEFAULT_VALUE = "0";
  SVGConstants.SVG_SVG_HEIGHT_DEFAULT_VALUE = "100%";
  SVGConstants.SVG_SVG_WIDTH_DEFAULT_VALUE = "100%";
  SVGConstants.SVG_TEXT_PATH_START_OFFSET_DEFAULT_VALUE = "0";
  SVGConstants.SVG_USE_X_DEFAULT_VALUE = "0";
  SVGConstants.SVG_USE_Y_DEFAULT_VALUE = "0";
  SVGConstants.SVG_USE_WIDTH_DEFAULT_VALUE = "100%";
  SVGConstants.SVG_USE_HEIGHT_DEFAULT_VALUE = "100%";

  ///////////////////////////////////////////////////////////////////
  // various constants in SVG attributes
  ///////////////////////////////////////////////////////////////////

  SVGConstants.TRANSFORM_TRANSLATE = "translate";
  SVGConstants.TRANSFORM_ROTATE = "rotate";
  SVGConstants.TRANSFORM_SCALE = "scale";
  SVGConstants.TRANSFORM_SKEWX = "skewX";
  SVGConstants.TRANSFORM_SKEWY = "skewY";
  SVGConstants.TRANSFORM_MATRIX = "matrix";

  SVGConstants.PATH_ARC = "A";
  SVGConstants.PATH_CLOSE = "Z";
  SVGConstants.PATH_CUBIC_TO = "C";
  SVGConstants.PATH_MOVE = "M";
  SVGConstants.PATH_LINE_TO = "L";
  SVGConstants.PATH_VERTICAL_LINE_TO = "V";
  SVGConstants.PATH_HORIZONTAL_LINE_TO = "H";
  SVGConstants.PATH_QUAD_TO = "Q";
  SVGConstants.PATH_SMOOTH_QUAD_TO = "T";

  ///////////////////////////////////////////////////////////////////
  // event constants
  ///////////////////////////////////////////////////////////////////

  SVGConstants.SVG_EVENT_CLICK = "click";
  SVGConstants.SVG_EVENT_KEYDOWN = "keydown";
  SVGConstants.SVG_EVENT_KEYPRESS = "keypress";
  SVGConstants.SVG_EVENT_KEYUP = "keyup";
  SVGConstants.SVG_EVENT_MOUSEDOWN = "mousedown";
  SVGConstants.SVG_EVENT_MOUSEMOVE = "mousemove";
  SVGConstants.SVG_EVENT_MOUSEOUT = "mouseout";
  SVGConstants.SVG_EVENT_MOUSEOVER = "mouseover";
  SVGConstants.SVG_EVENT_MOUSEUP = "mouseup";

  ///////////////////////////////////////////////////////////////////
  // SVG feature strings
  ///////////////////////////////////////////////////////////////////

  SVGConstants.SVG_FEATURE_ANIMATION = "http://www.w3.org/TR/SVG11/feature#Animation";
  SVGConstants.SVG_FEATURE_ANIMATION_EVENTS_ATTRIBUTE = "http://www.w3.org/TR/SVG11/feature#AnimationEventsAttribute";
  SVGConstants.SVG_FEATURE_BASIC_CLIP = "http://www.w3.org/TR/SVG11/feature#BasicClip";
  SVGConstants.SVG_FEATURE_BASIC_FILTER = "http://www.w3.org/TR/SVG11/feature#BasicFilter";
  SVGConstants.SVG_FEATURE_BASIC_FONT = "http://www.w3.org/TR/SVG11/feature#BasicFont";
  SVGConstants.SVG_FEATURE_BASIC_GRAPHICS_ATTRIBUTE = "http://www.w3.org/TR/SVG11/feature#BasicGraphicsAttribute";
  SVGConstants.SVG_FEATURE_BASIC_PAINT_ATTRIBUTE = "http://www.w3.org/TR/SVG11/feature#BasicPaintAttribute";
  SVGConstants.SVG_FEATURE_BASIC_STRUCTURE = "http://www.w3.org/TR/SVG11/feature#BasicStructure";
  SVGConstants.SVG_FEATURE_BASIC_TEXT = "http://www.w3.org/TR/SVG11/feature#BasicText";
  SVGConstants.SVG_FEATURE_CLIP = "http://www.w3.org/TR/SVG11/feature#Clip";
  SVGConstants.SVG_FEATURE_COLOR_PROFILE = "http://www.w3.org/TR/SVG11/feature#ColorProfile";
  SVGConstants.SVG_FEATURE_CONDITIONAL_PROCESSING = "http://www.w3.org/TR/SVG11/feature#ConditionalProcessing";
  SVGConstants.SVG_FEATURE_CONTAINER_ATTRIBUTE = "http://www.w3.org/TR/SVG11/feature#ContainerAttribute";
  SVGConstants.SVG_FEATURE_CORE_ATTRIBUTE = "http://www.w3.org/TR/SVG11/feature#CoreAttribute";
  SVGConstants.SVG_FEATURE_CURSOR = "http://www.w3.org/TR/SVG11/feature#Cursor";
  SVGConstants.SVG_FEATURE_DOCUMENT_EVENTS_ATTRIBUTE = "http://www.w3.org/TR/SVG11/feature#DocumentEventsAttribute";
  SVGConstants.SVG_FEATURE_EXTENSIBILITY = "http://www.w3.org/TR/SVG11/feature#Extensibility";
  SVGConstants.SVG_FEATURE_EXTERNAL_RESOURCES_REQUIRED = "http://www.w3.org/TR/SVG11/feature#ExternalResourcesRequired";
  SVGConstants.SVG_FEATURE_FILTER = "http://www.w3.org/TR/SVG11/feature#Filter";
  SVGConstants.SVG_FEATURE_FONT = "http://www.w3.org/TR/SVG11/feature#Font";
  SVGConstants.SVG_FEATURE_GRADIENT = "http://www.w3.org/TR/SVG11/feature#Gradient";
  SVGConstants.SVG_FEATURE_GRAPHICAL_EVENTS_ATTRIBUTE = "http://www.w3.org/TR/SVG11/feature#GraphicalEventsAttribute";
  SVGConstants.SVG_FEATURE_GRAPHICS_ATTRIBUTE = "http://www.w3.org/TR/SVG11/feature#GraphicsAttribute";
  SVGConstants.SVG_FEATURE_HYPERLINKING = "http://www.w3.org/TR/SVG11/feature#Hyperlinking";
  SVGConstants.SVG_FEATURE_IMAGE = "http://www.w3.org/TR/SVG11/feature#Image";
  SVGConstants.SVG_FEATURE_MARKER = "http://www.w3.org/TR/SVG11/feature#Marker";
  SVGConstants.SVG_FEATURE_MASK = "http://www.w3.org/TR/SVG11/feature#Mask";
  SVGConstants.SVG_FEATURE_OPACITY_ATTRIBUTE = "http://www.w3.org/TR/SVG11/feature#OpacityAttribute";
  SVGConstants.SVG_FEATURE_PAINT_ATTRIBUTE = "http://www.w3.org/TR/SVG11/feature#PaintAttribute";
  SVGConstants.SVG_FEATURE_PATTERN = "http://www.w3.org/TR/SVG11/feature#Pattern";
  SVGConstants.SVG_FEATURE_SCRIPT = "http://www.w3.org/TR/SVG11/feature#Script";
  SVGConstants.SVG_FEATURE_SCRIPTING = "http://www.w3.org/TR/SVG11/feature#Scripting";
  SVGConstants.SVG_FEATURE_SHAPE = "http://www.w3.org/TR/SVG11/feature#Shape";
  SVGConstants.SVG_FEATURE_STRUCTURE = "http://www.w3.org/TR/SVG11/feature#Structure";
  SVGConstants.SVG_FEATURE_STYLE = "http://www.w3.org/TR/SVG11/feature#Style";
  SVGConstants.SVG_FEATURE_SVG = "http://www.w3.org/TR/SVG11/feature#SVG";
  SVGConstants.SVG_FEATURE_SVG_ANIMATION = "http://www.w3.org/TR/SVG11/feature#SVG-animation";
  SVGConstants.SVG_FEATURE_SVGDOM = "http://www.w3.org/TR/SVG11/feature#SVGDOM";
  SVGConstants.SVG_FEATURE_SVGDOM_ANIMATION = "http://www.w3.org/TR/SVG11/feature#SVGDOM-animation";
  SVGConstants.SVG_FEATURE_SVGDOM_DYNAMIC = "http://www.w3.org/TR/SVG11/feature#SVGDOM-dynamic";
  SVGConstants.SVG_FEATURE_SVGDOM_STATIC = "http://www.w3.org/TR/SVG11/feature#SVGDOM-static";
  SVGConstants.SVG_FEATURE_SVG_DYNAMIC = "http://www.w3.org/TR/SVG11/feature#SVG-dynamic";
  SVGConstants.SVG_FEATURE_SVG_STATIC = "http://www.w3.org/TR/SVG11/feature#SVG-static";
  SVGConstants.SVG_FEATURE_TEXT = "http://www.w3.org/TR/SVG11/feature#Text";
  SVGConstants.SVG_FEATURE_VIEW = "http://www.w3.org/TR/SVG11/feature#View";
  SVGConstants.SVG_FEATURE_VIEWPORT_ATTRIBUTE = "http://www.w3.org/TR/SVG11/feature#ViewportAttribute";
  SVGConstants.SVG_FEATURE_XLINK_ATTRIBUTE = "http://www.w3.org/TR/SVG11/feature#XlinkAttribute";
  SVGConstants.SVG_FEATURE_TOUCH_EVENTS = "http://www.vectomatic.org/TR/SVG11/feature#SVGTouchEvents";
  SVGConstants.SVG_FEATURE_DND_EVENTS = "http://www.vectomatic.org/TR/SVG11/feature#SVGDndEvents";

  ///////////////////////////////////////////////////////////////////
  // CSS type
  ///////////////////////////////////////////////////////////////////

  SVGConstants.CSS_TYPE = "text/css";

  /////////////////////////////////////////////////////
  //
  //
  //
  //
  //
  //
  //
  // Add extra helper methods to native SVG DOM classes
  //
  //
  //
  //
  //
  //
  //
  //
  /////////////////////////////////////////////////////

  /////////////////////////////////////////////////////
  // Document helper methods
  /////////////////////////////////////////////////////

  /**
   * <p> This method must return the <a>Document</a> object embedded content
   * in an embedding element, or null if there is no document.</p>
   *
   * <p>Note that this is equivalent to fetching the value of the
   * <code>EmbeddingElement::contentDocument</code> attribute of the embedding
   * element, if the <a>EmbeddingElement</a> interface is also implemented.
   * The author is advised to check that the document element of the returned
   * <a>Document</a> is indeed an <a>'svg'</a> element instead of assuming
   * that that will always be the case.</p>
   *
   * @return {SVGDocument} The <a>Document</a> object for the referenced document, or null
   *   if there is no document.
   */
  Element.prototype.getSVGDocument = function () {
    return new SVGDocument();
  };

  /**
   * Gives IDE a hint that the element is actually a SVGDocument
   * @return {SVGDocument}
   */
  Document.prototype.asSVGDocument = function () {
    return this;
  };

  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/shapes.html#CircleElement'
   * title='circle element specification'>circle</a> element with the
   * specified attributes.
   * @param {Number} cx the X coordinate of the circle center
   * @param {Number} cy the Y coordinate of the circle center
   * @param {Number} r the circle radius
   * @returns {SVGCircleElement}
   */
  Document.prototype.createSVGCircleElement1 = function (cx, cy, r) {
    var circle = this.createSVGCircleElement();
    circle.cx.baseVal.value = cx;
    circle.cy.baseVal.value = cy;
    circle.r.baseVal.value = r;
    return circle;
  };

  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/shapes.html#EllipseElement'
   * title='ellipse element specification'>ellipse</a> element with the
   * specified attributes.
   * @param {Number} cx the X coordinate of the ellipse center
   * @param {Number} cy the Y coordinate of the ellipse center
   * @param {Number} rx the X-axis radius of the ellipse
   * @param {Number} ry the Y-axis radius of the ellipse
   * @returns {SVGEllipseElement}
   */
  Document.prototype.createSVGEllipseElement1 = function (cx, cy, rx, ry) {
    var ellipse = this.createSVGEllipseElement();
    ellipse.cx.baseVal.value = cx;
    ellipse.cy.baseVal.value = cy;
    ellipse.rx.baseVal.value = rx;
    ellipse.ry.baseVal.value = ry;
    return ellipse;
  };

  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/shapes.html#LineElement'
   * title='line element specification'>line</a> element with the
   * specified attributes.
   * @param {Number} x1 the X coordinate of the first endpoint
   * @param {Number} y1 the Y coordinate of the first endpoint
   * @param {Number} x2 the X coordinate of the second endpoint
   * @param {Number} y2 the Y coordinate of the second endpoint
   * @returns {SVGLineElement}
   */
  Document.prototype.createSVGLineElement1 = function (x1, y1, x2, y2) {
    var line = this.createSVGLineElement();
    line.x1.baseVal.value = x1;
    line.y1.baseVal.value = y1;
    line.x2.baseVal.value = x2;
    line.y2.baseVal.value = y2;
    return line;
  };

  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/shapes.html#LineElement'
   * title='line element specification'>line</a> element with the
   * specified attributes.
   * @param {SVGPoint} p1 the first endpoint
   * @param {SVGPoint} p2 the the second endpoint
   * @returns {SVGLineElement}
   */
  Document.prototype.createSVGLineElement2 = function (p1, p2) {
    return this.createSVGLineElement1(p1.x, p1.y, p2.x, p2.y);
  };

  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/shapes.html#RectElement'
   * title='rect element specification'>rect</a> element with the
   * specified attributes.
   * @param {Number} x the X coordinate of the upper left corner
   * @param {Number} y the Y coordinate of the upper left corner
   * @param {Number} width the width of the rectangle
   * @param {Number} height the width of the rectangle
   * @param {Number} [rx] the X-axis radius of the rectangle corner
   * @param {Number} [ry] the Y-axis radius of the rectangle corner
   * @returns {SVGRectElement}
   */
  Document.prototype.createSVGRectElement1 = function (x, y, width, height, rx, ry) {
    var rect = this.createSVGRectElement();
    rect.x.baseVal.value = x;
    rect.y.baseVal.value = y;
    rect.width.baseVal.value = width;
    rect.height.baseVal.value = height;
    if (rx) {
      rect.rx.baseVal.value = rx;
    }
    if (ry) {
      rect.ry.baseVal.value = ry;
    }
    return rect;
  };

  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/shapes.html#RectElement'
   * title='rect element specification'>rect</a> element with the
   * specified attributes.
   * @param {SVGRect} rect The SVG rect to use to initialize this element.
   * @returns {SVGRectElement}
   */
  Document.prototype.createSVGRectElement2 = function (rect) {
    return this.createSVGRectElement1(rect.x, rect.y, rect.width, rect.height);
  };

  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/text.html#TextElement'
   * title='text element specification'>text</a> element with the
   * specified attributes.
   * @param {Number} x the X coordinate of the text in specified units
   * @param {Number} y the Y coordinate of the text in specified units
   * @param {Number} unitType the unit type used to specify the text coordinates
   * @param {String} data the string represented by the text object.
   * @returns {SVGTextElement}
   */
  Document.prototype.createSVGTextElement1 = function (x, y, unitType, data) {
    var text = this.createSVGTextElement();
    var svg = this.createSVGSVGElement();
    var xCoord = svg.createSVGLength1(unitType, x);
    text.x.baseVal.appendItem(xCoord);
    var yCoord = svg.createSVGLength1(unitType, y);
    text.y.baseVal.appendItem(yCoord);
    text.appendChild(this.createTextNode(data));
    return text;
  };

  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/struct.html#ImageElement'
   * title='image element specification'>image</a> element with the
   * specified attributes.
   * @param {Number} x the X coordinate of the image
   * @param {Number} y the Y coordinate of the image
   * @param {Number} width the width of the image
   * @param {Number} height the width of the image
   * @param {String} href the bitmap image referenced by this image element
   * @returns {SVGImageElement}
   */
  Document.prototype.createSVGImageElement1 = function (x, y, width, height, href) {
    var image = this.createSVGImageElement();
    image.x.baseVal.value = x;
    image.y.baseVal.value = y;
    image.width.baseVal.value = width;
    image.height.baseVal.value = height;
    image.href.baseVal = href;
    return image;
  };

  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/struct.html#TitleElement'
   * title='title element specification'>title</a> element with the
   * specified attributes.
   * @param {String} text the title text
   * @returns {SVGTitleElement}
   */
  Document.prototype.createSVGTitleElement1 = function (text) {
    var title = this.createSVGTitleElement();
    title.appendChild(this.createTextNode(text));
    return title;
  };

  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/struct.html#DescElement'
   * title='desc element specification'>desc</a> element with the
   * specified attributes.
   * @param {String} text the description text
   * @returns {SVGDescElement}
   */
  Document.prototype.createSVGDescElement1 = function (text) {
    var desc = this.createSVGDescElement();
    desc.appendChild(this.createTextNode(text));
    return desc;
  };

  /////////////////////////////////////////////////////
  // SVGLineElement helper methods
  /////////////////////////////////////////////////////

  /**
   * Computes the intersection point between this line and the tangent
   * perpendicular to this line through p. The intersection is
   * returned in parametric form. If one considers the parametric
   * equation of this line to be:
   * <pre>P = P1 + t * (P2 - P1)</pre>
   * then this method returns the value of t at the intersection point.
   * @param {SVGPoint} p The point which defines the tangent.
   * @returns {Number} the parametric value of the intersection point.
   */
  SVGLineElement.prototype.parametricIntersection = function (p) {
    var x1 = this.x1.baseVal.value;
    var y1 = this.y1.baseVal.value;
    var x2 = this.x2.baseVal.value;
    var y2 = this.y2.baseVal.value;
    var dx = x2 - x1;
    var dy = y2 - y1;
    return ((p.x - x1) * (x2 - x1) + (p.y - y1) * (y2 - y1))
      / (dx * dx + dy * dy);
  };

  /**
   * Computes the intersection point between this line and the tangent
   * perpendicular to this line through p.
   * @param {SVGPoint} p The point which defines the tangent.
   * @param {SVGPoint} [destination] The point where to store the result.
   * @returns {SVGPoint} the intersection point.
   */
  SVGLineElement.prototype.intersectionPoint = function (p, destination) {
    var u = this.parametricIntersection(p);
    var x1 = this.x1.baseVal.value;
    var y1 = this.y1.baseVal.value;
    var x2 = this.x2.baseVal.value;
    var y2 = this.y2.baseVal.value;
    var dx = x2 - x1;
    var dy = y2 - y1;
    if (!destination) {
      destination = this.ownerSVGElement.createSVGPoint();
    }
    destination.x = x1 + u * dx;
    destination.y = y1 + u * dy;
    return destination;
  };

  /**
   * Computes the distance from the specified point to this line.
   * @param p {SVGPoint} A point in the plane
   * @returns {Number} the distance to this line.
   */
  SVGLineElement.prototype.distanceToLine = function (p) {
    return p.distance(this.intersectionPoint(p, this.ownerSVGElement.createSVGPoint()));
  };

  /////////////////////////////////////////////////////
  // SVGMatrix helper methods
  /////////////////////////////////////////////////////

  /**
   * Returns a textual description of the matrix for debugging purposes.
   * @returns {String} a textual description of the matrix.
   */
  SVGMatrix.prototype.getDescription = function () {
    return this.a + " " + this.b + " " + this.c + " " + this.d + " " + this.e
      + " " + this.f;
  };

  /**
   * Returns true if this matrix is the identity matrix
   * @returns {Boolean}
   * true if this matrix is the identity matrix
   */
  SVGMatrix.prototype.isIdentity = function () {
    return this.a == 1 && this.b == 0 && this.c == 0 && this.d == 1
      && this.e == 0 && this.f == 0;
  };

  /////////////////////////////////////////////////////
  // SVGPoint helper methods
  /////////////////////////////////////////////////////

  /**
   * Returns a textual description of the point for debugging purposes.
   * @returns {String} a textual description of the point.
   */
  SVGPoint.prototype.getDescription = function () {
    return "[" + this.x + " " + this.y + "]";
  };

  /**
   * Adds the specified point to this point and puts the
   * result in the specified destination point. The points
   * are treated by this method as 2D vectors.
   * @param {SVGPoint} p the point to add.
   * @param {SVGPoint} [destination] the destination point (this if omitted).
   * @returns {SVGPoint} the destination point.
   */
  SVGPoint.prototype.add = function (p, destination) {
    if (!destination) {
      destination = this;
    }
    destination.x = this.x + p.x;
    destination.y = this.y + p.y;
    return destination;
  };

  /**
   * Subtracts the specified point to this point and puts the
   * result in the specified destination point. The points
   * are treated by this method as 2D vectors.
   * @param {SVGPoint} p the point to substract.
   * @param {SVGPoint} [destination] the destination point (this if omitted).
   * @returns {SVGPoint} the destination point.
   */
  SVGPoint.prototype.subtract = function (p, destination) {
    if (!destination) {
      destination = this;
    }
    destination.x = this.x - p.x;
    destination.y = this.y - p.y;
    return destination;
  };

  /**
   * Scales this point by the specified factor and puts the
   * result in the specified destination point. The points
   * are treated by this method as 2D vectors.
   * @param {Number} f scale factor.
   * @param {SVGPoint} [destination] the destination point (this if omitted).
   * @returns {SVGPoint} the destination point.
   */
  SVGPoint.prototype.scale = function (f, destination) {
    if (!destination) {
      destination = this;
    }
    destination.x = this.x * f;
    destination.y = this.y * f;
    return destination;
  };

  /**
   * Copies this point to the specified destination point.
   * @param {SVGPoint} destination the destination point.
   * @returns {SVGPoint} the destination point.
   */
  SVGPoint.prototype.assignTo = function (destination) {
    destination.x = this.x;
    destination.y = this.y;
    return destination;
  };

  /**
   * Multiplies this point by the specified point and puts the
   * result in the specified destination point. The points
   * are treated by this method as 2D vectors.
   * @param {SVGPoint} p the point to multiply by.
   * @param {SVGPoint} [destination] the destination point (this if omitted).
   * @returns {SVGPoint} the destination point.
   */
  SVGPoint.prototype.product = function (p, destination) {
    if (!destination) {
      destination = this;
    }
    destination.x = this.x * p.x;
    destination.y = this.y * p.y;
    return destination;
  };

  /**
   * Returns the dot product of this point and the specified point. The points
   * are treated by this method as 2D vectors.
   * @param {SVGPoint} p the second factor of the dot product.
   * @returns {Number} the dot product of this point and the specified point
   */
  SVGPoint.prototype.dotProduct = function (p) {
    return this.x * p.x + this.y * p.y;
  };

  /**
   * Returns the cross product of this point and the specified point. The points
   * are treated by this method as 2D vectors.
   * @param {SVGPoint} p the second factor of the cross product.
   * @returns {Number} the cross product of this point and the specified point
   */
  SVGPoint.prototype.crossProduct = function (p) {
    return this.x * p.y - this.y * p.x;
  };

  /**
   * Applies the <code>Math.round()</code> to the coordinated of this
   * point and puts the result in the specified destination point.
   * @param {SVGPoint} [destination] the destination point (this if omitted).
   * @returns {SVGPoint} the destination point.
   */
  SVGPoint.prototype.round = function (destination) {
    if (!destination) {
      destination = this;
    }
    destination.x = Math.round(this.x);
    destination.y = Math.round(this.y);
    return destination;
  };

  /**
   * Applies the <code>Math.floor()</code> to the coordinated of this
   * point and puts the result in the specified destination point.
   * @param {SVGPoint} [destination] the destination point (this if omitted).
   * @returns {SVGPoint} the destination point.
   */
  SVGPoint.prototype.floor = function (destination) {
    if (!destination) {
      destination = this;
    }
    destination.x = Math.floor(this.x);
    destination.y = Math.floor(this.y);
    return destination;
  };
  /**
   * Returns the length of this point, treating the point as a 2D vector.
   * @returns {Number} the length of this point
   */
  SVGPoint.prototype.length = function () {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  };

  /**
   * Returns the squared length of this point, treating the point as a 2D vector.
   * @returns {Number} the squared length of this point
   */
  SVGPoint.prototype.length2 = function () {
    return this.x * this.x + this.y * this.y;
  };

  /**
   * Returns the euclidian distance from this point to specified point.
   * @param {SVGPoint} p the point used to measure the distance
   * @returns {Number} the euclidian distance from this point to specified point
   */
  SVGPoint.prototype.distance = function (p) {
    return Math.sqrt((this.x - p.x) * (this.x - p.x) + (this.y - p.y)
      * (this.y - p.y));
  };

  /**
   * Returns the squared euclidian distance from this point to specified point.
   * @param {SVGPoint} p the point used to measure the distance
   * @returns {Number} the squared euclidian distance from this point to specified point
   */
  SVGPoint.prototype.distance2 = function (p) {
    return (this.x - p.x) * (this.x - p.x) + (this.y - p.y) * (this.y - p.y);
  };

  /**
   * Normalizes the vector represented by this point..
   * @param {SVGPoint} [destination] the destination point (this if omitted).
   * @returns {SVGPoint} the destination point.
   */
  SVGPoint.prototype.normalize = function (destination) {
    if (!destination) {
      destination = this;
    }
    return this.scale(1 / this.length(), destination);
  };

  /////////////////////////////////////////////////////
  // SVGRect helper methods
  /////////////////////////////////////////////////////
  /**
   * Returns the X coordinate of the center of this rectangle.
   * @returns {Number} the X coordinate of the center of this rectangle.
   */
  SVGRect.prototype.getCenterX = function () {
    return this.x + 0.5 * this.width;
  };

  /**
   * Returns the Y coordinate of the center of this rectangle.
   * @returns {Number} the Y coordinate of the center of this rectangle.
   */
  SVGRect.prototype.getCenterY = function () {
    return this.y + 0.5 * this.height;
  };

  /**
   * Returns the X coordinate of the right corners of this rectangle.
   * @returns {Number} the X coordinate of the right corners of this rectangle.
   */
  SVGRect.prototype.getMaxX = function () {
    return this.x + this.width;
  };

  /**
   * Returns the X coordinate of the bottom corners of this rectangle.
   * @returns {Number} the X coordinate of the bottom corners of this rectangle.
   */
  SVGRect.prototype.getMaxY = function () {
    return this.y + this.height;
  };

  /**
   * Computes the intersection of this rectangle with the
   * specified rectangle and puts the result in the destination rectangle.
   * The method returns null if the two rectangles have no intersection.
   * @param {SVGRect} r the rectangle to intersect
   * @param {SVGRect} [destination] a rectangle to store the intersection (this if omitted)
   * @returns {SVGRect} the rectangle resulting from the intersection of
   * this rectangle with the specified rectangle or
   * null if the two rectangles have no intersection.
   */
  SVGRect.prototype.intersection = function (r, destination) {
    if (!destination) {
      destination = this;
    }
    if (this.x < r.x && r.x < this.getMaxX()) {
      if (this.y < r.y && r.y < this.getMaxY()) {
        destination.width = this.getMaxX() - r.x;
        destination.x = r.x;
        destination.height = this.getMaxY() - r.y;
        destination.y = r.y;
        return destination;
      } else if (r.y < this.y && this.y < r.getMaxY()) {
        destination.width = this.getMaxX() - r.x;
        destination.x = r.x;
        destination.height = r.getMaxY() - this.y;
        destination.y = this.y;
        return destination;
      }
    } else if (r.x < this.x && this.x < r.getMaxX()) {
      if (this.y < r.y && r.y < this.getMaxY()) {
        destination.width = r.getMaxX() - this.x;
        destination.x = this.x;
        destination.height = this.getMaxY() - r.y;
        destination.y = r.y;
        return destination;
      } else if (r.y < this.y && this.y < r.getMaxY()) {
        destination.width = r.getMaxX() - this.x;
        destination.x = this.x;
        destination.height = r.getMaxY() - this.y;
        destination.y = this.y;
        return destination;
      }
    }
    return null;
  };

  /**
   * Computes the union of this rectangle with the
   * specified rectangle and puts the result in the destination rectangle.
   * @param {SVGRect} r the rectangle with which to compute the union
   * @param {SVGRect} [destination] a rectangle to store the union (this if omitted)
   * @returns {SVGRect} the rectangle resulting from the union of
   * this rectangle with the specified rectangle.
   */
  SVGRect.prototype.union = function (r, destination) {
    if (!destination) {
      destination = this;
    }
    var x = Math.min(this.x, r.x);
    var y = Math.min(this.y, r.y);
    destination.width = Math.max(this.getMaxX(), r.getMaxX()) - x;
    destination.height = Math.max(this.getMaxY(), r.getMaxY()) - y;
    destination.x = x;
    destination.y = y;
    return destination;
  };

  /**
   * Returns true if the specified point is inside this rectangle,
   * false otherwise.
   * @param {SVGPoint} p The point to test
   * @returns {Boolean} true if the specified point is inside this rectangle,
   * false otherwise.
   */
  SVGRect.prototype.contains = function (p) {
    return p.x >= this.x && p.y >= this.y && p.x <= this.getMaxX()
      && p.y <= this.getMaxY();
  };

  /**
   * Copies this rectangle to the specified destination rectangle.
   * @param {SVGRect} destination the destination rectangle.
   * @returns {SVGRect} the destination rectangle.
   */
  SVGRect.prototype.assignTo = function (destination) {
    destination.x = this.x;
    destination.y = this.y;
    destination.width = this.width;
    destination.height = this.height;
    return destination;
  };

  /**
   * Returns a textual description of the rectangle for debugging purposes.
   * @returns {String} a textual description of the rectangle.
   */
  SVGRect.prototype.getDescription = function () {
    return "{" + this.x + " " + this.y + " " + this.width + " " + this.height
      + "}";
  };

  /**
   * Modifies the position and size of this rectangle by adding
   * the specified margin to it and puts the result in the destination
   * rectangle.
   * @param {SVGRect} [destination] the destination rectangle (this if omitted).
   * @param {Number} x the horizontal margin
   * @param {Number} y the vertical margin
   * @returns {SVGRect} the destination rectangle.
   */
  SVGRect.prototype.inset = function (destination, x, y) {
    if (!destination) {
      destination = this;
    }
    destination.x = this.x + x;
    destination.y = this.y + y;
    destination.width = this.width - x * 2;
    destination.height = this.height - y * 2;
    return destination;
  };

  /////////////////////////////////////////////////////
  // SVGSVGElement helper methods
  /////////////////////////////////////////////////////
  /**
   * Creates an {@link SVGNumber} object outside of
   * any document trees. The object is initialized to the specified value.
   * @param {Number} value the value to use for initialization
   * @returns {SVGNumber}
   */
  SVGSVGElement.prototype.createSVGNumber1 = function (value) {
    var number = this.createSVGNumber();
    number.value = value;
    return number;
  };

  /**
   * Creates an {@link SVGLength} object outside of
   * any document trees. The object is initialized to the specified value
   * and unit type.
   * @param {Number} unitType the unit type to use for initialization
   * @param {Number} valueInSpecifiedUnits the value to use for initialization, in the specified units
   * @returns {SVGLength}
   */
  SVGSVGElement.prototype.createSVGLength1 = function (unitType, valueInSpecifiedUnits) {
    var length = this.createSVGLength();
    length.newValueSpecifiedUnits(unitType, valueInSpecifiedUnits);
    return length;
  };

  /**
   * Creates an {@link SVGLength} object outside of
   * any document trees. The object is initialized to the specified length.
   * @param {SVGLength} l the length to use for initialization
   * @returns {SVGLength}
   */
  SVGSVGElement.prototype.createSVGLength2 = function (l) {
    return this.createSVGLength1(l.unitType, l.valueInSpecifiedUnits);
  };

  /**
   * Creates an {@link SVGAngle} object outside of
   * any document trees. The object is initialized to the specified value
   * and unit type.
   * @param {Number} unitType the unit type to use for initialization
   * @param {Number} valueInSpecifiedUnits the value to use for initialization, in the specified units
   * @returns {SVGAngle}
   */
  SVGSVGElement.prototype.createSVGAngle1 = function (unitType, valueInSpecifiedUnits) {
    var angle = this.createSVGAngle();
    angle.newValueSpecifiedUnits(unitType, valueInSpecifiedUnits);
    return angle;
  };

  /**
   * Creates an {@link SVGPoint} object outside of
   * any document trees. The object is initialized to the specified coordinates.
   * @param {Number} x the X coordinate to use for initialization
   * @param {Number} y the Y coordinate to use for initialization
   * @returns {SVGPoint}
   */
  SVGSVGElement.prototype.createSVGPoint1 = function (x, y) {
    var point = this.createSVGPoint();
    point.x = x;
    point.y = y;
    return point;
  };

  /**
   * Creates an {@link SVGPoint} object outside of
   * any document trees. The object is initialized to the specified point.
   * @param {SVGPoint} p the point to use for initialization
   * @returns {SVGPoint}
   */
  SVGSVGElement.prototype.createSVGPoint2 = function (p) {
    return this.createSVGPoint1(p.x, p.y);
  };

  /**
   * Creates an {@link SVGMatrix} object outside of
   * any document trees. The object is initialized to the specified components.
   * @param {Number} a the A component to use for initialization
   * @param {Number} b the B component to use for initialization
   * @param {Number} c the C component to use for initialization
   * @param {Number} d the D component to use for initialization
   * @param {Number} e the E component to use for initialization
   * @param {Number} f the F component to use for initialization
   * @returns {SVGMatrix}
   */
  SVGSVGElement.prototype.createSVGMatrix1 = function (a, b, c, d, e, f) {
    var matrix = this.createSVGMatrix();
    matrix.a = a;
    matrix.b = b;
    matrix.c = c;
    matrix.d = d;
    matrix.e = e;
    matrix.f = f;
    return matrix;
  };

  /**
   * Creates an {@link SVGMatrix} object outside of
   * any document trees. The object is initialized to the specified matrix.
   * @param {SVGMatrix} m the matrix to use for initialization
   * @returns {SVGMatrix}
   */
  SVGSVGElement.prototype.createSVGMatrix2 = function (m) {
    return this.createSVGMatrix1(m.a, m.b, m.c, m.d, m.e, m.f);
  };

  /**
   * Creates an {@link SVGRect} object outside of
   * any document trees. The object is initialized to the specified coordinates
   * and size.
   * @param {Number} x the X coordinate to use for initialization
   * @param {Number} y the Y coordinate to use for initialization
   * @param {Number} width the width to use for initialization
   * @param {Number} height the height to use for initialization
   * @returns {SVGRect}
   */
  SVGSVGElement.prototype.createSVGRect1 = function (x, y, width, height) {
    var rect = this.createSVGRect();
    rect.x = x;
    rect.y = y;
    rect.width = width;
    rect.height = height;
    return rect;
  };

  /**
   * Creates an {@link SVGRect} object outside of
   * any document trees. The object is initialized to the specified rectangle.
   * @param {SVGRect} rect the rect to use for initialization
   * @returns {SVGRect}
   */
  SVGSVGElement.prototype.createSVGRect2 = function (rect) {
    return this.createSVGRect1(rect.x, rect.y, rect.width, rect.height);
  };

  /**
   * Sets the base value for the height of this {@link SVGSVGElement}
   * to the specified value and unit type.
   * @param {Number} unitType the unit type in which the height is specified
   * @param {Number} height the height in the specified units
   */
  SVGSVGElement.prototype.setHeight = function (unitType, height) {
    this.height.baseVal.newValueSpecifiedUnits(unitType, height);
  };

  /**
   * Sets the base value for the viewbox of this {@link SVGSVGElement}
   * to the specified rectangle.
   * @param {SVGRect} rect the rectangle used to specify the viewbox
   */
  SVGSVGElement.prototype.setViewBox = function (rect) {
    this.setViewBox1(rect.x, rect.y, rect.width, rect.height);
  };

  /**
   * Sets the base value for the viewbox of this {@link SVGSVGElement}
   * to the specified coordinates and size.
   * @param {Number} x the X coordinate to use for the viewbox
   * @param {Number} y the Y coordinate to use for the viewbox
   * @param {Number} width the width to use for the viewbox
   * @param {Number} height the height to use for the viewbox
   */
  SVGSVGElement.prototype.setViewBox1 = function (x, y, width, height) {
    if (!this.hasAttribute(SVGConstants.SVG_VIEW_BOX_ATTRIBUTE)) {
      this.setAttribute(SVGConstants.SVG_VIEW_BOX_ATTRIBUTE, [x, y, width, height].join(" "));
      return;
    }
    var viewBox = this.viewBox.baseVal;
    viewBox.x = x;
    viewBox.y = y;
    viewBox.width = width;
    viewBox.height = height;
  };

  /**
   * Ensures the viewbox of this {@link SVGSVGElement} is set
   * and no x, y, width or height attributes are set.
   */
  SVGSVGElement.prototype.resetViewbox = function () {
    var viewBox = this.viewBox.baseVal;
    if (viewBox.width == 0 || viewBox.height == 0) {
      var isAttached = function (node) {
        if (node === document) {
          return true;
        }
        if (node.parentNode == null) {
          return false;
        }
        return isAttached(node.parentNode);
      };
      var attached = isAttached(this);
      if (!attached) {
        document.body.appendChild(this);
      }
      this.getBBox().assignTo(viewBox);
      if (!attached) {
        document.body.removeChild(this);
      }
    }
    this.removeAttribute("x");
    this.removeAttribute("y");
    this.removeAttribute("width");
    this.removeAttribute("height");
  };

  /**
   * Sets the base value for the width of this {@link SVGSVGElement}
   * to the specified value and unit type.
   * @param {Number} unitType the unit type in which the width is specified
   * @param {Number} width the width in the specified units
   */
  SVGSVGElement.prototype.setWidth = function (unitType, width) {
    this.width.baseVal.newValueSpecifiedUnits(unitType, width);
  };

  /////////////////////////////////////////////////////
  // SVGTransform helper methods
  /////////////////////////////////////////////////////
  /**
   * Returns a textual description of the transform for debugging purposes.
   * @returns {String} a textual description of the transform.
   */
  SVGTransform.prototype.getDescription = function () {
    switch (this.type) {
      case SVGTransform.SVG_TRANSFORM_MATRIX:
        return SVGConstants.TRANSFORM_MATRIX + "("
          + this.matrix.getDescription() + ")";
      case SVGTransform.SVG_TRANSFORM_TRANSLATE:
        return SVGConstants.TRANSFORM_TRANSLATE + "(" + this.matrix.e + ","
          + this.matrix.f + ")";
      case SVGTransform.SVG_TRANSFORM_SCALE:
        return SVGConstants.TRANSFORM_SCALE + "(" + this.matrix.a + ","
          + this.matrix.d + ")";
      case SVGTransform.SVG_TRANSFORM_ROTATE:
        var str = SVGConstants.TRANSFORM_ROTATE + "(" + this.angle;
        if (this.matrix.e != 0 || this.matrix.f != 0) {
          if (this.angle == 0) {
            str += ", " + this.matrix.e + "," + this.matrix.f;
          } else {
            var a = 1 - Math.cos(this.angle * 2 * Math.PI / 360);
            var b = Math.sin(this.angle * 2 * Math.PI / 360);
            var c = -b;
            var d = a;
            var det = a * d - b * c;
            var x = (this.matrix.e * d - b * this.matrix.f) / det;
            var y = (a * this.matrix.f - this.matrix.e * c) / det;
            str += ", " + x + "," + y;
          }
        }
        return str + ")";
      case SVGTransform.SVG_TRANSFORM_SKEWX:
        return SVGConstants.TRANSFORM_SKEWX + "(" + this.angle + ")";
      case SVGTransform.SVG_TRANSFORM_SKEWY:
        return SVGConstants.TRANSFORM_SKEWY + "(" + this.angle + ")";
      default:
        return this.toString();
    }
  };

  /**
   * Specifies a scaling transform around a center point.
   * The resulting transform type is set to SVG_TRANSFORM_MATRIX.
   * @param {Number} sx The scale amount in X.
   * @param {Number} sy The scale amount in Y.
   * @param {Number} tx The X coordinate of the scaling center.
   * @param {Number} ty The Y coordinate of the scaling center.
   * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
   * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
   * attribute</a>.
   */
  SVGTransform.prototype.setScale1 = function (sx, sy, tx, ty) {
    var m = this.matrix;
    m.a = sx;
    m.b = 0;
    m.c = 0;
    m.d = sy;
    m.e = tx * (1 - sx);
    m.f = ty * (1 - sy);
  };

  /////////////////////////////////////////////////////
  // Additional SVGFilterElement constants
  /////////////////////////////////////////////////////

  /**
   * This keyword represents the graphics elements that were the original
   * input into the ‘filter’ element. For raster effects filter primitives,
   * the graphics elements will be rasterized into an initially clear RGBA
   * raster in image space. Pixels left untouched by the original graphic
   * will be left clear. The image is specified to be rendered in linear RGBA pixels.
   * The alpha channel of this image captures any anti-aliasing specified by SVG.
   * (Since the raster is linear, the alpha channel of this image will represent
   * the exact percent coverage of each pixel.)
   * @constant
   * @type String
   */
  SVGFilterElement.IN_SOURCE_GRAPHIC = SVGConstants.SVG_SOURCE_GRAPHIC_VALUE;
  /**
   * This keyword represents the graphics elements that were the original
   * input into the ‘filter’ element. SourceAlpha has all of the same rules
   * as SourceGraphic except that only the alpha channel is used. The input
   * image is an RGBA image consisting of implicitly black color values for
   * the RGB channels, but whose alpha channel is the same as SourceGraphic.
   * If this option is used, then some implementations might need to rasterize
   * the graphics elements in order to extract the alpha channel.
   * @constant
   * @type String
   */
  SVGFilterElement.IN_SOURCE_ALPHA = SVGConstants.SVG_SOURCE_ALPHA_VALUE;
  /**
   * This keyword represents an image snapshot of the canvas under the filter
   * region at the time that the ‘filter’ element was invoked.
   * @constant
   * @type String
   */
  SVGFilterElement.IN_BACKGROUND_IMAGE = SVGConstants.SVG_BACKGROUND_IMAGE_VALUE;
  /**
   * Same as BackgroundImage except only the alpha channel is used.
   * @constant
   * @type String
   */
  SVGFilterElement.IN_BACKGROUND_ALPHA = SVGConstants.SVG_BACKGROUND_ALPHA_VALUE;
  /**
   * This keyword represents the value of the ‘fill’ property on the target
   * element for the filter effect. The FillPaint image has conceptually
   * infinite extent. Frequently this image is opaque everywhere, but
   * it might not be if the "paint" itself has alpha, as in the case
   * of a gradient or pattern which itself includes transparent or semi-transparent
   * parts.
   * @constant
   * @type String
   */
  SVGFilterElement.IN_FILL_PAINT = SVGConstants.SVG_FILL_PAINT_VALUE;
  /**
   * This keyword represents the value of the ‘stroke’ property on
   * the target element for the filter effect. The StrokePaint image has
   * conceptually infinite extent. Frequently this image is opaque everywhere,
   * but it might not be if the "paint" itself has alpha, as in the case of a
   * gradient or pattern which itself includes transparent or semi-transparent parts.
   * @constant
   * @type String
   */
  SVGFilterElement.IN_STROKE_PAINT = SVGConstants.SVG_STROKE_PAINT_VALUE;

  /**
   * Inserts an array of values at the end of the list. The values are wrapped into
   * {@link SVGNumber} objects
   * @param {SVGSVGElement} svg The SVG used to instantiate the number wrappers.
   * @param {Number[]} values The array of values which is to be inserted.
   * @return {SVGNumber[]} The array of inserted value wrappers.
   * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised when the list
   * cannot be modified.
   */
  SVGNumberList.prototype.appendItems = function (svg, values) {
    var newItems = new Array(values.length);
    for (var i = 0; i < values.length; i++) {
      newItems[i] = this.appendItem(svg.createSVGNumber1(values[i]));
    }
    return newItems;
  };

  /**
   * Creates a value of the formed expected by SVG
   * href attribtues.
   * @param {String} s the identifier of the data pointed by the href.
   * @return {String}  a value of the formed expected by SVG
   * href attribtues.
   */
  SVGConstants.toUrl = function (s) {
    return "url(#" + s + ")";
  };

  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
   * title='svg element specification'>svg</a> element with default attributes
   * @returns {SVGSVGElement}
   */
  Document.prototype.createSVGSVGElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_SVG_TAG).asSVGSVGElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/struct.html#GElement'
   * title='g element specification'>g</a> element with default attributes
   * @returns {SVGGElement}
   */
  Document.prototype.createSVGGElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_G_TAG).asSVGGElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/struct.html#DefsElement'
   * title='defs element specification'>defs</a> element with default attributes
   * @returns {SVGDefsElement}
   */
  Document.prototype.createSVGDefsElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_DEFS_TAG).asSVGDefsElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/struct.html#DescElement'
   * title='desc element specification'>desc</a> element with default attributes
   * @returns {SVGDescElement}
   */
  Document.prototype.createSVGDescElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_DESC_TAG).asSVGDescElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/struct.html#TitleElement'
   * title='title element specification'>title</a> element with default attributes
   * @returns {SVGTitleElement}
   */
  Document.prototype.createSVGTitleElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_TITLE_TAG).asSVGTitleElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/struct.html#SymbolElement'
   * title='symbol element specification'>symbol</a> element with default attributes
   * @returns {SVGSymbolElement}
   */
  Document.prototype.createSVGSymbolElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_SYMBOL_TAG).asSVGSymbolElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/struct.html#UseElement'
   * title='use element specification'>use</a> element with default attributes
   * @returns {SVGUseElement}
   */
  Document.prototype.createSVGUseElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_USE_TAG).asSVGUseElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/struct.html#ImageElement'
   * title='image element specification'>image</a> element with default attributes
   * @returns {SVGImageElement}
   */
  Document.prototype.createSVGImageElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_IMAGE_TAG).asSVGImageElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/struct.html#SwitchElement'
   * title='switch element specification'>switch</a> element with default attributes
   * @returns {SVGSwitchElement}
   */
  Document.prototype.createSVGSwitchElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_SWITCH_TAG).asSVGSwitchElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/styling.html#StyleElement'
   * title='style element specification'>style</a> element with default attributes
   * @returns {SVGStyleElement}
   */
  Document.prototype.createSVGStyleElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_STYLE_TAG).asSVGStyleElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/paths.html#PathElement'
   * title='path element specification'>path</a> element with default attributes
   * @returns {SVGPathElement}
   */
  Document.prototype.createSVGPathElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_PATH_TAG).asSVGPathElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/shapes.html#RectElement'
   * title='rect element specification'>rect</a> element with default attributes
   * @returns {SVGRectElement}
   */
  Document.prototype.createSVGRectElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_RECT_TAG).asSVGRectElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/shapes.html#CircleElement'
   * title='circle element specification'>circle</a> element with default attributes
   * @returns {SVGCircleElement}
   */
  Document.prototype.createSVGCircleElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_CIRCLE_TAG).asSVGCircleElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/shapes.html#EllipseElement'
   * title='ellipse element specification'>ellipse</a> element with default
   * attributes
   * @returns {SVGEllipseElement}
   */
  Document.prototype.createSVGEllipseElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_ELLIPSE_TAG).asSVGEllipseElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/shapes.html#LineElement'
   * title='line element specification'>line</a> element with default attributes
   * @returns {SVGLineElement}
   */
  Document.prototype.createSVGLineElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_LINE_TAG).asSVGLineElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/shapes.html#PolylineElement'
   * title='polyline element specification'>polyline</a> element with default
   * attributes
   * @returns {SVGPolylineElement}
   */
  Document.prototype.createSVGPolylineElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_POLYLINE_TAG).asSVGPolylineElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/shapes.html#PolygonElement'
   * title='polygon element specification'>polygon</a> element with default
   * attributes
   * @returns {SVGPolygonElement}
   */
  Document.prototype.createSVGPolygonElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_POLYGON_TAG).asSVGPolygonElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/text.html#TextElement'
   * title='text element specification'>text</a> element with default attributes
   * @returns {SVGTextElement}
   */
  Document.prototype.createSVGTextElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_TEXT_TAG).asSVGTextElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/text.html#TSpanElement'
   * title='tspan element specification'>tspan</a> element with default attributes
   * @returns {SVGTSpanElement}
   */
  Document.prototype.createSVGTSpanElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_T_SPAN_TAG).asSVGTSpanElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/text.html#TRefElement'
   * title='tref element specification'>tref</a> element with default attributes
   * @returns {SVGTRefElement}
   */
  Document.prototype.createSVGTRefElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_T_REF_TAG).asSVGTRefElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/text.html#TextPathElement'
   * title='textPath element specification'>textPath</a> element with default
   * attributes
   * @returns {SVGTextPathElement}
   */
  Document.prototype.createSVGTextPathElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_TEXT_PATH_TAG).asSVGTextPathElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/text.html#AltGlyphElement'
   * title='altGlyph element specification'>altGlyph</a> element with default
   * attributes
   * @returns {SVGAltGlyphElement}
   */
  Document.prototype.createSVGAltGlyphElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_ALT_GLYPH_TAG).asSVGAltGlyphElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/text.html#AltGlyphDefElement'
   * title='altGlyphDef element specification'>altGlyphDef</a> element with
   * default attributes
   * @returns {SVGAltGlyphDefElement}
   */
  Document.prototype.createSVGAltGlyphDefElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_ALT_GLYPH_DEF_TAG).asSVGAltGlyphDefElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/text.html#AltGlyphItemElement'
   * title='altGlyphItem element specification'>altGlyphItem</a> element with
   * default attributes
   * @returns {SVGAltGlyphItemElement}
   */
  Document.prototype.createSVGAltGlyphItemElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_ALT_GLYPH_ITEM_TAG).asSVGAltGlyphItemElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/text.html#GlyphRefElement'
   * title='glyphRef element specification'>glyphRef</a> element with default
   * attributes
   * @returns {SVGGlyphRefElement}
   */
  Document.prototype.createSVGGlyphRefElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_GLYPH_REF_TAG).asSVGGlyphRefElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/painting.html#MarkerElement'
   * title='marker element specification'>marker</a> element with default attributes
   * @returns {SVGMarkerElement}
   */
  Document.prototype.createSVGMarkerElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_MARKER_TAG).asSVGMarkerElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/color.html#ColorProfileElement'
   * title='color-profile element specification'>color-profile</a> element with
   * default attributes
   * @returns {SVGColorProfileElement}
   */
  Document.prototype.createSVGColorProfileElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_COLOR_PROFILE_TAG).asSVGColorProfileElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/pservers.html#LinearGradientElement'
   * title='linearGradient element specification'>linearGradient</a> element
   * with default attributes
   * @returns {SVGLinearGradientElement}
   */
  Document.prototype.createSVGLinearGradientElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_LINEAR_GRADIENT_TAG).asSVGLinearGradientElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/pservers.html#RadialGradientElement'
   * title='radialGradient element specification'>radialGradient</a> element
   * with default attributes
   * @returns {SVGRadialGradientElement}
   */
  Document.prototype.createSVGRadialGradientElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_RADIAL_GRADIENT_TAG).asSVGRadialGradientElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/pservers.html#StopElement'
   * title='stop element specification'>stop</a> element with default attributes
   * @returns {SVGStopElement}
   */
  Document.prototype.createSVGStopElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_STOP_TAG).asSVGStopElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/pservers.html#PatternElement'
   * title='pattern element specification'>pattern</a> element with default
   * attributes
   * @returns {SVGPatternElement}
   */
  Document.prototype.createSVGPatternElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_PATTERN_TAG).asSVGPatternElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/masking.html#ClipPathElement'
   * title='clipPath element specification'>clipPath</a> element with default
   * attributes
   * @returns {SVGClipPathElement}
   */
  Document.prototype.createSVGClipPathElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_CLIP_PATH_TAG).asSVGClipPathElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/masking.html#MaskElement'
   * title='mask element specification'>mask</a> element with default attributes
   * @returns {SVGMaskElement}
   */
  Document.prototype.createSVGMaskElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_MASK_TAG).asSVGMaskElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/filters.html#FilterElement'
   * title='filter element specification'>filter</a> element with default attributes
   * @returns {SVGFilterElement}
   */
  Document.prototype.createSVGFilterElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_FILTER_TAG).asSVGFilterElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/filters.html#feBlendElement'
   * title='feBlend element specification'>feBlend</a> element with default
   * attributes
   * @returns {SVGFEBlendElement}
   */
  Document.prototype.createSVGFEBlendElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_FE_BLEND_TAG).asSVGFEBlendElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/filters.html#feColorMatrixElement'
   * title='feColorMatrix element specification'>feColorMatrix</a> element with
   * default attributes
   * @returns {SVGFEColorMatrixElement}
   */
  Document.prototype.createSVGFEColorMatrixElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_FE_COLOR_MATRIX_TAG).asSVGFEColorMatrixElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/filters.html#feComponentTransferElement'
   * title='feComponentTransfer element specification'>feComponentTransfer</a>
   * element with default attributes
   * @returns {SVGFEComponentTransferElement}
   */
  Document.prototype.createSVGFEComponentTransferElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_FE_COMPONENT_TRANSFER_TAG).asSVGFEComponentTransferElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/filters.html#feFuncRElement'
   * title='feFuncR element specification'>feFuncR</a> element with default
   * attributes
   * @returns {SVGFEFuncRElement}
   */
  Document.prototype.createSVGFEFuncRElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_FE_FUNC_R_TAG).asSVGFEFuncRElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/filters.html#feFuncGElement'
   * title='feFuncG element specification'>feFuncG</a> element with default
   * attributes
   * @returns {SVGFEFuncGElement}
   */
  Document.prototype.createSVGFEFuncGElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_FE_FUNC_G_TAG).asSVGFEFuncGElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/filters.html#feFuncBElement'
   * title='feFuncB element specification'>feFuncB</a> element with default
   * attributes
   * @returns {SVGFEFuncBElement}
   */
  Document.prototype.createSVGFEFuncBElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_FE_FUNC_B_TAG).asSVGFEFuncBElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/filters.html#feFuncAElement'
   * title='feFuncA element specification'>feFuncA</a> element with default
   * attributes
   * @returns {SVGFEFuncAElement}
   */
  Document.prototype.createSVGFEFuncAElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_FE_FUNC_A_TAG).asSVGFEFuncAElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/filters.html#feCompositeElement'
   * title='feComposite element specification'>feComposite</a> element with
   * default attributes
   * @returns {SVGFECompositeElement}
   */
  Document.prototype.createSVGFECompositeElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_FE_COMPOSITE_TAG).asSVGFECompositeElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/filters.html#feConvolveMatrixElement'
   * title='feConvolveMatrix element specification'>feConvolveMatrix</a> element
   * with default attributes
   * @returns {SVGFEConvolveMatrixElement}
   */
  Document.prototype.createSVGFEConvolveMatrixElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_FE_CONVOLVE_MATRIX_TAG).asSVGFEConvolveMatrixElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/filters.html#feDiffuseLightingElement'
   * title='feDiffuseLighting element specification'>feDiffuseLighting</a> element
   * with default attributes
   * @returns {SVGFEDiffuseLightingElement}
   */
  Document.prototype.createSVGFEDiffuseLightingElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_FE_DIFFUSE_LIGHTING_TAG).asSVGFEDiffuseLightingElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/filters.html#feDistantLightElement'
   * title='feDistantLight element specification'>feDistantLight</a> element
   * with default attributes
   * @returns {SVGFEDistantLightElement}
   */
  Document.prototype.createSVGFEDistantLightElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_FE_DISTANT_LIGHT_TAG).asSVGFEDistantLightElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/filters.html#fePointLightElement'
   * title='fePointLight element specification'>fePointLight</a> element with
   * default attributes
   * @returns {SVGFEPointLightElement}
   */
  Document.prototype.createSVGFEPointLightElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_FE_POINT_LIGHT_TAG).asSVGFEPointLightElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/filters.html#feSpotLightElement'
   * title='feSpotLight element specification'>feSpotLight</a> element with
   * default attributes
   * @returns {SVGFESpotLightElement}
   */
  Document.prototype.createSVGFESpotLightElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_FE_SPOT_LIGHT_TAG).asSVGFESpotLightElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/filters.html#feDisplacementMapElement'
   * title='feDisplacementMap element specification'>feDisplacementMap</a> element
   * with default attributes
   * @returns {SVGFEDisplacementMapElement}
   */
  Document.prototype.createSVGFEDisplacementMapElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_FE_DISPLACEMENT_MAP_TAG).asSVGFEDisplacementMapElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/filters.html#feFloodElement'
   * title='feFlood element specification'>feFlood</a> element with default
   * attributes
   * @returns {SVGFEFloodElement}
   */
  Document.prototype.createSVGFEFloodElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_FE_FLOOD_TAG).asSVGFEFloodElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/filters.html#feGaussianBlurElement'
   * title='feGaussianBlur element specification'>feGaussianBlur</a> element
   * with default attributes
   * @returns {SVGFEGaussianBlurElement}
   */
  Document.prototype.createSVGFEGaussianBlurElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_FE_GAUSSIAN_BLUR_TAG).asSVGFEGaussianBlurElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/filters.html#feImageElement'
   * title='feImage element specification'>feImage</a> element with default
   * attributes
   * @returns {SVGFEImageElement}
   */
  Document.prototype.createSVGFEImageElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_FE_IMAGE_TAG).asSVGFEImageElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/filters.html#feMergeElement'
   * title='feMerge element specification'>feMerge</a> element with default
   * attributes
   * @returns {SVGFEMergeElement}
   */
  Document.prototype.createSVGFEMergeElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_FE_MERGE_TAG).asSVGFEMergeElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/filters.html#feMergeNodeElement'
   * title='feMergeNode element specification'>feMergeNode</a> element with
   * default attributes
   * @returns {SVGFEMergeNodeElement}
   */
  Document.prototype.createSVGFEMergeNodeElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_FE_MERGE_NODE_TAG).asSVGFEMergeNodeElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/filters.html#feMorphologyElement'
   * title='feMorphology element specification'>feMorphology</a> element with
   * default attributes
   * @returns {SVGFEMorphologyElement}
   */
  Document.prototype.createSVGFEMorphologyElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_FE_MORPHOLOGY_TAG).asSVGFEMorphologyElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/filters.html#feOffsetElement'
   * title='feOffset element specification'>feOffset</a> element with default
   * attributes
   * @returns {SVGFEOffsetElement}
   */
  Document.prototype.createSVGFEOffsetElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_FE_OFFSET_TAG).asSVGFEOffsetElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/filters.html#feSpecularLightingElement'
   * title='feSpecularLighting element specification'>feSpecularLighting</a>
   * element with default attributes
   * @returns {SVGFESpecularLightingElement}
   */
  Document.prototype.createSVGFESpecularLightingElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_FE_SPECULAR_LIGHTING_TAG).asSVGFESpecularLightingElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/filters.html#feTileElement'
   * title='feTile element specification'>feTile</a> element with default attributes
   * @returns {SVGFETileElement}
   */
  Document.prototype.createSVGFETileElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_FE_TILE_TAG).asSVGFETileElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/filters.html#feTurbulenceElement'
   * title='feTurbulence element specification'>feTurbulence</a> element with
   * default attributes
   * @returns {SVGFETurbulenceElement}
   */
  Document.prototype.createSVGFETurbulenceElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_FE_TURBULENCE_TAG).asSVGFETurbulenceElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/interact.html#CursorElement'
   * title='cursor element specification'>cursor</a> element with default attributes
   * @returns {SVGCursorElement}
   */
  Document.prototype.createSVGCursorElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_CURSOR_TAG).asSVGCursorElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/linking.html#AElement'
   * title='a element specification'>a</a> element with default attributes
   * @returns {SVGAElement}
   */
  Document.prototype.createSVGAElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_A_TAG).asSVGAElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/linking.html#ViewElement'
   * title='view element specification'>view</a> element with default attributes
   * @returns {SVGViewElement}
   */
  Document.prototype.createSVGViewElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_VIEW_TAG).asSVGViewElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/script.html#ScriptElement'
   * title='script element specification'>script</a> element with default attributes
   * @returns {SVGScriptElement}
   */
  Document.prototype.createSVGScriptElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_SCRIPT_TAG).asSVGScriptElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/animate.html#AnimateElement'
   * title='animate element specification'>animate</a> element with default
   * attributes
   * @returns {SVGAnimateElement}
   */
  Document.prototype.createSVGAnimateElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_ANIMATE_TAG).asSVGAnimateElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/animate.html#SetElement'
   * title='set element specification'>set</a> element with default attributes
   * @returns {SVGSetElement}
   */
  Document.prototype.createSVGSetElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_SET_TAG).asSVGSetElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/animate.html#AnimateMotionElement'
   * title='animateMotion element specification'>animateMotion</a> element with
   * default attributes
   * @returns {SVGAnimateMotionElement}
   */
  Document.prototype.createSVGAnimateMotionElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_ANIMATE_MOTION_TAG).asSVGAnimateMotionElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/animate.html#MPathElement'
   * title='mpath element specification'>mpath</a> element with default attributes
   * @returns {SVGMPathElement}
   */
  Document.prototype.createSVGMPathElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_M_PATH_TAG).asSVGMPathElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/animate.html#AnimateColorElement'
   * title='animateColor element specification'>animateColor</a> element with
   * default attributes
   * @returns {SVGAnimateColorElement}
   */
  Document.prototype.createSVGAnimateColorElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_ANIMATE_COLOR_TAG).asSVGAnimateColorElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/animate.html#AnimateTransformElement'
   * title='animateTransform element specification'>animateTransform</a> element
   * with default attributes
   * @returns {SVGAnimateTransformElement}
   */
  Document.prototype.createSVGAnimateTransformElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_ANIMATE_TRANSFORM_TAG).asSVGAnimateTransformElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/fonts.html#FontElement'
   * title='font element specification'>font</a> element with default attributes
   * @returns {SVGFontElement}
   */
  Document.prototype.createSVGFontElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_FONT_TAG).asSVGFontElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/fonts.html#GlyphElement'
   * title='glyph element specification'>glyph</a> element with default attributes
   * @returns {SVGGlyphElement}
   */
  Document.prototype.createSVGGlyphElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_GLYPH_TAG).asSVGGlyphElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/fonts.html#MissingGlyphElement'
   * title='missing-glyph element specification'>missing-glyph</a> element with
   * default attributes
   * @returns {SVGMissingGlyphElement}
   */
  Document.prototype.createSVGMissingGlyphElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_MISSING_GLYPH_TAG).asSVGMissingGlyphElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/fonts.html#HKernElement'
   * title='hkern element specification'>hkern</a> element with default attributes
   * @returns {SVGHKernElement}
   */
  Document.prototype.createSVGHKernElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_H_KERN_TAG).asSVGHKernElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/fonts.html#VKernElement'
   * title='vkern element specification'>vkern</a> element with default attributes
   * @returns {SVGVKernElement}
   */
  Document.prototype.createSVGVKernElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_V_KERN_TAG).asSVGVKernElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/fonts.html#FontFaceElement'
   * title='font-face element specification'>font-face</a> element with default
   * attributes
   * @returns {SVGFontFaceElement}
   */
  Document.prototype.createSVGFontFaceElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_FONT_FACE_TAG).asSVGFontFaceElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/fonts.html#FontFaceSrcElement'
   * title='font-face-src element specification'>font-face-src</a> element with
   * default attributes
   * @returns {SVGFontFaceSrcElement}
   */
  Document.prototype.createSVGFontFaceSrcElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_FONT_FACE_SRC_TAG).asSVGFontFaceSrcElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/fonts.html#FontFaceURIElement'
   * title='font-face-uri element specification'>font-face-uri</a> element with
   * default attributes
   * @returns {SVGFontFaceUriElement}
   */
  Document.prototype.createSVGFontFaceUriElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_FONT_FACE_URI_TAG).asSVGFontFaceUriElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/fonts.html#FontFaceFormatElement'
   * title='font-face-format element specification'>font-face-format</a> element
   * with default attributes
   * @returns {SVGFontFaceFormatElement}
   */
  Document.prototype.createSVGFontFaceFormatElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_FONT_FACE_FORMAT_TAG).asSVGFontFaceFormatElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/fonts.html#FontFaceNameElement'
   * title='font-face-name element specification'>font-face-name</a> element
   * with default attributes
   * @returns {SVGFontFaceNameElement}
   */
  Document.prototype.createSVGFontFaceNameElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_FONT_FACE_NAME_TAG).asSVGFontFaceNameElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/metadata.html#MetadataElement'
   * title='metadata element specification'>metadata</a> element with default
   * attributes
   * @returns {SVGMetadataElement}
   */
  Document.prototype.createSVGMetadataElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_METADATA_TAG).asSVGMetadataElement();
  };
  /**
   * Creates a new <a href='http://www.w3.org/TR/SVG11/extend.html#ForeignObjectElement'
   * title='foreignObject element specification'>foreignObject</a> element with
   * default attributes
   * @returns {SVGForeignObjectElement}
   */
  Document.prototype.createSVGForeignObjectElement = function () {
    return document.createElementNS(SVGConstants.SVG_NAMESPACE_URI, SVGConstants.SVG_FOREIGN_OBJECT_TAG).asSVGForeignObjectElement();
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGElement
   * @returns {SVGElement}
   */
  Element.prototype.asSVGElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGStylable
   * The following elements support this interface: {@link SVGSVGElement}, {@link SVGGElement},
   * {@link SVGDefsElement}, {@link SVGDescElement}, {@link SVGTitleElement},
   * {@link SVGSymbolElement}, {@link SVGUseElement}, {@link SVGImageElement},
   * {@link SVGSwitchElement}, {@link SVGPathElement}, {@link SVGRectElement},
   * {@link SVGCircleElement}, {@link SVGEllipseElement}, {@link SVGLineElement},
   * {@link SVGPolylineElement}, {@link SVGPolygonElement}, {@link SVGTextContentElement},
   * {@link SVGGlyphRefElement}, {@link SVGMarkerElement}, {@link SVGGradientElement},
   * {@link SVGStopElement}, {@link SVGPatternElement}, {@link SVGClipPathElement},
   * {@link SVGMaskElement}, {@link SVGFilterElement}, {@link SVGFilterPrimitiveStandardAttributes},
   * {@link SVGAElement}, {@link SVGFontElement}, {@link SVGGlyphElement}, {@link SVGMissingGlyphElement},
   * {@link SVGForeignObjectElement}
   * @returns {SVGStylable}
   */
  Element.prototype.asSVGStylable = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGLocatable
   * The following elements support this interface: {@link SVGTransformable},
   * {@link SVGSVGElement}
   * @returns {SVGLocatable}
   */
  Element.prototype.asSVGLocatable = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGTransformable
   * The following elements support this interface: {@link SVGGElement}, {@link SVGDefsElement},
   * {@link SVGUseElement}, {@link SVGImageElement}, {@link SVGSwitchElement},
   * {@link SVGPathElement}, {@link SVGRectElement}, {@link SVGCircleElement},
   * {@link SVGEllipseElement}, {@link SVGLineElement}, {@link SVGPolylineElement},
   * {@link SVGPolygonElement}, {@link SVGTextElement}, {@link SVGClipPathElement},
   * {@link SVGAElement}, {@link SVGForeignObjectElement}
   * @returns {SVGTransformable}
   */
  Element.prototype.asSVGTransformable = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGTests
   * The following elements support this interface: {@link SVGSVGElement}, {@link SVGGElement},
   * {@link SVGDefsElement}, {@link SVGUseElement}, {@link SVGImageElement},
   * {@link SVGSwitchElement}, {@link SVGPathElement}, {@link SVGRectElement},
   * {@link SVGCircleElement}, {@link SVGEllipseElement}, {@link SVGLineElement},
   * {@link SVGPolylineElement}, {@link SVGPolygonElement}, {@link SVGTextContentElement},
   * {@link SVGPatternElement}, {@link SVGClipPathElement}, {@link SVGMaskElement},
   * {@link SVGCursorElement}, {@link SVGAElement}, {@link SVGAnimationElement},
   * {@link SVGForeignObjectElement}
   * @returns {SVGTests}
   */
  Element.prototype.asSVGTests = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGLangSpace
   * The following elements support this interface: {@link SVGSVGElement}, {@link SVGGElement},
   * {@link SVGDefsElement}, {@link SVGDescElement}, {@link SVGTitleElement},
   * {@link SVGSymbolElement}, {@link SVGUseElement}, {@link SVGImageElement},
   * {@link SVGSwitchElement}, {@link SVGStyleElement}, {@link SVGPathElement},
   * {@link SVGRectElement}, {@link SVGCircleElement}, {@link SVGEllipseElement},
   * {@link SVGLineElement}, {@link SVGPolylineElement}, {@link SVGPolygonElement},
   * {@link SVGTextContentElement}, {@link SVGMarkerElement}, {@link SVGPatternElement},
   * {@link SVGClipPathElement}, {@link SVGMaskElement}, {@link SVGFilterElement},
   * {@link SVGFEImageElement}, {@link SVGAElement}, {@link SVGForeignObjectElement}
   * @returns {SVGLangSpace}
   */
  Element.prototype.asSVGLangSpace = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGExternalResourcesRequired
   * The following elements support this interface: {@link SVGSVGElement}, {@link SVGGElement},
   * {@link SVGDefsElement}, {@link SVGSymbolElement}, {@link SVGUseElement},
   * {@link SVGImageElement}, {@link SVGSwitchElement}, {@link SVGPathElement},
   * {@link SVGRectElement}, {@link SVGCircleElement}, {@link SVGEllipseElement},
   * {@link SVGLineElement}, {@link SVGPolylineElement}, {@link SVGPolygonElement},
   * {@link SVGTextContentElement}, {@link SVGMarkerElement}, {@link SVGGradientElement},
   * {@link SVGPatternElement}, {@link SVGClipPathElement}, {@link SVGMaskElement},
   * {@link SVGFilterElement}, {@link SVGFEImageElement}, {@link SVGCursorElement},
   * {@link SVGAElement}, {@link SVGViewElement}, {@link SVGScriptElement},
   * {@link SVGAnimationElement}, {@link SVGMPathElement}, {@link SVGFontElement},
   * {@link SVGForeignObjectElement}
   * @returns {SVGExternalResourcesRequired}
   */
  Element.prototype.asSVGExternalResourcesRequired = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGFitToViewBox
   * The following elements support this interface: {@link SVGViewSpec}, {@link SVGSVGElement},
   * {@link SVGSymbolElement}, {@link SVGMarkerElement}, {@link SVGPatternElement},
   * {@link SVGViewElement}
   * @returns {SVGFitToViewBox}
   */
  Element.prototype.asSVGFitToViewBox = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGZoomAndPan
   * The following elements support this interface: {@link SVGViewSpec}, {@link SVGSVGElement},
   * {@link SVGViewElement}
   * @returns {SVGZoomAndPan}
   */
  Element.prototype.asSVGZoomAndPan = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGViewSpec
   * The following elements support this interface:
   * @returns {SVGViewSpec}
   */
  Element.prototype.asSVGViewSpec = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGURIReference
   * The following elements support this interface: {@link SVGUseElement}, {@link SVGImageElement},
   * {@link SVGTRefElement}, {@link SVGTextPathElement}, {@link SVGAltGlyphElement},
   * {@link SVGGlyphRefElement}, {@link SVGColorProfileElement}, {@link SVGGradientElement},
   * {@link SVGPatternElement}, {@link SVGFilterElement}, {@link SVGFEImageElement},
   * {@link SVGCursorElement}, {@link SVGAElement}, {@link SVGScriptElement},
   * {@link SVGMPathElement}
   * @returns {SVGURIReference}
   */
  Element.prototype.asSVGURIReference = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGDocument
   * @returns {SVGDocument}
   */
  Element.prototype.asSVGDocument = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGSVGElement
   * @returns {SVGSVGElement}
   */
  Element.prototype.asSVGSVGElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGGElement
   * @returns {SVGGElement}
   */
  Element.prototype.asSVGGElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGDefsElement
   * @returns {SVGDefsElement}
   */
  Element.prototype.asSVGDefsElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGDescElement
   * @returns {SVGDescElement}
   */
  Element.prototype.asSVGDescElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGTitleElement
   * @returns {SVGTitleElement}
   */
  Element.prototype.asSVGTitleElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGSymbolElement
   * @returns {SVGSymbolElement}
   */
  Element.prototype.asSVGSymbolElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGUseElement
   * @returns {SVGUseElement}
   */
  Element.prototype.asSVGUseElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGImageElement
   * @returns {SVGImageElement}
   */
  Element.prototype.asSVGImageElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGSwitchElement
   * @returns {SVGSwitchElement}
   */
  Element.prototype.asSVGSwitchElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGStyleElement
   * @returns {SVGStyleElement}
   */
  Element.prototype.asSVGStyleElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGAnimatedPathData
   * The following elements support this interface: {@link SVGPathElement}
   * @returns {SVGAnimatedPathData}
   */
  Element.prototype.asSVGAnimatedPathData = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGPathElement
   * @returns {SVGPathElement}
   */
  Element.prototype.asSVGPathElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGRectElement
   * @returns {SVGRectElement}
   */
  Element.prototype.asSVGRectElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGCircleElement
   * @returns {SVGCircleElement}
   */
  Element.prototype.asSVGCircleElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGEllipseElement
   * @returns {SVGEllipseElement}
   */
  Element.prototype.asSVGEllipseElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGLineElement
   * @returns {SVGLineElement}
   */
  Element.prototype.asSVGLineElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGAnimatedPoints
   * The following elements support this interface: {@link SVGPolylineElement},
   * {@link SVGPolygonElement}
   * @returns {SVGAnimatedPoints}
   */
  Element.prototype.asSVGAnimatedPoints = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGPolylineElement
   * @returns {SVGPolylineElement}
   */
  Element.prototype.asSVGPolylineElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGPolygonElement
   * @returns {SVGPolygonElement}
   */
  Element.prototype.asSVGPolygonElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGTextContentElement
   * @returns {SVGTextContentElement}
   */
  Element.prototype.asSVGTextContentElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGTextPositioningElement
   * @returns {SVGTextPositioningElement}
   */
  Element.prototype.asSVGTextPositioningElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGTextElement
   * @returns {SVGTextElement}
   */
  Element.prototype.asSVGTextElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGTSpanElement
   * @returns {SVGTSpanElement}
   */
  Element.prototype.asSVGTSpanElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGTRefElement
   * @returns {SVGTRefElement}
   */
  Element.prototype.asSVGTRefElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGTextPathElement
   * @returns {SVGTextPathElement}
   */
  Element.prototype.asSVGTextPathElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGAltGlyphElement
   * @returns {SVGAltGlyphElement}
   */
  Element.prototype.asSVGAltGlyphElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGAltGlyphDefElement
   * @returns {SVGAltGlyphDefElement}
   */
  Element.prototype.asSVGAltGlyphDefElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGAltGlyphItemElement
   * @returns {SVGAltGlyphItemElement}
   */
  Element.prototype.asSVGAltGlyphItemElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGGlyphRefElement
   * @returns {SVGGlyphRefElement}
   */
  Element.prototype.asSVGGlyphRefElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGMarkerElement
   * @returns {SVGMarkerElement}
   */
  Element.prototype.asSVGMarkerElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGColorProfileElement
   * @returns {SVGColorProfileElement}
   */
  Element.prototype.asSVGColorProfileElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGGradientElement
   * @returns {SVGGradientElement}
   */
  Element.prototype.asSVGGradientElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGLinearGradientElement
   * @returns {SVGLinearGradientElement}
   */
  Element.prototype.asSVGLinearGradientElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGRadialGradientElement
   * @returns {SVGRadialGradientElement}
   */
  Element.prototype.asSVGRadialGradientElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGStopElement
   * @returns {SVGStopElement}
   */
  Element.prototype.asSVGStopElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGPatternElement
   * @returns {SVGPatternElement}
   */
  Element.prototype.asSVGPatternElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGClipPathElement
   * @returns {SVGClipPathElement}
   */
  Element.prototype.asSVGClipPathElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGMaskElement
   * @returns {SVGMaskElement}
   */
  Element.prototype.asSVGMaskElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGFilterElement
   * @returns {SVGFilterElement}
   */
  Element.prototype.asSVGFilterElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGFilterPrimitiveStandardAttributes
   * The following elements support this interface: {@link SVGFEBlendElement},
   * {@link SVGFEColorMatrixElement}, {@link SVGFEComponentTransferElement},
   * {@link SVGFECompositeElement}, {@link SVGFEConvolveMatrixElement}, {@link SVGFEDiffuseLightingElement},
   * {@link SVGFEDisplacementMapElement}, {@link SVGFEFloodElement}, {@link SVGFEGaussianBlurElement},
   * {@link SVGFEImageElement}, {@link SVGFEMergeElement}, {@link SVGFEMorphologyElement},
   * {@link SVGFEOffsetElement}, {@link SVGFESpecularLightingElement}, {@link SVGFETileElement},
   * {@link SVGFETurbulenceElement}
   * @returns {SVGFilterPrimitiveStandardAttributes}
   */
  Element.prototype.asSVGFilterPrimitiveStandardAttributes = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGFEBlendElement
   * @returns {SVGFEBlendElement}
   */
  Element.prototype.asSVGFEBlendElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGFEColorMatrixElement
   * @returns {SVGFEColorMatrixElement}
   */
  Element.prototype.asSVGFEColorMatrixElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGFEComponentTransferElement
   * @returns {SVGFEComponentTransferElement}
   */
  Element.prototype.asSVGFEComponentTransferElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGComponentTransferFunctionElement
   * @returns {SVGComponentTransferFunctionElement}
   */
  Element.prototype.asSVGComponentTransferFunctionElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGFEFuncRElement
   * @returns {SVGFEFuncRElement}
   */
  Element.prototype.asSVGFEFuncRElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGFEFuncGElement
   * @returns {SVGFEFuncGElement}
   */
  Element.prototype.asSVGFEFuncGElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGFEFuncBElement
   * @returns {SVGFEFuncBElement}
   */
  Element.prototype.asSVGFEFuncBElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGFEFuncAElement
   * @returns {SVGFEFuncAElement}
   */
  Element.prototype.asSVGFEFuncAElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGFECompositeElement
   * @returns {SVGFECompositeElement}
   */
  Element.prototype.asSVGFECompositeElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGFEConvolveMatrixElement
   * @returns {SVGFEConvolveMatrixElement}
   */
  Element.prototype.asSVGFEConvolveMatrixElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGFEDiffuseLightingElement
   * @returns {SVGFEDiffuseLightingElement}
   */
  Element.prototype.asSVGFEDiffuseLightingElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGFEDistantLightElement
   * @returns {SVGFEDistantLightElement}
   */
  Element.prototype.asSVGFEDistantLightElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGFEPointLightElement
   * @returns {SVGFEPointLightElement}
   */
  Element.prototype.asSVGFEPointLightElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGFESpotLightElement
   * @returns {SVGFESpotLightElement}
   */
  Element.prototype.asSVGFESpotLightElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGFEDisplacementMapElement
   * @returns {SVGFEDisplacementMapElement}
   */
  Element.prototype.asSVGFEDisplacementMapElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGFEFloodElement
   * @returns {SVGFEFloodElement}
   */
  Element.prototype.asSVGFEFloodElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGFEGaussianBlurElement
   * @returns {SVGFEGaussianBlurElement}
   */
  Element.prototype.asSVGFEGaussianBlurElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGFEImageElement
   * @returns {SVGFEImageElement}
   */
  Element.prototype.asSVGFEImageElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGFEMergeElement
   * @returns {SVGFEMergeElement}
   */
  Element.prototype.asSVGFEMergeElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGFEMergeNodeElement
   * @returns {SVGFEMergeNodeElement}
   */
  Element.prototype.asSVGFEMergeNodeElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGFEMorphologyElement
   * @returns {SVGFEMorphologyElement}
   */
  Element.prototype.asSVGFEMorphologyElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGFEOffsetElement
   * @returns {SVGFEOffsetElement}
   */
  Element.prototype.asSVGFEOffsetElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGFESpecularLightingElement
   * @returns {SVGFESpecularLightingElement}
   */
  Element.prototype.asSVGFESpecularLightingElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGFETileElement
   * @returns {SVGFETileElement}
   */
  Element.prototype.asSVGFETileElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGFETurbulenceElement
   * @returns {SVGFETurbulenceElement}
   */
  Element.prototype.asSVGFETurbulenceElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGCursorElement
   * @returns {SVGCursorElement}
   */
  Element.prototype.asSVGCursorElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGAElement
   * @returns {SVGAElement}
   */
  Element.prototype.asSVGAElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGViewElement
   * @returns {SVGViewElement}
   */
  Element.prototype.asSVGViewElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGScriptElement
   * @returns {SVGScriptElement}
   */
  Element.prototype.asSVGScriptElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGAnimationElement
   * @returns {SVGAnimationElement}
   */
  Element.prototype.asSVGAnimationElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGAnimateElement
   * @returns {SVGAnimateElement}
   */
  Element.prototype.asSVGAnimateElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGSetElement
   * @returns {SVGSetElement}
   */
  Element.prototype.asSVGSetElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGAnimateMotionElement
   * @returns {SVGAnimateMotionElement}
   */
  Element.prototype.asSVGAnimateMotionElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGMPathElement
   * @returns {SVGMPathElement}
   */
  Element.prototype.asSVGMPathElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGAnimateColorElement
   * @returns {SVGAnimateColorElement}
   */
  Element.prototype.asSVGAnimateColorElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGAnimateTransformElement
   * @returns {SVGAnimateTransformElement}
   */
  Element.prototype.asSVGAnimateTransformElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGFontElement
   * @returns {SVGFontElement}
   */
  Element.prototype.asSVGFontElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGGlyphElement
   * @returns {SVGGlyphElement}
   */
  Element.prototype.asSVGGlyphElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGMissingGlyphElement
   * @returns {SVGMissingGlyphElement}
   */
  Element.prototype.asSVGMissingGlyphElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGHKernElement
   * @returns {SVGHKernElement}
   */
  Element.prototype.asSVGHKernElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGVKernElement
   * @returns {SVGVKernElement}
   */
  Element.prototype.asSVGVKernElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGFontFaceElement
   * @returns {SVGFontFaceElement}
   */
  Element.prototype.asSVGFontFaceElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGFontFaceSrcElement
   * @returns {SVGFontFaceSrcElement}
   */
  Element.prototype.asSVGFontFaceSrcElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGFontFaceUriElement
   * @returns {SVGFontFaceUriElement}
   */
  Element.prototype.asSVGFontFaceUriElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGFontFaceFormatElement
   * @returns {SVGFontFaceFormatElement}
   */
  Element.prototype.asSVGFontFaceFormatElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGFontFaceNameElement
   * @returns {SVGFontFaceNameElement}
   */
  Element.prototype.asSVGFontFaceNameElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGMetadataElement
   * @returns {SVGMetadataElement}
   */
  Element.prototype.asSVGMetadataElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the Element is actually a SVGForeignObjectElement
   * @returns {SVGForeignObjectElement}
   */
  Element.prototype.asSVGForeignObjectElement = function () {
    return this;
  };
  /**
   * Gives the IDE a hint that the SVGPathSeg is actually a SVGPathSegClosePath
   * @param {SVGPathSeg} t The base type
   * @returns {SVGPathSegClosePath}
   */
  SVGPathSeg.asSVGPathSegClosePath = function (t) {
    return t;
  };
  /**
   * Gives the IDE a hint that the SVGPathSeg is actually a SVGPathSegMovetoAbs
   * @param {SVGPathSeg} t The base type
   * @returns {SVGPathSegMovetoAbs}
   */
  SVGPathSeg.asSVGPathSegMovetoAbs = function (t) {
    return t;
  };
  /**
   * Gives the IDE a hint that the SVGPathSeg is actually a SVGPathSegMovetoRel
   * @param {SVGPathSeg} t The base type
   * @returns {SVGPathSegMovetoRel}
   */
  SVGPathSeg.asSVGPathSegMovetoRel = function (t) {
    return t;
  };
  /**
   * Gives the IDE a hint that the SVGPathSeg is actually a SVGPathSegLinetoAbs
   * @param {SVGPathSeg} t The base type
   * @returns {SVGPathSegLinetoAbs}
   */
  SVGPathSeg.asSVGPathSegLinetoAbs = function (t) {
    return t;
  };
  /**
   * Gives the IDE a hint that the SVGPathSeg is actually a SVGPathSegLinetoRel
   * @param {SVGPathSeg} t The base type
   * @returns {SVGPathSegLinetoRel}
   */
  SVGPathSeg.asSVGPathSegLinetoRel = function (t) {
    return t;
  };
  /**
   * Gives the IDE a hint that the SVGPathSeg is actually a SVGPathSegCurvetoCubicAbs
   * @param {SVGPathSeg} t The base type
   * @returns {SVGPathSegCurvetoCubicAbs}
   */
  SVGPathSeg.asSVGPathSegCurvetoCubicAbs = function (t) {
    return t;
  };
  /**
   * Gives the IDE a hint that the SVGPathSeg is actually a SVGPathSegCurvetoCubicRel
   * @param {SVGPathSeg} t The base type
   * @returns {SVGPathSegCurvetoCubicRel}
   */
  SVGPathSeg.asSVGPathSegCurvetoCubicRel = function (t) {
    return t;
  };
  /**
   * Gives the IDE a hint that the SVGPathSeg is actually a SVGPathSegCurvetoQuadraticAbs
   * @param {SVGPathSeg} t The base type
   * @returns {SVGPathSegCurvetoQuadraticAbs}
   */
  SVGPathSeg.asSVGPathSegCurvetoQuadraticAbs = function (t) {
    return t;
  };
  /**
   * Gives the IDE a hint that the SVGPathSeg is actually a SVGPathSegCurvetoQuadraticRel
   * @param {SVGPathSeg} t The base type
   * @returns {SVGPathSegCurvetoQuadraticRel}
   */
  SVGPathSeg.asSVGPathSegCurvetoQuadraticRel = function (t) {
    return t;
  };
  /**
   * Gives the IDE a hint that the SVGPathSeg is actually a SVGPathSegArcAbs
   * @param {SVGPathSeg} t The base type
   * @returns {SVGPathSegArcAbs}
   */
  SVGPathSeg.asSVGPathSegArcAbs = function (t) {
    return t;
  };
  /**
   * Gives the IDE a hint that the SVGPathSeg is actually a SVGPathSegArcRel
   * @param {SVGPathSeg} t The base type
   * @returns {SVGPathSegArcRel}
   */
  SVGPathSeg.asSVGPathSegArcRel = function (t) {
    return t;
  };
  /**
   * Gives the IDE a hint that the SVGPathSeg is actually a SVGPathSegLinetoHorizontalAbs
   * @param {SVGPathSeg} t The base type
   * @returns {SVGPathSegLinetoHorizontalAbs}
   */
  SVGPathSeg.asSVGPathSegLinetoHorizontalAbs = function (t) {
    return t;
  };
  /**
   * Gives the IDE a hint that the SVGPathSeg is actually a SVGPathSegLinetoHorizontalRel
   * @param {SVGPathSeg} t The base type
   * @returns {SVGPathSegLinetoHorizontalRel}
   */
  SVGPathSeg.asSVGPathSegLinetoHorizontalRel = function (t) {
    return t;
  };
  /**
   * Gives the IDE a hint that the SVGPathSeg is actually a SVGPathSegLinetoVerticalAbs
   * @param {SVGPathSeg} t The base type
   * @returns {SVGPathSegLinetoVerticalAbs}
   */
  SVGPathSeg.asSVGPathSegLinetoVerticalAbs = function (t) {
    return t;
  };
  /**
   * Gives the IDE a hint that the SVGPathSeg is actually a SVGPathSegLinetoVerticalRel
   * @param {SVGPathSeg} t The base type
   * @returns {SVGPathSegLinetoVerticalRel}
   */
  SVGPathSeg.asSVGPathSegLinetoVerticalRel = function (t) {
    return t;
  };
  /**
   * Gives the IDE a hint that the SVGPathSeg is actually a SVGPathSegCurvetoCubicSmoothAbs
   * @param {SVGPathSeg} t The base type
   * @returns {SVGPathSegCurvetoCubicSmoothAbs}
   */
  SVGPathSeg.asSVGPathSegCurvetoCubicSmoothAbs = function (t) {
    return t;
  };
  /**
   * Gives the IDE a hint that the SVGPathSeg is actually a SVGPathSegCurvetoCubicSmoothRel
   * @param {SVGPathSeg} t The base type
   * @returns {SVGPathSegCurvetoCubicSmoothRel}
   */
  SVGPathSeg.asSVGPathSegCurvetoCubicSmoothRel = function (t) {
    return t;
  };
  /**
   * Gives the IDE a hint that the SVGPathSeg is actually a SVGPathSegCurvetoQuadraticSmoothAbs
   * @param {SVGPathSeg} t The base type
   * @returns {SVGPathSegCurvetoQuadraticSmoothAbs}
   */
  SVGPathSeg.asSVGPathSegCurvetoQuadraticSmoothAbs = function (t) {
    return t;
  };
  /**
   * Gives the IDE a hint that the SVGPathSeg is actually a SVGPathSegCurvetoQuadraticSmoothRel
   * @param {SVGPathSeg} t The base type
   * @returns {SVGPathSegCurvetoQuadraticSmoothRel}
   */
  SVGPathSeg.asSVGPathSegCurvetoQuadraticSmoothRel = function (t) {
    return t;
  };

  return SVGConstants;
});