import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";

const ContactMeRight = () => {
  return (
   <div className="flex flex-col items-center justify-center">
  <img
    src="../../public/images/email-image.png"
    alt="email image"
    className="max-w-[300px]"
  /> 
  <ContactInfo className="mt-[5px]" /> 
  <div className="h-[5px]"></div>


  <ContactSocial className="mt-[5px] mr-[2px]" />

</div>
  );
};

export default ContactMeRight;
