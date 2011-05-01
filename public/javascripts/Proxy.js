function Proxy_Class()
{

}

Proxy_Class.prototype.request = function(options) {
   $.ajax({
      url: options.resource + '.json' + (options.params || ''),
      async: options.async || true,
      type: options.method || 'GET',
      data: options.data || {},
      success: options.success,
      error: options.error || {},
      contentType: options.contentType || '',
      statusCode: options.statusCode || {}
   });
};

Proxy_Class.prototype.getAll = function(resourceName, options) {
   options.resource = '/' + resourceName;
   return this.request(options);
};

Proxy_Class.prototype.create = function(resourceName, options) {
   options.resource = '/' + resourceName;
   options.method = 'POST';
   options.data = JSON.stringify(options.data);
   options.contentType = 'application/json';
   return this.request(options);
};

Proxy_Class.prototype.read = function(resourceName, resourceId, options) {
   options.resource = '/' + resourceName + '/' + resourceId;
   options.contentType = 'application/json';
   return this.request(options);
};

Proxy_Class.prototype.update = function (resourceName, resourceId, options) {
   options.resource = '/' + resourceName + '/' + resourceId;
   options.method = 'PUT';
   options.data = JSON.stringify(options.data);
   options.contentType = 'application/json';
   return this.request(options);
};

Proxy_Class.prototype.destroy = function (resourceName, resourceId) {
   var options = {
      resource : '/' + resourceName + '/' + resourceId,
      method : 'DELETE'
   };
   return this.request(options);
};