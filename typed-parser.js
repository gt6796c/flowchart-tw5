/*\
title: $:/plugins/gt6796c/flowchart-tw5/typed-parser.js
type: application/javascript
module-type: parser

This parser wraps unadorned railroad syntax into a railroad widget

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

var FlowchartParser = function(type,text,options) {
	var element = {
			type: "flowchart",
			tag: "$flowchart",
			text: text
		};
	this.tree = [element];
};

exports["text/vnd.tiddlywiki.flowchart"] = FlowchartParser;
	
	var SequenceDiagramParser = function(type,text,options) {
		var element = {
			type: "seqdiag",
			tag: "$seqdiag",
			text: text
		};
		this.tree = [element];
	};

	exports["text/vnd.tiddlywiki.seqdiag"] = SequenceDiagramParser;

})();

