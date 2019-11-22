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
var Mediator = puremvc.Mediator;
var ApplicationMediator = /** @class */ (function (_super) {
    __extends(ApplicationMediator, _super);
    function ApplicationMediator(viewComponent) {
        return _super.call(this, ApplicationMediator.NAME, viewComponent) || this;
    }
    ApplicationMediator.prototype.listNotificationInterests = function () {
        return [
            ApplicationFacade.EVENT_MAIN_INSTALL
        ];
    };
    ApplicationMediator.prototype.handleNotification = function (notification) {
        var data = notification.getBody();
        switch (notification.getName()) {
            case ApplicationFacade.EVENT_MAIN_INSTALL:
                console.log("[PureMVC] hello world!");
                break;
        }
    };
    ApplicationMediator.NAME = "ApplicationMediator";
    return ApplicationMediator;
}(Mediator));
//# sourceMappingURL=ApplicationMediator.js.map