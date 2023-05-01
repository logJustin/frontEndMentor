const dateInput = document.querySelector('#date');
const monthInput = document.querySelector('#month');
const yearInput = document.querySelector('#year');

// Add event listener to each input to trigger age update on any change
dateInput.addEventListener('input', updateAge);
monthInput.addEventListener('input', updateAge);
yearInput.addEventListener('input', updateAge);

function updateAge() {
    // Parse the input values as integers
    const day = parseInt(dateInput.value);
    const month = parseInt(monthInput.value) - 1; // Month is zero-indexed
    const year = parseInt(yearInput.value);

    // Validate inputs
    const validDate = day >= 1 && day <= 31;
    const validMonth = month >= 0 && month <= 11; // Month is zero-indexed
    const now = new Date();
    const validYear = year >= 1 && year <= now.getFullYear() && new Date(year, month, day) <= now;
    dateInput.classList.toggle('is-invalid', !validDate);
    monthInput.classList.toggle('is-invalid', !validMonth);
    yearInput.classList.toggle('is-invalid', !validYear);

    // Calculate age if inputs are valid
    if (validDate && validMonth && validYear) {
        const birthDate = new Date(year, month, day);
        const today = new Date();
        const ageInMilliseconds = today.getTime() - birthDate.getTime();
        const ageDate = new Date(ageInMilliseconds); // Convert milliseconds to Date object

        // Calculate age in years, months, and days
        const years = ageDate.getUTCFullYear() - 1970;
        const months = ageDate.getUTCMonth();
        const days = ageDate.getUTCDate() - 1; // Day is zero-indexed

        // Update HTML to display age
        document.querySelector('.yearHolder').innerHTML = years;
        document.querySelector('.monthHolder').innerHTML = months;
        document.querySelector('.dayHolder').innerHTML = days;
    }
}
