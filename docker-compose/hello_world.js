function main(params) {
    var name = params.name || "World";
    var action_name = process.env.__OW_ACTION_NAME;
    var apihost = process.env.__OW_API_HOST;
    
    return {
        payload: "Hello, " + name + "!",
        actionName: action_name,
        apiHost: apihost
    };
}
