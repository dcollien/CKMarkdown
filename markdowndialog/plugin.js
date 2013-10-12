/**
 * @license Copyright (c) 2003-2013, CKmarkdown - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.plugins.add( 'markdowndialog', {
	icons: 'markdowndialog', // %REMOVE_LINE_CORE%
	
	init: function( editor ) {
		// Register the "markdown" command, which simply opens the "markdown" dialog.
		editor.addCommand( 'markdowndialog', new CKEDITOR.dialogCommand( 'markdowndialog' ) );

		// Register the "markdown" dialog.
		CKEDITOR.dialog.add( 'markdowndialog', this.path + 'dialogs/markdowndialog.js' );

		// If the toolbar is available, create the "Markdown" button.
		if ( editor.ui.addButton ) {
			editor.ui.addButton( 'markdowndialog', {
				label: "Markdown",
				command: 'markdowndialog',
				toolbar: 'mode,10'
			});
		}
	}
});
