
module.exports = {
	siteMetadata: {
		title: `PixelsMatter`,
		description: `Site Coming Soon`,
		author: `@pixelsmatter`,
		siteUrl: `https://pixelsmatter.io`,
		domain: `pixelsmatter.io`,
		humans: `humans.txt`,
	},
	plugins: [
		`gatsby-plugin-preact`,
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-sitemap`,
		`gatsby-plugin-offline`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/img`,
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `PixelsMatter`,
				short_name: `PixelsMatter`,
				start_url: `/`,
				background_color: `#0E0417`,
				theme_color: `#0E0417`,
				display: `standalone`,
				icon: `src/img/logo-icon.png`,
				icon_options: {
					purpose: `any maskable`,
				},
			},
		},
  		{
    		resolve: `gatsby-plugin-sass`,
    		options: {
      			sassOptions: {
      				data: `@import "${__dirname}/src/scss/vendor/vendor";`,
					includePaths: [`node_modules`],
      			},
    		},
    	},
		{
			resolve: `gatsby-plugin-webfonts`,
			options: {
				usePreconnect: true,
				fonts: {
					google: [
						{
							family: `Montserrat`,
							variants: [
								`400`,
								`500`,
								`700`,
							],
						},
					],
				},
			},
		},
		{
			resolve: `gatsby-plugin-gdpr-cookies`,
			options: {
				googleAnalytics: {
	          		// trackingId: 'GOOGLE_ANALYTICS_TRACKING_ID',
	          		cookieName: 'cookies-accepted',
	      		},
	    		googleTagManager: {
	        		// trackingId: 'GOOGLE_TAG_MANAGER_TRACKING_ID',
	          		cookieName: 'cookies-accepted',
	      		},
	      		facebookPixel: {
	        		pixelId: '342641460613613',
	          		cookieName: 'cookies-accepted',
	      		},
	        	environments: ['production', 'development'],
        	}
    	},
		{
			resolve: 'gatsby-plugin-mailchimp',
			options: {
				endpoint: 'https://pixelsmatter.us1.list-manage.com/subscribe/post?u=1c8a0263818b4f2cf543bb7ff&amp;id=056ec3c1fe',
				timeout: 3500,
			},
		},
	],
}