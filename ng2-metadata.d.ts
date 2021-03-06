// Generated by dts-bundle v0.6.1
// Dependencies for this module:
//   ../@angular/core
//   ../@angular/platform-browser
//   ../@angular/router

declare module 'ng2-metadata' {
    export { PageTitlePositioning } from 'ng2-metadata/models/page-title-positioning';
    export { MetadataSettings } from 'ng2-metadata/models/metadata-settings';
    export { MetadataService } from 'ng2-metadata/metadata.service';
    export { MetadataModule } from 'ng2-metadata/metadata.module';
}

declare module 'ng2-metadata/models/page-title-positioning' {
    export enum PageTitlePositioning {
        AppendPageTitle = 0,
        PrependPageTitle = 10,
    }
}

declare module 'ng2-metadata/models/metadata-settings' {
    import { OpaqueToken } from '@angular/core';
    import { PageTitlePositioning } from 'ng2-metadata/models/page-title-positioning';
    export const METADATA_SETTINGS: OpaqueToken;
    export interface MetadataSettings {
        pageTitlePositioning: PageTitlePositioning;
        pageTitleSeparator?: string;
        applicationName?: string;
        applicationUrl?: string;
        defaults?: {
            title?: string;
            description?: string;
            keywords?: string;
            [key: string]: string;
        };
    }
}

declare module 'ng2-metadata/metadata.service' {
    import { Title } from '@angular/platform-browser';
    import { Router, ActivatedRoute } from '@angular/router';
    import 'rxjs/add/operator/filter';
    import 'rxjs/add/operator/map';
    import { MetadataSettings } from 'ng2-metadata/models/metadata-settings';
    export class MetadataService {
        constructor(router: Router, document: any, titleService: Title, activatedRoute: ActivatedRoute, metadataSettings: MetadataSettings);
        setTitle(title: string, override?: boolean): MetadataService;
        setTag(tag: string, value: string): MetadataService;
    }
}

declare module 'ng2-metadata/metadata.module' {
    import { ModuleWithProviders } from '@angular/core';
    import { MetadataSettings } from 'ng2-metadata/models/metadata-settings';
    export class MetadataModule {
        static forRoot(metadataSettings?: MetadataSettings): ModuleWithProviders;
    }
}

