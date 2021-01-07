const reviews = [{
        id: 1,
        name: "З Түвшинтөгс",
        job: "web developer",
        img: "https://scontent.fuln1-1.fna.fbcdn.net/v/t1.0-9/131889404_1382916378725410_7506458766817386658_o.jpg?_nc_cat=109&ccb=2&_nc_sid=174925&_nc_ohc=NRb2cy6P1mQAX_jh6hC&_nc_ht=scontent.fuln1-1.fna&oh=ce4f4d4ee79e5ab55b15690b174ac999&oe=601C128F",
        text: "Маш чадварлаг хөгжүүлэгч ui ux - 2 ланг үнэхээр өндөр түвшинд эзэмшсэн. Html Css Javascript болон бусад framwork уудыг өндөр түвшинд ашигладаг Англи хэлэндээ их мундаг ",
    },
    {
        id: 2,
        name: "Б Тунгалагтамир",
        job: "UI designer",
        img: "https://scontent.fuln1-1.fna.fbcdn.net/v/t1.0-9/81357147_998774117160268_5998410441523462144_n.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=AP-z1zv1FqwAX8V9Nsh&_nc_ht=scontent.fuln1-1.fna&oh=ab0574e5ab30fad708a7c80450060d34&oe=601BF2C5",
        text: "Ирээдүйд Full Stack хөгжүүлэгч болно гэдэгт итгэж байна. Ахлах сургуульдаа хичээлдээ сайн ялангуяа математик даа их мундаг. Одоогоод SE суралцдаг. ",
    },
    {
        id: 3,
        name: "peter jones",
        job: "intern",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
];

const img = document.getElementById("person-img");

const author = document.getElementById("author");

const job = document.getElementById("job");

const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const rndBtn = document.querySelector(".random-btn");


let currentItem = 0;

window.addEventListener("DOMContentLoaded", function() {
    console.log("ssss");

    showPerson(currentItem);
})

function showPerson(person) {
    console.log(person)
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}
prevBtn.addEventListener('click', function() {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
})
nextBtn.addEventListener('click', function() {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;

    }
    showPerson(currentItem);
})
rndBtn.addEventListener('click', function() {
    if (currentItem < reviews.length) {
        currentItem = Math.floor(Math.random() * reviews.length);
        showPerson(currentItem);
    }
})