// import ContactMeLeft from "./ContactMeLeft";
import ContactMeRight from "./ContactMeRight";

const ContactMeMain = () => {
  return (
    <div
      id="contact"
      className="max-w-[700px] mx-auto items-center justify-center mt-[100px] px-4 "
    >
      <h2 className="text-6xl text-cyan mb-10 text-center">Contact Me</h2>
      <div className="flex justify-center items-center bg-brown p-8 rounded-2xl">
  <ContactMeRight /> 
</div>
    </div>
  );
};

export default ContactMeMain;
