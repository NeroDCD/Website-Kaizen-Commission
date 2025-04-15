// AOS Initialization
AOS.init();

// ---- FOOTER SCRIPTS -------//
// Dynamic Year
document.getElementById("year").textContent = new Date().getFullYear();

// ---- LOGIN AND CREATE ACCOUNT SCRIPTS -------//
function togglePassword() {
  const passwordInput = document.getElementById("password");
  const eyeIcon = document.getElementById("eyeIcon");

  const isVisible = passwordInput.type === "text";
  passwordInput.type = isVisible ? "password" : "text"; 

  eyeIcon.src = isVisible ? "Assets/eye.svg" : "Assets/eye-slash.svg";
  eyeIcon.alt = isVisible ? "Show Password" : "Hide Password";
}


// Create Account Page
function toggleCreateAccountPassword(inputId, eyeIconId) {
  const passwordInput = document.getElementById(inputId);
  const eyeIcon = document.getElementById(eyeIconId);

  const isVisible = passwordInput.type === "text";

  passwordInput.type = isVisible ? "password" : "text";

  eyeIcon.src = isVisible ? "Assets/eye.svg" : "Assets/eye-slash.svg";
  eyeIcon.alt = isVisible ? "Show Password" : "Hide Password";
}


// ---- CONTACT SCRIPTS -------//

// WhatsApp Button – Para ma copy sa clipboard
function copyWhatsAppNumber(e, el) {
  e.preventDefault();
  const number = "+63 912 345 6789";
  navigator.clipboard.writeText(number).then(() => {
    const tooltip = el.parentElement.querySelector(".copy-tooltip");
    tooltip.textContent = "Number copied to clipboard";
    el.parentElement.classList.add("show-tooltip");
    setTimeout(() => {
      el.parentElement.classList.remove("show-tooltip");
    }, 2000);
  });
}

// ---- BLOG PAGE-------//

// Sorting - Dates
document.addEventListener("DOMContentLoaded", function () {
  const blogSections = document.querySelectorAll(".blog-posts");

  function sortAllBlogPages(order = "desc") {
    blogSections.forEach((section) => {
      const posts = Array.from(section.getElementsByClassName("blog-post"));

      const sorted = posts.sort((a, b) => {
        const dateA = new Date(a.getAttribute("data-date"));
        const dateB = new Date(b.getAttribute("data-date"));
        return order === "asc" ? dateA - dateB : dateB - dateA;
      });

      section.innerHTML = "";
      sorted.forEach((post) => section.appendChild(post));
    });
  }

  document.getElementById("sortRecent").addEventListener("click", function (e) {
    e.preventDefault();
    sortAllBlogPages("desc"); // Most Recent
  });

  document.getElementById("sortOldest").addEventListener("click", function (e) {
    e.preventDefault();
    sortAllBlogPages("asc"); // Oldest
  });

  // Optional: sort by default on load
  sortAllBlogPages("desc");
});

// Pagination Function
document.addEventListener("DOMContentLoaded", function () {
  let currentPage = 1;
  const totalPages = 3; // Set total number of pages

  function showPage(pageNumber) {
    // Hide all pages
    const pages = document.querySelectorAll('[id^="blogPage"]');
    pages.forEach((page) => {
      page.classList.add("d-none");
    });

    // Show the selected page
    const pageToShow = document.getElementById(`blogPage${pageNumber}`);
    if (pageToShow) {
      pageToShow.classList.remove("d-none");
    }

    // Update active page in pagination
    const activePage = document.querySelector(".page-item.active");
    if (activePage) {
      activePage.classList.remove("active");
    }

    // Set the clicked page as active
    const pageLink = document.getElementById(`page${pageNumber}`);
    if (pageLink) {
      pageLink.parentElement.classList.add("active");
    }

    // Disable the "Previous" and "Next" buttons based on the current page
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    if (currentPage === 1) {
      prevBtn.classList.add("disabled");
    } else {
      prevBtn.classList.remove("disabled");
    }

    if (currentPage === totalPages) {
      nextBtn.classList.add("disabled");
    } else {
      nextBtn.classList.remove("disabled");
    }
  }

  // Handle page click
  document.querySelectorAll(".page-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent the default behavior (link jumping)

      const clickedPage = e.target.id.replace("page", "");
      if (clickedPage) {
        currentPage = parseInt(clickedPage);
      }

      // Show the selected page
      showPage(currentPage);
    });
  });

  // Handle "Previous" button click
  const prevBtn = document.getElementById("prevBtn");
  prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      showPage(currentPage);
    }
  });

  // Handle "Next" button click
  const nextBtn = document.getElementById("nextBtn");
  nextBtn.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      showPage(currentPage);
    }
  });

  // Show the first page on load
  showPage(currentPage);
});

