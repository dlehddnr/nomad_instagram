import { adjectives, nouns } from "./words";
import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";
import jwt from "jsonwebtoken";

// #3-2
export const generateSecret = () => {
  const randomNumber = Math.floor(Math.random() * adjectives.length);
  return `${adjectives[randomNumber]} ${nouns[randomNumber]}`;
};

// #3-3
const sendMail = email => {
  const options = {
    auth: {
      api_user: process.env.SENDGRID_USERNAME,
      api_key: process.env.SENDGRID_PASSWORD
    }
  };
  const client = nodemailer.createTransport(sgTransport(options));
  return client.sendMail(email);
};

export const sendSecretMail = (address, secret) => {
  const email = {
    from: "lee@instaclone.com",
    to: address,
    subject: "Login Secret For InstaClone⭐️",
    html: `Hello Your Login Secret is <strong>${secret}</strong>.<br/> Copy paste in your app/web`
  };
  return sendMail(email);
};

// #3-5
export const generateToken = id => jwt.sign({ id }, process.env.JWT_SECRET);
