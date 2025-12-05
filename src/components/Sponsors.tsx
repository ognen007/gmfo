import React from 'react';

const Sponsors = () => {
  const sponsors = [
    {
      id: 1,
      src: 'https://i.ibb.co/XrMm4LtL/c745402b-69f7-4062-8d56-cdd68ddd9a36.jpg',
      alt: 'Sponsor 1'
      alt: 'Sponsor 1'
    },
    {
      id: 2,
      src: 'https://i.ibb.co/wFD0sBV3/385c66e1-8a51-486c-a00b-201c19baab22.jpg',
      alt: 'Sponsor 2'
      alt: 'Sponsor 2'
    },
    {
      id: 3,
      src: 'https://i.ibb.co/G4SbFP2b/801cf295-8cf3-4173-b72b-08dc3b453cfe.jpg',
      alt: 'Sponsor 3'
      alt: 'Sponsor 3'
    },
    {
      id: 4,
      src: 'https://i.ibb.co/q3Cth95j/e3d34dce-f8e6-4486-91bf-754c4255a61a.jpg',
      alt: 'Sponsor 4'
      alt: 'Sponsor 4'
    },
    {
      id: 5,
      src: 'https://i.ibb.co/QvXt26bW/5cdda4b2-fdfb-47de-826a-6fd741df262f.jpg',
      alt: 'Sponsor 5'
      alt: 'Sponsor 5'
    }
  ];

  const duplicatedSponsors = [...sponsors, ...sponsors];

  return (
    <section className="sponsors-section">
      <div className="sponsors-container">
        <div className="sponsors-track">
          {duplicatedSponsors.map((sponsor, index) => (
            <div key={`${sponsor.id}-${index}`} className="sponsor-item">
              <img
                src={sponsor.src}
                alt={sponsor.alt}
                className="sponsor-logo"
              />
                src={sponsor.src}
                alt={sponsor.alt}
                className="sponsor-logo"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;