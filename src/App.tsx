import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Properties from './pages/Properties';
import PropertyDetails from './pages/PropertyDetails';
import PropertyManagement from './pages/PropertyManagement';
import PlanApprovals from './pages/PlanApprovals';
import LegalConsultation from './pages/LegalConsultation';
import ArchitecturalSupport from './pages/ArchitecturalSupport';
import Construction from './pages/Construction';
import CyberSecurity from './pages/CyberSecurity';
import Destinations from './pages/Destinations';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/plan-approvals" element={<PlanApprovals />} />
        <Route path="/services/property-management" element={<PropertyManagement />} />
        <Route path="/services/legal-consultation" element={<LegalConsultation />} />
        <Route path="/services/architectural-support" element={<ArchitecturalSupport />} />
        <Route path="/services/construction" element={<Construction />} />
        <Route path="/services/cyber-security" element={<CyberSecurity />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/properties/:slug" element={<PropertyDetails />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/contact" element={<Contact />} />
        {/* 404 */}
        <Route path="*" element={
          <div className="min-h-screen flex items-center justify-center bg-beige-50">
            <div className="text-center">
              <h1 className="font-serif text-6xl font-bold text-navy-900 mb-4">404</h1>
              <p className="text-navy-500 text-xl mb-6">Page not found</p>
              <a href="/" className="btn-primary">Go Home</a>
            </div>
          </div>
        } />
      </Routes>
    </Layout>
  );
};

export default App;
