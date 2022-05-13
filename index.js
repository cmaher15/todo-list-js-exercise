function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed.`);
    },
    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}

const task1 = newTask("Pet OPC and give her lots of treats", "Wish you could adopt her");
const task2 = newTask("review test from this morning and do a better job", "feel inadequate");
const tasks = [task1, task2];

task1.logState();
task1.markCompleted();
task1.logState();
