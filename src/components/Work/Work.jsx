import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // --- 3D Carousel State ---
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const currentRotationRef = useRef(0);
  const animationRef = useRef(null);

  // --- CONFIGURATION ---
  const radius = 320; 
  const cardWidth = 200;
  const cardHeight = 300;
  const numberOfProjects = projects.length;
  const anglePerProject = 360 / numberOfProjects;

  // --- Autoplay ---
  useEffect(() => {
    if (!isDragging) {
      const animate = () => {
        setRotation((prev) => prev + 0.2); 
        animationRef.current = requestAnimationFrame(animate);
      };
      animationRef.current = requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(animationRef.current);
    }
    return () => cancelAnimationFrame(animationRef.current);
  }, [isDragging]);

  // --- Drag Handling ---
  const handleStart = (clientX) => {
    setIsDragging(true);
    startX.current = clientX;
    currentRotationRef.current = rotation;
  };

  const handleMove = (clientX) => {
    if (!isDragging) return;
    const deltaX = clientX - startX.current;
    setRotation(currentRotationRef.current + deltaX * 0.5);
  };

  const handleEnd = () => setIsDragging(false);

  // Event Listeners
  const onMouseDown = (e) => handleStart(e.clientX);
  const onMouseMove = (e) => handleMove(e.clientX);
  const onMouseUp = handleEnd;
  const onMouseLeave = handleEnd;
  const onTouchStart = (e) => handleStart(e.touches[0].clientX);
  const onTouchMove = (e) => handleMove(e.touches[0].clientX);
  const onTouchEnd = handleEnd;

  return (
    <section
      id="work"
      className="relative h-screen overflow-hidden bg-[#0f0c1a] font-sans flex flex-col items-center justify-center"
    >
      {/* Cinematic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-[#0f0c1a] to-[#0f0c1a]" />

      {/* Title */}
      <div className="absolute top-10 z-10 text-center">
        
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
      </div>

      {/* 3D Scene Container */}
      <div
        className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing z-20"
        style={{ 
          perspective: "1200px", 
          perspectiveOrigin: "50% 50%" 
        }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="relative"
          style={{
            width: cardWidth,
            height: cardHeight,
            transformStyle: "preserve-3d",
            transform: `rotateX(-12deg) rotateY(${rotation}deg)`, 
          }}
        >
          {projects.map((project, index) => {
            const angle = index * anglePerProject;
            return (
              <div
                key={project.id}
                className="absolute inset-0 group"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                }}
                onClick={() => setSelectedProject(project)}
              >
                {/* The Card */}
                <div 
                  className="w-full h-full rounded-xl bg-gray-900 border border-white/10 overflow-hidden transition-all duration-300 group-hover:border-purple-500 group-hover:scale-105 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                  style={{ 
                    WebkitBoxReflect: "below 10px linear-gradient(transparent, transparent, rgba(0,0,0,0.4))",
                    transformStyle: "preserve-3d" 
                  }}
                >
                  {/* Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* INFO CONTAINER - Always Visible Now */}
                  {/* 1. Added a gradient so text is readable */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90" />
                  
                  {/* 2. Content positioned at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col justify-end h-full">
                    <h3 className="text-xl font-bold text-white mb-1 leading-tight">{project.title}</h3>
                    <p className="text-xs text-gray-300 line-clamp-2 mb-2">{project.description}</p>
                    
                    {/* Tags (Optional - shown in mini pills) */}
                    <div className="flex flex-wrap gap-1 mt-1">
                       {project.tags.slice(0,2).map((tag, i) => (
                         <span key={i} className="text-[10px] text-purple-300 bg-purple-900/40 border border-purple-500/30 px-1.5 py-0.5 rounded">
                           {tag}
                         </span>
                       ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Full Screen Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#151022] w-full max-w-5xl rounded-2xl overflow-hidden border border-purple-500/30 flex flex-col md:flex-row shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full md:w-3/5 h-64 md:h-[500px] relative bg-black">
                <img src={selectedProject.image} className="w-full h-full object-contain" alt="" />
              </div>
              
              <div className="w-full md:w-2/5 p-8 flex flex-col relative">
                <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 text-gray-400 hover:text-white">✕</button>
                
                <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="text-xs text-purple-300 bg-purple-900/30 px-2 py-1 rounded">#{tag}</span>
                  ))}
                </div>
                
                <p className="text-gray-400 leading-relaxed mb-8 flex-grow">{selectedProject.description}</p>
                
                <div className="flex gap-4 pt-4 border-t border-white/10">
                  <a href={selectedProject.github} target="_blank" rel="noreferrer" className="flex-1 py-3 text-center bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors font-medium">
                    GitHub
                  </a>
                  <a href={selectedProject.webapp} target="_blank" rel="noreferrer" className="flex-1 py-3 text-center bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors font-medium shadow-[0_0_20px_rgba(147,51,234,0.3)]">
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;