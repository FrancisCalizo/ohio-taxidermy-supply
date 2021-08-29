import { clientContent } from './contentful';

export const getEvents = async () => await clientContent.getEntries({ content_type: 'events' });
