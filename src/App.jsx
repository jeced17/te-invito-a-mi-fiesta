import { useState, useEffect } from "react";
import "./App.css";
import SplitText from "./SplitText";

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};



function CountdownTimer({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown">
      <h2>⏳ Falta para la fiesta:</h2>
      <div className="countdown-timer">
        <span>{timeLeft.days}d</span> :
        <span>{timeLeft.hours}h</span> :
        <span>{timeLeft.minutes}m</span> :
        <span>{timeLeft.seconds}s</span>
      </div>
    </div>
  );
}

function App() {
  const [confirmado, setConfirmado] = useState(false);

  const handleConfirm = () => {
    setConfirmado(true);
  };

  return (
    <div className="invitacion">
      <h1>
        <SplitText
          text="Izel"
          className="text-[120px] font-extrabold text-center text-red-500"
          delay={100}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
          onLetterAnimationComplete={handleAnimationComplete}
        />
      </h1>
      <CountdownTimer targetDate="2025-03-22T18:30:00" />
      <p>🎉 <strong>Fecha:</strong> 22 de marzo de 2025</p>
      <p>🕒 <strong>Hora:</strong> 6:30 PM - 9:30PM</p>
      <p>Soy talla 4 - 5</p>
      <p>📍 <strong>Lugar:</strong> Peter Piper Pizza, Suc. Galerías Tec.</p>
      <div>
        <audio controls autoPlay loop className="hidden-audio">
          <source src="/MiraculousIntroLA2.ogg" type="audio/ogg" />
          <source src="/musica.mp3" type="audio/mp3" />
          Tu navegador no soporta el audio.
        </audio>
      </div>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3394.0146070174997!2d-106.42651742438056!3d31.715495974125208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86e75c116a005555%3A0xe89c2919f5238bc1!2sPeter%20Piper%20Pizza%20Galer%C3%ADas%20Tec!5e0!3m2!1ses-419!2smx!4v1739850287801!5m2!1ses-419!2smx"
          width="100%"
          height="200"
          style={{ border: 0, borderRadius: "10px" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
    
    
  );
}

export default App;
