/**
 * This exception is raised when a specific SVG operation is impossible to
 * perform.
 */
SVGException = {};
/**
 * A code identifying the reason why the requested operation could not be
 * performed.  The value of this member will be one of the constants
 * in the <em>SVGException code</em> group.
 * @type {Number}
 */
SVGException.prototype.code = 0;

/**
 * All of the SVG DOM interfaces that correspond directly to elements in the
 * SVG language (such as the {@link SVGPathElement} interface for the <a href='http://www.w3.org/TR/SVG11/paths.html#PathElement'
 * title='path element specification'>path</a> element) derive from the {@link SVGElement}
 * interface.
 * @constructor
 * @augments Element
 */
function SVGElement() {
}
SVGElement.prototype = new Element();

// Implementation of the svg::SVGElement W3C IDL interface
/**
 * The value of the {@link SVGElement#id} attribute on the given element,
 * or the empty string if {@link SVGElement#id} is not present.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGElement.prototype.id = "";
/**
 * Corresponds to attribute <code>xml:base</code> on the given element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGElement.prototype.xmlbase = "";
/**
 * The nearest ancestor <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element. Null if the given element
 * is the outermost <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element.
 * @type SVGSVGElement
 */
SVGElement.prototype.ownerSVGElement = new SVGSVGElement();
/**
 * The element which established the current viewport. Often, the nearest
 * ancestor <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement' title='svg
 * element specification'>svg</a> element. Null if the given element is the
 * outermost <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement' title='svg
 * element specification'>svg</a> element.
 * @type SVGElement
 */
SVGElement.prototype.viewportElement = new SVGElement();

/**
 * Used for attributes of type boolean which can be animated.
 * @constructor
 */
function SVGAnimatedBoolean() {
}
SVGAnimatedBoolean.prototype = {};

// Implementation of the svg::SVGAnimatedBoolean W3C IDL interface
/**
 * The base value of the given attribute before applying any animations.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an   attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Boolean
 */
SVGAnimatedBoolean.prototype.baseVal = false;
/**
 * If the given attribute or property is being animated, contains the current
 * animated value of the attribute or property. If the given attribute or
 * property is not currently being animated, contains the same value as {@link SVGAnimatedBoolean#baseVal}.
 * @type Boolean
 */
SVGAnimatedBoolean.prototype.animVal = false;

/**
 * Used for attributes of type DOMString which can be animated.
 * @constructor
 */
function SVGAnimatedString() {
}
SVGAnimatedString.prototype = {};

// Implementation of the svg::SVGAnimatedString W3C IDL interface
/**
 * The base value of the given attribute before applying any animations.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an   attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGAnimatedString.prototype.baseVal = "";
/**
 * If the given attribute or property is being animated, contains the current
 * animated value of the attribute or property. If the given attribute or
 * property is not currently being animated, contains the same value as {@link SVGAnimatedString#baseVal}.
 * @type String
 */
SVGAnimatedString.prototype.animVal = "";

/**
 * <p>This interface defines a list of DOMString values.</p> <p>{@link SVGStringList}
 * has the same attributes and methods as other SVGxxxList interfaces. Implementers
 * may consider using a single base class to implement the various SVGxxxList
 * interfaces.</p>
 * @constructor
 */
function SVGStringList() {
}
SVGStringList.prototype = {};

// Implementation of the svg::SVGStringList W3C IDL interface
/**
 * The number of items in the list.
 * @type Number
 */
SVGStringList.prototype.numberOfItems = 0;
/**
 * Clears all existing current items from the list, with the result being
 * an empty list.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised when the list
 * cannot be modified.
 */
SVGStringList.prototype.clear = function () {
};
/**
 * Clears all existing current items from the list and re-initializes the
 * list to hold the single item specified by the parameter.
 * @param {String} newItem The item which should become the only member of
 * the list.
 * @returns {String} The item being inserted into the list.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised when the list
 * cannot be modified.
 */
SVGStringList.prototype.initialize = function (newItem) {
  return "";
};
/**
 * Returns the specified item from the list.
 * @param {Number} index The index of the item from the list which is to be
 * returned.  The first item is number 0.
 * @returns {String} The selected item.
 * @throws {DOMException} (INDEX_SIZE_ERR) Raised if the index number is
 * greater than or equal to {@link SVGStringList#numberOfItems}.
 */
SVGStringList.prototype.getItem = function (index) {
  return "";
};
/**
 * Inserts a new item into the list at the specified position. The first item
 * is number 0.
 * @param {String} newItem The item which is to be inserted into the list.
 * @param {Number} index The index of the item before which the new item is
 * to be   inserted. The first item is number 0.  If the index is equal to
 * 0,   then the new item is inserted at the front of the list. If the index
 * is greater than or equal to {@link SVGStringList#numberOfItems}, then the
 * new item is   appended to the end of the list.
 * @returns {String} The inserted item.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised when the list
 * cannot be modified.
 */
SVGStringList.prototype.insertItemBefore = function (newItem, index) {
  return "";
};
/**
 * Replaces an existing item in the list with a new item.
 * @param {String} newItem The item which is to be inserted into the list.
 * @param {Number} index The index of the item which is to be replaced. The
 * first   item is number 0.
 * @returns {String} The inserted item.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised when the list
 * cannot be modified.
 * @throws {DOMException} (INDEX_SIZE_ERR) Raised if the index number is
 * greater than or equal to {@link SVGStringList#numberOfItems}.
 */
SVGStringList.prototype.replaceItem = function (newItem, index) {
  return "";
};
/**
 * Removes an existing item from the list.
 * @param {Number} index The index of the item which is to be removed. The
 * first   item is number 0.
 * @returns {String} The removed item.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised when the list
 * cannot be modified.
 * @throws {DOMException} (INDEX_SIZE_ERR) Raised if the index number is
 * greater than or equal to {@link SVGStringList#numberOfItems}.
 */
SVGStringList.prototype.removeItem = function (index) {
  return "";
};
/**
 * Inserts a new item at the end of the list.
 * @param {String} newItem The item which is to be inserted. The first item
 * is   number 0.
 * @returns {String} The inserted item.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised when the list
 * cannot be modified.
 */
SVGStringList.prototype.appendItem = function (newItem) {
  return "";
};

/**
 * Used for attributes whose value must be a constant from a particular enumeration
 * and which can be animated.
 * @constructor
 */
function SVGAnimatedEnumeration() {
}
SVGAnimatedEnumeration.prototype = {};

// Implementation of the svg::SVGAnimatedEnumeration W3C IDL interface
/**
 * The base value of the given attribute before applying any animations.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an   attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGAnimatedEnumeration.prototype.baseVal = 0;
/**
 * If the given attribute or property is being animated, contains the current
 * animated value of the attribute or property. If the given attribute or
 * property is not currently being animated, contains the same value as {@link SVGAnimatedEnumeration#baseVal}.
 * @type Number
 */
SVGAnimatedEnumeration.prototype.animVal = 0;

/**
 * Used for attributes of basic type <a href='types.html#DataTypeInteger'>&lt;integer&gt;</a>
 * which can be animated.
 * @constructor
 */
function SVGAnimatedInteger() {
}
SVGAnimatedInteger.prototype = {};

// Implementation of the svg::SVGAnimatedInteger W3C IDL interface
/**
 * The base value of the given attribute before applying any animations.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an   attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGAnimatedInteger.prototype.baseVal = 0;
/**
 * If the given attribute or property is being animated, contains the current
 * animated value of the attribute or property. If the given attribute or
 * property is not currently being animated, contains the same value as {@link SVGAnimatedInteger#baseVal}.
 * @type Number
 */
SVGAnimatedInteger.prototype.animVal = 0;

/**
 * Used for attributes of basic type <a href='types.html#DataTypeNumber'>&lt;number&gt;</a>.
 * @constructor
 */
function SVGNumber() {
}
SVGNumber.prototype = {};

// Implementation of the svg::SVGNumber W3C IDL interface
/**
 * The value of the given attribute.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an   attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGNumber.prototype.value = 0;

/**
 * Used for attributes of basic type <a href='types.html#DataTypeNumber'>&lt;number&gt;</a>
 * which can be animated.
 * @constructor
 */
function SVGAnimatedNumber() {
}
SVGAnimatedNumber.prototype = {};

// Implementation of the svg::SVGAnimatedNumber W3C IDL interface
/**
 * The base value of the given attribute before applying any animations.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an   attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGAnimatedNumber.prototype.baseVal = 0;
/**
 * If the given attribute or property is being animated, contains the current
 * animated value of the attribute or property. If the given attribute or
 * property is not currently being animated, contains the same value as {@link SVGAnimatedNumber#baseVal}.
 * @type Number
 */
SVGAnimatedNumber.prototype.animVal = 0;

/**
 * <p>This interface defines a list of SVGNumber objects.</p> <p>{@link SVGNumberList}
 * has the same attributes and methods as other SVGxxxList interfaces. Implementers
 * may consider using a single base class to implement the various SVGxxxList
 * interfaces.</p> <p id="ReadOnlyNumberList">An {@link SVGNumberList} object
 * can be designated as <em>read only</em>, which means that attempts to modify
 * the object will result in an exception being thrown, as described below.</p>
 * @constructor
 */
function SVGNumberList() {
}
SVGNumberList.prototype = {};

// Implementation of the svg::SVGNumberList W3C IDL interface
/**
 * The number of items in the list.
 * @type Number
 */
SVGNumberList.prototype.numberOfItems = 0;
/**
 * Clears all existing current items from the list, with the result being
 * an empty list.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised when the list
 * corresponds to a <a href="svgdom.html#ReadOnlyNodes">read only attribute</a>
 * or when the object itself is   <a href="#ReadOnlyNumberList">read only</a>.
 */
SVGNumberList.prototype.clear = function () {
};
/**
 * Clears all existing current items from the list and re-initializes the
 * list to hold the single item specified by the parameter.  If the inserted
 * item is already in a list, it is removed from its previous list before
 * it is inserted into this list.  The inserted item is the item itself and
 * not a copy.
 * @param {SVGNumber} newItem The item which should become the only member
 * of the list.
 * @returns {SVGNumber} The item being inserted into the list.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised when the list
 * corresponds to a <a href="svgdom.html#ReadOnlyNodes">read only attribute</a>
 * or when the object itself is   <a href="#ReadOnlyNumberList">read only</a>.
 */
SVGNumberList.prototype.initialize = function (newItem) {
  return new SVGNumber();
};
/**
 * Returns the specified item from the list.  The returned item is the item
 * itself and not a copy.  Any changes made to the item are immediately reflected
 * in the list.
 * @param {Number} index The index of the item from the list which is to be
 * returned.  The first item is number 0.
 * @returns {SVGNumber} The selected item.
 * @throws {DOMException} (INDEX_SIZE_ERR) Raised if the index number is
 * greater than or equal to {@link SVGNumberList#numberOfItems}.
 */
SVGNumberList.prototype.getItem = function (index) {
  return new SVGNumber();
};
/**
 * Inserts a new item into the list at the specified position. The first item
 * is number 0. If <var>newItem</var> is already in a list, it is removed
 * from its previous list before it is inserted into this list. The inserted
 * item is the item itself and not a copy. If the item is already in this
 * list, note that the index of the item to insert before is <i>before</i>
 * the removal of the item.
 * @param {SVGNumber} newItem The item which is to be inserted into the list.
 * @param {Number} index The index of the item before which the new item is
 * to be   inserted. The first item is number 0.  If the index is equal to
 * 0,   then the new item is inserted at the front of the list. If the index
 * is greater than or equal to {@link SVGNumberList#numberOfItems}, then the
 * new item is   appended to the end of the list.
 * @returns {SVGNumber} The inserted item.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised when the list
 * corresponds to a <a href="svgdom.html#ReadOnlyNodes">read only attribute</a>
 * or when the object itself is   <a href="#ReadOnlyNumberList">read only</a>.
 */
SVGNumberList.prototype.insertItemBefore = function (newItem, index) {
  return new SVGNumber();
};
/**
 * Replaces an existing item in the list with a new item. If <var>newItem</var>
 * is already in a list, it is removed from its previous list before it is
 * inserted into this list.  The inserted item is the item itself and not
 * a copy.  If the item is already in this list, note that the index of the
 * item to replace is <i>before</i> the removal of the item.
 * @param {SVGNumber} newItem The item which is to be inserted into the list.
 * @param {Number} index The index of the item which is to be replaced. The
 * first   item is number 0.
 * @returns {SVGNumber} The inserted item.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised when the list
 * corresponds to a <a href="svgdom.html#ReadOnlyNodes">read only attribute</a>
 * or when the object itself is   <a href="#ReadOnlyNumberList">read only</a>.
 * @throws {DOMException} (INDEX_SIZE_ERR) Raised if the index number is
 * greater than or equal to {@link SVGNumberList#numberOfItems}.
 */
SVGNumberList.prototype.replaceItem = function (newItem, index) {
  return new SVGNumber();
};
/**
 * Removes an existing item from the list.
 * @param {Number} index The index of the item which is to be removed. The
 * first   item is number 0.
 * @returns {SVGNumber} The removed item.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised when the list
 * cannot be modified.
 * @throws {DOMException} (INDEX_SIZE_ERR) Raised if the index number is
 * greater than or equal to {@link SVGNumberList#numberOfItems}.
 */
SVGNumberList.prototype.removeItem = function (index) {
  return new SVGNumber();
};
/**
 * Inserts a new item at the end of the list. If <var>newItem</var> is already
 * in a list, it is removed from its previous list before it is inserted into
 * this list.  The inserted item is the item itself and not a copy.
 * @param {SVGNumber} newItem The item which is to be inserted. The first
 * item is   number 0.
 * @returns {SVGNumber} The inserted item.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised when the list
 * cannot be modified.
 */
SVGNumberList.prototype.appendItem = function (newItem) {
  return new SVGNumber();
};

/**
 * Used for attributes which take a list of numbers and which can be animated.
 * @constructor
 */
function SVGAnimatedNumberList() {
}
SVGAnimatedNumberList.prototype = {};

// Implementation of the svg::SVGAnimatedNumberList W3C IDL interface
/**
 * The base value of the given attribute before applying any animations.
 * @type SVGNumberList
 */
SVGAnimatedNumberList.prototype.baseVal = new SVGNumberList();
/**
 * A <a href="#ReadOnlyNumberList">read only</a> {@link SVGNumberList} representing
 * the current animated value of the given attribute.  If the given attribute
 * is not currently being animated, then the {@link SVGNumberList} will have
 * the same contents as {@link SVGAnimatedNumberList#baseVal}.  The object
 * referenced by {@link SVGAnimatedNumberList#animVal} will always be distinct
 * from the one referenced by {@link SVGAnimatedNumberList#baseVal}, even
 * when the attribute is not animated.
 * @type SVGNumberList
 */
SVGAnimatedNumberList.prototype.animVal = new SVGNumberList();

/**
 * The {@link SVGLength} interface corresponds to the <a href='types.html#DataTypeLength'>&lt;length&gt;</a>
 * basic data type. <p id="ReadOnlyLength">An {@link SVGLength} object can
 * be designated as <em>read only</em>, which means that attempts to modify
 * the object will result in an exception being thrown, as described below.</p>
 * @constructor
 */
function SVGLength() {
}
SVGLength.prototype = {};

// Implementation of the svg::SVGLength W3C IDL interface
/**
 * The unit type is not one of predefined unit types. It is invalid to attempt
 * to define a new value of this type or to attempt to switch an existing
 * value to this type.
 * @constant
 * @type Number
 */
SVGLength.SVG_LENGTHTYPE_UNKNOWN = 0;
/**
 * No unit type was provided (i.e., a unitless value was specified), which
 * indicates a value in user units.
 * @constant
 * @type Number
 */
SVGLength.SVG_LENGTHTYPE_NUMBER = 1;
/**
 * A percentage value was specified.
 * @constant
 * @type Number
 */
SVGLength.SVG_LENGTHTYPE_PERCENTAGE = 2;
/**
 * A value was specified using the em units defined in CSS2.
 * @constant
 * @type Number
 */
SVGLength.SVG_LENGTHTYPE_EMS = 3;
/**
 * A value was specified using the ex units defined in CSS2.
 * @constant
 * @type Number
 */
SVGLength.SVG_LENGTHTYPE_EXS = 4;
/**
 * A value was specified using the px units defined in CSS2.
 * @constant
 * @type Number
 */
SVGLength.SVG_LENGTHTYPE_PX = 5;
/**
 * A value was specified using the cm units defined in CSS2.
 * @constant
 * @type Number
 */
SVGLength.SVG_LENGTHTYPE_CM = 6;
/**
 * A value was specified using the mm units defined in CSS2.
 * @constant
 * @type Number
 */
SVGLength.SVG_LENGTHTYPE_MM = 7;
/**
 * A value was specified using the in units defined in CSS2.
 * @constant
 * @type Number
 */
SVGLength.SVG_LENGTHTYPE_IN = 8;
/**
 * A value was specified using the pt units defined in CSS2.
 * @constant
 * @type Number
 */
SVGLength.SVG_LENGTHTYPE_PT = 9;
/**
 * A value was specified using the pc units defined in CSS2.
 * @constant
 * @type Number
 */
SVGLength.SVG_LENGTHTYPE_PC = 10;
/**
 * The type of the value as specified by one of the SVG_LENGTHTYPE_ constants
 * defined on this interface.
 * @type Number
 */
SVGLength.prototype.unitType = 0;
/**
 * The value as a floating point value, in user units. Setting this attribute
 * will cause {@link SVGLength#valueInSpecifiedUnits} and {@link SVGLength#valueAsString}
 * to be updated automatically to reflect this setting.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised when the length
 * corresponds to a <a href="svgdom.html#ReadOnlyNodes">read only attribute</a>
 * or when the object itself is   <a href="#ReadOnlyLength">read only</a>.
 * @type Number
 */
SVGLength.prototype.value = 0;
/**
 * The value as a floating point value, in the units expressed by {@link SVGLength#unitType}.
 * Setting this attribute will cause {@link SVGLength#value} and {@link SVGLength#valueAsString}
 * to be updated automatically to reflect this setting.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised when the length
 * corresponds to a <a href="svgdom.html#ReadOnlyNodes">read only attribute</a>
 * or when the object itself is   <a href="#ReadOnlyLength">read only</a>.
 * @type Number
 */
SVGLength.prototype.valueInSpecifiedUnits = 0;
/**
 * The value as a string value, in the units expressed by {@link SVGLength#unitType}.
 * Setting this attribute will cause {@link SVGLength#value}, {@link SVGLength#valueInSpecifiedUnits}
 * and {@link SVGLength#unitType} to be updated automatically to reflect this
 * setting.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised when the length
 * corresponds to a <a href="svgdom.html#ReadOnlyNodes">read only attribute</a>
 * or when the object itself is   <a href="#ReadOnlyLength">read only</a>.
 * @throws {DOMException} (SYNTAX_ERR) Raised if the assigned string cannot
 * be parsed as a valid <code>&lt;length&gt;</code>.
 * @type String
 */
SVGLength.prototype.valueAsString = "";
/**
 * Reset the value as a number with an associated {@link SVGLength#unitType},
 * thereby replacing the values for all of the attributes on the object.
 * @param {Number} unitType The unit type for the value (e.g., <code>SVG_LENGTHTYPE_MM</code>).
 * @param {Number} valueInSpecifiedUnits The new value.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised when the length
 * corresponds to a <a href="svgdom.html#ReadOnlyNodes">read only attribute</a>
 * or when the object itself is   <a href="#ReadOnlyLength">read only</a>.
 * @throws {DOMException} (NOT_SUPPORTED_ERR) Raised if unitType is SVG_LENGTHTYPE_UNKNOWN
 * or not a valid unit type constant (one of the other SVG_LENGTHTYPE_ constants
 * defined on this interface).
 */
SVGLength.prototype.newValueSpecifiedUnits = function (unitType, valueInSpecifiedUnits) {
};
/**
 * Preserve the same underlying stored value, but reset the stored unit identifier
 * to the given <var>unitType</var>. Object attributes {@link SVGLength#unitType},
 * {@link SVGLength#valueInSpecifiedUnits} and {@link SVGLength#valueAsString}
 * might be modified as a result of this method. For example, if the original
 * value were "0.5cm" and the method was invoked to convert to millimeters,
 * then the {@link SVGLength#unitType} would be changed to <code>SVG_LENGTHTYPE_MM</code>,
 * {@link SVGLength#valueInSpecifiedUnits} would be changed to the numeric
 * value 5 and {@link SVGLength#valueAsString} would be changed to "5mm".
 * @param {Number} unitType The unit type to switch to (e.g., <code>SVG_LENGTHTYPE_MM</code>).
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised when the length
 * corresponds to a <a href="svgdom.html#ReadOnlyNodes">read only attribute</a>
 * or when the object itself is   <a href="#ReadOnlyLength">read only</a>.
 * @throws {DOMException} (NOT_SUPPORTED_ERR) Raised if unitType is SVG_LENGTHTYPE_UNKNOWN
 * or not a valid unit type constant (one of the other SVG_LENGTHTYPE_ constants
 * defined on this interface).
 */
SVGLength.prototype.convertToSpecifiedUnits = function (unitType) {
};

/**
 * Used for attributes of basic type <a href='types.html#DataTypeLength'>&lt;length&gt;</a>
 * which can be animated.
 * @constructor
 */
function SVGAnimatedLength() {
}
SVGAnimatedLength.prototype = {};

// Implementation of the svg::SVGAnimatedLength W3C IDL interface
/**
 * The base value of the given attribute before applying any animations.
 * @type SVGLength
 */
SVGAnimatedLength.prototype.baseVal = new SVGLength();
/**
 * A <a href="#ReadOnlyLength">read only</a> {@link SVGLength} representing
 * the current animated value of the given attribute.  If the given attribute
 * is not currently being animated, then the {@link SVGLength} will have the
 * same contents as {@link SVGAnimatedLength#baseVal}.  The object referenced
 * by {@link SVGAnimatedLength#animVal} will always be distinct from the one
 * referenced by {@link SVGAnimatedLength#baseVal}, even when the attribute
 * is not animated.
 * @type SVGLength
 */
SVGAnimatedLength.prototype.animVal = new SVGLength();

/**
 * <p>This interface defines a list of SVGLength objects.</p> <p>{@link SVGLengthList}
 * has the same attributes and methods as other SVGxxxList interfaces. Implementers
 * may consider using a single base class to implement the various SVGxxxList
 * interfaces.</p> <p id="ReadOnlyLengthList">An {@link SVGLengthList} object
 * can be designated as <em>read only</em>, which means that attempts to modify
 * the object will result in an exception being thrown, as described below.</p>
 * @constructor
 */
function SVGLengthList() {
}
SVGLengthList.prototype = {};

// Implementation of the svg::SVGLengthList W3C IDL interface
/**
 * The number of items in the list.
 * @type Number
 */
SVGLengthList.prototype.numberOfItems = 0;
/**
 * Clears all existing current items from the list, with the result being
 * an empty list.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised when the list
 * corresponds to a <a href="svgdom.html#ReadOnlyNodes">read only attribute</a>
 * or when the object itself is   <a href="#ReadOnlyLengthList">read only</a>.
 */
SVGLengthList.prototype.clear = function () {
};
/**
 * Clears all existing current items from the list and re-initializes the
 * list to hold the single item specified by the parameter.  If the inserted
 * item is already in a list, it is removed from its previous list before
 * it is inserted into this list.  The inserted item is the item itself and
 * not a copy.
 * @param {SVGLength} newItem The item which should become the only member
 * of the list.
 * @returns {SVGLength} The item being inserted into the list.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised when the list
 * corresponds to a <a href="svgdom.html#ReadOnlyNodes">read only attribute</a>
 * or when the object itself is   <a href="#ReadOnlyLengthList">read only</a>.
 */
SVGLengthList.prototype.initialize = function (newItem) {
  return new SVGLength();
};
/**
 * Returns the specified item from the list.  The returned item is the item
 * itself and not a copy.  Any changes made to the item are immediately reflected
 * in the list.
 * @param {Number} index The index of the item from the list which is to be
 * returned.  The first item is number 0.
 * @returns {SVGLength} The selected item.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised when the list
 * corresponds to a <a href="svgdom.html#ReadOnlyNodes">read only attribute</a>
 * or when the object itself is   <a href="#ReadOnlyLengthList">read only</a>.
 */
SVGLengthList.prototype.getItem = function (index) {
  return new SVGLength();
};
/**
 * Inserts a new item into the list at the specified position. The first item
 * is number 0. If <var>newItem</var> is already in a list, it is removed
 * from its previous list before it is inserted into this list. The inserted
 * item is the item itself and not a copy. If the item is already in this
 * list, note that the index of the item to insert before is <i>before</i>
 * the removal of the item.
 * @param {SVGLength} newItem The item which is to be inserted into the list.
 * @param {Number} index The index of the item before which the new item is
 * to be   inserted. The first item is number 0.  If the index is equal to
 * 0,   then the new item is inserted at the front of the list. If the index
 * is greater than or equal to {@link SVGLengthList#numberOfItems}, then the
 * new item is   appended to the end of the list.
 * @returns {SVGLength} The inserted item.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised when the list
 * corresponds to a <a href="svgdom.html#ReadOnlyNodes">read only attribute</a>
 * or when the object itself is   <a href="#ReadOnlyLengthList">read only</a>.
 */
SVGLengthList.prototype.insertItemBefore = function (newItem, index) {
  return new SVGLength();
};
/**
 * Replaces an existing item in the list with a new item. If <var>newItem</var>
 * is already in a list, it is removed from its previous list before it is
 * inserted into this list.  The inserted item is the item itself and not
 * a copy.  If the item is already in this list, note that the index of the
 * item to replace is <i>before</i> the removal of the item.
 * @param {SVGLength} newItem The item which is to be inserted into the list.
 * @param {Number} index The index of the item which is to be replaced. The
 * first   item is number 0.
 * @returns {SVGLength} The inserted item.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised when the list
 * corresponds to a <a href="svgdom.html#ReadOnlyNodes">read only attribute</a>
 * or when the object itself is   <a href="#ReadOnlyLengthList">read only</a>.
 * @throws {DOMException} (INDEX_SIZE_ERR) Raised if the index number is
 * greater than or equal to {@link SVGLengthList#numberOfItems}.
 */
SVGLengthList.prototype.replaceItem = function (newItem, index) {
  return new SVGLength();
};
/**
 * Removes an existing item from the list.
 * @param {Number} index The index of the item which is to be removed. The
 * first   item is number 0.
 * @returns {SVGLength} The removed item.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised when the list
 * corresponds to a <a href="svgdom.html#ReadOnlyNodes">read only attribute</a>
 * or when the object itself is   <a href="#ReadOnlyLengthList">read only</a>.
 * @throws {DOMException} (INDEX_SIZE_ERR) Raised if the index number is
 * greater than or equal to {@link SVGLengthList#numberOfItems}.
 */
SVGLengthList.prototype.removeItem = function (index) {
  return new SVGLength();
};
/**
 * Inserts a new item at the end of the list. If <var>newItem</var> is already
 * in a list, it is removed from its previous list before it is inserted into
 * this list.  The inserted item is the item itself and not a copy.
 * @param {SVGLength} newItem The item which is to be inserted. The first
 * item is   number 0.
 * @returns {SVGLength} The inserted item.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised when the list
 * corresponds to a <a href="svgdom.html#ReadOnlyNodes">read only attribute</a>
 * or when the object itself is   <a href="#ReadOnlyLengthList">read only</a>.
 */
SVGLengthList.prototype.appendItem = function (newItem) {
  return new SVGLength();
};

/**
 * Used for attributes of type {@link SVGLengthList} which can be animated.
 * @constructor
 */
function SVGAnimatedLengthList() {
}
SVGAnimatedLengthList.prototype = {};

// Implementation of the svg::SVGAnimatedLengthList W3C IDL interface
/**
 * The base value of the given attribute before applying any animations.
 * @type SVGLengthList
 */
SVGAnimatedLengthList.prototype.baseVal = new SVGLengthList();
/**
 * A <a href="#ReadOnlyLengthList">read only</a> {@link SVGLengthList} representing
 * the current animated value of the given attribute.  If the given attribute
 * is not currently being animated, then the {@link SVGLengthList} will have
 * the same contents as {@link SVGAnimatedLengthList#baseVal}.  The object
 * referenced by {@link SVGAnimatedLengthList#animVal} will always be distinct
 * from the one referenced by {@link SVGAnimatedLengthList#baseVal}, even
 * when the attribute is not animated.
 * @type SVGLengthList
 */
SVGAnimatedLengthList.prototype.animVal = new SVGLengthList();

/**
 * The {@link SVGAngle} interface corresponds to the <a href='types.html#DataTypeAngle'>&lt;angle&gt;</a>
 * basic data type. <p id="ReadOnlyAngle">An {@link SVGAngle} object can be
 * designated as <em>read only</em>, which means that attempts to modify the
 * object will result in an exception being thrown, as described below.</p>
 * @constructor
 */
function SVGAngle() {
}
SVGAngle.prototype = {};

// Implementation of the svg::SVGAngle W3C IDL interface
/**
 * The unit type is not one of predefined unit types. It is invalid to attempt
 * to define a new value of this type or to attempt to switch an existing
 * value to this type.
 * @constant
 * @type Number
 */
SVGAngle.SVG_ANGLETYPE_UNKNOWN = 0;
/**
 * No unit type was provided (i.e., a unitless value was specified). For angles,
 * a unitless value is treated the same as if degrees were specified.
 * @constant
 * @type Number
 */
SVGAngle.SVG_ANGLETYPE_UNSPECIFIED = 1;
/**
 * The unit type was explicitly set to degrees.
 * @constant
 * @type Number
 */
SVGAngle.SVG_ANGLETYPE_DEG = 2;
/**
 * The unit type is radians.
 * @constant
 * @type Number
 */
SVGAngle.SVG_ANGLETYPE_RAD = 3;
/**
 * The unit type is radians.
 * @constant
 * @type Number
 */
SVGAngle.SVG_ANGLETYPE_GRAD = 4;
/**
 * The type of the value as specified by one of the SVG_ANGLETYPE_ constants
 * defined on this interface.
 * @type Number
 */
SVGAngle.prototype.unitType = 0;
/**
 * The angle value as a floating point value, in degrees. Setting this attribute
 * will cause {@link SVGAngle#valueInSpecifiedUnits} and {@link SVGAngle#valueAsString}
 * to be updated automatically to reflect this setting.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised when the angle
 * corresponds to a <a href="svgdom.html#ReadOnlyNodes">read only attribute</a>
 * or when the object itself is   <a href="#ReadOnlyAngle">read only</a>.
 * @type Number
 */
SVGAngle.prototype.value = 0;
/**
 * The angle value as a floating point value, in the units expressed by {@link SVGAngle#unitType}.
 * Setting this attribute will cause {@link SVGAngle#value} and {@link SVGAngle#valueAsString}
 * to be updated automatically to reflect this setting.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised when the angle
 * corresponds to a <a href="svgdom.html#ReadOnlyNodes">read only attribute</a>
 * or when the object itself is   <a href="#ReadOnlyAngle">read only</a>.
 * @type Number
 */
SVGAngle.prototype.valueInSpecifiedUnits = 0;
/**
 * The angle value as a string value, in the units expressed by {@link SVGAngle#unitType}.
 * Setting this attribute will cause {@link SVGAngle#value}, {@link SVGAngle#valueInSpecifiedUnits}
 * and {@link SVGAngle#unitType} to be updated automatically to reflect this
 * setting.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised when the angle
 * corresponds to a <a href="svgdom.html#ReadOnlyNodes">read only attribute</a>
 * or when the object itself is   <a href="#ReadOnlyAngle">read only</a>.
 * @throws {DOMException} (SYNTAX_ERR) Raised if the assigned string cannot
 * be parsed as a valid <code>&lt;angle&gt;</code>.
 * @type String
 */
SVGAngle.prototype.valueAsString = "";
/**
 * Reset the value as a number with an associated {@link SVGAngle#unitType},
 * thereby replacing the values for all of the attributes on the object.
 * @param {Number} unitType The unit type for the value (e.g., <code>SVG_ANGLETYPE_DEG</code>).
 * @param {Number} valueInSpecifiedUnits The angle value.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised when the angle
 * corresponds to a <a href="svgdom.html#ReadOnlyNodes">read only attribute</a>
 * or when the object itself is   <a href="#ReadOnlyAngle">read only</a>.
 * @throws {DOMException} (NOT_SUPPORTED_ERR) Raised if unitType is SVG_ANGLETYPE_UNKNOWN
 * or not a valid unit type constant (one of the other SVG_ANGLETYPE_ constants
 * defined on this interface).
 */
SVGAngle.prototype.newValueSpecifiedUnits = function (unitType, valueInSpecifiedUnits) {
};
/**
 * Preserve the same underlying stored value, but reset the stored unit identifier
 * to the given <var>unitType</var>. Object attributes {@link SVGAngle#unitType},
 * {@link SVGAngle#valueInSpecifiedUnits} and {@link SVGAngle#valueAsString}
 * might be modified as a result of this method.
 * @param {Number} unitType The unit type to switch to (e.g., <code>SVG_ANGLETYPE_DEG</code>).
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised when the angle
 * corresponds to a <a href="svgdom.html#ReadOnlyNodes">read only attribute</a>
 * or when the object itself is   <a href="#ReadOnlyAngle">read only</a>.
 * @throws {DOMException} (NOT_SUPPORTED_ERR) Raised if unitType is SVG_ANGLETYPE_UNKNOWN
 * or not a valid unit type constant (one of the other SVG_ANGLETYPE_ constants
 * defined on this interface).
 */
SVGAngle.prototype.convertToSpecifiedUnits = function (unitType) {
};

/**
 * Used for attributes of basic data type <a href='types.html#DataTypeAngle'>&lt;angle&gt;</a>
 * that can be animated.
 * @constructor
 */
function SVGAnimatedAngle() {
}
SVGAnimatedAngle.prototype = {};

// Implementation of the svg::SVGAnimatedAngle W3C IDL interface
/**
 * The base value of the given attribute before applying any animations.
 * @type SVGAngle
 */
SVGAnimatedAngle.prototype.baseVal = new SVGAngle();
/**
 * A <a href="#ReadOnlyAngle">read only</a> {@link SVGAngle} representing
 * the current animated value of the given attribute.  If the given attribute
 * is not currently being animated, then the {@link SVGAngle} will have the
 * same contents as {@link SVGAnimatedAngle#baseVal}.  The object referenced
 * by {@link SVGAnimatedAngle#animVal} will always be distinct from the one
 * referenced by {@link SVGAnimatedAngle#baseVal}, even when the attribute
 * is not animated.
 * @type SVGAngle
 */
SVGAnimatedAngle.prototype.animVal = new SVGAngle();

/**
 * <p>The {@link SVGColor} interface corresponds to color value definition
 * for properties <code>stop-color</code>, <code>flood-color</code> and <code>lighting-color</code>
 * and is a base class for interface {@link SVGPaint}. It incorporates SVG's
 * extended notion of color, which incorporates ICC-based color specifications.</p>
 * <p>Interface {@link SVGColor} does <em>not</em> correspond to the <a href='types.html#DataTypeColor'>&lt;color&gt;</a>
 * basic data type. For the <a href='types.html#DataTypeColor'>&lt;color&gt;</a>
 * basic data type, the applicable DOM interfaces are defined in <a href='http://www.w3.org/TR/2000/REC-DOM-Level-2-Style-20001113/'>DOM
 * Level 2 Style</a>; in particular, see the <code>RGBColor</code> interface
 * ([<a href='refs.html#ref-DOM2STYLE'>DOM2STYLE</a>], section 2.2).</p> <p>Note:
 * The {@link SVGColor} interface is deprecated, and may be dropped from future
 * versions of the SVG specification.</p>
 * @constructor
 * @augments CSSValue
 */
function SVGColor() {
}
SVGColor.prototype = new CSSValue();

// Implementation of the svg::SVGColor W3C IDL interface
/**
 * The color type is not one of predefined types. It is invalid to attempt
 * to define a new value of this type or to attempt to switch an existing
 * value to this type.
 * @constant
 * @type Number
 */
SVGColor.SVG_COLORTYPE_UNKNOWN = 0;
/**
 * An sRGB color has been specified without an alternative ICC color specification.
 * @constant
 * @type Number
 */
SVGColor.SVG_COLORTYPE_RGBCOLOR = 1;
/**
 * An sRGB color has been specified along with an alternative ICC color specification.
 * @constant
 * @type Number
 */
SVGColor.SVG_COLORTYPE_RGBCOLOR_ICCCOLOR = 2;
/**
 * Corresponds to when keyword <span class='attr-value'>currentColor</span>
 * has been specified.
 * @constant
 * @type Number
 */
SVGColor.SVG_COLORTYPE_CURRENTCOLOR = 3;
/**
 * The type of the value as specified by one of the SVG_COLORTYPE_ constants
 * defined on this interface.
 * @type Number
 */
SVGColor.prototype.colorType = 0;
/**
 * The color specified in the sRGB color space.
 * @type RGBColor
 */
SVGColor.prototype.rgbColor = new RGBColor();
/**
 * The alternate ICC color specification.
 * @type SVGICCColor
 */
SVGColor.prototype.iccColor = new SVGICCColor();
/**
 * Modifies the color value to be the specified sRGB color without an alternate
 * ICC color specification.
 * @param {String} rgbColor A string that matches <a href='types.html#DataTypeColor'>&lt;color&gt;</a>,
 * which specifies the new sRGB color value.
 * @throws {SVGException} (SVG_INVALID_VALUE_ERR) Raised if <var>rgbColor</var>
 * does not match <a href='types.html#DataTypeColor'>&lt;color&gt;</a>.
 */
SVGColor.prototype.setRGBColor = function (rgbColor) {
};
/**
 * Modifies the color value to be the specified sRGB color with an alternate
 * ICC color specification.
 * @param {String} rgbColor A string that matches <a href='types.html#DataTypeColor'>&lt;color&gt;</a>,
 * which specifies the new sRGB color value.
 * @param {String} iccColor A string that matches <a href='types.html#DataTypeICCColor'>&lt;icccolor&gt;</a>,
 * which specifies the alternate ICC color specification.
 * @throws {SVGException} (SVG_INVALID_VALUE_ERR) Raised if <var>rgbColor</var>
 * does not match <a href='types.html#DataTypeColor'>&lt;color&gt;</a>   or
 * if <var>iccColor</var> does not match   <a href='types.html#DataTypeICCColor'>&lt;icccolor&gt;</a>.
 */
SVGColor.prototype.setRGBColorICCColor = function (rgbColor, iccColor) {
};
/**
 * Sets the color value as specified by the parameters. If <var>colorType</var>
 * requires an <code>RGBColor</code>, then <var>rgbColor</var> must be a string
 * that matches <a href='types.html#DataTypeColor'>&lt;color&gt;</a>; otherwise,
 * <var>rgbColor</var>. must be null. If <var>colorType</var> requires an
 * {@link SVGICCColor}, then <var>iccColor</var> must be a string that matches
 * <a href='types.html#DataTypeICCColor'>&lt;icccolor&gt;</a>; otherwise,
 * <var>iccColor</var> must be null.
 * @param {Number} colorType One of the defined constants for {@link SVGColor#colorType}.
 * @param {String} rgbColor The specification of an sRGB color, or null.
 * @param {String} iccColor The specification of an ICC color, or null.
 * @throws {SVGException} (SVG_INVALID_VALUE_ERR) Raised if one of the   parameters
 * has an invalid value.
 */
SVGColor.prototype.setColor = function (colorType, rgbColor, iccColor) {
};

/**
 * The {@link SVGICCColor} interface expresses an ICC-based color specification.
 * <p>Note: The {@link SVGICCColor} interface is deprecated, and may be dropped
 * from future versions of the SVG specification.</p>
 * @constructor
 */
function SVGICCColor() {
}
SVGICCColor.prototype = {};

// Implementation of the svg::SVGICCColor W3C IDL interface
/**
 * The name of the color profile, which is the first parameter of an ICC color
 * specification.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGICCColor.prototype.colorProfile = "";
/**
 * The list of color values that define this ICC color. Each color value is
 * an arbitrary floating point number.
 * @type SVGNumberList
 */
SVGICCColor.prototype.colors = new SVGNumberList();

/**
 * <p>Represents rectangular geometry.  Rectangles are defined as consisting
 * of a (x,y) coordinate pair identifying a minimum X value, a minimum Y value,
 * and a width and height, which are usually constrained to be non-negative.</p>
 * <p id="ReadOnlyRect">An {@link SVGRect} object can be designated as <em>read
 * only</em>, which means that attempts to modify the object will result in
 * an exception being thrown, as described below.</p>
 * @constructor
 */
function SVGRect() {
}
SVGRect.prototype = {};

// Implementation of the svg::SVGRect W3C IDL interface
/**
 * The <var>x</var> coordinate of the rectangle, in user units.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised when the rectangle
 * corresponds to a <a href="svgdom.html#ReadOnlyNodes">read only attribute</a>
 * or when the object itself is   <a href="#ReadOnlyRect">read only</a>.
 * @type Number
 */
SVGRect.prototype.x = 0;
/**
 * The <var>y</var> coordinate of the rectangle, in user units.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised when the rectangle
 * corresponds to a <a href="svgdom.html#ReadOnlyNodes">read only attribute</a>
 * or when the object itself is   <a href="#ReadOnlyRect">read only</a>.
 * @type Number
 */
SVGRect.prototype.y = 0;
/**
 * The <var>width</var> coordinate of the rectangle, in user units.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised when the rectangle
 * corresponds to a <a href="svgdom.html#ReadOnlyNodes">read only attribute</a>
 * or when the object itself is   <a href="#ReadOnlyRect">read only</a>.
 * @type Number
 */
SVGRect.prototype.width = 0;
/**
 * The <var>height</var> coordinate of the rectangle, in user units.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised when the rectangle
 * corresponds to a <a href="svgdom.html#ReadOnlyNodes">read only attribute</a>
 * or when the object itself is   <a href="#ReadOnlyRect">read only</a>.
 * @type Number
 */
SVGRect.prototype.height = 0;

/**
 * Used for attributes of type {@link SVGRect} which can be animated.
 * @constructor
 */
function SVGAnimatedRect() {
}
SVGAnimatedRect.prototype = {};

// Implementation of the svg::SVGAnimatedRect W3C IDL interface
/**
 * The base value of the given attribute before applying any animations.
 * @type SVGRect
 */
SVGAnimatedRect.prototype.baseVal = new SVGRect();
/**
 * A <a href="#ReadOnlyRect">read only</a> {@link SVGRect} representing the
 * current animated value of the given attribute.  If the given attribute
 * is not currently being animated, then the {@link SVGRect} will have the
 * same contents as {@link SVGAnimatedRect#baseVal}.  The object referenced
 * by {@link SVGAnimatedRect#animVal} will always be distinct from the one
 * referenced by {@link SVGAnimatedRect#baseVal}, even when the attribute
 * is not animated.
 * @type SVGRect
 */
SVGAnimatedRect.prototype.animVal = new SVGRect();

/**
 * The {@link SVGUnitTypes} interface defines a commonly used set of constants
 * and is a base interface used by {@link SVGGradientElement}, {@link SVGPatternElement},
 * {@link SVGClipPathElement}, {@link SVGMaskElement} and {@link SVGFilterElement}.
 * @constructor
 */
function SVGUnitTypes() {
}
SVGUnitTypes.prototype = {};

// Implementation of the svg::SVGUnitTypes W3C IDL interface
/**
 * The type is not one of predefined types. It is invalid to attempt to define
 * a new value of this type or to attempt to switch an existing value to this
 * type.
 * @constant
 * @type Number
 */
SVGUnitTypes.SVG_UNIT_TYPE_UNKNOWN = 0;
/**
 * Corresponds to value <span class='attr-value'>'userSpaceOnUse'</span>.
 * @constant
 * @type Number
 */
SVGUnitTypes.SVG_UNIT_TYPE_USERSPACEONUSE = 1;
/**
 * Corresponds to value <span class='attr-value'>'objectBoundingBox'</span>.
 * @constant
 * @type Number
 */
SVGUnitTypes.SVG_UNIT_TYPE_OBJECTBOUNDINGBOX = 2;

/**
 * The {@link SVGStylable} interface is implemented on all objects corresponding
 * to SVG elements that can have <code>style attribute</code>, <code>class</code>
 * and <code>presentation attributes</code> specified on them.  It is thus
 * an ancestor interface for many of the interfaces defined in this specification.
 * @constructor
 */
function SVGStylable() {
}
SVGStylable.prototype = {};

// Implementation of the svg::SVGStylable W3C IDL interface
/**
 * Corresponds to attribute <code>class</code> on the given element.
 * @type SVGAnimatedString
 */
SVGStylable.prototype.className = new SVGAnimatedString();
/**
 * Corresponds to attribute <code>style attribute</code> on the given element.
 * If the user agent does not support <a href='styling.html#StylingWithCSS'>styling
 * with CSS</a>, then this attribute must always have the value of null.
 * @type CSSStyleDeclaration
 */
SVGStylable.prototype.style = new CSSStyleDeclaration();
/**
 * Returns the base (i.e., static) value of a given <code>presentation   attribute</code>
 * as an object of type <code>CSSValue</code>. The returned object is live;
 * changes to the objects represent immediate changes to the objects to which
 * the <code>CSSValue</code> is attached. <p>Note: The <code>getPresentationAttribute</code>
 * method is deprecated, and may be dropped from future versions of the SVG
 * specification.</p>
 * @param {String} name The name of the presentation attribute whose value
 * is to be   returned.
 * @returns {CSSValue} The static/base value of the given <code>presentation
 * attribute</code>   as a <code>CSSValue</code>, or null if the given attribute
 * does not have a   specified value.
 */
SVGStylable.prototype.getPresentationAttribute = function (name) {
  return new CSSValue();
};

/**
 * Interface {@link SVGLocatable} is for all elements which either have a
 * <code>transform</code> attribute or don't have a <code>transform</code>
 * attribute but whose content can have a bounding box in current user space.
 * @constructor
 */
function SVGLocatable() {
}
SVGLocatable.prototype = {};

// Implementation of the svg::SVGLocatable W3C IDL interface
/**
 * The element which established the current viewport. Often, the nearest
 * ancestor <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement' title='svg
 * element specification'>svg</a> element. Null if the current element is
 * the outermost <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element.
 * @type SVGElement
 */
SVGLocatable.prototype.nearestViewportElement = new SVGElement();
/**
 * The farthest ancestor <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element. Null if the current
 * element is the outermost <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element.
 * @type SVGElement
 */
SVGLocatable.prototype.farthestViewportElement = new SVGElement();
/**
 * Returns the tight bounding box in current user space (i.e., after application
 * of the <code>transform</code> attribute, if any) on the geometry of all
 * contained graphics elements, exclusive of stroking, clipping, masking and
 * filter effects). Note that getBBox must return the actual bounding box
 * at the time the method was called, even in case the element has not yet
 * been rendered.
 * @returns {SVGRect} An {@link SVGRect} object that defines the bounding
 * box.
 */
SVGLocatable.prototype.getBBox = function () {
  return new SVGRect();
};
/**
 * Returns the transformation matrix from current user units (i.e., after
 * application of the <code>transform</code> attribute, if any) to the viewport
 * coordinate system for the {@link SVGLocatable#nearestViewportElement}.
 * @returns {SVGMatrix} An {@link SVGMatrix} object that defines the CTM.
 */
SVGLocatable.prototype.getCTM = function () {
  return new SVGMatrix();
};
/**
 * Returns the transformation matrix from current user units (i.e., after
 * application of the <code>transform</code> attribute, if any) to the parent
 * user agent's notice of a "pixel". For display devices, ideally this represents
 * a physical screen pixel. For other devices or environments where physical
 * pixel sizes are not known, then an algorithm similar to the CSS2 definition
 * of a "pixel" can be used instead.  Note that null is returned if this element
 * is not hooked into the document tree. This method would have been more
 * aptly named as <code>getClientCTM</code>, but the name <code>getScreenCTM</code>
 * is kept for historical reasons.
 * @returns {SVGMatrix} An {@link SVGMatrix} object that defines the given
 * transformation matrix.
 */
SVGLocatable.prototype.getScreenCTM = function () {
  return new SVGMatrix();
};
/**
 * Returns the transformation matrix from the user coordinate system on the
 * current element (after application of the <code>transform</code> attribute,
 * if any) to the user coordinate system on parameter <var>element</var> (after
 * application of its <code>transform</code> attribute, if any).
 * @param {SVGElement} element The target element.
 * @returns {SVGMatrix} An {@link SVGMatrix} object that defines the transformation.
 * @throws {SVGException} (SVG_MATRIX_NOT_INVERTABLE) Raised if the currently
 * defined transformation matrices make it impossible to compute the   given
 * matrix (e.g., because one of the transformations is singular).
 */
SVGLocatable.prototype.getTransformToElement = function (element) {
  return new SVGMatrix();
};

/**
 * Interface {@link SVGTransformable} contains properties and methods that
 * apply to all elements which have attribute {@link SVGTransformable#transform}.
 * @constructor
 * @augments SVGLocatable
 */
function SVGTransformable() {
}
SVGTransformable.prototype = new SVGLocatable();

// Implementation of the svg::SVGTransformable W3C IDL interface
/**
 * Corresponds to attribute {@link SVGTransformable#transform} on the given
 * element.
 * @type SVGAnimatedTransformList
 */
SVGTransformable.prototype.transform = new SVGAnimatedTransformList();

/**
 * Interface {@link SVGTests} defines an interface which applies to all elements
 * which have attributes {@link SVGTests#requiredFeatures}, {@link SVGTests#requiredExtensions}
 * and {@link SVGTests#systemLanguage}.
 * @constructor
 */
function SVGTests() {
}
SVGTests.prototype = {};

// Implementation of the svg::SVGTests W3C IDL interface
/**
 * Corresponds to attribute {@link SVGTests#requiredFeatures} on the given
 * element.
 * @type SVGStringList
 */
SVGTests.prototype.requiredFeatures = new SVGStringList();
/**
 * Corresponds to attribute {@link SVGTests#requiredExtensions} on the given
 * element.
 * @type SVGStringList
 */
SVGTests.prototype.requiredExtensions = new SVGStringList();
/**
 * Corresponds to attribute {@link SVGTests#systemLanguage} on the given element.
 * @type SVGStringList
 */
SVGTests.prototype.systemLanguage = new SVGStringList();
/**
 * Returns true if the user agent supports the given extension, specified
 * by a URI.
 * @param {String} extension The name of the extension, expressed as a URI.
 * @returns {Boolean} True or false, depending on whether the given extension
 * is   supported.
 */
SVGTests.prototype.hasExtension = function (extension) {
  return false;
};

/**
 * Interface {@link SVGLangSpace} defines an interface which applies to all
 * elements which have attributes <code>xml:lang</code> and <code>xml:space</code>.
 * @constructor
 */
function SVGLangSpace() {
}
SVGLangSpace.prototype = {};

// Implementation of the svg::SVGLangSpace W3C IDL interface
/**
 * Corresponds to attribute <code>xml:lang</code> on the given element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an   attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGLangSpace.prototype.xmllang = "";
/**
 * Corresponds to attribute <code>xml:space</code> on the given element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an   attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGLangSpace.prototype.xmlspace = "";

/**
 * Interface {@link SVGExternalResourcesRequired} defines an interface which
 * applies to all elements where this element or one of its descendants can
 * reference an external resource.
 * @constructor
 */
function SVGExternalResourcesRequired() {
}
SVGExternalResourcesRequired.prototype = {};

// Implementation of the svg::SVGExternalResourcesRequired W3C IDL interface
/**
 * Corresponds to attribute {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * on the given element. Note that the SVG DOM defines the attribute {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * as being of type {@link SVGAnimatedBoolean}, whereas the SVG language definition
 * says that {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * is not animated. Because the SVG language definition states that {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * cannot be animated, the {@link SVGAnimatedBoolean#animVal} will always
 * be the same as the {@link SVGAnimatedBoolean#baseVal}.
 * @type SVGAnimatedBoolean
 */
SVGExternalResourcesRequired.prototype.externalResourcesRequired = new SVGAnimatedBoolean();

/**
 * Interface {@link SVGFitToViewBox} defines DOM attributes that apply to
 * elements which have XML attributes {@link SVGFitToViewBox#viewBox} and
 * {@link SVGFitToViewBox#preserveAspectRatio}.
 * @constructor
 */
function SVGFitToViewBox() {
}
SVGFitToViewBox.prototype = {};

// Implementation of the svg::SVGFitToViewBox W3C IDL interface
/**
 * Corresponds to attribute {@link SVGFitToViewBox#viewBox} on the given element.
 * @type SVGAnimatedRect
 */
SVGFitToViewBox.prototype.viewBox = new SVGAnimatedRect();
/**
 * Corresponds to attribute {@link SVGFitToViewBox#preserveAspectRatio} on
 * the given element.
 * @type SVGAnimatedPreserveAspectRatio
 */
SVGFitToViewBox.prototype.preserveAspectRatio = new SVGAnimatedPreserveAspectRatio();

/**
 * The {@link SVGZoomAndPan} interface defines attribute {@link SVGZoomAndPan#zoomAndPan}
 * and associated constants.
 * @constructor
 */
function SVGZoomAndPan() {
}
SVGZoomAndPan.prototype = {};

// Implementation of the svg::SVGZoomAndPan W3C IDL interface
/**
 * The enumeration was set to a value that is not one of predefined types.
 * It is invalid to attempt to define a new value of this type or to attempt
 * to switch an existing value to this type.
 * @constant
 * @type Number
 */
SVGZoomAndPan.SVG_ZOOMANDPAN_UNKNOWN = 0;
/**
 * Corresponds to value <span class='attr-value'>'disable'</span>.
 * @constant
 * @type Number
 */
SVGZoomAndPan.SVG_ZOOMANDPAN_DISABLE = 1;
/**
 * Corresponds to value <span class='attr-value'>'magnify'</span>.
 * @constant
 * @type Number
 */
SVGZoomAndPan.SVG_ZOOMANDPAN_MAGNIFY = 2;
/**
 * Corresponds to attribute {@link SVGZoomAndPan#zoomAndPan} on the given
 * element. The value must be one of the SVG_ZOOMANDPAN_ constants defined
 * on this interface.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an   attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGZoomAndPan.prototype.zoomAndPan = 0;

/**
 * The interface corresponds to an SVG View Specification.
 * @constructor
 * @augments SVGZoomAndPan
 */
function SVGViewSpec() {
}
SVGViewSpec.prototype = new SVGZoomAndPan();

// Implementation of the svg::SVGViewSpec W3C IDL interface
/**
 * Corresponds to the transform setting on the SVG View Specification.
 * @type SVGTransformList
 */
SVGViewSpec.prototype.transform = new SVGTransformList();
/**
 * Corresponds to the viewTarget setting on the SVG View Specification.
 * @type SVGElement
 */
SVGViewSpec.prototype.viewTarget = new SVGElement();
/**
 * Corresponds to the viewBox setting on the SVG View Specification.
 * @type String
 */
SVGViewSpec.prototype.viewBoxString = "";
/**
 * Corresponds to the preserveAspectRatio setting on the SVG View Specification.
 * @type String
 */
SVGViewSpec.prototype.preserveAspectRatioString = "";
/**
 * Corresponds to the transform setting on the SVG View Specification.
 * @type String
 */
SVGViewSpec.prototype.transformString = "";
/**
 * Corresponds to the viewTarget setting on the SVG View Specification.
 * @type String
 */
SVGViewSpec.prototype.viewTargetString = "";

// Implementation of the svg::SVGFitToViewBox W3C IDL interface
/**
 * Corresponds to attribute {@link SVGFitToViewBox#viewBox} on the given element.
 * @type SVGAnimatedRect
 */
SVGViewSpec.prototype.viewBox = new SVGAnimatedRect();
/**
 * Corresponds to attribute {@link SVGFitToViewBox#preserveAspectRatio} on
 * the given element.
 * @type SVGAnimatedPreserveAspectRatio
 */
SVGViewSpec.prototype.preserveAspectRatio = new SVGAnimatedPreserveAspectRatio();

/**
 * Interface {@link SVGURIReference} defines an interface which applies to
 * all elements which have the collection of XLink attributes, such as <span
 * class='attr-name'>'xlink:href'</span>, which define a URI reference.
 * @constructor
 */
function SVGURIReference() {
}
SVGURIReference.prototype = {};

// Implementation of the svg::SVGURIReference W3C IDL interface
/**
 * Corresponds to attribute <span class='attr-name'>'xlink:href'</span> on
 * the given element.
 * @type SVGAnimatedString
 */
SVGURIReference.prototype.href = new SVGAnimatedString();

/**
 * <p>SVG extends interface <code>CSSRule</code> with interface {@link SVGCSSRule}
 * by adding an {@link SVGColorProfileRule} rule to allow for specification
 * of ICC-based color.</p> <p>It is likely that this extension will become
 * part of a future version of CSS and DOM.</p>
 * @constructor
 * @augments CSSRule
 */
function SVGCSSRule() {
}
SVGCSSRule.prototype = new CSSRule();

// Implementation of the svg::SVGCSSRule W3C IDL interface
/**
 * The rule is an <a href='http://www.w3.org/TR/SVG/color.html#InterfaceSVGColorProfileRule'>&#64;color-profile</a>.
 * @constant
 * @type Number
 */
SVGCSSRule.COLOR_PROFILE_RULE = 7;

/**
 * The {@link SVGRenderingIntent} interface defines the enumerated list of
 * possible values for <code>color-profile/rendering-intent</code> attributes
 * or descriptors.
 * @constructor
 */
function SVGRenderingIntent() {
}
SVGRenderingIntent.prototype = {};

// Implementation of the svg::SVGRenderingIntent W3C IDL interface
/**
 * The type is not one of predefined types. It is invalid to attempt to define
 * a new value of this type or to attempt to switch an existing value to this
 * type.
 * @constant
 * @type Number
 */
SVGRenderingIntent.RENDERING_INTENT_UNKNOWN = 0;
/**
 * Corresponds to a value of <span class ='attr-value'>'auto'</span>.
 * @constant
 * @type Number
 */
SVGRenderingIntent.RENDERING_INTENT_AUTO = 1;
/**
 * Corresponds to a value of <span class ='attr-value'>'perceptual'</span>.
 * @constant
 * @type Number
 */
SVGRenderingIntent.RENDERING_INTENT_PERCEPTUAL = 2;
/**
 * Corresponds to a value of <span class ='attr-value'>'relative-colorimetric'</span>.
 * @constant
 * @type Number
 */
SVGRenderingIntent.RENDERING_INTENT_RELATIVE_COLORIMETRIC = 3;
/**
 * Corresponds to a value of <span class ='attr-value'>'saturation'</span>.
 * @constant
 * @type Number
 */
SVGRenderingIntent.RENDERING_INTENT_SATURATION = 4;
/**
 * Corresponds to a value of <span class='attr-value'>'absolute-colorimetric'</span>.
 * @constant
 * @type Number
 */
SVGRenderingIntent.RENDERING_INTENT_ABSOLUTE_COLORIMETRIC = 5;

/**
 * <p>When an <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element is embedded inline as
 * a component of a document from another namespace, such as when an <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element is embedded inline within
 * an XHTML document [<a href="refs.html#ref-XHTML">XHTML</a>], then an {@link SVGDocument}
 * object will not exist; instead, the root object in the document object
 * hierarchy will be a Document object of a different type, such as an HTMLDocument
 * object.</p> <p>However, an {@link SVGDocument} object will indeed exist
 * when the root element of the XML document hierarchy is an <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element, such as when viewing
 * a stand-alone SVG file (i.e., a file with MIME type "image/svg+xml"). In
 * this case, the {@link SVGDocument} object will be the root object of the
 * document object model hierarchy.</p> <p>In the case where an SVG document
 * is embedded by reference, such as when an XHTML document has an <span class="element-name">'object'</span>
 * element whose <span class="attr-name">'href'</span> attribute references
 * an SVG document (i.e., a document whose MIME type is "image/svg+xml" and
 * whose root element is thus an <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element), there will exist two
 * distinct DOM hierarchies. The first DOM hierarchy will be for the referencing
 * document (e.g., an XHTML document). The second DOM hierarchy will be for
 * the referenced SVG document.  In this second DOM hierarchy, the root object
 * of the document object model hierarchy is an {@link SVGDocument} object.</p>
 * <p>The {@link SVGDocument} interface contains a similar list of attributes
 * and methods to the HTMLDocument interface described in the <a href="http://www.w3.org/TR/REC-DOM-Level-1/level-one-html.html">Document
 * Object Model (HTML) Level 1</a> chapter of the [<a href="refs.html#ref-DOM1">DOM1</a>]
 * specification.</p>
 * @constructor
 * @augments Document
 */
function SVGDocument() {
}
SVGDocument.prototype = new Document();

// Implementation of the svg::SVGDocument W3C IDL interface
/**
 * The title of a document as specified by the <a href='http://www.w3.org/TR/SVG11/struct.html#TitleElement'
 * title='title element specification'>title</a> sub-element of the <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> root element (i.e., <span class="code-fragment">&lt;svg&gt;&lt;title&gt;Here
 * is the title&lt;/title&gt;...&lt;/svg&gt;</span>)
 * @type String
 */
SVGDocument.prototype.title = "";
/**
 * Returns the URI of the page that linked to this page. The value is an empty
 * string if the user navigated to the page directly (not through a link,
 * but, for example, via a bookmark).
 * @type String
 */
SVGDocument.prototype.referrer = "";
/**
 * The domain name of the server that served the document, or a null string
 * if the server cannot be identified by a domain name.
 * @type String
 */
SVGDocument.prototype.domain = "";
/**
 * The complete URI of the document.
 * @type String
 */
SVGDocument.prototype.URL = "";
/**
 * The root <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement' title='svg
 * element specification'>svg</a> in the document hierarchy.
 * @type SVGSVGElement
 */
SVGDocument.prototype.rootElement = new SVGSVGElement();

/**
 * <p>A key interface definition is the {@link SVGSVGElement} interface, which
 * is the interface that corresponds to the <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element. This interface contains
 * various miscellaneous commonly-used utility methods, such as matrix operations
 * and the ability to control the time of redraw on visual rendering devices.</p>
 * <p>{@link SVGSVGElement} extends <code>ViewCSS</code> and <code>DocumentCSS</code>
 * to provide access to the computed values of properties and the override
 * style sheet as described in <a href="http://www.w3.org/TR/2000/REC-DOM-Level-2-Style-20001113/"><cite>DOM
 * Level 2 Style</cite></a> [<a href="refs.html#ref-DOM2STYLE">DOM2STYLE</a>].</p>
 * @constructor
 * @augments SVGElement
 */
function SVGSVGElement() {
}
SVGSVGElement.prototype = new SVGElement();

// Implementation of the svg::SVGSVGElement W3C IDL interface
/**
 * Corresponds to attribute {@link SVGSVGElement#x} on the given <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element.
 * @type SVGAnimatedLength
 */
SVGSVGElement.prototype.x = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGSVGElement#y} on the given <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element.
 * @type SVGAnimatedLength
 */
SVGSVGElement.prototype.y = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGSVGElement#width} on the given <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element.
 * @type SVGAnimatedLength
 */
SVGSVGElement.prototype.width = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGSVGElement#height} on the given <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element.
 * @type SVGAnimatedLength
 */
SVGSVGElement.prototype.height = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGSVGElement#contentScriptType} on the
 * given <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement' title='svg
 * element specification'>svg</a> element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to   change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGSVGElement.prototype.contentScriptType = "";
/**
 * Corresponds to attribute {@link SVGSVGElement#contentStyleType} on the
 * given <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement' title='svg
 * element specification'>svg</a> element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to   change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGSVGElement.prototype.contentStyleType = "";
/**
 * <p>The position and size of the viewport (implicit or explicit) that corresponds
 * to this <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement' title='svg
 * element specification'>svg</a> element. When the user agent is actually
 * rendering the content, then the position and size values represent the
 * actual values when rendering. The position and size values are unitless
 * values in the coordinate system of the parent element. If no parent element
 * exists (i.e., <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element represents the root of
 * the document tree), if this SVG document is embedded as part of another
 * document (e.g., via the HTML <span class='element-name'>'object'</span>
 * element), then the position and size are unitless values in the coordinate
 * system of the parent document. (If the parent uses CSS or XSL layout, then
 * unitless values represent pixel units for the current CSS or XSL viewport,
 * as described in the CSS2 specification.) If the parent element does not
 * have a coordinate system, then the user agent should provide reasonable
 * default values for this attribute.</p> <p>The {@link SVGRect} object is
 * <a href="types.html#ReadOnlyRect">read only</a>.</p>
 * @type SVGRect
 */
SVGSVGElement.prototype.viewport = new SVGRect();
/**
 * Size of a pixel units (as defined by CSS2) along the x-axis of the viewport,
 * which represents a unit somewhere in the range of 70dpi to 120dpi, and,
 * on systems that support this, might actually match the characteristics
 * of the target medium. On systems where it is impossible to know the size
 * of a pixel, a suitable default pixel size is provided.
 * @type Number
 */
SVGSVGElement.prototype.pixelUnitToMillimeterX = 0;
/**
 * Corresponding size of a pixel unit along the y-axis of the viewport.
 * @type Number
 */
SVGSVGElement.prototype.pixelUnitToMillimeterY = 0;
/**
 * User interface (UI) events in DOM Level 2 indicate the screen positions
 * at which the given UI event occurred. When the user agent actually knows
 * the physical size of a "screen unit", this attribute will express that
 * information; otherwise, user agents will provide a suitable default value
 * such as .28mm.
 * @type Number
 */
SVGSVGElement.prototype.screenPixelToMillimeterX = 0;
/**
 * Corresponding size of a screen pixel along the y-axis of the viewport.
 * @type Number
 */
SVGSVGElement.prototype.screenPixelToMillimeterY = 0;
/**
 * The initial view (i.e., before magnification and panning) of the current
 * innermost SVG document fragment can be either the "standard" view (i.e.,
 * based on attributes on the <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element such as <code>svg/viewBox</code>)
 * or to a "custom" view (i.e., a hyperlink into a particular <a href='http://www.w3.org/TR/SVG11/linking.html#ViewElement'
 * title='view element specification'>view</a> or other element - see <a href="linking.html#LinksIntoSVG">Linking
 * into SVG content: URI fragments and SVG views</a>). If the initial view
 * is the "standard" view, then this attribute is false. If the initial view
 * is a "custom" view, then this attribute is true.
 * @type Boolean
 */
SVGSVGElement.prototype.useCurrentView = false;
/**
 * <p>The definition of the initial view (i.e., before magnification and panning)
 * of the current innermost SVG document fragment. The meaning depends on
 * the situation:</p> <ul>   <li>     If the initial view was a "standard"
 * view, then:     <ul>       <li>the values for {@link SVGFitToViewBox#viewBox},
 * {@link SVGFitToViewBox#preserveAspectRatio} and       {@link SVGZoomAndPan#zoomAndPan}
 * within {@link SVGSVGElement#currentView}       will match the values for
 * the corresponding DOM attributes       that are on SVGSVGElement directly</li>
 * <li>the values for {@link SVGViewSpec#transform} and       {@link SVGViewSpec#viewTarget}
 * within {@link SVGSVGElement#currentView}       will be null</li>     </ul>
 * </li>   <li>     If the initial view was a link into a <a href='http://www.w3.org/TR/SVG11/linking.html#ViewElement'
 * title='view element specification'>view</a> element, then:     <ul>
 * <li>the values for {@link SVGFitToViewBox#viewBox},       {@link SVGFitToViewBox#preserveAspectRatio}
 * and       {@link SVGZoomAndPan#zoomAndPan} within {@link SVGSVGElement#currentView}
 * will correspond to the corresponding attributes for the       given <a
 * href='http://www.w3.org/TR/SVG11/linking.html#ViewElement' title='view
 * element specification'>view</a> element</li>       <li>the values for {@link SVGViewSpec#transform}
 * and       {@link SVGViewSpec#viewTarget} within {@link SVGSVGElement#currentView}
 * will be null</li>     </ul>   </li>   <li>     If the initial view was
 * a link into another element (i.e.,     other than a <a href='http://www.w3.org/TR/SVG11/linking.html#ViewElement'
 * title='view element specification'>view</a>), then:     <ul>       <li>the
 * values for {@link SVGFitToViewBox#viewBox},       {@link SVGFitToViewBox#preserveAspectRatio}
 * and       {@link SVGZoomAndPan#zoomAndPan} within {@link SVGSVGElement#currentView}
 * will match the values for the corresponding DOM attributes       that are
 * on SVGSVGElement directly for the closest ancestor       <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element</li>       <li>the values
 * for {@link SVGViewSpec#transform} within       {@link SVGSVGElement#currentView}
 * will be null</li>       <li>the {@link SVGViewSpec#viewTarget} within
 * {@link SVGSVGElement#currentView} will represent the target of the
 * link</li>     </ul>   </li>   <li>     If the initial view was a link into
 * the SVG document fragment     using an SVG view specification fragment
 * identifier (i.e.,     #svgView(...)), then:     <ul>       <li>the values
 * for {@link SVGFitToViewBox#viewBox},       {@link SVGFitToViewBox#preserveAspectRatio},
 * {@link SVGZoomAndPan#zoomAndPan},       {@link SVGViewSpec#transform} and
 * {@link SVGViewSpec#viewTarget} within {@link SVGSVGElement#currentView}
 * will correspond to the values from the SVG view       specification fragment
 * identifier</li>     </ul>   </li> </ul> <p>The object itself and its contents
 * are both read only.</p>
 * @type SVGViewSpec
 */
SVGSVGElement.prototype.currentView = new SVGViewSpec();
/**
 * On an outermost <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element, this attribute indicates
 * the current scale factor relative to the initial view to take into account
 * user magnification and panning operations, as described under <a href='interact.html#ZoomAndPanAttribute'>Magnification
 * and panning</a>. DOM attributes {@link SVGSVGElement#currentScale} and
 * {@link SVGSVGElement#currentTranslate} are equivalent to the 2x3 matrix
 * [a b c d e f] = [currentScale 0 0 currentScale currentTranslate.x currentTranslate.y].
 * If "magnification" is enabled (i.e., <span class='attr-value'>zoomAndPan="magnify"</span>),
 * then the effect is as if an extra transformation were placed at the outermost
 * level on the SVG document fragment (i.e., outside the outermost <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element). <p>When accessed on
 * an <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement' title='svg
 * element specification'>svg</a> element that is not an outermost <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element, it is undefined what
 * behavior this attribute has.</p>
 * @type Number
 */
SVGSVGElement.prototype.currentScale = 0;
/**
 * On an outermost <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element, the corresponding translation
 * factor that takes into account user "magnification". <p>When accessed on
 * an <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement' title='svg
 * element specification'>svg</a> element that is not an outermost <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element, it is undefined what
 * behavior this attribute has.</p>
 * @type SVGPoint
 */
SVGSVGElement.prototype.currentTranslate = new SVGPoint();
/**
 * Takes a time-out value which indicates that redraw shall not occur until:
 * <ol>   <li>the corresponding unsuspendRedraw() call has been made,</li>
 * <li>an unsuspendRedrawAll() call has been made, or</li>   <li>its timer
 * has timed out.</li> </ol> <p>In environments that do not support interactivity
 * (e.g., print media), then redraw shall not be suspended. Calls to suspendRedraw()
 * and unsuspendRedraw() should, but need not be, made in balanced pairs.</p>
 * <p>To suspend redraw actions as a collection of SVG DOM changes occur,
 * precede the changes to the SVG DOM with a method call similar to:</p> <pre>suspendHandleID
 * = suspendRedraw(maxWaitMilliseconds);</pre> <p>and follow the changes with
 * a method call similar to:</p> <pre>unsuspendRedraw(suspendHandleID);</pre>
 * <p>Note that multiple suspendRedraw calls can be used at once and that
 * each such method call is treated independently of the other suspendRedraw
 * method calls.</p>
 * @param {Number} maxWaitMilliseconds The amount of time in milliseconds
 * to hold off before redrawing the device. Values greater than 60 seconds
 * will be truncated down to 60 seconds.
 * @returns {Number} A number which acts as a unique identifier for the given
 * suspendRedraw() call. This value must be passed as the parameter to the
 * corresponding unsuspendRedraw() method call.
 */
SVGSVGElement.prototype.suspendRedraw = function (maxWaitMilliseconds) {
  return 0;
};
/**
 * Cancels a specified suspendRedraw() by providing a unique suspend handle
 * ID that was returned by a previous suspendRedraw() call.
 * @param {Number} suspendHandleID A number which acts as a unique identifier
 * for   the desired suspendRedraw() call. The number supplied must be a value
 * returned from a previous call to suspendRedraw(). If an invalid   handle
 * ID value is provided then the request to unsuspendRedraw() is   silently
 * ignored.
 */
SVGSVGElement.prototype.unsuspendRedraw = function (suspendHandleID) {
};
/**
 * Cancels all currently active suspendRedraw() method calls. This method
 * is most useful at the very end of a set of SVG DOM calls to ensure that
 * all pending suspendRedraw() method calls have been cancelled.
 */
SVGSVGElement.prototype.unsuspendRedrawAll = function () {
};
/**
 * In rendering environments supporting interactivity, forces the user agent
 * to immediately redraw all regions of the viewport that require updating.
 */
SVGSVGElement.prototype.forceRedraw = function () {
};
/**
 * Suspends (i.e., pauses) all currently running animations that are defined
 * within the SVG document fragment corresponding to this <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element, causing the animation
 * clock corresponding to this document fragment to stand still until it is
 * unpaused.
 */
SVGSVGElement.prototype.pauseAnimations = function () {
};
/**
 * Unsuspends (i.e., unpauses) currently running animations that are defined
 * within the SVG document fragment, causing the animation clock to continue
 * from the time at which it was suspended.
 */
SVGSVGElement.prototype.unpauseAnimations = function () {
};
/**
 * Returns true if this SVG document fragment is in a paused state.
 * @returns {Boolean} Boolean indicating whether this SVG document fragment
 * is in a   paused state.
 */
SVGSVGElement.prototype.animationsPaused = function () {
  return false;
};
/**
 * Returns the current time in seconds relative to the start time for the
 * current SVG document fragment. If <span class="dom-method-name">getCurrentTime</span>
 * is called before the document timeline has begun (for example, by script
 * running in a <a href='http://www.w3.org/TR/SVG11/script.html#ScriptElement'
 * title='script element specification'>script</a>  element before the document's
 * <a href="interact.html#LoadEvent">SVGLoad</a> event is dispatched), then
 * 0 is returned.
 * @returns {Number} The current time in seconds, or 0 if the document timeline
 * has not yet begun.
 */
SVGSVGElement.prototype.getCurrentTime = function () {
  return 0;
};
/**
 * Adjusts the clock for this SVG document fragment, establishing a new current
 * time. If <span class="dom-method-name">setCurrentTime</span> is called
 * before the document timeline has begun (for example, by script running
 * in a <a href='http://www.w3.org/TR/SVG11/script.html#ScriptElement' title='script
 * element specification'>script</a> element before the document's <a href="interact.html#LoadEvent">SVGLoad</a>
 * event is dispatched), then the value of <var>seconds</var> in the last
 * invocation of the method gives the time that the document will seek to
 * once the document timeline has begun.
 * @param {Number} seconds The new current time in seconds relative to the
 * start   time for the current SVG document fragment.
 */
SVGSVGElement.prototype.setCurrentTime = function (seconds) {
};
/**
 * Returns the list of graphics elements whose rendered content intersects
 * the supplied rectangle. Each candidate graphics element is to be considered
 * a match only if the same graphics element can be a <a href="interact.html#PointerEventsProperty">target
 * of pointer events</a> as defined in <code>pointer-events</code> processing.
 * @param {SVGRect} rect The test rectangle. The values are in the <code>initial
 * coordinate   system</code> for the current <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element.
 * @param {SVGElement} referenceElement If not null, then any intersected
 * element that   doesn't have the referenceElement as ancestor must not be
 * included   in the returned NodeList.
 * @returns {NodeList} A list of Elements whose content intersects the supplied
 * rectangle.  This {@link NodeList} must be implemented identically to
 * the {@link NodeList} interface as defined in DOM Level 2 Core   ([<a href="refs.html#ref-DOM2">DOM2</a>],
 * section 1.2) with the   exception that the interface is not   <a href="http://www.w3.org/TR/DOM-Level-2-Core/core.html#td-live">live</a>.
 */
SVGSVGElement.prototype.getIntersectionList = function (rect, referenceElement) {
  return new NodeList();
};
/**
 * Returns the list of graphics elements whose rendered content is entirely
 * contained within the supplied rectangle. Each candidate graphics element
 * is to be considered a match only if the same graphics element can be a
 * <a href="interact.html#PointerEventsProperty">target of pointer events</a>
 * as defined in <code>pointer-events</code> processing.
 * @param {SVGRect} rect The test rectangle. The values are in the <code>initial
 * coordinate   system</code> for the current <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element.
 * @param {SVGElement} referenceElement If not null, then any intersected
 * element that   doesn't have the referenceElement as ancestor must not be
 * included   in the returned NodeList.
 * @returns {NodeList} A list of Elements whose content is enclosed by the
 * supplied   rectangle.  This {@link NodeList} must be implemented identically
 * to   the {@link NodeList} interface as defined in DOM Level 2 Core   ([<a
 * href="refs.html#ref-DOM2">DOM2</a>], section 1.2) with the   exception
 * that the interface is not   <a href="http://www.w3.org/TR/DOM-Level-2-Core/core.html#td-live">live</a>.
 */
SVGSVGElement.prototype.getEnclosureList = function (rect, referenceElement) {
  return new NodeList();
};
/**
 * Returns true if the rendered content of the given element intersects the
 * supplied rectangle. Each candidate graphics element is to be considered
 * a match only if the same graphics element can be a <a href="interact.html#PointerEventsProperty">target
 * of pointer events</a> as defined in <code>pointer-events</code> processing.
 * @param {SVGElement} element The element on which to perform the given test.
 * @param {SVGRect} rect The test rectangle. The values are in the <code>initial
 * coordinate   system</code> for the current <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element.
 * @returns {Boolean} True or false, depending on whether the given element
 * intersects   the supplied rectangle.
 */
SVGSVGElement.prototype.checkIntersection = function (element, rect) {
  return false;
};
/**
 * Returns true if the rendered content of the given element is entirely contained
 * within the supplied rectangle. Each candidate graphics element is to be
 * considered a match only if the same graphics element can be a <a href="interact.html#PointerEventsProperty">target
 * of pointer events</a> as defined in <code>pointer-events</code> processing.
 * @param {SVGElement} element The element on which to perform the given test.
 * @param {SVGRect} rect The test rectangle. The values are in the <code>initial
 * coordinate   system</code> for the current <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element.
 * @returns {Boolean} True or false, depending on whether the given element
 * is enclosed   by the supplied rectangle.
 */
SVGSVGElement.prototype.checkEnclosure = function (element, rect) {
  return false;
};
/**
 * Unselects any selected objects, including any selections of text strings
 * and type-in bars.
 */
SVGSVGElement.prototype.deselectAll = function () {
};
/**
 * Creates an {@link SVGNumber} object outside of any document trees. The
 * object is initialized to a value of zero.
 * @returns {SVGNumber} An {@link SVGNumber} object.
 */
SVGSVGElement.prototype.createSVGNumber = function () {
  return new SVGNumber();
};
/**
 * Creates an {@link SVGLength} object outside of any document trees. The
 * object is initialized to the value of 0 user units.
 * @returns {SVGLength} An {@link SVGLength} object.
 */
SVGSVGElement.prototype.createSVGLength = function () {
  return new SVGLength();
};
/**
 * Creates an {@link SVGAngle} object outside of any document trees. The object
 * is initialized to the value 0 degrees (unitless).
 * @returns {SVGAngle} An {@link SVGAngle} object.
 */
SVGSVGElement.prototype.createSVGAngle = function () {
  return new SVGAngle();
};
/**
 * Creates an {@link SVGPoint} object outside of any document trees. The object
 * is initialized to the point (0,0) in the user coordinate system.
 * @returns {SVGPoint} An {@link SVGPoint} object.
 */
SVGSVGElement.prototype.createSVGPoint = function () {
  return new SVGPoint();
};
/**
 * Creates an {@link SVGMatrix} object outside of any document trees. The
 * object is initialized to the identity matrix.
 * @returns {SVGMatrix} An {@link SVGMatrix} object.
 */
SVGSVGElement.prototype.createSVGMatrix = function () {
  return new SVGMatrix();
};
/**
 * Creates an {@link SVGRect} object outside of any document trees. The object
 * is initialized such that all values are set to 0 user units.
 * @returns {SVGRect} An {@link SVGRect} object.
 */
SVGSVGElement.prototype.createSVGRect = function () {
  return new SVGRect();
};
/**
 * Creates an {@link SVGTransform} object outside of any document trees. The
 * object is initialized to an identity matrix transform (SVG_TRANSFORM_MATRIX).
 * @returns {SVGTransform} An {@link SVGTransform} object.
 */
SVGSVGElement.prototype.createSVGTransform = function () {
  return new SVGTransform();
};
/**
 * <p xmlns:edit="http://xmlns.grorg.org/SVGT12NG/"> Creates an {@link SVGTransform}
 * object outside of any document trees. The object is initialized to the
 * given matrix transform (i.e., SVG_TRANSFORM_MATRIX).  The values from the
 * parameter <var>matrix</var> are copied, the <var>matrix</var> parameter
 * is not adopted as <a edit:format="expanded">SVGTransform::matrix</a>. </p>
 * @param {SVGMatrix} matrix The transform matrix.
 * @returns {SVGTransform} An {@link SVGTransform} object.
 */
SVGSVGElement.prototype.createSVGTransformFromMatrix = function (matrix) {
  return new SVGTransform();
};
/**
 * Searches this SVG document fragment (i.e., the search is restricted to
 * a subset of the document tree) for an Element whose id is given by <var>elementId</var>.
 * If an Element is found, that Element is returned. If no such element exists,
 * returns null. Behavior is not defined if more than one element has this
 * id.
 * @param {String} elementId The unique id value for an element.
 * @returns {Element} The matching element.
 */
SVGSVGElement.prototype.getElementById = function (elementId) {
  return new Element();
};

// Implementation of the svg::SVGExternalResourcesRequired W3C IDL interface
/**
 * Corresponds to attribute {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * on the given element. Note that the SVG DOM defines the attribute {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * as being of type {@link SVGAnimatedBoolean}, whereas the SVG language definition
 * says that {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * is not animated. Because the SVG language definition states that {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * cannot be animated, the {@link SVGAnimatedBoolean#animVal} will always
 * be the same as the {@link SVGAnimatedBoolean#baseVal}.
 * @type SVGAnimatedBoolean
 */
SVGSVGElement.prototype.externalResourcesRequired = new SVGAnimatedBoolean();

// Implementation of the svg::SVGFitToViewBox W3C IDL interface
/**
 * Corresponds to attribute {@link SVGFitToViewBox#viewBox} on the given element.
 * @type SVGAnimatedRect
 */
SVGSVGElement.prototype.viewBox = new SVGAnimatedRect();
/**
 * Corresponds to attribute {@link SVGFitToViewBox#preserveAspectRatio} on
 * the given element.
 * @type SVGAnimatedPreserveAspectRatio
 */
SVGSVGElement.prototype.preserveAspectRatio = new SVGAnimatedPreserveAspectRatio();

// Implementation of the svg::SVGLangSpace W3C IDL interface
/**
 * Corresponds to attribute <code>xml:lang</code> on the given element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an   attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGSVGElement.prototype.xmllang = "";
/**
 * Corresponds to attribute <code>xml:space</code> on the given element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an   attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGSVGElement.prototype.xmlspace = "";

// Implementation of the svg::SVGLocatable W3C IDL interface
/**
 * The element which established the current viewport. Often, the nearest
 * ancestor <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement' title='svg
 * element specification'>svg</a> element. Null if the current element is
 * the outermost <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element.
 * @type SVGElement
 */
SVGSVGElement.prototype.nearestViewportElement = new SVGElement();
/**
 * The farthest ancestor <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element. Null if the current
 * element is the outermost <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element.
 * @type SVGElement
 */
SVGSVGElement.prototype.farthestViewportElement = new SVGElement();
/**
 * Returns the tight bounding box in current user space (i.e., after application
 * of the <code>transform</code> attribute, if any) on the geometry of all
 * contained graphics elements, exclusive of stroking, clipping, masking and
 * filter effects). Note that getBBox must return the actual bounding box
 * at the time the method was called, even in case the element has not yet
 * been rendered.
 * @returns {SVGRect} An {@link SVGRect} object that defines the bounding
 * box.
 */
SVGSVGElement.prototype.getBBox = function () {
  return new SVGRect();
};
/**
 * Returns the transformation matrix from current user units (i.e., after
 * application of the <code>transform</code> attribute, if any) to the viewport
 * coordinate system for the {@link SVGLocatable#nearestViewportElement}.
 * @returns {SVGMatrix} An {@link SVGMatrix} object that defines the CTM.
 */
SVGSVGElement.prototype.getCTM = function () {
  return new SVGMatrix();
};
/**
 * Returns the transformation matrix from current user units (i.e., after
 * application of the <code>transform</code> attribute, if any) to the parent
 * user agent's notice of a "pixel". For display devices, ideally this represents
 * a physical screen pixel. For other devices or environments where physical
 * pixel sizes are not known, then an algorithm similar to the CSS2 definition
 * of a "pixel" can be used instead.  Note that null is returned if this element
 * is not hooked into the document tree. This method would have been more
 * aptly named as <code>getClientCTM</code>, but the name <code>getScreenCTM</code>
 * is kept for historical reasons.
 * @returns {SVGMatrix} An {@link SVGMatrix} object that defines the given
 * transformation matrix.
 */
SVGSVGElement.prototype.getScreenCTM = function () {
  return new SVGMatrix();
};
/**
 * Returns the transformation matrix from the user coordinate system on the
 * current element (after application of the <code>transform</code> attribute,
 * if any) to the user coordinate system on parameter <var>element</var> (after
 * application of its <code>transform</code> attribute, if any).
 * @param {SVGElement} element The target element.
 * @returns {SVGMatrix} An {@link SVGMatrix} object that defines the transformation.
 * @throws {SVGException} (SVG_MATRIX_NOT_INVERTABLE) Raised if the currently
 * defined transformation matrices make it impossible to compute the   given
 * matrix (e.g., because one of the transformations is singular).
 */
SVGSVGElement.prototype.getTransformToElement = function (element) {
  return new SVGMatrix();
};

// Implementation of the svg::SVGStylable W3C IDL interface
/**
 * Corresponds to attribute <code>class</code> on the given element.
 * @type SVGAnimatedString
 */
SVGSVGElement.prototype.className = new SVGAnimatedString();
/**
 * Corresponds to attribute <code>style attribute</code> on the given element.
 * If the user agent does not support <a href='styling.html#StylingWithCSS'>styling
 * with CSS</a>, then this attribute must always have the value of null.
 * @type CSSStyleDeclaration
 */
SVGSVGElement.prototype.style = new CSSStyleDeclaration();
/**
 * Returns the base (i.e., static) value of a given <code>presentation   attribute</code>
 * as an object of type <code>CSSValue</code>. The returned object is live;
 * changes to the objects represent immediate changes to the objects to which
 * the <code>CSSValue</code> is attached. <p>Note: The <code>getPresentationAttribute</code>
 * method is deprecated, and may be dropped from future versions of the SVG
 * specification.</p>
 * @param {String} name The name of the presentation attribute whose value
 * is to be   returned.
 * @returns {CSSValue} The static/base value of the given <code>presentation
 * attribute</code>   as a <code>CSSValue</code>, or null if the given attribute
 * does not have a   specified value.
 */
SVGSVGElement.prototype.getPresentationAttribute = function (name) {
  return new CSSValue();
};

// Implementation of the svg::SVGTests W3C IDL interface
/**
 * Corresponds to attribute {@link SVGTests#requiredFeatures} on the given
 * element.
 * @type SVGStringList
 */
SVGSVGElement.prototype.requiredFeatures = new SVGStringList();
/**
 * Corresponds to attribute {@link SVGTests#requiredExtensions} on the given
 * element.
 * @type SVGStringList
 */
SVGSVGElement.prototype.requiredExtensions = new SVGStringList();
/**
 * Corresponds to attribute {@link SVGTests#systemLanguage} on the given element.
 * @type SVGStringList
 */
SVGSVGElement.prototype.systemLanguage = new SVGStringList();
/**
 * Returns true if the user agent supports the given extension, specified
 * by a URI.
 * @param {String} extension The name of the extension, expressed as a URI.
 * @returns {Boolean} True or false, depending on whether the given extension
 * is   supported.
 */
SVGSVGElement.prototype.hasExtension = function (extension) {
  return false;
};

// Implementation of the svg::SVGZoomAndPan W3C IDL interface
/**
 * The enumeration was set to a value that is not one of predefined types.
 * It is invalid to attempt to define a new value of this type or to attempt
 * to switch an existing value to this type.
 * @constant
 * @type Number
 */
SVGSVGElement.SVG_ZOOMANDPAN_UNKNOWN = 0;
/**
 * Corresponds to value <span class='attr-value'>'disable'</span>.
 * @constant
 * @type Number
 */
SVGSVGElement.SVG_ZOOMANDPAN_DISABLE = 1;
/**
 * Corresponds to value <span class='attr-value'>'magnify'</span>.
 * @constant
 * @type Number
 */
SVGSVGElement.SVG_ZOOMANDPAN_MAGNIFY = 2;
/**
 * Corresponds to attribute {@link SVGZoomAndPan#zoomAndPan} on the given
 * element. The value must be one of the SVG_ZOOMANDPAN_ constants defined
 * on this interface.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an   attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGSVGElement.prototype.zoomAndPan = 0;

/**
 * The {@link SVGSVGElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/struct.html#GElement'
 * title='g element specification'>g</a> element.
 * @constructor
 * @augments SVGElement
 */
function SVGGElement() {
}
SVGGElement.prototype = new SVGElement();

// Implementation of the svg::SVGGElement W3C IDL interface

// Implementation of the svg::SVGExternalResourcesRequired W3C IDL interface
/**
 * Corresponds to attribute {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * on the given element. Note that the SVG DOM defines the attribute {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * as being of type {@link SVGAnimatedBoolean}, whereas the SVG language definition
 * says that {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * is not animated. Because the SVG language definition states that {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * cannot be animated, the {@link SVGAnimatedBoolean#animVal} will always
 * be the same as the {@link SVGAnimatedBoolean#baseVal}.
 * @type SVGAnimatedBoolean
 */
SVGGElement.prototype.externalResourcesRequired = new SVGAnimatedBoolean();

// Implementation of the svg::SVGLangSpace W3C IDL interface
/**
 * Corresponds to attribute <code>xml:lang</code> on the given element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an   attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGGElement.prototype.xmllang = "";
/**
 * Corresponds to attribute <code>xml:space</code> on the given element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an   attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGGElement.prototype.xmlspace = "";

// Implementation of the svg::SVGLocatable W3C IDL interface
/**
 * The element which established the current viewport. Often, the nearest
 * ancestor <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement' title='svg
 * element specification'>svg</a> element. Null if the current element is
 * the outermost <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element.
 * @type SVGElement
 */
SVGGElement.prototype.nearestViewportElement = new SVGElement();
/**
 * The farthest ancestor <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element. Null if the current
 * element is the outermost <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element.
 * @type SVGElement
 */
SVGGElement.prototype.farthestViewportElement = new SVGElement();
/**
 * Returns the tight bounding box in current user space (i.e., after application
 * of the <code>transform</code> attribute, if any) on the geometry of all
 * contained graphics elements, exclusive of stroking, clipping, masking and
 * filter effects). Note that getBBox must return the actual bounding box
 * at the time the method was called, even in case the element has not yet
 * been rendered.
 * @returns {SVGRect} An {@link SVGRect} object that defines the bounding
 * box.
 */
SVGGElement.prototype.getBBox = function () {
  return new SVGRect();
};
/**
 * Returns the transformation matrix from current user units (i.e., after
 * application of the <code>transform</code> attribute, if any) to the viewport
 * coordinate system for the {@link SVGLocatable#nearestViewportElement}.
 * @returns {SVGMatrix} An {@link SVGMatrix} object that defines the CTM.
 */
SVGGElement.prototype.getCTM = function () {
  return new SVGMatrix();
};
/**
 * Returns the transformation matrix from current user units (i.e., after
 * application of the <code>transform</code> attribute, if any) to the parent
 * user agent's notice of a "pixel". For display devices, ideally this represents
 * a physical screen pixel. For other devices or environments where physical
 * pixel sizes are not known, then an algorithm similar to the CSS2 definition
 * of a "pixel" can be used instead.  Note that null is returned if this element
 * is not hooked into the document tree. This method would have been more
 * aptly named as <code>getClientCTM</code>, but the name <code>getScreenCTM</code>
 * is kept for historical reasons.
 * @returns {SVGMatrix} An {@link SVGMatrix} object that defines the given
 * transformation matrix.
 */
SVGGElement.prototype.getScreenCTM = function () {
  return new SVGMatrix();
};
/**
 * Returns the transformation matrix from the user coordinate system on the
 * current element (after application of the <code>transform</code> attribute,
 * if any) to the user coordinate system on parameter <var>element</var> (after
 * application of its <code>transform</code> attribute, if any).
 * @param {SVGElement} element The target element.
 * @returns {SVGMatrix} An {@link SVGMatrix} object that defines the transformation.
 * @throws {SVGException} (SVG_MATRIX_NOT_INVERTABLE) Raised if the currently
 * defined transformation matrices make it impossible to compute the   given
 * matrix (e.g., because one of the transformations is singular).
 */
SVGGElement.prototype.getTransformToElement = function (element) {
  return new SVGMatrix();
};

// Implementation of the svg::SVGStylable W3C IDL interface
/**
 * Corresponds to attribute <code>class</code> on the given element.
 * @type SVGAnimatedString
 */
SVGGElement.prototype.className = new SVGAnimatedString();
/**
 * Corresponds to attribute <code>style attribute</code> on the given element.
 * If the user agent does not support <a href='styling.html#StylingWithCSS'>styling
 * with CSS</a>, then this attribute must always have the value of null.
 * @type CSSStyleDeclaration
 */
SVGGElement.prototype.style = new CSSStyleDeclaration();
/**
 * Returns the base (i.e., static) value of a given <code>presentation   attribute</code>
 * as an object of type <code>CSSValue</code>. The returned object is live;
 * changes to the objects represent immediate changes to the objects to which
 * the <code>CSSValue</code> is attached. <p>Note: The <code>getPresentationAttribute</code>
 * method is deprecated, and may be dropped from future versions of the SVG
 * specification.</p>
 * @param {String} name The name of the presentation attribute whose value
 * is to be   returned.
 * @returns {CSSValue} The static/base value of the given <code>presentation
 * attribute</code>   as a <code>CSSValue</code>, or null if the given attribute
 * does not have a   specified value.
 */
SVGGElement.prototype.getPresentationAttribute = function (name) {
  return new CSSValue();
};

// Implementation of the svg::SVGTests W3C IDL interface
/**
 * Corresponds to attribute {@link SVGTests#requiredFeatures} on the given
 * element.
 * @type SVGStringList
 */
SVGGElement.prototype.requiredFeatures = new SVGStringList();
/**
 * Corresponds to attribute {@link SVGTests#requiredExtensions} on the given
 * element.
 * @type SVGStringList
 */
SVGGElement.prototype.requiredExtensions = new SVGStringList();
/**
 * Corresponds to attribute {@link SVGTests#systemLanguage} on the given element.
 * @type SVGStringList
 */
SVGGElement.prototype.systemLanguage = new SVGStringList();
/**
 * Returns true if the user agent supports the given extension, specified
 * by a URI.
 * @param {String} extension The name of the extension, expressed as a URI.
 * @returns {Boolean} True or false, depending on whether the given extension
 * is   supported.
 */
SVGGElement.prototype.hasExtension = function (extension) {
  return false;
};

// Implementation of the svg::SVGTransformable W3C IDL interface
/**
 * Corresponds to attribute {@link SVGTransformable#transform} on the given
 * element.
 * @type SVGAnimatedTransformList
 */
SVGGElement.prototype.transform = new SVGAnimatedTransformList();

/**
 * The {@link SVGDefsElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/struct.html#DefsElement'
 * title='defs element specification'>defs</a> element.
 * @constructor
 * @augments SVGElement
 */
function SVGDefsElement() {
}
SVGDefsElement.prototype = new SVGElement();

// Implementation of the svg::SVGDefsElement W3C IDL interface

// Implementation of the svg::SVGExternalResourcesRequired W3C IDL interface
/**
 * Corresponds to attribute {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * on the given element. Note that the SVG DOM defines the attribute {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * as being of type {@link SVGAnimatedBoolean}, whereas the SVG language definition
 * says that {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * is not animated. Because the SVG language definition states that {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * cannot be animated, the {@link SVGAnimatedBoolean#animVal} will always
 * be the same as the {@link SVGAnimatedBoolean#baseVal}.
 * @type SVGAnimatedBoolean
 */
SVGDefsElement.prototype.externalResourcesRequired = new SVGAnimatedBoolean();

// Implementation of the svg::SVGLangSpace W3C IDL interface
/**
 * Corresponds to attribute <code>xml:lang</code> on the given element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an   attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGDefsElement.prototype.xmllang = "";
/**
 * Corresponds to attribute <code>xml:space</code> on the given element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an   attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGDefsElement.prototype.xmlspace = "";

// Implementation of the svg::SVGLocatable W3C IDL interface
/**
 * The element which established the current viewport. Often, the nearest
 * ancestor <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement' title='svg
 * element specification'>svg</a> element. Null if the current element is
 * the outermost <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element.
 * @type SVGElement
 */
SVGDefsElement.prototype.nearestViewportElement = new SVGElement();
/**
 * The farthest ancestor <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element. Null if the current
 * element is the outermost <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element.
 * @type SVGElement
 */
SVGDefsElement.prototype.farthestViewportElement = new SVGElement();
/**
 * Returns the tight bounding box in current user space (i.e., after application
 * of the <code>transform</code> attribute, if any) on the geometry of all
 * contained graphics elements, exclusive of stroking, clipping, masking and
 * filter effects). Note that getBBox must return the actual bounding box
 * at the time the method was called, even in case the element has not yet
 * been rendered.
 * @returns {SVGRect} An {@link SVGRect} object that defines the bounding
 * box.
 */
SVGDefsElement.prototype.getBBox = function () {
  return new SVGRect();
};
/**
 * Returns the transformation matrix from current user units (i.e., after
 * application of the <code>transform</code> attribute, if any) to the viewport
 * coordinate system for the {@link SVGLocatable#nearestViewportElement}.
 * @returns {SVGMatrix} An {@link SVGMatrix} object that defines the CTM.
 */
SVGDefsElement.prototype.getCTM = function () {
  return new SVGMatrix();
};
/**
 * Returns the transformation matrix from current user units (i.e., after
 * application of the <code>transform</code> attribute, if any) to the parent
 * user agent's notice of a "pixel". For display devices, ideally this represents
 * a physical screen pixel. For other devices or environments where physical
 * pixel sizes are not known, then an algorithm similar to the CSS2 definition
 * of a "pixel" can be used instead.  Note that null is returned if this element
 * is not hooked into the document tree. This method would have been more
 * aptly named as <code>getClientCTM</code>, but the name <code>getScreenCTM</code>
 * is kept for historical reasons.
 * @returns {SVGMatrix} An {@link SVGMatrix} object that defines the given
 * transformation matrix.
 */
SVGDefsElement.prototype.getScreenCTM = function () {
  return new SVGMatrix();
};
/**
 * Returns the transformation matrix from the user coordinate system on the
 * current element (after application of the <code>transform</code> attribute,
 * if any) to the user coordinate system on parameter <var>element</var> (after
 * application of its <code>transform</code> attribute, if any).
 * @param {SVGElement} element The target element.
 * @returns {SVGMatrix} An {@link SVGMatrix} object that defines the transformation.
 * @throws {SVGException} (SVG_MATRIX_NOT_INVERTABLE) Raised if the currently
 * defined transformation matrices make it impossible to compute the   given
 * matrix (e.g., because one of the transformations is singular).
 */
SVGDefsElement.prototype.getTransformToElement = function (element) {
  return new SVGMatrix();
};

// Implementation of the svg::SVGStylable W3C IDL interface
/**
 * Corresponds to attribute <code>class</code> on the given element.
 * @type SVGAnimatedString
 */
SVGDefsElement.prototype.className = new SVGAnimatedString();
/**
 * Corresponds to attribute <code>style attribute</code> on the given element.
 * If the user agent does not support <a href='styling.html#StylingWithCSS'>styling
 * with CSS</a>, then this attribute must always have the value of null.
 * @type CSSStyleDeclaration
 */
SVGDefsElement.prototype.style = new CSSStyleDeclaration();
/**
 * Returns the base (i.e., static) value of a given <code>presentation   attribute</code>
 * as an object of type <code>CSSValue</code>. The returned object is live;
 * changes to the objects represent immediate changes to the objects to which
 * the <code>CSSValue</code> is attached. <p>Note: The <code>getPresentationAttribute</code>
 * method is deprecated, and may be dropped from future versions of the SVG
 * specification.</p>
 * @param {String} name The name of the presentation attribute whose value
 * is to be   returned.
 * @returns {CSSValue} The static/base value of the given <code>presentation
 * attribute</code>   as a <code>CSSValue</code>, or null if the given attribute
 * does not have a   specified value.
 */
SVGDefsElement.prototype.getPresentationAttribute = function (name) {
  return new CSSValue();
};

// Implementation of the svg::SVGTests W3C IDL interface
/**
 * Corresponds to attribute {@link SVGTests#requiredFeatures} on the given
 * element.
 * @type SVGStringList
 */
SVGDefsElement.prototype.requiredFeatures = new SVGStringList();
/**
 * Corresponds to attribute {@link SVGTests#requiredExtensions} on the given
 * element.
 * @type SVGStringList
 */
SVGDefsElement.prototype.requiredExtensions = new SVGStringList();
/**
 * Corresponds to attribute {@link SVGTests#systemLanguage} on the given element.
 * @type SVGStringList
 */
SVGDefsElement.prototype.systemLanguage = new SVGStringList();
/**
 * Returns true if the user agent supports the given extension, specified
 * by a URI.
 * @param {String} extension The name of the extension, expressed as a URI.
 * @returns {Boolean} True or false, depending on whether the given extension
 * is   supported.
 */
SVGDefsElement.prototype.hasExtension = function (extension) {
  return false;
};

// Implementation of the svg::SVGTransformable W3C IDL interface
/**
 * Corresponds to attribute {@link SVGTransformable#transform} on the given
 * element.
 * @type SVGAnimatedTransformList
 */
SVGDefsElement.prototype.transform = new SVGAnimatedTransformList();

/**
 * The {@link SVGDescElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/struct.html#DescElement'
 * title='desc element specification'>desc</a> element.
 * @constructor
 * @augments SVGElement
 */
function SVGDescElement() {
}
SVGDescElement.prototype = new SVGElement();

// Implementation of the svg::SVGDescElement W3C IDL interface

// Implementation of the svg::SVGLangSpace W3C IDL interface
/**
 * Corresponds to attribute <code>xml:lang</code> on the given element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an   attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGDescElement.prototype.xmllang = "";
/**
 * Corresponds to attribute <code>xml:space</code> on the given element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an   attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGDescElement.prototype.xmlspace = "";

// Implementation of the svg::SVGStylable W3C IDL interface
/**
 * Corresponds to attribute <code>class</code> on the given element.
 * @type SVGAnimatedString
 */
SVGDescElement.prototype.className = new SVGAnimatedString();
/**
 * Corresponds to attribute <code>style attribute</code> on the given element.
 * If the user agent does not support <a href='styling.html#StylingWithCSS'>styling
 * with CSS</a>, then this attribute must always have the value of null.
 * @type CSSStyleDeclaration
 */
SVGDescElement.prototype.style = new CSSStyleDeclaration();
/**
 * Returns the base (i.e., static) value of a given <code>presentation   attribute</code>
 * as an object of type <code>CSSValue</code>. The returned object is live;
 * changes to the objects represent immediate changes to the objects to which
 * the <code>CSSValue</code> is attached. <p>Note: The <code>getPresentationAttribute</code>
 * method is deprecated, and may be dropped from future versions of the SVG
 * specification.</p>
 * @param {String} name The name of the presentation attribute whose value
 * is to be   returned.
 * @returns {CSSValue} The static/base value of the given <code>presentation
 * attribute</code>   as a <code>CSSValue</code>, or null if the given attribute
 * does not have a   specified value.
 */
SVGDescElement.prototype.getPresentationAttribute = function (name) {
  return new CSSValue();
};

/**
 * The {@link SVGTitleElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/struct.html#TitleElement'
 * title='title element specification'>title</a> element.
 * @constructor
 * @augments SVGElement
 */
function SVGTitleElement() {
}
SVGTitleElement.prototype = new SVGElement();

// Implementation of the svg::SVGTitleElement W3C IDL interface

// Implementation of the svg::SVGLangSpace W3C IDL interface
/**
 * Corresponds to attribute <code>xml:lang</code> on the given element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an   attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGTitleElement.prototype.xmllang = "";
/**
 * Corresponds to attribute <code>xml:space</code> on the given element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an   attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGTitleElement.prototype.xmlspace = "";

// Implementation of the svg::SVGStylable W3C IDL interface
/**
 * Corresponds to attribute <code>class</code> on the given element.
 * @type SVGAnimatedString
 */
SVGTitleElement.prototype.className = new SVGAnimatedString();
/**
 * Corresponds to attribute <code>style attribute</code> on the given element.
 * If the user agent does not support <a href='styling.html#StylingWithCSS'>styling
 * with CSS</a>, then this attribute must always have the value of null.
 * @type CSSStyleDeclaration
 */
SVGTitleElement.prototype.style = new CSSStyleDeclaration();
/**
 * Returns the base (i.e., static) value of a given <code>presentation   attribute</code>
 * as an object of type <code>CSSValue</code>. The returned object is live;
 * changes to the objects represent immediate changes to the objects to which
 * the <code>CSSValue</code> is attached. <p>Note: The <code>getPresentationAttribute</code>
 * method is deprecated, and may be dropped from future versions of the SVG
 * specification.</p>
 * @param {String} name The name of the presentation attribute whose value
 * is to be   returned.
 * @returns {CSSValue} The static/base value of the given <code>presentation
 * attribute</code>   as a <code>CSSValue</code>, or null if the given attribute
 * does not have a   specified value.
 */
SVGTitleElement.prototype.getPresentationAttribute = function (name) {
  return new CSSValue();
};

/**
 * The {@link SVGSymbolElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/struct.html#SymbolElement'
 * title='symbol element specification'>symbol</a> element.
 * @constructor
 * @augments SVGElement
 */
function SVGSymbolElement() {
}
SVGSymbolElement.prototype = new SVGElement();

// Implementation of the svg::SVGSymbolElement W3C IDL interface

// Implementation of the svg::SVGExternalResourcesRequired W3C IDL interface
/**
 * Corresponds to attribute {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * on the given element. Note that the SVG DOM defines the attribute {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * as being of type {@link SVGAnimatedBoolean}, whereas the SVG language definition
 * says that {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * is not animated. Because the SVG language definition states that {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * cannot be animated, the {@link SVGAnimatedBoolean#animVal} will always
 * be the same as the {@link SVGAnimatedBoolean#baseVal}.
 * @type SVGAnimatedBoolean
 */
SVGSymbolElement.prototype.externalResourcesRequired = new SVGAnimatedBoolean();

// Implementation of the svg::SVGFitToViewBox W3C IDL interface
/**
 * Corresponds to attribute {@link SVGFitToViewBox#viewBox} on the given element.
 * @type SVGAnimatedRect
 */
SVGSymbolElement.prototype.viewBox = new SVGAnimatedRect();
/**
 * Corresponds to attribute {@link SVGFitToViewBox#preserveAspectRatio} on
 * the given element.
 * @type SVGAnimatedPreserveAspectRatio
 */
SVGSymbolElement.prototype.preserveAspectRatio = new SVGAnimatedPreserveAspectRatio();

// Implementation of the svg::SVGLangSpace W3C IDL interface
/**
 * Corresponds to attribute <code>xml:lang</code> on the given element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an   attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGSymbolElement.prototype.xmllang = "";
/**
 * Corresponds to attribute <code>xml:space</code> on the given element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an   attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGSymbolElement.prototype.xmlspace = "";

// Implementation of the svg::SVGStylable W3C IDL interface
/**
 * Corresponds to attribute <code>class</code> on the given element.
 * @type SVGAnimatedString
 */
SVGSymbolElement.prototype.className = new SVGAnimatedString();
/**
 * Corresponds to attribute <code>style attribute</code> on the given element.
 * If the user agent does not support <a href='styling.html#StylingWithCSS'>styling
 * with CSS</a>, then this attribute must always have the value of null.
 * @type CSSStyleDeclaration
 */
SVGSymbolElement.prototype.style = new CSSStyleDeclaration();
/**
 * Returns the base (i.e., static) value of a given <code>presentation   attribute</code>
 * as an object of type <code>CSSValue</code>. The returned object is live;
 * changes to the objects represent immediate changes to the objects to which
 * the <code>CSSValue</code> is attached. <p>Note: The <code>getPresentationAttribute</code>
 * method is deprecated, and may be dropped from future versions of the SVG
 * specification.</p>
 * @param {String} name The name of the presentation attribute whose value
 * is to be   returned.
 * @returns {CSSValue} The static/base value of the given <code>presentation
 * attribute</code>   as a <code>CSSValue</code>, or null if the given attribute
 * does not have a   specified value.
 */
SVGSymbolElement.prototype.getPresentationAttribute = function (name) {
  return new CSSValue();
};

/**
 * The {@link SVGUseElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/struct.html#UseElement'
 * title='use element specification'>use</a> element.
 * @constructor
 * @augments SVGElement
 */
function SVGUseElement() {
}
SVGUseElement.prototype = new SVGElement();

// Implementation of the svg::SVGUseElement W3C IDL interface
/**
 * Corresponds to attribute {@link SVGUseElement#x} on the given <a href='http://www.w3.org/TR/SVG11/struct.html#UseElement'
 * title='use element specification'>use</a> element.
 * @type SVGAnimatedLength
 */
SVGUseElement.prototype.x = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGUseElement#y} on the given <a href='http://www.w3.org/TR/SVG11/struct.html#UseElement'
 * title='use element specification'>use</a> element.
 * @type SVGAnimatedLength
 */
SVGUseElement.prototype.y = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGUseElement#width} on the given <a href='http://www.w3.org/TR/SVG11/struct.html#UseElement'
 * title='use element specification'>use</a> element.
 * @type SVGAnimatedLength
 */
SVGUseElement.prototype.width = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGUseElement#height} on the given <a href='http://www.w3.org/TR/SVG11/struct.html#UseElement'
 * title='use element specification'>use</a> element.
 * @type SVGAnimatedLength
 */
SVGUseElement.prototype.height = new SVGAnimatedLength();
/**
 * The root of the "instance tree".  See description of {@link SVGElementInstance}
 * for a discussion on the instance tree.
 * @type SVGElementInstance
 */
SVGUseElement.prototype.instanceRoot = new SVGElementInstance();
/**
 * If the <code>xlink:href</code> attribute is being animated, contains the
 * current animated root of the "instance tree".  If the <code>xlink:href</code>
 * attribute is not currently being animated, contains the same value as {@link SVGUseElement#instanceRoot}.
 * See description of {@link SVGElementInstance} for a discussion on the instance
 * tree.
 * @type SVGElementInstance
 */
SVGUseElement.prototype.animatedInstanceRoot = new SVGElementInstance();

// Implementation of the svg::SVGExternalResourcesRequired W3C IDL interface
/**
 * Corresponds to attribute {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * on the given element. Note that the SVG DOM defines the attribute {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * as being of type {@link SVGAnimatedBoolean}, whereas the SVG language definition
 * says that {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * is not animated. Because the SVG language definition states that {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * cannot be animated, the {@link SVGAnimatedBoolean#animVal} will always
 * be the same as the {@link SVGAnimatedBoolean#baseVal}.
 * @type SVGAnimatedBoolean
 */
SVGUseElement.prototype.externalResourcesRequired = new SVGAnimatedBoolean();

// Implementation of the svg::SVGLangSpace W3C IDL interface
/**
 * Corresponds to attribute <code>xml:lang</code> on the given element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an   attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGUseElement.prototype.xmllang = "";
/**
 * Corresponds to attribute <code>xml:space</code> on the given element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an   attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGUseElement.prototype.xmlspace = "";

// Implementation of the svg::SVGLocatable W3C IDL interface
/**
 * The element which established the current viewport. Often, the nearest
 * ancestor <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement' title='svg
 * element specification'>svg</a> element. Null if the current element is
 * the outermost <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element.
 * @type SVGElement
 */
SVGUseElement.prototype.nearestViewportElement = new SVGElement();
/**
 * The farthest ancestor <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element. Null if the current
 * element is the outermost <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element.
 * @type SVGElement
 */
SVGUseElement.prototype.farthestViewportElement = new SVGElement();
/**
 * Returns the tight bounding box in current user space (i.e., after application
 * of the <code>transform</code> attribute, if any) on the geometry of all
 * contained graphics elements, exclusive of stroking, clipping, masking and
 * filter effects). Note that getBBox must return the actual bounding box
 * at the time the method was called, even in case the element has not yet
 * been rendered.
 * @returns {SVGRect} An {@link SVGRect} object that defines the bounding
 * box.
 */
SVGUseElement.prototype.getBBox = function () {
  return new SVGRect();
};
/**
 * Returns the transformation matrix from current user units (i.e., after
 * application of the <code>transform</code> attribute, if any) to the viewport
 * coordinate system for the {@link SVGLocatable#nearestViewportElement}.
 * @returns {SVGMatrix} An {@link SVGMatrix} object that defines the CTM.
 */
SVGUseElement.prototype.getCTM = function () {
  return new SVGMatrix();
};
/**
 * Returns the transformation matrix from current user units (i.e., after
 * application of the <code>transform</code> attribute, if any) to the parent
 * user agent's notice of a "pixel". For display devices, ideally this represents
 * a physical screen pixel. For other devices or environments where physical
 * pixel sizes are not known, then an algorithm similar to the CSS2 definition
 * of a "pixel" can be used instead.  Note that null is returned if this element
 * is not hooked into the document tree. This method would have been more
 * aptly named as <code>getClientCTM</code>, but the name <code>getScreenCTM</code>
 * is kept for historical reasons.
 * @returns {SVGMatrix} An {@link SVGMatrix} object that defines the given
 * transformation matrix.
 */
SVGUseElement.prototype.getScreenCTM = function () {
  return new SVGMatrix();
};
/**
 * Returns the transformation matrix from the user coordinate system on the
 * current element (after application of the <code>transform</code> attribute,
 * if any) to the user coordinate system on parameter <var>element</var> (after
 * application of its <code>transform</code> attribute, if any).
 * @param {SVGElement} element The target element.
 * @returns {SVGMatrix} An {@link SVGMatrix} object that defines the transformation.
 * @throws {SVGException} (SVG_MATRIX_NOT_INVERTABLE) Raised if the currently
 * defined transformation matrices make it impossible to compute the   given
 * matrix (e.g., because one of the transformations is singular).
 */
SVGUseElement.prototype.getTransformToElement = function (element) {
  return new SVGMatrix();
};

// Implementation of the svg::SVGStylable W3C IDL interface
/**
 * Corresponds to attribute <code>class</code> on the given element.
 * @type SVGAnimatedString
 */
SVGUseElement.prototype.className = new SVGAnimatedString();
/**
 * Corresponds to attribute <code>style attribute</code> on the given element.
 * If the user agent does not support <a href='styling.html#StylingWithCSS'>styling
 * with CSS</a>, then this attribute must always have the value of null.
 * @type CSSStyleDeclaration
 */
SVGUseElement.prototype.style = new CSSStyleDeclaration();
/**
 * Returns the base (i.e., static) value of a given <code>presentation   attribute</code>
 * as an object of type <code>CSSValue</code>. The returned object is live;
 * changes to the objects represent immediate changes to the objects to which
 * the <code>CSSValue</code> is attached. <p>Note: The <code>getPresentationAttribute</code>
 * method is deprecated, and may be dropped from future versions of the SVG
 * specification.</p>
 * @param {String} name The name of the presentation attribute whose value
 * is to be   returned.
 * @returns {CSSValue} The static/base value of the given <code>presentation
 * attribute</code>   as a <code>CSSValue</code>, or null if the given attribute
 * does not have a   specified value.
 */
SVGUseElement.prototype.getPresentationAttribute = function (name) {
  return new CSSValue();
};

// Implementation of the svg::SVGTests W3C IDL interface
/**
 * Corresponds to attribute {@link SVGTests#requiredFeatures} on the given
 * element.
 * @type SVGStringList
 */
SVGUseElement.prototype.requiredFeatures = new SVGStringList();
/**
 * Corresponds to attribute {@link SVGTests#requiredExtensions} on the given
 * element.
 * @type SVGStringList
 */
SVGUseElement.prototype.requiredExtensions = new SVGStringList();
/**
 * Corresponds to attribute {@link SVGTests#systemLanguage} on the given element.
 * @type SVGStringList
 */
SVGUseElement.prototype.systemLanguage = new SVGStringList();
/**
 * Returns true if the user agent supports the given extension, specified
 * by a URI.
 * @param {String} extension The name of the extension, expressed as a URI.
 * @returns {Boolean} True or false, depending on whether the given extension
 * is   supported.
 */
SVGUseElement.prototype.hasExtension = function (extension) {
  return false;
};

// Implementation of the svg::SVGTransformable W3C IDL interface
/**
 * Corresponds to attribute {@link SVGTransformable#transform} on the given
 * element.
 * @type SVGAnimatedTransformList
 */
SVGUseElement.prototype.transform = new SVGAnimatedTransformList();

// Implementation of the svg::SVGURIReference W3C IDL interface
/**
 * Corresponds to attribute <span class='attr-name'>'xlink:href'</span> on
 * the given element.
 * @type SVGAnimatedString
 */
SVGUseElement.prototype.href = new SVGAnimatedString();

/**
 * <p>For each <a href='http://www.w3.org/TR/SVG11/struct.html#UseElement'
 * title='use element specification'>use</a> element, the SVG DOM maintains
 * a shadow tree (the "instance tree") of objects of type {@link SVGElementInstance}.
 * An {@link SVGElementInstance} represents a single node in the instance
 * tree. The root object in the instance tree is pointed to by the {@link SVGUseElement#instanceRoot}
 * attribute on the {@link SVGUseElement} object for the corresponding <a
 * href='http://www.w3.org/TR/SVG11/struct.html#UseElement' title='use element
 * specification'>use</a> element.</p> <p>If the <a href='http://www.w3.org/TR/SVG11/struct.html#UseElement'
 * title='use element specification'>use</a> element references a simple graphics
 * element such as a <a href='http://www.w3.org/TR/SVG11/shapes.html#RectElement'
 * title='rect element specification'>rect</a>, then there is only a single
 * {@link SVGElementInstance} object, and the {@link SVGElementInstance#correspondingElement}
 * attribute on this {@link SVGElementInstance} object is the {@link SVGRectElement}
 * that corresponds to the referenced <a href='http://www.w3.org/TR/SVG11/shapes.html#RectElement'
 * title='rect element specification'>rect</a> element.</p> <p>If the <a href='http://www.w3.org/TR/SVG11/struct.html#UseElement'
 * title='use element specification'>use</a> element references a <a href='http://www.w3.org/TR/SVG11/struct.html#GElement'
 * title='g element specification'>g</a> which contains two <a href='http://www.w3.org/TR/SVG11/shapes.html#RectElement'
 * title='rect element specification'>rect</a> elements, then the instance
 * tree contains three {@link SVGElementInstance} objects, a root {@link SVGElementInstance}
 * object whose {@link SVGElementInstance#correspondingElement} is the {@link SVGGElement}
 * object for the <a href='http://www.w3.org/TR/SVG11/struct.html#GElement'
 * title='g element specification'>g</a>, and then two child {@link SVGElementInstance}
 * objects, each of which has its {@link SVGElementInstance#correspondingElement}
 * that is an {@link SVGRectElement} object.</p> <p>If the referenced object
 * is itself a <a href='http://www.w3.org/TR/SVG11/struct.html#UseElement'
 * title='use element specification'>use</a>, or if there are <a href='http://www.w3.org/TR/SVG11/struct.html#UseElement'
 * title='use element specification'>use</a> subelements within the referenced
 * object, the instance tree will contain recursive expansion of the indirect
 * references to form a complete tree. For example, if a <a href='http://www.w3.org/TR/SVG11/struct.html#UseElement'
 * title='use element specification'>use</a> element references a <a href='http://www.w3.org/TR/SVG11/struct.html#GElement'
 * title='g element specification'>g</a>, and the <a href='http://www.w3.org/TR/SVG11/struct.html#GElement'
 * title='g element specification'>g</a> itself contains a <a href='http://www.w3.org/TR/SVG11/struct.html#UseElement'
 * title='use element specification'>use</a>, and that <a href='http://www.w3.org/TR/SVG11/struct.html#UseElement'
 * title='use element specification'>use</a> references a <a href='http://www.w3.org/TR/SVG11/shapes.html#RectElement'
 * title='rect element specification'>rect</a>, then the instance tree for
 * the original (outermost) <a href='http://www.w3.org/TR/SVG11/struct.html#UseElement'
 * title='use element specification'>use</a> will consist of a hierarchy of
 * {@link SVGElementInstance} objects, as follows:</p>
 * <pre>SVGElementInstance #1 (parentNode=null, firstChild=#2, correspondingElement
 * is the 'g')
 * SVGElementInstance #2 (parentNode=#1, firstChild=#3, correspondingElement
 * is the other 'use')
 * SVGElementInstance #3 (parentNode=#2, firstChild=null, correspondingElement
 * is the 'rect')
 * </pre>
 * @constructor
 * @augments EventTarget
 */
function SVGElementInstance() {
}
SVGElementInstance.prototype = {};

// Implementation of the svg::SVGElementInstance W3C IDL interface
/**
 * The corresponding element to which this object is an instance. For example,
 * if a <a href='http://www.w3.org/TR/SVG11/struct.html#UseElement' title='use
 * element specification'>use</a> element references a <a href='http://www.w3.org/TR/SVG11/shapes.html#RectElement'
 * title='rect element specification'>rect</a> element, then an {@link SVGElementInstance}
 * is created, with its {@link SVGElementInstance#correspondingElement} being
 * the {@link SVGElementInstance} object for the <a href='http://www.w3.org/TR/SVG11/shapes.html#RectElement'
 * title='rect element specification'>rect</a> element.
 * @type SVGElement
 */
SVGElementInstance.prototype.correspondingElement = new SVGElement();
/**
 * The corresponding <a href='http://www.w3.org/TR/SVG11/struct.html#UseElement'
 * title='use element specification'>use</a> element to which this {@link SVGElementInstance}
 * object belongs. When <a href='http://www.w3.org/TR/SVG11/struct.html#UseElement'
 * title='use element specification'>use</a> elements are nested (e.g., a
 * <a href='http://www.w3.org/TR/SVG11/struct.html#UseElement' title='use
 * element specification'>use</a> references another <a href='http://www.w3.org/TR/SVG11/struct.html#UseElement'
 * title='use element specification'>use</a> which references a graphics element
 * such as a <a href='http://www.w3.org/TR/SVG11/shapes.html#RectElement'
 * title='rect element specification'>rect</a>), then the {@link SVGElementInstance#correspondingUseElement}
 * is the outermost <a href='http://www.w3.org/TR/SVG11/struct.html#UseElement'
 * title='use element specification'>use</a> (i.e., the one which indirectly
 * references the <a href='http://www.w3.org/TR/SVG11/shapes.html#RectElement'
 * title='rect element specification'>rect</a>, not the one with the direct
 * reference).
 * @type SVGUseElement
 */
SVGElementInstance.prototype.correspondingUseElement = new SVGUseElement();
/**
 * The parent of this {@link SVGElementInstance} within the instance tree.
 * All {@link SVGElementInstance} objects have a parent except the {@link SVGElementInstance}
 * which corresponds to the element which was directly referenced by the <a
 * href='http://www.w3.org/TR/SVG11/struct.html#UseElement' title='use element
 * specification'>use</a> element, in which case {@link SVGElementInstance#parentNode}
 * is null.
 * @type SVGElementInstance
 */
SVGElementInstance.prototype.parentNode = new SVGElementInstance();
/**
 * An {@link SVGElementInstanceList} that contains all children of this {@link SVGElementInstance}
 * within the instance tree. If there are no children, this is an {@link SVGElementInstanceList}
 * containing no entries (i.e., an empty list).
 * @type SVGElementInstanceList
 */
SVGElementInstance.prototype.childNodes = new SVGElementInstanceList();
/**
 * The first child of this {@link SVGElementInstance} within the instance
 * tree. If there is no such {@link SVGElementInstance}, this returns null.
 * @type SVGElementInstance
 */
SVGElementInstance.prototype.firstChild = new SVGElementInstance();
/**
 * The last child of this {@link SVGElementInstance} within the instance tree.
 * If there is no such {@link SVGElementInstance}, this returns null.
 * @type SVGElementInstance
 */
SVGElementInstance.prototype.lastChild = new SVGElementInstance();
/**
 * The {@link SVGElementInstance} immediately preceding this {@link SVGElementInstance}.
 * If there is no such {@link SVGElementInstance}, this returns null.
 * @type SVGElementInstance
 */
SVGElementInstance.prototype.previousSibling = new SVGElementInstance();
/**
 * The {@link SVGElementInstance} immediately following this {@link SVGElementInstance}.
 * If there is no such {@link SVGElementInstance}, this returns null.
 * @type SVGElementInstance
 */
SVGElementInstance.prototype.nextSibling = new SVGElementInstance();

/**
 * The {@link SVGElementInstanceList} interface provides the abstraction of
 * an ordered collection of {@link SVGElementInstance} objects, without defining
 * or constraining how this collection is implemented.
 * @constructor
 */
function SVGElementInstanceList() {
}
SVGElementInstanceList.prototype = {};

// Implementation of the svg::SVGElementInstanceList W3C IDL interface
/**
 * The number of {@link SVGElementInstance} objects in the list. The range
 * of valid child indices is 0 to {@link SVGElementInstanceList#length}−1
 * inclusive.
 * @type Number
 */
SVGElementInstanceList.prototype.length = 0;
/**
 * Returns the <var>index</var>th item in the collection. If <var>index</var>
 * is greater than or equal to the number of nodes in the list, this returns
 * null.
 * @param {Number} index Index into the collection.
 * @returns {SVGElementInstance} The {@link SVGElementInstance} object at
 * the <var>index</var>th   position in the {@link SVGElementInstanceList},
 * or null if that is not   a valid index.
 */
SVGElementInstanceList.prototype.item = function (index) {
  return new SVGElementInstance();
};

/**
 * The {@link SVGImageElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/struct.html#ImageElement'
 * title='image element specification'>image</a> element.
 * @constructor
 * @augments SVGElement
 */
function SVGImageElement() {
}
SVGImageElement.prototype = new SVGElement();

// Implementation of the svg::SVGImageElement W3C IDL interface
/**
 * Corresponds to attribute {@link SVGImageElement#x} on the given <a href='http://www.w3.org/TR/SVG11/struct.html#ImageElement'
 * title='image element specification'>image</a> element.
 * @type SVGAnimatedLength
 */
SVGImageElement.prototype.x = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGImageElement#y} on the given <a href='http://www.w3.org/TR/SVG11/struct.html#ImageElement'
 * title='image element specification'>image</a> element.
 * @type SVGAnimatedLength
 */
SVGImageElement.prototype.y = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGImageElement#width} on the given <a
 * href='http://www.w3.org/TR/SVG11/struct.html#ImageElement' title='image
 * element specification'>image</a> element.
 * @type SVGAnimatedLength
 */
SVGImageElement.prototype.width = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGImageElement#height} on the given <a
 * href='http://www.w3.org/TR/SVG11/struct.html#ImageElement' title='image
 * element specification'>image</a> element.
 * @type SVGAnimatedLength
 */
SVGImageElement.prototype.height = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGImageElement#preserveAspectRatio} on
 * the given <a href='http://www.w3.org/TR/SVG11/struct.html#ImageElement'
 * title='image element specification'>image</a> element.
 * @type SVGAnimatedPreserveAspectRatio
 */
SVGImageElement.prototype.preserveAspectRatio = new SVGAnimatedPreserveAspectRatio();

// Implementation of the svg::SVGExternalResourcesRequired W3C IDL interface
/**
 * Corresponds to attribute {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * on the given element. Note that the SVG DOM defines the attribute {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * as being of type {@link SVGAnimatedBoolean}, whereas the SVG language definition
 * says that {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * is not animated. Because the SVG language definition states that {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * cannot be animated, the {@link SVGAnimatedBoolean#animVal} will always
 * be the same as the {@link SVGAnimatedBoolean#baseVal}.
 * @type SVGAnimatedBoolean
 */
SVGImageElement.prototype.externalResourcesRequired = new SVGAnimatedBoolean();

// Implementation of the svg::SVGLangSpace W3C IDL interface
/**
 * Corresponds to attribute <code>xml:lang</code> on the given element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an   attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGImageElement.prototype.xmllang = "";
/**
 * Corresponds to attribute <code>xml:space</code> on the given element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an   attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGImageElement.prototype.xmlspace = "";

// Implementation of the svg::SVGLocatable W3C IDL interface
/**
 * The element which established the current viewport. Often, the nearest
 * ancestor <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement' title='svg
 * element specification'>svg</a> element. Null if the current element is
 * the outermost <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element.
 * @type SVGElement
 */
SVGImageElement.prototype.nearestViewportElement = new SVGElement();
/**
 * The farthest ancestor <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element. Null if the current
 * element is the outermost <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element.
 * @type SVGElement
 */
SVGImageElement.prototype.farthestViewportElement = new SVGElement();
/**
 * Returns the tight bounding box in current user space (i.e., after application
 * of the <code>transform</code> attribute, if any) on the geometry of all
 * contained graphics elements, exclusive of stroking, clipping, masking and
 * filter effects). Note that getBBox must return the actual bounding box
 * at the time the method was called, even in case the element has not yet
 * been rendered.
 * @returns {SVGRect} An {@link SVGRect} object that defines the bounding
 * box.
 */
SVGImageElement.prototype.getBBox = function () {
  return new SVGRect();
};
/**
 * Returns the transformation matrix from current user units (i.e., after
 * application of the <code>transform</code> attribute, if any) to the viewport
 * coordinate system for the {@link SVGLocatable#nearestViewportElement}.
 * @returns {SVGMatrix} An {@link SVGMatrix} object that defines the CTM.
 */
SVGImageElement.prototype.getCTM = function () {
  return new SVGMatrix();
};
/**
 * Returns the transformation matrix from current user units (i.e., after
 * application of the <code>transform</code> attribute, if any) to the parent
 * user agent's notice of a "pixel". For display devices, ideally this represents
 * a physical screen pixel. For other devices or environments where physical
 * pixel sizes are not known, then an algorithm similar to the CSS2 definition
 * of a "pixel" can be used instead.  Note that null is returned if this element
 * is not hooked into the document tree. This method would have been more
 * aptly named as <code>getClientCTM</code>, but the name <code>getScreenCTM</code>
 * is kept for historical reasons.
 * @returns {SVGMatrix} An {@link SVGMatrix} object that defines the given
 * transformation matrix.
 */
SVGImageElement.prototype.getScreenCTM = function () {
  return new SVGMatrix();
};
/**
 * Returns the transformation matrix from the user coordinate system on the
 * current element (after application of the <code>transform</code> attribute,
 * if any) to the user coordinate system on parameter <var>element</var> (after
 * application of its <code>transform</code> attribute, if any).
 * @param {SVGElement} element The target element.
 * @returns {SVGMatrix} An {@link SVGMatrix} object that defines the transformation.
 * @throws {SVGException} (SVG_MATRIX_NOT_INVERTABLE) Raised if the currently
 * defined transformation matrices make it impossible to compute the   given
 * matrix (e.g., because one of the transformations is singular).
 */
SVGImageElement.prototype.getTransformToElement = function (element) {
  return new SVGMatrix();
};

// Implementation of the svg::SVGStylable W3C IDL interface
/**
 * Corresponds to attribute <code>class</code> on the given element.
 * @type SVGAnimatedString
 */
SVGImageElement.prototype.className = new SVGAnimatedString();
/**
 * Corresponds to attribute <code>style attribute</code> on the given element.
 * If the user agent does not support <a href='styling.html#StylingWithCSS'>styling
 * with CSS</a>, then this attribute must always have the value of null.
 * @type CSSStyleDeclaration
 */
SVGImageElement.prototype.style = new CSSStyleDeclaration();
/**
 * Returns the base (i.e., static) value of a given <code>presentation   attribute</code>
 * as an object of type <code>CSSValue</code>. The returned object is live;
 * changes to the objects represent immediate changes to the objects to which
 * the <code>CSSValue</code> is attached. <p>Note: The <code>getPresentationAttribute</code>
 * method is deprecated, and may be dropped from future versions of the SVG
 * specification.</p>
 * @param {String} name The name of the presentation attribute whose value
 * is to be   returned.
 * @returns {CSSValue} The static/base value of the given <code>presentation
 * attribute</code>   as a <code>CSSValue</code>, or null if the given attribute
 * does not have a   specified value.
 */
SVGImageElement.prototype.getPresentationAttribute = function (name) {
  return new CSSValue();
};

// Implementation of the svg::SVGTests W3C IDL interface
/**
 * Corresponds to attribute {@link SVGTests#requiredFeatures} on the given
 * element.
 * @type SVGStringList
 */
SVGImageElement.prototype.requiredFeatures = new SVGStringList();
/**
 * Corresponds to attribute {@link SVGTests#requiredExtensions} on the given
 * element.
 * @type SVGStringList
 */
SVGImageElement.prototype.requiredExtensions = new SVGStringList();
/**
 * Corresponds to attribute {@link SVGTests#systemLanguage} on the given element.
 * @type SVGStringList
 */
SVGImageElement.prototype.systemLanguage = new SVGStringList();
/**
 * Returns true if the user agent supports the given extension, specified
 * by a URI.
 * @param {String} extension The name of the extension, expressed as a URI.
 * @returns {Boolean} True or false, depending on whether the given extension
 * is   supported.
 */
SVGImageElement.prototype.hasExtension = function (extension) {
  return false;
};

// Implementation of the svg::SVGTransformable W3C IDL interface
/**
 * Corresponds to attribute {@link SVGTransformable#transform} on the given
 * element.
 * @type SVGAnimatedTransformList
 */
SVGImageElement.prototype.transform = new SVGAnimatedTransformList();

// Implementation of the svg::SVGURIReference W3C IDL interface
/**
 * Corresponds to attribute <span class='attr-name'>'xlink:href'</span> on
 * the given element.
 * @type SVGAnimatedString
 */
SVGImageElement.prototype.href = new SVGAnimatedString();

/**
 * The {@link SVGSwitchElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/struct.html#SwitchElement'
 * title='switch element specification'>switch</a> element.
 * @constructor
 * @augments SVGElement
 */
function SVGSwitchElement() {
}
SVGSwitchElement.prototype = new SVGElement();

// Implementation of the svg::SVGSwitchElement W3C IDL interface

// Implementation of the svg::SVGExternalResourcesRequired W3C IDL interface
/**
 * Corresponds to attribute {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * on the given element. Note that the SVG DOM defines the attribute {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * as being of type {@link SVGAnimatedBoolean}, whereas the SVG language definition
 * says that {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * is not animated. Because the SVG language definition states that {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * cannot be animated, the {@link SVGAnimatedBoolean#animVal} will always
 * be the same as the {@link SVGAnimatedBoolean#baseVal}.
 * @type SVGAnimatedBoolean
 */
SVGSwitchElement.prototype.externalResourcesRequired = new SVGAnimatedBoolean();

// Implementation of the svg::SVGLangSpace W3C IDL interface
/**
 * Corresponds to attribute <code>xml:lang</code> on the given element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an   attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGSwitchElement.prototype.xmllang = "";
/**
 * Corresponds to attribute <code>xml:space</code> on the given element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an   attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGSwitchElement.prototype.xmlspace = "";

// Implementation of the svg::SVGLocatable W3C IDL interface
/**
 * The element which established the current viewport. Often, the nearest
 * ancestor <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement' title='svg
 * element specification'>svg</a> element. Null if the current element is
 * the outermost <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element.
 * @type SVGElement
 */
SVGSwitchElement.prototype.nearestViewportElement = new SVGElement();
/**
 * The farthest ancestor <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element. Null if the current
 * element is the outermost <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element.
 * @type SVGElement
 */
SVGSwitchElement.prototype.farthestViewportElement = new SVGElement();
/**
 * Returns the tight bounding box in current user space (i.e., after application
 * of the <code>transform</code> attribute, if any) on the geometry of all
 * contained graphics elements, exclusive of stroking, clipping, masking and
 * filter effects). Note that getBBox must return the actual bounding box
 * at the time the method was called, even in case the element has not yet
 * been rendered.
 * @returns {SVGRect} An {@link SVGRect} object that defines the bounding
 * box.
 */
SVGSwitchElement.prototype.getBBox = function () {
  return new SVGRect();
};
/**
 * Returns the transformation matrix from current user units (i.e., after
 * application of the <code>transform</code> attribute, if any) to the viewport
 * coordinate system for the {@link SVGLocatable#nearestViewportElement}.
 * @returns {SVGMatrix} An {@link SVGMatrix} object that defines the CTM.
 */
SVGSwitchElement.prototype.getCTM = function () {
  return new SVGMatrix();
};
/**
 * Returns the transformation matrix from current user units (i.e., after
 * application of the <code>transform</code> attribute, if any) to the parent
 * user agent's notice of a "pixel". For display devices, ideally this represents
 * a physical screen pixel. For other devices or environments where physical
 * pixel sizes are not known, then an algorithm similar to the CSS2 definition
 * of a "pixel" can be used instead.  Note that null is returned if this element
 * is not hooked into the document tree. This method would have been more
 * aptly named as <code>getClientCTM</code>, but the name <code>getScreenCTM</code>
 * is kept for historical reasons.
 * @returns {SVGMatrix} An {@link SVGMatrix} object that defines the given
 * transformation matrix.
 */
SVGSwitchElement.prototype.getScreenCTM = function () {
  return new SVGMatrix();
};
/**
 * Returns the transformation matrix from the user coordinate system on the
 * current element (after application of the <code>transform</code> attribute,
 * if any) to the user coordinate system on parameter <var>element</var> (after
 * application of its <code>transform</code> attribute, if any).
 * @param {SVGElement} element The target element.
 * @returns {SVGMatrix} An {@link SVGMatrix} object that defines the transformation.
 * @throws {SVGException} (SVG_MATRIX_NOT_INVERTABLE) Raised if the currently
 * defined transformation matrices make it impossible to compute the   given
 * matrix (e.g., because one of the transformations is singular).
 */
SVGSwitchElement.prototype.getTransformToElement = function (element) {
  return new SVGMatrix();
};

// Implementation of the svg::SVGStylable W3C IDL interface
/**
 * Corresponds to attribute <code>class</code> on the given element.
 * @type SVGAnimatedString
 */
SVGSwitchElement.prototype.className = new SVGAnimatedString();
/**
 * Corresponds to attribute <code>style attribute</code> on the given element.
 * If the user agent does not support <a href='styling.html#StylingWithCSS'>styling
 * with CSS</a>, then this attribute must always have the value of null.
 * @type CSSStyleDeclaration
 */
SVGSwitchElement.prototype.style = new CSSStyleDeclaration();
/**
 * Returns the base (i.e., static) value of a given <code>presentation   attribute</code>
 * as an object of type <code>CSSValue</code>. The returned object is live;
 * changes to the objects represent immediate changes to the objects to which
 * the <code>CSSValue</code> is attached. <p>Note: The <code>getPresentationAttribute</code>
 * method is deprecated, and may be dropped from future versions of the SVG
 * specification.</p>
 * @param {String} name The name of the presentation attribute whose value
 * is to be   returned.
 * @returns {CSSValue} The static/base value of the given <code>presentation
 * attribute</code>   as a <code>CSSValue</code>, or null if the given attribute
 * does not have a   specified value.
 */
SVGSwitchElement.prototype.getPresentationAttribute = function (name) {
  return new CSSValue();
};

// Implementation of the svg::SVGTests W3C IDL interface
/**
 * Corresponds to attribute {@link SVGTests#requiredFeatures} on the given
 * element.
 * @type SVGStringList
 */
SVGSwitchElement.prototype.requiredFeatures = new SVGStringList();
/**
 * Corresponds to attribute {@link SVGTests#requiredExtensions} on the given
 * element.
 * @type SVGStringList
 */
SVGSwitchElement.prototype.requiredExtensions = new SVGStringList();
/**
 * Corresponds to attribute {@link SVGTests#systemLanguage} on the given element.
 * @type SVGStringList
 */
SVGSwitchElement.prototype.systemLanguage = new SVGStringList();
/**
 * Returns true if the user agent supports the given extension, specified
 * by a URI.
 * @param {String} extension The name of the extension, expressed as a URI.
 * @returns {Boolean} True or false, depending on whether the given extension
 * is   supported.
 */
SVGSwitchElement.prototype.hasExtension = function (extension) {
  return false;
};

// Implementation of the svg::SVGTransformable W3C IDL interface
/**
 * Corresponds to attribute {@link SVGTransformable#transform} on the given
 * element.
 * @type SVGAnimatedTransformList
 */
SVGSwitchElement.prototype.transform = new SVGAnimatedTransformList();

/**
 * <p>This interface provides access to an SVG document embedded by reference
 * in another DOM-based language. The expectation is that the interface is
 * implemented on DOM objects that allow such SVG document references, such
 * as the DOM {@link Element} object that corresponds to an HTML <span class='element-name'>'object'</span>
 * element. Such DOM objects are often also required to implement the <code>EmbeddingElement</code>
 * defined in the Window specification [<a href="refs.html#ref-WINDOW">WINDOW</a>].</p>
 * <p>This interface is deprecated and may be dropped from future versions
 * of the SVG specification. Authors are suggested to use the <code>contentDocument</code>
 * attribute on the <code>EmbeddingElement</code> interface to obtain a referenced
 * SVG document, if that interface is available.</p>
 * @constructor
 */
function GetSVGDocument() {
}
GetSVGDocument.prototype = {};

// Implementation of the svg::GetSVGDocument W3C IDL interface
/**
 * <p> This method must return the {@link Document} object embedded content
 * in an embedding element, or null if there is no document.</p> <p>Note that
 * this is equivalent to fetching the value of the <code>EmbeddingElement::contentDocument</code>
 * attribute of the embedding element, if the <code>EmbeddingElement</code>
 * interface is also implemented. The author is advised to check that the
 * document element of the returned {@link Document} is indeed an <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element instead of assuming that
 * that will always be the case.</p>
 * @returns {SVGDocument} The {@link Document} object for the referenced document,
 * or null   if there is no document.
 */
GetSVGDocument.prototype.getSVGDocument = function () {
  return new SVGDocument();
};

/**
 * The {@link SVGStyleElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/styling.html#StyleElement'
 * title='style element specification'>style</a> element.
 * @constructor
 * @augments SVGElement
 */
function SVGStyleElement() {
}
SVGStyleElement.prototype = new SVGElement();

// Implementation of the svg::SVGStyleElement W3C IDL interface
/**
 * Corresponds to attribute {@link SVGStyleElement#type} on the given element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGStyleElement.prototype.type = "";
/**
 * Corresponds to attribute {@link SVGStyleElement#media} on the given element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGStyleElement.prototype.media = "";
/**
 * Corresponds to attribute <code>title attribute</code> on the given element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGStyleElement.prototype.title = "";

// Implementation of the svg::SVGLangSpace W3C IDL interface
/**
 * Corresponds to attribute <code>xml:lang</code> on the given element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an   attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGStyleElement.prototype.xmllang = "";
/**
 * Corresponds to attribute <code>xml:space</code> on the given element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an   attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGStyleElement.prototype.xmlspace = "";

/**
 * <p>Many of the SVG DOM interfaces refer to objects of class {@link SVGPoint}.
 * An {@link SVGPoint} is an (x, y) coordinate pair. When used in matrix operations,
 * an {@link SVGPoint} is treated as a vector of the form:</p> <pre>
 * [x]
 * [y]
 * [1]</pre> <p>If an {@link SVGRect} object is designated as <em>read only</em>,
 * then attempting to assign to one of its attributes will result in an exception
 * being thrown.</p>
 * @constructor
 */
function SVGPoint() {
}
SVGPoint.prototype = {};

// Implementation of the svg::SVGPoint W3C IDL interface
/**
 * The x coordinate.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised if the   {@link SVGPoint}
 * object is read only, or corresponds to a DOM   attribute that is read only.
 * @type Number
 */
SVGPoint.prototype.x = 0;
/**
 * The y coordinate.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised if the   {@link SVGPoint}
 * object is read only, or corresponds to a DOM   attribute that is read only.
 * @type Number
 */
SVGPoint.prototype.y = 0;
/**
 * <p>Applies a 2x3 matrix transformation on this {@link SVGPoint} object
 * and returns a new, transformed {@link SVGPoint} object:</p> <pre>newpoint
 * = matrix thispoint</pre>
 * @param {SVGMatrix} matrix The matrix which is to be applied to this {@link SVGPoint}
 * object.
 * @returns {SVGPoint} A new {@link SVGPoint} object.
 */
SVGPoint.prototype.matrixTransform = function (matrix) {
  return new SVGPoint();
};

/**
 * <p>This interface defines a list of SVGPoint objects.</p> <p>{@link SVGPointList}
 * has the same attributes and methods as other SVGxxxList interfaces. Implementers
 * may consider using a single base class to implement the various SVGxxxList
 * interfaces.</p>
 * @constructor
 */
function SVGPointList() {
}
SVGPointList.prototype = {};

// Implementation of the svg::SVGPointList W3C IDL interface
/**
 * The number of items in the list.
 * @type Number
 */
SVGPointList.prototype.numberOfItems = 0;
/**
 * Clears all existing current items from the list, with the result being
 * an empty list.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised when the list
 * cannot be modified.
 */
SVGPointList.prototype.clear = function () {
};
/**
 * Clears all existing current items from the list and re-initializes the
 * list to hold the single item specified by the parameter.  If the inserted
 * item is already in a list, it is removed from its previous list before
 * it is inserted into this list.  The inserted item is the item itself and
 * not a copy.
 * @param {SVGPoint} newItem The item which should become the only member
 * of the list.
 * @returns {SVGPoint} The item being inserted into the list.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised when the list
 * cannot be modified.
 */
SVGPointList.prototype.initialize = function (newItem) {
  return new SVGPoint();
};
/**
 * Returns the specified item from the list.  The returned item is the item
 * itself and not a copy.  Any changes made to the item are immediately reflected
 * in the list.
 * @param {Number} index The index of the item from the list which is to be
 * returned.  The first item is number 0.
 * @returns {SVGPoint} The selected item.
 * @throws {DOMException} (INDEX_SIZE_ERR) Raised if the index number is
 * greater than or equal to {@link SVGPointList#numberOfItems}.
 */
SVGPointList.prototype.getItem = function (index) {
  return new SVGPoint();
};
/**
 * Inserts a new item into the list at the specified position. The first item
 * is number 0. If <var>newItem</var> is already in a list, it is removed
 * from its previous list before it is inserted into this list. The inserted
 * item is the item itself and not a copy. If the item is already in this
 * list, note that the index of the item to insert before is <i>before</i>
 * the removal of the item.
 * @param {SVGPoint} newItem The item which is to be inserted into the list.
 * @param {Number} index The index of the item before which the new item is
 * to be   inserted. The first item is number 0.  If the index is equal to
 * 0,   then the new item is inserted at the front of the list. If the index
 * is greater than or equal to {@link SVGPointList#numberOfItems}, then the
 * new item is   appended to the end of the list.
 * @returns {SVGPoint} The inserted item.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised when the list
 * cannot be modified.
 */
SVGPointList.prototype.insertItemBefore = function (newItem, index) {
  return new SVGPoint();
};
/**
 * Replaces an existing item in the list with a new item. If <var>newItem</var>
 * is already in a list, it is removed from its previous list before it is
 * inserted into this list.  The inserted item is the item itself and not
 * a copy.  If the item is already in this list, note that the index of the
 * item to replace is <i>before</i> the removal of the item.
 * @param {SVGPoint} newItem The item which is to be inserted into the list.
 * @param {Number} index The index of the item which is to be replaced. The
 * first   item is number 0.
 * @returns {SVGPoint} The inserted item.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised when the list
 * cannot be modified.
 * @throws {DOMException} (INDEX_SIZE_ERR) Raised if the index number is
 * greater than or equal to {@link SVGPointList#numberOfItems}.
 */
SVGPointList.prototype.replaceItem = function (newItem, index) {
  return new SVGPoint();
};
/**
 * Removes an existing item from the list.
 * @param {Number} index The index of the item which is to be removed. The
 * first   item is number 0.
 * @returns {SVGPoint} The removed item.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised when the list
 * cannot be modified.
 * @throws {DOMException} (INDEX_SIZE_ERR) Raised if the index number is
 * greater than or equal to {@link SVGPointList#numberOfItems}.
 */
SVGPointList.prototype.removeItem = function (index) {
  return new SVGPoint();
};
/**
 * Inserts a new item at the end of the list. If <var>newItem</var> is already
 * in a list, it is removed from its previous list before it is inserted into
 * this list.  The inserted item is the item itself and not a copy.
 * @param {SVGPoint} newItem The item which is to be inserted. The first item
 * is   number 0.
 * @returns {SVGPoint} The inserted item.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised when the list
 * cannot be modified.
 */
SVGPointList.prototype.appendItem = function (newItem) {
  return new SVGPoint();
};

/**
 * <p>Many of SVG's graphics operations utilize 2x3 matrices of the form:</p>
 * <pre>
 * [a c e]
 * [b d f]</pre> <p>which, when expanded into a 3x3 matrix for the purposes
 * of matrix arithmetic, become:</p> <pre>
 * [a c e]
 * [b d f]
 * [0 0 1]</pre>
 * @constructor
 */
function SVGMatrix() {
}
SVGMatrix.prototype = {};

// Implementation of the svg::SVGMatrix W3C IDL interface
/**
 * The <var>a</var> component of the matrix.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGMatrix.prototype.a = 0;
/**
 * The <var>b</var> component of the matrix.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGMatrix.prototype.b = 0;
/**
 * The <var>c</var> component of the matrix.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGMatrix.prototype.c = 0;
/**
 * The <var>d</var> component of the matrix.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGMatrix.prototype.d = 0;
/**
 * The <var>e</var> component of the matrix.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGMatrix.prototype.e = 0;
/**
 * The <var>f</var> component of the matrix.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGMatrix.prototype.f = 0;
/**
 * Performs matrix multiplication. This matrix is post-multiplied by another
 * matrix, returning the resulting new matrix.
 * @param {SVGMatrix} secondMatrix The matrix which is post-multiplied to
 * this matrix.
 * @returns {SVGMatrix} The resulting matrix.
 */
SVGMatrix.prototype.multiply = function (secondMatrix) {
  return new SVGMatrix();
};
/**
 * Returns the inverse matrix.
 * @returns {SVGMatrix} The inverse matrix.
 * @throws {SVGException} (SVG_MATRIX_NOT_INVERTABLE) Raised if this matrix
 * is   not invertable.
 */
SVGMatrix.prototype.inverse = function () {
  return new SVGMatrix();
};
/**
 * Post-multiplies a translation transformation on the current matrix and
 * returns the resulting matrix.
 * @param {Number} x The distance to translate along the x-axis.
 * @param {Number} y The distance to translate along the y-axis.
 * @returns {SVGMatrix} The resulting matrix.
 */
SVGMatrix.prototype.translate = function (x, y) {
  return new SVGMatrix();
};
/**
 * Post-multiplies a uniform scale transformation on the current matrix and
 * returns the resulting matrix.
 * @param {Number} scaleFactor Scale factor in both X and Y.
 * @returns {SVGMatrix} The resulting matrix.
 */
SVGMatrix.prototype.scale = function (scaleFactor) {
  return new SVGMatrix();
};
/**
 * Post-multiplies a non-uniform scale transformation on the current matrix
 * and returns the resulting matrix.
 * @param {Number} scaleFactorX Scale factor in X.
 * @param {Number} scaleFactorY Scale factor in Y.
 * @returns {SVGMatrix} The resulting matrix.
 */
SVGMatrix.prototype.scaleNonUniform = function (scaleFactorX, scaleFactorY) {
  return new SVGMatrix();
};
/**
 * Post-multiplies a rotation transformation on the current matrix and returns
 * the resulting matrix.
 * @param {Number} angle Rotation angle.
 * @returns {SVGMatrix} The resulting matrix.
 */
SVGMatrix.prototype.rotate = function (angle) {
  return new SVGMatrix();
};
/**
 * Post-multiplies a rotation transformation on the current matrix and returns
 * the resulting matrix. The rotation angle is determined by taking (+/-)
 * atan(y/x). The direction of the vector (x, y) determines whether the positive
 * or negative angle value is used.
 * @param {Number} x The X coordinate of the vector (x,y). Must not be zero.
 * @param {Number} y The Y coordinate of the vector (x,y). Must not be zero.
 * @returns {SVGMatrix} The resulting matrix.
 * @throws {SVGException} (SVG_INVALID_VALUE_ERR) Raised if one of the   parameters
 * has an invalid value.
 */
SVGMatrix.prototype.rotateFromVector = function (x, y) {
  return new SVGMatrix();
};
/**
 * Post-multiplies the transformation [-1 0 0 1 0 0] and returns the resulting
 * matrix.
 * @returns {SVGMatrix} The resulting matrix.
 */
SVGMatrix.prototype.flipX = function () {
  return new SVGMatrix();
};
/**
 * Post-multiplies the transformation [1 0 0 -1 0 0] and returns the resulting
 * matrix.
 * @returns {SVGMatrix} The resulting matrix.
 */
SVGMatrix.prototype.flipY = function () {
  return new SVGMatrix();
};
/**
 * Post-multiplies a skewX transformation on the current matrix and returns
 * the resulting matrix.
 * @param {Number} angle Skew angle.
 * @returns {SVGMatrix} The resulting matrix.
 */
SVGMatrix.prototype.skewX = function (angle) {
  return new SVGMatrix();
};
/**
 * Post-multiplies a skewY transformation on the current matrix and returns
 * the resulting matrix.
 * @param {Number} angle Skew angle.
 * @returns {SVGMatrix} The resulting matrix.
 */
SVGMatrix.prototype.skewY = function (angle) {
  return new SVGMatrix();
};

/**
 * {@link SVGTransform} is the interface for one of the component transformations
 * within an {@link SVGTransformList}; thus, an {@link SVGTransform} object
 * corresponds to a single component (e.g., <span class='attr-value'>'scale(…)'</span>
 * or <span class='attr-value'>'matrix(…)'</span>) within a <code>transform</code>
 * attribute specification.
 * @constructor
 */
function SVGTransform() {
}
SVGTransform.prototype = {};

// Implementation of the svg::SVGTransform W3C IDL interface
/**
 * The unit type is not one of predefined types. It is invalid to attempt
 * to define a new value of this type or to attempt to switch an existing
 * value to this type.
 * @constant
 * @type Number
 */
SVGTransform.SVG_TRANSFORM_UNKNOWN = 0;
/**
 * A <span class='attr-value'>'matrix(…)'</span> transformation.
 * @constant
 * @type Number
 */
SVGTransform.SVG_TRANSFORM_MATRIX = 1;
/**
 * A <span class='attr-value'>'translate(…)'</span> transformation.
 * @constant
 * @type Number
 */
SVGTransform.SVG_TRANSFORM_TRANSLATE = 2;
/**
 * A <span class='attr-value'>'scale(…)'</span> transformation.
 * @constant
 * @type Number
 */
SVGTransform.SVG_TRANSFORM_SCALE = 3;
/**
 * A <span class='attr-value'>'rotate(…)'</span> transformation.
 * @constant
 * @type Number
 */
SVGTransform.SVG_TRANSFORM_ROTATE = 4;
/**
 * A <span class='attr-value'>'skewX(…)'</span> transformation.
 * @constant
 * @type Number
 */
SVGTransform.SVG_TRANSFORM_SKEWX = 5;
/**
 * A <span class='attr-value'>'skewY(…)'</span> transformation.
 * @constant
 * @type Number
 */
SVGTransform.SVG_TRANSFORM_SKEWY = 6;
/**
 * The type of the value as specified by one of the SVG_TRANSFORM_ constants
 * defined on this interface.
 * @type Number
 */
SVGTransform.prototype.type = 0;
/**
 * <p>The matrix that represents this transformation.  The matrix object is
 * live, meaning that any changes made to the SVGTransform object are immediately
 * reflected in the matrix object and vice versa.  In case the matrix object
 * is changed directly (i.e., without using the methods on the SVGTransform
 * interface itself) then the type of the SVGTransform changes to SVG_TRANSFORM_MATRIX.
 * </p> <ul>   <li>For SVG_TRANSFORM_MATRIX, the matrix contains the   {@link SVGMatrix#a},
 * {@link SVGMatrix#b}, {@link SVGMatrix#c}, {@link SVGMatrix#d}, {@link SVGMatrix#e},
 * {@link SVGMatrix#f} values supplied by the user.</li>   <li>For SVG_TRANSFORM_TRANSLATE,
 * {@link SVGMatrix#e} and {@link SVGMatrix#f}   represent the translation
 * amounts ({@link SVGMatrix#a}=1, {@link SVGMatrix#b}=0,   {@link SVGMatrix#c}=0
 * and {@link SVGMatrix#d}=1).</li>   <li>For SVG_TRANSFORM_SCALE, {@link SVGMatrix#a}
 * and {@link SVGMatrix#d}   represent the translation amounts ({@link SVGMatrix#b}=0,
 * {@link SVGMatrix#c}=0,   {@link SVGMatrix#e}=0 and {@link SVGMatrix#f}=0).</li>
 * <li>For SVG_TRANSFORM_ROTATE, SVG_TRANSFORM_SKEWX and   SVG_TRANSFORM_SKEWY,
 * {@link SVGMatrix#a}, {@link SVGMatrix#b}, {@link SVGMatrix#c} and {@link SVGMatrix#d}
 * represent the matrix which will result in the given transformation   ({@link SVGMatrix#e}=0
 * and {@link SVGMatrix#f}=0).</li> </ul>
 * @type SVGMatrix
 */
SVGTransform.prototype.matrix = new SVGMatrix();
/**
 * <p>A convenience attribute for SVG_TRANSFORM_ROTATE, SVG_TRANSFORM_SKEWX
 * and SVG_TRANSFORM_SKEWY.  It holds the angle that was specified.</p> <p>For
 * SVG_TRANSFORM_MATRIX, SVG_TRANSFORM_TRANSLATE and SVG_TRANSFORM_SCALE,
 * {@link SVGTransform#angle} will be zero.</p>
 * @type Number
 */
SVGTransform.prototype.angle = 0;
/**
 * <p xmlns:edit="http://xmlns.grorg.org/SVGT12NG/"> Sets the transform type
 * to SVG_TRANSFORM_MATRIX, with parameter <var>matrix</var> defining the
 * new transformation.  The values from the parameter <var>matrix</var> are
 * copied, the <var>matrix</var> parameter does not replace <a edit:format="expanded">SVGTransform::matrix</a>.
 * </p>
 * @param {SVGMatrix} matrix The new matrix for the transformation.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 */
SVGTransform.prototype.setMatrix = function (matrix) {
};
/**
 * Sets the transform type to SVG_TRANSFORM_TRANSLATE, with parameters <var>tx</var>
 * and <var>ty</var> defining the translation amounts.
 * @param {Number} tx The translation amount in X.
 * @param {Number} ty The translation amount in Y.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 */
SVGTransform.prototype.setTranslate = function (tx, ty) {
};
/**
 * Sets the transform type to SVG_TRANSFORM_SCALE, with parameters <var>sx</var>
 * and <var>sy</var> defining the scale amounts.
 * @param {Number} sx The scale amount in X.
 * @param {Number} sy The scale amount in Y.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 */
SVGTransform.prototype.setScale = function (sx, sy) {
};
/**
 * Sets the transform type to SVG_TRANSFORM_ROTATE, with parameter <var>angle</var>
 * defining the rotation angle and parameters <var>cx</var> and <var>cy</var>
 * defining the optional center of rotation.
 * @param {Number} angle The rotation angle.
 * @param {Number} cx The x coordinate of center of rotation.
 * @param {Number} cy The y coordinate of center of rotation.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 */
SVGTransform.prototype.setRotate = function (angle, cx, cy) {
};
/**
 * Sets the transform type to SVG_TRANSFORM_SKEWX, with parameter <var>angle</var>
 * defining the amount of skew.
 * @param {Number} angle The skew angle.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 */
SVGTransform.prototype.setSkewX = function (angle) {
};
/**
 * Sets the transform type to SVG_TRANSFORM_SKEWY, with parameter <var>angle</var>
 * defining the amount of skew.
 * @param {Number} angle The skew angle.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 */
SVGTransform.prototype.setSkewY = function (angle) {
};

/**
 * <p>This interface defines a list of SVGTransform objects.</p> <p>The {@link SVGTransformList}
 * and {@link SVGTransform} interfaces correspond to the various attributes
 * which specify a set of transformations, such as the <code>transform</code>
 * attribute which is available for many of SVG's elements.</p> <p>{@link SVGTransformList}
 * has the same attributes and methods as other SVGxxxList interfaces. Implementers
 * may consider using a single base class to implement the various SVGxxxList
 * interfaces.</p> <p id="ReadOnlyTransformList">An {@link SVGTransformList}
 * object can be designated as <em>read only</em>, which means that attempts
 * to modify the object will result in an exception being thrown, as described
 * below.</p>
 * @constructor
 */
function SVGTransformList() {
}
SVGTransformList.prototype = {};

// Implementation of the svg::SVGTransformList W3C IDL interface
/**
 * The number of items in the list.
 * @type Number
 */
SVGTransformList.prototype.numberOfItems = 0;
/**
 * Clears all existing current items from the list, with the result being
 * an empty list.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised when the list
 * corresponds to a <a href="svgdom.html#ReadOnlyNodes">read only attribute</a>
 * or when the object itself is   <a href="#ReadOnlyTransformList">read only</a>.
 */
SVGTransformList.prototype.clear = function () {
};
/**
 * Clears all existing current items from the list and re-initializes the
 * list to hold the single item specified by the parameter.  If the inserted
 * item is already in a list, it is removed from its previous list before
 * it is inserted into this list.  The inserted item is the item itself and
 * not a copy.
 * @param {SVGTransform} newItem The item which should become the only member
 * of the list.
 * @returns {SVGTransform} The item being inserted into the list.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised when the list
 * corresponds to a <a href="svgdom.html#ReadOnlyNodes">read only attribute</a>
 * or when the object itself is   <a href="#ReadOnlyTransformList">read only</a>.
 */
SVGTransformList.prototype.initialize = function (newItem) {
  return new SVGTransform();
};
/**
 * Returns the specified item from the list.  The returned item is the item
 * itself and not a copy.  Any changes made to the item are immediately reflected
 * in the list.
 * @param {Number} index The index of the item from the list which is to be
 * returned.  The first item is number 0.
 * @returns {SVGTransform} The selected item.
 * @throws {DOMException} (INDEX_SIZE_ERR) Raised if the index number is
 * greater than or equal to {@link SVGTransformList#numberOfItems}.
 */
SVGTransformList.prototype.getItem = function (index) {
  return new SVGTransform();
};
/**
 * Inserts a new item into the list at the specified position. The first item
 * is number 0. If <var>newItem</var> is already in a list, it is removed
 * from its previous list before it is inserted into this list. The inserted
 * item is the item itself and not a copy. If the item is already in this
 * list, note that the index of the item to insert before is <i>before</i>
 * the removal of the item.
 * @param {SVGTransform} newItem The item which is to be inserted into the
 * list.
 * @param {Number} index The index of the item before which the new item is
 * to be   inserted. The first item is number 0.  If the index is equal to
 * 0,   then the new item is inserted at the front of the list. If the index
 * is greater than or equal to {@link SVGTransformList#numberOfItems}, then
 * the new item is   appended to the end of the list.
 * @returns {SVGTransform} The inserted item.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised when the list
 * corresponds to a <a href="svgdom.html#ReadOnlyNodes">read only attribute</a>
 * or when the object itself is   <a href="#ReadOnlyTransformList">read only</a>.
 */
SVGTransformList.prototype.insertItemBefore = function (newItem, index) {
  return new SVGTransform();
};
/**
 * Replaces an existing item in the list with a new item. If <var>newItem</var>
 * is already in a list, it is removed from its previous list before it is
 * inserted into this list.  The inserted item is the item itself and not
 * a copy.  If the item is already in this list, note that the index of the
 * item to replace is <i>before</i> the removal of the item.
 * @param {SVGTransform} newItem The item which is to be inserted into the
 * list.
 * @param {Number} index The index of the item which is to be replaced. The
 * first   item is number 0.
 * @returns {SVGTransform} The inserted item.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised when the list
 * corresponds to a <a href="svgdom.html#ReadOnlyNodes">read only attribute</a>
 * or when the object itself is   <a href="#ReadOnlyTransformList">read only</a>.
 * @throws {DOMException} (INDEX_SIZE_ERR) Raised if the index number is
 * greater than or equal to {@link SVGTransformList#numberOfItems}.
 */
SVGTransformList.prototype.replaceItem = function (newItem, index) {
  return new SVGTransform();
};
/**
 * Removes an existing item from the list.
 * @param {Number} index The index of the item which is to be removed. The
 * first   item is number 0.
 * @returns {SVGTransform} The removed item.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised when the list
 * corresponds to a <a href="svgdom.html#ReadOnlyNodes">read only attribute</a>
 * or when the object itself is   <a href="#ReadOnlyTransformList">read only</a>.
 * @throws {DOMException} (INDEX_SIZE_ERR) Raised if the index number is
 * greater than or equal to {@link SVGTransformList#numberOfItems}.
 */
SVGTransformList.prototype.removeItem = function (index) {
  return new SVGTransform();
};
/**
 * Inserts a new item at the end of the list. If <var>newItem</var> is already
 * in a list, it is removed from its previous list before it is inserted into
 * this list.  The inserted item is the item itself and not a copy.
 * @param {SVGTransform} newItem The item which is to be inserted. The first
 * item is   number 0.
 * @returns {SVGTransform} The inserted item.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised when the list
 * corresponds to a <a href="svgdom.html#ReadOnlyNodes">read only attribute</a>
 * or when the object itself is   <a href="#ReadOnlyTransformList">read only</a>.
 */
SVGTransformList.prototype.appendItem = function (newItem) {
  return new SVGTransform();
};
/**
 * <p xmlns:edit="http://xmlns.grorg.org/SVGT12NG/"> Creates an {@link SVGTransform}
 * object which is initialized to transform of type SVG_TRANSFORM_MATRIX and
 * whose values are the given matrix. The values from the parameter <var>matrix</var>
 * are copied, the <var>matrix</var> parameter is not adopted as <a edit:format="expanded">SVGTransform::matrix</a>.
 * </p>
 * @param {SVGMatrix} matrix The matrix which defines the transformation.
 * @returns {SVGTransform} The returned {@link SVGTransform} object.
 */
SVGTransformList.prototype.createSVGTransformFromMatrix = function (matrix) {
  return new SVGTransform();
};
/**
 * Consolidates the list of separate {@link SVGTransform} objects by multiplying
 * the equivalent transformation matrices together to result in a list consisting
 * of a single {@link SVGTransform} object of type SVG_TRANSFORM_MATRIX.
 * The consolidation operation creates new SVGTransform object as the first
 * and only item in the list.  The returned item is the item itself and not
 * a copy.  Any changes made to the item are immediately reflected in the
 * list.
 * @returns {SVGTransform} The resulting {@link SVGTransform} object which
 * becomes single   item in the list. If the list was empty, then a value
 * of null is   returned.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised when the list
 * corresponds to a <a href="svgdom.html#ReadOnlyNodes">read only attribute</a>
 * or when the object itself is   <a href="#ReadOnlyTransformList">read only</a>.
 */
SVGTransformList.prototype.consolidate = function () {
  return new SVGTransform();
};

/**
 * Used for the various attributes which specify a set of transformations,
 * such as the <code>transform</code> attribute which is available for many
 * of SVG's elements, and which can be animated.
 * @constructor
 */
function SVGAnimatedTransformList() {
}
SVGAnimatedTransformList.prototype = {};

// Implementation of the svg::SVGAnimatedTransformList W3C IDL interface
/**
 * The base value of the given attribute before applying any animations.
 * @type SVGTransformList
 */
SVGAnimatedTransformList.prototype.baseVal = new SVGTransformList();
/**
 * A <a href="#ReadOnlyTransformList">read only</a> {@link SVGTransformList}
 * representing the current animated value of the given attribute.  If the
 * given attribute is not currently being animated, then the {@link SVGTransformList}
 * will have the same contents as {@link SVGAnimatedTransformList#baseVal}.
 * The object referenced by {@link SVGAnimatedTransformList#animVal} will
 * always be distinct from the one referenced by {@link SVGAnimatedTransformList#baseVal},
 * even when the attribute is not animated.
 * @type SVGTransformList
 */
SVGAnimatedTransformList.prototype.animVal = new SVGTransformList();

/**
 * The {@link SVGPreserveAspectRatio} interface corresponds to the <code>preserveAspectRatio</code>
 * attribute, which is available for some of SVG's elements. <p id="ReadOnlyPreserveAspectRatio">An
 * {@link SVGPreserveAspectRatio} object can be designated as <em>read only</em>,
 * which means that attempts to modify the object will result in an exception
 * being thrown, as described below.</p>
 * @constructor
 */
function SVGPreserveAspectRatio() {
}
SVGPreserveAspectRatio.prototype = {};

// Implementation of the svg::SVGPreserveAspectRatio W3C IDL interface
/**
 * The enumeration was set to a value that is not one of predefined types.
 * It is invalid to attempt to define a new value of this type or to attempt
 * to switch an existing value to this type.
 * @constant
 * @type Number
 */
SVGPreserveAspectRatio.SVG_PRESERVEASPECTRATIO_UNKNOWN = 0;
/**
 * Corresponds to value <span class='attr-value'>'none'</span> for attribute
 * <code>preserveAspectRatio</code>.
 * @constant
 * @type Number
 */
SVGPreserveAspectRatio.SVG_PRESERVEASPECTRATIO_NONE = 1;
/**
 * Corresponds to value <span class='attr-value'>'xMinYMin'</span> for attribute
 * <code>preserveAspectRatio</code>.
 * @constant
 * @type Number
 */
SVGPreserveAspectRatio.SVG_PRESERVEASPECTRATIO_XMINYMIN = 2;
/**
 * Corresponds to value <span class='attr-value'>'xMidYMin'</span> for attribute
 * <code>preserveAspectRatio</code>.
 * @constant
 * @type Number
 */
SVGPreserveAspectRatio.SVG_PRESERVEASPECTRATIO_XMIDYMIN = 3;
/**
 * Corresponds to value <span class='attr-value'>'xMaxYMin'</span> for attribute
 * <code>preserveAspectRatio</code>.
 * @constant
 * @type Number
 */
SVGPreserveAspectRatio.SVG_PRESERVEASPECTRATIO_XMAXYMIN = 4;
/**
 * Corresponds to value <span class='attr-value'>'XMinYMid'</span> for attribute
 * <code>preserveAspectRatio</code>.
 * @constant
 * @type Number
 */
SVGPreserveAspectRatio.SVG_PRESERVEASPECTRATIO_XMINYMID = 5;
/**
 * Corresponds to value <span class='attr-value'>'xMidYMid'</span> for attribute
 * <code>preserveAspectRatio</code>.
 * @constant
 * @type Number
 */
SVGPreserveAspectRatio.SVG_PRESERVEASPECTRATIO_XMIDYMID = 6;
/**
 * Corresponds to value <span class='attr-value'>'xMaxYMid'</span> for attribute
 * <code>preserveAspectRatio</code>.
 * @constant
 * @type Number
 */
SVGPreserveAspectRatio.SVG_PRESERVEASPECTRATIO_XMAXYMID = 7;
/**
 * Corresponds to value <span class='attr-value'>'xMinYMax'</span> for attribute
 * <code>preserveAspectRatio</code>.
 * @constant
 * @type Number
 */
SVGPreserveAspectRatio.SVG_PRESERVEASPECTRATIO_XMINYMAX = 8;
/**
 * Corresponds to value <span class='attr-value'>'xMidYMax'</span> for attribute
 * <code>preserveAspectRatio</code>.
 * @constant
 * @type Number
 */
SVGPreserveAspectRatio.SVG_PRESERVEASPECTRATIO_XMIDYMAX = 9;
/**
 * Corresponds to value <span class='attr-value'>'xMaxYMax'</span> for attribute
 * <code>preserveAspectRatio</code>.
 * @constant
 * @type Number
 */
SVGPreserveAspectRatio.SVG_PRESERVEASPECTRATIO_XMAXYMAX = 10;
/**
 * The enumeration was set to a value that is not one of predefined types.
 * It is invalid to attempt to define a new value of this type or to attempt
 * to switch an existing value to this type.
 * @constant
 * @type Number
 */
SVGPreserveAspectRatio.SVG_MEETORSLICE_UNKNOWN = 0;
/**
 * Corresponds to value <span class='attr-value'>'meet'</span> for attribute
 * <code>preserveAspectRatio</code>.
 * @constant
 * @type Number
 */
SVGPreserveAspectRatio.SVG_MEETORSLICE_MEET = 1;
/**
 * Corresponds to value <span class='attr-value'>'slice'</span> for attribute
 * <code>preserveAspectRatio</code>.
 * @constant
 * @type Number
 */
SVGPreserveAspectRatio.SVG_MEETORSLICE_SLICE = 2;
/**
 * The type of the alignment value as specified by one of the SVG_PRESERVEASPECTRATIO_
 * constants defined on this interface.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised when the object
 * corresponds to a <a href="svgdom.html#ReadOnlyNodes">read only attribute</a>
 * or when the object itself is   <a href="#ReadOnlyPreserveAspectRatio">read
 * only</a>.
 * @type Number
 */
SVGPreserveAspectRatio.prototype.align = 0;
/**
 * The type of the meet-or-slice value as specified by one of the SVG_MEETORSLICE_
 * constants defined on this interface.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised when the object
 * corresponds to a <a href="svgdom.html#ReadOnlyNodes">read only attribute</a>
 * or when the object itself is   <a href="#ReadOnlyPreserveAspectRatio">read
 * only</a>.
 * @type Number
 */
SVGPreserveAspectRatio.prototype.meetOrSlice = 0;

/**
 * Used for attributes of type {@link SVGPreserveAspectRatio} which can be
 * animated.
 * @constructor
 */
function SVGAnimatedPreserveAspectRatio() {
}
SVGAnimatedPreserveAspectRatio.prototype = {};

// Implementation of the svg::SVGAnimatedPreserveAspectRatio W3C IDL interface
/**
 * The base value of the given attribute before applying any animations.
 * @type SVGPreserveAspectRatio
 */
SVGAnimatedPreserveAspectRatio.prototype.baseVal = new SVGPreserveAspectRatio();
/**
 * A <a href="#ReadOnlyPreserveAspectRatio">read only</a> {@link SVGPreserveAspectRatio}
 * representing the current animated value of the given attribute.  If the
 * given attribute is not currently being animated, then the {@link SVGPreserveAspectRatio}
 * will have the same contents as {@link SVGAnimatedPreserveAspectRatio#baseVal}.
 * The object referenced by {@link SVGAnimatedPreserveAspectRatio#animVal}
 * will always be distinct from the one referenced by {@link SVGAnimatedPreserveAspectRatio#baseVal},
 * even when the attribute is not animated.
 * @type SVGPreserveAspectRatio
 */
SVGAnimatedPreserveAspectRatio.prototype.animVal = new SVGPreserveAspectRatio();

/**
 * The {@link SVGPathSeg} interface is a base interface that corresponds to
 * a single command within a path data specification.
 * @constructor
 */
function SVGPathSeg() {
}
SVGPathSeg.prototype = {};

// Implementation of the svg::SVGPathSeg W3C IDL interface
/**
 * The unit type is not one of predefined types. It is invalid to attempt
 * to define a new value of this type or to attempt to switch an existingvalue
 * to this type.
 * @constant
 * @type Number
 */
SVGPathSeg.PATHSEG_UNKNOWN = 0;
/**
 * Corresponds to a "closepath" (z) path data command.
 * @constant
 * @type Number
 */
SVGPathSeg.PATHSEG_CLOSEPATH = 1;
/**
 * Corresponds to a "absolute moveto" (M) path data command.
 * @constant
 * @type Number
 */
SVGPathSeg.PATHSEG_MOVETO_ABS = 2;
/**
 * Corresponds to a "relative moveto" (m) path data command.
 * @constant
 * @type Number
 */
SVGPathSeg.PATHSEG_MOVETO_REL = 3;
/**
 * Corresponds to a "absolute lineto" (L) path data command.
 * @constant
 * @type Number
 */
SVGPathSeg.PATHSEG_LINETO_ABS = 4;
/**
 * Corresponds to a "relative lineto" (l) path data command.
 * @constant
 * @type Number
 */
SVGPathSeg.PATHSEG_LINETO_REL = 5;
/**
 * Corresponds to a "absolute cubic Bézier curveto" (C) path data command.
 * @constant
 * @type Number
 */
SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS = 6;
/**
 * Corresponds to a "relative cubic Bézier curveto" (c) path data command.
 * @constant
 * @type Number
 */
SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL = 7;
/**
 * Corresponds to a "absolute quadratic Bézier curveto" (Q) path data command.
 * @constant
 * @type Number
 */
SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS = 8;
/**
 * Corresponds to a "relative quadratic Bézier curveto" (q) path data command.
 * @constant
 * @type Number
 */
SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL = 9;
/**
 * Corresponds to a "absolute arcto" (A) path data command.
 * @constant
 * @type Number
 */
SVGPathSeg.PATHSEG_ARC_ABS = 10;
/**
 * Corresponds to a "relative arcto" (a) path data command.
 * @constant
 * @type Number
 */
SVGPathSeg.PATHSEG_ARC_REL = 11;
/**
 * Corresponds to a "absolute horizontal lineto" (H) path data command.
 * @constant
 * @type Number
 */
SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS = 12;
/**
 * Corresponds to a "relative horizontal lineto" (h) path data command.
 * @constant
 * @type Number
 */
SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL = 13;
/**
 * Corresponds to a "absolute vertical lineto" (V) path data command.
 * @constant
 * @type Number
 */
SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS = 14;
/**
 * Corresponds to a "relative vertical lineto" (v) path data command.
 * @constant
 * @type Number
 */
SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL = 15;
/**
 * Corresponds to a "absolute smooth cubic curveto" (S) path data command.
 * @constant
 * @type Number
 */
SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS = 16;
/**
 * Corresponds to a "relative smooth cubic curveto" (s) path data command.
 * @constant
 * @type Number
 */
SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL = 17;
/**
 * Corresponds to a "absolute smooth quadratic curveto" (T) path data command.
 * @constant
 * @type Number
 */
SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS = 18;
/**
 * Corresponds to a "relative smooth quadratic curveto" (t) path data command.
 * @constant
 * @type Number
 */
SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL = 19;
/**
 * The type of the path segment as specified by one of the constants defined
 * on this interface.
 * @type Number
 */
SVGPathSeg.prototype.pathSegType = 0;
/**
 * The type of the path segment, specified by the corresponding one character
 * command name.
 * @type String
 */
SVGPathSeg.prototype.pathSegTypeAsLetter = "";

/**
 * The {@link SVGPathSegClosePath} interface corresponds to a "closepath"
 * (z) path data command.
 * @constructor
 * @augments SVGPathSeg
 */
function SVGPathSegClosePath() {
}
SVGPathSegClosePath.prototype = new SVGPathSeg();

// Implementation of the svg::SVGPathSegClosePath W3C IDL interface

/**
 * The {@link SVGPathSegMovetoAbs} interface corresponds to an "absolute moveto"
 * (M) path data command.
 * @constructor
 * @augments SVGPathSeg
 */
function SVGPathSegMovetoAbs() {
}
SVGPathSegMovetoAbs.prototype = new SVGPathSeg();

// Implementation of the svg::SVGPathSegMovetoAbs W3C IDL interface
/**
 * The absolute X coordinate for the end point of this path segment.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGPathSegMovetoAbs.prototype.x = 0;
/**
 * The absolute Y coordinate for the end point of this path segment.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGPathSegMovetoAbs.prototype.y = 0;

/**
 * The {@link SVGPathSegMovetoRel} interface corresponds to a "relative moveto"
 * (m) path data command.
 * @constructor
 * @augments SVGPathSeg
 */
function SVGPathSegMovetoRel() {
}
SVGPathSegMovetoRel.prototype = new SVGPathSeg();

// Implementation of the svg::SVGPathSegMovetoRel W3C IDL interface
/**
 * The relative X coordinate for the end point of this path segment.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGPathSegMovetoRel.prototype.x = 0;
/**
 * The relative Y coordinate for the end point of this path segment.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGPathSegMovetoRel.prototype.y = 0;

/**
 * The {@link SVGPathSegLinetoAbs} interface corresponds to an "absolute lineto"
 * (L) path data command.
 * @constructor
 * @augments SVGPathSeg
 */
function SVGPathSegLinetoAbs() {
}
SVGPathSegLinetoAbs.prototype = new SVGPathSeg();

// Implementation of the svg::SVGPathSegLinetoAbs W3C IDL interface
/**
 * The absolute X coordinate for the end point of this path segment.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGPathSegLinetoAbs.prototype.x = 0;
/**
 * The absolute Y coordinate for the end point of this path segment.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGPathSegLinetoAbs.prototype.y = 0;

/**
 * The {@link SVGPathSegLinetoRel} interface corresponds to a "relative lineto"
 * (l) path data command.
 * @constructor
 * @augments SVGPathSeg
 */
function SVGPathSegLinetoRel() {
}
SVGPathSegLinetoRel.prototype = new SVGPathSeg();

// Implementation of the svg::SVGPathSegLinetoRel W3C IDL interface
/**
 * The relative X coordinate for the end point of this path segment.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGPathSegLinetoRel.prototype.x = 0;
/**
 * The relative Y coordinate for the end point of this path segment.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGPathSegLinetoRel.prototype.y = 0;

/**
 * The {@link SVGPathSegCurvetoCubicAbs} interface corresponds to an "absolute
 * cubic Bézier curveto" (C) path data command.
 * @constructor
 * @augments SVGPathSeg
 */
function SVGPathSegCurvetoCubicAbs() {
}
SVGPathSegCurvetoCubicAbs.prototype = new SVGPathSeg();

// Implementation of the svg::SVGPathSegCurvetoCubicAbs W3C IDL interface
/**
 * The absolute X coordinate for the end point of this path segment.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGPathSegCurvetoCubicAbs.prototype.x = 0;
/**
 * The absolute Y coordinate for the end point of this path segment.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGPathSegCurvetoCubicAbs.prototype.y = 0;
/**
 * The absolute X coordinate for the first control point.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGPathSegCurvetoCubicAbs.prototype.x1 = 0;
/**
 * The absolute Y coordinate for the first control point.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGPathSegCurvetoCubicAbs.prototype.y1 = 0;
/**
 * The absolute X coordinate for the second control point.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGPathSegCurvetoCubicAbs.prototype.x2 = 0;
/**
 * The absolute Y coordinate for the second control point.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGPathSegCurvetoCubicAbs.prototype.y2 = 0;

/**
 * The {@link SVGPathSegCurvetoCubicRel} interface corresponds to a "relative
 * cubic Bézier curveto" (c) path data command.
 * @constructor
 * @augments SVGPathSeg
 */
function SVGPathSegCurvetoCubicRel() {
}
SVGPathSegCurvetoCubicRel.prototype = new SVGPathSeg();

// Implementation of the svg::SVGPathSegCurvetoCubicRel W3C IDL interface
/**
 * The relative X coordinate for the end point of this path segment.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGPathSegCurvetoCubicRel.prototype.x = 0;
/**
 * The relative Y coordinate for the end point of this path segment.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGPathSegCurvetoCubicRel.prototype.y = 0;
/**
 * The relative X coordinate for the first control point.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGPathSegCurvetoCubicRel.prototype.x1 = 0;
/**
 * The relative Y coordinate for the first control point.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGPathSegCurvetoCubicRel.prototype.y1 = 0;
/**
 * The relative X coordinate for the second control point.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGPathSegCurvetoCubicRel.prototype.x2 = 0;
/**
 * The relative Y coordinate for the second control point.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGPathSegCurvetoCubicRel.prototype.y2 = 0;

/**
 * The {@link SVGPathSegCurvetoQuadraticAbs} interface corresponds to an "absolute
 * quadratic Bézier curveto" (Q) path data command.
 * @constructor
 * @augments SVGPathSeg
 */
function SVGPathSegCurvetoQuadraticAbs() {
}
SVGPathSegCurvetoQuadraticAbs.prototype = new SVGPathSeg();

// Implementation of the svg::SVGPathSegCurvetoQuadraticAbs W3C IDL interface
/**
 * The absolute X coordinate for the end point of this path segment.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGPathSegCurvetoQuadraticAbs.prototype.x = 0;
/**
 * The absolute Y coordinate for the end point of this path segment.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGPathSegCurvetoQuadraticAbs.prototype.y = 0;
/**
 * The absolute X coordinate for the first control point.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGPathSegCurvetoQuadraticAbs.prototype.x1 = 0;
/**
 * The absolute Y coordinate for the first control point.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGPathSegCurvetoQuadraticAbs.prototype.y1 = 0;

/**
 * The {@link SVGPathSegCurvetoQuadraticRel} interface corresponds to a "relative
 * quadratic Bézier curveto" (q) path data command.
 * @constructor
 * @augments SVGPathSeg
 */
function SVGPathSegCurvetoQuadraticRel() {
}
SVGPathSegCurvetoQuadraticRel.prototype = new SVGPathSeg();

// Implementation of the svg::SVGPathSegCurvetoQuadraticRel W3C IDL interface
/**
 * The relative X coordinate for the end point of this path segment.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGPathSegCurvetoQuadraticRel.prototype.x = 0;
/**
 * The relative Y coordinate for the end point of this path segment.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGPathSegCurvetoQuadraticRel.prototype.y = 0;
/**
 * The relative X coordinate for the first control point.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGPathSegCurvetoQuadraticRel.prototype.x1 = 0;
/**
 * The relative Y coordinate for the first control point.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGPathSegCurvetoQuadraticRel.prototype.y1 = 0;

/**
 * The {@link SVGPathSegArcAbs} interface corresponds to an "absolute arcto"
 * (A) path data command.
 * @constructor
 * @augments SVGPathSeg
 */
function SVGPathSegArcAbs() {
}
SVGPathSegArcAbs.prototype = new SVGPathSeg();

// Implementation of the svg::SVGPathSegArcAbs W3C IDL interface
/**
 * The absolute X coordinate for the end point of this path segment.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGPathSegArcAbs.prototype.x = 0;
/**
 * The absolute Y coordinate for the end point of this path segment.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGPathSegArcAbs.prototype.y = 0;
/**
 * The x-axis radius for the ellipse (i.e., r1).
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGPathSegArcAbs.prototype.r1 = 0;
/**
 * The y-axis radius for the ellipse (i.e., r2).
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGPathSegArcAbs.prototype.r2 = 0;
/**
 * The rotation angle in degrees for the ellipse's x-axis relative to the
 * x-axis of the user coordinate system.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGPathSegArcAbs.prototype.angle = 0;
/**
 * The value of the large-arc-flag parameter.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Boolean
 */
SVGPathSegArcAbs.prototype.largeArcFlag = false;
/**
 * The value of the sweep-flag parameter.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Boolean
 */
SVGPathSegArcAbs.prototype.sweepFlag = false;

/**
 * The {@link SVGPathSegArcRel} interface corresponds to a "relative arcto"
 * (a) path data command.
 * @constructor
 * @augments SVGPathSeg
 */
function SVGPathSegArcRel() {
}
SVGPathSegArcRel.prototype = new SVGPathSeg();

// Implementation of the svg::SVGPathSegArcRel W3C IDL interface
/**
 * The relative X coordinate for the end point of this path segment.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGPathSegArcRel.prototype.x = 0;
/**
 * The relative Y coordinate for the end point of this path segment.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGPathSegArcRel.prototype.y = 0;
/**
 * The x-axis radius for the ellipse (i.e., r1).
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGPathSegArcRel.prototype.r1 = 0;
/**
 * The y-axis radius for the ellipse (i.e., r2).
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGPathSegArcRel.prototype.r2 = 0;
/**
 * The rotation angle in degrees for the ellipse's x-axis relative to the
 * x-axis of the user coordinate system.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGPathSegArcRel.prototype.angle = 0;
/**
 * The value of the large-arc-flag parameter.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Boolean
 */
SVGPathSegArcRel.prototype.largeArcFlag = false;
/**
 * The value of the sweep-flag parameter.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Boolean
 */
SVGPathSegArcRel.prototype.sweepFlag = false;

/**
 * The {@link SVGPathSegLinetoHorizontalAbs} interface corresponds to an "absolute
 * horizontal lineto" (H) path data command.
 * @constructor
 * @augments SVGPathSeg
 */
function SVGPathSegLinetoHorizontalAbs() {
}
SVGPathSegLinetoHorizontalAbs.prototype = new SVGPathSeg();

// Implementation of the svg::SVGPathSegLinetoHorizontalAbs W3C IDL interface
/**
 * The absolute X coordinate for the end point of this path segment.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGPathSegLinetoHorizontalAbs.prototype.x = 0;

/**
 * The {@link SVGPathSegLinetoHorizontalRel} interface corresponds to a "relative
 * horizontal lineto" (h) path data command.
 * @constructor
 * @augments SVGPathSeg
 */
function SVGPathSegLinetoHorizontalRel() {
}
SVGPathSegLinetoHorizontalRel.prototype = new SVGPathSeg();

// Implementation of the svg::SVGPathSegLinetoHorizontalRel W3C IDL interface
/**
 * The relative X coordinate for the end point of this path segment.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGPathSegLinetoHorizontalRel.prototype.x = 0;

/**
 * The {@link SVGPathSegLinetoVerticalAbs} interface corresponds to an "absolute
 * vertical lineto" (V) path data command.
 * @constructor
 * @augments SVGPathSeg
 */
function SVGPathSegLinetoVerticalAbs() {
}
SVGPathSegLinetoVerticalAbs.prototype = new SVGPathSeg();

// Implementation of the svg::SVGPathSegLinetoVerticalAbs W3C IDL interface
/**
 * The absolute Y coordinate for the end point of this path segment.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGPathSegLinetoVerticalAbs.prototype.y = 0;

/**
 * The {@link SVGPathSegLinetoVerticalRel} interface corresponds to a "relative
 * vertical lineto" (v) path data command.
 * @constructor
 * @augments SVGPathSeg
 */
function SVGPathSegLinetoVerticalRel() {
}
SVGPathSegLinetoVerticalRel.prototype = new SVGPathSeg();

// Implementation of the svg::SVGPathSegLinetoVerticalRel W3C IDL interface
/**
 * The relative Y coordinate for the end point of this path segment.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGPathSegLinetoVerticalRel.prototype.y = 0;

/**
 * The {@link SVGPathSegCurvetoCubicSmoothAbs} interface corresponds to an
 * "absolute smooth cubic curveto" (S) path data command.
 * @constructor
 * @augments SVGPathSeg
 */
function SVGPathSegCurvetoCubicSmoothAbs() {
}
SVGPathSegCurvetoCubicSmoothAbs.prototype = new SVGPathSeg();

// Implementation of the svg::SVGPathSegCurvetoCubicSmoothAbs W3C IDL interface
/**
 * The absolute X coordinate for the end point of this path segment.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGPathSegCurvetoCubicSmoothAbs.prototype.x = 0;
/**
 * The absolute Y coordinate for the end point of this path segment.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGPathSegCurvetoCubicSmoothAbs.prototype.y = 0;
/**
 * The absolute X coordinate for the second control point.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGPathSegCurvetoCubicSmoothAbs.prototype.x2 = 0;
/**
 * The absolute Y coordinate for the second control point.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGPathSegCurvetoCubicSmoothAbs.prototype.y2 = 0;

/**
 * The {@link SVGPathSegCurvetoCubicSmoothRel} interface corresponds to a
 * "relative smooth cubic curveto" (s) path data command.
 * @constructor
 * @augments SVGPathSeg
 */
function SVGPathSegCurvetoCubicSmoothRel() {
}
SVGPathSegCurvetoCubicSmoothRel.prototype = new SVGPathSeg();

// Implementation of the svg::SVGPathSegCurvetoCubicSmoothRel W3C IDL interface
/**
 * The relative X coordinate for the end point of this path segment.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGPathSegCurvetoCubicSmoothRel.prototype.x = 0;
/**
 * The relative Y coordinate for the end point of this path segment.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGPathSegCurvetoCubicSmoothRel.prototype.y = 0;
/**
 * The relative X coordinate for the second control point.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGPathSegCurvetoCubicSmoothRel.prototype.x2 = 0;
/**
 * The relative Y coordinate for the second control point.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGPathSegCurvetoCubicSmoothRel.prototype.y2 = 0;

/**
 * The {@link SVGPathSegCurvetoQuadraticSmoothAbs} interface corresponds to
 * an "absolute smooth cubic curveto" (T) path data command.
 * @constructor
 * @augments SVGPathSeg
 */
function SVGPathSegCurvetoQuadraticSmoothAbs() {
}
SVGPathSegCurvetoQuadraticSmoothAbs.prototype = new SVGPathSeg();

// Implementation of the svg::SVGPathSegCurvetoQuadraticSmoothAbs W3C IDL interface
/**
 * The absolute X coordinate for the end point of this path segment.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGPathSegCurvetoQuadraticSmoothAbs.prototype.x = 0;
/**
 * The absolute Y coordinate for the end point of this path segment.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGPathSegCurvetoQuadraticSmoothAbs.prototype.y = 0;

/**
 * The {@link SVGPathSegCurvetoQuadraticSmoothRel} interface corresponds to
 * a "relative smooth cubic curveto" (t) path data command.
 * @constructor
 * @augments SVGPathSeg
 */
function SVGPathSegCurvetoQuadraticSmoothRel() {
}
SVGPathSegCurvetoQuadraticSmoothRel.prototype = new SVGPathSeg();

// Implementation of the svg::SVGPathSegCurvetoQuadraticSmoothRel W3C IDL interface
/**
 * The relative X coordinate for the end point of this path segment.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGPathSegCurvetoQuadraticSmoothRel.prototype.x = 0;
/**
 * The relative Y coordinate for the end point of this path segment.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGPathSegCurvetoQuadraticSmoothRel.prototype.y = 0;

/**
 * <p>This interface defines a list of SVGPathSeg objects.</p> <p>{@link SVGPathSegList}
 * has the same attributes and methods as other SVGxxxList interfaces. Implementers
 * may consider using a single base class to implement the various SVGxxxList
 * interfaces.</p>
 * @constructor
 */
function SVGPathSegList() {
}
SVGPathSegList.prototype = {};

// Implementation of the svg::SVGPathSegList W3C IDL interface
/**
 * The number of items in the list.
 * @type Number
 */
SVGPathSegList.prototype.numberOfItems = 0;
/**
 * Clears all existing current items from the list, with the result being
 * an empty list.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised when the list
 * cannot be modified.
 */
SVGPathSegList.prototype.clear = function () {
};
/**
 * Clears all existing current items from the list and re-initializes the
 * list to hold the single item specified by the parameter.  If the inserted
 * item is already in a list, it is removed from its previous list before
 * it is inserted into this list.  The inserted item is the item itself and
 * not a copy.
 * @param {SVGPathSeg} newItem The item which should become the only member
 * of the list.
 * @returns {SVGPathSeg} The item being inserted into the list.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised when the list
 * cannot be modified.
 */
SVGPathSegList.prototype.initialize = function (newItem) {
  return new SVGPathSeg();
};
/**
 * Returns the specified item from the list.  The returned item is the item
 * itself and not a copy.  Any changes made to the item are immediately reflected
 * in the list.
 * @param {Number} index The index of the item from the list which is to be
 * returned.  The first item is number 0.
 * @returns {SVGPathSeg} The selected item.
 * @throws {DOMException} (INDEX_SIZE_ERR) Raised if the index number is
 * greater than or equal to {@link SVGPathSegList#numberOfItems}.
 */
SVGPathSegList.prototype.getItem = function (index) {
  return new SVGPathSeg();
};
/**
 * Inserts a new item into the list at the specified position. The first item
 * is number 0. If <var>newItem</var> is already in a list, it is removed
 * from its previous list before it is inserted into this list. The inserted
 * item is the item itself and not a copy. If the item is already in this
 * list, note that the index of the item to insert before is <i>before</i>
 * the removal of the item.
 * @param {SVGPathSeg} newItem The item which is to be inserted into the list.
 * @param {Number} index The index of the item before which the new item is
 * to be   inserted. The first item is number 0.  If the index is equal to
 * 0,   then the new item is inserted at the front of the list. If the index
 * is greater than or equal to {@link SVGPathSegList#numberOfItems}, then
 * the new item is   appended to the end of the list.
 * @returns {SVGPathSeg} The inserted item.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised when the list
 * cannot be modified.
 */
SVGPathSegList.prototype.insertItemBefore = function (newItem, index) {
  return new SVGPathSeg();
};
/**
 * Replaces an existing item in the list with a new item. If <var>newItem</var>
 * is already in a list, it is removed from its previous list before it is
 * inserted into this list.  The inserted item is the item itself and not
 * a copy.  If the item is already in this list, note that the index of the
 * item to replace is <i>before</i> the removal of the item.
 * @param {SVGPathSeg} newItem The item which is to be inserted into the list.
 * @param {Number} index The index of the item which is to be replaced. The
 * first   item is number 0.
 * @returns {SVGPathSeg} The inserted item.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised when the list
 * cannot be modified.
 * @throws {DOMException} (INDEX_SIZE_ERR) Raised if the index number is
 * greater than or equal to {@link SVGPathSegList#numberOfItems}.
 */
SVGPathSegList.prototype.replaceItem = function (newItem, index) {
  return new SVGPathSeg();
};
/**
 * Removes an existing item from the list.
 * @param {Number} index The index of the item which is to be removed. The
 * first   item is number 0.
 * @returns {SVGPathSeg} The removed item.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised when the list
 * cannot be modified.
 * @throws {DOMException} (INDEX_SIZE_ERR) Raised if the index number is
 * greater than or equal to {@link SVGPathSegList#numberOfItems}.
 */
SVGPathSegList.prototype.removeItem = function (index) {
  return new SVGPathSeg();
};
/**
 * Inserts a new item at the end of the list. If <var>newItem</var> is already
 * in a list, it is removed from its previous list before it is inserted into
 * this list.  The inserted item is the item itself and not a copy.
 * @param {SVGPathSeg} newItem The item which is to be inserted. The first
 * item is   number 0.
 * @returns {SVGPathSeg} The inserted item.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised when the list
 * cannot be modified.
 */
SVGPathSegList.prototype.appendItem = function (newItem) {
  return new SVGPathSeg();
};

/**
 * <p>The SVGAnimatedPathData interface supports elements which have a <span
 * class='attr-name'>'d'</span> attribute which holds SVG path data, and supports
 * the ability to animate that attribute.</p> <p>The {@link SVGAnimatedPathData}
 * interface provides two lists to access and modify the base (i.e., static)
 * contents of the <span class='attr-name'>'d'</span> attribute:</p> <ul>
 * <li>DOM attribute {@link SVGAnimatedPathData#pathSegList} provides access
 * to the static/base   contents of the <span class='attr-name'>'d'</span>
 * attribute in a form which matches one-for-one   with SVG's syntax.</li>
 * <li>DOM attribute {@link SVGAnimatedPathData#normalizedPathSegList} provides
 * normalized access   to the static/base contents of the <span class='attr-name'>'d'</span>
 * attribute where all path   data commands are expressed in terms of the
 * following subset of   {@link SVGPathSeg} types:   SVG_PATHSEG_MOVETO_ABS
 * (M),   SVG_PATHSEG_LINETO_ABS (L),   SVG_PATHSEG_CURVETO_CUBIC_ABS (C)
 * and   SVG_PATHSEG_CLOSEPATH (z).</li> </ul> <p>and two lists to access
 * the current animated values of the <span class='attr-name'>'d'</span> attribute:</p>
 * <ul>   <li>DOM attribute {@link SVGAnimatedPathData#animatedPathSegList}
 * provides access to the current   animated contents of the <span class='attr-name'>'d'</span>
 * attribute in a form which matches   one-for-one with SVG's syntax.</li>
 * <li>DOM attribute {@link SVGAnimatedPathData#animatedNormalizedPathSegList}
 * provides   normalized access to the current animated contents of the <span
 * class='attr-name'>'d'</span>   attribute where all path data commands are
 * expressed in terms of the   following subset of {@link SVGPathSeg} types:
 * SVG_PATHSEG_MOVETO_ABS (M),   SVG_PATHSEG_LINETO_ABS (L),   SVG_PATHSEG_CURVETO_CUBIC_ABS
 * (C) and   SVG_PATHSEG_CLOSEPATH (z).</li> </ul> <p>Each of the two lists
 * are always kept synchronized. Modifications to one list will immediately
 * cause the corresponding list to be modified. Modifications to {@link SVGAnimatedPathData#normalizedPathSegList}
 * might cause entries in {@link SVGAnimatedPathData#pathSegList} to be broken
 * into a set of normalized path segments.</p> <p>Additionally, the <code>path/d</code>
 * attribute on the <a href='http://www.w3.org/TR/SVG11/paths.html#PathElement'
 * title='path element specification'>path</a> element accessed via the XML
 * DOM (e.g., using the <code>getAttribute()</code> method call) will reflect
 * any changes made to {@link SVGAnimatedPathData#pathSegList} or {@link SVGAnimatedPathData#normalizedPathSegList}.</p>
 * @constructor
 */
function SVGAnimatedPathData() {
}
SVGAnimatedPathData.prototype = {};

// Implementation of the svg::SVGAnimatedPathData W3C IDL interface
/**
 * Provides access to the base (i.e., static) contents of the <span class='attr-name'>'d'</span>
 * attribute in a form which matches one-for-one with SVG's syntax. Thus,
 * if the <span class='attr-name'>'d'</span> attribute has an "absolute moveto
 * (M)" and an "absolute arcto (A)" command, then {@link SVGAnimatedPathData#pathSegList}
 * will have two entries: a SVG_PATHSEG_MOVETO_ABS and a SVG_PATHSEG_ARC_ABS.
 * @type SVGPathSegList
 */
SVGAnimatedPathData.prototype.pathSegList = new SVGPathSegList();
/**
 * <p>Provides access to the base (i.e., static) contents of the <span class='attr-name'>'d'</span>
 * attribute in a form where all path data commands are expressed in terms
 * of the following subset of {@link SVGPathSeg} types: SVG_PATHSEG_MOVETO_ABS
 * (M), SVG_PATHSEG_LINETO_ABS (L), SVG_PATHSEG_CURVETO_CUBIC_ABS (C) and
 * SVG_PATHSEG_CLOSEPATH (z). Thus, if the <span class='attr-name'>'d'</span>
 * attribute has an "absolute moveto (M)" and an "absolute arcto (A)" command,
 * then pathSegList will have one SVG_PATHSEG_MOVETO_ABS entry followed by
 * a series of SVG_PATHSEG_LINETO_ABS entries which approximate the arc. This
 * alternate representation is available to provide a simpler interface to
 * developers who would benefit from a more limited set of commands.</p> <p>The
 * only valid {@link SVGPathSeg} types are SVG_PATHSEG_MOVETO_ABS (M), SVG_PATHSEG_LINETO_ABS
 * (L), SVG_PATHSEG_CURVETO_CUBIC_ABS (C) and SVG_PATHSEG_CLOSEPATH (z).</p>
 * @type SVGPathSegList
 */
SVGAnimatedPathData.prototype.normalizedPathSegList = new SVGPathSegList();
/**
 * Provides access to the current animated contents of the <span class='attr-name'>'d'</span>
 * attribute in a form which matches one-for-one with SVG's syntax. If the
 * given attribute or property is being animated, contains the current animated
 * value of the attribute or property, and both the object itself and its
 * contents are read only. If the given attribute or property is not currently
 * being animated, contains the same value as {@link SVGAnimatedPathData#pathSegList}.
 * @type SVGPathSegList
 */
SVGAnimatedPathData.prototype.animatedPathSegList = new SVGPathSegList();
/**
 * Provides access to the current animated contents of the <span class='attr-name'>'d'</span>
 * attribute in a form where all path data commands are expressed in terms
 * of the following subset of {@link SVGPathSeg} types: SVG_PATHSEG_MOVETO_ABS
 * (M), SVG_PATHSEG_LINETO_ABS (L), SVG_PATHSEG_CURVETO_CUBIC_ABS (C) and
 * SVG_PATHSEG_CLOSEPATH (z). If the given attribute or property is being
 * animated, contains the current animated value of the attribute or property,
 * and both the object itself and its contents are read only. If the given
 * attribute or property is not currently being animated, contains the same
 * value as {@link SVGAnimatedPathData#normalizedPathSegList}.
 * @type SVGPathSegList
 */
SVGAnimatedPathData.prototype.animatedNormalizedPathSegList = new SVGPathSegList();

/**
 * The {@link SVGPathElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/paths.html#PathElement'
 * title='path element specification'>path</a> element.
 * @constructor
 * @augments SVGElement
 */
function SVGPathElement() {
}
SVGPathElement.prototype = new SVGElement();

// Implementation of the svg::SVGPathElement W3C IDL interface
/**
 * Corresponds to attribute {@link SVGPathElement#pathLength} on the given
 * <a href='http://www.w3.org/TR/SVG11/paths.html#PathElement' title='path
 * element specification'>path</a> element.
 * @type SVGAnimatedNumber
 */
SVGPathElement.prototype.pathLength = new SVGAnimatedNumber();
/**
 * Returns the user agent's computed value for the total length of the path
 * using the user agent's distance-along-a-path algorithm, as a distance in
 * the current user coordinate system.
 * @returns {Number} The total length of the path.
 */
SVGPathElement.prototype.getTotalLength = function () {
  return 0;
};
/**
 * Returns the (x,y) coordinate in user space which is <var>distance</var>
 * units along the path, utilizing the user agent's distance-along-a-path
 * algorithm.
 * @param {Number} distance The distance along the path, relative to the start
 * of   the path, as a distance in the current user coordinate system.
 * @returns {SVGPoint} The returned point in user space.
 */
SVGPathElement.prototype.getPointAtLength = function (distance) {
  return new SVGPoint();
};
/**
 * Returns the index into {@link SVGAnimatedPathData#pathSegList} which is
 * <var>distance</var> units along the path, utilizing the user agent's distance-along-a-path
 * algorithm.
 * @param {Number} distance The distance along the path, relative to the start
 * of   the path, as a distance in the current user coordinate system.
 * @returns {Number} The index of the path segment, where the first path segment
 * is   number 0.
 */
SVGPathElement.prototype.getPathSegAtLength = function (distance) {
  return 0;
};
/**
 * Returns a stand-alone, parentless {@link SVGPathSegClosePath} object.
 * @returns {SVGPathSegClosePath} A stand-alone, parentless {@link SVGPathSegClosePath}
 * object.
 */
SVGPathElement.prototype.createSVGPathSegClosePath = function () {
  return new SVGPathSegClosePath();
};
/**
 * Returns a stand-alone, parentless {@link SVGPathSegMovetoAbs} object.
 * @param {Number} x The absolute X coordinate for the end point of this path
 * segment.
 * @param {Number} y The absolute Y coordinate for the end point of this path
 * segment.
 * @returns {SVGPathSegMovetoAbs} A stand-alone, parentless {@link SVGPathSegMovetoAbs}
 * object.
 */
SVGPathElement.prototype.createSVGPathSegMovetoAbs = function (x, y) {
  return new SVGPathSegMovetoAbs();
};
/**
 * Returns a stand-alone, parentless {@link SVGPathSegMovetoRel} object.
 * @param {Number} x The relative X coordinate for the end point of this path
 * segment.
 * @param {Number} y The relative Y coordinate for the end point of this path
 * segment.
 * @returns {SVGPathSegMovetoRel} A stand-alone, parentless {@link SVGPathSegMovetoRel}
 * object.
 */
SVGPathElement.prototype.createSVGPathSegMovetoRel = function (x, y) {
  return new SVGPathSegMovetoRel();
};
/**
 * Returns a stand-alone, parentless {@link SVGPathSegLinetoAbs} object.
 * @param {Number} x The absolute X coordinate for the end point of this path
 * segment.
 * @param {Number} y The absolute Y coordinate for the end point of this path
 * segment.
 * @returns {SVGPathSegLinetoAbs} A stand-alone, parentless {@link SVGPathSegLinetoAbs}
 * object.
 */
SVGPathElement.prototype.createSVGPathSegLinetoAbs = function (x, y) {
  return new SVGPathSegLinetoAbs();
};
/**
 * Returns a stand-alone, parentless {@link SVGPathSegLinetoRel} object.
 * @param {Number} x The relative X coordinate for the end point of this path
 * segment.
 * @param {Number} y The relative Y coordinate for the end point of this path
 * segment.
 * @returns {SVGPathSegLinetoRel} A stand-alone, parentless {@link SVGPathSegLinetoRel}
 * object.
 */
SVGPathElement.prototype.createSVGPathSegLinetoRel = function (x, y) {
  return new SVGPathSegLinetoRel();
};
/**
 * Returns a stand-alone, parentless {@link SVGPathSegCurvetoCubicAbs} object.
 * @param {Number} x The absolute X coordinate for the end point of this path
 * segment.
 * @param {Number} y The absolute Y coordinate for the end point of this path
 * segment.
 * @param {Number} x1 The absolute X coordinate for the first control point.
 * @param {Number} y1 The absolute Y coordinate for the first control point.
 * @param {Number} x2 The absolute X coordinate for the second control point.
 * @param {Number} y2 The absolute Y coordinate for the second control point.
 * @returns {SVGPathSegCurvetoCubicAbs} A stand-alone, parentless {@link SVGPathSegCurvetoCubicAbs}
 * object.
 */
SVGPathElement.prototype.createSVGPathSegCurvetoCubicAbs = function (x, y, x1, y1, x2, y2) {
  return new SVGPathSegCurvetoCubicAbs();
};
/**
 * Returns a stand-alone, parentless {@link SVGPathSegCurvetoCubicRel} object.
 * @param {Number} x The relative X coordinate for the end point of this path
 * segment.
 * @param {Number} y The relative Y coordinate for the end point of this path
 * segment.
 * @param {Number} x1 The relative X coordinate for the first control point.
 * @param {Number} y1 The relative Y coordinate for the first control point.
 * @param {Number} x2 The relative X coordinate for the second control point.
 * @param {Number} y2 The relative Y coordinate for the second control point.
 * @returns {SVGPathSegCurvetoCubicRel} A stand-alone, parentless {@link SVGPathSegCurvetoCubicRel}
 * object.
 */
SVGPathElement.prototype.createSVGPathSegCurvetoCubicRel = function (x, y, x1, y1, x2, y2) {
  return new SVGPathSegCurvetoCubicRel();
};
/**
 * Returns a stand-alone, parentless {@link SVGPathSegCurvetoQuadraticAbs}
 * object.
 * @param {Number} x The absolute X coordinate for the end point of this path
 * segment.
 * @param {Number} y The absolute Y coordinate for the end point of this path
 * segment.
 * @param {Number} x1 The absolute X coordinate for the first control point.
 * @param {Number} y1 The absolute Y coordinate for the first control point.
 * @returns {SVGPathSegCurvetoQuadraticAbs} A stand-alone, parentless {@link SVGPathSegCurvetoQuadraticAbs}
 * object.
 */
SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticAbs = function (x, y, x1, y1) {
  return new SVGPathSegCurvetoQuadraticAbs();
};
/**
 * Returns a stand-alone, parentless {@link SVGPathSegCurvetoQuadraticRel}
 * object.
 * @param {Number} x The relative X coordinate for the end point of this path
 * segment.
 * @param {Number} y The relative Y coordinate for the end point of this path
 * segment.
 * @param {Number} x1 The relative X coordinate for the first control point.
 * @param {Number} y1 The relative Y coordinate for the first control point.
 * @returns {SVGPathSegCurvetoQuadraticRel} A stand-alone, parentless {@link SVGPathSegCurvetoQuadraticRel}
 * object.
 */
SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticRel = function (x, y, x1, y1) {
  return new SVGPathSegCurvetoQuadraticRel();
};
/**
 * Returns a stand-alone, parentless {@link SVGPathSegArcAbs} object.
 * @param {Number} x The absolute X coordinate for the end point of this path
 * segment.
 * @param {Number} y The absolute Y coordinate for the end point of this path
 * segment.
 * @param {Number} r1 The x-axis radius for the ellipse (i.e., r1).
 * @param {Number} r2 The y-axis radius for the ellipse (i.e., r2).
 * @param {Number} angle The rotation angle in degrees for the ellipse's x-axis
 * relative to the x-axis of the user coordinate system.
 * @param {Boolean} largeArcFlag The value of the large-arc-flag parameter.
 * @param {Boolean} sweepFlag The value of the large-arc-flag parameter.
 * @returns {SVGPathSegArcAbs} A stand-alone, parentless {@link SVGPathSegArcAbs}
 * object.
 */
SVGPathElement.prototype.createSVGPathSegArcAbs = function (x, y, r1, r2, angle, largeArcFlag, sweepFlag) {
  return new SVGPathSegArcAbs();
};
/**
 * Returns a stand-alone, parentless {@link SVGPathSegArcRel} object.
 * @param {Number} x The relative X coordinate for the end point of this path
 * segment.
 * @param {Number} y The relative Y coordinate for the end point of this path
 * segment.
 * @param {Number} r1 The x-axis radius for the ellipse (i.e., r1).
 * @param {Number} r2 The y-axis radius for the ellipse (i.e., r2).
 * @param {Number} angle The rotation angle in degrees for the ellipse's x-axis
 * relative to the x-axis of the user coordinate system.
 * @param {Boolean} largeArcFlag The value of the large-arc-flag parameter.
 * @param {Boolean} sweepFlag The value of the large-arc-flag parameter.
 * @returns {SVGPathSegArcRel} A stand-alone, parentless {@link SVGPathSegArcRel}
 * object.
 */
SVGPathElement.prototype.createSVGPathSegArcRel = function (x, y, r1, r2, angle, largeArcFlag, sweepFlag) {
  return new SVGPathSegArcRel();
};
/**
 * Returns a stand-alone, parentless {@link SVGPathSegLinetoHorizontalAbs}
 * object.
 * @param {Number} x The absolute X coordinate for the end point of this path
 * segment.
 * @returns {SVGPathSegLinetoHorizontalAbs} A stand-alone, parentless {@link SVGPathSegLinetoHorizontalAbs}
 * object.
 */
SVGPathElement.prototype.createSVGPathSegLinetoHorizontalAbs = function (x) {
  return new SVGPathSegLinetoHorizontalAbs();
};
/**
 * Returns a stand-alone, parentless {@link SVGPathSegLinetoHorizontalRel}
 * object.
 * @param {Number} x The relative X coordinate for the end point of this path
 * segment.
 * @returns {SVGPathSegLinetoHorizontalRel} A stand-alone, parentless {@link SVGPathSegLinetoHorizontalRel}
 * object.
 */
SVGPathElement.prototype.createSVGPathSegLinetoHorizontalRel = function (x) {
  return new SVGPathSegLinetoHorizontalRel();
};
/**
 * Returns a stand-alone, parentless {@link SVGPathSegLinetoVerticalAbs} object.
 * @param {Number} y The absolute Y coordinate for the end point of this path
 * segment.
 * @returns {SVGPathSegLinetoVerticalAbs} A stand-alone, parentless {@link SVGPathSegLinetoVerticalAbs}
 * object.
 */
SVGPathElement.prototype.createSVGPathSegLinetoVerticalAbs = function (y) {
  return new SVGPathSegLinetoVerticalAbs();
};
/**
 * Returns a stand-alone, parentless {@link SVGPathSegLinetoVerticalRel} object.
 * @param {Number} y The relative Y coordinate for the end point of this path
 * segment.
 * @returns {SVGPathSegLinetoVerticalRel} A stand-alone, parentless {@link SVGPathSegLinetoVerticalRel}
 * object.
 */
SVGPathElement.prototype.createSVGPathSegLinetoVerticalRel = function (y) {
  return new SVGPathSegLinetoVerticalRel();
};
/**
 * Returns a stand-alone, parentless {@link SVGPathSegCurvetoCubicSmoothAbs}
 * object.
 * @param {Number} x The absolute X coordinate for the end point of this path
 * segment.
 * @param {Number} y The absolute Y coordinate for the end point of this path
 * segment.
 * @param {Number} x2 The absolute X coordinate for the second control point.
 * @param {Number} y2 The absolute Y coordinate for the second control point.
 * @returns {SVGPathSegCurvetoCubicSmoothAbs} A stand-alone, parentless {@link SVGPathSegCurvetoCubicSmoothAbs}
 * object.
 */
SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothAbs = function (x, y, x2, y2) {
  return new SVGPathSegCurvetoCubicSmoothAbs();
};
/**
 * Returns a stand-alone, parentless {@link SVGPathSegCurvetoCubicSmoothRel}
 * object.
 * @param {Number} x The relative X coordinate for the end point of this path
 * segment.
 * @param {Number} y The relative Y coordinate for the end point of this path
 * segment.
 * @param {Number} x2 The relative X coordinate for the second control point.
 * @param {Number} y2 The relative Y coordinate for the second control point.
 * @returns {SVGPathSegCurvetoCubicSmoothRel} A stand-alone, parentless {@link SVGPathSegCurvetoCubicSmoothRel}
 * object.
 */
SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothRel = function (x, y, x2, y2) {
  return new SVGPathSegCurvetoCubicSmoothRel();
};
/**
 * Returns a stand-alone, parentless {@link SVGPathSegCurvetoQuadraticSmoothAbs}
 * object.
 * @param {Number} x The absolute X coordinate for the end point of this path
 * segment.
 * @param {Number} y The absolute Y coordinate for the end point of this path
 * segment.
 * @returns {SVGPathSegCurvetoQuadraticSmoothAbs} A stand-alone, parentless
 * {@link SVGPathSegCurvetoQuadraticSmoothAbs} object.
 */
SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothAbs = function (x, y) {
  return new SVGPathSegCurvetoQuadraticSmoothAbs();
};
/**
 * Returns a stand-alone, parentless {@link SVGPathSegCurvetoQuadraticSmoothRel}
 * object.
 * @param {Number} x The relative X coordinate for the end point of this path
 * segment.
 * @param {Number} y The relative Y coordinate for the end point of this path
 * segment.
 * @returns {SVGPathSegCurvetoQuadraticSmoothRel} A stand-alone, parentless
 * {@link SVGPathSegCurvetoQuadraticSmoothRel} object.
 */
SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothRel = function (x, y) {
  return new SVGPathSegCurvetoQuadraticSmoothRel();
};

// Implementation of the svg::SVGAnimatedPathData W3C IDL interface
/**
 * Provides access to the base (i.e., static) contents of the <span class='attr-name'>'d'</span>
 * attribute in a form which matches one-for-one with SVG's syntax. Thus,
 * if the <span class='attr-name'>'d'</span> attribute has an "absolute moveto
 * (M)" and an "absolute arcto (A)" command, then {@link SVGAnimatedPathData#pathSegList}
 * will have two entries: a SVG_PATHSEG_MOVETO_ABS and a SVG_PATHSEG_ARC_ABS.
 * @type SVGPathSegList
 */
SVGPathElement.prototype.pathSegList = new SVGPathSegList();
/**
 * <p>Provides access to the base (i.e., static) contents of the <span class='attr-name'>'d'</span>
 * attribute in a form where all path data commands are expressed in terms
 * of the following subset of {@link SVGPathSeg} types: SVG_PATHSEG_MOVETO_ABS
 * (M), SVG_PATHSEG_LINETO_ABS (L), SVG_PATHSEG_CURVETO_CUBIC_ABS (C) and
 * SVG_PATHSEG_CLOSEPATH (z). Thus, if the <span class='attr-name'>'d'</span>
 * attribute has an "absolute moveto (M)" and an "absolute arcto (A)" command,
 * then pathSegList will have one SVG_PATHSEG_MOVETO_ABS entry followed by
 * a series of SVG_PATHSEG_LINETO_ABS entries which approximate the arc. This
 * alternate representation is available to provide a simpler interface to
 * developers who would benefit from a more limited set of commands.</p> <p>The
 * only valid {@link SVGPathSeg} types are SVG_PATHSEG_MOVETO_ABS (M), SVG_PATHSEG_LINETO_ABS
 * (L), SVG_PATHSEG_CURVETO_CUBIC_ABS (C) and SVG_PATHSEG_CLOSEPATH (z).</p>
 * @type SVGPathSegList
 */
SVGPathElement.prototype.normalizedPathSegList = new SVGPathSegList();
/**
 * Provides access to the current animated contents of the <span class='attr-name'>'d'</span>
 * attribute in a form which matches one-for-one with SVG's syntax. If the
 * given attribute or property is being animated, contains the current animated
 * value of the attribute or property, and both the object itself and its
 * contents are read only. If the given attribute or property is not currently
 * being animated, contains the same value as {@link SVGAnimatedPathData#pathSegList}.
 * @type SVGPathSegList
 */
SVGPathElement.prototype.animatedPathSegList = new SVGPathSegList();
/**
 * Provides access to the current animated contents of the <span class='attr-name'>'d'</span>
 * attribute in a form where all path data commands are expressed in terms
 * of the following subset of {@link SVGPathSeg} types: SVG_PATHSEG_MOVETO_ABS
 * (M), SVG_PATHSEG_LINETO_ABS (L), SVG_PATHSEG_CURVETO_CUBIC_ABS (C) and
 * SVG_PATHSEG_CLOSEPATH (z). If the given attribute or property is being
 * animated, contains the current animated value of the attribute or property,
 * and both the object itself and its contents are read only. If the given
 * attribute or property is not currently being animated, contains the same
 * value as {@link SVGAnimatedPathData#normalizedPathSegList}.
 * @type SVGPathSegList
 */
SVGPathElement.prototype.animatedNormalizedPathSegList = new SVGPathSegList();

// Implementation of the svg::SVGExternalResourcesRequired W3C IDL interface
/**
 * Corresponds to attribute {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * on the given element. Note that the SVG DOM defines the attribute {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * as being of type {@link SVGAnimatedBoolean}, whereas the SVG language definition
 * says that {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * is not animated. Because the SVG language definition states that {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * cannot be animated, the {@link SVGAnimatedBoolean#animVal} will always
 * be the same as the {@link SVGAnimatedBoolean#baseVal}.
 * @type SVGAnimatedBoolean
 */
SVGPathElement.prototype.externalResourcesRequired = new SVGAnimatedBoolean();

// Implementation of the svg::SVGLangSpace W3C IDL interface
/**
 * Corresponds to attribute <code>xml:lang</code> on the given element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an   attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGPathElement.prototype.xmllang = "";
/**
 * Corresponds to attribute <code>xml:space</code> on the given element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an   attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGPathElement.prototype.xmlspace = "";

// Implementation of the svg::SVGLocatable W3C IDL interface
/**
 * The element which established the current viewport. Often, the nearest
 * ancestor <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement' title='svg
 * element specification'>svg</a> element. Null if the current element is
 * the outermost <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element.
 * @type SVGElement
 */
SVGPathElement.prototype.nearestViewportElement = new SVGElement();
/**
 * The farthest ancestor <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element. Null if the current
 * element is the outermost <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element.
 * @type SVGElement
 */
SVGPathElement.prototype.farthestViewportElement = new SVGElement();
/**
 * Returns the tight bounding box in current user space (i.e., after application
 * of the <code>transform</code> attribute, if any) on the geometry of all
 * contained graphics elements, exclusive of stroking, clipping, masking and
 * filter effects). Note that getBBox must return the actual bounding box
 * at the time the method was called, even in case the element has not yet
 * been rendered.
 * @returns {SVGRect} An {@link SVGRect} object that defines the bounding
 * box.
 */
SVGPathElement.prototype.getBBox = function () {
  return new SVGRect();
};
/**
 * Returns the transformation matrix from current user units (i.e., after
 * application of the <code>transform</code> attribute, if any) to the viewport
 * coordinate system for the {@link SVGLocatable#nearestViewportElement}.
 * @returns {SVGMatrix} An {@link SVGMatrix} object that defines the CTM.
 */
SVGPathElement.prototype.getCTM = function () {
  return new SVGMatrix();
};
/**
 * Returns the transformation matrix from current user units (i.e., after
 * application of the <code>transform</code> attribute, if any) to the parent
 * user agent's notice of a "pixel". For display devices, ideally this represents
 * a physical screen pixel. For other devices or environments where physical
 * pixel sizes are not known, then an algorithm similar to the CSS2 definition
 * of a "pixel" can be used instead.  Note that null is returned if this element
 * is not hooked into the document tree. This method would have been more
 * aptly named as <code>getClientCTM</code>, but the name <code>getScreenCTM</code>
 * is kept for historical reasons.
 * @returns {SVGMatrix} An {@link SVGMatrix} object that defines the given
 * transformation matrix.
 */
SVGPathElement.prototype.getScreenCTM = function () {
  return new SVGMatrix();
};
/**
 * Returns the transformation matrix from the user coordinate system on the
 * current element (after application of the <code>transform</code> attribute,
 * if any) to the user coordinate system on parameter <var>element</var> (after
 * application of its <code>transform</code> attribute, if any).
 * @param {SVGElement} element The target element.
 * @returns {SVGMatrix} An {@link SVGMatrix} object that defines the transformation.
 * @throws {SVGException} (SVG_MATRIX_NOT_INVERTABLE) Raised if the currently
 * defined transformation matrices make it impossible to compute the   given
 * matrix (e.g., because one of the transformations is singular).
 */
SVGPathElement.prototype.getTransformToElement = function (element) {
  return new SVGMatrix();
};

// Implementation of the svg::SVGStylable W3C IDL interface
/**
 * Corresponds to attribute <code>class</code> on the given element.
 * @type SVGAnimatedString
 */
SVGPathElement.prototype.className = new SVGAnimatedString();
/**
 * Corresponds to attribute <code>style attribute</code> on the given element.
 * If the user agent does not support <a href='styling.html#StylingWithCSS'>styling
 * with CSS</a>, then this attribute must always have the value of null.
 * @type CSSStyleDeclaration
 */
SVGPathElement.prototype.style = new CSSStyleDeclaration();
/**
 * Returns the base (i.e., static) value of a given <code>presentation   attribute</code>
 * as an object of type <code>CSSValue</code>. The returned object is live;
 * changes to the objects represent immediate changes to the objects to which
 * the <code>CSSValue</code> is attached. <p>Note: The <code>getPresentationAttribute</code>
 * method is deprecated, and may be dropped from future versions of the SVG
 * specification.</p>
 * @param {String} name The name of the presentation attribute whose value
 * is to be   returned.
 * @returns {CSSValue} The static/base value of the given <code>presentation
 * attribute</code>   as a <code>CSSValue</code>, or null if the given attribute
 * does not have a   specified value.
 */
SVGPathElement.prototype.getPresentationAttribute = function (name) {
  return new CSSValue();
};

// Implementation of the svg::SVGTests W3C IDL interface
/**
 * Corresponds to attribute {@link SVGTests#requiredFeatures} on the given
 * element.
 * @type SVGStringList
 */
SVGPathElement.prototype.requiredFeatures = new SVGStringList();
/**
 * Corresponds to attribute {@link SVGTests#requiredExtensions} on the given
 * element.
 * @type SVGStringList
 */
SVGPathElement.prototype.requiredExtensions = new SVGStringList();
/**
 * Corresponds to attribute {@link SVGTests#systemLanguage} on the given element.
 * @type SVGStringList
 */
SVGPathElement.prototype.systemLanguage = new SVGStringList();
/**
 * Returns true if the user agent supports the given extension, specified
 * by a URI.
 * @param {String} extension The name of the extension, expressed as a URI.
 * @returns {Boolean} True or false, depending on whether the given extension
 * is   supported.
 */
SVGPathElement.prototype.hasExtension = function (extension) {
  return false;
};

// Implementation of the svg::SVGTransformable W3C IDL interface
/**
 * Corresponds to attribute {@link SVGTransformable#transform} on the given
 * element.
 * @type SVGAnimatedTransformList
 */
SVGPathElement.prototype.transform = new SVGAnimatedTransformList();

/**
 * The {@link SVGRectElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/shapes.html#RectElement'
 * title='rect element specification'>rect</a> element.
 * @constructor
 * @augments SVGElement
 */
function SVGRectElement() {
}
SVGRectElement.prototype = new SVGElement();

// Implementation of the svg::SVGRectElement W3C IDL interface
/**
 * Corresponds to attribute {@link SVGRectElement#x} on the given <a href='http://www.w3.org/TR/SVG11/shapes.html#RectElement'
 * title='rect element specification'>rect</a> element.
 * @type SVGAnimatedLength
 */
SVGRectElement.prototype.x = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGRectElement#y} on the given <a href='http://www.w3.org/TR/SVG11/shapes.html#RectElement'
 * title='rect element specification'>rect</a> element.
 * @type SVGAnimatedLength
 */
SVGRectElement.prototype.y = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGRectElement#width} on the given <a href='http://www.w3.org/TR/SVG11/shapes.html#RectElement'
 * title='rect element specification'>rect</a> element.
 * @type SVGAnimatedLength
 */
SVGRectElement.prototype.width = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGRectElement#height} on the given <a
 * href='http://www.w3.org/TR/SVG11/shapes.html#RectElement' title='rect element
 * specification'>rect</a> element.
 * @type SVGAnimatedLength
 */
SVGRectElement.prototype.height = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGRectElement#rx} on the given <a href='http://www.w3.org/TR/SVG11/shapes.html#RectElement'
 * title='rect element specification'>rect</a> element.
 * @type SVGAnimatedLength
 */
SVGRectElement.prototype.rx = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGRectElement#ry} on the given <a href='http://www.w3.org/TR/SVG11/shapes.html#RectElement'
 * title='rect element specification'>rect</a> element.
 * @type SVGAnimatedLength
 */
SVGRectElement.prototype.ry = new SVGAnimatedLength();

// Implementation of the svg::SVGExternalResourcesRequired W3C IDL interface
/**
 * Corresponds to attribute {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * on the given element. Note that the SVG DOM defines the attribute {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * as being of type {@link SVGAnimatedBoolean}, whereas the SVG language definition
 * says that {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * is not animated. Because the SVG language definition states that {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * cannot be animated, the {@link SVGAnimatedBoolean#animVal} will always
 * be the same as the {@link SVGAnimatedBoolean#baseVal}.
 * @type SVGAnimatedBoolean
 */
SVGRectElement.prototype.externalResourcesRequired = new SVGAnimatedBoolean();

// Implementation of the svg::SVGLangSpace W3C IDL interface
/**
 * Corresponds to attribute <code>xml:lang</code> on the given element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an   attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGRectElement.prototype.xmllang = "";
/**
 * Corresponds to attribute <code>xml:space</code> on the given element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an   attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGRectElement.prototype.xmlspace = "";

// Implementation of the svg::SVGLocatable W3C IDL interface
/**
 * The element which established the current viewport. Often, the nearest
 * ancestor <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement' title='svg
 * element specification'>svg</a> element. Null if the current element is
 * the outermost <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element.
 * @type SVGElement
 */
SVGRectElement.prototype.nearestViewportElement = new SVGElement();
/**
 * The farthest ancestor <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element. Null if the current
 * element is the outermost <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element.
 * @type SVGElement
 */
SVGRectElement.prototype.farthestViewportElement = new SVGElement();
/**
 * Returns the tight bounding box in current user space (i.e., after application
 * of the <code>transform</code> attribute, if any) on the geometry of all
 * contained graphics elements, exclusive of stroking, clipping, masking and
 * filter effects). Note that getBBox must return the actual bounding box
 * at the time the method was called, even in case the element has not yet
 * been rendered.
 * @returns {SVGRect} An {@link SVGRect} object that defines the bounding
 * box.
 */
SVGRectElement.prototype.getBBox = function () {
  return new SVGRect();
};
/**
 * Returns the transformation matrix from current user units (i.e., after
 * application of the <code>transform</code> attribute, if any) to the viewport
 * coordinate system for the {@link SVGLocatable#nearestViewportElement}.
 * @returns {SVGMatrix} An {@link SVGMatrix} object that defines the CTM.
 */
SVGRectElement.prototype.getCTM = function () {
  return new SVGMatrix();
};
/**
 * Returns the transformation matrix from current user units (i.e., after
 * application of the <code>transform</code> attribute, if any) to the parent
 * user agent's notice of a "pixel". For display devices, ideally this represents
 * a physical screen pixel. For other devices or environments where physical
 * pixel sizes are not known, then an algorithm similar to the CSS2 definition
 * of a "pixel" can be used instead.  Note that null is returned if this element
 * is not hooked into the document tree. This method would have been more
 * aptly named as <code>getClientCTM</code>, but the name <code>getScreenCTM</code>
 * is kept for historical reasons.
 * @returns {SVGMatrix} An {@link SVGMatrix} object that defines the given
 * transformation matrix.
 */
SVGRectElement.prototype.getScreenCTM = function () {
  return new SVGMatrix();
};
/**
 * Returns the transformation matrix from the user coordinate system on the
 * current element (after application of the <code>transform</code> attribute,
 * if any) to the user coordinate system on parameter <var>element</var> (after
 * application of its <code>transform</code> attribute, if any).
 * @param {SVGElement} element The target element.
 * @returns {SVGMatrix} An {@link SVGMatrix} object that defines the transformation.
 * @throws {SVGException} (SVG_MATRIX_NOT_INVERTABLE) Raised if the currently
 * defined transformation matrices make it impossible to compute the   given
 * matrix (e.g., because one of the transformations is singular).
 */
SVGRectElement.prototype.getTransformToElement = function (element) {
  return new SVGMatrix();
};

// Implementation of the svg::SVGStylable W3C IDL interface
/**
 * Corresponds to attribute <code>class</code> on the given element.
 * @type SVGAnimatedString
 */
SVGRectElement.prototype.className = new SVGAnimatedString();
/**
 * Corresponds to attribute <code>style attribute</code> on the given element.
 * If the user agent does not support <a href='styling.html#StylingWithCSS'>styling
 * with CSS</a>, then this attribute must always have the value of null.
 * @type CSSStyleDeclaration
 */
SVGRectElement.prototype.style = new CSSStyleDeclaration();
/**
 * Returns the base (i.e., static) value of a given <code>presentation   attribute</code>
 * as an object of type <code>CSSValue</code>. The returned object is live;
 * changes to the objects represent immediate changes to the objects to which
 * the <code>CSSValue</code> is attached. <p>Note: The <code>getPresentationAttribute</code>
 * method is deprecated, and may be dropped from future versions of the SVG
 * specification.</p>
 * @param {String} name The name of the presentation attribute whose value
 * is to be   returned.
 * @returns {CSSValue} The static/base value of the given <code>presentation
 * attribute</code>   as a <code>CSSValue</code>, or null if the given attribute
 * does not have a   specified value.
 */
SVGRectElement.prototype.getPresentationAttribute = function (name) {
  return new CSSValue();
};

// Implementation of the svg::SVGTests W3C IDL interface
/**
 * Corresponds to attribute {@link SVGTests#requiredFeatures} on the given
 * element.
 * @type SVGStringList
 */
SVGRectElement.prototype.requiredFeatures = new SVGStringList();
/**
 * Corresponds to attribute {@link SVGTests#requiredExtensions} on the given
 * element.
 * @type SVGStringList
 */
SVGRectElement.prototype.requiredExtensions = new SVGStringList();
/**
 * Corresponds to attribute {@link SVGTests#systemLanguage} on the given element.
 * @type SVGStringList
 */
SVGRectElement.prototype.systemLanguage = new SVGStringList();
/**
 * Returns true if the user agent supports the given extension, specified
 * by a URI.
 * @param {String} extension The name of the extension, expressed as a URI.
 * @returns {Boolean} True or false, depending on whether the given extension
 * is   supported.
 */
SVGRectElement.prototype.hasExtension = function (extension) {
  return false;
};

// Implementation of the svg::SVGTransformable W3C IDL interface
/**
 * Corresponds to attribute {@link SVGTransformable#transform} on the given
 * element.
 * @type SVGAnimatedTransformList
 */
SVGRectElement.prototype.transform = new SVGAnimatedTransformList();

/**
 * The {@link SVGCircleElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/shapes.html#CircleElement'
 * title='circle element specification'>circle</a> element.
 * @constructor
 * @augments SVGElement
 */
function SVGCircleElement() {
}
SVGCircleElement.prototype = new SVGElement();

// Implementation of the svg::SVGCircleElement W3C IDL interface
/**
 * Corresponds to attribute {@link SVGCircleElement#cx} on the given <a href='http://www.w3.org/TR/SVG11/shapes.html#CircleElement'
 * title='circle element specification'>circle</a> element.
 * @type SVGAnimatedLength
 */
SVGCircleElement.prototype.cx = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGCircleElement#cy} on the given <a href='http://www.w3.org/TR/SVG11/shapes.html#CircleElement'
 * title='circle element specification'>circle</a> element.
 * @type SVGAnimatedLength
 */
SVGCircleElement.prototype.cy = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGCircleElement#r} on the given <a href='http://www.w3.org/TR/SVG11/shapes.html#CircleElement'
 * title='circle element specification'>circle</a> element.
 * @type SVGAnimatedLength
 */
SVGCircleElement.prototype.r = new SVGAnimatedLength();

// Implementation of the svg::SVGExternalResourcesRequired W3C IDL interface
/**
 * Corresponds to attribute {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * on the given element. Note that the SVG DOM defines the attribute {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * as being of type {@link SVGAnimatedBoolean}, whereas the SVG language definition
 * says that {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * is not animated. Because the SVG language definition states that {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * cannot be animated, the {@link SVGAnimatedBoolean#animVal} will always
 * be the same as the {@link SVGAnimatedBoolean#baseVal}.
 * @type SVGAnimatedBoolean
 */
SVGCircleElement.prototype.externalResourcesRequired = new SVGAnimatedBoolean();

// Implementation of the svg::SVGLangSpace W3C IDL interface
/**
 * Corresponds to attribute <code>xml:lang</code> on the given element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an   attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGCircleElement.prototype.xmllang = "";
/**
 * Corresponds to attribute <code>xml:space</code> on the given element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an   attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGCircleElement.prototype.xmlspace = "";

// Implementation of the svg::SVGLocatable W3C IDL interface
/**
 * The element which established the current viewport. Often, the nearest
 * ancestor <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement' title='svg
 * element specification'>svg</a> element. Null if the current element is
 * the outermost <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element.
 * @type SVGElement
 */
SVGCircleElement.prototype.nearestViewportElement = new SVGElement();
/**
 * The farthest ancestor <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element. Null if the current
 * element is the outermost <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element.
 * @type SVGElement
 */
SVGCircleElement.prototype.farthestViewportElement = new SVGElement();
/**
 * Returns the tight bounding box in current user space (i.e., after application
 * of the <code>transform</code> attribute, if any) on the geometry of all
 * contained graphics elements, exclusive of stroking, clipping, masking and
 * filter effects). Note that getBBox must return the actual bounding box
 * at the time the method was called, even in case the element has not yet
 * been rendered.
 * @returns {SVGRect} An {@link SVGRect} object that defines the bounding
 * box.
 */
SVGCircleElement.prototype.getBBox = function () {
  return new SVGRect();
};
/**
 * Returns the transformation matrix from current user units (i.e., after
 * application of the <code>transform</code> attribute, if any) to the viewport
 * coordinate system for the {@link SVGLocatable#nearestViewportElement}.
 * @returns {SVGMatrix} An {@link SVGMatrix} object that defines the CTM.
 */
SVGCircleElement.prototype.getCTM = function () {
  return new SVGMatrix();
};
/**
 * Returns the transformation matrix from current user units (i.e., after
 * application of the <code>transform</code> attribute, if any) to the parent
 * user agent's notice of a "pixel". For display devices, ideally this represents
 * a physical screen pixel. For other devices or environments where physical
 * pixel sizes are not known, then an algorithm similar to the CSS2 definition
 * of a "pixel" can be used instead.  Note that null is returned if this element
 * is not hooked into the document tree. This method would have been more
 * aptly named as <code>getClientCTM</code>, but the name <code>getScreenCTM</code>
 * is kept for historical reasons.
 * @returns {SVGMatrix} An {@link SVGMatrix} object that defines the given
 * transformation matrix.
 */
SVGCircleElement.prototype.getScreenCTM = function () {
  return new SVGMatrix();
};
/**
 * Returns the transformation matrix from the user coordinate system on the
 * current element (after application of the <code>transform</code> attribute,
 * if any) to the user coordinate system on parameter <var>element</var> (after
 * application of its <code>transform</code> attribute, if any).
 * @param {SVGElement} element The target element.
 * @returns {SVGMatrix} An {@link SVGMatrix} object that defines the transformation.
 * @throws {SVGException} (SVG_MATRIX_NOT_INVERTABLE) Raised if the currently
 * defined transformation matrices make it impossible to compute the   given
 * matrix (e.g., because one of the transformations is singular).
 */
SVGCircleElement.prototype.getTransformToElement = function (element) {
  return new SVGMatrix();
};

// Implementation of the svg::SVGStylable W3C IDL interface
/**
 * Corresponds to attribute <code>class</code> on the given element.
 * @type SVGAnimatedString
 */
SVGCircleElement.prototype.className = new SVGAnimatedString();
/**
 * Corresponds to attribute <code>style attribute</code> on the given element.
 * If the user agent does not support <a href='styling.html#StylingWithCSS'>styling
 * with CSS</a>, then this attribute must always have the value of null.
 * @type CSSStyleDeclaration
 */
SVGCircleElement.prototype.style = new CSSStyleDeclaration();
/**
 * Returns the base (i.e., static) value of a given <code>presentation   attribute</code>
 * as an object of type <code>CSSValue</code>. The returned object is live;
 * changes to the objects represent immediate changes to the objects to which
 * the <code>CSSValue</code> is attached. <p>Note: The <code>getPresentationAttribute</code>
 * method is deprecated, and may be dropped from future versions of the SVG
 * specification.</p>
 * @param {String} name The name of the presentation attribute whose value
 * is to be   returned.
 * @returns {CSSValue} The static/base value of the given <code>presentation
 * attribute</code>   as a <code>CSSValue</code>, or null if the given attribute
 * does not have a   specified value.
 */
SVGCircleElement.prototype.getPresentationAttribute = function (name) {
  return new CSSValue();
};

// Implementation of the svg::SVGTests W3C IDL interface
/**
 * Corresponds to attribute {@link SVGTests#requiredFeatures} on the given
 * element.
 * @type SVGStringList
 */
SVGCircleElement.prototype.requiredFeatures = new SVGStringList();
/**
 * Corresponds to attribute {@link SVGTests#requiredExtensions} on the given
 * element.
 * @type SVGStringList
 */
SVGCircleElement.prototype.requiredExtensions = new SVGStringList();
/**
 * Corresponds to attribute {@link SVGTests#systemLanguage} on the given element.
 * @type SVGStringList
 */
SVGCircleElement.prototype.systemLanguage = new SVGStringList();
/**
 * Returns true if the user agent supports the given extension, specified
 * by a URI.
 * @param {String} extension The name of the extension, expressed as a URI.
 * @returns {Boolean} True or false, depending on whether the given extension
 * is   supported.
 */
SVGCircleElement.prototype.hasExtension = function (extension) {
  return false;
};

// Implementation of the svg::SVGTransformable W3C IDL interface
/**
 * Corresponds to attribute {@link SVGTransformable#transform} on the given
 * element.
 * @type SVGAnimatedTransformList
 */
SVGCircleElement.prototype.transform = new SVGAnimatedTransformList();

/**
 * The {@link SVGEllipseElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/shapes.html#EllipseElement'
 * title='ellipse element specification'>ellipse</a> element.
 * @constructor
 * @augments SVGElement
 */
function SVGEllipseElement() {
}
SVGEllipseElement.prototype = new SVGElement();

// Implementation of the svg::SVGEllipseElement W3C IDL interface
/**
 * Corresponds to attribute {@link SVGEllipseElement#cx} on the given <a href='http://www.w3.org/TR/SVG11/shapes.html#EllipseElement'
 * title='ellipse element specification'>ellipse</a> element.
 * @type SVGAnimatedLength
 */
SVGEllipseElement.prototype.cx = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGEllipseElement#cy} on the given <a href='http://www.w3.org/TR/SVG11/shapes.html#EllipseElement'
 * title='ellipse element specification'>ellipse</a> element.
 * @type SVGAnimatedLength
 */
SVGEllipseElement.prototype.cy = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGEllipseElement#rx} on the given <a href='http://www.w3.org/TR/SVG11/shapes.html#EllipseElement'
 * title='ellipse element specification'>ellipse</a> element.
 * @type SVGAnimatedLength
 */
SVGEllipseElement.prototype.rx = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGEllipseElement#ry} on the given <a href='http://www.w3.org/TR/SVG11/shapes.html#EllipseElement'
 * title='ellipse element specification'>ellipse</a> element.
 * @type SVGAnimatedLength
 */
SVGEllipseElement.prototype.ry = new SVGAnimatedLength();

// Implementation of the svg::SVGExternalResourcesRequired W3C IDL interface
/**
 * Corresponds to attribute {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * on the given element. Note that the SVG DOM defines the attribute {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * as being of type {@link SVGAnimatedBoolean}, whereas the SVG language definition
 * says that {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * is not animated. Because the SVG language definition states that {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * cannot be animated, the {@link SVGAnimatedBoolean#animVal} will always
 * be the same as the {@link SVGAnimatedBoolean#baseVal}.
 * @type SVGAnimatedBoolean
 */
SVGEllipseElement.prototype.externalResourcesRequired = new SVGAnimatedBoolean();

// Implementation of the svg::SVGLangSpace W3C IDL interface
/**
 * Corresponds to attribute <code>xml:lang</code> on the given element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an   attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGEllipseElement.prototype.xmllang = "";
/**
 * Corresponds to attribute <code>xml:space</code> on the given element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an   attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGEllipseElement.prototype.xmlspace = "";

// Implementation of the svg::SVGLocatable W3C IDL interface
/**
 * The element which established the current viewport. Often, the nearest
 * ancestor <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement' title='svg
 * element specification'>svg</a> element. Null if the current element is
 * the outermost <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element.
 * @type SVGElement
 */
SVGEllipseElement.prototype.nearestViewportElement = new SVGElement();
/**
 * The farthest ancestor <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element. Null if the current
 * element is the outermost <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element.
 * @type SVGElement
 */
SVGEllipseElement.prototype.farthestViewportElement = new SVGElement();
/**
 * Returns the tight bounding box in current user space (i.e., after application
 * of the <code>transform</code> attribute, if any) on the geometry of all
 * contained graphics elements, exclusive of stroking, clipping, masking and
 * filter effects). Note that getBBox must return the actual bounding box
 * at the time the method was called, even in case the element has not yet
 * been rendered.
 * @returns {SVGRect} An {@link SVGRect} object that defines the bounding
 * box.
 */
SVGEllipseElement.prototype.getBBox = function () {
  return new SVGRect();
};
/**
 * Returns the transformation matrix from current user units (i.e., after
 * application of the <code>transform</code> attribute, if any) to the viewport
 * coordinate system for the {@link SVGLocatable#nearestViewportElement}.
 * @returns {SVGMatrix} An {@link SVGMatrix} object that defines the CTM.
 */
SVGEllipseElement.prototype.getCTM = function () {
  return new SVGMatrix();
};
/**
 * Returns the transformation matrix from current user units (i.e., after
 * application of the <code>transform</code> attribute, if any) to the parent
 * user agent's notice of a "pixel". For display devices, ideally this represents
 * a physical screen pixel. For other devices or environments where physical
 * pixel sizes are not known, then an algorithm similar to the CSS2 definition
 * of a "pixel" can be used instead.  Note that null is returned if this element
 * is not hooked into the document tree. This method would have been more
 * aptly named as <code>getClientCTM</code>, but the name <code>getScreenCTM</code>
 * is kept for historical reasons.
 * @returns {SVGMatrix} An {@link SVGMatrix} object that defines the given
 * transformation matrix.
 */
SVGEllipseElement.prototype.getScreenCTM = function () {
  return new SVGMatrix();
};
/**
 * Returns the transformation matrix from the user coordinate system on the
 * current element (after application of the <code>transform</code> attribute,
 * if any) to the user coordinate system on parameter <var>element</var> (after
 * application of its <code>transform</code> attribute, if any).
 * @param {SVGElement} element The target element.
 * @returns {SVGMatrix} An {@link SVGMatrix} object that defines the transformation.
 * @throws {SVGException} (SVG_MATRIX_NOT_INVERTABLE) Raised if the currently
 * defined transformation matrices make it impossible to compute the   given
 * matrix (e.g., because one of the transformations is singular).
 */
SVGEllipseElement.prototype.getTransformToElement = function (element) {
  return new SVGMatrix();
};

// Implementation of the svg::SVGStylable W3C IDL interface
/**
 * Corresponds to attribute <code>class</code> on the given element.
 * @type SVGAnimatedString
 */
SVGEllipseElement.prototype.className = new SVGAnimatedString();
/**
 * Corresponds to attribute <code>style attribute</code> on the given element.
 * If the user agent does not support <a href='styling.html#StylingWithCSS'>styling
 * with CSS</a>, then this attribute must always have the value of null.
 * @type CSSStyleDeclaration
 */
SVGEllipseElement.prototype.style = new CSSStyleDeclaration();
/**
 * Returns the base (i.e., static) value of a given <code>presentation   attribute</code>
 * as an object of type <code>CSSValue</code>. The returned object is live;
 * changes to the objects represent immediate changes to the objects to which
 * the <code>CSSValue</code> is attached. <p>Note: The <code>getPresentationAttribute</code>
 * method is deprecated, and may be dropped from future versions of the SVG
 * specification.</p>
 * @param {String} name The name of the presentation attribute whose value
 * is to be   returned.
 * @returns {CSSValue} The static/base value of the given <code>presentation
 * attribute</code>   as a <code>CSSValue</code>, or null if the given attribute
 * does not have a   specified value.
 */
SVGEllipseElement.prototype.getPresentationAttribute = function (name) {
  return new CSSValue();
};

// Implementation of the svg::SVGTests W3C IDL interface
/**
 * Corresponds to attribute {@link SVGTests#requiredFeatures} on the given
 * element.
 * @type SVGStringList
 */
SVGEllipseElement.prototype.requiredFeatures = new SVGStringList();
/**
 * Corresponds to attribute {@link SVGTests#requiredExtensions} on the given
 * element.
 * @type SVGStringList
 */
SVGEllipseElement.prototype.requiredExtensions = new SVGStringList();
/**
 * Corresponds to attribute {@link SVGTests#systemLanguage} on the given element.
 * @type SVGStringList
 */
SVGEllipseElement.prototype.systemLanguage = new SVGStringList();
/**
 * Returns true if the user agent supports the given extension, specified
 * by a URI.
 * @param {String} extension The name of the extension, expressed as a URI.
 * @returns {Boolean} True or false, depending on whether the given extension
 * is   supported.
 */
SVGEllipseElement.prototype.hasExtension = function (extension) {
  return false;
};

// Implementation of the svg::SVGTransformable W3C IDL interface
/**
 * Corresponds to attribute {@link SVGTransformable#transform} on the given
 * element.
 * @type SVGAnimatedTransformList
 */
SVGEllipseElement.prototype.transform = new SVGAnimatedTransformList();

/**
 * The {@link SVGLineElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/shapes.html#LineElement'
 * title='line element specification'>line</a> element.
 * @constructor
 * @augments SVGElement
 */
function SVGLineElement() {
}
SVGLineElement.prototype = new SVGElement();

// Implementation of the svg::SVGLineElement W3C IDL interface
/**
 * Corresponds to attribute {@link SVGLineElement#x1} on the given <a href='http://www.w3.org/TR/SVG11/shapes.html#LineElement'
 * title='line element specification'>line</a> element.
 * @type SVGAnimatedLength
 */
SVGLineElement.prototype.x1 = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGLineElement#y1} on the given <a href='http://www.w3.org/TR/SVG11/shapes.html#LineElement'
 * title='line element specification'>line</a> element.
 * @type SVGAnimatedLength
 */
SVGLineElement.prototype.y1 = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGLineElement#x2} on the given <a href='http://www.w3.org/TR/SVG11/shapes.html#LineElement'
 * title='line element specification'>line</a> element.
 * @type SVGAnimatedLength
 */
SVGLineElement.prototype.x2 = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGLineElement#y2} on the given <a href='http://www.w3.org/TR/SVG11/shapes.html#LineElement'
 * title='line element specification'>line</a> element.
 * @type SVGAnimatedLength
 */
SVGLineElement.prototype.y2 = new SVGAnimatedLength();

// Implementation of the svg::SVGExternalResourcesRequired W3C IDL interface
/**
 * Corresponds to attribute {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * on the given element. Note that the SVG DOM defines the attribute {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * as being of type {@link SVGAnimatedBoolean}, whereas the SVG language definition
 * says that {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * is not animated. Because the SVG language definition states that {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * cannot be animated, the {@link SVGAnimatedBoolean#animVal} will always
 * be the same as the {@link SVGAnimatedBoolean#baseVal}.
 * @type SVGAnimatedBoolean
 */
SVGLineElement.prototype.externalResourcesRequired = new SVGAnimatedBoolean();

// Implementation of the svg::SVGLangSpace W3C IDL interface
/**
 * Corresponds to attribute <code>xml:lang</code> on the given element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an   attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGLineElement.prototype.xmllang = "";
/**
 * Corresponds to attribute <code>xml:space</code> on the given element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an   attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGLineElement.prototype.xmlspace = "";

// Implementation of the svg::SVGLocatable W3C IDL interface
/**
 * The element which established the current viewport. Often, the nearest
 * ancestor <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement' title='svg
 * element specification'>svg</a> element. Null if the current element is
 * the outermost <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element.
 * @type SVGElement
 */
SVGLineElement.prototype.nearestViewportElement = new SVGElement();
/**
 * The farthest ancestor <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element. Null if the current
 * element is the outermost <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element.
 * @type SVGElement
 */
SVGLineElement.prototype.farthestViewportElement = new SVGElement();
/**
 * Returns the tight bounding box in current user space (i.e., after application
 * of the <code>transform</code> attribute, if any) on the geometry of all
 * contained graphics elements, exclusive of stroking, clipping, masking and
 * filter effects). Note that getBBox must return the actual bounding box
 * at the time the method was called, even in case the element has not yet
 * been rendered.
 * @returns {SVGRect} An {@link SVGRect} object that defines the bounding
 * box.
 */
SVGLineElement.prototype.getBBox = function () {
  return new SVGRect();
};
/**
 * Returns the transformation matrix from current user units (i.e., after
 * application of the <code>transform</code> attribute, if any) to the viewport
 * coordinate system for the {@link SVGLocatable#nearestViewportElement}.
 * @returns {SVGMatrix} An {@link SVGMatrix} object that defines the CTM.
 */
SVGLineElement.prototype.getCTM = function () {
  return new SVGMatrix();
};
/**
 * Returns the transformation matrix from current user units (i.e., after
 * application of the <code>transform</code> attribute, if any) to the parent
 * user agent's notice of a "pixel". For display devices, ideally this represents
 * a physical screen pixel. For other devices or environments where physical
 * pixel sizes are not known, then an algorithm similar to the CSS2 definition
 * of a "pixel" can be used instead.  Note that null is returned if this element
 * is not hooked into the document tree. This method would have been more
 * aptly named as <code>getClientCTM</code>, but the name <code>getScreenCTM</code>
 * is kept for historical reasons.
 * @returns {SVGMatrix} An {@link SVGMatrix} object that defines the given
 * transformation matrix.
 */
SVGLineElement.prototype.getScreenCTM = function () {
  return new SVGMatrix();
};
/**
 * Returns the transformation matrix from the user coordinate system on the
 * current element (after application of the <code>transform</code> attribute,
 * if any) to the user coordinate system on parameter <var>element</var> (after
 * application of its <code>transform</code> attribute, if any).
 * @param {SVGElement} element The target element.
 * @returns {SVGMatrix} An {@link SVGMatrix} object that defines the transformation.
 * @throws {SVGException} (SVG_MATRIX_NOT_INVERTABLE) Raised if the currently
 * defined transformation matrices make it impossible to compute the   given
 * matrix (e.g., because one of the transformations is singular).
 */
SVGLineElement.prototype.getTransformToElement = function (element) {
  return new SVGMatrix();
};

// Implementation of the svg::SVGStylable W3C IDL interface
/**
 * Corresponds to attribute <code>class</code> on the given element.
 * @type SVGAnimatedString
 */
SVGLineElement.prototype.className = new SVGAnimatedString();
/**
 * Corresponds to attribute <code>style attribute</code> on the given element.
 * If the user agent does not support <a href='styling.html#StylingWithCSS'>styling
 * with CSS</a>, then this attribute must always have the value of null.
 * @type CSSStyleDeclaration
 */
SVGLineElement.prototype.style = new CSSStyleDeclaration();
/**
 * Returns the base (i.e., static) value of a given <code>presentation   attribute</code>
 * as an object of type <code>CSSValue</code>. The returned object is live;
 * changes to the objects represent immediate changes to the objects to which
 * the <code>CSSValue</code> is attached. <p>Note: The <code>getPresentationAttribute</code>
 * method is deprecated, and may be dropped from future versions of the SVG
 * specification.</p>
 * @param {String} name The name of the presentation attribute whose value
 * is to be   returned.
 * @returns {CSSValue} The static/base value of the given <code>presentation
 * attribute</code>   as a <code>CSSValue</code>, or null if the given attribute
 * does not have a   specified value.
 */
SVGLineElement.prototype.getPresentationAttribute = function (name) {
  return new CSSValue();
};

// Implementation of the svg::SVGTests W3C IDL interface
/**
 * Corresponds to attribute {@link SVGTests#requiredFeatures} on the given
 * element.
 * @type SVGStringList
 */
SVGLineElement.prototype.requiredFeatures = new SVGStringList();
/**
 * Corresponds to attribute {@link SVGTests#requiredExtensions} on the given
 * element.
 * @type SVGStringList
 */
SVGLineElement.prototype.requiredExtensions = new SVGStringList();
/**
 * Corresponds to attribute {@link SVGTests#systemLanguage} on the given element.
 * @type SVGStringList
 */
SVGLineElement.prototype.systemLanguage = new SVGStringList();
/**
 * Returns true if the user agent supports the given extension, specified
 * by a URI.
 * @param {String} extension The name of the extension, expressed as a URI.
 * @returns {Boolean} True or false, depending on whether the given extension
 * is   supported.
 */
SVGLineElement.prototype.hasExtension = function (extension) {
  return false;
};

// Implementation of the svg::SVGTransformable W3C IDL interface
/**
 * Corresponds to attribute {@link SVGTransformable#transform} on the given
 * element.
 * @type SVGAnimatedTransformList
 */
SVGLineElement.prototype.transform = new SVGAnimatedTransformList();

/**
 * <p>The {@link SVGAnimatedPoints} interface supports elements which have
 * a <span class='attr-name'>'points'</span> attribute which holds a list
 * of coordinate values and which support the ability to animate that attribute.</p>
 * <p>Additionally, the <span class='attr-name'>'points'</span> attribute
 * on the original element accessed via the XML DOM (e.g., using the <code>getAttribute()</code>
 * method call) will reflect any changes made to {@link SVGAnimatedPoints#points}.</p>
 * @constructor
 */
function SVGAnimatedPoints() {
}
SVGAnimatedPoints.prototype = {};

// Implementation of the svg::SVGAnimatedPoints W3C IDL interface
/**
 * Provides access to the base (i.e., static) contents of the <span class='attr-name'>'points'</span>
 * attribute.
 * @type SVGPointList
 */
SVGAnimatedPoints.prototype.points = new SVGPointList();
/**
 * Provides access to the current animated contents of the <span class='attr-name'>'points'</span>
 * attribute. If the given attribute or property is being animated, contains
 * the current animated value of the attribute or property. If the given attribute
 * or property is not currently being animated, contains the same value as
 * {@link SVGAnimatedPoints#points}.
 * @type SVGPointList
 */
SVGAnimatedPoints.prototype.animatedPoints = new SVGPointList();

/**
 * The {@link SVGPolylineElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/shapes.html#PolylineElement'
 * title='polyline element specification'>polyline</a> element.
 * @constructor
 * @augments SVGElement
 */
function SVGPolylineElement() {
}
SVGPolylineElement.prototype = new SVGElement();

// Implementation of the svg::SVGPolylineElement W3C IDL interface

// Implementation of the svg::SVGAnimatedPoints W3C IDL interface
/**
 * Provides access to the base (i.e., static) contents of the <span class='attr-name'>'points'</span>
 * attribute.
 * @type SVGPointList
 */
SVGPolylineElement.prototype.points = new SVGPointList();
/**
 * Provides access to the current animated contents of the <span class='attr-name'>'points'</span>
 * attribute. If the given attribute or property is being animated, contains
 * the current animated value of the attribute or property. If the given attribute
 * or property is not currently being animated, contains the same value as
 * {@link SVGAnimatedPoints#points}.
 * @type SVGPointList
 */
SVGPolylineElement.prototype.animatedPoints = new SVGPointList();

// Implementation of the svg::SVGExternalResourcesRequired W3C IDL interface
/**
 * Corresponds to attribute {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * on the given element. Note that the SVG DOM defines the attribute {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * as being of type {@link SVGAnimatedBoolean}, whereas the SVG language definition
 * says that {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * is not animated. Because the SVG language definition states that {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * cannot be animated, the {@link SVGAnimatedBoolean#animVal} will always
 * be the same as the {@link SVGAnimatedBoolean#baseVal}.
 * @type SVGAnimatedBoolean
 */
SVGPolylineElement.prototype.externalResourcesRequired = new SVGAnimatedBoolean();

// Implementation of the svg::SVGLangSpace W3C IDL interface
/**
 * Corresponds to attribute <code>xml:lang</code> on the given element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an   attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGPolylineElement.prototype.xmllang = "";
/**
 * Corresponds to attribute <code>xml:space</code> on the given element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an   attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGPolylineElement.prototype.xmlspace = "";

// Implementation of the svg::SVGLocatable W3C IDL interface
/**
 * The element which established the current viewport. Often, the nearest
 * ancestor <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement' title='svg
 * element specification'>svg</a> element. Null if the current element is
 * the outermost <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element.
 * @type SVGElement
 */
SVGPolylineElement.prototype.nearestViewportElement = new SVGElement();
/**
 * The farthest ancestor <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element. Null if the current
 * element is the outermost <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element.
 * @type SVGElement
 */
SVGPolylineElement.prototype.farthestViewportElement = new SVGElement();
/**
 * Returns the tight bounding box in current user space (i.e., after application
 * of the <code>transform</code> attribute, if any) on the geometry of all
 * contained graphics elements, exclusive of stroking, clipping, masking and
 * filter effects). Note that getBBox must return the actual bounding box
 * at the time the method was called, even in case the element has not yet
 * been rendered.
 * @returns {SVGRect} An {@link SVGRect} object that defines the bounding
 * box.
 */
SVGPolylineElement.prototype.getBBox = function () {
  return new SVGRect();
};
/**
 * Returns the transformation matrix from current user units (i.e., after
 * application of the <code>transform</code> attribute, if any) to the viewport
 * coordinate system for the {@link SVGLocatable#nearestViewportElement}.
 * @returns {SVGMatrix} An {@link SVGMatrix} object that defines the CTM.
 */
SVGPolylineElement.prototype.getCTM = function () {
  return new SVGMatrix();
};
/**
 * Returns the transformation matrix from current user units (i.e., after
 * application of the <code>transform</code> attribute, if any) to the parent
 * user agent's notice of a "pixel". For display devices, ideally this represents
 * a physical screen pixel. For other devices or environments where physical
 * pixel sizes are not known, then an algorithm similar to the CSS2 definition
 * of a "pixel" can be used instead.  Note that null is returned if this element
 * is not hooked into the document tree. This method would have been more
 * aptly named as <code>getClientCTM</code>, but the name <code>getScreenCTM</code>
 * is kept for historical reasons.
 * @returns {SVGMatrix} An {@link SVGMatrix} object that defines the given
 * transformation matrix.
 */
SVGPolylineElement.prototype.getScreenCTM = function () {
  return new SVGMatrix();
};
/**
 * Returns the transformation matrix from the user coordinate system on the
 * current element (after application of the <code>transform</code> attribute,
 * if any) to the user coordinate system on parameter <var>element</var> (after
 * application of its <code>transform</code> attribute, if any).
 * @param {SVGElement} element The target element.
 * @returns {SVGMatrix} An {@link SVGMatrix} object that defines the transformation.
 * @throws {SVGException} (SVG_MATRIX_NOT_INVERTABLE) Raised if the currently
 * defined transformation matrices make it impossible to compute the   given
 * matrix (e.g., because one of the transformations is singular).
 */
SVGPolylineElement.prototype.getTransformToElement = function (element) {
  return new SVGMatrix();
};

// Implementation of the svg::SVGStylable W3C IDL interface
/**
 * Corresponds to attribute <code>class</code> on the given element.
 * @type SVGAnimatedString
 */
SVGPolylineElement.prototype.className = new SVGAnimatedString();
/**
 * Corresponds to attribute <code>style attribute</code> on the given element.
 * If the user agent does not support <a href='styling.html#StylingWithCSS'>styling
 * with CSS</a>, then this attribute must always have the value of null.
 * @type CSSStyleDeclaration
 */
SVGPolylineElement.prototype.style = new CSSStyleDeclaration();
/**
 * Returns the base (i.e., static) value of a given <code>presentation   attribute</code>
 * as an object of type <code>CSSValue</code>. The returned object is live;
 * changes to the objects represent immediate changes to the objects to which
 * the <code>CSSValue</code> is attached. <p>Note: The <code>getPresentationAttribute</code>
 * method is deprecated, and may be dropped from future versions of the SVG
 * specification.</p>
 * @param {String} name The name of the presentation attribute whose value
 * is to be   returned.
 * @returns {CSSValue} The static/base value of the given <code>presentation
 * attribute</code>   as a <code>CSSValue</code>, or null if the given attribute
 * does not have a   specified value.
 */
SVGPolylineElement.prototype.getPresentationAttribute = function (name) {
  return new CSSValue();
};

// Implementation of the svg::SVGTests W3C IDL interface
/**
 * Corresponds to attribute {@link SVGTests#requiredFeatures} on the given
 * element.
 * @type SVGStringList
 */
SVGPolylineElement.prototype.requiredFeatures = new SVGStringList();
/**
 * Corresponds to attribute {@link SVGTests#requiredExtensions} on the given
 * element.
 * @type SVGStringList
 */
SVGPolylineElement.prototype.requiredExtensions = new SVGStringList();
/**
 * Corresponds to attribute {@link SVGTests#systemLanguage} on the given element.
 * @type SVGStringList
 */
SVGPolylineElement.prototype.systemLanguage = new SVGStringList();
/**
 * Returns true if the user agent supports the given extension, specified
 * by a URI.
 * @param {String} extension The name of the extension, expressed as a URI.
 * @returns {Boolean} True or false, depending on whether the given extension
 * is   supported.
 */
SVGPolylineElement.prototype.hasExtension = function (extension) {
  return false;
};

// Implementation of the svg::SVGTransformable W3C IDL interface
/**
 * Corresponds to attribute {@link SVGTransformable#transform} on the given
 * element.
 * @type SVGAnimatedTransformList
 */
SVGPolylineElement.prototype.transform = new SVGAnimatedTransformList();

/**
 * The {@link SVGPolygonElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/shapes.html#PolygonElement'
 * title='polygon element specification'>polygon</a> element.
 * @constructor
 * @augments SVGElement
 */
function SVGPolygonElement() {
}
SVGPolygonElement.prototype = new SVGElement();

// Implementation of the svg::SVGPolygonElement W3C IDL interface

// Implementation of the svg::SVGAnimatedPoints W3C IDL interface
/**
 * Provides access to the base (i.e., static) contents of the <span class='attr-name'>'points'</span>
 * attribute.
 * @type SVGPointList
 */
SVGPolygonElement.prototype.points = new SVGPointList();
/**
 * Provides access to the current animated contents of the <span class='attr-name'>'points'</span>
 * attribute. If the given attribute or property is being animated, contains
 * the current animated value of the attribute or property. If the given attribute
 * or property is not currently being animated, contains the same value as
 * {@link SVGAnimatedPoints#points}.
 * @type SVGPointList
 */
SVGPolygonElement.prototype.animatedPoints = new SVGPointList();

// Implementation of the svg::SVGExternalResourcesRequired W3C IDL interface
/**
 * Corresponds to attribute {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * on the given element. Note that the SVG DOM defines the attribute {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * as being of type {@link SVGAnimatedBoolean}, whereas the SVG language definition
 * says that {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * is not animated. Because the SVG language definition states that {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * cannot be animated, the {@link SVGAnimatedBoolean#animVal} will always
 * be the same as the {@link SVGAnimatedBoolean#baseVal}.
 * @type SVGAnimatedBoolean
 */
SVGPolygonElement.prototype.externalResourcesRequired = new SVGAnimatedBoolean();

// Implementation of the svg::SVGLangSpace W3C IDL interface
/**
 * Corresponds to attribute <code>xml:lang</code> on the given element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an   attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGPolygonElement.prototype.xmllang = "";
/**
 * Corresponds to attribute <code>xml:space</code> on the given element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an   attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGPolygonElement.prototype.xmlspace = "";

// Implementation of the svg::SVGLocatable W3C IDL interface
/**
 * The element which established the current viewport. Often, the nearest
 * ancestor <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement' title='svg
 * element specification'>svg</a> element. Null if the current element is
 * the outermost <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element.
 * @type SVGElement
 */
SVGPolygonElement.prototype.nearestViewportElement = new SVGElement();
/**
 * The farthest ancestor <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element. Null if the current
 * element is the outermost <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element.
 * @type SVGElement
 */
SVGPolygonElement.prototype.farthestViewportElement = new SVGElement();
/**
 * Returns the tight bounding box in current user space (i.e., after application
 * of the <code>transform</code> attribute, if any) on the geometry of all
 * contained graphics elements, exclusive of stroking, clipping, masking and
 * filter effects). Note that getBBox must return the actual bounding box
 * at the time the method was called, even in case the element has not yet
 * been rendered.
 * @returns {SVGRect} An {@link SVGRect} object that defines the bounding
 * box.
 */
SVGPolygonElement.prototype.getBBox = function () {
  return new SVGRect();
};
/**
 * Returns the transformation matrix from current user units (i.e., after
 * application of the <code>transform</code> attribute, if any) to the viewport
 * coordinate system for the {@link SVGLocatable#nearestViewportElement}.
 * @returns {SVGMatrix} An {@link SVGMatrix} object that defines the CTM.
 */
SVGPolygonElement.prototype.getCTM = function () {
  return new SVGMatrix();
};
/**
 * Returns the transformation matrix from current user units (i.e., after
 * application of the <code>transform</code> attribute, if any) to the parent
 * user agent's notice of a "pixel". For display devices, ideally this represents
 * a physical screen pixel. For other devices or environments where physical
 * pixel sizes are not known, then an algorithm similar to the CSS2 definition
 * of a "pixel" can be used instead.  Note that null is returned if this element
 * is not hooked into the document tree. This method would have been more
 * aptly named as <code>getClientCTM</code>, but the name <code>getScreenCTM</code>
 * is kept for historical reasons.
 * @returns {SVGMatrix} An {@link SVGMatrix} object that defines the given
 * transformation matrix.
 */
SVGPolygonElement.prototype.getScreenCTM = function () {
  return new SVGMatrix();
};
/**
 * Returns the transformation matrix from the user coordinate system on the
 * current element (after application of the <code>transform</code> attribute,
 * if any) to the user coordinate system on parameter <var>element</var> (after
 * application of its <code>transform</code> attribute, if any).
 * @param {SVGElement} element The target element.
 * @returns {SVGMatrix} An {@link SVGMatrix} object that defines the transformation.
 * @throws {SVGException} (SVG_MATRIX_NOT_INVERTABLE) Raised if the currently
 * defined transformation matrices make it impossible to compute the   given
 * matrix (e.g., because one of the transformations is singular).
 */
SVGPolygonElement.prototype.getTransformToElement = function (element) {
  return new SVGMatrix();
};

// Implementation of the svg::SVGStylable W3C IDL interface
/**
 * Corresponds to attribute <code>class</code> on the given element.
 * @type SVGAnimatedString
 */
SVGPolygonElement.prototype.className = new SVGAnimatedString();
/**
 * Corresponds to attribute <code>style attribute</code> on the given element.
 * If the user agent does not support <a href='styling.html#StylingWithCSS'>styling
 * with CSS</a>, then this attribute must always have the value of null.
 * @type CSSStyleDeclaration
 */
SVGPolygonElement.prototype.style = new CSSStyleDeclaration();
/**
 * Returns the base (i.e., static) value of a given <code>presentation   attribute</code>
 * as an object of type <code>CSSValue</code>. The returned object is live;
 * changes to the objects represent immediate changes to the objects to which
 * the <code>CSSValue</code> is attached. <p>Note: The <code>getPresentationAttribute</code>
 * method is deprecated, and may be dropped from future versions of the SVG
 * specification.</p>
 * @param {String} name The name of the presentation attribute whose value
 * is to be   returned.
 * @returns {CSSValue} The static/base value of the given <code>presentation
 * attribute</code>   as a <code>CSSValue</code>, or null if the given attribute
 * does not have a   specified value.
 */
SVGPolygonElement.prototype.getPresentationAttribute = function (name) {
  return new CSSValue();
};

// Implementation of the svg::SVGTests W3C IDL interface
/**
 * Corresponds to attribute {@link SVGTests#requiredFeatures} on the given
 * element.
 * @type SVGStringList
 */
SVGPolygonElement.prototype.requiredFeatures = new SVGStringList();
/**
 * Corresponds to attribute {@link SVGTests#requiredExtensions} on the given
 * element.
 * @type SVGStringList
 */
SVGPolygonElement.prototype.requiredExtensions = new SVGStringList();
/**
 * Corresponds to attribute {@link SVGTests#systemLanguage} on the given element.
 * @type SVGStringList
 */
SVGPolygonElement.prototype.systemLanguage = new SVGStringList();
/**
 * Returns true if the user agent supports the given extension, specified
 * by a URI.
 * @param {String} extension The name of the extension, expressed as a URI.
 * @returns {Boolean} True or false, depending on whether the given extension
 * is   supported.
 */
SVGPolygonElement.prototype.hasExtension = function (extension) {
  return false;
};

// Implementation of the svg::SVGTransformable W3C IDL interface
/**
 * Corresponds to attribute {@link SVGTransformable#transform} on the given
 * element.
 * @type SVGAnimatedTransformList
 */
SVGPolygonElement.prototype.transform = new SVGAnimatedTransformList();

/**
 * <p>The {@link SVGTextContentElement} is inherited by various text-related
 * interfaces, such as {@link SVGTextElement}, {@link SVGTSpanElement}, {@link SVGTRefElement},
 * {@link SVGAltGlyphElement} and {@link SVGTextPathElement}.</p> <p>For the
 * methods on this interface that refer to an index to a character or a number
 * of characters, these references are to be interpreted as an index to a
 * UTF-16 code unit or a number of UTF-16 code units, respectively. This is
 * for consistency with DOM Level 2 Core, where methods on the <code>CharacterData</code>
 * interface use UTF-16 code units as indexes and counts within the character
 * data. Thus for example, if the text content of a <a href='http://www.w3.org/TR/SVG11/text.html#TextElement'
 * title='text element specification'>text</a> element is a single non-BMP
 * character, such as U+10000, then invoking {@link SVGTextContentElement#getNumberOfChars}
 * on that element will return 2 since there are two UTF-16 code units (the
 * surrogate pair) used to represent that one character.</p>
 * @constructor
 * @augments SVGElement
 */
function SVGTextContentElement() {
}
SVGTextContentElement.prototype = new SVGElement();

// Implementation of the svg::SVGTextContentElement W3C IDL interface
/**
 * The enumeration was set to a value that is not one of predefined types.
 * It is invalid to attempt to define a new value of this type or to attempt
 * to switch an existing value to this type.
 * @constant
 * @type Number
 */
SVGTextContentElement.LENGTHADJUST_UNKNOWN = 0;
/**
 * Corresponds to value <span class='attr-value'>'spacing'</span>.
 * @constant
 * @type Number
 */
SVGTextContentElement.LENGTHADJUST_SPACING = 1;
/**
 * Corresponds to value <span class='attr-value'>'spacingAndGlyphs'</span>.
 * @constant
 * @type Number
 */
SVGTextContentElement.LENGTHADJUST_SPACINGANDGLYPHS = 2;
/**
 * Corresponds to attribute <span class='attr-name'>'textLength'</span> on
 * the given element.
 * @type SVGAnimatedLength
 */
SVGTextContentElement.prototype.textLength = new SVGAnimatedLength();
/**
 * Corresponds to attribute <span class='attr-name'>'lengthAdjust'</span>
 * on the given element.  The value must be one of the length adjust constants
 * defined on this interface.
 * @type SVGAnimatedEnumeration
 */
SVGTextContentElement.prototype.lengthAdjust = new SVGAnimatedEnumeration();
/**
 * Returns the total number of characters available for rendering within the
 * current element, which includes referenced characters from <a href='http://www.w3.org/TR/SVG11/text.html#TRefElement'
 * title='tref element specification'>tref</a> reference, regardless of whether
 * they will be rendered. Effectively, this is equivalent to the length of
 * the <a href="http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core.html#Node3-textContent">Node::textContent</a>
 * attribute from DOM Level 3 Core ([<a href="refs.html#ref-DOM3">DOM3</a>],
 * section 1.4), if that attribute also expanded <a href='http://www.w3.org/TR/SVG11/text.html#TRefElement'
 * title='tref element specification'>tref</a> elements.
 * @returns {Number} Total number of characters.
 */
SVGTextContentElement.prototype.getNumberOfChars = function () {
  return 0;
};
/**
 * The total sum of all of the advance values from rendering all of the characters
 * within this element, including the advance value on the glyphs (horizontal
 * or vertical), the effect of properties <code>kerning</code>, <code>letter-spacing</code>
 * and <code>word-spacing</code> and adjustments due to attributes <code>tspan/dx</code>
 * and <code>tspan/dy</code> on <a href='http://www.w3.org/TR/SVG11/text.html#TSpanElement'
 * title='tspan element specification'>tspan</a> elements. For non-rendering
 * environments, the user agent shall make reasonable assumptions about glyph
 * metrics.
 * @returns {Number} The text advance distance.
 */
SVGTextContentElement.prototype.getComputedTextLength = function () {
  return 0;
};
/**
 * The total sum of all of the advance values from rendering the specified
 * substring of the characters, including the advance value on the glyphs
 * (horizontal or vertical), the effect of properties <code>kerning</code>,
 * <code>letter-spacing</code> and <code>word-spacing</code> and adjustments
 * due to attributes <code>tspan/dx</code> and <code>tspan/dy</code> on <a
 * href='http://www.w3.org/TR/SVG11/text.html#TSpanElement' title='tspan element
 * specification'>tspan</a> elements. For non-rendering environments, the
 * user agent shall make reasonable assumptions about glyph metrics.  If multiple
 * consecutive characters are rendered inseparably (e.g., as a single glyph
 * or a sequence of glyphs, or because the range encompasses half of a surrogate
 * pair), and nchars is greater than 0 then the measured range shall be expanded
 * so that each of the inseparable characters are included.
 * @param {Number} charnum The index of the first character in the substring,
 * where   the first character has an index of 0.
 * @param {Number} nchars The number of characters in the substring. If nchars
 * specifies more characters than are available, then the substring will
 * consist of all characters starting with charnum until the end of the
 * list of characters.
 * @returns {Number} The text advance distance.
 * @throws {DOMException} (INDEX_SIZE_ERR) Raised if <var>charnum</var> or
 * <var>nchars</var> is negative or if <var>charnum</var> is greater than
 * or equal to the number of characters at this node.
 */
SVGTextContentElement.prototype.getSubStringLength = function (charnum, nchars) {
  return 0;
};
/**
 * Returns the current text position before rendering the character in the
 * user coordinate system for rendering the glyph(s) that correspond to the
 * specified character. The current text position has already taken into account
 * the effects of any inter-character adjustments due to properties <code>kerning</code>,
 * <code>letter-spacing</code> and <code>word-spacing</code> and adjustments
 * due to attributes <span class='attr-name'>'x'</span>, <span class='attr-name'>'y'</span>,
 * <span class='attr-name'>'dx'</span> and <span class='attr-name'>'dy'</span>.
 * If multiple consecutive characters are rendered inseparably (e.g., as a
 * single glyph or a sequence of glyphs), then each of the inseparable characters
 * will return the start position for the first glyph.
 * @param {Number} charnum The index of the character, where the first character
 * has   an index of 0.
 * @returns {SVGPoint} The character's start position.
 * @throws {DOMException} (INDEX_SIZE_ERR) Raised if the <var>charnum</var>
 * is   negative or if <var>charnum</var> is greater than or equal to the
 * number of characters at this node.
 */
SVGTextContentElement.prototype.getStartPositionOfChar = function (charnum) {
  return new SVGPoint();
};
/**
 * Returns the current text position after rendering the character in the
 * user coordinate system for rendering the glyph(s) that correspond to the
 * specified character. This current text position does <em>not</em> take
 * into account the effects of any inter-character adjustments to prepare
 * for the next character, such as properties <code>kerning</code>, <code>letter-spacing</code>
 * and <code>word-spacing</code> and adjustments due to attributes <span class='attr-name'>'x'</span>,
 * <span class='attr-name'>'y'</span>, <span class='attr-name'>'dx'</span>
 * and <span class='attr-name'>'dy'</span>. If multiple consecutive characters
 * are rendered inseparably (e.g., as a single glyph or a sequence of glyphs),
 * then each of the inseparable characters will return the end position for
 * the last glyph.
 * @param {Number} charnum The index of the character, where the first character
 * has   an index of 0.
 * @returns {SVGPoint} The character's end position.
 * @throws {DOMException} (INDEX_SIZE_ERR) Raised if the <var>charnum</var>
 * is   negative or if <var>charnum</var> is greater than or equal to the
 * number of characters at this node.
 */
SVGTextContentElement.prototype.getEndPositionOfChar = function (charnum) {
  return new SVGPoint();
};
/**
 * Returns a tightest rectangle which defines the minimum and maximum X and
 * Y values in the user coordinate system for rendering the glyph(s) that
 * correspond to the specified character. The calculations assume that all
 * glyphs occupy the full standard glyph cell for the font. If multiple consecutive
 * characters are rendered inseparably (e.g., as a single glyph or a sequence
 * of glyphs), then each of the inseparable characters will return the same
 * extent.
 * @param {Number} charnum The index of the character, where the first character
 * has   an index of 0.
 * @returns {SVGRect} The rectangle which encloses all of the rendered glyph(s).
 * @throws {DOMException} (INDEX_SIZE_ERR) Raised if the <var>charnum</var>
 * is   negative or if <var>charnum</var> is greater than or equal to the
 * number of characters at this node.
 */
SVGTextContentElement.prototype.getExtentOfChar = function (charnum) {
  return new SVGRect();
};
/**
 * Returns the rotation value relative to the current user coordinate system
 * used to render the glyph(s) corresponding to the specified character. If
 * multiple glyph(s) are used to render the given character and the glyphs
 * each have different rotations (e.g., due to text-on-a-path), the user agent
 * shall return an average value (e.g., the rotation angle at the midpoint
 * along the path for all glyphs used to render this character). The rotation
 * value represents the rotation that is supplemental to any rotation due
 * to properties <code>glyph-orientation-horizontal</code> and <code>glyph-orientation-vertical</code>;
 * thus, any glyph rotations due to these properties are not included into
 * the returned rotation value. If multiple consecutive characters are rendered
 * inseparably (e.g., as a single glyph or a sequence of glyphs), then each
 * of the inseparable characters will return the same rotation value.
 * @param {Number} charnum The index of the character, where the first character
 * has   an index of 0.
 * @returns {Number} The rotation angle.
 * @throws {DOMException} (INDEX_SIZE_ERR) Raised if the <var>charnum</var>
 * is   negative or if <var>charnum</var> is greater than or equal to the
 * number of characters at this node.
 */
SVGTextContentElement.prototype.getRotationOfChar = function (charnum) {
  return 0;
};
/**
 * Returns the index of the character whose corresponding glyph cell bounding
 * box contains the specified point. The calculations assume that all glyphs
 * occupy the full standard glyph cell for the font. If no such character
 * exists, a value of -1 is returned. If multiple such characters exist, the
 * character within the element whose glyphs were rendered last (i.e., take
 * into account any reordering such as for bidirectional text) is used. If
 * multiple consecutive characters are rendered inseparably (e.g., as a single
 * glyph or a sequence of glyphs), then the user agent shall allocate an equal
 * percentage of the text advance amount to each of the contributing characters
 * in determining which of the characters is chosen.
 * @param {SVGPoint} point A point in user space.
 * @returns {Number} The index of the character which is at the given point,
 * where   the first character has an index of 0.
 */
SVGTextContentElement.prototype.getCharNumAtPosition = function (point) {
  return 0;
};
/**
 * Causes the specified substring to be selected just as if the user selected
 * the substring interactively.
 * @param {Number} charnum The index of the start character which is at the
 * given   point, where the first character has an index of 0.
 * @param {Number} nchars The number of characters in the substring. If nchars
 * specifies more characters than are available, then the substring   will
 * consist of all characters starting with charnum until the end   of the
 * list of characters.
 * @throws {DOMException} (INDEX_SIZE_ERR) Raised if <var>charnum</var> or
 * <var>nchars</var> is negative or if <var>charnum</var> is greater   than
 * or equal to the number of characters at this node.
 */
SVGTextContentElement.prototype.selectSubString = function (charnum, nchars) {
};

// Implementation of the svg::SVGExternalResourcesRequired W3C IDL interface
/**
 * Corresponds to attribute {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * on the given element. Note that the SVG DOM defines the attribute {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * as being of type {@link SVGAnimatedBoolean}, whereas the SVG language definition
 * says that {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * is not animated. Because the SVG language definition states that {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * cannot be animated, the {@link SVGAnimatedBoolean#animVal} will always
 * be the same as the {@link SVGAnimatedBoolean#baseVal}.
 * @type SVGAnimatedBoolean
 */
SVGTextContentElement.prototype.externalResourcesRequired = new SVGAnimatedBoolean();

// Implementation of the svg::SVGLangSpace W3C IDL interface
/**
 * Corresponds to attribute <code>xml:lang</code> on the given element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an   attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGTextContentElement.prototype.xmllang = "";
/**
 * Corresponds to attribute <code>xml:space</code> on the given element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an   attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGTextContentElement.prototype.xmlspace = "";

// Implementation of the svg::SVGStylable W3C IDL interface
/**
 * Corresponds to attribute <code>class</code> on the given element.
 * @type SVGAnimatedString
 */
SVGTextContentElement.prototype.className = new SVGAnimatedString();
/**
 * Corresponds to attribute <code>style attribute</code> on the given element.
 * If the user agent does not support <a href='styling.html#StylingWithCSS'>styling
 * with CSS</a>, then this attribute must always have the value of null.
 * @type CSSStyleDeclaration
 */
SVGTextContentElement.prototype.style = new CSSStyleDeclaration();
/**
 * Returns the base (i.e., static) value of a given <code>presentation   attribute</code>
 * as an object of type <code>CSSValue</code>. The returned object is live;
 * changes to the objects represent immediate changes to the objects to which
 * the <code>CSSValue</code> is attached. <p>Note: The <code>getPresentationAttribute</code>
 * method is deprecated, and may be dropped from future versions of the SVG
 * specification.</p>
 * @param {String} name The name of the presentation attribute whose value
 * is to be   returned.
 * @returns {CSSValue} The static/base value of the given <code>presentation
 * attribute</code>   as a <code>CSSValue</code>, or null if the given attribute
 * does not have a   specified value.
 */
SVGTextContentElement.prototype.getPresentationAttribute = function (name) {
  return new CSSValue();
};

// Implementation of the svg::SVGTests W3C IDL interface
/**
 * Corresponds to attribute {@link SVGTests#requiredFeatures} on the given
 * element.
 * @type SVGStringList
 */
SVGTextContentElement.prototype.requiredFeatures = new SVGStringList();
/**
 * Corresponds to attribute {@link SVGTests#requiredExtensions} on the given
 * element.
 * @type SVGStringList
 */
SVGTextContentElement.prototype.requiredExtensions = new SVGStringList();
/**
 * Corresponds to attribute {@link SVGTests#systemLanguage} on the given element.
 * @type SVGStringList
 */
SVGTextContentElement.prototype.systemLanguage = new SVGStringList();
/**
 * Returns true if the user agent supports the given extension, specified
 * by a URI.
 * @param {String} extension The name of the extension, expressed as a URI.
 * @returns {Boolean} True or false, depending on whether the given extension
 * is   supported.
 */
SVGTextContentElement.prototype.hasExtension = function (extension) {
  return false;
};

/**
 * The {@link SVGTextPositioningElement} interface is inherited by text-related
 * interfaces: {@link SVGTextElement}, {@link SVGTSpanElement}, {@link SVGTRefElement}
 * and {@link SVGAltGlyphElement}.
 * @constructor
 * @augments SVGTextContentElement
 */
function SVGTextPositioningElement() {
}
SVGTextPositioningElement.prototype = new SVGTextContentElement();

// Implementation of the svg::SVGTextPositioningElement W3C IDL interface
/**
 * Corresponds to attribute <span class='attr-name'>'x'</span> on the given
 * element.
 * @type SVGAnimatedLengthList
 */
SVGTextPositioningElement.prototype.x = new SVGAnimatedLengthList();
/**
 * Corresponds to attribute <span class='attr-name'>'y'</span> on the given
 * element.
 * @type SVGAnimatedLengthList
 */
SVGTextPositioningElement.prototype.y = new SVGAnimatedLengthList();
/**
 * Corresponds to attribute <span class='attr-name'>'dx'</span> on the given
 * element.
 * @type SVGAnimatedLengthList
 */
SVGTextPositioningElement.prototype.dx = new SVGAnimatedLengthList();
/**
 * Corresponds to attribute <span class='attr-name'>'dy'</span> on the given
 * element.
 * @type SVGAnimatedLengthList
 */
SVGTextPositioningElement.prototype.dy = new SVGAnimatedLengthList();
/**
 * Corresponds to attribute <span class='attr-name'>'rotate'</span> on the
 * given element.
 * @type SVGAnimatedNumberList
 */
SVGTextPositioningElement.prototype.rotate = new SVGAnimatedNumberList();

/**
 * The {@link SVGTextElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/text.html#TextElement'
 * title='text element specification'>text</a> element.
 * @constructor
 * @augments SVGTextPositioningElement
 */
function SVGTextElement() {
}
SVGTextElement.prototype = new SVGTextPositioningElement();

// Implementation of the svg::SVGTextElement W3C IDL interface

// Implementation of the svg::SVGLocatable W3C IDL interface
/**
 * The element which established the current viewport. Often, the nearest
 * ancestor <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement' title='svg
 * element specification'>svg</a> element. Null if the current element is
 * the outermost <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element.
 * @type SVGElement
 */
SVGTextElement.prototype.nearestViewportElement = new SVGElement();
/**
 * The farthest ancestor <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element. Null if the current
 * element is the outermost <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element.
 * @type SVGElement
 */
SVGTextElement.prototype.farthestViewportElement = new SVGElement();
/**
 * Returns the tight bounding box in current user space (i.e., after application
 * of the <code>transform</code> attribute, if any) on the geometry of all
 * contained graphics elements, exclusive of stroking, clipping, masking and
 * filter effects). Note that getBBox must return the actual bounding box
 * at the time the method was called, even in case the element has not yet
 * been rendered.
 * @returns {SVGRect} An {@link SVGRect} object that defines the bounding
 * box.
 */
SVGTextElement.prototype.getBBox = function () {
  return new SVGRect();
};
/**
 * Returns the transformation matrix from current user units (i.e., after
 * application of the <code>transform</code> attribute, if any) to the viewport
 * coordinate system for the {@link SVGLocatable#nearestViewportElement}.
 * @returns {SVGMatrix} An {@link SVGMatrix} object that defines the CTM.
 */
SVGTextElement.prototype.getCTM = function () {
  return new SVGMatrix();
};
/**
 * Returns the transformation matrix from current user units (i.e., after
 * application of the <code>transform</code> attribute, if any) to the parent
 * user agent's notice of a "pixel". For display devices, ideally this represents
 * a physical screen pixel. For other devices or environments where physical
 * pixel sizes are not known, then an algorithm similar to the CSS2 definition
 * of a "pixel" can be used instead.  Note that null is returned if this element
 * is not hooked into the document tree. This method would have been more
 * aptly named as <code>getClientCTM</code>, but the name <code>getScreenCTM</code>
 * is kept for historical reasons.
 * @returns {SVGMatrix} An {@link SVGMatrix} object that defines the given
 * transformation matrix.
 */
SVGTextElement.prototype.getScreenCTM = function () {
  return new SVGMatrix();
};
/**
 * Returns the transformation matrix from the user coordinate system on the
 * current element (after application of the <code>transform</code> attribute,
 * if any) to the user coordinate system on parameter <var>element</var> (after
 * application of its <code>transform</code> attribute, if any).
 * @param {SVGElement} element The target element.
 * @returns {SVGMatrix} An {@link SVGMatrix} object that defines the transformation.
 * @throws {SVGException} (SVG_MATRIX_NOT_INVERTABLE) Raised if the currently
 * defined transformation matrices make it impossible to compute the   given
 * matrix (e.g., because one of the transformations is singular).
 */
SVGTextElement.prototype.getTransformToElement = function (element) {
  return new SVGMatrix();
};

// Implementation of the svg::SVGTransformable W3C IDL interface
/**
 * Corresponds to attribute {@link SVGTransformable#transform} on the given
 * element.
 * @type SVGAnimatedTransformList
 */
SVGTextElement.prototype.transform = new SVGAnimatedTransformList();

/**
 * The {@link SVGTSpanElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/text.html#TSpanElement'
 * title='tspan element specification'>tspan</a> element.
 * @constructor
 * @augments SVGTextPositioningElement
 */
function SVGTSpanElement() {
}
SVGTSpanElement.prototype = new SVGTextPositioningElement();

// Implementation of the svg::SVGTSpanElement W3C IDL interface

/**
 * The {@link SVGTRefElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/text.html#TRefElement'
 * title='tref element specification'>tref</a> element.
 * @constructor
 * @augments SVGTextPositioningElement
 */
function SVGTRefElement() {
}
SVGTRefElement.prototype = new SVGTextPositioningElement();

// Implementation of the svg::SVGTRefElement W3C IDL interface

// Implementation of the svg::SVGURIReference W3C IDL interface
/**
 * Corresponds to attribute <span class='attr-name'>'xlink:href'</span> on
 * the given element.
 * @type SVGAnimatedString
 */
SVGTRefElement.prototype.href = new SVGAnimatedString();

/**
 * The {@link SVGTextPathElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/text.html#TextPathElement'
 * title='textPath element specification'>textPath</a> element.
 * @constructor
 * @augments SVGTextContentElement
 */
function SVGTextPathElement() {
}
SVGTextPathElement.prototype = new SVGTextContentElement();

// Implementation of the svg::SVGTextPathElement W3C IDL interface
/**
 * The enumeration was set to a value that is not one of predefined types.
 * It is invalid to attempt to define a new value of this type or to attempt
 * to switch an existing value to this type.
 * @constant
 * @type Number
 */
SVGTextPathElement.TEXTPATH_METHODTYPE_UNKNOWN = 0;
/**
 * Corresponds to value <span class='attr-value'>'align'</span>.
 * @constant
 * @type Number
 */
SVGTextPathElement.TEXTPATH_METHODTYPE_ALIGN = 1;
/**
 * Corresponds to value <span class='attr-value'>'stretch'</span>.
 * @constant
 * @type Number
 */
SVGTextPathElement.TEXTPATH_METHODTYPE_STRETCH = 2;
/**
 * The enumeration was set to a value that is not one of predefined types.
 * It is invalid to attempt to define a new value of this type or to attempt
 * to switch an existing value to this type.
 * @constant
 * @type Number
 */
SVGTextPathElement.TEXTPATH_SPACINGTYPE_UNKNOWN = 0;
/**
 * Corresponds to value <span class='attr-value'>'auto'</span>.
 * @constant
 * @type Number
 */
SVGTextPathElement.TEXTPATH_SPACINGTYPE_AUTO = 1;
/**
 * Corresponds to value <span class='attr-value'>'exact'</span>.
 * @constant
 * @type Number
 */
SVGTextPathElement.TEXTPATH_SPACINGTYPE_EXACT = 2;
/**
 * Corresponds to attribute {@link SVGTextPathElement#startOffset} on the
 * given <a href='http://www.w3.org/TR/SVG11/text.html#TextPathElement' title='textPath
 * element specification'>textPath</a> element.
 * @type SVGAnimatedLength
 */
SVGTextPathElement.prototype.startOffset = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGTextPathElement#method} on the given
 * <a href='http://www.w3.org/TR/SVG11/text.html#TextPathElement' title='textPath
 * element specification'>textPath</a> element.
 * @type SVGAnimatedEnumeration
 */
SVGTextPathElement.prototype.method = new SVGAnimatedEnumeration();
/**
 * Corresponds to attribute {@link SVGTextPathElement#spacing} on the given
 * <a href='http://www.w3.org/TR/SVG11/text.html#TextPathElement' title='textPath
 * element specification'>textPath</a> element.
 * @type SVGAnimatedEnumeration
 */
SVGTextPathElement.prototype.spacing = new SVGAnimatedEnumeration();

// Implementation of the svg::SVGURIReference W3C IDL interface
/**
 * Corresponds to attribute <span class='attr-name'>'xlink:href'</span> on
 * the given element.
 * @type SVGAnimatedString
 */
SVGTextPathElement.prototype.href = new SVGAnimatedString();

/**
 * The {@link SVGAltGlyphElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/text.html#AltGlyphElement'
 * title='altGlyph element specification'>altGlyph</a> element.
 * @constructor
 * @augments SVGTextPositioningElement
 */
function SVGAltGlyphElement() {
}
SVGAltGlyphElement.prototype = new SVGTextPositioningElement();

// Implementation of the svg::SVGAltGlyphElement W3C IDL interface
/**
 * Corresponds to attribute <code>glyphRef attribute</code> on the given element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGAltGlyphElement.prototype.glyphRef = "";
/**
 * Corresponds to attribute {@link SVGAltGlyphElement#format} on the given
 * element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGAltGlyphElement.prototype.format = "";

// Implementation of the svg::SVGURIReference W3C IDL interface
/**
 * Corresponds to attribute <span class='attr-name'>'xlink:href'</span> on
 * the given element.
 * @type SVGAnimatedString
 */
SVGAltGlyphElement.prototype.href = new SVGAnimatedString();

/**
 * The {@link SVGAltGlyphDefElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/text.html#AltGlyphDefElement'
 * title='altGlyphDef element specification'>altGlyphDef</a> element.
 * @constructor
 * @augments SVGElement
 */
function SVGAltGlyphDefElement() {
}
SVGAltGlyphDefElement.prototype = new SVGElement();

// Implementation of the svg::SVGAltGlyphDefElement W3C IDL interface

/**
 * The {@link SVGAltGlyphItemElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/text.html#AltGlyphItemElement'
 * title='altGlyphItem element specification'>altGlyphItem</a> element.
 * @constructor
 * @augments SVGElement
 */
function SVGAltGlyphItemElement() {
}
SVGAltGlyphItemElement.prototype = new SVGElement();

// Implementation of the svg::SVGAltGlyphItemElement W3C IDL interface

/**
 * The {@link SVGGlyphRefElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/text.html#GlyphRefElement'
 * title='glyphRef element specification'>glyphRef</a>  element.
 * @constructor
 * @augments SVGElement
 */
function SVGGlyphRefElement() {
}
SVGGlyphRefElement.prototype = new SVGElement();

// Implementation of the svg::SVGGlyphRefElement W3C IDL interface
/**
 * Corresponds to attribute <code>glyphRef attribute</code> on the given element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGGlyphRefElement.prototype.glyphRef = "";
/**
 * Corresponds to attribute {@link SVGGlyphRefElement#format} on the given
 * element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGGlyphRefElement.prototype.format = "";
/**
 * Corresponds to attribute {@link SVGGlyphRefElement#x} on the given element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGGlyphRefElement.prototype.x = 0;
/**
 * Corresponds to attribute {@link SVGGlyphRefElement#y} on the given element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGGlyphRefElement.prototype.y = 0;
/**
 * Corresponds to attribute {@link SVGGlyphRefElement#dx} on the given element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGGlyphRefElement.prototype.dx = 0;
/**
 * Corresponds to attribute {@link SVGGlyphRefElement#dy} on the given element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGGlyphRefElement.prototype.dy = 0;

// Implementation of the svg::SVGStylable W3C IDL interface
/**
 * Corresponds to attribute <code>class</code> on the given element.
 * @type SVGAnimatedString
 */
SVGGlyphRefElement.prototype.className = new SVGAnimatedString();
/**
 * Corresponds to attribute <code>style attribute</code> on the given element.
 * If the user agent does not support <a href='styling.html#StylingWithCSS'>styling
 * with CSS</a>, then this attribute must always have the value of null.
 * @type CSSStyleDeclaration
 */
SVGGlyphRefElement.prototype.style = new CSSStyleDeclaration();
/**
 * Returns the base (i.e., static) value of a given <code>presentation   attribute</code>
 * as an object of type <code>CSSValue</code>. The returned object is live;
 * changes to the objects represent immediate changes to the objects to which
 * the <code>CSSValue</code> is attached. <p>Note: The <code>getPresentationAttribute</code>
 * method is deprecated, and may be dropped from future versions of the SVG
 * specification.</p>
 * @param {String} name The name of the presentation attribute whose value
 * is to be   returned.
 * @returns {CSSValue} The static/base value of the given <code>presentation
 * attribute</code>   as a <code>CSSValue</code>, or null if the given attribute
 * does not have a   specified value.
 */
SVGGlyphRefElement.prototype.getPresentationAttribute = function (name) {
  return new CSSValue();
};

// Implementation of the svg::SVGURIReference W3C IDL interface
/**
 * Corresponds to attribute <span class='attr-name'>'xlink:href'</span> on
 * the given element.
 * @type SVGAnimatedString
 */
SVGGlyphRefElement.prototype.href = new SVGAnimatedString();

/**
 * The {@link SVGPaint} interface corresponds to basic type <a href='painting.html#SpecifyingPaint'>&lt;paint&gt;</a>
 * and represents the values of properties <code>fill</code> and <code>stroke</code>.
 * <p>Note: The {@link SVGPaint} interface is deprecated, and may be dropped
 * from future versions of the SVG specification.</p>
 * @constructor
 * @augments SVGColor
 */
function SVGPaint() {
}
SVGPaint.prototype = new SVGColor();

// Implementation of the svg::SVGPaint W3C IDL interface
/**
 * The paint type is not one of predefined types. It is invalid to attempt
 * to define a new value of this type or to attempt to switch an existing
 * value to this type.
 * @constant
 * @type Number
 */
SVGPaint.SVG_PAINTTYPE_UNKNOWN = 0;
/**
 * An sRGB color has been specified without an alternative ICC color specification.
 * @constant
 * @type Number
 */
SVGPaint.SVG_PAINTTYPE_RGBCOLOR = 1;
/**
 * An sRGB color has been specified along with an alternative ICC color specification.
 * @constant
 * @type Number
 */
SVGPaint.SVG_PAINTTYPE_RGBCOLOR_ICCCOLOR = 2;
/**
 * Corresponds to a <span class='prop-value'>none</span> value on a <a href='painting.html#SpecifyingPaint'>&lt;paint&gt;</a>
 * specification.
 * @constant
 * @type Number
 */
SVGPaint.SVG_PAINTTYPE_NONE = 101;
/**
 * Corresponds to a <span class='prop-value'>currentColor</span> value on
 * a <a href='painting.html#SpecifyingPaint'>&lt;paint&gt;</a> specification.
 * @constant
 * @type Number
 */
SVGPaint.SVG_PAINTTYPE_CURRENTCOLOR = 102;
/**
 * A URI has been specified, along with an explicit <span class='prop-value'>none</span>
 * as the backup paint method in case the URI is unavailable or invalid.
 * @constant
 * @type Number
 */
SVGPaint.SVG_PAINTTYPE_URI_NONE = 103;
/**
 * A URI has been specified, along with an sRGB color as the backup paint
 * method in case the URI is unavailable or invalid.
 * @constant
 * @type Number
 */
SVGPaint.SVG_PAINTTYPE_URI_CURRENTCOLOR = 104;
/**
 * A URI has been specified, along with an sRGB color as the backup paint
 * method in case the URI is unavailable or invalid.
 * @constant
 * @type Number
 */
SVGPaint.SVG_PAINTTYPE_URI_RGBCOLOR = 105;
/**
 * A URI has been specified, along with both an sRGB color and alternate ICC
 * color as the backup paint method in case the URI is unavailable or invalid.
 * @constant
 * @type Number
 */
SVGPaint.SVG_PAINTTYPE_URI_RGBCOLOR_ICCCOLOR = 106;
/**
 * Only a URI has been specified.
 * @constant
 * @type Number
 */
SVGPaint.SVG_PAINTTYPE_URI = 107;
/**
 * The type of paint, identified by one of the SVG_PAINTTYPE_ constants defined
 * on this interface.
 * @type Number
 */
SVGPaint.prototype.paintType = 0;
/**
 * When the {@link SVGPaint#paintType} specifies a URI, this attribute holds
 * the URI string. When the {@link SVGPaint#paintType} does not specify a
 * URI, this attribute is null.
 * @type String
 */
SVGPaint.prototype.uri = "";
/**
 * Sets the {@link SVGPaint#paintType} to SVG_PAINTTYPE_URI_NONE and sets
 * {@link SVGPaint#uri} to the specified value.
 * @param {String} uri The URI for the desired paint server.
 */
SVGPaint.prototype.setUri = function (uri) {
};
/**
 * Sets the paint as specified by the parameters. If <var>paintType</var>
 * requires a URI, then <var>uri</var> must be non-null; otherwise, <var>uri</var>
 * must be null. If <var>paintType</var> requires an <code>RGBColor</code>,
 * then <var>rgbColor</var> must be a string that matches <a href='types.html#DataTypeColor'>&lt;color&gt;</a>;
 * otherwise, <var>rgbColor</var> must be null. If <var>paintType</var> requires
 * an {@link SVGICCColor}, then <var>iccColor</var> must be a string that
 * matches <a href='types.html#DataTypeICCColor'>&lt;icccolor&gt;</a>; otherwise,
 * <var>iccColor</var> must be null.
 * @param {Number} paintType One of the defined constants for {@link SVGPaint#paintType}.
 * @param {String} uri The URI for the desired paint server, or null.
 * @param {String} rgbColor The specification of an sRGB color, or null.
 * @param {String} iccColor The specification of an ICC color, or null.
 * @throws {SVGException} (SVG_INVALID_VALUE_ERR) Raised if one of the  parameters
 * has an invalid value.
 */
SVGPaint.prototype.setPaint = function (paintType, uri, rgbColor, iccColor) {
};

/**
 * The {@link SVGMarkerElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/painting.html#MarkerElement'
 * title='marker element specification'>marker</a>  element.
 * @constructor
 * @augments SVGElement
 */
function SVGMarkerElement() {
}
SVGMarkerElement.prototype = new SVGElement();

// Implementation of the svg::SVGMarkerElement W3C IDL interface
/**
 * The marker unit type is not one of predefined types. It is invalid to attempt
 * to define a new value of this type or to attempt to switch an existing
 * value to this type.
 * @constant
 * @type Number
 */
SVGMarkerElement.SVG_MARKERUNITS_UNKNOWN = 0;
/**
 * The value of attribute {@link SVGMarkerElement#markerUnits} is <span class='attr-value'>'userSpaceOnUse'</span>.
 * @constant
 * @type Number
 */
SVGMarkerElement.SVG_MARKERUNITS_USERSPACEONUSE = 1;
/**
 * The value of attribute {@link SVGMarkerElement#markerUnits} is <span class='attr-value'>'strokeWidth'</span>.
 * @constant
 * @type Number
 */
SVGMarkerElement.SVG_MARKERUNITS_STROKEWIDTH = 2;
/**
 * The marker orientation is not one of predefined types. It is invalid to
 * attempt to define a new value of this type or to attempt to switch an existing
 * value to this type.
 * @constant
 * @type Number
 */
SVGMarkerElement.SVG_MARKER_ORIENT_UNKNOWN = 0;
/**
 * Attribute <code>orient</code> has value <span class='attr-value'>'auto'</span>.
 * @constant
 * @type Number
 */
SVGMarkerElement.SVG_MARKER_ORIENT_AUTO = 1;
/**
 * Attribute <code>orient</code> has an angle value.
 * @constant
 * @type Number
 */
SVGMarkerElement.SVG_MARKER_ORIENT_ANGLE = 2;
/**
 * Corresponds to attribute {@link SVGMarkerElement#refX} on the given <a
 * href='http://www.w3.org/TR/SVG11/painting.html#MarkerElement' title='marker
 * element specification'>marker</a>  element.
 * @type SVGAnimatedLength
 */
SVGMarkerElement.prototype.refX = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGMarkerElement#refY} on the given <a
 * href='http://www.w3.org/TR/SVG11/painting.html#MarkerElement' title='marker
 * element specification'>marker</a>  element.
 * @type SVGAnimatedLength
 */
SVGMarkerElement.prototype.refY = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGMarkerElement#markerUnits} on the given
 * <a href='http://www.w3.org/TR/SVG11/painting.html#MarkerElement' title='marker
 * element specification'>marker</a>  element.  One of the Marker Unit Types
 * defined on this interface.
 * @type SVGAnimatedEnumeration
 */
SVGMarkerElement.prototype.markerUnits = new SVGAnimatedEnumeration();
/**
 * Corresponds to attribute {@link SVGMarkerElement#markerWidth} on the given
 * <a href='http://www.w3.org/TR/SVG11/painting.html#MarkerElement' title='marker
 * element specification'>marker</a>  element.
 * @type SVGAnimatedLength
 */
SVGMarkerElement.prototype.markerWidth = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGMarkerElement#markerHeight} on the given
 * <a href='http://www.w3.org/TR/SVG11/painting.html#MarkerElement' title='marker
 * element specification'>marker</a>  element.
 * @type SVGAnimatedLength
 */
SVGMarkerElement.prototype.markerHeight = new SVGAnimatedLength();
/**
 * Corresponds to attribute <code>orient</code> on the given <a href='http://www.w3.org/TR/SVG11/painting.html#MarkerElement'
 * title='marker element specification'>marker</a>  element.  One of the Marker
 * Orientation Types defined on this interface.
 * @type SVGAnimatedEnumeration
 */
SVGMarkerElement.prototype.orientType = new SVGAnimatedEnumeration();
/**
 * Corresponds to attribute <code>orient</code> on the given <a href='http://www.w3.org/TR/SVG11/painting.html#MarkerElement'
 * title='marker element specification'>marker</a>  element.  If {@link SVGMarkerElement#markerUnits}
 * is SVG_MARKER_ORIENT_ANGLE, the angle value for attribute <code>orient</code>;
 * otherwise, it will be set to zero.
 * @type SVGAnimatedAngle
 */
SVGMarkerElement.prototype.orientAngle = new SVGAnimatedAngle();
/**
 * Sets the value of attribute <code>orient</code> to <span class='attr-value'>'auto'</span>.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 */
SVGMarkerElement.prototype.setOrientToAuto = function () {
};
/**
 * Sets the value of attribute <code>orient</code> to the given angle.
 * @param {SVGAngle} angle The angle value to use for attribute <code>orient</code>.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 */
SVGMarkerElement.prototype.setOrientToAngle = function (angle) {
};

// Implementation of the svg::SVGExternalResourcesRequired W3C IDL interface
/**
 * Corresponds to attribute {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * on the given element. Note that the SVG DOM defines the attribute {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * as being of type {@link SVGAnimatedBoolean}, whereas the SVG language definition
 * says that {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * is not animated. Because the SVG language definition states that {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * cannot be animated, the {@link SVGAnimatedBoolean#animVal} will always
 * be the same as the {@link SVGAnimatedBoolean#baseVal}.
 * @type SVGAnimatedBoolean
 */
SVGMarkerElement.prototype.externalResourcesRequired = new SVGAnimatedBoolean();

// Implementation of the svg::SVGFitToViewBox W3C IDL interface
/**
 * Corresponds to attribute {@link SVGFitToViewBox#viewBox} on the given element.
 * @type SVGAnimatedRect
 */
SVGMarkerElement.prototype.viewBox = new SVGAnimatedRect();
/**
 * Corresponds to attribute {@link SVGFitToViewBox#preserveAspectRatio} on
 * the given element.
 * @type SVGAnimatedPreserveAspectRatio
 */
SVGMarkerElement.prototype.preserveAspectRatio = new SVGAnimatedPreserveAspectRatio();

// Implementation of the svg::SVGLangSpace W3C IDL interface
/**
 * Corresponds to attribute <code>xml:lang</code> on the given element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an   attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGMarkerElement.prototype.xmllang = "";
/**
 * Corresponds to attribute <code>xml:space</code> on the given element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an   attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGMarkerElement.prototype.xmlspace = "";

// Implementation of the svg::SVGStylable W3C IDL interface
/**
 * Corresponds to attribute <code>class</code> on the given element.
 * @type SVGAnimatedString
 */
SVGMarkerElement.prototype.className = new SVGAnimatedString();
/**
 * Corresponds to attribute <code>style attribute</code> on the given element.
 * If the user agent does not support <a href='styling.html#StylingWithCSS'>styling
 * with CSS</a>, then this attribute must always have the value of null.
 * @type CSSStyleDeclaration
 */
SVGMarkerElement.prototype.style = new CSSStyleDeclaration();
/**
 * Returns the base (i.e., static) value of a given <code>presentation   attribute</code>
 * as an object of type <code>CSSValue</code>. The returned object is live;
 * changes to the objects represent immediate changes to the objects to which
 * the <code>CSSValue</code> is attached. <p>Note: The <code>getPresentationAttribute</code>
 * method is deprecated, and may be dropped from future versions of the SVG
 * specification.</p>
 * @param {String} name The name of the presentation attribute whose value
 * is to be   returned.
 * @returns {CSSValue} The static/base value of the given <code>presentation
 * attribute</code>   as a <code>CSSValue</code>, or null if the given attribute
 * does not have a   specified value.
 */
SVGMarkerElement.prototype.getPresentationAttribute = function (name) {
  return new CSSValue();
};

/**
 * The {@link SVGColorProfileElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/color.html#ColorProfileElement'
 * title='color-profile element specification'>color-profile</a>  element.
 * @constructor
 * @augments SVGElement
 */
function SVGColorProfileElement() {
}
SVGColorProfileElement.prototype = new SVGElement();

// Implementation of the svg::SVGColorProfileElement W3C IDL interface
/**
 * Corresponds to attribute {@link SVGColorProfileElement#local} on the given
 * element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGColorProfileElement.prototype.local = "";
/**
 * Corresponds to attribute {@link SVGColorProfileElement#name} on the given
 * element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGColorProfileElement.prototype.name = "";
/**
 * Corresponds to attribute <code>rendering-intent</code> on the given element.
 * The value of this attribute is the value of the the RENDERING_INTENT_ constant
 * defined on {@link SVGRenderingIntent} that corresponds to the value of
 * the <code>rendering-intent</code> attribute.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGColorProfileElement.prototype.renderingIntent = 0;

// Implementation of the svg::SVGRenderingIntent W3C IDL interface
/**
 * The type is not one of predefined types. It is invalid to attempt to define
 * a new value of this type or to attempt to switch an existing value to this
 * type.
 * @constant
 * @type Number
 */
SVGColorProfileElement.RENDERING_INTENT_UNKNOWN = 0;
/**
 * Corresponds to a value of <span class ='attr-value'>'auto'</span>.
 * @constant
 * @type Number
 */
SVGColorProfileElement.RENDERING_INTENT_AUTO = 1;
/**
 * Corresponds to a value of <span class ='attr-value'>'perceptual'</span>.
 * @constant
 * @type Number
 */
SVGColorProfileElement.RENDERING_INTENT_PERCEPTUAL = 2;
/**
 * Corresponds to a value of <span class ='attr-value'>'relative-colorimetric'</span>.
 * @constant
 * @type Number
 */
SVGColorProfileElement.RENDERING_INTENT_RELATIVE_COLORIMETRIC = 3;
/**
 * Corresponds to a value of <span class ='attr-value'>'saturation'</span>.
 * @constant
 * @type Number
 */
SVGColorProfileElement.RENDERING_INTENT_SATURATION = 4;
/**
 * Corresponds to a value of <span class='attr-value'>'absolute-colorimetric'</span>.
 * @constant
 * @type Number
 */
SVGColorProfileElement.RENDERING_INTENT_ABSOLUTE_COLORIMETRIC = 5;

// Implementation of the svg::SVGURIReference W3C IDL interface
/**
 * Corresponds to attribute <span class='attr-name'>'xlink:href'</span> on
 * the given element.
 * @type SVGAnimatedString
 */
SVGColorProfileElement.prototype.href = new SVGAnimatedString();

/**
 * <p>The {@link SVGColorProfileRule} interface represents an &#64;color-profile
 * rule in a CSS style sheet. An &#64;color-profile rule identifies a ICC
 * profile which can be referenced within a given document.</p> <p>Support
 * for the {@link SVGColorProfileRule} interface is only required in user
 * agents that support <a href='styling.html#StylingWithCSS'>styling with
 * CSS</a>.</p>
 * @constructor
 * @augments SVGCSSRule
 */
function SVGColorProfileRule() {
}
SVGColorProfileRule.prototype = new SVGCSSRule();

// Implementation of the svg::SVGColorProfileRule W3C IDL interface
/**
 * Corresponds to descriptor <span class='prop-name'>src</span> within an
 * &#64;color-profile rule.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGColorProfileRule.prototype.src = "";
/**
 * Corresponds to descriptor <span class='prop-name'>'name'</span> within
 * an &#64;color-profile rule.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGColorProfileRule.prototype.name = "";
/**
 * The type of rendering intent, identified by one of the {@link SVGRenderingIntent}
 * constants.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGColorProfileRule.prototype.renderingIntent = 0;

// Implementation of the svg::SVGRenderingIntent W3C IDL interface
/**
 * The type is not one of predefined types. It is invalid to attempt to define
 * a new value of this type or to attempt to switch an existing value to this
 * type.
 * @constant
 * @type Number
 */
SVGColorProfileRule.RENDERING_INTENT_UNKNOWN = 0;
/**
 * Corresponds to a value of <span class ='attr-value'>'auto'</span>.
 * @constant
 * @type Number
 */
SVGColorProfileRule.RENDERING_INTENT_AUTO = 1;
/**
 * Corresponds to a value of <span class ='attr-value'>'perceptual'</span>.
 * @constant
 * @type Number
 */
SVGColorProfileRule.RENDERING_INTENT_PERCEPTUAL = 2;
/**
 * Corresponds to a value of <span class ='attr-value'>'relative-colorimetric'</span>.
 * @constant
 * @type Number
 */
SVGColorProfileRule.RENDERING_INTENT_RELATIVE_COLORIMETRIC = 3;
/**
 * Corresponds to a value of <span class ='attr-value'>'saturation'</span>.
 * @constant
 * @type Number
 */
SVGColorProfileRule.RENDERING_INTENT_SATURATION = 4;
/**
 * Corresponds to a value of <span class='attr-value'>'absolute-colorimetric'</span>.
 * @constant
 * @type Number
 */
SVGColorProfileRule.RENDERING_INTENT_ABSOLUTE_COLORIMETRIC = 5;

/**
 * The {@link SVGGradientElement} interface is a base interface used by {@link SVGLinearGradientElement}
 * and {@link SVGRadialGradientElement}.
 * @constructor
 * @augments SVGElement
 */
function SVGGradientElement() {
}
SVGGradientElement.prototype = new SVGElement();

// Implementation of the svg::SVGGradientElement W3C IDL interface
/**
 * The type is not one of predefined types. It is invalid to attempt to define
 * a new value of this type or to attempt to switch an existing value to this
 * type.
 * @constant
 * @type Number
 */
SVGGradientElement.SVG_SPREADMETHOD_UNKNOWN = 0;
/**
 * Corresponds to value <span class='attr-value'>'pad'</span>.
 * @constant
 * @type Number
 */
SVGGradientElement.SVG_SPREADMETHOD_PAD = 1;
/**
 * Corresponds to value <span class='attr-value'>'reflect'</span>.
 * @constant
 * @type Number
 */
SVGGradientElement.SVG_SPREADMETHOD_REFLECT = 2;
/**
 * Corresponds to value <span class='attr-value'>'repeat'</span>.
 * @constant
 * @type Number
 */
SVGGradientElement.SVG_SPREADMETHOD_REPEAT = 3;
/**
 * Corresponds to attribute <span class='attr-name'>'gradientUnits'</span>
 * on the given element.  Takes one of the constants defined in {@link SVGUnitTypes}.
 * @type SVGAnimatedEnumeration
 */
SVGGradientElement.prototype.gradientUnits = new SVGAnimatedEnumeration();
/**
 * Corresponds to attribute <span class='attr-name'>'gradientTransform'</span>
 * on the given element.
 * @type SVGAnimatedTransformList
 */
SVGGradientElement.prototype.gradientTransform = new SVGAnimatedTransformList();
/**
 * Corresponds to attribute <span class='attr-name'>'spreadMethod'</span>
 * on the given element.  One of the Spread Method Types defined on this interface.
 * @type SVGAnimatedEnumeration
 */
SVGGradientElement.prototype.spreadMethod = new SVGAnimatedEnumeration();

// Implementation of the svg::SVGExternalResourcesRequired W3C IDL interface
/**
 * Corresponds to attribute {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * on the given element. Note that the SVG DOM defines the attribute {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * as being of type {@link SVGAnimatedBoolean}, whereas the SVG language definition
 * says that {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * is not animated. Because the SVG language definition states that {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * cannot be animated, the {@link SVGAnimatedBoolean#animVal} will always
 * be the same as the {@link SVGAnimatedBoolean#baseVal}.
 * @type SVGAnimatedBoolean
 */
SVGGradientElement.prototype.externalResourcesRequired = new SVGAnimatedBoolean();

// Implementation of the svg::SVGStylable W3C IDL interface
/**
 * Corresponds to attribute <code>class</code> on the given element.
 * @type SVGAnimatedString
 */
SVGGradientElement.prototype.className = new SVGAnimatedString();
/**
 * Corresponds to attribute <code>style attribute</code> on the given element.
 * If the user agent does not support <a href='styling.html#StylingWithCSS'>styling
 * with CSS</a>, then this attribute must always have the value of null.
 * @type CSSStyleDeclaration
 */
SVGGradientElement.prototype.style = new CSSStyleDeclaration();
/**
 * Returns the base (i.e., static) value of a given <code>presentation   attribute</code>
 * as an object of type <code>CSSValue</code>. The returned object is live;
 * changes to the objects represent immediate changes to the objects to which
 * the <code>CSSValue</code> is attached. <p>Note: The <code>getPresentationAttribute</code>
 * method is deprecated, and may be dropped from future versions of the SVG
 * specification.</p>
 * @param {String} name The name of the presentation attribute whose value
 * is to be   returned.
 * @returns {CSSValue} The static/base value of the given <code>presentation
 * attribute</code>   as a <code>CSSValue</code>, or null if the given attribute
 * does not have a   specified value.
 */
SVGGradientElement.prototype.getPresentationAttribute = function (name) {
  return new CSSValue();
};

// Implementation of the svg::SVGURIReference W3C IDL interface
/**
 * Corresponds to attribute <span class='attr-name'>'xlink:href'</span> on
 * the given element.
 * @type SVGAnimatedString
 */
SVGGradientElement.prototype.href = new SVGAnimatedString();

// Implementation of the svg::SVGUnitTypes W3C IDL interface
/**
 * The type is not one of predefined types. It is invalid to attempt to define
 * a new value of this type or to attempt to switch an existing value to this
 * type.
 * @constant
 * @type Number
 */
SVGGradientElement.SVG_UNIT_TYPE_UNKNOWN = 0;
/**
 * Corresponds to value <span class='attr-value'>'userSpaceOnUse'</span>.
 * @constant
 * @type Number
 */
SVGGradientElement.SVG_UNIT_TYPE_USERSPACEONUSE = 1;
/**
 * Corresponds to value <span class='attr-value'>'objectBoundingBox'</span>.
 * @constant
 * @type Number
 */
SVGGradientElement.SVG_UNIT_TYPE_OBJECTBOUNDINGBOX = 2;

/**
 * The {@link SVGLinearGradientElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/pservers.html#LinearGradientElement'
 * title='linearGradient element specification'>linearGradient</a> element.
 * @constructor
 * @augments SVGGradientElement
 */
function SVGLinearGradientElement() {
}
SVGLinearGradientElement.prototype = new SVGGradientElement();

// Implementation of the svg::SVGLinearGradientElement W3C IDL interface
/**
 * Corresponds to attribute {@link SVGLinearGradientElement#x1} on the given
 * <a href='http://www.w3.org/TR/SVG11/pservers.html#LinearGradientElement'
 * title='linearGradient element specification'>linearGradient</a> element.
 * @type SVGAnimatedLength
 */
SVGLinearGradientElement.prototype.x1 = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGLinearGradientElement#y1} on the given
 * <a href='http://www.w3.org/TR/SVG11/pservers.html#LinearGradientElement'
 * title='linearGradient element specification'>linearGradient</a> element.
 * @type SVGAnimatedLength
 */
SVGLinearGradientElement.prototype.y1 = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGLinearGradientElement#x2} on the given
 * <a href='http://www.w3.org/TR/SVG11/pservers.html#LinearGradientElement'
 * title='linearGradient element specification'>linearGradient</a> element.
 * @type SVGAnimatedLength
 */
SVGLinearGradientElement.prototype.x2 = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGLinearGradientElement#y2} on the given
 * <a href='http://www.w3.org/TR/SVG11/pservers.html#LinearGradientElement'
 * title='linearGradient element specification'>linearGradient</a> element.
 * @type SVGAnimatedLength
 */
SVGLinearGradientElement.prototype.y2 = new SVGAnimatedLength();

/**
 * The {@link SVGRadialGradientElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/pservers.html#RadialGradientElement'
 * title='radialGradient element specification'>radialGradient</a> element.
 * @constructor
 * @augments SVGGradientElement
 */
function SVGRadialGradientElement() {
}
SVGRadialGradientElement.prototype = new SVGGradientElement();

// Implementation of the svg::SVGRadialGradientElement W3C IDL interface
/**
 * Corresponds to attribute {@link SVGRadialGradientElement#cx} on the given
 * <a href='http://www.w3.org/TR/SVG11/pservers.html#RadialGradientElement'
 * title='radialGradient element specification'>radialGradient</a> element.
 * @type SVGAnimatedLength
 */
SVGRadialGradientElement.prototype.cx = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGRadialGradientElement#cy} on the given
 * <a href='http://www.w3.org/TR/SVG11/pservers.html#RadialGradientElement'
 * title='radialGradient element specification'>radialGradient</a> element.
 * @type SVGAnimatedLength
 */
SVGRadialGradientElement.prototype.cy = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGRadialGradientElement#r} on the given
 * <a href='http://www.w3.org/TR/SVG11/pservers.html#RadialGradientElement'
 * title='radialGradient element specification'>radialGradient</a> element.
 * @type SVGAnimatedLength
 */
SVGRadialGradientElement.prototype.r = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGRadialGradientElement#fx} on the given
 * <a href='http://www.w3.org/TR/SVG11/pservers.html#RadialGradientElement'
 * title='radialGradient element specification'>radialGradient</a> element.
 * @type SVGAnimatedLength
 */
SVGRadialGradientElement.prototype.fx = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGRadialGradientElement#fy} on the given
 * <a href='http://www.w3.org/TR/SVG11/pservers.html#RadialGradientElement'
 * title='radialGradient element specification'>radialGradient</a> element.
 * @type SVGAnimatedLength
 */
SVGRadialGradientElement.prototype.fy = new SVGAnimatedLength();

/**
 * The {@link SVGStopElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/pservers.html#StopElement'
 * title='stop element specification'>stop</a> element.
 * @constructor
 * @augments SVGElement
 */
function SVGStopElement() {
}
SVGStopElement.prototype = new SVGElement();

// Implementation of the svg::SVGStopElement W3C IDL interface
/**
 * Corresponds to attribute {@link SVGStopElement#offset} on the given <a
 * href='http://www.w3.org/TR/SVG11/pservers.html#StopElement' title='stop
 * element specification'>stop</a> element.
 * @type SVGAnimatedNumber
 */
SVGStopElement.prototype.offset = new SVGAnimatedNumber();

// Implementation of the svg::SVGStylable W3C IDL interface
/**
 * Corresponds to attribute <code>class</code> on the given element.
 * @type SVGAnimatedString
 */
SVGStopElement.prototype.className = new SVGAnimatedString();
/**
 * Corresponds to attribute <code>style attribute</code> on the given element.
 * If the user agent does not support <a href='styling.html#StylingWithCSS'>styling
 * with CSS</a>, then this attribute must always have the value of null.
 * @type CSSStyleDeclaration
 */
SVGStopElement.prototype.style = new CSSStyleDeclaration();
/**
 * Returns the base (i.e., static) value of a given <code>presentation   attribute</code>
 * as an object of type <code>CSSValue</code>. The returned object is live;
 * changes to the objects represent immediate changes to the objects to which
 * the <code>CSSValue</code> is attached. <p>Note: The <code>getPresentationAttribute</code>
 * method is deprecated, and may be dropped from future versions of the SVG
 * specification.</p>
 * @param {String} name The name of the presentation attribute whose value
 * is to be   returned.
 * @returns {CSSValue} The static/base value of the given <code>presentation
 * attribute</code>   as a <code>CSSValue</code>, or null if the given attribute
 * does not have a   specified value.
 */
SVGStopElement.prototype.getPresentationAttribute = function (name) {
  return new CSSValue();
};

/**
 * The {@link SVGPatternElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/pservers.html#PatternElement'
 * title='pattern element specification'>pattern</a> element.
 * @constructor
 * @augments SVGElement
 */
function SVGPatternElement() {
}
SVGPatternElement.prototype = new SVGElement();

// Implementation of the svg::SVGPatternElement W3C IDL interface
/**
 * Corresponds to attribute {@link SVGPatternElement#patternUnits} on the
 * given <a href='http://www.w3.org/TR/SVG11/pservers.html#PatternElement'
 * title='pattern element specification'>pattern</a> element. Takes one of
 * the constants defined in {@link SVGUnitTypes}.
 * @type SVGAnimatedEnumeration
 */
SVGPatternElement.prototype.patternUnits = new SVGAnimatedEnumeration();
/**
 * Corresponds to attribute {@link SVGPatternElement#patternContentUnits}
 * on the given <a href='http://www.w3.org/TR/SVG11/pservers.html#PatternElement'
 * title='pattern element specification'>pattern</a> element. Takes one of
 * the constants defined in {@link SVGUnitTypes}.
 * @type SVGAnimatedEnumeration
 */
SVGPatternElement.prototype.patternContentUnits = new SVGAnimatedEnumeration();
/**
 * Corresponds to attribute {@link SVGPatternElement#patternTransform} on
 * the given <a href='http://www.w3.org/TR/SVG11/pservers.html#PatternElement'
 * title='pattern element specification'>pattern</a> element.
 * @type SVGAnimatedTransformList
 */
SVGPatternElement.prototype.patternTransform = new SVGAnimatedTransformList();
/**
 * Corresponds to attribute {@link SVGPatternElement#x} on the given <a href='http://www.w3.org/TR/SVG11/pservers.html#PatternElement'
 * title='pattern element specification'>pattern</a> element.
 * @type SVGAnimatedLength
 */
SVGPatternElement.prototype.x = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGPatternElement#y} on the given <a href='http://www.w3.org/TR/SVG11/pservers.html#PatternElement'
 * title='pattern element specification'>pattern</a> element.
 * @type SVGAnimatedLength
 */
SVGPatternElement.prototype.y = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGPatternElement#width} on the given <a
 * href='http://www.w3.org/TR/SVG11/pservers.html#PatternElement' title='pattern
 * element specification'>pattern</a> element.
 * @type SVGAnimatedLength
 */
SVGPatternElement.prototype.width = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGPatternElement#height} on the given
 * <a href='http://www.w3.org/TR/SVG11/pservers.html#PatternElement' title='pattern
 * element specification'>pattern</a> element.
 * @type SVGAnimatedLength
 */
SVGPatternElement.prototype.height = new SVGAnimatedLength();

// Implementation of the svg::SVGExternalResourcesRequired W3C IDL interface
/**
 * Corresponds to attribute {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * on the given element. Note that the SVG DOM defines the attribute {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * as being of type {@link SVGAnimatedBoolean}, whereas the SVG language definition
 * says that {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * is not animated. Because the SVG language definition states that {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * cannot be animated, the {@link SVGAnimatedBoolean#animVal} will always
 * be the same as the {@link SVGAnimatedBoolean#baseVal}.
 * @type SVGAnimatedBoolean
 */
SVGPatternElement.prototype.externalResourcesRequired = new SVGAnimatedBoolean();

// Implementation of the svg::SVGFitToViewBox W3C IDL interface
/**
 * Corresponds to attribute {@link SVGFitToViewBox#viewBox} on the given element.
 * @type SVGAnimatedRect
 */
SVGPatternElement.prototype.viewBox = new SVGAnimatedRect();
/**
 * Corresponds to attribute {@link SVGFitToViewBox#preserveAspectRatio} on
 * the given element.
 * @type SVGAnimatedPreserveAspectRatio
 */
SVGPatternElement.prototype.preserveAspectRatio = new SVGAnimatedPreserveAspectRatio();

// Implementation of the svg::SVGLangSpace W3C IDL interface
/**
 * Corresponds to attribute <code>xml:lang</code> on the given element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an   attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGPatternElement.prototype.xmllang = "";
/**
 * Corresponds to attribute <code>xml:space</code> on the given element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an   attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGPatternElement.prototype.xmlspace = "";

// Implementation of the svg::SVGStylable W3C IDL interface
/**
 * Corresponds to attribute <code>class</code> on the given element.
 * @type SVGAnimatedString
 */
SVGPatternElement.prototype.className = new SVGAnimatedString();
/**
 * Corresponds to attribute <code>style attribute</code> on the given element.
 * If the user agent does not support <a href='styling.html#StylingWithCSS'>styling
 * with CSS</a>, then this attribute must always have the value of null.
 * @type CSSStyleDeclaration
 */
SVGPatternElement.prototype.style = new CSSStyleDeclaration();
/**
 * Returns the base (i.e., static) value of a given <code>presentation   attribute</code>
 * as an object of type <code>CSSValue</code>. The returned object is live;
 * changes to the objects represent immediate changes to the objects to which
 * the <code>CSSValue</code> is attached. <p>Note: The <code>getPresentationAttribute</code>
 * method is deprecated, and may be dropped from future versions of the SVG
 * specification.</p>
 * @param {String} name The name of the presentation attribute whose value
 * is to be   returned.
 * @returns {CSSValue} The static/base value of the given <code>presentation
 * attribute</code>   as a <code>CSSValue</code>, or null if the given attribute
 * does not have a   specified value.
 */
SVGPatternElement.prototype.getPresentationAttribute = function (name) {
  return new CSSValue();
};

// Implementation of the svg::SVGTests W3C IDL interface
/**
 * Corresponds to attribute {@link SVGTests#requiredFeatures} on the given
 * element.
 * @type SVGStringList
 */
SVGPatternElement.prototype.requiredFeatures = new SVGStringList();
/**
 * Corresponds to attribute {@link SVGTests#requiredExtensions} on the given
 * element.
 * @type SVGStringList
 */
SVGPatternElement.prototype.requiredExtensions = new SVGStringList();
/**
 * Corresponds to attribute {@link SVGTests#systemLanguage} on the given element.
 * @type SVGStringList
 */
SVGPatternElement.prototype.systemLanguage = new SVGStringList();
/**
 * Returns true if the user agent supports the given extension, specified
 * by a URI.
 * @param {String} extension The name of the extension, expressed as a URI.
 * @returns {Boolean} True or false, depending on whether the given extension
 * is   supported.
 */
SVGPatternElement.prototype.hasExtension = function (extension) {
  return false;
};

// Implementation of the svg::SVGURIReference W3C IDL interface
/**
 * Corresponds to attribute <span class='attr-name'>'xlink:href'</span> on
 * the given element.
 * @type SVGAnimatedString
 */
SVGPatternElement.prototype.href = new SVGAnimatedString();

// Implementation of the svg::SVGUnitTypes W3C IDL interface
/**
 * The type is not one of predefined types. It is invalid to attempt to define
 * a new value of this type or to attempt to switch an existing value to this
 * type.
 * @constant
 * @type Number
 */
SVGPatternElement.SVG_UNIT_TYPE_UNKNOWN = 0;
/**
 * Corresponds to value <span class='attr-value'>'userSpaceOnUse'</span>.
 * @constant
 * @type Number
 */
SVGPatternElement.SVG_UNIT_TYPE_USERSPACEONUSE = 1;
/**
 * Corresponds to value <span class='attr-value'>'objectBoundingBox'</span>.
 * @constant
 * @type Number
 */
SVGPatternElement.SVG_UNIT_TYPE_OBJECTBOUNDINGBOX = 2;

/**
 * The {@link SVGClipPathElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/masking.html#ClipPathElement'
 * title='clipPath element specification'>clipPath</a> element.
 * @constructor
 * @augments SVGElement
 */
function SVGClipPathElement() {
}
SVGClipPathElement.prototype = new SVGElement();

// Implementation of the svg::SVGClipPathElement W3C IDL interface
/**
 * Corresponds to attribute {@link SVGClipPathElement#clipPathUnits} on the
 * given <a href='http://www.w3.org/TR/SVG11/masking.html#ClipPathElement'
 * title='clipPath element specification'>clipPath</a> element.  Takes one
 * of the constants defined in {@link SVGUnitTypes}.
 * @type SVGAnimatedEnumeration
 */
SVGClipPathElement.prototype.clipPathUnits = new SVGAnimatedEnumeration();

// Implementation of the svg::SVGExternalResourcesRequired W3C IDL interface
/**
 * Corresponds to attribute {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * on the given element. Note that the SVG DOM defines the attribute {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * as being of type {@link SVGAnimatedBoolean}, whereas the SVG language definition
 * says that {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * is not animated. Because the SVG language definition states that {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * cannot be animated, the {@link SVGAnimatedBoolean#animVal} will always
 * be the same as the {@link SVGAnimatedBoolean#baseVal}.
 * @type SVGAnimatedBoolean
 */
SVGClipPathElement.prototype.externalResourcesRequired = new SVGAnimatedBoolean();

// Implementation of the svg::SVGLangSpace W3C IDL interface
/**
 * Corresponds to attribute <code>xml:lang</code> on the given element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an   attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGClipPathElement.prototype.xmllang = "";
/**
 * Corresponds to attribute <code>xml:space</code> on the given element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an   attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGClipPathElement.prototype.xmlspace = "";

// Implementation of the svg::SVGLocatable W3C IDL interface
/**
 * The element which established the current viewport. Often, the nearest
 * ancestor <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement' title='svg
 * element specification'>svg</a> element. Null if the current element is
 * the outermost <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element.
 * @type SVGElement
 */
SVGClipPathElement.prototype.nearestViewportElement = new SVGElement();
/**
 * The farthest ancestor <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element. Null if the current
 * element is the outermost <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element.
 * @type SVGElement
 */
SVGClipPathElement.prototype.farthestViewportElement = new SVGElement();
/**
 * Returns the tight bounding box in current user space (i.e., after application
 * of the <code>transform</code> attribute, if any) on the geometry of all
 * contained graphics elements, exclusive of stroking, clipping, masking and
 * filter effects). Note that getBBox must return the actual bounding box
 * at the time the method was called, even in case the element has not yet
 * been rendered.
 * @returns {SVGRect} An {@link SVGRect} object that defines the bounding
 * box.
 */
SVGClipPathElement.prototype.getBBox = function () {
  return new SVGRect();
};
/**
 * Returns the transformation matrix from current user units (i.e., after
 * application of the <code>transform</code> attribute, if any) to the viewport
 * coordinate system for the {@link SVGLocatable#nearestViewportElement}.
 * @returns {SVGMatrix} An {@link SVGMatrix} object that defines the CTM.
 */
SVGClipPathElement.prototype.getCTM = function () {
  return new SVGMatrix();
};
/**
 * Returns the transformation matrix from current user units (i.e., after
 * application of the <code>transform</code> attribute, if any) to the parent
 * user agent's notice of a "pixel". For display devices, ideally this represents
 * a physical screen pixel. For other devices or environments where physical
 * pixel sizes are not known, then an algorithm similar to the CSS2 definition
 * of a "pixel" can be used instead.  Note that null is returned if this element
 * is not hooked into the document tree. This method would have been more
 * aptly named as <code>getClientCTM</code>, but the name <code>getScreenCTM</code>
 * is kept for historical reasons.
 * @returns {SVGMatrix} An {@link SVGMatrix} object that defines the given
 * transformation matrix.
 */
SVGClipPathElement.prototype.getScreenCTM = function () {
  return new SVGMatrix();
};
/**
 * Returns the transformation matrix from the user coordinate system on the
 * current element (after application of the <code>transform</code> attribute,
 * if any) to the user coordinate system on parameter <var>element</var> (after
 * application of its <code>transform</code> attribute, if any).
 * @param {SVGElement} element The target element.
 * @returns {SVGMatrix} An {@link SVGMatrix} object that defines the transformation.
 * @throws {SVGException} (SVG_MATRIX_NOT_INVERTABLE) Raised if the currently
 * defined transformation matrices make it impossible to compute the   given
 * matrix (e.g., because one of the transformations is singular).
 */
SVGClipPathElement.prototype.getTransformToElement = function (element) {
  return new SVGMatrix();
};

// Implementation of the svg::SVGStylable W3C IDL interface
/**
 * Corresponds to attribute <code>class</code> on the given element.
 * @type SVGAnimatedString
 */
SVGClipPathElement.prototype.className = new SVGAnimatedString();
/**
 * Corresponds to attribute <code>style attribute</code> on the given element.
 * If the user agent does not support <a href='styling.html#StylingWithCSS'>styling
 * with CSS</a>, then this attribute must always have the value of null.
 * @type CSSStyleDeclaration
 */
SVGClipPathElement.prototype.style = new CSSStyleDeclaration();
/**
 * Returns the base (i.e., static) value of a given <code>presentation   attribute</code>
 * as an object of type <code>CSSValue</code>. The returned object is live;
 * changes to the objects represent immediate changes to the objects to which
 * the <code>CSSValue</code> is attached. <p>Note: The <code>getPresentationAttribute</code>
 * method is deprecated, and may be dropped from future versions of the SVG
 * specification.</p>
 * @param {String} name The name of the presentation attribute whose value
 * is to be   returned.
 * @returns {CSSValue} The static/base value of the given <code>presentation
 * attribute</code>   as a <code>CSSValue</code>, or null if the given attribute
 * does not have a   specified value.
 */
SVGClipPathElement.prototype.getPresentationAttribute = function (name) {
  return new CSSValue();
};

// Implementation of the svg::SVGTests W3C IDL interface
/**
 * Corresponds to attribute {@link SVGTests#requiredFeatures} on the given
 * element.
 * @type SVGStringList
 */
SVGClipPathElement.prototype.requiredFeatures = new SVGStringList();
/**
 * Corresponds to attribute {@link SVGTests#requiredExtensions} on the given
 * element.
 * @type SVGStringList
 */
SVGClipPathElement.prototype.requiredExtensions = new SVGStringList();
/**
 * Corresponds to attribute {@link SVGTests#systemLanguage} on the given element.
 * @type SVGStringList
 */
SVGClipPathElement.prototype.systemLanguage = new SVGStringList();
/**
 * Returns true if the user agent supports the given extension, specified
 * by a URI.
 * @param {String} extension The name of the extension, expressed as a URI.
 * @returns {Boolean} True or false, depending on whether the given extension
 * is   supported.
 */
SVGClipPathElement.prototype.hasExtension = function (extension) {
  return false;
};

// Implementation of the svg::SVGTransformable W3C IDL interface
/**
 * Corresponds to attribute {@link SVGTransformable#transform} on the given
 * element.
 * @type SVGAnimatedTransformList
 */
SVGClipPathElement.prototype.transform = new SVGAnimatedTransformList();

// Implementation of the svg::SVGUnitTypes W3C IDL interface
/**
 * The type is not one of predefined types. It is invalid to attempt to define
 * a new value of this type or to attempt to switch an existing value to this
 * type.
 * @constant
 * @type Number
 */
SVGClipPathElement.SVG_UNIT_TYPE_UNKNOWN = 0;
/**
 * Corresponds to value <span class='attr-value'>'userSpaceOnUse'</span>.
 * @constant
 * @type Number
 */
SVGClipPathElement.SVG_UNIT_TYPE_USERSPACEONUSE = 1;
/**
 * Corresponds to value <span class='attr-value'>'objectBoundingBox'</span>.
 * @constant
 * @type Number
 */
SVGClipPathElement.SVG_UNIT_TYPE_OBJECTBOUNDINGBOX = 2;

/**
 * The {@link SVGMaskElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/masking.html#MaskElement'
 * title='mask element specification'>mask</a>  element.
 * @constructor
 * @augments SVGElement
 */
function SVGMaskElement() {
}
SVGMaskElement.prototype = new SVGElement();

// Implementation of the svg::SVGMaskElement W3C IDL interface
/**
 * Corresponds to attribute {@link SVGMaskElement#maskUnits} on the given
 * <a href='http://www.w3.org/TR/SVG11/masking.html#MaskElement' title='mask
 * element specification'>mask</a>  element.  Takes one of the constants defined
 * in {@link SVGUnitTypes}.
 * @type SVGAnimatedEnumeration
 */
SVGMaskElement.prototype.maskUnits = new SVGAnimatedEnumeration();
/**
 * Corresponds to attribute {@link SVGMaskElement#maskContentUnits} on the
 * given <a href='http://www.w3.org/TR/SVG11/masking.html#MaskElement' title='mask
 * element specification'>mask</a>  element.  Takes one of the constants defined
 * in {@link SVGUnitTypes}.
 * @type SVGAnimatedEnumeration
 */
SVGMaskElement.prototype.maskContentUnits = new SVGAnimatedEnumeration();
/**
 * Corresponds to attribute {@link SVGMaskElement#x} on the given <a href='http://www.w3.org/TR/SVG11/masking.html#MaskElement'
 * title='mask element specification'>mask</a> element.
 * @type SVGAnimatedLength
 */
SVGMaskElement.prototype.x = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGMaskElement#y} on the given <a href='http://www.w3.org/TR/SVG11/masking.html#MaskElement'
 * title='mask element specification'>mask</a> element.
 * @type SVGAnimatedLength
 */
SVGMaskElement.prototype.y = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGMaskElement#width} on the given <a href='http://www.w3.org/TR/SVG11/masking.html#MaskElement'
 * title='mask element specification'>mask</a>  element.
 * @type SVGAnimatedLength
 */
SVGMaskElement.prototype.width = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGMaskElement#height} on the given <a
 * href='http://www.w3.org/TR/SVG11/masking.html#MaskElement' title='mask
 * element specification'>mask</a>  element.
 * @type SVGAnimatedLength
 */
SVGMaskElement.prototype.height = new SVGAnimatedLength();

// Implementation of the svg::SVGExternalResourcesRequired W3C IDL interface
/**
 * Corresponds to attribute {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * on the given element. Note that the SVG DOM defines the attribute {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * as being of type {@link SVGAnimatedBoolean}, whereas the SVG language definition
 * says that {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * is not animated. Because the SVG language definition states that {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * cannot be animated, the {@link SVGAnimatedBoolean#animVal} will always
 * be the same as the {@link SVGAnimatedBoolean#baseVal}.
 * @type SVGAnimatedBoolean
 */
SVGMaskElement.prototype.externalResourcesRequired = new SVGAnimatedBoolean();

// Implementation of the svg::SVGLangSpace W3C IDL interface
/**
 * Corresponds to attribute <code>xml:lang</code> on the given element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an   attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGMaskElement.prototype.xmllang = "";
/**
 * Corresponds to attribute <code>xml:space</code> on the given element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an   attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGMaskElement.prototype.xmlspace = "";

// Implementation of the svg::SVGStylable W3C IDL interface
/**
 * Corresponds to attribute <code>class</code> on the given element.
 * @type SVGAnimatedString
 */
SVGMaskElement.prototype.className = new SVGAnimatedString();
/**
 * Corresponds to attribute <code>style attribute</code> on the given element.
 * If the user agent does not support <a href='styling.html#StylingWithCSS'>styling
 * with CSS</a>, then this attribute must always have the value of null.
 * @type CSSStyleDeclaration
 */
SVGMaskElement.prototype.style = new CSSStyleDeclaration();
/**
 * Returns the base (i.e., static) value of a given <code>presentation   attribute</code>
 * as an object of type <code>CSSValue</code>. The returned object is live;
 * changes to the objects represent immediate changes to the objects to which
 * the <code>CSSValue</code> is attached. <p>Note: The <code>getPresentationAttribute</code>
 * method is deprecated, and may be dropped from future versions of the SVG
 * specification.</p>
 * @param {String} name The name of the presentation attribute whose value
 * is to be   returned.
 * @returns {CSSValue} The static/base value of the given <code>presentation
 * attribute</code>   as a <code>CSSValue</code>, or null if the given attribute
 * does not have a   specified value.
 */
SVGMaskElement.prototype.getPresentationAttribute = function (name) {
  return new CSSValue();
};

// Implementation of the svg::SVGTests W3C IDL interface
/**
 * Corresponds to attribute {@link SVGTests#requiredFeatures} on the given
 * element.
 * @type SVGStringList
 */
SVGMaskElement.prototype.requiredFeatures = new SVGStringList();
/**
 * Corresponds to attribute {@link SVGTests#requiredExtensions} on the given
 * element.
 * @type SVGStringList
 */
SVGMaskElement.prototype.requiredExtensions = new SVGStringList();
/**
 * Corresponds to attribute {@link SVGTests#systemLanguage} on the given element.
 * @type SVGStringList
 */
SVGMaskElement.prototype.systemLanguage = new SVGStringList();
/**
 * Returns true if the user agent supports the given extension, specified
 * by a URI.
 * @param {String} extension The name of the extension, expressed as a URI.
 * @returns {Boolean} True or false, depending on whether the given extension
 * is   supported.
 */
SVGMaskElement.prototype.hasExtension = function (extension) {
  return false;
};

// Implementation of the svg::SVGUnitTypes W3C IDL interface
/**
 * The type is not one of predefined types. It is invalid to attempt to define
 * a new value of this type or to attempt to switch an existing value to this
 * type.
 * @constant
 * @type Number
 */
SVGMaskElement.SVG_UNIT_TYPE_UNKNOWN = 0;
/**
 * Corresponds to value <span class='attr-value'>'userSpaceOnUse'</span>.
 * @constant
 * @type Number
 */
SVGMaskElement.SVG_UNIT_TYPE_USERSPACEONUSE = 1;
/**
 * Corresponds to value <span class='attr-value'>'objectBoundingBox'</span>.
 * @constant
 * @type Number
 */
SVGMaskElement.SVG_UNIT_TYPE_OBJECTBOUNDINGBOX = 2;

/**
 * The {@link SVGFilterElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/filters.html#FilterElement'
 * title='filter element specification'>filter</a> element.
 * @constructor
 * @augments SVGElement
 */
function SVGFilterElement() {
}
SVGFilterElement.prototype = new SVGElement();

// Implementation of the svg::SVGFilterElement W3C IDL interface
/**
 * Corresponds to attribute {@link SVGFilterElement#filterUnits} on the given
 * <a href='http://www.w3.org/TR/SVG11/filters.html#FilterElement' title='filter
 * element specification'>filter</a> element. Takes one of the constants defined
 * in {@link SVGUnitTypes}.
 * @type SVGAnimatedEnumeration
 */
SVGFilterElement.prototype.filterUnits = new SVGAnimatedEnumeration();
/**
 * Corresponds to attribute {@link SVGFilterElement#primitiveUnits} on the
 * given <a href='http://www.w3.org/TR/SVG11/filters.html#FilterElement' title='filter
 * element specification'>filter</a> element. Takes one of the constants defined
 * in {@link SVGUnitTypes}.
 * @type SVGAnimatedEnumeration
 */
SVGFilterElement.prototype.primitiveUnits = new SVGAnimatedEnumeration();
/**
 * Corresponds to attribute {@link SVGFilterElement#x} on the given <a href='http://www.w3.org/TR/SVG11/filters.html#FilterElement'
 * title='filter element specification'>filter</a>  element.
 * @type SVGAnimatedLength
 */
SVGFilterElement.prototype.x = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterElement#y} on the given <a href='http://www.w3.org/TR/SVG11/filters.html#FilterElement'
 * title='filter element specification'>filter</a>  element.
 * @type SVGAnimatedLength
 */
SVGFilterElement.prototype.y = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterElement#width} on the given <a
 * href='http://www.w3.org/TR/SVG11/filters.html#FilterElement' title='filter
 * element specification'>filter</a>  element.
 * @type SVGAnimatedLength
 */
SVGFilterElement.prototype.width = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterElement#height} on the given <a
 * href='http://www.w3.org/TR/SVG11/filters.html#FilterElement' title='filter
 * element specification'>filter</a>  element.
 * @type SVGAnimatedLength
 */
SVGFilterElement.prototype.height = new SVGAnimatedLength();
/**
 * Corresponds to attribute <code>filterRes</code> on the given <a href='http://www.w3.org/TR/SVG11/filters.html#FilterElement'
 * title='filter element specification'>filter</a> element.  Contains the
 * X component of attribute <code>filterRes</code>.
 * @type SVGAnimatedInteger
 */
SVGFilterElement.prototype.filterResX = new SVGAnimatedInteger();
/**
 * Corresponds to attribute <code>filterRes</code> on the given <a href='http://www.w3.org/TR/SVG11/filters.html#FilterElement'
 * title='filter element specification'>filter</a> element.  Contains the
 * Y component (possibly computed automatically) of attribute <code>filterRes</code>.
 * @type SVGAnimatedInteger
 */
SVGFilterElement.prototype.filterResY = new SVGAnimatedInteger();
/**
 * Sets the values for attribute <code>filterRes</code>.
 * @param {Number} filterResX The X component of attribute <code>filterRes</code>.
 * @param {Number} filterResY The Y component of attribute <code>filterRes</code>.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 */
SVGFilterElement.prototype.setFilterRes = function (filterResX, filterResY) {
};

// Implementation of the svg::SVGExternalResourcesRequired W3C IDL interface
/**
 * Corresponds to attribute {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * on the given element. Note that the SVG DOM defines the attribute {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * as being of type {@link SVGAnimatedBoolean}, whereas the SVG language definition
 * says that {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * is not animated. Because the SVG language definition states that {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * cannot be animated, the {@link SVGAnimatedBoolean#animVal} will always
 * be the same as the {@link SVGAnimatedBoolean#baseVal}.
 * @type SVGAnimatedBoolean
 */
SVGFilterElement.prototype.externalResourcesRequired = new SVGAnimatedBoolean();

// Implementation of the svg::SVGLangSpace W3C IDL interface
/**
 * Corresponds to attribute <code>xml:lang</code> on the given element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an   attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGFilterElement.prototype.xmllang = "";
/**
 * Corresponds to attribute <code>xml:space</code> on the given element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an   attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGFilterElement.prototype.xmlspace = "";

// Implementation of the svg::SVGStylable W3C IDL interface
/**
 * Corresponds to attribute <code>class</code> on the given element.
 * @type SVGAnimatedString
 */
SVGFilterElement.prototype.className = new SVGAnimatedString();
/**
 * Corresponds to attribute <code>style attribute</code> on the given element.
 * If the user agent does not support <a href='styling.html#StylingWithCSS'>styling
 * with CSS</a>, then this attribute must always have the value of null.
 * @type CSSStyleDeclaration
 */
SVGFilterElement.prototype.style = new CSSStyleDeclaration();
/**
 * Returns the base (i.e., static) value of a given <code>presentation   attribute</code>
 * as an object of type <code>CSSValue</code>. The returned object is live;
 * changes to the objects represent immediate changes to the objects to which
 * the <code>CSSValue</code> is attached. <p>Note: The <code>getPresentationAttribute</code>
 * method is deprecated, and may be dropped from future versions of the SVG
 * specification.</p>
 * @param {String} name The name of the presentation attribute whose value
 * is to be   returned.
 * @returns {CSSValue} The static/base value of the given <code>presentation
 * attribute</code>   as a <code>CSSValue</code>, or null if the given attribute
 * does not have a   specified value.
 */
SVGFilterElement.prototype.getPresentationAttribute = function (name) {
  return new CSSValue();
};

// Implementation of the svg::SVGURIReference W3C IDL interface
/**
 * Corresponds to attribute <span class='attr-name'>'xlink:href'</span> on
 * the given element.
 * @type SVGAnimatedString
 */
SVGFilterElement.prototype.href = new SVGAnimatedString();

// Implementation of the svg::SVGUnitTypes W3C IDL interface
/**
 * The type is not one of predefined types. It is invalid to attempt to define
 * a new value of this type or to attempt to switch an existing value to this
 * type.
 * @constant
 * @type Number
 */
SVGFilterElement.SVG_UNIT_TYPE_UNKNOWN = 0;
/**
 * Corresponds to value <span class='attr-value'>'userSpaceOnUse'</span>.
 * @constant
 * @type Number
 */
SVGFilterElement.SVG_UNIT_TYPE_USERSPACEONUSE = 1;
/**
 * Corresponds to value <span class='attr-value'>'objectBoundingBox'</span>.
 * @constant
 * @type Number
 */
SVGFilterElement.SVG_UNIT_TYPE_OBJECTBOUNDINGBOX = 2;

/**
 * This interface defines the set of DOM attributes that are common across
 * the filter primitive interfaces.
 * @constructor
 * @augments SVGStylable
 */
function SVGFilterPrimitiveStandardAttributes() {
}
SVGFilterPrimitiveStandardAttributes.prototype = new SVGStylable();

// Implementation of the svg::SVGFilterPrimitiveStandardAttributes W3C IDL interface
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#x}
 * on the given element.
 * @type SVGAnimatedLength
 */
SVGFilterPrimitiveStandardAttributes.prototype.x = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#y}
 * on the given element.
 * @type SVGAnimatedLength
 */
SVGFilterPrimitiveStandardAttributes.prototype.y = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#width}
 * on the given element.
 * @type SVGAnimatedLength
 */
SVGFilterPrimitiveStandardAttributes.prototype.width = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#height}
 * on the given element.
 * @type SVGAnimatedLength
 */
SVGFilterPrimitiveStandardAttributes.prototype.height = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#result}
 * on the given element.
 * @type SVGAnimatedString
 */
SVGFilterPrimitiveStandardAttributes.prototype.result = new SVGAnimatedString();

/**
 * The {@link SVGFEBlendElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/filters.html#feBlendElement'
 * title='feBlend element specification'>feBlend</a> element.
 * @constructor
 * @augments SVGElement
 */
function SVGFEBlendElement() {
}
SVGFEBlendElement.prototype = new SVGElement();

// Implementation of the svg::SVGFEBlendElement W3C IDL interface
/**
 * The type is not one of predefined types. It is invalid to attempt to define
 * a new value of this type or to attempt to switch an existing value to this
 * type.
 * @constant
 * @type Number
 */
SVGFEBlendElement.SVG_FEBLEND_MODE_UNKNOWN = 0;
/**
 * Corresponds to value <span class="attr-value">'normal'</span>.
 * @constant
 * @type Number
 */
SVGFEBlendElement.SVG_FEBLEND_MODE_NORMAL = 1;
/**
 * Corresponds to value <span class="attr-value">'multiply'</span>.
 * @constant
 * @type Number
 */
SVGFEBlendElement.SVG_FEBLEND_MODE_MULTIPLY = 2;
/**
 * Corresponds to value <span class="attr-value">'screen'</span>.
 * @constant
 * @type Number
 */
SVGFEBlendElement.SVG_FEBLEND_MODE_SCREEN = 3;
/**
 * Corresponds to value <span class="attr-value">'darken'</span>.
 * @constant
 * @type Number
 */
SVGFEBlendElement.SVG_FEBLEND_MODE_DARKEN = 4;
/**
 * Corresponds to value <span class="attr-value">'lighten'</span>.
 * @constant
 * @type Number
 */
SVGFEBlendElement.SVG_FEBLEND_MODE_LIGHTEN = 5;
/**
 * Corresponds to attribute <code>in</code> on the given <a href='http://www.w3.org/TR/SVG11/filters.html#feBlendElement'
 * title='feBlend element specification'>feBlend</a> element.
 * @type SVGAnimatedString
 */
SVGFEBlendElement.prototype.in1 = new SVGAnimatedString();
/**
 * Corresponds to attribute {@link SVGFEBlendElement#in2} on the given <a
 * href='http://www.w3.org/TR/SVG11/filters.html#feBlendElement' title='feBlend
 * element specification'>feBlend</a> element.
 * @type SVGAnimatedString
 */
SVGFEBlendElement.prototype.in2 = new SVGAnimatedString();
/**
 * Corresponds to attribute {@link SVGFEBlendElement#mode} on the given <a
 * href='http://www.w3.org/TR/SVG11/filters.html#feBlendElement' title='feBlend
 * element specification'>feBlend</a> element.  Takes one of the SVG_FEBLEND_MODE_
 * constants defined on this interface.
 * @type SVGAnimatedEnumeration
 */
SVGFEBlendElement.prototype.mode = new SVGAnimatedEnumeration();

// Implementation of the svg::SVGFilterPrimitiveStandardAttributes W3C IDL interface
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#x}
 * on the given element.
 * @type SVGAnimatedLength
 */
SVGFEBlendElement.prototype.x = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#y}
 * on the given element.
 * @type SVGAnimatedLength
 */
SVGFEBlendElement.prototype.y = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#width}
 * on the given element.
 * @type SVGAnimatedLength
 */
SVGFEBlendElement.prototype.width = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#height}
 * on the given element.
 * @type SVGAnimatedLength
 */
SVGFEBlendElement.prototype.height = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#result}
 * on the given element.
 * @type SVGAnimatedString
 */
SVGFEBlendElement.prototype.result = new SVGAnimatedString();

// Implementation of the svg::SVGStylable W3C IDL interface
/**
 * Corresponds to attribute <code>class</code> on the given element.
 * @type SVGAnimatedString
 */
SVGFEBlendElement.prototype.className = new SVGAnimatedString();
/**
 * Corresponds to attribute <code>style attribute</code> on the given element.
 * If the user agent does not support <a href='styling.html#StylingWithCSS'>styling
 * with CSS</a>, then this attribute must always have the value of null.
 * @type CSSStyleDeclaration
 */
SVGFEBlendElement.prototype.style = new CSSStyleDeclaration();
/**
 * Returns the base (i.e., static) value of a given <code>presentation   attribute</code>
 * as an object of type <code>CSSValue</code>. The returned object is live;
 * changes to the objects represent immediate changes to the objects to which
 * the <code>CSSValue</code> is attached. <p>Note: The <code>getPresentationAttribute</code>
 * method is deprecated, and may be dropped from future versions of the SVG
 * specification.</p>
 * @param {String} name The name of the presentation attribute whose value
 * is to be   returned.
 * @returns {CSSValue} The static/base value of the given <code>presentation
 * attribute</code>   as a <code>CSSValue</code>, or null if the given attribute
 * does not have a   specified value.
 */
SVGFEBlendElement.prototype.getPresentationAttribute = function (name) {
  return new CSSValue();
};

/**
 * The {@link SVGFEColorMatrixElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/filters.html#feColorMatrixElement'
 * title='feColorMatrix element specification'>feColorMatrix</a> element.
 * @constructor
 * @augments SVGElement
 */
function SVGFEColorMatrixElement() {
}
SVGFEColorMatrixElement.prototype = new SVGElement();

// Implementation of the svg::SVGFEColorMatrixElement W3C IDL interface
/**
 * The type is not one of predefined types. It is invalid to attempt to define
 * a new value of this type or to attempt to switch an existing value to this
 * type.
 * @constant
 * @type Number
 */
SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_UNKNOWN = 0;
/**
 * Corresponds to value <span class="attr-value">'matrix'</span>.
 * @constant
 * @type Number
 */
SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_MATRIX = 1;
/**
 * Corresponds to value <span class="attr-value">'saturate'</span>.
 * @constant
 * @type Number
 */
SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE = 2;
/**
 * Corresponds to value <span class="attr-value">'hueRotate'</span>.
 * @constant
 * @type Number
 */
SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_HUEROTATE = 3;
/**
 * Corresponds to value <span class="attr-value">'luminanceToAlpha'</span>.
 * @constant
 * @type Number
 */
SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_LUMINANCETOALPHA = 4;
/**
 * Corresponds to attribute <code>in</code> on the given <a href='http://www.w3.org/TR/SVG11/filters.html#feColorMatrixElement'
 * title='feColorMatrix element specification'>feColorMatrix</a> element.
 * @type SVGAnimatedString
 */
SVGFEColorMatrixElement.prototype.in1 = new SVGAnimatedString();
/**
 * Corresponds to attribute {@link SVGFEColorMatrixElement#type} on the given
 * <a href='http://www.w3.org/TR/SVG11/filters.html#feColorMatrixElement'
 * title='feColorMatrix element specification'>feColorMatrix</a> element.
 * Takes one of the SVG_FECOLORMATRIX_TYPE_ constants defined on this interface.
 * @type SVGAnimatedEnumeration
 */
SVGFEColorMatrixElement.prototype.type = new SVGAnimatedEnumeration();
/**
 * Corresponds to attribute {@link SVGFEColorMatrixElement#values} on the
 * given <a href='http://www.w3.org/TR/SVG11/filters.html#feColorMatrixElement'
 * title='feColorMatrix element specification'>feColorMatrix</a> element.
 * @type SVGAnimatedNumberList
 */
SVGFEColorMatrixElement.prototype.values = new SVGAnimatedNumberList();

// Implementation of the svg::SVGFilterPrimitiveStandardAttributes W3C IDL interface
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#x}
 * on the given element.
 * @type SVGAnimatedLength
 */
SVGFEColorMatrixElement.prototype.x = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#y}
 * on the given element.
 * @type SVGAnimatedLength
 */
SVGFEColorMatrixElement.prototype.y = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#width}
 * on the given element.
 * @type SVGAnimatedLength
 */
SVGFEColorMatrixElement.prototype.width = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#height}
 * on the given element.
 * @type SVGAnimatedLength
 */
SVGFEColorMatrixElement.prototype.height = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#result}
 * on the given element.
 * @type SVGAnimatedString
 */
SVGFEColorMatrixElement.prototype.result = new SVGAnimatedString();

// Implementation of the svg::SVGStylable W3C IDL interface
/**
 * Corresponds to attribute <code>class</code> on the given element.
 * @type SVGAnimatedString
 */
SVGFEColorMatrixElement.prototype.className = new SVGAnimatedString();
/**
 * Corresponds to attribute <code>style attribute</code> on the given element.
 * If the user agent does not support <a href='styling.html#StylingWithCSS'>styling
 * with CSS</a>, then this attribute must always have the value of null.
 * @type CSSStyleDeclaration
 */
SVGFEColorMatrixElement.prototype.style = new CSSStyleDeclaration();
/**
 * Returns the base (i.e., static) value of a given <code>presentation   attribute</code>
 * as an object of type <code>CSSValue</code>. The returned object is live;
 * changes to the objects represent immediate changes to the objects to which
 * the <code>CSSValue</code> is attached. <p>Note: The <code>getPresentationAttribute</code>
 * method is deprecated, and may be dropped from future versions of the SVG
 * specification.</p>
 * @param {String} name The name of the presentation attribute whose value
 * is to be   returned.
 * @returns {CSSValue} The static/base value of the given <code>presentation
 * attribute</code>   as a <code>CSSValue</code>, or null if the given attribute
 * does not have a   specified value.
 */
SVGFEColorMatrixElement.prototype.getPresentationAttribute = function (name) {
  return new CSSValue();
};

/**
 * The {@link SVGFEComponentTransferElement} interface corresponds to the
 * <a href='http://www.w3.org/TR/SVG11/filters.html#feComponentTransferElement'
 * title='feComponentTransfer element specification'>feComponentTransfer</a>
 * element.
 * @constructor
 * @augments SVGElement
 */
function SVGFEComponentTransferElement() {
}
SVGFEComponentTransferElement.prototype = new SVGElement();

// Implementation of the svg::SVGFEComponentTransferElement W3C IDL interface
/**
 * Corresponds to attribute <code>in</code> on the given <a href='http://www.w3.org/TR/SVG11/filters.html#feComponentTransferElement'
 * title='feComponentTransfer element specification'>feComponentTransfer</a>
 * element.
 * @type SVGAnimatedString
 */
SVGFEComponentTransferElement.prototype.in1 = new SVGAnimatedString();

// Implementation of the svg::SVGFilterPrimitiveStandardAttributes W3C IDL interface
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#x}
 * on the given element.
 * @type SVGAnimatedLength
 */
SVGFEComponentTransferElement.prototype.x = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#y}
 * on the given element.
 * @type SVGAnimatedLength
 */
SVGFEComponentTransferElement.prototype.y = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#width}
 * on the given element.
 * @type SVGAnimatedLength
 */
SVGFEComponentTransferElement.prototype.width = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#height}
 * on the given element.
 * @type SVGAnimatedLength
 */
SVGFEComponentTransferElement.prototype.height = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#result}
 * on the given element.
 * @type SVGAnimatedString
 */
SVGFEComponentTransferElement.prototype.result = new SVGAnimatedString();

// Implementation of the svg::SVGStylable W3C IDL interface
/**
 * Corresponds to attribute <code>class</code> on the given element.
 * @type SVGAnimatedString
 */
SVGFEComponentTransferElement.prototype.className = new SVGAnimatedString();
/**
 * Corresponds to attribute <code>style attribute</code> on the given element.
 * If the user agent does not support <a href='styling.html#StylingWithCSS'>styling
 * with CSS</a>, then this attribute must always have the value of null.
 * @type CSSStyleDeclaration
 */
SVGFEComponentTransferElement.prototype.style = new CSSStyleDeclaration();
/**
 * Returns the base (i.e., static) value of a given <code>presentation   attribute</code>
 * as an object of type <code>CSSValue</code>. The returned object is live;
 * changes to the objects represent immediate changes to the objects to which
 * the <code>CSSValue</code> is attached. <p>Note: The <code>getPresentationAttribute</code>
 * method is deprecated, and may be dropped from future versions of the SVG
 * specification.</p>
 * @param {String} name The name of the presentation attribute whose value
 * is to be   returned.
 * @returns {CSSValue} The static/base value of the given <code>presentation
 * attribute</code>   as a <code>CSSValue</code>, or null if the given attribute
 * does not have a   specified value.
 */
SVGFEComponentTransferElement.prototype.getPresentationAttribute = function (name) {
  return new CSSValue();
};

/**
 * This interface defines a base interface used by the component transfer
 * function interfaces.
 * @constructor
 * @augments SVGElement
 */
function SVGComponentTransferFunctionElement() {
}
SVGComponentTransferFunctionElement.prototype = new SVGElement();

// Implementation of the svg::SVGComponentTransferFunctionElement W3C IDL interface
/**
 * The type is not one of predefined types. It is invalid to attempt to define
 * a new value of this type or to attempt to switch an existing value to this
 * type.
 * @constant
 * @type Number
 */
SVGComponentTransferFunctionElement.SVG_FECOMPONENTTRANSFER_TYPE_UNKNOWN = 0;
/**
 * Corresponds to value <span class="attr-value">'identity'</span>.
 * @constant
 * @type Number
 */
SVGComponentTransferFunctionElement.SVG_FECOMPONENTTRANSFER_TYPE_IDENTITY = 1;
/**
 * Corresponds to value <span class="attr-value">'table'</span>.
 * @constant
 * @type Number
 */
SVGComponentTransferFunctionElement.SVG_FECOMPONENTTRANSFER_TYPE_TABLE = 2;
/**
 * Corresponds to value <span class="attr-value">'discrete'</span>.
 * @constant
 * @type Number
 */
SVGComponentTransferFunctionElement.SVG_FECOMPONENTTRANSFER_TYPE_DISCRETE = 3;
/**
 * Corresponds to value <span class="attr-value">'linear'</span>.
 * @constant
 * @type Number
 */
SVGComponentTransferFunctionElement.SVG_FECOMPONENTTRANSFER_TYPE_LINEAR = 4;
/**
 * Corresponds to value <span class="attr-value">'gamma'</span>.
 * @constant
 * @type Number
 */
SVGComponentTransferFunctionElement.SVG_FECOMPONENTTRANSFER_TYPE_GAMMA = 5;
/**
 * Corresponds to attribute {@link SVGComponentTransferFunctionElement#type}
 * on the given element.  Takes one of the SVG_FECOMPONENTTRANSFER_TYPE_ constants
 * defined on this interface.
 * @type SVGAnimatedEnumeration
 */
SVGComponentTransferFunctionElement.prototype.type = new SVGAnimatedEnumeration();
/**
 * Corresponds to attribute {@link SVGComponentTransferFunctionElement#tableValues}
 * on the given element.
 * @type SVGAnimatedNumberList
 */
SVGComponentTransferFunctionElement.prototype.tableValues = new SVGAnimatedNumberList();
/**
 * Corresponds to attribute {@link SVGComponentTransferFunctionElement#slope}
 * on the given element.
 * @type SVGAnimatedNumber
 */
SVGComponentTransferFunctionElement.prototype.slope = new SVGAnimatedNumber();
/**
 * Corresponds to attribute {@link SVGComponentTransferFunctionElement#intercept}
 * on the given element.
 * @type SVGAnimatedNumber
 */
SVGComponentTransferFunctionElement.prototype.intercept = new SVGAnimatedNumber();
/**
 * Corresponds to attribute {@link SVGComponentTransferFunctionElement#amplitude}
 * on the given element.
 * @type SVGAnimatedNumber
 */
SVGComponentTransferFunctionElement.prototype.amplitude = new SVGAnimatedNumber();
/**
 * Corresponds to attribute {@link SVGComponentTransferFunctionElement#exponent}
 * on the given element.
 * @type SVGAnimatedNumber
 */
SVGComponentTransferFunctionElement.prototype.exponent = new SVGAnimatedNumber();
/**
 * Corresponds to attribute {@link SVGComponentTransferFunctionElement#offset}
 * on the given element.
 * @type SVGAnimatedNumber
 */
SVGComponentTransferFunctionElement.prototype.offset = new SVGAnimatedNumber();

/**
 * The {@link SVGFEFuncRElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/filters.html#feFuncRElement'
 * title='feFuncR element specification'>feFuncR</a> element.
 * @constructor
 * @augments SVGComponentTransferFunctionElement
 */
function SVGFEFuncRElement() {
}
SVGFEFuncRElement.prototype = new SVGComponentTransferFunctionElement();

// Implementation of the svg::SVGFEFuncRElement W3C IDL interface

/**
 * The {@link SVGFEFuncRElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/filters.html#feFuncGElement'
 * title='feFuncG element specification'>feFuncG</a> element.
 * @constructor
 * @augments SVGComponentTransferFunctionElement
 */
function SVGFEFuncGElement() {
}
SVGFEFuncGElement.prototype = new SVGComponentTransferFunctionElement();

// Implementation of the svg::SVGFEFuncGElement W3C IDL interface

/**
 * The {@link SVGFEFuncBElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/filters.html#feFuncBElement'
 * title='feFuncB element specification'>feFuncB</a> element.
 * @constructor
 * @augments SVGComponentTransferFunctionElement
 */
function SVGFEFuncBElement() {
}
SVGFEFuncBElement.prototype = new SVGComponentTransferFunctionElement();

// Implementation of the svg::SVGFEFuncBElement W3C IDL interface

/**
 * The {@link SVGFEFuncAElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/filters.html#feFuncAElement'
 * title='feFuncA element specification'>feFuncA</a> element.
 * @constructor
 * @augments SVGComponentTransferFunctionElement
 */
function SVGFEFuncAElement() {
}
SVGFEFuncAElement.prototype = new SVGComponentTransferFunctionElement();

// Implementation of the svg::SVGFEFuncAElement W3C IDL interface

/**
 * The {@link SVGFECompositeElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/filters.html#feCompositeElement'
 * title='feComposite element specification'>feComposite</a> element.
 * @constructor
 * @augments SVGElement
 */
function SVGFECompositeElement() {
}
SVGFECompositeElement.prototype = new SVGElement();

// Implementation of the svg::SVGFECompositeElement W3C IDL interface
/**
 * The type is not one of predefined types. It is invalid to attempt to define
 * a new value of this type or to attempt to switch an existing value to this
 * type.
 * @constant
 * @type Number
 */
SVGFECompositeElement.SVG_FECOMPOSITE_OPERATOR_UNKNOWN = 0;
/**
 * Corresponds to value <span class="attr-value">'over'</span>.
 * @constant
 * @type Number
 */
SVGFECompositeElement.SVG_FECOMPOSITE_OPERATOR_OVER = 1;
/**
 * Corresponds to value <span class="attr-value">'in'</span>.
 * @constant
 * @type Number
 */
SVGFECompositeElement.SVG_FECOMPOSITE_OPERATOR_IN = 2;
/**
 * Corresponds to value <span class="attr-value">'out'</span>.
 * @constant
 * @type Number
 */
SVGFECompositeElement.SVG_FECOMPOSITE_OPERATOR_OUT = 3;
/**
 * Corresponds to value <span class="attr-value">'atop'</span>.
 * @constant
 * @type Number
 */
SVGFECompositeElement.SVG_FECOMPOSITE_OPERATOR_ATOP = 4;
/**
 * Corresponds to value <span class="attr-value">'xor'</span>.
 * @constant
 * @type Number
 */
SVGFECompositeElement.SVG_FECOMPOSITE_OPERATOR_XOR = 5;
/**
 * Corresponds to value <span class="attr-value">'arithmetic'</span>.
 * @constant
 * @type Number
 */
SVGFECompositeElement.SVG_FECOMPOSITE_OPERATOR_ARITHMETIC = 6;
/**
 * Corresponds to attribute <code>in</code> on the given <a href='http://www.w3.org/TR/SVG11/filters.html#feCompositeElement'
 * title='feComposite element specification'>feComposite</a> element.
 * @type SVGAnimatedString
 */
SVGFECompositeElement.prototype.in1 = new SVGAnimatedString();
/**
 * Corresponds to attribute {@link SVGFECompositeElement#in2} on the given
 * <a href='http://www.w3.org/TR/SVG11/filters.html#feCompositeElement' title='feComposite
 * element specification'>feComposite</a> element.
 * @type SVGAnimatedString
 */
SVGFECompositeElement.prototype.in2 = new SVGAnimatedString();
/**
 * Corresponds to attribute {@link SVGFECompositeElement#operator} on the
 * given <a href='http://www.w3.org/TR/SVG11/filters.html#feCompositeElement'
 * title='feComposite element specification'>feComposite</a> element.  Takes
 * one of the SVG_FECOMPOSITE_OPERATOR_ constants defined on this interface.
 * @type SVGAnimatedEnumeration
 */
SVGFECompositeElement.prototype.operator = new SVGAnimatedEnumeration();
/**
 * Corresponds to attribute {@link SVGFECompositeElement#k1} on the given
 * <a href='http://www.w3.org/TR/SVG11/filters.html#feCompositeElement' title='feComposite
 * element specification'>feComposite</a> element.
 * @type SVGAnimatedNumber
 */
SVGFECompositeElement.prototype.k1 = new SVGAnimatedNumber();
/**
 * Corresponds to attribute {@link SVGFECompositeElement#k2} on the given
 * <a href='http://www.w3.org/TR/SVG11/filters.html#feCompositeElement' title='feComposite
 * element specification'>feComposite</a> element.
 * @type SVGAnimatedNumber
 */
SVGFECompositeElement.prototype.k2 = new SVGAnimatedNumber();
/**
 * Corresponds to attribute {@link SVGFECompositeElement#k3} on the given
 * <a href='http://www.w3.org/TR/SVG11/filters.html#feCompositeElement' title='feComposite
 * element specification'>feComposite</a> element.
 * @type SVGAnimatedNumber
 */
SVGFECompositeElement.prototype.k3 = new SVGAnimatedNumber();
/**
 * Corresponds to attribute {@link SVGFECompositeElement#k4} on the given
 * <a href='http://www.w3.org/TR/SVG11/filters.html#feCompositeElement' title='feComposite
 * element specification'>feComposite</a> element.
 * @type SVGAnimatedNumber
 */
SVGFECompositeElement.prototype.k4 = new SVGAnimatedNumber();

// Implementation of the svg::SVGFilterPrimitiveStandardAttributes W3C IDL interface
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#x}
 * on the given element.
 * @type SVGAnimatedLength
 */
SVGFECompositeElement.prototype.x = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#y}
 * on the given element.
 * @type SVGAnimatedLength
 */
SVGFECompositeElement.prototype.y = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#width}
 * on the given element.
 * @type SVGAnimatedLength
 */
SVGFECompositeElement.prototype.width = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#height}
 * on the given element.
 * @type SVGAnimatedLength
 */
SVGFECompositeElement.prototype.height = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#result}
 * on the given element.
 * @type SVGAnimatedString
 */
SVGFECompositeElement.prototype.result = new SVGAnimatedString();

// Implementation of the svg::SVGStylable W3C IDL interface
/**
 * Corresponds to attribute <code>class</code> on the given element.
 * @type SVGAnimatedString
 */
SVGFECompositeElement.prototype.className = new SVGAnimatedString();
/**
 * Corresponds to attribute <code>style attribute</code> on the given element.
 * If the user agent does not support <a href='styling.html#StylingWithCSS'>styling
 * with CSS</a>, then this attribute must always have the value of null.
 * @type CSSStyleDeclaration
 */
SVGFECompositeElement.prototype.style = new CSSStyleDeclaration();
/**
 * Returns the base (i.e., static) value of a given <code>presentation   attribute</code>
 * as an object of type <code>CSSValue</code>. The returned object is live;
 * changes to the objects represent immediate changes to the objects to which
 * the <code>CSSValue</code> is attached. <p>Note: The <code>getPresentationAttribute</code>
 * method is deprecated, and may be dropped from future versions of the SVG
 * specification.</p>
 * @param {String} name The name of the presentation attribute whose value
 * is to be   returned.
 * @returns {CSSValue} The static/base value of the given <code>presentation
 * attribute</code>   as a <code>CSSValue</code>, or null if the given attribute
 * does not have a   specified value.
 */
SVGFECompositeElement.prototype.getPresentationAttribute = function (name) {
  return new CSSValue();
};

/**
 * The {@link SVGFEConvolveMatrixElement} interface corresponds to the <a
 * href='http://www.w3.org/TR/SVG11/filters.html#feConvolveMatrixElement'
 * title='feConvolveMatrix element specification'>feConvolveMatrix</a> element.
 * @constructor
 * @augments SVGElement
 */
function SVGFEConvolveMatrixElement() {
}
SVGFEConvolveMatrixElement.prototype = new SVGElement();

// Implementation of the svg::SVGFEConvolveMatrixElement W3C IDL interface
/**
 * The type is not one of predefined types. It is invalid to attempt to define
 * a new value of this type or to attempt to switch an existing value to this
 * type.
 * @constant
 * @type Number
 */
SVGFEConvolveMatrixElement.SVG_EDGEMODE_UNKNOWN = 0;
/**
 * Corresponds to value <span class="attr-value">'duplicate'</span>.
 * @constant
 * @type Number
 */
SVGFEConvolveMatrixElement.SVG_EDGEMODE_DUPLICATE = 1;
/**
 * Corresponds to value <span class="attr-value">'wrap'</span>.
 * @constant
 * @type Number
 */
SVGFEConvolveMatrixElement.SVG_EDGEMODE_WRAP = 2;
/**
 * Corresponds to value <span class="attr-value">'none'</span>.
 * @constant
 * @type Number
 */
SVGFEConvolveMatrixElement.SVG_EDGEMODE_NONE = 3;
/**
 * Corresponds to attribute <code>in</code> on the given <a href='http://www.w3.org/TR/SVG11/filters.html#feConvolveMatrixElement'
 * title='feConvolveMatrix element specification'>feConvolveMatrix</a> element.
 * @type SVGAnimatedString
 */
SVGFEConvolveMatrixElement.prototype.in1 = new SVGAnimatedString();
/**
 * Corresponds to attribute <code>order</code> on the given <a href='http://www.w3.org/TR/SVG11/filters.html#feConvolveMatrixElement'
 * title='feConvolveMatrix element specification'>feConvolveMatrix</a> element.
 * @type SVGAnimatedInteger
 */
SVGFEConvolveMatrixElement.prototype.orderX = new SVGAnimatedInteger();
/**
 * Corresponds to attribute <code>order</code> on the given <a href='http://www.w3.org/TR/SVG11/filters.html#feConvolveMatrixElement'
 * title='feConvolveMatrix element specification'>feConvolveMatrix</a> element.
 * @type SVGAnimatedInteger
 */
SVGFEConvolveMatrixElement.prototype.orderY = new SVGAnimatedInteger();
/**
 * Corresponds to attribute {@link SVGFEConvolveMatrixElement#kernelMatrix}
 * on the given <a href='http://www.w3.org/TR/SVG11/filters.html#feConvolveMatrixElement'
 * title='feConvolveMatrix element specification'>feConvolveMatrix</a> element.
 * @type SVGAnimatedNumberList
 */
SVGFEConvolveMatrixElement.prototype.kernelMatrix = new SVGAnimatedNumberList();
/**
 * Corresponds to attribute {@link SVGFEConvolveMatrixElement#divisor} on
 * the given <a href='http://www.w3.org/TR/SVG11/filters.html#feConvolveMatrixElement'
 * title='feConvolveMatrix element specification'>feConvolveMatrix</a> element.
 * @type SVGAnimatedNumber
 */
SVGFEConvolveMatrixElement.prototype.divisor = new SVGAnimatedNumber();
/**
 * Corresponds to attribute {@link SVGFEConvolveMatrixElement#bias} on the
 * given <a href='http://www.w3.org/TR/SVG11/filters.html#feConvolveMatrixElement'
 * title='feConvolveMatrix element specification'>feConvolveMatrix</a> element.
 * @type SVGAnimatedNumber
 */
SVGFEConvolveMatrixElement.prototype.bias = new SVGAnimatedNumber();
/**
 * Corresponds to attribute {@link SVGFEConvolveMatrixElement#targetX} on
 * the given <a href='http://www.w3.org/TR/SVG11/filters.html#feConvolveMatrixElement'
 * title='feConvolveMatrix element specification'>feConvolveMatrix</a> element.
 * @type SVGAnimatedInteger
 */
SVGFEConvolveMatrixElement.prototype.targetX = new SVGAnimatedInteger();
/**
 * Corresponds to attribute {@link SVGFEConvolveMatrixElement#targetY} on
 * the given <a href='http://www.w3.org/TR/SVG11/filters.html#feConvolveMatrixElement'
 * title='feConvolveMatrix element specification'>feConvolveMatrix</a> element.
 * @type SVGAnimatedInteger
 */
SVGFEConvolveMatrixElement.prototype.targetY = new SVGAnimatedInteger();
/**
 * Corresponds to attribute {@link SVGFEConvolveMatrixElement#edgeMode} on
 * the given <a href='http://www.w3.org/TR/SVG11/filters.html#feConvolveMatrixElement'
 * title='feConvolveMatrix element specification'>feConvolveMatrix</a> element.
 * Takes one of the SVG_EDGEMODE_ constants defined on this interface.
 * @type SVGAnimatedEnumeration
 */
SVGFEConvolveMatrixElement.prototype.edgeMode = new SVGAnimatedEnumeration();
/**
 * Corresponds to attribute <code>kernelUnitLength</code> on the given <a
 * href='http://www.w3.org/TR/SVG11/filters.html#feConvolveMatrixElement'
 * title='feConvolveMatrix element specification'>feConvolveMatrix</a> element.
 * @type SVGAnimatedNumber
 */
SVGFEConvolveMatrixElement.prototype.kernelUnitLengthX = new SVGAnimatedNumber();
/**
 * Corresponds to attribute <code>kernelUnitLength</code> on the given <a
 * href='http://www.w3.org/TR/SVG11/filters.html#feConvolveMatrixElement'
 * title='feConvolveMatrix element specification'>feConvolveMatrix</a> element.
 * @type SVGAnimatedNumber
 */
SVGFEConvolveMatrixElement.prototype.kernelUnitLengthY = new SVGAnimatedNumber();
/**
 * Corresponds to attribute {@link SVGFEConvolveMatrixElement#preserveAlpha}
 * on the given <a href='http://www.w3.org/TR/SVG11/filters.html#feConvolveMatrixElement'
 * title='feConvolveMatrix element specification'>feConvolveMatrix</a> element.
 * @type SVGAnimatedBoolean
 */
SVGFEConvolveMatrixElement.prototype.preserveAlpha = new SVGAnimatedBoolean();

// Implementation of the svg::SVGFilterPrimitiveStandardAttributes W3C IDL interface
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#x}
 * on the given element.
 * @type SVGAnimatedLength
 */
SVGFEConvolveMatrixElement.prototype.x = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#y}
 * on the given element.
 * @type SVGAnimatedLength
 */
SVGFEConvolveMatrixElement.prototype.y = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#width}
 * on the given element.
 * @type SVGAnimatedLength
 */
SVGFEConvolveMatrixElement.prototype.width = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#height}
 * on the given element.
 * @type SVGAnimatedLength
 */
SVGFEConvolveMatrixElement.prototype.height = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#result}
 * on the given element.
 * @type SVGAnimatedString
 */
SVGFEConvolveMatrixElement.prototype.result = new SVGAnimatedString();

// Implementation of the svg::SVGStylable W3C IDL interface
/**
 * Corresponds to attribute <code>class</code> on the given element.
 * @type SVGAnimatedString
 */
SVGFEConvolveMatrixElement.prototype.className = new SVGAnimatedString();
/**
 * Corresponds to attribute <code>style attribute</code> on the given element.
 * If the user agent does not support <a href='styling.html#StylingWithCSS'>styling
 * with CSS</a>, then this attribute must always have the value of null.
 * @type CSSStyleDeclaration
 */
SVGFEConvolveMatrixElement.prototype.style = new CSSStyleDeclaration();
/**
 * Returns the base (i.e., static) value of a given <code>presentation   attribute</code>
 * as an object of type <code>CSSValue</code>. The returned object is live;
 * changes to the objects represent immediate changes to the objects to which
 * the <code>CSSValue</code> is attached. <p>Note: The <code>getPresentationAttribute</code>
 * method is deprecated, and may be dropped from future versions of the SVG
 * specification.</p>
 * @param {String} name The name of the presentation attribute whose value
 * is to be   returned.
 * @returns {CSSValue} The static/base value of the given <code>presentation
 * attribute</code>   as a <code>CSSValue</code>, or null if the given attribute
 * does not have a   specified value.
 */
SVGFEConvolveMatrixElement.prototype.getPresentationAttribute = function (name) {
  return new CSSValue();
};

/**
 * The {@link SVGFEDiffuseLightingElement} interface corresponds to the <a
 * href='http://www.w3.org/TR/SVG11/filters.html#feDiffuseLightingElement'
 * title='feDiffuseLighting element specification'>feDiffuseLighting</a> element.
 * @constructor
 * @augments SVGElement
 */
function SVGFEDiffuseLightingElement() {
}
SVGFEDiffuseLightingElement.prototype = new SVGElement();

// Implementation of the svg::SVGFEDiffuseLightingElement W3C IDL interface
/**
 * Corresponds to attribute <code>in</code> on the given <a href='http://www.w3.org/TR/SVG11/filters.html#feDiffuseLightingElement'
 * title='feDiffuseLighting element specification'>feDiffuseLighting</a> element.
 * @type SVGAnimatedString
 */
SVGFEDiffuseLightingElement.prototype.in1 = new SVGAnimatedString();
/**
 * Corresponds to attribute {@link SVGFEDiffuseLightingElement#surfaceScale}
 * on the given <a href='http://www.w3.org/TR/SVG11/filters.html#feDiffuseLightingElement'
 * title='feDiffuseLighting element specification'>feDiffuseLighting</a> element.
 * @type SVGAnimatedNumber
 */
SVGFEDiffuseLightingElement.prototype.surfaceScale = new SVGAnimatedNumber();
/**
 * Corresponds to attribute {@link SVGFEDiffuseLightingElement#diffuseConstant}
 * on the given <a href='http://www.w3.org/TR/SVG11/filters.html#feDiffuseLightingElement'
 * title='feDiffuseLighting element specification'>feDiffuseLighting</a> element.
 * @type SVGAnimatedNumber
 */
SVGFEDiffuseLightingElement.prototype.diffuseConstant = new SVGAnimatedNumber();
/**
 * Corresponds to attribute <code>kernelUnitLength</code> on the given <a
 * href='http://www.w3.org/TR/SVG11/filters.html#feDiffuseLightingElement'
 * title='feDiffuseLighting element specification'>feDiffuseLighting</a> element.
 * @type SVGAnimatedNumber
 */
SVGFEDiffuseLightingElement.prototype.kernelUnitLengthX = new SVGAnimatedNumber();
/**
 * Corresponds to attribute <code>kernelUnitLength</code> on the given <a
 * href='http://www.w3.org/TR/SVG11/filters.html#feDiffuseLightingElement'
 * title='feDiffuseLighting element specification'>feDiffuseLighting</a> element.
 * @type SVGAnimatedNumber
 */
SVGFEDiffuseLightingElement.prototype.kernelUnitLengthY = new SVGAnimatedNumber();

// Implementation of the svg::SVGFilterPrimitiveStandardAttributes W3C IDL interface
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#x}
 * on the given element.
 * @type SVGAnimatedLength
 */
SVGFEDiffuseLightingElement.prototype.x = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#y}
 * on the given element.
 * @type SVGAnimatedLength
 */
SVGFEDiffuseLightingElement.prototype.y = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#width}
 * on the given element.
 * @type SVGAnimatedLength
 */
SVGFEDiffuseLightingElement.prototype.width = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#height}
 * on the given element.
 * @type SVGAnimatedLength
 */
SVGFEDiffuseLightingElement.prototype.height = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#result}
 * on the given element.
 * @type SVGAnimatedString
 */
SVGFEDiffuseLightingElement.prototype.result = new SVGAnimatedString();

// Implementation of the svg::SVGStylable W3C IDL interface
/**
 * Corresponds to attribute <code>class</code> on the given element.
 * @type SVGAnimatedString
 */
SVGFEDiffuseLightingElement.prototype.className = new SVGAnimatedString();
/**
 * Corresponds to attribute <code>style attribute</code> on the given element.
 * If the user agent does not support <a href='styling.html#StylingWithCSS'>styling
 * with CSS</a>, then this attribute must always have the value of null.
 * @type CSSStyleDeclaration
 */
SVGFEDiffuseLightingElement.prototype.style = new CSSStyleDeclaration();
/**
 * Returns the base (i.e., static) value of a given <code>presentation   attribute</code>
 * as an object of type <code>CSSValue</code>. The returned object is live;
 * changes to the objects represent immediate changes to the objects to which
 * the <code>CSSValue</code> is attached. <p>Note: The <code>getPresentationAttribute</code>
 * method is deprecated, and may be dropped from future versions of the SVG
 * specification.</p>
 * @param {String} name The name of the presentation attribute whose value
 * is to be   returned.
 * @returns {CSSValue} The static/base value of the given <code>presentation
 * attribute</code>   as a <code>CSSValue</code>, or null if the given attribute
 * does not have a   specified value.
 */
SVGFEDiffuseLightingElement.prototype.getPresentationAttribute = function (name) {
  return new CSSValue();
};

/**
 * The {@link SVGFEDistantLightElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/filters.html#feDistantLightElement'
 * title='feDistantLight element specification'>feDistantLight</a> element.
 * @constructor
 * @augments SVGElement
 */
function SVGFEDistantLightElement() {
}
SVGFEDistantLightElement.prototype = new SVGElement();

// Implementation of the svg::SVGFEDistantLightElement W3C IDL interface
/**
 * Corresponds to attribute {@link SVGFEDistantLightElement#azimuth} on the
 * given <a href='http://www.w3.org/TR/SVG11/filters.html#feDistantLightElement'
 * title='feDistantLight element specification'>feDistantLight</a> element.
 * @type SVGAnimatedNumber
 */
SVGFEDistantLightElement.prototype.azimuth = new SVGAnimatedNumber();
/**
 * Corresponds to attribute {@link SVGFEDistantLightElement#elevation} on
 * the given <a href='http://www.w3.org/TR/SVG11/filters.html#feDistantLightElement'
 * title='feDistantLight element specification'>feDistantLight</a> element.
 * @type SVGAnimatedNumber
 */
SVGFEDistantLightElement.prototype.elevation = new SVGAnimatedNumber();

/**
 * The {@link SVGFEPointLightElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/filters.html#fePointLightElement'
 * title='fePointLight element specification'>fePointLight</a> element.
 * @constructor
 * @augments SVGElement
 */
function SVGFEPointLightElement() {
}
SVGFEPointLightElement.prototype = new SVGElement();

// Implementation of the svg::SVGFEPointLightElement W3C IDL interface
/**
 * Corresponds to attribute {@link SVGFEPointLightElement#x} on the given
 * <a href='http://www.w3.org/TR/SVG11/filters.html#fePointLightElement' title='fePointLight
 * element specification'>fePointLight</a> element.
 * @type SVGAnimatedNumber
 */
SVGFEPointLightElement.prototype.x = new SVGAnimatedNumber();
/**
 * Corresponds to attribute {@link SVGFEPointLightElement#y} on the given
 * <a href='http://www.w3.org/TR/SVG11/filters.html#fePointLightElement' title='fePointLight
 * element specification'>fePointLight</a> element.
 * @type SVGAnimatedNumber
 */
SVGFEPointLightElement.prototype.y = new SVGAnimatedNumber();
/**
 * Corresponds to attribute {@link SVGFEPointLightElement#z} on the given
 * <a href='http://www.w3.org/TR/SVG11/filters.html#fePointLightElement' title='fePointLight
 * element specification'>fePointLight</a> element.
 * @type SVGAnimatedNumber
 */
SVGFEPointLightElement.prototype.z = new SVGAnimatedNumber();

/**
 * The {@link SVGFESpotLightElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/filters.html#feSpotLightElement'
 * title='feSpotLight element specification'>feSpotLight</a> element.
 * @constructor
 * @augments SVGElement
 */
function SVGFESpotLightElement() {
}
SVGFESpotLightElement.prototype = new SVGElement();

// Implementation of the svg::SVGFESpotLightElement W3C IDL interface
/**
 * Corresponds to attribute {@link SVGFESpotLightElement#x} on the given <a
 * href='http://www.w3.org/TR/SVG11/filters.html#feSpotLightElement' title='feSpotLight
 * element specification'>feSpotLight</a> element.
 * @type SVGAnimatedNumber
 */
SVGFESpotLightElement.prototype.x = new SVGAnimatedNumber();
/**
 * Corresponds to attribute {@link SVGFESpotLightElement#y} on the given <a
 * href='http://www.w3.org/TR/SVG11/filters.html#feSpotLightElement' title='feSpotLight
 * element specification'>feSpotLight</a> element.
 * @type SVGAnimatedNumber
 */
SVGFESpotLightElement.prototype.y = new SVGAnimatedNumber();
/**
 * Corresponds to attribute {@link SVGFESpotLightElement#z} on the given <a
 * href='http://www.w3.org/TR/SVG11/filters.html#feSpotLightElement' title='feSpotLight
 * element specification'>feSpotLight</a> element.
 * @type SVGAnimatedNumber
 */
SVGFESpotLightElement.prototype.z = new SVGAnimatedNumber();
/**
 * Corresponds to attribute {@link SVGFESpotLightElement#pointsAtX} on the
 * given <a href='http://www.w3.org/TR/SVG11/filters.html#feSpotLightElement'
 * title='feSpotLight element specification'>feSpotLight</a> element.
 * @type SVGAnimatedNumber
 */
SVGFESpotLightElement.prototype.pointsAtX = new SVGAnimatedNumber();
/**
 * Corresponds to attribute {@link SVGFESpotLightElement#pointsAtY} on the
 * given <a href='http://www.w3.org/TR/SVG11/filters.html#feSpotLightElement'
 * title='feSpotLight element specification'>feSpotLight</a> element.
 * @type SVGAnimatedNumber
 */
SVGFESpotLightElement.prototype.pointsAtY = new SVGAnimatedNumber();
/**
 * Corresponds to attribute {@link SVGFESpotLightElement#pointsAtZ} on the
 * given <a href='http://www.w3.org/TR/SVG11/filters.html#feSpotLightElement'
 * title='feSpotLight element specification'>feSpotLight</a> element.
 * @type SVGAnimatedNumber
 */
SVGFESpotLightElement.prototype.pointsAtZ = new SVGAnimatedNumber();
/**
 * Corresponds to attribute {@link SVGFESpotLightElement#specularExponent}
 * on the given <a href='http://www.w3.org/TR/SVG11/filters.html#feSpotLightElement'
 * title='feSpotLight element specification'>feSpotLight</a> element.
 * @type SVGAnimatedNumber
 */
SVGFESpotLightElement.prototype.specularExponent = new SVGAnimatedNumber();
/**
 * Corresponds to attribute {@link SVGFESpotLightElement#limitingConeAngle}
 * on the given <a href='http://www.w3.org/TR/SVG11/filters.html#feSpotLightElement'
 * title='feSpotLight element specification'>feSpotLight</a> element.
 * @type SVGAnimatedNumber
 */
SVGFESpotLightElement.prototype.limitingConeAngle = new SVGAnimatedNumber();

/**
 * The {@link SVGFEDisplacementMapElement} interface corresponds to the <a
 * href='http://www.w3.org/TR/SVG11/filters.html#feDisplacementMapElement'
 * title='feDisplacementMap element specification'>feDisplacementMap</a> element.
 * @constructor
 * @augments SVGElement
 */
function SVGFEDisplacementMapElement() {
}
SVGFEDisplacementMapElement.prototype = new SVGElement();

// Implementation of the svg::SVGFEDisplacementMapElement W3C IDL interface
/**
 * The type is not one of predefined types. It is invalid to attempt to define
 * a new value of this type or to attempt to switch an existing value to this
 * type.
 * @constant
 * @type Number
 */
SVGFEDisplacementMapElement.SVG_CHANNEL_UNKNOWN = 0;
/**
 * Corresponds to value <span class="attr-value">'R'</span>.
 * @constant
 * @type Number
 */
SVGFEDisplacementMapElement.SVG_CHANNEL_R = 1;
/**
 * Corresponds to value <span class="attr-value">'G'</span>.
 * @constant
 * @type Number
 */
SVGFEDisplacementMapElement.SVG_CHANNEL_G = 2;
/**
 * Corresponds to value <span class="attr-value">'B'</span>.
 * @constant
 * @type Number
 */
SVGFEDisplacementMapElement.SVG_CHANNEL_B = 3;
/**
 * Corresponds to value <span class="attr-value">'A'</span>.
 * @constant
 * @type Number
 */
SVGFEDisplacementMapElement.SVG_CHANNEL_A = 4;
/**
 * Corresponds to attribute <code>in</code> on the given <a href='http://www.w3.org/TR/SVG11/filters.html#feDisplacementMapElement'
 * title='feDisplacementMap element specification'>feDisplacementMap</a> element.
 * @type SVGAnimatedString
 */
SVGFEDisplacementMapElement.prototype.in1 = new SVGAnimatedString();
/**
 * Corresponds to attribute {@link SVGFEDisplacementMapElement#in2} on the
 * given <a href='http://www.w3.org/TR/SVG11/filters.html#feDisplacementMapElement'
 * title='feDisplacementMap element specification'>feDisplacementMap</a> element.
 * @type SVGAnimatedString
 */
SVGFEDisplacementMapElement.prototype.in2 = new SVGAnimatedString();
/**
 * Corresponds to attribute {@link SVGFEDisplacementMapElement#scale} on the
 * given <a href='http://www.w3.org/TR/SVG11/filters.html#feDisplacementMapElement'
 * title='feDisplacementMap element specification'>feDisplacementMap</a> element.
 * @type SVGAnimatedNumber
 */
SVGFEDisplacementMapElement.prototype.scale = new SVGAnimatedNumber();
/**
 * Corresponds to attribute {@link SVGFEDisplacementMapElement#xChannelSelector}
 * on the given <a href='http://www.w3.org/TR/SVG11/filters.html#feDisplacementMapElement'
 * title='feDisplacementMap element specification'>feDisplacementMap</a> element.
 * Takes one of the SVG_CHANNEL_ constants defined on this interface.
 * @type SVGAnimatedEnumeration
 */
SVGFEDisplacementMapElement.prototype.xChannelSelector = new SVGAnimatedEnumeration();
/**
 * Corresponds to attribute {@link SVGFEDisplacementMapElement#yChannelSelector}
 * on the given <a href='http://www.w3.org/TR/SVG11/filters.html#feDisplacementMapElement'
 * title='feDisplacementMap element specification'>feDisplacementMap</a> element.
 * Takes one of the SVG_CHANNEL_ constants defined on this interface.
 * @type SVGAnimatedEnumeration
 */
SVGFEDisplacementMapElement.prototype.yChannelSelector = new SVGAnimatedEnumeration();

// Implementation of the svg::SVGFilterPrimitiveStandardAttributes W3C IDL interface
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#x}
 * on the given element.
 * @type SVGAnimatedLength
 */
SVGFEDisplacementMapElement.prototype.x = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#y}
 * on the given element.
 * @type SVGAnimatedLength
 */
SVGFEDisplacementMapElement.prototype.y = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#width}
 * on the given element.
 * @type SVGAnimatedLength
 */
SVGFEDisplacementMapElement.prototype.width = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#height}
 * on the given element.
 * @type SVGAnimatedLength
 */
SVGFEDisplacementMapElement.prototype.height = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#result}
 * on the given element.
 * @type SVGAnimatedString
 */
SVGFEDisplacementMapElement.prototype.result = new SVGAnimatedString();

// Implementation of the svg::SVGStylable W3C IDL interface
/**
 * Corresponds to attribute <code>class</code> on the given element.
 * @type SVGAnimatedString
 */
SVGFEDisplacementMapElement.prototype.className = new SVGAnimatedString();
/**
 * Corresponds to attribute <code>style attribute</code> on the given element.
 * If the user agent does not support <a href='styling.html#StylingWithCSS'>styling
 * with CSS</a>, then this attribute must always have the value of null.
 * @type CSSStyleDeclaration
 */
SVGFEDisplacementMapElement.prototype.style = new CSSStyleDeclaration();
/**
 * Returns the base (i.e., static) value of a given <code>presentation   attribute</code>
 * as an object of type <code>CSSValue</code>. The returned object is live;
 * changes to the objects represent immediate changes to the objects to which
 * the <code>CSSValue</code> is attached. <p>Note: The <code>getPresentationAttribute</code>
 * method is deprecated, and may be dropped from future versions of the SVG
 * specification.</p>
 * @param {String} name The name of the presentation attribute whose value
 * is to be   returned.
 * @returns {CSSValue} The static/base value of the given <code>presentation
 * attribute</code>   as a <code>CSSValue</code>, or null if the given attribute
 * does not have a   specified value.
 */
SVGFEDisplacementMapElement.prototype.getPresentationAttribute = function (name) {
  return new CSSValue();
};

/**
 * The {@link SVGFEFloodElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/filters.html#feFloodElement'
 * title='feFlood element specification'>feFlood</a> element.
 * @constructor
 * @augments SVGElement
 */
function SVGFEFloodElement() {
}
SVGFEFloodElement.prototype = new SVGElement();

// Implementation of the svg::SVGFEFloodElement W3C IDL interface

// Implementation of the svg::SVGFilterPrimitiveStandardAttributes W3C IDL interface
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#x}
 * on the given element.
 * @type SVGAnimatedLength
 */
SVGFEFloodElement.prototype.x = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#y}
 * on the given element.
 * @type SVGAnimatedLength
 */
SVGFEFloodElement.prototype.y = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#width}
 * on the given element.
 * @type SVGAnimatedLength
 */
SVGFEFloodElement.prototype.width = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#height}
 * on the given element.
 * @type SVGAnimatedLength
 */
SVGFEFloodElement.prototype.height = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#result}
 * on the given element.
 * @type SVGAnimatedString
 */
SVGFEFloodElement.prototype.result = new SVGAnimatedString();

// Implementation of the svg::SVGStylable W3C IDL interface
/**
 * Corresponds to attribute <code>class</code> on the given element.
 * @type SVGAnimatedString
 */
SVGFEFloodElement.prototype.className = new SVGAnimatedString();
/**
 * Corresponds to attribute <code>style attribute</code> on the given element.
 * If the user agent does not support <a href='styling.html#StylingWithCSS'>styling
 * with CSS</a>, then this attribute must always have the value of null.
 * @type CSSStyleDeclaration
 */
SVGFEFloodElement.prototype.style = new CSSStyleDeclaration();
/**
 * Returns the base (i.e., static) value of a given <code>presentation   attribute</code>
 * as an object of type <code>CSSValue</code>. The returned object is live;
 * changes to the objects represent immediate changes to the objects to which
 * the <code>CSSValue</code> is attached. <p>Note: The <code>getPresentationAttribute</code>
 * method is deprecated, and may be dropped from future versions of the SVG
 * specification.</p>
 * @param {String} name The name of the presentation attribute whose value
 * is to be   returned.
 * @returns {CSSValue} The static/base value of the given <code>presentation
 * attribute</code>   as a <code>CSSValue</code>, or null if the given attribute
 * does not have a   specified value.
 */
SVGFEFloodElement.prototype.getPresentationAttribute = function (name) {
  return new CSSValue();
};

/**
 * The {@link SVGFEGaussianBlurElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/filters.html#feGaussianBlurElement'
 * title='feGaussianBlur element specification'>feGaussianBlur</a> element.
 * @constructor
 * @augments SVGElement
 */
function SVGFEGaussianBlurElement() {
}
SVGFEGaussianBlurElement.prototype = new SVGElement();

// Implementation of the svg::SVGFEGaussianBlurElement W3C IDL interface
/**
 * Corresponds to attribute <code>in</code> on the given <a href='http://www.w3.org/TR/SVG11/filters.html#feGaussianBlurElement'
 * title='feGaussianBlur element specification'>feGaussianBlur</a> element.
 * @type SVGAnimatedString
 */
SVGFEGaussianBlurElement.prototype.in1 = new SVGAnimatedString();
/**
 * Corresponds to attribute <code>stdDeviation</code> on the given <a href='http://www.w3.org/TR/SVG11/filters.html#feGaussianBlurElement'
 * title='feGaussianBlur element specification'>feGaussianBlur</a> element.
 * Contains the X component of attribute <code>stdDeviation</code>.
 * @type SVGAnimatedNumber
 */
SVGFEGaussianBlurElement.prototype.stdDeviationX = new SVGAnimatedNumber();
/**
 * Corresponds to attribute <code>stdDeviation</code> on the given <a href='http://www.w3.org/TR/SVG11/filters.html#feGaussianBlurElement'
 * title='feGaussianBlur element specification'>feGaussianBlur</a> element.
 * Contains the Y component (possibly computed automatically) of attribute
 * <code>stdDeviation</code>.
 * @type SVGAnimatedNumber
 */
SVGFEGaussianBlurElement.prototype.stdDeviationY = new SVGAnimatedNumber();
/**
 * Sets the values for attribute <code>stdDeviation</code>.
 * @param {Number} stdDeviationX The X component of attribute <code>stdDeviation</code>.
 * @param {Number} stdDeviationY The Y component of attribute <code>stdDeviation</code>.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 */
SVGFEGaussianBlurElement.prototype.setStdDeviation = function (stdDeviationX, stdDeviationY) {
};

// Implementation of the svg::SVGFilterPrimitiveStandardAttributes W3C IDL interface
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#x}
 * on the given element.
 * @type SVGAnimatedLength
 */
SVGFEGaussianBlurElement.prototype.x = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#y}
 * on the given element.
 * @type SVGAnimatedLength
 */
SVGFEGaussianBlurElement.prototype.y = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#width}
 * on the given element.
 * @type SVGAnimatedLength
 */
SVGFEGaussianBlurElement.prototype.width = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#height}
 * on the given element.
 * @type SVGAnimatedLength
 */
SVGFEGaussianBlurElement.prototype.height = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#result}
 * on the given element.
 * @type SVGAnimatedString
 */
SVGFEGaussianBlurElement.prototype.result = new SVGAnimatedString();

// Implementation of the svg::SVGStylable W3C IDL interface
/**
 * Corresponds to attribute <code>class</code> on the given element.
 * @type SVGAnimatedString
 */
SVGFEGaussianBlurElement.prototype.className = new SVGAnimatedString();
/**
 * Corresponds to attribute <code>style attribute</code> on the given element.
 * If the user agent does not support <a href='styling.html#StylingWithCSS'>styling
 * with CSS</a>, then this attribute must always have the value of null.
 * @type CSSStyleDeclaration
 */
SVGFEGaussianBlurElement.prototype.style = new CSSStyleDeclaration();
/**
 * Returns the base (i.e., static) value of a given <code>presentation   attribute</code>
 * as an object of type <code>CSSValue</code>. The returned object is live;
 * changes to the objects represent immediate changes to the objects to which
 * the <code>CSSValue</code> is attached. <p>Note: The <code>getPresentationAttribute</code>
 * method is deprecated, and may be dropped from future versions of the SVG
 * specification.</p>
 * @param {String} name The name of the presentation attribute whose value
 * is to be   returned.
 * @returns {CSSValue} The static/base value of the given <code>presentation
 * attribute</code>   as a <code>CSSValue</code>, or null if the given attribute
 * does not have a   specified value.
 */
SVGFEGaussianBlurElement.prototype.getPresentationAttribute = function (name) {
  return new CSSValue();
};

/**
 * The {@link SVGFEImageElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/filters.html#feImageElement'
 * title='feImage element specification'>feImage</a> element.
 * @constructor
 * @augments SVGElement
 */
function SVGFEImageElement() {
}
SVGFEImageElement.prototype = new SVGElement();

// Implementation of the svg::SVGFEImageElement W3C IDL interface
/**
 * Corresponds to attribute {@link SVGFEImageElement#preserveAspectRatio}
 * on the given <a href='http://www.w3.org/TR/SVG11/filters.html#feImageElement'
 * title='feImage element specification'>feImage</a> element.
 * @type SVGAnimatedPreserveAspectRatio
 */
SVGFEImageElement.prototype.preserveAspectRatio = new SVGAnimatedPreserveAspectRatio();

// Implementation of the svg::SVGExternalResourcesRequired W3C IDL interface
/**
 * Corresponds to attribute {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * on the given element. Note that the SVG DOM defines the attribute {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * as being of type {@link SVGAnimatedBoolean}, whereas the SVG language definition
 * says that {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * is not animated. Because the SVG language definition states that {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * cannot be animated, the {@link SVGAnimatedBoolean#animVal} will always
 * be the same as the {@link SVGAnimatedBoolean#baseVal}.
 * @type SVGAnimatedBoolean
 */
SVGFEImageElement.prototype.externalResourcesRequired = new SVGAnimatedBoolean();

// Implementation of the svg::SVGFilterPrimitiveStandardAttributes W3C IDL interface
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#x}
 * on the given element.
 * @type SVGAnimatedLength
 */
SVGFEImageElement.prototype.x = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#y}
 * on the given element.
 * @type SVGAnimatedLength
 */
SVGFEImageElement.prototype.y = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#width}
 * on the given element.
 * @type SVGAnimatedLength
 */
SVGFEImageElement.prototype.width = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#height}
 * on the given element.
 * @type SVGAnimatedLength
 */
SVGFEImageElement.prototype.height = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#result}
 * on the given element.
 * @type SVGAnimatedString
 */
SVGFEImageElement.prototype.result = new SVGAnimatedString();

// Implementation of the svg::SVGLangSpace W3C IDL interface
/**
 * Corresponds to attribute <code>xml:lang</code> on the given element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an   attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGFEImageElement.prototype.xmllang = "";
/**
 * Corresponds to attribute <code>xml:space</code> on the given element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an   attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGFEImageElement.prototype.xmlspace = "";

// Implementation of the svg::SVGStylable W3C IDL interface
/**
 * Corresponds to attribute <code>class</code> on the given element.
 * @type SVGAnimatedString
 */
SVGFEImageElement.prototype.className = new SVGAnimatedString();
/**
 * Corresponds to attribute <code>style attribute</code> on the given element.
 * If the user agent does not support <a href='styling.html#StylingWithCSS'>styling
 * with CSS</a>, then this attribute must always have the value of null.
 * @type CSSStyleDeclaration
 */
SVGFEImageElement.prototype.style = new CSSStyleDeclaration();
/**
 * Returns the base (i.e., static) value of a given <code>presentation   attribute</code>
 * as an object of type <code>CSSValue</code>. The returned object is live;
 * changes to the objects represent immediate changes to the objects to which
 * the <code>CSSValue</code> is attached. <p>Note: The <code>getPresentationAttribute</code>
 * method is deprecated, and may be dropped from future versions of the SVG
 * specification.</p>
 * @param {String} name The name of the presentation attribute whose value
 * is to be   returned.
 * @returns {CSSValue} The static/base value of the given <code>presentation
 * attribute</code>   as a <code>CSSValue</code>, or null if the given attribute
 * does not have a   specified value.
 */
SVGFEImageElement.prototype.getPresentationAttribute = function (name) {
  return new CSSValue();
};

// Implementation of the svg::SVGURIReference W3C IDL interface
/**
 * Corresponds to attribute <span class='attr-name'>'xlink:href'</span> on
 * the given element.
 * @type SVGAnimatedString
 */
SVGFEImageElement.prototype.href = new SVGAnimatedString();

/**
 * The {@link SVGFEMergeElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/filters.html#feMergeElement'
 * title='feMerge element specification'>feMerge</a> element.
 * @constructor
 * @augments SVGElement
 */
function SVGFEMergeElement() {
}
SVGFEMergeElement.prototype = new SVGElement();

// Implementation of the svg::SVGFEMergeElement W3C IDL interface

// Implementation of the svg::SVGFilterPrimitiveStandardAttributes W3C IDL interface
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#x}
 * on the given element.
 * @type SVGAnimatedLength
 */
SVGFEMergeElement.prototype.x = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#y}
 * on the given element.
 * @type SVGAnimatedLength
 */
SVGFEMergeElement.prototype.y = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#width}
 * on the given element.
 * @type SVGAnimatedLength
 */
SVGFEMergeElement.prototype.width = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#height}
 * on the given element.
 * @type SVGAnimatedLength
 */
SVGFEMergeElement.prototype.height = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#result}
 * on the given element.
 * @type SVGAnimatedString
 */
SVGFEMergeElement.prototype.result = new SVGAnimatedString();

// Implementation of the svg::SVGStylable W3C IDL interface
/**
 * Corresponds to attribute <code>class</code> on the given element.
 * @type SVGAnimatedString
 */
SVGFEMergeElement.prototype.className = new SVGAnimatedString();
/**
 * Corresponds to attribute <code>style attribute</code> on the given element.
 * If the user agent does not support <a href='styling.html#StylingWithCSS'>styling
 * with CSS</a>, then this attribute must always have the value of null.
 * @type CSSStyleDeclaration
 */
SVGFEMergeElement.prototype.style = new CSSStyleDeclaration();
/**
 * Returns the base (i.e., static) value of a given <code>presentation   attribute</code>
 * as an object of type <code>CSSValue</code>. The returned object is live;
 * changes to the objects represent immediate changes to the objects to which
 * the <code>CSSValue</code> is attached. <p>Note: The <code>getPresentationAttribute</code>
 * method is deprecated, and may be dropped from future versions of the SVG
 * specification.</p>
 * @param {String} name The name of the presentation attribute whose value
 * is to be   returned.
 * @returns {CSSValue} The static/base value of the given <code>presentation
 * attribute</code>   as a <code>CSSValue</code>, or null if the given attribute
 * does not have a   specified value.
 */
SVGFEMergeElement.prototype.getPresentationAttribute = function (name) {
  return new CSSValue();
};

/**
 * The {@link SVGFEMergeNodeElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/filters.html#feMergeNodeElement'
 * title='feMergeNode element specification'>feMergeNode</a> element.
 * @constructor
 * @augments SVGElement
 */
function SVGFEMergeNodeElement() {
}
SVGFEMergeNodeElement.prototype = new SVGElement();

// Implementation of the svg::SVGFEMergeNodeElement W3C IDL interface
/**
 * Corresponds to attribute <code>in</code> on the given <a href='http://www.w3.org/TR/SVG11/filters.html#feMergeNodeElement'
 * title='feMergeNode element specification'>feMergeNode</a> element.
 * @type SVGAnimatedString
 */
SVGFEMergeNodeElement.prototype.in1 = new SVGAnimatedString();

/**
 * The {@link SVGFEMorphologyElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/filters.html#feMorphologyElement'
 * title='feMorphology element specification'>feMorphology</a> element.
 * @constructor
 * @augments SVGElement
 */
function SVGFEMorphologyElement() {
}
SVGFEMorphologyElement.prototype = new SVGElement();

// Implementation of the svg::SVGFEMorphologyElement W3C IDL interface
/**
 * The type is not one of predefined types. It is invalid to attempt to define
 * a new value of this type or to attempt to switch an existing value to this
 * type.
 * @constant
 * @type Number
 */
SVGFEMorphologyElement.SVG_MORPHOLOGY_OPERATOR_UNKNOWN = 0;
/**
 * Corresponds to value <span class="attr-value">'erode'</span>.
 * @constant
 * @type Number
 */
SVGFEMorphologyElement.SVG_MORPHOLOGY_OPERATOR_ERODE = 1;
/**
 * Corresponds to value <span class="attr-value">'dilate'</span>.
 * @constant
 * @type Number
 */
SVGFEMorphologyElement.SVG_MORPHOLOGY_OPERATOR_DILATE = 2;
/**
 * Corresponds to attribute <code>in</code> on the given <a href='http://www.w3.org/TR/SVG11/filters.html#feMorphologyElement'
 * title='feMorphology element specification'>feMorphology</a> element.
 * @type SVGAnimatedString
 */
SVGFEMorphologyElement.prototype.in1 = new SVGAnimatedString();
/**
 * Corresponds to attribute {@link SVGFEMorphologyElement#operator} on the
 * given <a href='http://www.w3.org/TR/SVG11/filters.html#feMorphologyElement'
 * title='feMorphology element specification'>feMorphology</a> element.  Takes
 * one of the SVG_MORPHOLOGY_OPERATOR_ constants defined on this interface.
 * @type SVGAnimatedEnumeration
 */
SVGFEMorphologyElement.prototype.operator = new SVGAnimatedEnumeration();
/**
 * Corresponds to attribute <code>radius</code> on the given <a href='http://www.w3.org/TR/SVG11/filters.html#feMorphologyElement'
 * title='feMorphology element specification'>feMorphology</a> element.
 * @type SVGAnimatedNumber
 */
SVGFEMorphologyElement.prototype.radiusX = new SVGAnimatedNumber();
/**
 * Corresponds to attribute <code>radius</code> on the given <a href='http://www.w3.org/TR/SVG11/filters.html#feMorphologyElement'
 * title='feMorphology element specification'>feMorphology</a> element.
 * @type SVGAnimatedNumber
 */
SVGFEMorphologyElement.prototype.radiusY = new SVGAnimatedNumber();

// Implementation of the svg::SVGFilterPrimitiveStandardAttributes W3C IDL interface
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#x}
 * on the given element.
 * @type SVGAnimatedLength
 */
SVGFEMorphologyElement.prototype.x = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#y}
 * on the given element.
 * @type SVGAnimatedLength
 */
SVGFEMorphologyElement.prototype.y = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#width}
 * on the given element.
 * @type SVGAnimatedLength
 */
SVGFEMorphologyElement.prototype.width = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#height}
 * on the given element.
 * @type SVGAnimatedLength
 */
SVGFEMorphologyElement.prototype.height = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#result}
 * on the given element.
 * @type SVGAnimatedString
 */
SVGFEMorphologyElement.prototype.result = new SVGAnimatedString();

// Implementation of the svg::SVGStylable W3C IDL interface
/**
 * Corresponds to attribute <code>class</code> on the given element.
 * @type SVGAnimatedString
 */
SVGFEMorphologyElement.prototype.className = new SVGAnimatedString();
/**
 * Corresponds to attribute <code>style attribute</code> on the given element.
 * If the user agent does not support <a href='styling.html#StylingWithCSS'>styling
 * with CSS</a>, then this attribute must always have the value of null.
 * @type CSSStyleDeclaration
 */
SVGFEMorphologyElement.prototype.style = new CSSStyleDeclaration();
/**
 * Returns the base (i.e., static) value of a given <code>presentation   attribute</code>
 * as an object of type <code>CSSValue</code>. The returned object is live;
 * changes to the objects represent immediate changes to the objects to which
 * the <code>CSSValue</code> is attached. <p>Note: The <code>getPresentationAttribute</code>
 * method is deprecated, and may be dropped from future versions of the SVG
 * specification.</p>
 * @param {String} name The name of the presentation attribute whose value
 * is to be   returned.
 * @returns {CSSValue} The static/base value of the given <code>presentation
 * attribute</code>   as a <code>CSSValue</code>, or null if the given attribute
 * does not have a   specified value.
 */
SVGFEMorphologyElement.prototype.getPresentationAttribute = function (name) {
  return new CSSValue();
};

/**
 * The {@link SVGFEOffsetElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/filters.html#feOffsetElement'
 * title='feOffset element specification'>feOffset</a> element.
 * @constructor
 * @augments SVGElement
 */
function SVGFEOffsetElement() {
}
SVGFEOffsetElement.prototype = new SVGElement();

// Implementation of the svg::SVGFEOffsetElement W3C IDL interface
/**
 * Corresponds to attribute <code>in</code> on the given <a href='http://www.w3.org/TR/SVG11/filters.html#feOffsetElement'
 * title='feOffset element specification'>feOffset</a> element.
 * @type SVGAnimatedString
 */
SVGFEOffsetElement.prototype.in1 = new SVGAnimatedString();
/**
 * Corresponds to attribute {@link SVGFEOffsetElement#dx} on the given <a
 * href='http://www.w3.org/TR/SVG11/filters.html#feOffsetElement' title='feOffset
 * element specification'>feOffset</a> element.
 * @type SVGAnimatedNumber
 */
SVGFEOffsetElement.prototype.dx = new SVGAnimatedNumber();
/**
 * Corresponds to attribute {@link SVGFEOffsetElement#dy} on the given <a
 * href='http://www.w3.org/TR/SVG11/filters.html#feOffsetElement' title='feOffset
 * element specification'>feOffset</a> element.
 * @type SVGAnimatedNumber
 */
SVGFEOffsetElement.prototype.dy = new SVGAnimatedNumber();

// Implementation of the svg::SVGFilterPrimitiveStandardAttributes W3C IDL interface
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#x}
 * on the given element.
 * @type SVGAnimatedLength
 */
SVGFEOffsetElement.prototype.x = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#y}
 * on the given element.
 * @type SVGAnimatedLength
 */
SVGFEOffsetElement.prototype.y = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#width}
 * on the given element.
 * @type SVGAnimatedLength
 */
SVGFEOffsetElement.prototype.width = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#height}
 * on the given element.
 * @type SVGAnimatedLength
 */
SVGFEOffsetElement.prototype.height = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#result}
 * on the given element.
 * @type SVGAnimatedString
 */
SVGFEOffsetElement.prototype.result = new SVGAnimatedString();

// Implementation of the svg::SVGStylable W3C IDL interface
/**
 * Corresponds to attribute <code>class</code> on the given element.
 * @type SVGAnimatedString
 */
SVGFEOffsetElement.prototype.className = new SVGAnimatedString();
/**
 * Corresponds to attribute <code>style attribute</code> on the given element.
 * If the user agent does not support <a href='styling.html#StylingWithCSS'>styling
 * with CSS</a>, then this attribute must always have the value of null.
 * @type CSSStyleDeclaration
 */
SVGFEOffsetElement.prototype.style = new CSSStyleDeclaration();
/**
 * Returns the base (i.e., static) value of a given <code>presentation   attribute</code>
 * as an object of type <code>CSSValue</code>. The returned object is live;
 * changes to the objects represent immediate changes to the objects to which
 * the <code>CSSValue</code> is attached. <p>Note: The <code>getPresentationAttribute</code>
 * method is deprecated, and may be dropped from future versions of the SVG
 * specification.</p>
 * @param {String} name The name of the presentation attribute whose value
 * is to be   returned.
 * @returns {CSSValue} The static/base value of the given <code>presentation
 * attribute</code>   as a <code>CSSValue</code>, or null if the given attribute
 * does not have a   specified value.
 */
SVGFEOffsetElement.prototype.getPresentationAttribute = function (name) {
  return new CSSValue();
};

/**
 * The {@link SVGFESpecularLightingElement} interface corresponds to the <a
 * href='http://www.w3.org/TR/SVG11/filters.html#feSpecularLightingElement'
 * title='feSpecularLighting element specification'>feSpecularLighting</a>
 * element.
 * @constructor
 * @augments SVGElement
 */
function SVGFESpecularLightingElement() {
}
SVGFESpecularLightingElement.prototype = new SVGElement();

// Implementation of the svg::SVGFESpecularLightingElement W3C IDL interface
/**
 * Corresponds to attribute <code>in</code> on the given <a href='http://www.w3.org/TR/SVG11/filters.html#feSpecularLightingElement'
 * title='feSpecularLighting element specification'>feSpecularLighting</a>
 * element.
 * @type SVGAnimatedString
 */
SVGFESpecularLightingElement.prototype.in1 = new SVGAnimatedString();
/**
 * Corresponds to attribute {@link SVGFESpecularLightingElement#surfaceScale}
 * on the given <a href='http://www.w3.org/TR/SVG11/filters.html#feSpecularLightingElement'
 * title='feSpecularLighting element specification'>feSpecularLighting</a>
 * element.
 * @type SVGAnimatedNumber
 */
SVGFESpecularLightingElement.prototype.surfaceScale = new SVGAnimatedNumber();
/**
 * Corresponds to attribute {@link SVGFESpecularLightingElement#specularConstant}
 * on the given <a href='http://www.w3.org/TR/SVG11/filters.html#feSpecularLightingElement'
 * title='feSpecularLighting element specification'>feSpecularLighting</a>
 * element.
 * @type SVGAnimatedNumber
 */
SVGFESpecularLightingElement.prototype.specularConstant = new SVGAnimatedNumber();
/**
 * Corresponds to attribute {@link SVGFESpecularLightingElement#specularExponent}
 * on the given <a href='http://www.w3.org/TR/SVG11/filters.html#feSpecularLightingElement'
 * title='feSpecularLighting element specification'>feSpecularLighting</a>
 * element.
 * @type SVGAnimatedNumber
 */
SVGFESpecularLightingElement.prototype.specularExponent = new SVGAnimatedNumber();
/**
 * Corresponds to attribute <code>kernelUnitLength</code> on the given <a
 * href='http://www.w3.org/TR/SVG11/filters.html#feSpecularLightingElement'
 * title='feSpecularLighting element specification'>feSpecularLighting</a>
 * element.
 * @type SVGAnimatedNumber
 */
SVGFESpecularLightingElement.prototype.kernelUnitLengthX = new SVGAnimatedNumber();
/**
 * Corresponds to attribute <code>kernelUnitLength</code> on the given <a
 * href='http://www.w3.org/TR/SVG11/filters.html#feSpecularLightingElement'
 * title='feSpecularLighting element specification'>feSpecularLighting</a>
 * element.
 * @type SVGAnimatedNumber
 */
SVGFESpecularLightingElement.prototype.kernelUnitLengthY = new SVGAnimatedNumber();

// Implementation of the svg::SVGFilterPrimitiveStandardAttributes W3C IDL interface
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#x}
 * on the given element.
 * @type SVGAnimatedLength
 */
SVGFESpecularLightingElement.prototype.x = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#y}
 * on the given element.
 * @type SVGAnimatedLength
 */
SVGFESpecularLightingElement.prototype.y = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#width}
 * on the given element.
 * @type SVGAnimatedLength
 */
SVGFESpecularLightingElement.prototype.width = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#height}
 * on the given element.
 * @type SVGAnimatedLength
 */
SVGFESpecularLightingElement.prototype.height = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#result}
 * on the given element.
 * @type SVGAnimatedString
 */
SVGFESpecularLightingElement.prototype.result = new SVGAnimatedString();

// Implementation of the svg::SVGStylable W3C IDL interface
/**
 * Corresponds to attribute <code>class</code> on the given element.
 * @type SVGAnimatedString
 */
SVGFESpecularLightingElement.prototype.className = new SVGAnimatedString();
/**
 * Corresponds to attribute <code>style attribute</code> on the given element.
 * If the user agent does not support <a href='styling.html#StylingWithCSS'>styling
 * with CSS</a>, then this attribute must always have the value of null.
 * @type CSSStyleDeclaration
 */
SVGFESpecularLightingElement.prototype.style = new CSSStyleDeclaration();
/**
 * Returns the base (i.e., static) value of a given <code>presentation   attribute</code>
 * as an object of type <code>CSSValue</code>. The returned object is live;
 * changes to the objects represent immediate changes to the objects to which
 * the <code>CSSValue</code> is attached. <p>Note: The <code>getPresentationAttribute</code>
 * method is deprecated, and may be dropped from future versions of the SVG
 * specification.</p>
 * @param {String} name The name of the presentation attribute whose value
 * is to be   returned.
 * @returns {CSSValue} The static/base value of the given <code>presentation
 * attribute</code>   as a <code>CSSValue</code>, or null if the given attribute
 * does not have a   specified value.
 */
SVGFESpecularLightingElement.prototype.getPresentationAttribute = function (name) {
  return new CSSValue();
};

/**
 * The {@link SVGFETileElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/filters.html#feTileElement'
 * title='feTile element specification'>feTile</a> element.
 * @constructor
 * @augments SVGElement
 */
function SVGFETileElement() {
}
SVGFETileElement.prototype = new SVGElement();

// Implementation of the svg::SVGFETileElement W3C IDL interface
/**
 * Corresponds to attribute <code>in</code> on the given <a href='http://www.w3.org/TR/SVG11/filters.html#feTileElement'
 * title='feTile element specification'>feTile</a> element.
 * @type SVGAnimatedString
 */
SVGFETileElement.prototype.in1 = new SVGAnimatedString();

// Implementation of the svg::SVGFilterPrimitiveStandardAttributes W3C IDL interface
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#x}
 * on the given element.
 * @type SVGAnimatedLength
 */
SVGFETileElement.prototype.x = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#y}
 * on the given element.
 * @type SVGAnimatedLength
 */
SVGFETileElement.prototype.y = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#width}
 * on the given element.
 * @type SVGAnimatedLength
 */
SVGFETileElement.prototype.width = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#height}
 * on the given element.
 * @type SVGAnimatedLength
 */
SVGFETileElement.prototype.height = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#result}
 * on the given element.
 * @type SVGAnimatedString
 */
SVGFETileElement.prototype.result = new SVGAnimatedString();

// Implementation of the svg::SVGStylable W3C IDL interface
/**
 * Corresponds to attribute <code>class</code> on the given element.
 * @type SVGAnimatedString
 */
SVGFETileElement.prototype.className = new SVGAnimatedString();
/**
 * Corresponds to attribute <code>style attribute</code> on the given element.
 * If the user agent does not support <a href='styling.html#StylingWithCSS'>styling
 * with CSS</a>, then this attribute must always have the value of null.
 * @type CSSStyleDeclaration
 */
SVGFETileElement.prototype.style = new CSSStyleDeclaration();
/**
 * Returns the base (i.e., static) value of a given <code>presentation   attribute</code>
 * as an object of type <code>CSSValue</code>. The returned object is live;
 * changes to the objects represent immediate changes to the objects to which
 * the <code>CSSValue</code> is attached. <p>Note: The <code>getPresentationAttribute</code>
 * method is deprecated, and may be dropped from future versions of the SVG
 * specification.</p>
 * @param {String} name The name of the presentation attribute whose value
 * is to be   returned.
 * @returns {CSSValue} The static/base value of the given <code>presentation
 * attribute</code>   as a <code>CSSValue</code>, or null if the given attribute
 * does not have a   specified value.
 */
SVGFETileElement.prototype.getPresentationAttribute = function (name) {
  return new CSSValue();
};

/**
 * The {@link SVGFETurbulenceElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/filters.html#feTurbulenceElement'
 * title='feTurbulence element specification'>feTurbulence</a> element.
 * @constructor
 * @augments SVGElement
 */
function SVGFETurbulenceElement() {
}
SVGFETurbulenceElement.prototype = new SVGElement();

// Implementation of the svg::SVGFETurbulenceElement W3C IDL interface
/**
 * The type is not one of predefined types. It is invalid to attempt to define
 * a new value of this type or to attempt to switch an existing value to this
 * type.
 * @constant
 * @type Number
 */
SVGFETurbulenceElement.SVG_TURBULENCE_TYPE_UNKNOWN = 0;
/**
 * Corresponds to value <span class="attr-value">'fractalNoise'</span>.
 * @constant
 * @type Number
 */
SVGFETurbulenceElement.SVG_TURBULENCE_TYPE_FRACTALNOISE = 1;
/**
 * Corresponds to value <span class="attr-value">'turbulence'</span>.
 * @constant
 * @type Number
 */
SVGFETurbulenceElement.SVG_TURBULENCE_TYPE_TURBULENCE = 2;
/**
 * The type is not one of predefined types. It is invalid to attempt to define
 * a new value of this type or to attempt to switch an existing value to this
 * type.
 * @constant
 * @type Number
 */
SVGFETurbulenceElement.SVG_STITCHTYPE_UNKNOWN = 0;
/**
 * Corresponds to value <span class="attr-value">'stitch'</span>.
 * @constant
 * @type Number
 */
SVGFETurbulenceElement.SVG_STITCHTYPE_STITCH = 1;
/**
 * Corresponds to value <span class="attr-value">'noStitch'</span>.
 * @constant
 * @type Number
 */
SVGFETurbulenceElement.SVG_STITCHTYPE_NOSTITCH = 2;
/**
 * Corresponds to attribute <code>baseFrequency</code> on the given <a href='http://www.w3.org/TR/SVG11/filters.html#feTurbulenceElement'
 * title='feTurbulence element specification'>feTurbulence</a> element.  Contains
 * the X component of the <code>baseFrequency</code> attribute.
 * @type SVGAnimatedNumber
 */
SVGFETurbulenceElement.prototype.baseFrequencyX = new SVGAnimatedNumber();
/**
 * Corresponds to attribute <code>baseFrequency</code> on the given <a href='http://www.w3.org/TR/SVG11/filters.html#feTurbulenceElement'
 * title='feTurbulence element specification'>feTurbulence</a> element.  Contains
 * the Y component of the (possibly computed automatically) <code>baseFrequency</code>
 * attribute.
 * @type SVGAnimatedNumber
 */
SVGFETurbulenceElement.prototype.baseFrequencyY = new SVGAnimatedNumber();
/**
 * Corresponds to attribute {@link SVGFETurbulenceElement#numOctaves} on the
 * given <a href='http://www.w3.org/TR/SVG11/filters.html#feTurbulenceElement'
 * title='feTurbulence element specification'>feTurbulence</a> element.
 * @type SVGAnimatedInteger
 */
SVGFETurbulenceElement.prototype.numOctaves = new SVGAnimatedInteger();
/**
 * Corresponds to attribute {@link SVGFETurbulenceElement#seed} on the given
 * <a href='http://www.w3.org/TR/SVG11/filters.html#feTurbulenceElement' title='feTurbulence
 * element specification'>feTurbulence</a> element.
 * @type SVGAnimatedNumber
 */
SVGFETurbulenceElement.prototype.seed = new SVGAnimatedNumber();
/**
 * Corresponds to attribute {@link SVGFETurbulenceElement#stitchTiles} on
 * the given <a href='http://www.w3.org/TR/SVG11/filters.html#feTurbulenceElement'
 * title='feTurbulence element specification'>feTurbulence</a> element.  Takes
 * one of the SVG_STITCHTYPE_ constants defined on this interface.
 * @type SVGAnimatedEnumeration
 */
SVGFETurbulenceElement.prototype.stitchTiles = new SVGAnimatedEnumeration();
/**
 * Corresponds to attribute {@link SVGFETurbulenceElement#type} on the given
 * <a href='http://www.w3.org/TR/SVG11/filters.html#feTurbulenceElement' title='feTurbulence
 * element specification'>feTurbulence</a> element.  Takes one of the SVG_TURBULENCE_TYPE_
 * constants defined on this interface.
 * @type SVGAnimatedEnumeration
 */
SVGFETurbulenceElement.prototype.type = new SVGAnimatedEnumeration();

// Implementation of the svg::SVGFilterPrimitiveStandardAttributes W3C IDL interface
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#x}
 * on the given element.
 * @type SVGAnimatedLength
 */
SVGFETurbulenceElement.prototype.x = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#y}
 * on the given element.
 * @type SVGAnimatedLength
 */
SVGFETurbulenceElement.prototype.y = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#width}
 * on the given element.
 * @type SVGAnimatedLength
 */
SVGFETurbulenceElement.prototype.width = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#height}
 * on the given element.
 * @type SVGAnimatedLength
 */
SVGFETurbulenceElement.prototype.height = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGFilterPrimitiveStandardAttributes#result}
 * on the given element.
 * @type SVGAnimatedString
 */
SVGFETurbulenceElement.prototype.result = new SVGAnimatedString();

// Implementation of the svg::SVGStylable W3C IDL interface
/**
 * Corresponds to attribute <code>class</code> on the given element.
 * @type SVGAnimatedString
 */
SVGFETurbulenceElement.prototype.className = new SVGAnimatedString();
/**
 * Corresponds to attribute <code>style attribute</code> on the given element.
 * If the user agent does not support <a href='styling.html#StylingWithCSS'>styling
 * with CSS</a>, then this attribute must always have the value of null.
 * @type CSSStyleDeclaration
 */
SVGFETurbulenceElement.prototype.style = new CSSStyleDeclaration();
/**
 * Returns the base (i.e., static) value of a given <code>presentation   attribute</code>
 * as an object of type <code>CSSValue</code>. The returned object is live;
 * changes to the objects represent immediate changes to the objects to which
 * the <code>CSSValue</code> is attached. <p>Note: The <code>getPresentationAttribute</code>
 * method is deprecated, and may be dropped from future versions of the SVG
 * specification.</p>
 * @param {String} name The name of the presentation attribute whose value
 * is to be   returned.
 * @returns {CSSValue} The static/base value of the given <code>presentation
 * attribute</code>   as a <code>CSSValue</code>, or null if the given attribute
 * does not have a   specified value.
 */
SVGFETurbulenceElement.prototype.getPresentationAttribute = function (name) {
  return new CSSValue();
};

/**
 * The {@link SVGCursorElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/interact.html#CursorElement'
 * title='cursor element specification'>cursor</a>  element.
 * @constructor
 * @augments SVGElement
 */
function SVGCursorElement() {
}
SVGCursorElement.prototype = new SVGElement();

// Implementation of the svg::SVGCursorElement W3C IDL interface
/**
 * Corresponds to attribute {@link SVGCursorElement#x} on the given <a href='http://www.w3.org/TR/SVG11/interact.html#CursorElement'
 * title='cursor element specification'>cursor</a> element.
 * @type SVGAnimatedLength
 */
SVGCursorElement.prototype.x = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGCursorElement#y} on the given <a href='http://www.w3.org/TR/SVG11/interact.html#CursorElement'
 * title='cursor element specification'>cursor</a> element.
 * @type SVGAnimatedLength
 */
SVGCursorElement.prototype.y = new SVGAnimatedLength();

// Implementation of the svg::SVGExternalResourcesRequired W3C IDL interface
/**
 * Corresponds to attribute {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * on the given element. Note that the SVG DOM defines the attribute {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * as being of type {@link SVGAnimatedBoolean}, whereas the SVG language definition
 * says that {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * is not animated. Because the SVG language definition states that {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * cannot be animated, the {@link SVGAnimatedBoolean#animVal} will always
 * be the same as the {@link SVGAnimatedBoolean#baseVal}.
 * @type SVGAnimatedBoolean
 */
SVGCursorElement.prototype.externalResourcesRequired = new SVGAnimatedBoolean();

// Implementation of the svg::SVGTests W3C IDL interface
/**
 * Corresponds to attribute {@link SVGTests#requiredFeatures} on the given
 * element.
 * @type SVGStringList
 */
SVGCursorElement.prototype.requiredFeatures = new SVGStringList();
/**
 * Corresponds to attribute {@link SVGTests#requiredExtensions} on the given
 * element.
 * @type SVGStringList
 */
SVGCursorElement.prototype.requiredExtensions = new SVGStringList();
/**
 * Corresponds to attribute {@link SVGTests#systemLanguage} on the given element.
 * @type SVGStringList
 */
SVGCursorElement.prototype.systemLanguage = new SVGStringList();
/**
 * Returns true if the user agent supports the given extension, specified
 * by a URI.
 * @param {String} extension The name of the extension, expressed as a URI.
 * @returns {Boolean} True or false, depending on whether the given extension
 * is   supported.
 */
SVGCursorElement.prototype.hasExtension = function (extension) {
  return false;
};

// Implementation of the svg::SVGURIReference W3C IDL interface
/**
 * Corresponds to attribute <span class='attr-name'>'xlink:href'</span> on
 * the given element.
 * @type SVGAnimatedString
 */
SVGCursorElement.prototype.href = new SVGAnimatedString();

/**
 * The {@link SVGAElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/linking.html#AElement'
 * title='a element specification'>a</a> element.
 * @constructor
 * @augments SVGElement
 */
function SVGAElement() {
}
SVGAElement.prototype = new SVGElement();

// Implementation of the svg::SVGAElement W3C IDL interface
/**
 * Corresponds to attribute {@link SVGAElement#target} on the given <a href='http://www.w3.org/TR/SVG11/linking.html#AElement'
 * title='a element specification'>a</a> element.
 * @type SVGAnimatedString
 */
SVGAElement.prototype.target = new SVGAnimatedString();

// Implementation of the svg::SVGExternalResourcesRequired W3C IDL interface
/**
 * Corresponds to attribute {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * on the given element. Note that the SVG DOM defines the attribute {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * as being of type {@link SVGAnimatedBoolean}, whereas the SVG language definition
 * says that {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * is not animated. Because the SVG language definition states that {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * cannot be animated, the {@link SVGAnimatedBoolean#animVal} will always
 * be the same as the {@link SVGAnimatedBoolean#baseVal}.
 * @type SVGAnimatedBoolean
 */
SVGAElement.prototype.externalResourcesRequired = new SVGAnimatedBoolean();

// Implementation of the svg::SVGLangSpace W3C IDL interface
/**
 * Corresponds to attribute <code>xml:lang</code> on the given element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an   attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGAElement.prototype.xmllang = "";
/**
 * Corresponds to attribute <code>xml:space</code> on the given element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an   attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGAElement.prototype.xmlspace = "";

// Implementation of the svg::SVGLocatable W3C IDL interface
/**
 * The element which established the current viewport. Often, the nearest
 * ancestor <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement' title='svg
 * element specification'>svg</a> element. Null if the current element is
 * the outermost <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element.
 * @type SVGElement
 */
SVGAElement.prototype.nearestViewportElement = new SVGElement();
/**
 * The farthest ancestor <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element. Null if the current
 * element is the outermost <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element.
 * @type SVGElement
 */
SVGAElement.prototype.farthestViewportElement = new SVGElement();
/**
 * Returns the tight bounding box in current user space (i.e., after application
 * of the <code>transform</code> attribute, if any) on the geometry of all
 * contained graphics elements, exclusive of stroking, clipping, masking and
 * filter effects). Note that getBBox must return the actual bounding box
 * at the time the method was called, even in case the element has not yet
 * been rendered.
 * @returns {SVGRect} An {@link SVGRect} object that defines the bounding
 * box.
 */
SVGAElement.prototype.getBBox = function () {
  return new SVGRect();
};
/**
 * Returns the transformation matrix from current user units (i.e., after
 * application of the <code>transform</code> attribute, if any) to the viewport
 * coordinate system for the {@link SVGLocatable#nearestViewportElement}.
 * @returns {SVGMatrix} An {@link SVGMatrix} object that defines the CTM.
 */
SVGAElement.prototype.getCTM = function () {
  return new SVGMatrix();
};
/**
 * Returns the transformation matrix from current user units (i.e., after
 * application of the <code>transform</code> attribute, if any) to the parent
 * user agent's notice of a "pixel". For display devices, ideally this represents
 * a physical screen pixel. For other devices or environments where physical
 * pixel sizes are not known, then an algorithm similar to the CSS2 definition
 * of a "pixel" can be used instead.  Note that null is returned if this element
 * is not hooked into the document tree. This method would have been more
 * aptly named as <code>getClientCTM</code>, but the name <code>getScreenCTM</code>
 * is kept for historical reasons.
 * @returns {SVGMatrix} An {@link SVGMatrix} object that defines the given
 * transformation matrix.
 */
SVGAElement.prototype.getScreenCTM = function () {
  return new SVGMatrix();
};
/**
 * Returns the transformation matrix from the user coordinate system on the
 * current element (after application of the <code>transform</code> attribute,
 * if any) to the user coordinate system on parameter <var>element</var> (after
 * application of its <code>transform</code> attribute, if any).
 * @param {SVGElement} element The target element.
 * @returns {SVGMatrix} An {@link SVGMatrix} object that defines the transformation.
 * @throws {SVGException} (SVG_MATRIX_NOT_INVERTABLE) Raised if the currently
 * defined transformation matrices make it impossible to compute the   given
 * matrix (e.g., because one of the transformations is singular).
 */
SVGAElement.prototype.getTransformToElement = function (element) {
  return new SVGMatrix();
};

// Implementation of the svg::SVGStylable W3C IDL interface
/**
 * Corresponds to attribute <code>class</code> on the given element.
 * @type SVGAnimatedString
 */
SVGAElement.prototype.className = new SVGAnimatedString();
/**
 * Corresponds to attribute <code>style attribute</code> on the given element.
 * If the user agent does not support <a href='styling.html#StylingWithCSS'>styling
 * with CSS</a>, then this attribute must always have the value of null.
 * @type CSSStyleDeclaration
 */
SVGAElement.prototype.style = new CSSStyleDeclaration();
/**
 * Returns the base (i.e., static) value of a given <code>presentation   attribute</code>
 * as an object of type <code>CSSValue</code>. The returned object is live;
 * changes to the objects represent immediate changes to the objects to which
 * the <code>CSSValue</code> is attached. <p>Note: The <code>getPresentationAttribute</code>
 * method is deprecated, and may be dropped from future versions of the SVG
 * specification.</p>
 * @param {String} name The name of the presentation attribute whose value
 * is to be   returned.
 * @returns {CSSValue} The static/base value of the given <code>presentation
 * attribute</code>   as a <code>CSSValue</code>, or null if the given attribute
 * does not have a   specified value.
 */
SVGAElement.prototype.getPresentationAttribute = function (name) {
  return new CSSValue();
};

// Implementation of the svg::SVGTests W3C IDL interface
/**
 * Corresponds to attribute {@link SVGTests#requiredFeatures} on the given
 * element.
 * @type SVGStringList
 */
SVGAElement.prototype.requiredFeatures = new SVGStringList();
/**
 * Corresponds to attribute {@link SVGTests#requiredExtensions} on the given
 * element.
 * @type SVGStringList
 */
SVGAElement.prototype.requiredExtensions = new SVGStringList();
/**
 * Corresponds to attribute {@link SVGTests#systemLanguage} on the given element.
 * @type SVGStringList
 */
SVGAElement.prototype.systemLanguage = new SVGStringList();
/**
 * Returns true if the user agent supports the given extension, specified
 * by a URI.
 * @param {String} extension The name of the extension, expressed as a URI.
 * @returns {Boolean} True or false, depending on whether the given extension
 * is   supported.
 */
SVGAElement.prototype.hasExtension = function (extension) {
  return false;
};

// Implementation of the svg::SVGTransformable W3C IDL interface
/**
 * Corresponds to attribute {@link SVGTransformable#transform} on the given
 * element.
 * @type SVGAnimatedTransformList
 */
SVGAElement.prototype.transform = new SVGAnimatedTransformList();

// Implementation of the svg::SVGURIReference W3C IDL interface
/**
 * Corresponds to attribute <span class='attr-name'>'xlink:href'</span> on
 * the given element.
 * @type SVGAnimatedString
 */
SVGAElement.prototype.href = new SVGAnimatedString();

/**
 * The {@link SVGAElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/linking.html#ViewElement'
 * title='view element specification'>view</a> element.
 * @constructor
 * @augments SVGElement
 */
function SVGViewElement() {
}
SVGViewElement.prototype = new SVGElement();

// Implementation of the svg::SVGViewElement W3C IDL interface
/**
 * Corresponds to attribute {@link SVGViewElement#viewTarget} on the given
 * <a href='http://www.w3.org/TR/SVG11/linking.html#ViewElement' title='view
 * element specification'>view</a> element. A list of DOMString values which
 * contain the names listed in the {@link SVGViewElement#viewTarget} attribute.
 * Each of the DOMString values can be associated with the corresponding element
 * using the getElementById() method call.
 * @type SVGStringList
 */
SVGViewElement.prototype.viewTarget = new SVGStringList();

// Implementation of the svg::SVGExternalResourcesRequired W3C IDL interface
/**
 * Corresponds to attribute {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * on the given element. Note that the SVG DOM defines the attribute {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * as being of type {@link SVGAnimatedBoolean}, whereas the SVG language definition
 * says that {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * is not animated. Because the SVG language definition states that {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * cannot be animated, the {@link SVGAnimatedBoolean#animVal} will always
 * be the same as the {@link SVGAnimatedBoolean#baseVal}.
 * @type SVGAnimatedBoolean
 */
SVGViewElement.prototype.externalResourcesRequired = new SVGAnimatedBoolean();

// Implementation of the svg::SVGFitToViewBox W3C IDL interface
/**
 * Corresponds to attribute {@link SVGFitToViewBox#viewBox} on the given element.
 * @type SVGAnimatedRect
 */
SVGViewElement.prototype.viewBox = new SVGAnimatedRect();
/**
 * Corresponds to attribute {@link SVGFitToViewBox#preserveAspectRatio} on
 * the given element.
 * @type SVGAnimatedPreserveAspectRatio
 */
SVGViewElement.prototype.preserveAspectRatio = new SVGAnimatedPreserveAspectRatio();

// Implementation of the svg::SVGZoomAndPan W3C IDL interface
/**
 * The enumeration was set to a value that is not one of predefined types.
 * It is invalid to attempt to define a new value of this type or to attempt
 * to switch an existing value to this type.
 * @constant
 * @type Number
 */
SVGViewElement.SVG_ZOOMANDPAN_UNKNOWN = 0;
/**
 * Corresponds to value <span class='attr-value'>'disable'</span>.
 * @constant
 * @type Number
 */
SVGViewElement.SVG_ZOOMANDPAN_DISABLE = 1;
/**
 * Corresponds to value <span class='attr-value'>'magnify'</span>.
 * @constant
 * @type Number
 */
SVGViewElement.SVG_ZOOMANDPAN_MAGNIFY = 2;
/**
 * Corresponds to attribute {@link SVGZoomAndPan#zoomAndPan} on the given
 * element. The value must be one of the SVG_ZOOMANDPAN_ constants defined
 * on this interface.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an   attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type Number
 */
SVGViewElement.prototype.zoomAndPan = 0;

/**
 * The {@link SVGScriptElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/script.html#ScriptElement'
 * title='script element specification'>script</a> element.
 * @constructor
 * @augments SVGElement
 */
function SVGScriptElement() {
}
SVGScriptElement.prototype = new SVGElement();

// Implementation of the svg::SVGScriptElement W3C IDL interface
/**
 * Corresponds to attribute {@link SVGScriptElement#type} on the given <a
 * href='http://www.w3.org/TR/SVG11/script.html#ScriptElement' title='script
 * element specification'>script</a> element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGScriptElement.prototype.type = "";

// Implementation of the svg::SVGExternalResourcesRequired W3C IDL interface
/**
 * Corresponds to attribute {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * on the given element. Note that the SVG DOM defines the attribute {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * as being of type {@link SVGAnimatedBoolean}, whereas the SVG language definition
 * says that {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * is not animated. Because the SVG language definition states that {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * cannot be animated, the {@link SVGAnimatedBoolean#animVal} will always
 * be the same as the {@link SVGAnimatedBoolean#baseVal}.
 * @type SVGAnimatedBoolean
 */
SVGScriptElement.prototype.externalResourcesRequired = new SVGAnimatedBoolean();

// Implementation of the svg::SVGURIReference W3C IDL interface
/**
 * Corresponds to attribute <span class='attr-name'>'xlink:href'</span> on
 * the given element.
 * @type SVGAnimatedString
 */
SVGScriptElement.prototype.href = new SVGAnimatedString();

/**
 * <p>A DOM consumer can use the hasFeature of the DOMImplementation interface
 * to determine whether the SVG zoom event set has been implemented by a DOM
 * implementation. The feature string for this event set is "SVGZoomEvents".
 * This string is also used with the createEvent method.</p> <p>The zoom event
 * handler occurs before the zoom event is processed. The remainder of the
 * DOM represents the previous state of the document. The document will be
 * updated upon normal return from the event handler.</p> <p>The UI event
 * type for a zoom event is:</p> <dl>   <dt><strong>SVGZoom</strong></dt>
 * <dd>     The zoom event occurs when the user initiates an action     which
 * causes the current view of the SVG document fragment     to be rescaled.
 * Event handlers are only recognized on <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> elements. See <a href="interact.html#ZoomEvent">SVGZoom
 * event</a>.     <ul>       <li>Bubbles: Yes</li>       <li>Cancelable: No</li>
 * <li>Context Info: zoomRectScreen, previousScale,       previousTranslate,
 * newScale, newTranslate, screenX,       screenY, clientX, clientY, altKey,
 * ctrlKey, shiftKey,       metaKey, relatedNode.<br/>        (screenX, screenY,
 * clientX and clientY indicate the       center of the zoom area, with clientX
 * and clientY in       viewport coordinates for the corresponding <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element. relatedNode is
 * the corresponding <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a>       element.)</li>     </ul>
 * </dd> </dl>
 * @constructor
 * @augments UIEvent
 */
function SVGZoomEvent() {
}
SVGZoomEvent.prototype = new UIEvent();

// Implementation of the svg::SVGZoomEvent W3C IDL interface
/**
 * <p>The specified zoom rectangle in screen units.</p> <p>The {@link SVGRect}
 * object is read only.</p>
 * @type SVGRect
 */
SVGZoomEvent.prototype.zoomRectScreen = new SVGRect();
/**
 * The scale factor from previous zoom operations that was in place before
 * the zoom operation occurred.
 * @type Number
 */
SVGZoomEvent.prototype.previousScale = 0;
/**
 * <p>The translation values from previous zoom operations that were in place
 * before the zoom operation occurred.</p> <p>The {@link SVGPoint} object
 * is read only.</p>
 * @type SVGPoint
 */
SVGZoomEvent.prototype.previousTranslate = new SVGPoint();
/**
 * The scale factor that will be in place after the zoom operation has been
 * processed.
 * @type Number
 */
SVGZoomEvent.prototype.newScale = 0;
/**
 * <p>The translation values that will be in place after the zoom operation
 * has been processed.</p> <p>The {@link SVGPoint} object is read only.</p>
 * @type SVGPoint
 */
SVGZoomEvent.prototype.newTranslate = new SVGPoint();

/**
 * <p>The {@link SVGAnimationElement} interface is the base interface for
 * all of the animation element interfaces: {@link SVGAnimateElement}, {@link SVGSetElement},
 * {@link SVGAnimateColorElement}, {@link SVGAnimateMotionElement} and {@link SVGAnimateTransformElement}.</p>
 * <p>Unlike other SVG DOM interfaces, the SVG DOM does not specify convenience
 * DOM properties corresponding to the various language attributes on SVG's
 * animation elements. Specification of these convenience properties in a
 * way that will be compatible with future versions of SMIL Animation is expected
 * in a future version of SVG. The current method for accessing and modifying
 * the attributes on the animation elements is to use the standard <code>getAttribute</code>,
 * <code>setAttribute</code>, <code>getAttributeNS</code> and <code>setAttributeNS</code>
 * defined in <a href="http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/">DOM
 * Level 2 Core</a> [<a href="refs.html#ref-DOM2">DOM2</a>].</p>
 * @constructor
 * @augments SVGElement
 */
function SVGAnimationElement() {
}
SVGAnimationElement.prototype = new SVGElement();

// Implementation of the svg::SVGAnimationElement W3C IDL interface
/**
 * The element which is being animated.
 * @type SVGElement
 */
SVGAnimationElement.prototype.targetElement = new SVGElement();
/**
 * Returns the begin time, in seconds, for this animation element's current
 * interval, if it exists, regardless of whether the interval has begun yet.
 * If there is no current interval, then a DOMException with code INVALID_STATE_ERR
 * is thrown.
 * @returns {Number} The start time, in seconds, of this animation element's
 * current   interval.
 * @throws {DOMException} (INVALID_STATE_ERR) The animation element does not
 * have a current interval.
 */
SVGAnimationElement.prototype.getStartTime = function () {
  return 0;
};
/**
 * Returns the current time in seconds relative to time zero for the given
 * time container.
 * @returns {Number} The current time in seconds relative to time zero for
 * the given   time container.
 */
SVGAnimationElement.prototype.getCurrentTime = function () {
  return 0;
};
/**
 * Returns the number of seconds for the simple duration for this animation.
 * If the simple duration is undefined (e.g., the end time is indefinite),
 * then an exception is raised.
 * @returns {Number} number of seconds for the simple duration for this animation.
 * @throws {DOMException} (NOT_SUPPORTED_ERR) The simple duration is not
 * determined on the given element.
 */
SVGAnimationElement.prototype.getSimpleDuration = function () {
  return 0;
};

// Implementation of the smil::ElementTimeControl W3C IDL interface
/**
 * Creates a begin instance time for the current time. The new instance time
 * is added to the <a href="http://www.w3.org/TR/2001/REC-smil-animation-20010904/#Timing-BeginEnd-InstanceTimesLists"><em>begin
 * instance times list</em></a>. The behavior of this method is equivalent
 * to <code>beginElementAt(0)</code>.
 */
SVGAnimationElement.prototype.beginElement = function () {
};
/**
 * Creates a begin instance time for the current time plus the specified offset.
 * The new instance time is added to the <a href="http://www.w3.org/TR/2001/REC-smil-animation-20010904/#Timing-BeginEnd-InstanceTimesLists"><em>begin
 * instance times list</em></a>.
 * @param {Number} offset The offset from the current document time, in seconds,
 * at   which to begin the element.
 */
SVGAnimationElement.prototype.beginElementAt = function (offset) {
};
/**
 * Creates an end instance time for the current time. The new instance time
 * is added to the <a href="http://www.w3.org/TR/2001/REC-smil-animation-20010904/#Timing-BeginEnd-InstanceTimesLists"><em>end
 * instance times list</em></a>. The behavior of this method is equivalent
 * to <code>endElementAt(0)</code>.
 */
SVGAnimationElement.prototype.endElement = function () {
};
/**
 * Creates a end instance time for the current time plus the specified offset.
 * The new instance time is added to the <a href="http://www.w3.org/TR/2001/REC-smil-animation-20010904/#Timing-BeginEnd-InstanceTimesLists"><em>end
 * instance times list</em></a>.
 * @param {Number} offset offset from the current document time, in seconds,
 * at   which to end the element.
 */
SVGAnimationElement.prototype.endElementAt = function (offset) {
};

// Implementation of the svg::SVGExternalResourcesRequired W3C IDL interface
/**
 * Corresponds to attribute {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * on the given element. Note that the SVG DOM defines the attribute {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * as being of type {@link SVGAnimatedBoolean}, whereas the SVG language definition
 * says that {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * is not animated. Because the SVG language definition states that {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * cannot be animated, the {@link SVGAnimatedBoolean#animVal} will always
 * be the same as the {@link SVGAnimatedBoolean#baseVal}.
 * @type SVGAnimatedBoolean
 */
SVGAnimationElement.prototype.externalResourcesRequired = new SVGAnimatedBoolean();

// Implementation of the svg::SVGTests W3C IDL interface
/**
 * Corresponds to attribute {@link SVGTests#requiredFeatures} on the given
 * element.
 * @type SVGStringList
 */
SVGAnimationElement.prototype.requiredFeatures = new SVGStringList();
/**
 * Corresponds to attribute {@link SVGTests#requiredExtensions} on the given
 * element.
 * @type SVGStringList
 */
SVGAnimationElement.prototype.requiredExtensions = new SVGStringList();
/**
 * Corresponds to attribute {@link SVGTests#systemLanguage} on the given element.
 * @type SVGStringList
 */
SVGAnimationElement.prototype.systemLanguage = new SVGStringList();
/**
 * Returns true if the user agent supports the given extension, specified
 * by a URI.
 * @param {String} extension The name of the extension, expressed as a URI.
 * @returns {Boolean} True or false, depending on whether the given extension
 * is   supported.
 */
SVGAnimationElement.prototype.hasExtension = function (extension) {
  return false;
};

/**
 * <p>The {@link SVGAnimateElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/animate.html#AnimateElement'
 * title='animate element specification'>animate</a> element.</p> <p>Object-oriented
 * access to the attributes of the <a href='http://www.w3.org/TR/SVG11/animate.html#AnimateElement'
 * title='animate element specification'>animate</a> element via the SVG DOM
 * is not available.</p>
 * @constructor
 * @augments SVGAnimationElement
 */
function SVGAnimateElement() {
}
SVGAnimateElement.prototype = new SVGAnimationElement();

// Implementation of the svg::SVGAnimateElement W3C IDL interface

/**
 * <p>The {@link SVGSetElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/animate.html#SetElement'
 * title='set element specification'>set</a> element.</p> <p>Object-oriented
 * access to the attributes of the <a href='http://www.w3.org/TR/SVG11/animate.html#SetElement'
 * title='set element specification'>set</a> element via the SVG DOM is not
 * available.</p>
 * @constructor
 * @augments SVGAnimationElement
 */
function SVGSetElement() {
}
SVGSetElement.prototype = new SVGAnimationElement();

// Implementation of the svg::SVGSetElement W3C IDL interface

/**
 * <p>The {@link SVGAnimateMotionElement} interface corresponds to the <a
 * href='http://www.w3.org/TR/SVG11/animate.html#AnimateMotionElement' title='animateMotion
 * element specification'>animateMotion</a> element.</p> <p>Object-oriented
 * access to the attributes of the <a href='http://www.w3.org/TR/SVG11/animate.html#AnimateMotionElement'
 * title='animateMotion element specification'>animateMotion</a> element via
 * the SVG DOM is not available.</p>
 * @constructor
 * @augments SVGAnimationElement
 */
function SVGAnimateMotionElement() {
}
SVGAnimateMotionElement.prototype = new SVGAnimationElement();

// Implementation of the svg::SVGAnimateMotionElement W3C IDL interface

/**
 * <p>The {@link SVGMPathElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/animate.html#MPathElement'
 * title='mpath element specification'>mpath</a> element.</p>
 * @constructor
 * @augments SVGElement
 */
function SVGMPathElement() {
}
SVGMPathElement.prototype = new SVGElement();

// Implementation of the svg::SVGMPathElement W3C IDL interface

// Implementation of the svg::SVGExternalResourcesRequired W3C IDL interface
/**
 * Corresponds to attribute {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * on the given element. Note that the SVG DOM defines the attribute {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * as being of type {@link SVGAnimatedBoolean}, whereas the SVG language definition
 * says that {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * is not animated. Because the SVG language definition states that {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * cannot be animated, the {@link SVGAnimatedBoolean#animVal} will always
 * be the same as the {@link SVGAnimatedBoolean#baseVal}.
 * @type SVGAnimatedBoolean
 */
SVGMPathElement.prototype.externalResourcesRequired = new SVGAnimatedBoolean();

// Implementation of the svg::SVGURIReference W3C IDL interface
/**
 * Corresponds to attribute <span class='attr-name'>'xlink:href'</span> on
 * the given element.
 * @type SVGAnimatedString
 */
SVGMPathElement.prototype.href = new SVGAnimatedString();

/**
 * <p>The {@link SVGAnimateColorElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/animate.html#AnimateColorElement'
 * title='animateColor element specification'>animateColor</a> element.</p>
 * <p>Object-oriented access to the attributes of the <a href='http://www.w3.org/TR/SVG11/animate.html#AnimateColorElement'
 * title='animateColor element specification'>animateColor</a> element via
 * the SVG DOM is not available.</p>
 * @constructor
 * @augments SVGAnimationElement
 */
function SVGAnimateColorElement() {
}
SVGAnimateColorElement.prototype = new SVGAnimationElement();

// Implementation of the svg::SVGAnimateColorElement W3C IDL interface

/**
 * <p>The {@link SVGAnimateTransformElement} interface corresponds to the
 * <a href='http://www.w3.org/TR/SVG11/animate.html#AnimateTransformElement'
 * title='animateTransform element specification'>animateTransform</a> element.</p>
 * <p>Object-oriented access to the attributes of the <a href='http://www.w3.org/TR/SVG11/animate.html#AnimateTransformElement'
 * title='animateTransform element specification'>animateTransform</a> element
 * via the SVG DOM is not available.</p>
 * @constructor
 * @augments SVGAnimationElement
 */
function SVGAnimateTransformElement() {
}
SVGAnimateTransformElement.prototype = new SVGAnimationElement();

// Implementation of the svg::SVGAnimateTransformElement W3C IDL interface

/**
 * <p>The {@link SVGFontElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/fonts.html#FontElement'
 * title='font element specification'>font</a>  element.</p> <p>Object-oriented
 * access to the attributes of the <a href='http://www.w3.org/TR/SVG11/fonts.html#FontElement'
 * title='font element specification'>font</a>  element via the SVG DOM is
 * not available.</p>
 * @constructor
 * @augments SVGElement
 */
function SVGFontElement() {
}
SVGFontElement.prototype = new SVGElement();

// Implementation of the svg::SVGFontElement W3C IDL interface

// Implementation of the svg::SVGExternalResourcesRequired W3C IDL interface
/**
 * Corresponds to attribute {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * on the given element. Note that the SVG DOM defines the attribute {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * as being of type {@link SVGAnimatedBoolean}, whereas the SVG language definition
 * says that {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * is not animated. Because the SVG language definition states that {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * cannot be animated, the {@link SVGAnimatedBoolean#animVal} will always
 * be the same as the {@link SVGAnimatedBoolean#baseVal}.
 * @type SVGAnimatedBoolean
 */
SVGFontElement.prototype.externalResourcesRequired = new SVGAnimatedBoolean();

// Implementation of the svg::SVGStylable W3C IDL interface
/**
 * Corresponds to attribute <code>class</code> on the given element.
 * @type SVGAnimatedString
 */
SVGFontElement.prototype.className = new SVGAnimatedString();
/**
 * Corresponds to attribute <code>style attribute</code> on the given element.
 * If the user agent does not support <a href='styling.html#StylingWithCSS'>styling
 * with CSS</a>, then this attribute must always have the value of null.
 * @type CSSStyleDeclaration
 */
SVGFontElement.prototype.style = new CSSStyleDeclaration();
/**
 * Returns the base (i.e., static) value of a given <code>presentation   attribute</code>
 * as an object of type <code>CSSValue</code>. The returned object is live;
 * changes to the objects represent immediate changes to the objects to which
 * the <code>CSSValue</code> is attached. <p>Note: The <code>getPresentationAttribute</code>
 * method is deprecated, and may be dropped from future versions of the SVG
 * specification.</p>
 * @param {String} name The name of the presentation attribute whose value
 * is to be   returned.
 * @returns {CSSValue} The static/base value of the given <code>presentation
 * attribute</code>   as a <code>CSSValue</code>, or null if the given attribute
 * does not have a   specified value.
 */
SVGFontElement.prototype.getPresentationAttribute = function (name) {
  return new CSSValue();
};

/**
 * <p>The {@link SVGGlyphElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/fonts.html#GlyphElement'
 * title='glyph element specification'>glyph</a> element.</p> <p>Object-oriented
 * access to the attributes of the <a href='http://www.w3.org/TR/SVG11/fonts.html#GlyphElement'
 * title='glyph element specification'>glyph</a> element via the SVG DOM is
 * not available.</p>
 * @constructor
 * @augments SVGElement
 */
function SVGGlyphElement() {
}
SVGGlyphElement.prototype = new SVGElement();

// Implementation of the svg::SVGGlyphElement W3C IDL interface

// Implementation of the svg::SVGStylable W3C IDL interface
/**
 * Corresponds to attribute <code>class</code> on the given element.
 * @type SVGAnimatedString
 */
SVGGlyphElement.prototype.className = new SVGAnimatedString();
/**
 * Corresponds to attribute <code>style attribute</code> on the given element.
 * If the user agent does not support <a href='styling.html#StylingWithCSS'>styling
 * with CSS</a>, then this attribute must always have the value of null.
 * @type CSSStyleDeclaration
 */
SVGGlyphElement.prototype.style = new CSSStyleDeclaration();
/**
 * Returns the base (i.e., static) value of a given <code>presentation   attribute</code>
 * as an object of type <code>CSSValue</code>. The returned object is live;
 * changes to the objects represent immediate changes to the objects to which
 * the <code>CSSValue</code> is attached. <p>Note: The <code>getPresentationAttribute</code>
 * method is deprecated, and may be dropped from future versions of the SVG
 * specification.</p>
 * @param {String} name The name of the presentation attribute whose value
 * is to be   returned.
 * @returns {CSSValue} The static/base value of the given <code>presentation
 * attribute</code>   as a <code>CSSValue</code>, or null if the given attribute
 * does not have a   specified value.
 */
SVGGlyphElement.prototype.getPresentationAttribute = function (name) {
  return new CSSValue();
};

/**
 * <p>The {@link SVGMissingGlyphElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/fonts.html#MissingGlyphElement'
 * title='missing-glyph element specification'>missing-glyph</a> element.</p>
 * <p>Object-oriented access to the attributes of the <a href='http://www.w3.org/TR/SVG11/fonts.html#MissingGlyphElement'
 * title='missing-glyph element specification'>missing-glyph</a> element via
 * the SVG DOM is not available.</p>
 * @constructor
 * @augments SVGElement
 */
function SVGMissingGlyphElement() {
}
SVGMissingGlyphElement.prototype = new SVGElement();

// Implementation of the svg::SVGMissingGlyphElement W3C IDL interface

// Implementation of the svg::SVGStylable W3C IDL interface
/**
 * Corresponds to attribute <code>class</code> on the given element.
 * @type SVGAnimatedString
 */
SVGMissingGlyphElement.prototype.className = new SVGAnimatedString();
/**
 * Corresponds to attribute <code>style attribute</code> on the given element.
 * If the user agent does not support <a href='styling.html#StylingWithCSS'>styling
 * with CSS</a>, then this attribute must always have the value of null.
 * @type CSSStyleDeclaration
 */
SVGMissingGlyphElement.prototype.style = new CSSStyleDeclaration();
/**
 * Returns the base (i.e., static) value of a given <code>presentation   attribute</code>
 * as an object of type <code>CSSValue</code>. The returned object is live;
 * changes to the objects represent immediate changes to the objects to which
 * the <code>CSSValue</code> is attached. <p>Note: The <code>getPresentationAttribute</code>
 * method is deprecated, and may be dropped from future versions of the SVG
 * specification.</p>
 * @param {String} name The name of the presentation attribute whose value
 * is to be   returned.
 * @returns {CSSValue} The static/base value of the given <code>presentation
 * attribute</code>   as a <code>CSSValue</code>, or null if the given attribute
 * does not have a   specified value.
 */
SVGMissingGlyphElement.prototype.getPresentationAttribute = function (name) {
  return new CSSValue();
};

/**
 * <p>The {@link SVGHKernElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/fonts.html#HKernElement'
 * title='hkern element specification'>hkern</a> element.</p> <p>Object-oriented
 * access to the attributes of the <a href='http://www.w3.org/TR/SVG11/fonts.html#HKernElement'
 * title='hkern element specification'>hkern</a> element via the SVG DOM is
 * not available.</p>
 * @constructor
 * @augments SVGElement
 */
function SVGHKernElement() {
}
SVGHKernElement.prototype = new SVGElement();

// Implementation of the svg::SVGHKernElement W3C IDL interface

/**
 * <p>The {@link SVGVKernElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/fonts.html#VKernElement'
 * title='vkern element specification'>vkern</a> element.</p> <p>Object-oriented
 * access to the attributes of the <a href='http://www.w3.org/TR/SVG11/fonts.html#VKernElement'
 * title='vkern element specification'>vkern</a> element via the SVG DOM is
 * not available.</p>
 * @constructor
 * @augments SVGElement
 */
function SVGVKernElement() {
}
SVGVKernElement.prototype = new SVGElement();

// Implementation of the svg::SVGVKernElement W3C IDL interface

/**
 * <p>The {@link SVGFontFaceElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/fonts.html#FontFaceElement'
 * title='font-face element specification'>font-face</a> element.</p> <p>Object-oriented
 * access to the attributes of the <a href='http://www.w3.org/TR/SVG11/fonts.html#FontFaceElement'
 * title='font-face element specification'>font-face</a> element via the SVG
 * DOM is not available.</p>
 * @constructor
 * @augments SVGElement
 */
function SVGFontFaceElement() {
}
SVGFontFaceElement.prototype = new SVGElement();

// Implementation of the svg::SVGFontFaceElement W3C IDL interface

/**
 * <p>The {@link SVGFontFaceSrcElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/fonts.html#FontFaceSrcElement'
 * title='font-face-src element specification'>font-face-src</a> element.</p>
 * <p>Object-oriented access to the attributes of the <a href='http://www.w3.org/TR/SVG11/fonts.html#FontFaceSrcElement'
 * title='font-face-src element specification'>font-face-src</a> element via
 * the SVG DOM is not available.</p>
 * @constructor
 * @augments SVGElement
 */
function SVGFontFaceSrcElement() {
}
SVGFontFaceSrcElement.prototype = new SVGElement();

// Implementation of the svg::SVGFontFaceSrcElement W3C IDL interface

/**
 * <p>The {@link SVGFontFaceUriElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/fonts.html#FontFaceURIElement'
 * title='font-face-uri element specification'>font-face-uri</a> element.</p>
 * <p>Object-oriented access to the attributes of the <a href='http://www.w3.org/TR/SVG11/fonts.html#FontFaceURIElement'
 * title='font-face-uri element specification'>font-face-uri</a> element via
 * the SVG DOM is not available.</p>
 * @constructor
 * @augments SVGElement
 */
function SVGFontFaceUriElement() {
}
SVGFontFaceUriElement.prototype = new SVGElement();

// Implementation of the svg::SVGFontFaceUriElement W3C IDL interface

/**
 * <p>The {@link SVGFontFaceFormatElement} interface corresponds to the <a
 * href='http://www.w3.org/TR/SVG11/fonts.html#FontFaceFormatElement' title='font-face-format
 * element specification'>font-face-format</a> element.</p> <p>Object-oriented
 * access to the attributes of the <a href='http://www.w3.org/TR/SVG11/fonts.html#FontFaceFormatElement'
 * title='font-face-format element specification'>font-face-format</a> element
 * via the SVG DOM is not available.</p>
 * @constructor
 * @augments SVGElement
 */
function SVGFontFaceFormatElement() {
}
SVGFontFaceFormatElement.prototype = new SVGElement();

// Implementation of the svg::SVGFontFaceFormatElement W3C IDL interface

/**
 * <p>The {@link SVGFontFaceNameElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/fonts.html#FontFaceNameElement'
 * title='font-face-name element specification'>font-face-name</a> element.</p>
 * <p>Object-oriented access to the attributes of the <a href='http://www.w3.org/TR/SVG11/fonts.html#FontFaceNameElement'
 * title='font-face-name element specification'>font-face-name</a> element
 * via the SVG DOM is not available.</p>
 * @constructor
 * @augments SVGElement
 */
function SVGFontFaceNameElement() {
}
SVGFontFaceNameElement.prototype = new SVGElement();

// Implementation of the svg::SVGFontFaceNameElement W3C IDL interface

/**
 * The {@link SVGMetadataElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/metadata.html#MetadataElement'
 * title='metadata element specification'>metadata</a> element.
 * @constructor
 * @augments SVGElement
 */
function SVGMetadataElement() {
}
SVGMetadataElement.prototype = new SVGElement();

// Implementation of the svg::SVGMetadataElement W3C IDL interface

/**
 * The {@link SVGForeignObjectElement} interface corresponds to the <a href='http://www.w3.org/TR/SVG11/extend.html#ForeignObjectElement'
 * title='foreignObject element specification'>foreignObject</a> element.
 * @constructor
 * @augments SVGElement
 */
function SVGForeignObjectElement() {
}
SVGForeignObjectElement.prototype = new SVGElement();

// Implementation of the svg::SVGForeignObjectElement W3C IDL interface
/**
 * Corresponds to attribute {@link SVGForeignObjectElement#x} on the given
 * <a href='http://www.w3.org/TR/SVG11/extend.html#ForeignObjectElement' title='foreignObject
 * element specification'>foreignObject</a> element.
 * @type SVGAnimatedLength
 */
SVGForeignObjectElement.prototype.x = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGForeignObjectElement#y} on the given
 * <a href='http://www.w3.org/TR/SVG11/extend.html#ForeignObjectElement' title='foreignObject
 * element specification'>foreignObject</a> element.
 * @type SVGAnimatedLength
 */
SVGForeignObjectElement.prototype.y = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGForeignObjectElement#width} on the given
 * <a href='http://www.w3.org/TR/SVG11/extend.html#ForeignObjectElement' title='foreignObject
 * element specification'>foreignObject</a> element.
 * @type SVGAnimatedLength
 */
SVGForeignObjectElement.prototype.width = new SVGAnimatedLength();
/**
 * Corresponds to attribute {@link SVGForeignObjectElement#height} on the
 * given <a href='http://www.w3.org/TR/SVG11/extend.html#ForeignObjectElement'
 * title='foreignObject element specification'>foreignObject</a> element.
 * @type SVGAnimatedLength
 */
SVGForeignObjectElement.prototype.height = new SVGAnimatedLength();

// Implementation of the svg::SVGExternalResourcesRequired W3C IDL interface
/**
 * Corresponds to attribute {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * on the given element. Note that the SVG DOM defines the attribute {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * as being of type {@link SVGAnimatedBoolean}, whereas the SVG language definition
 * says that {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * is not animated. Because the SVG language definition states that {@link SVGExternalResourcesRequired#externalResourcesRequired}
 * cannot be animated, the {@link SVGAnimatedBoolean#animVal} will always
 * be the same as the {@link SVGAnimatedBoolean#baseVal}.
 * @type SVGAnimatedBoolean
 */
SVGForeignObjectElement.prototype.externalResourcesRequired = new SVGAnimatedBoolean();

// Implementation of the svg::SVGLangSpace W3C IDL interface
/**
 * Corresponds to attribute <code>xml:lang</code> on the given element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an   attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGForeignObjectElement.prototype.xmllang = "";
/**
 * Corresponds to attribute <code>xml:space</code> on the given element.
 * @throws {DOMException} (NO_MODIFICATION_ALLOWED_ERR) Raised on an   attempt
 * to change the value of a <a href="svgdom.html#ReadOnlyNodes">read only
 * attribute</a>.
 * @type String
 */
SVGForeignObjectElement.prototype.xmlspace = "";

// Implementation of the svg::SVGLocatable W3C IDL interface
/**
 * The element which established the current viewport. Often, the nearest
 * ancestor <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement' title='svg
 * element specification'>svg</a> element. Null if the current element is
 * the outermost <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element.
 * @type SVGElement
 */
SVGForeignObjectElement.prototype.nearestViewportElement = new SVGElement();
/**
 * The farthest ancestor <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element. Null if the current
 * element is the outermost <a href='http://www.w3.org/TR/SVG11/struct.html#SVGElement'
 * title='svg element specification'>svg</a> element.
 * @type SVGElement
 */
SVGForeignObjectElement.prototype.farthestViewportElement = new SVGElement();
/**
 * Returns the tight bounding box in current user space (i.e., after application
 * of the <code>transform</code> attribute, if any) on the geometry of all
 * contained graphics elements, exclusive of stroking, clipping, masking and
 * filter effects). Note that getBBox must return the actual bounding box
 * at the time the method was called, even in case the element has not yet
 * been rendered.
 * @returns {SVGRect} An {@link SVGRect} object that defines the bounding
 * box.
 */
SVGForeignObjectElement.prototype.getBBox = function () {
  return new SVGRect();
};
/**
 * Returns the transformation matrix from current user units (i.e., after
 * application of the <code>transform</code> attribute, if any) to the viewport
 * coordinate system for the {@link SVGLocatable#nearestViewportElement}.
 * @returns {SVGMatrix} An {@link SVGMatrix} object that defines the CTM.
 */
SVGForeignObjectElement.prototype.getCTM = function () {
  return new SVGMatrix();
};
/**
 * Returns the transformation matrix from current user units (i.e., after
 * application of the <code>transform</code> attribute, if any) to the parent
 * user agent's notice of a "pixel". For display devices, ideally this represents
 * a physical screen pixel. For other devices or environments where physical
 * pixel sizes are not known, then an algorithm similar to the CSS2 definition
 * of a "pixel" can be used instead.  Note that null is returned if this element
 * is not hooked into the document tree. This method would have been more
 * aptly named as <code>getClientCTM</code>, but the name <code>getScreenCTM</code>
 * is kept for historical reasons.
 * @returns {SVGMatrix} An {@link SVGMatrix} object that defines the given
 * transformation matrix.
 */
SVGForeignObjectElement.prototype.getScreenCTM = function () {
  return new SVGMatrix();
};
/**
 * Returns the transformation matrix from the user coordinate system on the
 * current element (after application of the <code>transform</code> attribute,
 * if any) to the user coordinate system on parameter <var>element</var> (after
 * application of its <code>transform</code> attribute, if any).
 * @param {SVGElement} element The target element.
 * @returns {SVGMatrix} An {@link SVGMatrix} object that defines the transformation.
 * @throws {SVGException} (SVG_MATRIX_NOT_INVERTABLE) Raised if the currently
 * defined transformation matrices make it impossible to compute the   given
 * matrix (e.g., because one of the transformations is singular).
 */
SVGForeignObjectElement.prototype.getTransformToElement = function (element) {
  return new SVGMatrix();
};

// Implementation of the svg::SVGStylable W3C IDL interface
/**
 * Corresponds to attribute <code>class</code> on the given element.
 * @type SVGAnimatedString
 */
SVGForeignObjectElement.prototype.className = new SVGAnimatedString();
/**
 * Corresponds to attribute <code>style attribute</code> on the given element.
 * If the user agent does not support <a href='styling.html#StylingWithCSS'>styling
 * with CSS</a>, then this attribute must always have the value of null.
 * @type CSSStyleDeclaration
 */
SVGForeignObjectElement.prototype.style = new CSSStyleDeclaration();
/**
 * Returns the base (i.e., static) value of a given <code>presentation   attribute</code>
 * as an object of type <code>CSSValue</code>. The returned object is live;
 * changes to the objects represent immediate changes to the objects to which
 * the <code>CSSValue</code> is attached. <p>Note: The <code>getPresentationAttribute</code>
 * method is deprecated, and may be dropped from future versions of the SVG
 * specification.</p>
 * @param {String} name The name of the presentation attribute whose value
 * is to be   returned.
 * @returns {CSSValue} The static/base value of the given <code>presentation
 * attribute</code>   as a <code>CSSValue</code>, or null if the given attribute
 * does not have a   specified value.
 */
SVGForeignObjectElement.prototype.getPresentationAttribute = function (name) {
  return new CSSValue();
};

// Implementation of the svg::SVGTests W3C IDL interface
/**
 * Corresponds to attribute {@link SVGTests#requiredFeatures} on the given
 * element.
 * @type SVGStringList
 */
SVGForeignObjectElement.prototype.requiredFeatures = new SVGStringList();
/**
 * Corresponds to attribute {@link SVGTests#requiredExtensions} on the given
 * element.
 * @type SVGStringList
 */
SVGForeignObjectElement.prototype.requiredExtensions = new SVGStringList();
/**
 * Corresponds to attribute {@link SVGTests#systemLanguage} on the given element.
 * @type SVGStringList
 */
SVGForeignObjectElement.prototype.systemLanguage = new SVGStringList();
/**
 * Returns true if the user agent supports the given extension, specified
 * by a URI.
 * @param {String} extension The name of the extension, expressed as a URI.
 * @returns {Boolean} True or false, depending on whether the given extension
 * is   supported.
 */
SVGForeignObjectElement.prototype.hasExtension = function (extension) {
  return false;
};

// Implementation of the svg::SVGTransformable W3C IDL interface
/**
 * Corresponds to attribute {@link SVGTransformable#transform} on the given
 * element.
 * @type SVGAnimatedTransformList
 */
SVGForeignObjectElement.prototype.transform = new SVGAnimatedTransformList();

