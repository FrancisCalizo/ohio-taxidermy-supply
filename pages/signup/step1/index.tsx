import React from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import { darken } from 'polished';
import { useRouter } from 'next/router';

import AuthLayout from 'components/layout/AuthLayout';
import { useAuth } from 'components/AuthContext';
import { theme } from 'components/Theme';
import { US_STATES } from 'components/utils';

export default function Step1() {
  const { user } = useAuth();
  const router = useRouter();

  const handleSubmit = () => {
    // Form validated successfully
    router.push('/signup/step2');
  };

  // If user, bypass this login page
  if (user) {
    router.push('/dashboard');
  }

  return (
    <MainContainer>
      <BodyContainer>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <h2>Welcome. Let's Begin!</h2>
        <h5>Please provide the following information</h5>

        <div className="form-container">
          <div className="name-row">
            <Input
              type="text"
              id="first-name"
              name="first-name"
              placeholder="First Name"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="text"
              id="last-name"
              name="last-name"
              placeholder="Last Name"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
            />
            {/* <Input
              type="text"
              id="gender"
              name="gender"
              placeholder="Gender"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
            /> */}
            <Select
              placeholder="Gender"
              options={[
                { value: 'male', label: 'Male' },
                { value: 'female', label: 'Female' },
              ]}
              isSearchable={false}
              // value={sort}
              // onChange={setSort}
              styles={selectStyles}
              instanceId="gender"
              // formatOptionLabel={sortFunction}
            />
          </div>
          <div className="target-row">
            <Select
              isMulti
              placeholder="Target Media (Optional)"
              options={[
                { value: 'photo', label: 'Photo' },
                { value: 'video', label: 'Video' },
                { value: 'actor', label: 'Actor' },
              ]}
              isSearchable={false}
              // value={sort}
              // onChange={setSort}
              styles={selectStyles}
              instanceId="media"
              // formatOptionLabel={sortFunction}
            />
          </div>
          <div className="first-address-row">
            <Input
              type="text"
              id="address-one"
              name="address-one"
              placeholder="Address"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="text"
              id="address-two"
              name="address-two"
              placeholder="Address #2 (Optional)"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="second-address-row">
            <Input
              type="text"
              id="city"
              name="city"
              placeholder="City"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
            />
            <Select
              placeholder="State"
              options={US_STATES}
              isSearchable={false}
              // value={sort}
              // onChange={setSort}
              styles={selectStyles}
              instanceId="state"
            />
            <Input
              type="text"
              id="zip"
              name="zip"
              placeholder="Zip"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <ContinueButton onClick={handleSubmit}>Continue</ContinueButton>
        </div>
      </BodyContainer>
    </MainContainer>
  );
}

Step1.getLayout = (page: any) => <AuthLayout>{page}</AuthLayout>;

const MainContainer = styled.div``;

const BodyContainer = styled.div`
  & h2 {
    text-align: center;
    margin: -1rem 0 0;
    color: ${(props) => props.theme.colors.gray};
  }

  & h5 {
    text-align: center;
    margin: 1rem 0 2rem;
  }

  .form-container {
    max-width: 800px;
    margin: 0 auto;

    .name-row {
      display: grid;
      grid-template-columns: 4fr 4fr 2fr;
      column-gap: 1rem;

      @media (max-width: 630px) {
        grid-template-columns: 1fr;
      }
    }

    .target-row {
      display: grid;
      grid-template-columns: 1fr;
      column-gap: 1rem;
      margin-bottom: 2rem;

      @media (max-width: 630px) {
        grid-template-columns: 1fr;
      }
    }

    .first-address-row {
      display: grid;
      grid-template-columns: 2fr 1fr;
      column-gap: 1rem;

      @media (max-width: 630px) {
        grid-template-columns: 1fr;
      }
    }

    .second-address-row {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      column-gap: 1rem;

      @media (max-width: 630px) {
        grid-template-columns: 1fr;
      }
    }
  }
`;

const Input = styled.input`
  display: block;
  font-size: calc(14px + (16 - 14) * ((100vw - 400px) / (1800 - 400)));
  padding: ${(props) => props.theme.input.padding};
  margin: 0.5rem 0;
  width: 100%;
  border: 1px solid lightgray;
  border-radius: 4px;

  @media (max-width: 630px) {
    max-width: none !important;
  }

  ${(props) => props.theme.global.setInputFocus(darken(0.1, props.theme.colors.pink))}
`;

const ContinueButton = styled.button`
  display: block;
  font-size: 18px;
  padding: 0.5rem;
  margin: 2.5rem auto;
  width: 100%;
  max-width: 300px;
  color: #fff;
  background: ${(props) => props.theme.colors.pink};
  border: 1px solid rgba(180, 180, 180, 0.8);
  box-shadow: ${(props) => props.theme.button.boxShadow};
  text-transform: uppercase;
  font-weight: 700;
  border-radius: 50px;
  cursor: pointer;

  &:hover {
    background: ${(props) => darken(0.03, props.theme.colors.pink)};
  }

  ${(props) => props.theme.global.setFocus(props.theme.colors.pink)}
`;

const selectStyles = {
  container: (baseStyles: any) => ({
    ...baseStyles,
    margin: '.5rem 0',
  }),
  control: (baseStyles: any) => ({
    ...baseStyles,
    fontSize: 'calc(14px + (16 - 14) * ((100vw - 400px) / (1800 - 400)))',
    border: '1px solid lightgray',
    boxShadow: 'none',
    '&:hover': { border: '1px solid #CCD7EA' },
    '&:active': { border: `1px solid ${darken(0.03, theme.colors.pink)}` },
  }),
  valueContainer: (baseStyles: any) => ({
    ...baseStyles,
    height: '40px',
    overflow: 'auto',
  }),
  menuList: (baseStyles: any) => ({
    ...baseStyles,
    maxHeight: '180px',
  }),
};
