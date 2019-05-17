import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'question', loadChildren: './question/question.module#QuestionPageModule' },
  { path: 'question1a', loadChildren: './question1a/question1a.module#Question1aPageModule' },
  { path: 'question1b', loadChildren: './question1b/question1b.module#Question1bPageModule' },
  { path: 'question1c', loadChildren: './question1c/question1c.module#Question1cPageModule' },
  { path: 'question2a', loadChildren: './question2a/question2a.module#Question2aPageModule' },
  { path: 'question2b', loadChildren: './question2b/question2b.module#Question2bPageModule' },
  { path: 'question2c', loadChildren: './question2c/question2c.module#Question2cPageModule' },
  { path: 'question2d', loadChildren: './question2d/question2d.module#Question2dPageModule' },
  { path: 'question2e', loadChildren: './question2e/question2e.module#Question2ePageModule' },
  { path: 'question2', loadChildren: './question2/question2.module#Question2PageModule' },
  { path: 'question2f', loadChildren: './question2f/question2f.module#Question2fPageModule' },
  { path: 'question2g', loadChildren: './question2g/question2g.module#Question2gPageModule' },
  { path: 'question2h', loadChildren: './question2h/question2h.module#Question2hPageModule' },
  { path: 'question2i', loadChildren: './question2i/question2i.module#Question2iPageModule' },
  { path: 'question3', loadChildren: './question3/question3.module#Question3PageModule' },
  { path: 'question3a', loadChildren: './question3a/question3a.module#Question3aPageModule' },
  { path: 'question3b', loadChildren: './question3b/question3b.module#Question3bPageModule' },
  { path: 'question3c', loadChildren: './question3c/question3c.module#Question3cPageModule' },
  { path: 'question3d', loadChildren: './question3d/question3d.module#Question3dPageModule' },
  { path: 'question3e', loadChildren: './question3e/question3e.module#Question3ePageModule' },
  { path: 'question3f', loadChildren: './question3f/question3f.module#Question3fPageModule' },
  { path: 'question3g', loadChildren: './question3g/question3g.module#Question3gPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
