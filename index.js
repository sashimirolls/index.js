const CHAT_BUTTON_WIDTH = 120; // width of the chat button in pixels
const CHAT_BUTTON_HEIGHT = 50; // height of the chat button in pixels
const CHAT_BUTTON_BACKGROUND_COLOR = 'red'; // darker background color for contrast
const CHAT_BUTTON_BORDER_RADIUS = '15px'; // rounded edges for the rectangle

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
chatButton.style.bottom = '50%'; // Center the button vertically
chatButton.style.right = '50%'; // Center the button horizontally
chatButton.style.transform = 'translate(50%, 50%)'; // Ensure true centering by translating by half of its size
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

// Create the chat button icon element
const chatButtonIcon = document.createElement('div');
chatButtonIcon.innerHTML = CHAT_BUTTON_ICON;
chatButton.appendChild(chatButtonIcon);

// Chat Screen
const chat = document.createElement('div');
chat.setAttribute('id', 'chatbase-bubble-window');
chat.style.position = 'fixed';
chat.style.top = '0';
chat.style.left = '0';
chat.style.width = '100vw';
chat.style.height = '100vh';
chat.style.background = 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)'; // Gradient background
chat.style.zIndex = 999999999;
chat.style.overflow = 'hidden';
chat.style.justifyContent = 'center';
chat.style.alignItems = 'center';
chat.style.display = 'none'; // Hidden by default
chat.style.flexDirection = 'column';

const lilithLabel = document.createElement('span');
lilithLabel.innerText = "Lilith";
lilithLabel.style.color = 'white';
lilithLabel.style.fontSize = '24px';
lilithLabel.style.marginBottom = '20px';
chat.appendChild(lilithLabel);

const iframe = document.createElement('iframe');
iframe.src = "chat.html"; // Placeholder URL for the chat content
iframe.width = "80%";
iframe.height = "70%";
iframe.frameBorder = "0";
chat.appendChild(iframe);

document.body.appendChild(chat);
document.body.appendChild(chatButton);

// Toggle the chat component when the chat button is clicked
chatButton.addEventListener('click', () => {
  if (chat.style.display === 'none' || chat.style.display === '') {
    chat.style.display = 'flex';
    chatButton.style.display = 'none'; // Hide the chat button
  } else {
    chat.style.display = 'none';
    chatButton.style.display = 'flex'; // Show the chat button
  }
});
