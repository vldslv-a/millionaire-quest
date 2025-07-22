# 🎮 Millionaire Quest

A "Who Wants to Be a Millionaire" game built with Next.js and TypeScript.

## 📝 Project Description

This project is an implementation of the classic "Who Wants to Be a Millionaire" game with the following features:

- Players answer 12 questions in sequence
- Each question has at least 4 possible answers with at least one correct answer
- Correct answers advance players to the next question
- Incorrect answers take players to the final results screen
- Responsive design that works from iPhone 8 to 4K displays

## 🚀 Live Demo

The project is published and accessible at [https://millionaire-quest-nine.vercel.app/](https://millionaire-quest-nine.vercel.app/)

## 🛠️ Technologies Used

- [Next.js](https://nextjs.org) - React framework
- TypeScript - Type safety
- Custom CSS (no frameworks) - Responsive design
- JSON configuration - Game questions and settings
- Vercel - Deployment platform

## 🔧 Setup & Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/vldslv-a/millionaire-quest.git
   cd millionaire-quest
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🏗️ Project Structure

The project uses a standard Next.js App Router structure:

- `src/app/` - Main application code
- `public/` - Static assets
- `src/components/` - Reusable UI components
- `src/data/` - Game configuration in JSON format

## 📋 Original Requirements

**Task**:

Implement the basic functionality of the "Who Wants to Be a Millionaire" game:

- The player answers 12 questions in sequence
- Each question has at least 4 possible answers and at least one correct one
- If the answer is correct - the player moves to the next question. If the answer is incorrect - the player is taken to the final screen
- The final screen should show the overall game result
- Design is provided [in Figma](https://www.figma.com/file/tIZEZn2HTAeSDQRzoOzvXE/Front-end-test%2C-Headway)
- Layout should be responsive

**Technical Requirements**:

- Use [this layout](https://www.figma.com/file/tIZEZn2HTAeSDQRzoOzvXE/Front-end-test%2C-Headway) for styling
- Make the layout responsive (from iPhone 8 to 4K displays)
- Implement layout without CSS frameworks
- Game config (questions, answers, money for correct answers, etc.) should be in JSON format
- Config should be extensible: more or fewer answer options per question, multiple correct answers, etc.
- Place the result on GitHub with an MD instruction on installation and launch
- Implement the task using NextJs and deploy on Vercel
- All client code should fully comply with "out of the box" eslint/airbnb rules
- All client code should be typed with TypeScript

**Optional**:
- Add eslint checks on git commit for changed files, and unit tests run on git push

**Evaluation Criteria**:
- Code that is easy to extend and maintain
- Architectural organization of the application
- Correct handling of non-standard situations

## 🚀 Deployment

The project is deployed on Vercel and can be accessed at [https://millionaire-quest-nine.vercel.app/](https://millionaire-quest-nine.vercel.app/).

## 👨‍💻 Development

To contribute to this project:

1. Create a feature branch
2. Make your changes
3. Submit a pull request
