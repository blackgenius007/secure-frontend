import React, { useEffect } from 'react';
import GlitchedWriter, { write, presets, glyphs } from 'glitched-writer';

const Random = () => {
    useEffect(() => {
        const numbers = [];
        const options = {
          ...presets.encrypted,
          glyphs: glyphs.numbers,
          letterize: true,
        };
    
        // Generate 4 random digits for the group
        for (let i = 0; i < 4; i++) {
          numbers.push(Math.floor(Math.random() * 10));
        }
    
        write(numbers.join(''), '#group', options);
    
        const secretWriter = new GlitchedWriter('#secret', options);
        const numbersEl = document.querySelector('.number');
        const infoEl = document.querySelector('.show-info');
    
        const hide = () => {
          secretWriter.endless(true);
          secretWriter.write(numbers.join(''));
          infoEl.classList.remove('hide');
        };
    
        numbersEl.addEventListener('mouseenter', () => {
          secretWriter.endless(false);
          infoEl.classList.add('hide');
        });
    
        numbersEl.addEventListener('mouseleave', hide);
    
        return () => {
          // Clean up event listeners when the component is unmounted
          numbersEl.removeEventListener('mouseenter', () => {
            secretWriter.endless(false);
            infoEl.classList.add('hide');
          });
          numbersEl.removeEventListener('mouseleave', hide);
        };
      }, []); // Empty dependency array ensures this effect runs only once on component mount
    
      return (
        <div className="card">
          <div className="chip">
            {[...Array(5)].map((_, index) => (
              <div key={index} />
            ))}
          </div>
          <div className="number">
            <div id="group" className="group">
              {[...Array(4)].map((_, index) => (
                <span key={index} className="gw-char">
                  {Math.floor(Math.random() * 10)}
                </span>
              ))}
            </div>
        
          </div>
        </div>
      );
    };

export default Random;
