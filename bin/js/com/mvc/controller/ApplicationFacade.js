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
var Facade = puremvc.Facade;
var ApplicationFacade = /** @class */ (function (_super) {
    __extends(ApplicationFacade, _super);
    function ApplicationFacade(key) {
        return _super.call(this, key) || this;
    }
    ApplicationFacade.getInstance = function (key) {
        if (this.instanceMap[key] == null)
            this.instanceMap[key] = new ApplicationFacade(key);
        return this.instanceMap[key];
    };
    ApplicationFacade.prototype.initializeController = function () {
        _super.prototype.initializeController.call(this);
        this.registerCommand(ApplicationFacade.STARTUP, ApplicationStartupCommand);
    };
    ApplicationFacade.prototype.startup = function (app) {
        this.sendNotification(ApplicationFacade.STARTUP, app);
        this.removeCommand(ApplicationFacade.STARTUP); //puremvc初始化完成，注销STARTUP命令
    };
    ApplicationFacade.NAME = "APP_MODULE";
    ApplicationFacade.STARTUP = "EVENT_STARTUP";
    ApplicationFacade.EVENT_MAIN_INSTALL = "EVENT_MAIN_INSTALL";
    return ApplicationFacade;
}(Facade));
//# sourceMappingURL=ApplicationFacade.js.map