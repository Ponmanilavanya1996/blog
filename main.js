const BLOGS = [
  {
    id:1,
    title: "Victoria Togoe",
    intro: "A Liberian editorial and beauty model currently located in the DMV (DC, Maryland & Virginia) area.",
    description:"I’m often asked “how did you start modeling? “ and the simple answer is God. When I go to God asking questions I’m often surprised by the answers given to me. One of my questions to God at the end of 2019 was “what’s next for me”? The answer was astonishingly modeling. After taking 1 picture (my Grace Jones inspired shoot) I felt like I had finally found my niche. My life accelerated so fast and I’ve had the absolute privilege of working with some amazing humans. But after all the hard work I put into my modeling and my Instagram “Portfolio” my account was unfortunately deleted in September of 2021. So after a whole year later I decided to make a website. Something that’ll be “mine forever”. Yes I know , what took me so long ? Well, if you don’t know, adversity and I are not friends and I’ve suffered from MDD since I was 19 (I’m 28 by the way ) and so I battle a lot with myself.But my passion for helping humans , taking pictures and the fascination for the human mind will always triumph. If I’m not writing then I’m thinking of ways to be used by God. I want this website to reflect that. I pray and hope this website brings a smile to your face as it has for me.",
    date: new Date(),
    image: 
    "https://images.pexels.com/photos/1559086/pexels-photo-1559086.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id:2,
    title: "Camila Coelho",
    intro: "Camila Coelho (born c. 1988) is a Brazilian-American fashion and beauty YouTube and internet personality.",
    description:"As an entrepreneur, she is the founder of two brands. Her namesake fashion label, Camila Coelho Collection, retails through e-retailer Revolve, and her beauty brand Elaluz retails direct-to-consumer and through nationwide U.S. beauty retailer Ulta Beauty. Together, both businesses generated more than $10 million during the year 2021.Following a photo taken during Paris Fashion Week in March 2023, British, Australian and U.S. media criticized Coelho for holding her baby son close to her hotel's balcony.Coelho attended the Met Gala in 2019 with Diane von Furstenberg, becoming one of the first digital creators to attend the event. The trilingual Coelho who speaks in English, Portuguese and Spanish, was called a Top 100 Latina Powerhouse by Hola! Magazine in 2021. Forbes named Coelho as one of the Top 30 Content Creators in 2022, the same year that Bloomberg Linea titled her as one of th.",
    date: new Date(),
    image: 
    "https://images.pexels.com/photos/1125328/pexels-photo-1125328.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id:3,
    title: "Emanuela de Paula",
    intro: "Models travel all around the world for work, but few have documented the journey as richly as model-photographer Emanuela de Paula.",
    description:"Models travel all around the world for work, but few have documented the journey as richly as model-photographer Emanuela de Paula. Her addictive blog, Manu by Manu, takes the travel diary format and gives it a lifestyle twist. There are immersive destination posts, where De Paula’s images of Portofino or Córdoba are allowed to shine in large format, and personal style advice via some artfully shot self-portraits. Every so often De Paula even focuses her lens on a mouthwatering meal, but the best part may be her descriptions: Delivered in English and Portuguese, they detail the meaning behind each moment.",
    date: new Date(),
    image: 
    "https://images.pexels.com/photos/4124201/pexels-photo-4124201.jpeg?auto=compress&cs=tinysrgb&w=600",
  }
];




const blogsContainer = document.getElementById("blogs-container");

const addBlogTile = ({id, date,title,intro}) => {
    const blog=document.createElement("div");
    blog.className = "w-full md:w-[45%]";
    blog.innerHTML = ` 
     <p class="text-gray-500 text-sm">${date}</p>
     <h3 class="mt-1 text-lg font-semibold">${title}</h3>
     <p class="mt-3 text-gray-500">
       ${intro}
    </p> 
    <button onclick="showBlogDetails(${id})" id="${id}"class="mt-4 text-blue-500 hover:text-blue-700 cursor-pointer">
    Read full story
    </button>
    `;
    blogsContainer.append(blog);

};

BLOGS.forEach((blog) => {
  addBlogTile(blog);
});


const showBlogDetails = (id) => {
 const blogDetails = document.getElementById("blog-details");
 blogDetails.className = blogDetails.className.replace("hidden","visible");

 const blog = BLOGS.find((b) => b.id ==id);

 const title = document.getElementById("blog-details--title");
 const image = document.getElementById("blog-details--image");
 const intro = document.getElementById("blog-details--intro");
 const description = document.getElementById("blog-details--description");

 title.innerText = blog.title;
 image.src = blog.image;
 intro.innerText = blog.intro;
 description.innerText = blog.description;

 
 

};

const addBlog = () => {
  
  const title = document.getElementById("create-blog-form--title-input");
 const image = document.getElementById("create-blog-form--intro-input");
 const intro = document.getElementById("create-blog-form--description-input");
 const description = document.getElementById("create-blog-form--image-input");

 const blog = {id: BLOGS.length + 1,date:new Date(),
  title: title.value,
  intro:intro.value,
  description:description.value,
  image:image.value,
};
 BLOGS.push(blog);
 addBlogTile(blog);
 



};