import Mediator = puremvc.Mediator;
import IMediator = puremvc.IMediator;

class ApplicationMediator extends Mediator implements IMediator{
    public static readonly NAME:string="ApplicationMediator";

    constructor(viewComponent:any) {
        super(ApplicationMediator.NAME,viewComponent);
    }

    public listNotificationInterests(): string[] {
        return [
            ApplicationFacade.EVENT_MAIN_INSTALL
        ];
    }

    public handleNotification(notification: puremvc.INotification): void {
        let data:any=notification.getBody();

        switch (notification.getName()) {
            case ApplicationFacade.EVENT_MAIN_INSTALL:
                console.log("[PureMVC] hello world!");
                break;
        }
    }
}