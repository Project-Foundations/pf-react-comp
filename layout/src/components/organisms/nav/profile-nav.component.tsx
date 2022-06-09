import { FC, useState, useEffect } from 'react';

export const ProfileNav: FC = (): JSX.Element => {
  const [urlImage, setUrlImage] = useState('');

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * (99 - 0 + 1)) + 0;
    setUrlImage(`https://randomuser.me/api/portraits/men/${randomNumber}.jpg`);
  }, []);

  return (
    <div className="relative">
      <div className="flex items-center">
        <img className="rounded-full h-10 border-2 border-alternative" src={urlImage} />
        <small className="ml-2">User</small>
      </div>
    </div>
  );
};
