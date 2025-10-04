# Upkraft Dashboard 🎹

A modern, responsive React dashboard for music tutors and educational platforms. Built with React 18 and featuring a clean, intuitive interface for managing students, lessons, and performance tracking.

![Upkraft Dashboard](./Task%20Upkraft.jpeg)

## ✨ Features

- **📊 Interactive Dashboard**: Complete overview of tutor activities and performance metrics
- **👥 Student Management**: Track active students and their progress
- **📚 Course Management**: Manage multiple courses and assignments
- **📅 Lesson Scheduling**: View upcoming lessons with detailed information
- **📈 Performance Analytics**: Visual charts showing course and student performance
- **💰 Refer & Earn Program**: Built-in referral system for growth
- **💬 Feedback System**: Integrated feedback management
- **🎨 Modern UI**: Clean, professional design with responsive layout
- **⚡ Fast Performance**: Optimized React components with modern best practices

## 🚀 Live Demo

Check out the live demo: [Upkraft Dashboard](https://typhonshambo.github.io/upkraft-task)

## 🛠️ Tech Stack

- **Frontend**: React 18.2.0
- **Icons**: Lucide React
- **Styling**: Pure CSS with modern flexbox/grid layouts
- **Build Tool**: Create React App
- **Linting**: ESLint with React and React Hooks plugins
- **Deployment**: GitHub Pages

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/typhonshambo/upkraft-task.git
   cd upkraft-task
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application.

## 🏗️ Available Scripts

In the project directory, you can run:

### `npm start` or `npm run dev`
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`
Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run lint`
Runs ESLint to check for code quality issues and potential bugs.

### `npm run lint:fix`
Automatically fixes ESLint issues that can be resolved automatically.

### `npm run deploy`
Deploys the application to GitHub Pages.

## 📁 Project Structure

```
upkraft-task/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/         # React components
│   │   ├── Dashboard.js    # Main dashboard component
│   │   ├── Sidebar.js      # Navigation sidebar
│   │   ├── ProfileCard.js  # Tutor profile display
│   │   ├── UpcomingLessons.js    # Lesson schedule
│   │   ├── PerformanceCharts.js  # Analytics charts
│   │   ├── ReferEarn.js    # Referral program
│   │   ├── Feedback.js     # Feedback management
│   │   └── *.css          # Component styles
│   ├── App.js             # Main app component
│   ├── App.css            # Global app styles
│   ├── index.js           # React entry point
│   └── index.css          # Global styles
├── package.json           # Project dependencies
├── eslint.config.mjs      # ESLint configuration
└── README.md             # This file
```

## 🎨 Key Components

### Dashboard
The main dashboard provides a comprehensive overview including:
- Search functionality
- User profile and notifications
- Grid layout for different sections

### Sidebar Navigation
- **Home**: Dashboard overview
- **My Students**: Student management
- **Courses**: Course catalog
- **Calendar**: Schedule management
- **Assignment**: Task tracking
- **Music Library**: Resource management
- **Practice Studio**: Interactive learning
- **Payment Summary**: Financial overview
- **Refer & Earn**: Growth tools
- **Settings**: Configuration options

### Profile Card
Displays tutor information with key metrics:
- Active student count (30)
- CSAT Score (80%)
- Assignment completion rate (15%)

### Performance Charts
Visual analytics showing:
- Overall course performance (7.6/10)
- Student performance metrics (6.6/10)

### Upcoming Lessons
Comprehensive lesson scheduler with:
- Date and time information
- Course details
- Student assignments
- Easy navigation between lessons

## 🔧 Configuration

### ESLint Configuration
The project uses ESLint 9+ with the new flat config format:
- React and React Hooks rules
- Modern JavaScript standards
- Consistent code formatting
- No unused variable warnings

### Code Quality Standards
- **Consistent Formatting**: 2-space indentation, single quotes
- **No Trailing Spaces**: Clean line endings
- **Modern React**: No unnecessary React imports (React 17+ JSX transform)
- **Best Practices**: React hooks rules and warnings for potential issues

## 🚢 Deployment

The project is configured for easy deployment to GitHub Pages:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

The deployment workflow is also automated via GitHub Actions (see `.github/workflows/deploy.yml`).

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Run linting: `npm run lint`
4. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
5. Push to the branch (`git push origin feature/AmazingFeature`)
6. Open a Pull Request

## 📋 Code Quality

This project maintains high code quality standards:
- ✅ Zero ESLint errors
- ✅ Zero ESLint warnings
- ✅ Modern React best practices
- ✅ Clean, maintainable code structure
- ✅ Responsive design patterns

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👥 Author

Created as part of the Upkraft development task.

---

## 🐛 Issues & Support

If you encounter any issues or have questions, please [open an issue](https://github.com/typhonshambo/upkraft-task/issues) on GitHub.

---

**Built with ❤️ using React and modern web technologies**
