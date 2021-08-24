import { client } from './contentful';

export const getTravelCoupons = async () =>
  await client.getEntries({ content_type: 'travelCoupon' });
