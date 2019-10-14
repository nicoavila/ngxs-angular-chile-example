import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NuevoPostsComponent } from './nuevo-post/posts.component';

import { NgxsModule } from '@ngxs/store';
import { PostsState } from './store/posts/posts.state';

import { environment } from 'src/environments/environment.prod';

// DevTools
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { ListarPostsComponent } from './listar-posts/listar-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    NuevoPostsComponent,
    ListarPostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxsModule.forRoot([
      PostsState
    ],
      { developmentMode: !environment.production }
    ),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production
    }),
    NgxsLoggerPluginModule.forRoot({
      disabled: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
