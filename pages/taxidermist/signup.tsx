import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Select from 'react-select';
import { useForm, Controller } from 'react-hook-form';
import { darken } from 'polished';

import SiteLayout from 'components/layout/SiteLayout';
import { US_STATES, MOUNTS_PER_YEAR_OPTIONS } from 'components/utils';
import { theme } from 'components/Theme';

type FormValues = {
  company: string;
  firstName: string;
  lastName: string;
  email: string;
  website: string;
  addressOne: string;
  addressTwo: string;
  city: string;
  state: any;
  zip: string;
  mountsPerYear: string;
  yearsInBusiness: string;
};

export default function Signup() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log('data', data);

    // Temporary Re-route
    router.push('/taxidermist/dashboard');
  };

  return (
    <div>
      <Container>
        <h2 className="section-title">Create Taxidermist Account</h2>
        <p className="desc">Please fill out the form below!</p>

        <p className="login_p1">Already have an account?</p>
        <p className="login_p2">
          Click <Link href="/taxidermist/login">here</Link> to login.
        </p>

        <FormContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid-container">
              <div className="company-container">
                <Input
                  type="text"
                  id="company"
                  placeholder="Company Name"
                  {...register('company', { required: 'This field is required' })}
                />
                {errors.company && <InputErrorMessage>{errors.company.message}</InputErrorMessage>}
              </div>

              <div className="first-name-container">
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

              <div className="last-name-container">
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

              <div className="email-container">
                <Input
                  type="email"
                  id="email"
                  placeholder="Email"
                  {...register('email', {
                    required: 'This field is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Entered value does not match email format',
                    },
                  })}
                />
                {errors.email && <InputErrorMessage>{errors.email.message}</InputErrorMessage>}
              </div>

              <div className="website-container">
                <Input type="text" id="website" placeholder="Website (optional)" />
                {errors.website && <InputErrorMessage>{errors.website.message}</InputErrorMessage>}
              </div>

              <Input
                type="text"
                id="addressOne"
                placeholder="Address"
                {...register('addressOne', { required: 'This field is required' })}
              />
              {errors.addressOne && (
                <InputErrorMessage>{errors.addressOne.message}</InputErrorMessage>
              )}

              <Input
                type="text"
                id="addressTwo"
                placeholder="Address #2 (Optional)"
                {...register('addressTwo')}
              />
              {errors.addressTwo && (
                <InputErrorMessage>{errors.addressTwo.message}</InputErrorMessage>
              )}

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

              <Input
                type="number"
                id="yearsInBusiness"
                placeholder="Years In Business"
                {...register('yearsInBusiness', { required: 'This field is required' })}
              />
              {errors.yearsInBusiness && (
                <InputErrorMessage>{errors.yearsInBusiness.message}</InputErrorMessage>
              )}

              <Controller
                name="mountsPerYear"
                rules={{ required: 'This field is required' }}
                render={({ field }: any) => (
                  <Select
                    {...field}
                    options={MOUNTS_PER_YEAR_OPTIONS}
                    placeholder="Mounts Per Year"
                    isSearchable={false}
                    styles={selectStyles}
                    instanceId="mountsPerYear"
                  />
                )}
                control={control}
                defaultValue={''}
              />
              {errors.mountsPerYear && (
                <InputErrorMessage>{errors.mountsPerYear.message}</InputErrorMessage>
              )}

              <Button id="submit-button" disabled={isSubmitting} isSubmitting={isSubmitting}>
                Create Account
              </Button>
            </div>
          </form>
        </FormContainer>
      </Container>
    </div>
  );
}

const InputErrorMessage = styled.p`
  color: ${(props) => props.theme.colors.danger};
  font-size: 12px !important;
  width: 100%;
  margin: 0 2px 0;
`;

const Container = styled.div`
  max-width: 1000px;
  padding: 2rem;
  margin: 0 auto;

  .login_p1 {
    text-align: center;
    font-size: 14px;
    margin-bottom: 0;
  }

  .login_p2 {
    text-align: center;
    font-size: 14px;
    margin-top: 0.25rem;

    & > a {
      text-decoration: underline;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.orange};
    }
  }

  p {
    font-size: calc(16px + (20 - 16) * ((100vw - 400px) / (1800 - 400)));
  }

  .section-title {
    font-family: Arial, Helvetica, sans-serif;
    color: ${({ theme }) => theme.colors.orange};
    text-align: center;
    font-size: 2rem;
    letter-spacing: -1.5px;
    margin: 0;
  }

  .desc {
    text-align: center;
    margin: 0 0 1rem;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.gray};
  }
`;

const FormContainer = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 2rem 1rem;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  & .grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1rem;
    row-gap: 0.75rem;

    @media (max-width: 630px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  .company-container,
  #submit-button {
    grid-column: 1/-1;
  }

  .second-address-row {
    grid-column: 1/-1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1rem;
  }
`;

const Input = styled.input`
  display: block;
  width: 100%;
  font-size: calc(14px + (16 - 14) * ((100vw - 400px) / (1800 - 400)));
  padding: ${(props) => props.theme.input.padding};
  margin: 0.5rem 0;
  border: 1px solid lightgray;
  border-radius: 4px;

  ${(props) => props.theme.global.setInputFocus(darken(0.1, props.theme.colors.orange))}

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

const Button = styled.button<{ isSubmitting?: boolean }>`
  display: block;
  width: 100%;
  background: ${({ theme, isSubmitting }) => (isSubmitting ? 'lightgray' : theme.colors.brown)};
  color: white;
  border: 0.5px solid white;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  font-size: 1rem;
  cursor: ${({ isSubmitting }) => (isSubmitting ? 'not-allowed' : 'pointer')};
  box-shadow: ${(props) => props.theme.button.boxShadow};
  transition: background 300ms ease-in-out, transform 150ms ease-in-out;

  &:hover {
    background: ${(props) =>
      props.isSubmitting ? 'lightgray' : darken(0.05, props.theme.colors.brown)};
  }

  &:hover:not(#submit-button) {
    transform: scale(1.02);
  }

  ${(props) => props.theme.global.setFocus('#fff')}
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
    '&:active': { border: `1px solid ${darken(0.03, theme.colors.orange)}` },
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

Signup.getLayout = (page: any) => <SiteLayout>{page}</SiteLayout>;
