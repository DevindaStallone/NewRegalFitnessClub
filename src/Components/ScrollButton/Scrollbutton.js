import React, { useState, useEffect } from 'react'

const Scrollbutton = () => {
    
    const [visible, setVisible] = useState(false);

    // Show button when page is scrolled down
    useEffect(() => {
      const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      };
  
      window.addEventListener('scroll', toggleVisibility);
  
      return () => {
        window.removeEventListener('scroll', toggleVisibility);
      };
    }, []);
  
    // Scroll to the top smoothly
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  
    return (
      <div>
        {visible && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full shadow-lg text-3xl"
          >
            ↑
          </button>
        )}
      </div>
    );
}

export default Scrollbutton
