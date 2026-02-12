export const Footer = (): string => {
    return `
    <footer class="bg-gray-900 text-gray-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
                <!-- About -->
                <div class="space-y-6">
                    <a href="./index.html" class="flex items-center space-x-2 mb-6 group">
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
                        <li><a href="./about.html" class="text-gray-400 hover:text-primary-400 transition-colors flex items-center"><span class="mr-2">›</span> About Us</a></li>
                        <li><a href="./services.html" class="text-gray-400 hover:text-primary-400 transition-colors flex items-center"><span class="mr-2">›</span> Our Services</a></li>
                        <li><a href="./doctors.html" class="text-gray-400 hover:text-primary-400 transition-colors flex items-center"><span class="mr-2">›</span> Find a Doctor</a></li>
                        <li><a href="./appointment.html" class="text-gray-400 hover:text-primary-400 transition-colors flex items-center"><span class="mr-2">›</span> Appointments</a></li>
                        <li><a href="./contact.html" class="text-gray-400 hover:text-primary-400 transition-colors flex items-center"><span class="mr-2">›</span> Contact Us</a></li>
                    </ul>
                </div>

                <!-- Services -->
                <div>
                    <h4 class="text-white font-semibold text-lg mb-6 border-b border-gray-700 pb-2 inline-block">Our Services</h4>
                    <ul class="space-y-3">
                        <li><a href="./services.html" class="text-gray-400 hover:text-primary-400 transition-colors flex items-center"><span class="mr-2">›</span> Cardiology</a></li>
                        <li><a href="./services.html" class="text-gray-400 hover:text-primary-400 transition-colors flex items-center"><span class="mr-2">›</span> Neurology</a></li>
                        <li><a href="./services.html" class="text-gray-400 hover:text-primary-400 transition-colors flex items-center"><span class="mr-2">›</span> Pediatrics</a></li>
                        <li><a href="./services.html" class="text-gray-400 hover:text-primary-400 transition-colors flex items-center"><span class="mr-2">›</span> Orthopedics</a></li>
                        <li><a href="./services.html" class="text-gray-400 hover:text-primary-400 transition-colors flex items-center"><span class="mr-2">›</span> Emergency Care</a></li>
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
  `;
};
