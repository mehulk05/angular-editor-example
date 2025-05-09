


import { Component,ElementRef,OnInit,OnChanges,AfterViewInit  } from '@angular/core';

var win=(window as any);

@Component({
  selector: 'app-rich-text-editor',
  standalone: false,
  templateUrl: './rich-text-editor.component.html',
  styleUrl: './rich-text-editor.component.css'
})
export class RichTextEditorComponent1  implements OnInit,OnChanges,AfterViewInit  {
   initialData =
  '<h2>Congratulations on setting up Editor! 🎉</h2>\n<p>\n\tYou\'ve successfully created a editor  project. This powerful text editor\n\twill enhance your application, enabling rich text editing capabilities that\n\tare customizable and easy to use.\n</p>\n<h3>What\'s next?</h3>\n<ol>\n\t<li>\n\t\t<strong>Integrate into your app</strong>: time to bring the editing into\n\t\tyour application. Take the code you created and add to your application.\n\t</li>\n\t<li>\n\t\t<strong>Explore features:</strong> Experiment with different plugins and\n\t\ttoolbar options to discover what works best for your needs.\n\t</li>\n\t<li>\n\t\t<strong>Customize your editor:</strong> Tailor the editor\'s\n\t\tconfiguration to match your application\'s style and requirements. Or\n\t\teven write your plugin!\n\t</li>\n</ol>\n<p>\n\tKeep experimenting, and don\'t hesitate to push the boundaries of what you\n\tcan achieve with CKEditor 5. Your feedback is invaluable to us as we strive\n\tto improve and evolve. Happy editing!\n</p>\n<h3>Helpful resources</h3>\n<ul>\n\t<li>📝 <a href="https://portal.ckeditor.com/checkout?plan=free">Trial sign up</a>,</li>\n\t<li>📕 <a href="https://ckeditor.com/docs/ckeditor5/latest/installation/index.html">Documentation</a>,</li>\n\t<li>⭐️ <a href="https://github.com/ckeditor/ckeditor5">GitHub</a> (star us if you can!),</li>\n\t<li>🏠 <a href="https://ckeditor.com">CKEditor Homepage</a>,</li>\n\t<li>🧑‍💻 <a href="https://ckeditor.com/ckeditor-5/demo/">CKEditor 5 Demos</a>,</li>\n</ul>\n<h3>Need help?</h3>\n<p>\n\tSee this text, but the editor is not starting up? Check the browser\'s\n\tconsole for clues and guidance. It may be related to an incorrect license\n\tkey if you use premium features or another feature-related requirement. If\n\tyou cannot make it work, file a GitHub issue, and we will help as soon as\n\tpossible!\n</p>\n';
  rte:any;
  title = 'rte-ng-ts';
  constructor(private rootref:ElementRef){}
  ngOnInit(){
    console.log("app.component.ts !ngOnInit",this,this.rootref.nativeElement.outerHTML.length)
    var rtediv=this.rootref.nativeElement.querySelector(".rtediv");
    this.rte=new win.RichTextEditor(rtediv);
    this.rte.setHTMLCode(this.initialData)
  }
  ngOnChanges(){
    console.log("app.component.ts !ngOnChanges",this,this.rootref.nativeElement.outerHTML.length)
  }
  ngAfterViewInit(){
    console.log("app.component.ts !ngAfterViewInit",this,this.rootref.nativeElement.outerHTML.length)
  }
  clickToShowHtmlCode(){
    win.alert(this.rte.getHTMLCode())
  }
}

console.log("app.component.ts !load")
