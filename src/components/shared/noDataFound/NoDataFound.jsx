const NoDataFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-5xl font-bold text-gray-800">
          Oops! No data found
        </h1>
        <p className="text-2xl text-gray-600 mt-4">
          It looks like we couldn't find any data for you.
        </p>
        <button
          type="button"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-8"
        >
          Try again
        </button>
      </div>
    </div>
  );
};

export default NoDataFound;

