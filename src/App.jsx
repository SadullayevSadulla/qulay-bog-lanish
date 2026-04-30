import IMG from  "../public/avatar.png"

import {
  FaPhoneAlt,
  FaTelegramPlane,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaGlobe,
  FaMapMarkerAlt,
  FaCommentDots,
} from 'react-icons/fa'
import { HiMiniBanknotes } from 'react-icons/hi2'

const profile = {
  name: "Sadulla Sadullayev",
  location: "Xorazm, Urganch",
  role: "Frontend Developer / Web dasturchi",
  bio: "Qulay bog'lanish uchun barcha havolalar bitta joyda.",
  avatar: IMG,
}

const links = [
  {
    title: 'Telefon',
    href: 'tel:+998 93 663 07 85',
    icon: <FaPhoneAlt />,
    tone: 'green',
  },
  {
    title: 'SMS yuborish',
    href: 'sms:+998 93 663 07 85',
    icon: <FaCommentDots />,
    tone: 'blue',
  },
  {
    title: 'Telegram',
    href: 'https://t.me/sadullayev0627',
    icon: <FaTelegramPlane />,
    tone: 'sky',
  },
  {
    title: 'Instagram',
    href: 'https://www.instagram.com/sadullayev.0627/',
    icon: <FaInstagram />,
    tone: 'pink',
  },
]

export default function App() {
  return (
    <main className="page">
      <div className="bg-orb orb-left" />
      <div className="bg-orb orb-right" />
      <div className="stars stars-1" />
      <div className="stars stars-2" />

      <section className="wrapper">
        <div className="card profile-card">
          <div className="avatar-ring">
            <img src={profile.avatar} alt={profile.name} className="avatar" />
          </div>

          <h1>{profile.name}</h1>

          <div className="location-pill">
            <FaMapMarkerAlt />
            <span>{profile.location}</span>
          </div>

          <p className="role">{profile.role}</p>
          <p className="bio">{profile.bio}</p>
        </div>

        <div className="links-grid">
          {links.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              className="card link-card"
            >
              <div className={`icon-box ${item.tone}`}>{item.icon}</div>
              <div className="link-content">
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
              <span className="arrow">→</span>
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}
