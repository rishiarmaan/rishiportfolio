import React from "react";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section className="container" style={{ padding: "60px 0" }}>
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          background: "#0b0b0b",
          borderRadius: 16,
          padding: "40px 30px",
          color: "#e5e5e5",
          boxShadow: "0 0 25px rgba(0, 153, 255, 0.1)",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ fontSize: 28, color: "#00b4ff", marginBottom: 12 }}
        >
          📄 Resume
        </motion.h2>

        <p style={{ color: "#aaa", marginBottom: 25 }}>
          A quick glance at my journey and experience.
        </p>

        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 20,
            background: "rgba(255,255,255,0.03)",
            padding: "24px 20px",
            borderRadius: 12,
          }}
        >
          <div>
            <h3 style={{ fontSize: 24, color: "#00b4ff" }}>
              👨‍💻 Armaan Rishi
            </h3>

            <p style={{ marginTop: 6, color: "#ccc" }}>
              B.Tech CSE — Maharishi Markandeshwar University (2023–2027)
            </p>

            <p style={{ fontSize: 14, color: "#aaa" }}>
              📍 Ambala, Haryana
            </p>

            <p style={{ fontSize: 14, color: "#aaa" }}>
              ✉️ rishimmuarmaan@gmail.com | 📞 +91-9817411455
            </p>

            <p style={{ fontSize: 14, color: "#aaa" }}>
              🔗 github.com/rishiarmaan
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              background: "linear-gradient(135deg, #00b4ff44, #0b0b0b)",
              borderRadius: 12,
              padding: "14px 20px",
              border: "1px solid rgba(255,255,255,0.1)",
              maxWidth: 500,
            }}
          >
            <strong style={{ color: "#00b4ff" }}>
              Professional Summary:
            </strong>

            <p style={{ marginTop: 6, color: "#ccc" }}>
              Ambitious and detail-oriented engineering student with strong
              foundations in machine learning and Python. Hands-on experience
              building real-world systems like AI-powered emergency response,
              ASL recognition, and e-commerce platforms. Known for fast learning,
              structured problem-solving, and delivering high-quality solutions.
            </p>
          </motion.div>
        </motion.div>

        {/* Education */}
        <motion.div style={{ marginTop: 40 }}>
          <h4 style={{ color: "#00b4ff" }}>🎓 Education</h4>

          <p>
            <strong>B.Tech in Computer Science & Engineering</strong> <br />
            Maharishi Markandeshwar University (2023–2027) <br />
            CGPA: 7.5
          </p>

          <p>
            <strong>12th (CBSE)</strong> — 80% (2023)
          </p>

          <p>
            <strong>10th (CBSE)</strong> — 90% (2021)
          </p>
        </motion.div>

        {/* Skills */}
        <motion.div style={{ marginTop: 40 }}>
          <h4 style={{ color: "#00b4ff" }}>⚙️ Skills</h4>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {[
              "C",
              "Java",
              "Python",
              "Machine Learning",
              "Deep Learning",
              "NLP",
              "TensorFlow",
              "PyTorch",
              "Scikit-learn",
              "Pandas",
              "NumPy",
              "Streamlit",
              "DSA",
              "Prompt Engineering",
              "Problem Solving",
              "Teamwork",
            ].map((skill) => (
              <span
                key={skill}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  padding: "6px 12px",
                  borderRadius: 8,
                  fontSize: 13,
                  color: "#ccc",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div style={{ marginTop: 40 }}>
          <h4 style={{ color: "#00b4ff" }}>💼 Experience</h4>

          <p>
            <strong>Technical Intern – Internstudio</strong> (Summer 2024)
          </p>

          <ul>
            <li>Worked on Java programming and software fundamentals</li>
            <li>Implemented real-world problem-solving programs</li>
            <li>Strengthened OOP concepts</li>
            <li>Improved debugging and optimization skills</li>
          </ul>
        </motion.div>

        {/* Projects */}
        <motion.div style={{ marginTop: 40 }}>
          <h4 style={{ color: "#00b4ff" }}>🚀 Projects</h4>

          <ul>
            <li>
              <strong>Shestitch – E-Commerce Website</strong>
            </li>
            <li>
              <strong>ASL Gesture Recognition System</strong>
            </li>
            <li>
              <strong>AI Emergency Response System</strong>
            </li>
          </ul>
        </motion.div>

        {/* Achievements */}
        <motion.div style={{ marginTop: 40 }}>
          <h4 style={{ color: "#00b4ff" }}>🏆 Achievements</h4>

          <ul>
            <li>Smart India Hackathon 2025 – Internal Selection</li>
            <li>ComSoc HackX 2025 – Participation</li>
            <li>Python + DSA Bootcamp (Udemy)</li>
            <li>Selected for University Campaign (600+ students)</li>
            <li>Gold Medal – Cricket Tournament</li>
          </ul>
        </motion.div>

        {/* Links */}
        <motion.div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 30,
            marginTop: 40,
          }}
        >
          <a href="https://github.com/rishiarmaan" target="_blank" rel="noreferrer">
            💻 GitHub
          </a>

          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            💼 LinkedIn
          </a>
        </motion.div>

        {/* PDF */}
        <div style={{ marginTop: 40 }}>
          <iframe
            src="/resume.pdf"
            title="Resume"
            style={{ width: "100%", height: "600px", border: "none" }}
          />
        </div>

        <a
          href="/resume.pdf"
          download
          style={{
            display: "inline-block",
            marginTop: 20,
            background: "#00b4ff",
            padding: "10px 20px",
            borderRadius: 8,
            color: "#fff",
            textDecoration: "none",
          }}
        >
          ⬇️ Download Resume
        </a>
      </motion.div>
    </section>
  );
}