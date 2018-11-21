import {
    NgModule,
    Optional, SkipSelf
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { NavComponent } from './nav/nav.component';
import { JSONTreeComponent } from './json-tree/json-tree.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { InstanceService } from './instance.service';
import { QueryProfileComponent } from '../query-profile/query-profile.component';

import { QueryProfileService } from '../query-profile/query-profile.service';
import { MySQLQueryDetailsComponent } from '../mysql-query-details/mysql-query-details.component';
import { MySQLQueryDetailsService } from '../mysql-query-details/mysql-query-details.service';
import { MongoQueryDetailsComponent } from '../mongo-query-details/mongo-query-details.component';
import { MongoQueryDetailsService } from '../mongo-query-details/mongo-query-details.service';
import { SummaryComponent } from '../summary/summary.component';
import { SummaryService } from '../summary/summary.service';
import { SettingsComponent } from '../settings/settings.component';
import { SettingsService } from '../settings/settings.service';
import { AddAwsService } from '../add-aws/add-aws.service';
import { AddRemoteInstanceService } from '../add-remote-instances/add-remote-instance.service';
import { RemoteInstancesListService } from '../remote-instances-list/remote-instances-list.service';
import { ClipboardModule } from 'ngx-clipboard';
import { RemoteInstancesListComponent } from '../remote-instances-list/remote-instances-list.component';
import { BaseQueryDetailsService } from './base-query-details.service';
import { QanEditColumnComponent } from '../qan-edit-column/qan-edit-column.component';
import { QueryProfileCellComponent } from '../query-profile-cell/query-profile-cell.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { QueryTableConfigurationService } from '../query-profile/query-table-configuration.service';

@NgModule({
    imports: [CommonModule, SharedModule, ClipboardModule, NgSelectModule],
    declarations: [NavComponent, PageNotFoundComponent, QueryProfileComponent, QueryProfileCellComponent,
        MySQLQueryDetailsComponent, MongoQueryDetailsComponent,
        SummaryComponent, SettingsComponent, JSONTreeComponent, RemoteInstancesListComponent, QanEditColumnComponent],
    exports: [NavComponent, PageNotFoundComponent, QueryProfileComponent,
        MySQLQueryDetailsComponent, MongoQueryDetailsComponent,
        SummaryComponent, SettingsComponent, JSONTreeComponent],
    providers: [InstanceService, QueryProfileService, MySQLQueryDetailsService,
        MongoQueryDetailsService, SummaryService, SettingsService, AddAwsService, AddRemoteInstanceService, BaseQueryDetailsService,
      RemoteInstancesListService, QueryTableConfigurationService]
})
export class CoreModule {

    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}
