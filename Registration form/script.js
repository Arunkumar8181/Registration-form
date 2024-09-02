document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for validation

    // Clear previous errors
    clearErrors();

    // Variables for input values
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let studentId = document.getElementById('studentId').value;
    let dob = document.getElementById('dob').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    let bookType = document.getElementById('bookType').value;
    let programmingLanguage = document.getElementById('programmingLanguage').value;
    let language = document.getElementById('language').value;
    let gender = document.getElementById('gender').value;
    let department = document.getElementById('department').value;
    
    // Validation flags
    let isValid = true;

    // Add your validation logic here
    // Example for name validation
    if (!/^[A-Za-z][A-Za-z\s]*$/.test(name)) {
        document.getElementById('nameError').textContent = 'Name must start with an alphabet.';
        isValid = false;
    }

    // Add similar validation checks for other fields

    if (isValid) {
        alert('Registration successful!');
        // Submit form if you want to send data to a server or perform further actions
        // this.submit();
    }
});

// Function to clear error messages
function clearErrors() {
    let errorElements = document.querySelectorAll('.error');
    errorElements.forEach(function(element) {
        element.textContent = '';
    });
}

// Show/hide programming languages based on book type
document.getElementById('bookType').addEventListener('change', function() {
    const programmingLanguagesDiv = document.getElementById('programmingLanguages');
    if (this.value === 'programming') {
        programmingLanguagesDiv.style.display = 'block';
    } else {
        programmingLanguagesDiv.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const authors = {
        tamil: ["Subha", "Thamarai", "Thangam Krishnamurthy", "Vaasanthi", "Vairamuthu", "Vannadhasan", "Vikraman", "Vittal Rao"],
        kannada: ["Triveni", "Tejaswi", "H S Shivaprakash", "Kavery Nambisan", "Jayant Kaikini", "M.S. Sathyu", "P.T. Narasimhachar", "UR Ananthamurthy"],
        telugu: ["Adivi Bapiraju", "Ajjada Adibhatla Narayana Dasu", "Anjaneyulu Kundurti", "Annamacharya", "Gurajada Apparao", "Asavadi Prakasarao", "Balagangadhara Tilak Devarakonda", "Bhandaru Acchamamba"],
        malayalam: ["Arnos Paathiri", "Cherusseri Namboo", "Irayimman Thampi", "Kattakayam Cherian Mappillai", "Kerala Varma Valiya Koyithampuran", "K. C. Kesava Pillai", "Kunchan Nambiar", "Kumaran Asan"],
        french: ["Voltaire", "Victor Hugo", "Jules Verne", "Molière", "Honoré de Balzac", "Jean-Paul Sartre", "Antoine de Saint-Exupéry", "Denis Diderot"],
        spanish: ["Roberto Arlt", "Adolfo Bioy Casares", "Jorge Luis Borges", "Sergio Chejfec", "Julio Cortázar", "Esteban Echeverría", "Juana Manuela Gorriti", "José Hernández"]
    };

    const languageSelect = document.getElementById('bookLanguage');
    const authorSelect = document.getElementById('author');

    languageSelect.addEventListener('change', function() {
        const selectedLanguage = this.value;
        // Clear the author dropdown
        authorSelect.innerHTML = '<option value="">Select an author</option>';
        
        // Add authors based on selected language
        if (authors[selectedLanguage]) {
            authors[selectedLanguage].forEach(function(author) {
                const option = document.createElement('option');
                option.value = author;
                option.textContent = author;
                authorSelect.appendChild(option);
            });
        }
    });
});

// JavaScript to dynamically update book names based on selected book type
document.getElementById("bookType").addEventListener("change", function() {
    var bookType = this.value;
    var bookNamesContainer = document.getElementById("bookNamesContainer");
    var bookNamesSelect = document.getElementById("bookNames");

    // Clear previous options
    bookNamesSelect.innerHTML = "";

    // Define book names for each type
    var books = {
        "magazine": ["National Geographic", "Time", "Reader's Digest"],
        "cooking": ["The Joy of Cooking", "Mastering the Art of French Cooking", "Baking Basics"],
        "fiction": ["To Kill a Mockingbird", "1984", "The Great Gatsby"],
        "nonfiction": ["Sapiens", "Educated", "The Immortal Life of Henrietta Lacks"]
    };

    // Check if the selected book type has related books
    if (books[bookType]) {
        // Show the book names container
        bookNamesContainer.style.display = "block";

        // Populate the book names dropdown
        books[bookType].forEach(function(book) {
            var option = document.createElement("option");
            option.value = book;
            option.textContent = book;
            bookNamesSelect.appendChild(option);
        });
    } else {
        // Hide the book names container if no valid selection
        bookNamesContainer.style.display = "none";
    }
});

// JavaScript to handle form submission and show success message
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Perform form validation if necessary

    // Show the success message
    var successMessage = document.getElementById("successMessage");
    successMessage.style.display = "block";

    // Clear the form fields after successful submission (optional)
    this.reset();
});