import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompanySettingPage } from './company-setting.page';

describe('CompanySettingPage', () => {
  let component: CompanySettingPage;
  let fixture: ComponentFixture<CompanySettingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanySettingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompanySettingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
