import domready from 'domready';
import React from 'react';
import Main from './components/main.jsx';

domready(() => {
  React.render(
    <Main />,
    document.body
  );
});
