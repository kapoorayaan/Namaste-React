import { useState } from "react";

const Section = ({ title, description, isVisible, setisVisible }) => {
  return (
    <div className="border border-black m-2 p-2">
      <h2 className="font bold text-xl">{title}</h2>
      {isVisible ? (
        <>
          {" "}
          <button
            className="font bold underline cursor-pointer"
            onClick={() => {
              setisVisible(false);
            }}
          >
            Hide
          </button>
          <p>{description}</p>
        </>
      ) : (
        <button
          className="font bold underline cursor-pointer"
          onClick={() => {
            setisVisible(true);
          }}
        >
          Show
        </button>
      )}
    </div>
  );
};

const InstaMart = () => {
  const [visibleSection, setvisibleSection] = useState();
  return (
    <div>
      <h1 className="font bold text-3xl p-2 m-2 "> InstaMart</h1>
      <Section
        title={"About Instamart"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quos temporibus repudiandae minus quae non error quaerat voluptates quas, cLorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quos temporibus repudiandae minus quae non error quaerat voluptates quas, commodiLorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quos temporibus repudiandae minus quae non error quaerat voluptates quas, commodiommodi veniam, quasi magnam? Earum sint illo quae eligendi excepturi provident"
        }
        isVisible={visibleSection == "about"}
        setisVisible={() => setvisibleSection("about")}
      />
      <Section
        title={"Buy from Instamart"}
        description={
          "Lorem ipsum dolor sit ametLorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quos temporibus repudiandae minus quae non error quaerat voluptates quas, commodiLorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quos temporibus repudiandae minus quae non error quaerat voluptates quas, commodiLorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quos temporibus repudiandae minus quae non error quaerat voluptates quas, commodi consectetur adipisicing elit. Reprehenderit, quos temporibus repudiandae minus quae non error quaerat voluptates quas, commodi veniam, quasi magnam? Earum sint illo quae eligendi excepturi provident"
        }
        isVisible={visibleSection == "buy"}
        setisVisible={() => setvisibleSection("buy")}
      />
      <Section
        title={"Career Instamart"}
        description={
          "Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quos temporibus repudiandae minus quae non error quaerat voluptates quas, commodiLorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quos temporibus repudiandae minus quae non error quaerat voluptates quas, commodisit amet consectetur adipisicing elit. Reprehenderit, quos temporibus repudiandae minus quae non error quaerat voluptates quas, commodi veniam, quasi magnam? Earum sint illo quae eligendi excepturi provident"
        }
        isVisible={visibleSection == "career"}
        setisVisible={() => setvisibleSection("career")}
      />
    </div>
  );
};
export default InstaMart;
