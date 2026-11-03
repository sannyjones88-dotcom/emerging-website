/* ===================================================
   EMERGING TECHNOLOGIES - Student-Friendly Interactive Platform
   Chapter 10 | Information Technology College Report
   =================================================== */

'use strict';

// ==========================================
// 1. DATA: ALL 15 CHAPTER 10 TOPICS
// Student-friendly explanations, school examples & classmate pitches
// ==========================================
const TOPICS_DATA = [
  {
    id: 1,
    number: "TOPIC 01",
    category: "strategy",
    title: "Understanding Emerging Technologies & IT Trends",
    icon: "🔮",
    tagline: "The new innovations shaping how we study, work, and live",
    categoryLabel: "IT Trends",
    accent: "linear-gradient(90deg, #00f0ff, #38bdf8)",
    shortDesc: "Emerging technologies are exciting new inventions moving from labs into everyday school and work life. Discover how innovations grow into the tools we use daily.",
    tags: ["Digital Transformation", "Tech Life Cycle", "School Innovation"],
    
    // Quick Classmate Pitch
    classmatePitch: "Emerging tech is like a brand-new feature that just released in beta: not everyone uses it yet, but in a couple of years, it will be as normal as smartphones and Wi-Fi.",

    // A. WHAT IS IT?
    what: {
      definition: "An emerging technology is any new, growing innovation that has the potential to change how schools, companies, and people solve problems and get work done.",
      purpose: "Its main purpose is to make life easier, faster, and more efficient — helping students learn better, helping doctors treat patients, and doing jobs that older tools can't handle.",
      differentiation: "Established technologies are things we already take for granted (like laptop keyboards, 4G Wi-Fi, and Google Drive). Emerging technologies are the next wave — like AI study assistants, self-driving shuttles, and virtual reality classrooms."
    },

    // B. WHERE DID IT COME FROM?
    history: {
      originYear: "1995 (Gartner Hype Cycle) & The Internet Era",
      pioneers: "Dr. Jackie Fenn (Gartner Analyst) & NASA Engineers",
      narrative: "In the 1970s, NASA created a simple 1-to-9 scale to measure whether a space invention was just an idea or ready for launch. In 1995, a researcher named Jackie Fenn showed that every new technology goes through a cycle: first people get super excited, then they realize it has flaws, and finally, after fixing the bugs, it becomes a trusted everyday tool."
    },

    // C. HOW DOES IT WORK?
    how: {
      intro: "Every piece of technology you use today followed four simple, natural stages from someone's brain into your backpack:",
      steps: [
        { icon: "💡", label: "1. The Big Idea", desc: "A researcher or student asks: 'Can we build an app or machine to solve this headache?'" },
        { icon: "🧪", label: "2. The Prototype", desc: "Engineers build an early sample. It's glitchy and rough, but it proves the idea works." },
        { icon: "🏫", label: "3. School & Beta Tests", desc: "A few adventurous schools or companies test it in daily classes to find bugs." },
        { icon: "🎒", label: "4. Everyone Has It", desc: "Prices drop, the app becomes easy to use, and soon every student relies on it." }
      ],
      analogy: "Think of it like learning to ride a bike: first you watch videos, then you use training wheels, you wobble and fall a few times, and finally you ride smoothly without even thinking about it."
    },

    // D. ADVANTAGES
    advantages: [
      { title: "Exciting New College Careers", desc: "Creates awesome jobs in AI prompt design, cyber defense, and game tech that your older siblings never had." },
      { title: "Saves Hours of Boring Manual Work", desc: "Automates tedious tasks like filing paper enrollment sheets or photocopying receipts by hand." },
      { title: "Fair Access for Remote Students", desc: "Allows students living in distant rural provinces to join top university lectures through cloud tools." },
      { title: "Faster Answers to Big Problems", desc: "Helps researchers find medical cures and predict typhoons much faster than human calculation alone." }
    ],

    // E. DISADVANTAGES
    disadvantages: [
      { title: "The Need to Re-Learn Skills", desc: "When schools change computer systems, students and professors must spend time learning new software." },
      { title: "Expensive Hardware for Schools", desc: "Public schools with tight budgets might not be able to afford the newest tablets or fast Wi-Fi right away." },
      { title: "Early Glitches and Security Bugs", desc: "New apps often have security loopholes that hackers try to break into before patches are released." },
      { title: "Distraction and Screen Fatigue", desc: "Too many notifications and new digital tools can overwhelm students during study time." }
    ],

    // F. REAL-LIFE SCENARIOS
    scenarios: [
      {
        icon: "🏫",
        title: "Campus Digital Enrollment Day",
        story: "A college freshman remembers his older brother standing in a humid gymnasium line for 6 hours just to get class subjects stamped on paper. This year, the college launched a cloud enrollment portal. The student sits at home in his pajamas, picks his schedule on his phone, and finishes enrollment in under 90 seconds."
      },
      {
        icon: "📚",
        title: "The School Library Goes Digital",
        story: "During exam week, all copies of a required IT textbook are checked out. Instead of turning students away, the library uses a digital textbook platform. Sixty classmates simultaneously open and read the exact same chapter on their tablets with interactive highlighted study notes."
      },
      {
        icon: "🚌",
        title: "Smart Campus Shuttle Tracker",
        story: "It's raining hard outside the engineering building. Instead of standing in the rain guessing when the campus shuttle bus will arrive, students check a live mobile GPS map that shows the bus is 4 minutes away, saving them from getting soaked."
      }
    ],

    // G. WHY IS IT IMPORTANT?
    importance: "Understanding emerging tech means you won't be caught off guard when you graduate. The tools you practice with today are the exact tools companies will pay you to use tomorrow.",

    // H. KEY TAKEAWAY
    takeaway: "Technology isn't about memorizing complicated words — it's about finding smart, creative tools to solve real-world problems."
  },

  {
    id: 2,
    number: "TOPIC 02",
    category: "ai",
    title: "Artificial Intelligence & Everyday Applications",
    icon: "🤖",
    tagline: "Software that thinks, listens, and helps like a smart assistant",
    categoryLabel: "Artificial Intelligence",
    accent: "linear-gradient(90deg, #a855f7, #00f0ff)",
    shortDesc: "Artificial Intelligence (AI) lets computers recognize voices, understand photos, and make smart suggestions that usually require human thinking.",
    tags: ["Virtual Assistants", "Face Unlock", "Smart Recommendations"],

    classmatePitch: "AI is when software acts like a smart human assistant — like when Spotify guesses your favorite study song or your phone unlocks just by seeing your face.",

    what: {
      definition: "Artificial Intelligence (AI) is when computer programs are designed to do smart things that normally require a human mind — like understanding language, recognizing faces, or making recommendations.",
      purpose: "Its main purpose is to help humans handle massive amounts of thinking and searching in seconds, freeing us up to focus on creativity, sports, and friends.",
      differentiation: "Old calculator programs only did exact math that a programmer coded by hand. AI can adapt to you — it learns what you like to watch, what mistakes you make in grammar, and gets better the more you use it."
    },

    history: {
      originYear: "1950 (Alan Turing's Test) & 1956 (Dartmouth College)",
      pioneers: "Alan Turing & John McCarthy",
      narrative: "In 1950, a brilliant British mathematician named Alan Turing asked: 'Can machines think?' and invented a game to test if a computer could converse like a person. In 1956, American scientist John McCarthy officially named the field 'Artificial Intelligence' during a famous summer workshop in New Hampshire."
    },

    how: {
      intro: "AI works through a simple 4-step conversation loop between you and the software:",
      steps: [
        { icon: "🎙️", label: "1. Listen / See", desc: "The microphone hears your question, or the camera looks at your face." },
        { icon: "🔍", label: "2. Spot Patterns", desc: "The software compares your voice or photo against millions of examples it studied." },
        { icon: "🎯", label: "3. Pick Best Answer", desc: "The computer calculates which response makes the most sense right now." },
        { icon: "💬", label: "4. Helpful Action", desc: "It speaks the answer, unlocks your phone, or translates your homework sentence." }
      ],
      analogy: "Think of AI like having a tireless groupmate who has read the entire internet and can instantly help you find the right book page at 2:00 AM."
    },

    advantages: [
      { title: "Always Available 24/7", desc: "Never sleeps, never gets tired, and will patiently answer your homework questions at 3:00 AM." },
      { title: "Speeds Up Boring Tasks", desc: "Summarizes 20-page reading assignments into short, bulleted study guides in 5 seconds." },
      { title: "Personalized Just for You", desc: "Recommends study playlists and tutorial videos that match exactly how fast you learn." },
      { title: "Catches Silly Mistakes", desc: "Corrects spelling mistakes, missing citations, and formatting errors before you submit your report." }
    ],

    disadvantages: [
      { title: "Lacks Genuine Human Feelings", desc: "AI cannot feel authentic empathy, care about your feelings, or understand humor like a real friend." },
      { title: "Can Inherit Unfair Biases", desc: "If trained on old or unfair internet posts, the AI might give biased or stereotypical answers." },
      { title: "Privacy Concerns with Personal Info", desc: "Asking AI personal questions means your text is sent to company servers for analysis." },
      { title: "Risk of Becoming Lazy Thinkers", desc: "Relying on AI to answer every single assignment weakens your own ability to think critically." }
    ],

    scenarios: [
      {
        icon: "📱",
        title: "Unlocking Your Phone in the Dark",
        story: "You wake up in a pitch-black dorm room and glance at your phone. Even with the lights off, infrared sensors scan your face structure, match it with your stored profile, and unlock the home screen in a blink — without opening for your roommate."
      },
      {
        icon: "🎧",
        title: "The Ultimate Chill Study Playlist",
        story: "You open your music streaming app to study for a midterm. Based on the songs you skipped yesterday and the quiet instrumental music you listen to late at night, the AI generates a custom 'Study Focus' mix with zero distractions."
      },
      {
        icon: "📧",
        title: "Spam Filter Saves Your Homework Account",
        story: "A scammer sends a fake email pretending to be your university registrar asking for your password. Before you even see it, the email app's AI recognizes the suspicious sender link and dumps it straight into the spam folder, keeping your account safe."
      }
    ],

    importance: "AI is already in your pocket. Knowing how it works helps you use it as an advantage in school while avoiding scams, fake news, and over-reliance.",

    takeaway: "AI isn't magic; it's a smart digital tool. When you use it to learn faster, you become more capable — but your human creativity is still the real boss."
  },

  {
    id: 3,
    number: "TOPIC 03",
    category: "ai",
    title: "Machine Learning & Learning from Data",
    icon: "📊",
    tagline: "How computers learn from practice instead of being told every rule",
    categoryLabel: "Artificial Intelligence",
    accent: "linear-gradient(90deg, #38bdf8, #8b5cf6)",
    shortDesc: "Machine Learning is the secret engine inside AI. Instead of writing code for every rule, you feed the computer lots of examples and it teaches itself.",
    tags: ["Training Data", "Pattern Recognition", "Smart Predictions"],

    classmatePitch: "Instead of hand-coding thousands of grammar rules, you show the computer 10,000 corrected essays, and it figures out how good writing works on its own.",

    what: {
      definition: "Machine Learning (ML) is the part of AI where computers teach themselves how to do tasks by practicing on real data, rather than having a human code every single step.",
      purpose: "Its purpose is to find hidden patterns and make accurate predictions on new things it hasn't seen before — like predicting which basketball team will win or catching credit card fraud.",
      differentiation: "Normal computer code is like a strict recipe book: step 1, step 2, step 3. Machine Learning is like practicing basketball free throws: at first the computer misses, but after 5,000 shots, it learns the muscle memory to score every time."
    },

    history: {
      originYear: "1959 (Checkers Game) & Modern Deep Learning",
      pioneers: "Arthur Samuel (IBM Engineer) & Geoffrey Hinton",
      narrative: "In 1959, an engineer named Arthur Samuel created a computer program that played checkers. By playing thousands of games against itself, the program got so good it defeated human champions! Later, scientists like Geoffrey Hinton developed deep neural networks modeled after how human brain cells connect."
    },

    how: {
      intro: "Machine Learning follows the exact same learning steps you use when studying for a quiz:",
      steps: [
        { icon: "📂", label: "1. Study Flashcards", desc: "Feed the computer 10,000 photos labeled 'Cat' and 'Dog' or past exam questions." },
        { icon: "🧠", label: "2. Practice & Guess", desc: "The algorithm makes guesses and compares them with the correct answer keys." },
        { icon: "🔁", label: "3. Correct Mistakes", desc: "Every time it makes an error, it tweaks its internal settings to be more accurate next time." },
        { icon: "🎯", label: "4. Ace the Real Test", desc: "Now give it a brand-new photo it has never seen, and it correctly identifies it in milliseconds." }
      ],
      analogy: "Think of teaching a child what a dog looks like: you don't lecture them about ear angles; you just point at dogs in the park until their brain figures it out."
    },

    advantages: [
      { title: "Gets Smarter with More Practice", desc: "The more students use an app, the better and more accurate its recommendations become." },
      { title: "Spots Things Humans Miss", desc: "Can scan thousands of medical X-rays in seconds to highlight tiny spots that doctors might overlook." },
      { title: "Stops Scammers in Milliseconds", desc: "Protects your mobile wallet by instantly freezing suspicious transactions made from another country." },
      { title: "Handles Boring Repetitive Work", desc: "Automatically sorts thousands of student survey responses into categories without manual reading." }
    ],

    disadvantages: [
      { title: "Garbage In = Garbage Out", desc: "If you train the computer on messy, incorrect, or incomplete homework sheets, it will learn the wrong answers." },
      { title: "Hard to Explain 'Why'", desc: "Complex neural networks can give you the right answer, but they can't always explain the exact reasoning step by step." },
      { title: "Needs Huge Datasets", desc: "Teaching a machine requires thousands of good examples, which takes time and effort to gather." },
      { title: "Consumes Lots of Computer Power", desc: "Training huge models requires banks of expensive computers running on lots of electricity." }
    ],

    scenarios: [
      {
        icon: "💳",
        title: "Stopping a Hack on Your Food Delivery App",
        story: "You usually order milk tea in Quezon City between 3:00 PM and 7:00 PM. Suddenly, an attempt is made on your saved card at 4:00 AM from Eastern Europe for $800 of video games. The bank's ML model notices this completely breaks your normal habit and denies the charge within 0.05 seconds."
      },
      {
        icon: "📹",
        title: "The TikTok & YouTube Recommendation Magic",
        story: "You watch a 2-minute video about DIY science projects and rewatch it twice. The ML algorithm takes note of how long you lingered, your screen tap habits, and starts showing you fun chemistry hacks — keeping your feed interesting without you having to search."
      },
      {
        icon: "🩺",
        title: "Checking Skin Moles for Health",
        story: "A student notices a dark, strange-looking mole on his shoulder. He uses a university clinic health app powered by machine learning that trained on 200,000 verified dermatologist photos. The app advises him to see a doctor for a routine biopsy, catching a skin issue early."
      }
    ],

    importance: "Machine learning powers the smartest parts of every app you love. Knowing how data trains models helps you understand why keeping your digital information clean and accurate matters so much.",

    takeaway: "Machine Learning teaches computers from real examples, proving that with enough good practice, software can learn almost anything."
  },

  {
    id: 4,
    number: "TOPIC 04",
    category: "ai",
    title: "Generative AI & Content Creation",
    icon: "✨",
    tagline: "AI that doesn't just grade assignments — it actually creates new content with you",
    categoryLabel: "Artificial Intelligence",
    accent: "linear-gradient(90deg, #a855f7, #ec4899)",
    shortDesc: "Generative AI writes essays, generates presentation slides, creates digital art, and composes music from simple English instructions called prompts.",
    tags: ["ChatGPT", "Image Generation", "Code Copilots", "Study Buddy"],

    classmatePitch: "Old AI was like a multiple-choice scanner. Generative AI is like a creative study buddy who brainstorms project ideas, drafts code, or draws posters with you.",

    what: {
      definition: "Generative AI (GenAI) is a type of AI that can create brand-new, original content — including essays, computer code, digital artwork, voiceovers, and music — based on your instructions.",
      purpose: "Its purpose is to serve as an instant creative brainstorming partner, helping students overcome writer's block, draft project outlines, and produce graphics in minutes.",
      differentiation: "Traditional AI only judges or organizes existing files ('Is this email junk?'). Generative AI actually makes new things ('Write a 3-paragraph speech about renewable energy in simple English')."
    },

    history: {
      originYear: "2017 (Google Transformer Paper) & 2022 (ChatGPT Launch)",
      pioneers: "Google Brain Researchers & OpenAI",
      narrative: "In 2017, researchers at Google published a famous paper called 'Attention Is All You Need', introducing the Transformer engine that helps computers understand language context. In November 2022, OpenAI released ChatGPT. It was so easy and conversational that over 100 million people used it in two months — faster than any app in history!"
    },

    how: {
      intro: "Generative AI creates sentences word by word, just like your phone's smart keyboard predicts your next word, but on a massive scale:",
      steps: [
        { icon: "💬", label: "1. Your Prompt", desc: "You type an instruction: 'Explain photosynthesis using a cooking recipe metaphor.'" },
        { icon: "🧩", label: "2. Breaking Down Words", desc: "The AI breaks your text into small puzzle pieces called tokens." },
        { icon: "🧠", label: "3. Predicting Next Words", desc: "It checks its training of billions of books to predict the most helpful next word." },
        { icon: "📜", label: "4. Streaming the Output", desc: "Words flow out on your screen in a complete, coherent explanation." }
      ],
      analogy: "It's like having a creative friend sitting beside you who has read every textbook in the library and can instantly sketch a concept map on your notebook."
    },

    advantages: [
      { title: "Crushes Writer's Block Instantly", desc: "Stuck staring at a blank document? GenAI can generate 5 great introduction ideas in 3 seconds." },
      { title: "Personalized Study Explanations", desc: "You can ask it to explain difficult college physics 'like I'm 12 years old' or 'using video game terms'." },
      { title: "Creates Presentation Graphics for Free", desc: "Students can generate custom illustrations for class PowerPoint slides without needing expensive Photoshop skills." },
      { title: "Helps Beginners Learn to Code", desc: "Explains tricky JavaScript and Python bugs line by line in friendly English." }
    ],

    disadvantages: [
      { title: "AI Hallucinations (Fake Facts)", desc: "Sometimes AI sounds 100% confident while making up fake historical dates, quotes, and research papers." },
      { title: "Risk of Academic Cheating", desc: "Copy-pasting an AI essay without reading or understanding it robs you of your own education." },
      { title: "Copyright and Art Controversies", desc: "AI models were trained on artwork and books made by human creators without always crediting them." },
      { title: "Deepfakes and Impersonation", desc: "Scammers can clone a person's voice from a 3-second audio clip to fool friends into sending money." }
    ],

    scenarios: [
      {
        icon: "🎓",
        title: "Midnight Thesis Brainstorming",
        story: "A student is stressed out trying to pick an IT capstone thesis topic. She chats with an AI assistant: 'Give me 5 practical thesis project ideas that could help high school teachers in the Philippines track student attendance easily.' The AI suggests a QR-code scanner system with SMS alerts, sparking her exact project idea."
      },
      {
        icon: "🎨",
        title: "Designing a Poster for the Campus Tech Club",
        story: "The IT club needs a cool poster for their annual coding hackathon. The student in charge doesn't have a graphic designer on hand. He types: 'A futuristic cyber-manila skyline with neon blue circuit lines and friendly robots coding on laptops.' In 15 seconds, he has a stunning poster background ready."
      },
      {
        icon: "💻",
        title: "Fixing a Mysterious Programming Error",
        story: "A student's web development homework keeps throwing an 'Uncaught TypeError' error 20 minutes before deadline. He pastes the code into an AI assistant, which immediately points out that line 14 was missing a closing parenthesis and explains how to prevent it next time."
      }
    ],

    importance: "Generative AI is changing how all office and creative jobs work. Learning how to prompt AI effectively is now just as essential as knowing how to search on Google or make a PowerPoint slide.",

    takeaway: "Treat Generative AI like a co-pilot, not an autopilot: let it help you brainstorm and draft, but always review and verify the final work yourself."
  },

  {
    id: 5,
    number: "TOPIC 05",
    category: "hardware",
    title: "Robotics & Automation",
    icon: "🦾",
    tagline: "Smart machines that handle heavy, repetitive, and dangerous physical jobs",
    categoryLabel: "Robotics",
    accent: "linear-gradient(90deg, #f59e0b, #ef4444)",
    shortDesc: "Robotics combines physical motors, sensors, and computer software to build machines that can move, lift, clean, and explore environments on their own.",
    tags: ["Robotic Arms", "Warehouse Drones", "Factory Bots"],

    classmatePitch: "It's giving computers mechanical arms and wheels so they can lift heavy cafeteria crates, do surgery without shaky hands, or explore volcanoes safely.",

    what: {
      definition: "Robotics is the field of building physical machines (robots) that can sense their surroundings, make decisions, and carry out physical movements automatically.",
      purpose: "Its purpose is to take over the '3 Ds' of labor: tasks that are Dirty, Dull, or Dangerous for human beings — keeping workers safe and making products faster.",
      differentiation: "A standard fan or microwave is just a dumb machine that follows a mechanical switch. A robot has sensors (eyes), a computer controller (brain), and motors (muscles) that adapt if someone walks in front of it."
    },

    history: {
      originYear: "1920 (Play 'R.U.R.') & 1961 (Unimate Factory Robot)",
      pioneers: "Karel Čapek (Czech Playwright) & George Devol",
      narrative: "The word 'robot' comes from a 1920 science-fiction play by Karel Čapek, derived from the Slavic word 'robota' meaning hard chores. In 1961, inventor George Devol created 'Unimate' for General Motors — a heavy mechanical arm that lifted hot, dangerous metal car parts so human workers wouldn't get burned."
    },

    how: {
      intro: "A robot works through a continuous 4-step loop that matches human senses and muscle reactions:",
      steps: [
        { icon: "👁️", label: "1. SENSORS (Eyes & Skin)", desc: "Cameras and infrared sensors measure distance and detect obstacles in the room." },
        { icon: "🧠", label: "2. CONTROLLER (Brain)", desc: "The onboard computer checks instructions: 'Move box from shelf A to shelf B without bumping walls.'" },
        { icon: "⚙️", label: "3. ACTUATORS (Muscles)", desc: "Electric motors turn wheels and hydraulic clamps grip the item with the right pressure." },
        { icon: "🔁", label: "4. FEEDBACK (Nerves)", desc: "Sensors continuously confirm if the box was placed securely before moving to the next task." }
      ],
      analogy: "A robot is built just like a human body: sensors are the eyes, the computer is the brain, motors are the muscles, and metal frames are the bones."
    },

    advantages: [
      { title: "Keeps Humans Out of Danger", desc: "Handles bomb disposal, explores deep ocean shipwrecks, and cleans radioactive pipes where humans cannot survive." },
      { title: "Incredible Precision & Speed", desc: "Can assemble tiny smartphone microchips or weld car doors with millimeter accuracy, zero fatigue, and zero hand tremors." },
      { title: "Works 24 Hours a Day", desc: "Warehouse robots can package orders all night long without needing sleep, lunch breaks, or lighting." },
      { title: "Helps People with Mobility Needs", desc: "Robotic prosthetics and wheelchairs help disabled students walk and navigate campus stairs independently." }
    ],

    disadvantages: [
      { title: "Very Expensive to Buy & Repair", desc: "Industrial robots can cost hundreds of thousands of dollars to install and require certified technicians to fix." },
      { title: "Replaces Repetitive Human Jobs", desc: "Automates factory assembly and warehouse sorting, reducing traditional entry-level physical jobs." },
      { title: "Struggles with Unorganized Messes", desc: "While great at rigid factory lines, robots struggle with unpredictable chores like folding messy laundry or clearing cluttered desks." },
      { title: "Safety Risks if Misprogrammed", desc: "Heavy industrial arms are extremely powerful and require safety fences so they don't accidentally strike nearby workers." }
    ],

    scenarios: [
      {
        icon: "📦",
        title: "Amazon Warehouse Helpers",
        story: "In a giant shopping warehouse, instead of human workers walking 10 miles a day down endless aisles looking for shoes, small orange robots slide under heavy storage shelves, lift them up, and bring the shelf right to the worker's packing table."
      },
      {
        icon: "🏥",
        title: "Tremor-Free Robotic Surgery",
        story: "A patient needs a delicate kidney operation. The surgeon sits at a 3D computer console across the room and moves digital controls. The robotic arms mirror his fingers inside the patient, scaling down his movements to microscopic precision without any human hand tremors."
      },
      {
        icon: "🧹",
        title: "The Dorm Room Robot Vacuum",
        story: "Three busy college roommates never have time to sweep the floor. They turn on a small robotic vacuum before heading to class. It maps the room with laser sensors, rolls under bunk beds, sweeps up dust, and docks itself back into its charging station before they return."
      }
    ],

    importance: "Robotics turns digital intelligence into physical action. As robots take over repetitive physical chores, humans can focus on high-level design, creativity, and leadership.",

    takeaway: "Robots don't get tired or bored — they are built to protect humans from danger and handle repetitive physical chores with precision."
  },

  {
    id: 6,
    number: "TOPIC 06",
    category: "hardware",
    title: "Internet of Things & Connected Devices",
    icon: "🌐",
    tagline: "Connecting everyday physical items to the internet to share live data",
    categoryLabel: "Hardware",
    accent: "linear-gradient(90deg, #10b981, #00f0ff)",
    shortDesc: "The Internet of Things (IoT) adds sensors and Wi-Fi to everyday objects — from water bottles and air conditioners to streetlights and farm soil.",
    tags: ["Smart Homes", "Sensors", "Campus Wi-Fi", "Connected Devices"],

    classmatePitch: "Giving everyday campus objects a brain and Wi-Fi — like classroom aircons that shut off when rooms are empty, or smart student IDs that check attendance.",

    what: {
      definition: "The Internet of Things (IoT) refers to regular physical objects embedded with small sensors, computer chips, and internet connections so they can collect and send data automatically.",
      purpose: "Its purpose is to make physical things smart and manageable from your phone — saving electricity, monitoring safety, and giving you live updates on your environment.",
      differentiation: "The standard internet connects computers and phones used by humans. IoT connects physical objects (like refrigerators, streetlamps, heart monitors, and water pumps) that talk to each other without human help."
    },

    history: {
      originYear: "1982 (Coke Machine) & 1999 (Kevin Ashton)",
      pioneers: "Kevin Ashton & Carnegie Mellon Students",
      narrative: "In 1982, students at Carnegie Mellon University got tired of walking downstairs only to find the vending machine out of cold soda. They connected the machine to their computer network to check stock remotely! In 1999, researcher Kevin Ashton coined the term 'Internet of Things' while working with smart radio frequency tags."
    },

    how: {
      intro: "IoT devices follow a simple communication chain from your room to the cloud and back to your phone:",
      steps: [
        { icon: "🌡️", label: "1. Sense", desc: "A tiny sensor measures temperature, humidity, movement, or light in the room." },
        { icon: "📡", label: "2. Send", desc: "The sensor broadcasts the reading over Wi-Fi, Bluetooth, or cellular data." },
        { icon: "☁️", label: "3. Analyze", desc: "A cloud server checks: 'It's 12:00 PM and the computer lab is empty, but the AC is on 18°C.'" },
        { icon: "📱", label: "4. Act", desc: "The system automatically turns off the AC and sends a notification to the campus admin." }
      ],
      analogy: "IoT gives physical things a nervous system: sensors act like skin feeling heat, Wi-Fi is the spine carrying signals, and your phone app is the control center."
    },

    advantages: [
      { title: "Automatic Energy & Money Savings", desc: "Smart classroom lights and air conditioners turn off automatically when students leave, slashing school electric bills." },
      { title: "Peace of Mind & Safety", desc: "Smart doorbells let you see who is knocking outside your apartment door right from your phone screen while you study." },
      { title: "Health & Wellness Tracking", desc: "Fitness bands track your sleep patterns and resting heart rate, warning you when you need more rest during finals week." },
      { title: "Smart City Traffic Management", desc: "City traffic lights adjust their green-light timing based on real-time car density to reduce traffic jams." }
    ],

    disadvantages: [
      { title: "Easy Targets for Hackers", desc: "Cheap smart lightbulbs and cameras often lack security updates, letting hackers spy on private homes or school networks." },
      { title: "Privacy Loss in Everyday Spaces", desc: "Smart speakers and sensors in bedrooms and classrooms are constantly listening and recording behavioral data." },
      { title: "Total Dependency on Wi-Fi", desc: "When the home Wi-Fi or electricity goes down during a storm, smart door locks and lights can freeze." },
      { title: "Incompatible Brand Apps", desc: "Different gadgets from different companies often require five different phone apps to control." }
    ],

    scenarios: [
      {
        icon: "🏫",
        title: "The Smart Campus Classroom",
        story: "A university installs IoT motion and temperature sensors in its lecture halls. When the 3:00 PM IT class ends and all 40 students pack up and leave, the sensors detect zero motion. Within 5 minutes, the room automatically shuts off four large air conditioners and 12 fluorescent lights, saving the school thousands in electric bills."
      },
      {
        icon: "🌾",
        title: "Smart Tomato Garden Project",
        story: "An agriculture student plants tomatoes for a class project. Instead of guessing when to water, she sticks an inexpensive solar IoT probe into the soil. When the soil moisture drops below 25%, the probe triggers a mini drip hose for 10 minutes and texts her phone: 'Watering complete!'"
      },
      {
        icon: "🎒",
        title: "Smart Luggage Finder",
        story: "A student traveling home for the holidays places a small coin-sized Bluetooth tracker inside his backpack. When his bus arrives at the terminal, his phone buzzes with an exact map location showing his bag is in luggage compartment #2, ensuring it never gets lost."
      }
    ],

    importance: "There are already over 16 billion connected IoT devices in the world — more than double the human population! Learning IoT helps you build smart homes, connected gadgets, and sustainable campus systems.",

    takeaway: "IoT transforms ordinary physical objects into smart, connected devices that save energy, time, and effort."
  },

  {
    id: 7,
    number: "TOPIC 07",
    category: "ai",
    title: "Big Data & Data Analytics",
    icon: "📈",
    tagline: "Finding meaningful insights inside massive mountains of information",
    categoryLabel: "Data Science",
    accent: "linear-gradient(90deg, #ec4899, #f59e0b)",
    shortDesc: "Big Data refers to enormous amounts of information gathered from millions of clicks, sensor pings, and purchases, analyzed to make smarter real-world decisions.",
    tags: ["The 3 Vs", "Predictive Analytics", "Smart Decisions", "Student Trends"],

    classmatePitch: "Taking huge mountains of student feedback, library checkouts, and exam stats to discover what study habits actually help people pass.",

    what: {
      definition: "Big Data refers to datasets so massive, fast-moving, and diverse that standard spreadsheet programs like Microsoft Excel crash when trying to open them. Data Analytics is the science of exploring this data to discover useful patterns.",
      purpose: "Its purpose is to replace guesswork with real facts — helping schools, businesses, and hospitals make decisions based on what actually works.",
      differentiation: "Small data is a single classroom attendance sheet. Big Data is tracking the attendance, exam scores, canteen food purchases, and library checkouts of 50,000 university students across 10 years to improve campus life."
    },

    history: {
      originYear: "2001 (Doug Laney's 3 Vs) & Google Big Data",
      pioneers: "Doug Laney (Gartner Analyst) & Google Engineers",
      narrative: "In 2001, analyst Doug Laney explained that data was exploding in three ways: Volume (huge piles), Velocity (streaming in every second), and Variety (photos, tweets, clicks). In 2004, Google invented software that could spread data processing across thousands of cheap computers simultaneously, launching modern data science."
    },

    how: {
      intro: "Big data follows four simple analytics levels, moving from past facts to future recommendations:",
      steps: [
        { icon: "📥", label: "1. Descriptive (What happened?)", desc: "'45% of students failed the mid-semester calculus exam.'" },
        { icon: "🔍", label: "2. Diagnostic (Why did it happen?)", desc: "'Data shows students who skipped lab sessions scored 35 points lower.'" },
        { icon: "🔮", label: "3. Predictive (What will happen?)", desc: "'Students with less than 75% attendance are 80% likely to fail finals.'" },
        { icon: "💡", label: "4. Prescriptive (What should we do?)", desc: "'Automatically invite those students to a free peer-tutoring study group today.'" }
      ],
      analogy: "Think of big data like a high school yearbook vs. a social network: a yearbook shows one static picture a year, while a social network tracks every post, click, and friend interaction in real time."
    },

    advantages: [
      { title: "No More Guesswork", desc: "Schools and companies make decisions based on concrete proof and student feedback instead of gut feelings." },
      { title: "Helps Struggling Students Early", desc: "Universities spot students falling behind in homework weeks before exams so tutors can step in and help." },
      { title: "Prevents Out-of-Stock Supplies", desc: "Campus stores analyze past semesters to know exactly how many notebooks and school uniforms to order." },
      { title: "Improves Public Transit Schedules", desc: "Cities analyze commuter tap card data to put extra buses on roads right when classes let out." }
    ],

    disadvantages: [
      { title: "Expensive Server Storage", desc: "Storing terabytes of data on cloud servers costs companies thousands of dollars every month." },
      { title: "Data Privacy & Leaks", desc: "If a school database is breached, thousands of students' personal contact info and grades can be exposed online." },
      { title: "Requires Specialized Math Skills", desc: "Data scientists and data analysts must study advanced statistics and Python programming." },
      { title: "Misleading Coincidences", desc: "Just because two numbers go up at the same time doesn't mean one caused the other (correlation vs. causation)." }
    ],

    scenarios: [
      {
        icon: "🎓",
        title: "Preventing College Dropouts Before Finals",
        story: "A university tracks student logins on its online learning portal. An analytics dashboard notices that a group of first-year students hasn't logged in for 10 days and missed two quizzes. An automated counselor alert is triggered, inviting them for a friendly talk and academic support, saving them from failing out."
      },
      {
        icon: "🛒",
        title: "Campus Canteen Prepares the Right Food",
        story: "The university cafeteria reviews 3 years of checkout data. They discover that on rainy Fridays, soup and hot coffee sales triple, while cold sandwiches spoil. On gloomy mornings, they prepare extra hot meals, cutting food waste by 30% and making hungry students happy."
      },
      {
        icon: "🩺",
        title: "Spotting Flu Outbreaks in Dorms",
        story: "A city health department monitors online student clinic visit logs and pharmacy fever medicine sales. They notice a 300% spike in sore throat reports in one specific campus neighborhood and quickly send a nursing team with vitamins and flu vaccines before it spreads."
      }
    ],

    importance: "Data is often called 'the new oil' because it fuels modern technology companies. Understanding data analytics helps you read charts, question statistics, and present arguments backed by real facts.",

    takeaway: "Big data isn't just about collecting piles of numbers; it's about finding clear, actionable answers that make everyday life better."
  },

  {
    id: 8,
    number: "TOPIC 08",
    category: "web3",
    title: "Blockchain & Distributed Records",
    icon: "⛓️",
    tagline: "A shared digital notebook that no single person can secretly change or erase",
    categoryLabel: "Blockchain",
    accent: "linear-gradient(90deg, #f59e0b, #eab308)",
    shortDesc: "Blockchain is a decentralized digital record-keeping system where transactions are chained together with cryptography across thousands of computers, making records permanent.",
    tags: ["Decentralization", "Digital Ledger", "Tamper-Proof", "Cryptographic Hashes"],

    classmatePitch: "Imagine a class group chat where nobody — not even the admin — can edit, delete, or fake past messages, so everyone has undeniable proof of what happened.",

    what: {
      definition: "A blockchain is a shared, decentralized digital ledger where records (blocks) are chained together using math and copied across thousands of computers, so no single person can change or delete them.",
      purpose: "Its purpose is to create trust between strangers online without needing to hire a middleman, banker, or notary to verify the records.",
      differentiation: "A normal database (like an Excel file or private school server) is controlled by one admin who has the power to edit grades or delete rows. In a blockchain, every computer in the network holds a copy, and all of them must agree before any new record is added."
    },

    history: {
      originYear: "2008 (Bitcoin Whitepaper) & 2009 (Genesis Block)",
      pioneers: "Satoshi Nakamoto (Anonymous Inventor)",
      narrative: "On October 31, 2008, during a global banking crisis, an anonymous programmer using the pseudonym 'Satoshi Nakamoto' released a 9-page paper proposing Bitcoin — a way to send digital money peer-to-peer without banks. The first block of transactions was mined on January 3, 2009."
    },

    how: {
      intro: "Blockchain protects information using a 4-step chain reaction of cryptography and peer consensus:",
      steps: [
        { icon: "📝", label: "1. A Transaction Happens", desc: "A record is created: 'Student A transfers a digital certificate to Student B.'" },
        { icon: "📡", label: "2. Broadcast to Everyone", desc: "Thousands of computers in the network verify the digital signature is authentic." },
        { icon: "🔒", label: "3. Sealed in a Block", desc: "The transaction is stamped with a unique cryptographic hash and linked to the previous block." },
        { icon: "⛓️", label: "4. Permanent Forever", desc: "The block is locked into the chain. To change it, you'd have to hack 10,000 computers at once!" }
      ],
      analogy: "Think of writing in permanent marker in front of the whole class: once it's on the board and everyone writes it in their notebooks, one person can't sneak in and erase it."
    },

    advantages: [
      { title: "Impossible to Secretly Tamper With", desc: "Once a record is confirmed, nobody can secretly alter grades, change land titles, or erase past payments." },
      { title: "No Single Point of Failure", desc: "Even if hundreds of computers shut down, thousands of other computers in the network keep running seamlessly." },
      { title: "No Need for Expensive Middlemen", desc: "Allows direct peer-to-peer transactions without paying hefty bank clearance fees or waiting days for checks to clear." },
      { title: "Complete Public Audit Trail", desc: "Anyone can verify the timestamp and authenticity of any transaction without asking for special permissions." }
    ],

    disadvantages: [
      { title: "Permanent Mistakes Cannot Be Erased", desc: "If you accidentally send digital currency or a document to the wrong address, there is no 'Undo' or customer support button." },
      { title: "High Electricity Use (Older Systems)", desc: "Older proof-of-work blockchains use huge amounts of computing energy to solve math puzzles." },
      { title: "Slower Than Traditional Networks", desc: "Visa processes 24,000 credit card swipes a second, while basic Bitcoin blockchain only handles about 7 transactions per second." },
      { title: "Associated with Online Scams", desc: "Because cryptocurrency is largely unregulated, online scammers often use it to trick unwary investors." }
    ],

    scenarios: [
      {
        icon: "💸",
        title: "Sending Study Allowance Across Provinces",
        story: "An older sister working overseas wants to send $50 directly to her younger brother's college lunch fund in the province. Traditional wire transfers charge $8 and take 3 days. Using a regulated blockchain payment network, the funds land in his digital wallet in 10 seconds for a fee of just a few cents."
      },
      {
        icon: "📜",
        title: "Tamper-Proof School Land Registries",
        story: "In a province where corrupt officials previously tried to forge paper property deeds to sell school playgrounds to developers, the municipal government logs all property deeds to a public blockchain. Property boundaries are now locked and transparent to the entire community."
      },
      {
        icon: "🗳️",
        title: "College Student Council Elections",
        story: "A university tests a digital voting system built on a private blockchain. Each student gets one encrypted digital voting token. Once cast, the votes are tallied publicly on the ledger in real time, completely eliminating allegations of tampered ballot boxes."
      }
    ],

    importance: "Blockchain introduced a breakthrough in computer science: how to prove trust and ownership on the internet without having to trust any single corporation or middleman.",

    takeaway: "Blockchain is an unchangeable digital ledger that keeps everyone honest through math and transparency."
  },

  {
    id: 9,
    number: "TOPIC 09",
    category: "web3",
    title: "Blockchain Applications Beyond Cryptocurrency",
    icon: "📜",
    tagline: "Smart contracts, digital student diplomas, and authentic product tracking",
    categoryLabel: "Blockchain",
    accent: "linear-gradient(90deg, #f59e0b, #10b981)",
    shortDesc: "Moving far past digital coins, enterprise blockchain uses smart contracts to verify college degrees, track medicine supply chains, and automate agreements.",
    tags: ["Smart Contracts", "Digital Diplomas", "Authentic Tracking", "No Scams"],

    classmatePitch: "Using tamper-proof records for real student needs: like having your college diploma verified online in 2 seconds so employers know it's 100% genuine.",

    what: {
      definition: "Blockchain beyond cryptocurrency refers to using decentralized ledgers and self-executing software (called Smart Contracts) for real-world legal, academic, and business records without any speculative digital coins.",
      purpose: "Its purpose is to eliminate fake academic diplomas, stop counterfeit medicines, and automate agreements so people don't have to wait weeks for paper signatures.",
      differentiation: "Cryptocurrency is just speculative digital money. Blockchain technology itself is a versatile digital filing cabinet that can store verified medical licenses, concert tickets, and graduation certificates."
    },

    history: {
      originYear: "2015 (Ethereum & Smart Contracts Launch)",
      pioneers: "Vitalik Buterin (Ethereum Creator) & Nick Szabo",
      narrative: "In 1994, computer scientist Nick Szabo proposed the idea of a 'smart contract' — comparing it to a vending machine that automatically drops a soda when coins are inserted. In 2013, 19-year-old programmer Vitalik Buterin realized blockchain could run any software code, not just money. He created Ethereum in 2015, unlocking programmable decentralized apps for everyone."
    },

    how: {
      intro: "Smart contracts work on simple, automatic logic: IF a condition happens, THEN execute the agreed action immediately:",
      steps: [
        { icon: "📝", label: "1. The Rule is Coded", desc: "'IF the student finishes all 120 credit units, THEN issue the official graduation badge.'" },
        { icon: "🌐", label: "2. The Event Occurs", desc: "The university registrar submits the verified final passing grades to the system." },
        { icon: "⚡", label: "3. Auto-Execution", desc: "The smart contract validates the grades and generates a signed digital certificate." },
        { icon: "🎓", label: "4. Permanent Verification", desc: "Any employer worldwide can click the link and verify the degree is 100% genuine in 2 seconds." }
      ],
      analogy: "A smart contract is like a vending machine: you don't need a cashier or a lawyer. You put your money in, press the button, and the mechanical logic releases your snack every single time."
    },

    advantages: [
      { title: "Ends Fake College Diplomas", desc: "Employers can instantly verify job applicants' diplomas online, shutting down diploma mills and fake resumes forever." },
      { title: "Verifies Authentic Medicines", desc: "Hospitals and pharmacies can scan boxes of antibiotics to verify they came from inspected factories and aren't fake." },
      { title: "Stops Ticket Scalper Bots", desc: "Concert and sports tickets issued on a blockchain cannot be duplicated or resold by unauthorized scalpers." },
      { title: "Automates Instant Insurance Payouts", desc: "Farmers receive automatic typhoon damage relief payouts the moment weather satellites confirm storm winds." }
    ],

    disadvantages: [
      { title: "Bugs in Code are Hard to Fix", desc: "Because smart contract code is permanent, if a programmer leaves a software bug in the code, hackers can exploit it." },
      { title: "The 'Oracle' Problem", desc: "A smart contract relies on outside real-world data. If someone tampers with the weather sensor, the contract triggers incorrectly." },
      { title: "Courts Still Catching Up", desc: "Traditional legal courts and judges in many countries are still figuring out how to enforce smart contract disputes." },
      { title: "Resistance from Paper Middlemen", desc: "Companies that make money charging fees for paper notarization and document clearance resist adopting automated software." }
    ],

    scenarios: [
      {
        icon: "🎓",
        title: "Applying for an Overseas Job with a Digital Degree",
        story: "A fresh computer science graduate in Cebu applies for a remote developer role in Canada. Instead of paying $100 and waiting a month for paper notarized transcripts to be mailed internationally, she sends a cryptographically signed blockchain credential. The Canadian hiring manager clicks verify and sees the university's digital stamp in 2 seconds, offering her an interview that afternoon."
      },
      {
        icon: "💊",
        title: "Scanning Your Prescription at the Pharmacy",
        story: "During a dangerous flu season, counterfeit pills flood street markets. A student buying antibiotics at a pharmacy scans the QR code on the packaging with her phone. The blockchain verifies the shipment from the original pharmaceutical lab to the distributor, confirming it's 100% authentic."
      },
      {
        icon: "✈️",
        title: "Instant Delayed Flight Compensation",
        story: "A student flying home for Christmas has his flight delayed by 5 hours. His travel insurance is backed by a smart contract connected to airport radar data. Without him filling out a single paper claim form, $50 compensation is deposited directly to his phone wallet before his flight even boards."
      }
    ],

    importance: "Separating blockchain from cryptocurrency hype reveals its true educational and industrial power: building honest, paperless, and verifiable public records for society.",

    takeaway: "Smart contracts turn paper promises into automatic digital code that can't be delayed, faked, or broken."
  },

  {
    id: 10,
    number: "TOPIC 10",
    category: "xr",
    title: "Virtual Reality & Immersive Environments",
    icon: "🥽",
    tagline: "Stepping inside a completely computer-generated 3D world",
    categoryLabel: "Virtual Reality",
    accent: "linear-gradient(90deg, #8b5cf6, #38bdf8)",
    shortDesc: "Virtual Reality (VR) uses headsets and motion controllers to replace your real surroundings with a simulated 3D world for immersive learning and training.",
    tags: ["VR Headsets", "Virtual Labs", "Immersive Learning", "Spatial Audio"],

    classmatePitch: "Wearing a 3D headset that completely replaces your bedroom with a virtual classroom, historic battlefield, or medical dissection lab.",

    what: {
      definition: "Virtual Reality (VR) is a technology that uses head-mounted displays (headsets) and motion sensors to completely replace the real world with a simulated, interactive 3D digital environment.",
      purpose: "Its purpose is to provide complete immersion, letting students and professionals practice in environments that are too dangerous, expensive, or far away to visit in real life.",
      differentiation: "Playing a video game on a TV screen is looking at a flat screen in front of you. In VR, when you turn your head to the left, you look around a virtual room just like you do in real life."
    },

    history: {
      originYear: "1968 (Sword of Damocles) & 2012 (Oculus Kickstarter)",
      pioneers: "Ivan Sutherland, Jaron Lanier & Palmer Luckey",
      narrative: "In 1968, pioneer Ivan Sutherland built the first 3D headset so heavy it had to be suspended from the ceiling. In the 1980s, researcher Jaron Lanier coined the term 'Virtual Reality'. The modern era began in 2012 when 19-year-old Palmer Luckey built the Oculus Rift in his garage using modern smartphone screens."
    },

    how: {
      intro: "VR tricks your eyes, ears, and brain into feeling like you are physically standing in another world:",
      steps: [
        { icon: "👀", label: "1. Two Separate Lenses", desc: "The headset displays two slightly offset images matching human eye spacing for 3D depth." },
        { icon: "🧭", label: "2. Head Tracking", desc: "Gyroscopes track your head movements so the digital world moves smoothly with your gaze." },
        { icon: "🎧", label: "3. 3D Spatial Audio", desc: "Sounds change volume and direction: if a digital car honks behind your left ear, you hear it there." },
        { icon: "🎮", label: "4. Hand Controllers", desc: "Vibrating hand controllers let you pick up virtual test tubes and tools naturally." }
      ],
      analogy: "VR is like wearing high-tech scuba goggles that replace your physical bedroom with a fully interactive digital universe."
    },

    advantages: [
      { title: "Safe Practice for Dangerous Labs", desc: "Chemistry students can practice dangerous chemical reactions without any risk of real-world fires or explosions." },
      { title: "Unforgettable Experiential Learning", desc: "History students don't just read about ancient Rome — they walk down the streets and see the Colosseum at full scale." },
      { title: "Saves Medical Cadaver Costs", desc: "Nursing students practice surgical incisions and anatomy dissections on virtual patients over and over." },
      { title: "Zero Flight Risk for Pilots", desc: "Aviation cadets practice emergency engine-out landings in stormy virtual skies before flying real planes." }
    ],

    disadvantages: [
      { title: "Motion Sickness (Cybersickness)", desc: "When your eyes see fast motion but your inner ear feels your body sitting still, you can feel dizzy or nauseated." },
      { title: "Heavy Headsets & Eye Strain", desc: "Wearing a plastic headset strapped to your face for over an hour can feel hot, heavy, and cause headaches." },
      { title: "Bumping into Real Furniture", desc: "Because you can't see the real room, you risk tripping over study desks, chairs, or pets." },
      { title: "High Cost for Public Schools", desc: "Equipping a full 40-student classroom with high-end VR gear and computers is too expensive for most schools." }
    ],

    scenarios: [
      {
        icon: "🩺",
        title: "Nursing Students Practicing Heart Dissection",
        story: "In a college nursing lab, students put on lightweight VR headsets. In front of each student floats a giant, beating 3D human heart. They can walk inside the heart chambers, pause the heartbeat to study valve leaks, and make surgical cuts with instant 'Undo' buttons, learning the lesson twice as fast as using textbook diagrams."
      },
      {
        icon: "🌋",
        title: "Walking on Mars in Astronomy Class",
        story: "An astronomy teacher takes his class on a field trip to Mars. Using VR, students walk across the red dusty surface of Olympus Mons, look up at the planet's two tiny moons, and inspect a 3D model of the Curiosity Rover as if they were astronauts."
      },
      {
        icon: "🚒",
        title: "Campus Fire Drill Simulation",
        story: "Student dormitory leaders train for fire safety in VR. Trainees navigate dark, smoke-filled virtual hallways, practice using a virtual fire extinguisher on electrical fires, and guide virtual classmates to fire exits without any real-world smoke or heat."
      }
    ],

    importance: "Research shows students retain up to 75% of what they learn in hands-on VR simulations compared to just 10% from reading dry textbook pages.",

    takeaway: "VR replaces boring memorization with unforgettable personal experience, letting you learn by doing."
  },

  {
    id: 11,
    number: "TOPIC 11",
    category: "xr",
    title: "Augmented Reality & Digital Overlays",
    icon: "👓",
    tagline: "Adding helpful interactive digital graphics over your real physical surroundings",
    categoryLabel: "Augmented Reality",
    accent: "linear-gradient(90deg, #38bdf8, #10b981)",
    shortDesc: "Augmented Reality (AR) enhances physical reality by using smartphone cameras or smart glasses to project 3D models, arrows, and translation overlays onto the real world.",
    tags: ["Camera Filters", "Smart Overlays", "Interactive Textbooks", "Navigation"],

    classmatePitch: "Instead of replacing your room, AR puts interactive 3D models and helpful arrows right on your study desk through your phone screen.",

    what: {
      definition: "Augmented Reality (AR) is a technology that superimposes computer-generated images, 3D models, and information directly onto your live camera view of the physical world.",
      purpose: "Its purpose is to provide helpful, hands-free information right where you are looking — without cutting you off from the real people and room around you.",
      differentiation: "VR closes the real world out and puts you in a simulated world. AR keeps you firmly in the real world and simply adds helpful digital stickers, diagrams, and arrows onto physical objects."
    },

    history: {
      originYear: "1990 (Boeing Aircraft) & 2016 (Pokémon GO)",
      pioneers: "Tom Caudell (Boeing Engineer) & John Hanke (Niantic)",
      narrative: "In 1990, an engineer named Tom Caudell at Boeing coined 'Augmented Reality' while inventing headsets that showed factory workers how to wire aircraft cables. In 2016, Niantic released 'Pokémon GO', introducing hundreds of millions of people to hunting digital creatures in real-world parks."
    },

    how: {
      intro: "AR scans your surroundings and pins digital items to real surfaces in four steps:",
      steps: [
        { icon: "📷", label: "1. Camera Scan", desc: "Your phone camera and sensors look at the floor, desk, or street." },
        { icon: "📐", label: "2. Flat Surface Detection", desc: "Software detects flat planes: 'Here is a flat wooden study table.'" },
        { icon: "📍", label: "3. Spatial Pinning", desc: "A 3D model is anchored to the desk so you can walk around it at all angles." },
        { icon: "✨", label: "4. Lighting & Shadows", desc: "The software casts realistic shadows that match the real room's lighting." }
      ],
      analogy: "AR is like wearing smart glasses with an expert friend pointing at your homework paper, highlighting answers with glowing neon ink."
    },

    advantages: [
      { title: "No Disconnection from Classmates", desc: "You can see your real friends and classroom while looking at digital study notes at the same time." },
      { title: "Runs on Ordinary Smartphones", desc: "Students don't need expensive $500 headsets; free AR apps work on standard phone cameras." },
      { title: "Test Furniture in Your Dorm", desc: "Preview how a study desk or bookshelf looks and fits in your room before spending any money." },
      { title: "Heads-Up Walking Navigation", desc: "Follow floating neon arrows painted directly on the campus sidewalk so you never get lost finding room 402." }
    ],

    disadvantages: [
      { title: "Drains Smartphone Battery Fast", desc: "Running the camera, 3D graphics, and motion sensors continuously heats up phones and drains batteries quickly." },
      { title: "Struggles in Bright Noon Sunlight", desc: "Direct sunlight can wash out phone screens, making digital overlays hard to read outdoors." },
      { title: "Privacy Concerns with Public Cameras", desc: "Wearing smart glasses equipped with cameras in public places makes some people uncomfortable about being recorded." },
      { title: "Glitchy on Uneven Surfaces", desc: "Messy floors or dark lighting can make 3D models float awkwardly or shake on screen." }
    ],

    scenarios: [
      {
        icon: "📚",
        title: "Biology Textbook Comes to Life",
        story: "A student studying for a biology exam points her smartphone camera at a printed diagram of a human eye in her textbook. Instantly, an animated 3D model of the eyeball pops out of the page. She taps her screen to peel away the cornea, look inside the retina, and watch how light focuses, understanding the concept in seconds."
      },
      {
        icon: "🛋️",
        title: "Fitting a Dorm Room Shelf",
        story: "Two roommates want to buy a shoe rack for their tiny dormitory room. Using an AR shopping app, they select a rack and point their phone at the hallway corner. A realistic 3D model appears on the floor. They confirm it won't block the bathroom door before ordering."
      },
      {
        icon: "🏛️",
        title: "Translating a Campus Sign Instantly",
        story: "An exchange student arrives on campus and spots a safety notice written in another language. He points his phone camera at the metal sign. Using AR, the screen replaces the foreign words with clear English in the exact same font and color directly on the sign in real time."
      }
    ],

    importance: "Tech companies are designing lightweight smart glasses that will eventually replace handheld smartphones, making digital information float naturally in our physical world.",

    takeaway: "AR doesn't pull you away from your life; it adds helpful, interactive information directly on top of the world around you."
  },

  {
    id: 12,
    number: "TOPIC 12",
    category: "hardware",
    title: "Wearable Technologies & Everyday Applications",
    icon: "⌚",
    tagline: "Smart gadgets worn on the body that track health, sleep, and notifications",
    categoryLabel: "Wearables",
    accent: "linear-gradient(90deg, #10b981, #f59e0b)",
    shortDesc: "Wearables are smart accessories — like smartwatches and fitness bands — that stay in contact with your skin to continuously monitor heart rate, sleep, and activity.",
    tags: ["Smartwatches", "Fitness Bands", "Heart Sensors", "Sleep Tracking"],

    classmatePitch: "Gadgets you wear 24/7 like smartwatches that watch your heart rate during exams, monitor your sleep, and call for help if you take a hard fall.",

    what: {
      definition: "Wearable technology refers to electronic devices (like smartwatches, smart rings, and fitness trackers) designed to be comfortably worn on the body to track health and communications.",
      purpose: "Its purpose is to provide continuous, hands-free personal health monitoring and instant notifications without needing to pull a smartphone out of your pocket.",
      differentiation: "A phone is kept in your bag or desk and checked occasionally. A wearable stays in continuous physical contact with your skin, monitoring your pulse and steps 24 hours a day."
    },

    history: {
      originYear: "1975 (Pulsar Calculator Watch) & 2015 (Apple Watch)",
      pioneers: "Hamilton Watch Company, Fitbit & Apple",
      narrative: "In 1975, the Pulsar Calculator Watch let users tap mini buttons on their wrist. In 2009, Fitbit proved that people loved tracking daily steps. In 2015, the Apple Watch combined fashionable design with medical-grade heart sensors, turning smartwatches into everyday life-saving tools."
    },

    how: {
      intro: "Wearables read your body's vital signs using optical light sensors and motion chips:",
      steps: [
        { icon: "💡", label: "1. Flashing Green LEDs", desc: "Sensors on the back of the watch flash green light into the blood capillaries of your wrist." },
        { icon: "💓", label: "2. Pulse Detection", desc: "Photodiodes measure how much light bounces back as blood pulses through your veins." },
        { icon: "🏃", label: "3. Motion Sensors", desc: "Accelerometers detect when you take steps, swing your arms, or toss and turn in bed." },
        { icon: "📱", label: "4. Summary on Phone", desc: "The device syncs with your phone to show daily step counts, sleep hours, and stress levels." }
      ],
      analogy: "A smartwatch is like having a quiet, personal doctor and fitness coach strapped to your wrist 24/7, keeping track of every step and night of sleep."
    },

    advantages: [
      { title: "Life-Saving Heart Alerts", desc: "Warns users when their heart rate spikes unexpectedly while resting, prompting early medical checkups before emergencies." },
      { title: "Automatic Fall & Crash SOS", desc: "Detects hard falls or bike accidents and automatically dials emergency numbers with your GPS location if you're unresponsive." },
      { title: "Encourages Healthier Habits", desc: "Friendly reminders tell you to stand up and drink water after sitting at a study desk for three straight hours." },
      { title: "Quick Classroom Micro-Checks", desc: "Glance at incoming assignment deadlines or transit notifications without pulling out an obvious phone in class." }
    ],

    disadvantages: [
      { title: "Frequent Charging Demands", desc: "Many advanced smartwatches need charging every day or two, causing students to forget them on chargers." },
      { title: "Health Anxiety & Obsession", desc: "Constantly checking minor fluctuations in heart rate or sleep scores can cause unnecessary stress over normal body variations." },
      { title: "Personal Data Privacy Risks", desc: "Tech companies and insurance agencies gather your intimate biological data, which could potentially be used to raise insurance rates." },
      { title: "Expensive to Buy and Replace", desc: "Top-brand smartwatches can cost as much as a good laptop, making them a significant investment." }
    ],

    scenarios: [
      {
        icon: "❤️",
        title: "Catching an Irregular Heart Rhythm During Finals",
        story: "A student studying late for exams feels fine, but his smartwatch gently taps his wrist with an alert: 'High Heart Rate: 135 BPM detected while sitting still for 15 minutes.' He checks with the campus clinic nurse, who spots an irregular rhythm caused by excessive energy drinks, helping him adjust his study routine before serious harm occurs."
      },
      {
        icon: "🚴",
        title: "Fall Detection on the Bike Route to Campus",
        story: "A student bicycling to school slips on wet pavement and hits his head on the curb, knocked unconscious. His smartwatch detects the sudden heavy impact and 60 seconds of complete stillness. It sounds an emergency siren and automatically dials local emergency services with his exact street coordinates."
      },
      {
        icon: "😴",
        title: "Solving Chronic Morning Exhaustion",
        story: "A freshman wakes up tired every single day. His fitness band's sleep report reveals he only gets 25 minutes of deep sleep because his room is too warm and bright. By turning off dorm electronics and using a sleep mask, his deep sleep doubles and his morning focus transforms."
      }
    ],

    importance: "Wearables shift medicine from reactive (visiting a clinic only after you feel sick) to proactive (catching subtle health issues early and building healthy habits every day).",

    takeaway: "Wearables turn your body into a dashboard of useful health data, helping you stay safe, active, and rested."
  },

  {
    id: 13,
    number: "TOPIC 13",
    category: "strategy",
    title: "Applications of Emerging Technologies in Different Industries",
    icon: "🏭",
    tagline: "How modern innovations are systematically transforming everyday work and society",
    categoryLabel: "Industries",
    accent: "linear-gradient(90deg, #ec4899, #8b5cf6)",
    shortDesc: "See how emerging technologies combine to modernize schools, hospitals, farms, banks, transport networks, and entertainment.",
    tags: ["Cross-Industry", "Smart Schools", "Telehealth", "FinTech"],

    classmatePitch: "How colleges, hospitals, and local farm cooperatives combine AI, drones, and tablets to modernize everyday work and make life easier.",

    what: {
      definition: "Industry application refers to how different sectors of human society combine artificial intelligence, IoT, robotics, and cloud networks to modernize old-fashioned, manual ways of doing work.",
      purpose: "Its purpose is to make services faster, cheaper, more accessible, and less wasteful for ordinary citizens and students.",
      differentiation: "Instead of examining a single technology by itself, industry applications look at how multiple tools work together as a team — like combining drones, sensors, and AI to help farmers."
    },

    history: {
      originYear: "2011 (Industry 4.0 Initiative) & Modern Cloud Services",
      pioneers: "German Industry 4.0 Working Group & World Economic Forum",
      narrative: "In 2011, the German government announced 'Industrie 4.0' to describe the digital revolution where factories connect machines to the cloud. In 2016, the World Economic Forum highlighted that the digital, physical, and biological worlds were fusing together into an interconnected society."
    },

    how: {
      intro: "Every industry modernizes by passing through three simple, predictable phases:",
      steps: [
        { icon: "📄", label: "1. Going Paperless", desc: "Converting paper registration forms, clinic folders, and receipts into digital files." },
        { icon: "🔄", label: "2. Automation", desc: "Using software or robots to handle repetitive paperwork and calculations automatically." },
        { icon: "🧠", label: "3. Adding AI", desc: "Using predictive intelligence to suggest better choices for teachers, doctors, and farmers." },
        { icon: "🌐", label: "4. Connected Community", desc: "Every part of the system communicates seamlessly to serve people quickly." }
      ],
      analogy: "It's like upgrading a school library from paper card catalogs to computer search, then to e-books, and finally to an AI research tutor that recommends the best chapters."
    },

    advantages: [
      { title: "Much Faster Public Services", desc: "Apply for student loans, driver's licenses, or passports online without waiting in 5-hour physical lines." },
      { title: "Wider Access for Remote Towns", desc: "Telehealth video clinics and online college degrees connect rural towns to top city specialists." },
      { title: "Less Food & Energy Waste", desc: "Precision farming uses 40% less water, and smart power grids cut unnecessary electricity burn." },
      { title: "Safer Working Conditions", desc: "Robots and camera drones handle dangerous jobs in mining, electrical repairs, and chemical factories." }
    ],

    disadvantages: [
      { title: "The Threat of Monopolies", desc: "Giant tech corporations dominate services, making it harder for small mom-and-pop shops to compete." },
      { title: "Loss of Traditional Entry-Level Jobs", desc: "Automated supermarket self-checkouts and automated teller machines reduce simple cashier openings." },
      { title: "Total Breakdown During Blackouts", desc: "When a hospital or transit system relies entirely on cloud servers, a power or internet blackout can freeze everything." },
      { title: "Hard to Connect to Old Systems", desc: "Connecting modern AI software to 20-year-old hospital database computers is slow, messy, and expensive." }
    ],

    scenarios: [
      {
        icon: "🏥",
        title: "Healthcare: Rural Tele-Consultation",
        story: "A student in a remote mountain province develops an unusual, painful skin rash. The local clinic has no dermatologist. Using an encrypted telehealth portal, the clinic nurse uploads high-res photos to an AI triage tool and connects over satellite video to a specialist in the capital, who prescribes the exact medication needed in 15 minutes."
      },
      {
        icon: "🌾",
        title: "Agriculture: Spraying Only Sick Crops",
        story: "A farming family flies a small camera drone over their corn field. AI software analyzes the video and spots a pest outbreak on just 15 crop rows in the northern corner. They spray only those 15 rows instead of the entire 10-hectare farm, saving money and keeping the local river clean."
      },
      {
        icon: "🏦",
        title: "Banking: Instant Mobile Allowances",
        story: "A college student's debit card is declined at the campus cafeteria because his account balance is zero. He messages his mom, who opens a mobile banking app and sends allowance money via an instant transfer network. The funds land on his phone in 5 seconds, letting him pay for lunch without embarrassment."
      }
    ],

    importance: "No career or college major is isolated from technology. Whether you plan to be an accountant, nurse, teacher, engineer, or farmer, understanding these industry trends ensures you will be ready for the workplace.",

    takeaway: "Emerging technologies shine brightest when they team up to solve genuine everyday problems across education, healthcare, and food."
  },

  {
    id: 14,
    number: "TOPIC 14",
    category: "strategy",
    title: "Choosing Appropriate Emerging Technologies for a Specific Need",
    icon: "🎯",
    tagline: "A smart decision guide: solving real student problems without wasting budget",
    categoryLabel: "IT Decision Guide",
    accent: "linear-gradient(90deg, #38bdf8, #a855f7)",
    shortDesc: "A structured 4-step framework to evaluate technology choices: identify genuine human problems first, assess total budget readiness, train users, and run phased pilots.",
    tags: ["Smart Choices", "School Budget", "User Training", "Pilot Testing"],

    classmatePitch: "The Golden Rule: Don't buy expensive shiny gadgets just to show off! Find your real problem first, check your school budget, and train the teachers.",

    what: {
      definition: "Technology evaluation is the disciplined habit of carefully assessing new tools before buying them to ensure they solve a real problem, fit the school's budget, and can be easily used by everyday people.",
      purpose: "Its purpose is to protect schools and small businesses from wasting limited money on trendy, expensive gadgets that end up sitting in a closet collecting dust.",
      differentiation: "An amateur chooses tech because it looks cool on TikTok ('Let's buy 50 VR headsets!'). A smart IT professional chooses tech because it solves a proven bottleneck ('Our students need 24/7 homework feedback, so an affordable tutoring app is what we actually need')."
    },

    history: {
      originYear: "1989 (Technology Acceptance Model - TAM)",
      pioneers: "Fred Davis (Creator of TAM)",
      narrative: "In 1989, researcher Fred Davis introduced the famous Technology Acceptance Model (TAM). He showed that whether people actually use new software depends on two simple questions: 1. Is it truly useful? and 2. Is it easy to use? If software is confusing, people will simply ignore it."
    },

    how: {
      intro: "Follow this simple 4-step decision guide whenever choosing technology for a school, project, or business:",
      steps: [
        { icon: "🔍", label: "1. What is the Real Headache?", desc: "Talk to students and teachers first. What is the actual problem slowing everyone down?" },
        { icon: "💰", label: "2. Count All Costs", desc: "Don't just look at the price tag; count Wi-Fi upgrades, yearly subscription fees, and repairs." },
        { icon: "👥", label: "3. Help the Humans First", desc: "Give friendly, stress-free training so teachers and students feel confident using the tool." },
        { icon: "🧪", label: "4. Test with One Class", desc: "Try it in one classroom for a month. If grades improve, roll it out to the rest of the campus!" }
      ],
      analogy: "Choosing technology is like buying sneakers: it doesn't matter how flashy or expensive they look on the shelf if they pinch your toes and hurt to walk in."
    },

    advantages: [
      { title: "Saves Limited School Budgets", desc: "Prevents schools from wasting tuition money on overpriced gadgets that don't help students learn." },
      { title: "Happier Teachers and Students", desc: "When people are taught how to use a tool comfortably, they enjoy using it instead of dreading it." },
      { title: "Protects Student Privacy", desc: "Careful checking ensures the school doesn't buy apps that secretly sell student data to advertisers." },
      { title: "Measurable Learning Improvements", desc: "Allows the school to clearly prove that test scores, attendance, or homework completion actually improved." }
    ],

    disadvantages: [
      { title: "Takes Patience and Research", desc: "Interviewing students, checking security, and running trials takes weeks rather than impulsive buying." },
      { title: "Risk of Overthinking", desc: "Committees can get stuck in endless meetings comparing software instead of picking one and starting." },
      { title: "Software Updates Keep Coming", desc: "By the time a school finishes testing an app, the company might release a new version with different buttons." },
      { title: "Natural Resistance to Change", desc: "Some people naturally dislike changing old habits they have followed for decades." }
    ],

    scenarios: [
      {
        icon: "🏫",
        title: "The School that Chose Cloud Portals Over VR Goggles",
        story: "A regional college receives a $50,000 technology grant. The committee initially considers buying 100 high-end VR headsets. Following the 4-step framework, they survey students and find that 40% of their students don't have reliable internet at home, and the campus Wi-Fi is spotty. Instead, they spend $15,000 on an offline-capable digital portal and 200 rugged e-readers with free textbooks. Every single student benefits, and passing rates jump by 28%."
      },
      {
        icon: "🏥",
        title: "The Clinic That Picked SMS Over a Complex App",
        story: "A community health clinic wants to build a $20,000 smartphone app for scheduling appointments. They realize most of their elderly patients use basic push-button feature phones. The clinic adopts a simple, automated text-message reminder service for $30 a month instead, cutting missed doctor visits by 60%."
      },
      {
        icon: "🏪",
        title: "Testing Barcode Scanners Before Buying a Robot",
        story: "A family bookstore thinks they need a $100,000 warehouse robot to organize stock. Following the framework, they test two $50 wireless barcode scanners connected to a free cloud spreadsheet for two weeks. It solves 95% of their lost book issues with zero debt, proving the robot was unnecessary."
      }
    ],

    importance: "Technology is a powerful amplifier: if you apply modern technology to an efficient, well-understood workflow, you amplify success. But if you apply modern technology to a broken process, you just create expensive confusion.",

    takeaway: "Never buy technology just because it's new and shiny; always choose the simplest, friendliest tool that solves your real problem."
  },

  {
    id: 15,
    number: "TOPIC 15",
    category: "strategy",
    title: "Implications of Emerging Technologies for Future IT Development & Society",
    icon: "🌍",
    tagline: "Balancing exciting new inventions with ethics, privacy, employment, and human dignity",
    categoryLabel: "Future & Society",
    accent: "linear-gradient(90deg, #ec4899, #00f0ff)",
    shortDesc: "As artificial intelligence and connected systems grow, society must tackle big questions about future careers, online privacy, electricity consumption, and fairness.",
    tags: ["Ethics", "Future Jobs", "Digital Divide", "Human Values"],

    classmatePitch: "Making sure robots and AI help humans do more meaningful work rather than taking away jobs or invading student privacy.",

    what: {
      definition: "Societal implications are the real-world legal, ethical, and human impacts that rapid technological changes have on jobs, privacy, fairness, and the environment.",
      purpose: "Its purpose is to make sure technologists build a future that helps everyone, rather than a future that only benefits big companies while harming ordinary people.",
      differentiation: "Technical engineering asks: 'CAN we build this smart software?' Ethical societal thinking asks: 'SHOULD we build it, and how do we make sure it doesn't harm students or society?'"
    },

    history: {
      originYear: "1942 (Asimov's Laws) & Modern Global AI Ethics",
      pioneers: "Isaac Asimov (Author) & Modern Tech Ethicists",
      narrative: "In 1942, author Isaac Asimov wrote the 'Three Laws of Robotics' to explore how intelligent machines must never harm humans. Today, organizations like UNESCO and the European Union have created official global charters to ensure AI respects human dignity, privacy, and truth."
    },

    how: {
      intro: "Society guides technology through a continuous conversation between inventors, laws, and everyday citizens:",
      steps: [
        { icon: "💡", label: "1. Rapid Invention", desc: "Engineers build incredible new AI models, drones, and algorithms." },
        { icon: "⚡", label: "2. Real-World Headaches", desc: "Unintended problems appear: deepfakes, scams, or student data privacy concerns." },
        { icon: "⚖️", label: "3. Friendly Rules & Guardrails", desc: "Schools, governments, and communities establish fair rules to prevent abuse." },
        { icon: "🌱", label: "4. Technology for Good", desc: "Developers build ethical safety checks by default, making tools safe and helpful for all." }
      ],
      analogy: "Technology is like a powerful sports car engine: it can take you to amazing places, but you need reliable brakes, seatbelts, and traffic lights so everyone stays safe on the journey."
    },

    advantages: [
      { title: "Solves Humanity's Hardest Crises", desc: "Accelerates scientific breakthroughs in clean energy, cancer cures, and ocean plastic cleanups." },
      { title: "Shifts Careers to Meaningful Work", desc: "Automates repetitive drudgery, letting human workers focus on mentoring, artistic storytelling, and empathy." },
      { title: "Brings Education to Every Village", desc: "Allows students anywhere in the world to access the best libraries and college lectures from their phones." },
      { title: "Empowers People with Disabilities", desc: "Smart screen readers, robotic limbs, and real-time captions give everyone equal opportunities to learn and work." }
    ],

    disadvantages: [
      { title: "The Risk of the 'Digital Divide'", desc: "If fast internet and AI are only available in wealthy cities, students in rural provinces fall further behind." },
      { title: "Loss of Personal Privacy", desc: "Ubiquitous cameras and tracking sensors risk creating a world where every step you take is watched and logged." },
      { title: "Huge Electricity & Water Usage", desc: "Massive AI server rooms consume huge amounts of electricity and water for cooling, impacting the environment." },
      { title: "Fake News & Deepfakes", desc: "Fake audio and video clones make it easier for scammers to mislead the public and spread rumors online." }
    ],

    scenarios: [
      {
        icon: "💼",
        title: "How an Illustrator's Job Evolved with AI",
        story: "A young graphic designer initially worried that AI image generators would put her out of a job. Instead, she adopted AI as an assistant. Instead of spending 8 hours cutting out background pixels by hand, she uses AI to draft color palettes in 2 minutes, spending her time consulting with clients on brand strategy. She doubles her projects and makes more money."
      },
      {
        icon: "⚡",
        title: "Green Solar-Powered Campus Data Centers",
        story: "A university building a new computer server lab for AI research installs solar panels on the roof and uses natural airflow cooling instead of power-hungry chillers, showing that cutting-edge IT can run cleanly without hurting the planet."
      },
      {
        icon: "🛡️",
        title: "Exposing a Fake Campus Voice Scam",
        story: "A student receives a panicked voice message that sounds like his college roommate asking for urgent transfer money. Remembering his IT lessons on AI voice cloning, he calls his roommate's phone directly to check. His roommate answers laughing from the library — proving the message was an AI clone scam and saving his allowance."
      }
    ],

    importance: "The future is not decided by machines; it is decided by the students, engineers, and citizens of today. Learning the ethical side of tech ensures you will build and use tools that make the world a fairer place.",

    takeaway: "Technology should serve humanity, not the other way around: our real goal is to use innovation to elevate human dignity, fairness, and freedom."
  }
];

