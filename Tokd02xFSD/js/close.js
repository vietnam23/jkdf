window.onbeforeunload = function () {
        if (data_needs_saving()) {
            return "Do you really want to leave our brilliant application?";
        } else {
            return;
        }
    };