import react from 'react'
import Footer from './Footer';
import { useEffect } from 'react';
const Project = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        });

        const fades = document.querySelectorAll('.fade');
        fades.forEach((el) => observer.observe(el));

        // Cleanup observer on component unmount
        return () => observer.disconnect();
    }, []);
    return (
        <div className='container project-container'>
        <div className='text' style={{ marginLeft: '5%', marginTop: '3%'}}>
          <h1 className='fade' style={{ fontSize: '300%' }}>Projects</h1>
          <p className='fade'>
            Developed a website which allows you to play TicTacToe!
        </p>
        <p className='fade'>
            It contains three levels, the first one being 3x3 TicTacToe, the second being
            4x4 TicTacToe, and the third level being a game of Connect4!
        </p>
          </div>
        </div>
    )
}

export default Project;