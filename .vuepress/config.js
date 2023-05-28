module.exports = {
	themeConfig: {
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'PHP', link: '/php/' },
			{ text: 'WordPress', link: '/wordpress/' },
			{ text: 'Laravel', link: '/laravel/' }
		],
		sidebar: [
		  {
			title: 'PHP',   // required
			path: '/php/',      // optional, link of the title, which should be an absolute path and must exist
			collapsable: false, // optional, defaults to true
			sidebarDepth: 1,    // optional, defaults to 1
			children: [
			  '/'
			]
		  },
		  {
			title: 'WordPress',
			path: '/wordpress/',
			children: [
				'content-management.md'
			],
			initialOpenGroupIndex: -1 // optional, defaults to 0, defines the index of initially opened subgroup
		  }
		]
	  }
  }