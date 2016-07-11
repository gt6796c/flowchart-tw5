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
    if ($tw.browser && !window.Raphael) {
        window.eve = require("$:/plugins/gt6796c/flowchart-tw5/eve.js");
        window.Raphael = require("$:/plugins/gt6796c/flowchart-tw5/raphael.js");
        window.flowchart = require("$:/plugins/gt6796c/flowchart-tw5/flowchart.js");
    }

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
        var options = {};
        divNode.setAttribute("style", "height:" + height + ";width:" + width);
        divNode.setAttribute("id", "canvas_" + uniqueID);
        parent.insertBefore(divNode, nextSibling);
        try {
            // treat any attributes as JSON representations of options
            // for the flow chart
            try {
                for (var att in this.attributes) {
                    // we already used these in the div definition
                    if (att == "height" || att == "width") continue;
                    
                    var attval = this.getAttribute(att);
                    // allow for data from named tiddlers
                    if ($tw.wiki.tiddlerExists(attval))
                    {
                        var data = $tw.wiki.getTiddlerData(attval);
                        options[att] = data;
                    }
                    else {
                        options[att] = JSON.parse(attval);
                    }
                }
            }
            catch (ex) { console.error(ex); }
            var diagram = flowchart.parse(scriptBody);
            diagram.drawSVG('canvas_' + uniqueID, options); 
        }
        catch(ex)
        {
            divNode.innerText = ex;
        }
        

        uniqueID++;
        
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
