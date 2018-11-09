import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';

import Text from '../app/components/Text/Text';
import Button from '../app/components/Button/Button';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('Button', module)
  .add('Primary', () => (
    <Button primary onClick={action('clicked')}>
      Primary Button
    </Button>
  ))
  .add('Primary Small', () => (
    <Button primary small onClick={action('clicked')}>
      Primary--small Button
    </Button>
  ))
  .add('Primary Large', () => (
    <Button primary large onClick={action('clicked')}>
      Primary--large Button
    </Button>
  ))

  .add('Secondary', () => (
    <Button secondary onClick={action('clicked')}>
      Secondary Button
    </Button>
  ))
  .add('Secondary Small', () => (
    <Button secondary small onClick={action('clicked')}>
      Secondary--small Button
    </Button>
  ))
  .add('Secondary Large', () => (
    <Button secondary large onClick={action('clicked')}>
      Secondary--small Button
    </Button>
  ));

storiesOf('Text', module)
  .add('Display1', () => (
    <Text display1 component="h1">
      Display 1
    </Text>
  ))
  .add('Display2', () => (
    <Text display2 component="h1">
      Display 2
    </Text>
  ))
  .add('Display3', () => (
    <Text display3 component="h1">
      Display 3
    </Text>
  ))
  .add('Heading1', () => (
    <Text heading1 component="h1">
      Heading 1
    </Text>
  ))
  .add('Heading2', () => (
    <Text heading2 component="h2">
      Heading 2
    </Text>
  ))
  .add('Heading3', () => (
    <Text heading3 component="h2">
      Heading 3
    </Text>
  ))
  .add('Paragraph Large', () => <Text large>Paragraph Large</Text>)
  .add('Paragraph Normal', () => <Text normal>Paragraph Normal</Text>)
  .add('Paragraph Small', () => <Text small>Paragraph Small</Text>)

  .add('Message', () => <Text message>Message</Text>)
  .add('Label', () => <Text label>Label</Text>)
  .add('Link', () => (
    <Text large>
      <Text link>Link</Text>
    </Text>
  ))

  .add('Caption Large', () => (
    <Text large>
      <Text captionLarge>Caption Large</Text>
    </Text>
  ))
  .add('Caption Normal', () => (
    <Text large>
      <Text captionNormal>Caption Normal</Text>
    </Text>
  ))
  .add('Caption Small', () => (
    <Text large>
      <Text captionSmall>Caption Small</Text>
    </Text>
  ));
