const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://res.cloudinary.com/dsqwjsrvi/image/upload/v1632836319/people/people3_acuxkf.jpg",
    text: "This is Susan and Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut sem in arcu mollis elementum in a nulla. ",
  },
  {
    id: 2,
    name: "anna jonson",
    job: "web designer",
    img: "https://res.cloudinary.com/dsqwjsrvi/image/upload/v1632847566/people/people4_copy_uaotvb.jpg",
    text: "This is Anna and Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut sem in arcu mollis elementum in a nulla. ",
  },
  {
    id: 3,
    name: "teri dactyl",
    job: "graphic designer",
    img: "https://res.cloudinary.com/dsqwjsrvi/image/upload/v1632836319/people/people5_i2jvxl.jpg",
    text: "This is Teri and Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut sem in arcu mollis elementum in a nulla. ",
  },
  {
    id: 4,
    name: "rita book",
    job: "ux researcher",
    img: "https://res.cloudinary.com/dsqwjsrvi/image/upload/v1632836286/people/people2_bpvwuc.jpg",
    text: "This is Rita and Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut sem in arcu mollis elementum in a nulla. ",
  },
  {
    id: 5,
    name: "chris anthemum",
    job: "front-end developer",
    img: "https://res.cloudinary.com/dsqwjsrvi/image/upload/v1632836287/people/people1_mekbwk.jpg",
    text: "This is Chris and Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut sem in arcu mollis elementum in a nulla. ",
  },
  {
    id: 6,
    name: "ray sin",
    job: "graphic designer",
    img: "https://res.cloudinary.com/dsqwjsrvi/image/upload/v1632847565/people/people7_copy_mn1dmp.jpg",
    text: "This is Ray and Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut sem in arcu mollis elementum in a nulla. ",
  },
  {
    id: 7,
    name: "daniel smith",
    job: "software engineer",
    img: "https://res.cloudinary.com/dsqwjsrvi/image/upload/v1632847565/people/people6_copy_yivqrj.jpg",
    text: "This is Ray and Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut sem in arcu mollis elementum in a nulla. ",
  },
];

// select items
let reviwerImage = document.querySelector(".reviwer-img");
let reviwerName = document.querySelector(".name");
let reviwerJob = document.querySelector(".job");
let reviwerText = document.querySelector(".text");

const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");
const randomButton = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", () => {
  showPreson(currentItem);
});

const showPreson = (person) => {
  const item = reviews[person];
  reviwerImage.src = item.img;
  reviwerName.textContent = item.name;
  reviwerJob.textContent = item.job;
  reviwerText.textContent = item.text;
};

// show next person
nextButton.addEventListener("click", () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPreson(currentItem);
});

// show prev person
prevButton.addEventListener("click", () => {
  if (currentItem === 0) {
    currentItem = reviews.length;
  }
  currentItem--;
  showPreson(currentItem);
});

// show random person

const randomItem = (max) => {
  return Math.floor(Math.random() * max);
};

randomButton.addEventListener("click", () => {
  currentItem = randomItem(reviews.length);
  showPreson(currentItem);
});
