import emailjs from "@emailjs/browser";

const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

function initEmailJs() {
  if (EMAILJS_PUBLIC_KEY) {
    try {
      emailjs.init(EMAILJS_PUBLIC_KEY);
    } catch (err) {
      // initialization error
      console.error("EmailJS init error:", err);
    }
  }
}

export async function sendMailWithForm(formElement) {
  initEmailJs();

  if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
    return { success: false, error: "" };
  }

  if (!formElement) {
    return { success: false, error: "Form element is missing" };
  }

  try {
    console.debug("sendMailWithForm: sending", {
      service: EMAILJS_SERVICE_ID,
      template: EMAILJS_TEMPLATE_ID,
    });

    const res = await emailjs.sendForm(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      formElement,
      EMAILJS_PUBLIC_KEY
    );

    console.debug("sendMailWithForm: response", res);
    return { success: res?.status === 200, res };
  } catch (err) {
    console.error("sendMailWithForm error:", err);
    const errorMessage = err?.text || err?.message || String(err);
    return { success: false, error: errorMessage };
  }
}

export async function sendMailWithParams(templateParams = {}) {
  initEmailJs();

  if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
    return { success: false, error: "" };
  }

  try {
    console.debug("sendMailWithParams: sending", { service: EMAILJS_SERVICE_ID, template: EMAILJS_TEMPLATE_ID });
    const res = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );
    console.debug("sendMailWithParams: response", res);
    return { success: res?.status === 200, res };
  } catch (err) {
    console.error("sendMailWithParams error:", err);
    const errorMessage = err?.text || err?.message || String(err);
    return { success: false, error: errorMessage };
  }
}

export default sendMailWithForm;
