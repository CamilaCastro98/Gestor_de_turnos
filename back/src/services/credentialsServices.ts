import { CredentialModel } from "../configs/data-source"
import { Credential } from "../entities/Credential"

export const registerCredentialsService = async (username:string,password:string): Promise<Credential> => {
    const newCredential: Credential = await CredentialModel.create({
        username: username,
        password: password
    })
    const results = await CredentialModel.save(newCredential)
    return results
}

export const validateCredentialsService = async (username:string,password:string): Promise<number | Error > => {
    const allCredentials: Credential[] = await CredentialModel.find()
    for(let i = 0; i < allCredentials.length ; i++) {
        if(allCredentials[i].username === username) {
            if(allCredentials[i].password === password) {
                return allCredentials[i].id
            }
        }
    }
    return new Error ("Datos inválidos")
}