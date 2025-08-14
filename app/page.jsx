"use client";
import Link from "next/link";
import { FolderCode, CircleUser, Lightbulb, Mail, X, Send } from "lucide-react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { CopilotSidebar, RenderSuggestion } from "@copilotkit/react-ui";
import { useCopilotReadable } from "@copilotkit/react-core";

const CustomSuggestionsList = ({ suggestions, onSuggestionClick }) => {
  // Fallback to static suggestions if none are provided
  const defaultSuggestions = [
    {
      title: "Who is Lambe?",
      message: "Tell me about Lambe Boluwatife",
      partial: false,
    },
    {
      title: "Projects",
      message: "Show me Lambe's latest projects",
      partial: false,
    },
    {
      title: "Skills",
      message: "What are Lambe's core skills?",
      partial: false,
    },
    {
      title: "AI Experience",
      message: "Tell me about Lambe's AI agent development experience",
      partial: false,
    },
    {
      title: "Contact",
      message: "How can I contact Lambe for collaboration?",
      partial: false,
    },
  ];

  const suggestionsToShow =
    suggestions && suggestions.length > 0 ? suggestions : defaultSuggestions;

  return (
    <div className="suggestions flex flex-col gap-2 p-4">
      <h1 className="font-semibold text-lg">Try asking:</h1>
      <div className="flex gap-2 flex-wrap">
        {suggestionsToShow.map((suggestion, index) => (
          <RenderSuggestion
            key={index}
            title={suggestion.title}
            message={suggestion.message}
            partial={suggestion.partial}
            className="rounded-md border border-gray-300 bg-white px-3 py-2 shadow-md cursor-pointer hover:bg-[#00ff00] hover:text-black transition-colors duration-200"
            onClick={() => onSuggestionClick(suggestion.message)}
          />
        ))}
      </div>
    </div>
  );
};

