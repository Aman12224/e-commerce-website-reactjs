const SectionTitle = ({ text }) => {
  return (
    <div className="pb-5 border-b border-base-white">
      <div className="text-3xl font-medium tracking-wider capitalize">
        {text}
      </div>
    </div>
  );
};

export default SectionTitle;
