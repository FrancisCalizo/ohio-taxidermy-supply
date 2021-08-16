import React, { useState, useContext } from 'react';
import Image from 'next/image';
import Modal from 'react-modal';
import styled from 'styled-components';

import useWindowResize from 'components/hooks/useWindowResize';
import { ClientContext } from 'pages/clients';

export default function CampaignModal() {
  const { isModalOpen, setIsModalOpen } = useContext(ClientContext);

  const [windowWidth] = useWindowResize();

  return (
    <div style={{ position: 'relative' }}>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Influencer Modal"
        ariaHideApp={false}
        style={{
          overlay: { zIndex: 1000, backgroundColor: 'rgba(0,0,0,0.7)' },
          content: { overflowY: 'hidden', ...(windowWidth > 600 ? regularModal : mobileModal) },
        }}
      >
        <MainContainer>
          <ClientImageContainer>
            <Image
              src={`/images/clients/campaign-modal.jpg`}
              alt="logo"
              quality={80}
              layout="fill"
              objectFit="cover"
            />
          </ClientImageContainer>
        </MainContainer>
      </Modal>
    </div>
  );
}

const MainContainer = styled.div`
  display: flex;
`;

const ClientImageContainer = styled.div`
  position: relative;
  height: 80vh;
  width: 50%;
`;

const mobileModal = { top: 0, bottom: 0, left: 0, right: 0 };
const regularModal = {
  top: '10%',
  maxWidth: '80%',
  height: '80vh',
  margin: '0 auto',
};
