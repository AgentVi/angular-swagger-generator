export * from './accountSettings.service';
import { AccountSettingsService } from './accountSettings.service';
export * from './rules.service';
import { RulesService } from './rules.service';
export * from './sensors.service';
import { SensorsService } from './sensors.service';
export const APIS = [AccountSettingsService, RulesService, SensorsService];
