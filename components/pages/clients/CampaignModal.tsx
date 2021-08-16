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
          overlay: { zIndex: 1000 },
          content: windowWidth > 600 ? regularModal : mobileModal,
        }}
      >
        <h1>Dis here a modal</h1>
      </Modal>
    </div>
  );
}

const mobileModal = { top: 0, bottom: 0, left: 0, right: 0 };
const regularModal = {
  maxWidth: 400,
  height: '90vh',
  margin: '0 auto',
  padding: '0 0 0 35px',
};
