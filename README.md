# Calendar AI Agent

An intelligent calendar management assistant that helps you manage your Google Calendar using natural language commands. This AI-powered tool allows you to interact with your calendar in a conversational way, making calendar management more intuitive and efficient.

## Features

- 🤖 Natural language processing for calendar commands
- 📅 Create, read, update, and delete calendar events
- ⏰ Schedule appointments and meetings
- 🔍 View and search calendar events
- 🎯 Smart time slot management
- 🔐 Secure Google Calendar integration

## Prerequisites

- Node.js (v14 or higher)
- Google Cloud Platform account
- Google Calendar API credentials

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/calendar-ai-agent.git
cd calendar-ai-agent
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory with the following variables:
```
AI_STUDIO_API_KEY=<your google ai studio api key>
```

4. Set up Google Calendar API:
- Go to the Google Cloud Console
- Create a new project
- Enable the Google Calendar API
- Create credentials (OAuth 2.0 Client ID)
- Download the credentials and save them as `credentials.json` at root

## Usage

Start the application:
```bash
node index.js
```

### Example Commands

- "Add a meeting with John tomorrow at 2pm for 1 hour"
- "Schedule a doctor's appointment for next Monday at 10am"
- "Show my schedule for today"
- "Delete all events after 4pm on 10th may 2025"
- "Mark my calendar as busy from 8pm to 8:30pm for dinner today"

## Project Structure

```
calendar-ai-agent/
├── aiAssistant/     # AI assistant implementation
├── googleApi/       # Google Calendar API integration
├── prompts/         # AI prompt templates
├── tools/          # Agent tools
├── utilities/      # Helper functions
├── index.js        # Main application entry
└── package.json    # Project dependencies
```

## Dependencies

- @google-cloud/local-auth: For Google authentication
- @google/generative-ai: For AI capabilities
- @googleapis/calendar: Google Calendar API integration
- googleapis: Google APIs client
- moment: Date/time manipulation
- readline-sync: Command-line interface

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the ISC License.

## Support

For support, please open an issue in the GitHub repository.
