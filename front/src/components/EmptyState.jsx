

const EmptyState = ({ message = "No data available." }) => {
  return (
    <p className="text-center text-gray-500 py-10">
      {message}
    </p>
  );
};

export default EmptyState;
