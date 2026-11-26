(() => {
  "use strict";

  const openButton = document.getElementById("openInvitation");
  const welcomeScreen = document.getElementById("welcome");
  const detailsScreen = document.getElementById("details");
  let hasOpened = false;

  openButton.addEventListener("click", () => {
    if (hasOpened) return;
    hasOpened = true;
    document.body.classList.add("opening");
    window.setTimeout(() => {
      welcomeScreen.classList.remove("active");
      welcomeScreen.setAttribute("aria-hidden", "true");
      detailsScreen.classList.add("active");
      detailsScreen.setAttribute("aria-hidden", "false");
      document.body.classList.remove("opening");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 1500);
  });

  // Engagement begins at midnight IST on 13 December 2026.
  // UTC+05:30 = 330 minutes ahead of UTC.
  const eventTime = Date.UTC(2026, 11, 12, 18, 30, 0);
  const fields = {
    days: document.getElementById("days"),
    hours: document.getElementById("hours"),
    minutes: document.getElementById("minutes"),
    seconds: document.getElementById("seconds")
  };
  const countdown = document.getElementById("countdown");
  const celebration = document.getElementById("celebrationMessage");

  function updateCountdown() {
    const remaining = eventTime - Date.now();
    if (remaining <= 0) {
      Object.values(fields).forEach((field) => field.textContent = "00");
      countdown.hidden = true;
      celebration.hidden = false;
      return;
    }
    const days = Math.floor(remaining / 86400000);
    const hours = Math.floor((remaining % 86400000) / 3600000);
    const minutes = Math.floor((remaining % 3600000) / 60000);
    const seconds = Math.floor((remaining % 60000) / 1000);
    fields.days.textContent = String(days).padStart(2, "0");
    fields.hours.textContent = String(hours).padStart(2, "0");
    fields.minutes.textContent = String(minutes).padStart(2, "0");
    fields.seconds.textContent = String(seconds).padStart(2, "0");
  }
  updateCountdown();
  window.setInterval(updateCountdown, 1000);

  // Lightweight decorative gold particles; disabled for reduced-motion users.
  const canvas = document.getElementById("particles");
  const ctx = canvas.getContext("2d");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let particles = [];
  let width = 0, height = 0, frame = 0;

  function resizeCanvas() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    particles = Array.from({ length: Math.min(65, Math.floor(width / 17)) }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.8 + .45,
      speed: Math.random() * .42 + .12,
      drift: (Math.random() - .5) * .28,
      alpha: Math.random() * .55 + .2
    }));
  }
  function drawParticles() {
    if (reduceMotion) return;
    ctx.clearRect(0, 0, width, height);
    particles.forEach((p) => {
      p.y -= p.speed;
      p.x += p.drift;
      if (p.y < -5) { p.y = height + 5; p.x = Math.random() * width; }
      if (p.x < -5) p.x = width + 5;
      if (p.x > width + 5) p.x = -5;
      const pulse = .65 + Math.sin((frame + p.x) * .018) * .25;
      ctx.beginPath();
      ctx.fillStyle = `rgba(246, 211, 132, ${p.alpha * pulse})`;
      ctx.shadowBlur = 8;
      ctx.shadowColor = "rgba(246, 211, 132, .65)";
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.shadowBlur = 0;
    frame++;
    requestAnimationFrame(drawParticles);
  }
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas, { passive: true });
  if (!reduceMotion) requestAnimationFrame(drawParticles);
})();
