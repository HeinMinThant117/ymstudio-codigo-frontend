const PriceRow = ({ label, value }) => {
  return (
    <div className="flex justify-between items-center mb-1">
      <p className="text-sm">{label}</p>
      <p className="text-sm">{value}</p>
    </div>
  );
};

export default PriceRow;
