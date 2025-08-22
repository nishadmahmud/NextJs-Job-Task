# ShopVault - Next.js 15 E-commerce Platform

A modern e-commerce platform built with Next.js 15, featuring public product browsing and protected product management for authenticated users.

## 🚀 Features

- **Public Pages**: Landing page, product listing, and product details
- **Authentication**: Google OAuth integration with NextAuth.js
- **Protected Routes**: Product management dashboard for authenticated users
- **Database**: MongoDB integration with Mongoose ODM
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Dark Mode**: Theme toggle with persistent preferences
- **Real-time Updates**: Toast notifications and loading states

## 🛠️ Tech Stack

- **Frontend**: Next.js 15 (App Router)
- **Authentication**: NextAuth.js v5
- **Database**: MongoDB + Mongoose
- **Styling**: Tailwind CSS
- **Language**: JavaScript
- **Deployment**: Vercel (recommended)

## 📋 Prerequisites

- Node.js 18+ 
- MongoDB database (local or Atlas)
- Google OAuth credentials

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd shopvault
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Copy the example environment file and configure your variables:

```bash
cp env.example .env.local
```

Update `.env.local` with your configuration:

```env
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_nextauth_secret_key_here
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### 4. Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google` (development)
   - `https://yourdomain.com/api/auth/callback/google` (production)

### 5. MongoDB Setup

1. Create a MongoDB database (local or Atlas)
2. Get your connection string
3. Update `MONGODB_URI` in `.env.local`

### 6. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
shopvault/
├── app/                    # Next.js 15 App Router
│   ├── (auth)/            # Authentication routes
│   ├── dashboard/         # Protected dashboard routes
│   ├── products/          # Product pages
│   ├── api/               # API routes
│   └── layout.js          # Root layout
├── components/             # Reusable components
├── lib/                    # Utility functions
├── models/                 # MongoDB schemas
└── public/                 # Static assets
```

## 🔐 Authentication Flow

1. Users visit the landing page
2. Click "Sign In" to access Google OAuth
3. After successful authentication, redirected to products page
4. Authenticated users can access `/dashboard/add-product`
5. Unauthenticated users are redirected to login

## 🛍️ Product Management

- **Public Access**: Browse and view products
- **Protected Access**: Add, edit, and delete products (authenticated users only)
- **Categories**: Electronics, Clothing, Books, Home, Sports, Other
- **Search & Filter**: Real-time product filtering

## 🎨 Customization

### Styling
- Uses Tailwind CSS utility classes
- Dark mode support with theme toggle
- Responsive design for all screen sizes

### Components
- Modular component architecture
- Reusable UI components
- Consistent design system

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables
4. Deploy automatically

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Code Style

- JavaScript (ES6+)
- Tailwind CSS for styling
- Component-based architecture
- Responsive design principles

## 📱 Responsive Design

- Mobile-first approach
- Responsive navigation
- Adaptive layouts for all devices
- Touch-friendly interactions

## 🌙 Dark Mode

- System preference detection
- Manual toggle option
- Persistent user preference
- Smooth transitions

## 🔒 Security Features

- Protected API routes
- Authentication middleware
- Input validation
- Secure session management

## 📊 Database Schema

### User Model
```javascript
{
  _id: ObjectId,
  email: String,
  name: String,
  image: String,
  createdAt: Date
}
```

### Product Model
```javascript
{
  _id: ObjectId,
  name: String,
  description: String,
  price: Number,
  image: String,
  category: String,
  inStock: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

## 🚨 Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Check your connection string
   - Ensure MongoDB is running
   - Verify network access

2. **Google OAuth Error**
   - Verify client ID and secret
   - Check redirect URIs
   - Ensure Google+ API is enabled

3. **Build Errors**
   - Clear `.next` folder
   - Reinstall dependencies
   - Check Node.js version

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Check the troubleshooting section
- Review the documentation

## 🔮 Future Enhancements

- [ ] Shopping cart functionality
- [ ] User reviews and ratings
- [ ] Advanced search filters
- [ ] Payment integration
- [ ] Admin dashboard
- [ ] Email notifications
- [ ] Product images upload
- [ ] Order management

---

Built with ❤️ using Next.js 15 and modern web technologies.
