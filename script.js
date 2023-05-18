function findMinMax() {
    let input = document.getElementById("numbersInput").value;
    let numbers = input.split(",").map(Number);

    let minimum = numbers[0];
    let maximum = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] < minimum) {
        minimum = numbers[i];
      }

      if (numbers[i] > maximum) {
        maximum = numbers[i];
      }
    }

    let result = {
      minima: minimum,
      
      maxima: maximum
    };

    document.getElementById("result").textContent = JSON.stringify(result);
  }