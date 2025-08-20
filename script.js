document.getElementById('generateBtn').addEventListener('click', generateUserAgent);
document.getElementById('checkBtn').addEventListener('click', validateUserAgent);

function generateUserAgent() {
  const device = document.getElementById('device').value;
  const browser = document.getElementById('browser').value;
  const os = document.getElementById('os').value;

  let userAgent = '';

  if (device === 'iPhone') {
    userAgent = `Mozilla/5.0 (iPhone; CPU iPhone OS ${os.replace('iOS ', '')} like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/14A329 ${browser}/5.0.38`;
  } else if (device === 'Android') {
    userAgent = `Mozilla/5.0 (Android; ${os}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Mobile Safari/537.36 ${browser}/5.0`;
  } else if (device === 'Samsung') {
    userAgent = `Mozilla/5.0 (Linux; Android ${os.replace('Android ', '')}; Samsung; Samsung Galaxy) AppleWebKit/537.36 (KHTML, like Gecko) Mobile/9.3.7 ${browser}/4.0`;
  }

  document.getElementById('userAgent').value = userAgent;
}

function validateUserAgent() {
  const userAgent = document.getElementById('userAgent').value;
  const validationMessage = document.getElementById('validationResult');

  if (userAgent.length > 0 && userAgent.includes('Mozilla') && userAgent.includes('AppleWebKit')) {
    validationMessage.textContent = 'User-Agent is valid!';
    validationMessage.style.color = 'green';
  } else {
    validationMessage.textContent = 'User-Agent is invalid!';
    validationMessage.style.color = 'red';
  }
}
