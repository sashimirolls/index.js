const CHAT_BUTTON_WIDTH = 120; // width of the chat button in pixels
const CHAT_BUTTON_HEIGHT = 50; // height of the chat button in pixels
const CHAT_BUTTON_BACKGROUND_COLOR = 'black'; // background color of the chat button
const CHAT_BUTTON_BORDER_RADIUS = '15px'; // rounded edges for the rectangle
const scriptTag = document.currentScript;

const CHAT_BUTTON_ICON = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H6L4 18V4H20V16Z" fill="#FFFFFF"/>
  </svg>
`;

// Create the chat button element
const chatButton = document.createElement('div');

// Apply styles to the chat button
chatButton.setAttribute('id', 'chatbase-bubble-button');
chatButton.style.position = 'fixed';
chatButton.style.bottom = '20px';
chatButton.style.right = '20px';
chatButton.style.width = CHAT_BUTTON_WIDTH + 'px';
chatButton.style.height = CHAT_BUTTON_HEIGHT + 'px';
chatButton.style.borderRadius = CHAT_BUTTON_BORDER_RADIUS;
chatButton.style.backgroundColor = CHAT_BUTTON_BACKGROUND_COLOR;
chatButton.style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2)';
chatButton.style.cursor = 'pointer';
chatButton.style.zIndex = 999999999;
chatButton.style.transition = 'all .2s ease-in-out';
chatButton.style.display = 'flex';
chatButton.style.alignItems = 'center';
chatButton.style.justifyContent = 'space-around';
chatButton.innerText = "Chat"; // Add a label

chatButton.addEventListener('mouseenter', (event) => {
  chatButton.style.transform = 'scale(1.05)';
});
chatButton.addEventListener('mouseleave', (event) => {
  chatButton.style.transform = 'scale(1)';
});

// Create the chat button icon element
const chatButtonIcon = document.createElement('div');
chatButtonIcon.innerHTML = CHAT_BUTTON_ICON;
chatButton.appendChild(chatButtonIcon);

// Toggle the chat component when the chat button is clicked
chatButton.addEventListener('click', () => {
  if (chat.style.display === 'none') {
    chat.style.display = 'flex';
  } else {
    chat.style.display = 'none';
  }
});

const chat = document.createElement('div');
chat.setAttribute('id', 'chatbase-bubble-window');

chat.style.position = 'fixed';
chat.style.top = '0';
chat.style.left = '0';
chat.style.width = '100vw';
chat.style.height = '100vh';
chat.style.background = 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)'; // Gradient background
chat.style.display = 'none';
chat.style.zIndex = 999999999;
chat.style.overflow = 'hidden';
chat.style.justifyContent = 'center';
chat.style.alignItems = 'center';
chat.style.display = 'flex';
chat.style.flexDirection = 'column';

document.body.appendChild(chat);

chat.innerHTML = `<span style="color: white; font-size: 24px; margin-bottom: 20px;">Lilith</span>
<iframe src="${scriptTag.id}" width="80%" height="70%" frameborder="0"></iframe>`;

document.body.appendChild(chatButton);
