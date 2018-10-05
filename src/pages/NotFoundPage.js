import React from 'react';
import { Link } from 'react-router-dom';

import './NotFoundPage.css';

class NotFoundPage extends React.Component {
  render() {
    return (
      <main className="not-found-page">
        <h1>Página não encontrada</h1>
        <p>Voltar para <Link to="/">página inicial</Link></p>
      </main>
    );
  }
}

export default NotFoundPage;
