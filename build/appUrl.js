define(["require", "exports", "TFS/WorkItemTracking/Services"], function (require, exports, WitService) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    VSS.register(VSS.getContribution().id, function () {
        return {
            onFieldChanged: function (args) {
            },
            onLoaded: function (args) {
                var _fieldName = VSS.getConfiguration().witInputs["FieldName"];
                var _urlMacro = VSS.getConfiguration().witInputs["UrlMacro"];
                var _fieldNameText = VSS.getConfiguration().witInputs["FieldNameText"];
                var _textMacro = VSS.getConfiguration().witInputs["TextMacro"];
                if (_fieldName != undefined) {
                    WitService.WorkItemFormService.getService().then(function (service) {
                        service.getFieldValues([_fieldName, _fieldNameText]).then(function (value) {
                            var textLink = value[_fieldName];
                            if (_fieldNameText != undefined) {
                                textLink = value[_fieldNameText];
                                if (_textMacro != undefined) {
                                    textLink = _textMacro.replace("{0}", value[_fieldName]).replace("{1}", value[_fieldNameText]);
                                }
                            }
                            $("#content").append($('<a href="javascript:void(0)" class="aurl" >' + textLink + '</a>'));
                            $('.aurl').on("click", function () {
                                var url = _urlMacro.replace("{0}", value[_fieldName]);
                                window.open(url, "_new");
                            });
                        });
                    }, this._handleError);
                }
            },
            onUnloaded: function (args) {
            },
            onSaved: function (args) {
            },
            onReset: function (args) {
            },
            onRefreshed: function (args) {
            }
        };
    });
});
