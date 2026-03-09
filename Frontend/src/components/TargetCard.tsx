const TargetCard = () => {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">

      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Monthly Target
      </h2>

      <div className="flex items-center justify-center h-48">

        <div className="text-center">

          <h1 className="text-4xl font-bold text-blue-600">
            75%
          </h1>

          <p className="text-gray-500 text-sm mt-2">
            Target Achieved
          </p>

        </div>

      </div>

    </div>
  );
};

export default TargetCard;