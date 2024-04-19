import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const formData = await request.formData();

  //   for (const [key, value] of formData.entries()) {
  //     if (formDataJSON.hasOwnProperty(key)) {
  //       if (!Array.isArray(formDataJSON[key])) {
  //         formDataJSON[key] = [formDataJSON[key]];
  //       }
  //       formDataJSON[key].push(value);
  //     } else {
  //       formDataJSON[key] = value;
  //     }
  //   }

  let emailBody = "";

  // Iterate over form data entries
  for (const [key, value] of formData.entries()) {
    // Append key-value pairs to the email body
    emailBody += `${key}: ${value}\n`;
  }

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "vermaji123089@gmail.com",
      pass: "jmxzdgjsvgueuzqs",
    },
  });
  try {
    let info = await transporter.sendMail({
      from: "<no-reply@vermaji123089@gmail.com>",
      to: "vermaji123089@gmail.com", // yaha pe yo email aygi jse bhejna hai
      subject: "Test Subject",
      //   html: data.html,// agar htm use kar raha hai to html me bhejna ha
      text: emailBody,
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    return NextResponse.json({ message: "Mail has been sent sucessfully" });
  } catch (error) {
    throw new Error(error.message);
  }
}
