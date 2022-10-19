import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopPaginationComponent } from './shop-pagination.component';

describe('ShopPaginationComponent', () => {
  let component: ShopPaginationComponent;
  let fixture: ComponentFixture<ShopPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopPaginationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
