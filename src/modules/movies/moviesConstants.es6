export const ENDPOINT_MOVIES = "/movies";
export const ENDPOINT_COMMENTS = "/comments";

export const ACTION_MOVIES_GET = "ACTION_MOVIES_GET";
export const ACTION_MOVIES_PUSH = "ACTION_MOVIES_PUSH";
export const ACTION_COMMENTS_GET = "ACTION_COMMENTS_GET";
export const ACTION_COMMENTS_POST = "ACTION_COMMENTS_POST";
export const ACTION_FORM_COMMENT_UPDATE = "ACTION_FORM_COMMENT_UPDATE";

export const store = {
    "movies": [],
    "comments": [],
    "forms": {
        "comment": {
            "title": null,
            "message": null,
            "movie": null
        }
    }

};
