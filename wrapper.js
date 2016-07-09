/*\
title: $:/plugins/gt6796c/flowchart-tw5/wrapper.js
type: application/javascript
module-type: widget

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";
     var uniqueID = 1;

    var Widget = require("$:/core/modules/widgets/widget.js").widget;

    var FlowchartWidget = function(parseTreeNode, options) {
        this.initialise(parseTreeNode, options);
    };

    FlowchartWidget.prototype = new Widget();

    /*
     Render this widget into the DOM
     */
    FlowchartWidget.prototype.render = function(parent,nextSibling) {
        this.parentDomNode = parent;
        this.computeAttributes();
        this.execute();
        
        var height = this.getAttribute("height", "500px");
        var width = this.getAttribute("width", "500px");
        var scriptBody = this.parseTreeNode.children[0].text;

        var divNode = this.document.createElement("div");
        divNode.setAttribute("class", "jxgbox");
        divNode.setAttribute("style", "height:" + height + ";width:" + width);
        divNode.setAttribute("id", "jxgbox_" + uniqueID++);
        divNode.innerHTML="HI!" + scriptBody;

        parent.insertBefore(divNode, nextSibling);
        
        this.domNodes.push(divNode);
    };

    FlowchartWidget.prototype.execute = function() {
        // Nothing to do
    };
    
    /*
     Selectively refreshes the widget if needed. Returns true if the widget or any of its children needed re-rendering
     */
    FlowchartWidget.prototype.refresh = function(changedTiddlers) {
        return false;
    };

    exports.flowchart = FlowchartWidget;
    
})();
