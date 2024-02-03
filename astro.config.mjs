import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Propromo Docs',
			favicon: './public/favicon.png',
			logo: {
				src: './public/favicon.png',
			},
			social: {
				github: 'https://github.com/propromo-software/propromo',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Joining a Project Dahboard', link: '/guides/join-dashboard/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
