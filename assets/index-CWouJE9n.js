(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(r){if(r.ep)return;r.ep=!0;const t=i(r);fetch(r.href,t)}})();const g=()=>`
    <nav id="navbar" class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm transition-all duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-20">
                <!-- Logo -->
                <a href="/" class="flex items-center space-x-2 group">
                    <div class="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                        </svg>
                    </div>
                    <span class="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">MediCare</span>
                </a>

                <!-- Desktop Navigation -->
                <div class="hidden lg:flex items-center space-x-8">
                    <a href="/" class="nav-link active">Home</a>
                    <a href="/about.html" class="nav-link">About Us</a>
                    <a href="/services.html" class="nav-link">Services</a>
                    <a href="/doctors.html" class="nav-link">Find a Doctor</a>
                    <a href="/contact.html" class="nav-link">Contact</a>
                </div>

                <!-- CTA Button -->
                <div class="hidden lg:flex items-center space-x-4">
                    <a href="tel:+1800123456" class="flex items-center text-gray-600 hover:text-primary-600 transition-colors group">
                        <div class="p-2 rounded-full bg-gray-50 group-hover:bg-primary-50 transition-colors">
                            <svg class="w-5 h-5 text-gray-600 group-hover:text-primary-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                            </svg>
                        </div>
                        <span class="ml-2 font-medium">1-800-123-456</span>
                    </a>
                    <a href="/appointment.html" class="btn-primary transform hover:-translate-y-0.5 transition-transform duration-200">
                        Book Appointment
                    </a>
                </div>

                <!-- Mobile Menu Button -->
                <button id="mobile-menu-btn" class="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors" aria-label="Toggle menu">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path id="menu-icon" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </div>

        <!-- Mobile Menu (Hidden by default) -->
        <div id="mobile-menu" class="hidden lg:hidden bg-white border-t absolute w-full shadow-lg">
            <div class="px-4 py-4 space-y-3">
                <a href="/" class="block py-2 text-primary-600 font-medium bg-primary-50 rounded-md px-3">Home</a>
                <a href="/about.html" class="block py-2 text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-md px-3 transition-colors">About Us</a>
                <a href="/services.html" class="block py-2 text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-md px-3 transition-colors">Services</a>
                <a href="/doctors.html" class="block py-2 text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-md px-3 transition-colors">Find a Doctor</a>
                <a href="/contact.html" class="block py-2 text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-md px-3 transition-colors">Contact</a>
                <div class="pt-4 border-t mt-2">
                    <a href="/appointment.html" class="btn-primary w-full text-center justify-center">Book Appointment</a>
                </div>
            </div>
        </div>
    </nav>
  `,v=()=>`
    <footer class="bg-gray-900 text-gray-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
                <!-- About -->
                <div class="space-y-6">
                    <a href="/" class="flex items-center space-x-2 mb-6 group">
                        <div class="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center group-hover:bg-primary-500 transition-colors">
                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                            </svg>
                        </div>
                        <span class="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">MediCare</span>
                    </a>
                    <p class="text-gray-400 leading-relaxed">Providing quality healthcare services for over 25 years. Your health is our priority. We are committed to excellence in patient care.</p>
                    <div class="flex space-x-4">
                        <a href="#" class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 text-gray-400 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                        </a>
                        <!-- Add other social icons similarly -->
                    </div>
                </div>

                <!-- Quick Links -->
                <div>
                    <h4 class="text-white font-semibold text-lg mb-6 border-b border-gray-700 pb-2 inline-block">Quick Links</h4>
                    <ul class="space-y-3">
                        <li><a href="/about.html" class="text-gray-400 hover:text-primary-400 transition-colors flex items-center"><span class="mr-2">›</span> About Us</a></li>
                        <li><a href="/services.html" class="text-gray-400 hover:text-primary-400 transition-colors flex items-center"><span class="mr-2">›</span> Our Services</a></li>
                        <li><a href="/doctors.html" class="text-gray-400 hover:text-primary-400 transition-colors flex items-center"><span class="mr-2">›</span> Find a Doctor</a></li>
                        <li><a href="/appointment.html" class="text-gray-400 hover:text-primary-400 transition-colors flex items-center"><span class="mr-2">›</span> Appointments</a></li>
                        <li><a href="/contact.html" class="text-gray-400 hover:text-primary-400 transition-colors flex items-center"><span class="mr-2">›</span> Contact Us</a></li>
                    </ul>
                </div>

                <!-- Services -->
                <div>
                    <h4 class="text-white font-semibold text-lg mb-6 border-b border-gray-700 pb-2 inline-block">Our Services</h4>
                    <ul class="space-y-3">
                        <li><a href="/services.html" class="text-gray-400 hover:text-primary-400 transition-colors flex items-center"><span class="mr-2">›</span> Cardiology</a></li>
                        <li><a href="/services.html" class="text-gray-400 hover:text-primary-400 transition-colors flex items-center"><span class="mr-2">›</span> Neurology</a></li>
                        <li><a href="/services.html" class="text-gray-400 hover:text-primary-400 transition-colors flex items-center"><span class="mr-2">›</span> Pediatrics</a></li>
                        <li><a href="/services.html" class="text-gray-400 hover:text-primary-400 transition-colors flex items-center"><span class="mr-2">›</span> Orthopedics</a></li>
                        <li><a href="/services.html" class="text-gray-400 hover:text-primary-400 transition-colors flex items-center"><span class="mr-2">›</span> Emergency Care</a></li>
                    </ul>
                </div>

                <!-- Contact -->
                <div>
                    <h4 class="text-white font-semibold text-lg mb-6 border-b border-gray-700 pb-2 inline-block">Contact Info</h4>
                    <ul class="space-y-4">
                        <li class="flex items-start space-x-3 group">
                            <div class="mt-1 p-1 bg-gray-800 rounded group-hover:bg-primary-900 transition-colors">
                                <svg class="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                            </div>
                            <span class="text-gray-400">123 Medical Center Drive<br>New York, NY 10001</span>
                        </li>
                        <li class="flex items-center space-x-3 group">
                             <div class="p-1 bg-gray-800 rounded group-hover:bg-primary-900 transition-colors">
                                <svg class="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                </svg>
                            </div>
                            <span class="text-gray-400">1-800-123-456</span>
                        </li>
                         <li class="flex items-center space-x-3 group">
                             <div class="p-1 bg-gray-800 rounded group-hover:bg-primary-900 transition-colors">
                                <svg class="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                            <span class="text-gray-400">info@medicare.com</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
        <!-- Copyright -->
        <div class="border-t border-gray-800 bg-gray-950">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div class="flex flex-col md:flex-row justify-between items-center">
                    <p class="text-gray-500 text-sm hover:text-gray-400 transition-colors">&copy; 2026 MediCare Hospital. All rights reserved.</p>
                    <div class="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" class="text-gray-500 hover:text-primary-400 text-sm transition-colors">Privacy Policy</a>
                        <a href="#" class="text-gray-500 hover:text-primary-400 text-sm transition-colors">Terms of Service</a>
                        <a href="#" class="text-gray-500 hover:text-primary-400 text-sm transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  `,c=[{title:"Cardiology",description:"Comprehensive heart care including diagnosis, treatment, and prevention of cardiovascular diseases.",icon:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",colorClass:"primary"},{title:"Neurology",description:"Expert care for brain, spine, and nervous system disorders with advanced diagnostic tools.",icon:"M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",colorClass:"secondary"},{title:"Laboratory",description:"State-of-the-art laboratory services with accurate diagnostics and quick results.",icon:"M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",colorClass:"green"},{title:"Ophthalmology",description:"Complete eye care services from routine checkups to complex surgical procedures.",icon:"M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",colorClass:"purple"},{title:"Pediatrics",description:"Specialized healthcare for infants, children, and adolescents with gentle care.",icon:"M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z",colorClass:"orange"},{title:"Emergency Care",description:"24/7 emergency services with rapid response teams and critical care facilities.",icon:"M13 10V3L4 14h7v7l9-11h-7z",colorClass:"red"}],d=[{name:"Dr. Sarah Johnson",specialty:"Cardiologist",experience:"15+ years experience",image:"https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop"},{name:"Dr. Michael Chen",specialty:"Neurologist",experience:"12+ years experience",image:"https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop"},{name:"Dr. Emily Williams",specialty:"Pediatrician",experience:"10+ years experience",image:"https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop"},{name:"Dr. James Anderson",specialty:"Orthopedic Surgeon",experience:"18+ years experience",image:"https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop"}],u={primary:"bg-primary-100 text-primary-600 group-hover:bg-primary-600 group-hover:text-white",secondary:"bg-secondary-100 text-secondary-600 group-hover:bg-secondary-600 group-hover:text-white",green:"bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white",purple:"bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white",orange:"bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white",red:"bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white"},x="bg-gray-100 text-gray-600 group-hover:bg-gray-600 group-hover:text-white",p=e=>`
    <div class="service-card bg-white p-8 rounded-2xl border border-gray-100 hover:border-primary-200 hover:shadow-xl transition-all duration-300 group">
        <div class="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors ${u[e.colorClass]||x}">
            <svg class="w-8 h-8 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${e.icon}"></path>
            </svg>
        </div>
        <h3 class="text-xl font-bold text-gray-900 mb-3">${e.title}</h3>
        <p class="text-gray-600 mb-4">${e.description}</p>
        <a href="/services.html" class="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors group-hover:translate-x-1 duration-300">
            Learn More
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
        </a>
    </div>
    `,h=e=>`
    <div class="doctor-card bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
        <div class="relative overflow-hidden">
            <img src="${e.image}" alt="${e.name}" class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500">
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <div class="flex space-x-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <a href="#" class="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:bg-primary-600 hover:text-white transition-colors shadow-lg">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                    </a>
                    <a href="#" class="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:bg-primary-600 hover:text-white transition-colors shadow-lg">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                    </a>
                </div>
            </div>
        </div>
        <div class="p-6 text-center">
            <h3 class="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors">${e.name}</h3>
            <p class="text-primary-600 text-sm font-medium mb-1">${e.specialty}</p>
            <p class="text-gray-500 text-sm">${e.experience}</p>
        </div>
    </div>
    `;function f(){const e=document.getElementById("appointment-form");e&&e.addEventListener("submit",o=>{o.preventDefault();const i=new FormData(e),s=Object.fromEntries(i.entries());if(!s.firstName||!s.lastName||!s.email||!s.phone||!s.department||!s.date){alert("Please fill in all required fields.");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.email)){alert("Please enter a valid email address.");return}if(s.phone.length<10){alert("Please enter a valid phone number.");return}const t=e.querySelector('button[type="submit"]'),a=t.innerText;t.disabled=!0,t.innerText="Booking...",setTimeout(()=>{alert(`Appointment booked successfully for ${s.firstName} ${s.lastName} on ${s.date}!`),e.reset(),t.disabled=!1,t.innerText=a},1500)})}document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("header-location");if(e){e.innerHTML=g();const a=document.getElementById("mobile-menu-btn"),n=document.getElementById("mobile-menu");a&&n&&a.addEventListener("click",()=>{n.classList.contains("hidden")?n.classList.remove("hidden"):n.classList.add("hidden")});const m=window.location.pathname;document.querySelectorAll(".nav-link").forEach(l=>{l.getAttribute("href")===m?l.classList.add("active"):l.classList.remove("active")})}const o=document.getElementById("footer-location");o&&(o.innerHTML=v());const i=document.getElementById("services-grid");i&&(i.innerHTML=c.map(a=>p(a)).join(""));const s=document.getElementById("doctors-grid");s&&(s.innerHTML=d.slice(0,4).map(a=>h(a)).join(""));const r=document.getElementById("all-services-grid");r&&(r.innerHTML=c.map(a=>p(a)).join(""));const t=document.getElementById("all-doctors-grid");t&&(t.innerHTML=d.map(a=>h(a)).join("")),f()});
