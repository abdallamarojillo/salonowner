import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddSalonPage } from './add-salon.page';

describe('AddSalonPage', () => {
  let component: AddSalonPage;
  let fixture: ComponentFixture<AddSalonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSalonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddSalonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
