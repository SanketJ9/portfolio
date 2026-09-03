"use server";

export const sendEmail = async (formData: FormData) => {
  const name = formData.get('name');
  const email = formData.get('email');
  const subject = formData.get('subject');
  const message = formData.get('message');

  if (!name || !email || !subject || !message) {
    return { error: 'All fields are required.' };
  }

  try {
    // A mock action for now. You can plug in Resend or Nodemailer later!
    console.log("Mock Email Sent!");
    console.log(`From: ${name} <${email}>`);
    
    // Simulating a network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return { success: true };
  } catch (error: unknown) {
    console.error("Error sending email:", error);
    return { error: 'Failed to send the email. Please try again later.' };
  }
};