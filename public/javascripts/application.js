THOMIS = THOMIS || {};
THOMIS.Ajax = {
   request : function(options) {
      $.ajax({
         url: 'http://thom.is/' + options.resource + (options.dataType == 'json' ? '.json' : ''),
         type: options.method,
         data: options.data,
         dataType: options.dataType,
         success: options.success,
         error: options.error || {},
         contentType: options.contentType || ''
      });
   }
}
THOMIS.Ui = {
   
}