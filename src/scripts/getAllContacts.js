import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const getAllContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB, { encoding: 'utf8' });
        const contacts = JSON.parse(data);
       return contacts;
    } catch (error) {
        console.log(error);
    }
};

console.log(await getAllContacts());
