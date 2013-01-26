(function() {

    var fs = require("fs");
    var extname = require("path").extname;
    var gui = require('nw.gui');

    var path = window.PATH || gui.App.argv[0] || "";

    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.getSession().setMode("ace/mode/javascript");

    if (path)
        loadFile(path);

    editor.commands.addCommand({
        name: "open",
        bindKey: {win: "Ctrl-O", mac: "Command-O"},
        exec: function() {
            var chooser = document.getElementById("fileDialog");
            chooser.click();
            chooser.addEventListener("change", function(evt) {
                openWindow(this.files[0].path);
            }, false);
        }
    });

    editor.commands.addCommand({
        name: "save",
        bindKey: {win: "Ctrl-S", mac: "Command-S"},
        exec: function() {
            if (!path)
                return;

            fs.writeFile(path, editor.getValue(), "utf8", function(err) {
                alert("saved: " + path);
            });
        }
    });

    editor.commands.addCommand({
        name: "devtool",
        bindKey: {win: "Alt-Ctrl-J", mac: "Alt-Command-J"},
        exec: function() {
            gui.Window.get().showDevTools();
        }
    });

    function openWindow(path) {
        var win = window.open(location.href);
        win.PATH = path;
    }

    function loadFile() {
        editor.setReadOnly(true);
        fs.readFile(path, "utf8", function(err, file) {
            editor.setReadOnly(false);
            editor.setValue(file, -1);

            gui.Window.get().title = path;

            var mode = detectType(path, file);
            editor.getSession().setMode("ace/mode/" + mode);
        });
    }

    var modes = {
        ".html": "html",
        ".htm": "html",
        ".js": "javascript",
        ".css": "css",
        ".json": "json",
        ".sh": "sh"
    };

    function detectType(path, contents) {
        var ext = extname(path);
        return modes[ext] || "text";
    }

})();