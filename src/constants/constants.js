module.exports = {
    MongoIDPattern : /^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i,
    ROLES: Object.freeze({
        USER: "USER",
        ADMIN: "ADMIN",
        WRITER: "WRITER"
    }),
    PERMISSIONS: Object.freeze({
        USER: ["profile"],
        ADMIN: ["all"],
        WRITER: ["blog"],
        ALL: "all"
    })
}
