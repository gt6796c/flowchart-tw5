# flowchart-tw5

# wrapper for flowchart.js
http://flowchart.js.org

place <$flowchart> widget and then flowchart language in between tags.

#Installation
You can install by browsing to https://gt6796c.github.io/ and dragging the flowchart-tw5 link to your TiddlyWiki.


# TODO
1. ~~better error handling for preview~~
2. ~~pass in flowstates to widget~~
3. ~~Can't handle hyperlinks in flowchart due to what looks like a parsing bug. Probably a conflict between TW5 syntax and flowchart's (escaping the forward slashes seems to make it possible to link to external sites)~~
3.a. reversed the parsing for the couple of cases that this fails in. brittle.
4. ~~allow wiki links to be used in flowchart.~~
4.a used permalinks. kinda works ok
5. make external links go create new tab and not use TW's.
6. see if exports can be fixed. look at the highlight.js widget's tiddlywiki.files file for hint

<pre>
{
      "x": 0,
      "y": 0,
      "line-width": 3,
      "line-length": 50,
      "text-margin": 10,
      "font-size": 14,
      "font-color": "black",
      "line-color": "black",
      "element-color": "black",
      "fill": "white",
      "yes-text": "yes",
      "no-text": "no",
      "arrow-end": "block",
      "scale": 1,
      // style symbol types
      "symbols": {
        "start": {
          "font-color": "red",
          "element-color": "green",
          "fill": "yellow"
        },
        "end":{
          "class": "end-element"
        }
      },
      // even flowstate support ;-)
      "flowstate" : {
        "past" : { "fill" : "#CCCCCC", "font-size" : 12},
        "current" : {"fill" : "yellow", "font-color" : "red", "font-weight" : "bold"},
        "future" : { "fill" : "#FFFF99"},
        "request" : { "fill" : "blue"},
        "invalid": {"fill" : "#444444"},
        "approved" : { "fill" : "#58C4A3", "font-size" : 12, "yes-text" : "APPROVED", "no-text" : "n/a" },
        "rejected" : { "fill" : "#C45879", "font-size" : 12, "yes-text" : "n/a", "no-text" : "REJECTED" }
      }
</pre>
