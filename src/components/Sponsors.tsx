import React from 'react';

const Sponsors = () => {
  const sponsors = [
    { id: 1, name: 'Partner 1' },
    { id: 2, name: 'Partner 2' },
    { id: 3, name: 'Partner 3' },
    { id: 4, name: 'Partner 4' },
    { id: 5, name: 'Partner 5' },
    { id: 6, name: 'Partner 6' },
  ];

  return (
    <section className="w-full bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 border-y border-primary/10 py-6 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div className="relative z-10">
        <div className="flex animate-scroll">
          {[...sponsors, ...sponsors].map((sponsor, index) => (
            <div
              key={`${sponsor.id}-${index}`}
              className="flex-shrink-0 mx-6 w-36 h-20 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-primary/20 flex items-center justify-center hover:shadow-xl hover:scale-105 transition-all duration-300 group"
            >
              <span className="text-primary/60 text-sm font-semibold group-hover:text-secondary transition-colors duration-300">
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