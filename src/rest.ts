export * from "./rest.def";
import {
    App, Dependencies, FieldSchemaXML, ListForm, ListFormField,
    Loader, parse, SPConfig, Taxonomy, WebPart
} from "./helper";
import {
    ContextInfo, JSLink, List, Navigation, PeopleManager, PeoplePicker,
    ProfileLoader, Search, Site, SocialFeed, UserProfile, Utility, Web
} from "./lib";
import { SPTypes, Types } from "./mapper";
import { IHelper, IREST } from "./rest.def";

/**
 * Helper
 */
export const Helper: IHelper = {
    App,
    Dependencies,
    FieldSchemaXML,
    JSLink,
    ListForm,
    ListFormField,
    Loader,
    parse,
    SPConfig,
    Taxonomy,
    WebPart
};

/**
 * SharePoint REST Library
 */
export const $REST: IREST = {
    __ver: 3.17,
    ContextInfo,
    DefaultRequestToHostFl: false,
    Helper,
    JSLink,
    List: (listName, targetInfo) => { return new List(listName, targetInfo); },
    Navigation: (url, targetInfo) => { return new Navigation(url, targetInfo); },
    PeopleManager: (targetInfo) => { return new PeopleManager(targetInfo); },
    PeoplePicker: (targetInfo) => { return new PeoplePicker(targetInfo); },
    ProfileLoader: (targetInfo) => { return new ProfileLoader(targetInfo); },
    Search: (url, targetInfo) => { return new Search(url, targetInfo); },
    Site: (url, targetInfo) => { return new Site(url, targetInfo); },
    SPTypes,
    SocialFeed,
    UserProfile: (targetInfo) => { return new UserProfile(targetInfo); },
    Utility: (url, targetInfo) => { return new Utility(url, targetInfo); },
    Web: (url, targetInfo) => { return new Web(url, targetInfo); }
};

// See if the library doesn't exist, or is an older version
let global: IREST = ContextInfo.window.$REST;
if (global == null || global.__ver == null || global.__ver < $REST.__ver) {
    // Set the global variable
    ContextInfo.window.$REST = $REST;
}