node-webkit demos
=================

This repo contains the demo code I used for my talk at amsterdam.js 23. jan 2013. You can find the slides on  [here](http://www.slideshare.net/fjakobs/amsterdamjs-talk-node-webkit).

01-hello-world
--------------

Just a simple static HTML file using a bit of node.js code.

02-httptris
-----------

This is a node.js HTTP server application. In the next step this pure server side app will be converted to node-webkit. <https://github.com/mafintosh/httptris>

03-httptris-nw
--------------

node-webkit version of httptris. This will run a local HTTP server on a random free port and open this in the browser view. Before you can run this app you need to install the NPM dependencies:

    npm install

04-ace
------

'native' text editor using [Ace](http://ace.ajax.org). Supported keyboard shortcuts:

- Cmd-O: Opens a file
- Cmd-S: saves the focused file
- Alt-Cmd-J Opens dev tools window

How to run
----------

First you need to download the node-webkit binary and move the `node-webkit.app` to `/Applications`.

To run the app:

    make run
    
To package the app:

    make pack

_Note that I only tested this for OSX. For windows and Linux the Makefiles need to be adjusted._