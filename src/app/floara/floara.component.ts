import { Component } from '@angular/core';

@Component({
  selector: 'app-floara',
  standalone: false,
  templateUrl: './floara.component.html',
  styleUrl: './floara.component.css'
})
export class FloaraComponent {
 // HTML content for the editor
 initialData =
 '<h2>Congratulations on setting up Editor! 🎉</h2>\n<p>\n\tYou\'ve successfully created a editor  project. This powerful text editor\n\twill enhance your application, enabling rich text editing capabilities that\n\tare customizable and easy to use.\n</p>\n<h3>What\'s next?</h3>\n<ol>\n\t<li>\n\t\t<strong>Integrate into your app</strong>: time to bring the editing into\n\t\tyour application. Take the code you created and add to your application.\n\t</li>\n\t<li>\n\t\t<strong>Explore features:</strong> Experiment with different plugins and\n\t\ttoolbar options to discover what works best for your needs.\n\t</li>\n\t<li>\n\t\t<strong>Customize your editor:</strong> Tailor the editor\'s\n\t\tconfiguration to match your application\'s style and requirements. Or\n\t\teven write your plugin!\n\t</li>\n</ol>\n<p>\n\tKeep experimenting, and don\'t hesitate to push the boundaries of what you\n\tcan achieve with CKEditor 5. Your feedback is invaluable to us as we strive\n\tto improve and evolve. Happy editing!\n</p>\n<h3>Helpful resources</h3>\n<ul>\n\t<li>📝 <a href="https://portal.ckeditor.com/checkout?plan=free">Trial sign up</a>,</li>\n\t<li>📕 <a href="https://ckeditor.com/docs/ckeditor5/latest/installation/index.html">Documentation</a>,</li>\n\t<li>⭐️ <a href="https://github.com/ckeditor/ckeditor5">GitHub</a> (star us if you can!),</li>\n\t<li>🏠 <a href="https://ckeditor.com">CKEditor Homepage</a>,</li>\n\t<li>🧑‍💻 <a href="https://ckeditor.com/ckeditor-5/demo/">CKEditor 5 Demos</a>,</li>\n</ul>\n<h3>Need help?</h3>\n<p>\n\tSee this text, but the editor is not starting up? Check the browser\'s\n\tconsole for clues and guidance. It may be related to an incorrect license\n\tkey if you use premium features or another feature-related requirement. If\n\tyou cannot make it work, file a GitHub issue, and we will help as soon as\n\tpossible!\n</p>\n';
 // Editor configuration options
 
 editorOptions: Object = {
   placeholderText: 'Edit Your Content Here!',
   charCounterCount: true,
   toolbarButtons: {
     'moreText': {
       'buttons': ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', 'textColor', 'backgroundColor', 'inlineClass', 'inlineStyle', 'clearFormatting']
     },
     'moreParagraph': {
       'buttons': ['alignLeft', 'alignCenter', 'alignRight', 'alignJustify', 'formatOL', 'formatUL', 'paragraphFormat', 'paragraphStyle', 'lineHeight', 'outdent', 'indent', 'quote']
     },
     'moreRich': {
       'buttons': ['insertLink', 'insertImage', 'insertTable', 'insertHR', 'emoticons', 'specialCharacters', 'embedly', 'fontAwesome']
     },
     'moreMisc': {
       'buttons': ['undo', 'redo', 'fullscreen', 'print', 'getPDF', 'spellChecker', 'selectAll', 'html', 'help'],
       'align': 'right',
       'buttonsVisible': 2
     }
   },
   // Enable image resizing
   imageEditButtons: ['imageDisplay', 'imageAlign', 'imageInfo', 'imageRemove', 'imageSize'],
   // Events
   events: {
     'contentChanged': () => {
       this.onContentChanged();
     }
   }
 };
 
 // Device preview mode
 currentDevice: string = 'desktop';
 previewWidth: string = '100%';
 
 constructor() { }

 // Method called when editor content changes
 onContentChanged() {
   console.log('Content updated:', this.initialData);
   // Here you can implement logic to update preview
 }
 
 // Get HTML content of the editor
 getHtmlContent(): string {
   return this.initialData;
 }
 
 // Change preview device
 changePreviewDevice(device: string) {
   this.currentDevice = device;
   
   // Set preview width based on device
   switch(device) {
     case 'mobile':
       this.previewWidth = '375px';
       break;
     case 'tablet':
       this.previewWidth = '768px';
       break;
     case 'desktop':
     default:
       this.previewWidth = '100%';
       break;
   }
 }

 // Copy HTML to clipboard
 copyHtmlToClipboard() {
   navigator.clipboard.writeText(this.initialData)
     .then(() => {
       alert('HTML copied to clipboard!');
     })
     .catch(err => {
       console.error('Could not copy text: ', err);
     });
 }
}
