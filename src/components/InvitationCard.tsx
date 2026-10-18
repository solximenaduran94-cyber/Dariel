import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Volume2, 
  VolumeX, 
  Gift, 
  Check, 
  Users, 
  Send,
  Heart,
  Maximize2,
  X
} from 'lucide-react';
import { CountdownTime } from '../types';
import mashaTheme from '../assets/audio/masha_theme.mp3';

// Importing generated images
import bearBlueBow from '../assets/images/bear_blue_bow.png';
import whatsappWinnie from '../assets/images/whatsapp_winnie.jpeg';
import smallBear from '../assets/images/small_bear.jpg';
import babyDariel from '../assets/images/baby_dariel.jpg';
import babyGallery1 from '../assets/images/baby_gallery_1.jpg';
import babyGallery2 from '../assets/images/baby_gallery_2.jpg';
import babyGallery3 from '../assets/images/baby_gallery_3.jpg';
import babyGallery4 from '../assets/images/baby_gallery_4.jpg';
import bearBalloonBlue from '../assets/images/bear_balloon_blue_new.jpg';

// Elegant SVG drawings to match the Winnie the Pooh and friends theme in screenshots
function EeyoreSVG() {
  return (
    <svg className="w-10 h-10 drop-shadow-sm opacity-90" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 82 C38 82, 32 70, 32 58 C32 44, 40 30, 50 30 C60 30, 68 44, 68 58 C68 70, 62 82, 50 82 Z" fill="#7ba6cb" />
      <path d="M50 82 C44 82, 40 76, 40 68 C40 60, 44 54, 50 54 C56 54, 60 60, 60 68 C60 76, 56 82, 50 82 Z" fill="#eddcd2" /> {/* Snout */}
      <circle cx="43" cy="50" r="3.5" fill="#333333" /> {/* Left Eye */}
      <circle cx="57" cy="50" r="3.5" fill="#333333" /> {/* Right Eye */}
      <path d="M47 70 Q50 74 53 70" stroke="#333" strokeWidth="2" strokeLinecap="round" fill="none" /> {/* Smile */}
      {/* Ears dropping down */}
      <path d="M34 35 C24 45, 20 60, 24 72 C25 75, 29 74, 30 70 C31 65, 34 50, 37 38" fill="#f4b5b5" stroke="#7ba6cb" strokeWidth="1.5" />
      <path d="M66 35 C76 45, 80 60, 76 72 C75 75, 71 74, 70 70 C69 65, 66 50, 63 38" fill="#f4b5b5" stroke="#7ba6cb" strokeWidth="1.5" />
      {/* Hair tuft */}
      <path d="M48 28 Q50 18 52 28 M46 29 Q50 16 54 29" stroke="#333333" strokeWidth="3" strokeLinecap="round" />
      {/* Cute yellow bird friend on head */}
      <path d="M49 14 Q53 8 51 4 Q49 8 45 10" fill="#f4be37" />
    </svg>
  );
}

function PoohTiggerSVG() {
  return (
    <svg className="w-14 h-14 drop-shadow-sm" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Cozy soft cream heart background */}
      <path d="M50 82 C15 52, 20 22, 50 42 C80 22, 85 52, 50 82 Z" fill="#fee2e2" opacity="0.9" />
      {/* Winnie the Pooh on the Left */}
      <circle cx="38" cy="46" r="14" fill="#f4be37" />
      <circle cx="28" cy="34" r="5" fill="#f4be37" /> {/* Left Ear */}
      <circle cx="44" cy="44" r="7.5" fill="#f4be37" /> {/* Snout */}
      <circle cx="34" cy="43" r="1.8" fill="#333333" /> {/* Eye */}
      <path d="M43 45 Q45 48 47 45" stroke="#333" strokeWidth="1.5" strokeLinecap="round" fill="none" /> {/* Smile */}
      <path d="M26 53 C26 50, 36 50, 38 56" stroke="#e57c58" strokeWidth="4.5" strokeLinecap="round" /> {/* Red shirt shoulder */}

      {/* Tigger on the Right */}
      <circle cx="62" cy="52" r="13" fill="#e57c58" />
      <circle cx="70" cy="40" r="4" fill="#e57c58" /> {/* Right Ear */}
      <path d="M56 50 C51 52, 51 58, 57 58 C63 58, 63 52, 59 50" fill="#fef2e7" /> {/* Snout */}
      <circle cx="58" cy="46" r="1.8" fill="#333333" /> {/* Eye */}
      {/* Tiger Stripes */}
      <path d="M68 47 L63 49 M70 51 L65 53" stroke="#333333" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}


