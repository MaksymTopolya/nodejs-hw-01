import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import * as fs from 'node:fs/promises';

export const addOneContact = async () => {
     try {
        const data = await fs.readFile(PATH_DB, { encoding: 'utf8' });
        const contacts = JSON.parse(data);
         const foo = createFakeContact();
         contacts.push(foo);
         await fs.writeFile(PATH_DB, JSON.stringify(contacts), { encoding: 'utf8' });
    }catch (error) {
        console.error(error);
    }

};

addOneContact();
