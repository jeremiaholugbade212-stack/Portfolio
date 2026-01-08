import emailjs from "@emailjs/browser";

const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

function initEmailJs() {
  if (EMAILJS_PUBLIC_KEY) {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }
}

export async function sendMailWithForm(formElement) {
  initEmailJs();

  if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
    return { success: false, error: "EmailJS not configured" };
  }

  if (!formElement) {
    return { success: false, error: "Form element is missing" };
  }

  try {
    const res = await emailjs.sendForm(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      formElement
    );

    return { success: res?.status === 200, res };
  } catch (err) {
    return { success: false, error: err };
  }
}

export async function sendMailWithParams(templateParams = {}) {
  initEmailJs();

  if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
    return { success: false, error: "EmailJS not configured" };
  }

  try {
    const res = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );
    return { success: res?.status === 200, res };
  } catch (err) {
    return { success: false, error: err };
  }
}

export default sendMailWithForm;
