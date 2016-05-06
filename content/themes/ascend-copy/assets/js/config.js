/*
*	ASCEND CONFIG Settings
*
*	Read the documentation that comes with the theme
*	for a better understanding of the features you
*	can manage with this file.
*
*	Including:
*	- External scripts
*	- Social profiles
*	- Comments System
*	- Widgets
*/

define([], function(){

	var _userconfig = {
		_userCustomScripts: [],
		socialProfiles: {
			_active: true,
			items: [
				{
					site: 'twitter',
					url: '//twitter.com/CamJohnston03'
				},
				{
					site: 'facebook',
					url: '//facebook.com/cameron.johnston.31'
				},
				{
					site: 'instagram',
					url: '//instagram.com/camjohnston03/'
				},
				{
					site: 'linkedin',
					url: '//linkedin.com/in/cameron-johnston-4a31b678'
				}

			]
		},
		commentsSystem: {
			_active: true,
			type: 'disqus', // Options: 'disqus', 'livefyre', 'facebook'
			idOrShortname: '', // Disqus Shortname OR Livefyre ID
			appID: '' // For facebook comments only
		},
		widgetsConfig: {
			_active: false,
			_areas: [
				{
					name: 'footer',
					spots: [1,2,3]
				}
			],
			_widgets: [
				{
					type: 'dribbble',
					_id: 'dribbble',
					label: 'Dribbble Shots',
					area: 'footer',
					spot: 3,
					active: false
				},
				{
					type: 'flickr',
					_id: '',
					label: 'Flickr',
					area: 'footer',
					spot: 2,
					active: false
				},
				{
					type: 'instagram',
					_id: 'camjohnston03',
					_clientId: '',
					label: 'Instagram',
					area: 'footer',
					spot: 1,
					active: true
				}
			]
		}
	};

	return _userconfig;
});
