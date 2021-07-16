import React from 'react';

import SiteLayout from 'components/layout/SiteLayout';
import VerticalRows from 'components/page-index/VerticalRows';
import HorizontalRows from 'components/page-index/HorizontalRows';

import { categories } from 'data/categoryList';
import { profilesVertical, profilesHorizontal } from 'data/profiles';
import { PageTitle } from 'components/utils/styled';

export default function Categories() {
  return (
    <div style={{ background: '#f1f2f3' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <PageTitle>Categories</PageTitle>
      </div>

      {categories
        .filter((cat) => ['beautyCosmetics', 'comedy'].includes(cat.id))
        .map((cat, key) => (
          <VerticalRows key={key} categoryTitle={cat.title} profiles={profilesVertical} />
        ))}

      {categories
        .filter((cat) => !['beautyCosmetics', 'comedy'].includes(cat.id))
        .map((cat, key) => (
          <HorizontalRows key={key} categoryTitle={cat.title} profiles={profilesHorizontal} />
        ))}
    </div>
  );
}

Categories.getLayout = (page: any) => <SiteLayout>{page}</SiteLayout>;
