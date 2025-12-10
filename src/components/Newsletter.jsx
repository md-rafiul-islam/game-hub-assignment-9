import React from "react";

const Newsletter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  };

  return (
    <div className="bg-[#0d0f17] text-white py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-3">Join Our Newsletter</h2>
        <p className="text-gray-400 mb-8">
          Subscribe to get the latest updates, new games, and exclusive offers.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:flex-1 px-5 py-3 rounded-xl bg-[#1a1f2e] 
                       text-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />

          <button
            type="submit"
            className="bg-[#d5ff3f] text-black font-semibold px-8 py-3 rounded-xl 
                       hover:bg-[#c8f539] transition-all duration-300"
          >
            Subscribe
          </button>
        </form>

        <p className="text-gray-500 text-sm mt-4">
          We care about your privacy. No spam ever.
        </p>
      </div>
    </div>
  );
};

export default Newsletter;
