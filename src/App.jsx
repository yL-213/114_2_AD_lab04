import { useState } from 'react'
import './App.css'

const intro = [
  "Hi, I'm Liu — a graduate student major in cybersecurity at NTU.",
  "I'm originally from Taichung, Taiwan.",
  "In my spare time, I enjoy riding bikes and playing online games, which sparked my curiosity about how digital systems work.",
  "I'm currently taking this course to gain a solid understanding of basic network architecture and how systems interact with each other.",
  "My goal is to learn how to identify, respond to, and defend against real-world cybersecurity threats.",
  "I believe that understanding how attacks work is the first step to building better defenses.",
  "I'm excited to apply what I learn here to practical security challenges in the future.",
]

const courses = [
  { name: 'Basic Life Support and Prehospital Care' },
  { name: 'Cryptography' },
  { name: 'Practicum of Attacking and Defense of Network Security'},
  { name: 'Machine Learning' },
]

export default function App() {
  const [active, setActive] = useState(null)

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0f1117',
      color: '#e2e8f0',
      fontFamily: 'sans-serif',
      padding: '2rem',
    }}>
      {/* Header */}
      <header style={{
        maxWidth: 720,
        margin: '0 auto 3rem',
        borderBottom: '1px solid #2d3748',
        paddingBottom: '1.5rem'
      }}>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 700, color: '#a78bfa', margin: 0 }}>Liu</h1>
        <p style={{ color: '#94a3b8', marginTop: '0.4rem', fontSize: '1rem' }}>
          Cybersecurity Student · NTU EE
        </p>
      </header>

      <main style={{ maxWidth: 720, margin: '0 auto' }}>

        {/* About */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{
            fontSize: '1.1rem', color: '#7c3aed',
            textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem'
          }}>
            About Me
          </h2>
          {intro.map((line, i) => (
            <p key={i} style={{ lineHeight: 1.8, color: '#cbd5e1', marginBottom: '0.5rem' }}>
              {line}
            </p>
          ))}
        </section>

        {/* Courses */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{
            fontSize: '1.1rem', color: '#7c3aed',
            textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem'
          }}>
            This Semester's Courses
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {courses.map((course, i) => (
              <div
                key={i}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                style={{
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  background: active === i ? '#1e1b4b' : '#151820',
                  border: `1px solid ${active === i ? '#5b21b6' : '#2d3748'}`,
                  transition: 'all 0.2s',
                }}
              >
                <div style={{ color: '#e2e8f0', fontSize: '0.95rem' }}>{course.name}</div>
                <div style={{ color: '#64748b', fontSize: '0.8rem', marginTop: '0.2rem' }}>{course.code}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Goals */}
        <section style={{
          background: '#1a1f2e',
          border: '1px solid #2d3748',
          borderRadius: '12px',
          padding: '1.5rem',
        }}>
          <h2 style={{
            fontSize: '1.1rem', color: '#7c3aed',
            textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.8rem'
          }}>
            Course Goals
          </h2>
          <ul style={{ paddingLeft: '1.2rem', color: '#94a3b8', lineHeight: 2 }}>
            <li>Understand basic network architecture and how systems interact</li>
            <li>Learn how to identify and respond to cybersecurity threats</li>
            <li>Build practical skills in attack and defense techniques</li>
            <li>Apply security knowledge to real-world scenarios</li>
          </ul>
        </section>

      </main>

      <footer style={{
        maxWidth: 720, margin: '3rem auto 0',
        textAlign: 'center', color: '#4a5568', fontSize: '0.8rem'
      }}>
        Built with React · Deployed on GitHub Pages
      </footer>
    </div>
  )
}
