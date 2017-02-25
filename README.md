# displayCounter
Simple counter with all possible options clubbed in div tag.
---

##Installation
Include the displayCounterJS.js after including the jQuery

```html
<script src="/path/to/displayCounterJS.js"></script>
```

or

Install using npm
```
npm install displaycounter
```

#Example : 

```html
<html>
<head>
	<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
	<script src="displayCounterJS.js"></script>
</head>

<body>
	<div id="displayCounter" min="23" max="2000" increment="3" delay="1000" ></div>
	
	<script>
		$.fndisplayCounter("displayCounter");
	</script>
	
</body>
</html>
```

min
- Starting value of the counter to start with.
	
max
- Maximum value the counter shall reach.

increment
- Increament value.
  
delay
- Delay in mili seconds.
