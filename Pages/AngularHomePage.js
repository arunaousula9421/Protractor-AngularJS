class AngularHomePage {
    constructor() {
        this.getTitle = browser.getTitle();
        this.taskField = element(by.model('todoList.todoText'));
        this.addBtn = $("[type='submit']");
        this.taskList = element.all(by.repeater('todo in todoList.todos'));
    }

    verifyTitle = (title) => {
        expect(this.getTitle).toEqual(title);
    };

    enterTask = (task) => {
        this.taskField.sendKeys(task);
    };

    clickAddBtn = () => {
        this.addBtn.click();
    };

    verifyTaskList = (task) => {
        expect(this.taskList.get(2).getText()).toEqual(task);
    }
}

module.exports = new AngularHomePage();