function WinniePoohHoneyBeesSVG() {
  return (
    <svg 
      className="w-full h-full drop-shadow-sm select-none" 
      viewBox="0 0 400 400" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 1. SOFT WATERCOLOR GREEN GRASS MOUND */}
      <path 
        d="M 60,340 C 90,325 150,320 200,320 C 250,320 310,325 340,340 C 310,352 250,355 200,355 C 150,355 90,352 60,340 Z" 
        fill="#cde9af" 
        opacity="0.85" 
      />
      <path 
        d="M 80,340 C 120,332 170,330 200,330 C 230,330 280,332 320,340" 
        stroke="#99cd68" 
        strokeWidth="3" 
        strokeLinecap="round" 
        opacity="0.6"
      />
      {/* Small tufts of sketch grass */}
      <path d="M 100,335 L 96,325 M 102,336 L 103,323" stroke="#4a7321" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M 125,338 L 122,328 M 127,338 L 129,326" stroke="#4a7321" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 285,338 L 282,328 M 287,339 L 290,326" stroke="#4a7321" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 310,342 L 306,332 M 312,342 L 314,330" stroke="#4a7321" strokeWidth="1.8" strokeLinecap="round" />

      {/* 2. DASHED BEE FLIGHT TRAILS */}
      {/* Bee 1 (Left): Loops and goes to the left bee */}
      <path 
        d="M 175,210 Q 115,200 80,240 T 55,300 Q 25,230 75,190 T 110,130" 
        stroke="#5c4a37" 
        strokeWidth="1.5" 
        strokeDasharray="4 4" 
        strokeLinecap="round" 
      />
      {/* Bee 2 (Top Right): Loops and goes to top right bee */}
      <path 
        d="M 225,170 Q 275,130 320,160 T 280,80 Q 240,60 215,110 T 260,110" 
        stroke="#5c4a37" 
        strokeWidth="1.5" 
        strokeDasharray="4 4" 
        strokeLinecap="round" 
      />
      {/* Bee 3 (Bottom Right): Loops and goes to bottom right bee */}
      <path 
        d="M 245,280 Q 300,260 340,310 T 310,230 Q 280,180 325,190" 
        stroke="#5c4a37" 
        strokeWidth="1.5" 
        strokeDasharray="4 4" 
        strokeLinecap="round" 
      />

      {/* 3. THREE CUTE BUMBLEBEES WITH WINGS */}
      {/* Bee 1 (Left) */}
      <g transform="translate(110, 130) rotate(-40)">
        <ellipse cx="0" cy="0" rx="9" ry="7" fill="#f5be38" stroke="#3c2f2f" strokeWidth="1.5" />
        <path d="M -3,-6.5 Q -3,0 -3,6.5" stroke="#3c2f2f" strokeWidth="2" strokeLinecap="round" />
        <path d="M 2,-6.5 Q 2,0 2,6.5" stroke="#3c2f2f" strokeWidth="2" strokeLinecap="round" />
        <ellipse cx="-2" cy="-9" rx="4" ry="7" fill="#ffffff" stroke="#3c2f2f" strokeWidth="1" transform="rotate(-15)" opacity="0.9" />
        <ellipse cx="4" cy="-8" rx="3.5" ry="6" fill="#ffffff" stroke="#3c2f2f" strokeWidth="1" transform="rotate(15)" opacity="0.9" />
        <path d="M -9,0 L -12,0" stroke="#3c2f2f" strokeWidth="1.5" strokeLinecap="round" />
      </g>

      {/* Bee 2 (Top Right) */}
      <g transform="translate(260, 110) rotate(15)">
        <ellipse cx="0" cy="0" rx="9" ry="7" fill="#f5be38" stroke="#3c2f2f" strokeWidth="1.5" />
        <path d="M -3,-6.5 Q -3,0 -3,6.5" stroke="#3c2f2f" strokeWidth="2" strokeLinecap="round" />
        <path d="M 2,-6.5 Q 2,0 2,6.5" stroke="#3c2f2f" strokeWidth="2" strokeLinecap="round" />
        <ellipse cx="-2" cy="-9" rx="4" ry="7" fill="#ffffff" stroke="#3c2f2f" strokeWidth="1" transform="rotate(-15)" opacity="0.9" />
        <ellipse cx="4" cy="-8" rx="3.5" ry="6" fill="#ffffff" stroke="#3c2f2f" strokeWidth="1" transform="rotate(15)" opacity="0.9" />
        <path d="M -9,0 L -12,0" stroke="#3c2f2f" strokeWidth="1.5" strokeLinecap="round" />
      </g>

      {/* Bee 3 (Bottom Right) */}
      <g transform="translate(325, 190) rotate(110)">
        <ellipse cx="0" cy="0" rx="9" ry="7" fill="#f5be38" stroke="#3c2f2f" strokeWidth="1.5" />
        <path d="M -3,-6.5 Q -3,0 -3,6.5" stroke="#3c2f2f" strokeWidth="2" strokeLinecap="round" />
        <path d="M 2,-6.5 Q 2,0 2,6.5" stroke="#3c2f2f" strokeWidth="2" strokeLinecap="round" />
        <ellipse cx="-2" cy="-9" rx="4" ry="7" fill="#ffffff" stroke="#3c2f2f" strokeWidth="1" transform="rotate(-15)" opacity="0.9" />
        <ellipse cx="4" cy="-8" rx="3.5" ry="6" fill="#ffffff" stroke="#3c2f2f" strokeWidth="1" transform="rotate(15)" opacity="0.9" />
        <path d="M -9,0 L -12,0" stroke="#3c2f2f" strokeWidth="1.5" strokeLinecap="round" />
      </g>

      {/* 4. WINNIE THE POOH & HONEY POT COMPOSITE */}
      
      {/* LEGS & CHUBBY FEET */}
      <path 
        d="M 160,330 C 130,332 105,320 110,305 C 115,290 140,295 160,312" 
        fill="#f5be38" 
        stroke="#3c2f2f" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
      />
      <ellipse cx="118" cy="312" rx="7" ry="10" fill="#edd6b1" stroke="#3c2f2f" strokeWidth="1.5" transform="rotate(-10 118 312)" />
      
      <path 
        d="M 240,330 C 270,332 295,320 290,305 C 285,290 260,295 240,312" 
        fill="#f5be38" 
        stroke="#3c2f2f" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
      />
      <ellipse cx="282" cy="312" rx="7" ry="10" fill="#edd6b1" stroke="#3c2f2f" strokeWidth="1.5" transform="rotate(10 282 312)" />

      {/* BODY (BEHIND THE POT) */}
      <path 
        d="M 155,275 C 145,285 155,315 170,325 C 185,330 215,330 230,325 C 245,315 255,285 245,275" 
        fill="#f5be38" 
        stroke="#3c2f2f" 
        strokeWidth="2.5" 
      />

      {/* RED SHIRT */}
      <path 
        d="M 148,245 C 132,250 140,285 160,282 C 175,280 225,280 240,282 C 260,285 268,250 252,245 C 242,240 158,240 148,245 Z" 
        fill="#de4a3b" 
        stroke="#3c2f2f" 
        strokeWidth="2.5" 
        strokeLinejoin="round"
      />
      <path 
        d="M 148,245 C 140,250 145,270 155,268" 
        stroke="#3c2f2f" 
        strokeWidth="2.5" 
        fill="#de4a3b" 
        strokeLinecap="round" 
      />
      <path 
        d="M 252,245 C 260,250 255,270 245,268" 
        stroke="#3c2f2f" 
        strokeWidth="2.5" 
        fill="#de4a3b" 
        strokeLinecap="round" 
      />

      {/* HONEY POT */}
      <g id="honey-pot">
        <path 
          d="M 175,265 C 170,280 172,320 185,325 C 195,330 205,330 215,330 C 225,330 230,320 225,265 Z" 
          fill="#eae8e5" 
          stroke="#3c2f2f" 
          strokeWidth="2.5" 
          strokeLinejoin="round"
        />
        <ellipse cx="200" cy="263" rx="25" ry="7" fill="#eae8e5" stroke="#3c2f2f" strokeWidth="2.5" />
        
        <path 
          d="M 175,263 C 180,270 185,272 190,268 C 195,265 198,278 202,278 C 206,278 210,266 215,270 C 220,273 223,266 225,263 C 218,260 182,260 175,263 Z" 
          fill="#f4b223" 
          stroke="#3c2f2f" 
          strokeWidth="1.5" 
        />
        
        <text 
          x="200" 
          y="298" 
          fontFamily="sans-serif" 
          fontWeight="bold" 
          fontSize="11" 
          fill="#5c4a37" 
          textAnchor="middle" 
          letterSpacing="0.5"
          transform="rotate(-5 200 298)"
        >
          HUNNY
        </text>
      </g>

      {/* ARMS / PAWS (resting elbows on honey pot, supporting head) */}
      <path 
        d="M 152,265 C 158,255 174,235 182,215" 
        stroke="#3c2f2f" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        fill="none" 
      />
      <path 
        d="M 152,265 C 158,255 174,235 182,215 C 180,215 168,245 150,260" 
        fill="#f5be38" 
      />
      <path 
        d="M 248,265 C 242,255 226,235 218,215" 
        stroke="#3c2f2f" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        fill="none" 
      />
      <path 
        d="M 248,265 C 242,255 226,235 218,215 C 220,215 232,245 250,260" 
        fill="#f5be38" 
      />

      {/* HEAD */}
      <g id="pooh-head">
        <path 
          d="M 165,200 C 155,185 162,150 182,145 C 205,140 222,155 225,175 C 228,195 218,210 200,212 C 180,214 170,210 165,200 Z" 
          fill="#f5be38" 
          stroke="#3c2f2f" 
          strokeWidth="2.5" 
          strokeLinejoin="round"
        />

        <path 
          d="M 166,155 C 156,152 154,136 164,138 C 172,140 174,148 171,153" 
          fill="#f5be38" 
          stroke="#3c2f2f" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
        />
        <path 
          d="M 205,150 C 215,146 220,160 212,166 C 206,170 201,164 202,155" 
          fill="#f5be38" 
          stroke="#3c2f2f" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
        />

        <path 
          d="M 195,190 C 190,175 210,165 218,175 C 226,185 218,198 202,196 C 198,195 196,192 195,190 Z" 
          fill="#f5be38" 
          stroke="#3c2f2f" 
          strokeWidth="1.5" 
          opacity="0.2"
        />
        
        <path 
          d="M 215,173 C 219,171 223,174 222,179 C 220,183 214,181 215,173 Z" 
          fill="#443224" 
          stroke="#3c2f2f" 
          strokeWidth="1.5" 
        />

        <path 
          d="M 176,174 C 180,170 184,171 187,175" 
          stroke="#3c2f2f" 
          strokeWidth="2.2" 
          strokeLinecap="round" 
          fill="none" 
        />
        <path 
          d="M 198,171 C 201,167 205,168 208,172" 
          stroke="#3c2f2f" 
          strokeWidth="2.2" 
          strokeLinecap="round" 
          fill="none" 
        />

        <path 
          d="M 188,193 Q 198,199 208,191" 
          stroke="#3c2f2f" 
          strokeWidth="2.2" 
          strokeLinecap="round" 
          fill="none" 
        />
        <path 
          d="M 207,189 Q 210,191 209,193" 
          stroke="#3c2f2f" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          fill="none" 
        />

        <path 
          d="M 173,165 Q 178,160 183,164" 
          stroke="#3c2f2f" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          fill="none" 
        />
        <path 
          d="M 196,161 Q 201,157 206,160" 
          stroke="#3c2f2f" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          fill="none" 
        />
      </g>
    </svg>
  );
}

