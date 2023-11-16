import { readUsers, writeUsers } from "./fileHandler.js";

export const createUser = async (body) => {

    const users = await readUsers();
    const userExists = users.find( (user) => user.name === body.name)

    let result = {"status" : "error", "message" : "User could not be created", "data" : null}

    if(!userExists) {

        users.push(body);
        result = await writeUsers(JSON.stringify(users));

    }

    return result;
}