// ==========================================
// 2. DATA: INDUSTRY MATRIX (TOPIC 13 SPOTLIGHT)
// ==========================================
const INDUSTRY_MATRIX = [
  {
    icon: "🎓",
    name: "Education & Campus Life",
    techs: ["Generative AI", "Virtual Reality", "Cloud Learning"],
    desc: "AI study coaches explain lessons 24/7 at your own speed, while VR headsets let biology students dissect virtual hearts without messy physical chemicals.",
    example: "Students take virtual field trips to ancient Egypt right from their desks."
  },
  {
    icon: "🏥",
    name: "Healthcare & Medicine",
    techs: ["Machine Learning", "Robotics", "Smartwatches"],
    desc: "AI spots early tumors in X-rays, da Vinci surgical robots eliminate hand tremors, and smartwatches detect irregular heartbeats while you sleep.",
    example: "Surgeons use robotic micro-arms to perform precise procedures through tiny 1-cm incisions."
  },
  {
    icon: "🌾",
    name: "Farming & Agriculture",
    techs: ["Soil Sensors", "Drones", "Weather Analytics"],
    desc: "Solar soil sensors detect dry ground to turn on sprinklers automatically, and camera drones spot crop disease so farmers spray only the infected plants.",
    example: "Farmers cut pesticide expenses and water waste by up to 40% using smart sensor probes."
  },
  {
    icon: "🏭",
    name: "Manufacturing & Factories",
    techs: ["Robotic Arms", "Vibration Sensors", "Automated Lines"],
    desc: "Robotic arms weld car doors with millimeter precision around the clock, while vibration sensors on machines predict motor breakdowns weeks ahead.",
    example: "Automobile plants run safely overnight with robotic arms assembling battery packs."
  },
  {
    icon: "🚗",
    name: "Transportation & Commuting",
    techs: ["GPS Telemetry", "Computer Vision", "Smart Traffic Lights"],
    desc: "GPS apps analyze thousands of phone speeds to reroute drivers around accidents, and traffic lights adjust green lights automatically when ambulances approach.",
    example: "Smart street traffic signals give green lights to busy avenues, cutting rush-hour delays."
  },
  {
    icon: "🏦",
    name: "Banking & Mobile Wallets",
    techs: ["Machine Learning", "Blockchain", "Smart Contracts"],
    desc: "Machine learning freezes card fraud in 40 milliseconds, while mobile wallets let students send lunch allowance in 5 seconds without bank queues.",
    example: "A bank flags an unauthorized overseas charge and alerts the student's phone instantly."
  },
  {
    icon: "🛒",
    name: "Retail & Online Shopping",
    techs: ["Augmented Reality", "Warehouse Bots", "Big Data"],
    desc: "Students preview full-scale 3D study desks in their bedroom with phone cameras before buying, while warehouse robots carry shelves to human packers.",
    example: "Shoppers try on virtual sneakers and sunglasses using smartphone selfie cameras."
  },
  {
    icon: "🎬",
    name: "Gaming & Entertainment",
    techs: ["Generative AI", "Virtual Reality", "Spatial Audio"],
    desc: "Video game characters have natural, unscripted conversations using AI language models, while VR theme rides place players inside 360-degree movie worlds.",
    example: "Gamers explore immersive worlds where game characters answer any question in their own voice."
  }
];

