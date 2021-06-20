import React from 'react';
import styled from 'styled-components';

export default function Overview() {
  return (
    <div>
      <TopContainer>
        <div>
          <Card>
            <CardBody>
              <span>23</span>
              <p>Influencers</p>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <span>$</span>
              <span>20K</span>
              <p>Revenue</p>
            </CardBody>
          </Card>
        </div>
        <div>
          <Card>
            <CardBody>
              <span>6/7</span>
              <p>Conversions</p>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <span>94%</span>
              <p>Success</p>
            </CardBody>
          </Card>
        </div>
      </TopContainer>

      <MainContainer>
        <h2>Heading</h2>
        <Hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit mollitia ut, dolorem ipsa
          voluptatem omnis velit unde natus accusantium ratione architecto, saepe vitae at provident
          corrupti. Ut deserunt eum quae. Nam at possimus non labore qui praesentium, provident
          obcaecati sunt et sint eveniet aliquam, temporibus assumenda doloribus nulla a hic
          pariatur, minima sequi voluptate! Vel, dolore consequatur! Sint repellendus repudiandae
          odio quisquam dignissimos ipsam quas ducimus maiores possimus molestiae corrupti, officiis
          itaque repellat dicta cumque?
        </p>
      </MainContainer>
      <MainContainer>
        <h2>Heading</h2>
        <Hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit mollitia ut, dolorem ipsa
          voluptatem omnis velit unde natus accusantium ratione architecto, saepe vitae at provident
          corrupti. Ut deserunt eum quae. Nam at possimus non labore qui praesentium, provident
          obcaecati sunt et sint eveniet aliquam, temporibus assumenda doloribus nulla a hic
          pariatur, minima sequi voluptate! Vel, dolore consequatur! Sint repellendus repudiandae
          odio quisquam dignissimos ipsam quas ducimus maiores possimus molestiae corrupti, officiis
          itaque repellat dicta cumque?
        </p>
      </MainContainer>
      <MainContainer>
        <h2>Heading</h2>
        <Hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit mollitia ut, dolorem ipsa
          voluptatem omnis velit unde natus accusantium ratione architecto, saepe vitae at provident
          corrupti. Ut deserunt eum quae. Nam at possimus non labore qui praesentium, provident
          obcaecati sunt et sint eveniet aliquam, temporibus assumenda doloribus nulla a hic
          pariatur, minima sequi voluptate! Vel, dolore consequatur! Sint repellendus repudiandae
          odio quisquam dignissimos ipsam quas ducimus maiores possimus molestiae corrupti, officiis
          itaque repellat dicta cumque?
        </p>
      </MainContainer>
    </div>
  );
}

const TopContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 930px) {
    flex-wrap: wrap;
  }

  & > div {
    display: flex;
    flex: 1 1 0;
  }
`;

const Hr = styled.hr`
  margin-left: -1rem;
  margin-right: -1rem;
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid gray;
  background: #fff;
  border-radius: 5px;
  flex: 1 1 0;
  text-align: center;
  min-width: 160px;
`;

const CardBody = styled.div`
  padding: 2rem;

  span {
    font-size: 40px;
  }

  p {
    margin: 0;
  }
`;

const MainContainer = styled.div`
  margin: 2rem 0;
  padding: 1rem;
  border: 1px solid gray;
  background: #fff;
`;
