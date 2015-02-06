(function() {
    "use strict";

    var requireDir = require("require-dir");

    // require all tasks in gulp/tasks, including subfolders
    requireDir("./gulp/tasks", { recurse: true });
})();