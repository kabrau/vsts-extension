define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MessageHelper = (function () {
        function MessageHelper() {
        }
        MessageHelper.prototype.format = function (workItemIds) {
            return "Selected work item ids: " + workItemIds.join(", ");
        };
        return MessageHelper;
    }());
    exports.MessageHelper = MessageHelper;
});
