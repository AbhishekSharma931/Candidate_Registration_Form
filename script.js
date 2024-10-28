function togglePasswordVisibility(id) {
    const field = document.getElementById(id);
    field.type = field.type === "password" ? "text" : "password";
}

function copyAddress() {
    const isChecked = document.getElementById('sameAddress').checked;
    const fields = ["Address", "City", "Zip", "Country"];
    fields.forEach(field => {
        const permanentField = document.getElementById(`permanent${field}`);
        const currentField = document.getElementById(`current${field}`);
        currentField.value = isChecked ? permanentField.value : "";
    });
}

function showQualificationFields() {
    const qualification = document.getElementById("qualification").value;
    const educationFields = document.getElementById("educationFields");
    educationFields.innerHTML = "";  // Clear existing fields

    let fieldsHTML = "";
    if (qualification === "12th") {
        fieldsHTML += `<label for="schoolName">School Name:</label>
                       <input type="text" id="schoolName" name="schoolName" required>
                       <label for="marks">Marks:</label>
                       <input type="text" id="marks" name="marks" required>`;
    } else if (qualification === "Graduation") {
        fieldsHTML += `<label for="collegeName">College Name:</label>
                       <input type="text" id="collegeName" name="collegeName" required>
                       <label for="score">Score:</label>
                       <input type="text" id="score" name="score" required>
                       <label for="course">Course:</label>
                       <input type="text" id="course" name="course" required>`;
    } else if (qualification === "PostGraduation") {
        fieldsHTML += `<label for="pgCollegeName">College Name:</label>
                       <input type="text" id="pgCollegeName" name="pgCollegeName" required>
                       <label for="pgScore">Score:</label>
                       <input type="text" id="pgScore" name="pgScore" required>
                       <label for="pgCourse">Course:</label>
                       <input type="text" id="pgCourse" name="pgCourse" required>`;
    }
    educationFields.innerHTML = fieldsHTML;
}

function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission
    const formData = new FormData(document.getElementById("registrationForm"));
    const params = new URLSearchParams();

    // Convert form data to query string
    for (const [key, value] of formData.entries()) {
        params.append(key, value);
    }

    // Redirect to the submitted data page with parameters
    window.location.href = `submitted.html?${params.toString()}`;
}
