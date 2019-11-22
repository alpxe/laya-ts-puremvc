import WebGL = Laya.WebGL;
// 程序入口
class GameMain{
    constructor()
    {
        Laya.init(600,400, WebGL);

        ApplicationFacade.getInstance(ApplicationFacade.NAME).startup(this);
        ApplicationFacade.getInstance(ApplicationFacade.NAME).sendNotification(ApplicationFacade.EVENT_MAIN_INSTALL);
    }
}
new GameMain();