import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
export const initEmailJS = () => {
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  
  if (!publicKey) {
    console.warn('EmailJS public key not configured');
    return false;
  }
  
  emailjs.init({
    publicKey: publicKey,
  });
  
  return true;
};

// Configuration for email templates
export const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  waitlistTemplateId: import.meta.env.VITE_EMAILJS_WAITLIST_TEMPLATE_ID,
  contactTemplateId: import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
};

// Send waitlist subscription email
export const sendWaitlistEmail = async (firstName: string, email: string) => {
  try {
    const response = await emailjs.send(
      emailConfig.serviceId,
      emailConfig.waitlistTemplateId,
      {
        to_email: email,
        from_name: 'NoteNest Team',
        user_name: firstName,
        user_email: email,
        reply_to: email,
      }
    );
    return response;
  } catch (error) {
    console.error('Failed to send waitlist email:', error);
    throw error;
  }
};

// Send contact form message email
export const sendContactEmail = async (
  firstName: string,
  lastName: string,
  email: string,
  message: string
) => {
  try {
    const response = await emailjs.send(
      emailConfig.serviceId,
      emailConfig.contactTemplateId,
      {
        to_email: email,
        from_name: 'NoteNest Team',
        user_name: `${firstName} ${lastName}`,
        user_email: email,
        user_message: message,
        reply_to: email,
      }
    );
    return response;
  } catch (error) {
    console.error('Failed to send contact email:', error);
    throw error;
  }
};
