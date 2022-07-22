import * as React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { IconContext } from '@react-icons/all-files'

export default class MyDocument extends Document {
  render() {
    return (
      <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
        <Html lang='en'>
        <Head>

<link rel="icon" type="image/svg" sizes="32x32" href="https://fastly.jsdelivr.net/npm/dukewill@0.0.19/images/favicon.svg" />
<link rel="icon" type="image/png" sizes="16x16" href="https://fastly.jsdelivr.net/npm/dukewill@0.0.19/images/favicon-16.png" />
<link rel="apple-touch-icon" sizes="180x180" href="https://fastly.jsdelivr.net/npm/dukewill@0.0.19/images/favicon-180.png" />
<link color="#000000" rel="mask-icon" href="https://fastly.jsdelivr.net/npm/dukewill@0.0.19/images/Logo-DS-black-circle.svg" />
<link rel="icon" type="image/png" sizes="192x192" href="https://fastly.jsdelivr.net/npm/dukewill@0.0.19/images/favicon-192.png" />
<link rel="manifest" href="/manifest.json" />
<script
async
src={`https://www.googletagmanager.com/gtag/js?id=UA-97574220-1`}
/>
<script
dangerouslySetInnerHTML={{
  __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-97574220-1', {
  page_path: window.location.pathname,
});
`,
}}
/>
<script type="text/javascript" src="/cp.js" />
</Head>

          <body>
            <script
              dangerouslySetInnerHTML={{
                __html: `
/** Inlined version of noflash.js from use-dark-mode */
;(function () {
  var storageKey = 'darkMode'
  var classNameDark = 'dark-mode'
  var classNameLight = 'light-mode'
  function setClassOnDocumentBody(darkMode) {
    document.body.classList.add(darkMode ? classNameDark : classNameLight)
    document.body.classList.remove(darkMode ? classNameLight : classNameDark)
  }
  var preferDarkQuery = '(prefers-color-scheme: dark)'
  var mql = window.matchMedia(preferDarkQuery)
  var supportsColorSchemeQuery = mql.media === preferDarkQuery
  var localStorageTheme = null
  try {
    localStorageTheme = localStorage.getItem(storageKey)
  } catch (err) {}
  var localStorageExists = localStorageTheme !== null
  if (localStorageExists) {
    localStorageTheme = JSON.parse(localStorageTheme)
  }
  // Determine the source of truth
  if (localStorageExists) {
    // source of truth from localStorage
    setClassOnDocumentBody(localStorageTheme)
  } else if (supportsColorSchemeQuery) {
    // source of truth from system
    setClassOnDocumentBody(mql.matches)
    localStorage.setItem(storageKey, mql.matches)
  } else {
    // source of truth from document.body
    var isDarkMode = document.body.classList.contains(classNameDark)
    localStorage.setItem(storageKey, JSON.stringify(isDarkMode))
  }
})();
`
              }}
            />
            <Main />
            <script type="text/javascript" src="/fav.js"></script>
            
            <NextScript />
          </body>
        </Html>
      </IconContext.Provider>
    )
  }
}
