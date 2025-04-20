// syncfusion-editor.component.ts
import { Component, OnInit, ViewChild } from '@angular/core';
import { QuickToolbarSettingsModel, ToolbarSettingsModel, RichTextEditorComponent } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
  selector: 'app-syncfusion-editor',
  templateUrl: './syncfusion-editor.component.html',
  styleUrls: ['./syncfusion-editor.component.css'],
  standalone: false
})
export class SyncfusionEditorComponent implements OnInit {
  @ViewChild('defaultRTE') public rteObj!: RichTextEditorComponent;
  initialData =
  '<h2>Congratulations on setting up Editor! 🎉</h2>\n<p>\n\tYou\'ve successfully created a editor  project. This powerful text editor\n\twill enhance your application, enabling rich text editing capabilities that\n\tare customizable and easy to use.\n</p>\n<h3>What\'s next?</h3>\n<ol>\n\t<li>\n\t\t<strong>Integrate into your app</strong>: time to bring the editing into\n\t\tyour application. Take the code you created and add to your application.\n\t</li>\n\t<li>\n\t\t<strong>Explore features:</strong> Experiment with different plugins and\n\t\ttoolbar options to discover what works best for your needs.\n\t</li>\n\t<li>\n\t\t<strong>Customize your editor:</strong> Tailor the editor\'s\n\t\tconfiguration to match your application\'s style and requirements. Or\n\t\teven write your plugin!\n\t</li>\n</ol>\n<p>\n\tKeep experimenting, and don\'t hesitate to push the boundaries of what you\n\tcan achieve with CKEditor 5. Your feedback is invaluable to us as we strive\n\tto improve and evolve. Happy editing!\n</p>\n<h3>Helpful resources</h3>\n<ul>\n\t<li>📝 <a href="https://portal.ckeditor.com/checkout?plan=free">Trial sign up</a>,</li>\n\t<li>📕 <a href="https://ckeditor.com/docs/ckeditor5/latest/installation/index.html">Documentation</a>,</li>\n\t<li>⭐️ <a href="https://github.com/ckeditor/ckeditor5">GitHub</a> (star us if you can!),</li>\n\t<li>🏠 <a href="https://ckeditor.com">CKEditor Homepage</a>,</li>\n\t<li>🧑‍💻 <a href="https://ckeditor.com/ckeditor-5/demo/">CKEditor 5 Demos</a>,</li>\n</ul>\n<h3>Need help?</h3>\n<p>\n\tSee this text, but the editor is not starting up? Check the browser\'s\n\tconsole for clues and guidance. It may be related to an incorrect license\n\tkey if you use premium features or another feature-related requirement. If\n\tyou cannot make it work, file a GitHub issue, and we will help as soon as\n\tpossible!\n</p>\n';

  public tools: ToolbarSettingsModel = {
    items: [
        'Undo', 'Redo', '|', 'ImportWord', 'ExportWord', 'ExportPdf', '|',
        'Bold', 'Italic', 'Underline', 'StrikeThrough', 'InlineCode', 'SuperScript', 'SubScript', '|',
        'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
        'LowerCase', 'UpperCase', '|',
        'Formats', 'Alignments', 'Blockquote', '|', 'NumberFormatList', 'BulletFormatList', '|',
        'Outdent', 'Indent', '|', 'CreateLink', 'Image', 'FileManager', 'Video', 'Audio', 'CreateTable', '|', 'FormatPainter', 'ClearFormat',
        '|', 'EmojiPicker', 'Print', '|',
        'SourceCode', 'FullScreen']
  };

  public quickToolbarSettings: QuickToolbarSettingsModel = {
    table: ['TableHeader', 'TableRows', 'TableColumns', 'TableCell', '-', 'BackgroundColor', 'TableRemove', 'TableCellVerticalAlign', 'Styles'],
    showOnRightClick: true,
  };

  public htmlContent!: string;
  public showHtmlCode: boolean = false;
  public currentView: string = 'desktop';
  public previewHtml!: string;
  public showPreview: boolean = false;

  ngOnInit(): void {
    // Find and remove the Syncfusion license banner
    const licenseBanner = document.querySelector('div[style*="z-index: 999999999"]');
    if (licenseBanner) {
      licenseBanner.remove();
    }
  }

  // Get HTML content from the editor
  getHtmlContent(): void {
    this.htmlContent = this.rteObj.getHtml();
    this.showHtmlCode = true;
    this.showPreview = false;
  }

  // Show preview based on device type
  showDevicePreview(deviceType: string): void {
    this.currentView = deviceType;
    this.previewHtml = this.rteObj.getHtml();
    this.showPreview = true;
    this.showHtmlCode = false;
  }

  // Add custom toolbar item
  addCustomToolbar(): void {
    // Get the toolbar element
    const toolbar = this.rteObj.getToolbar();
    if (toolbar) {
      // Create a custom button
      const customButton = document.createElement('button');
      customButton.innerHTML = '<span class="e-tbar-btn-text">Custom</span>';
      customButton.className = 'e-tbar-btn e-btn e-control e-rte-custom-btn';
      customButton.setAttribute('title', 'Custom Action');
      
      // Add click event
      customButton.addEventListener('click', () => {
        alert('Custom toolbar action executed!');
      });
      
      // Add the button to toolbar
      toolbar.appendChild(customButton);
    }
  }

  // Close HTML view
  closeHtmlView(): void {
    this.showHtmlCode = false;
  }

  // Close preview
  closePreview(): void {
    this.showPreview = false;
  }
}