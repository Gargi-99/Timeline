const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");

const head = document.querySelector(".head");

const content = {
    one: {
        image: "https://images.unsplash.com/photo-1456615913800-c33540eac399?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "2018: Inception",
        description: "The drone company was founded with a vision to revolutionize aerial technology."
    },
    two: {
        image: "https://images.unsplash.com/photo-1506947411487-a56738267384?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "2019: First Prototype",
        description: "The first drone prototype was developed, marking a significant milestone in the company’s journey."
    },
    three: {
        image: "https://images.unsplash.com/photo-1464798429116-8e26f96b2e60?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "2020: Initial Funding",
        description: "Secured initial seed funding, enabling further research and development."
    },
    four: {
        image: "https://5.imimg.com/data5/SELLER/Default/2022/5/ZU/WS/BH/125050093/ig-drones-micro-ppk-rtk-drone-for-survey-mapping-500x500.png",
        title: "2021: Product Launch",
        description: "Successfully launched the first consumer-grade drone, receiving positive market feedback."
    },
    five: {
        image: "https://images.unsplash.com/photo-1488519675504-de99aa605429?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "2022: Expansion",
        description: "Expanded operations globally, establishing partnerships in key markets."
    },
    six: {
        image: "https://images.unsplash.com/photo-1578269174936-2709b6aeb913?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "2023: Innovation Award",
        description: "Won a prestigious innovation award for cutting-edge drone technology."
    },
    seven: {
        image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "2024: New Horizons",
        description: "Introduced advanced AI-powered drones, setting new industry standards for performance and safety."
    }
};

function updateHead(step) {
    head.querySelector(".headimage img").src = content[step].image;
    head.querySelector(".head_1").innerHTML = content[step].title;
    head.querySelector(".head_2").innerHTML = content[step].description;
}

one.onclick = function() {
    updateHead('one');
    one.classList.add("active");
    two.classList.remove("active");
    three.classList.remove("active");
    four.classList.remove("active");
    five.classList.remove("active");
    six.classList.remove("active");
    seven.classList.remove("active");
}

two.onclick = function() {
    updateHead('two');
    one.classList.add("active");
    two.classList.add("active");
    three.classList.remove("active");
    four.classList.remove("active");
    five.classList.remove("active");
    six.classList.remove("active");
    seven.classList.remove("active");
}

three.onclick = function() {
    updateHead('three');
    one.classList.add("active");
    two.classList.add("active");
    three.classList.add("active");
    four.classList.remove("active");
    five.classList.remove("active");
    six.classList.remove("active");
    seven.classList.remove("active");
}

four.onclick = function() {
    updateHead('four');
    one.classList.add("active");
    two.classList.add("active");
    three.classList.add("active");
    four.classList.add("active");
    five.classList.remove("active");
    six.classList.remove("active");
    seven.classList.remove("active");
}

five.onclick = function() {
    updateHead('five');
    one.classList.add("active");
    two.classList.add("active");
    three.classList.add("active");
    four.classList.add("active");
    five.classList.add("active");
    six.classList.remove("active");
    seven.classList.remove("active");
}

six.onclick = function() {
    updateHead('six');
    one.classList.add("active");
    two.classList.add("active");
    three.classList.add("active");
    four.classList.add("active");
    five.classList.add("active");
    six.classList.add("active");
    seven.classList.remove("active");
}

seven.onclick = function() {
    updateHead('seven');
    one.classList.add("active");
    two.classList.add("active");
    three.classList.add("active");
    four.classList.add("active");
    five.classList.add("active");
    six.classList.add("active");
    seven.classList.add("active");
}
