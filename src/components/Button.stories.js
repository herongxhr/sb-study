import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Button, Welcome } from '@storybook/react/demo';
//storiesOf()方法的第一参数是component的名称，第二参数是模块对象
//可以链式调用它的add()方法来为story添加分类，这些分类用来展示
//组件的不同形态
//links组件的linkTo方法
storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);
storiesOf('Button', module)
  .addDecorator(story => <div style={{textAlign: 'center'}}>{story()}</div>)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));