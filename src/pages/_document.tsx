import NextDocument, { Html, Head, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
   render() {
      return (
         <Html>
            <Head />
            <body>
               {/* Make Color mode to persists when you refresh the page. */}

               {/* <link
                  href="https://api.fontshare.com/v2/css?f[]=pally@400,700,500&display=swap"
                  rel="stylesheet"
               /> */}
               <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
               <Main />
               <NextScript />
            </body>
         </Html>
      );
   }
}
