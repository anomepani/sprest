export declare const peoplemanager: {
    amIFollowedBy: {
        argNames: string[];
        requestType: number;
    };
    amIFollowing: {
        argNames: string[];
        requestType: number;
    };
    follow: {
        argNames: string[];
        requestType: number;
    };
    followTag: {
        argNames: string[];
        requestType: number;
    };
    getFollowedTags: {
        argNames: string[];
        requestType: number;
    };
    getFollowersFor: {
        argNames: string[];
        requestType: number;
    };
    getMyFollowers: {
        requestType: number;
    };
    getMyProperties: {
        requestType: number;
    };
    getMySuggestions: {
        requestType: number;
    };
    getPeopleFollowedBy: {
        argNames: string[];
        requestType: number;
    };
    getPeopleFollowedByMe: {
        requestType: number;
    };
    getPropertiesFor: {
        argNames: string[];
        requestType: number;
    };
    getTrendingTags: {
        name: string;
        replaceEndpointFl: boolean;
        requestType: number;
    };
    getUserProfilePropertyFor: {
        argNames: string[];
        requestType: number;
    };
    hideSuggestion: {
        argNames: string[];
        requestType: number;
    };
    isFollowing: {
        argNames: string[];
        name: string;
        replaceEndpointFl: boolean;
        requestType: number;
    };
    setMyProfilePicture: {
        requestType: number;
    };
    stopFollowing: {
        argNames: string[];
        requestType: number;
    };
    stopFollowingTag: {
        argNames: string[];
        requestType: number;
    };
};
export declare const profileloader: {
    createPersonalSiteEnqueueBulk: {
        argNames: string[];
        requestType: number;
    };
    getOwnerUserProfile: {
        name: string;
        replaceEndpointFl: boolean;
        requestType: number;
        returnType: string;
    };
    getUserProfile: {
        requestType: number;
        returnType: string;
    };
};
export declare const socialfeed: {
    actor: {
        argNames: string[];
        name: string;
        requestType: number;
    };
    actorFeed: {
        argNames: string[];
        name: string;
        requestType: number;
    };
    clearMyUnreadMentionCount: {
        name: string;
        requestType: number;
    };
    my: {
        name: string;
        requestType: number;
    };
    myFeed: {
        name: string;
        requestType: number;
    };
    myLikes: {
        name: string;
        requestType: number;
    };
    myMentionFeed: {
        name: string;
        requestType: number;
    };
    myNews: {
        name: string;
        requestType: number;
    };
    myTimelineFeed: {
        name: string;
        requestType: number;
    };
    myUnreadMentionCount: {
        name: string;
        requestType: number;
    };
};
export declare const userprofile: {
    properties: string[];
    createPersonalSiteEnque: {
        requestType: number;
    };
    shareAllSocialData: {
        requestType: number;
    };
};
