var WebGL = Laya.WebGL;
// 程序入口
var GameMain = /** @class */ (function () {
    function GameMain() {
        Laya.init(600, 400, WebGL);
        ApplicationFacade.getInstance(ApplicationFacade.NAME).startup(this);
        ApplicationFacade.getInstance(ApplicationFacade.NAME).sendNotification(ApplicationFacade.EVENT_MAIN_INSTALL);
    }
    return GameMain;
}());
new GameMain();
//# sourceMappingURL=LayaSample.js.map