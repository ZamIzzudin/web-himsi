import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect } from 'react'

import Hero from "../components/Hero";
import LatestEvents from "../components/LatestEvents";
import Partner from "../components/Partner";
import SocialMedia from "../components/SocialMedia";
import EventSlider from "../components/EventSlider";

import '../styles/pages/Home.css'

const Home = () => {
  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home">
      <Hero />

      <Container>
        <div className="header upcoming">
          <h3 className="title">Upcoming Events</h3>
          <Button className='btn-header'>
            <Link to={`/event`}>View More</Link>
          </Button>
        </div>
        <EventSlider />

        <div className="header latest">
          <h3 className="title">Latest Event</h3>
          <Button className='btn-header'>
            <Link to={`/event`}>View More</Link>
          </Button>
        </div>
        <LatestEvents />

        <Partner />

        <SocialMedia />

      </Container>
    </div>


  )
}

export default Home