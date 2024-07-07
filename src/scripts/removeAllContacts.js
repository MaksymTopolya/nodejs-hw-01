import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const removeAllContacts = async () => {try {
        const data = await fs.readFile(PATH_DB, { encoding: 'utf8' });
        let contacts = JSON.parse(data);
        contacts = [];
        await fs.writeFile(PATH_DB, JSON.stringify(contacts), { encoding: 'utf8' });
    } catch (error) {
        console.log(error);
    }};

removeAllContacts();