// ==========================================
// 3. DATA: 15-QUESTION COMPREHENSIVE QUIZ
// ==========================================
const QUIZ_QUESTIONS = [
  {
    topicId: 1,
    topicName: "Understanding Emerging Technologies",
    question: "What is the best, simplest way to explain what an 'emerging technology' is to a classmate?",
    options: [
      "It is a technology that is completely free to buy and never breaks down.",
      "It is a growing new invention that is moving from experimental stages into everyday mainstream use.",
      "It is any hardware tool that doesn't need electricity or Wi-Fi to run.",
      "It is a technology that only governments and astronauts are allowed to touch."
    ],
    correctIndex: 1,
    explanation: "Emerging technologies are radically novel innovations still evolving and growing. Like early smartphones in the 2000s, they start in labs and pilot tests before becoming everyday necessities."
  },
  {
    topicId: 2,
    topicName: "Artificial Intelligence",
    question: "Which of the following is an everyday example of Artificial Intelligence that students use all the time?",
    options: [
      "A wooden pencil with an eraser cap.",
      "Smartphone Face Unlock and music recommendation playlists on Spotify.",
      "A standard mechanical wall clock with rotating hands.",
      "A printed paper dictionary on a library shelf."
    ],
    correctIndex: 1,
    explanation: "Face unlock uses computer vision and neural pattern recognition, while music apps use AI algorithms to learn your taste and recommend songs you'll enjoy."
  },
  {
    topicId: 3,
    topicName: "Machine Learning",
    question: "How does Machine Learning (ML) train a computer to recognize things?",
    options: [
      "By manually coding thousands of strict if/then rules for every single situation.",
      "By feeding the computer thousands of labeled practice examples so it discovers the patterns itself.",
      "By shaking the computer hardware until it starts answering correctly.",
      "By printing out instructions on paper and placing them beside the screen."
    ],
    correctIndex: 1,
    explanation: "Instead of writing every single rule by hand, Machine Learning provides lots of examples (like thousands of dog photos) and lets the algorithm tweak its own settings until it recognizes patterns accurately."
  },
  {
    topicId: 4,
    topicName: "Generative AI",
    question: "What makes Generative AI different from traditional classification AI?",
    options: [
      "Generative AI only works when the computer is turned off.",
      "Generative AI actually creates brand-new content (like essays, code, or images) based on your instructions.",
      "Generative AI cannot understand English at all.",
      "Traditional AI is used only for drawing cartoons."
    ],
    correctIndex: 1,
    explanation: "Traditional AI classifies or judges ('Is this email spam?'), while Generative AI synthesizes new, original text, artwork, code, or music from prompts."
  },
  {
    topicId: 5,
    topicName: "Robotics & Automation",
    question: "What are the four continuous steps in a robot's operational cycle?",
    options: [
      "Keyboard &rarr; Monitor &rarr; Mouse &rarr; Power Cable",
      "Sensors (Senses) &rarr; Controller (Brain) &rarr; Actuators (Muscles) &rarr; Feedback (Nerves)",
      "Download &rarr; Unzip &rarr; Delete &rarr; Restart",
      "Click &rarr; Double Click &rarr; Scroll &rarr; Close Window"
    ],
    correctIndex: 1,
    explanation: "Robots use SENSORS to perceive the physical world, a CONTROLLER to make smart decisions, ACTUATORS to move, and FEEDBACK to verify that the movement was successful."
  },
  {
    topicId: 6,
    topicName: "Internet of Things",
    question: "Which of the following describes an Internet of Things (IoT) system in a smart school?",
    options: [
      "A chalkboard that requires colored chalk to write announcements.",
      "Classroom air conditioners and lights that turn off automatically when sensors detect everyone left.",
      "A student carrying a heavy textbook inside their backpack.",
      "A metal key used to manually unlock a classroom door."
    ],
    correctIndex: 1,
    explanation: "IoT connects physical objects (like room lights and AC units) to sensors and Wi-Fi so they can make smart, energy-saving decisions automatically."
  },
  {
    topicId: 7,
    topicName: "Big Data & Analytics",
    question: "Which type of analytics answers: 'What is the best action we should take to help students pass?'",
    options: [
      "Descriptive Analytics (What happened?)",
      "Diagnostic Analytics (Why did it happen?)",
      "Predictive Analytics (What will happen?)",
      "Prescriptive Analytics (What should we do?)"
    ],
    correctIndex: 3,
    explanation: "Prescriptive Analytics gives the actionable recommendation: it tells educators or managers what specific action to take to get the best possible outcome."
  },
  {
    topicId: 8,
    topicName: "Blockchain & Ledgers",
    question: "Why is it practically impossible for a hacker to secretly change an old record in a blockchain?",
    options: [
      "Because the computer screen is locked with a physical padlock.",
      "Because each block contains the cryptographic hash of the previous block, and copies are shared across thousands of computers.",
      "Because blockchain records are written in invisible ink that only judges can see.",
      "Because users must disconnect their internet cables before writing a record."
    ],
    correctIndex: 1,
    explanation: "Every block is mathematically linked to the one before it using cryptographic hashes. Changing one block breaks the whole chain across thousands of decentralized computers, so the tampering is instantly rejected."
  },
  {
    topicId: 9,
    topicName: "Blockchain Beyond Crypto",
    question: "How can enterprise blockchain and smart contracts directly help college graduates?",
    options: [
      "By giving every student free computer games forever.",
      "By providing tamper-proof digital diplomas that employers can verify online in 2 seconds without paper notarization.",
      "By replacing teachers with cryptocurrency tokens.",
      "By forcing students to pay their tuition exclusively in Bitcoin."
    ],
    correctIndex: 1,
    explanation: "Blockchain provides a verifiable, permanent record of degrees and credentials, eliminating fake diplomas and making it easy for employers worldwide to verify academic achievements instantly."
  },
  {
    topicId: 10,
    topicName: "Virtual Reality",
    question: "What is the primary sensory difference between Virtual Reality (VR) and Augmented Reality (AR)?",
    options: [
      "VR completely replaces your real surroundings with a simulated 3D world, while AR overlays digital items on top of the real room.",
      "VR only works outdoors, while AR only works in underwater submarines.",
      "VR requires paper glasses, while AR requires heavy space suits.",
      "There is no difference at all between the two."
    ],
    correctIndex: 0,
    explanation: "VR immerses you inside an artificial 3D environment by shutting out the real world. AR keeps you in the real world and projects helpful digital graphics onto real objects."
  },
  {
    topicId: 11,
    topicName: "Augmented Reality",
    question: "Which of the following is an everyday example of Augmented Reality (AR)?",
    options: [
      "A printed textbook sitting closed on a shelf.",
      "Using a phone camera app to see an interactive 3D heart floating on your study desk or trying on virtual glasses.",
      "Listening to a radio station in your car.",
      "Sending a plain text email to your professor."
    ],
    correctIndex: 1,
    explanation: "AR projects digital 3D models or filters right onto your real-world camera view, like seeing how furniture fits in your room or interactive biology diagrams on your desk."
  },
  {
    topicId: 12,
    topicName: "Wearable Technologies",
    question: "How do modern smartwatches continuously measure your blood pulse rate against your skin?",
    options: [
      "By sticking tiny microscopic needles into your skin.",
      "By flashing green and infrared LEDs into wrist capillaries and measuring changes in light reflection (PPG).",
      "By taking continuous X-rays of your arm bones.",
      "By listening to sound waves with an underwater microphone."
    ],
    correctIndex: 1,
    explanation: "Smartwatches use optical PPG sensors: green LEDs flash against your skin, and photodiodes measure the tiny changes in light absorption every time your heart pulses blood."
  },
  {
    topicId: 13,
    topicName: "Industry Applications",
    question: "In modern precision agriculture, how do smart sensors and drones help farmers save money?",
    options: [
      "By paving over all the soil with concrete so weeds cannot grow.",
      "By detecting dry soil patches and pest spots early so water and pesticide are applied only where needed.",
      "By replacing all food crops with plastic artificial vegetables.",
      "By forcing farmers to inspect every single leaf with a hand magnifying glass."
    ],
    correctIndex: 1,
    explanation: "Instead of blanketing whole fields with expensive chemicals and wasting water, smart sensors and drones target only the specific spots that need attention, cutting costs and protecting rivers."
  },
  {
    topicId: 14,
    topicName: "Choosing Appropriate Tech",
    question: "When a school or business wants to adopt new technology, what should they do FIRST?",
    options: [
      "Buy the most expensive gadget that looks popular on social media.",
      "Clearly identify the genuine human problem and workflow bottleneck before shopping for tools.",
      "Fire half the staff to make room for robots.",
      "Wait 20 years to see what happens before doing anything."
    ],
    correctIndex: 1,
    explanation: "Step 1 is always Problem Discovery: find out what headache is actually hurting students or teachers first, so you don't waste budget on gadgets that don't solve real problems."
  },
  {
    topicId: 15,
    topicName: "Implications for Society",
    question: "What is the 'digital divide', and why is it an important ethical concern?",
    options: [
      "The mathematical division symbol used inside calculator microchips.",
      "The gap between communities with fast, affordable access to tech and those without it, risking leaving rural students behind.",
      "The USB cable that connects a phone to a laptop.",
      "The password required to log into campus Wi-Fi."
    ],
    correctIndex: 1,
    explanation: "The digital divide is the unfair gap between those who have fast internet and modern devices and those who do not. Ensuring affordable access for all students is essential for equal opportunity."
  }
];

