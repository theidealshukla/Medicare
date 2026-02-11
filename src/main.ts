import './style.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { services, doctors } from './data/mockData';
import { ServiceCard } from './components/ServiceCard';
import { DoctorCard } from './components/DoctorCard';
import { handleAppointmentForm } from './logic/appointment';

document.addEventListener('DOMContentLoaded', () => {
    // Header Injection
    const headerEl = document.getElementById('header-location');
    if (headerEl) {
        headerEl.innerHTML = Header();

        // Initialize Mobile Menu
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');

        if (btn && menu) {
            btn.addEventListener('click', () => {
                const isHidden = menu.classList.contains('hidden');
                if (isHidden) {
                    menu.classList.remove('hidden');
                } else {
                    menu.classList.add('hidden');
                }
            });
        }

        // Highlight Active Link based on path
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Footer Injection
    const footerEl = document.getElementById('footer-location');
    if (footerEl) {
        footerEl.innerHTML = Footer();
    }

    // Render Services (Home Page - limit 6 if we had more, current mock has 6)
    const servicesGrid = document.getElementById('services-grid');
    if (servicesGrid) {
        servicesGrid.innerHTML = services.map(service => ServiceCard(service)).join('');
    }

    // Render Doctors (Home Page - limit 4)
    const doctorsGrid = document.getElementById('doctors-grid');
    if (doctorsGrid) {
        doctorsGrid.innerHTML = doctors.slice(0, 4).map(doctor => DoctorCard(doctor)).join('');
    }

    // Render All Services (Services Page)
    const allServicesGrid = document.getElementById('all-services-grid');
    if (allServicesGrid) {
        allServicesGrid.innerHTML = services.map(service => ServiceCard(service)).join('');
    }

    // Render All Doctors (Doctors Page)
    const allDoctorsGrid = document.getElementById('all-doctors-grid');
    if (allDoctorsGrid) {
        allDoctorsGrid.innerHTML = doctors.map(doctor => DoctorCard(doctor)).join('');
    }

    // Appointment Form Logic
    handleAppointmentForm();
});
