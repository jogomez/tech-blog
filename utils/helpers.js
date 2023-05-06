module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
    // takes in a timestamp and return a custom formatted string
    format_time: (date) => {
      //'toLocaleTimeString()' method to format the time with custom parameters
      return date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
      });
   },
  select: function(value, options) {
    
    console.log('value :>> ', value);
    console.log('options :>> ', options);
    // Create a select element 
    var select = document.createElement('select');

    // Populate it with the option HTML
    select.innerHTML = options.fn(this);

    // Set the value
    select.value = value;

    // Find the selected node, if it exists, add the selected attribute to it
    if (select.children[select.selectedIndex])
        select.children[select.selectedIndex].setAttribute('selected', 'selected');
    return select.innerHTML;
  },
      //cuts the length of blog content down for front page/index
      format_summary: (content) => {
        if (content.length > 300) {
            return content.substring(0, 300) + "...";
        } else {
            return content;
        }
    },
};