// ==========================================
// 4. DATA: VERIFIED CITATIONS & SOURCES
// ==========================================
const REFERENCES_DATA = [
  {
    org: "NIST (National Institute of Standards & Tech)",
    title: "Artificial Intelligence Risk Management Framework (AI RMF 1.0)",
    desc: "Clear guidelines on building trustworthy AI that is safe, fair, and transparent for everyday users and schools.",
    linkText: "Read NIST AI Framework",
    url: "https://www.nist.gov/itl/ai-risk-management-framework"
  },
  {
    org: "World Economic Forum (WEF)",
    title: "The Future of Jobs Report & Tech Horizons",
    desc: "Global research showing which career skills and technologies will be in highest demand for college graduates over the next decade.",
    linkText: "Explore WEF Jobs Report",
    url: "https://www.weforum.org/publications/the-future-of-jobs-report-2023/"
  },
  {
    org: "IEEE (Institute of Electrical & Electronics Engineers)",
    title: "Ethically Aligned Design for Autonomous & Intelligent Systems",
    desc: "Engineering standards ensuring that robots and AI serve human well-being, privacy, and safety.",
    linkText: "View IEEE Ethics Standards",
    url: "https://ethicsinaction.ieee.org/"
  },
  {
    org: "IBM Technology Research Hub",
    title: "Beginner Guides to Machine Learning, Blockchain & IoT",
    desc: "Clear architectural explanations breaking down neural networks, distributed ledgers, and sensor networks for students.",
    linkText: "Visit IBM Tech Topics",
    url: "https://www.ibm.com/topics"
  },
  {
    org: "Google DeepMind & Research",
    title: "Attention Is All You Need (The Transformer Architecture)",
    desc: "The famous 2017 research paper that created the Transformer technology powering modern generative AI like ChatGPT and Gemini.",
    linkText: "Read Transformer Paper",
    url: "https://arxiv.org/abs/1706.03762"
  },
  {
    org: "Gartner Research",
    title: "Understanding the Hype Cycle for Emerging Technologies",
    desc: "The industry-standard model showing how innovations move from initial excitement to reliable everyday tools.",
    linkText: "Explore Gartner Hype Cycle",
    url: "https://www.gartner.com/en/research/methodologies/gartner-hype-cycle"
  }
];

