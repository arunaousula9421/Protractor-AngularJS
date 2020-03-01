var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

class AngularHomePage {
    constructor() {
        this.getTitle = browser.getTitle();
        this.taskField = element(by.model('todoList.todoText'));
        this.addBtn = $("[type='submit']");
        this.taskList = element.all(by.repeater('todo in todoList.todos'));
    }

    verifyTitle = (title) => {
        return expect(this.getTitle).to.eventually.equal(title);
    };

    enterTask = (task) => {
        return this.taskField.sendKeys(task);
    };

    clickAddBtn = () => {
        browser.sleep(2000);
        return this.addBtn.click();
    };

    verifyTaskList = (task) => {
       return expect(this.taskList.get(2).getText()).to.eventually.equal(task);
    }
}

module.exports = new AngularHomePage();