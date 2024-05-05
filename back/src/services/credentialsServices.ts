import { Credential } from "../entities/Credential";
import { CredentialRepository } from "../repositories/CredentialRepository";

export const registerCredentialsService = async (
  username: string,
  password: string
): Promise<Credential> => {
  const newCredential: Credential = await CredentialRepository.create({
    username: username,
    password: password,
  });
  const results = await CredentialRepository.save(newCredential);
  return results;
};

export const validateCredentialsService = async (
  username: string,
  password: string
): Promise<number | undefined> => {
  const allCredentials: Credential[] = await CredentialRepository.find();
  for (let i = 0; i < allCredentials.length; i++) {
    if (allCredentials[i].username === username) {
      if (allCredentials[i].password === password) {
        return allCredentials[i].id;
      }
    }
  }
};
