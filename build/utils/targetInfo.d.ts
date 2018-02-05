import { IRequestInfo, ITargetInfo } from "./types";
export declare class TargetInfo {
    constructor(targetInfo: ITargetInfo);
    request: ITargetInfo;
    readonly isBatchRequest: boolean;
    requestData: any;
    readonly requestInfo: IRequestInfo;
    requestHeaders: object;
    requestMethod: string;
    requestUrl: string;
    private getDomainUrl();
    private static getQueryStringValue(key);
    private setRequestUrl();
}
