const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

/**
 * Cloud Function that processes contact form submissions
 * @type {functions.CloudFunction<admin.firestore.DocumentSnapshot>}
 */
exports.processContactForm = functions.firestore
  .document("contacts/{contactId}")
  .onCreate(async (snapshot, context) => {
    try {
      const contactData = snapshot.data();
      const mailConfig = functions.config().email;

      // Configure email transporter
      const transporter = nodemailer.createTransport({
        host: "mail.bytevance.com",
        port: 587,
        secure: false,
        auth: {
          user: mailConfig.sender,
          pass: mailConfig.password,
        },
        tls: {
          rejectUnauthorized: false,
        },
      });

      // Prepare emails
      const adminEmail = {
        from: `"ByteVance Contact Form" <${mailConfig.sender}>`,
        to: mailConfig.receiver,
        subject: `New Contact: ${contactData.subject}`,
        html: `
            <h2>New Contact Submission</h2>
            <p><strong>Name:</strong> ${contactData.name}</p>
            <p><strong>Email:</strong> ${contactData.email}</p>
            <p><strong>Phone:</strong> ${contactData.phone || "Not provided"}</p>
            <p><strong>Message:</strong></p>
            <p>${contactData.message}</p>
            <hr>
            <p>Submitted: ${new Date().toLocaleString()}</p>
            <p>Contact ID: ${context.params.contactId}</p>
          `,
      };

      const userEmail = {
        from: `"ByteVance" <${mailConfig.sender}>`,
        to: contactData.email,
        subject: "We've received your message",
        html: `
            <h2>Thank you for contacting ByteVance</h2>
            <p>We've received your message and will respond within 24-48 hours.</p>
            <p><strong>Your message:</strong></p>
            <p>${contactData.message}</p>
          `,
      };

      // Send emails
      await transporter.sendMail(adminEmail);
      await transporter.sendMail(userEmail);

      // Update document status
      return snapshot.ref.update({
        emailSent: true,
        emailSentAt: admin.firestore.FieldValue.serverTimestamp(),
        status: "processed",
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      return snapshot.ref.update({
        error: error.message,
        status: "failed",
      });
    }
  });
