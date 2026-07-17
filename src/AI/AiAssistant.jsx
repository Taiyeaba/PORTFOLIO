import { useState, useEffect, useRef } from "react";
import { portfolioKnowledge } from "./portfolioKnowledge";
import { Send, User, Bot, Mic, MicOff, Trash2 } from "lucide-react";

const AiAssistant = () => {
  const [question, setQuestion] = useState("");
  const [conversation, setConversation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const chatEndRef = useRef(null);
  const recognitionRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [conversation]);

  useEffect(() => {
    if (typeof window !== "undefined" && ("webkitSpeechRecognition" in window || "SpeechRecognition" in window)) {
      const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = "en-US";

      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        generateAnswer(transcript);
        setIsListening(false);
      };

      recognitionRef.current.onerror = () => {
        setIsListening(false);
      };
    }
  }, []);

  const toggleVoiceInput = () => {
    if (!recognitionRef.current) {
      alert("Speech recognition not supported in your browser.");
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  const generateAnswer = (customQuestion = null) => {
    const qText = customQuestion || question;
    const q = qText.trim().toLowerCase();
    if (!q) return;

    setIsLoading(true);
    if (!customQuestion) setQuestion("");
    
    const userMessage = { type: "user", content: qText };
    setConversation(prev => [...prev, userMessage]);

    setTimeout(() => {
      let response = "";

      if (q.includes("about") || q.includes("who are you") || q.includes("introduce") || q.includes("name") || q.includes("taiyeaba")) {
        response = portfolioKnowledge.about;
      } 
      else if (q.includes("skill") || q.includes("technology") || q.includes("stack") || q.includes("language")) {
        response = portfolioKnowledge.skills;
      } 
      else if (q.includes("project") || q.includes("work") || q.includes("portfolio")) {
        response = portfolioKnowledge.projects;
      } 
      else if (q.includes("ai") || q.includes("artificial intelligence") || q.includes("gpt")) {
        response = portfolioKnowledge.ai;
      } 
      else if (q.includes("contact") || q.includes("hire") || q.includes("reach") || q.includes("email") || q.includes("phone")) {
        response = portfolioKnowledge.contact;
      } 
      else if (q.includes("hello") || q.includes("hi") || q.includes("hey") || q.includes("hola")) {
        response = "Hello! I'm Taiyeaba's AI assistant 🤖. How can I help you today? You can ask about her skills, projects, or experience with AI.";
      }
      else if (q.includes("thank") || q.includes("cool") || q.includes("awesome")) {
        response = "You're welcome! Feel free to ask anything else about Taiyeaba's portfolio. Have a great day! 🌟";
      }
      else {
        response = "I'm Taiyeaba's AI assistant 🤖. You can ask about:\n• Her skills and technologies\n• Projects and work experience\n• How she uses AI in development\n• How to contact or hire her\n\nTry questions like 'What projects have you worked on?' or 'Tell me about your skills'";
      }

      const botMessage = { type: "bot", content: response };
      setConversation(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 700);
  };

  const clearChat = () => {
    setConversation([]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      generateAnswer();
    }
  };

  const suggestedQuestions = [
    "What skills do you have?",
    "Tell me about your projects",
    "How do you use AI in development?",
    "How can I contact you?"
  ];

  return (
    <section id="ai" className="py-24 bg-obsidian relative">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-14 text-center">
          <h2 className="text-sm font-bold text-cyber-purple tracking-widest uppercase mb-2">
            Intelligence Core
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold font-heading text-white">
            Talk to My <span className="bg-gradient-to-r from-cyber-cyan to-cyber-purple bg-clip-text text-transparent font-extrabold">Neural Assistant</span>
          </h3>
          <div className="h-1 w-20 bg-gradient-to-r from-cyber-cyan to-cyber-purple mt-4 rounded-full mx-auto"></div>
        </div>

        {/* AI Console Wrapper */}
        <div className="relative rounded-3xl overflow-hidden glass-panel border border-white/5 shadow-2xl">
          
          {/* Top Panel Bar */}
          <div className="bg-white/5 border-b border-white/5 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-cyber-cyan to-cyber-purple flex items-center justify-center shadow-lg">
                <Bot size={18} className="text-white" />
              </div>
              <div className="text-left">
                <h4 className="text-sm font-bold text-white tracking-wide">Taiyeaba_AI_v1.0</h4>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan animate-pulse"></span>
                  <span className="text-[10px] text-cyber-cyan/85 font-mono uppercase tracking-widest">Core Online</span>
                </div>
              </div>
            </div>
            {conversation.length > 0 && (
              <button
                onClick={clearChat}
                className="flex items-center gap-2 text-xs text-gray-500 hover:text-rose-400 bg-white/5 hover:bg-rose-500/10 px-3 py-1.5 rounded-lg border border-white/5 hover:border-rose-500/20 transition-all active:scale-95"
              >
                <Trash2 size={13} />
                <span>Reset Terminal</span>
              </button>
            )}
          </div>

          {/* Messages Console Box */}
          <div className="h-[450px] overflow-y-auto px-6 py-8 bg-[#07080e]/40 space-y-6 scrollbar-thin">
            {conversation.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-tr from-cyber-cyan/10 to-cyber-purple/10 border border-cyber-cyan/20 rounded-full flex items-center justify-center text-cyber-cyan mb-6 shadow-inner animate-float">
                  <Bot size={36} />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Neural Terminal Initialized</h4>
                <p className="text-sm text-gray-400 max-w-sm mb-8">
                  Query my data registry regarding skills, architectures, current projects, and contact nodes.
                </p>
                
                {/* Hologram keys list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full max-w-md">
                  {suggestedQuestions.map((q, index) => (
                    <button
                      key={index}
                      onClick={() => generateAnswer(q)}
                      className="text-left text-xs font-semibold p-3.5 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-cyber-cyan/30 rounded-xl text-gray-300 hover:text-white transition-all active:scale-[0.98] flex items-center justify-between group shadow-lg"
                    >
                      <span>{q}</span>
                      <span className="text-[10px] text-cyber-cyan opacity-0 group-hover:opacity-100 transition-opacity">RUN ➜</span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {conversation.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex gap-3.5 ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {/* Bot Icon */}
                    {msg.type === "bot" && (
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyber-purple/10 border border-cyber-purple/20 flex items-center justify-center text-cyber-purple mt-1 shadow-md">
                        <Bot size={16} />
                      </div>
                    )}
                    
                    {/* Bubble */}
                    <div
                      className={`max-w-[78%] p-4 rounded-2xl text-sm leading-relaxed text-left ${
                        msg.type === "user"
                          ? "bg-gradient-to-r from-cyber-purple to-cyber-pink text-white rounded-br-none shadow-lg shadow-cyber-purple/15 border border-white/5"
                          : "bg-white/5 border border-white/5 text-gray-300 rounded-bl-none shadow-lg"
                      }`}
                    >
                      <p className="whitespace-pre-line font-sans">{msg.content}</p>
                    </div>

                    {/* User Icon */}
                    {msg.type === "user" && (
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 mt-1">
                        <User size={16} />
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Loader dots */}
                {isLoading && (
                  <div className="flex gap-3.5 justify-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyber-purple/10 border border-cyber-purple/20 flex items-center justify-center text-cyber-purple">
                      <Bot size={16} />
                    </div>
                    <div className="bg-white/5 border border-white/5 rounded-2xl rounded-bl-none p-4 flex items-center justify-center shadow-md">
                      <div className="flex gap-1.5">
                        <div className="w-1.5 h-1.5 bg-cyber-cyan rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                        <div className="w-1.5 h-1.5 bg-cyber-cyan rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                        <div className="w-1.5 h-1.5 bg-cyber-cyan rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>
            )}
          </div>

          {/* Form Input Deck */}
          <div className="p-5 bg-white/5 border-t border-white/5">
            <div className="flex gap-3">
              
              {/* Text Area input */}
              <div className="flex-1 relative">
                <textarea
                  className="w-full bg-[#05060b]/60 border border-white/5 hover:border-white/10 focus:border-cyber-cyan/40 p-4 pr-14 rounded-2xl focus:outline-none focus:ring-1 focus:ring-cyber-cyan/10 resize-none text-sm text-white placeholder-gray-500 font-sans shadow-inner transition-all h-[56px] overflow-hidden"
                  placeholder="Type queries regarding portfolio..."
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  onKeyDown={handleKeyDown}
                  rows="1"
                />
                
                {/* Voice button */}
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2">
                  <button
                    onClick={toggleVoiceInput}
                    className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                      isListening 
                        ? "bg-rose-500 text-white animate-pulse" 
                        : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
                    }`}
                    title={isListening ? "Listening..." : "Voice Input"}
                  >
                    {isListening ? <MicOff size={16} /> : <Mic size={16} />}
                  </button>
                </div>
              </div>

              {/* Submit keys */}
              <button
                onClick={() => generateAnswer()}
                disabled={isLoading || !question.trim()}
                className="bg-gradient-to-r from-cyber-purple to-cyber-pink hover:opacity-95 disabled:opacity-40 disabled:hover:scale-100 text-white font-bold text-xs uppercase tracking-wider px-6 py-4 rounded-2xl flex items-center gap-2 transition-all active:scale-[0.97] hover:scale-103 shadow-lg shadow-cyber-purple/10"
              >
                {isLoading ? (
                  <>
                    <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Processing</span>
                  </>
                ) : (
                  <>
                    <Send size={13} />
                    <span>Run Query</span>
                  </>
                )}
              </button>

            </div>

            {/* Quick chips bar */}
            {conversation.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/5">
                {suggestedQuestions.map((q, index) => (
                  <button
                    key={index}
                    onClick={() => generateAnswer(q)}
                    className="text-[10px] font-bold uppercase tracking-wider px-3.5 py-1.5 bg-cyber-purple/10 hover:bg-cyber-purple/20 text-cyber-purple hover:text-white border border-cyber-purple/25 rounded-xl transition-all"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

export default AiAssistant;