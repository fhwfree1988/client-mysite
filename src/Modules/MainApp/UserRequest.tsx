interface  UserRequest{
    id: number,
    username: string,
    email: string,
    roles: string[],
    accessToken: string,
    tokenType: string
}

export default UserRequest;