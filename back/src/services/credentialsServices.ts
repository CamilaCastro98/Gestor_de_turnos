import ICredential from "../interfaces/ICredential"

let credentialsArray: ICredential[] = []
let credentialsId: number = 1
export const registerCredentialsService = async (username:string,password:string): Promise<number> => {
    const credentials: ICredential = {
        id: credentialsId,
        username: username,
        password: password
    }
    credentialsArray.push(credentials)
    credentialsId ++
    return credentials.id
}

export const validateCredentialsService = async (username:string,password:string): Promise<number | Error > => {
    for(let i = 0; i < credentialsArray.length ; i++) {
        if(credentialsArray[i].username === username) {
            if(credentialsArray[i].password === password) {
                return credentialsArray[i].id
            }
        }
    }
    return new Error ('Datos inválidos')
}