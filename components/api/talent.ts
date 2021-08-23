import { client } from './contentful';

export const getTalent = async () => await client.getEntries({ content_type: 'talent' });
