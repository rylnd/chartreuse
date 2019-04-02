import { configure } from '@storybook/react';

const storyContext = require.context('../src/', true, /.story.tsx$/);

const loadStories = () => storyContext.keys().forEach(storyContext);

configure(loadStories, module);
