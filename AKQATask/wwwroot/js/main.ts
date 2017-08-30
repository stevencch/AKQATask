import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module.js';
import { enableProdMode } from '@angular/core';
enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule);
