import { Base, Request } from "../utils";
import { ITargetInfoProps } from "../utils/types/targetInfo";
import { ISite } from "./types/site";

/**
 * Site
 */
export const Site: ISite = ((url?: string, targetInfo?: ITargetInfoProps) => {
    let site = new Base(targetInfo);

    // Default the properties
    site.targetInfo.defaultToWebFl = true;
    site.targetInfo.endpoint = "site";

    // See if the web url exists
    if (url) {
        // Set the settings
        site.targetInfo.url = url;
    }

    // Add the methods
    Request.addMethods(site, { __metadata: { type: "SP.Site" } });

    // Return the site
    return site;
}) as any as ISite;

// Static method to see if a site exists
Site.exists = ((url: string) => {
    // Return the base object
    return new Base({
        data: { url },
        defaultToWebFl: true,
        endpoint: "SP.Site.Exists",
        method: "POST"
    });
}) as any;

// Static method to get the app context
Site.getAppContext = ((siteUrl: string) => {
    // Return the base object
    return new Base({
        data: { siteUrl },
        defaultToWebFl: true,
        endpoint: "SP.AppContextSite",
        method: "POST"
    });
}) as any;

// Method to get the url by id
Site.getUrlById = ((id: string) => {
    // Return the base object
    return new Base({
        data: { id },
        defaultToWebFl: true,
        endpoint: "SP.Site.GetUrlById",
        method: "POST"
    });
}) as any;