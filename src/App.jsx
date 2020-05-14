import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';

createMuiTheme({
  palette: {
    primary: '#3f51b5',
    secondary: {
      main: '#ff3d00'
    }
  }
});

const App = () => {
  return (
    <div>
      <h1>Gender Equality Team-062</h1>
    </div>
  );
};

export default App;
