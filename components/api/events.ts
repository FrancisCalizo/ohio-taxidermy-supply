import { client } from './contentful';

export const getEvents = async () => await client.getEntries({ content_type: 'events' });
