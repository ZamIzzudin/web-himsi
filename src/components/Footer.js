import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import api from '../utils/api'

import SubscribeModal from './SubsribeModal'

import Whatsapp from "../assets/img/Whatsapp.png";
import Gmail from "../assets/img/Gmail.png";
import "../styles/components/Footer.css";


const Footer = () => {
    const [dataFooter, setDataFooter] = useState()
    const [email, setEmail] = useState()
    const [socmed, setSocmed] = useState()
    const [tautan, setTautan] = useState()
    const [showModal, setShowModal] = useState(false)

    async function getDataFooter() {
        const data = await api.getFooter()
        const data2 = await api.getSocmed()
        const data3 = await api.getTautan()

        setDataFooter(data)
        setSocmed(data2)
        setTautan(data3)
    }

    async function handleSubscribe() {
        await api.subscribe(email)
        setShowModal(true)
    }

    useEffect(() => {
        getDataFooter()
    }, [])

    return (
        <footer class="footer-himsi">
        
                    <div class="grid-container">
                    
                    <div class="footer-subscribe">
                    <h1 class="item">Dapatkan Informasi Terbaru</h1>
                                        <p>Subscribe untuk mendapatkan info terbaru terkait HIMSI</p>
                                        <div class="input-subscribe">
                                            <input
                                                type="email"
                                                placeholder="Masukan Email anda "
                                                class="footer-input" />
                                            <button class= "footer-btn">Submit</button>
                                        </div>
                    </div>
                    
                    
                    <div class="footer-contact">
                        <h1 class="item">Contact us</h1>
                            <Row>
                                <Col class='contact-logo '>
                                    <a href={socmed?.Whatsapp}>
                                    <img src={Whatsapp} class="contact-logo" alt="Logo" />
                                    </a>
                                    <a href={`mailto:${socmed?.Gmail}`}>
                                    <img src={Gmail} class="contact-logo mx-5  " alt="Logo" />
                                    </a>
                                </Col>
                            </Row>
                    </div>
                    
                    
                    <div class="footer-alamat">
                    <h1 class="item">HIMSI</h1>
                                <p>Jakarta pusat</p>
                                <p>Email : iaian@gmail.com </p>
                                <p>Website : uinjkt.ac.id</p>
                    </div>  
                    
                    
                    <div class="footer-informasi">
                    <h1 class="item">Informasi</h1>
                                <ul class="pages">
                                    <li><Link to="/profile">Profile HIMSI</Link></li>
                                    <li><Link to="/article">Artikel terbaru</Link></li>
                                    <li><Link to="/event">Upcoming Events</Link></li>
                                    <li><Link to="/layanan-mahasiswa">FAQ</Link></li>
                                    <li><Link to="/struktur-anggota">Struktur Organisasi</Link></li>
                                </ul>
                    </div>
                    
                    
                    <div class="footer-tautan">
                    <h1 class="item">Tautan Penting</h1>
                            <ul class="pages">
                                    <li><Link to="/layanan-mahasiswa">Layanan Mahasiswa</Link></li>
                                    <li><Link to="/layanan-mahasiswa">Database Materi</Link></li>
                                    <li><Link to="/layanan-mahasiswa">Laporan PKL & KKN</Link></li>
                                    <li><Link to="/layanan-mahasiswa">Skripsi</Link></li>
                                    <li><Link to="/layanan-mahasiswa">E-Letter FST</Link></li>
                                </ul>
                    </div>
                </div>

                <div className='icon-socialmedia'>
                    <h1 className='name-socialmedia'>Social Media</h1>
                    <Row className='mb-2'>
                        <Col className='icon-sosmed d-flex justify-content-center flex-wrap'>
                            <a target="_blank" rel="noreferrer" href={socmed?.Instagram}>
                                <i class="fa-brands fa-instagram mx-4 mx-sm-3 pb-4"></i>
                            </a>
                            <a target="_blank" rel="noreferrer" href={socmed?.Facebook}>
                                <i class="fa-brands fa-facebook mx-4 mx-sm-3 pb-4"></i>
                            </a>
                            <a target="_blank" rel="noreferrer" href={socmed?.Twitter}>
                                <i class="fa-brands fa-twitter mx-4 mx-sm-3 pb-4"></i>
                            </a>
                            <a target="_blank" rel="noreferrer" href={socmed?.Discord}>
                                <i class="fa-brands fa-discord mx-4 mx-sm-3 pb-4"></i>
                            </a>
                            <a target="_blank" rel="noreferrer" href={socmed?.TikTok}>
                                <i class="fa-brands fa-tiktok mx-4 mx-sm-3 pb-4"></i>
                            </a>
                            <a target="_blank" rel="noreferrer" href={socmed?.Youtube}>
                                <i class="fa-brands fa-youtube mx-4 mx-sm-3 pb-4"></i>
                            </a>
                            <a target="_blank" rel="noreferrer" href={socmed?.Linkedin}>
                                <i class="fa-brands fa-linkedin mx-4 mx-sm-3 pb-4"></i>
                            </a>
                        </Col>
                    </Row>
                <p className="footer-copyright">Hak cipta © 2022-2023 HIMSI UIN Syarif Hidayatulah jakarta <br></br> Dibuat dan dikembangkan oleh MCD Internship</p>
            </div>
        </footer> 

    )
}

export default Footer;