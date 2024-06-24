import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'concept.test2',
  appName: 'conceptTest2',
  webDir: 'www',
  plugins: {
    extConfig: {},
    CapacitorUpdater: {
      autoUpdate: false,
    }
  }
};

export default config;
