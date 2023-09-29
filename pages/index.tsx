import type { NextPage } from "next";

import Head from "next/head";
import { MainTemplate } from "src/components";

import styles from "../styles/Home.module.css";
import Script from "next/script";

const Home: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Inkr Project</title>
        <meta name="description" content="Inkr Project" />
      </Head>

      <MainTemplate />

      <Script />

      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
          window.intercomSettings = {
            api_base: "https://api-iam.intercom.io",
            app_id: "vh68ugh7"
          };
          `,
        }}
      />

      <script
        dangerouslySetInnerHTML={{
          __html: `
          // We pre-filled your app ID in the widget URL: 'https://widget.intercom.io/widget/vh68ugh7'
          (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/vh68ugh7';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
          `,
        }}
      />
    </div>
  );
};

export default Home;