// ==========================================
// 5. APPLICATION STATE & AUDIO ENGINE
// ==========================================
const State = {
  currentFilter: 'all',
  searchQuery: '',
  activeModalTopicIndex: 0,
  quizIndex: 0,
  quizScore: 0,
  userQuizAnswers: Array(QUIZ_QUESTIONS.length).fill(null),
  theme: localStorage.getItem('theme') || 'dark',
  soundEnabled: localStorage.getItem('sound_fx') !== 'false'
};

// Web Audio API Synthesizer (Zero external audio files needed!)
let audioCtx = null;

function initAudio() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
    }
  }
}

function playSound(type) {
  if (!State.soundEnabled) return;
  try {
    initAudio();
    if (!audioCtx) return;
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const now = audioCtx.currentTime;

    if (type === 'blip') {
      // Soft cyber hover blip
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, now);
      osc.frequency.exponentialRampToValueAtTime(900, now + 0.06);
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.06);

    } else if (type === 'click') {
      // Crisp UI click
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(400, now + 0.05);
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.05);

    } else if (type === 'correct') {
      // Happy two-tone chime
      const osc1 = audioCtx.createOscillator();
      const osc2 = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc1.type = 'sine';
      osc2.type = 'sine';
      osc1.frequency.setValueAtTime(523.25, now); // C5
      osc1.frequency.setValueAtTime(659.25, now + 0.09); // E5
      osc2.frequency.setValueAtTime(783.99, now + 0.16); // G5
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(audioCtx.destination);
      osc1.start(now);
      osc1.stop(now + 0.25);
      osc2.start(now + 0.16);
      osc2.stop(now + 0.35);

    } else if (type === 'wrong') {
      // Gentle low thud
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(140, now + 0.18);
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.18);

    } else if (type === 'fanfare') {
      // Celebration victory chords
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C - E - G - High C
      notes.forEach((freq, idx) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.1);
        gain.gain.setValueAtTime(0.08, now + idx * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.1 + 0.35);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now + idx * 0.1);
        osc.stop(now + idx * 0.1 + 0.35);
      });
    }
  } catch (err) {
    // Audio context may be restricted by browser before user interaction
  }
}

