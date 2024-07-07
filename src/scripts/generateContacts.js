import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import * as fs from 'node:fs/promises';
 
const generateContacts = async (number) => {
    try {
        const data = await fs.readFile(PATH_DB, { encoding: 'utf8' });
        const contacts = JSON.parse(data);
         for (let i = 0; i < number; i++) {
            const contact = createFakeContact();
            contacts.push(contact);
        }
         await fs.writeFile(PATH_DB, JSON.stringify(contacts), { encoding: 'utf8' });
    }catch (error) {
        console.error(error);
    }
};

generateContacts(5);