export default function InvitationCard() {
  // Target Event Date: August 8, 2026, 17:00 hs (Argentina local time equivalent)
  const targetDateStr = '2026-08-08T17:00:00-03:00'; 
  
  // States
  const [hasOpened, setHasOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [countdown, setCountdown] = useState<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isOver: false
  });
  
  // Lightbox Gallery states
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);
  const photoList = [babyGallery1, babyGallery2, babyGallery3, babyGallery4];
  const photoCaptions = [
    "¡Jugando en mi rincón preferido! ☀️👶",
    "¡Una sonrisa grandota de mi carita dulce! 🥰✨",
    "¡Listo para festejar mi primer añito! 🎂🎈",
    "¡Disfrutando cada día con mucha alegría! 🐻🍯"
  ];

  // RSVP Form States
  const [guestName, setGuestName] = useState('');
  const [isAttending, setIsAttending] = useState<boolean | null>(null);
  const [totalGuests, setTotalGuests] = useState(1);
  const [dietaryOptions, setDietaryOptions] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Calculate Countdown
  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDateStr) - +new Date();
      if (difference <= 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0, isOver: true });
        return;
      }

      setCountdown({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        isOver: false
      });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDateStr]);

  // Handle music toggle
  const toggleMusic = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(err => {
          console.log("Error playing audio:", err);
        });
    }
  };

  // Autoplay on first user interaction (click/touch/scroll) to bypass browser policy
  useEffect(() => {
    let hasInteracted = false;

    const startAudioOnInteraction = () => {
      if (hasInteracted) return;
      if (audioRef.current && !isPlaying) {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            hasInteracted = true;
            removeListeners();
          })
          .catch(err => {
            console.log("Interaction autoplay blocked (perfectly normal):", err);
          });
      }
    };

    const removeListeners = () => {
      document.removeEventListener('click', startAudioOnInteraction);
      document.removeEventListener('touchstart', startAudioOnInteraction);
      document.removeEventListener('scroll', startAudioOnInteraction);
    };

    document.addEventListener('click', startAudioOnInteraction);
    document.addEventListener('touchstart', startAudioOnInteraction);
    document.addEventListener('scroll', startAudioOnInteraction);

    return () => {
      removeListeners();
    };
  }, [isPlaying]);

  // Google Calendar integration
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Primer+A%C3%B1ito+de+Dariel+Pohl+Lozano&dates=20260808T200000Z/20260808T230000Z&details=Acompa%C3%B1anos+a+festejar+el+primer+cumplea%C3%B1os+de+Dariel%21+Talles+para+regalos%3A+Ropa+12-24m%2C+Calzado+20%2C+Pa%C3%B1ales+XG.&location=Adolfo+Alsina+3051%2C+Buenos+Aires&sf=true&output=xml`;

  // Submit RSVP to parents via WhatsApp
  const handleRSVPSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim()) return;
    if (isAttending === null) return;

    setIsSubmitting(true);
    
    // Simulate short network delay
    setTimeout(() => {
      const attendanceMsg = isAttending 
        ? `¡Hola! Confirmo asistencia para el cumple de 1 año de Dariel. Nombre: ${guestName}. Seremos ${totalGuests} persona(s) en total. ${dietaryOptions ? `Detalle alimentario: ${dietaryOptions}` : ''}`
        : `¡Hola! Lamento contarte que no podré asistir al cumple de Dariel. Nombre: ${guestName}. ¡Les deseo que pasen un hermoso día!`;

      // Argentina phone format. Encode text
      const encodedMsg = encodeURIComponent(attendanceMsg);
      const whatsappUrl = `https://wa.me/5491130814724?text=${encodedMsg}`;
      
      // Trigger Confetti if attending!
      if (isAttending) {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 5000);
      }

      window.open(whatsappUrl, '_blank');
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <div className="relative min-h-screen w-full bg-[#faf6f0] overflow-x-hidden flex flex-col items-center">
      {/* Welcome Screen Envelope Overlay */}
      <AnimatePresence>
        {!hasOpened && (
          <motion.div
            key="envelope"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -120 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 bg-[#faf6f0] z-50 flex items-center justify-center p-4"
          >
            <div className="w-full max-w-[420px] bg-white rounded-3xl p-8 shadow-2xl border-2 border-[#2b82c9]/10 text-center flex flex-col items-center justify-center relative overflow-hidden">
              {/* Cute soft clouds or floating circles in background */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.05]">
                <div className="absolute top-10 left-10 w-24 h-24 bg-brand-yellow rounded-full blur-xl" />
                <div className="absolute bottom-10 right-10 w-24 h-24 bg-brand-blue rounded-full blur-xl" />
              </div>

              {/* Decorative Envelope Icon/SVG or Cute Heart/Bear Balloon */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="mb-6 relative w-32 h-32 flex items-center justify-center"
              >
                {/* Custom glowing background circle */}
                <div className="absolute inset-0 bg-[#2b82c9]/5 rounded-full scale-125 animate-pulse" />
                {/* Beautiful custom vector heart envelope */}
                <svg className="w-20 h-20 text-[#2b82c9] drop-shadow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                {/* Small floating hearts */}
                <motion.span 
                  animate={{ scale: [1, 1.2, 1], y: [0, -15, 0], opacity: [0.3, 1, 0.3] }}
                  transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                  className="absolute top-2 right-4 text-xl"
                >
                  🎈
                </motion.span>
                <motion.span 
                  animate={{ scale: [1, 1.3, 1], y: [0, -20, 0], opacity: [0.2, 1, 0.2] }}
                  transition={{ repeat: Infinity, duration: 2.5, delay: 1 }}
                  className="absolute top-4 left-4 text-lg"
                >
                  ✨
                </motion.span>
              </motion.div>

              <p className="font-display font-extrabold text-[#2b82c9] tracking-[0.2em] text-xs uppercase mb-2">
                INVITACIÓN ESPECIAL
              </p>
              
              <h1 className="font-handwritten text-5xl text-[#2b82c9] font-bold tracking-wide leading-none mb-4">
                El Primer Añito de Dariel
              </h1>

              <p className="text-gray-500 font-display text-sm leading-relaxed mb-8 max-w-[280px]">
                ¡Te invito a compartir un día mágico lleno de risas, juegos y diversión! 💕
              </p>

              {/* Big CTA Button to open card and trigger music! */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setHasOpened(true);
                  if (audioRef.current) {
                    audioRef.current.play()
                      .then(() => {
                        setIsPlaying(true);
                      })
                      .catch(err => {
                        console.log("Audio play failed on click:", err);
                      });
                  }
                }}
                className="w-full bg-[#2b82c9] text-white font-display font-extrabold text-sm tracking-widest uppercase py-4 rounded-2xl shadow-lg shadow-[#2b82c9]/20 hover:bg-[#1d74b5] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>ABRIR CON MÚSICA ♪</span>
              </motion.button>
              
              <p className="text-gray-400 font-display text-[10px] tracking-wider uppercase mt-4 animate-pulse">
                HACÉ CLICK PARA ESCUCHAR LA CANCIÓN
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background audio player using user-uploaded theme track */}
      <audio 
        ref={audioRef} 
        src={mashaTheme} 
        loop 
        preload="auto"
      />
      
      {/* Background margin decorative patterns exactly like the video - hand-drawn details */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-[0.08] z-0">
        <svg className="absolute top-10 left-4 w-12 h-12 text-brand-orange animate-float-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
        <svg className="absolute top-48 right-6 w-16 h-16 text-brand-yellow animate-float-slower" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
        <svg className="absolute top-[35%] left-6 w-20 h-10 text-brand-blue" fill="none" viewBox="0 0 100 40">
          <path d="M0,20 Q15,5 30,20 T60,20 T90,20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        </svg>
        <svg className="absolute top-[55%] right-8 w-14 h-14 text-brand-orange animate-float-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
        </svg>
      </div>

      {/* RENDER ENTIRE INVITATION inside a mobile mockup shell for 100% layout and spacing fidelity */}
      <div className="w-full max-w-[460px] bg-white min-h-screen shadow-2xl relative flex flex-col border-x border-gray-100 pb-12 z-10">
        
        {/* Confetti canvas overlay when guests click "CONFIRM" */}
        {showConfetti && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-50">
            {Array.from({ length: 45 }).map((_, i) => (
              <div 
                key={i} 
                className="confetti-piece"
                style={{
                  left: `${Math.random() * 100}%`,
                  backgroundColor: ['#f4be37', '#e57c58', '#7ba6cb', '#fcd34d', '#ff8a5c'][Math.floor(Math.random() * 5)],
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${Math.random() * 2 + 1.5}s`,
                }}
              />
            ))}
          </div>
        )}

        {/* Persistent Floating Music Button identical to the video screenshots (♫) circle */}
        <div className="absolute top-4 right-4 z-40">
          <motion.button
            id="music-toggle"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleMusic}
            className={`w-11 h-11 rounded-full shadow-md flex items-center justify-center border font-display text-lg font-bold transition-all duration-300 ${
              isPlaying 
                ? 'bg-brand-yellow/10 border-brand-yellow text-brand-yellow' 
                : 'bg-white border-brand-yellow/30 text-brand-yellow/80'
            }`}
          >
            {isPlaying ? <Volume2 className="w-5 h-5 animate-pulse" /> : '♫'}
          </motion.button>
        </div>

        {/* COVERSHEET WITH BRAND NAME & WINNIE THE POOH ILLUSTRATION AT THE VERY TOP */}
        <section className="bg-white pt-14 pb-4 px-6 text-center flex flex-col items-center relative overflow-hidden">
          <h1 className="font-handwritten text-7xl text-[#2b82c9] font-bold tracking-wide leading-none mb-1 select-none">
            Dariel
          </h1>
          <p className="font-display font-extrabold text-[#2b82c9] tracking-[0.25em] text-xs uppercase mb-5">
            MI PRIMER AÑITO
          </p>

          {/* Orange Pill AGENDAR Button matching Screenshot 4 */}
          <motion.a
            id="agendar-top"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={googleCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2b82c9] text-white font-display font-extrabold text-[11px] tracking-widest uppercase px-10 py-2.5 rounded-full shadow-md hover:bg-[#1d74b5] transition-all duration-300"
          >
            AGENDAR
          </motion.a>

          {/* Classic Winnie the Pooh illustration uploaded by the user */}
          <div className="my-4 relative w-64 h-64 flex items-center justify-center">
            <img 
              src={bearBlueBow} 
              alt="Dariel - Oso con lazo celeste" 
              className="w-60 h-60 object-contain rounded-2xl shadow-sm"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Yellow countdown requested by the user */}
          <div className="mb-4 mt-2 select-none text-center">
            <p className="font-handwritten text-4xl text-[#2b82c9] font-bold tracking-wide mb-1 leading-none">
              Faltan:
            </p>
            <p className="font-display font-bold text-[#358cd4] text-lg sm:text-xl tracking-wider">
              {countdown.days} Días {countdown.hours}hs {countdown.minutes}m {countdown.seconds}s
            </p>
          </div>

          {/* Parallel gold lines with Pooh & Tigger in the center */}
          <div className="w-full max-w-[340px] mx-auto mb-8 px-2 select-none">
            {/* Top gold line */}
            <div className="border-t border-[#2b82c9]/35 w-full" />
            
            {/* Middle row */}
            <div className="flex items-center justify-between py-1">
              <span className="flex-1 text-right font-display font-extrabold text-[11px] sm:text-xs text-[#2b82c9] tracking-widest uppercase pr-3 whitespace-nowrap">
                SÁBADO 8
              </span>
              <div className="flex-none -my-4 z-10 w-20 h-16 flex items-center justify-center">
                <img 
                  src={smallBear} 
                  alt="Pequeño osito" 
                  className="w-14 h-14 object-contain rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="flex-1 text-left font-display font-extrabold text-[11px] sm:text-xs text-[#2b82c9] tracking-widest uppercase pl-3 whitespace-nowrap">
                DE AGOSTO
              </span>
            </div>
            
            {/* Bottom gold line */}
            <div className="border-b border-[#2b82c9]/35 w-full" />
          </div>

          {/* Solid orange horizontal bar crossing at full width */}
          <div className="w-full h-3.5 bg-[#2b82c9] absolute bottom-0 left-0" />
        </section>

        {/* BABY PORTRAIT ON ROCKING STEPS */}
        <div className="w-full px-6 py-4 bg-[#faf6f0]">
          <div className="relative rounded-2xl overflow-hidden shadow-md border-4 border-white aspect-[4/5] bg-gray-50">
            <img 
              src={babyDariel} 
              alt="Dariel" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 left-4 bg-white/70 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping" />
              <span className="text-[10px] font-bold font-display text-gray-700 tracking-wider">MI DÍA ESPECIAL</span>
            </div>
          </div>

          {/* Visual letter blocks 'H A P P Y' peeking under the photo matching screenshot 5 */}
          <div className="flex justify-center gap-1.5 -mt-4 relative z-20">
            {['H', 'A', 'P', 'P', 'Y'].map((letter, i) => (
              <div key={i} className="w-8 h-8 bg-[#fdfaf6] border-2 border-brand-yellow/35 rounded shadow-sm flex items-center justify-center font-display font-extrabold text-brand-orange text-xs select-none">
                {letter}
              </div>
            ))}
          </div>

          {/* Under-photo name tag flanked by Eeyore drawings matching Screenshot 0 */}
          <div className="mt-8 mb-6 flex flex-col items-center">
            <div className="flex items-center justify-center gap-2">
              <EeyoreSVG />
              <h2 className="font-handwritten text-4.5xl text-brand-orange font-bold tracking-wide">
                Dariel
              </h2>
              <EeyoreSVG />
            </div>
            <p className="font-display font-semibold text-[#2b82c9] text-sm tracking-widest mt-1">
              08.08.2026
            </p>
            {/* Elegant horizontal border matching Screenshot 0 */}
            <div className="w-3/4 h-0.5 bg-brand-yellow/20 mt-4" />
          </div>
        </div>

        {/* SCREENSHOT 2: TEXTURED TERRACOTTA / ORANGE EVENT DETAILS SECTION */}
        <section className="bg-[#70bbf2] mt-8 py-14 px-6 text-center relative overflow-hidden text-white shadow-inner">
          {/* Grid pattern overlays matching the textured video look */}
          <div className="absolute inset-0 opacity-15 pointer-events-none bg-dots" />

          {/* Dotted flying bee path designs */}
          <svg className="absolute top-6 left-6 w-20 h-20 text-white/40 pointer-events-none" viewBox="0 0 100 100" fill="none">
            <path d="M10,80 Q30,10 70,50 T90,20" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3"/>
            <text x="80" y="25" fontSize="14" fill="white">🐝</text>
          </svg>
          <svg className="absolute bottom-6 right-6 w-20 h-20 text-white/40 pointer-events-none" viewBox="0 0 100 100" fill="none">
            <path d="M10,20 Q50,70 90,30" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3"/>
            <text x="85" y="30" fontSize="14" fill="white">🐝</text>
          </svg>

          <div className="relative z-10 max-w-[340px] mx-auto space-y-6">
            <div className="space-y-1">
              <p className="font-display font-medium text-white/90 text-sm tracking-widest uppercase">
                TE ESPERO PARA FESTEJAR
              </p>
              <h3 className="font-handwritten text-4xl font-bold tracking-wide text-brand-yellow-light drop-shadow-sm">
                Mi Primer Añito
              </h3>
            </div>

            {/* Event specific details list with simple circular custom icons matching screenshots */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3 text-left">
                <span className="p-2.5 bg-white/10 rounded-full border border-white/20">
                  <Calendar className="w-4 h-4 text-white" />
                </span>
                <span className="font-display font-bold text-sm tracking-wide">
                  SÁBADO 8 DE AGOSTO
                </span>
              </div>

              <div className="flex items-center gap-3 text-left">
                <span className="p-2.5 bg-white/10 rounded-full border border-white/20">
                  <Clock className="w-4 h-4 text-white" />
                </span>
                <span className="font-display font-bold text-sm tracking-wide">
                  DE 17:00 A 20:00 HS
                </span>
              </div>

              <div className="flex items-center gap-3 text-left">
                <span className="p-2.5 bg-white/10 rounded-full border border-white/20">
                  <MapPin className="w-4 h-4 text-white" />
                </span>
                <div className="flex flex-col">
                  <span className="font-display font-bold text-sm tracking-wide">
                    ADOLFO ALSINA 3051
                  </span>
                  <span className="text-[10px] text-white/80 uppercase font-bold tracking-wider">
                    CLAYPOLE, BUENOS AIRES, ARGENTINA
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 space-y-3">
              <p className="font-display font-extrabold text-[10px] text-brand-yellow-light tracking-widest uppercase">
                HACE CLICK PARA SABER COMO LLEGAR
              </p>
              {/* White button with gold/orange text matching Screenshot 2 */}
              <motion.a
                id="map-cta"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href="https://www.google.com/maps/search/?api=1&query=Adolfo+Alsina+3051,+Claypole,+Buenos+Aires"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-[#2b82c9] font-display font-extrabold text-xs tracking-widest uppercase px-10 py-3 rounded-full shadow-lg hover:bg-brand-cream transition-colors"
              >
                CÓMO LLEGAR
              </motion.a>
            </div>
          </div>
        </section>

        {/* SCREENSHOT 1: 2x2 GRID COLLAGE OF BABY PHOTOS */}
        <section className="bg-white py-12 px-6">
          <div className="text-center mb-6">
            <span className="inline-block bg-brand-yellow/10 text-brand-orange font-display font-extrabold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full mb-1">
              FOTOS
            </span>
            <h3 className="font-handwritten text-4xl text-gray-700 font-bold leading-none">
              Mi primer añito en fotos
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-2.5 max-w-[380px] mx-auto">
            {photoList.map((photo, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                onClick={() => setActivePhotoIndex(index)}
                className="relative rounded-2xl overflow-hidden shadow-sm border border-gray-100 cursor-zoom-in aspect-square"
              >
                <img 
                  src={photo} 
                  alt={`Dariel photo ${index + 1}`} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute bottom-2 right-2 bg-black/40 backdrop-blur-sm p-1 rounded-full text-white">
                  <Maximize2 className="w-3 h-3" />
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* NEW REQUIREMENT: SIZES & GIFTS DETAILS ("Sector de talles para regalos del bebe e instrucciones claras") */}
        <section className="bg-brand-yellow-light/40 py-10 px-6 border-y border-brand-yellow/10">
          <div className="max-w-[360px] mx-auto text-center space-y-5">
            <div className="flex flex-col items-center">
              <Gift className="w-7 h-7 text-brand-yellow mb-2 fill-brand-yellow/10" />
              <h3 className="font-handwritten text-3.5xl text-gray-700 font-bold">
                Regalitos para mí
              </h3>
              <p className="text-gray-500 text-[11px] mt-1 leading-relaxed max-w-[280px]">
                Tu presencia es mi mejor regalo. Pero si querés hacerme un obsequio, podés guiarte con mi sector de talles:
              </p>
            </div>

            {/* Size badges custom cards */}
            <div className="grid grid-cols-3 gap-2.5">
              <div className="bg-white rounded-xl p-2.5 border border-brand-yellow/15 shadow-sm text-center">
                <p className="text-[8px] uppercase font-bold text-gray-400 tracking-wider">ROPA</p>
                <p className="font-display font-extrabold text-brand-orange text-xs mt-1">12-24m</p>
                <p className="text-[8px] text-gray-400 mt-0.5">meses</p>
              </div>

              <div className="bg-white rounded-xl p-2.5 border border-brand-yellow/15 shadow-sm text-center">
                <p className="text-[8px] uppercase font-bold text-gray-400 tracking-wider">CALZADO</p>
                <p className="font-display font-extrabold text-[#2b82c9] text-xs mt-1">Talle 20</p>
                <p className="text-[8px] text-gray-400 mt-0.5">nacional</p>
              </div>

              <div className="bg-white rounded-xl p-2.5 border border-brand-yellow/15 shadow-sm text-center">
                <p className="text-[8px] uppercase font-bold text-gray-400 tracking-wider">PAÑALES</p>
                <p className="font-display font-extrabold text-brand-blue text-xs mt-1">Talle XG</p>
                <p className="text-[8px] text-gray-400 mt-0.5">extra grande</p>
              </div>
            </div>
          </div>
        </section>

        {/* SCREENSHOT 1: CREAM NOTE WITHOUT EXTRA GRAPHICS */}
        <section className="bg-white py-12 px-6 flex flex-col items-center text-center">

          {/* Golden text precisely styled matching Screenshot 1 */}
          <div className="font-display font-bold text-xs tracking-widest text-[#2b82c9] leading-relaxed max-w-[340px] uppercase space-y-1">
            <p>TU PRESENCIA ES MUY IMPORTANTE PARA MI,</p>
            <p>NO OLVIDES CONFIRMAR ASISTENCIA CON</p>
            <p>MIS PAPIS ANTES DEL 01 DE AGOSTO DE 2026.</p>
            <p>NO OLVIDES TRAER TU MEJOR SONRISA</p>
            <p>Y GANAS DE DIVERTIRTE!</p>
          </div>
        </section>

        {/* COMPREHENSIVE INTERACTIVE RSVP CONFIRMATION FORM */}
        <section className="bg-brand-blue-light/50 py-10 px-6 border-t border-brand-blue/10">
          <div className="max-w-[360px] mx-auto text-center space-y-5">
            <div className="flex flex-col items-center">
              <Users className="w-7 h-7 text-brand-blue mb-2 fill-brand-blue/10" />
              <h3 className="font-handwritten text-4xl text-brand-blue font-bold">
                Confirmar Asistencia
              </h3>
              <p className="text-gray-500 text-[11px] max-w-[280px]">
                Por favor, indicanos tus datos para agendarte y preparar todo el cumple. ¡Muchas gracias!
              </p>
            </div>

            <form onSubmit={handleRSVPSubmit} className="bg-white rounded-2xl p-5 shadow-sm border border-brand-blue/10 text-left space-y-4">
              {/* Name field */}
              <div>
                <label className="block text-[9px] uppercase font-bold text-gray-400 tracking-wider mb-1">
                  Nombre Completo / Familia
                </label>
                <input 
                  type="text" 
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  placeholder="Ej: Familia Lozano / Jimena y Tomás" 
                  className="w-full bg-[#faf6f0]/40 border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:border-brand-blue font-display text-gray-700"
                  required
                />
              </div>

              {/* Attendance buttons */}
              <div>
                <label className="block text-[9px] uppercase font-bold text-gray-400 tracking-wider mb-1">
                  ¿Asistirás al festejo?
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setIsAttending(true)}
                    className={`py-3 px-3 rounded-xl font-display font-bold text-[10px] uppercase tracking-wider text-center border transition-all duration-200 flex items-center justify-center gap-1.5 ${
                      isAttending === true 
                        ? 'bg-brand-blue text-white border-brand-blue shadow-sm' 
                        : 'bg-white text-gray-500 border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    {isAttending === true && <Check className="w-3 h-3" />}
                    Sí, ¡iré! 🎉
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsAttending(false)}
                    className={`py-3 px-3 rounded-xl font-display font-bold text-[10px] uppercase tracking-wider text-center border transition-all duration-200 flex items-center justify-center gap-1.5 ${
                      isAttending === false 
                        ? 'bg-brand-orange text-white border-brand-orange shadow-sm' 
                        : 'bg-white text-gray-500 border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    {isAttending === false && <Check className="w-3 h-3" />}
                    No puedo 😢
                  </button>
                </div>
              </div>

              {/* Attendants Counter (only if attending) */}
              {isAttending === true && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="overflow-hidden space-y-3 pt-1"
                >
                  <div>
                    <label className="block text-[9px] uppercase font-bold text-gray-400 tracking-wider mb-1">
                      ¿Cuántos asisten en total? (con vos)
                    </label>
                    <div className="flex items-center gap-4 bg-[#faf6f0]/40 border border-gray-200 rounded-xl px-3 py-1.5 justify-between">
                      <span className="font-display font-bold text-gray-700 text-xs">{totalGuests} persona{totalGuests > 1 ? 's' : ''}</span>
                      <div className="flex gap-1.5">
                        <button
                          type="button"
                          onClick={() => setTotalGuests(Math.max(1, totalGuests - 1))}
                          className="w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 font-bold text-gray-600 shadow-sm"
                        >
                          -
                        </button>
                        <button
                          type="button"
                          onClick={() => setTotalGuests(Math.min(10, totalGuests + 1))}
                          className="w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 font-bold text-gray-600 shadow-sm"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[9px] uppercase font-bold text-gray-400 tracking-wider mb-1">
                      Detalle alimentario o nota (Opcional)
                    </label>
                    <input 
                      type="text" 
                      value={dietaryOptions}
                      onChange={(e) => setDietaryOptions(e.target.value)}
                      placeholder="Ej: Celíaco, Vegano, sin sal" 
                      className="w-full bg-[#faf6f0]/40 border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:border-brand-blue font-display text-gray-700"
                    />
                  </div>
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting || isAttending === null}
                className={`w-full py-3.5 rounded-xl font-display font-bold text-[11px] uppercase tracking-wider text-center text-white flex items-center justify-center gap-1.5 shadow-md transition-all duration-300 ${
                  isAttending === null 
                    ? 'bg-gray-300 cursor-not-allowed shadow-none' 
                    : isAttending === true 
                      ? 'bg-brand-blue hover:bg-brand-blue/95 shadow-brand-blue/20' 
                      : 'bg-brand-orange hover:bg-brand-orange/95 shadow-brand-orange/20'
                }`}
              >
                <Send className="w-3.5 h-3.5 text-white" />
                {isSubmitting ? 'Enviando...' : 'Confirmar Asistencia'}
              </motion.button>
            </form>
          </div>
        </section>

        {/* SOLID COLOR BAR AT THE VERY BOTTOM OF THE SCREEN */}
        <div className="w-full h-4 bg-brand-yellow mt-6" />

        {/* FOOTER */}
        <footer className="pt-6 pb-12 text-center bg-white relative z-10 flex flex-col items-center">
          {/* Adorable Winnie the Pooh floating with a blue balloon uploaded by the user */}
          <div className="w-64 h-80 flex items-center justify-center select-none overflow-hidden mb-2">
            <motion.img 
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.03 }}
              src={bearBalloonBlue} 
              alt="Winnie the Pooh con Globo" 
              className="max-w-full max-h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <p className="font-handwritten text-4xl text-brand-orange font-bold mb-1">¡Te espero!</p>
          <p className="font-display font-bold text-[9px] tracking-widest text-gray-400 uppercase">Dariel Pohl Lozano</p>
          <div className="flex items-center gap-1.5 text-[10px] text-gray-400 mt-6">
            <span>Hecho con</span>
            <Heart className="w-3 h-3 text-brand-orange fill-brand-orange animate-pulse" />
            <span>para Dariel</span>
          </div>
        </footer>

      </div>

      {/* FULL SCREEN PHOTO LIGHTBOX MODAL WITH ZOOM */}
      <AnimatePresence>
        {activePhotoIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center p-4 select-none"
          >
            {/* Top Close Button */}
            <button
              onClick={() => setActivePhotoIndex(null)}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 p-3 rounded-full text-white transition-all backdrop-blur-md z-50 border border-white/10"
              title="Cerrar galería"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image display container */}
            <div className="max-w-4xl max-h-[80vh] flex flex-col items-center justify-center relative">
              <motion.img 
                key={activePhotoIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                src={photoList[activePhotoIndex]} 
                alt={`Dariel photo ${activePhotoIndex + 1}`} 
                className="max-w-full max-h-[70vh] object-contain rounded-2xl shadow-2xl border border-white/5"
                referrerPolicy="no-referrer"
              />
              
              {/* Caption */}
              <motion.p 
                key={`caption-${activePhotoIndex}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-white font-display text-center text-xs font-semibold mt-4 px-4 py-2 bg-white/5 rounded-full border border-white/5 backdrop-blur-sm max-w-md"
              >
                {photoCaptions[activePhotoIndex]}
              </motion.p>
            </div>

            {/* Bullet Indicators */}
            <div className="absolute bottom-6 flex gap-2">
              {photoList.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActivePhotoIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activePhotoIndex === i ? 'bg-brand-yellow w-5' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