// ==========================================
// 6. CONFETTI CELEBRATION EFFECT (CANVAS)
// ==========================================
function triggerConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const count = 100;
  const particles = [];
  const colors = ['#00f0ff', '#a855f7', '#10b981', '#f59e0b', '#38bdf8', '#ec4899'];

  for (let i = 0; i < count; i++) {
    particles.push({
      x: canvas.width / 2 + (Math.random() - 0.5) * 100,
      y: canvas.height / 2 + (Math.random() - 0.5) * 100,
      vx: (Math.random() - 0.5) * 14,
      vy: (Math.random() - 1) * 12 - 4,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      vRot: (Math.random() - 0.5) * 10,
      alpha: 1
    });
  }

  let animationId;
  function updateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = 0;

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.3; // Gravity
      p.rotation += p.vRot;
      p.alpha -= 0.008;

      if (p.alpha > 0) {
        alive++;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(p.alpha, 0);
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
        ctx.restore();
      }
    });

    if (alive > 0) {
      animationId = requestAnimationFrame(updateConfetti);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(animationId);
    }
  }

  updateConfetti();
}

// ==========================================
// 7. INITIALIZATION ON DOM READY
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initSoundButton();
  initParticleCanvas();
  renderTopicsGrid();
  renderIndustryMatrix();
  renderReferencesGrid();
  initQuiz();
  setupEventListeners();
});

