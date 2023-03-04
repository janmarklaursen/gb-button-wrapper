<?php

/**
 * Plugin Name:       Jamaa Embed Video - Block
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       boilerplate
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function jamaa_embed_video_render_callback($attributes, $content, $block)
{
	$value = get_field("video_url");
	$html = '<div class="background-video--container"><video class="background-video--video" autoplay loop muted poster="https://assets.codepen.io/6093409/river.jpg" >
				<source src="' . $value . '" type="video/mp4"></source>
			</video>';

	// Loop through each inner block
	foreach ($block->inner_blocks as $inner_block) {
		$html .= $inner_block->render();
	}

	$html .= '</div>';

	if ($value) {
		return $html;
	} else {
		return;
	}
}

function create_block_boilerplate_block_init()
{
	register_block_type(__DIR__ . '/build', array(
		'render_callback' => 'jamaa_embed_video_render_callback'
	));
}
add_action('init', 'create_block_boilerplate_block_init');
