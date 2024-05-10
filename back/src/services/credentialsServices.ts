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
): Promise<number | undefined | string> => {
  const allCredentials: Credential[] = await CredentialRepository.find();
  for (const credentials of allCredentials) {
    if (credentials.username === username) {
      if (credentials.password === password) {
        return credentials.id;
      } else return ("wrong password")
    }
  }
};
