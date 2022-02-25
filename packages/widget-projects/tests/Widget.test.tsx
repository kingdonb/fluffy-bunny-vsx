import React from 'react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';
import { GlobalProvider } from '@vscode-marquee/utils';

import Widget from '../src';
import { WorkspaceProvider } from '../src/Context';

declare const window: {
  vscode: any
};

beforeEach(() => {
  window.vscode = { postMessage: jest.fn() };
});

test('renders component correctly', async () => {
  const { getByText, getByLabelText, getByPlaceholderText, queryByPlaceholderText } = render(
    <GlobalProvider>
      <WorkspaceProvider>
        <Widget.component />
      </WorkspaceProvider>
    </GlobalProvider>
  );
  expect(getByText('example')).toBeTruthy();
  expect(queryByPlaceholderText('Type here...')).not.toBeTruthy();
  act(() => { userEvent.click(getByLabelText('Open Filter Search')); });
  act(() => { userEvent.type(getByPlaceholderText('Type here...'), 'f'); });
  act(() => { userEvent.type(getByPlaceholderText('Type here...'), 'o'); });
  act(() => { userEvent.type(getByPlaceholderText('Type here...'), 'o'); });
  act(() => { userEvent.type(getByPlaceholderText('Type here...'), '{enter}'); });
  act(() => { userEvent.click(getByText('Projects')); });
  act(() => { userEvent.click(getByLabelText('Open Filter Search')); });

  expect(window.vscode.postMessage).toBeCalledTimes(0);
  act(() => { userEvent.click(getByLabelText('Open Folder')); });
  expect(window.vscode.postMessage).toBeCalledTimes(1);
  expect(window.vscode.postMessage.mock.calls).toMatchSnapshot();
  window.vscode.postMessage.mockClear();

  act(() => { userEvent.click(getByLabelText('Open Recent')); });
  expect(window.vscode.postMessage).toBeCalledTimes(1);
  expect(window.vscode.postMessage.mock.calls).toMatchSnapshot();
});