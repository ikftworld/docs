import type { ZudokuPlugin } from "zudoku";

const GoogleAnalyticsPluginI: ZudokuPlugin = {
    getHead: () => {
    return (
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-GBNN44Q8NV"></script>
    );
  },
}
const GoogleAnalyticsPluginII: ZudokuPlugin = {
    getHead: () => {
    return (
      <script>
        {`
          <!-- Google tag (gtag.js) -->
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-GBNN44Q8NV');
        `}
      </script>
    );
  },
}

const GoogleAnalyticsPlugin = [GoogleAnalyticsPluginI, GoogleAnalyticsPluginII];

export default GoogleAnalyticsPlugin;

