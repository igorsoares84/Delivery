import { AreaLogadaModule } from './components/area-logada/area-logada.module';
import { LoginModule } from './components/login/login.module';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardapioModule } from './components/cardapio/cardapio.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './core/Material/angular-material/angular-material.module';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { FinalizarComponent } from './components/carrinho/finalizar/finalizar.component';
import { LocalizacaoComponent } from './components/localizacao/localizacao.component';
import { ContatoComponent } from './components/contato/contato.component';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarrinhoComponent,
    FinalizarComponent,
    LocalizacaoComponent,
    ContatoComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    CoreModule,
    FlexLayoutModule,
    CardapioModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    LoginModule,
    AreaLogadaModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
