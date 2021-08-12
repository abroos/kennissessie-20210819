import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { GithubRepositoriesComponent } from './GithubRepositories/github-repositories.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, CommonModule],
  declarations: [AppComponent,  GithubRepositoriesComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
