import { IBase, IBaseCollection, IFileVersionQueryResult, IFileVersionResult } from "..";
/**
 * File Versions
 */
export interface IFileVersions extends IBaseCollection<IFileVersions, IFileVersionResult, IFileVersionQueryResult> {
    /**
     * Method to get the next set of results.
     */
    next(): IBase<IFileVersions>;
}