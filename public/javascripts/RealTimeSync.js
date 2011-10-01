function RealTimeSync_Class() {
   this.client = new Faye.Client('http://' + document.domain + ':8080/comet');
   this.task_subscription = this.client.subscribe('/tasks', this.handleTaskMessage);
}

RealTimeSync_Class.prototype = {
   client : null,
   task_subscription : null
};

RealTimeSync_Class.prototype.handleTaskMessage = function(message) {
   console.log(message);
};