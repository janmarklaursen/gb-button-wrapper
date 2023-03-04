import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save(props) {
	return (
		<div {...useBlockProps.save()} className="background-video--container">
			<InnerBlocks.Content />
		</div>
	);
}
