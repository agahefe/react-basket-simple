# E-Commerce Shopping Cart with React

A simple e-commerce basket application demonstrating:
- Component drilling state management
- React-Bootstrap UI components
- AlertifyJS flash notifications
- Mock API with `json-server`

## Screenshots

- Main Page
![Main Page](https://github.com/user-attachments/assets/f8b0594c-9ba9-4542-a0d3-adb7fd721585)

- Cart
![Cart](https://github.com/user-attachments/assets/e2420da7-43a2-4b6c-8c3a-6d7fdce5e0dc)

- Add Product
![Add Product](https://github.com/user-attachments/assets/e86a31da-ab27-42e6-b08a-e1c181f87ef0)

## Features
- ✅ Add/remove products from cart
- ✅ Dynamic quantity adjustment
- ✅ Real-time cart total calculation
- ✅ Responsive design with React-Bootstrap
- ✅ Toast notifications with AlertifyJS

## Installation

### Frontend Setup

```bash
npm install
npm run dev
```

### Mock API Setup

Navigate to the api folder:
```bash
    cd api
```
Start the JSON server:
```bash
    npx json-server db.json --port 3004
```
### Project Structure

`/src`  
├── `/components`      # Reusable UI components  
├── `/pages`           # Main application views  
└── `/context`         # (Planned for state management)  
`/api`  
└── `db.json`          # Mock database

## Dependencies

- React 18
- React-Bootstrap
- AlertifyJS
- React-icons
- Axios

## Credits

- JSON-Server for mock API
- React-Bootstrap for UI components
- AlertifyJS for notifications
