import WorkCard from "./WorkCard";
import keeper from "../images/keeper.png";
import portfolio from "../images/portfolio.png";
import blog from "../images/blog.png"
import nftMint from "../images/nft-mint.png"
// import work3 from "../images/work-0.png";

export default function Works() {
  return (
    <div id="portfolio">
      <div className="container">
        <h1 className="sub-title">My Works</h1>
        <div className="work-list">
          <WorkCard
            image={nftMint}
            title="NFT Mint App"
            content="Unlock the world of digital art ownership by minting, showcasing, and trading your NFT masterpieces."
            url="https://dhruv-nft-mint.netlify.app/"
          />
          <WorkCard
            image={blog}
            title="Blog Website"
            content="User-authenticated blog website: Share your thoughts, connect with readers, and build a thriving online community."
            url="https://dhruv-mern-blog.netlify.app/"
          />
          <WorkCard
            image={keeper}
            title="Keeper App"
            content="A note keeper app designed for you, where you can add , delete and track your notes according to your preferences."
            url="https://dhruvkapri-keeper.netlify.app/"
          />
          <WorkCard
            image={portfolio}
            title="Portfolio Website"
            content="Personal portfolio website describing the various parts and stages of the development of professional persona."
            url="https://dhruvkapri-portfolio.netlify.app/"
          />
          
          
        </div>
        <a href="/" className="btn">
          See more
        </a>
      </div>
    </div>
  );
}
