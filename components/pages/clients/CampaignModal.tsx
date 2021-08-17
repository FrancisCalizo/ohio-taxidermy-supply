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
          <ClientDescriptionContainer>
            <h3 className="heading">Lorem ipsum dolor sit amet.</h3>

            <h3 className="sub-heading">Campaign Description</h3>

            <p className="description-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas eveniet
              labore porro laborum non? Alias incidunt doloremque vero, deleniti illo,
              exercitationem molestias, commodi delectus voluptas veniam aspernatur quae nihil quis
              mollitia. Commodi nihil culpa voluptatem odit praesentium debitis facilis dolore eum
              sequi cupiditate voluptatum excepturi, ab pariatur. Aperiam, ipsam!
            </p>

            <h3 className="sub-heading">The Demographics</h3>

            <p className="description-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod voluptatibus enim,
              officiis beatae eveniet nihil quia alias, corrupti odio, sit vero quasi distinctio
              animi a.
            </p>

            <p className="description-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod voluptatibus enim,
              officiis beatae eveniet nihil quia alias, corrupti odio, sit vero quasi distinctio
              animi a.
            </p>

            <h3 className="sub-heading">The Cast</h3>
          </ClientDescriptionContainer>
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

const ClientDescriptionContainer = styled.div`
  padding: 2rem;
  width: 50%;

  h3 {
    text-transform: uppercase;
  }

  h3.sub-heading {
    font-size: 1rem;
  }

  p.description-text {
    color: ${({ theme }) => theme.colors.gray};
    font-size: 0.85rem;
    line-height: 1.5rem;
  }
`;

const mobileModal = { top: 0, bottom: 0, left: 0, right: 0 };
const regularModal = {
  top: '10%',
  maxWidth: '80%',
  height: '80vh',
  margin: '0 auto',
};
