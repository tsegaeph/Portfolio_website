document.addEventListener('DOMContentLoaded', (event) => {
    const textElements = document.getElementById('typewriter-text'); // Replace 'yourElementId' with the actual ID of your element

    let characterIndex = 0;
    let textIndex = 0;
    const texts = [
        "Designer",
        "Developer",
        "Software Engineer"
    ];
    const speed = 100;

    function typeWriter() {
        if (textElements && characterIndex < texts[textIndex].length) {
            textElements.innerHTML += texts[textIndex].charAt(characterIndex);
            characterIndex++;
            setTimeout(typeWriter, speed);
        } else {
            setTimeout(eraseText, 1000);
        }
    }

    function eraseText() {
        if (textElements && textElements.innerHTML.length > 0) {
            textElements.innerHTML = textElements.innerHTML.substring(0, textElements.innerHTML.length - 1);
            setTimeout(eraseText, speed);
        } else {
            textIndex = (textIndex + 1) % texts.length;
            characterIndex = 0;
            setTimeout(typeWriter, 1000);
        }
    }
    window.onload= typeWriter
});

function sendMessage() {
    const nameInput = document.getElementById("nameInput");
    const phoneInput = document.getElementById("numInput");
    const messageInput = document.getElementById("messageInput");
    const emailInput = document.getElementById("emailInput")
  
    let hasError = false;
  
    // Check if name is empty
    if (nameInput.value.trim() === "") {
      alert("Please enter your name.");
      hasError = true;
    }
  
    // Check if phone number is empty
    if (phoneInput.value.trim() === "") {
      alert("Please enter your phone number.");
      hasError = true;
    }

    // Check if email is empty
    if (emailInput.value.trim() === "") {
        alert("Please enter your email.");
        hasError = true;
    }
  
    // Check if message is empty
    if (messageInput.value.trim() === "") {
      alert("Please enter your message.");
      hasError = true;
    }
  
    // If no errors, send the message
    if (!hasError) {
      // Send the message (replace this with your actual sending logic)
      // ...
  
      alert("Message sent successfully!");
    }
  }
const menuIcon = document.querySelector('.menu-icon');
const mobileMenu = document.querySelector('.mobile-menu');

function toggleMenu() {
      menuIcon.classList.toggle('active');
      mobileMenu.classList.toggle('active');
    }
    let currentSlide = 0;

    function moveSlide(n) {
        const slides = document.querySelectorAll('.slide');
        const totalSlides = slides.length;
        currentSlide = (currentSlide + n + totalSlides) % totalSlides;
        document.querySelector('.slides').style.transform = `translateX(-${currentSlide * 100 / totalSlides}%)`;
    }
    
    document.querySelectorAll('.slide img').forEach(img => {
        img.addEventListener('click', () => {
            document.querySelectorAll('.slide img').forEach(i => i.classList.remove('enlarged'));
            img.classList.add('enlarged');
        });
    });