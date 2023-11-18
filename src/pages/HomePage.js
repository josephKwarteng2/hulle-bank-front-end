import SideNav from "../components/SideNav/SideNav";
import TopNav from "../components/TopNav/TopNav";
import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <TopNav />
      <SideNav />
      <div className="home-page">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque
        tenetur quis aperiam obcaecati. Dolorem nobis esse sequi exercitationem,
        mollitia sed saepe officia quia numquam voluptatem? Possimus
        perspiciatis impedit delectus corrupti?
      </div>
    </>
  );
};

export default HomePage;
