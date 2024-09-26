import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const targetDate = new Date("2024-10-04T00:00:00"); // Set your target date here
  const [timeLeft, setTimeLeft] = useState({});

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    let time = {};
    if (difference > 0) {
      time = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    } else {
      // If the countdown is over
      time = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
    return time;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <div className="countdown-timer text-center font-semibold">
      <h1 className="text-2xl font-bold mb-1">Jumat, 4 Oktober</h1>{" "}
      {/* Kurangi margin bottom */}
      <div className="flex justify-center space-x-2 mb-10">
        {" "}
        {/* Kurangi space-x */}
        <div>
          <span className="text-1xl">{timeLeft.days}</span>
          <span className="text-lg"> Hari</span>
        </div>
        <div>
          <span className="text-1xl">{timeLeft.hours}</span>
          <span className="text-lg"> Jam</span>
        </div>
        <div>
          <span className="text-1xl">{timeLeft.minutes}</span>
          <span className="text-lg"> Menit</span>
        </div>
        <div>
          <span className="text-1xl">{timeLeft.seconds}</span>
          <span className="text-lg"> Detik</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
