import React, { useState } from 'react';
import { X, Sparkles } from "lucide-react"; // or whatever icons you have

// 1. PLACE THE INTERFACE HERE (Outside the component)
interface Experiment {
  name: string;
  required: string[];
  optional: string[];
  youtubeSearch: string;
  steps: string[];
}

export default function App() {
  // 2. UPDATE YOUR STATES HERE (Inside the component)
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [matches, setMatches] = useState<Experiment[]>([]);

  // ... rest of your code
import { X, Sparkles } from 'lucide-react';

// Raisin SVG component
const RaisinIcon = () => (
  <svg viewBox="0 0 100 100" className="w-12 h-12 mx-auto">
    <path d="M 50 10 Q 70 15 80 30 Q 85 45 82 60 Q 78 75 65 85 Q 50 92 35 85 Q 22 75 18 60 Q 15 45 20 30 Q 30 15 50 10 Z" 
          fill="#A0624F" stroke="#5C3A2E" strokeWidth="3"/>
    <path d="M 30 25 Q 45 28 60 25" stroke="#5C3A2E" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <path d="M 35 40 Q 50 38 70 42" stroke="#5C3A2E" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <path d="M 28 55 Q 50 52 72 58" stroke="#5C3A2E" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <path d="M 35 70 Q 50 68 65 72" stroke="#5C3A2E" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <path d="M 40 35 Q 42 45 38 55" stroke="#5C3A2E" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <path d="M 60 38 Q 58 50 62 62" stroke="#5C3A2E" strokeWidth="2" fill="none" strokeLinecap="round"/>
  </svg>
);

// Vegetable Oil SVG component
const VegetableOilIcon = () => (
  <svg viewBox="0 0 100 100" className="w-12 h-12 mx-auto">
    {/* Bottle outline */}
    <path d="M 35 15 L 35 20 L 30 25 L 30 90 Q 30 95 35 95 L 65 95 Q 70 95 70 90 L 70 25 L 65 20 L 65 15 Z" 
          fill="#FFD700" stroke="#5C3A2E" strokeWidth="3" strokeLinejoin="round"/>
    
    {/* Cap */}
    <rect x="40" y="10" width="20" height="8" rx="2" fill="#FF6B9D" stroke="#5C3A2E" strokeWidth="3"/>
    <rect x="42" y="18" width="16" height="4" fill="#7DD3C0" stroke="#5C3A2E" strokeWidth="2"/>
    
    {/* Label area */}
    <rect x="35" y="50" width="30" height="25" fill="#FF6B9D" stroke="#5C3A2E" strokeWidth="2.5"/>
    
    {/* Oil drop icon */}
    <path d="M 50 58 Q 47 62 47 66 Q 47 70 50 70 Q 53 70 53 66 Q 53 62 50 58 Z" 
          fill="#FFD700" stroke="#5C3A2E" strokeWidth="2"/>
    
    {/* Ridges */}
    <ellipse cx="50" cy="38" rx="18" ry="3" fill="none" stroke="#5C3A2E" strokeWidth="2.5"/>
    <ellipse cx="50" cy="43" rx="18" ry="3" fill="none" stroke="#5C3A2E" strokeWidth="2.5"/>
    <ellipse cx="50" cy="78" rx="18" ry="3" fill="none" stroke="#5C3A2E" strokeWidth="2.5"/>
    <ellipse cx="50" cy="83" rx="18" ry="3" fill="none" stroke="#5C3A2E" strokeWidth="2.5"/>
    
    {/* Shine effect */}
    <ellipse cx="58" cy="60" rx="3" ry="6" fill="#FFB6C1" opacity="0.6"/>
  </svg>
);

// Experiment Database
const EXPERIMENTS = [
  {
    name: "Erupting Volcano",
    required: ["Vinegar", "Baking Soda"],
    optional: ["Food Coloring", "Dish Soap"],
    youtubeSearch: "erupting volcano experiment for kids",
    steps: [
      "Build a volcano shape around a bottle using clay or playdough",
      "Fill the bottle 1/3 with vinegar and add food coloring",
      "Add 2 tablespoons of baking soda and watch it erupt!",
      "Add dish soap for extra foam and bubbles"
    ]
  },
  {
    name: "Magic Swirling Milk",
    required: ["Milk", "Dish Soap", "Food Coloring"],
    optional: [],
    youtubeSearch: "magic milk experiment for kids",
    steps: [
      "Pour milk into a shallow dish until it covers the bottom",
      "Add drops of food coloring around the milk",
      "Dip a cotton swab in dish soap and touch the milk",
      "Watch the colors dance and swirl like magic!"
    ]
  },
  {
    name: "Magic Oobleck Slime",
    required: ["Cornstarch", "Water"],
    optional: ["Food Coloring"],
    youtubeSearch: "oobleck experiment for kids",
    steps: [
      "Mix 2 cups cornstarch with 1 cup water in a bowl",
      "Add food coloring if desired and stir slowly",
      "Try punching it (solid!) then letting it drip (liquid!)",
      "Discover this amazing non-Newtonian fluid"
    ]
  },
  {
    name: "Lava Lamp in a Glass",
    required: ["Vegetable Oil", "Water", "Alka-Seltzer"],
    optional: ["Food Coloring"],
    youtubeSearch: "lava lamp experiment for kids",
    steps: [
      "Fill a clear bottle 3/4 with vegetable oil",
      "Add water until almost full, then add food coloring",
      "Break an Alka-Seltzer tablet into pieces",
      "Drop pieces in and watch the lava lamp come to life!"
    ]
  },
  {
    name: "The Bouncy Naked Egg",
    required: ["Vinegar", "Eggs"],
    optional: [],
    youtubeSearch: "bouncy egg experiment for kids",
    steps: [
      "Place a raw egg in a jar and cover with vinegar",
      "Wait 24-48 hours and watch the shell dissolve",
      "Carefully remove the egg and rinse it gently",
      "Try bouncing it from a few inches high (careful!)"
    ]
  },
  {
    name: "Rain Cloud in a Jar",
    required: ["Shaving Cream", "Water", "Food Coloring"],
    optional: [],
    youtubeSearch: "rain cloud jar experiment for kids",
    steps: [
      "Fill a clear jar 3/4 full with water",
      "Spray shaving cream on top to make a 'cloud'",
      "Add drops of food coloring on top of the cloud",
      "Watch the 'rain' fall through the cloud into the water!"
    ]
  },
  {
    name: "Floating Egg Mystery",
    required: ["Water", "Salt", "Eggs"],
    optional: [],
    youtubeSearch: "floating egg salt water experiment for kids",
    steps: [
      "Fill a glass with water and gently place an egg in it (it sinks)",
      "Remove egg and stir in salt, one spoonful at a time",
      "Keep adding salt until the egg floats!",
      "Learn about density and buoyancy"
    ]
  },
  {
    name: "Secret Invisible Ink",
    required: ["Lemon Juice", "Water"],
    optional: [],
    youtubeSearch: "invisible ink lemon juice experiment for kids",
    steps: [
      "Mix equal parts lemon juice and water",
      "Dip a cotton swab or paintbrush and write a secret message",
      "Let the paper dry completely (message disappears!)",
      "Hold paper near a light bulb or iron to reveal the message"
    ]
  },
  {
    name: "Fireworks in a Jar",
    required: ["Vegetable Oil", "Water", "Food Coloring"],
    optional: [],
    youtubeSearch: "fireworks in a jar experiment for kids",
    steps: [
      "Fill a jar with warm water",
      "In a bowl, mix 2 tablespoons oil with 4 drops of food coloring",
      "Pour the oil mixture into the water jar",
      "Watch the colors explode like fireworks as oil breaks apart!"
    ]
  },
  {
    name: "Dancing Raisins",
    required: ["Baking Soda", "Vinegar", "Water", "Raisins"],
    optional: [],
    youtubeSearch: "dancing raisins experiment for kids",
    steps: [
      "Fill a clear glass with water and add 2 tablespoons vinegar",
      "Stir in 1 tablespoon of baking soda",
      "Drop in 5-6 raisins and watch them dance up and down!",
      "The CO2 bubbles carry raisins up, then they sink when bubbles pop"
    ]
  }
];

// Available items with icons
const ITEMS = [
  { name: "Vinegar", icon: "🧴" },
  { name: "Baking Soda", icon: "📦" },
  { name: "Vegetable Oil", icon: "", useCustomIcon: "oil" },
  { name: "Milk", icon: "🥛" },
  { name: "Dish Soap", icon: "🧼" },
  { name: "Water", icon: "💧" },
  { name: "Lemon Juice", icon: "🍋" },
  { name: "Cornstarch", icon: "🌽" },
  { name: "Salt", icon: "🧂" },
  { name: "Food Coloring", icon: "🎨" },
  { name: "Eggs", icon: "🥚" },
  { name: "Shaving Cream", icon: "💈" },
  { name: "Alka-Seltzer", icon: "💊" },
  { name: "Raisins", icon: "", useCustomIcon: "raisins" }
];

function App() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [matches, setMatches] = useState([]);
  const [currentMatches, setCurrentMatches] = useState([]);

  // Calculate matches in real-time
  React.useEffect(() => {
    const matched = EXPERIMENTS.filter(exp => {
      return exp.required.every(req => selectedItems.includes(req));
    });
    setCurrentMatches(matched);
  }, [selectedItems]);

  const toggleItem = (itemName) => {
    if (selectedItems.includes(itemName)) {
      setSelectedItems(selectedItems.filter(i => i !== itemName));
    } else {
      setSelectedItems([...selectedItems, itemName]);
    }
  };

  const removeItem = (itemName) => {
    setSelectedItems(selectedItems.filter(i => i !== itemName));
  };

  const sparkMyLab = () => {
    setMatches(currentMatches);
    setShowResults(true);
  };

  const reset = () => {
    setShowResults(false);
    setMatches([]);
  };

  const getYouTubeSearchLink = (searchQuery) => {
    const encoded = encodeURIComponent(searchQuery);
    return `https://www.youtube.com/results?search_query=${encoded}`;
  };

  const encouragingMessages = [
    "Great choice!",
    "Nice pick!",
    "Looking good!",
    "Excellent selection!",
    "You're on a roll!"
  ];

  const getRandomEncouragement = () => {
    return encouragingMessages[Math.floor(Math.random() * encouragingMessages.length)];
  };

  if (showResults) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: '#A1C9F2', fontFamily: 'Inter, Helvetica, sans-serif' }}>
        <div className="max-w-4xl mx-auto p-4 pb-24">
          {/* Header */}
          <div className="text-center py-8">
            <h1 className="text-5xl font-black mb-2" style={{ color: '#2D5D7B' }}>
              Pantry Spark
            </h1>
            <p className="text-xl font-bold" style={{ color: '#2D5D7B' }}>
              {matches.length} {matches.length === 1 ? 'Experiment' : 'Experiments'} Ready to Explore!
            </p>
          </div>

          {/* Results */}
          {matches.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center shadow-lg mb-6">
              <div className="text-8xl mb-4">🔬</div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#2D5D7B' }}>
                No experiments found
              </h2>
              <p className="text-xl mb-6" style={{ color: '#2D5D7B' }}>
                Try selecting different items!
              </p>
              <button
                onClick={reset}
                className="px-8 py-4 rounded-xl font-bold text-xl shadow-lg hover:shadow-xl transition hover:scale-105"
                style={{ backgroundColor: '#FFDA29', color: '#2D5D7B' }}
              >
                ← Pick Again
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-6 mb-8">
                {matches.map((exp, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-8 shadow-xl">
                    <h2 className="text-4xl font-black mb-6" style={{ color: '#2D5D7B' }}>
                      {exp.name}
                    </h2>

                    {/* What You'll Need */}
                    <div className="mb-6" style={{ borderLeft: '4px solid #BD93D8', paddingLeft: '1rem' }}>
                      <h3 className="text-2xl font-bold mb-3" style={{ color: '#2D5D7B' }}>
                        What You'll Need:
                      </h3>
                      <ul className="space-y-2">
                        {exp.required.map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-lg">
                            <span style={{ color: '#FFDA29' }}>●</span>
                            <span className="font-medium">{item}</span>
                          </li>
                        ))}
                        {exp.optional.map((item, i) => (
                          <li key={`opt-${i}`} className="flex items-center gap-2 text-lg">
                            <span style={{ color: '#BD93D8' }}>○</span>
                            <span className="font-medium">{item} (optional)</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* How to Spark It */}
                    <div className="mb-6" style={{ borderLeft: '4px solid #FFDA29', paddingLeft: '1rem' }}>
                      <h3 className="text-2xl font-bold mb-3" style={{ color: '#2D5D7B' }}>
                        How to Spark It:
                      </h3>
                      <ol className="space-y-3">
                        {exp.steps.map((step, i) => (
                          <li key={i} className="flex gap-4">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-white text-lg" style={{ backgroundColor: '#2D5D7B' }}>
                              {i + 1}
                            </span>
                            <span className="text-lg pt-1">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    {/* Video Link */}
                    <div className="pb-8">
                      <h3 className="text-2xl font-bold mb-3" style={{ color: '#2D5D7B' }}>
                        Watch & Learn:
                      </h3>
                      <a
                        href={getYouTubeSearchLink(exp.youtubeSearch)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center px-6 py-4 rounded-xl font-bold text-xl shadow-lg hover:shadow-xl transition hover:scale-105"
                        style={{ backgroundColor: '#2D5D7B', color: 'white' }}
                      >
                        🎥 Find Videos on YouTube
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <button
                  onClick={reset}
                  className="px-10 py-5 rounded-xl font-bold text-2xl shadow-xl hover:shadow-2xl transition hover:scale-105"
                  style={{ backgroundColor: '#FFDA29', color: '#2D5D7B' }}
                >
                  ← Try Another Experiment
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-32" style={{ backgroundColor: '#A1C9F2', fontFamily: 'Inter, Helvetica, sans-serif' }}>
      <div className="max-w-6xl mx-auto p-4">
        {/* Header */}
        <div className="text-center py-8">
          <h1 className="text-6xl md:text-7xl font-black mb-3" style={{ color: '#2D5D7B' }}>
            Pantry Spark
          </h1>
          <p className="text-2xl font-bold" style={{ color: '#2D5D7B' }}>
            Pick what you have. Discover science!
          </p>
        </div>

        {/* Item Grid */}
        <div className="bg-white rounded-2xl p-6 shadow-xl mb-6">
          <h2 className="text-2xl font-bold mb-6 uppercase tracking-wide" style={{ color: '#2D5D7B' }}>
            What's in Your Pantry?
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-7 gap-4">
            {ITEMS.map(item => {
              const isSelected = selectedItems.includes(item.name);

              return (
                <button
                  key={item.name}
                  onClick={() => toggleItem(item.name)}
                  className="p-4 rounded-xl font-bold text-center transition shadow-md hover:shadow-lg hover:scale-105 relative"
                  style={{
                    backgroundColor: isSelected ? '#2D5D7B' : 'white',
                    color: isSelected ? 'white' : '#2D5D7B',
                    border: `3px solid ${isSelected ? '#2D5D7B' : '#A1C9F2'}`
                  }}
                >
                  {isSelected && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center animate-bounce" style={{ backgroundColor: '#FFDA29' }}>
                      <Sparkles size={14} style={{ color: '#2D5D7B' }} />
                    </div>
                  )}
                  {item.useCustomIcon === "raisins" ? (
                    <div className="mb-2">
                      <RaisinIcon />
                    </div>
                  ) : item.useCustomIcon === "oil" ? (
                    <div className="mb-2">
                      <VegetableOilIcon />
                    </div>
                  ) : (
                    <div className="text-4xl mb-2">{item.icon}</div>
                  )}
                  <div className="text-xs leading-tight uppercase font-black tracking-wide">{item.name}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Encouragement */}
        {selectedItems.length > 0 && selectedItems.length < 2 && (
          <div className="text-center mb-6">
            <p className="text-xl font-bold animate-pulse" style={{ color: '#2D5D7B' }}>
              {getRandomEncouragement()} Pick one more item to continue!
            </p>
          </div>
        )}

        {currentMatches.length > 0 && (
          <div className="text-center mb-6">
            <p className="text-2xl font-black" style={{ color: '#2D5D7B' }}>
              ✨ {currentMatches.length} {currentMatches.length === 1 ? 'experiment' : 'experiments'} ready to explore!
            </p>
          </div>
        )}
      </div>

      {/* Fixed Lab Bench */}
      <div className="fixed bottom-0 left-0 right-0 z-10 shadow-2xl" style={{ backgroundColor: 'white', borderTop: '4px solid #BD93D8' }}>
        <div className="max-w-6xl mx-auto p-6">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex-1 min-w-0">
              <h2 className="text-xl md:text-2xl font-black uppercase tracking-wide mb-2" style={{ color: '#2D5D7B' }}>
                Your Lab Bench
              </h2>
              {selectedItems.length === 0 ? (
                <p className="text-lg" style={{ color: '#BD93D8' }}>
                  Select 2-6 items to get started
                </p>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {selectedItems.map(item => (
                    <div
                      key={item}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg font-bold shadow-md animate-[slideIn_0.3s_ease-out]"
                      style={{ backgroundColor: '#BD93D8', color: 'white' }}
                    >
                      <span>{ITEMS.find(i => i.name === item)?.icon}</span>
                      <span className="text-sm uppercase">{item}</span>
                      <button
                        onClick={() => removeItem(item)}
                        className="ml-1 hover:scale-110 transition"
                      >
                        <X size={18} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <button
              onClick={sparkMyLab}
              disabled={selectedItems.length < 2 || currentMatches.length === 0}
              className={`px-8 py-4 rounded-xl font-black text-xl shadow-lg transition uppercase tracking-wide ${
                selectedItems.length >= 2 && currentMatches.length > 0
                  ? 'hover:shadow-xl hover:scale-105'
                  : 'opacity-50 cursor-not-allowed'
              }`}
              style={{
                backgroundColor: selectedItems.length >= 2 && currentMatches.length > 0 ? '#FFDA29' : '#E5E5E5',
                color: '#2D5D7B'
              }}
            >
              <Sparkles className="inline mr-2" size={24} />
              Spark My Lab!
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

  export default App