// Temporary Data
document.addEventListener("DOMContentLoaded", function () {
  // Array of data for each page
  const cardsDataPage1 = [
    {
      imageSrc:
        "https://www.tamiya.com/cms/images/stories/newstopics/2025/01/15spiel/top_955_500.jpg",
      badgeText: "04/13/2025",
      titleText:
        "Tamiya models receive awards from prestigious German magazines!"
    },
    {
      imageSrc:
        "https://www.tamiya.com/cms/images/stories/newstopics/2024/09/03hs_info/62_poster_707_1000.jpg",
      badgeText: "04/12/2025",
      titleText: "Tamiya at the All Japan Model & Hobby Show 2024"
    },
    {
      imageSrc:
        "https://cinemabravo.com/wp-content/uploads/2024/11/the-brickyard-tamiya.png?w=1024",
      badgeText: "04/11/2025",
      titleText: "Tamiya Mini 4WD is hot in the Philippines"
    },
    {
      imageSrc:
        "https://www.tamiya.com/cms/images/stories/newstopics/2025/01/15spiel/messe2025_955_500_04.jpg",
      badgeText: "04/10/2025",
      titleText: "Items on Display in the Tamiya Booth at Spielwarenmesse 2025"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1659107387845-fb760cd4a811?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      badgeText: "04/09/2025",
      titleText: "Tamiya unveils new RC car kit"
    },
    {
      imageSrc:
        "https://www.tamiyausa.com/media/CACHE/images/products/ferrari-f50-none-1-6df9/b9fb6dc63be45d8e40039ce7df258e28.jpg",
      badgeText: "04/08/2025",
      titleText: "New Ferrari model launched by Tamiya"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/2/24027/24027_1.jpg",
      badgeText: "04/07/2025",
      titleText: "Tamiya announces new racecar model"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/japan_contents/img/usr/item/1/16042/16042_1.jpg",
      badgeText: "04/06/2025",
      titleText: "New Bike Model Released by Tamiya"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/cms/img/usr/item/3/35389/35389_1.jpg",
      badgeText: "04/05/2025",
      titleText: "Tamiya releases new limited-edition model"
    }
  ];

  const cardsDataPage2 = [
    {
      imageSrc:
        "https://www.tamiyausa.com/media/CACHE/images/post_content/dukwho-race-nght-5-16-2024-p4-5536/80778d2b23839e8c3804ae7e601e038b.jpg",
      badgeText: "04/04/2025",
      titleText: "Tamiya unveils new model for 2025"
    },
    {
      imageSrc:
        "https://d7z22c0gz59ng.cloudfront.net/japan_contents/img/usr/item/1/19024/19024_1_02.jpg",
      badgeText: "04/03/2025",
      titleText: "New RC car release by Tamiya"
    },
    {
      imageSrc: "https://www.tamiya.com/cms/img/usr/item/9/95676/95676_1.jpg",
      badgeText: "04/02/2025",
      titleText: "New Scale Model Collection Launched"
    },
    {
      imageSrc:
        "https://www.tamiyausa.com/media/CACHE/images/post_content/japan-cup-f09b/0e8a062e7a88731e9a8b76311521a504.jpg",
      badgeText: "04/01/2025",
      titleText: "Remembering Great Cross Circuit 2017"
    },
    {
      imageSrc:
        "https://www.tamiyausa.com/media/CACHE/images/post_content/img-5085-2-c393/73caeb9c513ea2d170ffa8070d8759f0.jpg",
      badgeText: "03/31/2025",
      titleText: "Tamiya announces new competition models"
    },
    {
      imageSrc:
        "https://www.tamiyausa.com/media/CACHE/images/post_content/dukwho-race-nght-5-16-2024-vs-winner-dc15/d5ff91c0deba92120fe9665bafd02d88.jpg",
      badgeText: "03/30/2025",
      titleText: "Vintage Tamiya models return"
    },
    {
      imageSrc:
        "https://www.tamiyausa.com/media/CACHE/images/post_content/dukwho-race-nght-5-16-2024-p3-3da1/85e7b671974acaecc99fd072a447c9cb.jpg",
      badgeText: "03/29/2025",
      titleText: "The Best Tamiya models of the decade"
    },
    {
      imageSrc:
        "https://www.tamiyausa.com/media/CACHE/images/post_content/dukwho-race-nght-5-16-2024-p11-9958/cf1cfdd4c71395c871dcd9c3b805e8f9.jpg",
      badgeText: "03/28/2025",
      titleText: "Tamiya hits record sales in Europe"
    },
    {
      imageSrc:
        "https://www.tamiyausa.com/media/CACHE/images/post_content/dukwho-race-nght-5-16-2024-p7-41f2/0a428abe916b649fbdae3f3a722005d4.jpg",
      badgeText: "03/27/2025",
      titleText: "Tamiya celebrates 50 years of modeling"
    }
  ];

  const cardsDataPage3 = [
    {
      imageSrc:
        "https://www.tamiyausa.com/media/CACHE/images/post_content/dukwho-race-nght-5-16-2024-p5-2494/c42617e8519e7a8fb954fb12f5f12b78.jpg",
      badgeText: "03/26/2025",
      titleText: "Tamiya launches 2025 Mini 4WD kit"
    },
    {
      imageSrc:
        "https://www.tamiyausa.com/media/CACHE/images/post_content/dukwho-race-nght-5-16-2024-p14-dab4/99f27d189ebd88c5d93cb99167a56e6d.jpg",
      badgeText: "03/25/2025",
      titleText: "Dukwho Workshop Mini 4WD Race Report"
    },
    {
      imageSrc:
        "https://www.tamiyausa.com/media/CACHE/images/post_content/dukwho-race-nght-5-16-2024-p8-2b99/8180aa01c45007898bf530cb566f1a43.jpg",
      badgeText: "03/24/2025",
      titleText: "New RC truck kits available for preorder"
    },
    {
      imageSrc:
        "https://www.tamiyausa.com/media/CACHE/images/post_content/dukwho-race-nght-5-16-2024-p16-cf8c/b0171c813fd87f2096022ef6321a640d.jpg",
      badgeText: "03/23/2025",
      titleText: "Exclusive Tamiya model kit collection"
    },
    {
      imageSrc:
        "https://www.tamiyausa.com/media/CACHE/images/post_content/dukwho-race-nght-5-16-2024-p15-7cc3/1a1288c487707edcae3cc700c1c1fda1.jpg",
      badgeText: "03/22/2025",
      titleText: "Tamiya’s most anticipated models of 2025"
    },
    {
      imageSrc:
        "https://www.tamiyausa.com/media/CACHE/images/post_content/dukwho-race-nght-5-16-2024-p18-14d6/48d4dd706a0ff30193e8f4ae92a16872.jpg",
      badgeText: "03/21/2025",
      titleText: "Tamiya 4WD racing kits ready for release"
    },
    {
      imageSrc:
        "https://www.tamiyausa.com/media/CACHE/images/post_content/dukwho-race-nght-5-16-2024-basic-winner-a4e4/42909d8476236477391be2ada97769fe.jpg",
      badgeText: "03/20/2025",
      titleText: "New limited-edition 2025"
    },
    {
      imageSrc:
        "https://www.tamiyausa.com/media/CACHE/images/post_content/dukwho-race-nght-5-16-2024-p17-875e/8aba71a32316c895e71183df0143230d.jpg",
      badgeText: "03/19/2025",
      titleText: "Tamiya vintage models restocked"
    },
    {
      imageSrc:
        "https://www.tamiyausa.com/media/CACHE/images/post_content/dukwho-race-nght-5-16-2024-p23-ed80/3592088e54cbbeed2774a3efeee66acb.jpg",
      badgeText: "03/18/2025",
      titleText: "Tamiya’s 2025 model lineup announced"
    }
  ];

  // Function to populate cards for a specific page
  function populateCards(pageId, cardsData) {
    const cardElements = document.querySelectorAll(`#${pageId} .blog-post`);

    cardElements.forEach((card, index) => {
      if (cardsData[index]) {
        const cardData = cardsData[index];
        const imgElement = card.querySelector(".card-img-top");
        imgElement.src = cardData.imageSrc;

        const badgeElement = card.querySelector(".badge");
        badgeElement.textContent = cardData.badgeText;

        const titleElement = card.querySelector(".card-title");
        titleElement.textContent = cardData.titleText;
      }
    });
  }

  // Populate the cards for each page
  populateCards("blogPage1", cardsDataPage1);
  populateCards("blogPage2", cardsDataPage2);
  populateCards("blogPage3", cardsDataPage3);
});

// ---- CONTACT PAGE-------//
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents form submission
  });
