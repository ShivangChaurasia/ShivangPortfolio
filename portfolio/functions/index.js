const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

// Read email credentials from environment variables (set in functions/.env)
const gmailEmail = process.env.GMAIL_EMAIL;
const gmailPassword = process.env.GMAIL_APP_PASSWORD;

const mailTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: gmailEmail,
        pass: gmailPassword,
    },
});

exports.sendContactEmail = functions.firestore
    .document("contacts/{docId}")
    .onCreate(async (snap, context) => {
        const contactMessage = snap.data();

        // Verify configuration
        if (!gmailEmail || !gmailPassword) {
            console.error("GMAIL_EMAIL or GMAIL_APP_PASSWORD unconfigured in environment vars.");
            return null;
        }

        const mailOptions = {
            from: `"Shivang's Portfolio" <${gmailEmail}>`,
            to: contactMessage.email,
        };

        mailOptions.subject = "Thank You for Contacting Me";
        mailOptions.text = `Hello ${contactMessage.name},\n\nThank you for reaching out through my portfolio website.\nI have received your message and will get back to you as soon as possible.\n\nBest regards,\nShivang\n\n--- Your Message ---\n${contactMessage.message}`;

        // Send a notification to the portfolio owner as well
        const ownerMailOptions = {
            from: `"Portfolio Contact Form" <${gmailEmail}>`,
            to: gmailEmail,  // Sending to yourself
            subject: `New Contact Message from ${contactMessage.name}`,
            text: `You have received a new message from your portfolio contact form.\n\nName: ${contactMessage.name}\nEmail: ${contactMessage.email}\nMessage:\n${contactMessage.message}`
        };

        try {
            await mailTransport.sendMail(mailOptions);
            console.log(`Thank you email sent to: ${contactMessage.email}`);
            await mailTransport.sendMail(ownerMailOptions);
            console.log(`Notification email sent to owner`);
            return null;
        } catch (error) {
            console.error("There was an error while sending the email:", error);
            return null;
        }
    });
