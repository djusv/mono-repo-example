import { ApplicationModule } from './application.module';
import { createTestApp } from 'angularjs-jest';

describe('[app-two] application.component', () => {

  const getTestApp = () => createTestApp({
    modules: [ApplicationModule]
  });


  it('should render the overview first', () => {
    const testApp = getTestApp();
    const element = testApp.render('<application></application>');
    expect(element.html()).toContain('Hello World!');
  });

});