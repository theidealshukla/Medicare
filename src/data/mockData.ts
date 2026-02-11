export interface Service {
    title: string;
    description: string;
    icon: string; // SVG path d attribute
    colorClass: string; // e.g., 'primary', 'secondary', 'green'
}

export const services: Service[] = [
    {
        title: "Cardiology",
        description: "Comprehensive heart care including diagnosis, treatment, and prevention of cardiovascular diseases.",
        icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
        colorClass: "primary"
    },
    {
        title: "Neurology",
        description: "Expert care for brain, spine, and nervous system disorders with advanced diagnostic tools.",
        icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
        colorClass: "secondary"
    },
    {
        title: "Laboratory",
        description: "State-of-the-art laboratory services with accurate diagnostics and quick results.",
        icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
        colorClass: "green" // Map to color codes in component
    },
    {
        title: "Ophthalmology",
        description: "Complete eye care services from routine checkups to complex surgical procedures.",
        icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
        colorClass: "purple"
    },
    {
        title: "Pediatrics",
        description: "Specialized healthcare for infants, children, and adolescents with gentle care.",
        icon: "M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z",
        colorClass: "orange"
    },
    {
        title: "Emergency Care",
        description: "24/7 emergency services with rapid response teams and critical care facilities.",
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
        colorClass: "red"
    }
];

export interface Doctor {
    name: string;
    specialty: string;
    experience: string;
    image: string;
}

export const doctors: Doctor[] = [
    {
        name: "Dr. Sarah Johnson",
        specialty: "Cardiologist",
        experience: "15+ years experience",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop"
    },
    {
        name: "Dr. Michael Chen",
        specialty: "Neurologist",
        experience: "12+ years experience",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop"
    },
    {
        name: "Dr. Emily Williams",
        specialty: "Pediatrician",
        experience: "10+ years experience",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop"
    },
    {
        name: "Dr. James Anderson",
        specialty: "Orthopedic Surgeon",
        experience: "18+ years experience",
        image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop"
    }
];
