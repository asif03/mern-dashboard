import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "23292942c340af",
    pass: "5df6521e8a3819",
  },
});

export const sendOtp = async (email, otp) => {
  // Email options
  let mailOptions = {
    from: "asif033045@gmail.com",
    to: email,
    subject: "OTP for verification",
    text: `Your OTP is: ${otp}. This OTP will expire in 10 minutes.`,
  };

  // Send email
  try {
    const res = await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "OTP sent successfully" });
  } catch (error) {
    console.log(error);
  }

  /* await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      //console.log("Error occurred:", error);
      return res.status(500).json({ message: "Error sending email" });
    } else {
      //console.log("OTP sent:", info.response);
      return res.status(200).json({ message: "OTP sent successfully" });
    }
  });*/
};
