import { enableProdMode, NgModuleRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

const bootstrap = async (): Promise<void> => {
  const moduleRef: NgModuleRef<AppModule> = await platformBrowserDynamic().bootstrapModule(AppModule);
};

bootstrap().catch((err) => console.error(err));