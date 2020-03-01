var homePage = require('../Pages/AngularHomePage');

describe('Protratcor Test', () => {

    it('Go to AngularJS Home Page', () => {
        homePage.verifyTitle('AngularJS — Superheroic JavaScript MVW Framework');
    });

    it('I add a text in task field', () => {
        homePage.enterTask('write first protractor test');
    });

    it('I click on add button', () => {
        homePage.clickAddBtn();
    });

    it('I should see new task added to task list', () =>{
        homePage.verifyTaskList('write first protractor test');
    });
});