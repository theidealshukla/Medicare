import { Service } from '../data/mockData';

const colorMap: Record<string, string> = {
    primary: 'bg-primary-100 text-primary-600 group-hover:bg-primary-600 group-hover:text-white',
    secondary: 'bg-secondary-100 text-secondary-600 group-hover:bg-secondary-600 group-hover:text-white',
    green: 'bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white',
    purple: 'bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white',
    orange: 'bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white',
    red: 'bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white',
};

// Default fallback
const defaultColor = 'bg-gray-100 text-gray-600 group-hover:bg-gray-600 group-hover:text-white';

export const ServiceCard = (service: Service): string => {
    const colorClasses = colorMap[service.colorClass] || defaultColor;

    return `
    <div class="service-card bg-white p-8 rounded-2xl border border-gray-100 hover:border-primary-200 hover:shadow-xl transition-all duration-300 group">
        <div class="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors ${colorClasses}">
            <svg class="w-8 h-8 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${service.icon}"></path>
            </svg>
        </div>
        <h3 class="text-xl font-bold text-gray-900 mb-3">${service.title}</h3>
        <p class="text-gray-600 mb-4">${service.description}</p>
        <a href="/services.html" class="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors group-hover:translate-x-1 duration-300">
            Learn More
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
        </a>
    </div>
    `;
};
