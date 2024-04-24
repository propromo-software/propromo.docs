import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import vercel from "@astrojs/vercel/serverless";
import starlightImageZoom from 'starlight-image-zoom';

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'Propromo Docs',
    favicon: '/img/favicon.png',
    logo: {
      src: './public/img/favicon.png'
    },
    social: {
      github: 'https://github.com/propromo-software/propromo'
    },
    sidebar: [{
      label: 'Guides',
      items: [
      // Each item here is one entry in the navigation menu.
        {
          label: 'Joining a Project Monitor',
          link: '/guides/join-monitor/'
        },
        {
          label: 'Creating a Project Monitor',
          link: '/guides/create-monitor/'
        }  
      ]
    }, {
      label: 'Reference',
      autogenerate: {
        directory: 'reference'
      }
    }],
    plugins: [starlightImageZoom()]
  })],
  output: "hybrid",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  })
});