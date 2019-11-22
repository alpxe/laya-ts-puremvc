import SimpleCommand = puremvc.SimpleCommand;

class ApplicationStartupCommand extends SimpleCommand{
    constructor() {
        super();
    }

    public execute(notification: puremvc.INotification): void {
        this.facade().registerMediator(new ApplicationMediator(notification.getBody()));
    }
}