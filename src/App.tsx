/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Send, 
  Github, 
  Twitter, 
  Linkedin, 
  ArrowRight, 
  CheckCircle2, 
  Terminal, 
  Sparkles,
  Zap
} from 'lucide-react';

console.log('AI Studio Launchpad: App loaded');

// --- Types ---
interface ContactFormState {
  name: string;
  email: string;
  message: string;
}

type FormStatus = 'idle' | 'submitting' | 'sent' | 'error';

// --- Components ---

const Nav = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100" id="nav">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <Sparkles className="text-white w-5 h-5" />
          </div>
          <span className="font-bold text-xl tracking-tight text-gray-900">AI Studio</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#features" className="hover:text-black transition-colors">Features</a>
          <a href="#about" className="hover:text-black transition-colors">About</a>
          <a href="#contact" className="hover:text-black transition-colors">Contact</a>
        </div>
        <a 
          href="https://ai.studio" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-all flex items-center gap-2 group"
        >
          Get Started
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="pt-32 pb-20 px-4 overflow-hidden" id="hero">
    <div className="max-w-7xl mx-auto text-center relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-full max-w-4xl aspect-square bg-gradient-to-b from-indigo-50/50 to-transparent rounded-full blur-3xl" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-6">
          <Zap className="w-3 h-3" />
          The Future of Intelligence
        </span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-8 max-w-4xl mx-auto leading-[1.1]">
          Costruisci il Futuro con <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">AI Studio</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          Dalla prototipazione rapida alla produzione. Trasforma le tue idee in applicazioni AI avanzate con strumenti nativi del cloud.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="https://ai.studio/build" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-black text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-800 transition-all transform hover:-translate-y-0.5"
            id="cta-primary"
          >
            Prova su AI Studio
          </a>
          <a 
            href="#docs" 
            className="w-full sm:w-auto bg-white border border-gray-200 text-gray-600 px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
          >
            Guarda la Demo
          </a>
        </div>
      </motion.div>
      
      {/* Mock Interface */}
      <motion.div 
        className="mt-20 relative mx-auto max-w-5xl rounded-2xl border border-gray-200 bg-white shadow-2xl p-2 md:p-4"
        initial={{ opacity: 0, scale: 0.95, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        id="hero-image"
      >
        <div className="rounded-xl border border-gray-100 bg-gray-50 aspect-[16/9] flex flex-col overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 bg-white border-b border-gray-100">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-emerald-400" />
            </div>
            <div className="flex-1 text-center font-mono text-[10px] text-gray-400">ai-studio.app/playground</div>
          </div>
          <div className="flex-1 p-6 font-mono text-sm text-gray-700 flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <Terminal className="w-4 h-4 mt-1 text-indigo-600" />
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
                <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse" />
              </div>
            </div>
            <div className="ml-7 p-4 bg-indigo-50/50 rounded-lg border border-indigo-100">
              <p className="text-indigo-900">Analisi completata. Generazione modello in corso...</p>
            </div>
          </div>
        </div>
        {/* Floating cards */}
        <div className="absolute -right-4 top-1/4 hidden lg:block p-4 bg-white rounded-xl shadow-lg border border-gray-100 transform rotate-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
              <Zap className="text-indigo-600 w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-900">Performance</p>
              <p className="text-[10px] text-emerald-600 font-bold">+99.9% Reliable</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormState>({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="py-24 px-4 bg-gray-50" id="contact">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contattaci</h2>
          <p className="text-gray-600 font-medium">Hai un'idea? Parliamone. Siamo qui per aiutarti a scalare.</p>
        </div>

        <motion.div 
          className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8"
          layout
        >
          <AnimatePresence mode="wait">
            {status === 'sent' ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="text-emerald-600 w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Messaggio inviato!</h3>
                <p className="text-gray-600">Ti risponderemo entro 24 ore.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-indigo-600 font-bold hover:underline"
                >
                  Invia un altro messaggio
                </button>
              </motion.div>
            ) : (
              <motion.form 
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit} 
                className="space-y-6"
              >
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-gray-700">Nome</label>
                  <input
                    required
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent transition-all outline-none"
                    placeholder="Il tuo nome"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-gray-700">Email</label>
                  <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent transition-all outline-none"
                    placeholder="email@esempio.it"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-gray-700">Messaggio</label>
                  <textarea
                    required
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent transition-all outline-none resize-none"
                    placeholder="Come possiamo aiutarti?"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-black text-white py-4 rounded-xl text-lg font-bold hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                  id="submit-button"
                >
                  {status === 'submitting' ? (
                    'Invio in corso...'
                  ) : (
                    <>
                      Invia Messaggio
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 px-4 border-t border-gray-100" id="footer">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
          <Sparkles className="text-white w-4 h-4" />
        </div>
        <span className="font-bold text-lg tracking-tight text-gray-900">AI Studio</span>
      </div>
      
      <div className="flex items-center gap-6">
        <a href="#" className="text-gray-400 hover:text-black transition-colors">
          <Twitter className="w-5 h-5" />
        </a>
        <a href="#" className="text-gray-400 hover:text-black transition-colors">
          <Github className="w-5 h-5" />
        </a>
        <a href="#" className="text-gray-400 hover:text-black transition-colors">
          <Linkedin className="w-5 h-5" />
        </a>
      </div>
      
      <p className="text-sm text-gray-500 font-medium">
        &copy; {new Date().getFullYear()} AI Studio. All rights reserved.
      </p>
    </div>
  </footer>
);

export default function App() {
  useEffect(() => {
    console.log('AI Studio Launchpad: Component mounted');
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-indigo-100 selection:text-indigo-900 border-4 border-indigo-500/10" id="app-root">
      <Nav />
      <main>
        <Hero />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
