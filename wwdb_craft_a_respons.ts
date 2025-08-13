// wwdb_craft_a_respons.ts

import { AppMonitorConfig } from './app-monitor-config';

const monitorConfig: AppMonitorConfig = {
  // App Information
  appName: 'Craft A Responsive Mobile App',
  appVersion: '1.0.0',
  appLogo: 'https://example.com/app-logo.png',

  // Monitoring Settings
  monitorFrequency: 1000, // 1 second
  maxErrorThreshold: 5, // 5 errors before alert
  errorTypes: ['CRASH', 'NETWORK_TIMEOUT', 'UNEXPECTED_ERROR'],

  // API Configuration
  apiUrl: 'https://example.com/api',
  apiToken: 'YOUR_API_TOKEN_HERE',

  // Notification Settings
  notificationFrequency: 30000, // 30 seconds
  notificationTypes: ['TOAST', 'EMAIL'],
  notificationEmail: 'devops@example.com',

  // Device Support
  supportedDevices: ['Android', 'iOS'],
  minDeviceVersion: {
    Android: '10.0',
    iOS: '14.0',
  },

  // Performance Metrics
  performanceMetrics: [
    'CPU_USAGE',
    'MEMORY_USAGE',
    'NETWORK_SPEED',
    'BATTERY_LEVEL',
  ],
};

export default monitorConfig;