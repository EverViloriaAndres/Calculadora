import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { Module1 } from './module1/module1.module';

platformBrowserDynamic()
  .bootstrapModule(Module1)
  .catch((err) => console.error(err));
