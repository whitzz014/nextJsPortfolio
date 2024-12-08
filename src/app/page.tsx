"use client";
import Image from "next/image";
import brockWhitson from './assets/brockWhitson.jpg';
import baseballImage from './assets/ckbarn.jpg';
import fastball from './assets/fastaball.png';
import homepage from './assets/homepage.png';
import profile from './assets/profile.png';
import asta from './assets/asta.png';
import asta2 from './assets/asta2.png';
import htmlImage from './assets/htmlLogo.png';
import java from './assets/javaLogo.png';
import swift from './assets/swift.png';
import php from './assets/php.png';
import nextjs from './assets/nextjs.png';
import unity from './assets/unity.png';
import angular from './assets/angular.png';
import cSharp from './assets/cSharp.png';


import useEmblaCarousel from "embla-carousel-react";
import iTrack from "./assets/iTrack.png";
import { useEffect, useState } from "react";
import emailjs from "emailjs-com"; 

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

    useEffect(() => {
        if (emblaApi) {
            console.log(emblaApi.slideNodes());
        }
    }, [emblaApi]);

    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });
    const [status, setStatus] = useState("");
  
    // Function to handle form input changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault(); // Prevent page reload
      setStatus("Sending...");
    
      const templateParams = {
        from_name: formData.name,
        reply_to: formData.email,
        message: formData.message,
        to_email: "brocko.whitson@gmail.com", 
    };
    
      emailjs
        .send("service_laemygd", "template_sk2zp8r", templateParams, "udi4SquQEEMHLwNpO")
        .then(() => {
          setStatus("Email sent successfully!");
        })
        .catch((error) => {
          console.error("Error sending email:", error);
          setStatus("Error sending email. Please try again later.");
        });
    
      setFormData({ name: "", email: "", message: "" });
    };
  

  
    return (
      <main className="project" id="project">
        
        
        <div className="firstPage">
          <div className="nameplace">
            <h1 className="titleName">Brock <br />Whitson</h1>
            <p>Software Developer</p>
           
           </div>
          <Image className="homePageImg" alt="Brock Whitson" src={brockWhitson} />
        </div>

 
       
      <div className="about" id="about" style={{marginTop: '10%'}}>
      <h2 className="aboutTitle" style={{position: 'absolute', left:'0'}}>About Me</h2>

      <p className="aboutMe  float-left"  style={{marginLeft: '5%', position: 'absolute', 
        top: '50%', width: '45%'
      }}>
        I&apos;m Brock Whitson. I&apos;m about to graduate from St. Clair College's
        Mobile Application Development program. I&apos;m also a professional
        baseball player. I have a solid background in Java, Swift, PHP, etc.
      </p> 
      <div className="floatImage" 
      style={{position: 'absolute', width: '40%',
        top: '10%', right: '5%',
      }}>
      <Image
            src={baseballImage}
            alt="Brock Whitson Pitching"
            
          /></div>

     
       
      
      </div>

      <div className="skills" id="skills" style={{marginTop: '40%'}}>
          
          

            <div className="skillBox"
            style={{
              margin: '0 auto',
              display: "flex",
              position: 'relative',
              width: '70%',
              justifyContent: 'space-evenly',
            }}>
              <div 
              style={{width: '200px',
                 height: '200px', 
                 border: '2px white solid', 
                 fontSize: '20%', 
                 borderRadius: '50px', 
                 textAlign: 'center'}}>
                
                <h2>HTML & CSS</h2>
                <a href="https://www.w3schools.com/html/html_css.asp"><Image alt="html and css" src={htmlImage} width={125} style={{margin: '0 auto'}}></Image></a>
              </div>

              <div  
              style={{width: '200px',
                 height: '200px', 
                 border: '2px white solid', 
                 fontSize: '20%', 
                 borderRadius: '50px', 
                 textAlign: 'center',
                 }}>
                
                <h2>Swift</h2>
                <a href="https://www.swift.org/documentation/"><Image alt="Swift (ios)" src={swift} width={125} style={{margin: '0 auto'}}></Image></a>
              </div>

              <div  
              style={{width: '200px',
                 height: '200px', 
                 border: '2px white solid', 
                 fontSize: '20%', 
                 borderRadius: '50px', 
                 textAlign: 'center',
                 }}>
                
                <h2>Java</h2>
               <a href="https://docs.oracle.com/en/java/"><Image alt="Java" src={java} width={125} style={{margin: '0 auto'}}></Image></a>
              </div>

              <div  
              style={{width: '200px',
                 height: '200px', 
                 border: '2px white solid', 
                 fontSize: '20%', 
                 borderRadius: '50px', 
                 textAlign: 'center',
                 }}>
                
                <h2>PHP</h2>
                <a href="https://www.php.net/"><Image alt="PHP" src={php} width={125} style={{margin: '0 auto', marginTop: '10%'}}></Image></a>
              </div>

             
            </div>
              <h2 style={{textAlign: 'center'}}>Skills</h2>
            {/* Second Row */}
            <div className="skillBox"
            style={{
              margin: '0 auto',
              display: "flex",
              position: 'relative',
              width: '70%',
              justifyContent: 'space-evenly',
              
            }}>
              <div 
              style={{
                 width: '200px',
                 height: '200px', 
                 border: '2px white solid', 
                 fontSize: '20%', 
                 borderRadius: '50px', 
                 textAlign: 'center',
                 }}>
                
                <h2>C#</h2>
                <a href="https://dotnet.microsoft.com/en-us/languages/csharp"><Image alt="c#" src={cSharp} width={125} style={{margin: '0 auto'}}></Image></a>
              </div>

              <div  
              style={{width: '200px',
                 height: '200px', 
                 border: '2px white solid', 
                 fontSize: '20%', 
                 borderRadius: '50px', 
                 textAlign: 'center',
                 }}>
                
                <h2>Unity</h2>
                <a href="https://unity.com/"><Image alt="Unity" src={unity} width={125} style={{margin: '0 auto', marginTop: '20%'}}></Image></a>
              </div>

              <div  
              style={{width: '200px',
                 height: '200px', 
                 border: '2px white solid', 
                 fontSize: '20%', 
                 borderRadius: '50px', 
                 textAlign: 'center',
                 }}>
                
                <h2>Angular</h2>
                <a href="https://angular.dev/"><Image alt="angular" src={angular} width={125} style={{margin: '0 auto', marginTop: '20%'}}></Image></a>
              </div>
              <div  
              style={{width: '200px',
                 height: '200px', 
                 border: '2px white solid', 
                 fontSize: '20%', 
                 borderRadius: '50px', 
                 textAlign: 'center',
                 }}>
                
                <h2>Next.js</h2>
                <a href="https://nextjs.org/"><Image alt="NextJs" src={nextjs} width={125} style={{margin: '0 auto'}}></Image></a>
              </div>
          
            </div>



        </div>
  
        <div className="projects" id="projects" style={{position: 'relative'}}>

          <h2>Projects</h2>
          <h4 style={{
            fontSize: '180%',
            color: 'white',
            position: 'absolute',
            top: '17%',
          }
          }>(Swipe)</h4>
          <div className="embla text-[white]" ref={emblaRef}>
            <div className="embla__container">
              <div className="embla__slide items-center">
                <Image alt="itrack app" src={iTrack} width={800} style={{margin: "0 auto"}} />
                <h3><a href="https://github.com/whitzz014/iTrack">iTrack</a></h3>
              </div>
              
              <div className="embla__slide" style={{display: 'flex', position: 'relative'}}>
                <Image alt="BW pitching academy hompage" src={homepage}  style={{margin: "0 auto", width: 'auto',height: '500px'}} />
                <Image alt="BW pitching academy hompage" src={fastball}  style={{margin: "0 auto", width: 'auto',height: '500px'}} />
                <Image alt="BW pitching academy hompage" src={profile}  style={{margin: "0 auto", width: 'auto',height: '500px'}} />
                <h3 style={{bottom: '5%', position: 'absolute', textAlign: 'center', width: '100%'}}><a href="https://github.com/whitzz014/WhitsonPitchingAcademy">Whitson Pitching Academy (Android App)</a></h3>
              </div>
              
              <div className="embla__slide items-center">
                <div className="astaContainer" style={{height: '500px', width:'600px', margin: "0 auto"}}>
                <Image alt="asta website demo" src={asta} />
                <Image alt="asta website demo" src={asta2}/>
                </div>
                <h3 style={{bottom: '0%', position: 'absolute', textAlign: 'center', width: '100%'}}><a href="https://github.com/whitzz014/Asta">Asta (Work in progress)</a></h3>
              </div>
              
            </div>
          </div>
        </div>
  
        <div className="contact" id="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <br />
        <label htmlFor="email">Your Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <br />

        <label htmlFor="message">Your Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
        ></textarea>
        <br />

        <button type="submit">Send Message</button>
        
      </form>

      <p>{status}</p>
    </div>
      </main>
    );
  }
