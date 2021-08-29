import { clientContent } from './contentful';

export const getTravelCoupons = async () =>
  await clientContent.getEntries({ content_type: 'travelCoupon' });
