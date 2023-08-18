import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.scss';
import TodoApp from './components/todo-app';

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<TodoApp />);
