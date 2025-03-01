import React from 'react';
import { Linkedin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Chairman = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="md:grid md:grid-cols-2">
        <div className="relative h-64 md:h-auto">
          <img 
            src="https://media.licdn.com/dms/image/v2/D4E03AQHO6O_g8LUZsw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1666715247443?e=1744848000&v=beta&t=Bd35HTdfGxlKSeR8ZHaZy_c2Nvv1ExqqwqU4emmDm24"
            alt="Mirčo Krsteski" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        
        <div className="p-8 md:p-12">
          <h3 className="text-2xl font-bold mb-2">Mirčo Krsteski</h3>
          <p className="text-secondary font-semibold mb-4">{t('chairman.title')}</p>
          <p className="text-gray-600 mb-6">
            {t('chairman.description')}
          </p>
          <div className="flex space-x-4 mb-8">
            <a href="#" className="text-gray-600 hover:text-secondary">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-secondary flex items-center justify-center">
              <img 
                src="https://i.ibb.co/rG5fL1vP/image-removebg-preview.png"
                alt="X (formerly Twitter)"
                className="h-6 w-6 invert"
              />
            </a>
          </div>
          <blockquote className="border-l-4 border-secondary pl-4 italic text-gray-700">
            {t('chairman.quote')}
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Chairman