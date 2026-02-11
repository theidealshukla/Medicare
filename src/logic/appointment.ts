// ... imports

// Add this to src/main.ts or import a handler
export function handleAppointmentForm() {
    const form = document.getElementById('appointment-form') as HTMLFormElement;
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Basic Client-side Validation
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // Simple check
        if (!data.firstName || !data.lastName || !data.email || !data.phone || !data.department || !data.date) {
            alert('Please fill in all required fields.');
            return;
        }

        // Email validation regex (basic)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email as string)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Phone validation (basic length check)
        if ((data.phone as string).length < 10) {
            alert('Please enter a valid phone number.');
            return;
        }

        // Simulate API call
        const submitBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
        const originalText = submitBtn.innerText;
        submitBtn.disabled = true;
        submitBtn.innerText = 'Booking...';

        setTimeout(() => {
            alert(`Appointment booked successfully for ${data.firstName} ${data.lastName} on ${data.date}!`);
            form.reset();
            submitBtn.disabled = false;
            submitBtn.innerText = originalText;
        }, 1500);
    });
}
