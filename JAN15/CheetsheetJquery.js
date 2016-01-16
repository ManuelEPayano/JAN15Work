$(html) / $(element) / $(selector [,context]) $(func) === $(document).ready(func) #id / .className :visible / :hidden
each (func) $("img").each(function(i){ :enabled / :disabled :checked / :selected
$()[i] === $().get(i) this.src = "test" + i + ".jpg";
$().length / $().size() / index(obj) return false; // stop looping over each :first / :last :eq(0) / :nth(0)
$().selector() / $().context() }); :header / :animated :even / :odd
E:empty has no children (including text nodes)
.data(key) / .data(key,val) / .removeData(key) Store/retrieve/remove arbitrary data tied to elements E:not(s) does not match simple selector s
.queue(name) / .queue(name, [fn|queue]) Retrieve an element's queue or add to/replace existing queue E F F element descendant of an E element
E > F F element child of an E element
attr(name) / attr(name,val) / attr({name:val}) attr(name, func) E + F F element immediately preceded by an E element
removeAttr(name) $("img").attr("title", function() { return this.src }); E ~ F F element preceded by an E element
E[foo] contains a "foo" attribute
E[foo=bar] "foo" attribute value is exactly equal to "bar"
E[foo^=bar] "foo" attribute value begins exactly with "bar"
add(expr) / add(html) / add(Element) Append more elements to the set of matched elements E[foo$=bar] "foo" attribute value ends exactly with "bar"
contains('text') $("div").contains('text') === $("div :contains('text')") E[foo*=bar] "foo" attribute value contains the substring "bar"
filter(expr) / filter(func) Leave elements matching expr or func returning true E[foo!=bar] "foo" attribute is not equal to "bar"
find(expr) $("p").find("span") === $("p span") E[foo~=bar] space-delimited "foo" attribute contains "bar"
is(expr [,expr]) Returns true if any in set matches expr. Complex selectors ok E[foo=bar][baz=bop] Match multiple attributes
next([expr]) / prev(expr) Only immediate next/prev sibling [if expr matches] :parent elements which have child elements (including text)
nextAll([expr]) / prevAll(expr) All next/previous siblings [if expr matches] :contains('test') elements which contain the specified text.
not(expr) / not(Element) Removes matched elements from list :input All form elements, not just type=input
parent([expr]) Immediate parent, if matches expr
parents([expr]) All parent elements matching expr
offsetParent() Positioning offset parent $.ajax( properties ) async: true
closest(expr) === parents(expr :first) Find closest parent element matching expr $.ajaxSetup ( properties ) beforeSend: func(xhr)
siblings([expr]) / children([expr]) andSelf() / end() $.get ( url, properties, fn(data) ) cache: true (false=no caching)
$.getJSON (url,props,fn(json) ) complete: func(xhr, textStatus)
before(content) / after(content) Creates a new sibling before/after element $.getScript ( url, callback ) contentType: String
insertBefore(expr) / insertAfter(expr) Attach selected elements as new sibling to others $.post ( url, props, fn(data) ) data: {obj} | String
prepend(content) / append(content) Creates a new child node at the beginning/end ajaxComplete ( fn(xhr,props) ) dataFilter: func(data,type) - return sanitized data
prependTo(expr) / appendTo(expr) Attach selected elements to others, return attched ajaxError ( fn(xhr,props) ) dataType: [xml,html,script,json,jsonp,text]
empty() - Removes all child nodes and content remove() ajaxSend ( fn(xhr,props) ) error: func(xhr, textStatus, exception)
wrap(html) $("p").wrap("<div class='wrap'></div>"); ajaxStart ( fn(xhr,props) ) global: true (fire global events)
wrapAll(html|elem) / wrapInner(html|elem) replaceWith(content) / replaceWith(expr) ajaxStop ( fn(xhr,props) ) ifModified: false
clone([boolean]) Clone event handlers if passed true ajaxSuccess ( fn(xhr,props) ) jsonp: String
.serialize() processData:true
css(name) - get val from first element in list only css(key,val) / css( {key:val, key:val} ) .serializeArray() scriptCharset: String
offset() / position() Returns {top,left} relative to doc or offset parent .load (url, props, fn(responseText,status,xhr) ) success: func(data, textStatus)
scrollTop([num]) / scrollLeft([num]) Scroll position of first element only partial content using selector in url: timeout: Number
height() / height(val) / width() / width(val) innerHeight() / innerWidth() $("#feed").load("feeds.php .results", type: [POST,GET]
outerHeight( [bool] ) / outerWidth( [bool] ) Pass false to ignore margins {limit: 25}, url: string
 function(text,status,xhr) { alert("Loaded 25!");} username: String / password: String (for auth)
bind (type,data,func) / unbind (type,func) function handler(event) { ); xhr: func (to create the XMLHttpRequest object)
one (type, data, func) - execute only once alert(event.data.foo);
hover (overfunc, outfunc) } $.support.property Check for browser support of features:
toggle (evenfunc, oddfunc) $("p").bind("click", {foo: "bar"}, handler)
trigger (type, data) Executes browser's default action also
Trigger an event: event () Bind a function to an event: event (fn) $.browser.version $.browser.[safari, opera, msie, mozilla]
$.each (obj, func) $.trim (str) / $.unique (array)
trigger (type, data) Executes browser's default action also $.each( [0,1,2], function(i, n){ $.extend ( target, prop1, propN )
live (type,fn) Handle event using event delegation alert( "Item #" + i + ": " + n ); var options = { name: "bar" };
die (type,fn) Remove events added w/ live(). }); $.extend({validate:false,name:'foo'}, options);
$.each( {name:"John",lang:"JS"},function(i,n){ Result == { validate: false, name: "bar" }
Speeds: slow / normal / fast / #ms toggle ([boolean]) / toggle (speed,fn) alert( "Name: " + i + ", Value: " + n ); $.map (array, func)
animate (params, options) animate (params, speed, easing, callback) }); $.map( [0,1,2], function(n){ return n + 4; });
hide/show (speed [,callback]) stop (clearQue,gotoEnd) $.grep ( array, func, invert) $.merge (array, array) - removes dupes
fadeIn/fadeOut (speed, callback) fadeTo (speed, opacity, callback) $.grep( [0,1,2], function(n,i){ return n>0; }) == [1,2] $.merge( [0,1,2], [2,3,4] ) === [0,1,2,3,4]
slideDown/slideUp (speed, callback) slideToggle (speed,callback) $.makeArray (obj) === [obj] $.inArray (value, array)
$.isArray (obj) / $.isFunction (obj) $.inArray('y',['x','y','z']) == 1 (-1 if not found)