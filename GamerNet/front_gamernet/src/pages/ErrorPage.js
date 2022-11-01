import React, { Component } from 'react';

export class ErrorPage extends Component {
  static displayName = ErrorPage.name;

  render() {
    return (
      <div>
        <h1>Ошибка</h1>
        <h1>Код 404</h1>
      </div>
    );
  }
}

export default ErrorPage;