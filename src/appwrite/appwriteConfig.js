import { Client, Account, ID , Databases,Functions} from 'appwrite';

const client = new Client();

client.setEndpoint("http://43.205.144.172/v1").setProject("65cb50dd7d9b8858e974");

export const databases = new Databases(client,process.env.NEXT_PUBLIC_APPWRITE_DB_ID);
export const functions = new Functions(client);
export const account = new Account(client);

