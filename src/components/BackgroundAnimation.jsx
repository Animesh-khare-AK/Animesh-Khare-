import React, { useEffect, useRef } from 'react';

const BackgroundAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let mouse = { x: null, y: null };

    const handleMouseMove = (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    };

    window.addEventListener('mousemove', handleMouseMove);

    class Node {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 2 + 1;
        this.dx = (Math.random() - 0.5) * 0.7;
        this.dy = (Math.random() - 0.5) * 0.7;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.fill();
      }

      update() {
        if (this.x < 0 || this.x > canvas.width) this.dx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.dy *= -1;

        if (mouse.x && mouse.y) {
          let dxm = this.x - mouse.x;
          let dym = this.y - mouse.y;
          let d = Math.sqrt(dxm * dxm + dym * dym);
          if (d < 100) {
            this.x += dxm / 20;
            this.y += dym / 20;
          }
        }

        this.x += this.dx;
        this.y += this.dy;
        this.draw();
      }
    }

    let nodesArray = [];
    let connectionDistance = 120;

    const initNodes = () => {
      nodesArray = [];
      const width = window.innerWidth;
      const count = width < 768 ? 60 : 120; // Fewer nodes on mobile
      connectionDistance = width < 768 ? 80 : 120; // Shorter connection distance on mobile
      
      for (let i = 0; i < count; i++) {
        nodesArray.push(new Node());
      }
    };

    initNodes();

    const connectNodes = () => {
      for (let a = 0; a < nodesArray.length; a++) {
        for (let b = a; b < nodesArray.length; b++) {
          let dx = nodesArray[a].x - nodesArray[b].x;
          let dy = nodesArray[a].y - nodesArray[b].y;
          let d = Math.sqrt(dx * dx + dy * dy);

          if (d < connectionDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${1 - d / connectionDistance})`;
            ctx.lineWidth = 1;
            ctx.moveTo(nodesArray[a].x, nodesArray[a].y);
            ctx.lineTo(nodesArray[b].x, nodesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    let animationFrameId;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      nodesArray.forEach((node) => node.update());
      connectNodes();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initNodes();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none', // Allow clicks to pass through
      }}
    />
  );
};

export default BackgroundAnimation;
