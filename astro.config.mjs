import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'Propromo Docs',
    favicon: '/public/favicon.png',
    logo: {
      src: '/public/favicon.png'
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
    }]
  })],
  output: "hybrid",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  })
});