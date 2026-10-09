import { LangSwitchContext } from '@/contexts/LangSwitchContext';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';

export default function Profile() {
  const [profileTxt, setProfileTxt] = useState({
    details: [],
    aboutMe: '',
    title: '',
    detailsTitle: '',
    aboutMeTitle: '',
  });
  const { language } = useContext(LangSwitchContext);
  useEffect(() => {
    axios
      .get(`/data/${language}/profile.json`)
      .then((response) => {
        setProfileTxt(response.data);
      })
      .catch((error) => console.error(error));
  }, [language]);

  return (
    <section className="flex flex-col gap-4 py-8 border-b border-dark-tertiary lg:gap-8 lg:pt-15.5 lg:pb-15.5 ">
      <h2 className="text-3xl text-dark-heading font-inter font-semibold lg:text-5xl">
        {profileTxt.title}
      </h2>
      <div className="flex flex-col gap-4 lg:flex-row-reverse lg:justify-end lg:gap-24">
        <div className="flex flex-col gap-4 lg:gap-5">
          <h3 className="text-dark-subheading text-xl font-inter font-medium lg:text-3xl">
            {profileTxt.aboutMeTitle}
          </h3>
          <p className="lg:w-xl lg:text-lg font-inter whitespace-pre-line">
            {profileTxt.aboutMe}
          </p>
        </div>
        <div className="flex flex-col gap-2 lg:gap-5">
          <h3 className="text-dark-subheading text-xl font-inter font-medium lg:text-3xl">
            {profileTxt.detailsTitle}
          </h3>
          <div>
            {profileTxt.details.map((detail) => (
              <div
                key={detail.id}
                className="grid grid-cols-2 lg:pb-2 lg:text-lg font-inter"
              >
                <span className="font-semibold">{detail.label}</span>
                <span className="lg:w-48">{detail.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
