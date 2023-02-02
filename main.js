const typeInputElement = document.getElementById('message');
const sendButtonElement = document.getElementById('send-btn');
const chatElement = document.getElementById('chat');

sendButtonElement.addEventListener("click", (event) => {
  event.preventDefault();

  const message = typeInputElement.value;

  sendMessage(message);
});

typeInputElement.addEventListener("keypress", (event) => {
  const message = typeInputElement.value;

  if (event.key === 'Enter') {
    event.preventDefault();
    sendMessage(message);
  }
});

function sendMessage(message) {
  const time = currentTime();

  chatElement.innerHTML += `
    <div class="chat__message chat__message--sent">
      <span class="chat__user">Você - ${time}</span>
      <div class="chat__textbox chat__textbox--sent">
        <p class="chat__text">${message}</p>
      </div>
    </div>
  `;

  typeInputElement.value = '';
}

function currentTime() {
  const date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();

  hh = (hh < 10) ? "0" + hh : hh;
  mm = (mm < 10) ? "0" + mm : mm;

  return `${hh}:${mm}`;
}

