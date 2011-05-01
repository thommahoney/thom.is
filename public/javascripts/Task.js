function Task(id, creator_id, body,
              completed, created_at, updated_at)
{
   this.id = id;
   this.creator_id = creator_id;
   this.body = body;
   this.completed = completed;
   this.created_at = created_at;
   this.updated_at = updated_at;
}

Task.prototype = {
   id : null,
   creator_id : null,
   body : null,
   completed : null,
   created_at : null,
   updated_at : null,
   root_element : null,
   body_element : null,
   completed_element : null
};

Task.fromTask = function(task) {
   return new this(task.id, task.creator_id,
                   task.body, task.completed,
                   task.created_at, task.updated_at);
};

Task.prototype.init = function() {
   this.draw();
};

/*
 * Called during initialization to create HTML elements.
 * Should only be called once in the object's lifetime.
 */
Task.prototype.draw = function(attach) {
   this.root_element = $('<div/>', {
                                       id : 'task_' + this.id,
                                       class :  'task'
                                   });
   this.body_element = $('<p/>', {
                                     id : 'task_body_' + this.id,
                                     class : 'task_body'
                                 });
   this.completed_element = $('<a/>', {
                                          id : 'task_completed_' + this.id,
                                          class : 'task_completed'
                                      });

   $(this.root_element).append(this.body_element)
                       .append(this.completed_element);

   if (attach || attach !== false) {
      $('#task_list').append(this.root_element);
   }
   
   this.redraw();
};

/*
 * Updates all existing HTML elements with data from <code>this</code>.
 */
Task.prototype.redraw = function()
{
   if (this.completed) {
      $(this.root_element).addClass('completed');
   }

   $(this.body_element).text(this.body);
};

/*
 * Accessors and mutators
 */

Task.prototype.getId = function() {
   return this.id;
};

Task.prototype.setId = function(id) {
   this.id = id;
};

Task.prototype.getCreatorId = function() {
   return this.creator_id;
};

Task.prototype.setCreatorId = function(creator_id) {
   this.creator_id = creator_id;
};

Task.prototype.getBody = function() {
   return this.body;
};

Task.prototype.setBody = function(body) {
   this.body = body;
};

Task.prototype.getCompleted = function() {
   return this.completed;
};

Task.prototype.setCompleted = function(completed) {
   this.completed = completed;
};

Task.prototype.getCreatedAt = function() {
   return this.created_at;
};

Task.prototype.setCreatedAt = function(created_at) {
   this.created_at = created_at;
};

Task.prototype.getUpdatedAt = function() {
   return this.updated_at;
};

Task.prototype.setUpdatedAt = function(updated_at) {
   this.updated_at = updated_at;
};