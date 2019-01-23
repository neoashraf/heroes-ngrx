import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { EditVillainComponent } from "./edit-villain.component";

describe("EditVillainComponent", () => {
  let component: EditVillainComponent;
  let fixture: ComponentFixture<EditVillainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditVillainComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVillainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
