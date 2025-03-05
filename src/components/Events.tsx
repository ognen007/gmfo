import React from 'react';
import { Linkedin, Calendar, BookOpen, GraduationCap, Facebook, Instagram, Youtube } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Events = () => {
  const { t } = useLanguage();

  return (
    <section id="endeavors" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-playfair">{t('events.title')}</h2>
          <p className="text-xl text-gray-600">
            {t('events.subtitle')}
          </p>
        </div>

        <div className="text-gray-600 max-w-3xl mx-auto mb-16 text-center text-base">
          <p>
            {t('events.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16 relative">
          <div className="bg-white rounded-xl overflow-hidden shadow-sm transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <img 
              src="https://media.istockphoto.com/id/564585966/photo/alexander-statue-in-skopje-center.jpg?s=612x612&w=0&k=20&c=-T4M29j_Ia0q_AOWyaacWrI27sPcKym7lOCcmWQ3YwE="
              alt="Alexander the Great Statue"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 relative">
              <div className="absolute -top-8 left-6 bg-secondary p-3 rounded-lg shadow-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary mt-4 font-playfair">{t('heritage.title')}</h3>
              <p className="text-gray-600 mb-4">{t('heritage.description')}</p>
              <a href="#" className="text-secondary font-semibold hover:opacity-90 inline-flex items-center">
                {t('learn.more')}
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-sm transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <img 
              src="https://wallpapercave.com/wp/wp3342855.jpg"
              alt="Traditional Crafts"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 relative">
              <div className="absolute -top-8 left-6 bg-secondary p-3 rounded-lg shadow-lg">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary mt-4 font-playfair">{t('workshops.title')}</h3>
              <p className="text-gray-600 mb-4">{t('workshops.description')}</p>
              <a href="#" className="text-secondary font-semibold hover:opacity-90 inline-flex items-center">
                {t('learn.more')}
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-sm transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <img 
              src="https://scontent-dus1-1.xx.fbcdn.net/v/t39.30808-6/476872400_1052034120284524_749989946685716973_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=EMPmjKAv3VgQ7kNvgEROVU6&_nc_oc=Adip2npzZuDC90bynUGzoy97x5Ttqn34rw9Zy0CESENYTqe8V-jpnLSBKphO5xclp6o&_nc_zt=23&_nc_ht=scontent-dus1-1.xx&_nc_gid=AO9d8RhQ9Fo3sGGVhQWWnA3&oh=00_AYBySuGf7FMDMZyBVeWhJXOaJVjDIbs_5-zMZIRmTjZoXw&oe=67CA4642"
              alt="Educational Programs"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 relative">
              <div className="absolute -top-8 left-6 bg-secondary p-3 rounded-lg shadow-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary mt-4 font-playfair">{t('education.title')}</h3>
              <p className="text-gray-600 mb-4">{t('education.description')}</p>
              <a href="#" className="text-secondary font-semibold hover:opacity-90 inline-flex items-center">
                {t('learn.more')}
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl shadow-lg p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-gray-900 font-playfair">{t('stay.tuned')}</h3>
                <p className="text-gray-600 mb-8 text-lg">
                  {t('stay.tuned.description')}
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <a href="#" className="bg-black/30 hover:bg-black/50 p-3 rounded-full transition-all transform hover:scale-110">
                    <Linkedin className="h-6 w-6 text-black" />
                  </a>
                  <a href="#" className="bg-black/30 hover:bg-black/50 p-3 rounded-full transition-all transform hover:scale-110 flex items-center justify-center">
                    <img 
                      src="https://i.ibb.co/rG5fL1vP/image-removebg-preview.png"
                      alt="X (formerly Twitter)"
                      className="h-6 w-6 invert"
                    />
                  </a>
                  <a href="#" className="bg-black/30 hover:bg-black/50 p-3 rounded-full transition-all transform hover:scale-110">
                    <Facebook className="h-6 w-6 text-black" />
                  </a>
                  <a href="#" className="bg-black/30 hover:bg-black/50 p-3 rounded-full transition-all transform hover:scale-110">
                    <Instagram className="h-6 w-6 text-black" />
                  </a>
                  <a href="#" className="bg-black/30 hover:bg-black/50 p-3 rounded-full transition-all transform hover:scale-110">
                    <Youtube className="h-6 w-6 text-black" />
                  </a>
                </div>
              </div>
              
              <div className="space-y-6">
                <h4 className="text-2xl font-semibold text-gray-900 mb-6">{t('coming.soon')}</h4>
                <div className="space-y-6">
                  <div className="bg-gray-100 p-6 rounded-xl hover:bg-gray-200 transition-all cursor-pointer group">
                    <h5 className="text-lg font-semibold mb-2 text-gray-900">{t('get.involved')}</h5>
                    <p className="text-gray-600">{t('get.involved.description')}</p>
                  </div>
                  <div className="bg-gray-100 p-6 rounded-xl hover:bg-gray-200 transition-all cursor-pointer group">
                    <h5 className="text-lg font-semibold mb-2 text-gray-900">{t('project.updates')}</h5>
                    <p className="text-gray-600">{t('project.updates.description')}</p>
                  </div>
                  <div className="bg-gray-100 p-6 rounded-xl hover:bg-gray-200 transition-all cursor-pointer group">
                    <h5 className="text-lg font-semibold mb-2 text-gray-900">{t('event.highlights')}</h5>
                    <p className="text-gray-600">{t('event.highlights.description')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