// ==========================================
// 8. THEME & SOUND CONTROLS
// ==========================================
function initTheme() {
  document.documentElement.setAttribute('data-theme', State.theme);
  updateThemeIcon();
}

function toggleTheme() {
  State.theme = State.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', State.theme);
  localStorage.setItem('theme', State.theme);
  updateThemeIcon();
  playSound('click');
}

function updateThemeIcon() {
  const icon = document.getElementById('theme-icon');
  if (!icon) return;
  icon.className = State.theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

function initSoundButton() {
  const soundBtn = document.getElementById('sound-toggle');
  const soundIcon = document.getElementById('sound-icon');
  if (!soundBtn || !soundIcon) return;

  function updateSoundUI() {
    if (State.soundEnabled) {
      soundIcon.className = 'fas fa-volume-up';
      soundBtn.classList.remove('muted');
      soundBtn.title = "Sound FX Enabled (Click to Mute)";
    } else {
      soundIcon.className = 'fas fa-volume-mute';
      soundBtn.classList.add('muted');
      soundBtn.title = "Sound FX Muted (Click to Unmute)";
    }
  }

  updateSoundUI();

  soundBtn.addEventListener('click', () => {
    State.soundEnabled = !State.soundEnabled;
    localStorage.setItem('sound_fx', State.soundEnabled);
    updateSoundUI();
    if (State.soundEnabled) playSound('click');
  });
}

// ==========================================
// 9. HERO PARTICLES BACKGROUND CANVAS
// ==========================================
function initParticleCanvas() {
  const canvas = document.getElementById('hero-particles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = canvas.parentElement.offsetWidth);
  let height = (canvas.height = canvas.parentElement.offsetHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
  });

  const particleCount = Math.min(Math.floor((width * height) / 14000), 70);
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 2 + 1,
      alpha: Math.random() * 0.5 + 0.2
    });
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 240, 255, ${p.alpha * 0.6})`;
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 110) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(0, 240, 255, ${0.15 * (1 - dist / 110)})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }

  draw();
}

// ==========================================
// 10. TOPICS RENDERING & 3D TILT EFFECT
// ==========================================
function renderTopicsGrid() {
  const grid = document.getElementById('topics-grid');
  const statusEl = document.getElementById('search-status');
  if (!grid) return;

  const query = State.searchQuery.toLowerCase().trim();
  const filter = State.currentFilter;

  const filtered = TOPICS_DATA.filter(t => {
    const matchesFilter = filter === 'all' || t.category === filter;
    const matchesSearch = !query || 
      t.title.toLowerCase().includes(query) ||
      t.shortDesc.toLowerCase().includes(query) ||
      t.tagline.toLowerCase().includes(query) ||
      t.tags.some(tag => tag.toLowerCase().includes(query));

    return matchesFilter && matchesSearch;
  });

  if (statusEl) {
    if (query) {
      statusEl.style.display = 'block';
      statusEl.innerHTML = `<i class="fas fa-search"></i> Showing <strong>${filtered.length}</strong> of 15 topics matching "<em>${escapeHTML(query)}</em>"`;
    } else {
      statusEl.style.display = 'none';
    }
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;" class="glass-card">
        <i class="fas fa-search" style="font-size: 2.5rem; color: var(--neon-cyan); margin-bottom: 16px;"></i>
        <h3 style="font-size: 1.3rem; margin-bottom: 8px;">No matching technologies found</h3>
        <p style="color: var(--text-secondary); margin-bottom: 20px;">Try searching for simple words like "AI", "Blockchain", "Sensors", "Robots", or "VR".</p>
        <button id="reset-search-btn" class="btn btn-secondary">Clear Search Filters</button>
      </div>
    `;
    const resetBtn = document.getElementById('reset-search-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        State.searchQuery = '';
        State.currentFilter = 'all';
        const searchInput = document.getElementById('topic-search');
        if (searchInput) searchInput.value = '';
        document.querySelectorAll('.filter-pill').forEach(p => p.classList.toggle('active', p.dataset.category === 'all'));
        renderTopicsGrid();
      });
    }
    return;
  }

  grid.innerHTML = filtered.map((topic) => {
    return `
      <article class="topic-card glass-card" data-topic-id="${topic.id}" style="--card-accent: ${topic.accent};" tabindex="0" role="button" aria-label="Open ${topic.title} report">
        <div>
          <div class="topic-card-top">
            <div class="topic-icon-frame">${topic.icon}</div>
            <span class="topic-number-badge">${topic.number}</span>
          </div>

          <div class="topic-card-body">
            <h3>${topic.title}</h3>
            <p class="topic-card-tagline">${topic.tagline}</p>
            <p class="topic-card-desc">${topic.shortDesc}</p>
          </div>
        </div>

        <div class="topic-card-footer">
          <div class="topic-tag-chips">
            ${topic.tags.slice(0, 2).map(tag => `<span class="tag-chip">${tag}</span>`).join('')}
          </div>
          <span class="card-action-btn">
            EXPLORE DOSSIER <i class="fas fa-arrow-right"></i>
          </span>
        </div>
      </article>
    `;
  }).join('');

  // Add click listeners and 3D tilt effects to cards
  grid.querySelectorAll('.topic-card').forEach(card => {
    card.addEventListener('click', () => {
      playSound('blip');
      const id = parseInt(card.dataset.topicId, 10);
      openTopicModalById(id);
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        playSound('blip');
        const id = parseInt(card.dataset.topicId, 10);
        openTopicModalById(id);
      }
    });

    // 3D Tilt Effect on Mouse Move
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -7;
      const rotateY = ((x - centerX) / centerX) * 7;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      card.classList.add('tilt-active');
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.classList.remove('tilt-active');
    });
  });
}

// ==========================================
// 11. INDUSTRY MATRIX (TOPIC 13) RENDERING
// ==========================================
function renderIndustryMatrix() {
  const container = document.getElementById('industry-matrix-grid');
  if (!container) return;

  container.innerHTML = INDUSTRY_MATRIX.map(ind => `
    <div class="industry-card glass-card">
      <div class="industry-header">
        <div class="industry-icon">${ind.icon}</div>
        <h4 class="industry-name">${ind.name}</h4>
      </div>
      <div class="industry-tech-pills">
        ${ind.techs.map(t => `<span class="tech-mini-pill">${t}</span>`).join('')}
      </div>
      <p class="industry-desc">${ind.desc}</p>
      <div class="industry-example-box">
        <strong>Real Example:</strong> ${ind.example}
      </div>
    </div>
  `).join('');
}

// ==========================================
// 12. REFERENCES GRID RENDERING
// ==========================================
function renderReferencesGrid() {
  const container = document.getElementById('references-grid');
  if (!container) return;

  container.innerHTML = REFERENCES_DATA.map(ref => `
    <div class="reference-card glass-card">
      <span class="reference-org-tag">${ref.org}</span>
      <h4 class="reference-title">${ref.title}</h4>
      <p class="reference-desc">${ref.desc}</p>
      <a href="${ref.url}" target="_blank" rel="noopener noreferrer" class="reference-link">
        ${ref.linkText} <i class="fas fa-external-link-alt"></i>
      </a>
    </div>
  `).join('');
}

// ==========================================
// 13. TOPIC DOSSIER MODAL (ALL 8 SECTIONS + CLASSMATE PITCH)
// ==========================================
function openTopicModalById(topicId) {
  const topicIndex = TOPICS_DATA.findIndex(t => t.id === topicId);
  if (topicIndex === -1) return;
  openTopicModal(topicIndex);
}

