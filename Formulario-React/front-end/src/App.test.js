import React from 'react';
import ReactDOM from 'react-dom';
import Formulario from './Components/Formulario'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Formulario />, div);
  ReactDOM.unmountComponentAtNode(div);
});
