import React from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import { useForm, Controller } from 'react-hook-form';
import { darken } from 'polished';
import { useRouter } from 'next/router';

import AuthLayout from 'components/layout/AuthLayout';
import { useAuth } from 'components/AuthContext';
import { theme } from 'components/Theme';
import { US_STATES } from 'components/utils';
import { useSignupContext } from 'components/layout/AuthLayout';

type FormValues = {
  firstName: string;
  lastName: string;
  gender: any;
  targetMedia: string[];
  addressOne: string;
  addressTwo: string;
  city: string;
  state: any;
  zip: string;
};

export default function Step1() {
  const { user } = useAuth();
  const router = useRouter();
  const { setSignupForm } = useSignupContext();

  // If user, bypass this login page
  if (user) {
    router.push('/dashboard');
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    // prettier-ignore
    const { 
      firstName, 
      lastName, 
      gender, 
      targetMedia, 
      addressOne, 
      addressTwo, 
      city, 
      state, 
      zip 
    } = data;

    setSignupForm((old: any) => ({
      ...old,
      firstName,
      lastName,
      gender: gender.value,
      targetMedia: targetMedia.map((media: any) => media.value),
      addressOne,
      addressTwo,
      city,
      state: state.value,
      zip,
    }));

    router.push('/signup/step2');
  };

  return (
    <MainContainer>
      <BodyContainer>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <h2>Welcome. Let's Begin!</h2>
        <h5>Please provide the following information</h5>

        <div className="form-container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="name-row">
              <div>
                <Input
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  {...register('firstName', { required: 'This field is required' })}
                />
                {errors.firstName && (
                  <InputErrorMessage>{errors.firstName.message}</InputErrorMessage>
                )}
              </div>

              <div>
                <Input
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  {...register('lastName', { required: 'This field is required' })}
                />
                {errors.lastName && (
                  <InputErrorMessage>{errors.lastName.message}</InputErrorMessage>
                )}
              </div>

              <div>
                <Controller
                  name="gender"
                  rules={{ required: 'This field is required' }}
                  render={({ field }: any) => (
                    <Select
                      {...field}
                      options={[
                        { value: 'male', label: 'Male' },
                        { value: 'female', label: 'Female' },
                      ]}
                      instanceId="gender"
                      placeholder="Gender"
                      isSearchable={false}
                      styles={selectStyles}
                    />
                  )}
                  control={control}
                  defaultValue=""
                />
                {errors.gender && <InputErrorMessage>{errors.gender.message}</InputErrorMessage>}
              </div>
            </div>
            <div className="target-row">
              <div>
                <Controller
                  name="targetMedia"
                  render={({ field }: any) => (
                    <Select
                      {...field}
                      isMulti
                      options={[
                        { value: 'photo', label: 'Photo' },
                        { value: 'video', label: 'Video' },
                        { value: 'actor', label: 'Actor' },
                      ]}
                      instanceId="targetMedia"
                      placeholder="Target Media (Optional)"
                      isSearchable={false}
                      styles={selectStyles}
                    />
                  )}
                  control={control}
                  defaultValue={[]}
                />
              </div>
            </div>

            <div className="first-address-row">
              <div>
                <Input
                  type="text"
                  id="addressOne"
                  placeholder="Address"
                  {...register('addressOne', { required: 'This field is required' })}
                />
                {errors.addressOne && (
                  <InputErrorMessage>{errors.addressOne.message}</InputErrorMessage>
                )}
              </div>

              <div>
                <Input
                  type="text"
                  id="addressTwo"
                  placeholder="Address #2 (Optional)"
                  {...register('addressTwo')}
                />
                {errors.addressTwo && (
                  <InputErrorMessage>{errors.addressTwo.message}</InputErrorMessage>
                )}
              </div>
            </div>
            <div className="second-address-row">
              <div>
                <Input
                  type="text"
                  id="city"
                  placeholder="City"
                  {...register('city', { required: 'This field is required' })}
                />
                {errors.city && <InputErrorMessage>{errors.city.message}</InputErrorMessage>}
              </div>

              <div>
                <Controller
                  name="state"
                  rules={{ required: 'This field is required' }}
                  render={({ field }: any) => (
                    <Select
                      {...field}
                      options={US_STATES}
                      placeholder="State"
                      isSearchable={false}
                      styles={selectStyles}
                      instanceId="state"
                    />
                  )}
                  control={control}
                  defaultValue={''}
                />
                {errors.state && <InputErrorMessage>{errors.state.message}</InputErrorMessage>}
              </div>

              <div>
                <Input
                  type="number"
                  id="zip"
                  placeholder="Zip"
                  {...register('zip', { required: 'This field is required' })}
                />
                {errors.zip && <InputErrorMessage>{errors.zip.message}</InputErrorMessage>}
              </div>
            </div>

            <ContinueButton>Continue</ContinueButton>
          </form>
        </div>
      </BodyContainer>
    </MainContainer>
  );
}

Step1.getLayout = (page: any) => <AuthLayout>{page}</AuthLayout>;

const MainContainer = styled.div``;

const InputErrorMessage = styled.p`
  color: ${(props) => props.theme.colors.danger};
  font-size: 12px;
  width: 100%;
  margin: 0 auto 0.5rem;
`;

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

  // Hides number arrows
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
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
    maxHeight: '150px',
  }),
};
