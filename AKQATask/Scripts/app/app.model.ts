export class InfoModel {
    public name: string;
    public number: string;
}

export class ResultModel {
    public success: boolean;
    public message: string;
    public result: InfoModel;
}