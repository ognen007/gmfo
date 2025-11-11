import React from 'react';

const Sponsors = () => {
  const sponsors = [
    { id: 1, name: 'Sponsor 1' },
    { id: 2, name: 'Sponsor 2' },
    { id: 3, name: 'Sponsor 3' },
    { id: 4, name: 'Sponsor 4' },
    { id: 5, name: 'Sponsor 5' },
    { id: 6, name: 'Sponsor 6' },
  ];

  return (
    <section className="w-full bg-gray-50 border-y border-gray-200 py-4 overflow-hidden">
      <div className="relative">
        <div className="flex animate-scroll">
          {[...sponsors, ...sponsors].map((sponsor, index) => (
            <div
              key={`${sponsor.id}-${index}`}
              className="flex-shrink-0 mx-4 w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center"
            >
              <span className="text-gray-400 text-sm font-medium">
                {sponsor.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;