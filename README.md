# Habit Tracker Web App

This is a **Habit Tracker Web App** that allows users to track their habits, set goals, receive reminders, and monitor their progress. The app features a personalized dashboard, habit tracking, and detailed progress reports.

## Features

- **User Registration and Login**: Users can create an account, log in, and track their habits.
- **Goal Tracking**: Set daily, weekly, and long-term goals.
- **Notifications**: Receive email notifications for daily goals and reminders for incomplete tasks.
- **Progress Dashboard**: View progress through charts and historical tracking.
- **Customizable Habit Categories**: Users can customize habit categories and set priorities.
- **Integration with Google Calendar**: Sync reminders with Google Calendar.
- **User Profile & Settings**: Manage user details and account settings.

## Tech Stack

- **Frontend & Backend**: NEXT.js
- **Database**: MongoDB
- **Authentication**: JWT
- **Notifications**: Email (via Nodemailer)
- **APIs**: Google Calendar API

## Live Demo

Will Provide Soon

## Figma Design

You can view the design mockups of the app on Figma: [Figma Design File Link](https://www.figma.com/design/wxscjao9Nv6w63dh9uLPhN/Habit-Tracker?node-id=0-1&t=VHEuQB8VNXxuNIKb-1)

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/pvarma-05/Habit-Tracker.git
    cd habit-tracker
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Set up environment variables**:
   
   Create a `.env` file in the root of the project and add the following variables:

    ```bash
    MONGO_URI=your-mongo-uri
    JWT_SECRET=your-jwt_secret
    EMAIL_USER=your-service-email
    EMAIL_PASS=your-service-password
    ```

4. **Run the development server**:

    ```bash
    npm run dev
    ```

5. **Visit**: [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

Once the app is running locally:

1. **Sign up** to create a new user account.
2. **Log in** to access the Habit Tracker Dashboard.
3. **Set new habits** and track your progress.
4. **Customize notifications** to receive reminders about your goals.
5. **View progress** through the dashboard with historical data and charts.

## Contributing

Contributions are welcome! If you have suggestions or want to add features, feel free to fork the repo and create a PR.

<!-- ### Steps for contributing:
1. Fork the repository.
2. Create a new branch for your changes.
3. Commit your changes.
4. Push to your forked repository.
5. Create a pull request with a description of your changes. -->

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to [Next.js](https://nextjs.org/) for making development fast and simple.
- Thanks to [Figma](https://www.figma.com/) for providing the design tool.
- Special thanks to anyone who contributed to or tested the app.

---

## Made with ❤️ by Pradeep Varma