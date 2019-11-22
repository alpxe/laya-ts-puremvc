import Facade = puremvc.Facade;

class ApplicationFacade extends Facade {
    public static readonly NAME: string = "APP_MODULE";

    public static readonly STARTUP:string="EVENT_STARTUP";

    public static readonly EVENT_MAIN_INSTALL:string="EVENT_MAIN_INSTALL";

    constructor(key: string) {
        super(key);
    }

    public static getInstance(key: string): ApplicationFacade {
        if (this.instanceMap[key] == null) this.instanceMap[key] = new ApplicationFacade(key);
        return <ApplicationFacade><any>this.instanceMap[key];
    }

    public initializeController(): void {
        super.initializeController();
        this.registerCommand(ApplicationFacade.STARTUP, ApplicationStartupCommand);
    }

    public startup(app: any): void {
        this.sendNotification(ApplicationFacade.STARTUP, app);
        this.removeCommand(ApplicationFacade.STARTUP);//puremvc初始化完成，注销STARTUP命令
    }
}