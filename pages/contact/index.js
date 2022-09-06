import Head from "next/head";
import { Fragment } from "react";
import ContactForm from "../../components/Contact/ContactForm";

const Contact = () => {
  return (
    <Fragment>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Send messages to me" />
      </Head>
      <ContactForm />
    </Fragment>
  );
};
export default Contact;