// Create a separate component that uses the CopilotKit hooks
const PortfolioContent = () => {
  // Portfolio data for AI context
  const portfolioData = {
    name: "Lambe Boluwatife",
    role: "Full-Stack Developer",
    skills: ["MERN Stack", "AI Agents", "Mastra", "OpenAI", "React", "Node.js"],
    specialization: "responsive web applications and AI-powered agents",
    tools: ["Mastra framework", "OpenAI tools"],
    philosophy: "clean code, smart automation, and intuitive design",
  };

  // Make portfolio data available to AI
  useCopilotReadable({
    description: "L.B.D's portfolio information",
    value: portfolioData,
  });

  return (
    <>
      <main className="h-dvh p-4 lg:p-10 flex flex-col items-center font-poppins">
        <Header />
        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center w-full">
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-6 w-full items-center justify-center max-w-6xl">
            {/* Left Column */}
            <div className="w-full lg:w-3/5 p-2 lg:p-6">
              <h1 className="my-2 text-base text-[#00ff00]">Hello &#128075;</h1>
              <h1 className="my-2 text-xl md:text-3xl">I'm Lambe Boluwatife</h1>
              <h6 className="my-2 text-sm text-justify">
                I am a Full-Stack Developer passionate about building responsive
                web applications and AI-powered agents. I specialize in the MERN
                stack and have hands-on experience creating intelligent agents
                using frameworks like Mastra and OpenAI tools. I enjoy solving
                real-world problems through clean code, smart automation, and
                intuitive design.
              </h6>
              <Link
                href="/resume.pdf"
                rel="noreferrer"
                target="_blank"
                download="resume.pdf"
                className="mt-4 inline-block text-xs px-6 py-4 font-semibold bg-[#00ff00] text-black hover:bg-[#00cc00] transition duration-300"
              >
                Download Resume
              </Link>
            </div>

            {/* Right Column */}
            <div className="w-full lg:w-2/5 p-2 lg:p-6">
              <div className="flex flex-col gap-4 items-center justify-center">
                <div className="grid grid-cols-2 gap-6 w-full">
                  <Link
                    href="/projects"
                    className="py-10 border border-black dark:border-white flex flex-col items-center justify-center space-y-2 rounded-lg hover:bg-[#00ff00] transition duration-300"
                  >
                    <FolderCode size={40} />
                    <span className="text-xs font-bold">My Projects</span>
                  </Link>
                  <Link
                    href="/skills"
                    className="py-10 border border-black dark:border-white flex flex-col items-center justify-center space-y-2 rounded-lg hover:bg-[#00ff00] transition duration-300"
                  >
                    <Lightbulb size={40} />
                    <span className="text-xs font-bold">My Skills</span>
                  </Link>
                  <Link
                    href="/contact"
                    className="py-10 border border-black dark:border-white flex flex-col items-center justify-center space-y-2 rounded-lg hover:bg-[#00ff00] transition duration-300"
                  >
                    <Mail size={40} />
                    <span className="text-xs font-bold">Contact Me</span>
                  </Link>
                  <Link
                    href="/about"
                    className="py-10 border border-black dark:border-white flex flex-col items-center justify-center space-y-2 rounded-lg hover:bg-[#00ff00] transition duration-300"
                  >
                    <CircleUser size={40} />
                    <span className="text-xs font-bold">About Me</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </main>

      <CopilotSidebar
        RenderSuggestionsList={CustomSuggestionsList}
        labels={{
          initial:
            "👋 Hey there! I'm L.B.D's personal sidekick. What's on your mind?",
          title: "🤖 L.B.D Agent",
          placeholder:
            "Type away… ask me about Lambe Boluwatife, this portfolio, or even my favorite snacks! 🍪",
          stopGenerating: "✋ Chill, stop!",
          regenerateResponse: "🔄 Give it another go!",
        }}
        instructions={`You are the "Portfolio Agent", an intelligent assistant dedicated to helping users explore and understand the developer portfolio of Lambe Boluwatife.

You have access to a **knowledge base** containing detailed information about:
- Lambe Boluwatife's developer journey, history, and biography
- His technical skills, programming languages, and technologies used
- A list and breakdown of past and ongoing **projects**
- Work experience, internships, collaborations, and freelance work
- Educational background and certifications
- Community involvement and public activities
- Achievements, recognitions, and contributions to the tech ecosystem

You also have access to the **portfolio structure**, including:
- The various sections and pages (e.g., About, Projects, Skills, Contact, Resume, etc.)
- Page-specific content, descriptions, and navigation rules
- Any interactive or functional components (like blogs, demos, and GitHub integrations)

You are equipped with three powerful tools:
- **portfolioRagTool**: Use this to retrieve factual, structured information from the internal knowledge base of Lambe Boluwatife's portfolio and personal/professional background.
- **boluwatifeRagTool**: Use this to access deeper knowledge related to Lambe Boluwatife's life, identity, and personal story.
- **googleSearchTool**: Use this to search the web for up-to-date, external information about Lambe Boluwatife (e.g., public articles, LinkedIn profile, GitHub activity, interviews, or external project references).

=== CORE RESPONSIBILITIES ===
1. **Answer Portfolio Queries**:
   - Provide clear, concise answers to user questions about Lambe Boluwatife.
   - Cite and retrieve relevant information using the internal knowledge base via the \`portfolioRagTool\`.
   - Use the \`googleSearchTool\` only when additional or public data is needed beyond the internal knowledge base.

2. **Answer Questions About Lambe Boluwatife (Beyond Portfolio)**:
   - Respond to questions about Lambe Boluwatife's background, personal story, character, values, or achievements.
   - Use \`boluwatifeRagTool\` to access deeper knowledge related to his life and identity.
   - Use \`googleSearchTool\` to supplement with publicly available information if necessary.

3. **Guide Navigation and Exploration**:
   - Help users navigate Lambe's portfolio site by describing the available pages and what to expect on each.
   - Support users in locating specific sections (e.g., "Where can I find his backend projects?" or "How do I contact him?").
   - Assist in searching content across the portfolio (e.g., blog posts, testimonials, or showcase pages).

4. **Summarize and Present Information**:
   - Summarize Lambe's developer story or specific projects when requested.
   - Generate high-level overviews or deep dives into specific skillsets, timelines, or contributions.
   - Be ready to compare or highlight key projects or strengths based on user queries.

5. **Answer Project-Specific and Technical Questions**:
   - Explain the tech stacks used in each project.
   - Describe the problems solved, the approach taken, and the impact delivered.
   - Provide insight into Lambe's role, responsibilities, or the challenges tackled in those projects.

6. **Tone & Style**:
   - Communicate in a friendly, professional, and helpful manner.
   - Use clear, non-technical language when talking to non-technical users, but adapt when talking to developers.
   - Highlight Lambe Boluwatife's uniqueness, strengths, and professional philosophy where applicable.

=== RESPONSE BEHAVIOR ===
- Always check the internal portfolio knowledge base first using \`portfolioRagTool\`.
- If a user asks about something not found internally (e.g., recent media coverage), use \`googleSearchTool\`.
- For navigation requests, provide precise steps and brief descriptions of what users will see on each page.
- Summarize or elaborate on any part of Lambe's journey when asked (e.g., "Tell me about Lambe's internship experience.").
- Suggest follow-up content if a user shows interest (e.g., "Would you like to see his GitHub or contact page?").
- For personal or extended identity-related questions, use \`boluwatifeRagTool\`.
- Use \`googleSearchTool\` for current public info or when internal data is insufficient.
- For navigation, provide exact steps and what users will see or find.
- Be helpful, empathetic, and enthusiastic about sharing Lambe's journey.

**→ Do not preface responses with statements like "Based on the information I found..." or "From the data retrieved..." — instead, speak directly and confidently.**  
**→ Begin responses with clear, assertive facts (e.g., "Lambe Boluwatife is a Full-Stack Developer..." rather than "It appears that Lambe..." or "I found that..."**)

You are Lambe Boluwatife's official portfolio assistant. Your role is to make sure visitors get value, clarity, and inspiration from exploring his developer journey and help others discover his work, personality, values, and contributions through an intelligent, well-informed, and delightful experience.`}
        icons={{
          sendIcon: <Send size={16} className="text-[#00ff00]" />,
          closeIcon: <X size={16} className="text-[#00ff00]" />,
        }}
      />
    </>
  );
};

export default function LBDCodes() {
  return <PortfolioContent />;
}
