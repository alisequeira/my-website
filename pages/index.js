import Layout from '../components/Layout'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <div className="text-center text-5xl bg-text-bright">Project comming soon</div>
    </Layout>
  )
}
