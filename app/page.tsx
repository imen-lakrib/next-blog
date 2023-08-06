import Feed from "@components/Feed";
import CategoryCart from "@components/CategoryCart";
const Home = () => {
  return (
    <section className="w-full flex-center flex-col mt-12">
      <div className="sub_head_text"> Welcome to Next Blog</div>
      <div className="w-4/5">
        <h1 className=" head_text text-center">
          Being <span className="blue_gradient">Unique</span> is better than
          being <span className="blue_gradient">Erfect</span>
        </h1>
      </div>
      <div>
        categories card
        <CategoryCart />
      </div>
      <Feed />
    </section>
  );
};

export default Home;
