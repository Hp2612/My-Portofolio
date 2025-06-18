const SingleContactSocial = ({ Icon, link }) => {
  return (
    <div className="text-4xl h-12 w-17 border border-orange text-orange rounded-full p-3 flex items-center justify-center ">
      <a href={link} className="cursor-pointer">
        <Icon />
      </a>
    </div>
  );
};

export default SingleContactSocial;
