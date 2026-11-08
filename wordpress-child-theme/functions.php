<?php

add_action(
	'wp_enqueue_scripts',
	static function (): void {
		wp_enqueue_style(
			'portfolio-google-fonts',
			'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Spectral:wght@400;500;600;700&display=swap',
			[],
			null
		);

		wp_enqueue_style(
			'portfolio-child',
			get_stylesheet_uri(),
			[ 'hello-elementor', 'portfolio-google-fonts' ],
			wp_get_theme()->get( 'Version' )
		);

		$elementskit_icons = WP_PLUGIN_DIR . '/elementskit-lite/modules/elementskit-icon-pack/assets/css/ekiticons.css';
		if ( is_page_template( 'template-portfolio.php' ) && is_file( $elementskit_icons ) ) {
			wp_enqueue_style(
				'portfolio-elementskit-icons',
				plugins_url( 'modules/elementskit-icon-pack/assets/css/ekiticons.css', WP_PLUGIN_DIR . '/elementskit-lite/elementskit-lite.php' ),
				[],
				'1.0.0'
			);
		}
	},
	20
);
