import React from 'react';
import { Link } from 'react-router-dom';

import { SecondContainer } from 'pages/Second/styled';

const Start: React.FC = () => {
  return (
    <SecondContainer>
      <span>second page/</span>
      <Link to="/">first page/</Link>
    </SecondContainer>
  );
};

export default Start;