function openTopicModal(index) {
  State.activeModalTopicIndex = index;
  const topic = TOPICS_DATA[index];
  const modal = document.getElementById('topic-modal');
  if (!modal) return;

  // Header
  document.getElementById('modal-icon').textContent = topic.icon;
  document.getElementById('modal-number').textContent = `${topic.number} · ${topic.categoryLabel.toUpperCase()}`;
  document.getElementById('modal-title').textContent = topic.title;
  document.getElementById('modal-tagline').textContent = topic.tagline;
  document.getElementById('modal-footer-counter').textContent = `Topic ${index + 1} of 15`;

  // Pane A: What Is It? (+ Prominent Classmate Explainer!)
  document.getElementById('pane-what').innerHTML = `
    <!-- CLASSMATE EXPLAINER CALLOUT -->
    <div class="classmate-explainer-card">
      <div class="classmate-header-badge">
        <i class="fas fa-user-graduate"></i> HOW TO EXPLAIN TO YOUR CLASSMATE IN 30 SECONDS
      </div>
      <p class="classmate-speech-text">
        "${topic.classmatePitch}"
      </p>
    </div>

    <div class="dossier-lead">
      <strong>Simple Definition:</strong> ${topic.what.definition}
    </div>
    <div class="dossier-callout">
      <strong>Main Purpose:</strong> ${topic.what.purpose}
    </div>
    <div class="dossier-callout" style="border-left-color: var(--neon-purple);">
      <strong>What Makes It Different:</strong> ${topic.what.differentiation}
    </div>
  `;

  // Pane B: History & Origin
  document.getElementById('pane-origin').innerHTML = `
    <div class="dossier-lead">
      <strong>Where & When It Began:</strong> ${topic.history.originYear}
    </div>
    <div class="dossier-callout">
      <strong>Who Invented / Introduced It:</strong> ${topic.history.pioneers}
    </div>
    <p style="color: var(--text-secondary); line-height: 1.75; font-size: 0.98rem;">
      ${topic.history.narrative}
    </p>
  `;

  // Pane C: How It Works (Diagram & Flow)
  document.getElementById('pane-how').innerHTML = `
    <p class="dossier-lead">${topic.how.intro}</p>
    <div class="flowchart-container">
      ${topic.how.steps.map((st, i) => `
        <div class="flow-step-node">
          <div class="flow-step-icon">${st.icon}</div>
          <div class="flow-step-title">${st.label}</div>
          <div class="flow-step-desc">${st.desc}</div>
        </div>
        ${i < topic.how.steps.length - 1 ? `<div class="flow-arrow"><i class="fas fa-chevron-right"></i></div>` : ''}
      `).join('')}
    </div>
    <div class="dossier-callout" style="border-left-color: var(--neon-green);">
      <strong>Everyday Comparison:</strong> ${topic.how.analogy}
    </div>
  `;

  // Pane D: Advantages (At least 4)
  document.getElementById('pane-pros').innerHTML = `
    <p class="dossier-lead">How ${topic.title} helps students, schools, and ordinary people:</p>
    <div class="pros-cons-grid">
      ${topic.advantages.map(adv => `
        <div class="pro-item">
          <i class="fas fa-check-circle pro-icon"></i>
          <div>
            <strong>${adv.title}</strong>
            <p>${adv.desc}</p>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  // Pane E: Disadvantages & Risks (At least 4)
  document.getElementById('pane-cons').innerHTML = `
    <p class="dossier-lead">Challenges, costs, security risks, and limitations to watch out for:</p>
    <div class="pros-cons-grid">
      ${topic.disadvantages.map(dis => `
        <div class="con-item">
          <i class="fas fa-exclamation-triangle con-icon"></i>
          <div>
            <strong>${dis.title}</strong>
            <p>${dis.desc}</p>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  // Pane F: Real-Life Scenarios (3 Relatable Student / Everyday Stories)
  document.getElementById('pane-scenarios').innerHTML = `
    <p class="dossier-lead">Simple, relatable stories showing how people experience this technology in everyday school and family life:</p>
    <div class="scenarios-container">
      ${topic.scenarios.map(sc => `
        <div class="scenario-card-item">
          <div class="scenario-title-row">
            <span class="scenario-badge-icon">${sc.icon}</span>
            <h4 class="scenario-heading">${sc.title}</h4>
          </div>
          <p class="scenario-narrative">"${sc.story}"</p>
        </div>
      `).join('')}
    </div>
  `;

  // Pane G: Why It Matters
  document.getElementById('pane-importance').innerHTML = `
    <div class="dossier-lead" style="font-size: 1.15rem; line-height: 1.8;">
      ${topic.importance}
    </div>
    <div class="dossier-callout" style="margin-top: 24px; border-left-color: var(--neon-cyan);">
      <strong>Student Career Tip:</strong> Mentioning this technology and understanding its practical purpose makes your class presentation stand out and gives you a strong talking point in college project interviews!
    </div>
  `;

  // Pane H: Key Takeaway
  document.getElementById('pane-takeaway').innerHTML = `
    <div class="takeaway-hero-box">
      <div class="takeaway-icon-big"><i class="fas fa-lightbulb"></i></div>
      <h3 style="font-size: 1.1rem; color: var(--neon-cyan); margin-bottom: 10px; text-transform: uppercase; letter-spacing: 0.08em;">What to Remember</h3>
      <div class="takeaway-text-body">"${topic.takeaway}"</div>
    </div>
  `;

  // Reset tab to first pane
  switchModalPane('pane-what');

  // Open modal
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeTopicModal() {
  const modal = document.getElementById('topic-modal');
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function switchModalPane(paneId) {
  playSound('click');
  document.querySelectorAll('.dossier-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.pane === paneId);
  });
  document.querySelectorAll('.dossier-pane').forEach(pane => {
    pane.classList.toggle('active', pane.id === paneId);
  });
  const body = document.getElementById('modal-body-container');
  if (body) body.scrollTop = 0;
}

function navigateModalTopic(direction) {
  playSound('blip');
  let newIndex = State.activeModalTopicIndex + direction;
  if (newIndex < 0) newIndex = TOPICS_DATA.length - 1;
  if (newIndex >= TOPICS_DATA.length) newIndex = 0;
  openTopicModal(newIndex);
}

// ==========================================
// 14. INTERACTIVE 15-QUESTION QUIZ ENGINE
// ==========================================
function initQuiz() {
  State.quizIndex = 0;
  State.quizScore = 0;
  State.userQuizAnswers = Array(QUIZ_QUESTIONS.length).fill(null);
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const container = document.getElementById('quiz-question-container');
  const counterEl = document.getElementById('quiz-question-counter');
  const scoreLiveEl = document.getElementById('quiz-score-live');
  const progressBar = document.getElementById('quiz-progress-bar');
  const prevBtn = document.getElementById('quiz-prev-btn');
  const nextBtn = document.getElementById('quiz-next-btn');
  const finishBtn = document.getElementById('quiz-finish-btn');
  const restartBtn = document.getElementById('quiz-restart-btn');
  const resultView = document.getElementById('quiz-result-view');

  if (!container) return;

  resultView.style.display = 'none';
  container.style.display = 'block';
  restartBtn.style.display = 'none';

  const q = QUIZ_QUESTIONS[State.quizIndex];
  const total = QUIZ_QUESTIONS.length;
  const currentAnswer = State.userQuizAnswers[State.quizIndex];

  // Update HUD
  counterEl.textContent = `Question ${State.quizIndex + 1} of ${total}`;
  scoreLiveEl.textContent = `Current Score: ${State.quizScore} / ${total}`;
  const pct = (((State.quizIndex + 1) / total) * 100).toFixed(1);
  progressBar.style.width = `${pct}%`;

  // Buttons
  prevBtn.disabled = State.quizIndex === 0;

  if (currentAnswer !== null) {
    if (State.quizIndex === total - 1) {
      nextBtn.style.display = 'none';
      finishBtn.style.display = 'inline-flex';
    } else {
      nextBtn.style.display = 'inline-flex';
      finishBtn.style.display = 'none';
    }
  } else {
    nextBtn.style.display = 'none';
    finishBtn.style.display = 'none';
  }

  // Render Question and options
  const optionLetters = ['A', 'B', 'C', 'D'];
  container.innerHTML = `
    <div class="quiz-q-meta">${q.topicName.toUpperCase()} · QUESTION ${State.quizIndex + 1}</div>
    <h3 class="quiz-q-title">${q.question}</h3>
    <div class="quiz-options-list">
      ${q.options.map((opt, i) => {
        let stateClass = '';
        if (currentAnswer !== null) {
          stateClass = 'locked';
          if (i === q.correctIndex) {
            stateClass += ' selected-correct';
          } else if (i === currentAnswer) {
            stateClass += ' selected-wrong';
          }
        }
        return `
          <button class="quiz-option-item ${stateClass}" data-option-index="${i}" ${currentAnswer !== null ? 'disabled' : ''}>
            <span class="option-badge">${optionLetters[i]}</span>
            <span>${escapeHTML(opt)}</span>
          </button>
        `;
      }).join('')}
    </div>

    ${currentAnswer !== null ? `
      <div class="quiz-explanation-box">
        <strong>${currentAnswer === q.correctIndex ? '<i class="fas fa-check-circle" style="color: var(--neon-green)"></i> That\'s right!' : '<i class="fas fa-times-circle" style="color: var(--neon-rose)"></i> Not quite.'}</strong>
        ${q.explanation}
      </div>
    ` : ''}
  `;

  // Option Click Handlers
  container.querySelectorAll('.quiz-option-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedIndex = parseInt(btn.dataset.optionIndex, 10);
      handleQuizAnswer(selectedIndex);
    });
  });
}

function handleQuizAnswer(selectedIndex) {
  if (State.userQuizAnswers[State.quizIndex] !== null) return;

  State.userQuizAnswers[State.quizIndex] = selectedIndex;
  const q = QUIZ_QUESTIONS[State.quizIndex];

  if (selectedIndex === q.correctIndex) {
    State.quizScore++;
    playSound('correct');
  } else {
    playSound('wrong');
  }

  renderQuizQuestion();
}

function finishQuiz() {
  playSound('fanfare');
  triggerConfetti();

  const container = document.getElementById('quiz-question-container');
  const resultView = document.getElementById('quiz-result-view');
  const prevBtn = document.getElementById('quiz-prev-btn');
  const nextBtn = document.getElementById('quiz-next-btn');
  const finishBtn = document.getElementById('quiz-finish-btn');
  const restartBtn = document.getElementById('quiz-restart-btn');
  const counterEl = document.getElementById('quiz-question-counter');
  const progressBar = document.getElementById('quiz-progress-bar');

  container.style.display = 'none';
  prevBtn.style.display = 'none';
  nextBtn.style.display = 'none';
  finishBtn.style.display = 'none';
  restartBtn.style.display = 'inline-flex';

  counterEl.textContent = "Quiz Completed";
  progressBar.style.width = '100%';

  const total = QUIZ_QUESTIONS.length;
  const score = State.quizScore;
  const pct = Math.round((score / total) * 100);

  let feedback = "";
  let icon = "🏆";
  if (pct >= 90) {
    feedback = "Fantastic job! You completely mastered Chapter 10's emerging technologies! You're ready to deliver an incredible presentation to your classmates and teacher!";
    icon = "🌟";
  } else if (pct >= 70) {
    feedback = "Great work! You have a solid grasp of how emerging tech works and how it helps students in real life. Review a couple of topics to get 100%!";
    icon = "🎉";
  } else {
    feedback = "Good try! Take a look at the 'Classmate Explainer' cards in each topic to refresh your memory, then give the quiz another shot!";
    icon = "💡";
  }

  resultView.style.display = 'block';
  resultView.innerHTML = `
    <div class="score-trophy">${icon}</div>
    <h3 class="score-headline">Quiz Finished!</h3>
    <div class="score-badge-circle">
      <span class="score-digit">${score}</span>
      <span class="score-out-of">out of ${total} (${pct}%)</span>
    </div>
    <p class="score-feedback-text">${feedback}</p>
    <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
      <a href="#topics" class="btn btn-secondary"><i class="fas fa-book-open"></i> Review All Topics</a>
      <button id="retake-quiz-trigger" class="btn btn-primary"><i class="fas fa-redo"></i> Retake Quiz</button>
    </div>
  `;

  document.getElementById('retake-quiz-trigger').addEventListener('click', () => {
    playSound('click');
    initQuiz();
    prevBtn.style.display = 'inline-flex';
  });
}

// ==========================================
// 15. EVENT LISTENERS SETUP
// ==========================================
function setupEventListeners() {
  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileClose = document.getElementById('mobile-close');
  const mobileDrawer = document.getElementById('mobile-menu');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      playSound('click');
      mobileDrawer.classList.add('open');
    });
  }
  if (mobileClose && mobileDrawer) {
    mobileClose.addEventListener('click', () => {
      playSound('click');
      mobileDrawer.classList.remove('open');
    });
  }

  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      playSound('click');
      if (mobileDrawer) mobileDrawer.classList.remove('open');
    });
  });

  const searchInput = document.getElementById('topic-search');
  const clearBtn = document.getElementById('search-clear');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      State.searchQuery = e.target.value;
      if (clearBtn) clearBtn.style.display = State.searchQuery ? 'block' : 'none';
      renderTopicsGrid();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      playSound('click');
      if (searchInput) searchInput.value = '';
      State.searchQuery = '';
      clearBtn.style.display = 'none';
      renderTopicsGrid();
    });
  }

  document.querySelectorAll('.filter-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      playSound('click');
      document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      State.currentFilter = pill.dataset.category;
      renderTopicsGrid();
    });
  });

  const randomBtn = document.getElementById('random-topic-btn');
  if (randomBtn) {
    randomBtn.addEventListener('click', () => {
      playSound('blip');
      const randomIndex = Math.floor(Math.random() * TOPICS_DATA.length);
      openTopicModal(randomIndex);
    });
  }

  const modalCloseBtn = document.getElementById('modal-close-btn');
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', () => {
    playSound('click');
    closeTopicModal();
  });

  const modalPrevTopic = document.getElementById('modal-prev-topic');
  if (modalPrevTopic) modalPrevTopic.addEventListener('click', () => navigateModalTopic(-1));

  const modalNextTopic = document.getElementById('modal-next-topic');
  if (modalNextTopic) modalNextTopic.addEventListener('click', () => navigateModalTopic(1));

  document.querySelectorAll('.dossier-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      switchModalPane(tab.dataset.pane);
    });
  });

  const modal = document.getElementById('topic-modal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        playSound('click');
        closeTopicModal();
      }
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('open')) {
      playSound('click');
      closeTopicModal();
    }
  });

  const quizPrevBtn = document.getElementById('quiz-prev-btn');
  const quizNextBtn = document.getElementById('quiz-next-btn');
  const quizFinishBtn = document.getElementById('quiz-finish-btn');
  const quizRestartBtn = document.getElementById('quiz-restart-btn');

  if (quizPrevBtn) {
    quizPrevBtn.addEventListener('click', () => {
      playSound('click');
      if (State.quizIndex > 0) {
        State.quizIndex--;
        renderQuizQuestion();
      }
    });
  }

  if (quizNextBtn) {
    quizNextBtn.addEventListener('click', () => {
      playSound('click');
      if (State.quizIndex < QUIZ_QUESTIONS.length - 1) {
        State.quizIndex++;
        renderQuizQuestion();
      }
    });
  }

  if (quizFinishBtn) {
    quizFinishBtn.addEventListener('click', finishQuiz);
  }

  if (quizRestartBtn) {
    quizRestartBtn.addEventListener('click', () => {
      playSound('click');
      initQuiz();
    });
  }

  const bttBtn = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    if (!bttBtn) return;
    if (window.scrollY > 400) {
      bttBtn.classList.add('visible');
    } else {
      bttBtn.classList.remove('visible');
    }
  });

  if (bttBtn) {
    bttBtn.addEventListener('click', () => {
      playSound('click');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// Utility function to escape HTML special characters
function escapeHTML(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
