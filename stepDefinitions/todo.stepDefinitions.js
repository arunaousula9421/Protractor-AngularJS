const { Given, When, Then } = require('cucumber');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

Given(/^I am on Angular Home Page$/, function () {
    var actualTitle = browser.getTitle();
    return expect(actualTitle).to.eventually.equal('AngularJS — Superheroic JavaScript MVW Framework');
});

When(/^I add "([^"]*)" in the task field$/, function(task) {
    element(by.model('todoList.todoText')).sendKeys(task);
});
    
When(/^I click the add button$/, function() {
    $("[type='submit']").click();
});
    
Then(/^I should see my new task in the list$/, function() {
    return expect(element.all(by.repeater('todo in todoList.todos')).get(2).getText()).to.eventually.equal(task);
});
