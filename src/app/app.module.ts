import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

// Import Froala Editor
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import { FormsModule } from '@angular/forms';

import 'froala-editor/js/plugins.pkgd.min.js';

// Import a single Froala Editor plugin.
import 'froala-editor/js/plugins/align.min.js';

// Import a Froala Editor language file.
import 'froala-editor/js/languages/de.js';

// Import a third-party plugin.
import 'froala-editor/js/third_party/font_awesome.min';
import 'froala-editor/js/third_party/image_tui.min';
import 'froala-editor/js/third_party/spell_checker.min';
import 'froala-editor/js/third_party/embedly.min';
import { FloaraComponent } from './floara/floara.component';
import { CkeEditor5Component } from './components/cke-editor5/cke-editor5.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { SyncfusionEditorComponent } from './components/syncfusion-editor/syncfusion-editor.component';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, EmojiPickerService, VideoService, AudioService, FormatPainterService, RichTextEditorModule, QuickToolbarService, PasteCleanupService, CountService, ToolbarSettingsModel, ImageSettingsModel, ActionBeginEventArgs, RichTextEditorComponent } from '@syncfusion/ej2-angular-richtexteditor';
import {  TableService, FileManagerService, SlashMenuService, ImportExportService } from '@syncfusion/ej2-angular-richtexteditor';
import { RichTextEditorComponent1 } from './components/rich-text-editor/rich-text-editor.component';
@NgModule({
  declarations: [
    AppComponent,
    FloaraComponent,
    CkeEditor5Component,
    SyncfusionEditorComponent,
    RichTextEditorComponent1
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    CKEditorModule,
    RichTextEditorModule
  ],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, TableService, FileManagerService, EmojiPickerService, VideoService, AudioService, FormatPainterService, QuickToolbarService, PasteCleanupService, CountService, SlashMenuService, ImportExportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
