# EmailJS Setup Instructions

To enable automatic email notifications when appointments are booked, you need to set up an EmailJS account and configure the service. Follow these steps:

## 1. Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up Free"
3. Create an account using your email

## 2. Set Up Your Email Service

1. After logging in, go to the Dashboard
2. Click on "Email Services" in the left sidebar
3. Click "Add New Service"
4. Choose your email provider (Gmail, Outlook, etc.)
5. Follow the instructions to connect your email account
6. Note the **Service ID** for later use

## 3. Create an Email Template

1. Go to "Email Templates" in the left sidebar
2. Click "Create New Template"
3. Give your template a name (e.g., "Appointment Notification")
4. Replace the template content with the HTML from `src/email-template.html` in this project
5. Customize the template as needed
6. Note the **Template ID** for later use

## 4. Get Your Public Key

1. Go to "Account" in the left sidebar
2. Under "API Keys", copy your **Public Key**

## 5. Update the Application Code

Replace the placeholder values in the code with your actual EmailJS credentials:

### In `src/main.tsx`:
```javascript
emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual EmailJS public key
```

### In `src/pages/Booking.tsx`:
```javascript
await emailjs.send(
  "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
  "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
  templateParams,
  "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
);
```

## 6. Test the Integration

1. Save all changes
2. Run your application
3. Go to the booking page
4. Complete a test booking
5. Check your email to verify the notification was sent

## Security Note

For production applications, it's recommended to store these keys in environment variables rather than hardcoding them in your source files.