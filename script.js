function convert() {
  const binary = document.getElementById('binary').value;
  const decimal = parseInt(binary, 2);
  document.getElementById('result').textContent = `Decimal: ${decimal}`;
}