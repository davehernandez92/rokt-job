"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from 'react';



export default function Home() {
  const [animationStage, setAnimationStage] = useState(0);

  useEffect(() => {
    const card = document.querySelector('.card_1');
    const card2 = document.querySelector('.card_2');
    const card3 = document.querySelector('.card_3');

    if (card) {
      card.addEventListener('mouseenter', () => {
        const titlePosition = document.querySelector('.title_position');
        titlePosition.classList.add('change-color');

      });

      card.addEventListener('mouseleave', () => {
        const titlePosition = document.querySelector('.title_position');
        titlePosition.classList.remove('change-color');
      });
    }

    if (card2) {
      card2.addEventListener('mouseenter', () => {
        const titlePosition = document.querySelector('.title_position');
        titlePosition.classList.add('change-color2');

      });

      card2.addEventListener('mouseleave', () => {
        const titlePosition = document.querySelector('.title_position');
        titlePosition.classList.remove('change-color2');
      });
    }

    if (card3) {
      card3.addEventListener('mouseenter', () => {
        const titlePosition = document.querySelector('.title_position');
        titlePosition.classList.add('change-color3');

      });

      card3.addEventListener('mouseleave', () => {
        const titlePosition = document.querySelector('.title_position');
        titlePosition.classList.remove('change-color3');
      });
    }
  }, []);


  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setAnimationStage(1);
      setTimeout(() => {
        setAnimationStage(2);
        setTimeout(() => {
          setAnimationStage(3);

          const container = document.querySelector('.container');
          container.scrollIntoView({ behavior: 'smooth' });
          container.classList.add('fade-in');
          const firstScreen = document.querySelector('.first-screen');
          firstScreen.style.display = 'none';

        }, 3200);
      }, 2000);
    }, 1000);


    // HOVER EFFECT JAVASCRIPT 

    // MODALS LOGIC 

    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-text');
    const modalTriggers = document.querySelectorAll('.modal-trigger');

    modalTriggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        const cardContent1 = trigger.parentElement.querySelector('.card_text').textContent;
        const cardContent2 = trigger.parentElement.querySelector('.card_text2').textContent;
        modalContent.innerHTML = `
        <p>${cardContent1}</p>
        <p>${cardContent2}</p>
      `;
        modal.style.display = 'block';
      });
    });

    const close = document.querySelector('.close');
    close.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    }

    return () => clearTimeout(timeoutId);




  }, []);

  const isElementVisible = (index) => animationStage === index;




  return (
    <main className="h-screen w-full">
      <div className="first-screen px-5 md:px-10 relative">
        <h1 className={`salute ${isElementVisible(0) ? 'animate-in' : 'animate-out'}`}>Hi there!</h1>
        <p className={`text1 px-5 ${isElementVisible(1) ? 'animate-in' : 'animate-out'}`}>I'm glad that you're here</p>
        <p className={`text2  ${isElementVisible(2) ? 'animate-in' : 'animate-out'}`}>I'd love to be part of <strong>ROKT</strong> team!</p>
      </div>

      <div className="container parent_div">
        <div className="title_div">
          <h1 className="title_name">David Hernandez</h1>
          <h2 className="title_position">Customer Support Specialist</h2>
        </div>

        <div className="lg:flex lg:mt-16 ">
          <div className="text_wrapper">
            <p className="message">I'm really into Web dev <span className="color1"><svg className="svg_amp" fill="#B51D6C" width="64px" height="64px" viewBox="-6 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>ampersand</title> <path d="M18.625 18.719l-1.531-1.625c-0.719 0.625-1.656 1.375-2.906 2.281l-2.281-2.281-3.5-3.688c1.594-1.344 2.688-2.469 3.219-3.344s0.813-1.656 0.813-2.438c0-0.75-0.219-1.406-0.625-2.094-0.406-0.625-1.031-1.156-1.844-1.531-0.781-0.375-1.625-0.594-2.594-0.594-1.5 0-2.781 0.406-3.813 1.313-0.875 0.75-1.313 1.688-1.313 2.844 0 0.625 0.156 1.344 0.531 2.063 0.344 0.75 1.156 1.875 2.406 3.375-2.219 1.75-3.656 3.219-4.406 4.375-0.719 1.156-1.094 2.281-1.094 3.438 0 1.5 0.531 2.781 1.625 3.813 1.063 1 2.469 1.5 4.25 1.5 1.313 0 2.594-0.219 3.781-0.688 1.219-0.438 2.813-1.469 4.688-3l3.063 3.125h3.188c-0.563-0.688-1.219-1.406-2.031-2.188-1.031-1.031-1.844-1.781-2.469-2.344 0.906-0.625 1.844-1.406 2.844-2.313zM7 11.719c-0.969-1.063-1.656-2.063-2.156-2.938-0.219-0.375-0.344-0.75-0.344-1.156 0-0.531 0.281-1.031 0.781-1.438 0.5-0.375 1.156-0.563 1.969-0.563 0.875 0 1.594 0.188 2.094 0.563s0.781 0.844 0.781 1.375c0 0.438-0.219 1-0.625 1.594-0.531 0.844-1.406 1.688-2.5 2.563zM8.813 17.063l3.625 3.719c-1.594 1.25-3 2.188-4.25 2.688-0.781 0.344-1.563 0.531-2.406 0.531-1.063 0-1.969-0.344-2.719-1.031s-1.094-1.438-1.094-2.313c0-0.75 0.313-1.563 0.906-2.438s1.906-2 3.844-3.469c0.781 0.875 1.5 1.625 2.094 2.313z"></path> </g></svg></span>  Customer Service</p>
            <p className="message">Here's some of my experience</p>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
            <div className="card card_1">
              <h3 className="card_title "><strong>Manulife</strong> <span className=" text-slate-50"> - </span> Participant service representative</h3>
              <p className="card_text">Delivered bilingual (Spanish/English) customer support for high-stakes financial transactions and NYSE investments, maintaining accuracy and satisfaction in a fast-paced environment.</p>
              <p className="card_text2">Leveraged web and problem-solving skills to manage online resources, providing customer support and driving participant success towards their retirement goals through effective communication and issue resolution.</p>

              <button class="modal-trigger">More Details <svg className="arrow" width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill="none"></rect> <path d="M9.5 7L14.5 12L9.5 17" stroke="#FBF4F4" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></button>
            </div>

            <div className="card card_2">
              <h3 className="card_title"><strong>Blue Ocean</strong> <span className="text-slate-50"> - </span> Logistics Support Specialist</h3>
              <p className="card_text">Assisted Field Engineers processing hardware returns by generating RMAs through specialized Cisco tools. Ensuring adherence to SLAs and delivery protocols.
              </p>

              <p className="card_text2">This role provided invaluable experience in large-scale enterprise logistics and process optimization. I refined my communication and problem-solving skills while supporting both internal teams and external customers.
              </p>

              <button class="modal-trigger">More Details <svg className="arrow" width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill="none"></rect> <path d="M9.5 7L14.5 12L9.5 17" stroke="#FBF4F4" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></button>

            </div>

            <div className="card card_3">
              <h3 className="card_title"><strong>Freelancer</strong> <span className="text-slate-50"> - </span> Davedev.ca </h3>
              <p className="card_text">I am passionate about crafting exceptional digital experiences. As a web developer, I specialize in creating dynamic and engaging websites. I thrive on transforming concepts into reality using a versatile skill set including Next.js, Tailwind CSS, and WordPress.</p>
              <p className="card_text2">
                Currently expanding my expertise with Astro, I am dedicated to delivering innovative and tailored solutions that exceed client expectations.
              </p>
              <button class="modal-trigger">More Details <svg className="arrow" width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill="none"></rect> <path d="M9.5 7L14.5 12L9.5 17" stroke="#FBF4F4" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></button>
            </div>

            <div id="modal" class="modal">
              <div class="modal-content">
                <span class="close">&times;</span>
                <p id="modal-text"></p>
              </div>
            </div>
          </div>

        </div>

        <div className="flex justify-end mr-4 ">
          <Link className="font-semibold cursor-pointer text-lg link" href={'https://davedev.ca/'}>
            Visit my portfolio
          </Link>
        </div>
      </div>

    </main>
  );
}
