import { clientContent } from './contentful';

export const getClients = async () => await clientContent.getEntries({ content_type: 'clients' });

export const getCampaigns = async () =>
  await clientContent.getEntries({ content_type: 'campaigns' });
