import React from 'react';

// components
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import {
  ContactPageContainer,
  ContactHeaderContainer,
  ContactTitle,
  ContactContent,
  ContactForm,
  ContactInfoContainer,
  FormAndInfoContainer,
  ContactInfo
} from './contact.styles';

const ContactPage = () => (
  <ContactPageContainer>
    <ContactHeaderContainer>
      <ContactTitle>
        <strong>Contact Us</strong>
      </ContactTitle>
      <ContactContent>
        Get in touch with us. We're happy to help.☻
      </ContactContent>
    </ContactHeaderContainer>
    <FormAndInfoContainer>
      <ContactForm>
        <ContactTitle>Tell your message</ContactTitle>
        <FormInput
          type='text'
          name='name'
          label='Your Name'
          required
        />
        <FormInput
          type='email'
          name='email'
          label='Your Email'
          required
        />
        <FormInput
          type='text'
          name='message'
          label='Type your Message'
          required
        />
        <CustomButton type='button'>
          Send
       </CustomButton>
      </ContactForm>
      <ContactInfoContainer>
        <ContactTitle>Support</ContactTitle>
        <ContactInfo>
          <strong>Call us at:</strong> <a href="tel:+91xxxxxxxxxx">+91xxxxxxxxxx</a> <br /> <br />
          <strong>Mail us at:</strong> help@aioclothing.com <br /> <br />
          <strong>Facebook: </strong> AIO-Clothing<br />
          <strong>Twitter: </strong> AIO-Clothing<br />
          <strong>Github: </strong> AIO-Clothing<br />
          <strong>Instagram: </strong> AIO-Clothing<br /> <br />
          <strong>Office Address:</strong> abc colony, xyz state and pqr country
        </ContactInfo>
      </ContactInfoContainer>
    </FormAndInfoContainer>
  </ContactPageContainer>
)

export default ContactPage;
