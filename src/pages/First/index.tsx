import React from 'react';
import { Link } from 'react-router-dom';

import { FirstContainer } from 'pages/First/styled';

const Start: React.FC = () => {
  return (
    <FirstContainer>
      <span>first page/</span>
      <Link to="/second">second page/</Link>
    </FirstContainer>
  );
};

export default Start;
