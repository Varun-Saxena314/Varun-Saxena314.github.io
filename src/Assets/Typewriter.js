import React from 'react';
import Typewriter from 'typewriter-effect';

function TypewriterText(){
  return (
    <Typewriter
      options={{strings: ['Welcome To My Website!', "I'm Glad You're Here!", "Learn More About Me!"],autoStart: true,loop: true, delay:40,
      }}
    />
  );
};

export default TypewriterText;