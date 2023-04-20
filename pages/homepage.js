
import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/homepage.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Carousel from '../components/carousels'
import NavBar from '@/components/head';
import {BsFillPersonFill, BsPlayFill} from 'react-icons/bs'
import {AiFillHeart, AiFillHome} from 'react-icons/ai'
import FourthCarousel from '@/components/fourthcarousel';
import FirstCarousel from '@/components/firstcarousel';



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    
      <Head>
        <title>We Skill You</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Container fluid>
      <section className={styles.sect1}>
        <div className={styles.sect2}>
          <div className={styles.sect3}>
            <div className={styles.sect4}>
          <h1>Popular courses on our platform</h1>
          <h6>see more</h6>

          <FirstCarousel/>
          </div>

          </div>
          </div>
          </section>

          <section className={styles.sect1}>
        <div className={styles.sect2}>
          <div className={styles.sect3}>

          <div className={styles.sect4}>
          <h1>Most registered courses in a month</h1>
          <h6>see more</h6>

       
       <Carousel />
          </div>
          </div>
          </div>
          </section>

          <section className={styles.sect1}>
        <div className={styles.sect2}>
          <div className={styles.sect3}>
          <div className={styles.sect4}>
          <h1>Our top popular teacher this month</h1>
          <h6>see more</h6>
          <div className={styles.sectImg3}>
          <div className={`${styles.teach}`}>
          <img className={styles.bgImg} src='/bg.png' alt='bg-img' />
          <img className={styles.teacher} src='/teacher2.png' alt='Female Teacher' />
          <h5>Kolapo KP</h5>
          <p>Product Designer</p>
          </div>
         <div className={styles.teach}>
         <img className={styles.bgImg} src='/bg.png' alt='bg-img' />
         <img className={styles.teacher} src='/teacher1.png' alt='Male Teacher' />
         <h5>Akin Praise</h5>
          <p>Programmer</p>
         </div>
          </div>
          </div>
          </div>
          </div>
      </section>

      <section className={styles.sect21}>
        <div className={styles.sect22}>
          <div className={styles.sect23}>
          <h1>Try free trial to enhance your creative journey!</h1>
          <button className={styles.get}>Get Started</button>
          </div>
        </div>
      </section>

      <section className={styles.sect1}>
        <div className={styles.sect2}>
          <div className={styles.sect3}>

          <div className={styles.sect4}>
          <h1>Continue to watch previous class</h1>
          <h6>see more</h6>

          <FourthCarousel/>
          </div>
          </div>
          </div>
          </section>

      <section className={styles.sect41}>
        <div className={styles.sect42}>
          <div className={styles.sect43}>
          <div id={styles.home}><AiFillHome/></div>
          <div className={styles.fill}><BsPlayFill/></div>
          <div className={styles.fill}><AiFillHeart/></div>
          <div className={styles.fill}><BsFillPersonFill/></div>

          </div>
        </div>
      </section>
      </Container>
    </>
  )
}