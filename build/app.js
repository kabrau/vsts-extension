define(["require", "exports", "TFS/WorkItemTracking/Services"], function (require, exports, WitService) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    VSS.register(VSS.getContribution().id, function () {
        return {
            onFieldChanged: function (args) {
                $("#events").append($("<div/>").text("onFieldChanged - " + JSON.stringify(args)));
            },
            onLoaded: function (args) {
                var _fieldName = VSS.getConfiguration().witInputs["FieldName"];
                var _readOnly = VSS.getConfiguration().witInputs["ReadOnly"];
                $("#events").append($("<div/>").text("onLoaded - " + _fieldName + "," + _readOnly));
                WitService.WorkItemFormService.getService().then(function (service) {
                    service.getFieldValues([_fieldName]).then(function (value) {
                        $("#events").append($("<div/>").text("onLoaded 2 - " + JSON.stringify(value)));
                    });
                }, this._handleError);
            },
            onUnloaded: function (args) {
                $("#events").append($("<div/>").text("onUnloaded - " + JSON.stringify(args)));
            },
            onSaved: function (args) {
                $("#events").append($("<div/>").text("onSaved - " + JSON.stringify(args)));
            },
            onReset: function (args) {
                $("#events").append($("<div/>").text("onReset - " + JSON.stringify(args)));
            },
            onRefreshed: function (args) {
                $("#events").append($("<div/>").text("onRefreshed - " + JSON.stringify(args)));
            }
        };
    });
});
