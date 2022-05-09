<html>
<body>

<form>
<label>Name</label> 
<input type="text"placeholder="Enter your name" size="20">
<br><br>
<label>age</label> 
<input type="text"placeholder="Enter your age" >
<br><br>
<label>gender</label> 
<input type="text"placeholder="Enter your gender" >
<br>
<label>phonenumber</label> 
<input type="phonenumber"placeholder="Enter your phonenumber">
<br>
<label>email</label> 
<input type="email"placeholder="Enter your email" >
<br><br></br>
<button onclick="myFunction()" class="on" >submit</button>
</form>


<table style="width:80%">
  <tr>
    <th>name</th>
    <th>age</th>
    <th>gender</th>
    <th>phonenumber</th>
    <th>email</th>
  </tr>
  <tr>
    <td>aishwarya</td>
    <td>20</td>
    <td>female</td>
    <td>898379274</td>
    <td>ss@gmail.com</td>
  </tr>
  <tr>
     <td>ravi</td>
    <td>36</td>
    <td>male</td>
    <td>897658869</td>
    <td>tdss@gmail.com</td>
  </tr>
</table>

<button onclick="myFunction()" class="on" >submit</button>



</body>
</html>

function myFunction() {
  alert("I am an alert box!");
}