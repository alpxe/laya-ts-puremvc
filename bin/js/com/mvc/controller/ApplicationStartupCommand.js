var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SimpleCommand = puremvc.SimpleCommand;
var ApplicationStartupCommand = /** @class */ (function (_super) {
    __extends(ApplicationStartupCommand, _super);
    function ApplicationStartupCommand() {
        return _super.call(this) || this;
    }
    ApplicationStartupCommand.prototype.execute = function (notification) {
        this.facade().registerMediator(new ApplicationMediator(notification.getBody()));
    };
    return ApplicationStartupCommand;
}(SimpleCommand));
//# sourceMappingURL=ApplicationStartupCommand.js.map