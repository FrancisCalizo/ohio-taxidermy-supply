import { clientContent } from './contentful';

export const getTalent = async () => await clientContent.getEntries({ content_type: 'talent' });
