import React, { createContext, useContext } from 'react';
import { createClient } from 'contentful';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY as string,
});

const ContentfulContext = createContext({});

interface ProviderProps {
  children: React.ReactNode;
}

export const ContentfulProvider = ({ children }: ProviderProps) => (
  <ContentfulContext.Provider value={{ client }}>{children}</ContentfulContext.Provider>
);

export const useContentful: any = () => useContext(ContentfulContext);
