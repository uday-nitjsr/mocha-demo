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
var sinon = require("sinon")

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

    it("sinon spy",function(){
        var DummyTask = function(){ return {} };
      var taskManager = new TaskManager();
      var addTaskSpy = sinon.spy(taskManager,"addTask")

      taskManager.addTask(new DummyTask());
      taskManager.addTask(new DummyTask());

      assert.equal( addTaskSpy.callCount, 3 );
      addTaskSpy.restore();
    })
})