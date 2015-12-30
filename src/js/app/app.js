import React from 'react';
import Button from 'src/js/app/components/atoms/button';

export default class App extends React.Component {
  render() {
    return (
      <header>
        <h1>React + JSPM Seed Project</h1>

        <Button
          buttonText="Hi! I am a basic button" />

        <Button
          buttonText="Alright! I'm another button" />
      </header>
    );
  }
};
