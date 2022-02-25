import fs from 'fs';
import { TextDecoder, TextEncoder } from 'util';
import '@testing-library/jest-dom/extend-expect';

const pkg = JSON.parse(fs.readFileSync('./package.json').toString());
const vscode = {
  setState: jest.fn(),
  getState: jest.fn().mockReturnValue({
    globalScope: true
  })
};
// @ts-expect-error
window.vscode = vscode;

// @ts-expect-error
window.acquireVsCodeApi = jest.fn().mockReturnValue(vscode);

// @ts-expect-error
global.INSTRUMENTATION_KEY = 'INSTRUMENTATION_KEY_123';
// @ts-expect-error
global.__requireContext = jest.fn();
// @ts-expect-error
global.PACKAGE_JSON = pkg;
// @ts-expect-error
global.BACKEND_BASE_URL = 'http://BACKEND_BASE_URL.com';
// @ts-expect-error
global.BACKEND_GEO_URL = 'http://BACKEND_GEO_URL.com';
// @ts-expect-error
global.BACKEND_FWDGEO_URL = 'http://BACKEND_FWDGEO_URL.com';

// @ts-expect-error
global.TextDecoder = TextDecoder;
global.TextEncoder = TextEncoder;

const styles = {
  '--vscode-font-size': '13px',
  '--vscode-icon-foreground': '#c5c5c5',
  '--vscode-foreground': '#cccccc',
  '--vscode-editor-background': '#1e1e1e',
  '--vscode-sideBar-background': '#252526',
  '--vscode-button-background': ' #0e639c',
  '--vscode-button-hoverBackground': '#1177bb',
  '--vscode-button-foreground': '#ffffff',
  '--vscode-editorMarkerNavigationError-background': '#f14c4c',
  '--vscode-editor-selectionBackground': '#264f78',
  '--vscode-editor-hoverHighlightBackground': 'rgba(38, 79, 120, 0.25)',
  '--vscode-editor-inactiveSelectionBackground': '#3a3d41',
  '--vscode-font-family': '-apple-system, BlinkMacSystemFont, sans-serif',
  '--vscode-font-weight': 'normal',
};

for (const [prop, val] of Object.entries(styles)) {
  document.documentElement.style.setProperty(prop, val);
}

// @ts-ignore
window.activeWorkspace = {
  id: "012c54122a42128fc1b4ec29a7b5609995f41a5c",
  name: "example",
  type: "folder",
  path: "/some/path/to/a/project"
};

// @ts-ignore
window.marqueeThirdPartyWidgets = 0;
// @ts-ignore
window.marqueeBackendBaseUrl = 'https://us-central1-marquee-backend-dev.cloudfunctions.net';
// @ts-ignore
window.marqueeBackendGeoUrl = 'https://us-central1-marquee-backend-dev.cloudfunctions.net/getGoogleGeolocation';
// @ts-ignore
window.marqueeBackendFwdGeoUrl = 'https://us-central1-marquee-backend-dev.cloudfunctions.net/lookupGoogleLocation';
// @ts-ignore
window.marqueeStateConfiguration = {
  "@vscode-marquee/utils":{
    configuration: {
      background: "4",
      name: "name here...",
      proxy: "",
      fontSize: 5,
      colorScheme: {}
    },
    state: {
      globalScope: true
    }
  },
  "@vscode-marquee/gui": {
    configuration: {
      modes: pkg.contributes.configuration[0].properties['marquee.configuration.modes'].default,
      proxy: "",
      fontSize: 5,
      colorScheme: {},
      name: "name here...",
      background: "4",
      launchOnStartup: true,
      workspaceLaunch: false
    },
    state: {
      modeName: "default",
      prevMode: null
    }
  },
  "@vscode-marquee/welcome-widget": {
    configuration: {},
    state: {
      tricks: [
        {
          id: "-MuKr7KhHYODGehy0G0B",
          active: true,
          content: "Hey there 👋 you are using a pre-release version of Marquee. Thanks for testing out the extension and make sure to leave us feedback ☺️",
          createdAt: 1643191764483,
          notify: true,
          title: "Edge Release Note",
          votes: {
            upvote: 3
          }
        },
        {
          id: "-MuqDnTq4qlu6yE5plx-",
          active: true,
          content: "bar",
          createdAt: 1643734841432,
          notify: true,
          title: "foo",
          votes: {
            upvote: 1
          }
        }
      ],
      read: [],
      liked: [],
      error: null
    }
  },
  "@vscode-marquee/projects-widget": {
    configuration: {
      workspaceFilter: "",
      workspaceSortOrder: "usage",
      openProjectInNewWindow: false
    },
    state: {
      workspaces: [
        {
          id: "012c54122a42128fc1b4ec29a7b5609995f41a5c",
          name: "example",
          type: "folder",
          path: "/Users/christianbromann/Sites/WebdriverIO/example"
        }
      ]
    }
  },
  "@vscode-marquee/github-widget": {
    configuration: {
      since: "Weekly",
      language: "",
      spoken: "",
      trendFilter: ""
    },
    state: {}
  },
  "@vscode-marquee/weather-widget": {
    configuration: {
      city: null,
      scale: "Fahrenheit"
    },
    state: {}
  },
  "@vscode-marquee/todo-widget": {
    configuration: {
      todoFilter: "",
      hide: false,
      showArchived: false,
      autoDetect: true
    },
    state: {
      todos: [{
        body: "some todo",
        checked: true,
        id: "foobar",
        archived: false,
        workspaceId: 'test123',
        tags: []
      }]
    }
  },
  "@vscode-marquee/notes-widget": {
    configuration: {},
    state: {
      notes: [
        {
          id: "zs5jwheq",
          archived: false,
          createdAt: 1644346731590,
          origin: null,
          workspaceId: null
        }
      ],
      noteFilter: "",
      noteSelected: "zs5jwheq",
      noteSplitter: 80
    }
  },
  "@vscode-marquee/snippets-widget": {
    configuration: {},
    state: {
      snippets: [
        {
          id: "wtkr48c1",
          archived: false,
          createdAt: 1644346734799,
          workspaceId: null
        },
        {
          title: "sasdasa",
          body: "dsadsan",
          text: "dsadsan",
          id: "vv09kgbd",
          archived: false,
          createdAt: 1644346392754,
          origin: null,
          workspaceId: "012c54122a42128fc1b4ec29a7b5609995f41a5c"
        },
        {
          title: "sasdasa",
          body: "dsadsan",
          text: "dsadsan",
          id: "b1fpl8s8",
          archived: false,
          createdAt: 1644346333920,
          origin: null,
          workspaceId: "012c54122a42128fc1b4ec29a7b5609995f41a5c"
        }
      ],
      snippetFilter: "",
      snippetSelected: "wtkr48c1",
      snippetSplitter: 80
    }
  }
};