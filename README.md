# Habit Tracker

## 🌐 Overview
The Habit Tracker is a web application designed to help users build and maintain positive habits. It allows users to track daily habits, view progress, and receive reminders and alerts to stay consistent with their goals.

## 🛠️ Tech Stack
- **Frontend & Backend**: Next.js
- **Styling**: Tailwind CSS
- **Email Service**: Nodemailer
- **Authentication**: JWT (JSON Web Token)
- **Database**: MongoDB

## 📋 Features
- **Daily Reminder**: Sends an email at 8 AM listing all pending habits for the day.
- **Daily Alert**: Sends an email at 8 PM if habits remain incomplete.
- **Progress Tracking**: Visualize daily progress using a progress bar.
- **Notifications**: Displays real-time notifications for habit updates and reminders.
- **Pending & Completed Goals**: Categorized views for habits yet to be completed and those already accomplished.

## 🤖 Features to Add in Future
1. **Link with Google Calendar**: Sync habits with Google Calendar for better scheduling and reminders.
2. **Profile Picture Customization**: Allow users to upload and update their profile pictures.
3. **Habits Tag Customization**: Enable users to tag and categorize their habits for better organization.
4. **Responsive Design**: Optimized for use on desktops, tablets, and mobile devices.

## ⚙️ Live Demo
Check out the live demo of the Habit Tracker [here](https://pvarma-habit-tracker.vercel.app).

## 📝 Figma Design
You can find the design prototype on Figma [here](https://www.figma.com/design/wxscjao9Nv6w63dh9uLPhN/Habit-Tracker?node-id=0-1&t=HxC3g2AsFCEAKoNC-1).

## 🚀 Getting Started

### Installation Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/pvarma-05/Habit-Tracker.git
   ```
2. Navigate to the project directory:
   ```bash
   cd habit-tracker
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables:
   Create a `.env.local` file and include the following:
   ```env
   MONGO_URI=your_mongo-uri
   JWT_SECRET=your_jwt_secret
   EMAIL_USER=your_email
   EMAIL_PASS=your_password
   CRON_SECRET=your_cron_secret
   ```
5. Run the development server:
   ```bash
   npm run dev
   ```
6. Open your browser and navigate to `http://localhost:3000` to access the application.

## Contributing
Contributions are welcome! If you have suggestions or want to add features, feel free to fork the repo and create a PR.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Made with ❤️ by Pradeep Varma