var TaskManager = function(){
    var taskList = [];

    return {
        addTask: function(task){
            taskList.push(task);
        },
        tasksCount: function(){
            return taskList.length;
        }
    }
}

// Test
var assert = require("assert")
describe('add task', function(){
    it('should keep track of the number of tasks', function(){
      var DummyTask = function(){ return {} };
      var taskManager = new TaskManager();

      taskManager.addTask(new DummyTask());
      taskManager.addTask(new DummyTask());

      assert.equal( taskManager.tasksCount(), 2 );

    })
})