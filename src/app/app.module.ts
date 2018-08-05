import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';

// shared
import {  TruncatePipe }   from './shared/truncate.pipe';
import { WorkDetailComponent } from './work-detail/work-detail.component';

import { StoreService } from './services/store.service';
import { ProjectItemComponent } from './project-item/project-item.component';
import { EducationComponent } from './education/education.component';
import { ProjectItemLayout2Component } from './project-item-layout-2/project-item-layout-2.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    WorkComponent,
    TruncatePipe,
    WorkDetailComponent,
    ProjectItemComponent,
    EducationComponent,
    ProjectItemLayout2Component,
    SkillsComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
