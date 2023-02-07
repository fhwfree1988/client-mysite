interface  AuthenticationType{
    id: number,
    username: string,
    email: string,
    roles: string[],
    accessToken: string,
    tokenType: string,
    login :boolean

}


export default AuthenticationType;