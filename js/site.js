
// Get Values
function getValues(){
  let start = parseInt(document.querySelector("#startValue").value);
  let end = parseInt(document.querySelector("#endValue").value);
  let numbers = generateNumbers(start, end);
  displayResults(numbers, end);
}

// Generate Numbers
function generateNumbers(start = 1, end = 100){
  let numbers = [];
  for (let i = start; i <= end; i++){
    numbers.push(i);
  }
  return numbers;
}

// Filter list
function filterValues(numbers, end){
  let filtered = "";
  let templateRow = "";
  let template = [];
  for (let i = 0; i <= numbers.length; i++) {
    if ( i % 5 == 0 & i != 0 || i == end){
      templateRow += filtered;
      template.push(templateRow);
      filtered = "";
      templateRow = "";
    }
    let td = "<td>";
    let number = numbers[i];
    if (number % 3 == 0 && number % 5 == 0) {
      td += "<span class='red'>Tada</span></td>";
    } else if (number % 3 == 0){
      td += "<span class='green'>Ta</span></td>";
    } else if (number % 5 == 0){
      td += "<span class='purple'>Da</span></td>";
    } else {
      td += `${number}</td>`;
    }
    filtered += td;
  }
  return template;
}

// Display Results
function displayResults(numbers, end){
  document.querySelector("#results").innerHTML = "";
  let result = filterValues(numbers, end);
  for (let i = 0; i < result.length; i++){
    document.querySelector("#results").innerHTML += `<tr>${result[i]}</tr>`;
  }
}
