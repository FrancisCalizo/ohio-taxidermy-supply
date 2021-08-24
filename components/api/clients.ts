import { client } from './contentful';

export const getClients = async () => await client.getEntries({ content_type: 'clients' });

export const getCampaigns = async () => await client.getEntries({ content_type: 'campaigns' });
