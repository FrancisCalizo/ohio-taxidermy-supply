import React, { createContext, useContext } from 'react';
import { createClient as createClientContent } from 'contentful';
import { createClient as createClientManagement } from 'contentful-management';

const clientContent = createClientContent({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY as string,
});

const clientManagement = createClientManagement({
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_MANAGEMENT_ACCESS_KEY as string,
});

const ContentfulContext = createContext({});

interface ProviderProps {
  children: React.ReactNode;
}

export const ContentfulProvider = ({ children }: ProviderProps) => (
  <ContentfulContext.Provider value={{ clientContent, clientManagement }}>
    {children}
  </ContentfulContext.Provider>
);

export const useContentful: any = () => useContext(ContentfulContext);
