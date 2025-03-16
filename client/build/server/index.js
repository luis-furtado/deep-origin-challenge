import { jsx, jsxs } from 'react/jsx-runtime';
import { PassThrough } from 'node:stream';
import { createReadableStreamFromReadable } from '@react-router/node';
import {
  ServerRouter,
  useMatches,
  useActionData,
  useLoaderData,
  useParams,
  useRouteError,
  Meta,
  Links,
  ScrollRestoration,
  Scripts,
  Outlet,
  isRouteErrorResponse,
} from 'react-router';
import { isbot } from 'isbot';
import { renderToPipeableStream } from 'react-dom/server';
import { createElement, useState } from 'react';
import { Check, Copy } from 'lucide-react';
import axios from 'axios';
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get('user-agent');
    let readyOption =
      (userAgent && isbot(userAgent)) || routerContext.isSpaMode ? 'onAllReady' : 'onShellReady';
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set('Content-Type', 'text/html');
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode,
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        },
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(
  /* @__PURE__ */ Object.defineProperty(
    {
      __proto__: null,
      default: handleRequest,
      streamTimeout,
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
);
function withComponentProps(Component) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      matches: useMatches(),
    };
    return createElement(Component, props);
  };
}
function withErrorBoundaryProps(ErrorBoundary3) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      error: useRouteError(),
    };
    return createElement(ErrorBoundary3, props);
  };
}
const links = () => [
  {
    rel: 'preconnect',
    href: 'https://fonts.googleapis.com',
  },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  },
];
function Layout({ children }) {
  return /* @__PURE__ */ jsxs('html', {
    lang: 'en',
    children: [
      /* @__PURE__ */ jsxs('head', {
        children: [
          /* @__PURE__ */ jsx('meta', {
            charSet: 'utf-8',
          }),
          /* @__PURE__ */ jsx('meta', {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1',
          }),
          /* @__PURE__ */ jsx(Meta, {}),
          /* @__PURE__ */ jsx(Links, {}),
        ],
      }),
      /* @__PURE__ */ jsxs('body', {
        children: [
          children,
          /* @__PURE__ */ jsx(ScrollRestoration, {}),
          /* @__PURE__ */ jsx(Scripts, {}),
        ],
      }),
    ],
  });
}
const root = withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = withErrorBoundaryProps(function ErrorBoundary2({ error }) {
  let message = 'Oops!';
  let details = 'An unexpected error occurred.';
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error';
    details =
      error.status === 404 ? 'The requested page could not be found.' : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs('main', {
    className: 'pt-16 p-4 container mx-auto',
    children: [
      /* @__PURE__ */ jsx('h1', {
        children: message,
      }),
      /* @__PURE__ */ jsx('p', {
        children: details,
      }),
      stack,
    ],
  });
});
const route0 = /* @__PURE__ */ Object.freeze(
  /* @__PURE__ */ Object.defineProperty(
    {
      __proto__: null,
      ErrorBoundary,
      Layout,
      default: root,
      links,
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
);
function Card({ children, className }) {
  return /* @__PURE__ */ jsx('div', {
    className: `border rounded-lg shadow-md bg-white p-4 w-full max-w-md ${className}`,
    children,
  });
}
function CardContent({ children, className }) {
  return /* @__PURE__ */ jsx('div', { className: `p-2 ${className}`, children });
}
function Button({ children, onClick, className, disabled }) {
  return /* @__PURE__ */ jsx('button', {
    onClick,
    className: `text-white px-4 py-2 rounded-md hover:bg-blue-700 hover:cursor-pointer transition-all$ ${className} ${disabled ? 'bg-gray-300 hover:bg-gray-300' : 'bg-blue-600 hover:bg-blue-700'}`,
    disabled,
    children,
  });
}
function Input({ placeholder, value, onChange, className }) {
  return /* @__PURE__ */ jsx('input', {
    type: 'text',
    placeholder,
    value,
    onChange,
    className: `"w-full p-2 border rounded-md focus:ring focus:ring-blue-300 outline-none ${className}`,
  });
}
const SERVER_LOCALHOST_BASEURL = 'http://localhost:4000/';
const home = withComponentProps(function URLShortener() {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleShorten = async () => {
    setIsSubmitting(true);
    if (!originalUrl) {
      setError('Please enter a valid URL');
      return;
    }
    try {
      const response = await axios.post('http://localhost:4000/shorten', {
        url: originalUrl,
      });
      setShortUrl(`${SERVER_LOCALHOST_BASEURL}${response.data.shortUrl.slug}`);
      setError('');
    } catch (err) {
      if (err.response.data.error === 'Invalid URL') {
        setError('The URL is invalid. Please, give a correct URL format.');
      } else if (err.response.data.includes('Entity already exists')) {
        setError('Failed to shorten URL. The URL already exists.');
      } else {
        setError('Failed to shorten URL. Please try again.');
      }
    }
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2e3);
  };
  return /* @__PURE__ */ jsx('div', {
    className: 'flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4',
    children: /* @__PURE__ */ jsxs(Card, {
      className: 'w-full max-w-md p-6 bg-white shadow-lg rounded-lg',
      children: [
        /* @__PURE__ */ jsx('h1', {
          className: 'text-2xl font-bold mb-4 text-black',
          children: 'URL Shortener',
        }),
        /* @__PURE__ */ jsx('h3', {
          className: 'text-md font-bold mb-6 mt-10 text-black',
          children: 'Enter URL to shorten',
        }),
        /* @__PURE__ */ jsx(Input, {
          placeholder: 'Enter URL',
          value: originalUrl,
          onChange: (e) => {
            setOriginalUrl(e.target.value), setIsSubmitting(false), setError('');
          },
          className: 'mb-6 text-black w-full',
        }),
        /* @__PURE__ */ jsx(Button, {
          onClick: handleShorten,
          disabled: isSubmitting,
          className: 'w-full text-gray',
          children: 'Shorten',
        }),
        error &&
          /* @__PURE__ */ jsx('p', {
            className: 'text-red-500 mt-2',
            children: error,
          }),
        shortUrl &&
          /* @__PURE__ */ jsxs(CardContent, {
            className: 'mt-4 flex justify-between items-center border p-2 rounded',
            children: [
              /* @__PURE__ */ jsx('a', {
                href: shortUrl,
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'text-blue-500',
                children: shortUrl,
              }),
              /* @__PURE__ */ jsx(Button, {
                onClick: handleCopy,
                children: copied
                  ? /* @__PURE__ */ jsx(Check, {
                      size: 16,
                    })
                  : /* @__PURE__ */ jsx(Copy, {
                      size: 16,
                    }),
              }),
            ],
          }),
      ],
    }),
  });
});
const route1 = /* @__PURE__ */ Object.freeze(
  /* @__PURE__ */ Object.defineProperty(
    {
      __proto__: null,
      default: home,
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
);
const serverManifest = {
  entry: {
    module: '/assets/entry.client-RtqKm1w7.js',
    imports: ['/assets/chunk-K6CSEXPM-BkoTNwhC.js'],
    css: [],
  },
  routes: {
    root: {
      id: 'root',
      parentId: void 0,
      path: '',
      index: void 0,
      caseSensitive: void 0,
      hasAction: false,
      hasLoader: false,
      hasClientAction: false,
      hasClientLoader: false,
      hasErrorBoundary: true,
      module: '/assets/root-Ck-TboNt.js',
      imports: ['/assets/chunk-K6CSEXPM-BkoTNwhC.js', '/assets/with-props-kfWWD9C7.js'],
      css: ['/assets/root-DC9NTIZ5.css'],
      clientActionModule: void 0,
      clientLoaderModule: void 0,
      hydrateFallbackModule: void 0,
    },
    'routes/home': {
      id: 'routes/home',
      parentId: 'root',
      path: void 0,
      index: true,
      caseSensitive: void 0,
      hasAction: false,
      hasLoader: false,
      hasClientAction: false,
      hasClientLoader: false,
      hasErrorBoundary: false,
      module: '/assets/home--nHCC472.js',
      imports: ['/assets/with-props-kfWWD9C7.js', '/assets/chunk-K6CSEXPM-BkoTNwhC.js'],
      css: [],
      clientActionModule: void 0,
      clientLoaderModule: void 0,
      hydrateFallbackModule: void 0,
    },
  },
  url: '/assets/manifest-4a506bd1.js',
  version: '4a506bd1',
};
const assetsBuildDirectory = 'build/client';
const basename = '/';
const future = {
  unstable_middleware: false,
  unstable_optimizeDeps: false,
  unstable_splitRouteModules: false,
  unstable_viteEnvironmentApi: false,
};
const ssr = true;
const isSpaMode = false;
const prerender = [];
const publicPath = '/';
const entry = { module: entryServer };
const routes = {
  root: {
    id: 'root',
    parentId: void 0,
    path: '',
    index: void 0,
    caseSensitive: void 0,
    module: route0,
  },
  'routes/home': {
    id: 'routes/home',
    parentId: 'root',
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1,
  },
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routes,
  ssr,
};
