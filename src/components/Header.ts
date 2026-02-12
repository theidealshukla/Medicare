export const Header = (): string => {
    return `
    <nav id="navbar" class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm transition-all duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-20">
                <!-- Logo -->
                <a href="./index.html" class="flex items-center space-x-2 group">
                    <div class="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                        </svg>
                    </div>
                    <span class="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">MediCare</span>
                </a>

                <!-- Desktop Navigation -->
                <div class="hidden lg:flex items-center space-x-8">
                    <a href="./index.html" class="nav-link active">Home</a>
                    <a href="./about.html" class="nav-link">About Us</a>
                    <a href="./services.html" class="nav-link">Services</a>
                    <a href="./doctors.html" class="nav-link">Find a Doctor</a>
                    <a href="./contact.html" class="nav-link">Contact</a>
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
                    <a href="./appointment.html" class="btn-primary transform hover:-translate-y-0.5 transition-transform duration-200">
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
                <a href="./index.html" class="block py-2 text-primary-600 font-medium bg-primary-50 rounded-md px-3">Home</a>
                <a href="./about.html" class="block py-2 text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-md px-3 transition-colors">About Us</a>
                <a href="./services.html" class="block py-2 text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-md px-3 transition-colors">Services</a>
                <a href="./doctors.html" class="block py-2 text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-md px-3 transition-colors">Find a Doctor</a>
                <a href="./contact.html" class="block py-2 text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-md px-3 transition-colors">Contact</a>
                <div class="pt-4 border-t mt-2">
                    <a href="./appointment.html" class="btn-primary w-full text-center justify-center">Book Appointment</a>
                </div>
            </div>
        </div>
    </nav>
  `;
};
